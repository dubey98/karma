import {
  tMap,
  pMap,
  IDcreator
} from "./index.js";
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
    //get the task from taskMap using taskID
    const task = tMap.get(tID);
    //select the modal-container from the doc
    const modal = document.querySelector(".modal-container");

    const title = document.querySelector(".title");
    title.innerHTML = `${task.getTaskTitle()}`;

    modal.style.display = "block";

    window.onclick = (e) => {
      if (e.target == modal) {
        modal.style.display = "none";
      }
    };
  }

  function _addTaskModal(pID) {
    const p = pMap.get(pID);
    let taskTitle = prompt("Enter the task title", "task");
    let t = taskFactory();
    let tID = IDcreator();
    t.setTaskID(tID);
    t.setProjectID(pID);
    t.setTaskTitle(taskTitle);
    tMap.set(tID, t);
    p.addTask(t);
    // display.listTaskInProject(pID);
  }
  return {
    controller,
  };
})();