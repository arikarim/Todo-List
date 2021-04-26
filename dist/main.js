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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n  --clr-primary: rgb(228, 104, 88);\\n  --clr-light: #f4f4f4;\\n  --clr-dark: #333;\\n  --clr-warning: rgb(112, 19, 19);\\n}\\n\\n*,\\n*::before,\\n*::after {\\n  font-family: inherit;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  margin: 0;\\n  font-family: \\\"Work Sans\\\", sans-serif;\\n  font-weight: 300;\\n  font-size: 1.5rem;\\n  background-color: var(--clr-primary);\\n  color: var(--clr-light);\\n  display: grid;\\n  grid: \\\"header header header header\\\" auto \\\"...... lists  active ......\\\" auto/1fr minmax(100px, 300px) minmax(250px, 500px) 1fr;\\n}\\n\\n.title {\\n  grid-area: header;\\n  text-align: center;\\n  font-size: calc(7vw + 2rem);\\n  font-weight: 900;\\n  color: rgba(0, 0, 0, 0.1);\\n  letter-spacing: 2px;\\n  margin: -0.3em 0 0.5em;\\n}\\n\\n.all-tasks {\\n  grid-area: lists;\\n}\\n\\n.task-list {\\n  font-size: 1.2rem;\\n  line-height: 1.7;\\n  list-style: circle;\\n  padding-left: 1.1em;\\n}\\n\\n.list-name {\\n  cursor: pointer;\\n}\\n\\n.list-name:hover {\\n  opacity: 0.7;\\n}\\n\\nform {\\n  display: flex;\\n}\\n\\n.btn {\\n  cursor: pointer;\\n  background: 0;\\n  border: 0;\\n  padding: 0;\\n  color: inherit;\\n}\\n\\n.btn.create {\\n  font-size: 1.5rem;\\n  font-weight: 900;\\n  margin-right: 0.25em;\\n  transition: opacity 250ms ease-in;\\n}\\n\\n.btn.create:hover {\\n  opacity: 0.7;\\n}\\n\\n.btn.delete {\\n  opacity: 0.7;\\n  color: #333;\\n  font-size: 1rem;\\n  transition: color 200ms;\\n}\\n\\n.btn.delete:hover {\\n  color: var(--clr-warning);\\n}\\n\\n.new {\\n  background: transparent;\\n  border: 0;\\n  color: inherit;\\n  border-bottom: 1px solid currentColor;\\n  font-size: inherit;\\n  outline: none;\\n  padding: 0.25em;\\n  transition: border-bottom 150ms ease-in;\\n  order: 2;\\n}\\n\\n.new::-webkit-input-placeholder {\\n  opacity: 0.4;\\n}\\n\\n.new::-ms-input-placeholder {\\n  opacity: 0.4;\\n}\\n\\n.new:-ms-input-placeholder {\\n  opacity: 0.4;\\n}\\n\\n.new::placeholder {\\n  opacity: 0.4;\\n}\\n\\n.new:focus {\\n  border-bottom-width: 3px;\\n}\\n\\n.new:focus::-webkit-input-placeholder {\\n  opacity: 0.15;\\n}\\n\\n.new:focus::-ms-input-placeholder {\\n  opacity: 0.15;\\n}\\n\\n.new:focus:-ms-input-placeholder {\\n  opacity: 0.15;\\n}\\n\\n.new:focus::placeholder {\\n  opacity: 0.15;\\n}\\n\\n.new.list {\\n  font-size: 1.1rem;\\n}\\n\\n.new.task {\\n  margin-bottom: 0;\\n}\\n\\n.active-list {\\n  font-weight: 700;\\n}\\n\\n.todo-list {\\n  --spacer: 2rem;\\n\\n  grid-area: active;\\n  background: var(--clr-light);\\n  color: var(--clr-dark);\\n}\\n\\n.todo-header {\\n  padding: var(--spacer);\\n  background: #e4e4e4;\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-between;\\n}\\n\\n.list-title {\\n  margin: 0 1em 0 0;\\n}\\n\\n.task-count {\\n  margin: 0;\\n  font-size: 1rem;\\n}\\n\\n.todo-body {\\n  padding: var(--spacer);\\n  position: relative;\\n}\\n\\n.new-task-creator .create {\\n  color: var(--clr-primary);\\n}\\n\\n[type=\\\"checkbox\\\"] {\\n  opacity: 0;\\n  position: absolute;\\n}\\n\\n.task label {\\n  display: flex;\\n  align-items: center;\\n  position: relative;\\n}\\n\\n.task {\\n  position: relative;\\n  margin-bottom: 1.25em;\\n}\\n\\n.task::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  right: 0;\\n  left: 0;\\n  bottom: -0.5em;\\n  height: 1px;\\n  background: currentColor;\\n  opacity: 0.1;\\n}\\n\\n.custom-checkbox {\\n  --size: 0.75em;\\n\\n  display: inline-block;\\n  width: var(--size);\\n  height: var(--size);\\n  margin-right: var(--size);\\n  cursor: pointer;\\n  border: 2px solid currentColor;\\n  border-radius: 50%;\\n  -webkit-transform: scale(1);\\n  transform: scale(1);\\n  transition: -webkit-transform 300ms ease-in-out;\\n  transition: transform 300ms ease-in-out;\\n  transition: transform 300ms ease-in-out, -webkit-transform 300ms ease-in-out;\\n}\\n\\n.task:hover .custom-checkbox,\\n[type=\\\"checkbox\\\"]:focus + label .custom-checkbox {\\n  -webkit-transform: scale(1.2);\\n  transform: scale(1.2);\\n  color: var(--clr-primary);\\n}\\n\\n[type=\\\"checkbox\\\"]:checked + label .custom-checkbox {\\n  background: var(--clr-primary);\\n  border-color: var(--clr-primary);\\n  box-shadow: inset 0 0 0 2px white;\\n}\\n\\n[type=\\\"checkbox\\\"]:checked + label {\\n  opacity: 0.5;\\n}\\n\\n.task label::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  right: 0;\\n  top: 50%;\\n  height: 3px;\\n  background: currentColor;\\n  -webkit-transform: scaleX(0);\\n  transform: scaleX(0);\\n  -webkit-transform-origin: right;\\n  transform-origin: right;\\n  transition: -webkit-transform 150ms ease-in-out;\\n  transition: transform 150ms ease-in-out;\\n  transition: transform 150ms ease-in-out, -webkit-transform 150ms ease-in-out;\\n}\\n\\n[type=\\\"checkbox\\\"]:checked + label::after {\\n  -webkit-transform: scaleX(1);\\n  transform: scaleX(1);\\n  -webkit-transform-origin: left;\\n  transform-origin: left;\\n}\\n\\n.delete-stuff {\\n  display: flex;\\n  justify-content: space-evenly;\\n  position: absolute;\\n  width: 100%;\\n  left: 0;\\n  bottom: -35px;\\n  color: var(--clr-light);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo-list/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://todo-list/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/project */ \"./src/modules/project.js\");\n\n\n\n(0,_modules_project__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createList\": () => (/* binding */ createList),\n/* harmony export */   \"createTask\": () => (/* binding */ createTask),\n/* harmony export */   \"clearElement\": () => (/* binding */ clearElement),\n/* harmony export */   \"renderTaskCount\": () => (/* binding */ renderTaskCount)\n/* harmony export */ });\nconst listCountElement = document.querySelector('[data-list-count]');\n\nfunction createList(name) {\n  return { id: Date.now().toString(), name, tasks: [] };\n}\n\nfunction createTask(name) {\n  return { id: Date.now().toString(), name, complete: false };\n}\n\nfunction clearElement(element) {\n  while (element.firstChild) {\n    element.removeChild(element.firstChild);\n  }\n}\n\nfunction renderTaskCount(selectedListId) {\n  const incompleteTaskCount = selectedListId.tasks.filter((task) => !task.complete).length;\n  const taskString = incompleteTaskCount === 1 ? 'task' : 'tasks';\n  listCountElement.innerText = `${incompleteTaskCount} ${taskString} remaining`;\n}\n\n\n\n//# sourceURL=webpack://todo-list/./src/modules/logic.js?");

