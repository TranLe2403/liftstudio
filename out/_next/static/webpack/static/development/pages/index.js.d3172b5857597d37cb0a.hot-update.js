webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BgMenu/MenuItem.js":
/*!***************************************!*\
  !*** ./components/BgMenu/MenuItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js";



function MenuItem(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleHover = function handleHover() {
    setHover(!hover);
  };

  console.log('dlfhdjk');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3651361674", [hover ? 'gray' : 'green']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3651361674", [hover ? 'gray' : 'green']]]) + " " + "menu_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3651361674", [hover ? 'gray' : 'green']]]) + " " + "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3651361674",
    dynamic: [hover ? 'gray' : 'green'],
    __self: this
  }, ".menu_item.__jsx-style-dynamic-selector{-webkit-animation:1s appear-__jsx-style-dynamic-selector forwards;animation:1s appear-__jsx-style-dynamic-selector forwards;}.items.__jsx-style-dynamic-selector{font-size:25px;padding:1rem 0;margin:0 5% cursor:pointer;color:".concat(hover ? 'gray' : 'green', ";-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;-webkit-animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JhLEFBR2tELEFBR2QsZUFDQSxlQUVBLDJCQUNvQixtQ0FDRCxnQ0FQdEMsNENBUW9DLGtJQUNwQyIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe29uQ2xpY2ssIGNoaWxkcmVufSkge1xuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SG92ZXIoIWhvdmVyKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGxmaGRqaycpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXIgPSB7IGhhbmRsZUhvdmVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlID0geyBoYW5kbGVIb3ZlciB9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Y2hpbGRyZW59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5tZW51X2l0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDFzIGFwcGVhciBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDFyZW0gMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwIDUlXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICR7aG92ZXIgPyAnZ3JheSc6J2dyZWVuJ307XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMC41cyBzbGlkZUluIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.d3172b5857597d37cb0a.hot-update.js.map