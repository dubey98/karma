import { clickHandler } from "./clickHandler.js";
import { display } from "./displayController.js";
import moment from "moment";

export const render = (function () {
  const createTaskDiv = function (task) {
    // <div class="m-1 d-flex">
    //   <input type="checkbox" value="completed"></input>
    //   <div class="p-2" style="flex-grow: 1;">
    //     Task title
    //   </div>
    //   <div class="">2 days ago </div>
    // </div>

    const card = document.createElement("div");
    const input = document.createElement("input");
    const taskTitle = document.createElement("div");
    const dueDate = document.createElement("div");
    const delButton = document.createElement("button");

    card.className = "m-1 d-flex";
    input.className = "mr-2";
    taskTitle.className = "p-1";
    dueDate.className = "p-1 mr-2";
    delButton.className = "btn btn-danger";

    taskTitle.style.flexGrow = "1";
    input.setAttribute("type", "checkbox");
    input.setAttribute("name", "completed");

    input.checked = task.completed ? true : false;
    taskTitle.innerHTML = task.title;
    dueDate.textContent = moment(task.dueDate).fromNow();
    delButton.textContent = "Del";

    //  Add event Listeneers
    input.addEventListener("change", () => {
      clickHandler.completeTask(task.taskID);
      display.listTaskInProject(task.projectID);
    });

    delButton.addEventListener("click", () => {
      clickHandler.deleteTask(task.taskID);
      display.listTaskInProject(task.projectID);
    });

    card.appendChild(input);
    card.appendChild(taskTitle);
    card.appendChild(dueDate);
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

    button.innerHTML = "Add a new Task";

    button.setAttribute("id", projectID);

    button.addEventListener("click", (e) =>
      clickHandler.createTaskClick(projectID, e)
    );
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
    const wrapper = document.createElement("div");
    const titleDiv = document.createElement("div");
    const settingButton = document.createElement("button");

    wrapper.className = "d-flex p-1 m-1 flex-row bg-primary";
    titleDiv.className = "p-1 m-1";
    settingButton.className = "btn btn-primary";

    titleDiv.style.flexGrow = "1";
    settingButton.setAttribute("id", project.projectID);

    titleDiv.textContent = project.title;
    settingButton.textContent = "settings";

    wrapper.appendChild(titleDiv);
    wrapper.appendChild(settingButton);

    return wrapper;
  };

  return {
    makeProjectDiv,
    createProjectCreatorDiv,
    createTaskCreatorDiv,
    createTaskDiv,
    projectHeaderDiv,
  };
})();
