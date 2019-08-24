webpackHotUpdate("static/development/pages/team.js",{

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
/* harmony import */ var _mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mobileMenu.js */ "./components/mobileMenu.js");
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
    className: "jsx-2427562063",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2427562063" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2427562063" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2427562063" + " " + "nav_logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2427562063" + " " + "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
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
        lineNumber: 29
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      className: "jsx-2427562063" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2427562063",
    __self: this
  }, "@media only screen and (max-width:768px){.menuMobile.jsx-2427562063{width:100%;}.header.jsx-2427562063{display:none;}}.menuMobile.jsx-2427562063{display:none;}.header.jsx-2427562063{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.active.jsx-2427562063{border-bottom:5px solid #444141;}.nav_logo.jsx-2427562063{padding:10px 30px;width:60px;height:60px;}.menu.jsx-2427562063{padding-right:30px;font-weight:1000;}.link.jsx-2427562063{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQUkrQixBQUNELEFBSU4sQUFJRixBQVFtQixBQUlkLEFBS0MsQUFJTCxXQTlCUyxFQUNELEFBS3RCLENBeUJrQixJQVRQLENBS00sVUFKTCxHQUpkLEFBYXVCLElBSm5CLEtBSkosWUFTZ0IsZUFDTyxNQXhCUyw0Q0F5QlgsdUVBeEJBLHNCQXlCTixhQUVmLDBEQTFCMkIseUJBQ2IsWUFDZCIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltZyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlTWVudS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgICB7aHJlZjogXCIvXCIsIG5hbWU6IFwiSE9NRVwifSxcbiAgICAgIHtocmVmOiBcIi9nYW1lc1wiLCBuYW1lOiBcIkdBTUVTXCJ9LFxuICAgICAge2hyZWY6IFwiL3RlYW1cIiwgbmFtZTogXCJURUFNXCJ9LFxuICAgICAge2hyZWY6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDT05UQUNUXCJ9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51TW9iaWxlXCIgPlxuICAgICAgICA8TW9iaWxlLz4gXG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xvZ29cIj5cbiAgICAgICAgICA8SW1nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtsaW5rLmhyZWZ9IGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBsaW5rLmhyZWZ9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICl9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIG1vYmlsZTogKi9cbiAgICAgICAgLm1lbnVNb2JpbGUge3dpZHRoOiAxMDAlfVxuICAgICAgICAuaGVhZGVyIHtkaXNwbGF5OiBub25lO31cbiAgICAgIH0gIFxuICAgICAgICAvKiBGb3IgZGVza3RvcDogKi9cbiAgICAgICAgLm1lbnVNb2JpbGUge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTgyNTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZle1xuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzQ0NDE0MTtcbiBcbiAgICAgIH1cbiAgICAgIC5uYXZfbG9nbyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cbiAgICAgIC5tZW51IHsgIFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAubGluayB7XG4gICAgICAgIGNvbG9yOiAjNDQ0MTQxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcmJpdHJvbjtcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuIl19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=team.js.5e5461d61c41abff6875.hot-update.js.map