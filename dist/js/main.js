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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_accordion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/accordion */ \"./modules/accordion.js\");\n/* harmony import */ var _modules_formula__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/formula */ \"./modules/formula.js\");\n/* harmony import */ var _modules_formulaMobile__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/formulaMobile */ \"./modules/formulaMobile.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_showHidePopups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/showHidePopups */ \"./modules/showHidePopups.js\");\n/* harmony import */ var _modules_showRepairTypes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/showRepairTypes */ \"./modules/showRepairTypes.js\");\n/* harmony import */ var _modules_sliderReviews__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/sliderReviews */ \"./modules/sliderReviews.js\");\n/* harmony import */ var _modules_sliderTransparency__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sliderTransparency */ \"./modules/sliderTransparency.js\");\n/* harmony import */ var _modules_telMask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/telMask */ \"./modules/telMask.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n(0,_modules_menu__WEBPACK_IMPORTED_MODULE_3__.menu)()\r\n;(0,_modules_showRepairTypes__WEBPACK_IMPORTED_MODULE_5__.showRepairTypes)()\r\n;(0,_modules_showHidePopups__WEBPACK_IMPORTED_MODULE_4__.showHidePopups)()\r\n;(0,_modules_sliderTransparency__WEBPACK_IMPORTED_MODULE_7__.sliderTransparency)()\r\n;(0,_modules_sliderReviews__WEBPACK_IMPORTED_MODULE_6__.sliderReviews)()\r\n;(0,_modules_accordion__WEBPACK_IMPORTED_MODULE_0__.accordion)()\r\n;(0,_modules_telMask__WEBPACK_IMPORTED_MODULE_8__.telMask)()\r\n;(0,_modules_formula__WEBPACK_IMPORTED_MODULE_1__.formula)()\r\n;(0,_modules_formulaMobile__WEBPACK_IMPORTED_MODULE_2__.formulaMobile)()\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/accordion.js":
/*!******************************!*\
  !*** ./modules/accordion.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"accordion\": () => (/* binding */ accordion)\n/* harmony export */ });\nconst accordion = () => {\r\n    const titles = document.querySelectorAll('.title_block')\r\n\r\n    titles.forEach((title) => {\r\n        title.addEventListener('click', (e) => {\r\n            if (e.target.classList.contains('msg-active')) {\r\n                e.target.classList.remove('msg-active')\r\n            } else {\r\n                titles.forEach(item => {\r\n                    item.classList.remove('msg-active')\r\n                })\r\n                e.target.classList.add('msg-active')\r\n            }\r\n        })\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/accordion.js?");

/***/ }),

/***/ "./modules/formula.js":
/*!****************************!*\
  !*** ./modules/formula.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formula\": () => (/* binding */ formula)\n/* harmony export */ });\nconst formula = () => {\r\n    const formulaIcons = document.querySelectorAll('.mobile-hide .formula-item__icon')\r\n\r\n    formulaIcons.forEach(icon => {\r\n        icon.addEventListener('mouseenter', (e) => {\r\n            const inner = e.target.querySelector('.formula-item__icon-inner')\r\n            const text = e.target.querySelector('.formula-item__icon-inner-text')\r\n            const popup = e.target.querySelector('.formula-item-popup')\r\n            const popupText = e.target.querySelector('.formula-item-popup-text')\r\n\r\n            icon.style.width = '82px'\r\n            icon.style.height = '82px'\r\n\r\n            if (popup.getBoundingClientRect().top < 0) {\r\n                popup.style.transformOrigin = '50% 130%'\r\n                popup.style.transform = 'rotateX(180deg)'\r\n                popupText.style.transform = 'rotateX(180deg)'\r\n            }\r\n\r\n            inner.style.opacity = '1'\r\n            text.style.color = '#eeeeee'\r\n            popup.style.visibility = 'visible'\r\n            popup.style.opacity = '1'\r\n            popup.style.zIndex = '100'\r\n\r\n        })\r\n        icon.addEventListener('mouseleave', (e) => {\r\n            const inner = e.target.querySelector('.formula-item__icon-inner')\r\n            const text = e.target.querySelector('.formula-item__icon-inner-text')\r\n            const popup = e.target.querySelector('.formula-item-popup')\r\n            const popupText = e.target.querySelector('.formula-item-popup-text')\r\n\r\n            icon.style = ''\r\n            inner.style = ''\r\n            text.style = ''\r\n            popup.style = ''\r\n            popupText.style = ''\r\n        })\r\n    })\r\n\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/formula.js?");

/***/ }),

