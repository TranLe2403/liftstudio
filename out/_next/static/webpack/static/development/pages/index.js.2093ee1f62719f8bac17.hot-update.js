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
    className: "jsx-689791401",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-689791401" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-689791401" + " " + "nav_logo",
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
    className: "jsx-689791401" + " " + "nav_bar_mobile",
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
    className: "jsx-689791401" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-689791401" + " " + "nav_logo",
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
    className: "jsx-689791401" + " " + "menu",
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
      className: "jsx-689791401" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "689791401",
    __self: this
  }, ".menuMobile.jsx-689791401{width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:280px;}.nav_bar_mobile.jsx-689791401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;height:80px;}.header.jsx-689791401{display:none;}@media only screen and (min-width:768px){.menu.jsx-689791401 right.jsx-689791401{width:75%;}.nav_logo.jsx-689791401 left.jsx-689791401{25%;}.menuMobile.jsx-689791401{display:none;}.header.jsx-689791401{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}}.active.jsx-689791401{border-bottom:5px solid #444141;}.nav_logo.jsx-689791401{padding:10px 30px;width:60px;height:60px;}.menu.jsx-689791401{padding-right:30px;font-weight:1000;}.link.jsx-689791401{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUtzQixBQVFFLEFBUUEsQUFLTSxBQUNKLEFBQ1EsQUFHWixBQVNtQixBQUlkLEFBS0MsQUFJTCxJQTFCSSxNQURJLENBcEJVLEVBZ0JoQyxBQU0wQixDQTBCUixJQVRQLENBS00sVUFKTCxHQUpkLEFBYXVCLElBSm5CLEtBSkosWUFTZ0IsZUFDTyxNQTNDRyxBQWtCTSw0Q0EwQlgsUUFuREUsMEJBUUEscUNBa0JGLHNCQTBCTixRQW5EYyxLQXFEN0Isb0JBcERpQixDQU9ELFlBTGQsQUFPQSx5QkFnQnlCLHlCQUNiLFlBQ2QiLCJmaWxlIjoiL1VzZXJzL2xlaHV5ZW50cmFuL1N1bVdlYlByby9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWcgZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IEJ1cmdlciBmcm9tICcuL0JnTWVudSdcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgICB7aHJlZjogXCIvXCIsIG5hbWU6IFwiSE9NRVwifSxcbiAgICAgIHtocmVmOiBcIi9nYW1lc1wiLCBuYW1lOiBcIkdBTUVTXCJ9LFxuICAgICAge2hyZWY6IFwiL3RlYW1cIiwgbmFtZTogXCJURUFNXCJ9LFxuICAgICAge2hyZWY6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDT05UQUNUXCJ9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51TW9iaWxlXCIgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5hdl9sb2dvXCI+XG4gICAgICAgICAgPEltZyAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibmF2X2Jhcl9tb2JpbGVcIj4gICAgICAgXG4gICAgICAgICAgPEJ1cmdlciAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xvZ29cIj5cbiAgICAgICAgICA8SW1nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtsaW5rLmhyZWZ9IGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBsaW5rLmhyZWZ9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICl9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gICAgICAgIFxuICAgICAgICAgIC5tZW51TW9iaWxlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgICAgIGhlaWdodDogMjgwcHg7XG5cbiAgICAgICAgfVxuICAgICAgICAubmF2X2Jhcl9tb2JpbGV7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgZGVza3RvcDogKi9cbiAgICAgICAgLm1lbnUgcmlnaHR7d2lkdGg6IDc1JTt9XG4gICAgICAgIC5uYXZfbG9nbyBsZWZ0ezI1JTt9XG4gICAgICAgIC5tZW51TW9iaWxlIHtkaXNwbGF5OiBub25lO31cbiAgICAgIFxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTgyNTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWN0aXZle1xuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzQ0NDE0MTtcbiBcbiAgICAgIH1cbiAgICAgIC5uYXZfbG9nbyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cbiAgICAgIC5tZW51IHsgIFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAubGluayB7XG4gICAgICAgIGNvbG9yOiAjNDQ0MTQxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcmJpdHJvbjtcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuIl19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=index.js.2093ee1f62719f8bac17.hot-update.js.map