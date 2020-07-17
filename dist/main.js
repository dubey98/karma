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

/***/ "./node_modules/nanoid/index.browser.js":
/*!**********************************************!*\
  !*** ./node_modules/nanoid/index.browser.js ***!
  \**********************************************/
/*! exports provided: nanoid, customAlphabet, customRandom, urlAlphabet, random */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"nanoid\", function() { return nanoid; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customAlphabet\", function() { return customAlphabet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"customRandom\", function() { return customRandom; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"random\", function() { return random; });\n/* harmony import */ var _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./url-alphabet/index.js */ \"./node_modules/nanoid/url-alphabet/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return _url_alphabet_index_js__WEBPACK_IMPORTED_MODULE_0__[\"urlAlphabet\"]; });\n\n// This file replaces `index.js` in bundlers like webpack or Rollup,\n// according to `browser` config in `package.json`.\n\n\n\nif (true) {\n  // All bundlers will remove this block in the production bundle.\n  if (\n    typeof navigator !== 'undefined' &&\n    navigator.product === 'ReactNative' &&\n    typeof crypto === 'undefined'\n  ) {\n    throw new Error(\n      'React Native does not have a built-in secure random generator. ' +\n        'If you don’t need unpredictable IDs use `nanoid/non-secure`. ' +\n        'For secure IDs, import `react-native-get-random-values` ' +\n        'before Nano ID. If you use Expo, install `expo-random` ' +\n        'and use `nanoid/async`.'\n    )\n  }\n  if (typeof msCrypto !== 'undefined' && typeof crypto === 'undefined') {\n    throw new Error(\n      'Add `if (!window.crypto) window.crypto = window.msCrypto` ' +\n        'before Nano ID to fix IE 11 support'\n    )\n  }\n  if (typeof crypto === 'undefined') {\n    throw new Error(\n      'Your browser does not have secure random generator. ' +\n        'If you don’t need unpredictable IDs, you can use nanoid/non-secure.'\n    )\n  }\n}\n\nlet random = bytes => crypto.getRandomValues(new Uint8Array(bytes))\n\nlet customRandom = (alphabet, size, getRandom) => {\n  // First, a bitmask is necessary to generate the ID. The bitmask makes bytes\n  // values closer to the alphabet size. The bitmask calculates the closest\n  // `2^31 - 1` number, which exceeds the alphabet size.\n  // For example, the bitmask for the alphabet size 30 is 31 (00011111).\n  // `Math.clz32` is not used, because it is not available in browsers.\n  let mask = (2 << (Math.log(alphabet.length - 1) / Math.LN2)) - 1\n  // Though, the bitmask solution is not perfect since the bytes exceeding\n  // the alphabet size are refused. Therefore, to reliably generate the ID,\n  // the random bytes redundancy has to be satisfied.\n\n  // Note: every hardware random generator call is performance expensive,\n  // because the system call for entropy collection takes a lot of time.\n  // So, to avoid additional system calls, extra bytes are requested in advance.\n\n  // Next, a step determines how many random bytes to generate.\n  // The number of random bytes gets decided upon the ID size, mask,\n  // alphabet size, and magic number 1.6 (using 1.6 peaks at performance\n  // according to benchmarks).\n\n  // `-~f => Math.ceil(f)` if f is a float\n  // `-~i => i + 1` if i is an integer\n  let step = -~((1.6 * mask * size) / alphabet.length)\n\n  return () => {\n    let id = ''\n    while (true) {\n      let bytes = getRandom(step)\n      // A compact alternative for `for (var i = 0; i < step; i++)`.\n      let j = step\n      while (j--) {\n        // Adding `|| ''` refuses a random byte that exceeds the alphabet size.\n        id += alphabet[bytes[j] & mask] || ''\n        // `id.length + 1 === size` is a more compact option.\n        if (id.length === +size) return id\n      }\n    }\n  }\n}\n\nlet customAlphabet = (alphabet, size) => customRandom(alphabet, size, random)\n\nlet nanoid = (size = 21) => {\n  let id = ''\n  let bytes = crypto.getRandomValues(new Uint8Array(size))\n\n  // A compact alternative for `for (var i = 0; i < step; i++)`.\n  while (size--) {\n    // It is incorrect to use bytes exceeding the alphabet size.\n    // The following mask reduces the random byte in the 0-255 value\n    // range to the 0-63 value range. Therefore, adding hacks, such\n    // as empty string fallback or magic numbers, is unneccessary because\n    // the bitmask trims bytes down to the alphabet size.\n    let byte = bytes[size] & 63\n    if (byte < 36) {\n      // `0-9a-z`\n      id += byte.toString(36)\n    } else if (byte < 62) {\n      // `A-Z`\n      id += (byte - 26).toString(36).toUpperCase()\n    } else if (byte < 63) {\n      id += '_'\n    } else {\n      id += '-'\n    }\n  }\n  return id\n}\n\n\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/index.browser.js?");

