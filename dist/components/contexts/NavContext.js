"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var NavContext = /*#__PURE__*/_react["default"].createContext({
  sideNavOpen: false,
  setSideNavOpen: function setSideNavOpen() {}
});

var _default = NavContext;
exports["default"] = _default;