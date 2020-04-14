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

/***/ "./src/clickHandler.js":
/*!*****************************!*\
  !*** ./src/clickHandler.js ***!
  \*****************************/
/*! exports provided: clickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony import */ var _rendermodal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rendermodal.js */ \"./src/rendermodal.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _taskobject_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskobject.js */ \"./src/taskobject.js\");\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _projectobject_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./projectobject.js */ \"./src/projectobject.js\");\n\r\n\r\n\r\n\r\n\r\nconst clickHandler = function () {\r\n    const handleProjectClick = function (pID, e) {\r\n        _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject(pID);\r\n        console.log(\"clickHandler invoked by project : \" + pID);\r\n    }\r\n\r\n    const handleTaskClick = function (tID, e) {\r\n        // renderModal.controller(\"task\", tID);\r\n        console.log(\"clickHandler invoked by task : \" + tID);\r\n    }\r\n    const createTaskClick = function (pID, e) {\r\n        console.log(\"clickHandler invoked by createTask with pID = \" + pID);\r\n        let t = Object(_taskobject_js__WEBPACK_IMPORTED_MODULE_2__[\"taskFactory\"])();\r\n        let newTaskID = Object(_index_js__WEBPACK_IMPORTED_MODULE_3__[\"IDcreator\"])();\r\n        let title = prompt(\"Enter the task name\");\r\n        if (title !== \"\" && title !== null) {\r\n            const p = _index_js__WEBPACK_IMPORTED_MODULE_3__[\"pMap\"].get(pID);\r\n            t.setProjectID(pID);\r\n            t.setTaskTitle(title);\r\n            t.setTaskID(newTaskID);\r\n            p.addTask(t);\r\n            _index_js__WEBPACK_IMPORTED_MODULE_3__[\"tMap\"].set(newTaskID, t);\r\n            console.log(\"task added succesfully!!!!\");\r\n            console.log(_index_js__WEBPACK_IMPORTED_MODULE_3__[\"tMap\"].size);\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject(pID);\r\n        } else console.warn(\"empty task title\");\r\n    }\r\n    const createProjectClick = function (e) {\r\n        console.log(\"clickHandler invoked to create a project\");\r\n        let p = Object(_projectobject_js__WEBPACK_IMPORTED_MODULE_4__[\"projectFactory\"])();\r\n        let newPID = Object(_index_js__WEBPACK_IMPORTED_MODULE_3__[\"IDcreator\"])();\r\n        let title = prompt(\"enter the project title\");\r\n        if (title !== null && title !== \"\") {\r\n            p.setProjectTitle(title);\r\n            _index_js__WEBPACK_IMPORTED_MODULE_3__[\"pMap\"].set(newPID, p);\r\n            console.log(\"project succesfully created\");\r\n            _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listProject();\r\n        } else console.warn(\"empty project title\");\r\n    }\r\n    return {\r\n        handleProjectClick,\r\n        handleTaskClick,\r\n        createTaskClick,\r\n        createProjectClick,\r\n    }\r\n}();\n\n//# sourceURL=webpack:///./src/clickHandler.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display\", function() { return display; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _clickHandler_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./clickHandler.js */ \"./src/clickHandler.js\");\n\r\n\r\n\r\n\r\nconst display = function () {\r\n    const project = document.querySelector('.left-nav')\r\n    const listProject = function () {\r\n        _clearProjectArea();\r\n        for (let [k, v] of _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].entries()) {\r\n            const div = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].controller(\"project\", k);\r\n            project.appendChild(div);\r\n        }\r\n        _addProjectCreator();\r\n    }\r\n    const main = document.querySelector('.main');\r\n    const listTaskInProject = function (pID) {\r\n        _clearTaskArea();\r\n        //ID= iD of the project to be listed\r\n        for (let [k, v] of _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].entries()) {\r\n            if (v.getProjectID() === pID) {\r\n                const div = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].controller(\"task\", parseInt(k));\r\n                main.appendChild(div);\r\n            }\r\n        }\r\n        _addTaskCreator(pID);\r\n    }\r\n\r\n    function _clearTaskArea() {\r\n        const tasks = document.querySelectorAll('.task');\r\n        tasks.forEach(value => main.removeChild(value));\r\n    }\r\n\r\n    function _clearProjectArea() {\r\n        const projects = document.querySelectorAll('.project');\r\n        projects.forEach(value => project.removeChild(value));\r\n    }\r\n\r\n    function _addTaskCreator(pID) {\r\n        const div = document.createElement('div');\r\n        div.classList.add('task')\r\n        div.style.backgroundColor = \"steelblue\";\r\n        div.innerHTML = \"Add a new Task\";\r\n        div.setAttribute(\"id\", `project${pID}`);\r\n        div.addEventListener('click', (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"clickHandler\"].createTaskClick(pID, e));\r\n        main.appendChild(div);\r\n    }\r\n\r\n    function _addProjectCreator() {\r\n        const div = document.createElement('div');\r\n        div.classList.add('project');\r\n        div.style.backgroundColor = \"steelblue\";\r\n        div.innerHTML = \"Add a new Project\";\r\n        div.setAttribute(\"id\", \"\");\r\n        div.addEventListener('click', (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_2__[\"clickHandler\"].createProjectClick(e));\r\n        project.appendChild(div);\r\n    }\r\n    return {\r\n        listProject,\r\n        listTaskInProject\r\n    }\r\n}();\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: IDcreator, pMap, tMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IDcreator\", function() { return IDcreator; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pMap\", function() { return pMap; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tMap\", function() { return tMap; });\n/* harmony import */ var _projectobject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./projectobject.js */ \"./src/projectobject.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\r\n\r\n// Every task must have a unique ID thus this should be passed in every task\r\nconst IDcreator = (function () {\r\n  let count = 0;\r\n  return () => {\r\n    count++;\r\n    return count;\r\n  };\r\n})();\r\n/****************************************************************/\r\n/****************************************************************/\r\n/****************************************************************/\r\nconst pMap = new Map();\r\nconst tMap = new Map();\r\n\r\nfunction checkBeforeRun() {\r\n  function _createDefaultProject() {\r\n    const project = Object(_projectobject_js__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])();\r\n    const ID = 0;\r\n    project.setProjectID(0);\r\n    project.setProjectTitle(\"INBOX\");\r\n    pMap.set(ID, project);\r\n  }\r\n\r\n  if (pMap.size === 0) {\r\n    _createDefaultProject();\r\n  }\r\n}\r\ncheckBeforeRun();\r\n\r\nfunction main() {\r\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listProject();\r\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject(0);\r\n}\r\nmain();\n\n//# sourceURL=webpack:///./src/index.js?");

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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickHandler.js */ \"./src/clickHandler.js\");\n// this file module contains the controoler and the functions \r\n// whose work is as follows\r\n// _createTaskDIv ---- creates a task div and attaches an eventListener to instanceof\r\n//                     which handlesclick(defined in this file)\r\n\r\n\r\n\r\n\r\n\r\nconst render = function () {\r\n    const controller = function (str, ID) {\r\n        if (str === \"task\") {\r\n            return _createTaskDiv(ID);\r\n        } else if (str === \"project\") {\r\n            return _createProjectDiv(ID);\r\n        } else return false;\r\n    };\r\n\r\n    function _createTaskDiv(ID) {\r\n        const t = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(ID);\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${t.getTaskTitle()}`;\r\n        div.classList.add('task');\r\n        div.setAttribute(\"id\", `task${ID}`);\r\n        div.addEventListener('click', e => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].handleTaskClick(ID, e));\r\n        return div;\r\n    }\r\n\r\n    function _createProjectDiv(ID) {\r\n        const p = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].get(ID);\r\n        const div = document.createElement('div');\r\n        div.innerHTML = `${p.getProjectTitle()}`;\r\n        div.classList.add('project');\r\n        div.setAttribute(\"id\", `project${ID}`);\r\n        div.addEventListener('click', e => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].handleProjectClick(ID));\r\n        return div;\r\n    }\r\n\r\n    return {\r\n        controller\r\n    }\r\n}();\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/rendermodal.js":
/*!****************************!*\
  !*** ./src/rendermodal.js ***!
  \****************************/
