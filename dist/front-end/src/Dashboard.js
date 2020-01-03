"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function Dashboard() {
  return _react.default.createElement("div", {
    className: "Dashboard"
  }, _react.default.createElement("button", {
    type: "submit"
  }, "Log Out"));
}

const _default = Dashboard;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Dashboard, "Dashboard", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\Dashboard.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\Dashboard.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();