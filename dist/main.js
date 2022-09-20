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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ball.js */ \"./src/scripts/ball.js\");\n/* harmony import */ var _scripts_ball_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scripts_ball_js__WEBPACK_IMPORTED_MODULE_0__);\n // import './scripts/panel.js';\n// import './scripts/block.js';\n// document.addEventListener(\"DOMContentloaded\", () => {\n//     const root = document.getElementById('root');\n//     const heading = new Heading(\"This is a light browser tennis game\");\n//     root.innerHTML = heading.heading; \n// })//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7O0NBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWJhYmxlLXRlbm5pcy0vLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4vc2NyaXB0cy9iYWxsLmpzJztcbi8vIGltcG9ydCAnLi9zY3JpcHRzL3BhbmVsLmpzJztcbi8vIGltcG9ydCAnLi9zY3JpcHRzL2Jsb2NrLmpzJztcblxuXG5cblxuXG4vLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudGxvYWRlZFwiLCAoKSA9PiB7XG4vLyAgICAgY29uc3Qgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyb290Jyk7XG4vLyAgICAgY29uc3QgaGVhZGluZyA9IG5ldyBIZWFkaW5nKFwiVGhpcyBpcyBhIGxpZ2h0IGJyb3dzZXIgdGVubmlzIGdhbWVcIik7XG4vLyAgICAgcm9vdC5pbm5lckhUTUwgPSBoZWFkaW5nLmhlYWRpbmc7IFxuXG4vLyB9KSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/ball.js":
/*!*****************************!*\
  !*** ./src/scripts/ball.js ***!
  \*****************************/
