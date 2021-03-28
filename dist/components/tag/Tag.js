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

var __jsx = _react["default"].createElement;

var Tag = function Tag(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);
  var colors = ThemeColors[useContext(ThemeContext).theme];
  var small = {
    height: 18,
    fontSize: 12,
    iconWidth: 12
  };
  var medium = {
    height: 24,
    fontSize: 12,
    iconWidth: 16
  };
  var large = {
    height: 30,
    fontSize: 14,
    iconWidth: 18
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

  var _useState4 = (0, _react.useState)('flex'),
      display = _useState4[0],
      setDisplay = _useState4[1];

  (0, _react.useEffect)(function () {
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
        setBorder('solid 1px ' + ThemeColors.light.contrast);
      }

      if (props.color) {
        setBorder('solid 1px ' + props.color);
      }
    }

    if (props.transparent) {
      setBorder('none');
    }
  }, [props.theme]);

  var close = function close() {
    setDisplay('none');

    if (props.onClick) {
      props.onClick();
    }
  };

  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "3835364519",
    dynamic: [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]
  }, ".container.__jsx-style-dynamic-selector{height:".concat(properties.height, "px;background-color:").concat(props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, ";color:").concat(props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, ";font-weight:").concat(fontWeight, ";font-size:").concat(properties.fontSize, "px;border:").concat(border, ";padding:0px 8px;border-radius:6px;display:").concat(display, ";-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}svg.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;cursor:pointer;}.iconLeft.__jsx-style-dynamic-selector,.iconRight.__jsx-style-dynamic-selector{width:").concat(properties.iconWidth, "px;-webkit-filter :").concat(colors ? colors.invertedFilter : ThemeColors.light.invertedFilter, ";filter :").concat(colors ? colors.invertedFilter : ThemeColors.light.invertedFilter, ";}.iconLeft.__jsx-style-dynamic-selector{margin-right:8px;}.iconRight.__jsx-style-dynamic-selector{margin-left:8px;}")), __jsx("div", {
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]]) + " " + 'container'
  }, props.iconLeft ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]]) + " " + 'iconLeft'
  }) : null, children, props.iconRight ? __jsx("img", {
    src: props.iconSrc,
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]]) + " " + 'iconRight'
  }) : null, props.closable ? __jsx("svg", {
    onClick: close,
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]])
  }, __jsx("g", {
    "data-name": "close",
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    transform: "rotate(180 12 12)",
    opacity: "0",
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]])
  }), __jsx("path", {
    fill: color,
    d: "M13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29-4.3 4.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4.29-4.3 4.29 4.3a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42z",
    className: _style["default"].dynamic([["3835364519", [properties.height, props.outlined || props.transparent ? 'transparent' : props.color ? props.color : colors ? colors.main : ThemeColors.light.main, props.textColor ? props.textColor : props.color ? props.color : colors ? colors.contrast : ThemeColors.light.contrast, fontWeight, properties.fontSize, border, display, properties.iconWidth, properties.iconWidth, colors ? colors.invertedFilter : ThemeColors.light.invertedFilter]]])
  })))) : null));
};

var _default = Tag;
exports["default"] = _default;