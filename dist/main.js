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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_1__);\n\n // import './scripts/block.js';\n// document.addEventListener(\"DOMContentloaded\", () => {\n//     const root = document.getElementById('root');\n//     const heading = new Heading(\"This is a light browser tennis game\");\n//     root.innerHTML = heading.heading; \n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtDQUVBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9zY3JpcHRzL2JhbGwuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvY2FudmFzLmpzJztcbi8vIGltcG9ydCAnLi9zY3JpcHRzL2Jsb2NrLmpzJztcblxuXG5cblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudGxvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4vLyAgICAgY29uc3QgaGVhZGluZyA9IG5ldyBIZWFkaW5nKFwiVGhpcyBpcyBhIGxpZ2h0IGJyb3dzZXIgdGVubmlzIGdhbWVcIik7XG4vLyAgICAgcm9vdC5pbm5lckhUTUwgPSBoZWFkaW5nLmhlYWRpbmc7IFxuXG4vLyB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function() {

eval("var canvas = document.getElementById(\"canvas\");\nvar ctx = canvas.getContext(\"2d\");\nvar ball = {\n  x: 100,\n  y: 100,\n  xSpeed: -2,\n  ySpeed: -2\n};\n\nball.draw = function () {\n  ctx.beginPath();\n  ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n  ctx.fill();\n};\n\nball.move = function () {\n  this.x = this.x + this.xSpeed;\n  this.y = this.y + this.ySpeed;\n};\n\nball.checkCanvas = function () {\n  if (this.x < 0 || this.x > 1000) this.xSpeed = -this.xSpeed;\n  if (this.y < 0 || this.y > 600) this.ySpeed = -this.ySpeed;\n};\n\nsetInterval(function () {\n  ctx.clearRect(0, 0, 1000, 600);\n  net.draw();\n  ball.draw();\n  panelLeft.draw();\n  panelRight.draw();\n  ball.move();\n  ball.checkCanvas();\n  ctx.strokeRect(0, 0, 1000, 600);\n}, 3);\nvar panelLeft = {\n  x: 10,\n  y: 200,\n  xSzie: 10,\n  ySize: 80\n};\nvar panelRight = {\n  x: 980,\n  y: 200,\n  xSzie: 10,\n  ySize: 80\n};\nvar net = {\n  x: 500,\n  y: 0,\n  xSzie: 3,\n  ySize: 600\n};\n\npanelLeft.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\npanelRight.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\nnet.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWxsIiwieCIsInkiLCJ4U3BlZWQiLCJ5U3BlZWQiLCJkcmF3IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJjaGVja0NhbnZhcyIsInNldEludGVydmFsIiwiY2xlYXJSZWN0IiwibmV0IiwicGFuZWxMZWZ0IiwicGFuZWxSaWdodCIsInN0cm9rZVJlY3QiLCJ4U3ppZSIsInlTaXplIiwiZmlsbFJlY3QiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9zY3JpcHRzL2JhbGwuanM/YTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIik7IFxudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG5cbnZhciBiYWxsID0ge1xuICAgIHg6IDEwMCxcbiAgICB5OiAxMDAsXG4gICAgeFNwZWVkOiAtMixcbiAgICB5U3BlZWQ6IC0yXG59O1xuXG5iYWxsLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxMCwgMCwgTWF0aC5QSSoyLCBmYWxzZSk7XG4gICAgY3R4LmZpbGwoKTtcbn07XG5cbmJhbGwubW92ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy54U3BlZWQ7XG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy55U3BlZWQ7IFxufTtcblxuYmFsbC5jaGVja0NhbnZhcyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYodGhpcy54IDwgMCB8fCB0aGlzLnggPjEwMDApXG4gICAgdGhpcy54U3BlZWQgPSAtdGhpcy54U3BlZWQ7XG4gICAgaWYodGhpcy55PDAgfHwgdGhpcy55ID42MDApXG4gICAgdGhpcy55U3BlZWQgPSAtdGhpcy55U3BlZWQ7XG59O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMTAwMCwgNjAwKTtcbiAgICBuZXQuZHJhdygpO1xuICAgIGJhbGwuZHJhdygpO1xuICAgIHBhbmVsTGVmdC5kcmF3KCk7XG4gICAgcGFuZWxSaWdodC5kcmF3KCk7XG4gICAgYmFsbC5tb3ZlKCk7XG4gICAgYmFsbC5jaGVja0NhbnZhcygpO1xuICAgIGN0eC5zdHJva2VSZWN0KDAsMCwxMDAwLDYwMCk7XG59LDMpO1xuXG52YXIgcGFuZWxMZWZ0ID0ge1xuICAgIHg6IDEwLFxuICAgIHk6IDIwMCxcbiAgICB4U3ppZTogMTAsXG4gICAgeVNpemU6IDgwXG59O1xuXG52YXIgcGFuZWxSaWdodCA9IHtcbiAgICB4OiA5ODAsXG4gICAgeTogMjAwLFxuICAgIHhTemllOiAxMCxcbiAgICB5U2l6ZTogODBcbn07XG5cbnZhciBuZXQgPSB7XG4gICAgeDogNTAwLFxuICAgIHk6IDAsXG4gICAgeFN6aWU6IDMsXG4gICAgeVNpemU6IDYwMFxufTtcblxucGFuZWxMZWZ0LmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy54U3ppZSwgdGhpcy55U2l6ZSk7XG59O1xuXG5wYW5lbFJpZ2h0LmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy54U3ppZSwgdGhpcy55U2l6ZSk7XG59O1xuXG5uZXQuZHJhdyA9IGZ1bmN0aW9uKCl7XG4gICAgY3R4LmZpbGxSZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLnhTemllLCB0aGlzLnlTaXplKTtcbn07XG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhC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\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function() {

eval("// const { ContextExclusionPlugin } = require(\"webpack\");\n// var canvas = document.getElementById('canvas'); \n// var net = canvas.getContext('2d');\n// net.strokeRect(150,0,1,150);\n// net.fillStyle=\"black\";\n// var ball=canvas.getContext(\"2d\");\n// ball.beginPath();\n// ball.arc(50,50,2,0,2*Math.PI);\n// ball.fillStyle=\"white\";\n// ball.fill();\n// ball.stroke();\n// const canvas = document.getElementById('canvas'); \n// const ctx = canvas.getContext('2d');\n// const width = 800;\n// const height = 600; \n// // net.fill();\n// const blockHeight = 50;\n// const blockWidth = 10;\n// const blockDiff = 25;\n// let playerMoved = false;\n// let blockContact = false; \n// let ballX = 250;\n// let ballY = 350;\n// const ballRadius = 5;\n// // let speedY, speedX, trajectorX, computerSpeed;\n// function renderCanvas(){\n//     // canvas\n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(150,0,2,150);\n//     // block \n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(2, 70, blockWidth, blockHeight);//left block\n//     ctx.fillRect(145, 70, blockWidth, blockHeight);//left block\n//     ctx.beginPath(); //set center line \n//     ctx.setLineDash([4]);\n//     ctx.strokeStyle = \"white\"; \n//     ctx.stroke();\n//     ctx.beginPath();\n//     ctx.arc(ballX, ballY, ballRadius, 2*Math.PI);\n//     ctx.fillStyle = \"white\";\n//     ctx.fill();\n// }\n// function setupCanvas(){\n//     canvas.width = width\n//     canvas.height = height\n//     renderCanvas();\n// }\n// var block_left = canvas.getContext('2d');\n// block_left.fillStyle=\"white\";\n// block_left.fillRect(2,75,5,20);\n// var block_right = canvas.getContext('2d');\n// block_right.fillStyle=\"white\";\n// block_right.fillRect(292,75,5,20);\n// var ball=canvas.getContext(\"2d\");\n// ball.fillStyle=\"white\"\n// ball.beginPath();\n// ball.arc(95,50,4,0,2*Math.PI);\n// ball.closePath();\n// ball.fill();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvc2NyaXB0cy9jYW52YXMuanM/N2JkZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCB7IENvbnRleHRFeGNsdXNpb25QbHVnaW4gfSA9IHJlcXVpcmUoXCJ3ZWJwYWNrXCIpO1xuLy8gdmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG4vLyB2YXIgbmV0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyBuZXQuc3Ryb2tlUmVjdCgxNTAsMCwxLDE1MCk7XG4vLyBuZXQuZmlsbFN0eWxlPVwiYmxhY2tcIjtcblxuXG5cbi8vIHZhciBiYWxsPWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBiYWxsLmJlZ2luUGF0aCgpO1xuLy8gYmFsbC5hcmMoNTAsNTAsMiwwLDIqTWF0aC5QSSk7XG4vLyBiYWxsLmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBiYWxsLmZpbGwoKTtcbi8vIGJhbGwuc3Ryb2tlKCk7XG5cblxuLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gY29uc3Qgd2lkdGggPSA4MDA7XG4vLyBjb25zdCBoZWlnaHQgPSA2MDA7IFxuXG5cbi8vIC8vIG5ldC5maWxsKCk7XG5cbi8vIGNvbnN0IGJsb2NrSGVpZ2h0ID0gNTA7XG4vLyBjb25zdCBibG9ja1dpZHRoID0gMTA7XG4vLyBjb25zdCBibG9ja0RpZmYgPSAyNTtcbi8vIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuLy8gbGV0IGJsb2NrQ29udGFjdCA9IGZhbHNlOyBcblxuLy8gbGV0IGJhbGxYID0gMjUwO1xuLy8gbGV0IGJhbGxZID0gMzUwO1xuLy8gY29uc3QgYmFsbFJhZGl1cyA9IDU7XG5cbi8vIC8vIGxldCBzcGVlZFksIHNwZWVkWCwgdHJhamVjdG9yWCwgY29tcHV0ZXJTcGVlZDtcblxuLy8gZnVuY3Rpb24gcmVuZGVyQ2FudmFzKCl7XG4vLyAgICAgLy8gY2FudmFzXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbi8vICAgICBjdHguZmlsbFJlY3QoMTUwLDAsMiwxNTApO1xuLy8gICAgIC8vIGJsb2NrIFxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4vLyAgICAgY3R4LmZpbGxSZWN0KDIsIDcwLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCk7Ly9sZWZ0IGJsb2NrXG4vLyAgICAgY3R4LmZpbGxSZWN0KDE0NSwgNzAsIGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KTsvL2xlZnQgYmxvY2tcbi8vICAgICBjdHguYmVnaW5QYXRoKCk7IC8vc2V0IGNlbnRlciBsaW5lIFxuLy8gICAgIGN0eC5zZXRMaW5lRGFzaChbNF0pO1xuLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjsgXG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgICBjdHguYXJjKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgMipNYXRoLlBJKTtcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuLy8gICAgIGN0eC5maWxsKCk7XG5cbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBzZXR1cENhbnZhcygpe1xuLy8gICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4vLyAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuLy8gICAgIHJlbmRlckNhbnZhcygpO1xuLy8gfVxuXG5cblxuXG4vLyB2YXIgYmxvY2tfbGVmdCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gYmxvY2tfbGVmdC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuLy8gYmxvY2tfbGVmdC5maWxsUmVjdCgyLDc1LDUsMjApO1xuXG4vLyB2YXIgYmxvY2tfcmlnaHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGJsb2NrX3JpZ2h0LmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBibG9ja19yaWdodC5maWxsUmVjdCgyOTIsNzUsNSwyMCk7XG5cbi8vIHZhciBiYWxsPWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBiYWxsLmZpbGxTdHlsZT1cIndoaXRlXCJcbi8vIGJhbGwuYmVnaW5QYXRoKCk7XG4vLyBiYWxsLmFyYyg5NSw1MCw0LDAsMipNYXRoLlBJKTtcbi8vIGJhbGwuY2xvc2VQYXRoKCk7XG4vLyBiYWxsLmZpbGwoKTsgXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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