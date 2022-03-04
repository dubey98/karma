import { useState, useEffect } from "react";
import {
  projectListener,
  getDefaultProjectId,
  getProject,
} from "./firebase/firestore";
import { useAuth } from "./useAuth";
import {useGlobals} from "./useGlobals"

function useProject() {
  const { user } = useAuth();
  const {changeCurrentProject} = useGlobals();
  const [projects, setProjects] = useState([]);
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
      changeCurrentProject(project);
    }
    _getData();
  }, [user.uid]);


  return {
    projects,
    defaultProject,
  };
}

export default useProject;
