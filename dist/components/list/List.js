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

var _Divider = _interopRequireDefault(require("../divider/Divider"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var __jsx = _react["default"].createElement;

var List = function List(props) {
  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  var _useState = (0, _react.useState)(props.data),
      data = _useState[0],
      setData = _useState[1];

  var _useState2 = (0, _react.useState)(false),
      loaded = _useState2[0],
      setIsLoaded = _useState2[1];

  var _useState3 = (0, _react.useState)(props.searchable),
      searchable = _useState3[0],
      setSearchable = _useState3[1];

  var _useState4 = (0, _react.useState)(''),
      inputValue = _useState4[0],
      setInputValue = _useState4[1];

  var _useState5 = (0, _react.useState)(20),
      margin = _useState5[0],
      setMargin = _useState5[1];

  (0, _react.useEffect)(function () {
    if (props.xsmall) {
      setMargin(8);
    }

    if (props.small) {
      setMargin(13);
    }

    if (props.medium) {
      setMargin(20);
    }

    if (props.large) {
      setMargin(28);
    }

    setIsLoaded(true);
  }, [props.theme, inputValue]);

  var search = function search(e) {
    setInputValue(e.target.value);
  };

  return __jsx("div", {
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]]) + " " + "listContainer"
  }, __jsx(_style["default"], {
    id: "2405600844",
    dynamic: [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]
  }, ".listContainer.__jsx-style-dynamic-selector{width:100%;}.listHeader.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}h3.__jsx-style-dynamic-selector{margin:0px 16px 0px 0px;color:".concat(colors ? colors.contrast : _ThemeColors["default"].light.contrast, ";}input.__jsx-style-dynamic-selector{height:20px;}ol.__jsx-style-dynamic-selector{margin:0;padding:0;list-style-position:inside;}ul.__jsx-style-dynamic-selector{list-style-type:none;margin:0;padding:0;}.test.__jsx-style-dynamic-selector{width:100%;height:1px;background-color:red;margin:").concat(margin, " auto;}")), loaded ? __jsx(_react["default"].Fragment, null, __jsx("div", {
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]]) + " " + "listHeader"
  }, props.title ? __jsx("h3", {
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]])
  }, props.title) : null, searchable ? __jsx("input", {
    onChange: search,
    type: "text",
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]])
  }) : null), __jsx(_Divider["default"], {
    margin: margin
  }), props.ordered ? __jsx("ol", {
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]])
  }, data.filter(function (data) {
    return data.includes(inputValue);
  }).map(function (filteredData, index) {
    return __jsx(_ListItem["default"], {
      margin: margin,
      theme: props.theme,
      key: index
    }, filteredData);
  })) : __jsx("ul", {
    className: _style["default"].dynamic([["2405600844", [colors ? colors.contrast : _ThemeColors["default"].light.contrast, margin]]])
  }, data.filter(function (data) {
    return data.includes(inputValue);
  }).map(function (filteredData, index) {
    return __jsx(_ListItem["default"], {
      margin: margin,
      theme: props.theme,
      key: index
    }, filteredData);
  }))) : null);
};

var _default = List;
exports["default"] = _default;