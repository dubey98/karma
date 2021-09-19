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
  getDoc,
  collectionGroup,
} from "firebase/firestore";
import { useAuth } from "./useAuth";
import * as constants from "./../constants";
import moment from "moment";

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
  const auth = useAuth();
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [tasks, setTasks] = useState([]);
  const [reloadTaskFlag, setReloadTaskFlag] = useState(false);
  const [reloadProjects, setReloadProjects] = useState(false);
  const [defaultProjects, setDefaultProjects] = useState([]);
  const [todaysTask, setTodaysTask] = useState([]);

  useEffect(() => {
    async function getProjects() {
      if (auth.user) {
        console.log(fs, "projects");

        const defaultProjectQuery = query(doc(db, "users", auth.user.uid));

        let snap = await getDoc(defaultProjectQuery);
        const defaultProjectId = snap.data().defaultProjectId;

        const q = query(
          collection(db, "projects"),
          where("uid", "==", auth.user.uid)
        );

        snap = await getDocs(q);

        // set projects and current project
        const _projects = [];
        const _defaultProjects = [];
        snap.forEach((value) => {
          if (value.id === defaultProjectId.trim()) {
            _defaultProjects.push({ ...value.data(), id: value.id });
          } else {
            _projects.push({ ...value.data(), id: value.id });
          }
        });

        setProjects(_projects);
        setDefaultProjects(_defaultProjects);
        setCurrentProject(defaultProjectId.trim());
      } else {
        setProjects([]);
        setDefaultProjects([]);
        setCurrentProject(null);
      }
    }

    getProjects();
    return () => {};
  }, [auth.user, reloadProjects]);

  useEffect(() => {
    async function _getTasks() {
      if (auth.user && currentProject) {
        console.log(fs, "tasks");
        if (
          constants.defaultProjectIds.find(
            (projectId) => currentProject === projectId
          )
        ) {
          // const q1 = query(
          //   collection(db, "projects"),
          //   where("uid", "==", auth.user.uid)
          // );
          // const snapShot = await getDocs(q1);
          // const _tasks = [];
          // //console.log(snapShot.docs);
          // const projectIds = [];
          // snapShot.docs.forEach(async (snap) => {
          //   const projectId = snap.id;
          //   projectIds.push(projectId);
          // });
          // console.log(projectIds);
          // projectIds.forEach(async (projectId) => {
          //   const q2 = query(
          //     collection(db, "projects", projectId, "tasks"),
          //     where("dueDate", "<", parseInt(constants.getNextDayTimeStamp())),
          //     where("dueDate", ">", parseInt(constants.getPrevDayTimeStamp()))
          //   );
          //   const result = await getDocs(q2);
          //   result.forEach((value) => {
          //     _tasks.push({ ...value.data(), id: value.id });
          //   });
          // });
          const q3 = query(
            collectionGroup(
              db,
              "tasks",
              where("uid", "==", auth.user.id),
              where("dueDate", "<", parseInt(constants.getNextDayTimeStamp())),
              where("dueDate", ">", parseInt(constants.getPrevDayTimeStamp()))
            )
          );
          const _tasks = [];
          const _results = await getDocs(q3);
          _results.forEach((value) => {
            _tasks.push({ ...value.data(), id: value.id });
          });
          console.log("use state log", _tasks.length);
          setTasks(_tasks);
        } else {
          const q = query(collection(db, "projects", currentProject, "tasks"));
          const snap = await getDocs(q);

          const _tasks = [];
          snap.forEach((value) => {
            _tasks.push({ ...value.data(), id: value.id });
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

  async function addTask(_newTask) {
    if (auth.user) {
      const taskRef = collection(db, "projects", currentProject, "tasks");
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
    if (auth.user && taskId) {
      const taskRef = doc(db, "projects", currentProject, "tasks", taskId);
      const deleteRef = await deleteDoc(taskRef);
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
      };
      const projectRef = collection(db, "projects");
      const newProject = await addDoc(projectRef, { ..._project });
      console.log(newProject);
      setReloadProjects(!reloadProjects);
      return newProject.id;
    } else {
      console.log("user not logged in", "project add ");
    }
  }

  async function deleteProject(projectId) {
    if (auth.user && projectId && projectId !== currentProject) {
      const projectRef = doc(db, "projects", projectId);
      const q = query(collection(db, "projects", projectId, "tasks"));
      const _tasks = await getDoc(q);
      _tasks.forEach(async (value) => {
        await deleteDoc(doc("projects", projectId, "tasks", value.id));
      });
      await deleteDoc(projectRef);
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