/***/ "./modules/formulaMobile.js":
/*!**********************************!*\
  !*** ./modules/formulaMobile.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formulaMobile\": () => (/* binding */ formulaMobile)\n/* harmony export */ });\nconst formulaMobile = () => {\r\n    const sliderBlock = document.querySelector('.formula-slider-wrap')\r\n    const slider = sliderBlock.querySelector('.formula-slider')\r\n    const slides = sliderBlock.querySelectorAll('.formula-slider__slide')\r\n\r\n    let currentSlide = 0\r\n    let deltaX = (document.documentElement.clientWidth / 2) - slider.getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2\r\n\r\n    slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n\r\n    const showPopup = (slide) => {\r\n        const popup = slide.querySelector('.formula-item-popup')\r\n        const inner = slide.querySelector('.formula-item__icon-inner')\r\n        const icon = slide.querySelector('.formula-item__icon')\r\n        icon.style.width = '66px'\r\n        icon.style.height = '66px'\r\n        popup.style.visibility = 'visible'\r\n        popup.style.opacity = '1'\r\n        inner.style.background = 'linear-gradient(90deg, #F48922 0%, #FFB015 100%)'\r\n        inner.style.color = '#eeeeee'\r\n\r\n    }\r\n\r\n    const hidePopup = (slide) => {\r\n        const popup = slide.querySelector('.formula-item-popup')\r\n        const inner = slide.querySelector('.formula-item__icon-inner')\r\n        const icon = slide.querySelector('.formula-item__icon')\r\n        popup.style = ''\r\n        inner.style = ''\r\n        icon.style = ''\r\n    }\r\n\r\n    showPopup(slides[currentSlide])\r\n\r\n    const nextSlide = () => {\r\n        slides[currentSlide].classList.remove('formula-slider__slide-active')\r\n\r\n        hidePopup(slides[currentSlide])\r\n\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n\r\n            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2\r\n\r\n            slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n        }\r\n\r\n        slides[currentSlide].classList.add('formula-slider__slide-active')\r\n\r\n        if (slides[currentSlide].getBoundingClientRect().left + slides[currentSlide].clientWidth > document.documentElement.clientWidth / 2) {\r\n            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2\r\n\r\n            slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n        }\r\n\r\n        showPopup(slides[currentSlide])\r\n    }\r\n\r\n    const prevSlide = () => {\r\n        slides[currentSlide].classList.remove('formula-slider__slide-active')\r\n        hidePopup(slides[currentSlide])\r\n        currentSlide--\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2\r\n            slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n        }\r\n        slides[currentSlide].classList.add('formula-slider__slide-active')\r\n        if (slides[currentSlide].getBoundingClientRect().left < document.documentElement.clientWidth / 2) {\r\n\r\n            deltaX = deltaX + (document.documentElement.clientWidth / 2) - slides[currentSlide].getBoundingClientRect().left - slides[currentSlide].getBoundingClientRect().width / 2\r\n            slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n        }\r\n        showPopup(slides[currentSlide])\r\n    }\r\n\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        if (e.target.closest('.slider-arrow_left-formula')) {\r\n            prevSlide()\r\n        }\r\n        if (e.target.closest('.slider-arrow_right-formula')) {\r\n            nextSlide()\r\n        }\r\n    })\r\n\r\n    window.addEventListener('resize', () => {\r\n        deltaX = (document.documentElement.clientWidth / 2) - sliderBlock.getBoundingClientRect().left - (currentSlide + 1.5) * slides[currentSlide].getBoundingClientRect().width\r\n\r\n        slider.style.transform = 'translateX(' + deltaX + 'px)'\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/formulaMobile.js?");

/***/ }),

