"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireDefault(require("react"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _Container = _interopRequireDefault(require("../container/Container"));

var __jsx = _react["default"].createElement;

var ModalBody = function ModalBody(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "721723105"
  }, "div.jsx-721723105{overflow:scroll;max-height:600px;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}div.jsx-721723105::-webkit-scrollbar{width:0px;height:0px;display:none;width:0px;background:transparent;}"), __jsx(_Container["default"], {
    margin: "0px 0px 60px 0px"
  }, __jsx("div", {
    className: "jsx-721723105"
  }, children)));
};

var _default = ModalBody;
exports["default"] = _default;