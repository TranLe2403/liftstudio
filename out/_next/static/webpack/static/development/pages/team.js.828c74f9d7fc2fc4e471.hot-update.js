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
    className: "jsx-2364900083",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364900083" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364900083" + " " + "nav_logo",
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
    className: "jsx-2364900083" + " " + "nav_bar_mobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_mobileMenu_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364900083" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2364900083" + " " + "nav_logo",
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
    className: "jsx-2364900083" + " " + "menu",
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
      className: "jsx-2364900083" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "2364900083",
    __self: this
  }, ".menuMobile.jsx-2364900083{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.header.jsx-2364900083{display:none;}@media only screen and (min-width:768px){.menu.jsx-2364900083 right.jsx-2364900083{width:75%;}.menuMobile.jsx-2364900083{display:none;}.header.jsx-2364900083{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}}.active.jsx-2364900083{border-bottom:5px solid #444141;}.nav_logo.jsx-2364900083{padding:10px 30px;width:60px;height:60px;}.menu.jsx-2364900083{padding-right:30px;font-weight:1000;}.link.jsx-2364900083{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUtzQixBQVVFLEFBS00sQUFDSSxBQUdaLEFBU21CLEFBSWQsQUFLQyxBQUlMLFVBMUJRLENBZFAsRUFVZixBQUswQixDQTBCUixJQVRQLENBS00sVUFKTCxHQUpkLEFBYXVCLElBSm5CLEtBSkosWUFTZ0IsZUFDTyxNQXpCUyxXQWxCRSxpQ0E0Q2IsdUVBekJBLFdBbEJBLFdBNENOLGFBRWYsMERBM0IyQixXQWxCQSxjQW1CYixXQWxCQSxDQW1CZCxXQWpCRSIsImZpbGUiOiIvVXNlcnMvbGVodXllbnRyYW4vU3VtV2ViUHJvL2NvbXBvbmVudHMvSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEltZyBmcm9tICcuL0xvZ28nXG5pbXBvcnQgTGluayBmcm9tICcuL0xpbmsnXG5pbXBvcnQgTW9iaWxlIGZyb20gJy4vbW9iaWxlTWVudS5qcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSGVhZGVyKCkge1xuICBcbiAgY29uc3QgbGlua3MgPSBbXG4gICAgICB7aHJlZjogXCIvXCIsIG5hbWU6IFwiSE9NRVwifSxcbiAgICAgIHtocmVmOiBcIi9nYW1lc1wiLCBuYW1lOiBcIkdBTUVTXCJ9LFxuICAgICAge2hyZWY6IFwiL3RlYW1cIiwgbmFtZTogXCJURUFNXCJ9LFxuICAgICAge2hyZWY6IFwiL2NvbnRhY3RcIiwgbmFtZTogXCJDT05UQUNUXCJ9XG4gIF07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51TW9iaWxlXCIgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nb1wiPlxuICAgICAgICAgIDxJbWcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lID1cIm5hdl9iYXJfbW9iaWxlXCI+ICAgICAgICBcbiAgICAgICAgICA8TW9iaWxlIC8+IFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nb1wiPlxuICAgICAgICAgIDxJbWcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuXG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaW5rcy5tYXAobGluayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9e2xpbmsuaHJlZn0gYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGxpbmsuaHJlZn0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX0pXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAvKiBGb3IgbW9iaWxlIHBob25lczogKi9cbiAgICAgICAgXG4gICAgICAgICAgLm1lbnVNb2JpbGUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG5cbiAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLyogRm9yIGRlc2t0b3A6ICovXG4gICAgICAgIC5tZW51IHJpZ2h0e3dpZHRoOiA3NSU7fVxuICAgICAgICAubWVudU1vYmlsZSB7ZGlzcGxheTogbm9uZTt9XG4gICAgICBcbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZXtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICM0NDQxNDE7XG4gXG4gICAgICB9XG4gICAgICAubmF2X2xvZ28ge1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICB9XG4gICAgICAubWVudSB7ICBcbiAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDA7XG4gICAgICAgICAgfVxuICAgICAgLmxpbmsge1xuICAgICAgICBjb2xvcjogIzQ0NDE0MTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LWZhbWlseTogT3JiaXRyb247XG4gICAgICAgIGZvbnQtc2l6ZToyNXB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHg7XG5cbiAgICAgIH1cblxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuICApXG59XG5cbiJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=team.js.828c74f9d7fc2fc4e471.hot-update.js.map