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
    console.log("app running on port 8080");
});

if (true) {
    module.hot.accept(/*! ./app */ "./app.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app */ "./app.js");
(function () {
        server.removeListener('request', currentApp);
        server.on('request', _app__WEBPACK_IMPORTED_MODULE_0__["default"]);
        currentApp = _app__WEBPACK_IMPORTED_MODULE_0__["default"];
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); });
}

/***/ }),

/***/ "dotenv":
false

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zdGFydC5qcyJdLCJuYW1lcyI6WyJtb25nb29zZSIsInJlcXVpcmUiLCJodHRwIiwiY29ubmVjdCIsImNvbm5lY3Rpb24iLCJvbiIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzZXJ2ZXIiLCJjcmVhdGVTZXJ2ZXIiLCJjdXJyZW50QXBwIiwibGlzdGVuIiwicHJvY2VzcyIsImVudiIsIlBPUlQiLCJtb2R1bGUiLCJob3QiLCJhY2NlcHQiLCJyZW1vdmVMaXN0ZW5lciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSxXQUFZLG1CQUFBQyxDQUFRLDBCQUFSLENBQWxCO0FBQ0EsSUFBTUMsT0FBTyxtQkFBQUQsQ0FBUSxrQkFBUixDQUFiO0FBQ0E7QUFDQTtBQUNBRCxTQUFTRyxPQUFULENBQWlCLG9EQUFqQjtBQUNBSCxTQUFTSSxVQUFULENBQW9CQyxFQUFwQixDQUF1QixPQUF2QixFQUErQixlQUFLO0FBQ2hDQyxZQUFRQyxHQUFSLENBQVlDLEdBQVo7QUFDSCxDQUZEOztBQUtBLElBQU1DLFNBQVNQLEtBQUtRLFlBQUwsQ0FBa0IsNENBQWxCLENBQWY7QUFDQSxJQUFJQyxhQUFhLDRDQUFqQjs7QUFHQUYsT0FBT0csTUFBUCxDQUFjQyxRQUFRQyxHQUFSLENBQVlDLElBQVosSUFBb0IsSUFBbEMsRUFBd0MsWUFBSTtBQUN4Q1QsWUFBUUMsR0FBUjtBQUNILENBRkQ7O0FBSUEsSUFBRyxJQUFILEVBQWM7QUFDVlMsV0FBT0MsR0FBUCxDQUFXQyxNQUFYLENBQWtCLHVCQUFsQixFQUEwQjtBQUFBLGFBQUk7QUFDMUJULGVBQU9VLGNBQVAsQ0FBc0IsU0FBdEIsRUFBZ0NSLFVBQWhDO0FBQ0FGLGVBQU9KLEVBQVAsQ0FBVSxTQUFWLEVBQW9CLDRDQUFwQjtBQUNBTSxxQkFBYSw0Q0FBYjtBQUNILEtBSkQ7QUFLSCxDIiwiZmlsZSI6Im1haW4uOTlkNWEyNjg0MGYwMWUxYWY4MjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IG1vbmdvb3NlID0gIHJlcXVpcmUoXCJtb25nb29zZVwiKVxuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJodHRwXCIpXG5pbXBvcnQgYXBwIGZyb20gJy4vYXBwJ1xuLy8gcmVxdWlyZSgnZG90ZW52JykuY29uZmlnKHsgcGF0aDogJ3ZhcmlhYmxlcy5lbnYnIH0pXG5tb25nb29zZS5jb25uZWN0KCdtb25nb2RiOi8vYWRtaW46YWRtaW5AZHMyMjc0NjkubWxhYi5jb206Mjc0Njkvbm9kZScpXG5tb25nb29zZS5jb25uZWN0aW9uLm9uKFwiZXJyb3JcIixlcnI9PntcbiAgICBjb25zb2xlLmxvZyhlcnIpXG59KVxuXG5cbmNvbnN0IHNlcnZlciA9IGh0dHAuY3JlYXRlU2VydmVyKGFwcClcbmxldCBjdXJyZW50QXBwID0gYXBwXG5cblxuc2VydmVyLmxpc3Rlbihwcm9jZXNzLmVudi5QT1JUIHx8IDgwODAsICgpPT57XG4gICAgY29uc29sZS5sb2coYGFwcCBydW5uaW5nIG9uIHBvcnQgODA4MGApXG59KVxuXG5pZihtb2R1bGUuaG90KXtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgnLi9hcHAnLCgpPT57XG4gICAgICAgIHNlcnZlci5yZW1vdmVMaXN0ZW5lcigncmVxdWVzdCcsY3VycmVudEFwcClcbiAgICAgICAgc2VydmVyLm9uKCdyZXF1ZXN0JyxhcHApXG4gICAgICAgIGN1cnJlbnRBcHAgPSBhcHBcbiAgICB9KVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==