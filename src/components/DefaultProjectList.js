import React from "react";
import { useTask } from "../services/useTask";

const DefaultProjectList = () => {
  const store = useTask();
  const todaysProject = {
    title: "Today",
    id: "0",
  };
  const upcomingProject = {
    title: "Upcoming",
    id: "1",
  };

  const projects = [...store.defaultProjects, todaysProject, upcomingProject];

  function handleProjectClick(projectId) {
    store.changeCurrentProject(projectId);
  }

  return (
    <table className="table is-hoverable is-fullwidth">
      <tbody>
        {projects.map((project) => {
          return (
            <tr
              key={project.id}
              className={
                project.id === store.currentProject
                  ? "is-selected is-clickable"
                  : "is-clickable"
              }
              onClick={async () => handleProjectClick(project.id)}
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
