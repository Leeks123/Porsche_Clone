module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/ModelSpecific/ModelBoard/modal.css":
/*!*******************************************************!*\
  !*** ./components/ModelSpecific/ModelBoard/modal.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL2NvbXBvbmVudHMvTW9kZWxTcGVjaWZpYy9Nb2RlbEJvYXJkL21vZGFsLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ModelSpecific/ModelBoard/modal.css\n");

/***/ }),

/***/ "./node_modules/antd/dist/antd.css":
/*!*****************************************!*\
  !*** ./node_modules/antd/dist/antd.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9hbnRkL2Rpc3QvYW50ZC5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/antd/dist/antd.css\n");

/***/ }),

/***/ "./node_modules/react-multi-carousel/lib/styles.css":
/*!**********************************************************!*\
  !*** ./node_modules/react-multi-carousel/lib/styles.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuL25vZGVfbW9kdWxlcy9yZWFjdC1tdWx0aS1jYXJvdXNlbC9saWIvc3R5bGVzLmNzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/react-multi-carousel/lib/styles.css\n");

/***/ }),

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_store_configureStore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../redux/store/configureStore */ \"./redux/store/configureStore.js\");\n/* harmony import */ var _components_ModelSpecific_ModelBoard_modal_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ModelSpecific/ModelBoard/modal.css */ \"./components/ModelSpecific/ModelBoard/modal.css\");\n/* harmony import */ var _components_ModelSpecific_ModelBoard_modal_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_ModelSpecific_ModelBoard_modal_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-multi-carousel/lib/styles.css */ \"./node_modules/react-multi-carousel/lib/styles.css\");\n/* harmony import */ var react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel_lib_styles_css__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/leeks/Desktop/Project/Porsche_Clone/pages/_app.tsx\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\nfunction _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\n\n\n\n\nconst App = ({\n  Component,\n  pageProps\n}) => __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 10,\n    columnNumber: 5\n  }\n}, __jsx(\"meta\", {\n  charSet: \"utf-8\",\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 7\n  }\n}), __jsx(\"title\", {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 12,\n    columnNumber: 7\n  }\n}, \"Porsche Clone\")), __jsx(Component, _extends({}, pageProps, {\n  __self: undefined,\n  __source: {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }\n})));\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_redux_store_configureStore__WEBPACK_IMPORTED_MODULE_3__[\"default\"].withRedux(App));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLnRzeD83MjE2Il0sIm5hbWVzIjpbIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIndyYXBwZXIiLCJ3aXRoUmVkdXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTUEsR0FBRyxHQUFHLENBQUM7QUFBRUMsV0FBRjtBQUFhQztBQUFiLENBQUQsS0FDVixtRUFDRSxNQUFDLGdEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FDRTtBQUFNLFNBQU8sRUFBQyxPQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFERixFQUVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsQ0FERixFQUtFLE1BQUMsU0FBRCxlQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsR0FMRixDQURGOztBQVVlQyxrSUFBTyxDQUFDQyxTQUFSLENBQWtCSixHQUFsQixDQUFmIiwiZmlsZSI6Ii4vcGFnZXMvX2FwcC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBQcm9wcyB9IGZyb20gJ25leHQvYXBwJztcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XG5pbXBvcnQgd3JhcHBlciBmcm9tICcuLi9yZWR1eC9zdG9yZS9jb25maWd1cmVTdG9yZSc7XG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvTW9kZWxTcGVjaWZpYy9Nb2RlbEJvYXJkL21vZGFsLmNzcyc7XG5pbXBvcnQgJ3JlYWN0LW11bHRpLWNhcm91c2VsL2xpYi9zdHlsZXMuY3NzJztcblxuY29uc3QgQXBwID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpID0+IChcbiAgPD5cbiAgICA8SGVhZD5cbiAgICAgIDxtZXRhIGNoYXJTZXQ9XCJ1dGYtOFwiIC8+XG4gICAgICA8dGl0bGU+UG9yc2NoZSBDbG9uZTwvdGl0bGU+XG4gICAgPC9IZWFkPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC8+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCB3cmFwcGVyLndpdGhSZWR1eChBcHApO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/reducers/index.js":
/*!*********************************!*\
  !*** ./redux/reducers/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout */ \"./redux/reducers/layout.js\");\n/* harmony import */ var _modelspec__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modelspec */ \"./redux/reducers/modelspec.js\");\n\n\n\n // (이전상태, 액션) => 다음상태\n\nconst rootReducer = (state, action) => {\n  switch (action.type) {\n    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"HYDRATE\"]:\n      return action.payload;\n\n    default:\n      {\n        const combinedReducer = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"combineReducers\"])({\n          layout: _layout__WEBPACK_IMPORTED_MODULE_2__[\"default\"].reducer,\n          modelspec: _modelspec__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reducer\n        });\n        return combinedReducer(state, action);\n      }\n  }\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (rootReducer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9pbmRleC5qcz9lYWY0Il0sIm5hbWVzIjpbInJvb3RSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiSFlEUkFURSIsInBheWxvYWQiLCJjb21iaW5lZFJlZHVjZXIiLCJjb21iaW5lUmVkdWNlcnMiLCJsYXlvdXQiLCJsYXlvdXRTbGljZSIsInJlZHVjZXIiLCJtb2RlbHNwZWMiLCJtb2RlbHNwZWNTbGljZSJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Q0FHQTs7QUFDQSxNQUFNQSxXQUFXLEdBQUcsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEtBQW1CO0FBQ3JDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtDLDBEQUFMO0FBQ0UsYUFBT0YsTUFBTSxDQUFDRyxPQUFkOztBQUNGO0FBQVM7QUFDUCxjQUFNQyxlQUFlLEdBQUdDLHdFQUFlLENBQUM7QUFDdENDLGdCQUFNLEVBQUVDLCtDQUFXLENBQUNDLE9BRGtCO0FBRXRDQyxtQkFBUyxFQUFFQyxrREFBYyxDQUFDRjtBQUZZLFNBQUQsQ0FBdkM7QUFJQSxlQUFPSixlQUFlLENBQUNMLEtBQUQsRUFBUUMsTUFBUixDQUF0QjtBQUNEO0FBVEg7QUFXRCxDQVpEOztBQWNlRiwwRUFBZiIsImZpbGUiOiIuL3JlZHV4L3JlZHVjZXJzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29tYmluZVJlZHVjZXJzIH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCc7XG5pbXBvcnQgeyBIWURSQVRFIH0gZnJvbSAnbmV4dC1yZWR1eC13cmFwcGVyJztcblxuaW1wb3J0IGxheW91dFNsaWNlIGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBtb2RlbHNwZWNTbGljZSBmcm9tICcuL21vZGVsc3BlYyc7XG5cbi8vICjsnbTsoITsg4Htg5wsIOyVoeyFmCkgPT4g64uk7J2M7IOB7YOcXG5jb25zdCByb290UmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcbiAgICBjYXNlIEhZRFJBVEU6XG4gICAgICByZXR1cm4gYWN0aW9uLnBheWxvYWQ7XG4gICAgZGVmYXVsdDoge1xuICAgICAgY29uc3QgY29tYmluZWRSZWR1Y2VyID0gY29tYmluZVJlZHVjZXJzKHtcbiAgICAgICAgbGF5b3V0OiBsYXlvdXRTbGljZS5yZWR1Y2VyLFxuICAgICAgICBtb2RlbHNwZWM6IG1vZGVsc3BlY1NsaWNlLnJlZHVjZXIsXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBjb21iaW5lZFJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCByb290UmVkdWNlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/reducers/index.js\n");

