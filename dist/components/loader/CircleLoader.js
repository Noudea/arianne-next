"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var __jsx = _react["default"].createElement;

var CircleLoader = function CircleLoader(props) {
  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  var xsmall = {
    width: 16,
    height: 16
  };
  var small = {
    width: 24,
    height: 24
  };
  var medium = {
    width: 40,
    height: 40
  };
  var large = {
    width: 64,
    height: 64
  };
  var xlarge = {
    width: 96,
    height: 96
  };

  var _useState = (0, _react.useState)(medium),
      size = _useState[0],
      setSize = _useState[1];

  var _useState2 = (0, _react.useState)('1s'),
      speed = _useState2[0],
      setSpeed = _useState2[1];

  var _useState3 = (0, _react.useState)(1),
      strokeWidth = _useState3[0],
      setStrokeWidth = _useState3[1];

  (0, _react.useEffect)(function () {
    if (props.size === 'xs') {
      setSize(xsmall);
    }

    if (props.size === 'sm') {
      setSize(small);
    }

    if (props.size === 'md') {
      setSize(medium);
    }

    if (props.size === 'lg') {
      setSize(large);
    }

    if (props.size === 'xl') {
      setSize(xlarge);
    }

    if (props.speed === 'slow') {
      setSpeed('2s');
    }

    if (props.speed === 'normal') {
      setSpeed('1s');
    }

    if (props.speed === 'fast') {
      setSpeed('0.5s');
    }

    if (props.bold) {
      setStrokeWidth(2);
    }

    if (props.thin) {
      setStrokeWidth(0.5);
    }
  }, [colors]);
  return __jsx("svg", {
    width: size.width,
    height: size.height,
    stroke: props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast,
    viewBox: "0 0 38 38"
  }, __jsx("g", {
    transform: "translate(1 1)",
    strokeWidth: strokeWidth,
    fill: "none",
    fillRule: "evenodd"
  }, __jsx("circle", {
    strokeOpacity: 0.3,
    cx: 18,
    cy: 18,
    r: 18
  }), __jsx("path", {
    d: "M36 18c0-9.94-8.06-18-18-18"
  }, __jsx("animateTransform", {
    attributeName: "transform",
    type: "rotate",
    from: "0 18 18",
    to: "360 18 18",
    dur: speed,
    repeatCount: "indefinite"
  }))));
};

var _default = CircleLoader;
exports["default"] = _default;