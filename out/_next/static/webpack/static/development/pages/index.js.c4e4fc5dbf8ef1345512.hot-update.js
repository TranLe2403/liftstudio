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
      hoverOpen = _useState4[0],
      setHoverOpen = _useState4[1];

  var handleHover = function handleHover() {
    setHoverOpen(!hoverOpen);
  };

  var menu = ['Home', 'Our Games', 'Our Team', 'Contact'];
  var menuItems = menu.map(function (_ref) {
    var val = _ref.val,
        index = _ref.index;
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      key: index,
      onClick: handleLinkClick,
      onMouseEnter: handleHover,
      onMouseLeave: handleHover,
      hover: hoverOpen,
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
  }, ".menu_button.jsx-2461209608{margin-top:0;margin-left:0;z-index:99;opacity:0.9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0RrQixBQUd3QixhQUNDLGNBQ0gsV0FDQyxZQUNDLDBFQUNNLDZGQUNSLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi9NZW51QnV0dG9uJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1cmdlcigpIHtcbiAgY29uc3QgW21lbnVPcGVuLCBzZXRNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcbiAgY29uc3QgaGFuZGxlTWVudUNsaWNrID0gKCkgPT4ge1xuICAgIHNldE1lbnVPcGVuKCFtZW51T3BlbilcbiAgfVxuICBjb25zdCBoYW5kbGVMaW5rQ2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oZmFsc2UpXG4gIH1cbiAgY29uc3QgW2hvdmVyT3Blbiwgc2V0SG92ZXJPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVIb3ZlciA9ICgpID0+IHtcbiAgICBzZXRIb3Zlck9wZW4oIWhvdmVyT3BlbilcbiAgfVxuXG4gIGNvbnN0IG1lbnUgPSBbJ0hvbWUnLCAnT3VyIEdhbWVzJywgJ091ciBUZWFtJywgJ0NvbnRhY3QnXVxuICBjb25zdCBtZW51SXRlbXMgPSBtZW51Lm1hcCgoe3ZhbCwgaW5kZXh9KSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxNZW51SXRlbSBrZXk9e2luZGV4fSAgICAgICAgICAgXG4gICAgICBvbkNsaWNrPXtoYW5kbGVMaW5rQ2xpY2t9XG4gICAgICBvbk1vdXNlRW50ZXIgPSB7aGFuZGxlSG92ZXJ9XG4gICAgICBvbk1vdXNlTGVhdmUgPSB7aGFuZGxlSG92ZXJ9XG4gICAgICBob3Zlcj17aG92ZXJPcGVufT5cbiAgICAgICAge3ZhbH1cbiAgICAgIDwvTWVudUl0ZW0+XG4gICAgKVxuICB9KTtcblxuICByZXR1cm4gKFxuICAgIDxSZWFjdC5GcmFnbWVudD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJtZW51X2J1dHRvblwiPlxuICAgICAgICA8TWVudUJ1dHRvblxuICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9XG4gICAgICAgICAgICBjb2xvcj0nYmxhY2snXG4gICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8TWVudSAgb3Blbj17bWVudU9wZW59PlxuICAgICAgICAgIHttZW51SXRlbXN9XG4gICAgICAgIDwvTWVudT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5tZW51X2J1dHRvbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB6LWluZGV4OiA5OTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjk7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L1JlYWN0LkZyYWdtZW50PlxuICApXG59Il19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/index.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.c4e4fc5dbf8ef1345512.hot-update.js.map