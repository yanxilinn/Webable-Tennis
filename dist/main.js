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

eval("// const { ContextExclusionPlugin } = require(\"webpack\");\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar ball = {\n  x: 100,\n  y: 100,\n  xSpeed: -2,\n  ySpeed: -2\n};\n\nball.draw = function () {\n  ctx.beginPatch();\n  ctx.arc(this.x, this.y, 10, 0, Math.PI * 2, false);\n  ctx.fill();\n};\n\nball.move = function () {\n  this.x = this.x + this.xSpeed;\n  this.y = this.y + this.ySpeed;\n};\n\nsetInterval(function () {\n  ctx.clearRect(0, 0, 400, 400);\n  ball.draw();\n  ball.move();\n  ctx.strokeRect(0, 0, 400, 400);\n}, 30);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWxsIiwieCIsInkiLCJ4U3BlZWQiLCJ5U3BlZWQiLCJkcmF3IiwiYmVnaW5QYXRjaCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJtb3ZlIiwic2V0SW50ZXJ2YWwiLCJjbGVhclJlY3QiLCJzdHJva2VSZWN0Il0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvc2NyaXB0cy9iYWxsLmpzP2E5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgeyBDb250ZXh0RXhjbHVzaW9uUGx1Z2luIH0gPSByZXF1aXJlKFwid2VicGFja1wiKTtcbnZhciBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7IFxudmFyIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuXG52YXIgYmFsbCA9IHtcbiAgICB4OiAxMDAsXG4gICAgeTogMTAwLFxuICAgIHhTcGVlZDogLTIsXG4gICAgeVNwZWVkOiAtMlxufTtcblxuYmFsbC5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICBjdHguYmVnaW5QYXRjaCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDEwLCAwLCBNYXRoLlBJKjIsIGZhbHNlKTtcbiAgICBjdHguZmlsbCgpO1xufTtcblxuYmFsbC5tb3ZlID0gZnVuY3Rpb24oKXtcbiAgICB0aGlzLnggPSB0aGlzLnggKyB0aGlzLnhTcGVlZDtcbiAgICB0aGlzLnkgPSB0aGlzLnkgKyB0aGlzLnlTcGVlZDsgXG59O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgNDAwLCA0MDApO1xuICAgIGJhbGwuZHJhdygpO1xuICAgIGJhbGwubW92ZSgpO1xuICAgIGN0eC5zdHJva2VSZWN0KDAsMCw0MDAsNDAwKTtcbn0sMzApO1xuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLElBQUlDLElBQUksR0FBRztFQUNQQyxDQUFDLEVBQUUsR0FESTtFQUVQQyxDQUFDLEVBQUUsR0FGSTtFQUdQQyxNQUFNLEVBQUUsQ0FBQyxDQUhGO0VBSVBDLE1BQU0sRUFBRSxDQUFDO0FBSkYsQ0FBWDs7QUFPQUosSUFBSSxDQUFDSyxJQUFMLEdBQVksWUFBVTtFQUNsQlAsR0FBRyxDQUFDUSxVQUFKO0VBQ0FSLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLEtBQUtOLENBQWIsRUFBZ0IsS0FBS0MsQ0FBckIsRUFBd0IsRUFBeEIsRUFBNEIsQ0FBNUIsRUFBK0JNLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQXZDLEVBQTBDLEtBQTFDO0VBQ0FYLEdBQUcsQ0FBQ1ksSUFBSjtBQUNILENBSkQ7O0FBTUFWLElBQUksQ0FBQ1csSUFBTCxHQUFZLFlBQVU7RUFDbEIsS0FBS1YsQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLRSxNQUF2QjtFQUNBLEtBQUtELENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsTUFBdkI7QUFDSCxDQUhEOztBQUtBUSxXQUFXLENBQUMsWUFBVTtFQUNsQmQsR0FBRyxDQUFDZSxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixHQUFwQixFQUF5QixHQUF6QjtFQUNBYixJQUFJLENBQUNLLElBQUw7RUFDQUwsSUFBSSxDQUFDVyxJQUFMO0VBQ0FiLEdBQUcsQ0FBQ2dCLFVBQUosQ0FBZSxDQUFmLEVBQWlCLENBQWpCLEVBQW1CLEdBQW5CLEVBQXVCLEdBQXZCO0FBQ0gsQ0FMVSxFQUtULEVBTFMsQ0FBWCJ9\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function() {

eval("// const { ContextExclusionPlugin } = require(\"webpack\");\nvar canvas = document.getElementById('canvas');\nvar net = canvas.getContext('2d');\nnet.strokeRect(150, 0, 1, 150);\nnet.fillStyle = \"#ffffff\";\nvar block_left = canvas.getContext('2d');\nblock_left.strokeRect(2, 75, 2, 20);\nvar block_right = canvas.getContext('2d');\nblock_right.strokeRect(296, 75, 2, 20); // var ball=canvas.getContext(\"2d\");\n// ball.beginPath();\n// ball.arc(50,50,2,0,2*Math.PI);\n// ball.fillStyle=\"white\";\n// ball.fill();\n// ball.stroke();\n// const canvas = document.getElementById('canvas'); \n// const ctx = canvas.getContext('2d');\n// const width = 800;\n// const height = 600; \n// // net.fill();\n// const blockHeight = 50;\n// const blockWidth = 10;\n// const blockDiff = 25;\n// let playerMoved = false;\n// let blockContact = false; \n// let ballX = 250;\n// let ballY = 350;\n// const ballRadius = 5;\n// // let speedY, speedX, trajectorX, computerSpeed;\n// function renderCanvas(){\n//     // canvas\n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(150,0,2,150);\n//     // block \n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(2, 70, blockWidth, blockHeight);//left block\n//     ctx.fillRect(145, 70, blockWidth, blockHeight);//left block\n//     ctx.beginPath(); //set center line \n//     ctx.setLineDash([4]);\n//     ctx.strokeStyle = \"white\"; \n//     ctx.stroke();\n//     ctx.beginPath();\n//     ctx.arc(ballX, ballY, ballRadius, 2*Math.PI);\n//     ctx.fillStyle = \"white\";\n//     ctx.fill();\n// }\n// function setupCanvas(){\n//     canvas.width = width\n//     canvas.height = height\n//     renderCanvas();\n// }\n// var block_left = canvas.getContext('2d');\n// block_left.fillStyle=\"white\";\n// block_left.fillRect(2,75,5,20);\n// var block_right = canvas.getContext('2d');\n// block_right.fillStyle=\"white\";\n// block_right.fillRect(292,75,5,20);\n// var ball=canvas.getContext(\"2d\");\n// ball.fillStyle=\"white\"\n// ball.beginPath();\n// ball.arc(95,50,4,0,2*Math.PI);\n// ball.closePath();\n// ball.fill();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVJlY3QiLCJmaWxsU3R5bGUiLCJibG9ja19sZWZ0IiwiYmxvY2tfcmlnaHQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcz83YmRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgQ29udGV4dEV4Y2x1c2lvblBsdWdpbiB9ID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbnZhciBuZXQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbm5ldC5zdHJva2VSZWN0KDE1MCwwLDEsMTUwKTtcbm5ldC5maWxsU3R5bGU9XCIjZmZmZmZmXCI7XG5cbnZhciBibG9ja19sZWZ0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5ibG9ja19sZWZ0LnN0cm9rZVJlY3QoMiw3NSwyLDIwKTtcblxudmFyIGJsb2NrX3JpZ2h0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5ibG9ja19yaWdodC5zdHJva2VSZWN0KDI5NiwgNzUsMiwyMCk7XG5cbi8vIHZhciBiYWxsPWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBiYWxsLmJlZ2luUGF0aCgpO1xuLy8gYmFsbC5hcmMoNTAsNTAsMiwwLDIqTWF0aC5QSSk7XG4vLyBiYWxsLmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBiYWxsLmZpbGwoKTtcbi8vIGJhbGwuc3Ryb2tlKCk7XG5cblxuXG4vLyBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FudmFzJyk7IFxuLy8gY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyBjb25zdCB3aWR0aCA9IDgwMDtcbi8vIGNvbnN0IGhlaWdodCA9IDYwMDsgXG5cblxuLy8gLy8gbmV0LmZpbGwoKTtcblxuLy8gY29uc3QgYmxvY2tIZWlnaHQgPSA1MDtcbi8vIGNvbnN0IGJsb2NrV2lkdGggPSAxMDtcbi8vIGNvbnN0IGJsb2NrRGlmZiA9IDI1O1xuLy8gbGV0IHBsYXllck1vdmVkID0gZmFsc2U7XG4vLyBsZXQgYmxvY2tDb250YWN0ID0gZmFsc2U7IFxuXG4vLyBsZXQgYmFsbFggPSAyNTA7XG4vLyBsZXQgYmFsbFkgPSAzNTA7XG4vLyBjb25zdCBiYWxsUmFkaXVzID0gNTtcblxuLy8gLy8gbGV0IHNwZWVkWSwgc3BlZWRYLCB0cmFqZWN0b3JYLCBjb21wdXRlclNwZWVkO1xuXG4vLyBmdW5jdGlvbiByZW5kZXJDYW52YXMoKXtcbi8vICAgICAvLyBjYW52YXNcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuLy8gICAgIGN0eC5maWxsUmVjdCgxNTAsMCwyLDE1MCk7XG4vLyAgICAgLy8gYmxvY2sgXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbi8vICAgICBjdHguZmlsbFJlY3QoMiwgNzAsIGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KTsvL2xlZnQgYmxvY2tcbi8vICAgICBjdHguZmlsbFJlY3QoMTQ1LCA3MCwgYmxvY2tXaWR0aCwgYmxvY2tIZWlnaHQpOy8vbGVmdCBibG9ja1xuLy8gICAgIGN0eC5iZWdpblBhdGgoKTsgLy9zZXQgY2VudGVyIGxpbmUgXG4vLyAgICAgY3R4LnNldExpbmVEYXNoKFs0XSk7XG4vLyAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJ3aGl0ZVwiOyBcbi8vICAgICBjdHguc3Ryb2tlKCk7XG4vLyAgICAgY3R4LmJlZ2luUGF0aCgpO1xuLy8gICAgIGN0eC5hcmMoYmFsbFgsIGJhbGxZLCBiYWxsUmFkaXVzLCAyKk1hdGguUEkpO1xuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4vLyAgICAgY3R4LmZpbGwoKTtcblxuLy8gfVxuXG5cbi8vIGZ1bmN0aW9uIHNldHVwQ2FudmFzKCl7XG4vLyAgICAgY2FudmFzLndpZHRoID0gd2lkdGhcbi8vICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0XG4vLyAgICAgcmVuZGVyQ2FudmFzKCk7XG4vLyB9XG5cblxuXG5cbi8vIHZhciBibG9ja19sZWZ0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4vLyBibG9ja19sZWZ0LmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBibG9ja19sZWZ0LmZpbGxSZWN0KDIsNzUsNSwyMCk7XG5cbi8vIHZhciBibG9ja19yaWdodCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gYmxvY2tfcmlnaHQuZmlsbFN0eWxlPVwid2hpdGVcIjtcbi8vIGJsb2NrX3JpZ2h0LmZpbGxSZWN0KDI5Miw3NSw1LDIwKTtcblxuLy8gdmFyIGJhbGw9Y2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcbi8vIGJhbGwuZmlsbFN0eWxlPVwid2hpdGVcIlxuLy8gYmFsbC5iZWdpblBhdGgoKTtcbi8vIGJhbGwuYXJjKDk1LDUwLDQsMCwyKk1hdGguUEkpO1xuLy8gYmFsbC5jbG9zZVBhdGgoKTtcbi8vIGJhbGwuZmlsbCgpOyBcblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUNBRCxHQUFHLENBQUNFLFVBQUosQ0FBZSxHQUFmLEVBQW1CLENBQW5CLEVBQXFCLENBQXJCLEVBQXVCLEdBQXZCO0FBQ0FGLEdBQUcsQ0FBQ0csU0FBSixHQUFjLFNBQWQ7QUFFQSxJQUFJQyxVQUFVLEdBQUdQLE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFqQjtBQUNBRyxVQUFVLENBQUNGLFVBQVgsQ0FBc0IsQ0FBdEIsRUFBd0IsRUFBeEIsRUFBMkIsQ0FBM0IsRUFBNkIsRUFBN0I7QUFFQSxJQUFJRyxXQUFXLEdBQUdSLE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFsQjtBQUNBSSxXQUFXLENBQUNILFVBQVosQ0FBdUIsR0FBdkIsRUFBNEIsRUFBNUIsRUFBK0IsQ0FBL0IsRUFBaUMsRUFBakMsRSxDQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSJ9\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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