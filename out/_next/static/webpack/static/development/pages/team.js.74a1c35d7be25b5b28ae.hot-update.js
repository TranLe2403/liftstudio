webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/BgMenu/MenuButton.js":
/*!*****************************************!*\
  !*** ./components/BgMenu/MenuButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js";



function MenuButton(_ref) {
  var open = _ref.open,
      color = _ref.color,
      onClick = _ref.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(open),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      openButton = _useState2[0],
      setOpenButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(color ? color : 'black'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 1),
      colorButton = _useState4[0]; //const componentWillReceiveProps = open => {
  //  open !== openButton ? open : null
  //}


  var handleClick = function handleClick() {
    setOpenButton(!openButton);
  };

  console.log('lhttt');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2579517123", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: onClick ? onClick : handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2579517123", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2579517123", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2579517123", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2579517123", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2579517123",
    dynamic: [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none'],
    __self: this
  }, ".button.__jsx-style-dynamic-selector{height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:4px;}.line.__jsx-style-dynamic-selector{height:2px;width:35px;background-color:".concat(colorButton, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}.top.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-bottom:10px;}.middle.__jsx-style-dynamic-selector{opacity:").concat(openButton ? 0 : 1, ";-webkit-transform:").concat(openButton ? 'translateX(-16' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-16' : 'none', ";transform:").concat(openButton ? 'translateX(-16' : 'none', ";}.bottom.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmEsQUFHaUMsQUFVRCxBQU00QixBQUtGLEFBSUUsV0FkNUIsQ0FWQSxVQVdtQyxDQVZqQyxjQW9CMEIsK0JBVGQsNkJBVkgsNkJBVzFCLEdBRzhCLEFBU0EscUNBSDlCLFNBbkIyQiw0Q0FjSixBQVNILGdCQUNwQixHQVRBLG9DQWR1Qiw2RkFDSixlQUNILFlBQ1oiLCJmaWxlIjoiL1VzZXJzL2xlaHV5ZW50cmFuL1N1bVdlYlByby9jb21wb25lbnRzL0JnTWVudS9NZW51QnV0dG9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiICBpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuICBleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51QnV0dG9uICh7b3BlbiwgY29sb3IsIG9uQ2xpY2t9KSB7XG4gICAgY29uc3QgW29wZW5CdXR0b24sIHNldE9wZW5CdXR0b25dID0gdXNlU3RhdGUob3BlbilcbiAgICBjb25zdCBbY29sb3JCdXR0b25dID0gdXNlU3RhdGUoY29sb3IgPyBjb2xvciA6ICdibGFjaycgKVxuICAgIC8vY29uc3QgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IG9wZW4gPT4ge1xuICAgICAgLy8gIG9wZW4gIT09IG9wZW5CdXR0b24gPyBvcGVuIDogbnVsbFxuICAgIC8vfVxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKCkgPT4ge1xuICAgICAgICBzZXRPcGVuQnV0dG9uKCFvcGVuQnV0dG9uKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnbGh0dHQnKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHtvbkNsaWNrID8gb25DbGljayA6IGhhbmRsZUNsaWNrfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJsaW5lIHRvcFwiPjwvZGl2PiAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgbWlkZGxlXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZSBib3R0b21cIi8+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckJ1dHRvbn07IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW5CdXR0b24gPyAncm90YXRlKDQ1ZGVnKScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7b3BlbkJ1dHRvbiA/IDAgOiAxfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW5CdXR0b24gPyAndHJhbnNsYXRlWCgtMTYnIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuQnV0dG9uID8gJ3RyYW5zbGF0ZVgoLTFweCkgcm90YXRlKC00NWRlZyknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH0iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js */")));
}

/***/ })

})
//# sourceMappingURL=team.js.74a1c35d7be25b5b28ae.hot-update.js.map