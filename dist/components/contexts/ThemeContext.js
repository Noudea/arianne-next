"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var ThemeContext = /*#__PURE__*/_react["default"].createContext({
  theme: "light",
  setTheme: function setTheme() {}
});

var _default = ThemeContext;
exports["default"] = _default;