/***/ (function() {

eval("const canvas = document.getElementById(\"canvas\");\nconst ctx = canvas.getContext(\"2d\");\nlet leftScore = 0;\nlet rightScore = 0;\nctx.font = '50px serif';\nctx.fillText(\"hello\", 50, 90);\nvar ball = {\n  x: 500,\n  y: 300,\n  xSpeed: -1,\n  ySpeed: -2\n};\n\nball.draw = function () {\n  ctx.beginPath();\n  ctx.arc(this.x, this.y, 16, 0, Math.PI * 2);\n  ctx.fill();\n  ctx.closePath();\n};\n\nball.move = function () {\n  this.x = this.x + this.xSpeed;\n  this.y = this.y + this.ySpeed;\n};\n\nball.checkCanvas = function () {\n  if ((this.x >= 990 || this.x <= 10) && this.y >= panelLeft.y - 50 && this.y <= panelLeft.y + 50) {\n    this.xSpeed = -this.xSpeed;\n  }\n\n  if ((this.x >= 990 || this.x <= 10) && this.y >= panelRight.y && this.y <= panelRight.y + 100) {\n    this.xSpeed = -this.xSpeed;\n  }\n\n  if ((this.y <= 0 || this.y >= 600) && (this.x > 0 || this.x < 1000)) {\n    this.ySpeed = -this.ySpeed;\n  }\n\n  if (this.x < 0 && rightScore < 5) {\n    rightScore += 1;\n    this.x = 500;\n    this.y = 300;\n    this.xSpeed = this.xSpeed;\n    this.ySpeed = this.ySpeed;\n  }\n\n  if (this.x > 1000 && leftScore < 5) {\n    leftScore += 1;\n    this.x = 500;\n    this.y = 300;\n    this.xSpeed = this.xSpeed;\n    this.ySpeed = this.ySpeed;\n  }\n\n  if (rightScore === 5) {\n    alert(\"Right Player Win!!!\");\n    this.x = 500;\n    this.y = 300;\n    rightScore = 0;\n    leftScore = 0;\n    this.xSpeed = -1, this.ySpeed = -2;\n  }\n\n  if (leftScore === 5) {\n    alert(\"Left Player Win!!!\");\n    this.x = 500;\n    this.y = 300;\n    rightScore = 0;\n    leftScore = 0;\n    this.xSpeed = -1, this.ySpeed = -2;\n  }\n};\n\nsetInterval(function () {\n  ctx.clearRect(0, 0, 1000, 600);\n  net.draw();\n  ball.draw();\n  panelLeft.draw();\n  panelRight.draw();\n  ball.move();\n  ball.checkCanvas();\n  ctx.strokeRect(0, 0, 1000, 600);\n}, 5);\nvar panelLeft = {\n  x: 0,\n  y: 300,\n  xSzie: 10,\n  ySize: 100\n};\nvar panelRight = {\n  x: 990,\n  y: 300,\n  xSzie: 10,\n  ySize: 100\n};\nvar net = {\n  x: 500,\n  y: 0,\n  xSzie: 3,\n  ySize: 600\n};\n\npanelLeft.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\npanelRight.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\nnet.draw = function () {\n  ctx.fillRect(this.x, this.y, this.xSzie, this.ySize);\n};\n\n$(\"body\").keydown(function (event) {\n  console.log(event.keyCode);\n\n  if (event.keyCode === 87) {\n    panelLeft.y = panelLeft.y - 80;\n    if (panelLeft.y < 0) panelLeft.y = 0;\n  }\n\n  if (event.keyCode == 83) {\n    panelLeft.y = panelLeft.y + 80;\n    if (panelLeft.y > 600 - panelLeft.ySize) panelLeft.y = 600 - panelLeft.ySize;\n  }\n\n  if (event.keyCode == 38) {\n    panelRight.y = panelRight.y - 80;\n    if (panelRight.y < 0) panelRight.y = 0;\n  }\n\n  if (event.keyCode == 40) {\n    panelRight.y = panelRight.y + 80;\n    if (panelRight.y > 600 - panelRight.ySize) panelRight.y = 600 - panelRight.ySize;\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9iYWxsLmpzLmpzIiwibmFtZXMiOlsiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJsZWZ0U2NvcmUiLCJyaWdodFNjb3JlIiwiZm9udCIsImZpbGxUZXh0IiwiYmFsbCIsIngiLCJ5IiwieFNwZWVkIiwieVNwZWVkIiwiZHJhdyIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJtb3ZlIiwiY2hlY2tDYW52YXMiLCJwYW5lbExlZnQiLCJwYW5lbFJpZ2h0IiwiYWxlcnQiLCJzZXRJbnRlcnZhbCIsImNsZWFyUmVjdCIsIm5ldCIsInN0cm9rZVJlY3QiLCJ4U3ppZSIsInlTaXplIiwiZmlsbFJlY3QiLCIkIiwia2V5ZG93biIsImV2ZW50IiwiY29uc29sZSIsImxvZyIsImtleUNvZGUiXSwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYmFibGUtdGVubmlzLS8uL3NyYy9zY3JpcHRzL2JhbGwuanM/YTk1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKTsgXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpO1xubGV0IGxlZnRTY29yZSA9IDA7XG5sZXQgcmlnaHRTY29yZSA9IDA7XG5jdHguZm9udCA9ICc1MHB4IHNlcmlmJztcbmN0eC5maWxsVGV4dChcImhlbGxvXCIsIDUwLCA5MCk7XG5cbnZhciBiYWxsID0ge1xuICAgIHg6IDUwMCxcbiAgICB5OiAzMDAsXG4gICAgeFNwZWVkOiAtMSxcbiAgICB5U3BlZWQ6IC0yXG59O1xuXG5iYWxsLmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCAxNiwgMCwgTWF0aC5QSSoyKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbn07XG5cbmJhbGwubW92ZSA9IGZ1bmN0aW9uKCl7XG4gICAgdGhpcy54ID0gdGhpcy54ICsgdGhpcy54U3BlZWQ7XG4gICAgdGhpcy55ID0gdGhpcy55ICsgdGhpcy55U3BlZWQ7IFxufTtcblxuYmFsbC5jaGVja0NhbnZhcyA9IGZ1bmN0aW9uKCl7XG4gICAgaWYgKCh0aGlzLnggPj0gOTkwIHx8IHRoaXMueCA8PSAxMCkgJiYgKHRoaXMueSA+PSAocGFuZWxMZWZ0LnktNTApICYmIHRoaXMueSA8PSAocGFuZWxMZWZ0LnkgKyA1MCkpKSB7XG4gICAgICAgIHRoaXMueFNwZWVkID0gLXRoaXMueFNwZWVkO1xuICAgIH1cbiBcbiAgICBpZiAoKHRoaXMueCA+PSA5OTAgfHwgdGhpcy54IDw9IDEwKSAmJiAodGhpcy55ID49IChwYW5lbFJpZ2h0LnkpICYmIHRoaXMueSA8PSAocGFuZWxSaWdodC55ICsxMDApKSkge1xuICAgICAgICB0aGlzLnhTcGVlZCA9IC10aGlzLnhTcGVlZDtcbiAgICB9XG4gICAgaWYoKHRoaXMueSA8PSAwIHx8IHRoaXMueSA+PSA2MDApICYmICh0aGlzLnggPiAwIHx8IHRoaXMueCA8IDEwMDApKSB7XG4gICAgICAgIHRoaXMueVNwZWVkID0gLXRoaXMueVNwZWVkO1xuICAgIH1cblxuICAgIGlmKHRoaXMueDwgMCAmJiByaWdodFNjb3JlIDwgNSl7XG4gICAgICAgIHJpZ2h0U2NvcmUgKz0gMTtcbiAgICAgICAgdGhpcy54ID0gNTAwO1xuICAgICAgICB0aGlzLnkgPSAzMDA7IFxuICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMueFNwZWVkIDtcbiAgICAgICAgdGhpcy55U3BlZWQgPSB0aGlzLnlTcGVlZCA7ICBcbiAgICB9XG4gICAgaWYodGhpcy54PiAxMDAwICYmIGxlZnRTY29yZSA8IDUpe1xuICAgICAgICBsZWZ0U2NvcmUgKz0gMTtcbiAgICAgICAgdGhpcy54ID0gNTAwO1xuICAgICAgICB0aGlzLnkgPSAzMDA7IFxuICAgICAgICB0aGlzLnhTcGVlZCA9IHRoaXMueFNwZWVkIDtcbiAgICAgICAgdGhpcy55U3BlZWQgPSB0aGlzLnlTcGVlZCA7IFxuICAgIH1cbiAgICBpZihyaWdodFNjb3JlID09PSA1KXtcbiAgICAgICAgYWxlcnQoXCJSaWdodCBQbGF5ZXIgV2luISEhXCIpO1xuICAgICAgICB0aGlzLnggPSA1MDA7XG4gICAgICAgIHRoaXMueSA9IDMwMDsgXG4gICAgICAgIHJpZ2h0U2NvcmUgPSAwO1xuICAgICAgICBsZWZ0U2NvcmUgPSAwOyBcbiAgICAgICAgdGhpcy54U3BlZWQgPSAtMSxcbiAgICAgICAgdGhpcy55U3BlZWQgPSAtMjtcbiAgICB9XG4gICAgaWYobGVmdFNjb3JlID09PSA1KXtcbiAgICAgICAgYWxlcnQoXCJMZWZ0IFBsYXllciBXaW4hISFcIik7XG4gICAgICAgIHRoaXMueCA9IDUwMDtcbiAgICAgICAgdGhpcy55ID0gMzAwOyBcbiAgICAgICAgcmlnaHRTY29yZSA9IDA7XG4gICAgICAgIGxlZnRTY29yZSA9IDA7XG4gICAgICAgIHRoaXMueFNwZWVkID0gLTEsXG4gICAgICAgIHRoaXMueVNwZWVkID0gLTI7XG4gICAgfVxufTtcblxuc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDYwMCk7XG4gICAgbmV0LmRyYXcoKTtcbiAgICBiYWxsLmRyYXcoKTtcbiAgICBwYW5lbExlZnQuZHJhdygpO1xuICAgIHBhbmVsUmlnaHQuZHJhdygpO1xuICAgIGJhbGwubW92ZSgpO1xuICAgIGJhbGwuY2hlY2tDYW52YXMoKTtcbiAgICBjdHguc3Ryb2tlUmVjdCgwLDAsMTAwMCw2MDApO1xufSw1KTtcblxuXG52YXIgcGFuZWxMZWZ0ID0ge1xuICAgIHg6IDAsXG4gICAgeTogMzAwLFxuICAgIHhTemllOiAxMCxcbiAgICB5U2l6ZTogMTAwXG59O1xuXG52YXIgcGFuZWxSaWdodCA9IHtcbiAgICB4OiA5OTAsXG4gICAgeTogMzAwLFxuICAgIHhTemllOiAxMCxcbiAgICB5U2l6ZTogMTAwXG59O1xuXG52YXIgbmV0ID0ge1xuICAgIHg6IDUwMCxcbiAgICB5OiAwLFxuICAgIHhTemllOiAzLFxuICAgIHlTaXplOiA2MDBcbn07XG5cbnBhbmVsTGVmdC5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMueFN6aWUsIHRoaXMueVNpemUpO1xufTtcblxucGFuZWxSaWdodC5kcmF3ID0gZnVuY3Rpb24oKXtcbiAgICBjdHguZmlsbFJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMueFN6aWUsIHRoaXMueVNpemUpO1xufTtcblxubmV0LmRyYXcgPSBmdW5jdGlvbigpe1xuICAgIGN0eC5maWxsUmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy54U3ppZSwgdGhpcy55U2l6ZSk7XG59O1xuXG4kKFwiYm9keVwiKS5rZXlkb3duKGZ1bmN0aW9uKGV2ZW50KXtcbiAgICBjb25zb2xlLmxvZyhldmVudC5rZXlDb2RlKTtcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gODcpXG4gICAge1xuICAgICAgICBwYW5lbExlZnQueSA9IHBhbmVsTGVmdC55LTgwO1xuICAgICAgICBpZihwYW5lbExlZnQueTwwKVxuICAgICAgICBwYW5lbExlZnQueT0wO1xuICAgIH1cbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PSA4MylcbiAgICB7XG4gICAgICAgIHBhbmVsTGVmdC55ID0gcGFuZWxMZWZ0LnkgKzgwO1xuICAgICAgICBpZihwYW5lbExlZnQueSA+IDYwMC1wYW5lbExlZnQueVNpemUpXG4gICAgICAgIHBhbmVsTGVmdC55ID0gNjAwLXBhbmVsTGVmdC55U2l6ZTtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gMzgpXG4gICAge1xuICAgICAgICBwYW5lbFJpZ2h0LnkgPSBwYW5lbFJpZ2h0LnktODA7XG4gICAgICAgIGlmKHBhbmVsUmlnaHQueTwwKVxuICAgICAgICBwYW5lbFJpZ2h0Lnk9MDtcbiAgICB9XG4gICAgaWYgKGV2ZW50LmtleUNvZGUgPT0gNDApXG4gICAge1xuICAgICAgICBwYW5lbFJpZ2h0LnkgPSBwYW5lbFJpZ2h0LnkgKzgwO1xuICAgICAgICBpZihwYW5lbFJpZ2h0LnkgPiA2MDAtcGFuZWxSaWdodC55U2l6ZSlcbiAgICAgICAgcGFuZWxSaWdodC55ID0gNjAwLXBhbmVsUmlnaHQueVNpemU7XG4gICAgfVxufSk7IFxuXG5cblxuXG5cblxuIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFNQSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixRQUF4QixDQUFmO0FBQ0EsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVAsQ0FBa0IsSUFBbEIsQ0FBWjtBQUNBLElBQUlDLFNBQVMsR0FBRyxDQUFoQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBSCxHQUFHLENBQUNJLElBQUosR0FBVyxZQUFYO0FBQ0FKLEdBQUcsQ0FBQ0ssUUFBSixDQUFhLE9BQWIsRUFBc0IsRUFBdEIsRUFBMEIsRUFBMUI7QUFFQSxJQUFJQyxJQUFJLEdBQUc7RUFDUEMsQ0FBQyxFQUFFLEdBREk7RUFFUEMsQ0FBQyxFQUFFLEdBRkk7RUFHUEMsTUFBTSxFQUFFLENBQUMsQ0FIRjtFQUlQQyxNQUFNLEVBQUUsQ0FBQztBQUpGLENBQVg7O0FBT0FKLElBQUksQ0FBQ0ssSUFBTCxHQUFZLFlBQVU7RUFDbEJYLEdBQUcsQ0FBQ1ksU0FBSjtFQUNBWixHQUFHLENBQUNhLEdBQUosQ0FBUSxLQUFLTixDQUFiLEVBQWdCLEtBQUtDLENBQXJCLEVBQXdCLEVBQXhCLEVBQTRCLENBQTVCLEVBQStCTSxJQUFJLENBQUNDLEVBQUwsR0FBUSxDQUF2QztFQUNBZixHQUFHLENBQUNnQixJQUFKO0VBQ0FoQixHQUFHLENBQUNpQixTQUFKO0FBQ0gsQ0FMRDs7QUFPQVgsSUFBSSxDQUFDWSxJQUFMLEdBQVksWUFBVTtFQUNsQixLQUFLWCxDQUFMLEdBQVMsS0FBS0EsQ0FBTCxHQUFTLEtB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\n//# sourceURL=webpack-internal:///./src/scripts/ball.js\n");

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