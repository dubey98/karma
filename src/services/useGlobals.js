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
  const [currentProject, setCurrentProject] = useState(null);
  const [showArchived, setShowArchived] = useState(false);
  const [showCompleted, setShowCompleted] = useState(false);
  const [sideBarStatus, setSideBarStatus] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setSideBarStatus(true);
    } else {
      setSideBarStatus(false);
    }
  }, [isMobile]);

  function handleSideBarStatus(status) {
    setSideBarStatus(status);
  }

  function changeCurrentProject(p) {
    setCurrentProject(p);
  }

  function changeShowCompleted(value) {
    setShowCompleted(value);
  }
  function changeShowArchived(value) {
    setShowArchived(value);
  }

  return {
    isMobile,
    showArchived,
    showCompleted,
    sideBarStatus,
    changeShowArchived,
    changeShowCompleted,
    handleSideBarStatus,
    currentProject,
    changeCurrentProject,
  };
}
