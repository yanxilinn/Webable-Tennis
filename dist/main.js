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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/canvas.js */ \"./src/scripts/canvas.js\");\n/* harmony import */ var _scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_canvas_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_ball_js__WEBPACK_IMPORTED_MODULE_1__);\n// import './scripts/ball.js';\n // import './scripts/block.js';\n\n\nconst ball = new (_scripts_ball_js__WEBPACK_IMPORTED_MODULE_1___default())(document.getElementById('ball')); // document.addEventListener(\"DOMContentloaded\", () => {\n//     const root = document.getElementById('root');\n//     const heading = new Heading(\"This is a light browser tennis game\");\n//     root.innerHTML = heading.heading; \n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtDQUVBOztBQUVBO0FBQ0EsTUFBTUMsSUFBSSxHQUFHLElBQUlELHlEQUFKLENBQVNFLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUFULENBQWIsRUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0ICcuL3NjcmlwdHMvYmFsbC5qcyc7XG5pbXBvcnQgJy4vc2NyaXB0cy9jYW52YXMuanMnO1xuLy8gaW1wb3J0ICcuL3NjcmlwdHMvYmxvY2suanMnO1xuXG5pbXBvcnQgQmFsbCBmcm9tIFwiLi9zY3JpcHRzL2JhbGwuanNcIlxuY29uc3QgYmFsbCA9IG5ldyBCYWxsKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWxsJykpXG5cblxuXG5cbi8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50bG9hZGVkXCIsICgpID0+IHtcbi8vICAgICBjb25zdCByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jvb3QnKTtcbi8vICAgICBjb25zdCBoZWFkaW5nID0gbmV3IEhlYWRpbmcoXCJUaGlzIGlzIGEgbGlnaHQgYnJvd3NlciB0ZW5uaXMgZ2FtZVwiKTtcbi8vICAgICByb290LmlubmVySFRNTCA9IGhlYWRpbmcuaGVhZGluZzsgXG5cbi8vIH0pIl0sIm5hbWVzIjpbIkJhbGwiLCJiYWxsIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function() {

