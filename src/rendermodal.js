import { tMap, pMap, IDcreator } from "./index.js";
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
      const t = tMap.get(tID);
      const modal = document.querySelector(".modal-container");
      modal.style.display = "block";

      const title = document.querySelector(".modal-title");
      title.innerHTML = `${t.getTaskTitle()}`;
      // title.addEventListener("click", () => clickHandler.changeTitle(ID));

      const description = document.querySelector(".modal-description");
      description.innerHTML = `${t.getDescription()}`;
      // description.addEventListener("click", () =>
      //   clickHandler.changePriority(ID)
      // );

      const duedate = document.querySelector("#duedate");
      duedate.innerHTML = `${t.getDueDate()}`;
      // duedate.addEventListener("click", () => clickHandler.changeDueDate(ID));

      const priority = document.querySelector("#priority");
      priority.innerHTML = `${t.getPriority()}`;

      window.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      };
    } else {
      console.error("non-existent task");
    }
  }

  function _addTaskModal(pID) {}
  return {
    controller,
  };
})();
