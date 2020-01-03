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

function Login() {
  return _react.default.createElement("div", {
    className: "Login"
  }, _react.default.createElement("div", {
    className: "forms-container"
  }, _react.default.createElement("form", {
    action: ""
  }, _react.default.createElement("input", {
    type: "text",
    name: "email"
  }), _react.default.createElement("input", {
    type: "text",
    name: "password"
  }), _react.default.createElement("span", null, "Sign Up"), _react.default.createElement("button", {
    type: "submit"
  }, "Login"))));
}

const _default = Login;
var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(Login, "Login", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\Login.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\Login.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();