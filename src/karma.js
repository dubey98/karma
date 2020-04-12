import {
  taskFactory
} from "./taskobject.js";
import {
  projectFactory
} from "./projectobject.js";
import {
  IDcreator,
  tMap,
  pMap
} from "./index.js";

export const runKarma = (function () {
  const createProject = function () {
    const project = projectFactory();
    const ID = IDcreator();
    project.setProjectID(ID);
    pMap.set(ID, project);
    return project;
  };
  const deleteProject = function (p) {
    const ID = p.getProjectID();
    if (pMap.has(ID) && ID !== 0) {
      pMap.delete(ID);
      for (let [key, value] of tMap.entries()) {
        if (value.getProjectID() === ID) {
          tMap.delete(key);
        }
      }
      return true;
    } else {
      return false;
    }
  };
  const addTask = function () {
    const taskID = IDcreator();
    const task = taskFactory();
    task.setTaskID(taskID);
    task.setProjectID(0);
    tMap.set(taskID, task);
    return task;
  };
  const deleteTask = function (task) {
    const ID = task.getTaskID();
    //delete the task from tMap
    if (tMap.has(ID)) {
      tMap.delete(ID);
    } else return false;
    //delete the task from containing project
    const pID = task.getProjectID();
    const p = pMap.get(pID);
    p.deleteTask(task);
    return true;
  };
  const addTaskToProject = function (project, task) {
    const pID = project.getProjectID();
    if (pMap.has(pID)) {
      const p = pMap.get(pID);
      task.setProjectID(pID);
      p.addTask(task);
      return true;
    } else return false;
  };
  return {
    addTaskToProject,
    deleteTask,
    addTask,
    deleteProject,
    createProject
  };
})();