/*! exports provided: renderModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"renderModal\", function() { return renderModal; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _taskobject_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskobject.js */ \"./src/taskobject.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\r\n\r\n\r\nconst renderModal = (function () {\r\n  //param:- 1. str -->(task or project)\r\n  //        2. ID --> taskID or projectID\r\n  const controller = function (str, ID) {\r\n    if (str === \"task\") {\r\n      return taskModal(ID);\r\n    } else if (str === \"project\") {\r\n      return projectModal(ID);\r\n    } else if (str === \"create Task\") {\r\n      return _addTaskModal(ID);\r\n    }\r\n  };\r\n\r\n  function taskModal(tID) {\r\n    //get the task from taskMap using taskID\r\n    const task = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].get(tID);\r\n    //select the modal-container from the doc\r\n    const modal = document.querySelector(\".modal-container\");\r\n\r\n    const title = document.querySelector(\".title\");\r\n    title.innerHTML = `${task.getTaskTitle()}`;\r\n\r\n    modal.style.display = \"block\";\r\n\r\n    window.onclick = (e) => {\r\n      if (e.target == modal) {\r\n        modal.style.display = \"none\";\r\n      }\r\n    };\r\n  }\r\n\r\n  function _addTaskModal(pID) {\r\n    const p = _index_js__WEBPACK_IMPORTED_MODULE_0__[\"pMap\"].get(pID);\r\n    let taskTitle = prompt(\"Enter the task title\", \"task\");\r\n    let t = Object(_taskobject_js__WEBPACK_IMPORTED_MODULE_1__[\"taskFactory\"])();\r\n    let tID = Object(_index_js__WEBPACK_IMPORTED_MODULE_0__[\"IDcreator\"])();\r\n    t.setTaskID(tID);\r\n    t.setProjectID(pID);\r\n    t.setTaskTitle(taskTitle);\r\n    _index_js__WEBPACK_IMPORTED_MODULE_0__[\"tMap\"].set(tID, t);\r\n    p.addTask(t);\r\n    // display.listTaskInProject(pID);\r\n  }\r\n  return {\r\n    controller,\r\n  };\r\n})();\n\n//# sourceURL=webpack:///./src/rendermodal.js?");

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