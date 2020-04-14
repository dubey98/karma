import {
    tMap,
    pMap
} from "./index.js";
import {
    render
} from "./render.js";
import {
    clickHandler
} from "./clickHandler.js";

export const display = function () {
    const project = document.querySelector('.left-nav')
    const listProject = function () {
        _clearProjectArea();
        for (let [k, v] of pMap.entries()) {
            const div = render.controller("project", k);
            project.appendChild(div);
        }
        _addProjectCreator();
    }
    const main = document.querySelector('.main');
    const listTaskInProject = function (pID) {
        _clearTaskArea();
        //ID= iD of the project to be listed
        for (let [k, v] of tMap.entries()) {
            if (v.getProjectID() === pID) {
                const div = render.controller("task", parseInt(k));
                main.appendChild(div);
            }
        }
        _addTaskCreator(pID);
    }

    function _clearTaskArea() {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(value => main.removeChild(value));
    }

    function _clearProjectArea() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(value => project.removeChild(value));
    }

    function _addTaskCreator(pID) {
        const div = document.createElement('div');
        div.classList.add('task')
        div.style.backgroundColor = "steelblue";
        div.innerHTML = "Add a new Task";
        div.setAttribute("id", `project${pID}`);
        div.addEventListener('click', (e) => clickHandler.createTaskClick(pID, e));
        main.appendChild(div);
    }

    function _addProjectCreator() {
        const div = document.createElement('div');
        div.classList.add('project');
        div.style.backgroundColor = "steelblue";
        div.innerHTML = "Add a new Project";
        div.setAttribute("id", "");
        div.addEventListener('click', (e) => clickHandler.createProjectClick(e));
        project.appendChild(div);
    }
    return {
        listProject,
        listTaskInProject
    }
}();