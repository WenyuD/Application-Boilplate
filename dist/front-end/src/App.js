"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _root = require("react-hot-loader/root");

var _react = _interopRequireDefault(require("react"));

var _logo = _interopRequireDefault(require("./logo.svg"));

require("./App.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;
  enterModule && enterModule(module);
})();

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

function App() {
  return _react.default.createElement("div", {
    className: "App"
  }, _react.default.createElement("header", {
    className: "App-header"
  }, _react.default.createElement("img", {
    src: _logo.default,
    className: "App-logo",
    alt: "logo"
  }), _react.default.createElement("p", null, "Edit ", _react.default.createElement("code", null, "src/App.js"), " and save to reload."), _react.default.createElement("a", {
    className: "App-link",
    href: "https://reactjs.org",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Learn React")));
}

const _default = (0, _root.hot)(App);

var _default2 = _default;
exports.default = _default2;
;

(function () {
  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;

  if (!reactHotLoader) {
    return;
  }

  reactHotLoader.register(App, "App", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\App.js");
  reactHotLoader.register(_default, "default", "C:\\Users\\Layla_Dai\\Desktop\\Application-Boilplate\\application-one\\front-end\\src\\App.js");
})();

;

(function () {
  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;
  leaveModule && leaveModule(module);
})();