import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import DefaultProjectList from "./DefaultProjectList";
import useProject from "../services/useProject";

function ProjectList() {
  const { projects, currentProject, changeCurrentProject } = useProject();
  const [activated, setActivated] = useState(false);

  function handleChangeProject(project) {
    changeCurrentProject(project);
  }

  return (
    <div className="">
      <DefaultProjectList />
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => {
            return project ? (
              <tr
                key={project.id}
                className={
                  currentProject
                    ? project.id === currentProject.id
                      ? "is-selected is-clickable"
                      : "is-clickable"
                    : "is-clickable"
                }
                onClick={async () => await handleChangeProject(project)}
              >
                <td>{project.title}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </table>
      <div>
        {activated ? (
          <ProjectForm setActivated={setActivated} />
        ) : (
          <div
            className="button is-light is-success is-outlined is-fullwidth"
            onClick={() => setActivated(!activated)}
          >
            Add Project
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectList;
