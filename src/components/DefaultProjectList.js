import React, { useState, useEffect } from "react";
import { useTask } from "../services/useTask";
import { defaultProjects } from "../Constants/constants";

const DefaultProjectList = () => {
  const store = useTask();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    if (store.defaultProjects !== null) {
      setProjects([...store.defaultProjects, ...defaultProjects]);
    }
    return () => {};
  }, [store.defaultProjects, store.currentProject]);

  function handleProjectClick(project) {
    store.changeCurrentProject(project);
  }

  return (
    <table className="table is-hoverable is-fullwidth">
      <tbody>
        {store.currentProject &&
          projects.map((project) => {
            return (
              <tr
                key={project.id}
                className={
                  project.id === store.currentProject.id
                    ? "is-selected is-clickable"
                    : "is-clickable"
                }
                onClick={async () => handleProjectClick(project)}
              >
                <td>{project.title}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default DefaultProjectList;
