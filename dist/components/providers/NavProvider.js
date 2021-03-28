"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _NavContext = _interopRequireDefault(require("../contexts/NavContext"));

var __jsx = _react["default"].createElement;

var NavProvider = function NavProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      sideNavOpen = _useState[0],
      setSideNavOpen = _useState[1];

  var value = {
    sideNavOpen: sideNavOpen,
    setSideNavOpen: setSideNavOpen
  };
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "2239707107"
  }, ""), __jsx(_NavContext["default"].Provider, {
    value: value
  }, children));
};

var _default = NavProvider;
exports["default"] = _default;