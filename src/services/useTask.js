import react, { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  doc,
  getFirestore,
  where,
  query,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore";
import { useAuth } from "./useAuth";

const db = getFirestore();

const taskContext = createContext(null);

export function useTask() {
  return useContext(taskContext);
}

export function TaskContextProvider({ children }) {
  const task = useTaskProvider();
  return <taskContext.Provider value={task}>{children}</taskContext.Provider>;
}

const fs = ":::::::::::::::::::Firestore fetch:::::::::::::::::::::";

function useTaskProvider() {
  const user = useAuth().user;
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [reloadTaskFlag, setReloadTaskFlag] = useState(false);

  useEffect(() => {
    async function getProjects() {
      if (user) {
        console.log(fs, "projects");
        const q = query(
          collection(db, "projects"),
          where("uid", "==", user.uid)
        );

        const snap = await getDocs(q);
        const _projects = [];
        snap.forEach((value) => {
          _projects.push({ ...value.data(), id: value.id });
        });

        setProjects(_projects);
        const _currentProject = _projects.find(
          (value) => value.title == "INBOX"
        );
        setCurrentProject(_currentProject.id);
      }
    }

    getProjects();
    return () => {};
  }, [user]);

  useEffect(() => {
    async function _getTasks() {
      if (user && currentProject !== null) {
        console.log(fs, "tasks");
        const q = query(collection(db, "projects", currentProject, "tasks"));

        const snap = await getDocs(q);

        const _tasks = [];
        snap.forEach((value) => {
          _tasks.push({ ...value.data(), id: value.id });
        });

        setTasks(_tasks);
      }
    }

    _getTasks();
    return () => {};
  }, [user, currentProject, reloadTaskFlag]);

  async function addTask(_newTask) {
    if (user) {
      const taskRef = collection(db, "projects", currentProject, "tasks");
      const newTask = await addDoc(taskRef, {
        ..._newTask,
      });
      setReloadTaskFlag(!reloadTaskFlag);
      return newTask.id;
    }
  }

  async function updateTask(taskId, updatedTask) {
    if (user) {
      const taskRef = doc(db, "projects", currentProject, "tasks", taskId);
      const updateRef = await updateDoc(taskRef, {
        ...updatedTask,
        timestamp: serverTimestamp(),
      });
      setReloadTaskFlag(!reloadTaskFlag);
    } else {
      console.log("user not logged in", "update");
    }
  }

  async function deleteTask(taskId) {
    if (user && taskId) {
      const taskRef = doc(db, "projects", currentProject, "tasks", taskId);
      const deleteRef = await deleteDoc(taskRef);
      setReloadTaskFlag(!reloadTaskFlag);
    } else {
      console.log("user not logged in ", "delete ");
    }
  }

  async function addProject(title, description) {
    if (user) {
      const _project = {
        title,
        description,
        timestamp: serverTimestamp(),
      };
      const projectRef = collection(db, "projects");
      const newProject = await addDoc(projectRef, { _project });
      return newProject.id;
    } else {
      console.log("user not logged in", "project add ");
    }
  }

  async function deleteProject(projectId) {
    if (user && projectId && projectId !== currentProject) {
      const projectRef = doc(db, "projects", projectId);
      const q = query(collection(db, "projects", projectId, "tasks"));
      const _tasks = await getDoc(q);
      _tasks.forEach(async (value) => {
        await deleteDoc(doc("projects", projectId, "tasks", value.id));
      });
      await deleteDoc(projectRef);
      return;
    } else {
      console.log("user not logged in", "delete project ");
    }
  }

  async function updateProject(updatedProject) {
    if (user) {
      const projectRef = doc(db, "projects", currentProject);
      const updateRef = await updateDoc(projectRef, {
        ...updatedProject,
        timestamp: serverTimestamp(),
      });
      return updateRef.id;
    } else {
      console.log("user not logged in", "update project");
    }
  }

  async function getTasks() {}

  return {
    tasks,
    projects,
    addTask,
    updateTask,
    deleteTask,
    addProject,
    deleteProject,
    updateProject,
    getTasks,
  };
}
