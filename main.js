/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: IDcreator, pMap, tMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IDcreator\", function() { return IDcreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pMap\", function() { return pMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tMap\", function() { return tMap; });\n/* harmony import */ var _projectobject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectobject.js */ \"./src/projectobject.js\");\n/* harmony import */ var _karma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./karma.js */ \"./src/karma.js\");\n\r\n\r\n// Every task must have a unique ID thus this should be passed in every task\r\nconst IDcreator = (function () {\r\n  let count = 0;\r\n  return () => {\r\n    count++;\r\n    return count;\r\n  };\r\n})();\r\n/****************************************************************/\r\n/****************************************************************/\r\n/****************************************************************/\r\nconst pMap = new Map();\r\nconst tMap = new Map();\r\n\r\nfunction checkBeforeRun() {\r\n  function _createDefaultProject() {\r\n    const project = Object(_projectobject_js__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])();\r\n    const ID = 0;\r\n    project.setProjectID(0);\r\n    pMap.set(ID, project);\r\n  }\r\n\r\n  if (pMap.size === 0) {\r\n    _createDefaultProject();\r\n  }\r\n}\r\ncheckBeforeRun();\r\n\r\nconst p1 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].createProject();\r\nconst p2 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].createProject();\r\n\r\nconsole.log(typeof (p1));\r\nconsole.log(\"size of pMap is : \" + pMap.size);\r\nlet t1 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\nlet t2 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\nconsole.log(pMap.get(0));\r\nconsole.log(\"size of tMap is : \" + tMap.size);\r\nconsole.log(\"------------------------------------\");\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTaskToProject(p1, t1);\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTaskToProject(p1, t2);\r\n\r\nfor (let [k, v] of pMap.entries()) {\r\n  console.log(v.getProjectID());\r\n}\r\nconsole.log(\"end of pMap\");\r\nfor (let [k, v] of tMap.entries()) {\r\n  console.log(v.getTaskID());\r\n}\r\nconsole.log(\"end of tMap\");\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].deleteProject(p1);\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].deleteProject(p2);\r\nconsole.log(pMap.size);\r\nconsole.log(tMap.size);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/karma.js":
/*!**********************!*\
  !*** ./src/karma.js ***!
  \**********************/
/*! exports provided: runKarma */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"runKarma\", function() { return runKarma; });\n/* harmony import */ var _taskobject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskobject.js */ \"./src/taskobject.js\");\n/* harmony import */ var _projectobject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectobject.js */ \"./src/projectobject.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n\r\n\r\n\r\nconst runKarma = (function () {\r\n  const createProject = function () {\r\n    const project = Object(_projectobject_js__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])();\r\n    const ID = Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"IDcreator\"])();\r\n    project.setProjectID(ID);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].set(ID, project);\r\n    return project;\r\n  };\r\n  const deleteProject = function (p) {\r\n    const ID = p.getProjectID();\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].has(ID) && ID !== 0) {\r\n      _index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].delete(ID);\r\n      for (let [key, value] of _index_js__WEBPACK_IMPORTED_MODULE_2__[\"tMap\"].entries()) {\r\n        if (value.getProjectID() === ID) {\r\n          _index_js__WEBPACK_IMPORTED_MODULE_2__[\"tMap\"].delete(key);\r\n        }\r\n      }\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  };\r\n  const addTask = function () {\r\n    const taskID = Object(_index_js__WEBPACK_IMPORTED_MODULE_2__[\"IDcreator\"])();\r\n    const task = Object(_taskobject_js__WEBPACK_IMPORTED_MODULE_0__[\"taskFactory\"])();\r\n    task.setTaskID(taskID);\r\n    task.setProjectID(0);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_2__[\"tMap\"].set(taskID, task);\r\n    return task;\r\n  };\r\n  const deleteTask = function (task) {\r\n    const ID = task.getTaskID();\r\n    //delete the task from tMap\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_2__[\"tMap\"].has(ID)) {\r\n      _index_js__WEBPACK_IMPORTED_MODULE_2__[\"tMap\"].delete(ID);\r\n    } else return false;\r\n    //delete the task from containing project\r\n    const pID = task.getProjectID();\r\n    const p = _index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].get(pID);\r\n    p.deleteTask(task);\r\n    return true;\r\n  };\r\n  const addTaskToProject = function (project, task) {\r\n    const pID = project.getProjectID();\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].has(pID)) {\r\n      const p = _index_js__WEBPACK_IMPORTED_MODULE_2__[\"pMap\"].get(pID);\r\n      task.setProjectID(pID);\r\n      p.addTask(task);\r\n      return true;\r\n    } else return false;\r\n  };\r\n  return {\r\n    addTaskToProject,\r\n    deleteTask,\r\n    addTask,\r\n    deleteProject,\r\n    createProject\r\n  };\r\n})();\n\n//# sourceURL=webpack:///./src/karma.js?");

