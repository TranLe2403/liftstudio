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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(open),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      openButton = _useState2[0],
      setOpenButton = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(color ? color : '#F1EBEB'),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 1),
      colorButton = _useState4[0];
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
      lineNumber: 14
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    onClick: Onclick,
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line top",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line middle",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a.dynamic([["3698095008", [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none']]]) + " " + "line bottom",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    id: "3698095008",
    dynamic: [colorButton, openButton ? 'rotate(45deg)' : 'none', openButton ? 0 : 1, openButton ? 'translateX(-16)' : 'none', openButton ? 'translateX(-1px) rotate(-45deg)' : 'none'],
    __self: this
  }, ".button.__jsx-style-dynamic-selector{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;padding:4px;}.line.__jsx-style-dynamic-selector{height:2px;width:35px;background-color:".concat(colorButton, ";-webkit-transition:all 0.2s ease;transition:all 0.2s ease;}.top.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";transform:").concat(openButton ? 'rotate(45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-bottom:10px;}.middle.__jsx-style-dynamic-selector{opacity:").concat(openButton ? 0 : 1, ";-webkit-transform:").concat(openButton ? 'translateX(-16)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-16)' : 'none', ";transform:").concat(openButton ? 'translateX(-16)' : 'none', ";}.bottom.__jsx-style-dynamic-selector{-webkit-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-ms-transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";transform:").concat(openButton ? 'translateX(-1px) rotate(-45deg)' : 'none', ";-webkit-transform-origin:top left;-ms-transform-origin:top left;transform-origin:top left;margin-top:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQmEsQUFHa0MsQUFRRixBQU00QixBQUtGLEFBSUUsV0FkNUIsV0FDbUMsZUFVUCwrQkFUZCxNQVZILG9EQVcxQixHQUc4QixBQVNBLHVCQXRCSCxjQW1CM0IscURBTHVCLEFBU0gsZ0JBQ3BCLEdBVEEsYUFkdUIsNkZBQ0osZUFDSCxZQUNaIiwiZmlsZSI6Ii9Vc2Vycy9sZWh1eWVudHJhbi9TdW1XZWJQcm8vY29tcG9uZW50cy9CZ01lbnUvTWVudUJ1dHRvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiAgaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXG5cbiAgZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTWVudUJ1dHRvbiAoe29wZW4sIGNvbG9yLCBPbkNsaWNrfSkge1xuICAgIGNvbnN0IFtvcGVuQnV0dG9uLCBzZXRPcGVuQnV0dG9uXSA9IHVzZVN0YXRlKG9wZW4pXG4gICAgY29uc3QgW2NvbG9yQnV0dG9uXSA9IHVzZVN0YXRlKGNvbG9yID8gY29sb3IgOiAnI0YxRUJFQicgKVxuICAgIC8qY29uc3QgY29tcG9uZW50V2lsbFJlY2VpdmVQcm9wcyA9IG9wZW4gPT4ge1xuICAgICAgICBvcGVuICE9PSBvcGVuQnV0dG9uID8gb3BlbiA6IG51bGxcbiAgICB9Ki9cbiAgICBjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcbiAgICAgICAgc2V0T3BlbkJ1dHRvbighb3BlbkJ1dHRvbilcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2xodHR0JylcbiAgICByZXR1cm4gKFxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XG4gICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uXCIgb25DbGljayA9IHtPbmNsaWNrfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZSA9XCJsaW5lIHRvcFwiPjwvZGl2PiAgICAgICBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxpbmUgbWlkZGxlXCIvPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGluZSBib3R0b21cIi8+XG4gICAgICAgICAgICA8L2Rpdj4gXG4gICAgICAgICAgIDxzdHlsZSBqc3g+XG4gICAgICAgICAgICB7YFxuICAgICAgICAgICAgICAgIC5idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAubGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMzVweDtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtjb2xvckJ1dHRvbn07IFxuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAudG9wIHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW5CdXR0b24gPyAncm90YXRlKDQ1ZGVnKScgOiAnbm9uZSd9O1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiB0b3AgbGVmdDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLm1pZGRsZSB7XG4gICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICR7b3BlbkJ1dHRvbiA/IDAgOiAxfTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAke29wZW5CdXR0b24gPyAndHJhbnNsYXRlWCgtMTYpJyA6ICdub25lJ307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC5ib3R0b20ge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06ICR7b3BlbkJ1dHRvbiA/ICd0cmFuc2xhdGVYKC0xcHgpIHJvdGF0ZSgtNDVkZWcpJyA6ICdub25lJ307XG4gICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBgfVxuICAgICAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cbiAgICApXG4gIH0iXX0= */\n/*@ sourceURL=/Users/lehuyentran/SumWebPro/components/BgMenu/MenuButton.js */")));
}

/***/ })

})
//# sourceMappingURL=index.js.a84221948cd774101781.hot-update.js.map