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

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2423119783", [hover ? 'red' : 'black', hover ? 'scale(1.5)' : 'scale(0)']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2423119783", [hover ? 'red' : 'black', hover ? 'scale(1.5)' : 'scale(0)']]]) + " " + "menu_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onMouseEnter: handleHover,
    onMouseLeave: handleHover,
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["2423119783", [hover ? 'red' : 'black', hover ? 'scale(1.5)' : 'scale(0)']]]) + " " + "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2423119783",
    dynamic: [hover ? 'red' : 'black', hover ? 'scale(1.5)' : 'scale(0)'],
    __self: this
  }, ".menu_item.__jsx-style-dynamic-selector{-webkit-animation:1s appear-__jsx-style-dynamic-selector forwards;animation:1s appear-__jsx-style-dynamic-selector forwards;}.items.__jsx-style-dynamic-selector{font-size:25px;padding:1rem 0;margin:0 5% cursor:pointer;color:".concat(hover ? 'red' : 'black', ";-webkit-transform:").concat(hover ? 'scale(1.5)' : 'scale(0)', " transition:color 0.2s ease-in-out;-ms-transform:").concat(hover ? 'scale(1.5)' : 'scale(0)', " transition:color 0.2s ease-in-out;transform:").concat(hover ? 'scale(1.5)' : 'scale(0)', " transition:color 0.2s ease-in-out;-webkit-animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBdUJhLEFBR2tELEFBR2QsZUFDQSxlQUVBLDJCQUNvQixtQ0FFRCxnQ0FSdEMsdU1BU29DLGtJQUNwQyIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe29uQ2xpY2ssIGNoaWxkcmVuLH0pIHtcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlSG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKCFob3ZlcilcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVfaXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaXRlbXNcIlxuICAgICAgICAgICAgICAgICAgICBvbk1vdXNlRW50ZXI9eyBoYW5kbGVIb3ZlciB9XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17IGhhbmRsZUhvdmVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17b25DbGlja31cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLm1lbnVfaXRlbSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMXMgYXBwZWFyIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuaXRlbXN7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNSVcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtob3ZlciA/ICdyZWQnOidibGFjayd9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7aG92ZXIgPyAnc2NhbGUoMS41KScgOiAnc2NhbGUoMCknfVxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuNXMgc2xpZGVJbiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.73eb58b9aa10ee09ef89.hot-update.js.map