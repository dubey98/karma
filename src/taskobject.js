import {
  IDcreator
} from "./index.js";
export const taskFactory = function (title = "Title", dueDate = "not set") {
  let description = "";
  let completed = false;
  let priority = 5;

  let taskID;
  let listID = 0;
  let projectID = 0;

  const setTaskID = function (ID) {
    taskID = ID;
  };
  const setlistID = function (ID) {
    listID = ID;
  };
  const setProjectID = function (ID) {
    projectID = ID;
  };
  const changePriority = (p) => {
    let num = parseInt(p);
    if (num <= 5 && num >= 1) priority = num;
    else priority = 5;
  };
  const completeTask = () => {
    if (completed === false) completed = true;
    else completed = false;
  };
  const getTaskID = () => taskID;
  const getProjectID = () => projectID;
  const getListID = () => listID;
  const getTitle = () => title;
  const getDueDate = () => dueDate;
  const getDescription = () => description;
  const isCompleted = () => completed;
  const getPriority = () => priority;
  return {
    setTaskID,
    getTaskID,
    setlistID,
    getListID,
    getProjectID,
    setProjectID,
    getDueDate,
    getTitle,
    getDescription,
    isCompleted,
    completeTask,
    changePriority,
    getPriority,
  };
};