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
    console.log('helloooo');
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
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
  }, ".menu_item.__jsx-style-dynamic-selector{-webkit-animation:1s appear-__jsx-style-dynamic-selector forwards;animation:1s appear-__jsx-style-dynamic-selector forwards;}.items.__jsx-style-dynamic-selector{font-size:25px;padding:1rem 0;margin:0 5% cursor:pointer;color:".concat(hover ? 'gray' : 'green', ";-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;-webkit-animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JhLEFBR2tELEFBR2QsZUFDQSxlQUVBLDJCQUNvQixtQ0FDRCxnQ0FQdEMsNENBUW9DLGtJQUNwQyIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnVJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUl0ZW0oe29uQ2xpY2ssIGNoaWxkcmVuLH0pIHtcbiAgICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gICAgY29uc3QgaGFuZGxlSG92ZXIgPSAoKSA9PiB7XG4gICAgICAgIHNldEhvdmVyKCFob3ZlcilcbiAgICAgICAgY29uc29sZS5sb2coJ2hlbGxvb29vJylcbiAgICB9XG5cblxuICAgIHJldHVybiAoXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpdGVtc1wiXG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VFbnRlcj17IGhhbmRsZUhvdmVyIH1cbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsgaGFuZGxlSG92ZXIgfVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAubWVudV9pdGVtIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAxcyBhcHBlYXIgZm9yd2FyZHM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5pdGVtc3tcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCA1JVxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAke2hvdmVyID8gJ2dyYXknOidncmVlbid9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBjb2xvciAwLjJzIGVhc2UtaW4tb3V0O1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDAuNXMgc2xpZGVJbiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxufVxuIl19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js */")));
}

/***/ })

})
//# sourceMappingURL=team.js.8ed2077b2c1fc61ce9ac.hot-update.js.map