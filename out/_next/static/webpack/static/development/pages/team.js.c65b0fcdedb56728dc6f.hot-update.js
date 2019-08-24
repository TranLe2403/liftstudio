webpackHotUpdate("static/development/pages/team.js",{

/***/ "./components/BgMenu/MenuItem.js":
/*!***************************************!*\
  !*** ./components/BgMenu/MenuItem.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuItem; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js";



function MenuItem(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var handleHover = function handleHover() {
    setHover(!hover);
  };

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3855824329", [hover ? 'gray' : '#fafafa']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3855824329", [hover ? 'gray' : '#fafafa']]]) + " " + "menu_item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onMouseEnter: function onMouseEnter() {
      handleHover;
    },
    onMouseLeave: function onMouseLeave() {
      handleHover;
    },
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3855824329", [hover ? 'gray' : '#fafafa']]]) + " " + "items",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, children), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3855824329", [hover ? 'gray' : '#fafafa']]]) + " " + "line",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3855824329",
    dynamic: [hover ? 'gray' : '#fafafa'],
    __self: this
  }, ".menu_item.__jsx-style-dynamic-selector{-webkit-animation:1s appear-__jsx-style-dynamic-selector forwards;animation:1s appear-__jsx-style-dynamic-selector forwards;}.items.__jsx-style-dynamic-selector{font-size:1.2rem;padding:1rem 0;margin:0 5% cursor:pointer;color:".concat(hover ? 'gray' : '#fafafa', ";-webkit-transition:color 0.2s ease-in-out;transition:color 0.2s ease-in-out;-webkit-animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;animation:0.5s slideIn-__jsx-style-dynamic-selector forwards;}.line.__jsx-style-dynamic-selector{width:90%;height:1px;background-color:gray;margin:0 auto;-webkit-animation:0.5s shrink-__jsx-style-dynamic-selector forwards;animation:0.5s shrink-__jsx-style-dynamic-selector forwards;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JhLEFBR2tELEFBR1osQUFTUCxVQUNDLE9BVEksSUFVTyxXQVJQLFdBU0QsY0FDaUIsRUFUSSxtQ0FDRCw4QkFQdEMsOENBUW9DLGVBUXBDLG1IQVBBIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZW51SXRlbSh7b25DbGljaywgY2hpbGRyZW59KSB7XG4gICAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZShmYWxzZSlcblxuICAgIGNvbnN0IGhhbmRsZUhvdmVyID0gKCkgPT4ge1xuICAgICAgICBzZXRIb3ZlcighaG92ZXIpXG4gICAgfVxuXG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZW51X2l0ZW1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIml0ZW1zXCJcbiAgICAgICAgICAgICAgICAgICAgb25Nb3VzZUVudGVyPXsoKSA9PiB7IGhhbmRsZUhvdmVyIH19XG4gICAgICAgICAgICAgICAgICAgIG9uTW91c2VMZWF2ZT17KCkgPT4geyBoYW5kbGVIb3ZlciB9fVxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtvbkNsaWNrfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZVwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5tZW51X2l0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb246IDFzIGFwcGVhciBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLml0ZW1ze1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbSAwO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgNSVcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogJHtob3Zlcj8gJ2dyYXknOicjZmFmYWZhJ307XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMnMgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogMC41cyBzbGlkZUluIGZvcndhcmRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiA5MCU7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uOiAwLjVzIHNocmluayBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgIClcbn1cbiJdfQ== */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuItem.js */")));
}

/***/ })

})
//# sourceMappingURL=team.js.c65b0fcdedb56728dc6f.hot-update.js.map