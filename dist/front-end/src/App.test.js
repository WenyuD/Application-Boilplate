"use strict";

var _react = _interopRequireDefault(require("react"));

var _react2 = require("@testing-library/react");

var _App = _interopRequireDefault(require("./App"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default.signature : function (a) {
  return a;
};

test('renders learn react link', () => {
  const {
    getByText
  } = (0, _react2.render)(_react.default.createElement(_App.default, null));
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});