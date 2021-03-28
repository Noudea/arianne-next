"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SpinningCircles = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var __jsx = _react["default"].createElement;

var SpinningCircles = function SpinningCircles(_ref) {
  var className = _ref.className,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["className"]);
  return __jsx("svg", (0, _extends2["default"])({
    width: 58,
    height: 58,
    viewBox: "0 0 58 58",
    className: "svg-loaders-svg".concat(className ? " ".concat(className) : '')
  }, props), __jsx("g", {
    transform: "translate(2 1)",
    stroke: "#FFF",
    strokeWidth: 1.5,
    fill: "#000",
    fillRule: "evenodd"
  }, __jsx("circle", {
    cx: 42.601,
    cy: 11.462,
    r: 5
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "1;0;0;0;0;0;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 49.063,
    cy: 27.063,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;1;0;0;0;0;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 42.601,
    cy: 42.663,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;1;0;0;0;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 27,
    cy: 49.125,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;0;1;0;0;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 11.399,
    cy: 42.663,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;0;0;1;0;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 4.938,
    cy: 27.063,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;0;0;0;1;0;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 11.399,
    cy: 11.462,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;0;0;0;0;1;0",
    calcMode: "linear",
    repeatCount: "indefinite"
  })), __jsx("circle", {
    cx: 27,
    cy: 5,
    r: 5,
    fillOpacity: 0
  }, __jsx("animate", {
    attributeName: "fill-opacity",
    begin: "0s",
    dur: "1.3s",
    values: "0;0;0;0;0;0;0;1",
    calcMode: "linear",
    repeatCount: "indefinite"
  }))));
};

exports.SpinningCircles = SpinningCircles;
SpinningCircles.defaultProps = {
  className: undefined
};