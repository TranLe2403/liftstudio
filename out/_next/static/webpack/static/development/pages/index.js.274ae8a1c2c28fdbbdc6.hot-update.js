webpackHotUpdate("static/development/pages/index.js",{

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1585428284", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: onClick ? onClick : handleClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1585428284", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1585428284", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1585428284", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["1585428284", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "1585428284",
    dynamic: [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none'],
    __self: this
  }, ".button.__jsx-style-dynamic-selector{height:35px;width:35px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:4px;}.line.__jsx-style-dynamic-selector{height:2px;width:20px;background-color:".concat(colorButton, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;padding:5px;}.top.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-bottom:5px;}.middle.__jsx-style-dynamic-selector{opacity:").concat(openButton ? 0 : 1, ";-webkit-transform:").concat(openButton ? 'translateX(-16' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-16' : 'none', ";transform:").concat(openButton ? 'translateX(-16' : 'none', ";}.bottom.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmEsQUFHaUMsQUFVRCxBQU80QixBQUtGLEFBSUUsV0FmNUIsQ0FWQSxVQVdtQyxDQVZqQyxjQXFCMEIsK0JBVmQsNkJBVkgsNkJBV1YsR0FJYyxBQVNBLFNBWjlCLDRCQVNBLFNBcEIyQiw0Q0FlTCxBQVNILGVBQ25CLEdBVEEscUNBZnVCLDZGQUNKLGVBQ0gsWUFDWiIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnVCdXR0b24uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgIGltcG9ydCB7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xuXG4gIGV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lbnVCdXR0b24gKHtvcGVuLCBjb2xvciwgb25DbGlja30pIHtcbiAgICBjb25zdCBbb3BlbkJ1dHRvbiwgc2V0T3BlbkJ1dHRvbl0gPSB1c2VTdGF0ZShvcGVuKVxuICAgIGNvbnN0IFtjb2xvckJ1dHRvbl0gPSB1c2VTdGF0ZShjb2xvciA/IGNvbG9yIDogJ2JsYWNrJyApXG4gICAgLy9jb25zdCBjb21wb25lbnRXaWxsUmVjZWl2ZVByb3BzID0gb3BlbiA9PiB7XG4gICAgICAvLyAgb3BlbiAhPT0gb3BlbkJ1dHRvbiA/IG9wZW4gOiBudWxsXG4gICAgLy99XG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5CdXR0b24oIW9wZW5CdXR0b24pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdsaHR0dCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrID0ge29uQ2xpY2sgPyBvbkNsaWNrIDogaGFuZGxlQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImxpbmUgdG9wXCI+PC9kaXY+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZSBtaWRkbGVcIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lIGJvdHRvbVwiLz5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yQnV0dG9ufTsgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuQnV0dG9uID8gJ3JvdGF0ZSg0NWRlZyknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7b3BlbkJ1dHRvbiA/IDAgOiAxfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW5CdXR0b24gPyAndHJhbnNsYXRlWCgtMTYnIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuQnV0dG9uID8gJ3RyYW5zbGF0ZVgoLTFweCkgcm90YXRlKC00NWRlZyknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbiAgfSJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.274ae8a1c2c28fdbbdc6.hot-update.js.map