/***/ }),

/***/ "./redux/reducers/layout.js":
/*!**********************************!*\
  !*** ./redux/reducers/layout.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst layoutSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'layout',\n  initialState: {\n    menuOpend: false,\n    windowWidth: 100\n  },\n  reducers: {\n    toggle: state => ({\n      menuOpend: !state.menuOpend\n    }),\n    windowWidthChange: (state, action) => ({\n      windowWidth: action.payload\n    })\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (layoutSlice);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9sYXlvdXQuanM/YWQ2MiJdLCJuYW1lcyI6WyJsYXlvdXRTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsIm1lbnVPcGVuZCIsIndpbmRvd1dpZHRoIiwicmVkdWNlcnMiLCJ0b2dnbGUiLCJzdGF0ZSIsIndpbmRvd1dpZHRoQ2hhbmdlIiwiYWN0aW9uIiwicGF5bG9hZCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQSxNQUFNQSxXQUFXLEdBQUdDLG9FQUFXLENBQUM7QUFDOUJDLE1BQUksRUFBRSxRQUR3QjtBQUU5QkMsY0FBWSxFQUFFO0FBQ1pDLGFBQVMsRUFBRSxLQURDO0FBRVpDLGVBQVcsRUFBRTtBQUZELEdBRmdCO0FBTTlCQyxVQUFRLEVBQUU7QUFDUkMsVUFBTSxFQUFHQyxLQUFELEtBQVk7QUFDbEJKLGVBQVMsRUFBRSxDQUFDSSxLQUFLLENBQUNKO0FBREEsS0FBWixDQURBO0FBSVJLLHFCQUFpQixFQUFFLENBQUNELEtBQUQsRUFBUUUsTUFBUixNQUFvQjtBQUNyQ0wsaUJBQVcsRUFBRUssTUFBTSxDQUFDQztBQURpQixLQUFwQjtBQUpYO0FBTm9CLENBQUQsQ0FBL0I7QUFnQmVYLDBFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvbGF5b3V0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgbGF5b3V0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdsYXlvdXQnLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICBtZW51T3BlbmQ6IGZhbHNlLFxuICAgIHdpbmRvd1dpZHRoOiAxMDAsXG4gIH0sXG4gIHJlZHVjZXJzOiB7XG4gICAgdG9nZ2xlOiAoc3RhdGUpID0+ICh7XG4gICAgICBtZW51T3BlbmQ6ICFzdGF0ZS5tZW51T3BlbmQsXG4gICAgfSksXG4gICAgd2luZG93V2lkdGhDaGFuZ2U6IChzdGF0ZSwgYWN0aW9uKSA9PiAoe1xuICAgICAgd2luZG93V2lkdGg6IGFjdGlvbi5wYXlsb2FkLFxuICAgIH0pLFxuICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGxheW91dFNsaWNlO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/reducers/layout.js\n");

/***/ }),

