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

var NavBar = function NavBar(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var _useState = (0, _react.useState)(false),
      alignement = _useState[0],
      setAlignement = _useState[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {
    if (props.alignement === 'vertical') {
      setAlignement('sideNavBarContainerVertical');
    }

    if (props.alignement === 'horizontal') {
      setAlignement('sideNavBarContainerHorizontal');
    }
  }, [colors]);
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "3196314821",
    dynamic: [props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background, props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background]
  }, ".sideNavBarContainerVertical.__jsx-style-dynamic-selector{background-color:".concat(props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background, ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;width:64px;position:fixed;left:0px;top:0px;z-index:99999;}.sideNavBarContainerHorizontal.__jsx-style-dynamic-selector{background-color:").concat(props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background, ";width:100%;height:64px;position:fixed;left:0px;top:0px;z-index:99999;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}")), __jsx("div", {
    className: _style["default"].dynamic([["3196314821", [props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background, props.color ? props.color : colors ? colors.background : _ThemeColors["default"].light.background]]]) + " " + (alignement || "")
  }, children));
};

var _default = NavBar;
exports["default"] = _default;