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
        const div = render.controller("create project");
        project.appendChild(div);
    }
    const main = document.querySelector('.main');
    const listTaskInProject = function (pID) {
        _clearTaskArea();
        //ID= iD of the project to be listed
        for (let k of tMap.keys()) {
            let v = tMap.get(k);
            if (parseInt(v.projectID) == pID) {
                const div = render.controller("task", parseInt(k));
                main.appendChild(div);
            }
        }
        const div = render.controller("create task", pID);
        main.appendChild(div);
    }

    function _clearTaskArea() {
        const tasks = document.querySelectorAll('.task');
        tasks.forEach(value => main.removeChild(value));
    }

    function _clearProjectArea() {
        const projects = document.querySelectorAll('.project');
        projects.forEach(value => project.removeChild(value));
    }


    return {
        listProject,
        listTaskInProject
    }
}();