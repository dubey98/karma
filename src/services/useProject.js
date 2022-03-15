import { useState, useEffect } from "react";
import {
  projectListener,
  getDefaultProjectId,
  getProject,
  addProjectFS,
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
    if (user && user.uid) {
      try {
        unsub = projectListener(user.uid, setProjects);
      } catch (err) {
        console.error("Error in project Listener", err);
      }
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

  const addProject = async (project) => {
    try {
      await addProjectFS(project);
    } catch (err) {
      console.log(err);
    }
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
