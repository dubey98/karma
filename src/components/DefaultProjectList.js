import React, { useState, useEffect } from "react";
import { defaultProjects } from "../Constants/constants";
import useProject from "../services/useProject";

const DefaultProjectList = () => {
  const { currentProject, defaultProject, changeCurrentProject } = useProject();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects({ defaultProject, ...defaultProjects });
  }, [defaultProject, currentProject]);

  function handleProjectClick(project) {
    changeCurrentProject(project);
  }

  return (
    <table className="table is-hoverable is-fullwidth">
      <tbody>
        {projects.map((project) => {
          return (
            <tr
              key={project.id}
              className={ currentProject ?
                project.id === currentProject.id
                  ? "is-selected is-clickable"
                  : "" : "is-clickable" 
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
