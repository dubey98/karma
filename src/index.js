import {
  // project,
  projectFactory,
} from "./projectobject.js";
import {
  taskFactory,
  // task,
} from "./taskobject.js";
import {
  display,
} from "./displayController.js";
// Every task must have a unique ID thus this should be passed in every task
export let pMap = new Map();
export let tMap = new Map();

export const IDcreator = (function () {
  let count = 0;
  if (!localStorage.getItem("count")) {
    count = 0;
    localStorage.setItem("count", 0);
  } else count = localStorage.getItem("count");
  return () => {
    count++;
    localStorage.setItem("count", count);
    return count;
  };
})();

function checkBeforeRun() {
  function _createDefaultProject() {
    const project = projectFactory();
    const ID = 0;
    project.setProjectID(0);
    project.setProjectTitle("INBOX");
    pMap.set(ID, project);
  }

  if (pMap.size === 0) {
    _createDefaultProject();
  }
}
checkBeforeRun();
display.listProject();
display.listTaskInProject(0);