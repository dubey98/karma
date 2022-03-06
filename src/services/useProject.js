import { useState, useEffect } from "react";
import {
  projectListener,
  getDefaultProjectId,
  getProject,
} from "./firebase/firestore";
import { useAuth } from "./useAuth";
import { useGlobals } from "./useGlobals";

function useProject() {
  const { user } = useAuth();
  const { changeCurrentProject } = useGlobals();
  const [projects, setProjects] = useState([]);
  const [defaultProject, setDefaultProject] = useState(null);

  useEffect(() => {
    let unsub = () => {};
    if (user) {
      unsub = projectListener(user ? user.uid : "", setProjects);
    }
    return unsub;
  }, [user]);

  useEffect(() => {
    async function _getData() {
      const defaultProjectId = await getDefaultProjectId(user ? user.uid : "");
      const project = await getProject(defaultProjectId);
      setDefaultProject(project);
      changeCurrentProject(project);
    }
    user && _getData();
  }, [user]);

  const addProject = async () => {
    console.log("add project fn");
  };

  const deleteProject = async () => {
    console.log("delete project fn");
  };

  const updateProject = async () => {
    console.log("update project fn");
  };

  return {
    projects,
    defaultProject,
    addProject,
    deleteProject,
    updateProject,
  };
}

export default useProject;
