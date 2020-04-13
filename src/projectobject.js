import {
  IDcreator,
  pMap,
  tMap,
} from "./index.js";
/**************************************************************/
// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
//
// Its main methods are:
//
// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// set.add(value) – adds a value, returns the set itself.
// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// set.has(value) – returns true if the value exists in the set, otherwise false.
// set.clear() – removes everything from the set.
// set.size – is the elements count.
/**************************************************************/
export const projectFactory = function () {
  const lists = new Map();
  const tasks = new Set();
  let title = "Project Title";
  let projectID;
  const setProjectID = function (ID) {
    projectID = ID;
  };
  const getProjectID = () => projectID;
  const setProjectTitle = function (newTitle) {
    title = newTitle;
  };
  const getProjectTitle = (() => title);

  const listFactory = function () {
    let title = "not set";
    const set = new Set();
    let listID;
    const setListID = function (ID) {
      listID = ID;
    };
    const getListID = function () {
      return listID;
    };
    const getListTitle = () => title;
    const setListTitle = function (newTitle) {
      title = newTitle;
    };
    const addTask = (tID) => {
      let num = parseInt(tID);
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
      getListTitle,
      setListTitle,
      addTask, //  taskID
      deleteTask, // taskID
      _clearList,
      getAllTask,
    };
  };

  const createList = function (title = "new List") {
    const ID = IDcreator();
    const list = listFactory();
    list.setListID(ID);
    list.setListTitle(title);
    lists.set(ID, list);
    return list;
  };

  const deleteList = function (list) {
    if (typeof list === Object) {
      let ID = list.getListID();
      if (lists.has(ID) && ID !== 0) {
        return lists.delete(ID);
      }
    } else {
      return false;
    }
  };

  function _defaultList() {
    const list = listFactory();
    let ID = 0;
    list.setListID(ID);
    list.setListTitle = "default list";
    lists.set(ID, list);
  }
  _defaultList();

  const addTaskToList = function (task, listID = 0) {
    let tID;
    if (typeof (task) === Object) tID = task.getTaskID();
    else tID = parseInt(task);

    let ID = parseInt(listID);
    //get the indivisual list from the list's
    const list = lists.get(ID);
    list.addTask(tID);
    const t = tMap.get(tID);
    t.setListID(listID);
  };

  const deleteTaskFromList = function (task) {
    let tID;
    if (typeof (task) === Object) tID = task.getTaskID();
    else tID = parseInt(task);
    const t = tMap.get(tID);
    const listID = t.getListID();
    const list = lists.get(listID);
    return list.deleteTask(tID);
  };

  const addTask = function (task) {
    let tID;
    if (typeof (task) === Object) tID = task.getTaskID();
    else tID = parseInt(task);
    if (tMap.has(tID)) {
      let t = tMap.get(tID);
      tasks.add(tID);
      t.setProjectID(projectID);
      addTaskToList(tID, 0);
      task.setListID(0);
    } else return false;
  }

  const deleteTask = function (task) {
    let tID;
    if (typeof (task) === Object) {
      tID = task.getTaskID();
    } else {
      tID = parseInt(task);
    }
    //get task from taskID and list from listID
    let t = tMap.get(tID);
    let listID = t.getListID();
    //delete task from list
    let list = lists.get(listID);
    list.deleteTask(tID);
    //delete task from tasks
    tasks.delete(tID);
    //delete from the main task list
    tMap.delete(tID);
  }

  const getList = (listID) => lists.get(listID);

  const getAllLists = () => lists;

  return {
    //getters and setters
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
    //returns a Map of all lists
    getAllLists,
    //param = task and listID((optional)--default===0)
    addTaskToList,
    //parma = task return true if succesfull
    deleteTaskFromList,
    //parma = task or taskID
    addTask,
    //param = (task or taskID)
    deleteTask,
  };
}