/***/ }),

/***/ "./node_modules/nanoid/url-alphabet/index.js":
/*!***************************************************!*\
  !*** ./node_modules/nanoid/url-alphabet/index.js ***!
  \***************************************************/
/*! exports provided: urlAlphabet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"urlAlphabet\", function() { return urlAlphabet; });\n// This alphabet uses `A-Za-z0-9_-` symbols. The genetic algorithm helped\n// optimize the gzip compression for this alphabet.\nlet urlAlphabet =\n  'ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW'\n\n\n\n\n//# sourceURL=webpack:///./node_modules/nanoid/url-alphabet/index.js?");

/***/ }),

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/*! exports provided: projectFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectFactory\", function() { return projectFactory; });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\n\nconst projectFactory = (title) => {\n  let projectID = Object(nanoid__WEBPACK_IMPORTED_MODULE_0__[\"nanoid\"])();\n  return {\n    title,\n    projectID,\n  };\n};\n\n\n//# sourceURL=webpack:///./src/Project.js?");

/***/ }),

/***/ "./src/Task.js":
/*!*********************!*\
  !*** ./src/Task.js ***!
  \*********************/
/*! exports provided: taskFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\n\nconst taskFactory = (title, duedate, priority, projectID = \"0\") => {\n  let taskID = Object(nanoid__WEBPACK_IMPORTED_MODULE_0__[\"nanoid\"])();\n  return {\n    title,\n    priority,\n    duedate,\n    taskID,\n    projectID,\n  };\n};\n\n\n//# sourceURL=webpack:///./src/Task.js?");

/***/ }),

/***/ "./src/clickHandler.js":
/*!*****************************!*\
  !*** ./src/clickHandler.js ***!
  \*****************************/
