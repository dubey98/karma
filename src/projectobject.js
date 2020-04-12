import {
  IDcreator
} from "./index.js";
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

// Its main methods are:

// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
export const projectFactory = function () {
  const lists = new Map();
  const tasks = new Map();
  let title;
  let projectID;
  const setProjectID = function (ID) {
    projectID = ID;
  };
  const getProjectID = () => projectID;
  const setProjectTitle = function (newTitle) {
    title = newTitle;
  };
  const getProjectTitle = () => title;

  const listFactory = function () {
    let title = "not set";
    const set = new Set();
    let listID;
    const setListID = function (ID) {
      listID = ID;
    };
    const getListID = () => listID;
    const getListName = () => title;
    const setListName = function (newTitle) {
      title = newTitle;
    };
    const addTask = (ID) => {
      let num = parseInt(ID);
      set.add(num);
      return;
    };
    //return true if value existed and deletes it false if not present
    const deleteTask = (tID) => {
      const num = parseInt(tID);
      return set.delete(num);
    };
    //c;ears the whole set
    const _clearList = function () {
      set.clear();
    };
    const getAllTask = function (listID) {
      return set;
    };
    return {
      getListID,
      setListID,
      getListName,
      setListName,
      addTask,
      deleteTask,
      _clearList,
      getAllTask,
    };
  };

  const createList = function (title = "new List") {
    const ID = IDcreator();
    const list = listFactory();
    list.setListID(ID);
    list.setListName(title);
    lists.set(ID, list);
    return list;
  };

  const deleteList = function (list) {
    let ID = parseInt(list.getListID());
    if (lists.has(ID) && ID !== 0) {
      lists.delete(ID);
      return true;
    } else {
      return false;
    }
  };

  (function _defaultList() {
    const list = listFactory();
    let ID = 0;
    list.setListID(ID);
    list.setListName = "default list";
    lists.set(ID, list);
  })();

  const addTaskToList = function (task, listID = 0) {
    let ID = parseInt(listID);
    //get the indivisual list from the list's
    const list = lists.get(ID);
    list.addTask(task.getTaskID());
  };
  const deleteTaskFromList = function (task) {
    const tID = task.getTaskID();
    const listID = task.getListID();
    const list = lists.get(listID);
    return list.deleteTask(tID);
  };

  //default adding of tasks
  const addTask = function (task) {
    //add task to the main task list
    tasks.set(task.getTaskID(), task);
    //add task to default list
    addTaskToList(task, 0);
  };
  const deleteTask = function (task) {
    //find the taskID
    const tID = task.getTaskID();
    //find which list it belongs to
    const listID = task.getListID();
    //get the list and delete the taskID from there
    const list = lists.get(listID);
    list.deleteTask(tID);
    //delete from the main task list
    tasks.delete(tID);
  };
  const getAllLists = function () {
    return lists;
  };
  /***************************************************/
  //auxilliary functions to modify a list
  const getList = function (listID) {
    return lists.get(listID);
  };

  return {
    //
    getProjectID,
    setProjectID,
    setProjectTitle,
    getProjectTitle,
    //returns the list after creating it....
    createList,
    //delete's list param = taskID returns true if succesfull
    deleteList,
    // returns the list a set of taskID's  param = listID
    getList,
    //param = task and listID((optional)--default===0)
    addTaskToList,
    //parma = task return true if succesfull
    deleteTaskFromList,
    //parma = task
    addTask,
    //param = task
    deleteTask,
    //returns a Map of all lists
    getAllLists,
  };
};