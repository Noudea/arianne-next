"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _gsap = _interopRequireDefault(require("gsap"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var __jsx = _react["default"].createElement;

var IconButton = function IconButton(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var _useState = (0, _react.useState)(false),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = (0, _react.useState)('none'),
      border = _useState2[0],
      setBorder = _useState2[1];

  var _useState3 = (0, _react.useState)('6px'),
      borderRadius = _useState3[0],
      setBorderRadius = _useState3[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {
    if (props.xsmall) {
      setProperties(xsmall);
    }

    if (props.small) {
      setProperties(small);
    }

    if (props.medium) {
      setProperties(medium);
    }

    if (props.large) {
      setProperties(large);
    }

    if (props.outlined) {
      if (colors) {
        setBorder('solid 1px ' + colors.contrast);
      }

      if (!colors) {
        setBorder('solid 1px ' + _ThemeColors["default"].light.contrast);
      }

      if (props.color) {
        setBorder('solid 1px ' + props.color);
      }
    }

    if (props.transparent) {
      setBorder('none');
    }

    if (props.rounded) {
      setBorderRadius('50%');
    }
  }, [colors]);
  var xsmall = {
    height: 24,
    padding: '4px 6px'
  };
  var small = {
    height: 32,
    padding: '6px 8px'
  };
  var medium = {
    height: 40,
    padding: '8px 10px'
  };
  var large = {
    height: 48,
    padding: '10px 12px'
  };

  var onClick = function onClick(event) {
    var rect = event.target.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    createRipple(x, y, event);

    _gsap["default"].to('.ripple', {
      duration: 1,
      width: 500,
      height: 500,
      opacity: 0
    });

    if (props.onClick) {
      props.onClick();
    }
  };

  var createRipple = function createRipple(x, y, event) {
    var rippleElement = document.createElement('span');
    rippleElement.classList.add('ripple');
    rippleElement.style.position = 'absolute';
    rippleElement.style.left = x + 'px';
    rippleElement.style.top = y + 'px';

    if (colors) {
      rippleElement.style.background = colors.inverted;
    }

    if (!colors) {
      rippleElement.style.background = _ThemeColors["default"].light.inverted;
    }

    if (props.outlined) {
      rippleElement.style.background = props.color;
    }

    rippleElement.style.opacity = 0.5;
    rippleElement.style.borderRadius = '50%';
    rippleElement.style.transform = 'translate(-50%, -50%)';
    rippleElement.style.width = '0px';
    rippleElement.style.height = '0px';
    event.target.appendChild(rippleElement);
    setTimeout(function () {
      rippleElement.remove();
    }, 400);
  };

  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "3339134401",
    dynamic: [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter]
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position :relative;width :".concat(properties.height, "px;height:").concat(properties.height, "px;background-color:").concat(props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, ";border:").concat(border, ";border-radius:").concat(borderRadius, ";padding:").concat(properties.padding, ";cursor:pointer;outline:none;color:").concat(props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";overflow:hidden;}.button.__jsx-style-dynamic-selector:hover{-webkit-filter:saturate(150%);filter:saturate(150%);}.contentContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.icon.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;-webkit-filter :").concat(colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, ";filter :").concat(colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, ";}img.__jsx-style-dynamic-selector{pointer-events:none;cursor:default;}")), __jsx("div", {
    className: _style["default"].dynamic([["3339134401", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter]]])
  }, __jsx("div", {
    className: _style["default"].dynamic([["3339134401", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter]]]) + " " + 'container'
  }, __jsx("button", {
    onClick: onClick,
    className: _style["default"].dynamic([["3339134401", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter]]]) + " " + 'button'
  }, props.iconSrc ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["3339134401", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter]]]) + " " + 'icon'
  }) : null, props.svg ? props.svg : null))));
};

var _default = IconButton;
exports["default"] = _default;