/***/ }),

/***/ "./src/projectobject.js":
/*!******************************!*\
  !*** ./src/projectobject.js ***!
  \******************************/
/*! exports provided: projectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectFactory\", function() { return projectFactory; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.\r\n\r\n// Its main methods are:\r\n\r\n// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.\r\n// set.add(value) – adds a value, returns the set itself.\r\n// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.\r\n// set.has(value) – returns true if the value exists in the set, otherwise false.\r\n// set.clear() – removes everything from the set.\r\n// set.size – is the elements count.\r\nconst projectFactory = function () {\r\n  const lists = new Map();\r\n  const tasks = new Map();\r\n  let title;\r\n  let projectID;\r\n  const setProjectID = function (ID) {\r\n    projectID = ID;\r\n  };\r\n  const getProjectID = () => projectID;\r\n  const setProjectTitle = function (newTitle) {\r\n    title = newTitle;\r\n  };\r\n  const getProjectTitle = () => title;\r\n\r\n  const listFactory = function () {\r\n    let title = \"not set\";\r\n    const set = new Set();\r\n    let listID;\r\n    const setListID = function (ID) {\r\n      listID = ID;\r\n    };\r\n    const getListID = () => listID;\r\n    const getListName = () => title;\r\n    const setListName = function (newTitle) {\r\n      title = newTitle;\r\n    };\r\n    const addTask = (ID) => {\r\n      let num = parseInt(ID);\r\n      set.add(num);\r\n      return;\r\n    };\r\n    //return true if value existed and deletes it false if not present\r\n    const deleteTask = (tID) => {\r\n      const num = parseInt(tID);\r\n      return set.delete(num);\r\n    };\r\n    //c;ears the whole set\r\n    const _clearList = function () {\r\n      set.clear();\r\n    };\r\n    const getAllTask = function (listID) {\r\n      return set;\r\n    };\r\n    return {\r\n      getListID,\r\n      setListID,\r\n      getListName,\r\n      setListName,\r\n      addTask,\r\n      deleteTask,\r\n      _clearList,\r\n      getAllTask,\r\n    };\r\n  };\r\n\r\n  const createList = function (title = \"new List\") {\r\n    const ID = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"IDcreator\"])();\r\n    const list = listFactory();\r\n    list.setListID(ID);\r\n    list.setListName(title);\r\n    lists.set(ID, list);\r\n    return list;\r\n  };\r\n\r\n  const deleteList = function (list) {\r\n    let ID = parseInt(list.getListID());\r\n    if (lists.has(ID) && ID !== 0) {\r\n      lists.delete(ID);\r\n      return true;\r\n    } else {\r\n      return false;\r\n    }\r\n  };\r\n\r\n  (function _defaultList() {\r\n    const list = listFactory();\r\n    let ID = 0;\r\n    list.setListID(ID);\r\n    list.setListName = \"default list\";\r\n    lists.set(ID, list);\r\n  })();\r\n\r\n  const addTaskToList = function (task, listID = 0) {\r\n    let ID = parseInt(listID);\r\n    //get the indivisual list from the list's\r\n    const list = lists.get(ID);\r\n    list.addTask(task.getTaskID());\r\n  };\r\n  const deleteTaskFromList = function (task) {\r\n    const tID = task.getTaskID();\r\n    const listID = task.getListID();\r\n    const list = lists.get(listID);\r\n    return list.deleteTask(tID);\r\n  };\r\n\r\n  //default adding of tasks\r\n  const addTask = function (task) {\r\n    //add task to the main task list\r\n    tasks.set(task.getTaskID(), task);\r\n    //add task to default list\r\n    addTaskToList(task, 0);\r\n  };\r\n  const deleteTask = function (task) {\r\n    //find the taskID\r\n    const tID = task.getTaskID();\r\n    //find which list it belongs to\r\n    const listID = task.getListID();\r\n    //get the list and delete the taskID from there\r\n    const list = lists.get(listID);\r\n    list.deleteTask(tID);\r\n    //delete from the main task list\r\n    tasks.delete(tID);\r\n  };\r\n  const getAllLists = function () {\r\n    return lists;\r\n  };\r\n  /***************************************************/\r\n  //auxilliary functions to modify a list\r\n  const getList = function (listID) {\r\n    return lists.get(listID);\r\n  };\r\n\r\n  return {\r\n    //\r\n    getProjectID,\r\n    setProjectID,\r\n    setProjectTitle,\r\n    getProjectTitle,\r\n    //returns the list after creating it....\r\n    createList,\r\n    //delete's list param = taskID returns true if succesfull\r\n    deleteList,\r\n    // returns the list a set of taskID's  param = listID\r\n    getList,\r\n    //param = task and listID((optional)--default===0)\r\n    addTaskToList,\r\n    //parma = task return true if succesfull\r\n    deleteTaskFromList,\r\n    //parma = task\r\n    addTask,\r\n    //param = task\r\n    deleteTask,\r\n    //returns a Map of all lists\r\n    getAllLists,\r\n  };\r\n};\n\n//# sourceURL=webpack:///./src/projectobject.js?");

