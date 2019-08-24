webpackHotUpdate("static/development/pages/index.js",{

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
      hover = _useState4[0],
      setHover = _useState4[1];

  var handleHover = function handleHover() {
    setHover(!hover);
  };

  var menu = ['Home', 'Our Games', 'Our Team', 'Contact'];
  var menuItems = menu.map(function (val, index) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      onClick: handleLinkClick,
      onMouseEnter: handleHover,
      onMouseLeave: handleHover,
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
      lineNumber: 34
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "menu_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: menuOpen,
    onClick: handleMenuClick,
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, menuItems)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2461209608",
    __self: this
  }, ".menu_button.jsx-2461209608{margin-top:0;margin-left:0;z-index:99;opacity:0.9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK0NrQixBQUd3QixhQUNDLGNBQ0gsV0FDQyxZQUNDLDBFQUNNLDZGQUNSLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi9NZW51QnV0dG9uJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1cmdlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE1lbnVPcGVuKCFtZW51T3BlbilcbiAgfVxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXG4gIH1cbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICAgIHNldEhvdmVyKCFob3ZlcilcbiAgfVxuICBjb25zdCBtZW51ID0gWydIb21lJywgJ091ciBHYW1lcycsICdPdXIgVGVhbScsICdDb250YWN0J11cbiAgY29uc3QgbWVudUl0ZW1zID0gbWVudS5tYXAoKHZhbCwgaW5kZXgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPE1lbnVJdGVtIGtleT17aW5kZXh9ICAgICAgICAgICBcbiAgICAgIG9uQ2xpY2s9e2hhbmRsZUxpbmtDbGlja31cbiAgICAgIG9uTW91c2VFbnRlciA9IHsgaGFuZGxlSG92ZXIgfVxuICAgICAgb25Nb3VzZUxlYXZlID0geyBoYW5kbGVIb3ZlciB9PlxuICAgICAgICB7dmFsfVxuICAgICAgPC9NZW51SXRlbT5cbiAgICApXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm1lbnVfYnV0dG9uXCI+XG4gICAgICAgIDxNZW51QnV0dG9uXG4gICAgICAgICAgICBvcGVuPXttZW51T3Blbn1cbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU1lbnVDbGlja31cbiAgICAgICAgICAgIGNvbG9yPSdibGFjaydcbiAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZW51ICBvcGVuPXttZW51T3Blbn0+XG4gICAgICAgICAge21lbnVJdGVtc31cbiAgICAgICAgPC9NZW51PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLm1lbnVfYnV0dG9uIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIHotaW5kZXg6IDk5O1xuICAgICAgICAgIG9wYWNpdHk6IDAuOTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICB9XG4gICAgYH08L3N0eWxlPlxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gIClcbn0iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.30a66ff650657db5c30e.hot-update.js.map