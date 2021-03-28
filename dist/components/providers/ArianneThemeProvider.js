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

var __jsx = _react["default"].createElement;

var ArianneThemeProvider = function ArianneThemeProvider(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)("light"),
      theme = _useState[0],
      setTheme = _useState[1];

  var value = {
    theme: theme,
    setTheme: setTheme
  };
  (0, _react.useEffect)(function () {
    var localStorage = window.localStorage;

    if (!localStorage.getItem('Ariannetheme')) {
      localStorage.setItem('Ariannetheme', theme);
    } else {
      setTheme(localStorage.getItem('Ariannetheme'));
    }
  }, []);
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "2239707107"
  }, ""), __jsx(_ThemeContext["default"].Provider, {
    value: value
  }, children));
};

var _default = ArianneThemeProvider;
exports["default"] = _default;