/***/ "./modules/helpers.js":
/*!****************************!*\
  !*** ./modules/helpers.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"animate\": () => (/* binding */ animate),\n/* harmony export */   \"scrollBody\": () => (/* binding */ scrollBody)\n/* harmony export */ });\nconst animate = ({ timing, draw, duration }) => {\r\n\r\n    let start = performance.now();\r\n\r\n    requestAnimationFrame(function animate(time) {\r\n        // timeFraction изменяется от 0 до 1\r\n        let timeFraction = (time - start) / duration;\r\n        if (timeFraction > 1) timeFraction = 1;\r\n\r\n        // вычисление текущего состояния анимации\r\n        let progress = timing(timeFraction);\r\n\r\n        draw(progress); // отрисовать её\r\n\r\n        if (timeFraction < 1) {\r\n            requestAnimationFrame(animate);\r\n        }\r\n\r\n    });\r\n}\r\n\r\nconst scrollBody = (check) => {\r\n    if (check) {\r\n        document.body.style.overflow = 'auto'\r\n    } else {\r\n        document.body.style.overflow = 'hidden'\r\n    }\r\n}\n\n//# sourceURL=webpack:///./modules/helpers.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"menu\": () => (/* binding */ menu)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst menu = () => {\r\n    const arrow = document.querySelector('.header-contacts__arrow')\r\n    const numberAccord = document.querySelector('.header-contacts__phone-number-accord')\r\n    const number = numberAccord.querySelector('.header-contacts__phone-number')\r\n    const menu = document.querySelector('.popup-dialog-menu')\r\n    const popupRepairTypes = document.querySelector('.popup-repair-types')\r\n\r\n    let isPhone = false\r\n\r\n    const showPhone = () => {\r\n        numberAccord.style.top = '25px'\r\n        number.style.opacity = 1\r\n        arrow.style.transform = 'rotateX(180deg)'\r\n    }\r\n\r\n    const hidePhone = () => {\r\n        numberAccord.style.top = '0px'\r\n        number.style.opacity = 0\r\n        arrow.style.transform = 'rotateX(0)'\r\n    }\r\n\r\n    const showMenu = () => {\r\n        menu.style.transform = 'translate3d(0, 0, 0)'\r\n    }\r\n\r\n    const hideMenu = () => {\r\n        menu.style.transform = ''\r\n    }\r\n\r\n    const scrollSmoothToAnchor = (link, event) => {\r\n        event.preventDefault()\r\n        let element = document.getElementById(link.getAttribute('href').substring(1))\r\n        element.scrollIntoView({ behavior: 'smooth' })\r\n    }\r\n\r\n    const showPopupRepairTypes = () => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(false)\r\n        popupRepairTypes.style.opacity = 0\r\n        popupRepairTypes.style.visibility = 'visible'\r\n\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                popupRepairTypes.style.opacity = progress\r\n            }\r\n        })\r\n    }\r\n\r\n    const hidePopupRepairTypes = () => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(true)\r\n        popupRepairTypes.style.visibility = ''\r\n        popupRepairTypes.style.opacity = ''\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.header-contacts__arrow')) {\r\n            isPhone = !isPhone\r\n\r\n            if (isPhone) {\r\n                showPhone()\r\n            } else {\r\n                hidePhone()\r\n            }\r\n        }\r\n        if (e.target.closest('.menu__icon')) {\r\n            showMenu()\r\n        }\r\n        if (e.target.closest('.close-menu')) {\r\n            hideMenu()\r\n        }\r\n        if (!e.target.closest('.popup-dialog-menu') && !e.target.closest('.menu__icon')) {\r\n            hideMenu()\r\n        }\r\n        if (e.target.closest('.menu-link')) {\r\n            if (e.target.closest('.no-overflow')) {\r\n                e.preventDefault()\r\n                hideMenu()\r\n                showPopupRepairTypes()\r\n            } else {\r\n                scrollSmoothToAnchor(e.target, e)\r\n                hideMenu()\r\n            }\r\n        }\r\n        if (e.target.closest('.button-footer')) {\r\n            if (e.target.localName != 'a') {\r\n                scrollSmoothToAnchor(e.target.childNodes[0], e)\r\n            } else {\r\n                scrollSmoothToAnchor(e.target, e)\r\n            }\r\n        }\r\n        if (e.target.closest('.no-overflow')) {\r\n            hideMenu()\r\n        }\r\n        if (e.target.closest('.link-list-repair>a')) {\r\n            showPopupRepairTypes()\r\n        }\r\n        if (e.target.closest('.popup-repair-types .close')) {\r\n            hidePopupRepairTypes()\r\n        }\r\n\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/showHidePopups.js":
