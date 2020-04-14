import {
    renderModal
} from "./rendermodal.js"
import {
    display
} from "./displayController.js"
import {
    taskFactory
} from "./taskobject.js";
import {
    IDcreator,
    tMap,
    pMap
} from "./index.js";
import {
    projectFactory
} from "./projectobject.js";
export const clickHandler = function () {
    const handleProjectClick = function (pID, e) {
        display.listTaskInProject(pID);
        console.log("clickHandler invoked by project : " + pID);
    }

    const handleTaskClick = function (tID, e) {
        // renderModal.controller("task", tID);
        console.log("clickHandler invoked by task : " + tID);
    }
    const createTaskClick = function (pID, e) {
        console.log("clickHandler invoked by createTask with pID = " + pID);
        let t = taskFactory();
        let newTaskID = IDcreator();
        let title = prompt("Enter the task name");
        if (title !== "" && title !== null) {
            const p = pMap.get(pID);
            t.setProjectID(pID);
            t.setTaskTitle(title);
            t.setTaskID(newTaskID);
            p.addTask(t);
            tMap.set(newTaskID, t);
            console.log("task added succesfully!!!!");
            console.log(tMap.size);
            display.listTaskInProject(pID);
        } else console.warn("empty task title");
    }
    const createProjectClick = function (e) {
        console.log("clickHandler invoked to create a project");
        let p = projectFactory();
        let newPID = IDcreator();
        let title = prompt("enter the project title");
        if (title !== null && title !== "") {
            p.setProjectTitle(title);
            pMap.set(newPID, p);
            console.log("project succesfully created");
            display.listProject();
        } else console.warn("empty project title");
    }
    return {
        handleProjectClick,
        handleTaskClick,
        createTaskClick,
        createProjectClick,
    }
}();