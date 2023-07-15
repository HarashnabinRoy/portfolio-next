/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/shared/Footer/colorContext.js":
/*!**************************************************!*\
  !*** ./components/shared/Footer/colorContext.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorContext\": () => (/* binding */ ColorContext),\n/* harmony export */   \"ColorProvider\": () => (/* binding */ ColorProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ColorContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nconst ColorProvider = ({ children  })=>{\n    // const [defaultColor, setDefaultColor] = useState();\n    const { 0: color , 1: setColor  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#2bbc8a\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const storedStateValue = localStorage.getItem(\"color\");\n        if (storedStateValue) {\n            setColor(storedStateValue);\n        }\n    }, []);\n    const updateColor = (newColor)=>{\n        setColor(newColor);\n        localStorage.setItem(\"color\", newColor);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorContext.Provider, {\n        value: {\n            color,\n            updateColor\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/components/shared/Footer/colorContext.js\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, undefined);\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXIvY29sb3JDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQThFO0FBRXZFLE1BQU1LLFlBQVksaUJBQUdKLG9EQUFhLEVBQUUsQ0FBQztBQUVyQyxNQUFNSyxhQUFhLEdBQUcsQ0FBQyxFQUFFQyxRQUFRLEdBQUUsR0FBSztJQUM3QyxzREFBc0Q7SUFDdEQsTUFBTSxFQU5SLEdBTVNDLEtBQUssR0FOZCxHQU1nQkMsUUFBUSxNQUFJTiwrQ0FBUSxDQUFDLFNBQVMsQ0FBQztJQUU3Q0MsZ0RBQVMsQ0FBQyxJQUFNO1FBQ2QsTUFBTU0sZ0JBQWdCLEdBQUdDLFlBQVksQ0FBQ0MsT0FBTyxDQUFDLE9BQU8sQ0FBQztRQUN0RCxJQUFJRixnQkFBZ0IsRUFBRTtZQUNwQkQsUUFBUSxDQUFDQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQzVCO0tBQ0YsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUdQLE1BQU1HLFdBQVcsR0FBRyxDQUFDQyxRQUFRLEdBQUs7UUFDaENMLFFBQVEsQ0FBQ0ssUUFBUSxDQUFDLENBQUM7UUFDbkJILFlBQVksQ0FBQ0ksT0FBTyxDQUFDLE9BQU8sRUFBRUQsUUFBUSxDQUFDLENBQUM7S0FDekM7SUFFRCxxQkFDRSw4REFBQ1QsWUFBWSxDQUFDVyxRQUFRO1FBQUNDLEtBQUssRUFBRTtZQUFFVCxLQUFLO1lBQUVLLFdBQVc7U0FBRTtrQkFDakROLFFBQVE7Ozs7O2lCQUNhLENBQ3hCO0NBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3BvcnRmb2xpby8uL2NvbXBvbmVudHMvc2hhcmVkL0Zvb3Rlci9jb2xvckNvbnRleHQuanM/YzhkYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgY3JlYXRlQ29udGV4dCwgdXNlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGNvbnN0IENvbG9yQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcblxuZXhwb3J0IGNvbnN0IENvbG9yUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XG4gIC8vIGNvbnN0IFtkZWZhdWx0Q29sb3IsIHNldERlZmF1bHRDb2xvcl0gPSB1c2VTdGF0ZSgpO1xuICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKCcjMmJiYzhhJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBzdG9yZWRTdGF0ZVZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbG9yJyk7XG4gICAgaWYgKHN0b3JlZFN0YXRlVmFsdWUpIHtcbiAgICAgIHNldENvbG9yKHN0b3JlZFN0YXRlVmFsdWUpO1xuICAgIH1cbiAgfSwgW10pO1xuXG5cbiAgY29uc3QgdXBkYXRlQ29sb3IgPSAobmV3Q29sb3IpID0+IHtcbiAgICBzZXRDb2xvcihuZXdDb2xvcik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NvbG9yJywgbmV3Q29sb3IpO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPENvbG9yQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBjb2xvciwgdXBkYXRlQ29sb3IgfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9Db2xvckNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59OyJdLCJuYW1lcyI6WyJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJ1c2VDb250ZXh0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJDb2xvckNvbnRleHQiLCJDb2xvclByb3ZpZGVyIiwiY2hpbGRyZW4iLCJjb2xvciIsInNldENvbG9yIiwic3RvcmVkU3RhdGVWYWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ1cGRhdGVDb2xvciIsIm5ld0NvbG9yIiwic2V0SXRlbSIsIlByb3ZpZGVyIiwidmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/shared/Footer/colorContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core */ \"@fortawesome/fontawesome-svg-core\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-svg-core/styles.css */ \"./node_modules/@fortawesome/fontawesome-svg-core/styles.css\");\n/* harmony import */ var _fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_svg_core_styles_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_shared_Footer_colorContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/shared/Footer/colorContext */ \"./components/shared/Footer/colorContext.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__]);\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n_fortawesome_fontawesome_svg_core__WEBPACK_IMPORTED_MODULE_3__.config.autoAddCss = false;\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preconnect\",\n                href: \"https://fonts.googleapis.com\"\n            }, void 0, false, {\n                fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                rel: \"preconnect\",\n                href: \"https://fonts.gstatic.com\"\n            }, void 0, false, {\n                fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                href: \"https://fonts.googleapis.com/css2?family=Lobster&family=Oxygen+Mono&display=swap\",\n                rel: \"stylesheet\"\n            }, void 0, false, {\n                fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                    children: \"Harashnabin Roy | Personal Website & Portfolio\"\n                }, void 0, false, {\n                    fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                    lineNumber: 17,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_shared_Footer_colorContext__WEBPACK_IMPORTED_MODULE_5__.ColorProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 7\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/harashnabinroy/Desktop/Dev Stuff/portfolio-next/pages/_app.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBNkI7QUFDQztBQUM0QjtBQUNMO0FBQ3JEQyxnRkFBaUIsR0FBRyxLQUFLO0FBQ2dEO0FBRXpFLFNBQVNHLEtBQUssQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsR0FBRSxFQUFFO0lBQ3ZDLHFCQUNFLDhEQUFDQyxLQUFHOzswQkFFRiw4REFBQ0MsTUFBSTtnQkFBQ0MsR0FBRyxFQUFDLFlBQVk7Z0JBQUNDLElBQUksRUFBQyw4QkFBOEI7Ozs7O29CQUFJOzBCQUM5RCw4REFBQ0YsTUFBSTtnQkFBQ0MsR0FBRyxFQUFDLFlBQVk7Z0JBQUNDLElBQUksRUFBQywyQkFBMkI7Ozs7O29CQUFFOzBCQUN6RCw4REFBQ0YsTUFBSTtnQkFBQ0UsSUFBSSxFQUFDLGtGQUFrRjtnQkFBQ0QsR0FBRyxFQUFDLFlBQVk7Ozs7O29CQUFHOzBCQUVqSCw4REFBQ1Qsa0RBQUk7MEJBQ0gsNEVBQUNXLE9BQUs7OEJBQUMsZ0RBQThDOzs7Ozt3QkFBUTs7Ozs7b0JBQ3hEOzBCQUNQLDhEQUFDUixpRkFBYTswQkFDZCw0RUFBQ0UsU0FBUztvQkFBRSxHQUFHQyxTQUFTOzs7Ozt3QkFBSTs7Ozs7b0JBQ1o7Ozs7OztZQUNaLENBQ047Q0FDSDtBQUVELGlFQUFlRixLQUFLLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wb3J0Zm9saW8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0ICcuLi9zdHlsZXMvZ2xvYmFscy5jc3MnXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZm9udGF3ZXNvbWUtc3ZnLWNvcmUnXG5pbXBvcnQgJ0Bmb3J0YXdlc29tZS9mb250YXdlc29tZS1zdmctY29yZS9zdHlsZXMuY3NzJ1xuY29uZmlnLmF1dG9BZGRDc3MgPSBmYWxzZVxuaW1wb3J0IHsgQ29sb3JQcm92aWRlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL3NoYXJlZC9Gb290ZXIvY29sb3JDb250ZXh0XCI7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICBcbiAgICAgIDxsaW5rIHJlbD1cInByZWNvbm5lY3RcIiBocmVmPVwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbVwiICAvPlxuICAgICAgPGxpbmsgcmVsPVwicHJlY29ubmVjdFwiIGhyZWY9XCJodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tXCIvPlxuICAgICAgPGxpbmsgaHJlZj1cImh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TG9ic3RlciZmYW1pbHk9T3h5Z2VuK01vbm8mZGlzcGxheT1zd2FwXCIgcmVsPVwic3R5bGVzaGVldFwiIC8+ICAgICAgXG4gICAgICBcbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+SGFyYXNobmFiaW4gUm95IHwgUGVyc29uYWwgV2Vic2l0ZSAmIFBvcnRmb2xpbzwvdGl0bGU+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8Q29sb3JQcm92aWRlcj5cbiAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgICAgIDwvQ29sb3JQcm92aWRlcj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHA7XG4iXSwibmFtZXMiOlsiSGVhZCIsImNvbmZpZyIsImF1dG9BZGRDc3MiLCJDb2xvclByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInRpdGxlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./node_modules/@fortawesome/fontawesome-svg-core/styles.css":
/*!*******************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-svg-core/styles.css ***!
  \*******************************************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@fortawesome/fontawesome-svg-core":
/*!****************************************************!*\
  !*** external "@fortawesome/fontawesome-svg-core" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@fortawesome/fontawesome-svg-core");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();