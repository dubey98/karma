import {
  IDcreator
} from ".";

export const taskFactory = ({
  title = "task",
  dueDate = "",
  completed = false,
  priority = 5,
  taskID = [IDcreator()],
  projectID = 0,
  description = ""
} = {}) => ({
  title,
  dueDate,
  completed,
  priority,
  taskID,
  projectID,
  description,
  setTaskTitle(newtitle) {
    this.title = newtitle;
    return this;
  },
  getTaskTitle() {
    return this.title;
  },
  setTaskID(ID) {
    this.taskID = ID;
    return this;
  },
  getTaskID() {
    return this.taskID;
  },
  getProjectID() {
    return this.projectID;
  },
  setProjectID(ID) {
    this.projectID = ID;
    return this;
  },
  setPriority(num) {
    this.priority = num;
    return this;
  },
  getPriority() {
    return this.priority;
  },
  isCompleted() {
    return this.completed;
  },
  completed() {
    this.completed = true;
    return this;
  },
  getDueDate() {
    return this.dueDate;
  },
  setDueDate(date) {
    this.dueDate = date;
    return this;
  },
  setDescription(description) {
    this.description = description;
    return this;
  },
  getDescription() {
    return this.description;
  }
});

/*export const taskFactory = function (title, dueDate, description, priority = 5, taskID, projectID, completed = false) {

  // let title;
  // let dueDate;
  // let description = "";
  // let completed = false;
  // let priority = 5;
  // let taskID;
  // let projectID;
  // let listID = 0;
  // const setlistID = function (ID) {
  //   listID = ID;
  // };

  function setTaskID(ID) {
    this.taskID = ID;
  };

  function setProjectID(ID) {
    this.projectID = ID;
  };

  function setTaskTitle(newTitle) {
    this.title = newTitle;
  };

  function changePriority(p) {
    let num = parseInt(p);
    if (num <= 5 && num >= 1) this.priority = num;
    else this.priority = 5;
  };

  function completeTask() {
    if (completed === false) this.completed = true;
    else this.completed = false;
  };
  const getTaskID = () => taskID;
  const getProjectID = () => projectID;
  const getTaskTitle = () => title;
  const getDueDate = () => dueDate;
  const getDescription = () => description;
  const isCompleted = () => completed;
  const getPriority = () => priority;
  // const getListID = () => listID;
  return {
    title,
    dueDate,
    description,
    completed,
    priority,
    taskID,
    projectID,
    setTaskID,
    getTaskID,
    // setlistID,
    // getListID,
    getProjectID,
    setProjectID,
    getTaskTitle,
    setTaskTitle,
    getDueDate,
    getDescription,
    isCompleted,
    completeTask,
    changePriority,
    getPriority,
  };
};
*/