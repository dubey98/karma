import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useGlobals } from "./useGlobals";
import useProject from "./useProject";
import {
  taskListener,
  addTaskFS,
  deleteTaskFS,
  updateTaskFS,
} from "./firebase/firestore";
import { defaultProjectIds } from "../Constants/constants";

const taskContext = createContext(null);

export function useTask() {
  return useContext(taskContext);
}

export function TaskContextProvider({ children }) {
  const task = useTaskProvider();
  return <taskContext.Provider value={task}>{children}</taskContext.Provider>;
}

function useTaskProvider() {
  const { user } = useAuth();
  const { currentProject, changeCurrentProject } = useGlobals();
  const { defaultProject } = useProject();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    let unsub = () => {};
    if (currentProject && user) {
      let options = {
        getTodays: currentProject.id == 0,
        getUpcoming: currentProject.id == 1,
      };
      unsub = taskListener(currentProject.id, user.uid, setTasks, options);
    }
    return unsub;
  }, [currentProject, user]);

  const addTask = async (task) => {
    try {
      await addTaskFS(task, currentProject.id);
    } catch (error) {
      console.log(error);
    }
  };

  const updateTask = async () => {
    console.log("update task fn");
  };

  const deleteTask = async (task) => {
    try {
      await deleteTaskFS(task.id, task.projectId);
    } catch (err) {
      console.log(err);
    }
  };

  const changeTaskStatus = async (task, newStatus) => {
    try {
      await updateTaskFS(task, { completed: newStatus });
    } catch (err) {
      console.log(err);
    }
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    changeTaskStatus,
  };
}
