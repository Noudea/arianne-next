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

var SideNavContainer = function SideNavContainer(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  return __jsx("nav", {
    className: "jsx-1948500713" + " " + "navigationContainer"
  }, __jsx(_style["default"], {
    id: "1948500713"
  }, ".navigationContainer.jsx-1948500713{height:100%;overflow:scroll;-webkit-scrollbar-width:none;-moz-scrollbar-width:none;-ms-scrollbar-width:none;scrollbar-width:none;}.navigationContainer.jsx-1948500713::-webkit-scrollbar{width:0px;height:0px;display:none;width:0px;background:transparent;}"), children);
};

var _default = SideNavContainer;
exports["default"] = _default;