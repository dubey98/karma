import {
  IDcreator,
  pMap,
  tMap
} from "./index.js";
import {
  saveData
} from "./savedata.js";

export const projectFactory = ({
  title = "new Project",
  projectID = [IDcreator()]
} = {}) => ({
  title,
  projectID,
  getProjectID() {
    return this.projectID;
  },
  setProjectID(projectID) {
    this.projectID = projectID;
    return this;
  },
  getProjectTitle() {
    return this.title;
  },
  setProjectTitle(title) {
    this.title = title;
    return this;
  },
  addTask(t) {
    let tID;
    if (typeof t === Object) tID = t.getTaskID();
    else tID = parseInt(tID);
    if (tMap.has(tID)) {
      const task = tMap.get(tID);
      task.setProjectID(this.projectID);
      saveData();
      return this;
    } else return false;
  },
  deleteTask(tID) {
    if (tMap.has(tID)) {
      tMap.delete(tID);
      saveData();
      return true;
    } else return false;
  }
});
// DO NOT READ BELOW THIS LINE NOTHING USEFULL THERE
/*
// /**************************************************************/
// // A Set is a special type collection – “set of values” (without keys), where each value may occur only once.
// //
// // Its main methods are:
// //
// // new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.
// // set.add(value) – adds a value, returns the set itself.
// // set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
// // set.has(value) – returns true if the value exists in the set, otherwise false.
// // set.clear() – removes everything from the set.
// // set.size – is the elements count.
// /**************************************************************/
// export const projectFactory = function () {
//   let title = "Project Title";
//   let projectID;
//   const setProjectID = function (ID) {
//     this.projectID = ID;
//   };
//   const getProjectID = () => projectID;
//   const setProjectTitle = function (newTitle) {
//     this.title = newTitle;
//   };
//   const getProjectTitle = () => title;
//   /***************************************************************************/
//   // implementation of lists
//   /***************************************************************************/
//   // const tasks = new Set();
//   // const lists = new Map();
//   // const listFactory = function () {
//   //   let title = "not set";
//   //   const set = new Set();
//   //   let listID;
//   //   const setListID = function (ID) {
//   //     listID = ID;
//   //   };
//   //   const getListID = function () {
//   //     return listID;
//   //   };
//   //   const getListTitle = () => title;
//   //   const setListTitle = function (newTitle) {
//   //     title = newTitle;
//   //   };
//   //   const addTask = (tID) => {
//   //     let num = parseInt(tID);
//   //     set.add(num);
//   //     return;
//   //   };
//   //   //return true if value existed and deletes it false if not present
//   //   const deleteTask = (tID) => {
//   //     const num = parseInt(tID);
//   //     return set.delete(num);
//   //   };
//   //   //c;ears the whole set
//   //   const _clearList = function () {
//   //     set.clear();
//   //   };
//   //   const getAllTask = function (listID) {
//   //     return set;
//   //   };
//   //   return {
//   //     getListID,
//   //     setListID,
//   //     getListTitle,
//   //     setListTitle,
//   //     addTask, //  taskID
//   //     deleteTask, // taskID
//   //     _clearList,
//   //     getAllTask,
//   //   };
//   // };

//   // function createList(title = "new List") {
//   //   const ID = IDcreator();
//   //   const list = listFactory();
//   //   list.setListID(ID);
//   //   list.setListTitle(title);
//   //   lists.set(ID, list);
//   //   return list;
//   // };

//   // function deleteList(list) {
//   //   if (typeof list === Object) {
//   //     let ID = list.getListID();
//   //     if (lists.has(ID) && ID !== 0) {
//   //       return lists.delete(ID);
//   //     }
//   //   } else {
//   //     return false;
//   //   }
//   // };

//   // function _defaultList() {
//   //   const list = listFactory();
//   //   let ID = 0;
//   //   list.setListID(ID);
//   //   list.setListTitle = "default list";
//   //   lists.set(ID, list);
//   // }
//   // _defaultList();

//   // function addTaskToList(task, listID = 0) {
//   //   let tID;
//   //   if (typeof (task) === Object) tID = task.getTaskID();
//   //   else tID = parseInt(task);

//   //   let ID = parseInt(listID);
//   //   //get the indivisual list from the list's
//   //   const list = lists.get(ID);
//   //   list.addTask(tID);
//   //   const t = tMap.get(tID);
//   //   t.setListID(listID);
//   // };

//   // function deleteTaskFromList(task) {
//   //   let tID;
//   //   if (typeof (task) === Object) tID = task.getTaskID();
//   //   else tID = parseInt(task);
//   //   const t = tMap.get(tID);
//   //   const listID = t.getListID();
//   //   const list = lists.get(listID);
//   //   return list.deleteTask(tID);
//   // };

//   // function getList(listID) {
//   //   return lists.get(listID);
//   // }

//   // function getAllLists() {
//   //   return lists;
//   // }
//   /***************************************************************************/
//   //ending of list functions
//   /***************************************************************************/
//   function addTask(task) {
//     let tID;
//     if (typeof task === Object) tID = task.getTaskID();
//     else tID = parseInt(task);
//     if (tMap.has(tID)) {
//       let t = tMap.get(tID);
//       // tasks.add(tID);
//       t.setProjectID(projectID);
//       // addTaskToList(tID, 0);
//       // task.setListID(0);
//     } else return false;
//   }

//   function deleteTask(task) {
//     let tID;
//     if (typeof task === Object) {
//       tID = task.getTaskID();
//     } else {
//       tID = parseInt(task);
//     }
//     let t = tMap.get(tID);
//     //get task from taskID and list from listID
//     // let listID = t.getListID();
//     //delete task from list
//     // let list = lists.get(listID);
//     // list.deleteTask(tID);
//     //delete task from tasks
//     // tasks.delete(tID);
//     //delete from the main task list
//     tMap.delete(tID);
//   }

//   return {
//     //various variables
//     // tasks,
//     title,
//     projectID,
//     //getters and setters
//     getProjectID,
//     setProjectID,
//     setProjectTitle,
//     getProjectTitle,
//     //parma = task or taskID
//     addTask,
//     //param = (task or taskID)
//     deleteTask,
//     /******************************************************************* */
//     // lists,
//     // //returns the list after creating it....
//     // createList,
//     // //delete's list param = taskID returns true if succesfull
//     // deleteList,
//     // // returns the list a set of taskID's  param = listID
//     // getList,
//     // //returns a Map of all lists
//     // getAllLists,
//     // //param = task and listID((optional)--default===0)
//     // addTaskToList,
//     // //parma = task return true if succesfull
//     // deleteTaskFromList,
//     /******************************************************************** */
//   };
// };