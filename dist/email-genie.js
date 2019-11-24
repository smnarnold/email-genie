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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var EmailGenie =
/*#__PURE__*/
function () {
  function EmailGenie(el, settings) {
    _classCallCheck(this, EmailGenie);

    this.dom = {
      el: el
    };

    if (typeof el === 'string') {
      this.dom.el = document.querySelector(el);
    }

    if (this.dom.el === null) {
      throw new Error('EmailAutoComplete: No input defined');
    }

    this.originalSettings = {
      id: "emailAutoComplete-".concat(this.uuidv4),
      domains: ['gmail.com', 'outlook.com', 'hotmail.com', 'msn.com', 'live.com', 'googlemail.com', 'yahoo.com', 'me.com', 'icloud.com', 'videotron.ca'],
      insert: 'afterend'
    };

    if (settings && settings.appendToDomains) {
      settings.domains = [].concat(_toConsumableArray(this.originalSettings.domains), _toConsumableArray(settings.domains));
    }

    this.settings = _objectSpread({}, this.originalSettings, {}, settings);
    this.init();
  }

  _createClass(EmailGenie, [{
    key: "init",
    value: function init() {
      this.createDataList();
      this.bindEvents();
    }
  }, {
    key: "createDataList",
    value: function createDataList() {
      this.dom.el.setAttribute('list', this.settings.id);
      this.dom.el.insertAdjacentHTML(this.settings.insert, "<datalist id=\"".concat(this.settings.id, "\"></datalist>"));
      this.dom.list = document.querySelector("#".concat(this.settings.id));
    }
  }, {
    key: "bindEvents",
    value: function bindEvents() {
      var _this = this;

      this.dom.el.addEventListener('keyup', function (e) {
        return _this.handleKeyup(e);
      });
    }
  }, {
    key: "handleKeyup",
    value: function handleKeyup(e) {
      var _this2 = this;

      if (!this.dom.el.value.includes('@')) return;
      this.user = this.dom.el.value.substring(0, this.dom.el.value.lastIndexOf('@'));
      this.domain = this.dom.el.value.substring(this.dom.el.value.lastIndexOf('@') + 1);
      var suggestions = this.settings.domains.filter(function (domain) {
        return domain.startsWith(_this2.domain);
      });
      var list = '';
      suggestions.slice(0, 3).forEach(function (suggestion) {
        return list += "<option value=\"".concat(_this2.user, "@").concat(suggestion, "\">");
      });
      this.dom.list.innerHTML = list;
    }
  }, {
    key: "uuidv4",
    get: function get() {
      return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, function (c) {
        return (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16);
      });
    }
  }]);

  return EmailGenie;
}();

