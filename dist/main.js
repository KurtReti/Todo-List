/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/Project.js":
/*!************************!*\
  !*** ./src/Project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\n  constructor (title, list) {\n    this.title = title\n    this.list = []\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n\n//# sourceURL=webpack://todo-list/./src/Project.js?");

/***/ }),

/***/ "./src/ProjectController.js":
/*!**********************************!*\
  !*** ./src/ProjectController.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addToProject: () => (/* binding */ addToProject),\n/* harmony export */   currentProject: () => (/* binding */ currentProject),\n/* harmony export */   listOfProjects: () => (/* binding */ listOfProjects),\n/* harmony export */   projectListeners: () => (/* binding */ projectListeners),\n/* harmony export */   setCurrentProject: () => (/* binding */ setCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ \"./src/Project.js\");\n\n\nfunction projectListeners () {\n  const newProjectButton = document.querySelector('.new-project')\n  newProjectButton.addEventListener('click', newProject)\n\n  const projectFormClose = document.querySelector('.project-form-close')\n  projectFormClose.addEventListener('click', closeProjectForm)\n\n  const projectFormSubmit = document.querySelector('.project-form-submit')\n  projectFormSubmit.addEventListener('click', submitProjectForm)\n}\n\nfunction setCurrentProject (e) {\n  const index = e.currentTarget.getAttribute('data-item')\n  currentProject = listOfProjects[index]\n}\n\nfunction addToProject (Item, Project) {\n  Project.list.push(Item)\n}\n\nfunction addProject (Project, array) {\n  array.push(Project)\n}\n\nfunction submitProjectForm () {\n  const projectFormTitle = document.querySelector('.project-title')\n\n  const projectTitle = projectFormTitle.value\n\n  const project = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"](projectTitle, [])\n\n  addProject(project, listOfProjects)\n  closeProjectForm()\n  localStorageProjects(listOfProjects)\n}\n\nfunction newProject () {\n  const projectForm = document.querySelector('.project-form')\n  projectForm.classList.remove('hidden')\n}\n\nfunction closeProjectForm () {\n  const projectForm = document.querySelector('.project-form')\n  const projectFormTitle = document.querySelector('.project-title')\n\n  projectFormTitle.value = ''\n\n  projectForm.classList.add('hidden')\n}\n\n\nfunction localStorageProjects (listOfCurrentProjects) {\n  const currentProjectsSerialised = JSON.stringify(listOfCurrentProjects)\n  localStorage.setItem('currentProjectsSerialised', currentProjectsSerialised)\n\n  const listOfProjects = JSON.parse(\n    localStorage.getItem('currentProjectsSerialised')\n  )\n\n  console.log(listOfProjects)\n\n  return listOfProjects\n}\n\nlet listOfProjects = []\nlistOfProjects = localStorageProjects(listOfProjects)\nconst project1 = new _Project__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('Daily tasks', [])\n\nlet currentProject = project1\n\naddProject(project1, listOfProjects)\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/ProjectController.js?");

/***/ }),

/***/ "./src/TodoItem.js":
/*!*************************!*\
  !*** ./src/TodoItem.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass TodoItem {\n  constructor (title, description, dueDate, status) {\n    this.title = title\n    this.description = description\n    this.dueDate = dueDate\n    this.status = false\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TodoItem);\n\n\n//# sourceURL=webpack://todo-list/./src/TodoItem.js?");

/***/ }),

/***/ "./src/TodoItemController.js":
/*!***********************************!*\
  !*** ./src/TodoItemController.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   eventListeners: () => (/* binding */ eventListeners),\n/* harmony export */   expandItem: () => (/* binding */ expandItem),\n/* harmony export */   removeItem: () => (/* binding */ removeItem)\n/* harmony export */ });\n/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ \"./src/ProjectController.js\");\n/* harmony import */ var _TodoItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItem */ \"./src/TodoItem.js\");\n/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./UI */ \"./src/UI.js\");\n\n\n\n\nfunction eventListeners () {\n  const newItem = document.querySelector('.new-item')\n  newItem.addEventListener('click', newItems)\n\n  const itemFormClose = document.querySelector('.item-form-close')\n  itemFormClose.addEventListener('click', closeItemForm)\n\n  const itemFormSubmit = document.querySelector('.item-form-submit')\n  itemFormSubmit.addEventListener('click', addItem)\n}\n\nfunction closeItemForm () {\n  const itemForm = document.querySelector('.item-form')\n  const itemFormTitle = document.querySelector('.item-title')\n  const itemFormDueDate = document.querySelector('.item-duedate')\n  const itemFormDescription = document.querySelector('.item-description')\n\n  itemFormTitle.value = ''\n  itemFormDueDate.value = ''\n  itemFormDescription.value = ''\n\n  itemForm.classList.add('hidden')\n}\n\nfunction newItems (Project) {\n  const itemForm = document.querySelector('.item-form')\n  itemForm.classList.remove('hidden')\n  console.log(_ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject)\n}\n\nfunction addItem () {\n  const itemFormTitle = document.querySelector('.item-title')\n  const itemFormDueDate = document.querySelector('.item-duedate')\n  const itemFormDescription = document.querySelector('.item-description')\n\n  const itemTitle = itemFormTitle.value\n  const itemDueDate = itemFormDueDate.value\n  const itemDescription = itemFormDescription.value\n\n  const item = new _TodoItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"](itemTitle, itemDescription, itemDueDate)\n\n  ;(0,_ProjectController__WEBPACK_IMPORTED_MODULE_0__.addToProject)(item, _ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject)\n  console.log(_ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject)\n  closeItemForm()\n  ;(0,_UI__WEBPACK_IMPORTED_MODULE_2__.showTasksForCurrentProject)(_ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject)\n  ;(0,_UI__WEBPACK_IMPORTED_MODULE_2__.scrollOnAdd)()\n}\n\nfunction removeItem (e) {\n  const index = e.currentTarget.parentNode.getAttribute('data-item')\n  _ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject.list.splice(index, 1)\n  ;(0,_UI__WEBPACK_IMPORTED_MODULE_2__.showTasksForCurrentProject)(_ProjectController__WEBPACK_IMPORTED_MODULE_0__.currentProject)\n}\n\nfunction expandItem (e) {\n  const currentItem = e.currentTarget\n  currentItem.classList.toggle('expanded')\n\n  if (currentItem.classList.contains('expanded')) {\n    setTimeout(() => {\n      currentItem.children[1].classList.toggle('hidden')\n    }, 200)\n  } else {\n    currentItem.children[1].classList.toggle('hidden')\n  }\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/TodoItemController.js?");

/***/ }),

