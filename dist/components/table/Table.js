"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _style = _interopRequireDefault(require("styled-jsx/style"));

var _react = _interopRequireWildcard(require("react"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var __jsx = _react["default"].createElement;

var Table = function Table(props) {
  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "720371023",
    dynamic: [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]
  }, "table.__jsx-style-dynamic-selector{font-size:14px;line-height:1.42857143;box-sizing:border-box;border-collapse:collapse;border-spacing:0;width:100%;}thead.__jsx-style-dynamic-selector{font-size:14px;line-height:1.42857143;-webkit-font-smoothing:antialiased;border-collapse:collapse;border-spacing:0;box-sizing:border-box;}tbody.__jsx-style-dynamic-selector{font-size:14px;line-height:1.42857143;-webkit-font-smoothing:antialiased;border-collapse:collapse;border-spacing:0;box-sizing:border-box;}th.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:rgba(0,0,0,0);font-size:14px;line-height:1.42857143;color:".concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";border-collapse:collapse;border-spacing:0;box-sizing:border-box;background:none;border-style:none;border-bottom:1px dashed ").concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";padding:10px;text-align:left;}td.__jsx-style-dynamic-selector{-webkit-tap-highlight-color:rgba(0,0,0,0);font-size:14px;line-height:1.42857143;color:").concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";border-collapse:collapse;border-spacing:0;box-sizing:border-box;background:none;border-style:none;border-bottom:1px dashed ").concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";padding:10px;}")), __jsx("div", {
    className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, __jsx("table", {
    className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, __jsx("thead", {
    className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, __jsx("tr", {
    className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, Object.keys(props.data[0]).map(function (key, keyIndex) {
    return __jsx("th", {
      key: keyIndex,
      className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
    }, key);
  }))), __jsx("tbody", {
    className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
  }, props.data.map(function (data, index) {
    return __jsx("tr", {
      key: index,
      className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
    }, Object.keys(data).map(function (key, keyIndex) {
      return __jsx("td", {
        key: keyIndex,
        className: _style["default"].dynamic([["720371023", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast, colors ? colors.contrast : _ThemeColors["default"].light.contrast]]])
      }, data[key]);
    }));
  })))));
};

var _default = Table;
exports["default"] = _default;