if ( true && typeof module.exports !== 'undefined') {
  module.exports = EmailGenie;
} else {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return EmailGenie;
    }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VtYWlsLWdlbmllLmpzIl0sIm5hbWVzIjpbIkVtYWlsR2VuaWUiLCJlbCIsInNldHRpbmdzIiwiZG9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiRXJyb3IiLCJvcmlnaW5hbFNldHRpbmdzIiwiaWQiLCJ1dWlkdjQiLCJkb21haW5zIiwiaW5zZXJ0IiwiYXBwZW5kVG9Eb21haW5zIiwiaW5pdCIsImNyZWF0ZURhdGFMaXN0IiwiYmluZEV2ZW50cyIsInNldEF0dHJpYnV0ZSIsImluc2VydEFkamFjZW50SFRNTCIsImxpc3QiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImhhbmRsZUtleXVwIiwidmFsdWUiLCJpbmNsdWRlcyIsInVzZXIiLCJzdWJzdHJpbmciLCJsYXN0SW5kZXhPZiIsImRvbWFpbiIsInN1Z2dlc3Rpb25zIiwiZmlsdGVyIiwic3RhcnRzV2l0aCIsInNsaWNlIiwiZm9yRWFjaCIsInN1Z2dlc3Rpb24iLCJpbm5lckhUTUwiLCJyZXBsYWNlIiwiYyIsImNyeXB0byIsImdldFJhbmRvbVZhbHVlcyIsIlVpbnQ4QXJyYXkiLCJ0b1N0cmluZyIsIm1vZHVsZSIsImV4cG9ydHMiLCJkZWZpbmUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFD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RCxLQUZLO0FBQUEsb0dBQU47QUFHRCxHQUpELE1BSU8sRUFFTjtBQUNGLEMiLCJmaWxlIjoiZW1haWwtZ2VuaWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJjbGFzcyBFbWFpbEdlbmllIHtcbiAgY29uc3RydWN0b3IoZWwsIHNldHRpbmdzKSB7XG4gICAgdGhpcy5kb20gPSB7XG4gICAgICBlbCxcbiAgICB9O1xuIFxuICAgIGlmKHR5cGVvZiBlbCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMuZG9tLmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihlbCk7XG4gICAgfSBcbiAgICBcbiAgICBpZih0aGlzLmRvbS5lbCA9PT0gbnVsbCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFbWFpbEF1dG9Db21wbGV0ZTogTm8gaW5wdXQgZGVmaW5lZCcpO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLm9yaWdpbmFsU2V0dGluZ3MgPSB7XG4gICAgICBpZDogYGVtYWlsQXV0b0NvbXBsZXRlLSR7dGhpcy51dWlkdjR9YCxcbiAgICAgIGRvbWFpbnM6IFsnZ21haWwuY29tJywgJ291dGxvb2suY29tJywgJ2hvdG1haWwuY29tJywgJ21zbi5jb20nLCAnbGl2ZS5jb20nLCAnZ29vZ2xlbWFpbC5jb20nLCAneWFob28uY29tJywgJ21lLmNvbScsICdpY2xvdWQuY29tJywgJ3ZpZGVvdHJvbi5jYSddLFxuICAgICAgaW5zZXJ0OiAnYWZ0ZXJlbmQnXG4gICAgfTtcbiAgICBcbiAgICBpZihzZXR0aW5ncyAmJiBzZXR0aW5ncy5hcHBlbmRUb0RvbWFpbnMpIHtcbiAgICAgIHNldHRpbmdzLmRvbWFpbnMgPSBbLi4udGhpcy5vcmlnaW5hbFNldHRpbmdzLmRvbWFpbnMsIC4uLnNldHRpbmdzLmRvbWFpbnNdO1xuICAgIH1cbiAgICBcbiAgICB0aGlzLnNldHRpbmdzID0geyAuLi50aGlzLm9yaWdpbmFsU2V0dGluZ3MsIC4uLnNldHRpbmdzIH07XG5cbiAgICB0aGlzLmluaXQoKTtcbiAgfVxuICBcbiAgaW5pdCgpIHtcbiAgICB0aGlzLmNyZWF0ZURhdGFMaXN0KCk7XG4gICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gIH1cbiAgXG4gIGNyZWF0ZURhdGFMaXN0KCkge1xuICAgIHRoaXMuZG9tLmVsLnNldEF0dHJpYnV0ZSgnbGlzdCcsIHRoaXMuc2V0dGluZ3MuaWQpO1xuICAgIHRoaXMuZG9tLmVsLmluc2VydEFkamFjZW50SFRNTCh0aGlzLnNldHRpbmdzLmluc2VydCwgYDxkYXRhbGlzdCBpZD1cIiR7dGhpcy5zZXR0aW5ncy5pZH1cIj48L2RhdGFsaXN0PmApO1xuICAgIHRoaXMuZG9tLmxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLnNldHRpbmdzLmlkfWApO1xuICB9XG4gIFxuICBiaW5kRXZlbnRzKCkge1xuICAgIHRoaXMuZG9tLmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB0aGlzLmhhbmRsZUtleXVwKGUpKTtcbiAgfVxuICBcbiAgaGFuZGxlS2V5dXAoZSkge1xuICAgIGlmICghdGhpcy5kb20uZWwudmFsdWUuaW5jbHVkZXMoJ0AnKSkgcmV0dXJuO1xuICAgIHRoaXMudXNlciA9IHRoaXMuZG9tLmVsLnZhbHVlLnN1YnN0cmluZygwLCB0aGlzLmRvbS5lbC52YWx1ZS5sYXN0SW5kZXhPZignQCcpKTtcbiAgICB0aGlzLmRvbWFpbiA9IHRoaXMuZG9tLmVsLnZhbHVlLnN1YnN0cmluZyh0aGlzLmRvbS5lbC52YWx1ZS5sYXN0SW5kZXhPZignQCcpICsxKTtcbiAgICBsZXQgc3VnZ2VzdGlvbnMgPSB0aGlzLnNldHRpbmdzLmRvbWFpbnMuZmlsdGVyKGRvbWFpbiA9PiBkb21haW4uc3RhcnRzV2l0aCh0aGlzLmRvbWFpbikpO1xuICAgIGxldCBsaXN0ID0gJyc7XG4gICAgc3VnZ2VzdGlvbnMuc2xpY2UoMCwgMykuZm9yRWFjaChzdWdnZXN0aW9uID0+IGxpc3QgKz0gYDxvcHRpb24gdmFsdWU9XCIke3RoaXMudXNlcn1AJHtzdWdnZXN0aW9ufVwiPmApO1xuICAgIHRoaXMuZG9tLmxpc3QuaW5uZXJIVE1MID0gbGlzdDtcbiAgfVxuICBcbiAgZ2V0IHV1aWR2NCgpIHtcbiAgICByZXR1cm4gKFsxZTddKy0xZTMrLTRlMystOGUzKy0xZTExKS5yZXBsYWNlKC9bMDE4XS9nLCBjID0+XG4gICAgICAoYyBeIGNyeXB0by5nZXRSYW5kb21WYWx1ZXMobmV3IFVpbnQ4QXJyYXkoMSkpWzBdICYgMTUgPj4gYyAvIDQpLnRvU3RyaW5nKDE2KVxuICAgICk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBtb2R1bGUgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBFbWFpbEdlbmllO1xufSBlbHNlIHtcbiAgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICAgIGRlZmluZShbXSwgKCkgPT4ge1xuICAgICAgcmV0dXJuIEVtYWlsR2VuaWU7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgd2luZG93LkVtYWlsR2VuaWUgPSBFbWFpbEdlbmllO1xuICB9XG59Il0sInNvdXJjZVJvb3QiOiIifQ==