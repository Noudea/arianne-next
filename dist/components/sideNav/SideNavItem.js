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

var _link = _interopRequireDefault(require("next/link"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var __jsx = _react["default"].createElement;

var SideNavItem = function SideNavItem(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {}, [colors]);
  return __jsx("div", {
    className: _style["default"].dynamic([["826150118", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx(_style["default"], {
    id: "826150118",
    dynamic: [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]
  }, ".navItemContainer.__jsx-style-dynamic-selector{width:".concat(props.width, ";color:").concat(props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";list-style:none;box-sizing:border-box;background-color:transparent;padding:8px 12px;font-size:14px;line-height:1.42857143;display:block;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;-webkit-transition:none;transition:none;padding-left:20px;outline:none;-webkit-text-decoration:none;text-decoration:none;border-radius:6px;}.navItemContainer.__jsx-style-dynamic-selector:hover{background-color:").concat(colors ? colors.background : _ThemeColors["default"].light.background, ";}")), __jsx(_link["default"], {
    href: props.href
  }, __jsx("div", {
    className: _style["default"].dynamic([["826150118", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]]) + " " + 'navItemContainer'
  }, __jsx("a", {
    className: _style["default"].dynamic([["826150118", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, children))));
};

var _default = SideNavItem;
exports["default"] = _default;