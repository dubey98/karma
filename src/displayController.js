import {
    tMap,
    pMap
} from "./index.js";
import {
    render
} from "./render.js";

export const display = function () {
    const project = document.querySelector('.left-nav')
    const listProject = function () {
        for (let [k, v] of pMap.entries()) {
            const div = render.controller("project", k);
            project.appendChild(div);
        }
        addProjectCreator();
    }
    const main = document.querySelector('.main');
    const listInbox = function () {
        clearTaskArea();
        //select the default project from project map
        const p = pMap.get(0);
        //retrieve the default list
        for (let [k, v] of tMap.entries()) {
            if (v.getProjectID() === 0) {
                const div = render.controller("task", parseInt(k));
                main.appendChild(div);
            }
        }
        addTaskCreator();
    }
    const listTaskInProject = function (ID) {
        clearTaskArea();
        //ID= iD of the project to be listed
        for (let [k, v] of tMap.entries()) {
            if (v.getProjectID() === ID) {
                const div = render.controller("task", parseInt(k));
                main.appendChild(div);
            }
        }
        addTaskCreator();
    }

    function clearTaskArea() {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach((value, key) => main.removeChild(value));
    }

    function addTaskCreator() {
        const div = document.createElement('div');
        div.classList.add('task')
        div.innerHTML = "Add a new Task";
        div.setAttribute("id", "task-creator");
        main.appendChild(div);
    }

    function addProjectCreator() {
        const div = document.createElement('div');
        div.classList.add('project')
        div.innerHTML = "Add a new Project";
        div.setAttribute("id", "project-creator");
        project.appendChild(div);
    }
    return {
        listProject,
        listInbox,
        listTaskInProject
    }
}();