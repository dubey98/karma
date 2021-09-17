import react, { createContext, useContext } from "react";
import { collection, doc, getFirestore } from "firebase/firestore";

const db = getFirestore();

const taskContext = createContext(null);

export function useTask() {
  return useContext(taskContext);
}

export function TaskProvider({ children }) {
  const task = useTaskProvider();

  return <taskContext.Provider value={task}>{children}</taskContext.Provider>;
}

function useTaskProvider() {
  const projects = collection(db, "projects");

  const taskList = [];
  const projectList = [];

  function addTask() {
    console.log("function not implemented");
  }

  function updateTask() {
    console.log("function not implemented");
  }

  function deleteTask() {
    console.log("function not implemented");
  }

  function addProject() {
    console.log("function not implemented");
  }

  function deleteProject() {
    console.log("function not implemented");
  }

  function updateProject() {
    console.log("function not implemented");
  }

  return {
    projectList,
    taskList,
    addTask,
    updateTask,
    deleteTask,
    addProject,
    deleteProject,
    updateProject,
  };
}
