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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"taskFactory\", function() { return taskFactory; });\n/* harmony import */ var nanoid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nanoid */ \"./node_modules/nanoid/index.browser.js\");\n\n\nconst taskFactory = (title, dueDate, priority, projectID) => {\n  let taskID = Object(nanoid__WEBPACK_IMPORTED_MODULE_0__[\"nanoid\"])();\n  let completed = false;\n  return {\n    title,\n    priority,\n    dueDate,\n    taskID,\n    projectID,\n    completed,\n  };\n};\n\n\n//# sourceURL=webpack:///./src/Task.js?");

/***/ }),

/***/ "./src/clickHandler.js":
/*!*****************************!*\
  !*** ./src/clickHandler.js ***!
  \*****************************/
/*! exports provided: clickHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"clickHandler\", function() { return clickHandler; });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ \"./src/Task.js\");\n/* harmony import */ var _displayController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./displayController */ \"./src/displayController.js\");\n\n\n\n\nconst projects = JSON.parse(localStorage.getItem(\"projects\"));\nconst tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n\nconst clickHandler = (function () {\n  //logic for creating a project\n  const createProjectClick = function () {\n    const title = prompt(\"Enter the title of project : \");\n    const project = Object(_Project__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])(title);\n\n    projects[project.projectID] = project;\n    localStorage.setItem(\"projects\", JSON.stringify(projects));\n    _displayController__WEBPACK_IMPORTED_MODULE_2__[\"display\"].listProject();\n  };\n\n  // logic for creating a task\n  const createTaskClick = function (projectID = \"0\") {\n    const title = prompt(\"Enter the name of the task : \");\n    const task = Object(_Task__WEBPACK_IMPORTED_MODULE_1__[\"taskFactory\"])(title, Date.now(), 5, projectID);\n\n    tasks[task.taskID] = task;\n    localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n    _displayController__WEBPACK_IMPORTED_MODULE_2__[\"display\"].listTaskInProject(projectID);\n  };\n  return {\n    createProjectClick,\n    createTaskClick,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/clickHandler.js?");

/***/ }),

/***/ "./src/displayController.js":
/*!**********************************!*\
  !*** ./src/displayController.js ***!
  \**********************************/
/*! exports provided: display */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"display\", function() { return display; });\n/* harmony import */ var _render_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.js */ \"./src/render.js\");\n\n\nconst projects = JSON.parse(localStorage.getItem(\"projects\"));\nconst tasks = JSON.parse(localStorage.getItem(\"tasks\"));\n\nconst display = (function () {\n  //grab the respectted divs\n  const projectList = document.getElementById(\"projectList\");\n  const taskList = document.getElementById(\"task-list\");\n\n  //  remive all the children of any element\n  const _removeChildren = function (element) {\n    element.innerHTML = \"\";\n  };\n\n  const listProject = function () {\n    // clean up the DOM first\n    _removeChildren(projectList);\n\n    // Create all the projects element\n    for (let project in projects) {\n      const newProjectDiv = _render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"].makeProjectDiv(projects[project]);\n      projectList.appendChild(newProjectDiv);\n    }\n    //creaete the project creator div\n    projectList.appendChild(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"].createProjectCreatorDiv());\n  };\n\n  const listTaskInProject = (projectID = \"0\") => {\n    //clean up the mess\n    _removeChildren(taskList);\n    //create the task elements\n    for (let task in tasks) {\n      if (tasks[task].projectID == projectID) {\n        const newTaskDIv = _render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"].createTaskDiv(tasks[task]);\n        taskList.appendChild(newTaskDIv);\n      }\n    }\n    //append the task creator div\n    taskList.appendChild(_render_js__WEBPACK_IMPORTED_MODULE_0__[\"render\"].createTaskCreatorDiv());\n  };\n  return {\n    listProject,\n    listTaskInProject,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/displayController.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project.js */ \"./src/Project.js\");\n/* harmony import */ var _displayController_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayController.js */ \"./src/displayController.js\");\n\n\n\n//check if the projects and tasks exists in localstorage,if not populate it\n(function main() {\n  if (!localStorage.getItem(\"projects\") && !localStorage.getItem(\"tasks\")) {\n    populateStorage();\n    runKarma();\n  } else {\n    runKarma();\n  }\n})();\n\nfunction populateStorage() {\n  const projects = {};\n  const tasks = {};\n  const defaultProject = Object(_Project_js__WEBPACK_IMPORTED_MODULE_0__[\"projectFactory\"])();\n  defaultProject.projectID = \"0\";\n  defaultProject.title = \"INBOX\";\n  projects[\"0\"] = defaultProject;\n  localStorage.setItem(\"projects\", JSON.stringify(projects));\n  localStorage.setItem(\"tasks\", JSON.stringify(tasks));\n}\n\nfunction runKarma() {\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listProject();\n  _displayController_js__WEBPACK_IMPORTED_MODULE_1__[\"display\"].listTaskInProject();\n}\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"render\", function() { return render; });\n/* harmony import */ var _clickHandler_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clickHandler.js */ \"./src/clickHandler.js\");\n\n\nconst render = (function () {\n  const createTaskDiv = function (task) {\n    // <div class=\"m-1 d-flex\">\n    //   <input type=\"checkbox\" value=\"completed\"></input>\n    //   <div class=\"p-2\" style=\"flex-grow: 1;\">\n    //     Task title\n    //   </div>\n    //   <div class=\"\">2 days ago </div>\n    // </div>\n\n    const taskID = task.taskID;\n    const projectID = task.projectID;\n\n    const card = document.createElement(\"div\");\n    card.innerHTML = task.title;\n\n    return card;\n  };\n\n  function makeProjectDiv(project) {\n    // <div class=\"m-1\">\n    //   <div class=\"p-2\">Project title</div>\n    // </div>\n\n    const projectCard = document.createElement(\"div\");\n    const title = document.createElement(\"div\");\n\n    title.innerHTML = project.title;\n    title.classList.add(\"p-2\");\n\n    projectCard.classList.add(\"m-1\");\n\n    projectCard.appendChild(title);\n\n    // div.addEventListener(\"click\", (e) => clickHandler.handleProjectClick(ID));\n    return projectCard;\n  }\n\n  function createTaskCreatorDiv(pID) {\n    const button = document.createElement(\"button\");\n\n    button.classList.add(\"button\");\n    button.classList.add(\"button-primary\");\n    button.classList.add(\"button-block\");\n\n    button.className = \"btn btn-block btn-primary\";\n\n    button.innerHTML = \"Add a new Task\";\n\n    button.setAttribute(\"id\", `project${pID}`);\n\n    button.addEventListener(\"click\", (e) =>\n      _clickHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"clickHandler\"].createTaskClick(pID, e)\n    );\n    return button;\n  }\n\n  function createProjectCreatorDiv() {\n    const button = document.createElement(\"button\");\n\n    button.className = \"btn btn-block btn-primary\";\n\n    button.innerHTML = \"Add a new Project\";\n\n    button.setAttribute(\"id\", \"\");\n\n    button.addEventListener(\"click\", (e) => _clickHandler_js__WEBPACK_IMPORTED_MODULE_0__[\"clickHandler\"].createProjectClick(e));\n\n    return button;\n  }\n\n  return {\n    makeProjectDiv,\n    createProjectCreatorDiv,\n    createTaskCreatorDiv,\n    createTaskDiv,\n  };\n})();\n\n\n//# sourceURL=webpack:///./src/render.js?");

/***/ })

/******/ });