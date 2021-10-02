import React, { createContext, useContext, useState } from "react";

const glbalContext = createContext();

export function useGlobals() {
  return useContext(glbalContext);
}

export function GlobalContextProvider({ children }) {
  const global = useGlobalProvider();
  return (
    <glbalContext.Provider value={global}>{children}</glbalContext.Provider>
  );
}

function useGlobalProvider() {
  const [taskDetailActivated, setTaskDetailActivated] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [detailTask, setDetailTask] = useState(null);

  function activateTaskDetailModal(task) {
    setTaskDetailActivated(true);
    setDetailTask(task);
  }

  function deactivateTaskDetailModal() {
    setDetailTask(null);
    setTaskDetailActivated(false);
  }

  return {
    taskDetailActivated,
    detailTask,
    showArchived,
    showCompleted,
    activateTaskDetailModal,
    deactivateTaskDetailModal,
    setShowCompleted,
    setShowArchived,
  };
}
