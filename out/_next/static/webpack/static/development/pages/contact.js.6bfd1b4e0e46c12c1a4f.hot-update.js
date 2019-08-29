webpackHotUpdate("static/development/pages/contact.js",{

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
    className: "jsx-413368621",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-413368621" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-413368621" + " " + "nav_logo",
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
    className: "jsx-413368621" + " " + "nav_bar_mobile",
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
    className: "jsx-413368621" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-413368621" + " " + "nav_logo",
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
    className: "jsx-413368621" + " " + "menu",
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
      className: "jsx-413368621" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "413368621",
    __self: this
  }, ".menuMobile.jsx-413368621{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.nav_bar_mobile.jsx-413368621{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:10px 30px;}.header.jsx-413368621{display:none;}@media only screen and (min-width:768px){.menu.jsx-413368621 right.jsx-413368621{width:75%;}.nav_logo.jsx-413368621 left.jsx-413368621{25%;}.menuMobile.jsx-413368621{display:none;}.header.jsx-413368621{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.link.jsx-413368621:hover{color:gray;font-style:italic;}}.active.jsx-413368621{border-bottom:5px solid #444141;}.nav_logo.jsx-413368621{padding:10px 30px;width:60px;height:60px;}.menu.jsx-413368621{padding-right:30px;font-weight:1000;}.link.jsx-413368621{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUtzQixBQVNFLEFBU0EsQUFLTSxBQUNKLEFBQ1EsQUFHWixBQU9GLEFBTXFCLEFBSWQsQUFLQyxBQUlMLElBOUJJLE1BREksQ0F0QlAsQUFtQ0csRUFqQmxCLEFBTTBCLENBOEJSLElBVFAsQ0FLTSxVQWRuQixBQVVjLEdBSmQsQUFhdUIsSUFKbkIsS0FKSixZQVNnQixlQUNPLE1BaERHLEFBbUJNLFdBM0JFLGlDQXlEYixrQ0FoREUscUNBbUJGLFdBM0JFLFdBeURSLGFBRWYscUJBbERzQixrQkFHcEIsbUJBZ0J5QixXQTNCRSxjQTRCZixXQTNCRSxDQTRCaEIsV0ExQkUiLCJmaWxlIjoiL1VzZXJzL2xlaHV5ZW50cmFuL1N1bVdlYlByby9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWcgZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL0JnTWVudSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgICB7aHJlZjogXCIvXCIsIG5hbWU6IFwiSE9NRVwifSxcbiAgICAgIHtocmVmOiBcIi9nYW1lc1wiLCBuYW1lOiBcIkdBTUVTXCJ9LFxuICAgICAge2hyZWY6IFwiL3RlYW1cIiwgbmFtZTogXCJURUFNXCJ9LFxuICAgICAge2hyZWY6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDT05UQUNUXCJ9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51TW9iaWxlXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sb2dvXCI+XG4gICAgICAgICAgPEltZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibmF2X2Jhcl9tb2JpbGVcIj4gICAgICAgXG4gICAgICAgICAgPEJ1cmdlciAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xvZ29cIj5cbiAgICAgICAgICA8SW1nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtsaW5rLmhyZWZ9IGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBsaW5rLmhyZWZ9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICl9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gICAgICAgIFxuICAgICAgICAgIC5tZW51TW9iaWxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuXG4gICAgICAgIH1cbiAgICAgICAgLm5hdl9iYXJfbW9iaWxle1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcblxuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgZGVza3RvcDogKi9cbiAgICAgICAgLm1lbnUgcmlnaHR7d2lkdGg6IDc1JTt9XG4gICAgICAgIC5uYXZfbG9nbyBsZWZ0ezI1JTt9XG4gICAgICAgIC5tZW51TW9iaWxlIHtkaXNwbGF5OiBub25lO31cbiAgICAgIFxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTgyNTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuICAgICAgLmxpbms6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiBncmF5O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICB9XG4gIH1cblxuICAgICAgLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0NDQxNDE7XG4gXG4gICAgICB9XG4gICAgICAubmF2X2xvZ28ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgICAubWVudSB7ICBcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgLmxpbmsge1xuICAgICAgICBjb2xvcjogIzQ0NDE0MTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogT3JiaXRyb247XG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=contact.js.6bfd1b4e0e46c12c1a4f.hot-update.js.map