webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Logo */ "./components/Logo.js");
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Link */ "./components/Link.js");
/* harmony import */ var _BgMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BgMenu */ "./components/BgMenu/index.js");
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/Header.js";





function Header() {
  var links = [{
    href: "/",
    name: "HOME"
  }, {
    href: "/games",
    name: "GAMES"
  }, {
    href: "/team",
    name: "TEAM"
  }, {
    href: "/contact",
    name: "CONTACT"
  }];
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "nav_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "nav_bar_mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_BgMenu__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "nav_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2334764586" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, links.map(function (link) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Link__WEBPACK_IMPORTED_MODULE_3__["default"], {
      activeClassName: "active",
      href: link.href,
      as: "" + link.href,
      key: link.name,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2334764586" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2334764586",
    __self: this
  }, ".menuMobile.jsx-2334764586{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.nav_bar_mobile.jsx-2334764586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}.header.jsx-2334764586{display:none;}@media only screen and (min-width:768px){.menu.jsx-2334764586 right.jsx-2334764586{width:75%;}.nav_logo.jsx-2334764586 left.jsx-2334764586{25%;}.menuMobile.jsx-2334764586{display:none;}.header.jsx-2334764586{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}}.active.jsx-2334764586{border-bottom:5px solid #444141;}.nav_logo.jsx-2334764586{padding:10px 30px;width:60px;height:60px;}.menu.jsx-2334764586{padding-right:30px;font-weight:1000;}.link.jsx-2334764586{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUtzQixBQVNFLEFBT0EsQUFLTSxBQUNKLEFBQ1EsQUFHWixBQVNtQixBQUlkLEFBS0MsQUFJTCxJQTFCSSxNQURJLENBcEJQLEVBZ0JmLEFBTTBCLENBMEJSLElBVFAsQ0FLTSxVQUpMLEdBSmQsQUFhdUIsSUFKbkIsS0FKSixZQVNnQixlQUNPLE1BMUNHLEFBaUJNLFdBekJFLGlDQW1EYixrQ0ExQ0UscUNBaUJGLFdBekJFLFdBbURSLGFBRWYscUJBM0NFLHFDQWdCeUIsV0F6QkUsY0EwQmYsV0F6QkUsQ0EwQmhCLFdBeEJFIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1nIGZyb20gJy4vTG9nbydcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBCdXJnZXIgZnJvbSAnLi9CZ01lbnUnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICAge2hyZWY6IFwiL1wiLCBuYW1lOiBcIkhPTUVcIn0sXG4gICAgICB7aHJlZjogXCIvZ2FtZXNcIiwgbmFtZTogXCJHQU1FU1wifSxcbiAgICAgIHtocmVmOiBcIi90ZWFtXCIsIG5hbWU6IFwiVEVBTVwifSxcbiAgICAgIHtocmVmOiBcIi9jb250YWN0XCIsIG5hbWU6IFwiQ09OVEFDVFwifVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudU1vYmlsZVwiID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nb1wiPlxuICAgICAgICAgIDxJbWcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm5hdl9iYXJfbW9iaWxlXCI+ICAgICAgIFxuICAgICAgICAgIDxCdXJnZXIgLz4gXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sb2dvXCI+XG4gICAgICAgICAgPEltZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51XCI+XG5cblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGxpbmtzLm1hcChsaW5rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPExpbmsgYWN0aXZlQ2xhc3NOYW1lPVwiYWN0aXZlXCIgaHJlZj17bGluay5ocmVmfSBhcz17IHByb2Nlc3MuZW52LkJBQ0tFTkRfVVJMICsgbGluay5ocmVmfSBrZXk9e2xpbmsubmFtZX0+XG4gICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJsaW5rXCI+e2xpbmsubmFtZX08L2E+XG4gICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICApfSlcbiAgICAgICAgICB9XG4gICAgICAgICAgXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC8qIEZvciBtb2JpbGUgcGhvbmVzOiAqL1xuICAgICAgICBcbiAgICAgICAgICAubWVudU1vYmlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgICAgIGhlaWdodDogODBweDtcblxuICAgICAgICB9XG4gICAgICAgIC5uYXZfYmFyX21vYmlsZXtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIGRlc2t0b3A6ICovXG4gICAgICAgIC5tZW51IHJpZ2h0e3dpZHRoOiA3NSU7fVxuICAgICAgICAubmF2X2xvZ28gbGVmdHsyNSU7fVxuICAgICAgICAubWVudU1vYmlsZSB7ZGlzcGxheTogbm9uZTt9XG4gICAgICBcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0NDQxNDE7XG4gXG4gICAgICB9XG4gICAgICAubmF2X2xvZ28ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgICAubWVudSB7ICBcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgLmxpbmsge1xuICAgICAgICBjb2xvcjogIzQ0NDE0MTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogT3JiaXRyb247XG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.a8587155a54683d81230.hot-update.js.map