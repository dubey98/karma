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
        } else if (str == "create project") {
            return _createProjectCreatorDiv();
        } else if (str == "create task") {
            return _createTaskCreatorDiv(ID);
        }
    };

    const _createTaskDiv = function (ID) {
        console.log("createTaskdiv called")
        if (tMap.has(ID)) {
            const t = tMap.get(ID);
            const div = document.createElement('div');


            const taskHeader = document.createElement('div');
            taskHeader.classList.add('task-header');
            taskHeader.innerHTML = `priority  : ${t.priority}`;

            const taskMain = document.createElement('div');
            taskMain.classList.add("task-main");
            taskMain.innerHTML = `${t.title}`;

            const taskFooter = document.createElement('div');
            taskFooter.classList.add("task-footer");
            taskFooter.innerHTML = `Due Date : `;

            div.appendChild(taskHeader);
            div.appendChild(taskMain);
            div.appendChild(taskFooter);


            div.classList.add('task');
            div.setAttribute("id", `task${ID}`);
            div.addEventListener('click', e => clickHandler.handleTaskClick(ID, e));
            return div;
        } else return document.createElement("div");

    }

    function _createProjectDiv(ID) {
        const p = pMap.get(ID);
        const div = document.createElement('div');
        div.innerHTML = `${p.title}`;
        div.classList.add('project');
        div.setAttribute("id", `project${ID}`);
        div.addEventListener('click', e => clickHandler.handleProjectClick(ID));
        return div;
    }

    function _createTaskCreatorDiv(pID) {
        const div = document.createElement('div');
        div.classList.add('task')
        div.style.backgroundColor = "rgba(110, 95, 207, 0.8)";
        div.style.color = "white";
        div.innerHTML = "Add a new Task";
        div.setAttribute("id", `project${pID}`);
        div.addEventListener('click', (e) => clickHandler.createTaskClick(pID, e));
        return div;
    }

    function _createProjectCreatorDiv() {
        const div = document.createElement('div');
        div.classList.add('project');
        div.style.backgroundColor = "rgba(110, 95, 207, 0.8)";
        div.style.color = "white";
        div.innerHTML = "Add a new Project";
        div.setAttribute("id", "");
        div.addEventListener('click', (e) => clickHandler.createProjectClick(e));
        return div;
    }

    // function modifyTaskDiv(pID) {
    //     const main = document.querySelector('.main');
    //     const div = document.querySelector(`.main>#project${pID}`);

    //     const replacement = document.createElement('div');
    //     replacement.classList.add('task');

    //     const taskHeader = document.createElement('input');
    //     taskHeader.classList.add('task-header');
    //     // taskHeader.innerHTML = `priority  : ${t.getPriority()}`;

    //     const taskMain = document.createElement('input');
    //     taskMain.inputMode = "text";
    //     taskMain.classList.add("task-main");
    //     // taskMain.innerHTML = `${t.getTaskTitle()}`;

    //     const taskFooter = document.createElement('input');
    //     taskFooter.classList.add("task-footer");
    //     // taskFooter.innerHTML = `Due Date : `;

    //     replacement.appendChild(taskHeader);
    //     replacement.appendChild(taskMain);
    //     replacement.appendChild(taskFooter);

    //     main.replaceChild(replacement, div);
    // }

    return {
        controller
    }
}();