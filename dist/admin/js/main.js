/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./admin.js":
/*!******************!*\
  !*** ./admin.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_admin_getTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/admin/getTypes */ \"./modules/admin/getTypes.js\");\n/* harmony import */ var _modules_admin_repairService__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/admin/repairService */ \"./modules/admin/repairService.js\");\n\r\n\r\n\r\nconst repairService = new _modules_admin_repairService__WEBPACK_IMPORTED_MODULE_1__.RepairService\r\n\r\n;(0,_modules_admin_getTypes__WEBPACK_IMPORTED_MODULE_0__.getTypes)(repairService)\n\n//# sourceURL=webpack:///./admin.js?");

/***/ }),

/***/ "./modules/admin/getTypes.js":
/*!***********************************!*\
  !*** ./modules/admin/getTypes.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getTypes\": () => (/* binding */ getTypes)\n/* harmony export */ });\n/* harmony import */ var _repairService__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repairService */ \"./modules/admin/repairService.js\");\n\r\n\r\nconst getTypes = (repairService) => {\r\n    const select = document.getElementById('typeItem')\r\n\r\n    repairService.getRepair().then(data => {\r\n        let types = []\r\n        data.forEach(item => {\r\n            if (item.type) {\r\n                types.push(item.type)\r\n            }\r\n        })\r\n        types = [...new Set(types)]\r\n\r\n        types.forEach(type => {\r\n            const option = document.createElement('option')\r\n            option.value = type\r\n            option.textContent = type\r\n            select.append(option)\r\n        })\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/admin/getTypes.js?");

/***/ }),

/***/ "./modules/admin/repairService.js":
/*!****************************************!*\
  !*** ./modules/admin/repairService.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"RepairService\": () => (/* binding */ RepairService)\n/* harmony export */ });\nclass RepairService {\r\n\r\n    async getRepair() {\r\n        const res = await fetch('http://localhost:4545/repairs');\r\n        return await res.json();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/admin/repairService.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./admin.js");
/******/ 	
/******/ })()
;