/*! exports provided: clickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _savedata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./savedata */ \"./src/savedata.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\n\n\n\n\nconst clickHandler = (function () {\n  const createProjectClick = function () {\n    const title = prompt(\"Enter the title of project : \");\n    const project = Object(_Project__WEBPACK_IMPORTED_MODULE_1__[\"projectFactory\"])(title);\n\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][project.projectID] = project;\n    Object(_savedata__WEBPACK_IMPORTED_MODULE_3__[\"saveData\"])();\n    _displayController__WEBPACK_IMPORTED_MODULE_4__[\"display\"].listProject();\n  };\n\n  return {\n    createProjectClick,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/clickHandler.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display\", function() { return display; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n/* harmony import */ var _savedata__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedata */ \"./src/savedata.js\");\n\n\n\n\nconst display = (function () {\n  //grab the respectted divs\n  const projectList = document.getElementById(\"projectList\");\n  const taskList = document.getElementById(\"taskList\");\n\n  //  remive all the children of any element\n  const _removeChildren = function (element) {\n    element.innerHTML = \"\";\n  };\n\n  const listProject = function () {\n    // clean up the DOM first\n    _removeChildren(projectList);\n\n    // Create all the projects element\n    for (let project in _index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"]) {\n      const newProjectDiv = _render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].makeProjectDiv(_index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][project]);\n      projectList.appendChild(newProjectDiv);\n    }\n    //creaete the project creator div\n    projectList.appendChild(_render_js__WEBPACK_IMPORTED_MODULE_1__[\"render\"].createProjectCreatorDiv());\n  };\n\n  const listTaskInProject = () => {\n    console.log(\"list task in project\");\n  };\n  return {\n    listProject,\n    listTaskInProject,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: projects, tasks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projects\", function() { return projects; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"tasks\", function() { return tasks; });\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n/* harmony import */ var _savedata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./savedata.js */ \"./src/savedata.js\");\n\n\n\n\n// Every task must have a unique ID thus this should be passed in every task\nlet projects = {};\nlet tasks = {};\n\n//check if the projects and tasks exists in localstorage,if not populate it\n(function main() {\n  if (!localStorage.getItem(\"projects\") && !localStorage.getItem(\"tasks\")) {\n    populateStorage();\n    runKarma();\n  } else {\n    runKarma();\n  }\n})();\n\nfunction populateStorage() {\n  const defaultProject = Object(_Project_js__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])();\n  //this is the only time we set the ID by ourselves\n  defaultProject.projectID = \"0\";\n  defaultProject.title = \"INBOX\";\n  projects[\"0\"] = defaultProject;\n  Object(_savedata_js__WEBPACK_IMPORTED_MODULE_2__[\"saveData\"])();\n}\n\nfunction runKarma() {\n  tasks = Object(_savedata_js__WEBPACK_IMPORTED_MODULE_2__[\"retrieveData\"])().tasks;\n  projects = Object(_savedata_js__WEBPACK_IMPORTED_MODULE_2__[\"retrieveData\"])().projects;\n  console.log(projects);\n  console.log(tasks);\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listProject();\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clickHandler.js */ \"./src/clickHandler.js\");\n// this file module contains the controoler and the functions\n// whose work is as follows\n// _createTaskDIv ---- creates a task div and attaches an eventListener to instanceof\n// which handlesclick(defined in this file)\n\n\n\n\nconst render = (function () {\n  const controller = function (str, ID) {\n    if (str === \"task\") {\n      return _createTaskDiv(ID);\n    } else if (str === \"project\") {\n      return _createProjectDiv(ID);\n    } else if (str == \"create project\") {\n      return _createProjectCreatorDiv();\n    } else if (str == \"create task\") {\n      return _createTaskCreatorDiv(ID);\n    }\n  };\n\n  const _createTaskDiv = function (ID) {\n    // console.log(\"createTaskdiv called\")\n    if (tMap.has(ID)) {\n      const t = tMap.get(ID);\n      const div = document.createElement(\"div\");\n\n      const taskHeader = document.createElement(\"div\");\n      taskHeader.classList.add(\"task-header\");\n      taskHeader.innerHTML = `priority  : ${t.getPriority()}`;\n\n      const taskMain = document.createElement(\"div\");\n      taskMain.classList.add(\"task-main\");\n      taskMain.innerHTML = `${t.getTaskTitle()}`;\n\n      const delbtn = document.createElement(\"button\");\n      delbtn.classList.add(\"delete-button\");\n      delbtn.addEventListener(\"click\", () => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].deleteTask(ID));\n      delbtn.innerHTML = \"X\";\n      taskMain.appendChild(delbtn);\n\n      const taskFooter = document.createElement(\"div\");\n      taskFooter.classList.add(\"task-footer\");\n      taskFooter.innerHTML = `Due Date : ${t.getDueDate()}`;\n\n      div.appendChild(taskHeader);\n      div.appendChild(taskMain);\n      div.appendChild(taskFooter);\n\n      div.classList.add(\"task\");\n      div.setAttribute(\"id\", `task${ID}`);\n      div.addEventListener(\"click\", (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].handleTaskClick(ID, e));\n      return div;\n    } else return document.createElement(\"div\");\n  };\n\n  function makeProjectDiv(project) {\n    const ID = project.projectID;\n\n    const div = document.createElement(\"div\");\n    div.innerHTML = `${project.title}`;\n    div.classList.add(\"project\");\n    div.setAttribute(\"id\", ID);\n\n    // const delbtn = document.createElement(\"button\");\n    // delbtn.classList.add(\"delete-button\");\n    // if (ID !== 0) {\n    //   delbtn.addEventListener(\"click\", () => clickHandler.deleteProject(ID));\n    //   delbtn.innerHTML = \"X\";\n    //   div.appendChild(delbtn);\n    // }\n\n    // div.addEventListener(\"click\", (e) => clickHandler.handleProjectClick(ID));\n    return div;\n  }\n\n  function _createTaskCreatorDiv(pID) {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"task\");\n    div.style.backgroundColor = \"rgba(110, 95, 207, 0.8)\";\n    div.style.color = \"white\";\n    div.innerHTML = \"Add a new Task\";\n    div.setAttribute(\"id\", `project${pID}`);\n    div.addEventListener(\"click\", (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].createTaskClick(pID, e));\n    return div;\n  }\n\n  function createProjectCreatorDiv() {\n    const div = document.createElement(\"div\");\n    div.classList.add(\"project\");\n    div.style.backgroundColor = \"rgba(110, 95, 207, 0.8)\";\n    div.style.color = \"white\";\n    div.innerHTML = \"Add a new Project\";\n    div.setAttribute(\"id\", \"\");\n    div.addEventListener(\"click\", (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_1__[\"clickHandler\"].createProjectClick(e));\n    return div;\n  }\n\n  return {\n    controller,\n    makeProjectDiv,\n    createProjectCreatorDiv,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ }),

