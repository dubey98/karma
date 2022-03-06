import React from "react";
import { defaultProjects } from "../Constants/constants";
import { useGlobals } from "../services/useGlobals";

const DefaultProjectList = () => {
  const { currentProject, changeCurrentProject } = useGlobals();

  function handleProjectClick(project) {
    changeCurrentProject(project);
  }

  return (
    <table className="table is-hoverable is-fullwidth">
      <tbody>
        {defaultProjects.map((project) => {
          return project ? (
            <tr
              key={project.id}
              className={
                currentProject && project.id === currentProject.id
                  ? "is-selected is-clickable"
                  : "is-clickable"
              }
              onClick={async () => handleProjectClick(project)}
            >
              <td>{project.title}</td>
            </tr>
          ) : null;
        })}
      </tbody>
    </table>
  );
};

export default DefaultProjectList;
