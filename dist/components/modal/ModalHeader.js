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

var ModalHeader = function ModalHeader(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "2452408201"
  }, "h2.jsx-2452408201{margin:10px 0px 30px 0px;}"), __jsx("h2", {
    className: "jsx-2452408201"
  }, children));
};

var _default = ModalHeader;
exports["default"] = _default;