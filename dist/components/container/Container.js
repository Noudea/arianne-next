"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var __jsx = _react["default"].createElement;

var Container = function Container(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return __jsx("div", {
    className: _style["default"].dynamic([["3139691289", [props.width ? props.width : '100%', props.backgroundColor ? props.backgroundColor : 'transparent', props.margin ? props.margin : '0px', props.padding ? props.padding : '0px']]]) + " " + 'container'
  }, __jsx(_style["default"], {
    id: "3139691289",
    dynamic: [props.width ? props.width : '100%', props.backgroundColor ? props.backgroundColor : 'transparent', props.margin ? props.margin : '0px', props.padding ? props.padding : '0px']
  }, ".container.__jsx-style-dynamic-selector{width :".concat(props.width ? props.width : '100%', ";background-color :").concat(props.backgroundColor ? props.backgroundColor : 'transparent', ";margin :").concat(props.margin ? props.margin : '0px', ";padding :").concat(props.padding ? props.padding : '0px', ";}")), children);
};

var _default = Container;
exports["default"] = _default;