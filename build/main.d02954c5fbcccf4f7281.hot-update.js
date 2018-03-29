exports.id = "main";
exports.modules = {

/***/ "./start.js":
/*!******************!*\
  !*** ./start.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var http = __webpack_require__(/*! http */ "http");

// require('dotenv').config({ path: 'variables.env' })
mongoose.connect('mongodb://admin:admin@ds227469.mlab.com:27469/node');
mongoose.connection.on("error", function (err) {
    console.log(err);
});

var server = http.createServer(_app__WEBPACK_IMPORTED_MODULE_0__["default"]);
var currentApp = _app__WEBPACK_IMPORTED_MODULE_0__["default"];

server.listen(process.env.PORT || 8080, function () {
    console.log("app running on port " + process.env.PORT + " ");
});

if (true) {
    module.hot.accept(/*! ./app */ "./app.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");
(function () {
        server.removeListener('request', currentApp);
        server.on('request', _app__WEBPACK_IMPORTED_MODULE_0__["default"]);
        currentApp = _app__WEBPACK_IMPORTED_MODULE_0__["default"];
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGFydC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJodHRwIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJjdXJyZW50QXBwIiwibGlzdGVuIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSxXQUFZLG1CQUFBQyxDQUFRLDBCQUFSLENBQWxCO0FBQ0EsSUFBTUMsT0FBTyxtQkFBQUQsQ0FBUSxrQkFBUixDQUFiO0FBQ0E7QUFDQTtBQUNBRCxTQUFTRyxPQUFULENBQWlCLG9EQUFqQjtBQUNBSCxTQUFTSSxVQUFULENBQW9CQyxFQUFwQixDQUF1QixPQUF2QixFQUErQixlQUFLO0FBQ2hDQyxZQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxDQUZEOztBQUtBLElBQU1DLFNBQVNQLEtBQUtRLFlBQUwsQ0FBa0IsNENBQWxCLENBQWY7QUFDQSxJQUFJQyxhQUFhLDRDQUFqQjs7QUFHQUYsT0FBT0csTUFBUCxDQUFjQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBbEMsRUFBd0MsWUFBSTtBQUN4Q1QsWUFBUUMsR0FBUiwwQkFBbUNNLFFBQVFDLEdBQVIsQ0FBWUMsSUFBL0M7QUFDSCxDQUZEOztBQUlBLElBQUcsSUFBSCxFQUFjO0FBQ1ZDLFdBQU9DLEdBQVAsQ0FBV0MsTUFBWCxDQUFrQix1QkFBbEIsRUFBMEI7QUFBQSxhQUFJO0FBQzFCVCxlQUFPVSxjQUFQLENBQXNCLFNBQXRCLEVBQWdDUixVQUFoQztBQUNBRixlQUFPSixFQUFQLENBQVUsU0FBVixFQUFvQiw0Q0FBcEI7QUFDQU0scUJBQWEsNENBQWI7QUFDSCxLQUpEO0FBS0gsQyIsImZpbGUiOiJtYWluLmQwMjk1NGM1ZmJjY2NmNGY3MjgxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBtb25nb29zZSA9ICByZXF1aXJlKFwibW9uZ29vc2VcIilcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKVxuaW1wb3J0IGFwcCBmcm9tICcuL2FwcCdcbi8vIHJlcXVpcmUoJ2RvdGVudicpLmNvbmZpZyh7IHBhdGg6ICd2YXJpYWJsZXMuZW52JyB9KVxubW9uZ29vc2UuY29ubmVjdCgnbW9uZ29kYjovL2FkbWluOmFkbWluQGRzMjI3NDY5Lm1sYWIuY29tOjI3NDY5L25vZGUnKVxubW9uZ29vc2UuY29ubmVjdGlvbi5vbihcImVycm9yXCIsZXJyPT57XG4gICAgY29uc29sZS5sb2coZXJyKVxufSlcblxuXG5jb25zdCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHApXG5sZXQgY3VycmVudEFwcCA9IGFwcFxuXG5cbnNlcnZlci5saXN0ZW4ocHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwLCAoKT0+e1xuICAgIGNvbnNvbGUubG9nKGBhcHAgcnVubmluZyBvbiBwb3J0ICR7cHJvY2Vzcy5lbnYuUE9SVH0gYClcbn0pXG5cbmlmKG1vZHVsZS5ob3Qpe1xuICAgIG1vZHVsZS5ob3QuYWNjZXB0KCcuL2FwcCcsKCk9PntcbiAgICAgICAgc2VydmVyLnJlbW92ZUxpc3RlbmVyKCdyZXF1ZXN0JyxjdXJyZW50QXBwKVxuICAgICAgICBzZXJ2ZXIub24oJ3JlcXVlc3QnLGFwcClcbiAgICAgICAgY3VycmVudEFwcCA9IGFwcFxuICAgIH0pXG59XG4iXSwic291cmNlUm9vdCI6IiJ9