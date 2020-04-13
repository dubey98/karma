import {
    pMap,
    tMap
} from "./index.js";
import {
    display
} from "./displayController.js";

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
        div.addEventListener('click', e => _handleTaskClick(ID, e));
        return div;
    }

    function _createProjectDiv(ID) {
        const p = pMap.get(ID);
        const div = document.createElement('div');
        div.innerHTML = `${p.getProjectTitle()}`;
        div.classList.add('project');
        div.setAttribute("id", `project${ID}`);
        div.addEventListener('click', e => _handleProjectClick(ID, e));
        return div;
    }


    function _handleProjectClick(ID, e) {
        display.listTaskInProject(ID);
    }

    function _handleTaskClick(ID, e) {
        console.log(e);
    }
    return {
        controller
    }
}();