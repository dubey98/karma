import {
  projectFactory
} from "./projectobject.js";
import {
  runKarma
} from "./karma.js";
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

const p1 = runKarma.createProject();
const p2 = runKarma.createProject();
p2.setProjectTitle("project 2")
p1.setProjectTitle("project 1")

let t1 = runKarma.addTask();
let t2 = runKarma.addTask();
t1.setTaskTitle("I am t1 and i am in INBOX and p1");
t2.setTaskTitle("I am t1 and i am in INBOX and p1");
runKarma.addTask();
runKarma.addTask();
runKarma.addTask();
runKarma.addTaskToProject(p1, t1);
runKarma.addTaskToProject(p1, t2);

display.listProject();
display.listInbox();