/*!***********************************!*\
  !*** ./modules/showHidePopups.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showHidePopups\": () => (/* binding */ showHidePopups)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst showHidePopups = (popup) => {\r\n    const popupPrivacy = document.querySelector('.popup-privacy')\r\n    const popupConsultation = document.querySelector('.popup-consultation')\r\n\r\n    const showPopup = (popup) => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(false)\r\n        popup.style.opacity = 0\r\n        popup.style.visibility = 'visible'\r\n\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                popup.style.opacity = progress\r\n            }\r\n        })\r\n    }\r\n\r\n    const hidePopup = (popup) => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(true)\r\n        popup.style.opacity = ''\r\n        popup.style.visibility = ''\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('.link-privacy')) {\r\n            showPopup(popupPrivacy)\r\n        }\r\n        if (e.target.closest('.popup-privacy>.close')) {\r\n            hidePopup(popupPrivacy)\r\n        }\r\n        if (e.target.closest('.director-avatar button')) {\r\n            showPopup(popupConsultation)\r\n        }\r\n        if (e.target.closest('.popup-consultation .close')) {\r\n            hidePopup(popupConsultation)\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/showHidePopups.js?");

/***/ }),

/***/ "./modules/showRepairTypes.js":
/*!************************************!*\
  !*** ./modules/showRepairTypes.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"showRepairTypes\": () => (/* binding */ showRepairTypes)\n/* harmony export */ });\nconst showRepairTypes = () => {\r\n    const popupRepairTypes = document.querySelector('.popup-repair-types')\r\n    const blockBtns = popupRepairTypes.querySelector('.nav-list-popup-repair')\r\n    const title = document.getElementById('switch-inner')\r\n    const tbody = popupRepairTypes.querySelector('tbody')\r\n\r\n    let btns\r\n\r\n    const getData = async () => {\r\n        const response = await fetch('./db/db.json')\r\n        return await response.json()\r\n\r\n    }\r\n\r\n    const showBtns = () => {\r\n        let types = []\r\n\r\n        getData().then(data => {\r\n            data.forEach(item => {\r\n                types.push(item.type)\r\n            })\r\n            types = [... new Set(types)]\r\n\r\n            types.forEach(type => {\r\n                const btn = document.createElement('button')\r\n\r\n                btn.className = 'button_o popup-repair-types-nav__item'\r\n                btn.textContent = type\r\n                blockBtns.append(btn)\r\n            })\r\n\r\n            btns = popupRepairTypes.querySelectorAll('.popup-repair-types-nav__item')\r\n\r\n            showTitle(btns[0].textContent)\r\n            showTable(btns[0].textContent)\r\n        })\r\n    }\r\n\r\n    const showTitle = (str) => {\r\n        title.textContent = str\r\n    }\r\n\r\n    const showTable = (type) => {\r\n        getData().then(data => {\r\n            let repairs = data.filter(item => item.type === type)\r\n            repairs.forEach(repair => {\r\n                const tr = document.createElement('tr')\r\n\r\n                tr.className = 'mobile-row showHide'\r\n                tr.innerHTML = `\r\n                    <td class=\"repair-types-name\">${repair.name}</td>\r\n                    <td class=\"mobile-col-title tablet-hide desktop-hide\">Ед.измерения</td>\r\n                    <td class=\"mobile-col-title tablet-hide desktop-hide\">Цена за ед.</td>\r\n                    <td class=\"repair-types-value\">${repair.units === 'м2' ? 'м<sup>2</sup>' : repair.units}</td>\r\n                    <td class=\"repair-types-value\">${repair.cost}</td>\r\n                `\r\n                tbody.append(tr)\r\n            })\r\n        })\r\n    }\r\n\r\n\r\n    showBtns()\r\n\r\n    blockBtns.addEventListener('click', (e) => {\r\n        if (e.target.classList.contains('popup-repair-types-nav__item')) {\r\n            tbody.innerHTML = ''\r\n            showTitle(e.target.textContent)\r\n            showTable(e.target.textContent)\r\n        }\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/showRepairTypes.js?");

/***/ }),

/***/ "./modules/sliderReviews.js":
/*!**********************************!*\
  !*** ./modules/sliderReviews.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderReviews\": () => (/* binding */ sliderReviews)\n/* harmony export */ });\nconst sliderReviews = () => {\r\n    const sliderBlock = document.querySelector('.reviews-slider-wrap')\r\n    const slides = sliderBlock.querySelectorAll('.reviews-slider__slide')\r\n\r\n    let currentSlide = 0\r\n\r\n    const nextSlide = () => {\r\n        slides[currentSlide].classList.remove('reviews-slider__slide-active')\r\n\r\n        currentSlide++\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n\r\n        slides[currentSlide].classList.add('reviews-slider__slide-active')\r\n    }\r\n\r\n    const prevSlide = () => {\r\n        slides[currentSlide].classList.remove('reviews-slider__slide-active')\r\n\r\n        currentSlide--\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        slides[currentSlide].classList.add('reviews-slider__slide-active')\r\n    }\r\n\r\n    sliderBlock.addEventListener('click', (e) => {\r\n        if (e.target.closest('#reviews-arrow_right')) {\r\n            nextSlide()\r\n        }\r\n        if (e.target.closest('#reviews-arrow_left')) {\r\n            prevSlide()\r\n        }\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/sliderReviews.js?");

/***/ }),

/***/ "./modules/sliderTransparency.js":
/*!***************************************!*\
  !*** ./modules/sliderTransparency.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"sliderTransparency\": () => (/* binding */ sliderTransparency)\n/* harmony export */ });\n/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ \"./modules/helpers.js\");\n\r\n\r\nconst sliderTransparency = () => {\r\n    const popupTransparency = document.querySelector('.popup-transparency')\r\n    const popupSliderBlock = popupTransparency.querySelector('.popup-transparency-slider-wrap')\r\n    const popupSlides = popupSliderBlock.querySelectorAll('.popup-transparency-slider__slide')\r\n    const popupCounter = document.getElementById('transparency-popup-counter')\r\n    const popupCounterCurrent = popupCounter.querySelector('.slider-counter-content__current')\r\n    const popupCounterTotal = popupCounter.querySelector('.slider-counter-content__total')\r\n\r\n    const sliderBlock = document.querySelector('.transparency-slider-wrap')\r\n    const slides = sliderBlock.querySelectorAll('.transparency-item')\r\n\r\n    const imgItems = document.querySelectorAll('.transparency-item__img')\r\n\r\n    let currentSlide\r\n\r\n    const showPopup = (popup) => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(false)\r\n        popup.style.opacity = 0\r\n        popup.style.visibility = 'visible'\r\n\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.animate)({\r\n            duration: 500,\r\n            timing(timeFraction) {\r\n                return timeFraction;\r\n            },\r\n            draw(progress) {\r\n                popup.style.opacity = progress\r\n            }\r\n        })\r\n    }\r\n\r\n    const hidePopup = (popup) => {\r\n        ;(0,_helpers__WEBPACK_IMPORTED_MODULE_0__.scrollBody)(true)\r\n        popup.style.opacity = ''\r\n        popup.style.visibility = ''\r\n    }\r\n\r\n    const nextSlide = () => {\r\n        popupSlides[currentSlide].classList.remove('popup-transparency-slider__slide-active')\r\n        slides[currentSlide].classList.remove('transparency-item-active')\r\n\r\n        currentSlide++\r\n\r\n        if (currentSlide >= slides.length) {\r\n            currentSlide = 0\r\n        }\r\n        popupSlides[currentSlide].classList.add('popup-transparency-slider__slide-active')\r\n        slides[currentSlide].classList.add('transparency-item-active')\r\n        popupCounterCurrent.textContent = currentSlide + 1\r\n    }\r\n\r\n    const prevSlide = () => {\r\n        popupSlides[currentSlide].classList.remove('popup-transparency-slider__slide-active')\r\n        slides[currentSlide].classList.remove('transparency-item-active')\r\n\r\n        currentSlide--\r\n\r\n        if (currentSlide < 0) {\r\n            currentSlide = slides.length - 1\r\n        }\r\n\r\n        popupSlides[currentSlide].classList.add('popup-transparency-slider__slide-active')\r\n        slides[currentSlide].classList.add('transparency-item-active')\r\n        popupCounterCurrent.textContent = currentSlide + 1\r\n\r\n    }\r\n\r\n    document.addEventListener('click', (e) => {\r\n        if (e.target.closest('#transparency_left') || e.target.closest('#transparency-arrow_left')) {\r\n            prevSlide()\r\n        }\r\n        if (e.target.closest('#transparency_right') || e.target.closest('#transparency-arrow_right')) {\r\n            nextSlide()\r\n        }\r\n        if (e.target.closest('.popup-transparency .close')) {\r\n            hidePopup(popupTransparency)\r\n        }\r\n    })\r\n\r\n    imgItems.forEach((item, index) => {\r\n        item.addEventListener('click', () => {\r\n            currentSlide = index\r\n            popupSlides.forEach(slide => {\r\n                slide.classList.remove('popup-transparency-slider__slide-active')\r\n            })\r\n            popupSlides[index].classList.add('popup-transparency-slider__slide-active')\r\n            popupCounterCurrent.textContent = currentSlide + 1\r\n            popupCounterTotal.textContent = slides.length\r\n            showPopup(popupTransparency)\r\n        })\r\n    })\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/sliderTransparency.js?");

