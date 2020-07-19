import { projectFactory } from "./Project";
import { taskFactory } from "./Task";
import { display } from "./displayController";

export const clickHandler = (function () {
  const projects = JSON.parse(localStorage.getItem("projects"));
  const tasks = JSON.parse(localStorage.getItem("tasks"));

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
    if (title == null || title == "" || title == undefined) {
      alert("please insert an appropriate title");
      return;
    }
    const task = taskFactory(title, Date.now, 5, projectID);

    tasks[task.taskID] = task;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    display.listProject();
    display.listTaskInProject(projectID);
  };

  /**Handle main page project click => display task in them */
  const projectClick = function (projectID) {
    display.listTaskInProject(projectID);
  };

  /**Delete task from database*/
  const deleteTask = function (taskID) {
    delete tasks[taskID];
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  const completeTask = function (taskID) {
    tasks[taskID].completed = tasks[taskID].completed ? false : true;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };
  return {
    createProjectClick,
    createTaskClick,
    projectClick,
    deleteTask,
    completeTask,
  };
})();