/***/ "./redux/reducers/modelspec.js":
/*!*************************************!*\
  !*** ./redux/reducers/modelspec.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\nconst modelspecSlice = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"createSlice\"])({\n  name: 'modelspec',\n  initialState: {\n    type: 0,\n    custom: {\n      exterior: '#000000',\n      wheel: '',\n      interior: '#2C2220'\n    }\n  },\n  reducers: {\n    typeChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n      type: action.payload\n    }),\n    exteriorColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n      custom: _objectSpread(_objectSpread({}, state.custom), {}, {\n        exterior: action.payload\n      })\n    }),\n    interiorColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n      custom: _objectSpread(_objectSpread({}, state.custom), {}, {\n        interior: action.payload\n      })\n    }),\n    wheelColorChange: (state, action) => _objectSpread(_objectSpread({}, state), {}, {\n      custom: _objectSpread(_objectSpread({}, state.custom), {}, {\n        wheel: action.payload\n      })\n    })\n  }\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (modelspecSlice);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9yZWR1Y2Vycy9tb2RlbHNwZWMuanM/OGQzMiJdLCJuYW1lcyI6WyJtb2RlbHNwZWNTbGljZSIsImNyZWF0ZVNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsInR5cGUiLCJjdXN0b20iLCJleHRlcmlvciIsIndoZWVsIiwiaW50ZXJpb3IiLCJyZWR1Y2VycyIsInR5cGVDaGFuZ2UiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJleHRlcmlvckNvbG9yQ2hhbmdlIiwiaW50ZXJpb3JDb2xvckNoYW5nZSIsIndoZWVsQ29sb3JDaGFuZ2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUEsY0FBYyxHQUFHQyxvRUFBVyxDQUFDO0FBQ2pDQyxNQUFJLEVBQUUsV0FEMkI7QUFFakNDLGNBQVksRUFBRTtBQUNaQyxRQUFJLEVBQUUsQ0FETTtBQUVaQyxVQUFNLEVBQUU7QUFDTkMsY0FBUSxFQUFFLFNBREo7QUFFTkMsV0FBSyxFQUFFLEVBRkQ7QUFHTkMsY0FBUSxFQUFFO0FBSEo7QUFGSSxHQUZtQjtBQVVqQ0MsVUFBUSxFQUFFO0FBQ1JDLGNBQVUsRUFBRSxDQUFDQyxLQUFELEVBQVFDLE1BQVIscUNBQ1BELEtBRE87QUFFVlAsVUFBSSxFQUFFUSxNQUFNLENBQUNDO0FBRkgsTUFESjtBQUtSQyx1QkFBbUIsRUFBRSxDQUFDSCxLQUFELEVBQVFDLE1BQVIscUNBQ2hCRCxLQURnQjtBQUVuQk4sWUFBTSxrQ0FDRE0sS0FBSyxDQUFDTixNQURMO0FBRUpDLGdCQUFRLEVBQUVNLE1BQU0sQ0FBQ0M7QUFGYjtBQUZhLE1BTGI7QUFZUkUsdUJBQW1CLEVBQUUsQ0FBQ0osS0FBRCxFQUFRQyxNQUFSLHFDQUNoQkQsS0FEZ0I7QUFFbkJOLFlBQU0sa0NBQ0RNLEtBQUssQ0FBQ04sTUFETDtBQUVKRyxnQkFBUSxFQUFFSSxNQUFNLENBQUNDO0FBRmI7QUFGYSxNQVpiO0FBbUJSRyxvQkFBZ0IsRUFBRSxDQUFDTCxLQUFELEVBQVFDLE1BQVIscUNBQ2JELEtBRGE7QUFFaEJOLFlBQU0sa0NBQ0RNLEtBQUssQ0FBQ04sTUFETDtBQUVKRSxhQUFLLEVBQUVLLE1BQU0sQ0FBQ0M7QUFGVjtBQUZVO0FBbkJWO0FBVnVCLENBQUQsQ0FBbEM7QUF1Q2ViLDZFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvcmVkdWNlcnMvbW9kZWxzcGVjLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcblxuY29uc3QgbW9kZWxzcGVjU2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICdtb2RlbHNwZWMnLFxuICBpbml0aWFsU3RhdGU6IHtcbiAgICB0eXBlOiAwLFxuICAgIGN1c3RvbToge1xuICAgICAgZXh0ZXJpb3I6ICcjMDAwMDAwJyxcbiAgICAgIHdoZWVsOiAnJyxcbiAgICAgIGludGVyaW9yOiAnIzJDMjIyMCcsXG4gICAgfSxcbiAgfSxcbiAgcmVkdWNlcnM6IHtcbiAgICB0eXBlQ2hhbmdlOiAoc3RhdGUsIGFjdGlvbikgPT4gKHtcbiAgICAgIC4uLnN0YXRlLFxuICAgICAgdHlwZTogYWN0aW9uLnBheWxvYWQsXG4gICAgfSksXG4gICAgZXh0ZXJpb3JDb2xvckNoYW5nZTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICAuLi5zdGF0ZS5jdXN0b20sXG4gICAgICAgIGV4dGVyaW9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgaW50ZXJpb3JDb2xvckNoYW5nZTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICAuLi5zdGF0ZS5jdXN0b20sXG4gICAgICAgIGludGVyaW9yOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgd2hlZWxDb2xvckNoYW5nZTogKHN0YXRlLCBhY3Rpb24pID0+ICh7XG4gICAgICAuLi5zdGF0ZSxcbiAgICAgIGN1c3RvbToge1xuICAgICAgICAuLi5zdGF0ZS5jdXN0b20sXG4gICAgICAgIHdoZWVsOiBhY3Rpb24ucGF5bG9hZCxcbiAgICAgIH0sXG4gICAgfSksXG4gIH0sXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kZWxzcGVjU2xpY2U7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/reducers/modelspec.js\n");

/***/ }),

