import {
  tMap,
  pMap,
  IDcreator
} from "./index.js";
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
      console.log(t);
      const modal = document.querySelector('.modal-container');
      modal.style.display = "block";

      const title = document.querySelector('.modal-title');
      title.innerHTML = `${t.getTaskTitle()}`;

      window.onclick = function (e) {
        if (e.target == modal) {
          modal.style.display = "none";
        }
      }
    } else {
      console.error("non-existent task");
    }
  }

  function _addTaskModal(pID) {

  }
  return {
    controller,
  };
})();