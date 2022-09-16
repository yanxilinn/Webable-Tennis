/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const Heading = __webpack_require__(/*! ./scripts/heading */ \"./src/scripts/heading.js\");\n\ndocument.addEventListener(\"DOMContentloaded\", () => {\n  const root = document.getElementById('root');\n  const heading = new Heading(\"This is a light browser tennis game\");\n  root.innerHTML = heading.heading;\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsTUFBTUEsT0FBTyxHQUFHQyxtQkFBTyxDQUFDLG1EQUFELENBQXZCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxNQUFNO0VBQ2hELE1BQU1DLElBQUksR0FBR0YsUUFBUSxDQUFDRyxjQUFULENBQXdCLE1BQXhCLENBQWI7RUFDQSxNQUFNQyxPQUFPLEdBQUcsSUFBSU4sT0FBSixDQUFZLHFDQUFaLENBQWhCO0VBQ0FJLElBQUksQ0FBQ0csU0FBTCxHQUFpQkQsT0FBTyxDQUFDQSxPQUF6QjtBQUVILENBTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBIZWFkaW5nID0gcmVxdWlyZSgnLi9zY3JpcHRzL2hlYWRpbmcnKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRsb2FkZWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuICAgIGNvbnN0IGhlYWRpbmcgPSBuZXcgSGVhZGluZyhcIlRoaXMgaXMgYSBsaWdodCBicm93c2VyIHRlbm5pcyBnYW1lXCIpO1xuICAgIHJvb3QuaW5uZXJIVE1MID0gaGVhZGluZy5oZWFkaW5nOyBcblxufSkiXSwibmFtZXMiOlsiSGVhZGluZyIsInJlcXVpcmUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJyb290IiwiZ2V0RWxlbWVudEJ5SWQiLCJoZWFkaW5nIiwiaW5uZXJIVE1MIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/heading.js":
/*!********************************!*\
  !*** ./src/scripts/heading.js ***!
  \********************************/
/***/ (function(module) {

eval("function Heading(text) {\n  this.text = text;\n  this.heading = \"<h2>${this.text}</h2>\";\n}\n\nmodule.exports = Heading;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9oZWFkaW5nLmpzLmpzIiwibmFtZXMiOlsiSGVhZGluZyIsInRleHQiLCJoZWFkaW5nIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvaGVhZGluZy5qcz84MTRjIl0sInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIEhlYWRpbmcodGV4dCl7XG4gICAgdGhpcy50ZXh0ID0gdGV4dCBcbiAgICB0aGlzLmhlYWRpbmcgPSBcIjxoMj4ke3RoaXMudGV4dH08L2gyPlwiIFxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEhlYWRpbmc7ICJdLCJtYXBwaW5ncyI6IkFBQUEsU0FBU0EsT0FBVCxDQUFpQkMsSUFBakIsRUFBc0I7RUFDbEIsS0FBS0EsSUFBTCxHQUFZQSxJQUFaO0VBQ0EsS0FBS0MsT0FBTCxHQUFlLHVCQUFmO0FBQ0g7O0FBRURDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQkosT0FBakIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/heading.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;