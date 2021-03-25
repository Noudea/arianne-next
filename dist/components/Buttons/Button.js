"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _gsap = _interopRequireDefault(require("gsap"));

var __jsx = _react["default"].createElement;

var Button = function Button(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  var _useState = (0, _react.useState)(false),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = (0, _react.useState)(400),
      fontWeight = _useState2[0],
      setFontWeight = _useState2[1];

  var _useState3 = (0, _react.useState)("#f7f7fa"),
      backgroundColor = _useState3[0],
      setBackgroundColor = _useState3[1];

  var _useState4 = (0, _react.useState)("#575757"),
      color = _useState4[0],
      setColor = _useState4[1];

  var _useState5 = (0, _react.useState)('none'),
      border = _useState5[0],
      setBorder = _useState5[1];

  var _useState6 = (0, _react.useState)('invert(32%) sepia(0%) saturate(48%) hue-rotate(187deg) brightness(102%) contrast(92%)'),
      iconColor = _useState6[0],
      setIconColor = _useState6[1];

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
      setBackgroundColor('transparent');
      setBorder('solid 1px #575757');
      setColor('#575757');

      if (props.color) {
        setBorder('solid 1px ' + props.color);
        setColor(props.color);
      }
    }

    if (props.color && !props.outlined) {
      setBackgroundColor(props.color);
    }

    if (props.textColor) {
      setColor(props.textColor);
    }

    if (props.theme) {
      if (props.theme === 'light') {
        setBackgroundColor("#f7f7fa");
        setColor('#575757');
        setIconColor('invert(32%) sepia(0%) saturate(48%) hue-rotate(187deg) brightness(102%) contrast(92%)');

        if (props.outlined) {
          setBackgroundColor('transparent');
          setBorder('solid 1px #575757');
        }
      }

      if (props.theme === 'dark') {
        setBackgroundColor("#292d33");
        setColor('#e9ebf0');
        setIconColor('invert(91%) sepia(3%) saturate(707%) hue-rotate(196deg) brightness(107%) contrast(88%)');

        if (props.outlined) {
          setBackgroundColor('transparent');
          setBorder('solid 1px #e9ebf0');
          setColor('#e9ebf0');
        }
      }
    }
  }, []);
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
    console.log(event.target);
    var x = event.pageX - event.target.offsetLeft;
    var y = event.pageY - event.target.offsetTop;
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
    console.log(event.target);
    console.log(x, y);
    rippleElement.classList.add("ripple");
    rippleElement.style.position = 'absolute';
    rippleElement.style.left = x + 'px';
    rippleElement.style.top = y + 'px';
    rippleElement.style.background = '#000';

    if (props.theme === 'dark') {
      rippleElement.style.background = '#FFF';
    }

    if (props.outlined && !props.theme) {
      rippleElement.style.background = color;
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
    id: "1325314987",
    dynamic: [properties.height, backgroundColor, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, color, properties.iconWidth, iconColor]
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position :relative;height:".concat(properties.height, "px;background-color:").concat(backgroundColor, ";border:").concat(border, ";border-radius:6px;padding:").concat(properties.padding, ";font-weight:").concat(fontWeight, ";font-size:").concat(properties.fontSize, "px;line-height:").concat(properties.lineHeight, "px;cursor:pointer;outline:none;color:").concat(color, ";overflow:hidden;}.button.__jsx-style-dynamic-selector:hover{-webkit-filter:saturate(150%);filter:saturate(150%);}.contentContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.iconLeft.__jsx-style-dynamic-selector,.iconRight.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;-webkit-filter :").concat(iconColor, ";filter :").concat(iconColor, ";}.iconLeft.__jsx-style-dynamic-selector{margin-right:8px;}.iconRight.__jsx-style-dynamic-selector{margin-left:8px;}")), __jsx("div", {
    className: _style["default"].dynamic([["1325314987", [properties.height, backgroundColor, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, color, properties.iconWidth, iconColor]]]) + " " + 'container'
  }, __jsx("button", {
    onClick: onClick,
    type: props.submit ? 'submit' : 'button',
    className: _style["default"].dynamic([["1325314987", [properties.height, backgroundColor, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, color, properties.iconWidth, iconColor]]]) + " " + "button"
  }, props.iconLeft ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["1325314987", [properties.height, backgroundColor, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, color, properties.iconWidth, iconColor]]]) + " " + 'iconLeft'
  }) : null, children, props.iconRight ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["1325314987", [properties.height, backgroundColor, border, properties.padding, fontWeight, properties.fontSize, properties.lineHeight, color, properties.iconWidth, iconColor]]]) + " " + 'iconRight'
  }) : null)));
};

var _default = Button;
exports["default"] = _default;