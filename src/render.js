import { clickHandler } from "./clickHandler.js";

export const render = (function () {
  const createTaskDiv = function (task) {
    // <div class="m-1 d-flex">
    //   <input type="checkbox" value="completed"></input>
    //   <div class="p-2" style="flex-grow: 1;">
    //     Task title
    //   </div>
    //   <div class="">2 days ago </div>
    // </div>

    const taskID = task.taskID;
    const projectID = task.projectID;

    const card = document.createElement("div");
    card.innerHTML = task.title;

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

    projectCard.appendChild(title);

    // div.addEventListener("click", (e) => clickHandler.handleProjectClick(ID));
    return projectCard;
  }

  function createTaskCreatorDiv(pID) {
    const button = document.createElement("button");

    button.classList.add("button");
    button.classList.add("button-primary");
    button.classList.add("button-block");

    button.className = "btn btn-block btn-primary";

    button.innerHTML = "Add a new Task";

    button.setAttribute("id", `project${pID}`);

    button.addEventListener("click", (e) =>
      clickHandler.createTaskClick(pID, e)
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

  return {
    makeProjectDiv,
    createProjectCreatorDiv,
    createTaskCreatorDiv,
    createTaskDiv,
  };
})();
