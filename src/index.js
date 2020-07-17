import { projectFactory } from "./Project.js";
import { display } from "./displayController.js";
import { saveData, retrieveData } from "./savedata.js";

// Every task must have a unique ID thus this should be passed in every task
export let projects = {};
export let tasks = {};

//check if the projects and tasks exists in localstorage,if not populate it
(function main() {
  if (!localStorage.getItem("projects") && !localStorage.getItem("tasks")) {
    populateStorage();
    runKarma();
  } else {
    runKarma();
  }
})();

function populateStorage() {
  const defaultProject = projectFactory();
  //this is the only time we set the ID by ourselves
  defaultProject.projectID = "0";
  defaultProject.title = "INBOX";
  projects["0"] = defaultProject;
  saveData();
}

function runKarma() {
  tasks = retrieveData().tasks;
  projects = retrieveData().projects;
  console.log(projects);
  console.log(tasks);
  display.listProject();
  display.listTaskInProject();
}
