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

var Flex = function Flex(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return __jsx("div", {
    className: _style["default"].dynamic([["955878352", [props.width ? props.width : '100%', props.height ? props.height : '100%', props.flexDirection ? props.flexDirection : 'row', props.justifyContent, props.alignItems]]]) + " " + 'flexContainer'
  }, __jsx(_style["default"], {
    id: "955878352",
    dynamic: [props.width ? props.width : '100%', props.height ? props.height : '100%', props.flexDirection ? props.flexDirection : 'row', props.justifyContent, props.alignItems]
  }, ".flexContainer.__jsx-style-dynamic-selector{width :".concat(props.width ? props.width : '100%', ";height :").concat(props.height ? props.height : '100%', ";display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:").concat(props.flexDirection ? props.flexDirection : 'row', ";-ms-flex-direction:").concat(props.flexDirection ? props.flexDirection : 'row', ";flex-direction:").concat(props.flexDirection ? props.flexDirection : 'row', ";-webkit-box-pack:").concat(props.justifyContent, ";-webkit-justify-content:").concat(props.justifyContent, ";-ms-flex-pack:").concat(props.justifyContent, ";justify-content:").concat(props.justifyContent, ";-webkit-align-items:").concat(props.alignItems, ";-webkit-box-align:").concat(props.alignItems, ";-ms-flex-align:").concat(props.alignItems, ";align-items:").concat(props.alignItems, ";}")), children);
};

var _default = Flex;
exports["default"] = _default;