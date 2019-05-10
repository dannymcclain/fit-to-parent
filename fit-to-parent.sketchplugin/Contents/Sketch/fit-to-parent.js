var globalThis = this;
function __skpm_run (key, context) {
  globalThis.context = context;

var exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/fit-to-parent.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/fit-to-parent.js":
/*!******************************!*\
  !*** ./src/fit-to-parent.js ***!
  \******************************/
/*! exports provided: fitToParent, fitToParentWidth, fitToParentHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitToParent", function() { return fitToParent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitToParentWidth", function() { return fitToParentWidth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fitToParentHeight", function() { return fitToParentHeight; });
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sketch */ "sketch");
/* harmony import */ var sketch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sketch__WEBPACK_IMPORTED_MODULE_0__);

var doc = sketch__WEBPACK_IMPORTED_MODULE_0___default.a.getSelectedDocument();
var selectedLayers = doc.selectedLayers;
var selectedCount = selectedLayers.length;
function fitToParent() {
  if (selectedCount !== 1) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\u274C Please select one layer.");
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDDBC Can't fit artboards to parent.");
  } else if (selectedLayers.layers[0].locked === true) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDD12 The layer is locked.");
  } else {
    var myShape = selectedLayers.layers[0];
    var myParentWidth = myShape.parent.frame.width;
    var myParentHeight = myShape.parent.frame.height;
    myShape.frame.x = 0;
    myShape.frame.y = 0;
    myShape.frame.width = myParentWidth;
    myShape.frame.height = myParentHeight;
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('👨‍👦 Fit to parent width & height.');
  }
}
function fitToParentWidth() {
  if (selectedCount !== 1) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\u274C Please select one layer.");
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDDBC Can't fit artboards to parent.");
  } else if (selectedLayers.layers[0].locked === true) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDD12 The layer is locked.");
  } else {
    var myShape = selectedLayers.layers[0];
    var myParentWidth = myShape.parent.frame.width;
    myShape.frame.x = 0;
    myShape.frame.width = myParentWidth;
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('↔️ Fit to parent width.');
  }
}
function fitToParentHeight() {
  if (selectedCount !== 1) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\u274C Please select one layer.");
  } else if (selectedLayers.layers[0].type === 'Artboard') {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDDBC Can't fit artboards to parent.");
  } else if (selectedLayers.layers[0].locked === true) {
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message("\uD83D\uDD12 The layer is locked.");
  } else {
    var myShape = selectedLayers.layers[0];
    var myParentHeight = myShape.parent.frame.height;
    myShape.frame.y = 0;
    myShape.frame.height = myParentHeight;
    sketch__WEBPACK_IMPORTED_MODULE_0___default.a.UI.message('↕️ Fit to parent height.');
  }
}

/***/ }),

/***/ "sketch":
/*!*************************!*\
  !*** external "sketch" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("sketch");

/***/ })

/******/ });
  if (key === 'default' && typeof exports === 'function') {
    exports(context);
  } else {
    exports[key](context);
  }
}
globalThis['fitToParent'] = __skpm_run.bind(this, 'fitToParent');
globalThis['onRun'] = __skpm_run.bind(this, 'default');
globalThis['fitToParentWidth'] = __skpm_run.bind(this, 'fitToParentWidth');
globalThis['fitToParentHeight'] = __skpm_run.bind(this, 'fitToParentHeight')

//# sourceMappingURL=fit-to-parent.js.map