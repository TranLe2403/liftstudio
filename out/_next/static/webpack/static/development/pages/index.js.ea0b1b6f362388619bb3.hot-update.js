webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/Nav/index.js":
/*!*********************************!*\
  !*** ./components/Nav/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Navigation; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ "./node_modules/next-server/dist/lib/dynamic.js");
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/lehuyentran/SumWebPro/components/Nav/index.js";




var _dynamic = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js", 7));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! react-burger-menu */ "./node_modules/react-burger-menu/lib/BurgerMenu.js")];
    },
    modules: ['react-burger-menu']
  }
}),
    Menu = _dynamic.slide;

function Navigation() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Menu, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "home",
    className: "menu-item",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "games",
    className: "menu-item",
    href: "/games",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, "Our Games"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "team",
    className: "menu-item",
    href: "/team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, "Our Team"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "contact",
    className: "menu-item",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, "Contact"));
}

/***/ }),

/***/ "./node_modules/next-server/dist/lib/dynamic.js":
/*!******************************************************!*\
  !*** ./node_modules/next-server/dist/lib/dynamic.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

var _keys = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js"));

var _assign = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js"));

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

Object.defineProperty(exports, "__esModule", {
  value: true
});

var react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var loadable_1 = __importDefault(__webpack_require__(/*! ./loadable */ "./node_modules/next-server/dist/lib/loadable.js"));

var isServerSide = typeof window === 'undefined';

function noSSR(LoadableInitializer, loadableOptions) {
  // Removing webpack and modules means react-loadable won't try preloading
  delete loadableOptions.webpack;
  delete loadableOptions.modules; // This check is neccesary to prevent react-loadable from initializing on the server

  if (!isServerSide) {
    return LoadableInitializer(loadableOptions);
  } // This will only be rendered on the server side


  return function () {
    return react_1.default.createElement(loadableOptions.loading, {
      error: null,
      isLoading: true,
      pastDelay: false,
      timedOut: false
    });
  };
}

exports.noSSR = noSSR;

function DefaultLoading() {
  return react_1.default.createElement("p", null, "loading...");
}

function dynamic(dynamicOptions, options) {
  var loadableFn = loadable_1.default;
  var loadableOptions = {
    // A loading component is not required, so we default it
    loading: function loading(_ref) {
      var error = _ref.error,
          isLoading = _ref.isLoading,
          pastDelay = _ref.pastDelay;
      if (!pastDelay) return null;

      if (true) {
        if (isLoading) {
          return react_1.default.createElement(DefaultLoading, null);
        }

        if (error) {
          return react_1.default.createElement("p", null, error.message, react_1.default.createElement("br", null), error.stack);
        }
      }

      return react_1.default.createElement(DefaultLoading, null);
    }
  }; // Support for direct import(), eg: dynamic(import('../hello-world'))
  // Note that this is only kept for the edge case where someone is passing in a promise as first argument
  // The react-loadable babel plugin will turn dynamic(import('../hello-world')) into dynamic(() => import('../hello-world'))
  // To make sure we don't execute the import without rendering first

  if (typeof dynamicOptions.then === 'function') {
    loadableOptions.loader = function () {
      return dynamicOptions;
    }; // Support for having import as a function, eg: dynamic(() => import('../hello-world'))

  } else if (typeof dynamicOptions === 'function') {
    loadableOptions.loader = dynamicOptions; // Support for having first argument being options, eg: dynamic({loader: import('../hello-world')})
  } else if (typeof dynamicOptions === 'object') {
    loadableOptions = (0, _assign.default)({}, loadableOptions, dynamicOptions);
  } // Support for passing options, eg: dynamic(import('../hello-world'), {loading: () => <p>Loading something</p>})


  loadableOptions = (0, _assign.default)({}, loadableOptions, options); // Support for `render` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })

  if (dynamicOptions.render) {
    loadableOptions.render = function (loaded, props) {
      return dynamicOptions.render(props, loaded);
    };
  } // Support for `modules` when using a mapping, eg: `dynamic({ modules: () => {return {HelloWorld: import('../hello-world')}, render(props, loaded) {} } })


  if (dynamicOptions.modules) {
    loadableFn = loadable_1.default.Map;
    var loadModules = {};
    var modules = dynamicOptions.modules();
    (0, _keys.default)(modules).forEach(function (key) {
      var value = modules[key];

      if (typeof value.then === 'function') {
        loadModules[key] = function () {
          return value.then(function (mod) {
            return mod.default || mod;
          });
        };

        return;
      }

      loadModules[key] = value;
    });
    loadableOptions.loader = loadModules;
  } // coming from build/babel/plugins/react-loadable-plugin.js


  if (loadableOptions.loadableGenerated) {
    loadableOptions = (0, _assign.default)({}, loadableOptions, loadableOptions.loadableGenerated);
    delete loadableOptions.loadableGenerated;
  } // support for disabling server side rendering, eg: dynamic(import('../hello-world'), {ssr: false})


  if (typeof loadableOptions.ssr === 'boolean') {
    if (!loadableOptions.ssr) {
      delete loadableOptions.ssr;
      return noSSR(loadableFn, loadableOptions);
    }

    delete loadableOptions.ssr;
  }

  return loadableFn(loadableOptions);
}

