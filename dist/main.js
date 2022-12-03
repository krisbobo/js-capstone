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


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n  list-style-type: none;\\n  text-decoration: none;\\n  transition: all 0.5s ease-out;\\n  font-family: 'Roboto', sans-serif;\\n}\\n\\n:root {\\n  --flex: flex;\\n  --inline: inline;\\n  --black: black;\\n  --primary: goldenrod;\\n  --secondary: rgb(26, 26, 26);\\n  --bg-color: #fff;\\n}\\n\\nbody {\\n  display: var(--flex);\\n  flex-direction: column;\\n  gap: 1rem;\\n  background-color: var(--bg-color);\\n}\\n\\nmain {\\n  min-height: 80vh;\\n  padding: 5% 15% 5%;\\n  background-color: var(--bg-color);\\n}\\n\\nheader {\\n  display: var(--flex);\\n  align-items: center;\\n  justify-content: space-between;\\n  padding: 0.6% 10%;\\n  background: var(--secondary);\\n  box-shadow: rgba(67, 67, 94, 0.25) 0 30px 60px -12px, rgba(42, 15, 15, 0.9) 0 181px 436px -1233333338px;\\n}\\n\\n.logo {\\n  align-items: flex-start;\\n  justify-content: flex-start;\\n}\\n\\n.logo img {\\n  width: 216px;\\n  height: auto;\\n  padding: 0;\\n  align-self: flex-start;\\n}\\n\\n.nav li {\\n  display: var(--inline);\\n  padding: 2rem 3rem;\\n  font-size: 1.5rem;\\n  font-weight: 600;\\n}\\n\\n.nav a {\\n  color: var(--primary);\\n}\\n\\n.brand a {\\n  color: var(--secondary);\\n  font-size: 1.75rem;\\n}\\n\\n.nav a:hover {\\n  color: var(--secondary);\\n  border-radius: 5px;\\n}\\n\\n.nav .links:hover {\\n  background-color: var(--primary);\\n  color: var(--secondary);\\n  border-radius: 5px;\\n}\\n\\n.card-container {\\n  display: var(--flex);\\n  flex-wrap: wrap;\\n  gap: 3rem;\\n  justify-content: space-around;\\n  width: 100%;\\n}\\n\\n.card {\\n  padding: 2%;\\n  width: 30%;\\n  box-sizing: border-box;\\n  background-color: var(--bg-color);\\n  border-radius: 15px;\\n  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;\\n}\\n\\n.card:hover {\\n  cursor: pointer;\\n  background-color: var(--secondary);\\n}\\n\\n.movie-image {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.movie-image img {\\n  width: 100%;\\n  height: auto;\\n}\\n\\n.detail {\\n  display: var(--flex);\\n  justify-content: space-between;\\n  align-items: center;\\n  color: var(--primary);\\n}\\n\\n.detail span {\\n  font-size: 1.5rem;\\n}\\n\\n.detail svg {\\n  fill: var(--primary);\\n}\\n\\n.btn {\\n  background-color: var(--primary);\\n  cursor: pointer;\\n  color: var(--secondary);\\n  padding: 1rem 2rem;\\n  font-size: 1.25rem;\\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px;\\n}\\n\\n.card h2 {\\n  font-size: 2.7rem;\\n  color: var(--primary);\\n}\\n\\n.pop {\\n  background-color: var(--secondary);\\n  margin: 5% auto;\\n  height: 80%;\\n  width: 100%;\\n}\\n\\n.content {\\n  padding: 2rem;\\n  border: 1px solid #aaa;\\n}\\n\\n.popup-body,\\n.movie-type,\\n.movie-details {\\n  display: var(--flex);\\n  justify-content: space-between;\\n  gap: 15rem;\\n}\\n\\n.close {\\n  border-radius: 50%;\\n  width: 2rem;\\n  height: 2rem;\\n  background: var(--bg-color);\\n  cursor: pointer;\\n  display: var(--flex);\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 1.8rem;\\n  font-weight: 400;\\n}\\n\\n.runtime,\\n.genre,\\n.summary, \\n.airdate {\\n  color: var(--primary);\\n  font-size: 0.5rem;\\n  padding: 1rem;\\n}\\n\\nfooter {\\n  display: var(--flex);\\n  background-color: var(--primary);\\n  padding: 1% 5%;\\n  align-items: center;\\n  gap: 3rem;\\n  justify-content: center;\\n  position: fixed;\\n  bottom: 0;\\n  width: 100%;\\n}\\n\\n.brand,\\n.copy {\\n  color: var(--secondary);\\n  font-size: 1.5rem;\\n}\\n\\n.brand a:hover {\\n  color: var(--secondary);\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n  margin: 0;\\r\\n  padding: 0;\\r\\n  box-sizing: border-box;\\r\\n  list-style-type: none;\\r\\n  text-decoration: none;\\r\\n  transition: all 0.5s ease-out;\\r\\n}\\r\\n\\r\\n:root {\\r\\n  --flex: flex;\\r\\n  --inline: inline;\\r\\n  --black: black;\\r\\n  --primary: goldenrod;\\r\\n  --secondary: rgb(26, 26, 26);\\r\\n  --bg-color: #fff;\\r\\n}\\r\\n\\r\\nbody {\\r\\n  display: var(--flex);\\r\\n  flex-direction: column;\\r\\n  gap: 1rem;\\r\\n  background-color: var(--bg-color);\\r\\n}\\r\\n\\r\\nmain {\\r\\n  min-height: 80vh;\\r\\n  padding: 5% 15% 5%;\\r\\n  background-color: var(--bg-color);\\r\\n}\\r\\n\\r\\nheader {\\r\\n  display: var(--flex);\\r\\n  align-items: center;\\r\\n  justify-content: space-between;\\r\\n  padding: 0.6% 10%;\\r\\n  background: var(--secondary);\\r\\n  box-shadow: rgba(67, 67, 94, 0.25) 0 30px 60px -12px, rgba(42, 15, 15, 0.9) 0 181px 436px -1233333338px;\\r\\n}\\r\\n\\r\\n.logo {\\r\\n  align-items: flex-start;\\r\\n  justify-content: flex-start;\\r\\n}\\r\\n\\r\\n.logo img {\\r\\n  width: 216px;\\r\\n  height: auto;\\r\\n  padding: 0;\\r\\n  align-self: flex-start;\\r\\n}\\r\\n\\r\\n.nav li {\\r\\n  display: var(--inline);\\r\\n  padding: 2rem 3rem;\\r\\n  font-size: 1.5rem;\\r\\n  font-weight: 600;\\r\\n}\\r\\n\\r\\n.nav a {\\r\\n  color: var(--primary);\\r\\n}\\r\\n\\r\\n.brand a {\\r\\n  color: var(--secondary);\\r\\n  font-size: 1.75rem;\\r\\n}\\r\\n\\r\\n.nav a:hover {\\r\\n  color: var(--secondary);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.nav .links:hover {\\r\\n  background-color: var(--primary);\\r\\n  color: var(--secondary);\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.card-container {\\r\\n  display: var(--flex);\\r\\n  flex-wrap: wrap;\\r\\n  gap: 3rem;\\r\\n  justify-content: space-around;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  padding: 2%;\\r\\n  width: 30%;\\r\\n  box-sizing: border-box;\\r\\n  background-color: var(--bg-color);\\r\\n  border-radius: 15px;\\r\\n  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 1px 3px 1px;\\r\\n}\\r\\n\\r\\n.card:hover {\\r\\n  cursor: pointer;\\r\\n  background-color: var(--secondary);\\r\\n}\\r\\n\\r\\n.movie-image {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.movie-image img {\\r\\n  width: 100%;\\r\\n  height: auto;\\r\\n}\\r\\n\\r\\n.detail {\\r\\n  display: var(--flex);\\r\\n  justify-content: space-between;\\r\\n  align-items: center;\\r\\n  color: var(--primary);\\r\\n}\\r\\n\\r\\n.detail span {\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\\r\\n.detail svg {\\r\\n  fill: var(--primary);\\r\\n}\\r\\n\\r\\n.btn {\\r\\n  background-color: var(--primary);\\r\\n  cursor: pointer;\\r\\n  color: var(--secondary);\\r\\n  padding: 1rem 2rem;\\r\\n  font-size: 1.25rem;\\r\\n  box-shadow: rgba(50, 50, 93, 0.25) 0 50px 100px -20px, rgba(0, 0, 0, 0.3) 0 30px 60px -30px;\\r\\n}\\r\\n\\r\\n.card h2 {\\r\\n  font-size: 2.7rem;\\r\\n  color: var(--primary);\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  display: var(--flex);\\r\\n  background-color: var(--primary);\\r\\n  padding: 1% 5%;\\r\\n  align-items: center;\\r\\n  gap: 3rem;\\r\\n  justify-content: center;\\r\\n  position: fixed;\\r\\n  bottom: 0;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.brand a:hover {\\r\\n  color: var(--secondary);\\r\\n}\\r\\n\\r\\np {\\r\\n  color: var(--secondary);\\r\\n  font-size: 1.5rem;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-boilerplate/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popullateMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popullateMovie */ \"./src/modules/popullateMovie.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_popullateMovie__WEBPACK_IMPORTED_MODULE_1__.showMovies);\n\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_popullateMovie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/popullateMovie */ \"./src/modules/popullateMovie.js\");\n\n\n\ndocument.addEventListener('DOMContentLoaded', _modules_popullateMovie__WEBPACK_IMPORTED_MODULE_1__.showMovies);\n\n//# sourceURL=webpack://webpack-boilerplate/./src/index.js?");


/***/ }),

