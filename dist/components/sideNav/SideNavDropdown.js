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

var SideNavDropdown = function SideNavDropdown(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  var _useState = (0, _react.useState)(false),
      isOpen = _useState[0],
      setIsOpen = _useState[1];

  (0, _react.useEffect)(function () {}, [colors]);

  var onClick = function onClick() {
    if (isOpen) {
      setIsOpen(false);
    }

    if (!isOpen) {
      setIsOpen(true);
    }
  };

  return __jsx("div", {
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx(_style["default"], {
    id: "3059455013",
    dynamic: [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]
  }, ".navDropDownContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:".concat(props.width, ";color:").concat(props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";list-style:none;box-sizing:border-box;background-color:transparent;padding:8px 12px;font-size:14px;line-height:1.42857143;cursor:pointer;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-weight:400;-webkit-transition:none;transition:none;padding-left:20px;outline:none;-webkit-text-decoration:none;text-decoration:none;border-radius:6px;}.children.__jsx-style-dynamic-selector{padding:0px 10px;}.none.__jsx-style-dynamic-selector{display:none;}.navDropDownContainer.__jsx-style-dynamic-selector:hover{background-color:").concat(colors ? colors.background : _ThemeColors["default"].light.background, ";}svg.__jsx-style-dynamic-selector{width:18px;}")), __jsx("div", {
    onClick: onClick,
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]]) + " " + "navDropDownContainer"
  }, __jsx("div", {
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, props.textContent), isOpen ? __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast,
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("g", {
    "data-name": "chevron-down",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    opacity: "0",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }), __jsx("path", {
    d: "M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  })))) : __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast,
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("g", {
    "data-name": "chevron-right",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    transform: "rotate(-90 12 12)",
    opacity: "0",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }), __jsx("path", {
    d: "M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z",
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]])
  }))))), isOpen ? __jsx("div", {
    className: _style["default"].dynamic([["3059455013", [props.width, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.background : _ThemeColors["default"].light.background]]]) + " " + "children"
  }, children) : null);
};

var _default = SideNavDropdown;
exports["default"] = _default;