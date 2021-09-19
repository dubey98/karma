import React, { createContext, useContext, useState } from "react";

const glbalContext = createContext();

export function useGlobals() {
  return useContext(glbalContext);
}

export function GlobalContextProvider({ children }) {
  const global = globalProvider();
  return (
    <glbalContext.Provider value={global}>{children}</glbalContext.Provider>
  );
}

function globalProvider() {
  const [taskDetailActivated, setTaskDetailActivated] = useState(false);
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
    activateTaskDetailModal,
    deactivateTaskDetailModal,
  };
}
