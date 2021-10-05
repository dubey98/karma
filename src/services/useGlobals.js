import React, { createContext, useContext, useState, useEffect } from "react";
import { useMediaQuery } from "react-responsive";

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
  const isMobile = useMediaQuery({
    query: "(max-width: 1023px)",
  });

  const [taskDetailActivated, setTaskDetailActivated] = useState(false);
  const [showArchived, setShowArchived] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [detailTask, setDetailTask] = useState(null);
  const [sideBarStatus, setSideBarStatus] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setSideBarStatus(true);
    } else {
      setSideBarStatus(false);
    }
  }, [isMobile]);

  function activateTaskDetailModal(task) {
    setTaskDetailActivated(true);
    setDetailTask(task);
  }

  function deactivateTaskDetailModal() {
    setDetailTask(null);
    setTaskDetailActivated(false);
  }

  function handleSideBarStatus(status) {
    setSideBarStatus(status);
  }

  return {
    isMobile,
    taskDetailActivated,
    detailTask,
    showArchived,
    showCompleted,
    sideBarStatus,
    activateTaskDetailModal,
    deactivateTaskDetailModal,
    setShowCompleted,
    setShowArchived,
    handleSideBarStatus,
  };
}