exports.default = dynamic;

/***/ }),

/***/ "./node_modules/react-burger-menu/lib/BurgerIcon.js":
false,

/***/ "./node_modules/react-burger-menu/lib/BurgerMenu.js":
false,

/***/ "./node_modules/react-burger-menu/lib/CrossIcon.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menuFactory.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/bubble.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/elastic.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/fallDown.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/push.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/pushRotate.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/scaleDown.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/scaleRotate.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/slide.js":
false,

/***/ "./node_modules/react-burger-menu/lib/menus/stack.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/AutoFocusMixin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/BeforeInputEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/CSSProperty.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/CSSPropertyOperations.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/CallbackQueue.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ChangeEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ClientReactRootIndex.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/DOMChildrenOperations.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/DOMProperty.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/DOMPropertyOperations.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/Danger.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/DefaultEventPluginOrder.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EnterLeaveEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventConstants.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventListener.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventPluginHub.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventPluginRegistry.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventPluginUtils.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/EventPropagators.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ExecutionEnvironment.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/FallbackCompositionState.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/HTMLDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/LinkedValueUtils.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/LocalEventTrapMixin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/MobileSafariClickEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/Object.assign.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/PooledClass.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/React.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactBrowserComponentMixin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactBrowserEventEmitter.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactChildReconciler.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactChildren.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactClass.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactComponentBrowserEnvironment.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactComponentEnvironment.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactCompositeComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactContext.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactCurrentOwner.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOM.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMButton.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMForm.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMIDOperations.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMIframe.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMImg.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMInput.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMOption.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMSelect.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMSelection.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMTextComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDOMTextarea.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDefaultBatchingStrategy.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDefaultInjection.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDefaultPerf.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactDefaultPerfAnalysis.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactElement.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactElementValidator.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactEmptyComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactErrorUtils.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactEventEmitterMixin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactEventListener.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactFragment.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactInjection.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactInputSelection.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactInstanceHandles.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactInstanceMap.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactLifeCycle.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactMarkupChecksum.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactMount.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactMultiChild.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactMultiChildUpdateTypes.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactNativeComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactOwner.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactPerf.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactPropTypeLocationNames.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactPropTypeLocations.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactPropTypes.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactPutListenerQueue.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactReconcileTransaction.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactReconciler.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactRef.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactRootIndex.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactServerRendering.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactServerRenderingTransaction.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactUpdateQueue.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ReactUpdates.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SVGDOMPropertyConfig.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SelectEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ServerReactRootIndex.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SimpleEventPlugin.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticClipboardEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticCompositionEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticDragEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticFocusEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticInputEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticKeyboardEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticMouseEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticTouchEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticUIEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/SyntheticWheelEvent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/Transaction.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/ViewportMetrics.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/accumulateInto.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/adler32.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/camelize.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/camelizeStyleName.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/containsNode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/createArrayFromMixed.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/createFullPageComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/createNodesFromMarkup.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/dangerousStyleValue.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/emptyFunction.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/emptyObject.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/escapeTextContentForBrowser.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/findDOMNode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/flattenChildren.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/focusNode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/forEachAccumulated.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getActiveElement.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getEventCharCode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getEventKey.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getEventModifierState.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getEventTarget.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getIteratorFn.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getMarkupWrap.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getNodeForCharacterOffset.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getReactRootElementInContainer.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getTextContentAccessor.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/getUnboundedScrollPosition.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/hyphenate.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/hyphenateStyleName.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/instantiateReactComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/invariant.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/isEventSupported.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/isNode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/isTextInputElement.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/isTextNode.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/keyMirror.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/keyOf.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/mapObject.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/memoizeStringOnly.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/onlyChild.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/performance.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/performanceNow.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/quoteAttributeValueForBrowser.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/setInnerHTML.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/setTextContent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/shallowEqual.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/shouldUpdateReactComponent.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/toArray.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/traverseAllChildren.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/lib/warning.js":
false,

/***/ "./node_modules/react-burger-menu/node_modules/react/react.js":
false,

/***/ "./node_modules/react-kit/appendVendorPrefix.js":
false,

/***/ "./node_modules/react-kit/builtinStyle.js":
false,

/***/ "./node_modules/react-kit/getVendorPropertyName.js":
false,

/***/ "./node_modules/snapsvg/dist/snap.svg.js":
false

})
//# sourceMappingURL=index.js.ea0b1b6f362388619bb3.hot-update.js.map