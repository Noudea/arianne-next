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

var _Button = _interopRequireDefault(require("../buttons/Button"));

var _ThemeContext = _interopRequireDefault(require("../contexts/ThemeContext"));

var _ThemeColors = _interopRequireDefault(require("../themes/ThemeColors"));

var _Container = _interopRequireDefault(require("../container/Container"));

var _Flex = _interopRequireDefault(require("../container/Flex"));

var _ModalBody = _interopRequireDefault(require("./ModalBody"));

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var __jsx = _react["default"].createElement;

//-----props-----//
//show
//onClose
//custom
//width
//setSize
//okText
//closeText
var Modal = function Modal(_ref) {
  var children = _ref.children,
      ref = _ref.ref,
      props = (0, _objectWithoutProperties2["default"])(_ref, ["children", "ref"]);

  var _useState = (0, _react.useState)(props.show),
      show = _useState[0],
      setShow = _useState[1];

  var colors = _ThemeColors["default"][(0, _react.useContext)(_ThemeContext["default"]).theme];

  (0, _react.useEffect)(function () {
    setShow(props.show);
  }, [props.show]);

  var handleCloseClick = function handleCloseClick() {
    var modal = document.getElementById('modal');
    modal.classList.add('bounce-out');
    console.log(modal);
    setTimeout(function () {
      setShow(false);
      props.onClose();
    }, 300);
  };

  return __jsx(_react["default"].Fragment, null, __jsx(_style["default"], {
    id: "3874092207",
    dynamic: [props.width ? props.width : '600px', colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, props.customCss]
  }, ".container.__jsx-style-dynamic-selector{width:".concat(props.width ? props.width : '600px', ";min-height:200px;max-height:900px;background-color:red;position:relative;margin:auto;z-index:100000;background-color:").concat(colors ? colors.main : _ThemeColors["default"].light.main, ";color:").concat(colors ? colors.inverted : _ThemeColors["default"].light.inverted, ";border-radius:8px;}.buttonContainer.__jsx-style-dynamic-selector{position:absolute;bottom:20px;right:20px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.buttonContainer.__jsx-style-dynamic-selector:nthChild(1){margin:5px;}.xs.__jsx-style-dynamic-selector{width:400px;}.sm.__jsx-style-dynamic-selector{width:600px;}.md.__jsx-style-dynamic-selector{width:800px;}.lg.__jsx-style-dynamic-selector{width:968px;}.bounce-in.__jsx-style-dynamic-selector{-webkit-animation-name:bounceIn;-webkit-animation-name:bounceIn-__jsx-style-dynamic-selector;animation-name:bounceIn-__jsx-style-dynamic-selector;-webkit-animation-duration:0.3s;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-timing-function:cubic-bezier( 0.68, -0.55, 0.27, 1.55 );-webkit-animation-timing-function:cubic-bezier( 0.68, -0.55, 0.27, 1.55 );animation-timing-function:cubic-bezier( 0.68, -0.55, 0.27, 1.55 );-webkit-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}.bounce-out.__jsx-style-dynamic-selector{-webkit-animation-name:bounceOut;-webkit-animation-name:bounceOut-__jsx-style-dynamic-selector;animation-name:bounceOut-__jsx-style-dynamic-selector;-webkit-animation-duration:0.3s;-webkit-animation-duration:0.3s;animation-duration:0.3s;-webkit-animation-timing-function:cubic-bezier( 0.4, 0, 1, 1 );-webkit-animation-timing-function:cubic-bezier(0.4,0,1,1);animation-timing-function:cubic-bezier(0.4,0,1,1);-webkit-animation-fill-mode:forwards;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes bounceIn{0%.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}to.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@-webkit-keyframes bounceIn-__jsx-style-dynamic-selector{0%{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}to{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@keyframes bounceIn-__jsx-style-dynamic-selector{0%{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}to{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}@-webkit-keyframes bounceOut{0%.__jsx-style-dynamic-selector{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}to.__jsx-style-dynamic-selector{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}}@-webkit-keyframes bounceOut-__jsx-style-dynamic-selector{0%{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}to{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}}@keyframes bounceOut-__jsx-style-dynamic-selector{0%{opacity:1;-webkit-transform:scale(1);-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}to{opacity:0;-webkit-transform:scale(0.8);-webkit-transform:scale(0.8);-ms-transform:scale(0.8);transform:scale(0.8);}}.customCss.__jsx-style-dynamic-selector{").concat(props.customCss, ";}")), show ? __jsx("div", {
    id: "modal",
    className: _style["default"].dynamic([["3874092207", [props.width ? props.width : '600px', colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, props.customCss]]]) + " " + ('container bounce-in customCss ' + props.size || "")
  }, __jsx(_Container["default"], {
    padding: "20px"
  }, __jsx(_Flex["default"], {
    flexDirection: "column",
    justifyContent: "space-between"
  }, children)), __jsx("div", {
    className: _style["default"].dynamic([["3874092207", [props.width ? props.width : '600px', colors ? colors.main : _ThemeColors["default"].light.main, colors ? colors.inverted : _ThemeColors["default"].light.inverted, props.customCss]]]) + " " + 'buttonContainer'
  }, __jsx(_Button["default"], {
    accent: true,
    onClick: handleCloseClick
  }, props.okText ? props.okText : 'Accepter'), __jsx(_Button["default"], {
    onClick: handleCloseClick
  }, props.closeText ? props.closeText : 'Fermer'))) : null);
};

Modal.Header = _ModalHeader["default"];
Modal.Body = _ModalBody["default"];
var _default = Modal;
exports["default"] = _default;