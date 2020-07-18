import { render } from "./render.js";

const projects = JSON.parse(localStorage.getItem("projects"));
const tasks = JSON.parse(localStorage.getItem("tasks"));

export const display = (function () {
  //grab the respectted divs
  const projectList = document.getElementById("projectList");
  const taskList = document.getElementById("task-list");

  //  remive all the children of any element
  const _removeChildren = function (element) {
    element.innerHTML = "";
  };

  const listProject = function () {
    // clean up the DOM first
    _removeChildren(projectList);

    // Create all the projects element
    for (let project in projects) {
      const newProjectDiv = render.makeProjectDiv(projects[project]);
      projectList.appendChild(newProjectDiv);
    }
    //creaete the project creator div
    projectList.appendChild(render.createProjectCreatorDiv());
  };

  const listTaskInProject = (projectID = "0") => {
    //clean up the mess
    _removeChildren(taskList);
    //create the task elements
    for (let task in tasks) {
      if (tasks[task].projectID == projectID) {
        const newTaskDIv = render.createTaskDiv(tasks[task]);
        taskList.appendChild(newTaskDIv);
      }
    }
    //append the task creator div
    taskList.appendChild(render.createTaskCreatorDiv());
  };
  return {
    listProject,
    listTaskInProject,
  };
})();
