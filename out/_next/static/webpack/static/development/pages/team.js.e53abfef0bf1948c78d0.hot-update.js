webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/Button/index.js":
/*!************************************!*\
  !*** ./components/Button/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Button; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BurgerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BurgerContext */ "./components/BurgerContext/index.js");
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/Button/index.js";


function Button() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: _BurgerContext__WEBPACK_IMPORTED_MODULE_1__["useCtx"].toggleMenu,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Toggle menu");
}

/***/ })

})
//# sourceMappingURL=team.js.e53abfef0bf1948c78d0.hot-update.js.map