/***/ }),

/***/ "./src/modules/project.js":
/*!********************************!*\
  !*** ./src/modules/project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ \"./src/modules/logic.js\");\n\n\nconst createProject = () => {\n  const listsContainer = document.querySelector('[data-lists]');\n  const newListForm = document.querySelector('[data-new-list-form]');\n  const newListinput = document.querySelector('[data-new-list-input]');\n  const deleteListButton = document.querySelector('[data-delete-list-button]');\n  const listDisplayContainer = document.querySelector('[data-list-display-container]');\n  const listTitleElement = document.querySelector('[data-list-title]');\n  const tasksContainer = document.querySelector('[data-tasks]');\n  const taskTemplate = document.getElementById('task-template');\n  const newTaskForm = document.querySelector('[data-new-task-form]');\n  const newTaskInput = document.querySelector('[data-new-task-input]');\n  const clearCompleteTasksButton = document.querySelector('[data-clear-complete-tasks-button]');\n\n  const LOCAL_STORAGE_LIST_KEY = 'task.lists';\n  const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListsId';\n\n  let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];\n  let selectedListId = localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY);\n\n  function save() {\n    localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(lists));\n    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY, selectedListId);\n  }\n\n  function renderTasks(selectedList) {\n    selectedList.tasks.forEach((task) => {\n      const taskElement = document.importNode(taskTemplate.content, true);\n      const checkbox = taskElement.querySelector('input');\n      checkbox.id = task.id;\n      checkbox.checked = task.complete;\n      const label = taskElement.querySelector('label');\n      label.htmlFor = task.id;\n      label.append(task.name);\n      tasksContainer.appendChild(taskElement);\n    });\n  }\n\n  function renderLists() {\n    lists.forEach((list) => {\n      const listElement = document.createElement('li');\n      listElement.dataset.listId = list.id;\n      listElement.classList.add('list-name');\n      listElement.innerText = list.name;\n      if (list.id === selectedListId) {\n        listElement.classList.add('active-list');\n      }\n      listsContainer.appendChild(listElement);\n    });\n  }\n\n  function render() {\n    (0,_logic__WEBPACK_IMPORTED_MODULE_0__.clearElement)(listsContainer);\n    renderLists();\n\n    const selectedList = lists.find((list) => list.id === selectedListId);\n    if (selectedListId == null) {\n      listDisplayContainer.style.display = 'none';\n    } else {\n      listDisplayContainer.style.display = '';\n      listTitleElement.innerText = selectedList.name;\n      (0,_logic__WEBPACK_IMPORTED_MODULE_0__.renderTaskCount)(selectedList);\n      (0,_logic__WEBPACK_IMPORTED_MODULE_0__.clearElement)(tasksContainer);\n      renderTasks(selectedList);\n    }\n  }\n\n  function saveRender() {\n    save();\n    render();\n  }\n\n  listsContainer.addEventListener('click', (e) => {\n    if (e.target.tagName.toLowerCase() === 'li') {\n      selectedListId = e.target.dataset.listId;\n      saveRender();\n    }\n  });\n\n  tasksContainer.addEventListener('click', (e) => {\n    if (e.target.tagName.toLowerCase() === 'input') {\n      const selectedList = lists.find((list) => list.id === selectedListId);\n      const selectedTask = selectedList.tasks.find((task) => task.id === e.target.id);\n      selectedTask.complete = e.target.checked;\n      save();\n      (0,_logic__WEBPACK_IMPORTED_MODULE_0__.renderTaskCount)(selectedList);\n    }\n  });\n\n  clearCompleteTasksButton.addEventListener('click', () => {\n    const selectedList = lists.find((list) => list.id === selectedListId);\n    selectedList.tasks = selectedList.tasks.filter((task) => !task.complete);\n    saveRender();\n  });\n\n  deleteListButton.addEventListener('click', () => {\n    lists = lists.filter((list) => list.id !== selectedListId);\n    selectedListId = null;\n    saveRender();\n  });\n\n  newListForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const listName = newListinput.value;\n    if (listName == null || listName === '') return;\n    const list = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createList)(listName);\n    newListinput.value = '';\n    lists.push(list);\n    saveRender();\n  });\n\n  newTaskForm.addEventListener('submit', (e) => {\n    e.preventDefault();\n    const taskName = newTaskInput.value;\n    if (taskName == null || taskName === '') return;\n    const task = (0,_logic__WEBPACK_IMPORTED_MODULE_0__.createTask)(taskName);\n    newTaskInput.value = null;\n    const selectedList = lists.find((list) => list.id === selectedListId);\n    selectedList.tasks.push(task);\n    saveRender();\n  });\n\n  render();\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProject);\n\n//# sourceURL=webpack://todo-list/./src/modules/project.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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