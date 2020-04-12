import {
  projectFactory
} from "./projectobject.js";
import {
  runKarma
} from "./karma.js";
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
    pMap.set(ID, project);
  }

  if (pMap.size === 0) {
    _createDefaultProject();
  }
}
checkBeforeRun();

const p1 = runKarma.createProject();
const p2 = runKarma.createProject();

console.log(typeof (p1));
console.log("size of pMap is : " + pMap.size);
let t1 = runKarma.addTask();
let t2 = runKarma.addTask();
console.log(pMap.get(0));
console.log("size of tMap is : " + tMap.size);
console.log("------------------------------------");
runKarma.addTaskToProject(p1, t1);
runKarma.addTaskToProject(p1, t2);

for (let [k, v] of pMap.entries()) {
  console.log(v.getProjectID());
}
console.log("end of pMap");
for (let [k, v] of tMap.entries()) {
  console.log(v.getTaskID());
}
console.log("end of tMap");
runKarma.deleteProject(p1);
runKarma.deleteProject(p2);
console.log(pMap.size);
console.log(tMap.size);