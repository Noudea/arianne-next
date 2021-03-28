"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var __jsx = _react["default"].createElement;

var Avatar = function Avatar(props) {
  var xsmall = {
    width: 25,
    height: 25
  };
  var small = {
    width: 50,
    height: 50
  };
  var medium = {
    width: 100,
    height: 100
  };
  var large = {
    width: 150,
    height: 150
  };
  var xlarge = {
    width: 200,
    height: 200
  };

  var _useState = (0, _react.useState)(medium),
      size = _useState[0],
      setSize = _useState[1];

  var _useState2 = (0, _react.useState)(50),
      borderRadius = _useState2[0],
      setBorderRadius = _useState2[1];

  (0, _react.useEffect)(function () {
    if (props.xsmall) {
      setSize(xsmall);
    }

    if (props.small) {
      setSize(small);
    }

    if (props.medium) {
      setSize(medium);
    }

    if (props.large) {
      setSize(large);
    }

    if (props.xlarge) {
      setSize(xlarge);
    }

    if (props.round) {
      setBorderRadius(50);
    }

    if (props.square) {
      setBorderRadius(10);
    }
  }, []);
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "4118992289",
    dynamic: [size.width, size.height, borderRadius]
  }, ".avatar.__jsx-style-dynamic-selector{width:".concat(size.width, "px;height:").concat(size.height, "px;border-radius:").concat(borderRadius, "%;}")), __jsx("img", {
    src: props.src,
    alt: props.alt,
    className: _style["default"].dynamic([["4118992289", [size.width, size.height, borderRadius]]]) + " " + 'avatar'
  }));
};

var _default = Avatar;
exports["default"] = _default;