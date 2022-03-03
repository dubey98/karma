import React, { useState } from "react";
import ProjectForm from "./ProjectForm";
import { useTask } from "../services/useTask";
import DefaultProjectList from "./DefaultProjectList";
import useProject from "../services/useProject";

function ProjectList() {
  const { projects, currentProject, changeCurrentProject } = useProject();
  const [activated, setActivated] = useState(false);

  async function handleChangeProject(project) {
    console.log("handle change project called");
    //await store.changeCurrentProject(project);
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
            console.log(project);
            return (
              <tr
                key={project.id}
                className={ currentProject ? 
                  project.id === currentProject.id
                    ? "is-selected is-clickable"
                    : "is-clickable" : "is-clickable"
                }
                onClick={async () => await handleChangeProject(project)}
              >
                <td>{project.title}</td>
              </tr>
            );
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
