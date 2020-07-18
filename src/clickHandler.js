import { projectFactory } from "./Project";
import { taskFactory } from "./Task";
import { display } from "./displayController";

const projects = JSON.parse(localStorage.getItem("projects"));
const tasks = JSON.parse(localStorage.getItem("tasks"));

export const clickHandler = (function () {
  //logic for creating a project
  const createProjectClick = function () {
    const title = prompt("Enter the title of project : ");
    const project = projectFactory(title);

    projects[project.projectID] = project;
    localStorage.setItem("projects", JSON.stringify(projects));
    display.listProject();
  };

  // logic for creating a task
  const createTaskClick = function (projectID = "0") {
    const title = prompt("Enter the name of the task : ");
    const task = taskFactory(title, Date.now(), 5, projectID);

    tasks[task.taskID] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));
    display.listTaskInProject(projectID);
  };
  return {
    createProjectClick,
    createTaskClick,
  };
})();
