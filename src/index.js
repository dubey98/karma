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
import {
  saveData,
  retrieveData
} from "./savedata.js";
// Every task must have a unique ID thus this should be passed in every task
export const pMap = new Map();
export const tMap = new Map();

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

// function checkBeforeRun() {
//   function _createDefaultProject() {
//     const project = projectFactory();
//     const ID = 0;
//     project.setProjectID(0);
//     project.setProjectTitle("INBOX");
//     pMap.set(ID, project);
//   }

//   if (pMap.size === 0) {
//     _createDefaultProject();
//   }
// }
// checkBeforeRun();

function main() {
  if (!localStorage.getItem("pMap") && !localStorage.getItem("tMap")) {
    populateStorage();
    runKarma();
  } else {
    runKarma();
  }
}
main();

function populateStorage() {
  const p = projectFactory();
  const ID = 0;
  p.setProjectID(0);
  p.setProjectTitle("INBOX");
  pMap.set(ID, p);
  saveData();
}

function runKarma() {
  retrieveData();
  display.listProject();
  display.listTaskInProject(0);
}