/***/ }),

/***/ "./modules/telMask.js":
/*!****************************!*\
  !*** ./modules/telMask.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"telMask\": () => (/* binding */ telMask)\n/* harmony export */ });\nconst telMask = () => {\r\n    const inputs = document.querySelectorAll('input[name=phone]')\r\n\r\n    function setCursorPosition(pos, elem) {\r\n        elem.focus()\r\n        if (elem.setSelectionRange) elem.setSelectionRange(pos, pos);\r\n        else if (elem.createTextRange) {\r\n            let range = elem.createTextRange()\r\n            range.collapse(true)\r\n            range.moveEnd(\"character\", pos)\r\n            range.moveStart(\"character\", pos)\r\n            range.select()\r\n        }\r\n    }\r\n\r\n    function mask(event) {\r\n        const matrix = \"+7 (___) ___-__-__\"\r\n        const def = matrix.replace(/\\D/g, \"\")\r\n\r\n        let i = 0\r\n        let val = this.value.replace(/\\D/g, \"\")\r\n\r\n        if (def.length >= val.length) {\r\n            val = def\r\n        }\r\n        this.value = matrix.replace(/./g, function (a) {\r\n            return /[_\\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? \"\" : a\r\n        })\r\n        if (event.type == \"blur\") {\r\n            if (this.value.length == 2) this.value = \"\"\r\n        } else setCursorPosition(this.value.length, this)\r\n    }\r\n\r\n    inputs.forEach(input => {\r\n        input.addEventListener(\"input\", mask, false)\r\n\r\n        input.addEventListener(\"focus\", mask, false)\r\n\r\n        input.addEventListener(\"blur\", mask, false)\r\n    })\r\n}\n\n//# sourceURL=webpack:///./modules/telMask.js?");

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