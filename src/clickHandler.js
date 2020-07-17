import { projects, tasks } from "./index";
import { projectFactory } from "./Project";
import { taskFactory } from "./Task";
import { saveData, retrieveData } from "./savedata";
import { display } from "./displayController";

export const clickHandler = (function () {
  const createProjectClick = function () {
    const title = prompt("Enter the title of project : ");
    const project = projectFactory(title);

    projects[project.projectID] = project;
    saveData();
    display.listProject();
  };

  return {
    createProjectClick,
  };
})();
