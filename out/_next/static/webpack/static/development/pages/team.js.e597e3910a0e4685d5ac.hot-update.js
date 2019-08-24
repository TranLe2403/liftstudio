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
/* harmony import */ var _appMobile__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../appMobile */ "./components/appMobile/index.js");
/* harmony import */ var _BurgerContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../BurgerContext */ "./components/BurgerContext/index.js");
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/Nav/index.js";



function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_appMobile__WEBPACK_IMPORTED_MODULE_1__["default"], {
    customBurgerIcon: false,
    isOpen: _BurgerContext__WEBPACK_IMPORTED_MODULE_2__["useCtx"].isMenuOpen,
    onStateChange: function onStateChange(state) {
      return _BurgerContext__WEBPACK_IMPORTED_MODULE_2__["useCtx"].stateChangeHandler(state);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  });
}

/***/ }),

/***/ "./components/appMobile/index.js":
/*!***************************************!*\
  !*** ./components/appMobile/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuinMobile; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/appMobile/index.js";

function MenuinMobile() {
  var showSettings = function showSettings(event) {
    event.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "home",
    className: "menu-item",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "games",
    className: "menu-item",
    href: "/games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Our Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "team",
    className: "menu-item",
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "contact",
    className: "menu-item",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    onClick: showSettings,
    className: "menu-item--small",
    href: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, "Settings"));
}

/***/ }),

/***/ "./components/mobileMenu.js":
/*!**********************************!*\
  !*** ./components/mobileMenu.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ButtonNav__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonNav */ "./components/ButtonNav/index.js");
/* harmony import */ var _Nav__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Nav */ "./components/Nav/index.js");
/* harmony import */ var _BurgerContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./BurgerContext */ "./components/BurgerContext/index.js");
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/mobileMenu.js";





var Mobile = function Mobile() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_BurgerContext__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Nav__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Mobile);

/***/ })

})
//# sourceMappingURL=team.js.e597e3910a0e4685d5ac.hot-update.js.map