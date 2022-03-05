import { createContext, useContext, useState, useEffect } from "react";
import {
  collection,
  doc,
  getFirestore,
  query,
  addDoc,
  updateDoc,
  setDoc,
  serverTimestamp,
  getDoc,
} from "firebase/firestore";
import { useAuth } from "./useAuth";
import { useGlobals } from "./useGlobals";
import useProject from "./useProject";

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
  const { user } = useAuth();
  const { currentProject, changeCurrentProject } = useGlobals();
  const { defaultProject } = useProject();
  const [tasks, setTasks] = useState(null);

  const addTask = async () => {
    console.log("add task fn");
  };

  const updateTask = async () => {
    console.log("update task fn");
  };

  const deleteTask = async () => {
    console.log("delete task fn");
  };

  const changeTaskStatus = async () => {
    console.log("change Task Status fn ");
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    changeTaskStatus,
  };
}
