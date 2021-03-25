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

var NavBar = function NavBar(_ref, props) {
  var children = _ref.children;
  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "4228264932"
  }, ".navContainer.jsx-4228264932{position:relative;top:0px;left:0px;}.topNavContent.jsx-4228264932{width:100%;margin :0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:100%;}.topNav.jsx-4228264932{background-color:black;height:48px;}.topNav.jsx-4228264932,.bottomNav.jsx-4228264932{height:48px;width:100%;}.bottomNav.jsx-4228264932{position:-webkit-sticky;position:sticky;position:-webkit-sticky;top:0px;left:0px;background-color:rgba(29,29,31,0.72);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px);margin:0px;z-index:10;}.bottomNavTitle.jsx-4228264932{color:#fff;opacity:0.92;font-size:var(--smallFontSize);font-weight:600;margin:0px;}.bottomNavContent.jsx-4228264932{max-width:var(--maxWidth);margin :0 auto;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%;}a.jsx-4228264932{color:white;font-size:var(--smallFontSize);}img.jsx-4228264932{width:30px;cursor:pointer;}"), __jsx("div", {
    className: "jsx-4228264932" + " " + "navContainer"
  }, __jsx("nav", {
    className: "jsx-4228264932"
  }, __jsx("div", {
    className: "jsx-4228264932" + " " + "topNav"
  }, __jsx("div", {
    className: "jsx-4228264932" + " " + 'topNavContent'
  }, children))), __jsx("div", {
    className: "jsx-4228264932" + " " + "bottomNav"
  }, __jsx("div", {
    className: "jsx-4228264932" + " " + 'bottomNavContent'
  }, __jsx("div", {
    className: "jsx-4228264932"
  }, __jsx("p", {
    className: "jsx-4228264932"
  }, props.test)), __jsx("div", {
    className: "jsx-4228264932"
  })))));
};

var _default = NavBar;
exports["default"] = _default;