/***/ "./src/UI.js":
/*!*******************!*\
  !*** ./src/UI.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   itemContainer: () => (/* binding */ itemContainer),\n/* harmony export */   scrollOnAdd: () => (/* binding */ scrollOnAdd),\n/* harmony export */   showTasksForCurrentProject: () => (/* binding */ showTasksForCurrentProject)\n/* harmony export */ });\n/* harmony import */ var _TodoItemController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TodoItemController */ \"./src/TodoItemController.js\");\n/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectController */ \"./src/ProjectController.js\");\n\n\n\nconst itemContainer = document.querySelector('.content-container')\nconst projectContainer = document.querySelector('.list-of-projects')\n\nfunction showTasksForCurrentProject (Project) {\n  itemContainer.innerHTML = ''\n  for (let i = 0; i < Project.list.length; i++) {\n    const itemDiv = document.createElement('div')\n    itemDiv.classList.add('item')\n    itemContainer.appendChild(itemDiv)\n    itemDiv.setAttribute('data-item', i)\n\n    const itemTitle = document.createElement('div')\n    itemDiv.appendChild(itemTitle)\n    const itemTitleText = document.createTextNode(Project.list[i].title)\n    itemTitle.appendChild(itemTitleText)\n\n    const itemInfo = document.createElement('div')\n    itemDiv.appendChild(itemInfo)\n    const itemInfoText = document.createTextNode(Project.list[i].description)\n    itemInfo.appendChild(itemInfoText)\n    itemInfo.classList.add('hidden')\n\n    const closeItem = document.createElement('button')\n    closeItem.innerHTML = 'x'\n    closeItem.classList.add('close-item-button')\n    itemDiv.appendChild(closeItem)\n    closeItem.addEventListener('click', _TodoItemController__WEBPACK_IMPORTED_MODULE_0__.removeItem)\n\n    itemDiv.addEventListener('click', _TodoItemController__WEBPACK_IMPORTED_MODULE_0__.expandItem)\n\n    console.log(itemDiv.getAttribute('data-item'))\n  }\n}\n\nfunction ShowProjects (Projects) {\n  projectContainer.innerHTML = ''\n  for (let i = 0; i < Projects.length; i++) {\n    const projectDiv = document.createElement('div')\n    projectDiv.classList.add('project')\n    projectContainer.appendChild(projectDiv)\n    projectDiv.setAttribute('data-item', i)\n\n    const projectTitle = document.createTextNode(Projects[i].title)\n    projectDiv.appendChild(projectTitle)\n\n    projectDiv.addEventListener('click', _ProjectController__WEBPACK_IMPORTED_MODULE_1__.setCurrentProject)\n    projectDiv.addEventListener('click', function () {\n      showTasksForCurrentProject(_ProjectController__WEBPACK_IMPORTED_MODULE_1__.currentProject)\n    })\n    projectDiv.addEventListener('click', setActive)\n  }\n}\n\nfunction setActive (e) {\n  const active = document.querySelectorAll('.active')\n  active.forEach((project) => {\n    project.classList.remove('active')\n  })\n\n  e.currentTarget.classList.add('active')\n}\nShowProjects(_ProjectController__WEBPACK_IMPORTED_MODULE_1__.listOfProjects)\n\nfunction updateProjects () {\n  const createProject = document.querySelector('.project-form')\n  createProject.addEventListener('click', function () {\n    ShowProjects(_ProjectController__WEBPACK_IMPORTED_MODULE_1__.listOfProjects)\n    showTasksForCurrentProject(_ProjectController__WEBPACK_IMPORTED_MODULE_1__.currentProject)\n  })\n}\n\nupdateProjects()\n\nfunction scrollOnAdd () {\n  itemContainer.scrollTop = itemContainer.scrollHeight\n}\n\n\n\n\n//# sourceURL=webpack://todo-list/./src/UI.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ProjectController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectController */ \"./src/ProjectController.js\");\n/* harmony import */ var _TodoItemController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TodoItemController */ \"./src/TodoItemController.js\");\n\n\n\n(0,_TodoItemController__WEBPACK_IMPORTED_MODULE_1__.eventListeners)()\n;(0,_ProjectController__WEBPACK_IMPORTED_MODULE_0__.projectListeners)()\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;