/***/ "./src/modules/domElements.js":
/*!************************************!*\
  !*** ./src/modules/domElements.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"cardContainer\": () => (/* binding */ cardContainer),\n/* harmony export */   \"commentBtn\": () => (/* binding */ commentBtn)\n/* harmony export */ });\nconst cardContainer = document.querySelector('.card-container');\nconst commentBtn = document.querySelectorAll('#comment-btn');\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/domElements.js?");

/***/ }),

/***/ "./src/modules/involvementApi.js":
/*!***************************************!*\
  !*** ./src/modules/involvementApi.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Involve)\n/* harmony export */ });\nclass Involve {\r\n    BASE_URL =`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${\"NljVXTUjR1aYcnxlUTfq\"}/likes`;\r\n    constructor(){\r\n\r\n    }\r\n\r\n    // static postLike() {\r\n    //     fetch(`${this.BASE_URL}/likes`, {\r\n    //     method: 'POST',\r\n    //     body: JSON.stringify({\r\n    //         title: 'foo',\r\n    //         body: 'bar',\r\n    //         userId: 1,\r\n    //     }),\r\n    //     headers: {\r\n    //         'Content-type': 'application/json; charset=UTF-8',\r\n    //     },\r\n    //     })\r\n    //     .then((response) => response.json())\r\n    //     .then((json) => console.log(json));\r\n    // }\r\n\r\n    static displayLikes= async() =>{\r\n        const response = await fetch(`${this.BASE_URL}`);\r\n        console.log(response);\r\n        const likes = await response.json();\r\n        console.log(\"Likes:\", JSON.stringify(likes))\r\n        return likes;\r\n    }\r\n    static displayComments= async() =>{\r\n        const response = await fetch(`${this.BASE_URL}/comments`);\r\n        console.log(\"cmt: \",response);\r\n        const comments = await response.json();\r\n        console.log(\"Comments:\", JSON.stringify(comments))\r\n        return comments;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/involvementApi.js?");

/***/ }),

