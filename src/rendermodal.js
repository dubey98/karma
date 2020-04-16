import {
  tMap,
  pMap,
  IDcreator
} from "./index.js";
import {
  saveData
} from "./savedata.js";
import {
  taskFactory
} from "./taskobject.js";
import {
  display
} from "./displayController.js";
export const renderModal = (function () {
  //param:- 1. str -->(task or project)
  //        2. ID --> taskID or projectID
  const controller = function (str, ID) {
    if (str === "task") {
      return taskModal(ID);
    } else if (str === "project") {
      return projectModal(ID);
    } else if (str === "create Task") {
      return _addTaskModal(ID);
    }
  };

  function taskModal(tID) {
    if (tMap.has(tID)) {
      // console.log("taskModal not created");
      // const t = tMap.get(tID);
      // const modal = document.querySelector(".modal-container");
      // modal.style.display = "block";

      // const title = document.querySelector(".modal-title");
      // title.innerHTML = `${t.getTaskTitle()}`;
      // // title.addEventListener("click", () => clickHandler.changeTitle(ID));

      // const description = document.querySelector(".modal-description");
      // description.innerHTML = `${t.getDescription()}`;
      // // description.addEventListener("click", () =>
      // //   clickHandler.changePriority(ID)
      // // );

      // const duedate = document.querySelector("#duedate");
      // duedate.innerHTML = `${t.getDueDate()}`;
      // // duedate.addEventListener("click", () => clickHandler.changeDueDate(ID));

      // const priority = document.querySelector("#priority");
      // priority.innerHTML = `${t.getPriority()}`;

      // window.onclick = function (e) {
      //   if (e.target == modal) {
      //     modal.style.display = "none";
      //   }
      // };
    } else {
      console.error("non-existent task");
    }
  }

  function _addTaskModal(pID) {
    const modalContainer = document.querySelector('.modal-container');
    modalContainer.style.display = "block";

    const form = document.forms.myForm;
    window.onclick = function (e) {
      if (e.target == modalContainer) {
        modalContainer.style.display = "none";
      }
    }
    form.addEventListener('submit', (e) => handleForm());

    function handleForm() {
      const title = form.elements.title.value;
      const priority = form.elements.priority.value;
      const dueDate = form.elements.dueDate.value;
      const projectID = pID;
      const taskID = IDcreator();
      const t = {
        title,
        projectID,
        taskID,
        priority,
        dueDate
      }
      const task = Object.assign(taskFactory(), t);
      tMap.set(taskID, task);
      // console.log(task);
      saveData();
      modalContainer.style.display = "none";
    }

    display.listTaskInProject(pID);
  }
  return {
    controller,
  };
})();