eval("function resetBall() {\n  ballX = width / 2;\n  ballY = height / 2;\n  speedY = -3;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsicmVzZXRCYWxsIiwiYmFsbFgiLCJ3aWR0aCIsImJhbGxZIiwiaGVpZ2h0Iiwic3BlZWRZIl0sInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvc2NyaXB0cy9iYWxsLmpzP2E5NWUiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gcmVzZXRCYWxsKCl7XG4gICAgYmFsbFggPSB3aWR0aC8yXG4gICAgYmFsbFkgPSBoZWlnaHQvMlxuICAgIHNwZWVkWSA9IC0zXG59Il0sIm1hcHBpbmdzIjoiQUFBQSxTQUFTQSxTQUFULEdBQW9CO0VBQ2hCQyxLQUFLLEdBQUdDLEtBQUssR0FBQyxDQUFkO0VBQ0FDLEtBQUssR0FBR0MsTUFBTSxHQUFDLENBQWY7RUFDQUMsTUFBTSxHQUFHLENBQUMsQ0FBVjtBQUNIIn0=\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/***/ (function() {

eval("var canvas = document.getElementById('canvas');\nvar net = canvas.getContext('2d');\nnet.strokeRect(150, 0, 1, 150);\nnet.fillStyle = \"#ffffff\";\nvar block_left = canvas.getContext('2d');\nblock_left.strokeRect(2, 75, 2, 20);\nvar block_right = canvas.getContext('2d');\nblock_right.strokeRect(296, 75, 2, 20);\nvar ball = canvas.getContext(\"2d\");\nball.beginPath();\nball.arc(50, 50, 2, 0, 2 * Math.PI);\nball.fillStyle = \"white\";\nball.fill();\nball.stroke(); // const canvas = document.getElementById('canvas'); \n// const ctx = canvas.getContext('2d');\n// const width = 800;\n// const height = 600; \n// // net.fill();\n// const blockHeight = 50;\n// const blockWidth = 10;\n// const blockDiff = 25;\n// let playerMoved = false;\n// let blockContact = false; \n// let ballX = 250;\n// let ballY = 350;\n// const ballRadius = 5;\n// // let speedY, speedX, trajectorX, computerSpeed;\n// function renderCanvas(){\n//     // canvas\n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(150,0,2,150);\n//     // block \n//     ctx.fillStyle = \"white\";\n//     ctx.fillRect(2, 70, blockWidth, blockHeight);//left block\n//     ctx.fillRect(145, 70, blockWidth, blockHeight);//left block\n//     ctx.beginPath(); //set center line \n//     ctx.setLineDash([4]);\n//     ctx.strokeStyle = \"white\"; \n//     ctx.stroke();\n//     ctx.beginPath();\n//     ctx.arc(ballX, ballY, ballRadius, 2*Math.PI);\n//     ctx.fillStyle = \"white\";\n//     ctx.fill();\n// }\n// function setupCanvas(){\n//     canvas.width = width\n//     canvas.height = height\n//     renderCanvas();\n// }\n// var block_left = canvas.getContext('2d');\n// block_left.fillStyle=\"white\";\n// block_left.fillRect(2,75,5,20);\n// var block_right = canvas.getContext('2d');\n// block_right.fillStyle=\"white\";\n// block_right.fillRect(292,75,5,20);\n// var ball=canvas.getContext(\"2d\");\n// ball.fillStyle=\"white\"\n// ball.beginPath();\n// ball.arc(95,50,4,0,2*Math.PI);\n// ball.closePath();\n// ball.fill();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9jYW52YXMuanMuanMiLCJuYW1lcyI6WyJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwibmV0IiwiZ2V0Q29udGV4dCIsInN0cm9rZVJlY3QiLCJmaWxsU3R5bGUiLCJibG9ja19sZWZ0IiwiYmxvY2tfcmlnaHQiLCJiYWxsIiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsInN0cm9rZSJdLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2ViYWJsZS10ZW5uaXMtLy4vc3JjL3NjcmlwdHMvY2FudmFzLmpzPzdiZGUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYW52YXMnKTsgXG52YXIgbmV0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5uZXQuc3Ryb2tlUmVjdCgxNTAsMCwxLDE1MCk7XG5uZXQuZmlsbFN0eWxlPVwiI2ZmZmZmZlwiO1xuXG52YXIgYmxvY2tfbGVmdCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuYmxvY2tfbGVmdC5zdHJva2VSZWN0KDIsNzUsMiwyMCk7XG5cbnZhciBibG9ja19yaWdodCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuYmxvY2tfcmlnaHQuc3Ryb2tlUmVjdCgyOTYsIDc1LDIsMjApO1xuXG52YXIgYmFsbD1jYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xuYmFsbC5iZWdpblBhdGgoKTtcbmJhbGwuYXJjKDUwLDUwLDIsMCwyKk1hdGguUEkpO1xuYmFsbC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuYmFsbC5maWxsKCk7XG5iYWxsLnN0cm9rZSgpO1xuXG5cblxuLy8gY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhbnZhcycpOyBcbi8vIGNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gY29uc3Qgd2lkdGggPSA4MDA7XG4vLyBjb25zdCBoZWlnaHQgPSA2MDA7IFxuXG5cbi8vIC8vIG5ldC5maWxsKCk7XG5cbi8vIGNvbnN0IGJsb2NrSGVpZ2h0ID0gNTA7XG4vLyBjb25zdCBibG9ja1dpZHRoID0gMTA7XG4vLyBjb25zdCBibG9ja0RpZmYgPSAyNTtcbi8vIGxldCBwbGF5ZXJNb3ZlZCA9IGZhbHNlO1xuLy8gbGV0IGJsb2NrQ29udGFjdCA9IGZhbHNlOyBcblxuLy8gbGV0IGJhbGxYID0gMjUwO1xuLy8gbGV0IGJhbGxZID0gMzUwO1xuLy8gY29uc3QgYmFsbFJhZGl1cyA9IDU7XG5cbi8vIC8vIGxldCBzcGVlZFksIHNwZWVkWCwgdHJhamVjdG9yWCwgY29tcHV0ZXJTcGVlZDtcblxuLy8gZnVuY3Rpb24gcmVuZGVyQ2FudmFzKCl7XG4vLyAgICAgLy8gY2FudmFzXG4vLyAgICAgY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcbi8vICAgICBjdHguZmlsbFJlY3QoMTUwLDAsMiwxNTApO1xuLy8gICAgIC8vIGJsb2NrIFxuLy8gICAgIGN0eC5maWxsU3R5bGUgPSBcIndoaXRlXCI7XG4vLyAgICAgY3R4LmZpbGxSZWN0KDIsIDcwLCBibG9ja1dpZHRoLCBibG9ja0hlaWdodCk7Ly9sZWZ0IGJsb2NrXG4vLyAgICAgY3R4LmZpbGxSZWN0KDE0NSwgNzAsIGJsb2NrV2lkdGgsIGJsb2NrSGVpZ2h0KTsvL2xlZnQgYmxvY2tcbi8vICAgICBjdHguYmVnaW5QYXRoKCk7IC8vc2V0IGNlbnRlciBsaW5lIFxuLy8gICAgIGN0eC5zZXRMaW5lRGFzaChbNF0pO1xuLy8gICAgIGN0eC5zdHJva2VTdHlsZSA9IFwid2hpdGVcIjsgXG4vLyAgICAgY3R4LnN0cm9rZSgpO1xuLy8gICAgIGN0eC5iZWdpblBhdGgoKTtcbi8vICAgICBjdHguYXJjKGJhbGxYLCBiYWxsWSwgYmFsbFJhZGl1cywgMipNYXRoLlBJKTtcbi8vICAgICBjdHguZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuLy8gICAgIGN0eC5maWxsKCk7XG5cbi8vIH1cblxuXG4vLyBmdW5jdGlvbiBzZXR1cENhbnZhcygpe1xuLy8gICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoXG4vLyAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodFxuLy8gICAgIHJlbmRlckNhbnZhcygpO1xuLy8gfVxuXG5cblxuXG4vLyB2YXIgYmxvY2tfbGVmdCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xuLy8gYmxvY2tfbGVmdC5maWxsU3R5bGU9XCJ3aGl0ZVwiO1xuLy8gYmxvY2tfbGVmdC5maWxsUmVjdCgyLDc1LDUsMjApO1xuXG4vLyB2YXIgYmxvY2tfcmlnaHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbi8vIGJsb2NrX3JpZ2h0LmZpbGxTdHlsZT1cIndoaXRlXCI7XG4vLyBibG9ja19yaWdodC5maWxsUmVjdCgyOTIsNzUsNSwyMCk7XG5cbi8vIHZhciBiYWxsPWNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XG4vLyBiYWxsLmZpbGxTdHlsZT1cIndoaXRlXCJcbi8vIGJhbGwuYmVnaW5QYXRoKCk7XG4vLyBiYWxsLmFyYyg5NSw1MCw0LDAsMipNYXRoLlBJKTtcbi8vIGJhbGwuY2xvc2VQYXRoKCk7XG4vLyBiYWxsLmZpbGwoKTsgXG5cblxuXG4iXSwibWFwcGluZ3MiOiJBQUFBLElBQUlBLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLFFBQXhCLENBQWI7QUFDQSxJQUFJQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0ksVUFBUCxDQUFrQixJQUFsQixDQUFWO0FBQ0FELEdBQUcsQ0FBQ0UsVUFBSixDQUFlLEdBQWYsRUFBbUIsQ0FBbkIsRUFBcUIsQ0FBckIsRUFBdUIsR0FBdkI7QUFDQUYsR0FBRyxDQUFDRyxTQUFKLEdBQWMsU0FBZDtBQUVBLElBQUlDLFVBQVUsR0FBR1AsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQWpCO0FBQ0FHLFVBQVUsQ0FBQ0YsVUFBWCxDQUFzQixDQUF0QixFQUF3QixFQUF4QixFQUEyQixDQUEzQixFQUE2QixFQUE3QjtBQUVBLElBQUlHLFdBQVcsR0FBR1IsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQWxCO0FBQ0FJLFdBQVcsQ0FBQ0gsVUFBWixDQUF1QixHQUF2QixFQUE0QixFQUE1QixFQUErQixDQUEvQixFQUFpQyxFQUFqQztBQUVBLElBQUlJLElBQUksR0FBQ1QsTUFBTSxDQUFDSSxVQUFQLENBQWtCLElBQWxCLENBQVQ7QUFDQUssSUFBSSxDQUFDQyxTQUFMO0FBQ0FELElBQUksQ0FBQ0UsR0FBTCxDQUFTLEVBQVQsRUFBWSxFQUFaLEVBQWUsQ0FBZixFQUFpQixDQUFqQixFQUFtQixJQUFFQyxJQUFJLENBQUNDLEVBQTFCO0FBQ0FKLElBQUksQ0FBQ0gsU0FBTCxHQUFlLE9BQWY7QUFDQUcsSUFBSSxDQUFDSyxJQUFMO0FBQ0FMLElBQUksQ0FBQ00sTUFBTCxHLENBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=\n//# sourceURL=webpack-internal:///./src/scripts/canvas.js\n");

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