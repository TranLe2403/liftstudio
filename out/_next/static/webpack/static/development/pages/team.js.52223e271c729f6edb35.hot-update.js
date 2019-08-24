webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/BgMenu/index.js":
/*!************************************!*\
  !*** ./components/BgMenu/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Burger; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _MenuItem__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MenuItem */ "./components/BgMenu/MenuItem.js");
/* harmony import */ var _MenuButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MenuButton */ "./components/BgMenu/MenuButton.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Menu */ "./components/BgMenu/Menu.js");

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/index.js";





function Burger() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      menuOpen = _useState2[0],
      setMenuOpen = _useState2[1];

  var handleMenuClick = function handleMenuClick() {
    setMenuOpen(!menuOpen);
  };

  var handleLinkClick = function handleLinkClick() {
    setMenuOpen(false);
  };

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      Hover = _useState4[0],
      setHover = _useState4[1];

  var handleHover = function handleHover() {
    setHover(!Hover);
  };

  var menu = ['Home', 'Our Games', 'Our Team', 'Contact'];
  var menuItems = menu.map(function (val, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      onClick: handleLinkClick,
      onMouseEnter: handleHover,
      onMouseLeave: handleHover,
      hover: Hover,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, val);
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "menu_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: menuOpen,
    onClick: handleMenuClick,
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, menuItems)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2461209608",
    __self: this
  }, ".menu_button.jsx-2461209608{margin-top:0;margin-left:0;z-index:99;opacity:0.9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUd3QixhQUNDLGNBQ0gsV0FDQyxZQUNDLDBFQUNNLDZGQUNSLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi9NZW51QnV0dG9uJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1cmdlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE1lbnVPcGVuKCFtZW51T3BlbilcbiAgfVxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXG4gIH1cbiAgY29uc3QgW0hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICAgIHNldEhvdmVyKCFIb3ZlcilcbiAgfVxuICBjb25zdCBtZW51ID0gWydIb21lJywgJ091ciBHYW1lcycsICdPdXIgVGVhbScsICdDb250YWN0J11cbiAgY29uc3QgbWVudUl0ZW1zID0gbWVudS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9ICAgICAgICAgICBcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja31cbiAgICAgIG9uTW91c2VFbnRlciA9IHtoYW5kbGVIb3Zlcn1cbiAgICAgIG9uTW91c2VMZWF2ZSA9IHtoYW5kbGVIb3Zlcn1cbiAgICAgIGhvdmVyPXtIb3Zlcn0+XG4gICAgICAgIHt2YWx9XG4gICAgICA8L01lbnVJdGVtPlxuICAgIClcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibWVudV9idXR0b25cIj5cbiAgICAgICAgPE1lbnVCdXR0b25cbiAgICAgICAgICAgIG9wZW49e21lbnVPcGVufVxuICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTWVudUNsaWNrfVxuICAgICAgICAgICAgY29sb3I9J2JsYWNrJ1xuICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPE1lbnUgIG9wZW49e21lbnVPcGVufT5cbiAgICAgICAgICB7bWVudUl0ZW1zfVxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudV9idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/index.js */"));
}

/***/ })

})
//# sourceMappingURL=team.js.52223e271c729f6edb35.hot-update.js.map