webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BurgerContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../BurgerContext */ "./components/BurgerContext/index.js");
/* harmony import */ var _appMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../appMobile */ "./components/appMobile/index.js");
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/Nav/index.js";




function Navigation() {
  var useCtx = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_BurgerContext__WEBPACK_IMPORTED_MODULE_1__["MyContext"]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appMobile__WEBPACK_IMPORTED_MODULE_2__["default"], {
    customBurgerIcon: false,
    isOpen: useCtx.isMenuOpen,
    onStateChange: function onStateChange(state) {
      return useCtx.stateChangeHandler(state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }));
}

/***/ })

})
//# sourceMappingURL=team.js.cf99de0688e83b5974cd.hot-update.js.map