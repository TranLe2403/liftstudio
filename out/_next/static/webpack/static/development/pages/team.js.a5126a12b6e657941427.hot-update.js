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
    className: "jsx-598337607",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-598337607" + " " + "menuMobile",
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
    className: "jsx-598337607" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-598337607" + " " + "nav_logo",
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
    className: "jsx-598337607" + " " + "menu",
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
      className: "jsx-598337607" + " " + "link",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, link.name));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "598337607",
    __self: this
  }, "@media only screen and (max-width:768px){.menuMobile.jsx-598337607{width:100% display:block;}.header.jsx-598337607{display:none;}}.menuMobile.jsx-598337607{display:none;}.header.jsx-598337607{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#F9A825;height:80px;}.active.jsx-598337607{border-bottom:5px solid #444141;}.nav_logo.jsx-598337607{padding:10px 30px;width:60px;height:60px;}.menu.jsx-598337607{padding-right:30px;font-weight:1000;}.link.jsx-598337607{color:#444141;margin-right:20px;font-family:Orbitron;font-size:25px;-webkit-text-decoration:none;text-decoration:none;-webkit-letter-spacing:3px;-moz-letter-spacing:3px;-ms-letter-spacing:3px;letter-spacing:3px;padding:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUNrQixBQU15QixBQUVLLEFBSU4sQUFJRixBQVFtQixBQUlkLEFBS0MsQUFJTCxhQTdCUSxBQUt0QixDQXlCa0IsSUFUUCxDQUtNLE1BM0JmLElBdUJVLEdBSmQsQUFhdUIsSUFKbkIsS0FKSixZQVNnQixlQUNPLE1BeEJTLDRDQXlCWCx1RUF4QkEsc0JBeUJOLGFBRWYsMERBMUIyQix5QkFDYixZQUNkIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSW1nIGZyb20gJy4vTG9nbydcbmltcG9ydCBMaW5rIGZyb20gJy4vTGluaydcbmltcG9ydCBNb2JpbGUgZnJvbSAnLi9tb2JpbGVNZW51LmpzJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIZWFkZXIoKSB7XG4gIFxuICBjb25zdCBsaW5rcyA9IFtcbiAgICAgIHtocmVmOiBcIi9cIiwgbmFtZTogXCJIT01FXCJ9LFxuICAgICAge2hyZWY6IFwiL2dhbWVzXCIsIG5hbWU6IFwiR0FNRVNcIn0sXG4gICAgICB7aHJlZjogXCIvdGVhbVwiLCBuYW1lOiBcIlRFQU1cIn0sXG4gICAgICB7aHJlZjogXCIvY29udGFjdFwiLCBuYW1lOiBcIkNPTlRBQ1RcIn1cbiAgXTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1lbnVNb2JpbGVcIiA+XG4gICAgICAgIDxNb2JpbGUvPiBcbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuYXZfbG9nb1wiPlxuICAgICAgICAgIDxJbWcgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWVudVwiPlxuXG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICBsaW5rcy5tYXAobGluayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rIGFjdGl2ZUNsYXNzTmFtZT1cImFjdGl2ZVwiIGhyZWY9e2xpbmsuaHJlZn0gYXM9eyBwcm9jZXNzLmVudi5CQUNLRU5EX1VSTCArIGxpbmsuaHJlZn0ga2V5PXtsaW5rLm5hbWV9PlxuICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibGlua1wiPntsaW5rLm5hbWV9PC9hPlxuICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgKX0pXG4gICAgICAgICAgfVxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAvKiBGb3IgbW9iaWxlOiAqL1xuICAgICAgICAubWVudU1vYmlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCVcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge2Rpc3BsYXk6IG5vbmU7fVxuICAgICAgfSAgXG4gICAgICAgIC8qIEZvciBkZXNrdG9wOiAqL1xuICAgICAgICAubWVudU1vYmlsZSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAuaGVhZGVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjlBODI1O1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmV7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDVweCBzb2xpZCAjNDQ0MTQxO1xuIFxuICAgICAgfVxuICAgICAgLm5hdl9sb2dvIHtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgfVxuICAgICAgLm1lbnUgeyAgXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDAwO1xuICAgICAgICAgIH1cbiAgICAgIC5saW5rIHtcbiAgICAgICAgY29sb3I6ICM0NDQxNDE7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IE9yYml0cm9uO1xuICAgICAgICBmb250LXNpemU6MjVweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuXG4gICAgICB9XG5cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG5cbiAgKVxufVxuXG4iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/Header.js */"));
}

/***/ })

})
//# sourceMappingURL=team.js.a5126a12b6e657941427.hot-update.js.map