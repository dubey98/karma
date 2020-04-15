export const taskFactory = function (title, dueDate, description, priority = 5, taskID, projectID, completed = false) {
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