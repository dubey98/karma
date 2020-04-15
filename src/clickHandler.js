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
    pMap,
} from "./index.js";
import {
    saveData
} from "./savedata.js"
import {
    projectFactory
} from "./projectobject.js";
export const clickHandler = function () {
    const handleProjectClick = function (pID, e) {
        display.listTaskInProject(pID);
        console.log("clickHandler invoked by project : " + pID);
    }

    const handleTaskClick = function (tID, e) {
        renderModal.controller("task", tID);
        // console.log("clickHandler invoked by task : " + tID);
    }
    const createTaskClick = function (pID, e) {
        // console.log("clickHandler invoked by createTask with pID = " + pID);
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
            saveData();
            // console.log("task added succesfully!!!!");
            console.log(tMap.size);
            display.listTaskInProject(pID);
        } else console.warn("empty task title");
    }
    const createProjectClick = function (e) {
        // console.log("clickHandler invoked to create a project");
        let p = projectFactory();
        let newPID = IDcreator();
        let title = prompt("enter the project title");
        if (title !== null && title !== "") {
            p.setProjectTitle(title);
            p.setProjectID(newPID);
            pMap.set(newPID, p);
            saveData();
            // console.log("project succesfully created");
            display.listProject();
        } else console.warn("empty project title");
    }
    const changeTitle = function (tID) {
        const t = tMap.get(tID);
        const newTitle = prompt("Change the task title");
        if (newTitle != "" && newTitle != null) {
            t.setTaskTitle(newTitle);
            saveData();
            const pID = t.getProjectID();
            display.listTaskInProject(pID);
        }
    }
    const changeDueDate = function (tID) {
        const t = tMap.get(tID);
        const newDate = prompt("Change the due date");
        if (newDate != "" && newDate != null) {
            t.setDueDate(newDate);
            saveData();
            const pID = t.getProjectID();
            display.listTaskInProject(pID);
        }
    }
    const changePriority = function (tID) {
        const t = tMap.get(tID);
        const newPriority = prompt("Change the priorirty");
        if (newPriority != "" && newPriority != null) {
            t.setPriority(newPriority);
            saveData();
            const pID = t.getProjectID();
            display.listTaskInProject(pID);
        }
    }
    const deleteTask = function (tID) {
        const confirm = window.confirm("delete task?");
        if (confirm) {
            const t = tMap.get(tID);
            const p = pMap.get(t.getProjectID());
            p.deleteTask(tID);
            saveData();
            display.listTaskInProject(p.getProjectID());
        }
    }

    const deleteProject = function (pID) {
        const confirm = window.confirm("DELETE PROJECT? This will delete all your tasks!!!");
        if (confirm) {
            const p = pMap.delete(pID);
            for (let [k, v] of tMap.entries()) {
                if (v.getProjectID() === pID) {
                    tMap.delete(k);
                }
            }
            saveData();
            display.listProject();
            display.listTaskInProject(0);
        }
    }

    return {
        handleProjectClick,
        handleTaskClick,
        createTaskClick,
        createProjectClick,
        changePriority,
        changeDueDate,
        changeTitle,
        deleteTask,
        deleteProject
    }
}();