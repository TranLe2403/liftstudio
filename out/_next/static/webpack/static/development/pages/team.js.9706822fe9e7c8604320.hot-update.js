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
    className: "jsx-3532422736",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3532422736" + " " + "menuMobile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3532422736" + " " + "nav_logo",
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
    className: "jsx-3532422736" + " " + "nav_bar_mobile",
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
    className: "jsx-3532422736" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3532422736" + " " + "nav_logo",
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
    className: "jsx-3532422736" + " " + "menu",
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
      className: "jsx-3532422736" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "3532422736",
    __self: this
  }, ".nav_bar_mobile.jsx-3532422736{-webkit-align-self:flex-end;-ms-flex-item-align:end;align-self:flex-end;display:initial;position:absolute;cursor:pointer;}.menuMobile.jsx-3532422736{width:100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.header.jsx-3532422736{display:none;}@media only screen and (min-width:768px){.menu.jsx-3532422736 right.jsx-3532422736{width:75%;}.menuMobile.jsx-3532422736{display:none;}.header.jsx-3532422736{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}}.active.jsx-3532422736{border-bottom:5px solid #444141;}.nav_logo.jsx-3532422736{padding:10px 30px;width:60px;height:60px;}.menu.jsx-3532422736{padding-right:30px;font-weight:1000;}.link.jsx-3532422736{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMENrQixBQUl5QyxBQU9uQixBQVVFLEFBS00sQUFDSSxBQUdaLEFBU21CLEFBSWQsQUFLQyxBQUlMLFVBMUJRLENBZFAsRUFVZixBQUswQixDQTBCUixJQVRQLENBS00sVUFKTCxHQUpkLEFBYXVCLElBSm5CLEtBSkosWUFTZ0IsZUFDTyxJQW5ETyxFQTBCRSxXQWxCRSxHQVBGLGtCQUNILFlBa0RSLEdBaERYLG9FQXVCVyxXQWxCQSxXQTRDTixhQUVmLDBEQTNCMkIsV0FsQkEsY0FtQmIsV0FsQkEsQ0FtQmQsV0FqQkUiLCJmaWxlIjoiL1VzZXJzL2xlaHV5ZW50cmFuL1N1bVdlYlByby9jb21wb25lbnRzL0hlYWRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWcgZnJvbSAnLi9Mb2dvJ1xuaW1wb3J0IExpbmsgZnJvbSAnLi9MaW5rJ1xuaW1wb3J0IE1vYmlsZSBmcm9tICcuL21vYmlsZU1lbnUuanMnXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlYWRlcigpIHtcbiAgXG4gIGNvbnN0IGxpbmtzID0gW1xuICAgICAge2hyZWY6IFwiL1wiLCBuYW1lOiBcIkhPTUVcIn0sXG4gICAgICB7aHJlZjogXCIvZ2FtZXNcIiwgbmFtZTogXCJHQU1FU1wifSxcbiAgICAgIHtocmVmOiBcIi90ZWFtXCIsIG5hbWU6IFwiVEVBTVwifSxcbiAgICAgIHtocmVmOiBcIi9jb250YWN0XCIsIG5hbWU6IFwiQ09OVEFDVFwifVxuICBdO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudU1vYmlsZVwiID5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xvZ29cIj5cbiAgICAgICAgICA8SW1nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJuYXZfYmFyX21vYmlsZVwiPiAgICAgICAgXG4gICAgICAgICAgPE1vYmlsZSAvPiBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVhZGVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmF2X2xvZ29cIj5cbiAgICAgICAgICA8SW1nIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVcIj5cblxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgbGlua3MubWFwKGxpbmsgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGluayBhY3RpdmVDbGFzc05hbWU9XCJhY3RpdmVcIiBocmVmPXtsaW5rLmhyZWZ9IGFzPXsgcHJvY2Vzcy5lbnYuQkFDS0VORF9VUkwgKyBsaW5rLmhyZWZ9IGtleT17bGluay5uYW1lfT5cbiAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImxpbmtcIj57bGluay5uYW1lfTwvYT5cbiAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgICl9KVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLyogRm9yIG1vYmlsZSBwaG9uZXM6ICovXG4gICAgICAgIC5uYXZfYmFyX21vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbml0aWFsO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAubWVudU1vYmlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGOUE4MjU7XG4gICAgICAgIGhlaWdodDogODBweDtcblxuICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgZGVza3RvcDogKi9cbiAgICAgICAgLm1lbnUgcmlnaHR7d2lkdGg6IDc1JTt9XG4gICAgICAgIC5tZW51TW9iaWxlIHtkaXNwbGF5OiBub25lO31cbiAgICAgIFxuICAgICAgLmhlYWRlciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0Y5QTgyNTtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuYWN0aXZle1xuICAgICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzQ0NDE0MTtcbiBcbiAgICAgIH1cbiAgICAgIC5uYXZfbG9nbyB7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcbiAgICAgICAgd2lkdGg6IDYwcHg7XG4gICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgIH1cbiAgICAgIC5tZW51IHsgIFxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICBmb250LXdlaWdodDogMTAwMDtcbiAgICAgICAgICB9XG4gICAgICAubGluayB7XG4gICAgICAgIGNvbG9yOiAjNDQ0MTQxO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBPcmJpdHJvbjtcbiAgICAgICAgZm9udC1zaXplOjI1cHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbiAgICAgICAgcGFkZGluZzogMTBweDtcblxuICAgICAgfVxuXG4gICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuXG4gIClcbn1cblxuIl19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=team.js.9706822fe9e7c8604320.hot-update.js.map