/***/ "./src/savedata.js":
/*!*************************!*\
  !*** ./src/savedata.js ***!
  \*************************/
/*! exports provided: saveData, retrieveData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"saveData\", function() { return saveData; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"retrieveData\", function() { return retrieveData; });\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ \"./src/index.js\");\n\n\n// parma2 = map->the map to be processed\nconst saveData = function () {\n  //Stringify all the objects in projects\n  for (let project in _index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"]) {\n    let str = JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][project]);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"][project] = str;\n  }\n  //stringify all the objects in tasks\n  for (let task in _index__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"]) {\n    let str = JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"][task]);\n    _index__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"][task] = str;\n  }\n  // Set them in localStorage\n  localStorage.setItem(\"projects\", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__[\"projects\"]));\n  localStorage.setItem(\"tasks\", JSON.stringify(_index__WEBPACK_IMPORTED_MODULE_0__[\"tasks\"]));\n};\n\nconst retrieveData = function () {\n  let projects = {};\n  if (localStorage.getItem(\"projects\")) {\n    let temp1 = JSON.parse(localStorage.getItem(\"projects\"));\n    for (let project in temp1) {\n      let temp = JSON.parse(temp1[project]);\n      projects[temp.projectID] = temp;\n    }\n  }\n  let tasks = {};\n  if (localStorage.getItem(\"tasks\")) {\n    let temp1 = JSON.parse(localStorage.getItem(\"tasks\"));\n    for (let t in temp1) {\n      let temp = JSON.stringify(temp1[t]);\n      tasks[t.taskID] = temp;\n    }\n  }\n  return {\n    tasks,\n    projects,\n  };\n};\n\n//   for (let i = 0; i < array1.length; i++) {\n//     for (let j = 0; j < array1[i].length; j++) {\n//       try {\n//         const ID = array1[i][0];\n//         const p = Object.assign(projectFactory(), JSON.parse(array1[i][1]));\n//         pMap.set(ID, p);\n//       } catch (e) {\n//         console.log(e);\n//       }\n//     }\n//   }\n// tMap.clear();\n// if (localStorage.getItem(\"tMap\")) {\n//   let array2 = JSON.parse(localStorage.getItem(\"tMap\"));\n//   for (let i = 0; i < array2.length; i++) {\n//     for (let j = 0; j < array2[i].length; j++) {\n//       try {\n//         const ID = array2[i][0];\n//         const t = Object.assign(taskFactory(), JSON.parse(array2[i][1]));\n//         tMap.set(ID, t);\n//       } catch (e) {\n//         console.error(e);\n//       }\n//     }\n//   }\n// }\n\n\n//# sourceURL=webpack:///./src/savedata.js?");

/***/ })

/******/ });