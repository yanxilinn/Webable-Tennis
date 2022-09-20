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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__);\n // import './scripts/canvas.js';\n// import './scripts/block.js';\n// document.addEventListener(\"DOMContentloaded\", () => {\n//     const root = document.getElementById('root');\n//     const heading = new Heading(\"This is a light browser tennis game\");\n//     root.innerHTML = heading.heading; \n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0NBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2NyaXB0cy9iYWxsLmpzJztcbi8vIGltcG9ydCAnLi9zY3JpcHRzL2NhbnZhcy5qcyc7XG4vLyBpbXBvcnQgJy4vc2NyaXB0cy9ibG9jay5qcyc7XG5cblxuXG5cblxuLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRsb2FkZWRcIiwgKCkgPT4ge1xuLy8gICAgIGNvbnN0IHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncm9vdCcpO1xuLy8gICAgIGNvbnN0IGhlYWRpbmcgPSBuZXcgSGVhZGluZyhcIlRoaXMgaXMgYSBsaWdodCBicm93c2VyIHRlbm5pcyBnYW1lXCIpO1xuLy8gICAgIHJvb3QuaW5uZXJIVE1MID0gaGVhZGluZy5oZWFkaW5nOyBcblxuLy8gfSkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function() {

eval("var canvas = document.getElementById(\"canvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar ball = {\n  x: 500,\n  y: 300,\n  xSpeed: -1,\n  ySpeed: -2\n};\n\nball.draw = function () {\n  ctx.beginPath();\n  ctx.arc(this.x, this.y, 16, 0, Math.PI * 2);\n  ctx.fill();\n  ctx.closePath();\n};\n\nball.move = function () {\n  this.x = this.x + this.xSpeed;\n  this.y = this.y + this.ySpeed;\n};\n\nball.checkCanvas = function () {\n  // if(this.x < 0 || this.x >1000)\n  // this.xSpeed = -this.xSpeed;\n  // if(this.y<0 || this.y >600)\n  // this.ySpeed = -this.ySpeed;\n  if ((this.x >= 990 || this.x <= 10) && this.y >= panelLeft.y && this.y <= panelLeft.y + 100) {\n    this.xSpeed = -this.xSpeed;\n  } // console.log(panelRight.y)\n\n\n  if ((this.x >= 990 || this.x <= 10) && this.y >= panelRight.y && this.y <= panelRight.y + 100) {\n    this.xSpeed = -this.xSpeed;\n  }\n\n  if ((this.y <= 0 || this.y >= 600) && (this.x > 0 || this.x < 1000)) {\n    this.ySpeed = -this.ySpeed; // this.xSpeed = -this.xSpeed;\n  }\n\n  if (this.x < 0 || this.x > 1000) {\n    alert(\"Game over!\");\n    this.x = 500;\n    this.y = 300;\n  }\n};\n\nsetInterval(function () {\n  ctx.clearRect(0, 0, 1000, 600);\n  net.draw();\n  ball.draw();\n  panelLeft.draw();\n  panelRight.draw();\n  ball.move();\n  ball.checkCanvas();\n  ctx.strokeRect(0, 0, 1000, 600);\n}, 5);\nvar panelLeft = {\n  x: 0,\n  y: 300,\n  xSzie: 10,\n  ySize: 100\n};\nvar panelRight = {\n  x: 990,\n  y: 300,\n  xSzie: 10,\n  ySize: 100\n};\nvar net = {\n  x: 500,\n  y: 0,\n  xSzie: 3,\n  ySize: 600\n};\n\npanelLeft.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\npanelRight.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\nnet.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\n$(\"body\").keydown(function (event) {\n  console.log(event.keyCode);\n\n  if (event.keyCode === 87) {\n    panelLeft.y = panelLeft.y - 80;\n    if (panelLeft.y < 0) panelLeft.y = 0;\n  }\n\n  if (event.keyCode == 83) {\n    panelLeft.y = panelLeft.y + 80;\n    if (panelLeft.y > 600 - panelLeft.ySize) panelLeft.y = 600 - panelLeft.ySize;\n  }\n\n  if (event.keyCode == 38) {\n    panelRight.y = panelRight.y - 80;\n    if (panelRight.y < 0) panelRight.y = 0;\n  }\n\n  if (event.keyCode == 40) {\n    panelRight.y = panelRight.y + 80;\n    if (panelRight.y > 600 - panelRight.ySize) panelRight.y = 600 - panelRight.ySize;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWxsIiwieCIsInkiLCJ4U3BlZWQiLCJ5U3BlZWQiLCJkcmF3IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsIm1vdmUiLCJjaGVja0NhbnZhcyIsInBhbmVsTGVmdCIsInBhbmVsUmlnaHQiLCJhbGVydCIsInNldEludGVydmFsIiwiY2xlYXJSZWN0IiwibmV0Iiwic3Ryb2tlUmVjdCIsInhTemllIiwieVNpemUiLCJmaWxsUmVjdCIsIiQiLCJrZXlkb3duIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwia2V5Q29kZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvYmFsbC5qcz9hOTVlIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTsgXG52YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxudmFyIGJhbGwgPSB7XG4gICAgeDogNTAwLFxuICAgIHk6IDMwMCxcbiAgICB4U3BlZWQ6IC0xLFxuICAgIHlTcGVlZDogLTJcbn07XG5cbmJhbGwuZHJhdyA9IGZ1bmN0aW9uKCl7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDE2LCAwLCBNYXRoLlBJKjIpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xufTtcblxuYmFsbC5tb3ZlID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnhTcGVlZDtcbiAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnlTcGVlZDsgXG59O1xuXG5iYWxsLmNoZWNrQ2FudmFzID0gZnVuY3Rpb24oKXtcbiAgICAvLyBpZih0aGlzLnggPCAwIHx8IHRoaXMueCA+MTAwMClcbiAgICAvLyB0aGlzLnhTcGVlZCA9IC10aGlzLnhTcGVlZDtcbiAgICAvLyBpZih0aGlzLnk8MCB8fCB0aGlzLnkgPjYwMClcbiAgICAvLyB0aGlzLnlTcGVlZCA9IC10aGlzLnlTcGVlZDtcbiAgICBpZiAoKHRoaXMueCA+PSA5OTAgfHwgdGhpcy54IDw9IDEwKSAmJiAodGhpcy55ID49IChwYW5lbExlZnQueSkgJiYgdGhpcy55IDw9IChwYW5lbExlZnQueSArIDEwMCkpKSB7XG4gICAgICAgIHRoaXMueFNwZWVkID0gLXRoaXMueFNwZWVkO1xuICAgIH1cbiAgICAvLyBjb25zb2xlLmxvZyhwYW5lbFJpZ2h0LnkpXG4gICAgaWYgKCh0aGlzLnggPj0gOTkwIHx8IHRoaXMueCA8PSAxMCkgJiYgKHRoaXMueSA+PSAocGFuZWxSaWdodC55KSAmJiB0aGlzLnkgPD0gKHBhbmVsUmlnaHQueSArIDEwMCkpKSB7XG4gICAgICAgIHRoaXMueFNwZWVkID0gLXRoaXMueFNwZWVkO1xuICAgIH1cbiAgICBpZigodGhpcy55IDw9IDAgfHwgdGhpcy55ID49IDYwMCkgJiYgKHRoaXMueCA+IDAgfHwgdGhpcy54IDwgMTAwMCkpIHtcbiAgICAgICAgdGhpcy55U3BlZWQgPSAtdGhpcy55U3BlZWQ7XG4gICAgICAgIC8vIHRoaXMueFNwZWVkID0gLXRoaXMueFNwZWVkO1xuICAgIH1cbiAgICBpZih0aGlzLnggPCAwIHx8IHRoaXMueCA+IDEwMDApe1xuICAgICAgICBhbGVydChcIkdhbWUgb3ZlciFcIik7XG4gICAgICAgIHRoaXMueCA9IDUwMDtcbiAgICAgICAgdGhpcy55ID0gMzAwOyBcbiAgICB9XG59O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgNjAwKTtcbiAgICBuZXQuZHJhdygpO1xuICAgIGJhbGwuZHJhdygpO1xuICAgIHBhbmVsTGVmdC5kcmF3KCk7XG4gICAgcGFuZWxSaWdodC5kcmF3KCk7XG4gICAgYmFsbC5tb3ZlKCk7XG4gICAgYmFsbC5jaGVja0NhbnZhcygpO1xuICAgIGN0eC5zdHJva2VSZWN0KDAsMCwxMDAwLDYwMCk7XG59LDUpO1xuXG52YXIgcGFuZWxMZWZ0ID0ge1xuICAgIHg6IDAsXG4gICAgeTogMzAwLFxuICAgIHhTemllOiAxMCxcbiAgICB5U2l6ZTogMTAwXG59O1xuXG52YXIgcGFuZWxSaWdodCA9IHtcbiAgICB4OiA5OTAsXG4gICAgeTogMzAwLFxuICAgIHhTemllOiAxMCxcbiAgICB5U2l6ZTogMTAwXG59O1xuXG52YXIgbmV0ID0ge1xuICAgIHg6IDUwMCxcbiAgICB5OiAwLFxuICAgIHhTemllOiAzLFxuICAgIHlTaXplOiA2MDBcbn07XG5cbnBhbmVsTGVmdC5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMueFN6aWUsIHRoaXMueVNpemUpO1xufTtcblxucGFuZWxSaWdodC5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMueFN6aWUsIHRoaXMueVNpemUpO1xufTtcblxubmV0LmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy54U3ppZSwgdGhpcy55U2l6ZSk7XG59O1xuXG4kKFwiYm9keVwiKS5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODcpXG4gICAge1xuICAgICAgICBwYW5lbExlZnQueSA9IHBhbmVsTGVmdC55LTgwO1xuICAgICAgICBpZihwYW5lbExlZnQueTwwKVxuICAgICAgICBwYW5lbExlZnQueT0wO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4MylcbiAgICB7XG4gICAgICAgIHBhbmVsTGVmdC55ID0gcGFuZWxMZWZ0LnkgKzgwO1xuICAgICAgICBpZihwYW5lbExlZnQueSA+IDYwMC1wYW5lbExlZnQueVNpemUpXG4gICAgICAgIHBhbmVsTGVmdC55ID0gNjAwLXBhbmVsTGVmdC55U2l6ZTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpXG4gICAge1xuICAgICAgICBwYW5lbFJpZ2h0LnkgPSBwYW5lbFJpZ2h0LnktODA7XG4gICAgICAgIGlmKHBhbmVsUmlnaHQueTwwKVxuICAgICAgICBwYW5lbFJpZ2h0Lnk9MDtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApXG4gICAge1xuICAgICAgICBwYW5lbFJpZ2h0LnkgPSBwYW5lbFJpZ2h0LnkgKzgwO1xuICAgICAgICBpZihwYW5lbFJpZ2h0LnkgPiA2MDAtcGFuZWxSaWdodC55U2l6ZSlcbiAgICAgICAgcGFuZWxSaWdodC55ID0gNjAwLXBhbmVsUmlnaHQueVNpemU7XG4gICAgfVxufSk7IFxuXG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUEsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFFQSxJQUFJQyxJQUFJLEdBQUc7RUFDUEMsQ0FBQyxFQUFFLEdBREk7RUFFUEMsQ0FBQyxFQUFFLEdBRkk7RUFHUEMsTUFBTSxFQUFFLENBQUMsQ0FIRjtFQUlQQyxNQUFNLEVBQUUsQ0FBQztBQUpGLENBQVg7O0FBT0FKLElBQUksQ0FBQ0ssSUFBTCxHQUFZLFlBQVU7RUFDbEJQLEdBQUcsQ0FBQ1EsU0FBSjtFQUNBUixHQUFHLENBQUNTLEdBQUosQ0FBUSxLQUFLTixDQUFiLEVBQWdCLEtBQUtDLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCLENBQTVCLEVBQStCTSxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUF2QztFQUNBWCxHQUFHLENBQUNZLElBQUo7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\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

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