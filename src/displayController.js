import { render } from "./render.js";

export const display = (function () {
  //grab the respectted divs
  const projectList = document.getElementById("projectList");
  const taskList = document.getElementById("task-list");

  //  remive all the children of any element
  const _removeChildren = function (element) {
    element.innerHTML = "";
  };

  /**Rendering function project */
  const listProject = function () {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const tasks = JSON.parse(localStorage.getItem("tasks"));
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

  /**Rendering task list in main page */
  const listTaskInProject = (projectID = "0") => {
    const projects = JSON.parse(localStorage.getItem("projects"));
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    //clean up the mess
    _removeChildren(taskList);

    // controlling the highlighted projects
    const projectDivs = projectList.childNodes;
    for (let i = 0; i < projectDivs.length; i++) {
      projectDivs[i].classList.remove("btn-success");
    }
    document.getElementById(projectID).classList.add("btn-success");

    // create the project detail
    taskList.appendChild(render.projectHeaderDiv(projects[projectID]));

    //  separate the completed and uncompleted tasks
    const taskArray = [];
    // crete te task div to show
    for (let task in tasks) {
      if (tasks[task].projectID == projectID) {
        taskArray.push(tasks[task]);
      }
    }

    //However you want to arrange the tasks display order
    taskArray.sort((a, b) => {
      if (a.completed && b.completed) return 0;
      if (a.completed) return 1;
      if (b.completed) return -1;
      return 0;
    });

    // append them to the taskList elements
    for (let i = 0; i < taskArray.length; i++) {
      const newTaskDiv = render.createTaskDiv(taskArray[i]);
      taskList.appendChild(newTaskDiv);
    }

    //append the task creator div
    taskList.appendChild(render.createTaskCreatorDiv(projectID));
  };

  /**TaskID for only when updating the task */
  const taskCreateForm = (projectID = "0") => {
    render.taskCreationForm(projectID);
  };

  const taskUpdateForm = (taskID, projectID = "0") => {
    render.updateTaskForm(taskID, projectID);
  };

  return {
    listProject,
    listTaskInProject,
    taskCreateForm,
    taskUpdateForm,
  };
})();
