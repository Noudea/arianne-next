"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AudioLoader = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var AudioLoader = function AudioLoader(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return __jsx("svg", (0, _extends2["default"])({
    width: 55,
    height: 80,
    fill: "#000",
    viewBox: "0 0 55 80",
    className: "svg-loaders-svg".concat(className ? " ".concat(className) : '')
  }, props), __jsx("g", {
    transform: "matrix(1 0 0 -1 0 80)"
  }, __jsx("rect", {
    width: 10,
    height: 20,
    rx: 3
  }, __jsx("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "4.3s",
    values: "20;45;57;80;64;32;66;45;64;23;66;13;64;56;34;34;2;23;76;79;20",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("rect", {
    x: 15,
    width: 10,
    height: 80,
    rx: 3
  }, __jsx("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "80;55;33;5;75;23;73;33;12;14;60;80",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("rect", {
    x: 30,
    width: 10,
    height: 50,
    rx: 3
  }, __jsx("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "1.4s",
    values: "50;34;78;23;56;23;34;76;80;54;21;50",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("rect", {
    x: 45,
    width: 10,
    height: 30,
    rx: 3
  }, __jsx("animate", {
    attributeName: "height",
    begin: "0s",
    dur: "2s",
    values: "30;45;13;80;56;72;45;76;34;23;67;30",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.AudioLoader = AudioLoader;
AudioLoader.defaultProps = {
  className: undefined
};