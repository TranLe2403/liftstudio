webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/BgMenu/MenuButton.js":
/*!*****************************************!*\
  !*** ./components/BgMenu/MenuButton.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MenuButton; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js";



function MenuButton(_ref) {
  var open = _ref.open,
      color = _ref.color,
      onClick = _ref.onClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(open),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      openButton = _useState2[0],
      setOpenButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(color ? color : '#F1EBEB'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 1),
      colorButton = _useState4[0]; //const componentWillReceiveProps = open => {
  //  open !== openButton ? open : null
  //}


  console.log('lhttt');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: onClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3698095008",
    dynamic: [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none'],
    __self: this
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:4px;}.line.__jsx-style-dynamic-selector{height:2px;width:35px;background-color:".concat(colorButton, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}.top.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-bottom:10px;}.middle.__jsx-style-dynamic-selector{opacity:").concat(openButton ? 0 : 1, ";-webkit-transform:").concat(openButton ? 'translateX(-16)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-16)' : 'none', ";transform:").concat(openButton ? 'translateX(-16)' : 'none', ";}.bottom.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFrQmEsQUFHa0MsQUFRRixBQU00QixBQUtGLEFBSUUsV0FkNUIsV0FDbUMsZUFVUCwrQkFUZCxNQVZILG9EQVcxQixHQUc4QixBQVNBLHVCQXRCSCxjQW1CM0IscURBTHVCLEFBU0gsZ0JBQ3BCLEdBVEEsYUFkdUIsNkZBQ0osZUFDSCxZQUNaIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUJ1dHRvbiAoe29wZW4sIGNvbG9yLCBvbkNsaWNrfSkge1xuICAgIGNvbnN0IFtvcGVuQnV0dG9uLCBzZXRPcGVuQnV0dG9uXSA9IHVzZVN0YXRlKG9wZW4pXG4gICAgY29uc3QgW2NvbG9yQnV0dG9uXSA9IHVzZVN0YXRlKGNvbG9yID8gY29sb3IgOiAnI0YxRUJFQicgKVxuICAgIC8vY29uc3QgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IG9wZW4gPT4ge1xuICAgICAgLy8gIG9wZW4gIT09IG9wZW5CdXR0b24gPyBvcGVuIDogbnVsbFxuICAgIC8vfVxuICAgIFxuICAgIGNvbnNvbGUubG9nKCdsaHR0dCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25cIiBvbkNsaWNrID0ge29uQ2xpY2t9PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lID1cImxpbmUgdG9wXCI+PC9kaXY+ICAgICAgIFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZSBtaWRkbGVcIi8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lIGJvdHRvbVwiLz5cbiAgICAgICAgICAgIDwvZGl2PiBcbiAgICAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgLmJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5saW5lIHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzNXB4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke2NvbG9yQnV0dG9ufTsgXG4gICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC50b3Age1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7b3BlbkJ1dHRvbiA/ICdyb3RhdGUoNDVkZWcpJyA6ICdub25lJ307XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubWlkZGxlIHtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogJHtvcGVuQnV0dG9uID8gMCA6IDF9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7b3BlbkJ1dHRvbiA/ICd0cmFuc2xhdGVYKC0xNiknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmJvdHRvbSB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuQnV0dG9uID8gJ3RyYW5zbGF0ZVgoLTFweCkgcm90YXRlKC00NWRlZyknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGB9XG4gICAgICAgICAgICA8L3N0eWxlPlxuICAgICAgICA8L2Rpdj5cbiAgICApXG4gIH0iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.25a6582f0fc36341328a.hot-update.js.map