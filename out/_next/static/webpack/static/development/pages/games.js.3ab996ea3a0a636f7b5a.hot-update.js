webpackHotUpdate("static/development/pages/games.js",{

/***/ "./components/BurgerContext/index.js":
/*!*******************************************!*\
  !*** ./components/BurgerContext/index.js ***!
  \*******************************************/
/*! exports provided: default, useCtx */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCtx", function() { return useCtx; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BurgerContext/index.js";

var MyContext = Object(react__WEBPACK_IMPORTED_MODULE_1__["createContext"])(null);

var MyProvider = function MyProvider(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      menuOpenState = _useState2[0],
      setMenuOpenState = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MyContext.Provider, {
    value: {
      isMenuOpen: menuOpenState,
      toggleMenu: function toggleMenu() {
        console.log("Heloo");
        return setMenuOpenState(!menuOpenState);
      },
      stateChangeHandler: function stateChangeHandler(newState) {
        return setMenuOpenState(newState.isOpen);
      }
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (MyProvider);
var useCtx = function useCtx() {
  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(MyContext);
};

/***/ })

})
//# sourceMappingURL=games.js.3ab996ea3a0a636f7b5a.hot-update.js.map