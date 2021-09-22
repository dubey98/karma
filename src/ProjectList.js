import React, { useState } from "react";
import ProjectForm from "./components/ProjectForm";
import { useTask } from "./services/useTask";
import DefaultProjectList from "./components/DefaultProjectList";

function ProjectList() {
  const store = useTask();
  const [activated, setActivated] = useState(false);

  async function handleChangeProject(projectId) {
    await store.changeCurrentProject(projectId);
  }

  return (
    <div>
      <DefaultProjectList />
      <table className="table is-hoverable is-fullwidth">
        <thead>
          <tr>
            <th>Projects</th>
          </tr>
        </thead>
        <tbody>
          {store.projects.map((project) => {
            return (
              <tr
                key={project.id}
                className={
                  project.id === store.currentProject
                    ? "is-selected is-clickable"
                    : "is-clickable"
                }
                onClick={async () => await handleChangeProject(project.id)}
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
