import { clickHandler } from "./clickHandler.js";
import { display } from "./displayController.js";
import moment from "moment";

export const render = (function () {
  const createTaskDiv = function (task) {
    // <div class="m-1 d-flex">
    //   <div class="p-1"> Priority </div>
    //   <input class="mr-2" type="checkbox" value="completed"></input>
    //   <div class="p-2" style="flex-grow: 1;">
    //     Task title
    //   </div>
    //   <div class="">2 days ago </div>
    // </div>

    const card = document.createElement("div");

    const priorityDiv = document.createElement("div");
    const input = document.createElement("input");
    const taskTitle = document.createElement("div");
    const dateButton = document.createElement("button");
    const delButton = document.createElement("button");

    priorityDiv.className = "p-1 mr-2";
    card.className = "m-1 d-flex";
    input.className = "mr-2";
    taskTitle.className = "p-1";
    dateButton.className = "btn";
    delButton.className = "btn btn-danger";

    if (new Date(task.dueDate).getDate() - new Date(Date.now()).getDate() > 0) {
      dateButton.classList.add("btn-success");
    } else {
      dateButton.classList.add("btn-danger");
    }
    if (task.completed) {
      dateButton.classList.add("btn-secondary");
      dateButton.classList.remove("btn-success");
      dateButton.classList.remove("btn-danger");
    }

    taskTitle.style.flexGrow = "1";
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "completed");

    priorityDiv.textContent = task.priority;
    input.checked = task.completed ? true : false;
    taskTitle.innerHTML = task.title;
    dateButton.textContent = moment(task.dueDate).format("MMMM DD");
    delButton.textContent = "Del";

    //  Add event Listeneers
    taskTitle.addEventListener("click", () => {
      display.taskUpdateForm(task.taskID, task.projectID);
      display.listTaskInProject(task.projectID);
    });

    input.addEventListener("change", () => {
      clickHandler.completeTask(task.taskID);
      display.listTaskInProject(task.projectID);
    });

    dateButton.addEventListener("click", () => {
      clickHandler.changeDueDate(task.taskID);
      display.listTaskInProject(task.projectID);
    });

    delButton.addEventListener("click", () => {
      clickHandler.deleteTask(task.taskID);
      display.listTaskInProject(task.projectID);
    });

    card.appendChild(priorityDiv);
    card.appendChild(input);
    card.appendChild(taskTitle);
    card.appendChild(dateButton);
    card.appendChild(delButton);

    return card;
  };

  function makeProjectDiv(project) {
    // <div class="m-1">
    //   <div class="p-2">Project title</div>
    // </div>

    const projectCard = document.createElement("div");
    const title = document.createElement("div");

    title.innerHTML = project.title;
    title.classList.add("p-2");

    projectCard.classList.add("m-1");

    projectCard.setAttribute("id", project.projectID);

    projectCard.appendChild(title);

    projectCard.addEventListener("click", (e) =>
      clickHandler.projectClick(project.projectID)
    );

    return projectCard;
  }

  function createTaskCreatorDiv(projectID = "0") {
    const button = document.createElement("button");

    button.className = "btn btn-block btn-primary";

    button.textContent = "Add a new Task";

    button.setAttribute("id", projectID);

    button.addEventListener("click", () => display.taskCreateForm(projectID));
    return button;
  }

  function createProjectCreatorDiv() {
    const button = document.createElement("button");

    button.className = "btn btn-block btn-primary";

    button.innerHTML = "Add a new Project";

    button.setAttribute("id", "");

    button.addEventListener("click", (e) => clickHandler.createProjectClick(e));

    return button;
  }

  const projectHeaderDiv = function (project) {
    // <div class="d-flex p-1 m-1 flex-row bg-primary">
    //   <div class="p-1 m-1" style="flex-grow: 1;">
    //     Project title
    //   </div>
    //   <div class="btn btn-primary">Settings</div>
    // </div>
    console.log("you called me taskCreation Form  !");
    const wrapper = document.createElement("div");
    const titleDiv = document.createElement("div");
    const settingButton = document.createElement("button");

    wrapper.className = "d-flex p-1 m-1 flex-row bg-primary";
    titleDiv.className = "p-1 m-1 text-white font-weight-bolder h4";
    settingButton.className = "btn btn-primary";

    titleDiv.style.flexGrow = "1";
    settingButton.setAttribute("id", project.projectID);

    titleDiv.textContent = project.title;
    settingButton.textContent = "settings";

    wrapper.appendChild(titleDiv);
    wrapper.appendChild(settingButton);

    return wrapper;
  };

  const taskCreationForm = function (projectID) {
    /**MODAL controls */
    const window = document.getElementById("modal-container");

    window.style.display = "block";

    window.addEventListener("click", (e) => {
      if (e.target.id === "modal-container") {
        window.style.display = "none";
      }
    });

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clickHandler.createTaskClick({
        title: e.target[0].value,
        priority: e.target[1].value,
        dueDate: e.target[2].value,
        projectID: projectID,
      });
      window.style.display = "none";
    });
  };

  const updateTaskForm = function (taskID, projectID) {
    const tasks = localStorage.getItem("tasks");
    /**MODAL controls */
    const window = document.getElementById("modal-container");

    window.style.display = "block";

    window.addEventListener("click", (e) => {
      if (e.target.id === "modal-container") {
        window.style.display = "none";
      }
    });

    const task = tasks[taskID];
    document.getElementById("title").value = task.title;
    document.getElementById("priority").value = task.priority;
    document.getElementById("dueDate").value = task.dueDate;

    const form = document.querySelector("form");
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      clickHandler.createTaskClick({
        title: e.target[0].value,
        priority: e.target[1].value,
        dueDate: e.target[2].value,
        projectID: projectID,
        taskID: taskID,
      });
      window.style.display = "none";
    });
  };

  return {
    makeProjectDiv,
    createProjectCreatorDiv,
    createTaskCreatorDiv,
    createTaskDiv,
    projectHeaderDiv,
    taskCreationForm,
    updateTaskForm,
  };
})();
