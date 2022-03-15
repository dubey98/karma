import { createContext, useContext, useState, useEffect } from "react";
import { useAuth } from "./useAuth";
import { useGlobals } from "./useGlobals";
import {
  taskListener,
  addTaskFS,
  deleteTaskFS,
  updateTaskFS,
} from "./firebase/firestore";

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
  const { currentProject, showArchived, showCompleted } = useGlobals();
  const [tasks, setTasks] = useState(null);

  useEffect(() => {
    let unsub = () => {};
    if (currentProject && user) {
      let options = {
        getTodays: currentProject.id === "0",
        getUpcoming: currentProject.id === "1",
        showArchived: showArchived,
        showCompleted: showCompleted,
      };
      try {
        unsub = taskListener(currentProject.id, user.uid, setTasks, options);
      } catch (err) {
        console.error("Error in tasks listener",err);
      }
    }
    return unsub;
  }, [currentProject, user, showArchived, showCompleted]);

  const addTask = async (task) => {
    try {
      await addTaskFS(task, task.projectId);
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

  const archiveTask = async (task, newArchiveStatus) => {
    try {
      // console.log(task, newArchiveStatus)
      await updateTaskFS(task, { archived: newArchiveStatus });
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
    archiveTask,
  };
}
