"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = (0, _taggedTemplateLiteral2["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    background-color : ", "\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

var GlobalStyle = (0, _styledComponents.createGlobalStyle)(_templateObject(), function (props) {
  return props.colors ? props.colors.background : 'black';
});
var _default = GlobalStyle;
exports["default"] = _default;