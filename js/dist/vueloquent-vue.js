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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/_core.js":
/*!**********************!*\
  !*** ./src/_core.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* harmony default export */ __webpack_exports__["default"] = ({
  config: {
    endpoint: '/vueloquent',
    headers: []
  },
  query: {
    model: '',
    queries: [],
    "final": {
      method: 'get',
      args: []
    }
  },
  at: function at(endpoint) {
    this.config.endpoint = endpoint;
    return this;
  },
  clear: function clear() {
    this.query.model = '';
    this.query.queries = [];
    this.query["final"] = {
      method: 'get',
      args: []
    };
  },
  configure: function configure(config) {
    this.config = config;
  },
  csrf: function csrf(token) {
    this.config.headers.push({
      name: 'X-CSRF-TOKEN',
      value: token
    });
    return this;
  },
  from: function from(model) {
    this.query.model = model;
    return this;
  },
  headers: function headers(_headers) {
    this.config.headers = _headers;
    return this;
  },
  post: function post() {
    var query = Object.assign({}, this.query);
    this.clear();
    return axios.post(this.config.endpoint, query);
  },
  setHeaders: function setHeaders() {
    for (var i = 0; i < this.config.headers.length; i++) {
      axios.defaults.headers.common[this.config.headers[i].name] = this.config.headers[i].value;
    }
  },
  token: function token(_token) {
    this.config.headers.push({
      name: 'Authorization',
      value: "Bearer ".concat(_token)
    });
    return this;
  },
  params: function params(_params) {
    this.query = _objectSpread({}, this.query, _params);
    return this;
  }
});

/***/ }),

/***/ "./src/_final.js":
/*!***********************!*\
  !*** ./src/_final.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  setFinal: function setFinal(method, args) {
    this.setHeaders();
    this.query["final"].method = method;
    this.query["final"].args = args;
    return this;
  },
  all: function all() {
    return this.setFinal('all', []).post();
  },
  avg: function avg() {
    return this.setFinal('avg', arguments).post();
  },
  count: function count() {
    return this.setFinal('count', []).post();
  },
  "delete": function _delete() {
    return this.setFinal('delete', []).post();
  },
  decrement: function decrement() {
    return this.setFinal('decrement', arguments).post();
  },
  doesntExist: function doesntExist() {
    return this.setFinal('doesntExist', []).post();
  },
  exists: function exists() {
    return this.setFinal('exists', []).post();
  },
  first: function first() {
    return this.setFinal('first', []).post();
  },
  find: function find() {
    return this.setFinal('find', arguments).post();
  },
  get: function get() {
    return this.setFinal('get', []).post();
  },
  truncate: function truncate() {
    return this.setFinal('truncate', []).post();
  },
  insert: function insert() {
    return this.setFinal('insert', arguments).post();
  },
  insertGetId: function insertGetId() {
    return this.setFinal('insertGetId', arguments).post();
  },
  increment: function increment() {
    return this.setFinal('increment', arguments).post();
  },
  inRandomOrder: function inRandomOrder() {
    return this.setFinal('inRandomOrder', arguments).post();
  },
  latest: function latest() {
    return this.setFinal('latest', arguments).post();
  },
  lockedForUpdate: function lockedForUpdate() {
    return this.setFinal('lockedForUpdate', []).post();
  },
  max: function max() {
    return this.setFinal('max', arguments).post();
  },
  min: function min() {
    return this.setFinal('min', arguments).post();
  },
  oldest: function oldest() {
    return this.setFinal('oldest', arguments).post();
  },
  pluck: function pluck() {
    return this.setFinal('pluck', arguments).post();
  },
  sum: function sum() {
    return this.setFinal('sum', arguments).post();
  },
  sharedLock: function sharedLock() {
    return this.setFinal('sharedLock', []).post();
  },
  update: function update() {
    return this.setFinal('update', arguments).post();
  },
  updateOrInsert: function updateOrInsert() {
    return this.setFinal('updateOrInsert', arguments).post();
  }
});

/***/ }),

