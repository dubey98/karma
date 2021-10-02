import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  doc,
  getFirestore,
  where,
  query,
  getDocs,
  addDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
  collectionGroup,
} from "firebase/firestore";
import { useAuth } from "./useAuth";
import * as gC from "../Constants/constants";
import * as gF from "./../Constants/gFunctions";

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
  const reloadDelay = 1;

  const auth = useAuth();
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [reloadTaskFlag, setReloadTaskFlag] = useState(false);
  const [reloadProjects, setReloadProjects] = useState(false);
  const [defaultProjects, setDefaultProjects] = useState([]);
  const [reloadDefaultTasks, setReloadDefaultTasks] = useState(false);
  const [defaultProjectId, setDefaultProjectId] = useState(null);

  useEffect(() => {
    let timer = null;
    async function getProjects() {
      if (auth.user) {
        console.log(fs, "projects");

        const defaultProjectQuery = query(doc(db, "users", auth.user.uid));

        let snap = await getDoc(defaultProjectQuery);
        if (snap.exists()) {
          const _defaultProjectId = snap.data().defaultProjectId;
          setDefaultProjectId(_defaultProjectId);
          const q = query(
            collection(db, "projects"),
            where("uid", "==", auth.user.uid),
            where("archived", "==", false)
          );
          snap = await getDocs(q);

          // set projects and current project
          const _projects = [];
          const _defaultProjects = [];
          snap.forEach((value) => {
            if (value.id === _defaultProjectId.trim()) {
              // console.log("adding project to default ones", value.id);
              _defaultProjects.push({ ...value.data(), id: value.id });
            } else {
              // console.log("adding normal projects", value.id);
              _projects.push({ ...value.data(), id: value.id });
            }
          });

          setProjects(_projects);
          setDefaultProjects(_defaultProjects);
          setCurrentProject(_defaultProjectId.trim());
        } else {
          console.log("setting the timer to reload");
          timer = setTimeout(
            () => setReloadProjects(!reloadProjects),
            reloadDelay * 1000
          );
        }
      } else {
        setProjects([]);
        setDefaultProjects([]);
        setCurrentProject(null);
      }
    }

    getProjects();
    return () => {
      console.log("clearing the timeer");
      clearInterval(timer);
    };
  }, [auth.user, reloadProjects]);

  useEffect(() => {
    async function _getTasks() {
      if (auth.user && currentProject) {
        console.log(fs, "tasks");
        if (
          gC.defaultProjectIds.find((projectId) => currentProject === projectId)
        ) {
          setTasks([]);
          setReloadDefaultTasks((reloadDefaultTasks) => !reloadDefaultTasks);
        } else {
          const q = query(
            collection(db, "projects", currentProject, "tasks"),
            where("archived", "==", false),
            where("completed", "==", false)
          );
          const snap = await getDocs(q);

          const _tasks = [];
          snap.forEach((value) => {
            const _task = { ...value.data(), id: value.id };
            _task.dueDate = _task.dueDate.toDate();
            _tasks.push(_task);
          });

          setTasks(_tasks);
        }
      } else {
        setTasks([]);
      }
    }

    _getTasks();
    return () => {};
  }, [auth.user, currentProject, reloadTaskFlag]);

  useEffect(() => {
    async function _getTasks() {
      if (gC.defaultProjectIds.find((pId) => pId === currentProject)) {
        const q =
          currentProject.toString() === "0"
            ? query(
                collectionGroup(db, "tasks"),
                where("uid", "==", auth.user.uid),
                where("archived", "==", false),
                where("completed", "==", false),
                where("dueDate", ">", new Date(gF.getPrevDayTimeStamp())),
                where("dueDate", "<", new Date(gF.getNextDayTimeStamp()))
              )
            : query(
                collectionGroup(db, "tasks"),
                where("uid", "==", auth.user.uid),
                where("archived", "==", false),
                where("completed", "==", false),
                where("dueDate", ">", new Date(gF.getPrevDayTimeStamp()))
              );

        const _tasks = [];
        const snapShot = await getDocs(q);
        snapShot.forEach((value) => {
          const _task = { ...value.data(), id: value.id };
          _task.dueDate = _task.dueDate.toDate();
          _tasks.push(_task);
        });
        setTasks(_tasks);
      }
    }

    _getTasks();

    return () => {};
  }, [auth.user, reloadDefaultTasks, currentProject]);

  async function addTask(_newTask) {
    if (auth.user && _newTask) {
      console.log(_newTask);
      _newTask.dueDate = new Date(_newTask.dueDate) || null;
      _newTask.uid = auth.user.uid;
      _newTask.archived = false;
      let project = currentProject;
      gC.defaultProjectIds.forEach((pId) => {
        if (currentProject.toString().trim() === pId.toString().trim()) {
          project = defaultProjectId;
        }
      });

      const taskRef = collection(db, "projects", project, "tasks");

      const newTask = await addDoc(taskRef, {
        ..._newTask,
      });
      setReloadTaskFlag(!reloadTaskFlag);
      return newTask.id;
    }
  }

  async function updateTask(taskId, updatedTask) {
    if (auth.user) {
      const taskRef = doc(db, "projects", currentProject, "tasks", taskId);
      await updateDoc(taskRef, {
        ...updatedTask,
        timestamp: serverTimestamp(),
      });
      setReloadTaskFlag(!reloadTaskFlag);
    } else {
      console.log("user not logged in", "update");
    }
  }

  async function deleteTask(taskId) {
    if (auth.user && taskId) {
      const taskRef = doc(db, "projects", currentProject, "tasks", taskId);
      await setDoc(taskRef, { archived: true }, { merge: true });
      setReloadTaskFlag(!reloadTaskFlag);
    } else {
      console.log("user not logged in ", "delete ");
    }
  }

  async function addProject(title, description = "") {
    if (auth.user) {
      const _project = {
        title,
        description,
        timestamp: serverTimestamp(),
        uid: auth.user.uid,
        archived: false,
      };
      const projectRef = collection(db, "projects");
      const newProject = await addDoc(projectRef, { ..._project });
      setReloadProjects(!reloadProjects);
      return newProject.id;
    } else {
      console.log("user not logged in", "project add ");
    }
  }

  async function deleteProject(projectId) {
    if (auth.user && projectId && projectId !== defaultProjectId) {
      const projectRef = doc(db, "projects", projectId);
      const q = query(collection(db, "projects", projectId, "tasks"));
      const _tasksSnap = await getDoc(q);
      _tasksSnap.forEach(async (value) => {
        await updateDoc(doc(db, "projects", projectId, "tasks", value.id), {
          ...value.data(),
          archived: true,
        });
      });
      const project = await getDoc(projectRef);
      await updateDoc(projectRef, {
        ...project,
        archived: true,
      });
      setReloadProjects(!reloadProjects);
      return;
    } else {
      console.log("user not logged in", "delete project ");
    }
  }

  async function updateProject(updatedProject) {
    if (auth.user) {
      const projectRef = doc(db, "projects", currentProject);
      const updateRef = await updateDoc(projectRef, {
        ...updatedProject,
        timestamp: serverTimestamp(),
      });
      setReloadProjects(!reloadProjects);
      return updateRef.id;
    } else {
      console.log("user not logged in", "update project");
    }
  }

  async function changeCurrentProject(projectId) {
    if (auth.user) {
      if (projectId !== currentProject) {
        setCurrentProject(projectId);
      }
    }
  }

  async function changeTaskStatus(taskId, status) {
    if (auth.user && taskId) {
      const q = query(doc(db, "projects", currentProject, "tasks", taskId));
      await updateDoc(q, {
        completed: status,
      });
      const _tasks = tasks.map((task) => {
        if (task.id === taskId) {
          task.completed = status;
        }
        return task;
      });
      setTasks(_tasks);
      setReloadTaskFlag(!reloadTaskFlag);
    }
  }

  return {
    tasks,
    projects,
    currentProject,
    defaultProjects,
    // tasks
    addTask,
    updateTask,
    deleteTask,
    // projects
    addProject,
    deleteProject,
    updateProject,
    //other
    changeCurrentProject,
    changeTaskStatus,
  };
}
