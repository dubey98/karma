// this file module contains the controoler and the functions 
// whose work is as follows
// _createTaskDIv ---- creates a task div and attaches an eventListener to instanceof
//                     which handlesclick(defined in this file)


import {
    pMap,
    tMap
} from "./index.js";
import {
    clickHandler
} from "./clickHandler.js"

export const render = function () {
    const controller = function (str, ID) {
        if (str === "task") {
            return _createTaskDiv(ID);
        } else if (str === "project") {
            return _createProjectDiv(ID);
        } else return false;
    };

    function _createTaskDiv(ID) {
        const t = tMap.get(ID);
        const div = document.createElement('div');
        div.innerHTML = `${t.getTaskTitle()}`;
        div.classList.add('task');
        div.setAttribute("id", `task${ID}`);
        div.addEventListener('click', e => clickHandler.handleTaskClick(ID, e));
        return div;
    }

    function _createProjectDiv(ID) {
        const p = pMap.get(ID);
        const div = document.createElement('div');
        div.innerHTML = `${p.getProjectTitle()}`;
        div.classList.add('project');
        div.setAttribute("id", `project${ID}`);
        div.addEventListener('click', e => clickHandler.handleProjectClick(ID));
        return div;
    }

    return {
        controller
    }
}();