/***/ "./src/_query.js":
/*!***********************!*\
  !*** ./src/_query.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  addQuery: function addQuery(method, args) {
    this.query.queries.push({
      method: method,
      args: args
    });
    return this;
  },
  crossJoin: function crossJoin() {
    return this.addQuery('crossJoin', arguments);
  },
  groupBy: function groupBy() {
    return this.addQuery('groupBy', arguments);
  },
  having: function having() {
    return this.addQuery('having', arguments);
  },
  havingRaw: function havingRaw() {
    return this.addQuery('havingRaw', arguments);
  },
  inRandomOrder: function inRandomOrder() {
    return this.addQuery('inRandomOrder', arguments);
  },
  join: function join() {
    return this.addQuery('join', arguments);
  },
  limit: function limit() {
    return this.addQuery('limit', arguments);
  },
  latest: function latest() {
    return this.addQuery('latest', arguments);
  },
  leftJoin: function leftJoin() {
    return this.addQuery('leftJoin', arguments);
  },
  offset: function offset() {
    return this.addQuery('offset', arguments);
  },
  orderBy: function orderBy() {
    return this.addQuery('orderBy', arguments);
  },
  oldest: function oldest() {
    return this.addQuery('oldest', arguments);
  },
  orWhere: function orWhere() {
    return this.addQuery('orWhere', arguments);
  },
  orWhereRaw: function orWhereRaw() {
    return this.addQuery('orWhereRaw', arguments);
  },
  orHavingRaw: function orHavingRaw() {
    return this.addQuery('orHavingRaw', arguments);
  },
  rightJoin: function rightJoin() {
    return this.addQuery('rightJoin', arguments);
  },
  select: function select() {
    return this.addQuery('select', arguments);
  },
  skip: function skip() {
    return this.addQuery('skip', arguments);
  },
  take: function take() {
    return this.addQuery('take', arguments);
  },
  union: function union() {
    return this.addQuery('union', arguments);
  },
  "with": function _with() {
    return this.addQuery('with', arguments);
  },
  where: function where() {
    return this.addQuery('where', arguments);
  },
  whereRaw: function whereRaw() {
    return this.addQuery('whereRaw', arguments);
  },
  whereBetween: function whereBetween() {
    return this.addQuery('whereBetween', arguments);
  },
  whereNotBetween: function whereNotBetween() {
    return this.addQuery('whereNotBetween', arguments);
  },
  whereIn: function whereIn() {
    return this.addQuery('whereIn', arguments);
  },
  whereNotIn: function whereNotIn() {
    return this.addQuery('whereNotIn', arguments);
  },
  whereNull: function whereNull() {
    return this.addQuery('whereNull', arguments);
  },
  whereNotNull: function whereNotNull() {
    return this.addQuery('whereNotNull', arguments);
  },
  whereDate: function whereDate() {
    return this.addQuery('whereDate', arguments);
  },
  whereMonth: function whereMonth() {
    return this.addQuery('whereMonth', arguments);
  },
  whereDay: function whereDay() {
    return this.addQuery('whereDay', arguments);
  },
  whereYear: function whereYear() {
    return this.addQuery('whereYear', arguments);
  },
  whereTime: function whereTime() {
    return this.addQuery('whereTime', arguments);
  },
  whereColumn: function whereColumn() {
    return this.addQuery('whereColumn', arguments);
  },
  whereJsonContains: function whereJsonContains() {
    return this.addQuery('whereJsonContains', arguments);
  },
  whereJsonLength: function whereJsonLength() {
    return this.addQuery('whereJsonLength', arguments);
  }
});

/***/ }),

/***/ "./src/vueloquent-vue.js":
/*!*******************************!*\
  !*** ./src/vueloquent-vue.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_core */ "./src/_core.js");
/* harmony import */ var _final__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_final */ "./src/_final.js");
/* harmony import */ var _query__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_query */ "./src/_query.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var eloquent = _objectSpread({}, _core__WEBPACK_IMPORTED_MODULE_0__["default"], _query__WEBPACK_IMPORTED_MODULE_2__["default"], _final__WEBPACK_IMPORTED_MODULE_1__["default"]);

var Vueloquent = {
  install: function install(Vue) {
    Vue.eloquent = eloquent;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Vueloquent);

if (typeof window !== 'undefined' && Vue) {
  Vue.use(Vueloquent);
}

/***/ }),

/***/ 0:
/*!*************************************!*\
  !*** multi ./src/vueloquent-vue.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Development\Personal\vueloquent_dev\vueloquent\js\src\vueloquent-vue.js */"./src/vueloquent-vue.js");


/***/ })

/******/ });