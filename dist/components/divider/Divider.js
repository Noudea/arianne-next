"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var __jsx = _react["default"].createElement;

var Divider = function Divider(props) {
  var _useState = (0, _react.useState)('100%'),
      width = _useState[0],
      setWidth = _useState[1];

  var _useState2 = (0, _react.useState)(24),
      margin = _useState2[0],
      setMargin = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      strokeWidth = _useState3[0],
      setStrokeWidth = _useState3[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {
    if (props.width) {
      setWidth(props.width);
    }

    if (props.margin) {
      setMargin(props.margin);
    }

    if (props.thin) {
      setStrokeWidth(0.5);
    }

    if (props.bold) {
      setStrokeWidth(2);
    }

    if (props.thickness) {
      setStrokeWidth(props.thickness);
    }
  }, [colors]);
  return __jsx("div", {
    className: _style["default"].dynamic([["1810261856", [margin, width, strokeWidth, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]]) + " " + 'divider'
  }, __jsx(_style["default"], {
    id: "1810261856",
    dynamic: [margin, width, strokeWidth, colors ? colors.contrast : _ThemeColors["default"].light.contrast]
  }, ".divider.__jsx-style-dynamic-selector{margin:".concat(margin, "px auto;width:").concat(width, ";height:").concat(strokeWidth, "px;background-color:").concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";}")));
};

var _default = Divider;
exports["default"] = _default;