"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var OutlineRoundButton = function OutlineRoundButton(props) {
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "3217268813",
    dynamic: [props.color, props.color]
  }, "button.__jsx-style-dynamic-selector{padding:9px 19px;text-align:left;background-color:transparent;border-radius:100px;border:2px ".concat(props.color, " solid;font-weight:600;font-size:17px;color:").concat(props.color, ";margin:6px 0px 30px 0px;cursor:pointer;outline:none;}")), __jsx("button", {
    onClick: props.onClick,
    className: _style["default"].dynamic([["3217268813", [props.color, props.color]]])
  }, props.textContent));
};

var _default = OutlineRoundButton;
exports["default"] = _default;