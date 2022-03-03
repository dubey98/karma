import { useState, useEffect } from "react";
import {
  projectListener,
  getDefaultProjectId,
  getProject,
} from "./firebase/firestore";
import { useAuth } from "./useAuth";

function useProject() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [currentProject, setCurrentProject] = useState(null);
  const [defaultProject, setDefaultProject] = useState(null);

  useEffect(() => {
    const unsub = projectListener(user.uid, setProjects);
    return unsub;
  }, []);

  useEffect(() => {
    async function _getData() {
      const defaultProjectId = await getDefaultProjectId(user.uid);
      const project = await getProject(defaultProjectId);
      setDefaultProject(project);
    }
    _getData();
  }, [user.uid]);

  function changeCurrentProject(project) {
    console.log(project);
    setCurrentProject(project);
  }

  return {
    projects,
    currentProject,
    defaultProject,
    changeCurrentProject,
  };
}

export default useProject;
