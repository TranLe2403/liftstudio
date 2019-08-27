webpackHotUpdate("static/development/pages/contact.js",{

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
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Link */ "./components/Link.js");

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

  var menu = [{
    href: "/",
    name: "HOME"
  }, {
    href: "/games",
    name: "OUR GAMES"
  }, {
    href: "/team",
    name: "OUR TEAM"
  }, {
    href: "/contact",
    name: "CONTACT"
  }];
  var menuItems = menu.map(function (val) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
      href: val.href,
      key: val.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuItem__WEBPACK_IMPORTED_MODULE_3__["default"], {
      onClick: handleLinkClick,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, val.name));
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-2461209608" + " " + "menu_button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_MenuButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
    open: menuOpen,
    onClick: handleMenuClick,
    color: "black",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_5__["default"], {
    open: menuOpen,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, menuItems)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "2461209608",
    __self: this
  }, ".menu_button.jsx-2461209608{margin-top:0;margin-left:0;z-index:99;opacity:0.9;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;width:100%;color:white;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURrQixBQUd3QixhQUNDLGNBQ0gsV0FDQyxZQUNDLDBFQUNNLDZGQUNSLFdBQ0MsWUFDZCIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvQmdNZW51L2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBNZW51SXRlbSBmcm9tICcuL01lbnVJdGVtJ1xuaW1wb3J0IE1lbnVCdXR0b24gZnJvbSAnLi9NZW51QnV0dG9uJ1xuaW1wb3J0IE1lbnUgZnJvbSAnLi9NZW51J1xuaW1wb3J0IExpbmsgZnJvbSAnLi4vTGluayc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnVyZ2VyKCkge1xuICBjb25zdCBbbWVudU9wZW4sIHNldE1lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuICBjb25zdCBoYW5kbGVNZW51Q2xpY2sgPSAoKSA9PiB7XG4gICAgc2V0TWVudU9wZW4oIW1lbnVPcGVuKVxuICB9XG4gIGNvbnN0IGhhbmRsZUxpbmtDbGljayA9ICgpID0+IHtcbiAgICBzZXRNZW51T3BlbihmYWxzZSlcbiAgfVxuICBjb25zdCBtZW51ID0gW1xuICAgIHsgaHJlZjogXCIvXCIsIG5hbWU6IFwiSE9NRVwiIH0sXG4gICAgeyBocmVmOiBcIi9nYW1lc1wiLCBuYW1lOiBcIk9VUiBHQU1FU1wiIH0sXG4gICAgeyBocmVmOiBcIi90ZWFtXCIsIG5hbWU6IFwiT1VSIFRFQU1cIiB9LFxuICAgIHsgaHJlZjogXCIvY29udGFjdFwiLCBuYW1lOiBcIkNPTlRBQ1RcIiB9XG4gIF07XG4gIGNvbnN0IG1lbnVJdGVtcyA9IG1lbnUubWFwKCh2YWwpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPExpbmsgaHJlZj17dmFsLmhyZWZ9IGtleT17dmFsLm5hbWV9PlxuICAgICAgICA8TWVudUl0ZW0gXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlTGlua0NsaWNrfT5cbiAgICAgICAgICB7dmFsLm5hbWV9XG4gICAgICAgIDwvTWVudUl0ZW0+XG4gICAgICA8L0xpbms+XG5cbiAgICApXG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudV9idXR0b25cIj5cbiAgICAgICAgICA8TWVudUJ1dHRvblxuICAgICAgICAgICAgb3Blbj17bWVudU9wZW59XG4gICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVNZW51Q2xpY2t9XG4gICAgICAgICAgICBjb2xvcj0nYmxhY2snXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxNZW51IG9wZW49e21lbnVPcGVufT5cbiAgICAgICAgICB7bWVudUl0ZW1zfVxuICAgICAgICA8L01lbnU+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAubWVudV9idXR0b24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgei1pbmRleDogOTk7XG4gICAgICAgICAgb3BhY2l0eTogMC45O1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgKVxufSJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/index.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.0c826e3e863673a26a4f.hot-update.js.map