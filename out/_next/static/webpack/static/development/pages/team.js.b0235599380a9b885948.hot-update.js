webpackHotUpdate("static/development/pages/team.js",{

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
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["323346027", [hover ? 'gray' : '#fafafa']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["323346027", [hover ? 'gray' : '#fafafa']]]) + " " + "menu_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["323346027", [hover ? 'gray' : '#fafafa']]]) + " " + "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["323346027", [hover ? 'gray' : '#fafafa']]]) + " " + "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "323346027",
    dynamic: [hover ? 'gray' : '#fafafa'],
    __self: this
  }, ".menu_item.__jsx-style-dynamic-selector{-webkit-animation:1s appear-__jsx-style-dynamic-selector forwards;animation:1s appear-__jsx-style-dynamic-selector forwards;}.items.__jsx-style-dynamic-selector{font-size:25px;padding:1rem 0;margin:0 5% cursor:pointer;color:".concat(hover ? 'gray' : '#fafafa', ";-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;-webkit-animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJhLEFBR2tELEFBR2QsZUFDQSxlQUVBLDJCQUNvQixtQ0FDRCxnQ0FQdEMsNENBUW9DLGtJQUNwQyIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe29uQ2xpY2ssIGNoaWxkcmVufSkge1xuICAgIGNvbnN0IFtob3Zlciwgc2V0SG92ZXJdID0gdXNlU3RhdGUoZmFsc2UpXG5cbiAgICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICAgICAgc2V0SG92ZXIoIWhvdmVyKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygnZGxmaGRqaycpXG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyBoYW5kbGVIb3ZlciB9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17IGhhbmRsZUhvdmVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmVcIiAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAubWVudV9pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyBhcHBlYXIgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1JVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2hvdmVyPyAnZ3JheSc6JyNmYWZhZmEnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC4ycyBlYXNlLWluLW91dDtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAwLjVzIHNsaWRlSW4gZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG59XG4iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js */")));
}

/***/ })

})
//# sourceMappingURL=team.js.b0235599380a9b885948.hot-update.js.map