exports.id = "main";
exports.modules = {

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var express = __webpack_require__(/*! express */ "express");
var session = __webpack_require__(/*! express-session */ "express-session");
var mongoose = __webpack_require__(/*! mongoose */ "mongoose");
var mongoStore = __webpack_require__(/*! connect-mongo */ "connect-mongo")(session);
var path = __webpack_require__(/*! path */ "path");
var cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
var bodyParser = __webpack_require__(/*! body-parser */ "body-parser");
var passport = __webpack_require__(/*! passport */ "passport");
var promisify = __webpack_require__(/*! es6-promisify */ "es6-promisify");
var flash = __webpack_require__(/*! connect-flash */ "connect-flash");
var expressValidator = __webpack_require__(/*! express-validator */ "express-validator");
// const routes = require('./routes/index')
var helpers = __webpack_require__(/*! ./helpers */ "./helpers.js");
// const errorHandlers = require('./handlers/errorHandlers')
var publicPath = path.join(__dirname, "../client", "build");
console.log(publicPath);
// /home/gulshan/nodejs/client/build
// /home/gulshan/nodejs/shopper/client/build

var app = express();
app.use(bodyParser.json());

if (false) {}

app.get("/api", function (req, res) {
    res.json({ "msg": "node and express" });
});

app.get('*', function (req, res) {
    res.sendFile(path.join(publicPath + "/index.html"));
});

/* harmony default export */ __webpack_exports__["default"] = (app);

/***/ })

};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAuanMiXSwibmFtZXMiOlsiZXhwcmVzcyIsInJlcXVpcmUiLCJzZXNzaW9uIiwibW9uZ29vc2UiLCJtb25nb1N0b3JlIiwicGF0aCIsImNvb2tpZVBhcnNlciIsImJvZHlQYXJzZXIiLCJwYXNzcG9ydCIsInByb21pc2lmeSIsImZsYXNoIiwiZXhwcmVzc1ZhbGlkYXRvciIsImhlbHBlcnMiLCJwdWJsaWNQYXRoIiwiam9pbiIsIl9fZGlybmFtZSIsImNvbnNvbGUiLCJsb2ciLCJhcHAiLCJ1c2UiLCJqc29uIiwiZ2V0IiwicmVxIiwicmVzIiwic2VuZEZpbGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFBQSxJQUFNQSxVQUFVLG1CQUFBQyxDQUFRLHdCQUFSLENBQWhCO0FBQ0EsSUFBTUMsVUFBVSxtQkFBQUQsQ0FBUSx3Q0FBUixDQUFoQjtBQUNBLElBQU1FLFdBQVcsbUJBQUFGLENBQVEsMEJBQVIsQ0FBakI7QUFDQSxJQUFNRyxhQUFhLG1CQUFBSCxDQUFRLG9DQUFSLEVBQXlCQyxPQUF6QixDQUFuQjtBQUNBLElBQU1HLE9BQU8sbUJBQUFKLENBQVEsa0JBQVIsQ0FBYjtBQUNBLElBQU1LLGVBQWUsbUJBQUFMLENBQVEsb0NBQVIsQ0FBckI7QUFDQSxJQUFNTSxhQUFhLG1CQUFBTixDQUFRLGdDQUFSLENBQW5CO0FBQ0EsSUFBTU8sV0FBVyxtQkFBQVAsQ0FBUSwwQkFBUixDQUFqQjtBQUNBLElBQU1RLFlBQVksbUJBQUFSLENBQVEsb0NBQVIsQ0FBbEI7QUFDQSxJQUFNUyxRQUFRLG1CQUFBVCxDQUFRLG9DQUFSLENBQWQ7QUFDQSxJQUFNVSxtQkFBbUIsbUJBQUFWLENBQVEsNENBQVIsQ0FBekI7QUFDQTtBQUNBLElBQU1XLFVBQVUsbUJBQUFYLENBQVEsK0JBQVIsQ0FBaEI7QUFDQTtBQUNBLElBQU1ZLGFBQWFSLEtBQUtTLElBQUwsQ0FBVUMsU0FBVixFQUFvQixXQUFwQixFQUFnQyxPQUFoQyxDQUFuQjtBQUNBQyxRQUFRQyxHQUFSLENBQVlKLFVBQVo7QUFDQTtBQUNBOztBQUVBLElBQU1LLE1BQU1sQixTQUFaO0FBQ0FrQixJQUFJQyxHQUFKLENBQVFaLFdBQVdhLElBQVgsRUFBUjs7QUFFQSxJQUFHLEtBQUgsRUFBdUMsRUFHdEM7O0FBR0RGLElBQUlHLEdBQUosQ0FBUSxNQUFSLEVBQWUsVUFBQ0MsR0FBRCxFQUFLQyxHQUFMLEVBQVc7QUFDdEJBLFFBQUlILElBQUosQ0FBUyxFQUFFLE9BQU0sa0JBQVIsRUFBVDtBQUNILENBRkQ7O0FBSUFGLElBQUlHLEdBQUosQ0FBUSxHQUFSLEVBQVksVUFBQ0MsR0FBRCxFQUFNQyxHQUFOLEVBQWM7QUFDdEJBLFFBQUlDLFFBQUosQ0FBYW5CLEtBQUtTLElBQUwsQ0FBVUQsYUFBYSxhQUF2QixDQUFiO0FBQ0gsQ0FGRDs7QUFLQSwrREFBZUssR0FBZixFIiwiZmlsZSI6Im1haW4uZjEyMTkzOTE0MjBkMjYxM2I3ZGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGV4cHJlc3MgPSByZXF1aXJlKCdleHByZXNzJylcbmNvbnN0IHNlc3Npb24gPSByZXF1aXJlKCdleHByZXNzLXNlc3Npb24nKVxuY29uc3QgbW9uZ29vc2UgPSByZXF1aXJlKCdtb25nb29zZScpXG5jb25zdCBtb25nb1N0b3JlID0gcmVxdWlyZSgnY29ubmVjdC1tb25nbycpKHNlc3Npb24pXG5jb25zdCBwYXRoID0gcmVxdWlyZSgncGF0aCcpXG5jb25zdCBjb29raWVQYXJzZXIgPSByZXF1aXJlKCdjb29raWUtcGFyc2VyJylcbmNvbnN0IGJvZHlQYXJzZXIgPSByZXF1aXJlKCdib2R5LXBhcnNlcicpXG5jb25zdCBwYXNzcG9ydCA9IHJlcXVpcmUoJ3Bhc3Nwb3J0JylcbmNvbnN0IHByb21pc2lmeSA9IHJlcXVpcmUoJ2VzNi1wcm9taXNpZnknKVxuY29uc3QgZmxhc2ggPSByZXF1aXJlKCdjb25uZWN0LWZsYXNoJylcbmNvbnN0IGV4cHJlc3NWYWxpZGF0b3IgPSByZXF1aXJlKCdleHByZXNzLXZhbGlkYXRvcicpXG4vLyBjb25zdCByb3V0ZXMgPSByZXF1aXJlKCcuL3JvdXRlcy9pbmRleCcpXG5jb25zdCBoZWxwZXJzID0gcmVxdWlyZSgnLi9oZWxwZXJzJylcbi8vIGNvbnN0IGVycm9ySGFuZGxlcnMgPSByZXF1aXJlKCcuL2hhbmRsZXJzL2Vycm9ySGFuZGxlcnMnKVxuY29uc3QgcHVibGljUGF0aCA9IHBhdGguam9pbihfX2Rpcm5hbWUsXCIuLi9jbGllbnRcIixcImJ1aWxkXCIpXG5jb25zb2xlLmxvZyhwdWJsaWNQYXRoKVxuLy8gL2hvbWUvZ3Vsc2hhbi9ub2RlanMvY2xpZW50L2J1aWxkXG4vLyAvaG9tZS9ndWxzaGFuL25vZGVqcy9zaG9wcGVyL2NsaWVudC9idWlsZFxuXG5jb25zdCBhcHAgPSBleHByZXNzKClcbmFwcC51c2UoYm9keVBhcnNlci5qc29uKCkpXG5cbmlmKHByb2Nlc3MuZW52Lk5PREVfRU5WPT09XCJwcm9kdWN0aW9uXCIpe1xuICAgIGNvbnNvbGUubG9nKCdOT1cgSU4gUFJPRFVDVElPTicpIFxuICAgIGFwcC51c2UoZXhwcmVzcy5zdGF0aWMocHVibGljUGF0aCkpXG59XG5cblxuYXBwLmdldChcIi9hcGlcIiwocmVxLHJlcyk9PntcbiAgICByZXMuanNvbih7IFwibXNnXCI6XCJub2RlIGFuZCBleHByZXNzXCIgfSlcbn0pXG5cbmFwcC5nZXQoJyonLChyZXEsIHJlcykgPT4ge1xuICAgIHJlcy5zZW5kRmlsZShwYXRoLmpvaW4ocHVibGljUGF0aCArIFwiL2luZGV4Lmh0bWxcIikpXG59KVxuXG5cbmV4cG9ydCBkZWZhdWx0IGFwcCJdLCJzb3VyY2VSb290IjoiIn0=