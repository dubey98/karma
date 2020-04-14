import {
  projectFactory
} from "./projectobject.js";
import {
  display
} from "./displayController.js"
// Every task must have a unique ID thus this should be passed in every task
export const IDcreator = (function () {
  let count = 0;
  return () => {
    count++;
    return count;
  };
})();
/****************************************************************/
/****************************************************************/
/****************************************************************/
export const pMap = new Map();
export const tMap = new Map();

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

function main() {
  display.listProject();
  display.listTaskInProject(0);
}
main();