"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var __jsx = _react["default"].createElement;

var SideNavHeader = function SideNavHeader(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {}, [colors]);
  return __jsx("div", {
    className: _style["default"].dynamic([["1211913484", [colors ? colors.contrast : _ThemeColors["default"].light.contrast]]]) + " " + 'SideNavHeaderContainer'
  }, __jsx(_style["default"], {
    id: "1211913484",
    dynamic: [colors ? colors.contrast : _ThemeColors["default"].light.contrast]
  }, ".SideNavHeaderContainer.__jsx-style-dynamic-selector{text-align:center;}p.__jsx-style-dynamic-selector{color:".concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";font-size:36px;font-weight:600;}")), __jsx("p", {
    className: _style["default"].dynamic([["1211913484", [colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, children));
};

var _default = SideNavHeader;
exports["default"] = _default;