/***/ "./redux/store/configureStore.js":
/*!***************************************!*\
  !*** ./redux/store/configureStore.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-redux-wrapper */ \"next-redux-wrapper\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n/* harmony import */ var redux_logger__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux_logger__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reducers */ \"./redux/reducers/index.js\");\n\n\n\n\nconst isDev = true;\n\nconst createStore = () => {\n  const middleware = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"getDefaultMiddleware\"])();\n\n  if (isDev) {\n    middleware.push(redux_logger__WEBPACK_IMPORTED_MODULE_2___default.a);\n  }\n\n  const store = Object(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__[\"configureStore\"])({\n    reducer: _reducers__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n    middleware,\n    devTools: isDev\n  });\n  return store;\n};\n\nconst wrapper = Object(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_1__[\"createWrapper\"])(createStore, {\n  debug: isDev\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (wrapper);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9yZWR1eC9zdG9yZS9jb25maWd1cmVTdG9yZS5qcz80NTdiIl0sIm5hbWVzIjpbImlzRGV2IiwiY3JlYXRlU3RvcmUiLCJtaWRkbGV3YXJlIiwiZ2V0RGVmYXVsdE1pZGRsZXdhcmUiLCJwdXNoIiwibG9nZ2VyIiwic3RvcmUiLCJjb25maWd1cmVTdG9yZSIsInJlZHVjZXIiLCJyb290UmVkdWNlciIsImRldlRvb2xzIiwid3JhcHBlciIsImNyZWF0ZVdyYXBwZXIiLCJkZWJ1ZyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsTUFBTUEsS0FBSyxPQUFYOztBQUNBLE1BQU1DLFdBQVcsR0FBRyxNQUFNO0FBQ3hCLFFBQU1DLFVBQVUsR0FBR0MsNkVBQW9CLEVBQXZDOztBQUNBLE1BQUlILEtBQUosRUFBVztBQUNURSxjQUFVLENBQUNFLElBQVgsQ0FBZ0JDLG1EQUFoQjtBQUNEOztBQUNELFFBQU1DLEtBQUssR0FBR0MsdUVBQWMsQ0FBQztBQUMzQkMsV0FBTyxFQUFFQyxpREFEa0I7QUFFM0JQLGNBRjJCO0FBRzNCUSxZQUFRLEVBQUVWO0FBSGlCLEdBQUQsQ0FBNUI7QUFLQSxTQUFPTSxLQUFQO0FBQ0QsQ0FYRDs7QUFhQSxNQUFNSyxPQUFPLEdBQUdDLHdFQUFhLENBQUNYLFdBQUQsRUFBYztBQUN6Q1ksT0FBSyxFQUFFYjtBQURrQyxDQUFkLENBQTdCO0FBSWVXLHNFQUFmIiwiZmlsZSI6Ii4vcmVkdXgvc3RvcmUvY29uZmlndXJlU3RvcmUuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSwgZ2V0RGVmYXVsdE1pZGRsZXdhcmUgfSBmcm9tICdAcmVkdXhqcy90b29sa2l0JztcbmltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xuaW1wb3J0IGxvZ2dlciBmcm9tICdyZWR1eC1sb2dnZXInO1xuaW1wb3J0IHJvb3RSZWR1Y2VyIGZyb20gJy4uL3JlZHVjZXJzJztcblxuY29uc3QgaXNEZXYgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JztcbmNvbnN0IGNyZWF0ZVN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBtaWRkbGV3YXJlID0gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKTtcbiAgaWYgKGlzRGV2KSB7XG4gICAgbWlkZGxld2FyZS5wdXNoKGxvZ2dlcik7XG4gIH1cbiAgY29uc3Qgc3RvcmUgPSBjb25maWd1cmVTdG9yZSh7XG4gICAgcmVkdWNlcjogcm9vdFJlZHVjZXIsXG4gICAgbWlkZGxld2FyZSxcbiAgICBkZXZUb29sczogaXNEZXYsXG4gIH0pO1xuICByZXR1cm4gc3RvcmU7XG59O1xuXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihjcmVhdGVTdG9yZSwge1xuICBkZWJ1ZzogaXNEZXYsXG59KTtcblxuZXhwb3J0IGRlZmF1bHQgd3JhcHBlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/store/configureStore.js\n");

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi private-next-pages/_app.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.tsx */"./pages/_app.tsx");


/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@reduxjs/toolkit\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmVkdXhqcy90b29sa2l0XCI/Y2NkOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJAcmVkdXhqcy90b29sa2l0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJlZHV4anMvdG9vbGtpdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///@reduxjs/toolkit\n");

/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next-redux-wrapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0LXJlZHV4LXdyYXBwZXJcIj8wMWMyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQtcmVkdXgtd3JhcHBlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next-redux-wrapper\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/head\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIj81ZWYyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6Im5leHQvaGVhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/head\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWR1eC1sb2dnZXJcIj8xYzAyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBIiwiZmlsZSI6InJlZHV4LWxvZ2dlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZHV4LWxvZ2dlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///redux-logger\n");

/***/ })

/******/ });