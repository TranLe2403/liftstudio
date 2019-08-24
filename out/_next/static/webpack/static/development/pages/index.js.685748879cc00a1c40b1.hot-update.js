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
      OnClick = _ref.OnClick;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(color ? color : '#F1EBEB'),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 1),
      colorButton = _useState2[0];
  /*const componentWillReceiveProps = open => {
      open !== openButton ? open : null
  }*/


  var handleClick = function handleClick() {
    setOpenButton(!openButton);
  };

  console.log('lhttt');
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: OnClick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["652209601", [colorButton, open ? 'rotate(45deg)' : 'none', open ? 0 : 1, open ? 'translateX(-16)' : 'none', open ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["652209601", [colorButton, open ? 'rotate(45deg)' : 'none', open ? 0 : 1, open ? 'translateX(-16)' : 'none', open ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["652209601", [colorButton, open ? 'rotate(45deg)' : 'none', open ? 0 : 1, open ? 'translateX(-16)' : 'none', open ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["652209601", [colorButton, open ? 'rotate(45deg)' : 'none', open ? 0 : 1, open ? 'translateX(-16)' : 'none', open ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "652209601",
    dynamic: [colorButton, open ? 'rotate(45deg)' : 'none', open ? 0 : 1, open ? 'translateX(-16)' : 'none', open ? 'translateX(-1px) rotate(-45deg)' : 'none'],
    __self: this
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:4px;}.line.__jsx-style-dynamic-selector{height:2px;width:35px;background-color:".concat(colorButton, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}.top.__jsx-style-dynamic-selector{-webkit-transform:").concat(open ? 'rotate(45deg)' : 'none', ";-ms-transform:").concat(open ? 'rotate(45deg)' : 'none', ";transform:").concat(open ? 'rotate(45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-bottom:10px;}.middle.__jsx-style-dynamic-selector{opacity:").concat(open ? 0 : 1, ";-webkit-transform:").concat(open ? 'translateX(-16)' : 'none', ";-ms-transform:").concat(open ? 'translateX(-16)' : 'none', ";transform:").concat(open ? 'translateX(-16)' : 'none', ";}.bottom.__jsx-style-dynamic-selector{-webkit-transform:").concat(open ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-ms-transform:").concat(open ? 'translateX(-1px) rotate(-45deg)' : 'none', ";transform:").concat(open ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFtQmEsQUFHa0MsQUFRRixBQU00QixBQUtGLEFBSUUsV0FkNUIsV0FDbUMsZUFVUCwrQkFUZCxNQVZILG9EQVcxQixHQUc4QixBQVNBLHVCQXRCSCxjQW1CM0IscURBTHVCLEFBU0gsZ0JBQ3BCLEdBVEEsYUFkdUIsNkZBQ0osZUFDSCxZQUNaIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUJ1dHRvbiAoe29wZW4sIGNvbG9yLCBPbkNsaWNrfSkge1xuICAgIGNvbnN0IFtjb2xvckJ1dHRvbl0gPSB1c2VTdGF0ZShjb2xvciA/IGNvbG9yIDogJyNGMUVCRUInIClcbiAgICAvKmNvbnN0IGNvbXBvbmVudFdpbGxSZWNlaXZlUHJvcHMgPSBvcGVuID0+IHtcbiAgICAgICAgb3BlbiAhPT0gb3BlbkJ1dHRvbiA/IG9wZW4gOiBudWxsXG4gICAgfSovXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSAoKSA9PiB7XG4gICAgICAgIHNldE9wZW5CdXR0b24oIW9wZW5CdXR0b24pXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdsaHR0dCcpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxuICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvblwiIG9uQ2xpY2sgPSB7T25DbGlja30+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWUgPVwibGluZSB0b3BcIj48L2Rpdj4gICAgICAgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsaW5lIG1pZGRsZVwiLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgYm90dG9tXCIvPlxuICAgICAgICAgICAgPC9kaXY+IFxuICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAge2BcbiAgICAgICAgICAgICAgICAuYnV0dG9uIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmxpbmUge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDM1cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7Y29sb3JCdXR0b259OyBcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLnRvcCB7XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuID8gJ3JvdGF0ZSg0NWRlZyknIDogJ25vbmUnfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogdG9wIGxlZnQ7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5taWRkbGUge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAke29wZW4gPyAwIDogMX07XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogJHtvcGVuID8gJ3RyYW5zbGF0ZVgoLTE2KScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuYm90dG9tIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW4gPyAndHJhbnNsYXRlWCgtMXB4KSByb3RhdGUoLTQ1ZGVnKScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XG4gICAgKVxuICB9Il19 */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.685748879cc00a1c40b1.hot-update.js.map