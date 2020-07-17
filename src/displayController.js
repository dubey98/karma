import { projects, tasks } from "./index";
import { render } from "./render.js";
import { retrieveData } from "./savedata";

export const display = (function () {
  //grab the respectted divs
  const projectList = document.getElementById("projectList");
  const taskList = document.getElementById("taskList");

  //  remive all the children of any element
  const _removeChildren = function (element) {
    element.innerHTML = "";
  };

  const listProject = function () {
    // clean up the DOM first
    _removeChildren(projectList);

    // Create all the projects element
    for (let project in projects) {
      const newProjectDiv = render.makeProjectDiv(projects[project]);
      projectList.appendChild(newProjectDiv);
    }
    //creaete the project creator div
    projectList.appendChild(render.createProjectCreatorDiv());
  };

  const listTaskInProject = () => {
    console.log("list task in project");
  };
  return {
    listProject,
    listTaskInProject,
  };
})();
