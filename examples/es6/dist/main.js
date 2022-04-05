/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "../../dist/email-genie.js":
/*!*********************************!*\
  !*** ../../dist/email-genie.js ***!
  \*********************************/
/***/ ((module) => {

eval("/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n(function webpackUniversalModuleDefinition(root, factory) {\n\tif(true)\n\t\tmodule.exports = factory();\n\telse {}\n})(self, () => {\nreturn /******/ (() => { // webpackBootstrap\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./src/components/email-genie.js\":\n/*!***************************************!*\\\n  !*** ./src/components/email-genie.js ***!\n  \\***************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\n\"use strict\";\neval(\"__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__)\\n/* harmony export */ });\\nclass EmailGenie {\\n  constructor(el, settings) {\\n    this.dom = {\\n      el,\\n    };\\n\\n    if (typeof el === 'string') {\\n      this.dom.el = document.querySelector(el);\\n    } else if (el.jquery) {\\n      this.dom.el = el[0];\\n    }\\n\\n    if (this.dom.el === null) {\\n      throw new Error('EmailGenie: No input defined');\\n    }\\n\\n    this.originalSettings = {\\n      id: `emailGenie-${this.uuidv4}`,\\n      domains: ['gmail.com', 'outlook.com', 'hotmail.com', 'msn.com', 'live.com', 'googlemail.com', 'yahoo.com', 'me.com', 'icloud.com'],\\n      overrideDomains: false,\\n      insert: 'afterend'\\n    };\\n\\n    if (settings && settings.domains) {\\n      if (settings.overrideDomains) {\\n        settings.domains = settings.domains;\\n      } else {\\n        settings.domains = [...this.originalSettings.domains, ...settings.domains];\\n      }\\n    }\\n\\n    this.settings = { ...this.originalSettings, ...settings };\\n\\n    this.init();\\n  }\\n\\n  init() {\\n    this.createDataList();\\n    this.bindEvents();\\n  }\\n\\n  createDataList() {\\n    this.dom.el.setAttribute('list', this.settings.id);\\n    const list = `<datalist id=\\\"${this.settings.id}\\\"></datalist>`;\\n    if (this.settings.insert === 'documentend') {\\n      document.body.insertAdjacentHTML('beforeend', list);\\n    } else {\\n      this.dom.el.insertAdjacentHTML(this.settings.insert, list);\\n    }\\n    this.dom.list = document.querySelector(`#${this.settings.id}`);\\n  }\\n\\n  bindEvents() {\\n    this.dom.el.addEventListener('keyup', e => this.handleKeyup(e));\\n  }\\n\\n  handleKeyup(e) {\\n    if (!this.dom.el.value.includes('@')) return;\\n    this.user = this.dom.el.value.substring(0, this.dom.el.value.lastIndexOf('@'));\\n    this.domain = this.dom.el.value.substring(this.dom.el.value.lastIndexOf('@') + 1);\\n    let suggestions = this.settings.domains.filter(domain => domain.startsWith(this.domain));\\n    let list = '';\\n    suggestions.slice(0, 3).forEach(suggestion => list += `<option value=\\\"${this.user}@${suggestion}\\\">`);\\n    this.dom.list.innerHTML = list;\\n  }\\n\\n  get uuidv4() {\\n    var crypto = window.crypto || window.msCrypto;\\n    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>\\n      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)\\n    );\\n  }\\n}\\n\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (EmailGenie);\\n\\n\\n\\n\\n//# sourceURL=webpack://EmailGenie/./src/components/email-genie.js?\");\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/***/ ((module, __unused_webpack_exports, __webpack_require__) => {\n\neval(\"const EmailGenie = (__webpack_require__(/*! ./components/email-genie */ \\\"./src/components/email-genie.js\\\")[\\\"default\\\"]);\\nmodule.exports = EmailGenie;\\n\\n//# sourceURL=webpack://EmailGenie/./src/index.js?\");\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_4586__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_4586__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t(() => {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_4586__.d = (exports, definition) => {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_4586__.o(definition, key) && !__nested_webpack_require_4586__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t(() => {\n/******/ \t\t__nested_webpack_require_4586__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ \t})();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t(() => {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_4586__.r = (exports) => {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t})();\n/******/ \t\n/************************************************************************/\n/******/ \t\n/******/ \t// startup\n/******/ \t// Load entry module and return exports\n/******/ \t// This entry module is referenced by other modules so it can't be inlined\n/******/ \tvar __webpack_exports__ = __nested_webpack_require_4586__(\"./src/index.js\");\n/******/ \t\n/******/ \treturn __webpack_exports__;\n/******/ })()\n;\n});\n\n//# sourceURL=webpack://ES6_email-genie_test/../../dist/email-genie.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dist_email_genie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../dist/email-genie */ \"../../dist/email-genie.js\");\n/* harmony import */ var _dist_email_genie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_dist_email_genie__WEBPACK_IMPORTED_MODULE_0__);\n\n\nconst email = new (_dist_email_genie__WEBPACK_IMPORTED_MODULE_0___default())('.email');\n\n//# sourceURL=webpack://ES6_email-genie_test/./src/index.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;