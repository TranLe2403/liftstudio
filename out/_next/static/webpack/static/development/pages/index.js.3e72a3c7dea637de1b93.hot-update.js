webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BgMenu/Menu.js":
/*!***********************************!*\
  !*** ./components/BgMenu/Menu.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/Menu.js";



function Menu(_ref) {
  var open = _ref.open,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(open ? open : false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      openMenu = _useState2[0],
      setOpenMenu = _useState2[1];
  /*const componentWillReceiveProps = open => {
      open !== openMenu ? setOpenMenu(open) : null
  }*/


  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["82839914", [openMenu ? '100%' : 0]]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["82839914", [openMenu ? '100%' : 0]]]) + " " + "menu_list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, openMenu ? react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["82839914", [openMenu ? '100%' : 0]]]) + " " + "list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, children) : null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "82839914",
    dynamic: [openMenu ? '100%' : 0],
    __self: this
  }, ".menu_list.__jsx-style-dynamic-selector{position:absolute;top:0;left:0;height:".concat(openMenu ? '100%' : 0, ";width:100px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;background-color:white;opacity:0.95;color:black;-webkit-transition:height 0.3s ease;transition:height 0.3s ease;z-index:2;}.list.__jsx-style-dynamic-selector{padding-top:3rem;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlYSxBQUd1QyxBQWNELGlCQUNyQixDQWRVLE1BQ0MsT0FDNkIsb0NBQ3hCLFlBQ0MsMEVBQ1MsOEVBQ0MsdUJBQ1YsYUFDRCxZQUNnQixnRUFDbEIsVUFDViIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L01lbnUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudSAoe29wZW4sIGNoaWxkcmVufSl7XG4gICAgY29uc3QgW29wZW5NZW51LCBzZXRPcGVuTWVudV0gPSB1c2VTdGF0ZShvcGVuID8gb3BlbiA6IGZhbHNlKTtcbiAgICAvKmNvbnN0IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBvcGVuID0+IHtcbiAgICAgICAgb3BlbiAhPT0gb3Blbk1lbnUgPyBzZXRPcGVuTWVudShvcGVuKSA6IG51bGxcbiAgICB9Ki9cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X2xpc3RcIj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBvcGVuTWVudSA/IDxkaXYgY2xhc3NOYW1lPVwibGlzdFwiPntjaGlsZHJlbn08L2Rpdj4gOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5tZW51X2xpc3R7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICR7b3Blbk1lbnUgPyAnMTAwJScgOiAwfTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogMC45NTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBoZWlnaHQgMC4zcyBlYXNlO1xuICAgICAgICAgICAgICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpc3Qge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn0iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/Menu.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.3e72a3c7dea637de1b93.hot-update.js.map