"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Navbar.jsx":
/*!***********************************!*\
  !*** ./app/components/Navbar.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst Navbar = ()=>{\n    _s();\n    const [toggle, setToggle] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const [width, setWidth] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"w-[50px]\");\n    const displayNav = async ()=>{\n        if (toggle == false) {\n            setToggle(true);\n            setWidth(\"w-[300px]\");\n        } else {\n            setToggle(false);\n            setWidth(\"w-[50px]\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        onClick: displayNav,\n        className: \"flex-col bg-red-500 hover:cursor-pointer  h-[100vh] z-50 \".concat(width, \" \"),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: displayNav,\n                className: \" left-[10px] p-2 absolute\",\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                className: \" left-[10px] p-2  bg-blue-600 \",\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: displayNav,\n                className: \" left-[10px] p-2 absolute\",\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: displayNav,\n                className: \" left-[10px] p-2 absolute\",\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                onClick: displayNav,\n                className: \" left-[10px] p-2 absolute\",\n                children: \"x\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\shami\\\\Desktop\\\\prj\\\\client\\\\app\\\\components\\\\Navbar.jsx\",\n        lineNumber: 21,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Navbar, \"10rkVOG+ifnyEec1i4q+O82ow/g=\");\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL05hdmJhci5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBRTBCO0FBQ087QUFFakMsTUFBTUUsU0FBUzs7SUFDYixNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0gsK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSSxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFDO0lBRW5DLE1BQU1NLGFBQWE7UUFDakIsSUFBSUosVUFBVSxPQUFPO1lBQ25CQyxVQUFVO1lBQ1ZFLFNBQVM7UUFDWCxPQUFPO1lBQ0xGLFVBQVU7WUFDVkUsU0FBUztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0U7UUFDQ0MsU0FBU0Y7UUFDVEcsV0FBVyw0REFBa0UsT0FBTkwsT0FBTTs7MEJBRTdFLDhEQUFDTTtnQkFBS0YsU0FBU0Y7Z0JBQVlHLFdBQVU7MEJBQTRCOzs7Ozs7MEJBR2pFLDhEQUFDQztnQkFBTUQsV0FBVTswQkFBaUM7Ozs7OzswQkFHbEQsOERBQUNDO2dCQUFLRixTQUFTRjtnQkFBWUcsV0FBVTswQkFBNEI7Ozs7OzswQkFHakUsOERBQUNDO2dCQUFLRixTQUFTRjtnQkFBWUcsV0FBVTswQkFBNEI7Ozs7OzswQkFHakUsOERBQUNDO2dCQUFLRixTQUFTRjtnQkFBWUcsV0FBVTswQkFBNEI7Ozs7Ozs7Ozs7OztBQUt2RTtHQXBDTVI7S0FBQUE7QUFzQ04sK0RBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLmpzeD82MGUxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5cclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgTmF2YmFyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFt0b2dnbGUsIHNldFRvZ2dsZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgW3dpZHRoLCBzZXRXaWR0aF0gPSB1c2VTdGF0ZShcInctWzUwcHhdXCIpO1xyXG5cclxuICBjb25zdCBkaXNwbGF5TmF2ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgaWYgKHRvZ2dsZSA9PSBmYWxzZSkge1xyXG4gICAgICBzZXRUb2dnbGUodHJ1ZSk7XHJcbiAgICAgIHNldFdpZHRoKFwidy1bMzAwcHhdXCIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2V0VG9nZ2xlKGZhbHNlKTtcclxuICAgICAgc2V0V2lkdGgoXCJ3LVs1MHB4XVwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBvbkNsaWNrPXtkaXNwbGF5TmF2fVxyXG4gICAgICBjbGFzc05hbWU9e2BmbGV4LWNvbCBiZy1yZWQtNTAwIGhvdmVyOmN1cnNvci1wb2ludGVyICBoLVsxMDB2aF0gei01MCAke3dpZHRofSBgfVxyXG4gICAgPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtkaXNwbGF5TmF2fSBjbGFzc05hbWU9XCIgbGVmdC1bMTBweF0gcC0yIGFic29sdXRlXCI+XHJcbiAgICAgICAgeFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuICBjbGFzc05hbWU9XCIgbGVmdC1bMTBweF0gcC0yICBiZy1ibHVlLTYwMCBcIj5cclxuICAgICAgICB4XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgICAgPHNwYW4gb25DbGljaz17ZGlzcGxheU5hdn0gY2xhc3NOYW1lPVwiIGxlZnQtWzEwcHhdIHAtMiBhYnNvbHV0ZVwiPlxyXG4gICAgICAgIHhcclxuICAgICAgPC9zcGFuPlxyXG4gICAgICA8c3BhbiBvbkNsaWNrPXtkaXNwbGF5TmF2fSBjbGFzc05hbWU9XCIgbGVmdC1bMTBweF0gcC0yIGFic29sdXRlXCI+XHJcbiAgICAgICAgeFxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgIDxzcGFuIG9uQ2xpY2s9e2Rpc3BsYXlOYXZ9IGNsYXNzTmFtZT1cIiBsZWZ0LVsxMHB4XSBwLTIgYWJzb2x1dGVcIj5cclxuICAgICAgICB4XHJcbiAgICAgIDwvc3Bhbj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiTmF2YmFyIiwidG9nZ2xlIiwic2V0VG9nZ2xlIiwid2lkdGgiLCJzZXRXaWR0aCIsImRpc3BsYXlOYXYiLCJkaXYiLCJvbkNsaWNrIiwiY2xhc3NOYW1lIiwic3BhbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Navbar.jsx\n"));

/***/ })

});