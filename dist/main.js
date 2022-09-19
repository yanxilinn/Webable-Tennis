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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _scripts_block_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/block.js */ \"./src/scripts/block.js\");\n/* harmony import */ var _scripts_block_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scripts_block_js__WEBPACK_IMPORTED_MODULE_2__);\n\n\n // document.addEventListener(\"DOMContentloaded\", () => {\n//     const root = document.getElementById('root');\n//     const heading = new Heading(\"This is a light browser tennis game\");\n//     root.innerHTML = heading.heading; \n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7Q0FLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3NjcmlwdHMvYmFsbC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9jYW52YXMuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvYmxvY2suanMnO1xuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRsb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuLy8gICAgIGNvbnN0IGhlYWRpbmcgPSBuZXcgSGVhZGluZyhcIlRoaXMgaXMgYSBsaWdodCBicm93c2VyIHRlbm5pcyBnYW1lXCIpO1xuLy8gICAgIHJvb3QuaW5uZXJIVE1MID0gaGVhZGluZy5oZWFkaW5nOyBcblxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvYmFsbC5qcz9hOTVlIl0sInNvdXJjZXNDb250ZW50IjpbIiJdLCJtYXBwaW5ncyI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/block.js":
/*!******************************!*\
  !*** ./src/scripts/block.js ***!
  \******************************/
/***/ (function() {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9ibG9jay5qcy5qcyIsIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9zY3JpcHRzL2Jsb2NrLmpzP2I4MTEiXSwic291cmNlc0NvbnRlbnQiOlsiIl0sIm1hcHBpbmdzIjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/block.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function() {

eval("var canvas = document.getElementById('canvas');\nvar net = canvas.getContext('2d');\nnet.strokeRect(150, 0, 1, 150);\nnet.fillStyle = \"#ffffff\";\nvar block_left = canvas.getContext('2d');\nblock_left.strokeRect(2, 75, 2, 20);\nvar block_right = canvas.getContext('2d');\nblock_right.strokeRect(296, 75, 2, 20);\nvar ball = c.getContext(\"2d\");\nball.beginPath();\nctx.arc(95, 50, 40, 0, 2 * Math.PI);\nctx.stroke();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVJlY3QiLCJmaWxsU3R5bGUiLCJibG9ja19sZWZ0IiwiYmxvY2tfcmlnaHQiLCJiYWxsIiwiYyIsImJlZ2luUGF0aCIsImN0eCIsImFyYyIsIk1hdGgiLCJQSSIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG52YXIgbmV0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5uZXQuc3Ryb2tlUmVjdCgxNTAsMCwxLDE1MCk7XG5uZXQuZmlsbFN0eWxlPVwiI2ZmZmZmZlwiO1xudmFyIGJsb2NrX2xlZnQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmJsb2NrX2xlZnQuc3Ryb2tlUmVjdCgyLDc1LDIsMjApO1xudmFyIGJsb2NrX3JpZ2h0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5ibG9ja19yaWdodC5zdHJva2VSZWN0KDI5NiwgNzUsMiwyMCk7XG52YXIgYmFsbD1jLmdldENvbnRleHQoXCIyZFwiKTtcbmJhbGwuYmVnaW5QYXRoKCk7XG5jdHguYXJjKDk1LDUwLDQwLDAsMipNYXRoLlBJKTtcbmN0eC5zdHJva2UoKTtcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsR0FBRyxDQUFDRSxVQUFKLENBQWUsR0FBZixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixHQUF2QjtBQUNBRixHQUFHLENBQUNHLFNBQUosR0FBYyxTQUFkO0FBQ0EsSUFBSUMsVUFBVSxHQUFHUCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBakI7QUFDQUcsVUFBVSxDQUFDRixVQUFYLENBQXNCLENBQXRCLEVBQXdCLEVBQXhCLEVBQTJCLENBQTNCLEVBQTZCLEVBQTdCO0FBQ0EsSUFBSUcsV0FBVyxHQUFHUixNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQUksV0FBVyxDQUFDSCxVQUFaLENBQXVCLEdBQXZCLEVBQTRCLEVBQTVCLEVBQStCLENBQS9CLEVBQWlDLEVBQWpDO0FBQ0EsSUFBSUksSUFBSSxHQUFDQyxDQUFDLENBQUNOLFVBQUYsQ0FBYSxJQUFiLENBQVQ7QUFDQUssSUFBSSxDQUFDRSxTQUFMO0FBQ0FDLEdBQUcsQ0FBQ0MsR0FBSixDQUFRLEVBQVIsRUFBVyxFQUFYLEVBQWMsRUFBZCxFQUFpQixDQUFqQixFQUFtQixJQUFFQyxJQUFJLENBQUNDLEVBQTFCO0FBQ0FILEdBQUcsQ0FBQ0ksTUFBSiJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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