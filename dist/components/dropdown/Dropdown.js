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

var Dropdown = function Dropdown(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  var _useState = (0, _react.useState)(false),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = (0, _react.useState)(400),
      fontWeight = _useState2[0],
      setFontWeight = _useState2[1];

  var _useState3 = (0, _react.useState)('none'),
      border = _useState3[0],
      setBorder = _useState3[1];

  var _useState4 = (0, _react.useState)(false),
      isOpen = _useState4[0],
      setIsOpen = _useState4[1];

  var _useState5 = (0, _react.useState)('0 0 10px rgb(0 0 0 / 6%), 0 4px 4px rgb(0 0 0 / 12%)'),
      boxShadow = _useState5[0],
      setBoxShadow = _useState5[1];

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

    if (props.bold) {
      setFontWeight(600);
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
  }, [colors]);
  var xsmall = {
    height: 24,
    padding: '2px 8px',
    fontSize: 12,
    lineHeight: 20,
    iconWidth: 15
  };
  var small = {
    height: 32,
    padding: '6px 8px',
    fontSize: 14,
    lineHeight: 20,
    iconWidth: 18
  };
  var medium = {
    height: 40,
    padding: '8px 12px',
    fontSize: 14,
    lineHeight: 20,
    iconWidth: 20
  };
  var large = {
    height: 48,
    padding: '13px 16px',
    fontSize: 16,
    lineHeight: 22,
    iconWidth: 20
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

    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }

    if (props.onClick) {
      props.onClick();
    }
  };

  var onMouseEnter = function onMouseEnter() {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  var onMouseLeave = function onMouseLeave() {
    if (isOpen) {
      setIsOpen(false);
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
    id: "177114188",
    dynamic: [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]
  }, "button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:".concat(properties.height, "px;background-color:").concat(props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, ";border:").concat(border, ";border-radius:6px;padding:").concat(properties.padding, ";font-weight:").concat(fontWeight, ";font-size:").concat(properties.fontSize, "px;line-height:").concat(properties.lineHeight, "px;cursor:pointer;outline:none;color:").concat(props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";overflow:hidden;}button.__jsx-style-dynamic-selector:hover{-webkit-filter:saturate(150%);filter:saturate(150%);}.contentContainer.__jsx-style-dynamic-selector{position:absolute;box-shadow:").concat(boxShadow, ";border-radius:6px;z-index:1;margin:0;list-style:none;font-size:14px;text-align:left;background-color:#fff;padding:6px 6px;}svg.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;margin-left:8px;}")), __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, props.hover ? __jsx("div", {
    onMouseEnter: onMouseEnter,
    onMouseLeave: onMouseLeave,
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "container"
  }, __jsx("button", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, props.textContent, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "chevron-down",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("path", {
    fill: props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast,
    d: "M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }))))), __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "contentWrapper"
  }, isOpen ? __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "contentContainer"
  }, children) : null)) : __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "container"
  }, __jsx("button", {
    onClick: onClick,
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, props.textContent, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "chevron-down",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }, __jsx("path", {
    fill: props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast,
    d: "M12 15.5a1 1 0 0 1-.71-.29l-4-4a1 1 0 1 1 1.42-1.42L12 13.1l3.3-3.18a1 1 0 1 1 1.38 1.44l-4 3.86a1 1 0 0 1-.68.28z",
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]])
  }))))), __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "contentWrapper"
  }, isOpen ? __jsx("div", {
    className: _style["default"].dynamic([["177114188", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, boxShadow, properties.iconWidth]]]) + " " + "contentContainer"
  }, children) : null))));
};

var _default = Dropdown;
exports["default"] = _default;