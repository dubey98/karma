import { projectFactory } from "./Project.js";
import { display } from "./displayController.js";

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
  const projects = {};
  const tasks = {};
  const defaultProject = projectFactory();
  defaultProject.projectID = "0";
  defaultProject.title = "INBOX";
  projects["0"] = defaultProject;
  localStorage.setItem("projects", JSON.stringify(projects));
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function runKarma() {
  display.listProject();
  display.listTaskInProject();
}
