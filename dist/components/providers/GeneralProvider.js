"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _NavProvider = _interopRequireDefault(require("./NavProvider"));

var _ArianneThemeProvider = _interopRequireDefault(require("./ArianneThemeProvider"));

var __jsx = _react["default"].createElement;

var GeneralProvider = function GeneralProvider(_ref) {
  var children = _ref.children;
  return __jsx(_NavProvider["default"], null, __jsx(_ArianneThemeProvider["default"], null, children));
};

var _default = GeneralProvider;
exports["default"] = _default;