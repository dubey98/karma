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

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display\", function() { return display; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\r\n\r\n\r\nconst display = function () {\r\n    const project = document.querySelector('.left-nav')\r\n    const listProject = function () {\r\n        for (let [k, v] of _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].entries()) {\r\n            const div = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].controller(\"project\", k);\r\n            project.appendChild(div);\r\n        }\r\n        addProjectCreator();\r\n    }\r\n    const main = document.querySelector('.main');\r\n    const listInbox = function () {\r\n        clearTaskArea();\r\n        //select the default project from project map\r\n        const p = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].get(0);\r\n        //retrieve the default list\r\n        for (let [k, v] of _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].entries()) {\r\n            if (v.getProjectID() === 0) {\r\n                const div = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].controller(\"task\", parseInt(k));\r\n                main.appendChild(div);\r\n            }\r\n        }\r\n        addTaskCreator();\r\n    }\r\n    const listTaskInProject = function (ID) {\r\n        clearTaskArea();\r\n        //ID= iD of the project to be listed\r\n        for (let [k, v] of _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].entries()) {\r\n            if (v.getProjectID() === ID) {\r\n                const div = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].controller(\"task\", parseInt(k));\r\n                main.appendChild(div);\r\n            }\r\n        }\r\n        addTaskCreator();\r\n    }\r\n\r\n    function clearTaskArea() {\r\n        const tasks = document.querySelectorAll('.task');\r\n        tasks.forEach((value, key) => main.removeChild(value));\r\n    }\r\n\r\n    function addTaskCreator() {\r\n        const div = document.createElement('div');\r\n        div.classList.add('task')\r\n        div.innerHTML = \"Add a new Task\";\r\n        div.setAttribute(\"id\", \"task-creator\");\r\n        main.appendChild(div);\r\n    }\r\n\r\n    function addProjectCreator() {\r\n        const div = document.createElement('div');\r\n        div.classList.add('project')\r\n        div.innerHTML = \"Add a new Project\";\r\n        div.setAttribute(\"id\", \"project-creator\");\r\n        project.appendChild(div);\r\n    }\r\n    return {\r\n        listProject,\r\n        listInbox,\r\n        listTaskInProject\r\n    }\r\n}();\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: IDcreator, pMap, tMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IDcreator\", function() { return IDcreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pMap\", function() { return pMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tMap\", function() { return tMap; });\n/* harmony import */ var _projectobject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectobject.js */ \"./src/projectobject.js\");\n/* harmony import */ var _karma_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./karma.js */ \"./src/karma.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\r\n\r\n\r\n// Every task must have a unique ID thus this should be passed in every task\r\nconst IDcreator = (function () {\r\n  let count = 0;\r\n  return () => {\r\n    count++;\r\n    return count;\r\n  };\r\n})();\r\n/****************************************************************/\r\n/****************************************************************/\r\n/****************************************************************/\r\nconst pMap = new Map();\r\nconst tMap = new Map();\r\n\r\nfunction checkBeforeRun() {\r\n  function _createDefaultProject() {\r\n    const project = Object(_projectobject_js__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])();\r\n    const ID = 0;\r\n    project.setProjectID(0);\r\n    project.setProjectTitle(\"INBOX\");\r\n    pMap.set(ID, project);\r\n  }\r\n\r\n  if (pMap.size === 0) {\r\n    _createDefaultProject();\r\n  }\r\n}\r\ncheckBeforeRun();\r\n\r\nconst p1 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].createProject();\r\nconst p2 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].createProject();\r\np2.setProjectTitle(\"project 2\")\r\np1.setProjectTitle(\"project 1\")\r\n\r\nlet t1 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\nlet t2 = _karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\nt1.setTaskTitle(\"I am t1 and i am in INBOX and p1\");\r\nt2.setTaskTitle(\"I am t1 and i am in INBOX and p1\");\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTask();\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTaskToProject(p1, t1);\r\n_karma_js__WEBPACK_IMPORTED_MODULE_1__[\"runKarma\"].addTaskToProject(p1, t2);\r\n\r\n_displayController_js__WEBPACK_IMPORTED_MODULE_2__[\"display\"].listProject();\r\n_displayController_js__WEBPACK_IMPORTED_MODULE_2__[\"display\"].listInbox();\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectFactory\", function() { return projectFactory; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n\r\n/**************************************************************/\r\n// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.\r\n//\r\n// Its main methods are:\r\n//\r\n// new Set(iterable) – creates the set, and if an iterable object is provided (usually an array), copies values from it into the set.\r\n// set.add(value) – adds a value, returns the set itself.\r\n// set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.\r\n// set.has(value) – returns true if the value exists in the set, otherwise false.\r\n// set.clear() – removes everything from the set.\r\n// set.size – is the elements count.\r\n/**************************************************************/\r\nconst projectFactory = function () {\r\n  const lists = new Map();\r\n  const tasks = new Set();\r\n  let title = \"Project Title\";\r\n  let projectID;\r\n  const setProjectID = function (ID) {\r\n    projectID = ID;\r\n  };\r\n  const getProjectID = () => projectID;\r\n  const setProjectTitle = function (newTitle) {\r\n    title = newTitle;\r\n  };\r\n  const getProjectTitle = (() => title);\r\n\r\n  const listFactory = function () {\r\n    let title = \"not set\";\r\n    const set = new Set();\r\n    let listID;\r\n    const setListID = function (ID) {\r\n      listID = ID;\r\n    };\r\n    const getListID = function () {\r\n      return listID;\r\n    };\r\n    const getListTitle = () => title;\r\n    const setListTitle = function (newTitle) {\r\n      title = newTitle;\r\n    };\r\n    const addTask = (tID) => {\r\n      let num = parseInt(tID);\r\n      set.add(num);\r\n      return;\r\n    };\r\n    //return true if value existed and deletes it false if not present\r\n    const deleteTask = (tID) => {\r\n      const num = parseInt(tID);\r\n      return set.delete(num);\r\n    };\r\n    //c;ears the whole set\r\n    const _clearList = function () {\r\n      set.clear();\r\n    };\r\n    const getAllTask = function (listID) {\r\n      return set;\r\n    };\r\n    return {\r\n      getListID,\r\n      setListID,\r\n      getListTitle,\r\n      setListTitle,\r\n      addTask, //  taskID\r\n      deleteTask, // taskID\r\n      _clearList,\r\n      getAllTask,\r\n    };\r\n  };\r\n\r\n  const createList = function (title = \"new List\") {\r\n    const ID = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"IDcreator\"])();\r\n    const list = listFactory();\r\n    list.setListID(ID);\r\n    list.setListTitle(title);\r\n    lists.set(ID, list);\r\n    return list;\r\n  };\r\n\r\n  const deleteList = function (list) {\r\n    if (typeof list === Object) {\r\n      let ID = list.getListID();\r\n      if (lists.has(ID) && ID !== 0) {\r\n        return lists.delete(ID);\r\n      }\r\n    } else {\r\n      return false;\r\n    }\r\n  };\r\n\r\n  function _defaultList() {\r\n    const list = listFactory();\r\n    let ID = 0;\r\n    list.setListID(ID);\r\n    list.setListTitle = \"default list\";\r\n    lists.set(ID, list);\r\n  }\r\n  _defaultList();\r\n\r\n  const addTaskToList = function (task, listID = 0) {\r\n    let tID;\r\n    if (typeof (task) === Object) tID = task.getTaskID();\r\n    else tID = parseInt(task);\r\n\r\n    let ID = parseInt(listID);\r\n    //get the indivisual list from the list's\r\n    const list = lists.get(ID);\r\n    list.addTask(tID);\r\n    const t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(tID);\r\n    t.setListID(listID);\r\n  };\r\n\r\n  const deleteTaskFromList = function (task) {\r\n    let tID;\r\n    if (typeof (task) === Object) tID = task.getTaskID();\r\n    else tID = parseInt(task);\r\n    const t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(tID);\r\n    const listID = t.getListID();\r\n    const list = lists.get(listID);\r\n    return list.deleteTask(tID);\r\n  };\r\n\r\n  const addTask = function (task) {\r\n    let tID;\r\n    if (typeof (task) === Object) tID = task.getTaskID();\r\n    else tID = parseInt(task);\r\n    if (_index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].has(tID)) {\r\n      let t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(tID);\r\n      tasks.add(tID);\r\n      t.setProjectID(projectID);\r\n      addTaskToList(tID, 0);\r\n      task.setListID(0);\r\n    } else return false;\r\n  }\r\n\r\n  const deleteTask = function (task) {\r\n    let tID;\r\n    if (typeof (task) === Object) {\r\n      tID = task.getTaskID();\r\n    } else {\r\n      tID = parseInt(task);\r\n    }\r\n    //get task from taskID and list from listID\r\n    let t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(tID);\r\n    let listID = t.getListID();\r\n    //delete task from list\r\n    let list = lists.get(listID);\r\n    list.deleteTask(tID);\r\n    //delete task from tasks\r\n    tasks.delete(tID);\r\n    //delete from the main task list\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].delete(tID);\r\n  }\r\n\r\n  const getList = (listID) => lists.get(listID);\r\n\r\n  const getAllLists = () => lists;\r\n\r\n  return {\r\n    //getters and setters\r\n    getProjectID,\r\n    setProjectID,\r\n    setProjectTitle,\r\n    getProjectTitle,\r\n    //returns the list after creating it....\r\n    createList,\r\n    //delete's list param = taskID returns true if succesfull\r\n    deleteList,\r\n    // returns the list a set of taskID's  param = listID\r\n    getList,\r\n    //returns a Map of all lists\r\n    getAllLists,\r\n    //param = task and listID((optional)--default===0)\r\n    addTaskToList,\r\n    //parma = task return true if succesfull\r\n    deleteTaskFromList,\r\n    //parma = task or taskID\r\n    addTask,\r\n    //param = (task or taskID)\r\n    deleteTask,\r\n  };\r\n}\n\n//# sourceURL=webpack:///./src/projectobject.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\r\n\r\n\r\nconst render = function () {\r\n    const controller = function (str, ID) {\r\n        if (str === \"task\") {\r\n            return _createTaskDiv(ID);\r\n        } else if (str === \"project\") {\r\n            return _createProjectDiv(ID);\r\n        } else return false;\r\n    };\r\n\r\n    function _createTaskDiv(ID) {\r\n        const t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(ID);\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${t.getTaskTitle()}`;\r\n        div.classList.add('task');\r\n        div.setAttribute(\"id\", `task${ID}`);\r\n        div.addEventListener('click', e => _handleTaskClick(ID, e));\r\n        return div;\r\n    }\r\n\r\n    function _createProjectDiv(ID) {\r\n        const p = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].get(ID);\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${p.getProjectTitle()}`;\r\n        div.classList.add('project');\r\n        div.setAttribute(\"id\", `project${ID}`);\r\n        div.addEventListener('click', e => _handleProjectClick(ID, e));\r\n        return div;\r\n    }\r\n\r\n\r\n    function _handleProjectClick(ID, e) {\r\n        _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject(ID);\r\n    }\r\n\r\n    function _handleTaskClick(ID, e) {\r\n        console.log(e);\r\n    }\r\n    return {\r\n        controller\r\n    }\r\n}();\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/taskobject.js":
/*!***************************!*\
  !*** ./src/taskobject.js ***!
  \***************************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\nconst taskFactory = function (title = \"Title\", dueDate = \"not set\") {\r\n  let description = \"\";\r\n  let completed = false;\r\n  let priority = 5;\r\n\r\n  let taskID;\r\n  let listID = 0;\r\n  let projectID = 0;\r\n\r\n  const setTaskID = function (ID) {\r\n    taskID = ID;\r\n  };\r\n  const setlistID = function (ID) {\r\n    listID = ID;\r\n  };\r\n  const setProjectID = function (ID) {\r\n    projectID = ID;\r\n  };\r\n  const setTaskTitle = function (newTitle) {\r\n    title = newTitle;\r\n  }\r\n  const changePriority = (p) => {\r\n    let num = parseInt(p);\r\n    if (num <= 5 && num >= 1) priority = num;\r\n    else priority = 5;\r\n  };\r\n  const completeTask = () => {\r\n    if (completed === false) completed = true;\r\n    else completed = false;\r\n  };\r\n  const getTaskID = () => taskID;\r\n  const getProjectID = () => projectID;\r\n  const getListID = () => listID;\r\n  const getTaskTitle = () => title;\r\n  const getDueDate = () => dueDate;\r\n  const getDescription = () => description;\r\n  const isCompleted = () => completed;\r\n  const getPriority = () => priority;\r\n  return {\r\n    setTaskID,\r\n    getTaskID,\r\n    setlistID,\r\n    getListID,\r\n    getProjectID,\r\n    setProjectID,\r\n    getTaskTitle,\r\n    setTaskTitle,\r\n    getDueDate,\r\n    getDescription,\r\n    isCompleted,\r\n    completeTask,\r\n    changePriority,\r\n    getPriority,\r\n  };\r\n};\n\n//# sourceURL=webpack:///./src/taskobject.js?");

/***/ })

/******/ });