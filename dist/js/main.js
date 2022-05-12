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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_0__.menu)()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst menu = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow')\r\n    const numberAccord = document.querySelector('.header-contacts__phone-number-accord')\r\n    const number = numberAccord.querySelector('.header-contacts__phone-number')\r\n    const menu = document.querySelector('.popup-dialog-menu')\r\n    const popupRepairTypes = document.querySelector('.popup-repair-types')\r\n\r\n    let isPhone = false\r\n\r\n    const showPhone = () => {\r\n        numberAccord.style.top = '25px'\r\n        number.style.opacity = 1\r\n        arrow.style.transform = 'rotateX(180deg)'\r\n    }\r\n\r\n    const hidePhone = () => {\r\n        numberAccord.style.top = '0px'\r\n        number.style.opacity = 0\r\n        arrow.style.transform = 'rotateX(0)'\r\n    }\r\n\r\n    const showMenu = () => {\r\n        menu.style.transform = 'translate3d(0, 0, 0)'\r\n    }\r\n\r\n    const hideMenu = () => {\r\n        menu.style.transform = ''\r\n    }\r\n\r\n    const scrollSmoothToAnchor = (link, event) => {\r\n        event.preventDefault()\r\n        let element = document.getElementById(link.getAttribute('href').substring(1))\r\n        element.scrollIntoView({ behavior: 'smooth' })\r\n    }\r\n\r\n    const showPopupRepairTypes = () => {\r\n        popupRepairTypes.style.opacity = 0\r\n        popupRepairTypes.style.visibility = 'visible'\r\n\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                popupRepairTypes.style.opacity = progress\r\n            }\r\n        })\r\n    }\r\n\r\n    const hidePopupRepairTypes = () => {\r\n        popupRepairTypes.style.visibility = ''\r\n        popupRepairTypes.style.opacity = ''\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.header-contacts__arrow')) {\r\n            isPhone = !isPhone\r\n\r\n            if (isPhone) {\r\n                showPhone()\r\n            } else {\r\n                hidePhone()\r\n            }\r\n        }\r\n        if (e.target.closest('.menu__icon')) {\r\n            showMenu()\r\n        }\r\n        if (e.target.closest('.close-menu')) {\r\n            hideMenu()\r\n        }\r\n        if (e.target.closest('.menu-link')) {\r\n            if (e.target.closest('.no-overflow')) {\r\n                e.preventDefault()\r\n                hideMenu()\r\n                showPopupRepairTypes()\r\n            } else {\r\n                scrollSmoothToAnchor(e.target, e)\r\n                hideMenu()\r\n            }\r\n        }\r\n        if (e.target.closest('.button-footer')) {\r\n            if (e.target.localName != 'a') {\r\n                scrollSmoothToAnchor(e.target.childNodes[0], e)\r\n            } else {\r\n                scrollSmoothToAnchor(e.target, e)\r\n            }\r\n        }\r\n        if (e.target.closest('.no-overflow')) {\r\n            hideMenu()\r\n        }\r\n        if (e.target.closest('.link-list-repair>a')) {\r\n            showPopupRepairTypes()\r\n        }\r\n        if (e.target.closest('.popup-repair-types>.close')) {\r\n            hidePopupRepairTypes()\r\n        }\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/menu.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;