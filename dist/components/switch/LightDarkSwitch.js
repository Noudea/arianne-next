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

var LightDarkSwitch = function LightDarkSwitch(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
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

  var _useState = (0, _react.useState)(medium),
      properties = _useState[0],
      setProperties = _useState[1];

  var _useState2 = (0, _react.useState)('none'),
      border = _useState2[0],
      setBorder = _useState2[1];

  var _useState3 = (0, _react.useState)('6px'),
      borderRadius = _useState3[0],
      setBorderRadius = _useState3[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  var _useContext = (0, _react.useContext)(_ThemeContext["default"]),
      theme = _useContext.theme,
      setTheme = _useContext.setTheme;

  var changetheme = function changetheme() {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

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

    changetheme();
  };

  var createRipple = function createRipple(x, y, event) {
    var rippleElement = document.createElement('span');
    rippleElement.classList.add('ripple');
    rippleElement.style.position = 'absolute';
    rippleElement.style.left = x + 'px';
    rippleElement.style.top = y + 'px';

    if (colors) {
      rippleElement.style.background = colors.main;
    }

    if (!colors) {
      rippleElement.style.background = _ThemeColors["default"].light.main;
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
    id: "2176176352",
    dynamic: [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:".concat(properties.height, "px;height:").concat(properties.height, "px;background-color:").concat(props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, ";border:").concat(border, ";border-radius:").concat(borderRadius, ";padding:").concat(properties.padding, ";cursor:pointer;outline:none;color:").concat(props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";overflow:hidden;}.button.__jsx-style-dynamic-selector:hover{-webkit-filter:saturate(150%);filter:saturate(150%);}.contentContainer.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}svg.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;pointer-events:none;cursor:default;}")), __jsx("div", {
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("div", {
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]]) + " " + "container"
  }, __jsx("button", {
    onClick: onClick,
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]]) + " " + "button"
  }, theme === 'light' ? __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: props.color ? props.color : colors.inverted,
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "moon",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    opacity: "0",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M12.3 22h-.1a10.31 10.31 0 0 1-7.34-3.15 10.46 10.46 0 0 1-.26-14 10.13 10.13 0 0 1 4-2.74 1 1 0 0 1 1.06.22 1 1 0 0 1 .24 1 8.4 8.4 0 0 0 1.94 8.81 8.47 8.47 0 0 0 8.83 1.94 1 1 0 0 1 1.27 1.29A10.16 10.16 0 0 1 19.6 19a10.28 10.28 0 0 1-7.3 3z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  })))) : null, theme === 'dark' ? __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    fill: props.color ? props.color : colors.inverted,
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("g", {
    "data-name": "sun",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    transform: "rotate(180 12 12)",
    opacity: "0",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M12 6a1 1 0 0 0 1-1V3a1 1 0 0 0-2 0v2a1 1 0 0 0 1 1z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M21 11h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M6 12a1 1 0 0 0-1-1H3a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M6.22 5a1 1 0 0 0-1.39 1.47l1.44 1.39a1 1 0 0 0 .73.28 1 1 0 0 0 .72-.31 1 1 0 0 0 0-1.41z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M17 8.14a1 1 0 0 0 .69-.28l1.44-1.39A1 1 0 0 0 17.78 5l-1.44 1.42a1 1 0 0 0 0 1.41 1 1 0 0 0 .66.31z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M12 18a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M17.73 16.14a1 1 0 0 0-1.39 1.44L17.78 19a1 1 0 0 0 .69.28 1 1 0 0 0 .72-.3 1 1 0 0 0 0-1.42z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M6.27 16.14l-1.44 1.39a1 1 0 0 0 0 1.42 1 1 0 0 0 .72.3 1 1 0 0 0 .67-.25l1.44-1.39a1 1 0 0 0-1.39-1.44z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  }), __jsx("path", {
    d: "M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4z",
    className: _style["default"].dynamic([["2176176352", [properties.height, properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, border, borderRadius, properties.padding, props.color ? props.color : colors ? colors.contrast : _ThemeColors["default"].light.contrast, properties.iconWidth]]])
  })))) : null))));
};

var _default = LightDarkSwitch;
exports["default"] = _default;