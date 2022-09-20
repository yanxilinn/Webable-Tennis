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

eval("// const { ContextExclusionPlugin } = require(\"webpack\");\nvar canvas = document.getElementById('canvas');\nvar ctx = canvas.getContext('2d');\nvar ball = {\n  x: 100,\n  y: 100,\n  xSpeed: -2,\n  ySpeed: -2\n};\n\nball.draw = function () {\n  ctx.beginPath();\n  ctx.arc(this.x, this.y, 5, 0, Math.PI * 2, false);\n  ctx.fill();\n};\n\nball.move = function () {\n  this.x = this.x + this.xSpeed;\n  this.y = this.y + this.ySpeed;\n};\n\nball.checkCanvas = function () {\n  if (this.x < 0 || this.x > 100) this.xSpeed = -this.xSpeed;\n  if (this.y < 0 || this.y > 100) this.ySpeed = -this.ySpeed;\n};\n\nsetInterval(function () {\n  ctx.clearRect(0, 0, 300, 150);\n  ball.draw();\n  ball.move();\n  ctx.strokeRect(0, 0, 300, 150);\n}, 3);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWxsIiwieCIsInkiLCJ4U3BlZWQiLCJ5U3BlZWQiLCJkcmF3IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsIm1vdmUiLCJjaGVja0NhbnZhcyIsInNldEludGVydmFsIiwiY2xlYXJSZWN0Iiwic3Ryb2tlUmVjdCJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvYmFsbC5qcz9hOTVlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgQ29udGV4dEV4Y2x1c2lvblBsdWdpbiB9ID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbnZhciBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxudmFyIGJhbGwgPSB7XG4gICAgeDogMTAwLFxuICAgIHk6IDEwMCxcbiAgICB4U3BlZWQ6IC0yLFxuICAgIHlTcGVlZDogLTJcbn07XG5cbmJhbGwuZHJhdyA9IGZ1bmN0aW9uKCl7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIDUsIDAsIE1hdGguUEkqMiwgZmFsc2UpO1xuICAgIGN0eC5maWxsKCk7XG59O1xuXG5iYWxsLm1vdmUgPSBmdW5jdGlvbigpe1xuICAgIHRoaXMueCA9IHRoaXMueCArIHRoaXMueFNwZWVkO1xuICAgIHRoaXMueSA9IHRoaXMueSArIHRoaXMueVNwZWVkOyBcbn07XG5cbmJhbGwuY2hlY2tDYW52YXMgPSBmdW5jdGlvbigpe1xuICAgIGlmKHRoaXMueCA8MCB8fCB0aGlzLnggPjEwMClcbiAgICB0aGlzLnhTcGVlZCA9LXRoaXMueFNwZWVkO1xuICAgIGlmKHRoaXMueTwwIHx8IHRoaXMueSA+MTAwKVxuICAgIHRoaXMueVNwZWVkID0tdGhpcy55U3BlZWQ7XG59O1xuXG5zZXRJbnRlcnZhbChmdW5jdGlvbigpe1xuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgMzAwLCAxNTApO1xuICAgIGJhbGwuZHJhdygpO1xuICAgIGJhbGwubW92ZSgpO1xuICAgIGN0eC5zdHJva2VSZWN0KDAsMCwzMDAsMTUwKTtcbn0sMyk7XG5cblxuXG5cbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxJQUFJQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFiO0FBQ0EsSUFBSUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBVjtBQUVBLElBQUlDLElBQUksR0FBRztFQUNQQyxDQUFDLEVBQUUsR0FESTtFQUVQQyxDQUFDLEVBQUUsR0FGSTtFQUdQQyxNQUFNLEVBQUUsQ0FBQyxDQUhGO0VBSVBDLE1BQU0sRUFBRSxDQUFDO0FBSkYsQ0FBWDs7QUFPQUosSUFBSSxDQUFDSyxJQUFMLEdBQVksWUFBVTtFQUNsQlAsR0FBRyxDQUFDUSxTQUFKO0VBQ0FSLEdBQUcsQ0FBQ1MsR0FBSixDQUFRLEtBQUtOLENBQWIsRUFBZ0IsS0FBS0MsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEJNLElBQUksQ0FBQ0MsRUFBTCxHQUFRLENBQXRDLEVBQXlDLEtBQXpDO0VBQ0FYLEdBQUcsQ0FBQ1ksSUFBSjtBQUNILENBSkQ7O0FBTUFWLElBQUksQ0FBQ1csSUFBTCxHQUFZLFlBQVU7RUFDbEIsS0FBS1YsQ0FBTCxHQUFTLEtBQUtBLENBQUwsR0FBUyxLQUFLRSxNQUF2QjtFQUNBLEtBQUtELENBQUwsR0FBUyxLQUFLQSxDQUFMLEdBQVMsS0FBS0UsTUFBdkI7QUFDSCxDQUhEOztBQUtBSixJQUFJLENBQUNZLFdBQUwsR0FBbUIsWUFBVTtFQUN6QixJQUFHLEtBQUtYLENBQUwsR0FBUSxDQUFSLElBQWEsS0FBS0EsQ0FBTCxHQUFRLEdBQXhCLEVBQ0EsS0FBS0UsTUFBTCxHQUFhLENBQUMsS0FBS0EsTUFBbkI7RUFDQSxJQUFHLEtBQUtELENBQUwsR0FBTyxDQUFQLElBQVksS0FBS0EsQ0FBTCxHQUFRLEdBQXZCLEVBQ0EsS0FBS0UsTUFBTCxHQUFhLENBQUMsS0FBS0EsTUFBbkI7QUFDSCxDQUxEOztBQU9BUyxXQUFXLENBQUMsWUFBVTtFQUNsQmYsR0FBRyxDQUFDZ0IsU0FBSixDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsR0FBcEIsRUFBeUIsR0FBekI7RUFDQWQsSUFBSSxDQUFDSyxJQUFMO0VBQ0FMLElBQUksQ0FBQ1csSUFBTDtFQUNBYixHQUFHLENBQUNpQixVQUFKLENBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixHQUFuQixFQUF1QixHQUF2QjtBQUNILENBTFUsRUFLVCxDQUxTLENBQVgifQ==\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function() {

eval("// const { ContextExclusionPlugin } = require(\"webpack\");\nvar canvas = document.getElementById('canvas');\nvar net = canvas.getContext('2d');\nnet.strokeRect(150, 0, 1, 150);\nnet.fillStyle = \"black\";\nvar block_left = canvas.getContext('2d');\nblock_left.strokeRect(2, 75, 2, 20);\nvar block_right = canvas.getContext('2d');\nblock_right.strokeRect(296, 75, 2, 20); // var ball=canvas.getContext(\"2d\");\n// ball.beginPath();\n// ball.arc(50,50,2,0,2*Math.PI);\n// ball.fillStyle=\"white\";\n// ball.fill();\n// ball.stroke();\n// const canvas = document.getElementById('canvas'); \n// const ctx = canvas.getContext('2d');\n// const width = 800;\n// const height = 600; \n// // net.fill();\n// const blockHeight = 50;\n// const blockWidth = 10;\n// const blockDiff = 25;\n// let playerMoved = false;\n// let blockContact = false; \n// let ballX = 250;\n// let ballY = 350;\n// const ballRadius = 5;\n// // let speedY, speedX, trajectorX, computerSpeed;\n// function renderCanvas(){\n//     // canvas\n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(150,0,2,150);\n//     // block \n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(2, 70, blockWidth, blockHeight);//left block\n//     ctx.fillRect(145, 70, blockWidth, blockHeight);//left block\n//     ctx.beginPath(); //set center line \n//     ctx.setLineDash([4]);\n//     ctx.strokeStyle = \"white\"; \n//     ctx.stroke();\n//     ctx.beginPath();\n//     ctx.arc(ballX, ballY, ballRadius, 2*Math.PI);\n//     ctx.fillStyle = \"white\";\n//     ctx.fill();\n// }\n// function setupCanvas(){\n//     canvas.width = width\n//     canvas.height = height\n//     renderCanvas();\n// }\n// var block_left = canvas.getContext('2d');\n// block_left.fillStyle=\"white\";\n// block_left.fillRect(2,75,5,20);\n// var block_right = canvas.getContext('2d');\n// block_right.fillStyle=\"white\";\n// block_right.fillRect(292,75,5,20);\n// var ball=canvas.getContext(\"2d\");\n// ball.fillStyle=\"white\"\n// ball.beginPath();\n// ball.arc(95,50,4,0,2*Math.PI);\n// ball.closePath();\n// ball.fill();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVJlY3QiLCJmaWxsU3R5bGUiLCJibG9ja19sZWZ0IiwiYmxvY2tfcmlnaHQiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcz83YmRlIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IHsgQ29udGV4dEV4Y2x1c2lvblBsdWdpbiB9ID0gcmVxdWlyZShcIndlYnBhY2tcIik7XG52YXIgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbnZhciBuZXQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbm5ldC5zdHJva2VSZWN0KDE1MCwwLDEsMTUwKTtcbm5ldC5maWxsU3R5bGU9XCJibGFja1wiO1xuXG52YXIgYmxvY2tfbGVmdCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuYmxvY2tfbGVmdC5zdHJva2VSZWN0KDIsNzUsMiwyMCk7XG5cbnZhciBibG9ja19yaWdodCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuYmxvY2tfcmlnaHQuc3Ryb2tlUmVjdCgyOTYsIDc1LDIsMjApO1xuXG4vLyB2YXIgYmFsbD1jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuLy8gYmFsbC5iZWdpblBhdGgoKTtcbi8vIGJhbGwuYXJjKDUwLDUwLDIsMCwyKk1hdGguUEkpO1xuLy8gYmFsbC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuLy8gYmFsbC5maWxsKCk7XG4vLyBiYWxsLnN0cm9rZSgpO1xuXG5cblxuLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gY29uc3Qgd2lkdGggPSA4MDA7XG4vLyBjb25zdCBoZWlnaHQgPSA2MDA7IFxuXG5cbi8vIC8vIG5ldC5maWxsKCk7XG5cbi8vIGNvbnN0IGJsb2NrSGVpZ2h0ID0gNTA7XG4vLyBjb25zdCBibG9ja1dpZHRoID0gMTA7XG4vLyBjb25zdCBibG9ja0RpZmYgPSAyNTtcbi8vIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuLy8gbGV0IGJsb2NrQ29udGFjdCA9IGZhbHNlOyBcblxuLy8gbGV0IGJhbGxYID0gMjUwO1xuLy8gbGV0IGJhbGxZID0gMzUwO1xuLy8gY29uc3QgYmFsbFJhZGl1cyA9IDU7XG5cbi8vIC8vIGxldCBzcGVlZFksIHNwZWVkWCwgdHJhamVjdG9yWCwgY29tcHV0ZXJTcGVlZDtcblxuLy8gZnVuY3Rpb24gcmVuZGVyQ2FudmFzKCl7XG4vLyAgICAgLy8gY2FudmFzXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbi8vICAgICBjdHguZmlsbFJlY3QoMTUwLDAsMiwxNTApO1xuLy8gICAgIC8vIGJsb2NrIFxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4vLyAgICAgY3R4LmZpbGxSZWN0KDIsIDcwLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCk7Ly9sZWZ0IGJsb2NrXG4vLyAgICAgY3R4LmZpbGxSZWN0KDE0NSwgNzAsIGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KTsvL2xlZnQgYmxvY2tcbi8vICAgICBjdHguYmVnaW5QYXRoKCk7IC8vc2V0IGNlbnRlciBsaW5lIFxuLy8gICAgIGN0eC5zZXRMaW5lRGFzaChbNF0pO1xuLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjsgXG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgICBjdHguYXJjKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgMipNYXRoLlBJKTtcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuLy8gICAgIGN0eC5maWxsKCk7XG5cbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBzZXR1cENhbnZhcygpe1xuLy8gICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4vLyAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuLy8gICAgIHJlbmRlckNhbnZhcygpO1xuLy8gfVxuXG5cblxuXG4vLyB2YXIgYmxvY2tfbGVmdCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gYmxvY2tfbGVmdC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuLy8gYmxvY2tfbGVmdC5maWxsUmVjdCgyLDc1LDUsMjApO1xuXG4vLyB2YXIgYmxvY2tfcmlnaHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGJsb2NrX3JpZ2h0LmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBibG9ja19yaWdodC5maWxsUmVjdCgyOTIsNzUsNSwyMCk7XG5cbi8vIHZhciBiYWxsPWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBiYWxsLmZpbGxTdHlsZT1cIndoaXRlXCJcbi8vIGJhbGwuYmVnaW5QYXRoKCk7XG4vLyBiYWxsLmFyYyg5NSw1MCw0LDAsMipNYXRoLlBJKTtcbi8vIGJhbGwuY2xvc2VQYXRoKCk7XG4vLyBiYWxsLmZpbGwoKTsgXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0EsSUFBSUEsTUFBTSxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBYjtBQUNBLElBQUlDLEdBQUcsR0FBR0gsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVY7QUFDQUQsR0FBRyxDQUFDRSxVQUFKLENBQWUsR0FBZixFQUFtQixDQUFuQixFQUFxQixDQUFyQixFQUF1QixHQUF2QjtBQUNBRixHQUFHLENBQUNHLFNBQUosR0FBYyxPQUFkO0FBRUEsSUFBSUMsVUFBVSxHQUFHUCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBakI7QUFDQUcsVUFBVSxDQUFDRixVQUFYLENBQXNCLENBQXRCLEVBQXdCLEVBQXhCLEVBQTJCLENBQTNCLEVBQTZCLEVBQTdCO0FBRUEsSUFBSUcsV0FBVyxHQUFHUixNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBbEI7QUFDQUksV0FBVyxDQUFDSCxVQUFaLENBQXVCLEdBQXZCLEVBQTRCLEVBQTVCLEVBQStCLENBQS9CLEVBQWlDLEVBQWpDLEUsQ0FFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EifQ==\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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