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

var _NavContext = _interopRequireDefault(require("../contexts/NavContext"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var _SideNavContainer = _interopRequireDefault(require("./SideNavContainer"));

var _SideNavDropDown = _interopRequireDefault(require("./SideNavDropDown"));

var _SideNavHeader = _interopRequireDefault(require("./SideNavHeader"));

var _SideNavItem = _interopRequireDefault(require("./SideNavItem"));

var __jsx = _react["default"].createElement;

var SideNav = function SideNav(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children"]);

  // const [isOpen, setIsOpen] = useState(false)
  var _useContext = (0, _react.useContext)(_NavContext["default"]),
      sideNavOpen = _useContext.sideNavOpen,
      setSideNavOpen = _useContext.setSideNavOpen;

  var _useState = (0, _react.useState)(260),
      width = _useState[0],
      setWidth = _useState[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme]; // useEffect(() => {
  //     setIsOpen(props.isOpen)
  //     console.log('isopen',isOpen)
  //     if (isOpen) {
  //         setWidth(260)
  //         Array.from(
  //             document.getElementsByTagName(props.targetedClass)
  //         )[0].style.marginLeft = '324px'
  //     } else {
  //         setWidth(8)
  //         Array.from(
  //             document.getElementsByTagName(props.targetedClass)
  //         )[0].style.marginLeft = '84px'
  //     }
  // }, [colors])


  (0, _react.useEffect)(function () {
    if (sideNavOpen) {
      setWidth(260);
      Array.from(document.getElementsByTagName(props.targetedClass))[0].style.marginLeft = '324px';
    } else {
      setWidth(8);
      Array.from(document.getElementsByTagName(props.targetedClass))[0].style.marginLeft = '84px';
    }
  }, [colors, sideNavOpen]);

  var toggleOpen = function toggleOpen() {
    if (sideNavOpen) {
      setSideNavOpen(false);
      setWidth(8);
      Array.from(document.getElementsByTagName(props.targetedClass))[0].style.marginLeft = '84px';
    }

    if (!sideNavOpen) {
      setSideNavOpen(true);
      setWidth(260);
      Array.from(document.getElementsByTagName(props.targetedClass))[0].style.marginLeft = '324px';
    }
  }; // const toggleOpen = () => {
  //     if (isOpen) {
  //         setIsOpen(false)
  //         setWidth(8)
  //         Array.from(
  //             document.getElementsByTagName(props.targetedClass)
  //         )[0].style.marginLeft = '84px'
  //     }
  //     if (!isOpen) {
  //         setIsOpen(true)
  //         setWidth(260)
  //         Array.from(
  //             document.getElementsByTagName(props.targetedClass)
  //         )[0].style.marginLeft = '324px'
  //     }
  // }


  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "1586904104",
    dynamic: [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]
  }, ".sideNavContainer.__jsx-style-dynamic-selector{width:".concat(width, "px;height:100%;position:absolute;background-color:").concat(props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, ";left:100%;padding:0 10px;z-index:9998;}svg.__jsx-style-dynamic-selector{width:50px;height:50px;}.buttonContainer.__jsx-style-dynamic-selector{position:absolute;right:-12px;top:20px;}.contentContainer.__jsx-style-dynamic-selector{padding:0 10px;}.button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;width:24px;height:24px;background-color:").concat(colors ? colors.inverted : _ThemeColors["default"].light.inverted, ";border:none;border-radius:50%;cursor:pointer;outline:none;color:").concat(colors ? colors.main : _ThemeColors["default"].light.main, ";overflow:hidden;padding:3px;}")), __jsx("div", {
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "sideNavContainer"
  }, __jsx("div", {
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "buttonContainer"
  }, sideNavOpen ? __jsx("div", {
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "container"
  }, __jsx("button", {
    onClick: toggleOpen,
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "button"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("g", {
    "data-name": "chevron-left",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("rect", {
    transform: "rotate(90 12 12)",
    opacity: "0",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }), __jsx("path", {
    fill: colors ? colors.main : _ThemeColors["default"].light.main,
    d: "M13.36 17a1 1 0 0 1-.72-.31l-3.86-4a1 1 0 0 1 0-1.4l4-4a1 1 0 1 1 1.42 1.42L10.9 12l3.18 3.3a1 1 0 0 1 0 1.41 1 1 0 0 1-.72.29z",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  })))))) : __jsx("div", {
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "container"
  }, __jsx("button", {
    onClick: toggleOpen,
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]]) + " " + "button"
  }, __jsx("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 24 24",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("g", {
    "data-name": "Layer 2",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("g", {
    "data-name": "chevron-right",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }, __jsx("rect", {
    width: "24",
    height: "24",
    transform: "rotate(-90 12 12)",
    opacity: "0",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }), __jsx("path", {
    fill: colors ? colors.main : _ThemeColors["default"].light.main,
    d: "M10.5 17a1 1 0 0 1-.71-.29 1 1 0 0 1 0-1.42L13.1 12 9.92 8.69a1 1 0 0 1 0-1.41 1 1 0 0 1 1.42 0l3.86 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-.7.32z",
    className: _style["default"].dynamic([["1586904104", [width, props.color ? props.color : colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, colors ? colors.main : _ThemeColors["default"].light.main]]])
  }))))))), sideNavOpen ? __jsx(_react["default"].Fragment, null, children) : null));
};

SideNav.Container = _SideNavContainer["default"];
SideNav.Dropdown = _SideNavDropDown["default"];
SideNav.Header = _SideNavHeader["default"];
SideNav.Item = _SideNavItem["default"];
var _default = SideNav;
exports["default"] = _default;