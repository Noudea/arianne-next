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

var Button = function Button(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
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

  var _useState = (0, _react.useState)(medium),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = (0, _react.useState)(400),
      fontWeight = _useState2[0],
      setFontWeight = _useState2[1];

  var _useState3 = (0, _react.useState)('none'),
      border = _useState3[0],
      setBorder = _useState3[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {
    if (props.size === 'xs') {
      setProperties(xsmall);
    }

    if (props.size === 'sm') {
      setProperties(small);
    }

    if (props.size === 'md') {
      setProperties(medium);
    }

    if (props.size === 'lg') {
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
    id: "607104426",
    dynamic: [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;height:".concat(properties.height, "px;background-color:").concat(props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, ";border:").concat(border, ";border-radius:6px;padding:").concat(properties.padding, ";font-weight:").concat(fontWeight, ";font-size:").concat(properties.fontSize, "px;line-height:").concat(properties.lineHeight, "px;cursor:pointer;outline:none;color:").concat(props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";overflow:hidden;}.button.__jsx-style-dynamic-selector:hover{-webkit-filter:saturate(150%);filter:saturate(150%);}.contentContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.iconLeft.__jsx-style-dynamic-selector,.iconRight.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;-webkit-filter:").concat(colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, ";filter:").concat(colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, ";}.iconLeft.__jsx-style-dynamic-selector{margin-right:8px;}.iconRight.__jsx-style-dynamic-selector{margin-left:8px;}.customCss.__jsx-style-dynamic-selector{").concat(props.customCss, ";}")), __jsx("div", {
    className: _style["default"].dynamic([["607104426", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]]])
  }, __jsx("div", {
    className: _style["default"].dynamic([["607104426", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]]]) + " " + "container"
  }, __jsx("button", {
    onClick: onClick,
    type: props.submit ? 'submit' : 'button',
    className: _style["default"].dynamic([["607104426", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]]]) + " " + "button customCss"
  }, props.iconLeft ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["607104426", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]]]) + " " + "iconLeft"
  }) : null, children, props.iconRight ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["607104426", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : props.accent ? colors ? colors.accent : _ThemeColors["default"].light.accent : colors ? colors.main : _ThemeColors["default"].light.main, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, props.textColor ? props.textColor : props.color ? props.color : props.accent ? '#FFFFFF' : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth, colors ? colors.invertedFilter : _ThemeColors["default"].light.invertedFilter, props.customCss]]]) + " " + "iconRight"
  }) : null))));
};

var _default = Button;
exports["default"] = _default;