/***/ "./src/modules/movies.js":
/*!*******************************!*\
  !*** ./src/modules/movies.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\nclass Movies {\n    static BASE_URL ='https://api.tvmaze.com/seasons/1/episodes';\n    constructor(){\n\n    }\n\n    static displayMovie= async() =>{\n        const response = await fetch(this.BASE_URL);\n        console.log(response);\n        const movies = await response.json();\n        console.log(\"Movies:\", JSON.stringify(movies))\n        return movies;\n        // const title=\"The Walking Dead\";\n        // return title;\n    }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/movies.js?");

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies)\n/* harmony export */ });\nclass Movies {\r\n    static BASE_URL ='https://api.tvmaze.com/seasons/1/episodes';\r\n    constructor(){\r\n\r\n    }\r\n\r\n    static displayMovie= async() =>{\r\n        const response = await fetch(this.BASE_URL);\r\n        const movies = await response.json();\r\n        return movies;\r\n    }\r\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/movies.js?");


/***/ }),

/***/ "./src/modules/popullateMovie.js":
/*!***************************************!*\
  !*** ./src/modules/popullateMovie.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMovies\": () => (/* binding */ showMovies)\n/* harmony export */ });\n/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ \"./src/modules/domElements.js\");\n/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.js */ \"./src/modules/movies.js\");\n\n\n\n\nconst showMovies =  () => { \n    _movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMovie().then((res) => {\n        res.forEach(res => {\n            _domElements_js__WEBPACK_IMPORTED_MODULE_0__.cardContainer.innerHTML += ` <div class=\"card\">\n                <div class=\"movie-image\">\n                    <img src=\"${res.image.original}\" alt=\"\">\n                </div>\n                <div class=\"detail\">\n                    <h2>${res.name}</h2>\n                    <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\n                        <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\n                    </svg>5 likes</span>\n                </div>\n                <button onclick=\"popUp()\" class=\"btn\" id=\"comment-btn\">Comments</button>\n                <button class=\"btn\">Reservations</button>\n                </div>`;\n        })\n    });\n    window.popUp = () => {\n    _movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMovie().then((res) => {\n        res.forEach(res => {\n            const pop = document.querySelector('.pop');\n            pop.innerHTML = `\n            <div class=\"popup\">\n                <div class=\"content\">\n                    <div class=\"popup-body\">\n                        <img src=\"${res.image.original}\" alt=\"Current movie\">\n                        <span class=\"close\">&times;</span>                   \n                    </div>\n                    <div class=\"movie-type\">\n                        <p class=\"name\">${res.name}</p>\n                        <p class=\"runtime\">Duration: ${res.runtime} mins</p>\n                    </div>\n                    <div class=\"movie-details\">\n                        <p class=\"summary\">${res.summary}</p>\n                        <p class=\"airdate\">Airing date: ${res.airdate}</p>\n                    </div>\n                </div>\n            </div>\n            `;\n            const closeBtn = document.querySelector('.close');\n            closeBtn.addEventListener('click', () => {\n                window.location.reload();\n            });\n            })\n        });\n    }\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/popullateMovie.js?");

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showMovies\": () => (/* binding */ showMovies)\n/* harmony export */ });\n/* harmony import */ var _domElements_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domElements.js */ \"./src/modules/domElements.js\");\n/* harmony import */ var _movies_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./movies.js */ \"./src/modules/movies.js\");\n/* harmony import */ var _involvementApi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./involvementApi.js */ \"./src/modules/involvementApi.js\");\n\r\n\r\n\r\n\r\nconst showMovies=  () => { \r\n    _involvementApi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].displayLikes().then(\r\n        (res) => {console.log(\"like: \",res.item_id)}\r\n    )\r\n    _movies_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"].displayMovie().then((res) => {\r\n        res.forEach(res => {\r\n            _domElements_js__WEBPACK_IMPORTED_MODULE_0__.cardContainer.innerHTML += ` <div class=\"card\">\r\n                <div class=\"movie-image\">\r\n                    <img src=\"${res.image.original}\" alt=\"\">\r\n                </div>\r\n                <div class=\"detail\">\r\n                    <h2>${res.name}</h2>\r\n                    <span><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-heart\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z\"/>\r\n                    </svg>5 likes</span>\r\n                </div>\r\n                <button class=\"btn\">Comments</button>\r\n                <button class=\"btn\">Reservations</button>\r\n                </div>`;\r\n        })\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack://webpack-boilerplate/./src/modules/popullateMovie.js?");


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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