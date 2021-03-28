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

var Tooltip = function Tooltip(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var _useState = (0, _react.useState)('none'),
      display = _useState[0],
      setDisplay = _useState[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {}, [colors]);

  var onMouseEnter = function onMouseEnter() {
    setDisplay('');
  };

  var onMouseLeave = function onMouseLeave() {
    setDisplay('none');
  };

  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "2614656770",
    dynamic: [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]
  }, ".container.__jsx-style-dynamic-selector{position:relative;}.tooltipContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;max-width:250px;position:absolute;left:110%;top:25%;height:20px;background-color:".concat(colors ? colors.inverted : _ThemeColors["default"].dark.inverted, ";white-space:nowrap;overflow-wrap:break-word;padding:5px;border-radius:3px;color:").concat(colors ? colors.main : _ThemeColors["default"].dark.main, ";font-size:12px;z-index:9999;}.tooltiparrow.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-font-smoothing:antialiased;pointer-events:unset;box-sizing:border-box;position:absolute;width:0;height:0;border-color:transparent;border-style:solid;left:-6px;margin-top:-6px;border-width:6px 6px 6px 0;border-right-color:").concat(colors ? colors.inverted : _ThemeColors["default"].dark.inverted, ";top:50%;z-index:9999;}.tool.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.none.__jsx-style-dynamic-selector{display:none;}")), __jsx("div", {
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]]) + " " + 'tool'
  }, __jsx("div", {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]]) + " " + "container"
  }, __jsx("div", {
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]])
  }, children), __jsx("div", {
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]]) + " " + ("tooltipContainer " + display || "")
  }, __jsx("div", {
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]]) + " " + "tooltiparrow"
  }), __jsx("div", {
    className: _style["default"].dynamic([["2614656770", [colors ? colors.inverted : _ThemeColors["default"].dark.inverted, colors ? colors.main : _ThemeColors["default"].dark.main, colors ? colors.inverted : _ThemeColors["default"].dark.inverted]]]) + " " + "tooltip"
  }, props.textContent)))));
};

var _default = Tooltip;
exports["default"] = _default;