/***/ }),

/***/ "./src/taskobject.js":
/*!***************************!*\
  !*** ./src/taskobject.js ***!
  \***************************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\nconst taskFactory = function (title = \"Title\", dueDate = \"not set\") {\r\n  let description = \"\";\r\n  let completed = false;\r\n  let priority = 5;\r\n\r\n  let taskID;\r\n  let listID = 0;\r\n  let projectID = 0;\r\n\r\n  const setTaskID = function (ID) {\r\n    taskID = ID;\r\n  };\r\n  const setlistID = function (ID) {\r\n    listID = ID;\r\n  };\r\n  const setProjectID = function (ID) {\r\n    projectID = ID;\r\n  };\r\n  const changePriority = (p) => {\r\n    let num = parseInt(p);\r\n    if (num <= 5 && num >= 1) priority = num;\r\n    else priority = 5;\r\n  };\r\n  const completeTask = () => {\r\n    if (completed === false) completed = true;\r\n    else completed = false;\r\n  };\r\n  const getTaskID = () => taskID;\r\n  const getProjectID = () => projectID;\r\n  const getListID = () => listID;\r\n  const getTitle = () => title;\r\n  const getDueDate = () => dueDate;\r\n  const getDescription = () => description;\r\n  const isCompleted = () => completed;\r\n  const getPriority = () => priority;\r\n  return {\r\n    setTaskID,\r\n    getTaskID,\r\n    setlistID,\r\n    getListID,\r\n    getProjectID,\r\n    setProjectID,\r\n    getDueDate,\r\n    getTitle,\r\n    getDescription,\r\n    isCompleted,\r\n    completeTask,\r\n    changePriority,\r\n    getPriority,\r\n  };\r\n};\n\n//# sourceURL=webpack:///./src/taskobject.js?");

/***/ })

/******/ });