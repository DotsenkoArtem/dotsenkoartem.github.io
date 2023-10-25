"use strict";

function _get() { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get.bind(); } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(arguments.length < 3 ? target : receiver); } return desc.value; }; } return _get.apply(this, arguments); }
function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e68) { throw _e68; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e69) { didErr = true; err = _e69; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
!function (t, e) {
  "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = "undefined" != typeof globalThis ? globalThis : t || self).window = t.window || {});
}(void 0, function (t) {
  "use strict";

  var e = function e(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1e4;
      return t = parseFloat(t + "") || 0, Math.round((t + Number.EPSILON) * e) / e;
    },
    i = function i(t) {
      if (!(t && t instanceof Element && t.offsetParent)) return !1;
      var e = t.scrollHeight > t.clientHeight,
        i = window.getComputedStyle(t).overflowY,
        n = -1 !== i.indexOf("hidden"),
        s = -1 !== i.indexOf("visible");
      return e && !n && !s;
    },
    n = function n(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : void 0;
      return !(!t || t === document.body || e && t === e) && (i(t) ? t : n(t.parentElement, e));
    },
    s = function s(t) {
      var e = new DOMParser().parseFromString(t, "text/html").body;
      if (e.childElementCount > 1) {
        for (var i = document.createElement("div"); e.firstChild;) i.appendChild(e.firstChild);
        return i;
      }
      return e.firstChild;
    },
    o = function o(t) {
      return "".concat(t || "").split(" ").filter(function (t) {
        return !!t;
      });
    },
    a = function a(t, e, i) {
      o(e).forEach(function (e) {
        t && t.classList.toggle(e, i || !1);
      });
    };
  var r = /*#__PURE__*/_createClass(function r(t) {
    _classCallCheck(this, r);
    Object.defineProperty(this, "pageX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "pageY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientX", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "clientY", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "id", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "time", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), Object.defineProperty(this, "nativePointer", {
      enumerable: !0,
      configurable: !0,
      writable: !0,
      value: void 0
    }), this.nativePointer = t, this.pageX = t.pageX, this.pageY = t.pageY, this.clientX = t.clientX, this.clientY = t.clientY, this.id = self.Touch && t instanceof Touch ? t.identifier : -1, this.time = Date.now();
  });
  var l = {
    passive: !1
  };
  var c = /*#__PURE__*/function () {
    function c(t, _ref) {
      var _ref$start = _ref.start,
        e = _ref$start === void 0 ? function () {
          return !0;
        } : _ref$start,
        _ref$move = _ref.move,
        i = _ref$move === void 0 ? function () {} : _ref$move,
        _ref$end = _ref.end,
        n = _ref$end === void 0 ? function () {} : _ref$end;
      _classCallCheck(this, c);
      Object.defineProperty(this, "element", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "startCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "moveCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "endCallback", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "currentPointers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(this, "startPointers", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), this.element = t, this.startCallback = e, this.moveCallback = i, this.endCallback = n;
      for (var _i = 0, _arr = ["onPointerStart", "onTouchStart", "onMove", "onTouchEnd", "onPointerEnd", "onWindowBlur"]; _i < _arr.length; _i++) {
        var _t2 = _arr[_i];
        this[_t2] = this[_t2].bind(this);
      }
      this.element.addEventListener("mousedown", this.onPointerStart, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onMove, l), this.element.addEventListener("touchend", this.onTouchEnd), this.element.addEventListener("touchcancel", this.onTouchEnd);
    }
    _createClass(c, [{
      key: "onPointerStart",
      value: function onPointerStart(t) {
        if (!t.buttons || 0 !== t.button) return;
        var e = new r(t);
        this.currentPointers.some(function (t) {
          return t.id === e.id;
        }) || this.triggerPointerStart(e, t) && (window.addEventListener("mousemove", this.onMove), window.addEventListener("mouseup", this.onPointerEnd), window.addEventListener("blur", this.onWindowBlur));
      }
    }, {
      key: "onTouchStart",
      value: function onTouchStart(t) {
        for (var _i2 = 0, _Array$from = Array.from(t.changedTouches || []); _i2 < _Array$from.length; _i2++) {
          var _e = _Array$from[_i2];
          this.triggerPointerStart(new r(_e), t);
        }
        window.addEventListener("blur", this.onWindowBlur);
      }
    }, {
      key: "onMove",
      value: function onMove(t) {
        var _this = this;
        var e = this.currentPointers.slice(),
          i = "changedTouches" in t ? Array.from(t.changedTouches || []).map(function (t) {
            return new r(t);
          }) : [new r(t)],
          n = [];
        var _iterator = _createForOfIteratorHelper(i),
          _step;
        try {
          var _loop = function _loop() {
            var t = _step.value;
            var e = _this.currentPointers.findIndex(function (e) {
              return e.id === t.id;
            });
            e < 0 || (n.push(t), _this.currentPointers[e] = t);
          };
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            _loop();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
        n.length && this.moveCallback(t, this.currentPointers.slice(), e);
      }
    }, {
      key: "onPointerEnd",
      value: function onPointerEnd(t) {
        t.buttons > 0 && 0 !== t.button || (this.triggerPointerEnd(t, new r(t)), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur));
      }
    }, {
      key: "onTouchEnd",
      value: function onTouchEnd(t) {
        for (var _i3 = 0, _Array$from2 = Array.from(t.changedTouches || []); _i3 < _Array$from2.length; _i3++) {
          var _e2 = _Array$from2[_i3];
          this.triggerPointerEnd(t, new r(_e2));
        }
      }
    }, {
      key: "triggerPointerStart",
      value: function triggerPointerStart(t, e) {
        return !!this.startCallback(e, t, this.currentPointers.slice()) && (this.currentPointers.push(t), this.startPointers.push(t), !0);
      }
    }, {
      key: "triggerPointerEnd",
      value: function triggerPointerEnd(t, e) {
        var i = this.currentPointers.findIndex(function (t) {
          return t.id === e.id;
        });
        i < 0 || (this.currentPointers.splice(i, 1), this.startPointers.splice(i, 1), this.endCallback(t, e, this.currentPointers.slice()));
      }
    }, {
      key: "onWindowBlur",
      value: function onWindowBlur() {
        this.clear();
      }
    }, {
      key: "clear",
      value: function clear() {
        for (; this.currentPointers.length;) {
          var _t3 = this.currentPointers[this.currentPointers.length - 1];
          this.currentPointers.splice(this.currentPointers.length - 1, 1), this.startPointers.splice(this.currentPointers.length - 1, 1), this.endCallback(new Event("touchend", {
            bubbles: !0,
            cancelable: !0,
            clientX: _t3.clientX,
            clientY: _t3.clientY
          }), _t3, this.currentPointers.slice());
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        this.element.removeEventListener("mousedown", this.onPointerStart, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onMove, l), this.element.removeEventListener("touchend", this.onTouchEnd), this.element.removeEventListener("touchcancel", this.onTouchEnd), window.removeEventListener("mousemove", this.onMove), window.removeEventListener("mouseup", this.onPointerEnd), window.removeEventListener("blur", this.onWindowBlur);
      }
    }]);
    return c;
  }();
  function h(t, e) {
    return e ? Math.sqrt(Math.pow(e.clientX - t.clientX, 2) + Math.pow(e.clientY - t.clientY, 2)) : 0;
  }
  function d(t, e) {
    return e ? {
      clientX: (t.clientX + e.clientX) / 2,
      clientY: (t.clientY + e.clientY) / 2
    } : t;
  }
  var u = function u(t) {
      return "object" == _typeof(t) && null !== t && t.constructor === Object && "[object Object]" === Object.prototype.toString.call(t);
    },
    p = function p(t) {
      var i = arguments.length <= 1 ? 0 : arguments.length - 1;
      for (var _n = 0; _n < i; _n++) {
        var _i4 = (_n + 1 < 1 || arguments.length <= _n + 1 ? undefined : arguments[_n + 1]) || {};
        Object.entries(_i4).forEach(function (_ref2) {
          var _ref3 = _slicedToArray(_ref2, 2),
            e = _ref3[0],
            i = _ref3[1];
          var n = Array.isArray(i) ? [] : {};
          t[e] || Object.assign(t, _defineProperty({}, e, n)), u(i) ? Object.assign(t[e], p(n, i)) : Array.isArray(i) ? Object.assign(t, _defineProperty({}, e, _toConsumableArray(i))) : Object.assign(t, _defineProperty({}, e, i));
        });
      }
      return t;
    },
    f = function f(t, e) {
      return t.split(".").reduce(function (t, e) {
        return "object" == _typeof(t) ? t[e] : void 0;
      }, e);
    };
  var m = /*#__PURE__*/function () {
    function m() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, m);
      Object.defineProperty(this, "options", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      }), Object.defineProperty(this, "events", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Map()
      }), this.setOptions(t);
      var _iterator2 = _createForOfIteratorHelper(Object.getOwnPropertyNames(Object.getPrototypeOf(this))),
        _step2;
      try {
        for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
          var _t4 = _step2.value;
          _t4.startsWith("on") && "function" == typeof this[_t4] && (this[_t4] = this[_t4].bind(this));
        }
      } catch (err) {
        _iterator2.e(err);
      } finally {
        _iterator2.f();
      }
    }
    _createClass(m, [{
      key: "setOptions",
      value: function setOptions(t) {
        this.options = t ? p({}, this.constructor.defaults, t) : {};
        for (var _i5 = 0, _Object$entries = Object.entries(this.option("on") || {}); _i5 < _Object$entries.length; _i5++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i5], 2),
            _t5 = _Object$entries$_i[0],
            _e3 = _Object$entries$_i[1];
          this.on(_t5, _e3);
        }
      }
    }, {
      key: "option",
      value: function option(t) {
        var _i6;
        var i = f(t, this.options);
        for (var _len = arguments.length, e = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          e[_key - 1] = arguments[_key];
        }
        return i && "function" == typeof i && (i = (_i6 = i).call.apply(_i6, [this, this].concat(e))), i;
      }
    }, {
      key: "optionFor",
      value: function optionFor(t, e, i) {
        var _s;
        var s = f(e, t);
        var o;
        for (var _len2 = arguments.length, n = new Array(_len2 > 3 ? _len2 - 3 : 0), _key2 = 3; _key2 < _len2; _key2++) {
          n[_key2 - 3] = arguments[_key2];
        }
        "string" != typeof (o = s) || isNaN(o) || isNaN(parseFloat(o)) || (s = parseFloat(s)), "true" === s && (s = !0), "false" === s && (s = !1), s && "function" == typeof s && (s = (_s = s).call.apply(_s, [this, this, t].concat(n)));
        var a = f(e, this.options);
        return a && "function" == typeof a ? s = a.call.apply(a, [this, this, t].concat(n, [s])) : void 0 === s && (s = a), void 0 === s ? i : s;
      }
    }, {
      key: "cn",
      value: function cn(t) {
        var e = this.options.classes;
        return e && e[t] || "";
      }
    }, {
      key: "localize",
      value: function localize(t) {
        var _this2 = this;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
        t = String(t).replace(/\{\{(\w+).?(\w+)?\}\}/g, function (t, e, i) {
          var n = "";
          return i ? n = _this2.option("".concat(e[0] + e.toLowerCase().substring(1), ".l10n.").concat(i)) : e && (n = _this2.option("l10n.".concat(e))), n || (n = t), n;
        });
        for (var _i7 = 0; _i7 < e.length; _i7++) t = t.split(e[_i7][0]).join(e[_i7][1]);
        return t = t.replace(/\{\{(.*?)\}\}/g, function (t, e) {
          return e;
        });
      }
    }, {
      key: "on",
      value: function on(t, e) {
        var _this3 = this;
        var i = [];
        "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), this.events || (this.events = new Map()), i.forEach(function (t) {
          var i = _this3.events.get(t);
          i || (_this3.events.set(t, []), i = []), i.includes(e) || i.push(e), _this3.events.set(t, i);
        });
      }
    }, {
      key: "off",
      value: function off(t, e) {
        var _this4 = this;
        var i = [];
        "string" == typeof t ? i = t.split(" ") : Array.isArray(t) && (i = t), i.forEach(function (t) {
          var i = _this4.events.get(t);
          if (Array.isArray(i)) {
            var _t6 = i.indexOf(e);
            _t6 > -1 && i.splice(_t6, 1);
          }
        });
      }
    }, {
      key: "emit",
      value: function emit(t) {
        var _this5 = this;
        for (var _len3 = arguments.length, e = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          e[_key3 - 1] = arguments[_key3];
        }
        _toConsumableArray(this.events.get(t) || []).forEach(function (t) {
          return t.apply(void 0, [_this5].concat(e));
        }), "*" !== t && this.emit.apply(this, ["*", t].concat(e));
      }
    }]);
    return m;
  }();
  Object.defineProperty(m, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.22"
  }), Object.defineProperty(m, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  });
  var g = /*#__PURE__*/function (_m) {
    _inherits(g, _m);
    var _super = _createSuper(g);
    function g() {
      var _this6;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      _classCallCheck(this, g);
      _this6 = _super.call(this, t), Object.defineProperty(_assertThisInitialized(_this6), "plugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      });
      return _this6;
    }
    _createClass(g, [{
      key: "attachPlugins",
      value: function attachPlugins() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var e = new Map();
        for (var _i8 = 0, _Object$entries2 = Object.entries(t); _i8 < _Object$entries2.length; _i8++) {
          var _Object$entries2$_i = _slicedToArray(_Object$entries2[_i8], 2),
            _i9 = _Object$entries2$_i[0],
            _n2 = _Object$entries2$_i[1];
          var _t7 = this.option(_i9),
            _s2 = this.plugins[_i9];
          _s2 || !1 === _t7 ? _s2 && !1 === _t7 && (_s2.detach(), delete this.plugins[_i9]) : e.set(_i9, new _n2(this, _t7 || {}));
        }
        var _iterator3 = _createForOfIteratorHelper(e),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _step3$value = _slicedToArray(_step3.value, 2),
              _t8 = _step3$value[0],
              _i10 = _step3$value[1];
            this.plugins[_t8] = _i10, _i10.attach();
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        this.emit("attachPlugins");
      }
    }, {
      key: "detachPlugins",
      value: function detachPlugins(t) {
        t = t || Object.keys(this.plugins);
        var _iterator4 = _createForOfIteratorHelper(t),
          _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
            var _e4 = _step4.value;
            var _t9 = this.plugins[_e4];
            _t9 && _t9.detach(), delete this.plugins[_e4];
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        return this.emit("detachPlugins"), this;
      }
    }]);
    return g;
  }(m);
  var b;
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Error = 1] = "Error", t[t.Ready = 2] = "Ready", t[t.Panning = 3] = "Panning", t[t.Mousemove = 4] = "Mousemove", t[t.Destroy = 5] = "Destroy";
  }(b || (b = {}));
  var v = ["a", "b", "c", "d", "e", "f"],
    y = {
      PANUP: "Move up",
      PANDOWN: "Move down",
      PANLEFT: "Move left",
      PANRIGHT: "Move right",
      ZOOMIN: "Zoom in",
      ZOOMOUT: "Zoom out",
      TOGGLEZOOM: "Toggle zoom level",
      TOGGLE1TO1: "Toggle zoom level",
      ITERATEZOOM: "Toggle zoom level",
      ROTATECCW: "Rotate counterclockwise",
      ROTATECW: "Rotate clockwise",
      FLIPX: "Flip horizontally",
      FLIPY: "Flip vertically",
      FITX: "Fit horizontally",
      FITY: "Fit vertically",
      RESET: "Reset",
      TOGGLEFS: "Toggle fullscreen"
    },
    w = {
      content: null,
      width: "auto",
      height: "auto",
      panMode: "drag",
      touch: !0,
      dragMinThreshold: 3,
      lockAxis: !1,
      mouseMoveFactor: 1,
      mouseMoveFriction: .12,
      zoom: !0,
      pinchToZoom: !0,
      panOnlyZoomed: "auto",
      minScale: 1,
      maxScale: 2,
      friction: .25,
      dragFriction: .35,
      decelFriction: .05,
      click: "toggleZoom",
      dblClick: !1,
      wheel: "zoom",
      wheelLimit: 7,
      spinner: !0,
      bounds: "auto",
      infinite: !1,
      rubberband: !0,
      bounce: !0,
      maxVelocity: 75,
      transformParent: !1,
      classes: {
        content: "f-panzoom__content",
        isLoading: "is-loading",
        canZoomIn: "can-zoom_in",
        canZoomOut: "can-zoom_out",
        isDraggable: "is-draggable",
        isDragging: "is-dragging",
        inFullscreen: "in-fullscreen",
        htmlHasFullscreen: "with-panzoom-in-fullscreen"
      },
      l10n: y
    },
    x = '<div class="f-spinner"><svg viewBox="0 0 50 50"><circle cx="25" cy="25" r="20"></circle><circle cx="25" cy="25" r="20"></circle></svg></div>',
    E = function E(t) {
      return t && null !== t && t instanceof Element && "nodeType" in t;
    },
    S = function S(t, e) {
      t && o(e).forEach(function (e) {
        t.classList.remove(e);
      });
    },
    P = function P(t, e) {
      t && o(e).forEach(function (e) {
        t.classList.add(e);
      });
    },
    C = {
      a: 1,
      b: 0,
      c: 0,
      d: 1,
      e: 0,
      f: 0
    },
    M = 1e5,
    T = 1e3,
    O = "mousemove",
    A = "drag",
    z = "content";
  var L = null,
    R = null;
  var k = /*#__PURE__*/function (_g) {
    _inherits(k, _g);
    var _super2 = _createSuper(k);
    function k(t) {
      var _this7;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, k);
      var n;
      if (_this7 = _super2.call(this, e), Object.defineProperty(_assertThisInitialized(_this7), "pointerTracker", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "resizeObserver", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "updateTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "clickTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "rAF", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "isTicking", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this7), "friction", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "ignoreBounds", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this7), "isBouncingX", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this7), "isBouncingY", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this7), "clicks", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "trackingPoints", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(_assertThisInitialized(_this7), "pwt", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "cwd", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "pmme", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: b.Init
      }), Object.defineProperty(_assertThisInitialized(_this7), "isDragging", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this7), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "content", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(_assertThisInitialized(_this7), "spinner", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this7), "containerRect", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          width: 0,
          height: 0,
          innerWidth: 0,
          innerHeight: 0
        }
      }), Object.defineProperty(_assertThisInitialized(_this7), "contentRect", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          fullWidth: 0,
          fullHeight: 0,
          fitWidth: 0,
          fitHeight: 0,
          width: 0,
          height: 0
        }
      }), Object.defineProperty(_assertThisInitialized(_this7), "dragStart", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          x: 0,
          y: 0,
          top: 0,
          left: 0,
          time: 0
        }
      }), Object.defineProperty(_assertThisInitialized(_this7), "dragOffset", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          x: 0,
          y: 0,
          time: 0
        }
      }), Object.defineProperty(_assertThisInitialized(_this7), "current", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Object.assign({}, C)
      }), Object.defineProperty(_assertThisInitialized(_this7), "target", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Object.assign({}, C)
      }), Object.defineProperty(_assertThisInitialized(_this7), "velocity", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0
        }
      }), Object.defineProperty(_assertThisInitialized(_this7), "lockedAxis", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), !t) throw new Error("Container Element Not Found");
      _this7.container = t, _this7.initContent(), _this7.attachPlugins(Object.assign(Object.assign({}, k.Plugins), i)), _this7.emit("init");
      var o = _this7.content;
      if (o.addEventListener("load", _this7.onLoad), o.addEventListener("error", _this7.onError), _this7.isContentLoading) {
        if (_this7.option("spinner")) {
          t.classList.add(_this7.cn("isLoading"));
          var _e5 = s(x);
          !t.contains(o) || o.parentElement instanceof HTMLPictureElement ? _this7.spinner = t.appendChild(_e5) : _this7.spinner = (null === (n = o.parentElement) || void 0 === n ? void 0 : n.insertBefore(_e5, o)) || null;
        }
        _this7.emit("beforeLoad");
      } else queueMicrotask(function () {
        _this7.enable();
      });
      return _possibleConstructorReturn(_this7);
    }
    _createClass(k, [{
      key: "isTouchDevice",
      get: function get() {
        return null === R && (R = window.matchMedia("(hover: none)").matches), R;
      }
    }, {
      key: "isMobile",
      get: function get() {
        return null === L && (L = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent)), L;
      }
    }, {
      key: "panMode",
      get: function get() {
        return this.options.panMode !== O || this.isTouchDevice ? A : O;
      }
    }, {
      key: "panOnlyZoomed",
      get: function get() {
        var t = this.options.panOnlyZoomed;
        return "auto" === t ? this.isTouchDevice : t;
      }
    }, {
      key: "isInfinite",
      get: function get() {
        return this.option("infinite");
      }
    }, {
      key: "angle",
      get: function get() {
        return 180 * Math.atan2(this.current.b, this.current.a) / Math.PI || 0;
      }
    }, {
      key: "targetAngle",
      get: function get() {
        return 180 * Math.atan2(this.target.b, this.target.a) / Math.PI || 0;
      }
    }, {
      key: "scale",
      get: function get() {
        var _this$current = this.current,
          t = _this$current.a,
          e = _this$current.b;
        return Math.sqrt(t * t + e * e) || 1;
      }
    }, {
      key: "targetScale",
      get: function get() {
        var _this$target = this.target,
          t = _this$target.a,
          e = _this$target.b;
        return Math.sqrt(t * t + e * e) || 1;
      }
    }, {
      key: "minScale",
      get: function get() {
        return this.option("minScale") || 1;
      }
    }, {
      key: "fullScale",
      get: function get() {
        var t = this.contentRect;
        return t.fullWidth / t.fitWidth || 1;
      }
    }, {
      key: "maxScale",
      get: function get() {
        return this.fullScale * (this.option("maxScale") || 1) || 1;
      }
    }, {
      key: "coverScale",
      get: function get() {
        var t = this.containerRect,
          e = this.contentRect,
          i = Math.max(t.height / e.fitHeight, t.width / e.fitWidth) || 1;
        return Math.min(this.fullScale, i);
      }
    }, {
      key: "isScaling",
      get: function get() {
        return Math.abs(this.targetScale - this.scale) > 1e-5 && !this.isResting;
      }
    }, {
      key: "isContentLoading",
      get: function get() {
        var t = this.content;
        return !!(t && t instanceof HTMLImageElement) && !t.complete;
      }
    }, {
      key: "isResting",
      get: function get() {
        if (this.isBouncingX || this.isBouncingY) return !1;
        for (var _i11 = 0, _v = v; _i11 < _v.length; _i11++) {
          var _t10 = _v[_i11];
          var _e6 = "e" == _t10 || "f" === _t10 ? .001 : 1e-5;
          if (Math.abs(this.target[_t10] - this.current[_t10]) > _e6) return !1;
        }
        return !(!this.ignoreBounds && !this.checkBounds().inBounds);
      }
    }, {
      key: "initContent",
      value: function initContent() {
        var t = this.container,
          e = this.cn(z);
        var i = this.option(z) || t.querySelector(".".concat(e));
        if (i || (i = t.querySelector("img,picture") || t.firstElementChild, i && P(i, e)), i instanceof HTMLPictureElement && (i = i.querySelector("img")), !i) throw new Error("No content found");
        this.content = i;
      }
    }, {
      key: "onLoad",
      value: function onLoad() {
        this.spinner && (this.spinner.remove(), this.spinner = null), this.option("spinner") && this.container.classList.remove(this.cn("isLoading")), this.emit("afterLoad"), this.state === b.Init ? this.enable() : this.updateMetrics();
      }
    }, {
      key: "onError",
      value: function onError() {
        this.state !== b.Destroy && (this.spinner && (this.spinner.remove(), this.spinner = null), this.stop(), this.detachEvents(), this.state = b.Error, this.emit("error"));
      }
    }, {
      key: "attachObserver",
      value: function attachObserver() {
        var _this8 = this;
        var t;
        var e = function e() {
          return Math.abs(_this8.containerRect.width - _this8.container.getBoundingClientRect().width) > .1 || Math.abs(_this8.containerRect.height - _this8.container.getBoundingClientRect().height) > .1;
        };
        this.resizeObserver || void 0 === window.ResizeObserver || (this.resizeObserver = new ResizeObserver(function () {
          _this8.updateTimer || (e() ? (_this8.onResize(), _this8.isMobile && (_this8.updateTimer = setTimeout(function () {
            e() && _this8.onResize(), _this8.updateTimer = null;
          }, 500))) : _this8.updateTimer && (clearTimeout(_this8.updateTimer), _this8.updateTimer = null));
        })), null === (t = this.resizeObserver) || void 0 === t || t.observe(this.container);
      }
    }, {
      key: "detachObserver",
      value: function detachObserver() {
        var t;
        null === (t = this.resizeObserver) || void 0 === t || t.disconnect();
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this.container;
        t.addEventListener("click", this.onClick, {
          passive: !1,
          capture: !1
        }), t.addEventListener("wheel", this.onWheel, {
          passive: !1
        }), this.pointerTracker = new c(t, {
          start: this.onPointerDown,
          move: this.onPointerMove,
          end: this.onPointerUp
        }), document.addEventListener(O, this.onMouseMove);
      }
    }, {
      key: "detachEvents",
      value: function detachEvents() {
        var t;
        var e = this.container;
        e.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1
        }), e.removeEventListener("wheel", this.onWheel, {
          passive: !1
        }), null === (t = this.pointerTracker) || void 0 === t || t.stop(), this.pointerTracker = null, document.removeEventListener(O, this.onMouseMove), document.removeEventListener("keydown", this.onKeydown, !0), this.clickTimer && (clearTimeout(this.clickTimer), this.clickTimer = null), this.updateTimer && (clearTimeout(this.updateTimer), this.updateTimer = null);
      }
    }, {
      key: "animate",
      value: function animate() {
        var _this9 = this;
        var t = this.friction;
        this.setTargetForce();
        var e = this.option("maxVelocity");
        for (var _i12 = 0, _v2 = v; _i12 < _v2.length; _i12++) {
          var _i13 = _v2[_i12];
          t ? (this.velocity[_i13] *= 1 - t, e && !this.isScaling && (this.velocity[_i13] = Math.max(Math.min(this.velocity[_i13], e), -1 * e)), this.current[_i13] += this.velocity[_i13]) : this.current[_i13] = this.target[_i13];
        }
        this.setTransform(), this.setEdgeForce(), !this.isResting || this.isDragging ? this.rAF = requestAnimationFrame(function () {
          return _this9.animate();
        }) : this.stop("current");
      }
    }, {
      key: "setTargetForce",
      value: function setTargetForce() {
        for (var _i14 = 0, _v3 = v; _i14 < _v3.length; _i14++) {
          var _t11 = _v3[_i14];
          "e" === _t11 && this.isBouncingX || "f" === _t11 && this.isBouncingY || (this.velocity[_t11] = (1 / (1 - this.friction) - 1) * (this.target[_t11] - this.current[_t11]));
        }
      }
    }, {
      key: "checkBounds",
      value: function checkBounds() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = this.current,
          n = i.e + t,
          s = i.f + e,
          o = this.getBounds(),
          a = o.x,
          r = o.y,
          l = a.min,
          c = a.max,
          h = r.min,
          d = r.max;
        var u = 0,
          p = 0;
        return l !== 1 / 0 && n < l ? u = l - n : c !== 1 / 0 && n > c && (u = c - n), h !== 1 / 0 && s < h ? p = h - s : d !== 1 / 0 && s > d && (p = d - s), Math.abs(u) < .001 && (u = 0), Math.abs(p) < .001 && (p = 0), Object.assign(Object.assign({}, o), {
          xDiff: u,
          yDiff: p,
          inBounds: !u && !p
        });
      }
    }, {
      key: "clampTargetBounds",
      value: function clampTargetBounds() {
        var t = this.target,
          _this$getBounds = this.getBounds(),
          e = _this$getBounds.x,
          i = _this$getBounds.y;
        e.min !== 1 / 0 && (t.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (t.e = Math.min(t.e, e.max)), i.min !== 1 / 0 && (t.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (t.f = Math.min(t.f, i.max));
      }
    }, {
      key: "calculateContentDim",
      value: function calculateContentDim() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
        var e = this.content,
          i = this.contentRect,
          n = i.fitWidth,
          s = i.fitHeight,
          o = i.fullWidth,
          a = i.fullHeight;
        var r = o,
          l = a;
        if (this.option("zoom") || 0 !== this.angle) {
          var _i15 = !(e instanceof HTMLImageElement) && ("none" === window.getComputedStyle(e).maxWidth || "none" === window.getComputedStyle(e).maxHeight),
            _c = _i15 ? o : n,
            _h = _i15 ? a : s,
            _d = this.getMatrix(t),
            _u = new DOMPoint(0, 0).matrixTransform(_d),
            _p = new DOMPoint(0 + _c, 0).matrixTransform(_d),
            _f = new DOMPoint(0 + _c, 0 + _h).matrixTransform(_d),
            _m2 = new DOMPoint(0, 0 + _h).matrixTransform(_d),
            _g2 = Math.abs(_f.x - _u.x),
            _b = Math.abs(_f.y - _u.y),
            _v4 = Math.abs(_m2.x - _p.x),
            _y = Math.abs(_m2.y - _p.y);
          r = Math.max(_g2, _v4), l = Math.max(_b, _y);
        }
        return {
          contentWidth: r,
          contentHeight: l
        };
      }
    }, {
      key: "setEdgeForce",
      value: function setEdgeForce() {
        if (this.ignoreBounds || this.isDragging || this.panMode === O || this.targetScale < this.scale) return this.isBouncingX = !1, void (this.isBouncingY = !1);
        var t = this.target,
          _this$checkBounds = this.checkBounds(),
          e = _this$checkBounds.x,
          i = _this$checkBounds.y,
          n = _this$checkBounds.xDiff,
          s = _this$checkBounds.yDiff;
        var o = this.option("maxVelocity");
        var a = this.velocity.e,
          r = this.velocity.f;
        0 !== n ? (this.isBouncingX = !0, n * a <= 0 ? a += .14 * n : (a = .14 * n, e.min !== 1 / 0 && (this.target.e = Math.max(t.e, e.min)), e.max !== 1 / 0 && (this.target.e = Math.min(t.e, e.max))), o && (a = Math.max(Math.min(a, o), -1 * o))) : this.isBouncingX = !1, 0 !== s ? (this.isBouncingY = !0, s * r <= 0 ? r += .14 * s : (r = .14 * s, i.min !== 1 / 0 && (this.target.f = Math.max(t.f, i.min)), i.max !== 1 / 0 && (this.target.f = Math.min(t.f, i.max))), o && (r = Math.max(Math.min(r, o), -1 * o))) : this.isBouncingY = !1, this.isBouncingX && (this.velocity.e = a), this.isBouncingY && (this.velocity.f = r);
      }
    }, {
      key: "enable",
      value: function enable() {
        var t = this.content,
          e = new DOMMatrixReadOnly(window.getComputedStyle(t).transform);
        for (var _i16 = 0, _v5 = v; _i16 < _v5.length; _i16++) {
          var _t12 = _v5[_i16];
          this.current[_t12] = this.target[_t12] = e[_t12];
        }
        this.updateMetrics(), this.attachObserver(), this.attachEvents(), this.state = b.Ready, this.emit("ready");
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var _this10 = this;
        var e;
        this.isDragging && (null === (e = this.pointerTracker) || void 0 === e || e.clear(), this.trackingPoints = [], this.startDecelAnim());
        var i = t.target;
        if (!i || t.defaultPrevented) return;
        if (i && i.hasAttribute("disabled")) return t.preventDefault(), void t.stopPropagation();
        if (function () {
          var t = window.getSelection();
          return t && "Range" === t.type;
        }() && !i.closest("button")) return;
        var n = i.closest("[data-panzoom-action]"),
          s = i.closest("[data-panzoom-change]"),
          o = n || s,
          a = o && E(o) ? o.dataset : null;
        if (a) {
          var _e7 = a.panzoomChange,
            _i17 = a.panzoomAction;
          if ((_e7 || _i17) && t.preventDefault(), _e7) {
            var _t13 = {};
            try {
              _t13 = JSON.parse(_e7);
            } catch (t) {
              console && console.warn("The given data was not valid JSON");
            }
            return void this.applyChange(_t13);
          }
          if (_i17) return void (this[_i17] && this[_i17]());
        }
        if (Math.abs(this.dragOffset.x) > 3 || Math.abs(this.dragOffset.y) > 3) return t.preventDefault(), void t.stopPropagation();
        var r = this.content.getBoundingClientRect();
        if (this.dragStart.time && !this.canZoomOut() && (Math.abs(r.x - this.dragStart.x) > 2 || Math.abs(r.y - this.dragStart.y) > 2)) return;
        this.dragStart.time = 0;
        var l = function l(e) {
            _this10.option("zoom") && e && "string" == typeof e && /(iterateZoom)|(toggle(Zoom|Full|Cover|Max)|(zoomTo(Fit|Cover|Max)))/.test(e) && "function" == typeof _this10[e] && (t.preventDefault(), _this10[e]({
              event: t
            }));
          },
          c = this.option("click", t),
          h = this.option("dblClick", t);
        h ? (this.clicks++, 1 == this.clicks && (this.clickTimer = setTimeout(function () {
          1 === _this10.clicks ? (_this10.emit("click", t), !t.defaultPrevented && c && l(c)) : (_this10.emit("dblClick", t), t.defaultPrevented || l(h)), _this10.clicks = 0, _this10.clickTimer = null;
        }, 350))) : (this.emit("click", t), !t.defaultPrevented && c && l(c));
      }
    }, {
      key: "addTrackingPoint",
      value: function addTrackingPoint(t) {
        var e = this.trackingPoints.filter(function (t) {
          return t.time > Date.now() - 100;
        });
        e.push(t), this.trackingPoints = e;
      }
    }, {
      key: "onPointerDown",
      value: function onPointerDown(t, e, i) {
        var n;
        if (!1 === this.option("touch", t)) return !1;
        this.pwt = 0, this.dragOffset = {
          x: 0,
          y: 0,
          time: 0
        }, this.trackingPoints = [];
        var s = this.content.getBoundingClientRect();
        if (this.dragStart = {
          x: s.x,
          y: s.y,
          top: s.top,
          left: s.left,
          time: Date.now()
        }, this.clickTimer) return !1;
        if (this.panMode === O && this.targetScale > 1) return t.preventDefault(), t.stopPropagation(), !1;
        var o = t.composedPath()[0];
        if (!i.length) {
          if (["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO", "IFRAME"].includes(o.nodeName) || o.closest("[contenteditable]") || o.closest("[data-selectable]") || o.closest("[data-draggable]") || o.closest("[data-clickable]") || o.closest("[data-panzoom-change]") || o.closest("[data-panzoom-action]")) return !1;
          null === (n = window.getSelection()) || void 0 === n || n.removeAllRanges();
        }
        if ("mousedown" === t.type) ["A", "BUTTON"].includes(o.nodeName) || t.preventDefault();else if (Math.abs(this.velocity.a) > .3) return !1;
        return this.target.e = this.current.e, this.target.f = this.current.f, this.stop(), this.isDragging || (this.isDragging = !0, this.addTrackingPoint(e), this.emit("touchStart", t)), !0;
      }
    }, {
      key: "onPointerMove",
      value: function onPointerMove(t, i, s) {
        if (!1 === this.option("touch", t)) return;
        if (!this.isDragging) return;
        if (i.length < 2 && this.panOnlyZoomed && e(this.targetScale) <= e(this.minScale)) return;
        if (this.emit("touchMove", t), t.defaultPrevented) return;
        this.addTrackingPoint(i[0]);
        var o = this.content,
          a = d(s[0], s[1]),
          r = d(i[0], i[1]);
        var l = 0,
          c = 0;
        if (i.length > 1) {
          var _t14 = o.getBoundingClientRect();
          l = a.clientX - _t14.left - .5 * _t14.width, c = a.clientY - _t14.top - .5 * _t14.height;
        }
        var u = h(s[0], s[1]),
          p = h(i[0], i[1]);
        var f = u ? p / u : 1,
          m = r.clientX - a.clientX,
          g = r.clientY - a.clientY;
        this.dragOffset.x += m, this.dragOffset.y += g, this.dragOffset.time = Date.now() - this.dragStart.time;
        var b = e(this.targetScale) === e(this.minScale) && this.option("lockAxis");
        if (b && !this.lockedAxis) if ("xy" === b || "y" === b || "touchmove" === t.type) {
          if (Math.abs(this.dragOffset.x) < 6 && Math.abs(this.dragOffset.y) < 6) return void t.preventDefault();
          var _e8 = Math.abs(180 * Math.atan2(this.dragOffset.y, this.dragOffset.x) / Math.PI);
          this.lockedAxis = _e8 > 45 && _e8 < 135 ? "y" : "x", this.dragOffset.x = 0, this.dragOffset.y = 0, m = 0, g = 0;
        } else this.lockedAxis = b;
        if (n(t.target, this.content) && (b = "x", this.dragOffset.y = 0), b && "xy" !== b && this.lockedAxis !== b && e(this.targetScale) === e(this.minScale)) return;
        t.cancelable && t.preventDefault(), this.container.classList.add(this.cn("isDragging"));
        var v = this.checkBounds(m, g);
        this.option("rubberband") ? ("x" !== this.isInfinite && (v.xDiff > 0 && m < 0 || v.xDiff < 0 && m > 0) && (m *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitWidth * v.xDiff))), "y" !== this.isInfinite && (v.yDiff > 0 && g < 0 || v.yDiff < 0 && g > 0) && (g *= Math.max(0, .5 - Math.abs(.75 / this.contentRect.fitHeight * v.yDiff)))) : (v.xDiff && (m = 0), v.yDiff && (g = 0));
        var y = this.targetScale,
          w = this.minScale,
          x = this.maxScale;
        y < .5 * w && (f = Math.max(f, w)), y > 1.5 * x && (f = Math.min(f, x)), "y" === this.lockedAxis && e(y) === e(w) && (m = 0), "x" === this.lockedAxis && e(y) === e(w) && (g = 0), this.applyChange({
          originX: l,
          originY: c,
          panX: m,
          panY: g,
          scale: f,
          friction: this.option("dragFriction"),
          ignoreBounds: !0
        });
      }
    }, {
      key: "onPointerUp",
      value: function onPointerUp(t, e, i) {
        if (i.length) return this.dragOffset.x = 0, this.dragOffset.y = 0, void (this.trackingPoints = []);
        this.container.classList.remove(this.cn("isDragging")), this.isDragging && (this.addTrackingPoint(e), this.panOnlyZoomed && this.contentRect.width - this.contentRect.fitWidth < 1 && this.contentRect.height - this.contentRect.fitHeight < 1 && (this.trackingPoints = []), n(t.target, this.content) && "y" === this.lockedAxis && (this.trackingPoints = []), this.emit("touchEnd", t), this.isDragging = !1, this.lockedAxis = !1, this.state !== b.Destroy && (t.defaultPrevented || this.startDecelAnim()));
      }
    }, {
      key: "startDecelAnim",
      value: function startDecelAnim() {
        var t;
        var i = this.isScaling;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
        for (var _i18 = 0, _v6 = v; _i18 < _v6.length; _i18++) {
          var _t15 = _v6[_i18];
          this.velocity[_t15] = 0;
        }
        this.target.e = this.current.e, this.target.f = this.current.f, S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = !1;
        var n = this.trackingPoints,
          s = n[0],
          o = n[n.length - 1];
        var a = 0,
          r = 0,
          l = 0;
        o && s && (a = o.clientX - s.clientX, r = o.clientY - s.clientY, l = o.time - s.time);
        var c = (null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1;
        1 !== c && (a *= c, r *= c);
        var h = 0,
          d = 0,
          u = 0,
          p = 0,
          f = this.option("decelFriction");
        var m = this.targetScale;
        if (l > 0) {
          u = Math.abs(a) > 3 ? a / (l / 30) : 0, p = Math.abs(r) > 3 ? r / (l / 30) : 0;
          var _t16 = this.option("maxVelocity");
          _t16 && (u = Math.max(Math.min(u, _t16), -1 * _t16), p = Math.max(Math.min(p, _t16), -1 * _t16));
        }
        u && (h = u / (1 / (1 - f) - 1)), p && (d = p / (1 / (1 - f) - 1)), ("y" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "y" === this.lockedAxis && e(m) === this.minScale) && (h = u = 0), ("x" === this.option("lockAxis") || "xy" === this.option("lockAxis") && "x" === this.lockedAxis && e(m) === this.minScale) && (d = p = 0);
        var g = this.dragOffset.x,
          b = this.dragOffset.y,
          y = this.option("dragMinThreshold") || 0;
        Math.abs(g) < y && Math.abs(b) < y && (h = d = 0, u = p = 0), (m < this.minScale - 1e-5 || m > this.maxScale + 1e-5 || i && !h && !d) && (f = .35), this.applyChange({
          panX: h,
          panY: d,
          friction: f
        }), this.emit("decel", u, p, g, b);
      }
    }, {
      key: "onWheel",
      value: function onWheel(t) {
        var e = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        });
        var i = Math.max(-1, Math.min(1, e));
        if (this.emit("wheel", t, i), this.panMode === O) return;
        if (t.defaultPrevented) return;
        var n = this.option("wheel");
        "pan" === n ? (t.preventDefault(), this.panOnlyZoomed && !this.canZoomOut() || this.applyChange({
          panX: 2 * -t.deltaX,
          panY: 2 * -t.deltaY,
          bounce: !1
        })) : "zoom" === n && !1 !== this.option("zoom") && this.zoomWithWheel(t);
      }
    }, {
      key: "onMouseMove",
      value: function onMouseMove(t) {
        this.panWithMouse(t);
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t) {
        "Escape" === t.key && this.toggleFS();
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.updateMetrics(), this.checkBounds().inBounds || this.requestTick();
      }
    }, {
      key: "setTransform",
      value: function setTransform() {
        this.emit("beforeTransform");
        var t = this.current,
          i = this.target,
          n = this.content,
          s = this.contentRect,
          o = Object.assign({}, C);
        for (var _i19 = 0, _v7 = v; _i19 < _v7.length; _i19++) {
          var _n3 = _v7[_i19];
          var _s3 = "e" == _n3 || "f" === _n3 ? T : M;
          o[_n3] = e(t[_n3], _s3), Math.abs(i[_n3] - t[_n3]) < ("e" == _n3 || "f" === _n3 ? .51 : .001) && (t[_n3] = i[_n3]);
        }
        var a = o.a,
          r = o.b,
          l = o.c,
          c = o.d,
          h = o.e,
          d = o.f,
          u = "matrix(".concat(a, ", ").concat(r, ", ").concat(l, ", ").concat(c, ", ").concat(h, ", ").concat(d, ")"),
          p = n.parentElement instanceof HTMLPictureElement ? n.parentElement : n;
        if (this.option("transformParent") && (p = p.parentElement || p), p.style.transform === u) return;
        p.style.transform = u;
        var _this$calculateConten = this.calculateContentDim(),
          f = _this$calculateConten.contentWidth,
          m = _this$calculateConten.contentHeight;
        s.width = f, s.height = m, this.emit("afterTransform");
      }
    }, {
      key: "updateMetrics",
      value: function updateMetrics() {
        var _ref4;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var i;
        if (!this || this.state === b.Destroy) return;
        if (this.isContentLoading) return;
        var n = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1),
          s = this.container,
          o = this.content,
          a = o instanceof HTMLImageElement,
          r = s.getBoundingClientRect(),
          l = getComputedStyle(this.container);
        var c = r.width * n,
          h = r.height * n;
        var d = parseFloat(l.paddingTop) + parseFloat(l.paddingBottom),
          u = c - (parseFloat(l.paddingLeft) + parseFloat(l.paddingRight)),
          p = h - d;
        this.containerRect = {
          width: c,
          height: h,
          innerWidth: u,
          innerHeight: p
        };
        var f = this.option("width") || "auto",
          m = this.option("height") || "auto";
        "auto" === f && (f = parseFloat(o.dataset.width || "") || function (t) {
          var e = 0;
          return e = t instanceof HTMLImageElement ? t.naturalWidth : t instanceof SVGElement ? t.width.baseVal.value : Math.max(t.offsetWidth, t.scrollWidth), e || 0;
        }(o)), "auto" === m && (m = parseFloat(o.dataset.height || "") || function (t) {
          var e = 0;
          return e = t instanceof HTMLImageElement ? t.naturalHeight : t instanceof SVGElement ? t.height.baseVal.value : Math.max(t.offsetHeight, t.scrollHeight), e || 0;
        }(o));
        var g = o.parentElement instanceof HTMLPictureElement ? o.parentElement : o;
        this.option("transformParent") && (g = g.parentElement || g);
        var v = g.getAttribute("style") || "";
        g.style.setProperty("transform", "none", "important"), a && (g.style.width = "", g.style.height = ""), g.offsetHeight;
        var y = o.getBoundingClientRect();
        var w = y.width * n,
          x = y.height * n,
          E = 0,
          S = 0;
        a && (Math.abs(f - w) > 1 || Math.abs(m - x) > 1) && (_ref4 = function (t, e, i, n) {
          var s = i / n;
          return s > t / e ? (i = t, n = t / s) : (i = e * s, n = e), {
            width: i,
            height: n,
            top: .5 * (e - n),
            left: .5 * (t - i)
          };
        }(w, x, f, m), w = _ref4.width, x = _ref4.height, E = _ref4.top, S = _ref4.left, _ref4), this.contentRect = Object.assign(Object.assign({}, this.contentRect), {
          top: y.top - r.top + E,
          bottom: r.bottom - y.bottom + E,
          left: y.left - r.left + S,
          right: r.right - y.right + S,
          fitWidth: w,
          fitHeight: x,
          width: w,
          height: x,
          fullWidth: f,
          fullHeight: m
        }), g.style.cssText = v, a && (g.style.width = "".concat(w, "px"), g.style.height = "".concat(x, "px")), this.setTransform(), !0 !== t && this.emit("refresh"), this.ignoreBounds || (e(this.targetScale) < e(this.minScale) ? this.zoomTo(this.minScale, {
          friction: 0
        }) : this.targetScale > this.maxScale ? this.zoomTo(this.maxScale, {
          friction: 0
        }) : this.state === b.Init || this.checkBounds().inBounds || this.requestTick()), this.updateControls();
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        var t = this.option("bounds");
        if ("auto" !== t) return t;
        var _this$calculateConten2 = this.calculateContentDim(this.target),
          i = _this$calculateConten2.contentWidth,
          n = _this$calculateConten2.contentHeight;
        var s = 0,
          o = 0,
          a = 0,
          r = 0;
        var l = this.option("infinite");
        if (!0 === l || this.lockedAxis && l === this.lockedAxis) s = -1 / 0, a = 1 / 0, o = -1 / 0, r = 1 / 0;else {
          var _t17 = this.containerRect,
            _l = this.contentRect,
            _c2 = e(this.contentRect.fitWidth * this.targetScale, T),
            _h2 = e(this.contentRect.fitHeight * this.targetScale, T),
            _d2 = _t17.innerWidth,
            _u2 = _t17.innerHeight;
          if (this.containerRect.width === _c2 && (_d2 = _t17.width), this.containerRect.width === _h2 && (_u2 = _t17.height), i > _d2) {
            a = .5 * (i - _d2), s = -1 * a;
            var _t18 = .5 * (_l.right - _l.left);
            s += _t18, a += _t18;
          }
          if (this.contentRect.fitWidth > _d2 && i < _d2 && (s -= .5 * (this.contentRect.fitWidth - _d2), a -= .5 * (this.contentRect.fitWidth - _d2)), n > _u2) {
            r = .5 * (n - _u2), o = -1 * r;
            var _t19 = .5 * (_l.bottom - _l.top);
            o += _t19, r += _t19;
          }
          this.contentRect.fitHeight > _u2 && n < _u2 && (s -= .5 * (this.contentRect.fitHeight - _u2), a -= .5 * (this.contentRect.fitHeight - _u2));
        }
        return {
          x: {
            min: s,
            max: a
          },
          y: {
            min: o,
            max: r
          }
        };
      }
    }, {
      key: "updateControls",
      value: function updateControls() {
        var t = this,
          i = t.container,
          n = t.panMode,
          s = t.contentRect,
          o = t.fullScale,
          r = t.targetScale,
          l = t.coverScale,
          c = t.maxScale,
          h = t.minScale;
        var d = {
            toggleMax: r - h < .5 * (c - h) ? c : h,
            toggleCover: r - h < .5 * (l - h) ? l : h,
            toggleZoom: r - h < .5 * (o - h) ? o : h
          }[t.option("click") || ""] || h,
          u = t.canZoomIn(),
          p = t.canZoomOut(),
          f = n === A && !!this.option("touch"),
          m = p && f;
        f && (e(r) < e(h) && !this.panOnlyZoomed && (m = !0), (e(s.width, 1) > e(s.fitWidth, 1) || e(s.height, 1) > e(s.fitHeight, 1)) && (m = !0)), e(s.width * r, 1) < e(s.fitWidth, 1) && (m = !1), n === O && (m = !1);
        var g = u && e(d) > e(r),
          b = !g && !m && p && e(d) < e(r);
        a(i, this.cn("canZoomIn"), g), a(i, this.cn("canZoomOut"), b), a(i, this.cn("isDraggable"), m);
        var _iterator5 = _createForOfIteratorHelper(i.querySelectorAll('[data-panzoom-action="zoomIn"]')),
          _step5;
        try {
          for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
            var _t20 = _step5.value;
            u ? (_t20.removeAttribute("disabled"), _t20.removeAttribute("tabindex")) : (_t20.setAttribute("disabled", ""), _t20.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _iterator5.e(err);
        } finally {
          _iterator5.f();
        }
        var _iterator6 = _createForOfIteratorHelper(i.querySelectorAll('[data-panzoom-action="zoomOut"]')),
          _step6;
        try {
          for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
            var _t21 = _step6.value;
            p ? (_t21.removeAttribute("disabled"), _t21.removeAttribute("tabindex")) : (_t21.setAttribute("disabled", ""), _t21.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _iterator6.e(err);
        } finally {
          _iterator6.f();
        }
        var _iterator7 = _createForOfIteratorHelper(i.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')),
          _step7;
        try {
          for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
            var _t22 = _step7.value;
            u || p ? (_t22.removeAttribute("disabled"), _t22.removeAttribute("tabindex")) : (_t22.setAttribute("disabled", ""), _t22.setAttribute("tabindex", "-1"));
            var _e9 = _t22.querySelector("g");
            _e9 && (_e9.style.display = u ? "" : "none");
          }
        } catch (err) {
          _iterator7.e(err);
        } finally {
          _iterator7.f();
        }
      }
    }, {
      key: "panTo",
      value: function panTo(_ref5) {
        var _ref5$x = _ref5.x,
          t = _ref5$x === void 0 ? this.target.e : _ref5$x,
          _ref5$y = _ref5.y,
          e = _ref5$y === void 0 ? this.target.f : _ref5$y,
          _ref5$scale = _ref5.scale,
          i = _ref5$scale === void 0 ? this.targetScale : _ref5$scale,
          _ref5$friction = _ref5.friction,
          n = _ref5$friction === void 0 ? this.option("friction") : _ref5$friction,
          _ref5$angle = _ref5.angle,
          s = _ref5$angle === void 0 ? 0 : _ref5$angle,
          _ref5$originX = _ref5.originX,
          o = _ref5$originX === void 0 ? 0 : _ref5$originX,
          _ref5$originY = _ref5.originY,
          a = _ref5$originY === void 0 ? 0 : _ref5$originY,
          _ref5$flipX = _ref5.flipX,
          r = _ref5$flipX === void 0 ? !1 : _ref5$flipX,
          _ref5$flipY = _ref5.flipY,
          l = _ref5$flipY === void 0 ? !1 : _ref5$flipY,
          _ref5$ignoreBounds = _ref5.ignoreBounds,
          c = _ref5$ignoreBounds === void 0 ? !1 : _ref5$ignoreBounds;
        this.state !== b.Destroy && this.applyChange({
          panX: t - this.target.e,
          panY: e - this.target.f,
          scale: i / this.targetScale,
          angle: s,
          originX: o,
          originY: a,
          friction: n,
          flipX: r,
          flipY: l,
          ignoreBounds: c
        });
      }
    }, {
      key: "applyChange",
      value: function applyChange(_ref6) {
        var _ref6$panX = _ref6.panX,
          t = _ref6$panX === void 0 ? 0 : _ref6$panX,
          _ref6$panY = _ref6.panY,
          i = _ref6$panY === void 0 ? 0 : _ref6$panY,
          _ref6$scale = _ref6.scale,
          n = _ref6$scale === void 0 ? 1 : _ref6$scale,
          _ref6$angle = _ref6.angle,
          s = _ref6$angle === void 0 ? 0 : _ref6$angle,
          _ref6$originX = _ref6.originX,
          o = _ref6$originX === void 0 ? -this.current.e : _ref6$originX,
          _ref6$originY = _ref6.originY,
          a = _ref6$originY === void 0 ? -this.current.f : _ref6$originY,
          _ref6$friction = _ref6.friction,
          r = _ref6$friction === void 0 ? this.option("friction") : _ref6$friction,
          _ref6$flipX = _ref6.flipX,
          l = _ref6$flipX === void 0 ? !1 : _ref6$flipX,
          _ref6$flipY = _ref6.flipY,
          c = _ref6$flipY === void 0 ? !1 : _ref6$flipY,
          _ref6$ignoreBounds = _ref6.ignoreBounds,
          h = _ref6$ignoreBounds === void 0 ? !1 : _ref6$ignoreBounds,
          _ref6$bounce = _ref6.bounce,
          d = _ref6$bounce === void 0 ? this.option("bounce") : _ref6$bounce;
        if (this.state === b.Destroy) return;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.friction = r || 0, this.ignoreBounds = h;
        var u = this.current,
          p = u.e,
          f = u.f,
          m = this.getMatrix(this.target);
        var g = new DOMMatrix().translate(p, f).translate(o, a).translate(t, i);
        if (this.option("zoom")) {
          if (!h) {
            var _t23 = this.targetScale,
              _e10 = this.minScale,
              _i20 = this.maxScale;
            _t23 * n < _e10 && (n = _e10 / _t23), _t23 * n > _i20 && (n = _i20 / _t23);
          }
          g = g.scale(n);
        }
        g = g.translate(-o, -a).translate(-p, -f).multiply(m), s && (g = g.rotate(s)), l && (g = g.scale(-1, 1)), c && (g = g.scale(1, -1));
        for (var _i21 = 0, _v8 = v; _i21 < _v8.length; _i21++) {
          var _t24 = _v8[_i21];
          "e" !== _t24 && "f" !== _t24 && (g[_t24] > this.minScale + 1e-5 || g[_t24] < this.minScale - 1e-5) ? this.target[_t24] = g[_t24] : this.target[_t24] = e(g[_t24], T);
        }
        (this.targetScale < this.scale || Math.abs(n - 1) > .1 || this.panMode === O || !1 === d) && !h && this.clampTargetBounds(), this.isResting || (this.state = b.Panning, this.requestTick());
      }
    }, {
      key: "stop",
      value: function stop() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        if (this.state === b.Init || this.state === b.Destroy) return;
        var e = this.isTicking;
        this.rAF && (cancelAnimationFrame(this.rAF), this.rAF = null), this.isBouncingX = !1, this.isBouncingY = !1;
        for (var _i22 = 0, _v9 = v; _i22 < _v9.length; _i22++) {
          var _e11 = _v9[_i22];
          this.velocity[_e11] = 0, "current" === t ? this.current[_e11] = this.target[_e11] : "target" === t && (this.target[_e11] = this.current[_e11]);
        }
        this.setTransform(), S(this.container, "is-scaling"), S(this.container, "is-animating"), this.isTicking = !1, this.state = b.Ready, e && (this.emit("endAnimation"), this.updateControls());
      }
    }, {
      key: "requestTick",
      value: function requestTick() {
        var _this11 = this;
        this.isTicking || (this.emit("startAnimation"), this.updateControls(), P(this.container, "is-animating"), this.isScaling && P(this.container, "is-scaling")), this.isTicking = !0, this.rAF || (this.rAF = requestAnimationFrame(function () {
          return _this11.animate();
        }));
      }
    }, {
      key: "panWithMouse",
      value: function panWithMouse(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("mouseMoveFriction");
        if (this.pmme = t, this.panMode !== O || !t) return;
        if (e(this.targetScale) <= e(this.minScale)) return;
        this.emit("mouseMove", t);
        var n = this.container,
          s = this.containerRect,
          o = this.contentRect,
          a = s.width,
          r = s.height,
          l = n.getBoundingClientRect(),
          c = (t.clientX || 0) - l.left,
          h = (t.clientY || 0) - l.top;
        var _this$calculateConten3 = this.calculateContentDim(this.target),
          d = _this$calculateConten3.contentWidth,
          u = _this$calculateConten3.contentHeight;
        var p = this.option("mouseMoveFactor");
        p > 1 && (d !== a && (d *= p), u !== r && (u *= p));
        var f = .5 * (d - a) - c / a * 100 / 100 * (d - a);
        f += .5 * (o.right - o.left);
        var m = .5 * (u - r) - h / r * 100 / 100 * (u - r);
        m += .5 * (o.bottom - o.top), this.applyChange({
          panX: f - this.target.e,
          panY: m - this.target.f,
          friction: i
        });
      }
    }, {
      key: "zoomWithWheel",
      value: function zoomWithWheel(t) {
        if (this.state === b.Destroy || this.state === b.Init) return;
        var i = Date.now();
        if (i - this.pwt < 45) return void t.preventDefault();
        this.pwt = i;
        var n = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
          return Math.abs(e) > Math.abs(t) ? e : t;
        });
        var s = Math.max(-1, Math.min(1, n)),
          o = this.targetScale,
          a = this.maxScale,
          r = this.minScale;
        var l = o * (100 + 45 * s) / 100;
        e(l) < e(r) && e(o) <= e(r) ? (this.cwd += Math.abs(s), l = r) : e(l) > e(a) && e(o) >= e(a) ? (this.cwd += Math.abs(s), l = a) : (this.cwd = 0, l = Math.max(Math.min(l, a), r)), this.cwd > this.option("wheelLimit") || (t.preventDefault(), e(l) !== e(o) && this.zoomTo(l, {
          event: t
        }));
      }
    }, {
      key: "canZoomIn",
      value: function canZoomIn() {
        return this.option("zoom") && (e(this.contentRect.width, 1) < e(this.contentRect.fitWidth, 1) || e(this.targetScale) < e(this.maxScale));
      }
    }, {
      key: "canZoomOut",
      value: function canZoomOut() {
        return this.option("zoom") && e(this.targetScale) > e(this.minScale);
      }
    }, {
      key: "zoomIn",
      value: function zoomIn() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1.25;
        var e = arguments.length > 1 ? arguments[1] : undefined;
        this.zoomTo(this.targetScale * t, e);
      }
    }, {
      key: "zoomOut",
      value: function zoomOut() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : .8;
        var e = arguments.length > 1 ? arguments[1] : undefined;
        this.zoomTo(this.targetScale * t, e);
      }
    }, {
      key: "zoomToFit",
      value: function zoomToFit(t) {
        this.zoomTo("fit", t);
      }
    }, {
      key: "zoomToCover",
      value: function zoomToCover(t) {
        this.zoomTo("cover", t);
      }
    }, {
      key: "zoomToFull",
      value: function zoomToFull(t) {
        this.zoomTo("full", t);
      }
    }, {
      key: "zoomToMax",
      value: function zoomToMax(t) {
        this.zoomTo("max", t);
      }
    }, {
      key: "toggleZoom",
      value: function toggleZoom(t) {
        this.zoomTo(this.targetScale - this.minScale < .5 * (this.fullScale - this.minScale) ? "full" : "fit", t);
      }
    }, {
      key: "toggleMax",
      value: function toggleMax(t) {
        this.zoomTo(this.targetScale - this.minScale < .5 * (this.maxScale - this.minScale) ? "max" : "fit", t);
      }
    }, {
      key: "toggleCover",
      value: function toggleCover(t) {
        this.zoomTo(this.targetScale - this.minScale < .5 * (this.coverScale - this.minScale) ? "cover" : "fit", t);
      }
    }, {
      key: "iterateZoom",
      value: function iterateZoom(t) {
        this.zoomTo("next", t);
      }
    }, {
      key: "zoomTo",
      value: function zoomTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$friction = _ref7.friction,
          e = _ref7$friction === void 0 ? "auto" : _ref7$friction,
          _ref7$originX = _ref7.originX,
          i = _ref7$originX === void 0 ? "auto" : _ref7$originX,
          _ref7$originY = _ref7.originY,
          n = _ref7$originY === void 0 ? "auto" : _ref7$originY,
          s = _ref7.event;
        if (this.isContentLoading || this.state === b.Destroy) return;
        var o = this.targetScale;
        this.stop();
        var a = 1;
        if (this.panMode === O && (s = this.pmme || s), s || "auto" === i || "auto" === n) {
          var _t25 = this.content.getBoundingClientRect(),
            _e12 = this.container.getBoundingClientRect(),
            _o = s ? s.clientX : _e12.left + .5 * _e12.width,
            _a = s ? s.clientY : _e12.top + .5 * _e12.height;
          i = _o - _t25.left - .5 * _t25.width, n = _a - _t25.top - .5 * _t25.height;
        }
        var r = this.fullScale,
          l = this.maxScale;
        var c = this.coverScale;
        "number" == typeof t ? a = t / o : ("next" === t && (r - c < .2 && (c = r), t = o < r - 1e-5 ? "full" : o < l - 1e-5 ? "max" : "fit"), a = "full" === t ? r / o || 1 : "cover" === t ? c / o || 1 : "max" === t ? l / o || 1 : 1 / o || 1), e = "auto" === e ? a > 1 ? .15 : .25 : e, this.applyChange({
          scale: a,
          originX: i,
          originY: n,
          friction: e
        }), s && this.panMode === O && this.panWithMouse(s, e);
      }
    }, {
      key: "rotateCCW",
      value: function rotateCCW() {
        this.applyChange({
          angle: -90
        });
      }
    }, {
      key: "rotateCW",
      value: function rotateCW() {
        this.applyChange({
          angle: 90
        });
      }
    }, {
      key: "flipX",
      value: function flipX() {
        this.applyChange({
          flipX: !0
        });
      }
    }, {
      key: "flipY",
      value: function flipY() {
        this.applyChange({
          flipY: !0
        });
      }
    }, {
      key: "fitX",
      value: function fitX() {
        this.stop("target");
        var t = this.containerRect,
          e = this.contentRect,
          i = this.target;
        this.applyChange({
          panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
          panY: .5 * t.height - (e.top + .5 * e.fitHeight) - i.f,
          scale: t.width / e.fitWidth / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0
        });
      }
    }, {
      key: "fitY",
      value: function fitY() {
        this.stop("target");
        var t = this.containerRect,
          e = this.contentRect,
          i = this.target;
        this.applyChange({
          panX: .5 * t.width - (e.left + .5 * e.fitWidth) - i.e,
          panY: .5 * t.innerHeight - (e.top + .5 * e.fitHeight) - i.f,
          scale: t.height / e.fitHeight / this.targetScale,
          originX: 0,
          originY: 0,
          ignoreBounds: !0
        });
      }
    }, {
      key: "toggleFS",
      value: function toggleFS() {
        var t = this.container,
          e = this.cn("inFullscreen"),
          i = this.cn("htmlHasFullscreen");
        t.classList.toggle(e);
        var n = t.classList.contains(e);
        n ? (document.documentElement.classList.add(i), document.addEventListener("keydown", this.onKeydown, !0)) : (document.documentElement.classList.remove(i), document.removeEventListener("keydown", this.onKeydown, !0)), this.updateMetrics(), this.emit(n ? "enterFS" : "exitFS");
      }
    }, {
      key: "getMatrix",
      value: function getMatrix() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.current;
        var e = t.a,
          i = t.b,
          n = t.c,
          s = t.d,
          o = t.e,
          a = t.f;
        return new DOMMatrix([e, i, n, s, o, a]);
      }
    }, {
      key: "reset",
      value: function reset(t) {
        if (this.state !== b.Init && this.state !== b.Destroy) {
          this.stop("current");
          for (var _i23 = 0, _v10 = v; _i23 < _v10.length; _i23++) {
            var _t26 = _v10[_i23];
            this.target[_t26] = C[_t26];
          }
          this.target.a = this.minScale, this.target.d = this.minScale, this.clampTargetBounds(), this.isResting || (this.friction = void 0 === t ? this.option("friction") : t, this.state = b.Panning, this.requestTick());
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.stop(), this.state = b.Destroy, this.detachEvents(), this.detachObserver();
        var t = this.container,
          e = this.content,
          i = this.option("classes") || {};
        for (var _i24 = 0, _Object$values = Object.values(i); _i24 < _Object$values.length; _i24++) {
          var _e13 = _Object$values[_i24];
          t.classList.remove(_e13 + "");
        }
        e && (e.removeEventListener("load", this.onLoad), e.removeEventListener("error", this.onError)), this.detachPlugins();
      }
    }]);
    return k;
  }(g);
  Object.defineProperty(k, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: w
  }), Object.defineProperty(k, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  });
  var I = function I(t, e) {
      var i = !0;
      return function () {
        i && (i = !1, t.apply(void 0, arguments), setTimeout(function () {
          i = !0;
        }, e));
      };
    },
    D = function D(t, e) {
      var i = [];
      return t.childNodes.forEach(function (t) {
        t.nodeType !== Node.ELEMENT_NODE || e && !t.matches(e) || i.push(t);
      }), i;
    },
    F = {
      viewport: null,
      track: null,
      enabled: !0,
      slides: [],
      axis: "x",
      transition: "fade",
      preload: 1,
      slidesPerPage: "auto",
      initialPage: 0,
      friction: .12,
      Panzoom: {
        decelFriction: .12
      },
      center: !0,
      infinite: !0,
      fill: !0,
      dragFree: !1,
      adaptiveHeight: !1,
      direction: "ltr",
      classes: {
        container: "f-carousel",
        viewport: "f-carousel__viewport",
        track: "f-carousel__track",
        slide: "f-carousel__slide",
        isLTR: "is-ltr",
        isRTL: "is-rtl",
        isHorizontal: "is-horizontal",
        isVertical: "is-vertical",
        inTransition: "in-transition",
        isSelected: "is-selected"
      },
      l10n: {
        NEXT: "Next slide",
        PREV: "Previous slide",
        GOTO: "Go to slide #%d"
      }
    };
  var j;
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Destroy = 2] = "Destroy";
  }(j || (j = {}));
  var H = function H(t) {
      if ("string" == typeof t || t instanceof HTMLElement) t = {
        html: t
      };else {
        var _e14 = t.thumb;
        void 0 !== _e14 && ("string" == typeof _e14 && (t.thumbSrc = _e14), _e14 instanceof HTMLImageElement && (t.thumbEl = _e14, t.thumbElSrc = _e14.src, t.thumbSrc = _e14.src), delete t.thumb);
      }
      return Object.assign({
        html: "",
        el: null,
        isDom: !1,
        "class": "",
        customClass: "",
        index: -1,
        dim: 0,
        gap: 0,
        pos: 0,
        transition: !1
      }, t);
    },
    B = function B() {
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      return Object.assign({
        index: -1,
        slides: [],
        dim: 0,
        pos: -1
      }, t);
    };
  var N = /*#__PURE__*/function (_m3) {
    _inherits(N, _m3);
    var _super3 = _createSuper(N);
    function N(t, e) {
      var _this12;
      _classCallCheck(this, N);
      _this12 = _super3.call(this, e), Object.defineProperty(_assertThisInitialized(_this12), "instance", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: t
      });
      return _this12;
    }
    _createClass(N, [{
      key: "attach",
      value: function attach() {}
    }, {
      key: "detach",
      value: function detach() {}
    }]);
    return N;
  }(m);
  var _ = {
    classes: {
      list: "f-carousel__dots",
      isDynamic: "is-dynamic",
      hasDots: "has-dots",
      dot: "f-carousel__dot",
      isBeforePrev: "is-before-prev",
      isPrev: "is-prev",
      isCurrent: "is-current",
      isNext: "is-next",
      isAfterNext: "is-after-next"
    },
    dotTpl: '<button type="button" data-carousel-page="%i" aria-label="{{GOTO}}"><span class="f-carousel__dot" aria-hidden="true"></span></button>',
    dynamicFrom: 11,
    maxCount: 1 / 0,
    minCount: 2
  };
  var W = /*#__PURE__*/function (_N) {
    _inherits(W, _N);
    var _super4 = _createSuper(W);
    function W() {
      var _this13;
      _classCallCheck(this, W);
      _this13 = _super4.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this13), "isDynamic", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this13), "list", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this13;
    }
    _createClass(W, [{
      key: "onRefresh",
      value: function onRefresh() {
        this.refresh();
      }
    }, {
      key: "build",
      value: function build() {
        var t = this.list;
        return t || (t = document.createElement("ul"), P(t, this.cn("list")), t.setAttribute("role", "tablist"), this.instance.container.appendChild(t), P(this.instance.container, this.cn("hasDots")), this.list = t), t;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var t;
        var e = this.instance.pages.length,
          i = Math.min(2, this.option("minCount")),
          n = Math.max(2e3, this.option("maxCount")),
          s = this.option("dynamicFrom");
        if (e < i || e > n) return void this.cleanup();
        var o = "number" == typeof s && e > 5 && e >= s,
          r = !this.list || this.isDynamic !== o || this.list.children.length !== e;
        r && this.cleanup();
        var l = this.build();
        if (a(l, this.cn("isDynamic"), !!o), r) for (var _t27 = 0; _t27 < e; _t27++) l.append(this.createItem(_t27));
        var c,
          h = 0;
        for (var _i25 = 0, _arr2 = _toConsumableArray(l.children); _i25 < _arr2.length; _i25++) {
          var _e15 = _arr2[_i25];
          var _i26 = h === this.instance.page;
          _i26 && (c = _e15), a(_e15, this.cn("isCurrent"), _i26), null === (t = _e15.children[0]) || void 0 === t || t.setAttribute("aria-selected", _i26 ? "true" : "false");
          for (var _i27 = 0, _arr3 = ["isBeforePrev", "isPrev", "isNext", "isAfterNext"]; _i27 < _arr3.length; _i27++) {
            var _t28 = _arr3[_i27];
            S(_e15, this.cn(_t28));
          }
          h++;
        }
        if (c = c || l.firstChild, o && c) {
          var _t29 = c.previousElementSibling,
            _e16 = _t29 && _t29.previousElementSibling;
          P(_t29, this.cn("isPrev")), P(_e16, this.cn("isBeforePrev"));
          var _i28 = c.nextElementSibling,
            _n4 = _i28 && _i28.nextElementSibling;
          P(_i28, this.cn("isNext")), P(_n4, this.cn("isAfterNext"));
        }
        this.isDynamic = o;
      }
    }, {
      key: "createItem",
      value: function createItem() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e;
        var i = document.createElement("li");
        i.setAttribute("role", "presentation");
        var n = s(this.instance.localize(this.option("dotTpl"), [["%d", t + 1]]).replace(/\%i/g, t + ""));
        return i.appendChild(n), null === (e = i.children[0]) || void 0 === e || e.setAttribute("role", "tab"), i;
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.list && (this.list.remove(), this.list = null), this.isDynamic = !1, S(this.instance.container, this.cn("hasDots"));
      }
    }, {
      key: "attach",
      value: function attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
      }
    }]);
    return W;
  }(N);
  Object.defineProperty(W, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: _
  });
  var $ = "disabled",
    X = "next",
    Y = "prev";
  var q = /*#__PURE__*/function (_N2) {
    _inherits(q, _N2);
    var _super5 = _createSuper(q);
    function q() {
      var _this14;
      _classCallCheck(this, q);
      _this14 = _super5.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this14), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this14), "prev", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this14), "next", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this14;
    }
    _createClass(q, [{
      key: "onRefresh",
      value: function onRefresh() {
        var t = this.instance,
          e = t.pages.length,
          i = t.page;
        if (e < 2) return void this.cleanup();
        this.build();
        var n = this.prev,
          s = this.next;
        n && s && (n.removeAttribute($), s.removeAttribute($), t.isInfinite || (i <= 0 && n.setAttribute($, ""), i >= e - 1 && s.setAttribute($, "")));
      }
    }, {
      key: "createButton",
      value: function createButton(t) {
        var e = this.instance,
          i = document.createElement("button");
        i.setAttribute("tabindex", "0"), i.setAttribute("title", e.localize("{{".concat(t.toUpperCase(), "}}"))), P(i, this.cn("button") + " " + this.cn(t === X ? "isNext" : "isPrev"));
        var n = e.isRTL ? t === X ? Y : X : t;
        var s;
        return i.innerHTML = e.localize(this.option("".concat(n, "Tpl"))), i.dataset["carousel".concat((s = t, s ? s.match("^[a-z]") ? s.charAt(0).toUpperCase() + s.substring(1) : s : ""))] = "true", i;
      }
    }, {
      key: "build",
      value: function build() {
        var t = this.container;
        t || (this.container = t = document.createElement("div"), P(t, this.cn("container")), this.instance.container.appendChild(t)), this.next || (this.next = t.appendChild(this.createButton(X))), this.prev || (this.prev = t.appendChild(this.createButton(Y)));
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.prev && this.prev.remove(), this.next && this.next.remove(), this.container && this.container.remove(), this.prev = null, this.next = null, this.container = null;
      }
    }, {
      key: "attach",
      value: function attach() {
        this.instance.on(["refresh", "change"], this.onRefresh);
      }
    }, {
      key: "detach",
      value: function detach() {
        this.instance.off(["refresh", "change"], this.onRefresh), this.cleanup();
      }
    }]);
    return q;
  }(N);
  Object.defineProperty(q, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      classes: {
        container: "f-carousel__nav",
        button: "f-button",
        isNext: "is-next",
        isPrev: "is-prev"
      },
      nextTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M9 3l9 9-9 9"/></svg>',
      prevTpl: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M15 3l-9 9 9 9"/></svg>'
    }
  });
  var V = /*#__PURE__*/function (_N3) {
    _inherits(V, _N3);
    var _super6 = _createSuper(V);
    function V() {
      var _this15;
      _classCallCheck(this, V);
      _this15 = _super6.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this15), "selectedIndex", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this15), "target", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this15), "nav", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this15;
    }
    _createClass(V, [{
      key: "addAsTargetFor",
      value: function addAsTargetFor(t) {
        this.target = this.instance, this.nav = t, this.attachEvents();
      }
    }, {
      key: "addAsNavFor",
      value: function addAsNavFor(t) {
        this.nav = this.instance, this.target = t, this.attachEvents();
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        this.nav && this.target && (this.nav.options.initialSlide = this.target.options.initialPage, this.nav.on("ready", this.onNavReady), this.nav.state === j.Ready && this.onNavReady(this.nav), this.target.on("ready", this.onTargetReady), this.target.state === j.Ready && this.onTargetReady(this.target));
      }
    }, {
      key: "onNavReady",
      value: function onNavReady(t) {
        t.on("createSlide", this.onNavCreateSlide), t.on("Panzoom.click", this.onNavClick), t.on("Panzoom.touchEnd", this.onNavTouch), this.onTargetChange();
      }
    }, {
      key: "onTargetReady",
      value: function onTargetReady(t) {
        t.on("change", this.onTargetChange), t.on("Panzoom.refresh", this.onTargetChange), this.onTargetChange();
      }
    }, {
      key: "onNavClick",
      value: function onNavClick(t, e, i) {
        this.onNavTouch(t, t.panzoom, i);
      }
    }, {
      key: "onNavTouch",
      value: function onNavTouch(t, e, i) {
        var n, s;
        if (Math.abs(e.dragOffset.x) > 3 || Math.abs(e.dragOffset.y) > 3) return;
        var o = i.target,
          a = this.nav,
          r = this.target;
        if (!a || !r || !o) return;
        var l = o.closest("[data-index]");
        if (i.stopPropagation(), i.preventDefault(), !l) return;
        var c = parseInt(l.dataset.index || "", 10) || 0,
          h = r.getPageForSlide(c),
          d = a.getPageForSlide(c);
        a.slideTo(d), r.slideTo(h, {
          friction: (null === (s = null === (n = this.nav) || void 0 === n ? void 0 : n.plugins) || void 0 === s ? void 0 : s.Sync.option("friction")) || 0
        }), this.markSelectedSlide(c);
      }
    }, {
      key: "onNavCreateSlide",
      value: function onNavCreateSlide(t, e) {
        e.index === this.selectedIndex && this.markSelectedSlide(e.index);
      }
    }, {
      key: "onTargetChange",
      value: function onTargetChange() {
        var t = this.target,
          e = this.nav;
        if (!t || !e) return;
        if (e.state !== j.Ready || t.state !== j.Ready) return;
        var i = t.pages[t.page].slides[0].index,
          n = e.getPageForSlide(i);
        this.markSelectedSlide(i), e.slideTo(n);
      }
    }, {
      key: "markSelectedSlide",
      value: function markSelectedSlide(t) {
        var e = this.nav;
        e && e.state === j.Ready && (this.selectedIndex = t, _toConsumableArray(e.slides).map(function (e) {
          e.el && e.el.classList[e.index === t ? "add" : "remove"]("is-nav-selected");
        }));
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this;
        var e = t.options.target,
          i = t.options.nav;
        e ? t.addAsNavFor(e) : i && t.addAsTargetFor(i);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.nav,
          i = t.target;
        e && (e.off("ready", t.onNavReady), e.off("createSlide", t.onNavCreateSlide), e.off("Panzoom.click", t.onNavClick), e.off("Panzoom.touchEnd", t.onNavTouch)), t.nav = null, i && (i.off("ready", t.onTargetReady), i.off("refresh", t.onTargetChange), i.off("change", t.onTargetChange)), t.target = null;
      }
    }]);
    return V;
  }(N);
  Object.defineProperty(V, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      friction: .35
    }
  });
  var Z = {
    Navigation: q,
    Dots: W,
    Sync: V
  };
  var U = /*#__PURE__*/function (_g3) {
    _inherits(U, _g3);
    var _super7 = _createSuper(U);
    function U(t) {
      var _this16;
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, U);
      if (_this16 = _super7.call(this), Object.defineProperty(_assertThisInitialized(_this16), "userOptions", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      }), Object.defineProperty(_assertThisInitialized(_this16), "userPlugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      }), Object.defineProperty(_assertThisInitialized(_this16), "bp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ""
      }), Object.defineProperty(_assertThisInitialized(_this16), "lp", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this16), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: j.Init
      }), Object.defineProperty(_assertThisInitialized(_this16), "page", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this16), "prevPage", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this16), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(_assertThisInitialized(_this16), "viewport", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this16), "track", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this16), "slides", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(_assertThisInitialized(_this16), "pages", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(_assertThisInitialized(_this16), "panzoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this16), "inTransition", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: new Set()
      }), Object.defineProperty(_assertThisInitialized(_this16), "contentDim", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this16), "viewportDim", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), "string" == typeof t && (t = document.querySelector(t)), !t || !E(t)) throw new Error("No Element found");
      _this16.container = t, _this16.slideNext = I(_this16.slideNext.bind(_assertThisInitialized(_this16)), 150), _this16.slidePrev = I(_this16.slidePrev.bind(_assertThisInitialized(_this16)), 150), _this16.userOptions = e, _this16.userPlugins = i, queueMicrotask(function () {
        _this16.processOptions();
      });
      return _possibleConstructorReturn(_this16);
    }
    _createClass(U, [{
      key: "axis",
      get: function get() {
        return this.isHorizontal ? "e" : "f";
      }
    }, {
      key: "isEnabled",
      get: function get() {
        return this.state === j.Ready;
      }
    }, {
      key: "isInfinite",
      get: function get() {
        var t = !1;
        var e = this.contentDim,
          i = this.viewportDim,
          n = this.pages,
          s = this.slides;
        return n.length >= 2 && e + s[0].dim >= i && (t = this.option("infinite")), t;
      }
    }, {
      key: "isRTL",
      get: function get() {
        return "rtl" === this.option("direction");
      }
    }, {
      key: "isHorizontal",
      get: function get() {
        return "x" === this.option("axis");
      }
    }, {
      key: "processOptions",
      value: function processOptions() {
        var _this17 = this;
        var t = p({}, U.defaults, this.userOptions);
        var e = "";
        var i = t.breakpoints;
        if (i && u(i)) for (var _i29 = 0, _Object$entries3 = Object.entries(i); _i29 < _Object$entries3.length; _i29++) {
          var _Object$entries3$_i = _slicedToArray(_Object$entries3[_i29], 2),
            _n5 = _Object$entries3$_i[0],
            _s4 = _Object$entries3$_i[1];
          window.matchMedia(_n5).matches && u(_s4) && (e += _n5, p(t, _s4));
        }
        e === this.bp && this.state !== j.Init || (this.bp = e, this.state === j.Ready && (t.initialSlide = this.pages[this.page].slides[0].index), this.state !== j.Init && this.destroy(), _get(_getPrototypeOf(U.prototype), "setOptions", this).call(this, t), !1 === this.option("enabled") ? this.attachEvents() : setTimeout(function () {
          _this17.init();
        }, 0));
      }
    }, {
      key: "init",
      value: function init() {
        this.state = j.Init, this.emit("init"), this.attachPlugins(Object.assign(Object.assign({}, U.Plugins), this.userPlugins)), this.initLayout(), this.initSlides(), this.updateMetrics(), this.setInitialPosition(), this.initPanzoom(), this.attachEvents(), this.state = j.Ready, this.emit("ready");
      }
    }, {
      key: "initLayout",
      value: function initLayout() {
        var _i30, _n6;
        var t = this.container,
          e = this.option("classes");
        P(t, this.cn("container")), a(t, e.isLTR, !this.isRTL), a(t, e.isRTL, this.isRTL), a(t, e.isVertical, !this.isHorizontal), a(t, e.isHorizontal, this.isHorizontal);
        var i = this.option("viewport") || t.querySelector(".".concat(e.viewport));
        i || (i = document.createElement("div"), P(i, e.viewport), (_i30 = i).append.apply(_i30, _toConsumableArray(D(t, ".".concat(e.slide)))), t.prepend(i));
        var n = this.option("track") || t.querySelector(".".concat(e.track));
        n || (n = document.createElement("div"), P(n, e.track), (_n6 = n).append.apply(_n6, _toConsumableArray(Array.from(i.childNodes)))), n.setAttribute("aria-live", "polite"), i.contains(n) || i.prepend(n), this.viewport = i, this.track = n, this.emit("initLayout");
      }
    }, {
      key: "initSlides",
      value: function initSlides() {
        var _this18 = this;
        var t = this.track;
        if (t) {
          this.slides = [], _toConsumableArray(D(t, ".".concat(this.cn("slide")))).forEach(function (t) {
            if (E(t)) {
              var _e17 = H({
                el: t,
                isDom: !0,
                index: _this18.slides.length
              });
              _this18.slides.push(_e17), _this18.emit("initSlide", _e17, _this18.slides.length);
            }
          });
          var _iterator8 = _createForOfIteratorHelper(this.option("slides", [])),
            _step8;
          try {
            for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
              var _t30 = _step8.value;
              var _e18 = H(_t30);
              _e18.index = this.slides.length, this.slides.push(_e18), this.emit("initSlide", _e18, this.slides.length);
            }
          } catch (err) {
            _iterator8.e(err);
          } finally {
            _iterator8.f();
          }
          this.emit("initSlides");
        }
      }
    }, {
      key: "setInitialPage",
      value: function setInitialPage() {
        var t = 0;
        var e = this.option("initialSlide");
        t = "number" == typeof e ? this.getPageForSlide(e) : parseInt(this.option("initialPage", 0) + "", 10) || 0, this.page = t;
      }
    }, {
      key: "setInitialPosition",
      value: function setInitialPosition() {
        if (!this.track || !this.pages.length) return;
        var t = this.isHorizontal;
        var e = this.page;
        this.pages[e] || (this.page = e = 0);
        var i = this.pages[e].pos * (this.isRTL && t ? 1 : -1),
          n = t ? "".concat(i, "px") : "0",
          s = t ? "0" : "".concat(i, "px");
        this.track.style.transform = "translate3d(".concat(n, ", ").concat(s, ", 0) scale(1)"), this.option("adaptiveHeight") && this.setViewportHeight();
      }
    }, {
      key: "initPanzoom",
      value: function initPanzoom() {
        var _this19 = this;
        this.panzoom && (this.panzoom.destroy(), this.panzoom = null);
        var t = this.option("Panzoom") || {};
        this.panzoom = new k(this.viewport, p({}, {
          content: this.track,
          zoom: !1,
          panOnlyZoomed: !1,
          lockAxis: this.isHorizontal ? "x" : "y",
          infinite: this.isInfinite,
          click: !1,
          dblClick: !1,
          touch: function touch(t) {
            return !(_this19.pages.length < 2 && !t.options.infinite);
          },
          bounds: function bounds() {
            return _this19.getBounds();
          },
          maxVelocity: function maxVelocity(t) {
            return Math.abs(t.target[_this19.axis] - t.current[_this19.axis]) < 2 * _this19.viewportDim ? 100 : 0;
          }
        }, t)), this.panzoom.on("*", function (t, e) {
          for (var _len4 = arguments.length, i = new Array(_len4 > 2 ? _len4 - 2 : 0), _key4 = 2; _key4 < _len4; _key4++) {
            i[_key4 - 2] = arguments[_key4];
          }
          _this19.emit.apply(_this19, ["Panzoom.".concat(e), t].concat(i));
        }), this.panzoom.on("decel", this.onDecel), this.panzoom.on("refresh", this.onRefresh), this.panzoom.on("beforeTransform", this.onBeforeTransform), this.panzoom.on("endAnimation", this.onEndAnimation);
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this.container;
        t && (t.addEventListener("click", this.onClick, {
          passive: !1,
          capture: !1
        }), t.addEventListener("slideTo", this.onSlideTo)), window.addEventListener("resize", this.onResize);
      }
    }, {
      key: "createPages",
      value: function createPages() {
        var t = [];
        var e = this.contentDim,
          i = this.viewportDim;
        var n = this.option("slidesPerPage");
        ("number" != typeof n || e <= i) && (n = 1 / 0);
        var s = 0,
          o = 0,
          a = 0;
        var _iterator9 = _createForOfIteratorHelper(this.slides),
          _step9;
        try {
          for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
            var _e19 = _step9.value;
            (!t.length || o + _e19.dim > i || a === n) && (t.push(B()), s = t.length - 1, o = 0, a = 0), t[s].slides.push(_e19), o += _e19.dim + _e19.gap, a++;
          }
        } catch (err) {
          _iterator9.e(err);
        } finally {
          _iterator9.f();
        }
        return t;
      }
    }, {
      key: "processPages",
      value: function processPages() {
        var _this20 = this;
        var t = this.pages,
          i = this.contentDim,
          n = this.viewportDim,
          s = this.option("center"),
          o = this.option("fill"),
          a = o && s && i > n && !this.isInfinite;
        if (t.forEach(function (t, e) {
          t.index = e, t.pos = t.slides[0].pos, t.dim = 0;
          var _iterator10 = _createForOfIteratorHelper(t.slides.entries()),
            _step10;
          try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
              var _step10$value = _slicedToArray(_step10.value, 2),
                _e20 = _step10$value[0],
                _i31 = _step10$value[1];
              t.dim += _i31.dim, _e20 < t.slides.length - 1 && (t.dim += _i31.gap);
            }
          } catch (err) {
            _iterator10.e(err);
          } finally {
            _iterator10.f();
          }
          a && t.pos + .5 * t.dim < .5 * n ? t.pos = 0 : a && t.pos + .5 * t.dim >= i - .5 * n ? t.pos = i - n : s && (t.pos += -.5 * (n - t.dim));
        }), t.forEach(function (t, s) {
          o && !_this20.isInfinite && i > n && (t.pos = Math.max(t.pos, 0), t.pos = Math.min(t.pos, i - n)), t.pos = e(t.pos, 1e3), t.dim = e(t.dim, 1e3), Math.abs(t.pos) <= .1 && (t.pos = 0);
        }), this.isInfinite) return t;
        var r = [];
        var l;
        return t.forEach(function (t) {
          var e = Object.assign({}, t);
          l && e.pos === l.pos ? (l.dim += e.dim, l.slides = [].concat(_toConsumableArray(l.slides), _toConsumableArray(e.slides))) : (e.index = r.length, l = e, r.push(e));
        }), r;
      }
    }, {
      key: "getPageFromIndex",
      value: function getPageFromIndex() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = this.pages.length;
        var i;
        return t = parseInt((t || 0).toString()) || 0, i = this.isInfinite ? (t % e + e) % e : Math.max(Math.min(t, e - 1), 0), i;
      }
    }, {
      key: "getSlideMetrics",
      value: function getSlideMetrics(t) {
        var i, n;
        var s = this.isHorizontal ? "width" : "height";
        var o = 0,
          a = 0,
          r = t.el;
        var l = r && !r.parentNode;
        if (r ? o = parseFloat(r.dataset[s] || "") || 0 : (r = document.createElement("div"), r.style.visibility = "hidden", (this.track || document.body).prepend(r)), P(r, this.cn("slide") + " " + t["class"] + " " + t.customClass), o) r.style[s] = "".concat(o, "px"), r.style["width" === s ? "height" : "width"] = "";else {
          l && (this.track || document.body).prepend(r);
          var _t31 = Math.max(1, (null === (i = window.visualViewport) || void 0 === i ? void 0 : i.scale) || 1);
          o = r.getBoundingClientRect()[s] * _t31;
        }
        var c = getComputedStyle(r);
        return "content-box" === c.boxSizing && (this.isHorizontal ? (o += parseFloat(c.paddingLeft) || 0, o += parseFloat(c.paddingRight) || 0) : (o += parseFloat(c.paddingTop) || 0, o += parseFloat(c.paddingBottom) || 0)), a = parseFloat(c[this.isHorizontal ? "marginRight" : "marginBottom"]) || 0, l ? null === (n = r.parentElement) || void 0 === n || n.removeChild(r) : t.el || r.remove(), {
          dim: e(o, 1e3),
          gap: e(a, 1e3)
        };
      }
    }, {
      key: "getBounds",
      value: function getBounds() {
        var t = this.isInfinite,
          e = this.isRTL,
          i = this.isHorizontal,
          n = this.pages;
        var s = {
          min: 0,
          max: 0
        };
        if (t) s = {
          min: -1 / 0,
          max: 1 / 0
        };else if (n.length) {
          var _t32 = n[0].pos,
            _o2 = n[n.length - 1].pos;
          s = e && i ? {
            min: _t32,
            max: _o2
          } : {
            min: -1 * _o2,
            max: -1 * _t32
          };
        }
        return {
          x: i ? s : {
            min: 0,
            max: 0
          },
          y: i ? {
            min: 0,
            max: 0
          } : s
        };
      }
    }, {
      key: "repositionSlides",
      value: function repositionSlides() {
        var t,
          i = this.isHorizontal,
          n = this.isRTL,
          s = this.isInfinite,
          o = this.viewport,
          a = this.viewportDim,
          r = this.contentDim,
          l = this.page,
          c = this.pages,
          h = this.slides,
          d = this.panzoom,
          u = 0,
          p = 0,
          f = 0,
          m = 0;
        d ? m = -1 * d.current[this.axis] : c[l] && (m = c[l].pos || 0), t = i ? n ? "right" : "left" : "top", n && i && (m *= -1);
        var _iterator11 = _createForOfIteratorHelper(h),
          _step11;
        try {
          for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
            var _i34 = _step11.value;
            _i34.el ? ("top" === t ? (_i34.el.style.right = "", _i34.el.style.left = "") : _i34.el.style.top = "", _i34.index !== u ? _i34.el.style[t] = 0 === p ? "" : "".concat(e(p, 1e3), "px") : _i34.el.style[t] = "", f += _i34.dim + _i34.gap, u++) : p += _i34.dim + _i34.gap;
          }
        } catch (err) {
          _iterator11.e(err);
        } finally {
          _iterator11.f();
        }
        if (s && f && o) {
          var _n7 = getComputedStyle(o),
            _s5 = "padding",
            _l2 = i ? "Right" : "Bottom",
            _c3 = parseFloat(_n7[_s5 + (i ? "Left" : "Top")]);
          m -= _c3, a += _c3, a += parseFloat(_n7[_s5 + _l2]);
          var _iterator12 = _createForOfIteratorHelper(h),
            _step12;
          try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
              var _i32 = _step12.value;
              _i32.el && (e(_i32.pos) < e(a) && e(_i32.pos + _i32.dim + _i32.gap) < e(m) && e(m) > e(r - a) && (_i32.el.style[t] = "".concat(e(p + f, 1e3), "px")), e(_i32.pos + _i32.gap) >= e(r - a) && e(_i32.pos) > e(m + a) && e(m) < e(a) && (_i32.el.style[t] = "-".concat(e(f, 1e3), "px")));
            }
          } catch (err) {
            _iterator12.e(err);
          } finally {
            _iterator12.f();
          }
        }
        var g,
          b,
          v = _toConsumableArray(this.inTransition);
        if (v.length > 1 && (g = c[v[0]], b = c[v[1]]), g && b) {
          var _i33 = 0;
          var _iterator13 = _createForOfIteratorHelper(h),
            _step13;
          try {
            for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
              var _n8 = _step13.value;
              _n8.el ? this.inTransition.has(_n8.index) && g.slides.indexOf(_n8) < 0 && (_n8.el.style[t] = "".concat(e(_i33 + (g.pos - b.pos), 1e3), "px")) : _i33 += _n8.dim + _n8.gap;
            }
          } catch (err) {
            _iterator13.e(err);
          } finally {
            _iterator13.f();
          }
        }
      }
    }, {
      key: "createSlideEl",
      value: function createSlideEl(t) {
        var e = this.track,
          i = this.slides;
        if (!e || !t) return;
        if (t.el && t.el.parentNode) return;
        var n = t.el || document.createElement("div");
        P(n, this.cn("slide")), P(n, t["class"]), P(n, t.customClass);
        var s = t.html;
        s && (s instanceof HTMLElement ? n.appendChild(s) : n.innerHTML = t.html + "");
        var o = [];
        i.forEach(function (t, e) {
          t.el && o.push(e);
        });
        var a = t.index;
        var r = null;
        if (o.length) {
          r = i[o.reduce(function (t, e) {
            return Math.abs(e - a) < Math.abs(t - a) ? e : t;
          })];
        }
        var l = r && r.el && r.el.parentNode ? r.index < t.index ? r.el.nextSibling : r.el : null;
        e.insertBefore(n, e.contains(l) ? l : null), t.el = n, this.emit("createSlide", t);
      }
    }, {
      key: "removeSlideEl",
      value: function removeSlideEl(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        var i = t.el;
        if (!i || !i.parentNode) return;
        if (S(i, this.cn("isSelected")), t.isDom && !e) return i.removeAttribute("aria-hidden"), i.removeAttribute("data-index"), S(i, this.cn("isSelected")), void (i.style.left = "");
        this.emit("removeSlide", t);
        var n = new CustomEvent("animationend");
        i.dispatchEvent(n), t.el && (t.el.remove(), t.el = null);
      }
    }, {
      key: "transitionTo",
      value: function transitionTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.option("transition");
        if (!e) return !1;
        var i = this.pages,
          n = this.panzoom;
        t = parseInt((t || 0).toString()) || 0;
        var s = this.getPageFromIndex(t);
        if (!n || !i[s] || i.length < 2 || Math.abs(i[this.page].slides[0].dim - this.viewportDim) > 1) return !1;
        var o = t > this.page ? 1 : -1,
          a = this.pages[s].pos * (this.isRTL ? 1 : -1);
        if (this.page === s && Math.abs(a - n.target[this.axis]) < 1) return !1;
        this.clearTransitions();
        var r = n.isResting;
        P(this.container, this.cn("inTransition"));
        var l = this.pages[this.page].slides[0],
          c = this.pages[s].slides[0];
        this.inTransition.add(c.index), this.createSlideEl(c);
        var h = l.el,
          d = c.el;
        r || "slide" === e || (e = "fadeFast", h = null);
        var u = this.isRTL ? "next" : "prev",
          p = this.isRTL ? "prev" : "next";
        return h && (this.inTransition.add(l.index), l.transition = e, h.addEventListener("animationend", this.onAnimationEnd), h.classList.add("f-".concat(e, "Out"), "to-".concat(o > 0 ? p : u))), d && (c.transition = e, d.addEventListener("animationend", this.onAnimationEnd), d.classList.add("f-".concat(e, "In"), "from-".concat(o > 0 ? u : p))), n.panTo({
          x: this.isHorizontal ? a : 0,
          y: this.isHorizontal ? 0 : a,
          friction: 0
        }), this.onChange(s), !0;
      }
    }, {
      key: "manageSlideVisiblity",
      value: function manageSlideVisiblity() {
        var t = new Set(),
          e = new Set(),
          i = this.getVisibleSlides(parseFloat(this.option("preload", 0) + "") || 0);
        var _iterator14 = _createForOfIteratorHelper(this.slides),
          _step14;
        try {
          for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var _n9 = _step14.value;
            i.has(_n9) ? t.add(_n9) : e.add(_n9);
          }
        } catch (err) {
          _iterator14.e(err);
        } finally {
          _iterator14.f();
        }
        var _iterator15 = _createForOfIteratorHelper(this.inTransition),
          _step15;
        try {
          for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var _e21 = _step15.value;
            t.add(this.slides[_e21]);
          }
        } catch (err) {
          _iterator15.e(err);
        } finally {
          _iterator15.f();
        }
        var _iterator16 = _createForOfIteratorHelper(t),
          _step16;
        try {
          for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
            var _e22 = _step16.value;
            this.createSlideEl(_e22), this.lazyLoadSlide(_e22);
          }
        } catch (err) {
          _iterator16.e(err);
        } finally {
          _iterator16.f();
        }
        var _iterator17 = _createForOfIteratorHelper(e),
          _step17;
        try {
          for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
            var _i35 = _step17.value;
            t.has(_i35) || this.removeSlideEl(_i35);
          }
        } catch (err) {
          _iterator17.e(err);
        } finally {
          _iterator17.f();
        }
        this.markSelectedSlides(), this.repositionSlides();
      }
    }, {
      key: "markSelectedSlides",
      value: function markSelectedSlides() {
        if (!this.pages[this.page] || !this.pages[this.page].slides) return;
        var t = "aria-hidden";
        var e = this.cn("isSelected");
        if (e) {
          var _iterator18 = _createForOfIteratorHelper(this.slides),
            _step18;
          try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
              var _i36 = _step18.value;
              _i36.el && (_i36.el.dataset.index = "".concat(_i36.index), this.pages[this.page].slides.includes(_i36) ? (_i36.el.classList.contains(e) || (P(_i36.el, e), this.emit("selectSlide", _i36)), _i36.el.removeAttribute(t)) : (_i36.el.classList.contains(e) && (S(_i36.el, e), this.emit("unselectSlide", _i36)), _i36.el.setAttribute(t, "true")));
            }
          } catch (err) {
            _iterator18.e(err);
          } finally {
            _iterator18.f();
          }
        }
      }
    }, {
      key: "flipInfiniteTrack",
      value: function flipInfiniteTrack() {
        var t = this.panzoom;
        if (!t || !this.isInfinite) return;
        var e = "x" === this.option("axis") ? "e" : "f",
          i = this.viewportDim,
          n = this.contentDim;
        var s = t.current[e],
          o = t.target[e] - s,
          a = 0,
          r = .5 * i,
          l = n;
        this.isRTL && this.isHorizontal ? (s < -r && (a = -1, s += l), s > l - r && (a = 1, s -= l)) : (s > r && (a = 1, s -= l), s < -l + r && (a = -1, s += l)), a && (t.current[e] = s, t.target[e] = s + o);
      }
    }, {
      key: "lazyLoadSlide",
      value: function lazyLoadSlide(t) {
        var _this21 = this;
        var e = this,
          i = t && t.el;
        if (!i) return;
        var n = new Set(),
          o = "f-fadeIn";
        i.querySelectorAll("[data-lazy-srcset]").forEach(function (t) {
          t instanceof HTMLImageElement && n.add(t);
        });
        var a = Array.from(i.querySelectorAll("[data-lazy-src]"));
        i.dataset.lazySrc && a.push(i), a.map(function (t) {
          t instanceof HTMLImageElement ? n.add(t) : E(t) && (t.style.backgroundImage = "url('".concat(t.dataset.lazySrc || "", "')"), delete t.dataset.lazySrc);
        });
        var r = function r(t, i, n) {
          n && (n.remove(), n = null), i.complete && (i.classList.add(o), setTimeout(function () {
            i.classList.remove(o);
          }, 350), i.style.display = ""), _this21.option("adaptiveHeight") && t.el && _this21.pages[_this21.page].slides.indexOf(t) > -1 && (e.updateMetrics(), e.setViewportHeight()), _this21.emit("load", t);
        };
        var _iterator19 = _createForOfIteratorHelper(n),
          _step19;
        try {
          var _loop2 = function _loop2() {
            var e = _step19.value;
            var i = null;
            e.src = e.dataset.lazySrcset || e.dataset.lazySrc || "", delete e.dataset.lazySrc, delete e.dataset.lazySrcset, e.style.display = "none", e.addEventListener("error", function () {
              r(t, e, i);
            }), e.addEventListener("load", function () {
              r(t, e, i);
            }), setTimeout(function () {
              e.parentNode && t.el && (e.complete ? r(t, e, i) : (i = s(x), e.parentNode.insertBefore(i, e)));
            }, 300);
          };
          for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
            _loop2();
          }
        } catch (err) {
          _iterator19.e(err);
        } finally {
          _iterator19.f();
        }
      }
    }, {
      key: "onAnimationEnd",
      value: function onAnimationEnd(t) {
        var e;
        var i = t.target,
          n = i ? parseInt(i.dataset.index || "", 10) || 0 : -1,
          s = this.slides[n],
          o = t.animationName;
        if (!i || !s || !o) return;
        var a = !!this.inTransition.has(n) && s.transition;
        a && o.substring(0, a.length + 2) === "f-".concat(a) && this.inTransition["delete"](n), this.inTransition.size || this.clearTransitions(), n === this.page && (null === (e = this.panzoom) || void 0 === e ? void 0 : e.isResting) && this.emit("settle");
      }
    }, {
      key: "onDecel",
      value: function onDecel(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var n = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var s = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
        var o = this.isRTL,
          a = this.isHorizontal,
          r = this.axis,
          l = this.pages,
          c = l.length,
          h = Math.abs(Math.atan2(i, e) / (Math.PI / 180));
        var d = 0;
        if (d = h > 45 && h < 135 ? a ? 0 : i : a ? e : 0, !c) return;
        var u = this.option("dragFree");
        var p = this.page,
          f = o && a ? 1 : -1;
        var m = t.target[r] * f,
          g = t.current[r] * f;
        var _this$getPageFromPosi = this.getPageFromPosition(m),
          b = _this$getPageFromPosi.pageIndex,
          _this$getPageFromPosi2 = this.getPageFromPosition(g),
          v = _this$getPageFromPosi2.pageIndex;
        u ? this.onChange(b) : (Math.abs(d) > 5 ? (l[p].dim < document.documentElement["client" + (this.isHorizontal ? "Width" : "Height")] - 1 && (p = v), p = o && a ? d < 0 ? p - 1 : p + 1 : d < 0 ? p + 1 : p - 1) : p = 0 === n && 0 === s ? p : v, this.slideTo(p, {
          transition: !1,
          friction: t.option("decelFriction")
        }));
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var e = t.target,
          i = e && E(e) ? e.dataset : null;
        var n, s;
        i && (void 0 !== i.carouselPage ? (s = "slideTo", n = i.carouselPage) : void 0 !== i.carouselNext ? s = "slideNext" : void 0 !== i.carouselPrev && (s = "slidePrev")), s ? (t.preventDefault(), t.stopPropagation(), e && !e.hasAttribute("disabled") && this[s](n)) : this.emit("click", t);
      }
    }, {
      key: "onSlideTo",
      value: function onSlideTo(t) {
        var e = t.detail || 0;
        this.slideTo(this.getPageForSlide(e), {
          friction: 0
        });
      }
    }, {
      key: "onChange",
      value: function onChange(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var i = this.page;
        this.prevPage = i, this.page = t, this.option("adaptiveHeight") && this.setViewportHeight(), t !== i && (this.markSelectedSlides(), this.emit("change", t, i, e));
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        var t = this.contentDim,
          e = this.viewportDim;
        this.updateMetrics(), this.contentDim === t && this.viewportDim === e || this.slideTo(this.page, {
          friction: 0,
          transition: !1
        });
      }
    }, {
      key: "onResize",
      value: function onResize() {
        this.option("breakpoints") && this.processOptions();
      }
    }, {
      key: "onBeforeTransform",
      value: function onBeforeTransform(t) {
        this.lp !== t.current[this.axis] && (this.flipInfiniteTrack(), this.manageSlideVisiblity()), this.lp = t.current.e;
      }
    }, {
      key: "onEndAnimation",
      value: function onEndAnimation() {
        this.inTransition.size || this.emit("settle");
      }
    }, {
      key: "reInit",
      value: function reInit() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        this.destroy(), this.state = j.Init, this.userOptions = t || this.userOptions, this.userPlugins = e || this.userPlugins, this.processOptions();
      }
    }, {
      key: "slideTo",
      value: function slideTo() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref8$friction = _ref8.friction,
          e = _ref8$friction === void 0 ? this.option("friction") : _ref8$friction,
          _ref8$transition = _ref8.transition,
          i = _ref8$transition === void 0 ? this.option("transition") : _ref8$transition;
        if (this.state === j.Destroy) return;
        var n = this.axis,
          s = this.isHorizontal,
          o = this.isRTL,
          a = this.pages,
          r = this.panzoom,
          l = a.length,
          c = o && s ? 1 : -1;
        if (!r || !l) return;
        if (this.transitionTo(t, i)) return;
        var h = this.getPageFromIndex(t);
        var d = a[h].pos;
        if (this.isInfinite) {
          var _e23 = this.contentDim,
            _i37 = r.target[n] * c;
          if (2 === l) d += _e23 * Math.floor(parseFloat(t + "") / 2);else {
            var _t33 = _i37;
            d = [d, d - _e23, d + _e23].reduce(function (e, i) {
              return Math.abs(i - _t33) < Math.abs(e - _t33) ? i : e;
            });
          }
        }
        d *= c, Math.abs(r.target[n] - d) < .1 || (r.panTo({
          x: s ? d : 0,
          y: s ? 0 : d,
          friction: e
        }), this.onChange(h));
      }
    }, {
      key: "slideToClosest",
      value: function slideToClosest(t) {
        if (this.panzoom) {
          var _this$getPageFromPosi3 = this.getPageFromPosition(this.panzoom.current[this.isHorizontal ? "e" : "f"]),
            _e24 = _this$getPageFromPosi3.pageIndex;
          this.slideTo(_e24, t);
        }
      }
    }, {
      key: "slideNext",
      value: function slideNext() {
        this.slideTo(this.page + 1);
      }
    }, {
      key: "slidePrev",
      value: function slidePrev() {
        this.slideTo(this.page - 1);
      }
    }, {
      key: "clearTransitions",
      value: function clearTransitions() {
        this.inTransition.clear(), S(this.container, this.cn("inTransition"));
        var t = ["to-prev", "to-next", "from-prev", "from-next"];
        var _iterator20 = _createForOfIteratorHelper(this.slides),
          _step20;
        try {
          for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
            var _e25 = _step20.value;
            var _i38 = _e25.el;
            if (_i38) {
              var _i38$classList;
              _i38.removeEventListener("animationend", this.onAnimationEnd), (_i38$classList = _i38.classList).remove.apply(_i38$classList, t);
              var _n10 = _e25.transition;
              _n10 && _i38.classList.remove("f-".concat(_n10, "Out"), "f-".concat(_n10, "In"));
            }
          }
        } catch (err) {
          _iterator20.e(err);
        } finally {
          _iterator20.f();
        }
        this.manageSlideVisiblity();
      }
    }, {
      key: "prependSlide",
      value: function prependSlide(t) {
        var e, i;
        var n = Array.isArray(t) ? t : [t];
        var _iterator21 = _createForOfIteratorHelper(n.reverse()),
          _step21;
        try {
          for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var _t36 = _step21.value;
            this.slides.unshift(H(_t36));
          }
        } catch (err) {
          _iterator21.e(err);
        } finally {
          _iterator21.f();
        }
        for (var _t34 = 0; _t34 < this.slides.length; _t34++) this.slides[_t34].index = _t34;
        var s = (null === (e = this.pages[this.page]) || void 0 === e ? void 0 : e.pos) || 0;
        this.page += n.length, this.updateMetrics();
        var o = (null === (i = this.pages[this.page]) || void 0 === i ? void 0 : i.pos) || 0;
        if (this.panzoom) {
          var _t35 = this.isRTL ? s - o : o - s;
          this.panzoom.target.e -= _t35, this.panzoom.current.e -= _t35, this.panzoom.requestTick();
        }
      }
    }, {
      key: "appendSlide",
      value: function appendSlide(t) {
        var e = Array.isArray(t) ? t : [t];
        var _iterator22 = _createForOfIteratorHelper(e),
          _step22;
        try {
          for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
            var _t37 = _step22.value;
            var _e26 = H(_t37);
            _e26.index = this.slides.length, this.slides.push(_e26), this.emit("initSlide", _e26, this.slides.length);
          }
        } catch (err) {
          _iterator22.e(err);
        } finally {
          _iterator22.f();
        }
        this.updateMetrics();
      }
    }, {
      key: "removeSlide",
      value: function removeSlide(t) {
        var e = this.slides.length;
        t = (t % e + e) % e, this.removeSlideEl(this.slides[t], !0), this.slides.splice(t, 1);
        for (var _t38 = 0; _t38 < this.slides.length; _t38++) this.slides[_t38].index = _t38;
        this.updateMetrics(), this.slideTo(this.page, {
          friction: 0,
          transition: !1
        });
      }
    }, {
      key: "updateMetrics",
      value: function updateMetrics() {
        var t = this.panzoom,
          i = this.viewport,
          n = this.track,
          s = this.isHorizontal;
        if (!n) return;
        var o = s ? "width" : "height",
          a = s ? "offsetWidth" : "offsetHeight";
        if (i) {
          var _t39 = Math.max(i[a], e(i.getBoundingClientRect()[o], 1e3)),
            _n11 = getComputedStyle(i),
            _r = "padding",
            _l3 = s ? "Right" : "Bottom";
          _t39 -= parseFloat(_n11[_r + (s ? "Left" : "Top")]) + parseFloat(_n11[_r + _l3]), this.viewportDim = _t39;
        }
        var r,
          l = this.pages.length,
          c = 0;
        var _iterator23 = _createForOfIteratorHelper(this.slides.entries()),
          _step23;
        try {
          for (_iterator23.s(); !(_step23 = _iterator23.n()).done;) {
            var _this$getSlideMetrics;
            var _step23$value = _slicedToArray(_step23.value, 2),
              _t40 = _step23$value[0],
              _i39 = _step23$value[1];
            var _n12 = 0,
              _s6 = 0;
            !_i39.el && r ? (_n12 = r.dim, _s6 = r.gap) : ((_this$getSlideMetrics = this.getSlideMetrics(_i39), _n12 = _this$getSlideMetrics.dim, _s6 = _this$getSlideMetrics.gap), r = _i39), _n12 = e(_n12, 1e3), _s6 = e(_s6, 1e3), _i39.dim = _n12, _i39.gap = _s6, _i39.pos = c, c += _n12, (this.isInfinite || _t40 < this.slides.length - 1) && (c += _s6);
          }
        } catch (err) {
          _iterator23.e(err);
        } finally {
          _iterator23.f();
        }
        var h = this.contentDim;
        c = e(c, 1e3), this.contentDim = c, t && (t.contentRect[o] = c, t.contentRect["e" === this.axis ? "fullWidth" : "fullHeight"] = c), this.pages = this.createPages(), this.pages = this.processPages(), this.state === j.Init && this.setInitialPage(), this.page = Math.max(0, Math.min(this.page, this.pages.length - 1)), t && l === this.pages.length && Math.abs(c - h) > .5 && (t.target[this.axis] = -1 * this.pages[this.page].pos, t.current[this.axis] = -1 * this.pages[this.page].pos, t.stop()), this.manageSlideVisiblity(), this.emit("refresh");
      }
    }, {
      key: "getProgress",
      value: function getProgress(t) {
        var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : !1;
        void 0 === t && (t = this.page);
        var n = this,
          s = n.panzoom,
          o = n.pages[t] || 0;
        if (!o || !s) return 0;
        var a = -1 * s.current.e,
          r = n.contentDim;
        var l = [e((a - o.pos) / (1 * o.dim), 1e3), e((a + r - o.pos) / (1 * o.dim), 1e3), e((a - r - o.pos) / (1 * o.dim), 1e3)].reduce(function (t, e) {
          return Math.abs(e) < Math.abs(t) ? e : t;
        });
        return i ? l : Math.max(-1, Math.min(1, l));
      }
    }, {
      key: "setViewportHeight",
      value: function setViewportHeight() {
        var t = this.page,
          e = this.pages,
          i = this.viewport,
          n = this.isHorizontal;
        if (!i || !e[t]) return;
        var s = 0;
        n && this.track && (this.track.style.height = "auto", e[t].slides.forEach(function (t) {
          t.el && (s = Math.max(s, t.el.offsetHeight));
        })), i.style.height = s ? "".concat(s, "px") : "";
      }
    }, {
      key: "getPageForSlide",
      value: function getPageForSlide(t) {
        var _iterator24 = _createForOfIteratorHelper(this.pages),
          _step24;
        try {
          for (_iterator24.s(); !(_step24 = _iterator24.n()).done;) {
            var _e27 = _step24.value;
            var _iterator25 = _createForOfIteratorHelper(_e27.slides),
              _step25;
            try {
              for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var _i40 = _step25.value;
                if (_i40.index === t) return _e27.index;
              }
            } catch (err) {
              _iterator25.e(err);
            } finally {
              _iterator25.f();
            }
          }
        } catch (err) {
          _iterator24.e(err);
        } finally {
          _iterator24.f();
        }
        return -1;
      }
    }, {
      key: "getVisibleSlides",
      value: function getVisibleSlides() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var e;
        var i = new Set();
        var n = this.contentDim,
          s = this.viewportDim,
          o = this.pages,
          a = this.page;
        n = n + (null === (e = this.slides[this.slides.length - 1]) || void 0 === e ? void 0 : e.gap) || 0;
        var r = 0;
        r = this.panzoom ? -1 * this.panzoom.current[this.axis] : o[a] && o[a].pos || 0, this.isInfinite && (r -= Math.floor(r / n) * n), this.isRTL && this.isHorizontal && (r *= -1);
        var l = r - s * t,
          c = r + s * (t + 1),
          h = this.isInfinite ? [-1, 0, 1] : [0];
        var _iterator26 = _createForOfIteratorHelper(this.slides),
          _step26;
        try {
          for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
            var _t41 = _step26.value;
            var _iterator27 = _createForOfIteratorHelper(h),
              _step27;
            try {
              for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
                var _e28 = _step27.value;
                var _s7 = _t41.pos + _e28 * n,
                  _o3 = _t41.pos + _t41.dim + _t41.gap + _e28 * n;
                _s7 < c && _o3 > l && i.add(_t41);
              }
            } catch (err) {
              _iterator27.e(err);
            } finally {
              _iterator27.f();
            }
          }
        } catch (err) {
          _iterator26.e(err);
        } finally {
          _iterator26.f();
        }
        return i;
      }
    }, {
      key: "getPageFromPosition",
      value: function getPageFromPosition(t) {
        var e = this.viewportDim,
          i = this.contentDim,
          n = this.pages.length,
          s = this.slides.length,
          o = this.slides[s - 1];
        var a = 0,
          r = 0,
          l = 0;
        var c = this.option("center");
        c && (t += .5 * e), this.isInfinite || (t = Math.max(this.slides[0].pos, Math.min(t, o.pos)));
        var h = i + o.gap;
        l = Math.floor(t / h) || 0, t -= l * h;
        var d = o,
          u = this.slides.find(function (e) {
            var i = t + (d && !c ? .5 * d.dim : 0);
            return d = e, e.pos <= i && e.pos + e.dim + e.gap > i;
          });
        return u || (u = o), r = this.getPageForSlide(u.index), a = r + l * n, {
          page: a,
          pageIndex: r
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this22 = this;
        if ([j.Destroy].includes(this.state)) return;
        this.state = j.Destroy;
        var t = this.container,
          e = this.viewport,
          i = this.track,
          n = this.slides,
          s = this.panzoom,
          o = this.option("classes");
        t.removeEventListener("click", this.onClick, {
          passive: !1,
          capture: !1
        }), t.removeEventListener("slideTo", this.onSlideTo), window.removeEventListener("resize", this.onResize), s && (s.destroy(), this.panzoom = null), n && n.forEach(function (t) {
          _this22.removeSlideEl(t);
        }), this.detachPlugins(), e && e.offsetParent && i && i.offsetParent && e.replaceWith.apply(e, _toConsumableArray(i.childNodes));
        for (var _i41 = 0, _Object$entries4 = Object.entries(o); _i41 < _Object$entries4.length; _i41++) {
          var _Object$entries4$_i = _slicedToArray(_Object$entries4[_i41], 2),
            _e29 = _Object$entries4$_i[0],
            _i42 = _Object$entries4$_i[1];
          "container" !== _e29 && _i42 && t.classList.remove(_i42);
        }
        this.track = null, this.viewport = null, this.page = 0, this.slides = [];
        var a = this.events.get("ready");
        this.events = new Map(), a && this.events.set("ready", a);
      }
    }]);
    return U;
  }(g);
  Object.defineProperty(U, "Panzoom", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: k
  }), Object.defineProperty(U, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: F
  }), Object.defineProperty(U, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Z
  });
  var G = function G(t) {
      var e = window.pageYOffset,
        i = window.pageYOffset + window.innerHeight;
      if (!E(t)) return 0;
      var n = t.getBoundingClientRect(),
        s = n.y + window.pageYOffset,
        o = n.y + n.height + window.pageYOffset;
      if (e > o || i < s) return 0;
      if (e < s && i > o) return 100;
      if (s < e && o > i) return 100;
      var a = n.height;
      s < e && (a -= window.pageYOffset - s), o > i && (a -= o - i);
      var r = a / window.innerHeight * 100;
      return Math.round(r);
    },
    K = !("undefined" == typeof window || !window.document || !window.document.createElement);
  var J;
  var Q = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden]):not(.fancybox-focus-guard)", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"]):not([disabled]):not([aria-hidden])'].join(","),
    tt = function tt(t) {
      if (t && K) {
        void 0 === J && document.createElement("div").focus({
          get preventScroll() {
            return J = !0, !1;
          }
        });
        try {
          if (J) t.focus({
            preventScroll: !0
          });else {
            var _e30 = window.pageXOffset || document.body.scrollTop,
              _i43 = window.pageYOffset || document.body.scrollLeft;
            t.focus(), document.body.scrollTo({
              top: _e30,
              left: _i43,
              behavior: "auto"
            });
          }
        } catch (t) {}
      }
    },
    et = {
      dragToClose: !0,
      hideScrollbar: !0,
      Carousel: {
        classes: {
          container: "fancybox__carousel",
          viewport: "fancybox__viewport",
          track: "fancybox__track",
          slide: "fancybox__slide"
        }
      },
      contentClick: "toggleZoom",
      contentDblClick: !1,
      backdropClick: "close",
      animated: !0,
      idle: 3500,
      showClass: "f-zoomInUp",
      hideClass: "f-fadeOut",
      commonCaption: !1,
      parentEl: null,
      startIndex: 0,
      l10n: Object.assign(Object.assign({}, y), {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        MODAL: "You can close this modal content with the ESC key",
        ERROR: "Something Went Wrong, Please Try Again Later",
        IMAGE_ERROR: "Image Not Found",
        ELEMENT_NOT_FOUND: "HTML Element Not Found",
        AJAX_NOT_FOUND: "Error Loading AJAX : Not Found",
        AJAX_FORBIDDEN: "Error Loading AJAX : Forbidden",
        IFRAME_ERROR: "Error Loading Page",
        TOGGLE_ZOOM: "Toggle zoom level",
        TOGGLE_THUMBS: "Toggle thumbnails",
        TOGGLE_SLIDESHOW: "Toggle slideshow",
        TOGGLE_FULLSCREEN: "Toggle full-screen mode",
        DOWNLOAD: "Download"
      }),
      tpl: {
        closeButton: '<button data-fancybox-close class="f-button is-close-btn" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" tabindex="-1"><path d="M20 20L4 4m16 0L4 20"/></svg></button>',
        main: '<div class="fancybox__container" role="dialog" aria-modal="true" aria-label="{{MODAL}}" tabindex="-1">\n    <div class="fancybox__backdrop"></div>\n    <div class="fancybox__carousel"></div>\n    <div class="fancybox__footer"></div>\n  </div>'
      },
      groupAll: !1,
      groupAttr: "data-fancybox",
      defaultType: "image",
      defaultDisplay: "block",
      autoFocus: !0,
      trapFocus: !0,
      placeFocusBack: !0,
      closeButton: "auto",
      keyboard: {
        Escape: "close",
        Delete: "close",
        Backspace: "close",
        PageUp: "next",
        PageDown: "prev",
        ArrowUp: "prev",
        ArrowDown: "next",
        ArrowRight: "next",
        ArrowLeft: "prev"
      },
      Fullscreen: {
        autoStart: !1
      },
      compact: function compact() {
        return window.matchMedia("(max-width: 578px), (max-height: 578px)").matches;
      },
      wheel: "zoom"
    };
  var it, nt;
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Closing = 2] = "Closing", t[t.CustomClosing = 3] = "CustomClosing", t[t.Destroy = 4] = "Destroy";
  }(it || (it = {})), function (t) {
    t[t.Loading = 0] = "Loading", t[t.Opening = 1] = "Opening", t[t.Ready = 2] = "Ready", t[t.Closing = 3] = "Closing";
  }(nt || (nt = {}));
  var st = function st() {
    queueMicrotask(function () {
      (function () {
        var _ot$parseURL = ot.parseURL(),
          t = _ot$parseURL.slug,
          e = _ot$parseURL.index,
          i = Wt.getInstance();
        if (i && !1 !== i.option("Hash")) {
          var _n13 = i.carousel;
          if (t && _n13) {
            var _iterator28 = _createForOfIteratorHelper(_n13.slides),
              _step28;
            try {
              for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                var _e31 = _step28.value;
                if (_e31.slug && _e31.slug === t) return _n13.slideTo(_e31.index);
              }
            } catch (err) {
              _iterator28.e(err);
            } finally {
              _iterator28.f();
            }
            if (t === i.option("slug")) return _n13.slideTo(e - 1);
            var _s8 = i.getSlide(),
              _o4 = _s8 && _s8.triggerEl && _s8.triggerEl.dataset;
            if (_o4 && _o4.fancybox === t) return _n13.slideTo(e - 1);
          }
          ot.hasSilentClose = !0, i.close();
        }
        ot.startFromUrl();
      })();
    });
  };
  var ot = /*#__PURE__*/function (_N4) {
    _inherits(ot, _N4);
    var _super8 = _createSuper(ot);
    function ot() {
      var _this23;
      _classCallCheck(this, ot);
      _this23 = _super8.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this23), "origHash", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ""
      }), Object.defineProperty(_assertThisInitialized(_this23), "timer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this23;
    }
    _createClass(ot, [{
      key: "onChange",
      value: function onChange() {
        var t = this.instance,
          e = t.carousel;
        this.timer && clearTimeout(this.timer);
        var i = t.getSlide();
        if (!e || !i) return;
        var n = t.isOpeningSlide(i),
          s = new URL(document.URL).hash;
        var o,
          a = i.slug || void 0,
          r = i.triggerEl || void 0;
        o = a || this.instance.option("slug"), !o && r && r.dataset && (o = r.dataset.fancybox);
        var l = "";
        o && "true" !== o && (l = "#" + o + (!a && e.slides.length > 1 ? "-" + (i.index + 1) : "")), n && (this.origHash = s !== l ? s : ""), l && s !== l && (this.timer = setTimeout(function () {
          try {
            t.state === it.Ready && window.history[n ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + l);
          } catch (t) {}
        }, 300));
      }
    }, {
      key: "onClose",
      value: function onClose() {
        if (this.timer && clearTimeout(this.timer), !0 !== ot.hasSilentClose) try {
          window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (this.origHash || ""));
        } catch (t) {}
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this.instance;
        t.on("Carousel.ready", this.onChange), t.on("Carousel.change", this.onChange), t.on("close", this.onClose);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this.instance;
        t.off("Carousel.ready", this.onChange), t.off("Carousel.change", this.onChange), t.off("close", this.onClose);
      }
    }], [{
      key: "parseURL",
      value: function parseURL() {
        var t = window.location.hash.slice(1),
          e = t.split("-"),
          i = e[e.length - 1],
          n = i && /^\+?\d+$/.test(i) && parseInt(e.pop() || "1", 10) || 1;
        return {
          hash: t,
          slug: e.join("-"),
          index: n
        };
      }
    }, {
      key: "startFromUrl",
      value: function startFromUrl() {
        if (ot.hasSilentClose = !1, Wt.getInstance() || !1 === Wt.defaults.Hash) return;
        var _ot$parseURL2 = ot.parseURL(),
          t = _ot$parseURL2.hash,
          e = _ot$parseURL2.slug,
          i = _ot$parseURL2.index;
        if (!e) return;
        var n = document.querySelector("[data-slug=\"".concat(t, "\"]"));
        if (n && n.dispatchEvent(new CustomEvent("click", {
          bubbles: !0,
          cancelable: !0
        })), Wt.getInstance()) return;
        var s = document.querySelectorAll("[data-fancybox=\"".concat(e, "\"]"));
        s.length && (n = s[i - 1], n && n.dispatchEvent(new CustomEvent("click", {
          bubbles: !0,
          cancelable: !0
        })));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        window.removeEventListener("hashchange", st, !1);
      }
    }]);
    return ot;
  }(N);
  function at() {
    window.addEventListener("hashchange", st, !1), setTimeout(function () {
      ot.startFromUrl();
    }, 500);
  }
  Object.defineProperty(ot, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {}
  }), Object.defineProperty(ot, "hasSilentClose", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: !1
  }), K && (/complete|interactive|loaded/.test(document.readyState) ? at() : document.addEventListener("DOMContentLoaded", at));
  var rt = /*#__PURE__*/function (_N5) {
    _inherits(rt, _N5);
    var _super9 = _createSuper(rt);
    function rt() {
      _classCallCheck(this, rt);
      return _super9.apply(this, arguments);
    }
    _createClass(rt, [{
      key: "onCreateSlide",
      value: function onCreateSlide(t, e, i) {
        var n = this.instance.optionFor(i, "src") || "";
        i.el && "image" === i.type && "string" == typeof n && this.setImage(i, n);
      }
    }, {
      key: "onRemoveSlide",
      value: function onRemoveSlide(t, e, i) {
        i.panzoom && i.panzoom.destroy(), i.panzoom = void 0, i.imageEl = void 0;
      }
    }, {
      key: "onChange",
      value: function onChange(t, e, i, n) {
        var _iterator29 = _createForOfIteratorHelper(e.slides),
          _step29;
        try {
          for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
            var _t42 = _step29.value;
            var _e32 = _t42.panzoom;
            _e32 && _t42.index !== i && _e32.reset(.35);
          }
        } catch (err) {
          _iterator29.e(err);
        } finally {
          _iterator29.f();
        }
      }
    }, {
      key: "onClose",
      value: function onClose() {
        var t;
        var e = this.instance,
          i = e.container,
          n = e.getSlide();
        if (!i || !i.parentElement || !n) return;
        var s = n.el,
          o = n.contentEl,
          a = n.panzoom,
          r = n.thumbElSrc;
        if (!s || !r || !o || !a || a.isContentLoading || a.state === b.Init || a.state === b.Destroy) return;
        a.updateMetrics();
        var l = this.getZoomInfo(n);
        if (!l) return;
        this.instance.state = it.CustomClosing, i.classList.remove("is-zooming-in"), i.classList.add("is-zooming-out"), o.style.backgroundImage = "url('".concat(r, "')");
        var c = i.getBoundingClientRect();
        1 === ((null === (t = window.visualViewport) || void 0 === t ? void 0 : t.scale) || 1) && Object.assign(i.style, {
          position: "absolute",
          top: "".concat(window.pageYOffset, "px"),
          left: "".concat(window.pageXOffset, "px"),
          bottom: "auto",
          right: "auto",
          width: "".concat(c.width, "px"),
          height: "".concat(c.height, "px"),
          overflow: "hidden"
        });
        var h = l.x,
          d = l.y,
          u = l.scale,
          p = l.opacity;
        if (p) {
          var _t43 = function (t, e, i, n) {
            var s = e - t,
              o = n - i;
            return function (e) {
              return i + ((e - t) / s * o || 0);
            };
          }(a.scale, u, 1, 0);
          a.on("afterTransform", function () {
            o.style.opacity = _t43(a.scale) + "";
          });
        }
        a.on("endAnimation", function () {
          e.destroy();
        }), a.target.a = u, a.target.b = 0, a.target.c = 0, a.target.d = u, a.panTo({
          x: h,
          y: d,
          scale: u,
          friction: p ? .2 : .33,
          ignoreBounds: !0
        }), a.isResting && e.destroy();
      }
    }, {
      key: "setImage",
      value: function setImage(t, e) {
        var _this24 = this;
        var i = this.instance;
        t.src = e, this.process(t, e).then(function (e) {
          var n;
          var s = t.contentEl,
            o = t.imageEl,
            a = t.thumbElSrc;
          if (i.isClosing() || !s || !o) return;
          s.offsetHeight;
          var r = !!i.isOpeningSlide(t) && _this24.getZoomInfo(t);
          if (_this24.option("protected")) {
            null === (n = t.el) || void 0 === n || n.addEventListener("contextmenu", function (t) {
              t.preventDefault();
            });
            var _e33 = document.createElement("div");
            P(_e33, "fancybox-protected"), s.appendChild(_e33);
          }
          if (a && r) {
            var _n14 = e.contentRect,
              _o5 = Math.max(_n14.fullWidth, _n14.fullHeight);
            var _c4 = null;
            !r.opacity && _o5 > 1200 && (_c4 = document.createElement("img"), P(_c4, "fancybox-ghost"), _c4.src = a, s.appendChild(_c4));
            var _h3 = function _h3() {
              _c4 && (P(_c4, "f-fadeFastOut"), setTimeout(function () {
                _c4 && (_c4.remove(), _c4 = null);
              }, 200));
            };
            (l = a, new Promise(function (t, e) {
              var i = new Image();
              i.onload = t, i.onerror = e, i.src = l;
            })).then(function () {
              t.state = nt.Opening, _this24.instance.emit("reveal", t), _this24.zoomIn(t).then(function () {
                _h3(), _this24.instance.done(t);
              }, function () {
                i.hideLoading(t);
              }), _c4 && setTimeout(function () {
                _h3();
              }, _o5 > 2500 ? 800 : 200);
            }, function () {
              i.hideLoading(t), i.revealContent(t);
            });
          } else {
            var _n15 = _this24.optionFor(t, "initialSize"),
              _s9 = _this24.optionFor(t, "zoom"),
              _o6 = {
                event: i.prevMouseMoveEvent || i.options.event,
                friction: _s9 ? .12 : 0
              };
            var _a2 = i.optionFor(t, "showClass") || void 0,
              _r2 = !0;
            i.isOpeningSlide(t) && ("full" === _n15 ? e.zoomToFull(_o6) : "cover" === _n15 ? e.zoomToCover(_o6) : "max" === _n15 ? e.zoomToMax(_o6) : _r2 = !1, e.stop("current")), _r2 && _a2 && (_a2 = e.isDragging ? "f-fadeIn" : ""), i.revealContent(t, _a2);
          }
          var l;
        }, function () {
          i.setError(t, "{{IMAGE_ERROR}}");
        });
      }
    }, {
      key: "process",
      value: function process(t, e) {
        var _this25 = this;
        return new Promise(function (i, n) {
          var o;
          var a = _this25.instance,
            r = t.el;
          a.clearContent(t), a.showLoading(t);
          var l = _this25.optionFor(t, "content");
          if ("string" == typeof l && (l = s(l)), !l || !E(l)) {
            if (l = document.createElement("img"), l instanceof HTMLImageElement) {
              var _i44 = "",
                _n16 = t.caption;
              _i44 = "string" == typeof _n16 && _n16 ? _n16.replace(/<[^>]+>/gi, "").substring(0, 1e3) : "Image ".concat(t.index + 1, " of ").concat(null === (o = a.carousel) || void 0 === o ? void 0 : o.pages.length), l.src = e || "", l.alt = _i44, l.draggable = !1, t.srcset && l.setAttribute("srcset", t.srcset);
            }
            t.sizes && l.setAttribute("sizes", t.sizes);
          }
          l.classList.add("fancybox-image"), t.imageEl = l, a.setContent(t, l, !1);
          t.panzoom = new k(r, p({
            transformParent: !0
          }, _this25.option("Panzoom") || {}, {
            content: l,
            width: a.optionFor(t, "width", "auto"),
            height: a.optionFor(t, "height", "auto"),
            wheel: function wheel() {
              var t = a.option("wheel");
              return ("zoom" === t || "pan" == t) && t;
            },
            click: function click(e, i) {
              var n, s;
              if (a.isCompact || a.isClosing()) return !1;
              if (t.index !== (null === (n = a.getSlide()) || void 0 === n ? void 0 : n.index)) return !1;
              if (i) {
                var _t44 = i.composedPath()[0];
                if (["A", "BUTTON", "TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].includes(_t44.nodeName)) return !1;
              }
              var o = !i || i.target && (null === (s = t.contentEl) || void 0 === s ? void 0 : s.contains(i.target));
              return a.option(o ? "contentClick" : "backdropClick") || !1;
            },
            dblClick: function dblClick() {
              return a.isCompact ? "toggleZoom" : a.option("contentDblClick") || !1;
            },
            spinner: !1,
            panOnlyZoomed: !0,
            wheelLimit: 1 / 0,
            on: {
              ready: function ready(t) {
                i(t);
              },
              error: function error() {
                n();
              },
              destroy: function destroy() {
                n();
              }
            }
          }));
        });
      }
    }, {
      key: "zoomIn",
      value: function zoomIn(t) {
        var _this26 = this;
        return new Promise(function (e, i) {
          var n = _this26.instance,
            s = n.container,
            o = t.panzoom,
            a = t.contentEl,
            r = t.el;
          o && o.updateMetrics();
          var l = _this26.getZoomInfo(t);
          if (!(l && r && a && o && s)) return void i();
          var c = l.x,
            h = l.y,
            d = l.scale,
            u = l.opacity,
            p = function p() {
              t.state !== nt.Closing && (u && (a.style.opacity = Math.max(Math.min(1, 1 - (1 - o.scale) / (1 - d)), 0) + ""), o.scale >= 1 && o.scale > o.targetScale - .1 && e(o));
            },
            f = function f(t) {
              S(s, "is-zooming-in"), t.scale < .99 || t.scale > 1.01 || (a.style.opacity = "", t.off("endAnimation", f), t.off("touchStart", f), t.off("afterTransform", p), e(t));
            };
          o.on("endAnimation", f), o.on("touchStart", f), o.on("afterTransform", p), o.on(["error", "destroy"], function () {
            i();
          }), o.panTo({
            x: c,
            y: h,
            scale: d,
            friction: 0,
            ignoreBounds: !0
          }), o.stop("current");
          var m = {
              event: "mousemove" === o.panMode ? n.prevMouseMoveEvent || n.options.event : void 0
            },
            g = _this26.optionFor(t, "initialSize");
          P(s, "is-zooming-in"), n.hideLoading(t), "full" === g ? o.zoomToFull(m) : "cover" === g ? o.zoomToCover(m) : "max" === g ? o.zoomToMax(m) : o.reset(.172);
        });
      }
    }, {
      key: "getZoomInfo",
      value: function getZoomInfo(t) {
        var e;
        var i = t.el,
          n = t.imageEl,
          s = t.thumbEl,
          o = t.panzoom;
        if (!i || !n || !s || !o || G(s) < 3 || !this.optionFor(t, "zoom") || this.instance.state === it.Destroy) return !1;
        if (1 !== ((null === (e = window.visualViewport) || void 0 === e ? void 0 : e.scale) || 1)) return !1;
        var _s$getBoundingClientR = s.getBoundingClientRect(),
          a = _s$getBoundingClientR.top,
          r = _s$getBoundingClientR.left,
          l = _s$getBoundingClientR.width,
          c = _s$getBoundingClientR.height,
          _o$contentRect = o.contentRect,
          h = _o$contentRect.top,
          d = _o$contentRect.left,
          u = _o$contentRect.fitWidth,
          p = _o$contentRect.fitHeight;
        if (!(l && c && u && p)) return !1;
        var f = o.container.getBoundingClientRect();
        d += f.left, h += f.top;
        var m = -1 * (d + .5 * u - (r + .5 * l)),
          g = -1 * (h + .5 * p - (a + .5 * c)),
          b = l / u;
        var v = this.option("zoomOpacity") || !1;
        return "auto" === v && (v = Math.abs(l / c - u / p) > .1), {
          x: m,
          y: g,
          scale: b,
          opacity: v
        };
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("Carousel.change", t.onChange), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("close", t.onClose);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("Carousel.change", t.onChange), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("close", t.onClose);
      }
    }]);
    return rt;
  }(N);
  Object.defineProperty(rt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      initialSize: "fit",
      Panzoom: {
        maxScale: 1
      },
      "protected": !1,
      zoom: !0,
      zoomOpacity: "auto"
    }
  }), "function" == typeof SuppressedError && SuppressedError;
  var lt = function lt(t) {
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = new URL(t),
        n = new URLSearchParams(i.search),
        s = new URLSearchParams();
      for (var _i45 = 0, _arr4 = [].concat(_toConsumableArray(n), _toConsumableArray(Object.entries(e))); _i45 < _arr4.length; _i45++) {
        var _arr4$_i = _slicedToArray(_arr4[_i45], 2),
          _t45 = _arr4$_i[0],
          _i46 = _arr4$_i[1];
        var _e34 = _i46.toString();
        "t" === _t45 ? s.set("start", parseInt(_e34).toString()) : s.set(_t45, _e34);
      }
      var o = s.toString(),
        a = t.match(/#t=((.*)?\d+s)/);
      return a && (o += "#t=".concat(a[1])), o;
    },
    ct = {
      ajax: null,
      autoSize: !0,
      iframeAttr: {
        allow: "autoplay; fullscreen",
        scrolling: "auto"
      },
      preload: !0,
      videoAutoplay: !0,
      videoRatio: 16 / 9,
      videoTpl: '<video class="fancybox__html5video" playsinline controls controlsList="nodownload" poster="{{poster}}">\n  <source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos.</video>',
      videoFormat: "",
      vimeo: {
        byline: 1,
        color: "00adef",
        controls: 1,
        dnt: 1,
        muted: 0
      },
      youtube: {
        controls: 1,
        enablejsapi: 1,
        nocookie: 1,
        rel: 0,
        fs: 1
      }
    },
    ht = ["image", "html", "ajax", "inline", "clone", "iframe", "map", "pdf", "html5video", "youtube", "vimeo", "video"];
  var dt = /*#__PURE__*/function (_N6) {
    _inherits(dt, _N6);
    var _super10 = _createSuper(dt);
    function dt() {
      _classCallCheck(this, dt);
      return _super10.apply(this, arguments);
    }
    _createClass(dt, [{
      key: "onInitSlide",
      value: function onInitSlide(t, e, i) {
        this.processType(i);
      }
    }, {
      key: "onCreateSlide",
      value: function onCreateSlide(t, e, i) {
        this.setContent(i);
      }
    }, {
      key: "onRemoveSlide",
      value: function onRemoveSlide(t, e, i) {
        i.xhr && (i.xhr.abort(), i.xhr = null);
        var n = i.iframeEl;
        n && (n.onload = n.onerror = null, n.src = "//about:blank", i.iframeEl = null);
        var s = i.contentEl,
          o = i.placeholderEl;
        if ("inline" === i.type && s && o) s.classList.remove("fancybox__content"), "none" !== s.style.display && (s.style.display = "none"), o.parentNode && o.parentNode.insertBefore(s, o), o.remove(), i.contentEl = void 0, i.placeholderEl = void 0;else for (; i.el && i.el.firstChild;) i.el.removeChild(i.el.firstChild);
      }
    }, {
      key: "onSelectSlide",
      value: function onSelectSlide(t, e, i) {
        i.state === nt.Ready && this.playVideo();
      }
    }, {
      key: "onUnselectSlide",
      value: function onUnselectSlide(t, e, i) {
        var n, s;
        if ("html5video" === i.type) {
          try {
            null === (s = null === (n = i.el) || void 0 === n ? void 0 : n.querySelector("video")) || void 0 === s || s.pause();
          } catch (t) {}
          return;
        }
        var o;
        "vimeo" === i.type ? o = {
          method: "pause",
          value: "true"
        } : "youtube" === i.type && (o = {
          event: "command",
          func: "pauseVideo"
        }), o && i.iframeEl && i.iframeEl.contentWindow && i.iframeEl.contentWindow.postMessage(JSON.stringify(o), "*"), i.poller && clearTimeout(i.poller);
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        t.isCurrentSlide(e) && !t.isClosing() && this.playVideo();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh(t, e) {
        var _this27 = this;
        e.slides.forEach(function (t) {
          t.el && (_this27.setAspectRatio(t), _this27.resizeIframe(t));
        });
      }
    }, {
      key: "onMessage",
      value: function onMessage(t) {
        try {
          var _e35 = JSON.parse(t.data);
          if ("https://player.vimeo.com" === t.origin) {
            if ("ready" === _e35.event) for (var _i47 = 0, _Array$from3 = Array.from(document.getElementsByClassName("fancybox__iframe")); _i47 < _Array$from3.length; _i47++) {
              var _e36 = _Array$from3[_i47];
              _e36 instanceof HTMLIFrameElement && _e36.contentWindow === t.source && (_e36.dataset.ready = "true");
            }
          } else if (t.origin.match(/^https:\/\/(www.)?youtube(-nocookie)?.com$/) && "onReady" === _e35.event) {
            var _t46 = document.getElementById(_e35.id);
            _t46 && (_t46.dataset.ready = "true");
          }
        } catch (t) {}
      }
    }, {
      key: "loadAjaxContent",
      value: function loadAjaxContent(t) {
        var e = this.instance.optionFor(t, "src") || "";
        this.instance.showLoading(t);
        var i = this.instance,
          n = new XMLHttpRequest();
        i.showLoading(t), n.onreadystatechange = function () {
          n.readyState === XMLHttpRequest.DONE && i.state === it.Ready && (i.hideLoading(t), 200 === n.status ? i.setContent(t, n.responseText) : i.setError(t, 404 === n.status ? "{{AJAX_NOT_FOUND}}" : "{{AJAX_FORBIDDEN}}"));
        };
        var s = t.ajax || null;
        n.open(s ? "POST" : "GET", e + ""), n.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), n.setRequestHeader("X-Requested-With", "XMLHttpRequest"), n.send(s), t.xhr = n;
      }
    }, {
      key: "setInlineContent",
      value: function setInlineContent(t) {
        var e = null;
        if (E(t.src)) e = t.src;else if ("string" == typeof t.src) {
          var _i48 = t.src.split("#", 2).pop();
          e = _i48 ? document.getElementById(_i48) : null;
        }
        if (e) {
          if ("clone" === t.type || e.closest(".fancybox__slide")) {
            e = e.cloneNode(!0);
            var _i49 = e.dataset.animationName;
            _i49 && (e.classList.remove(_i49), delete e.dataset.animationName);
            var _n17 = e.getAttribute("id");
            _n17 = _n17 ? "".concat(_n17, "--clone") : "clone-".concat(this.instance.id, "-").concat(t.index), e.setAttribute("id", _n17);
          } else if (e.parentNode) {
            var _i50 = document.createElement("div");
            _i50.classList.add("fancybox-placeholder"), e.parentNode.insertBefore(_i50, e), t.placeholderEl = _i50;
          }
          this.instance.setContent(t, e);
        } else this.instance.setError(t, "{{ELEMENT_NOT_FOUND}}");
      }
    }, {
      key: "setIframeContent",
      value: function setIframeContent(t) {
        var _this28 = this;
        var e = t.src,
          i = t.el;
        if (!e || "string" != typeof e || !i) return;
        i.classList.add("is-loading");
        var n = this.instance,
          s = document.createElement("iframe");
        s.className = "fancybox__iframe", s.setAttribute("id", "fancybox__iframe_".concat(n.id, "_").concat(t.index));
        for (var _i51 = 0, _Object$entries5 = Object.entries(this.optionFor(t, "iframeAttr") || {}); _i51 < _Object$entries5.length; _i51++) {
          var _Object$entries5$_i = _slicedToArray(_Object$entries5[_i51], 2),
            _e37 = _Object$entries5$_i[0],
            _i52 = _Object$entries5$_i[1];
          s.setAttribute(_e37, _i52);
        }
        s.onerror = function () {
          n.setError(t, "{{IFRAME_ERROR}}");
        }, t.iframeEl = s;
        var o = this.optionFor(t, "preload");
        if ("iframe" !== t.type || !1 === o) return s.setAttribute("src", t.src + ""), n.setContent(t, s, !1), this.resizeIframe(t), void n.revealContent(t);
        n.showLoading(t), s.onload = function () {
          if (!s.src.length) return;
          var e = "true" !== s.dataset.ready;
          s.dataset.ready = "true", _this28.resizeIframe(t), e ? n.revealContent(t) : n.hideLoading(t);
        }, s.setAttribute("src", e), n.setContent(t, s, !1);
      }
    }, {
      key: "resizeIframe",
      value: function resizeIframe(t) {
        var e = t.iframeEl,
          i = null == e ? void 0 : e.parentElement;
        if (!e || !i) return;
        var n = t.autoSize,
          s = t.width || 0,
          o = t.height || 0;
        s && o && (n = !1);
        var a = i && i.style;
        if (!1 !== t.preload && !1 !== n && a) try {
          var _t47 = window.getComputedStyle(i),
            _n18 = parseFloat(_t47.paddingLeft) + parseFloat(_t47.paddingRight),
            _r3 = parseFloat(_t47.paddingTop) + parseFloat(_t47.paddingBottom),
            _l4 = e.contentWindow;
          if (_l4) {
            var _t48 = _l4.document,
              _e38 = _t48.getElementsByTagName("html")[0],
              _i53 = _t48.body;
            a.width = "", _i53.style.overflow = "hidden", s = s || _e38.scrollWidth + _n18, a.width = "".concat(s, "px"), _i53.style.overflow = "", a.flex = "0 0 auto", a.height = "".concat(_i53.scrollHeight, "px"), o = _e38.scrollHeight + _r3;
          }
        } catch (t) {}
        if (s || o) {
          var _t49 = {
            flex: "0 1 auto",
            width: "",
            height: ""
          };
          s && (_t49.width = "".concat(s, "px")), o && (_t49.height = "".concat(o, "px")), Object.assign(a, _t49);
        }
      }
    }, {
      key: "playVideo",
      value: function playVideo() {
        var t = this.instance.getSlide();
        if (!t) return;
        var e = t.el;
        if (!e || !e.offsetParent) return;
        if (!this.optionFor(t, "videoAutoplay")) return;
        if ("html5video" === t.type) try {
          var _t50 = e.querySelector("video");
          if (_t50) {
            var _e39 = _t50.play();
            void 0 !== _e39 && _e39.then(function () {})["catch"](function (e) {
              _t50.muted = !0, _t50.play();
            });
          }
        } catch (t) {}
        if ("youtube" !== t.type && "vimeo" !== t.type) return;
        var i = function i() {
          if (t.iframeEl && t.iframeEl.contentWindow) {
            var _e40;
            if ("true" === t.iframeEl.dataset.ready) return _e40 = "youtube" === t.type ? {
              event: "command",
              func: "playVideo"
            } : {
              method: "play",
              value: "true"
            }, _e40 && t.iframeEl.contentWindow.postMessage(JSON.stringify(_e40), "*"), void (t.poller = void 0);
            "youtube" === t.type && (_e40 = {
              event: "listening",
              id: t.iframeEl.getAttribute("id")
            }, t.iframeEl.contentWindow.postMessage(JSON.stringify(_e40), "*"));
          }
          t.poller = setTimeout(i, 250);
        };
        i();
      }
    }, {
      key: "processType",
      value: function processType(t) {
        if (t.html) return t.type = "html", t.src = t.html, void (t.html = "");
        var e = this.instance.optionFor(t, "src", "");
        if (!e || "string" != typeof e) return;
        var i = t.type,
          n = null;
        if (n = e.match(/(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(?:watch\?(?:.*&)?v=|v\/|u\/|shorts\/|embed\/?)?(videoseries\?list=(?:.*)|[\w-]{11}|\?listType=(?:.*)&list=(?:.*))(?:.*)/i)) {
          var _s10 = this.optionFor(t, "youtube"),
            _o7 = _s10.nocookie,
            _a3 = function (t, e) {
              var i = {};
              for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (i[n] = t[n]);
              if (null != t && "function" == typeof Object.getOwnPropertySymbols) {
                var s = 0;
                for (n = Object.getOwnPropertySymbols(t); s < n.length; s++) e.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[s]) && (i[n[s]] = t[n[s]]);
              }
              return i;
            }(_s10, ["nocookie"]),
            _r4 = "www.youtube".concat(_o7 ? "-nocookie" : "", ".com"),
            _l5 = lt(e, _a3),
            _c5 = encodeURIComponent(n[2]);
          t.videoId = _c5, t.src = "https://".concat(_r4, "/embed/").concat(_c5, "?").concat(_l5), t.thumbSrc = t.thumbSrc || "https://i.ytimg.com/vi/".concat(_c5, "/mqdefault.jpg"), i = "youtube";
        } else if (n = e.match(/^.+vimeo.com\/(?:\/)?([\d]+)((\/|\?h=)([a-z0-9]+))?(.*)?/)) {
          var _s11 = lt(e, this.optionFor(t, "vimeo")),
            _o8 = encodeURIComponent(n[1]),
            _a4 = n[4] || "";
          t.videoId = _o8, t.src = "https://player.vimeo.com/video/".concat(_o8, "?").concat(_a4 ? "h=".concat(_a4).concat(_s11 ? "&" : "") : "").concat(_s11), i = "vimeo";
        }
        if (!i && t.triggerEl) {
          var _e41 = t.triggerEl.dataset.type;
          ht.includes(_e41) && (i = _e41);
        }
        i || "string" == typeof e && ("#" === e.charAt(0) ? i = "inline" : (n = e.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (i = "html5video", t.videoFormat = t.videoFormat || "video/" + ("ogv" === n[1] ? "ogg" : n[1])) : e.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? i = "image" : e.match(/\.(pdf)((\?|#).*)?$/i) ? i = "pdf" : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:(?:(?:maps\/(?:place\/(?:.*)\/)?\@(.*),(\d+.?\d+?)z))|(?:\?ll=))(.*)?/i)) ? (t.src = "https://maps.google.".concat(n[1], "/?ll=").concat((n[2] ? n[2] + "&z=" + Math.floor(parseFloat(n[3])) + (n[4] ? n[4].replace(/^\//, "&") : "") : n[4] + "").replace(/\?/, "&"), "&output=").concat(n[4] && n[4].indexOf("layer=c") > 0 ? "svembed" : "embed"), i = "map") : (n = e.match(/(?:maps\.)?google\.([a-z]{2,3}(?:\.[a-z]{2})?)\/(?:maps\/search\/)(.*)/i)) && (t.src = "https://maps.google.".concat(n[1], "/maps?q=").concat(n[2].replace("query=", "q=").replace("api=1", ""), "&output=embed"), i = "map")), i = i || this.instance.option("defaultType"), t.type = i, "image" === i && (t.thumbSrc = t.thumbSrc || t.src);
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        var e = this.instance.optionFor(t, "src") || "";
        if (t && t.type && e) {
          switch (t.type) {
            case "html":
              this.instance.setContent(t, e);
              break;
            case "html5video":
              var _i54 = this.option("videoTpl");
              _i54 && this.instance.setContent(t, _i54.replace(/\{\{src\}\}/gi, e + "").replace(/\{\{format\}\}/gi, this.optionFor(t, "videoFormat") || "").replace(/\{\{poster\}\}/gi, t.poster || t.thumbSrc || ""));
              break;
            case "inline":
            case "clone":
              this.setInlineContent(t);
              break;
            case "ajax":
              this.loadAjaxContent(t);
              break;
            case "pdf":
            case "map":
            case "youtube":
            case "vimeo":
              t.preload = !1;
            case "iframe":
              this.setIframeContent(t);
          }
          this.setAspectRatio(t);
        }
      }
    }, {
      key: "setAspectRatio",
      value: function setAspectRatio(t) {
        var e;
        var i = t.width || 0,
          n = t.height || 0;
        if (i && n) return;
        var s = t.contentEl,
          o = this.optionFor(t, "videoRatio"),
          a = null === (e = t.el) || void 0 === e ? void 0 : e.getBoundingClientRect();
        if (!(s && a && o && 1 !== o && t.type && ["video", "youtube", "vimeo", "html5video"].includes(t.type))) return;
        var r = a.width,
          l = a.height;
        s.style.aspectRatio = o + "", s.style.width = r / l > o ? "auto" : "", s.style.height = r / l > o ? "" : "auto";
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("Carousel.initSlide", t.onInitSlide), e.on("Carousel.createSlide", t.onCreateSlide), e.on("Carousel.removeSlide", t.onRemoveSlide), e.on("Carousel.selectSlide", t.onSelectSlide), e.on("Carousel.unselectSlide", t.onUnselectSlide), e.on("Carousel.Panzoom.refresh", t.onRefresh), e.on("done", t.onDone), window.addEventListener("message", t.onMessage);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("Carousel.initSlide", t.onInitSlide), e.off("Carousel.createSlide", t.onCreateSlide), e.off("Carousel.removeSlide", t.onRemoveSlide), e.off("Carousel.selectSlide", t.onSelectSlide), e.off("Carousel.unselectSlide", t.onUnselectSlide), e.off("Carousel.Panzoom.refresh", t.onRefresh), e.off("done", t.onDone), window.removeEventListener("message", t.onMessage);
      }
    }]);
    return dt;
  }(N);
  Object.defineProperty(dt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: ct
  });
  var ut = "play",
    pt = "pause",
    ft = "ready";
  var mt = /*#__PURE__*/function (_N7) {
    _inherits(mt, _N7);
    var _super11 = _createSuper(mt);
    function mt() {
      var _this29;
      _classCallCheck(this, mt);
      _this29 = _super11.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this29), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: ft
      }), Object.defineProperty(_assertThisInitialized(_this29), "inHover", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this29), "timer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this29), "progressBar", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this29;
    }
    _createClass(mt, [{
      key: "isActive",
      get: function get() {
        return this.state !== ft;
      }
    }, {
      key: "onReady",
      value: function onReady(t) {
        this.option("autoStart") && (t.isInfinite || t.page < t.pages.length - 1) && this.start();
      }
    }, {
      key: "onChange",
      value: function onChange() {
        var t;
        (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) || (this.removeProgressBar(), this.pause());
      }
    }, {
      key: "onSettle",
      value: function onSettle() {
        this.resume();
      }
    }, {
      key: "onVisibilityChange",
      value: function onVisibilityChange() {
        "visible" === document.visibilityState ? this.resume() : this.pause();
      }
    }, {
      key: "onMouseEnter",
      value: function onMouseEnter() {
        this.inHover = !0, this.pause();
      }
    }, {
      key: "onMouseLeave",
      value: function onMouseLeave() {
        var t;
        this.inHover = !1, (null === (t = this.instance.panzoom) || void 0 === t ? void 0 : t.isResting) && this.resume();
      }
    }, {
      key: "onTimerEnd",
      value: function onTimerEnd() {
        var t = this.instance;
        "play" === this.state && (t.isInfinite || t.page !== t.pages.length - 1 ? t.slideNext() : t.slideTo(0));
      }
    }, {
      key: "removeProgressBar",
      value: function removeProgressBar() {
        this.progressBar && (this.progressBar.remove(), this.progressBar = null);
      }
    }, {
      key: "createProgressBar",
      value: function createProgressBar() {
        var t;
        if (!this.option("showProgress")) return null;
        this.removeProgressBar();
        var e = this.instance,
          i = (null === (t = e.pages[e.page]) || void 0 === t ? void 0 : t.slides) || [];
        var n = this.option("progressParentEl");
        if (n || (n = (1 === i.length ? i[0].el : null) || e.viewport), !n) return null;
        var s = document.createElement("div");
        return P(s, "f-progress"), n.prepend(s), this.progressBar = s, s.offsetHeight, s;
      }
    }, {
      key: "set",
      value: function set() {
        var t = this,
          e = t.instance;
        if (e.pages.length < 2) return;
        if (t.timer) return;
        var i = t.option("timeout");
        t.state = ut, P(e.container, "has-autoplay");
        var n = t.createProgressBar();
        n && (n.style.transitionDuration = "".concat(i, "ms"), n.style.transform = "scaleX(1)"), t.timer = setTimeout(function () {
          t.timer = null, t.inHover || t.onTimerEnd();
        }, i), t.emit("set");
      }
    }, {
      key: "clear",
      value: function clear() {
        var t = this;
        t.timer && (clearTimeout(t.timer), t.timer = null), t.removeProgressBar();
      }
    }, {
      key: "start",
      value: function start() {
        var t = this;
        if (t.set(), t.state !== ft) {
          if (t.option("pauseOnHover")) {
            var _e42 = t.instance.container;
            _e42.addEventListener("mouseenter", t.onMouseEnter, !1), _e42.addEventListener("mouseleave", t.onMouseLeave, !1);
          }
          document.addEventListener("visibilitychange", t.onVisibilityChange, !1), t.emit("start");
        }
      }
    }, {
      key: "stop",
      value: function stop() {
        var t = this,
          e = t.state,
          i = t.instance.container;
        t.clear(), t.state = ft, i.removeEventListener("mouseenter", t.onMouseEnter, !1), i.removeEventListener("mouseleave", t.onMouseLeave, !1), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), S(i, "has-autoplay"), e !== ft && t.emit("stop");
      }
    }, {
      key: "pause",
      value: function pause() {
        var t = this;
        t.state === ut && (t.state = pt, t.clear(), t.emit(pt));
      }
    }, {
      key: "resume",
      value: function resume() {
        var t = this,
          e = t.instance;
        if (e.isInfinite || e.page !== e.pages.length - 1) {
          if (t.state !== ut) {
            if (t.state === pt && !t.inHover) {
              var _e43 = new Event("resume", {
                bubbles: !0,
                cancelable: !0
              });
              t.emit("resume", _e43), _e43.defaultPrevented || t.set();
            }
          } else t.set();
        } else t.stop();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        this.state === ut || this.state === pt ? this.stop() : this.start();
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("ready", t.onReady), e.on("Panzoom.startAnimation", t.onChange), e.on("Panzoom.endAnimation", t.onSettle), e.on("Panzoom.touchMove", t.onChange);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("ready", t.onReady), e.off("Panzoom.startAnimation", t.onChange), e.off("Panzoom.endAnimation", t.onSettle), e.off("Panzoom.touchMove", t.onChange), t.stop();
      }
    }]);
    return mt;
  }(N);
  Object.defineProperty(mt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      autoStart: !0,
      pauseOnHover: !0,
      progressParentEl: null,
      showProgress: !0,
      timeout: 3e3
    }
  });
  var gt = /*#__PURE__*/function (_N8) {
    _inherits(gt, _N8);
    var _super12 = _createSuper(gt);
    function gt() {
      var _this30;
      _classCallCheck(this, gt);
      _this30 = _super12.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this30), "ref", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this30;
    }
    _createClass(gt, [{
      key: "onPrepare",
      value: function onPrepare(t) {
        var _this31 = this;
        var e = t.carousel;
        if (!e) return;
        var i = t.container;
        i && (e.options.Autoplay = p({
          autoStart: !1
        }, this.option("Autoplay") || {}, {
          pauseOnHover: !1,
          timeout: this.option("timeout"),
          progressParentEl: function progressParentEl() {
            return _this31.option("progressParentEl") || null;
          },
          on: {
            start: function start() {
              t.emit("startSlideshow");
            },
            set: function set(e) {
              var n;
              i.classList.add("has-slideshow"), (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) !== nt.Ready && e.pause();
            },
            stop: function stop() {
              i.classList.remove("has-slideshow"), t.isCompact || t.endIdle(), t.emit("endSlideshow");
            },
            resume: function resume(e, i) {
              var n, s, o;
              !i || !i.cancelable || (null === (n = t.getSlide()) || void 0 === n ? void 0 : n.state) === nt.Ready && (null === (o = null === (s = t.carousel) || void 0 === s ? void 0 : s.panzoom) || void 0 === o ? void 0 : o.isResting) || i.preventDefault();
            }
          }
        }), e.attachPlugins({
          Autoplay: mt
        }), this.ref = e.plugins.Autoplay);
      }
    }, {
      key: "onReady",
      value: function onReady(t) {
        var e = t.carousel,
          i = this.ref;
        e && i && this.option("playOnStart") && (e.isInfinite || e.page < e.pages.length - 1) && i.start();
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        var i = this.ref;
        if (!i) return;
        var n = e.panzoom;
        n && n.on("startAnimation", function () {
          t.isCurrentSlide(e) && i.stop();
        }), t.isCurrentSlide(e) && i.resume();
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t, e) {
        var i;
        var n = this.ref;
        n && e === this.option("key") && "BUTTON" !== (null === (i = document.activeElement) || void 0 === i ? void 0 : i.nodeName) && n.toggle();
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("Carousel.init", t.onPrepare), e.on("Carousel.ready", t.onReady), e.on("done", t.onDone), e.on("keydown", t.onKeydown);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("Carousel.init", t.onPrepare), e.off("Carousel.ready", t.onReady), e.off("done", t.onDone), e.off("keydown", t.onKeydown);
      }
    }]);
    return gt;
  }(N);
  Object.defineProperty(gt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: {
      key: " ",
      playOnStart: !1,
      progressParentEl: function progressParentEl(t) {
        var e;
        return (null === (e = t.instance.container) || void 0 === e ? void 0 : e.querySelector(".fancybox__toolbar [data-fancybox-toggle-slideshow]")) || t.instance.container;
      },
      timeout: 3e3
    }
  });
  var bt = {
    classes: {
      container: "f-thumbs f-carousel__thumbs",
      viewport: "f-thumbs__viewport",
      track: "f-thumbs__track",
      slide: "f-thumbs__slide",
      isResting: "is-resting",
      isSelected: "is-selected",
      isLoading: "is-loading",
      hasThumbs: "has-thumbs"
    },
    minCount: 2,
    parentEl: null,
    thumbTpl: '<button class="f-thumbs__slide__button" tabindex="0" type="button" aria-label="{{GOTO}}" data-carousel-index="%i"><img class="f-thumbs__slide__img" data-lazy-src="{{%s}}" alt="" /></button>',
    type: "modern"
  };
  var vt;
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Hidden = 2] = "Hidden", t[t.Disabled = 3] = "Disabled";
  }(vt || (vt = {}));
  var yt = /*#__PURE__*/function (_N9) {
    _inherits(yt, _N9);
    var _super13 = _createSuper(yt);
    function yt() {
      var _this32;
      _classCallCheck(this, yt);
      _this32 = _super13.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this32), "type", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: "modern"
      }), Object.defineProperty(_assertThisInitialized(_this32), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this32), "track", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this32), "carousel", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this32), "panzoom", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this32), "thumbWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this32), "thumbClipWidth", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this32), "thumbHeight", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this32), "thumbGap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this32), "thumbExtraGap", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this32), "shouldCenter", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !0
      }), Object.defineProperty(_assertThisInitialized(_this32), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: vt.Init
      });
      return _this32;
    }
    _createClass(yt, [{
      key: "formatThumb",
      value: function formatThumb(t, e) {
        return this.instance.localize(e, [["%i", t.index], ["%d", t.index + 1], ["%s", t.thumbSrc || "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"]]);
      }
    }, {
      key: "getSlides",
      value: function getSlides() {
        var t = [],
          e = this.option("thumbTpl") || "";
        if (e) {
          var _iterator30 = _createForOfIteratorHelper(this.instance.slides || []),
            _step30;
          try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
              var _i55 = _step30.value;
              var _n19 = "";
              _i55.type && (_n19 = "for-".concat(_i55.type), _i55.type && ["video", "youtube", "vimeo", "html5video"].includes(_i55.type) && (_n19 += " for-video")), t.push({
                html: this.formatThumb(_i55, e),
                customClass: _n19
              });
            }
          } catch (err) {
            _iterator30.e(err);
          } finally {
            _iterator30.f();
          }
        }
        return t;
      }
    }, {
      key: "onInitSlide",
      value: function onInitSlide(t, e) {
        var i = e.el;
        i && (e.thumbSrc = i.dataset.thumbSrc || e.thumbSrc || "", e.thumbClipWidth = parseFloat(i.dataset.thumbClipWidth || "") || e.thumbClipWidth || 0, e.thumbHeight = parseFloat(i.dataset.thumbHeight || "") || e.thumbHeight || 0);
      }
    }, {
      key: "onInitSlides",
      value: function onInitSlides() {
        this.state === vt.Init && this.build();
      }
    }, {
      key: "onRefreshM",
      value: function onRefreshM() {
        this.refreshModern();
      }
    }, {
      key: "onChangeM",
      value: function onChangeM() {
        "modern" === this.type && (this.shouldCenter = !0, this.centerModern());
      }
    }, {
      key: "onClickModern",
      value: function onClickModern(t) {
        t.preventDefault(), t.stopPropagation();
        var e = this.instance,
          i = e.page,
          n = function n(t) {
            if (t) {
              var _e44 = t.closest("[data-carousel-index]");
              if (_e44) return parseInt(_e44.dataset.carouselIndex || "", 10) || 0;
            }
            return -1;
          },
          s = function s(t, e) {
            var i = document.elementFromPoint(t, e);
            return i ? n(i) : -1;
          };
        var o = n(t.target);
        o < 0 && (o = s(t.clientX + this.thumbGap, t.clientY), o === i && (o = i - 1)), o < 0 && (o = s(t.clientX - this.thumbGap, t.clientY), o === i && (o = i + 1)), o < 0 && (o = function (e) {
          var n = s(t.clientX - e, t.clientY),
            a = s(t.clientX + e, t.clientY);
          return o < 0 && n === i && (o = i + 1), o < 0 && a === i && (o = i - 1), o;
        }(this.thumbExtraGap)), o === i ? this.centerModern() : o > -1 && o < e.pages.length && e.slideTo(o);
      }
    }, {
      key: "onTransformM",
      value: function onTransformM() {
        if ("modern" !== this.type) return;
        var t = this.instance,
          e = this.container,
          i = this.track,
          n = t.panzoom;
        if (!(e && i && n && this.panzoom)) return;
        a(e, this.cn("isResting"), n.state !== b.Init && n.isResting);
        var s = this.thumbGap,
          o = this.thumbExtraGap,
          r = this.thumbClipWidth;
        var l = 0,
          c = 0,
          h = 0;
        var _iterator31 = _createForOfIteratorHelper(t.slides),
          _step31;
        try {
          for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
            var _e45 = _step31.value;
            var _i56 = _e45.index,
              _n20 = _e45.thumbSlideEl;
            if (!_n20) continue;
            a(_n20, this.cn("isSelected"), _i56 === t.page), c = 1 - Math.abs(t.getProgress(_i56)), _n20.style.setProperty("--progress", c ? c + "" : "");
            var _d3 = .5 * ((_e45.thumbWidth || 0) - r);
            l += s, l += _d3, c && (l -= c * (_d3 + o)), _n20.style.setProperty("--shift", l - s + ""), l += _d3, c && (l -= c * (_d3 + o)), l -= s, 0 === _i56 && (h = o * c);
          }
        } catch (err) {
          _iterator31.e(err);
        } finally {
          _iterator31.f();
        }
        i && (i.style.setProperty("--left", h + ""), i.style.setProperty("--width", l + h + s + o * c + "")), this.shouldCenter && this.centerModern();
      }
    }, {
      key: "buildClassic",
      value: function buildClassic() {
        var _this33 = this;
        var t = this.container,
          e = this.track,
          i = this.getSlides();
        if (!t || !e || !i) return;
        var n = new this.instance.constructor(t, p({
          track: e,
          infinite: !1,
          center: !0,
          fill: !0,
          dragFree: !0,
          slidesPerPage: 1,
          transition: !1,
          Dots: !1,
          Navigation: !1,
          classes: {
            container: "f-thumbs",
            viewport: "f-thumbs__viewport",
            track: "f-thumbs__track",
            slide: "f-thumbs__slide"
          }
        }, this.option("Carousel") || {}, {
          Sync: {
            target: this.instance
          },
          slides: i
        }));
        this.carousel = n, this.track = e, n.on("ready", function () {
          _this33.emit("ready");
        }), n.on("createSlide", function (t, e) {
          _this33.emit("createSlide", e, e.el);
        });
      }
    }, {
      key: "buildModern",
      value: function buildModern() {
        var _this34 = this;
        if ("modern" !== this.type) return;
        var t = this.container,
          e = this.track,
          i = this.instance,
          n = this.option("thumbTpl") || "";
        if (!t || !e || !n) return;
        t.addEventListener("keydown", function () {
          S(t, "is-using-mouse");
        }), P(t, "is-horizontal"), this.updateModern();
        var _iterator32 = _createForOfIteratorHelper(i.slides || []),
          _step32;
        try {
          for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
            var _t51 = _step32.value;
            var _i57 = document.createElement("div");
            if (P(_i57, this.cn("slide")), _t51.type) {
              var _e46 = "for-".concat(_t51.type);
              ["video", "youtube", "vimeo", "html5video"].includes(_t51.type) && (_e46 += " for-video"), P(_i57, _e46);
            }
            _i57.appendChild(s(this.formatThumb(_t51, n))), this.emit("createSlide", _t51, _i57), _t51.thumbSlideEl = _i57, e.appendChild(_i57), this.resizeModernSlide(_t51);
          }
        } catch (err) {
          _iterator32.e(err);
        } finally {
          _iterator32.f();
        }
        var o = new i.constructor.Panzoom(t, {
          content: e,
          lockAxis: "x",
          zoom: !1,
          panOnlyZoomed: !1,
          bounds: function bounds() {
            var t = 0,
              e = 0,
              n = i.slides[0],
              s = i.slides[i.slides.length - 1],
              o = i.slides[i.page];
            return n && s && o && (e = -1 * _this34.getModernThumbPos(0), 0 !== i.page && (e += .5 * (n.thumbWidth || 0)), t = -1 * _this34.getModernThumbPos(i.slides.length - 1), i.page !== i.slides.length - 1 && (t += (s.thumbWidth || 0) - (o.thumbWidth || 0) - .5 * (s.thumbWidth || 0))), {
              x: {
                min: t,
                max: e
              },
              y: {
                min: 0,
                max: 0
              }
            };
          }
        });
        o.on("touchStart", function (t, e) {
          _this34.shouldCenter = !1, P(_this34.container, "is-using-mouse");
        }), o.on("click", function (t, e) {
          return _this34.onClickModern(e);
        }), o.on("ready", function () {
          _this34.centerModern(), _this34.emit("ready");
        }), o.on(["afterTransform", "refresh"], function (t) {
          _this34.lazyLoadModern();
        }), this.panzoom = o, this.refreshModern();
      }
    }, {
      key: "updateModern",
      value: function updateModern() {
        if ("modern" !== this.type) return;
        var t = this.container;
        t && (this.thumbGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-gap")) || 0, this.thumbExtraGap = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-extra-gap")) || 0, this.thumbWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-width")) || 40, this.thumbClipWidth = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-clip-width")) || 40, this.thumbHeight = parseFloat(getComputedStyle(t).getPropertyValue("--f-thumb-height")) || 40);
      }
    }, {
      key: "refreshModern",
      value: function refreshModern() {
        var t;
        if ("modern" === this.type) {
          this.updateModern();
          var _iterator33 = _createForOfIteratorHelper(this.instance.slides || []),
            _step33;
          try {
            for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
              var _t52 = _step33.value;
              this.resizeModernSlide(_t52);
            }
          } catch (err) {
            _iterator33.e(err);
          } finally {
            _iterator33.f();
          }
          this.onTransformM(), null === (t = this.panzoom) || void 0 === t || t.updateMetrics(!0), this.centerModern(0);
        }
      }
    }, {
      key: "centerModern",
      value: function centerModern(t) {
        var i = this.instance,
          n = this.container,
          s = this.panzoom;
        if (!n || !s || s.state === b.Init) return;
        var o = i.page;
        var a = this.getModernThumbPos(o),
          r = a;
        for (var _t53 = i.page - 3; _t53 < i.page + 3; _t53++) {
          if (_t53 < 0 || _t53 > i.pages.length - 1 || _t53 === i.page) continue;
          var _e47 = 1 - Math.abs(i.getProgress(_t53));
          _e47 > 0 && _e47 < 1 && (r += _e47 * (this.getModernThumbPos(_t53) - a));
        }
        var l = 100;
        void 0 === t && (t = .2, i.inTransition.size > 0 && (t = .12), Math.abs(-1 * s.current.e - r) > s.containerRect.width && (t = .5, l = 0)), s.options.maxVelocity = l, s.applyChange({
          panX: e(-1 * r - s.target.e, 1e3),
          friction: null === i.prevPage ? 0 : t
        });
      }
    }, {
      key: "lazyLoadModern",
      value: function lazyLoadModern() {
        var _this35 = this;
        var t = this.instance,
          e = this.panzoom;
        if (!e) return;
        var i = -1 * e.current.e || 0;
        var n = this.getModernThumbPos(t.page);
        if (e.state !== b.Init || 0 === n) {
          var _iterator34 = _createForOfIteratorHelper(t.slides || []),
            _step34;
          try {
            var _loop3 = function _loop3() {
                var n = _step34.value;
                var t = n.thumbSlideEl;
                if (!t) return 0; // continue
                var o = t.querySelector("img[data-lazy-src]"),
                  a = n.index,
                  r = _this35.getModernThumbPos(a),
                  l = i - .5 * e.containerRect.innerWidth,
                  c = l + e.containerRect.innerWidth;
                if (!o || r < l || r > c) return 0; // continue
                var h = o.dataset.lazySrc;
                if (!h || !h.length) return 0; // continue
                if (delete o.dataset.lazySrc, o.src = h, o.complete) return 0; // continue
                P(t, _this35.cn("isLoading"));
                var d = s(x);
                t.appendChild(d), o.addEventListener("load", function () {
                  t.offsetParent && (t.classList.remove(_this35.cn("isLoading")), d.remove());
                }, !1);
              },
              _ret;
            for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
              _ret = _loop3();
              if (_ret === 0) continue;
            }
          } catch (err) {
            _iterator34.e(err);
          } finally {
            _iterator34.f();
          }
        }
      }
    }, {
      key: "resizeModernSlide",
      value: function resizeModernSlide(t) {
        if ("modern" !== this.type) return;
        if (!t.thumbSlideEl) return;
        var e = t.thumbClipWidth && t.thumbHeight ? Math.round(this.thumbHeight * (t.thumbClipWidth / t.thumbHeight)) : this.thumbWidth;
        t.thumbWidth = e;
      }
    }, {
      key: "getModernThumbPos",
      value: function getModernThumbPos(t) {
        var i = this.instance.slides[t],
          n = this.panzoom;
        if (!n || !n.contentRect.fitWidth) return 0;
        var s = n.containerRect.innerWidth,
          o = n.contentRect.width;
        2 === this.instance.slides.length && (t -= 1, o = 2 * this.thumbClipWidth);
        var a = t * (this.thumbClipWidth + this.thumbGap) + this.thumbExtraGap + .5 * (i.thumbWidth || 0);
        return a -= o > s ? .5 * s : .5 * o, e(a || 0, 1);
      }
    }, {
      key: "build",
      value: function build() {
        var t = this.instance,
          e = t.container,
          i = this.option("minCount") || 0;
        if (i) {
          var _e48 = 0;
          var _iterator35 = _createForOfIteratorHelper(t.slides || []),
            _step35;
          try {
            for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
              var _i58 = _step35.value;
              _i58.thumbSrc && _e48++;
            }
          } catch (err) {
            _iterator35.e(err);
          } finally {
            _iterator35.f();
          }
          if (_e48 < i) return this.cleanup(), void (this.state = vt.Disabled);
        }
        var n = this.option("type");
        if (["modern", "classic"].indexOf(n) < 0) return void (this.state = vt.Disabled);
        this.type = n;
        var s = document.createElement("div");
        P(s, this.cn("container")), P(s, "is-".concat(n));
        var o = this.option("parentEl");
        o ? o.appendChild(s) : e.after(s), this.container = s, P(e, this.cn("hasThumbs"));
        var a = document.createElement("div");
        P(a, this.cn("track")), s.appendChild(a), this.track = a, "classic" === n ? this.buildClassic() : this.buildModern(), this.state = vt.Ready;
      }
    }, {
      key: "cleanup",
      value: function cleanup() {
        this.carousel && this.carousel.destroy(), this.carousel = null, this.panzoom && this.panzoom.destroy(), this.panzoom = null, this.container && this.container.remove(), this.container = null, this.track = null, this.state = vt.Init, S(this.instance.container, this.cn("hasThumbs"));
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("initSlide", t.onInitSlide), e.state === j.Init ? e.on("initSlides", t.onInitSlides) : t.onInitSlides(), e.on("Panzoom.afterTransform", t.onTransformM), e.on("Panzoom.refresh", t.onRefreshM), e.on("change", t.onChangeM);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("initSlide", t.onInitSlide), e.off("initSlides", t.onInitSlides), e.off("Panzoom.afterTransform", t.onTransformM), e.off("Panzoom.refresh", t.onRefreshM), e.off("change", t.onChangeM), t.cleanup();
      }
    }]);
    return yt;
  }(N);
  Object.defineProperty(yt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: bt
  });
  var wt = Object.assign(Object.assign({}, bt), {
      key: "t",
      showOnStart: !0,
      parentEl: null
    }),
    xt = "is-masked",
    Et = "aria-hidden";
  var St = /*#__PURE__*/function (_N10) {
    _inherits(St, _N10);
    var _super14 = _createSuper(St);
    function St() {
      var _this36;
      _classCallCheck(this, St);
      _this36 = _super14.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this36), "ref", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this36), "hidden", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      });
      return _this36;
    }
    _createClass(St, [{
      key: "isEnabled",
      get: function get() {
        var t = this.ref;
        return t && t.state !== vt.Disabled;
      }
    }, {
      key: "isHidden",
      get: function get() {
        return this.hidden;
      }
    }, {
      key: "onInit",
      value: function onInit() {
        var _this37 = this;
        var t;
        var e = this,
          i = e.instance,
          n = i.carousel;
        if (e.ref || !n) return;
        var s = e.option("parentEl") || i.footer || i.container;
        if (!s) return;
        var o = p({}, e.options, {
          parentEl: s,
          classes: {
            container: "f-thumbs fancybox__thumbs"
          },
          Carousel: {
            Sync: {
              friction: i.option("Carousel.friction") || 0
            }
          },
          on: {
            ready: function ready(t) {
              var i = t.container;
              i && _this37.hidden && (e.refresh(), i.style.transition = "none", e.hide(), i.offsetHeight, queueMicrotask(function () {
                i.style.transition = "", e.show();
              }));
            }
          }
        });
        o.Carousel = o.Carousel || {}, o.Carousel.on = p((null === (t = e.options.Carousel) || void 0 === t ? void 0 : t.on) || {}, {
          click: function click(t, e) {
            e.stopPropagation();
          }
        }), n.options.Thumbs = o, n.attachPlugins({
          Thumbs: yt
        }), e.ref = n.plugins.Thumbs, e.option("showOnStart") || (e.ref.state = vt.Hidden, e.hidden = !0);
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var t;
        var e = null === (t = this.ref) || void 0 === t ? void 0 : t.container;
        e && (e.style.maxHeight = "");
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t, e) {
        var i = this.option("key");
        i && i === e && this.toggle();
      }
    }, {
      key: "toggle",
      value: function toggle() {
        var t = this.ref;
        t && t.state !== vt.Disabled && (t.state !== vt.Hidden ? this.hidden ? this.show() : this.hide() : t.build());
      }
    }, {
      key: "show",
      value: function show() {
        var t = this.ref,
          e = t && t.state !== vt.Disabled && t.container;
        e && (this.refresh(), e.offsetHeight, e.removeAttribute(Et), e.classList.remove(xt), this.hidden = !1);
      }
    }, {
      key: "hide",
      value: function hide() {
        var t = this.ref,
          e = t && t.container;
        e && (this.refresh(), e.offsetHeight, e.classList.add(xt), e.setAttribute(Et, "true")), this.hidden = !0;
      }
    }, {
      key: "refresh",
      value: function refresh() {
        var t = this.ref;
        if (!t || t.state === vt.Disabled) return;
        var e = t.container,
          i = (null == e ? void 0 : e.firstChild) || null;
        e && i && i.childNodes.length && (e.style.maxHeight = "".concat(i.getBoundingClientRect().height, "px"));
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.state === it.Init ? e.on("Carousel.init", t.onInit) : t.onInit(), e.on("resize", t.onResize), e.on("keydown", t.onKeydown);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t;
        var e = this,
          i = e.instance;
        i.off("Carousel.init", e.onInit), i.off("resize", e.onResize), i.off("keydown", e.onKeydown), null === (t = i.carousel) || void 0 === t || t.detachPlugins(["Thumbs"]), e.ref = null;
      }
    }]);
    return St;
  }(N);
  Object.defineProperty(St, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: wt
  });
  var Pt = {
    panLeft: {
      icon: '<svg><path d="M5 12h14M5 12l6 6M5 12l6-6"/></svg>',
      change: {
        panX: -100
      }
    },
    panRight: {
      icon: '<svg><path d="M5 12h14M13 18l6-6M13 6l6 6"/></svg>',
      change: {
        panX: 100
      }
    },
    panUp: {
      icon: '<svg><path d="M12 5v14M18 11l-6-6M6 11l6-6"/></svg>',
      change: {
        panY: -100
      }
    },
    panDown: {
      icon: '<svg><path d="M12 5v14M18 13l-6 6M6 13l6 6"/></svg>',
      change: {
        panY: 100
      }
    },
    zoomIn: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/></svg>',
      action: "zoomIn"
    },
    zoomOut: {
      icon: '<svg><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "zoomOut"
    },
    toggle1to1: {
      icon: '<svg><path d="M3.51 3.07c5.74.02 11.48-.02 17.22.02 1.37.1 2.34 1.64 2.18 3.13 0 4.08.02 8.16 0 12.23-.1 1.54-1.47 2.64-2.79 2.46-5.61-.01-11.24.02-16.86-.01-1.36-.12-2.33-1.65-2.17-3.14 0-4.07-.02-8.16 0-12.23.1-1.36 1.22-2.48 2.42-2.46Z"/><path d="M5.65 8.54h1.49v6.92m8.94-6.92h1.49v6.92M11.5 9.4v.02m0 5.18v0"/></svg>',
      action: "toggleZoom"
    },
    toggleZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "toggleZoom"
    },
    iterateZoom: {
      icon: '<svg><g><line x1="11" y1="8" x2="11" y2="14"></line></g><circle cx="11" cy="11" r="7.5"/><path d="m21 21-4.35-4.35M8 11h6"/></svg>',
      action: "iterateZoom"
    },
    rotateCCW: {
      icon: '<svg><path d="M15 4.55a8 8 0 0 0-6 14.9M9 15v5H4M18.37 7.16v.01M13 19.94v.01M16.84 18.37v.01M19.37 15.1v.01M19.94 11v.01"/></svg>',
      action: "rotateCCW"
    },
    rotateCW: {
      icon: '<svg><path d="M9 4.55a8 8 0 0 1 6 14.9M15 15v5h5M5.63 7.16v.01M4.06 11v.01M4.63 15.1v.01M7.16 18.37v.01M11 19.94v.01"/></svg>',
      action: "rotateCW"
    },
    flipX: {
      icon: '<svg style="stroke-width: 1.3"><path d="M12 3v18M16 7v10h5L16 7M8 7v10H3L8 7"/></svg>',
      action: "flipX"
    },
    flipY: {
      icon: '<svg style="stroke-width: 1.3"><path d="M3 12h18M7 16h10L7 21v-5M7 8h10L7 3v5"/></svg>',
      action: "flipY"
    },
    fitX: {
      icon: '<svg><path d="M4 12V6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v6M10 18H3M21 18h-7M6 15l-3 3 3 3M18 15l3 3-3 3"/></svg>',
      action: "fitX"
    },
    fitY: {
      icon: '<svg><path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M18 14v7M18 3v7M15 18l3 3 3-3M15 6l3-3 3 3"/></svg>',
      action: "fitY"
    },
    reset: {
      icon: '<svg><path d="M20 11A8.1 8.1 0 0 0 4.5 9M4 5v4h4M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/></svg>',
      action: "reset"
    },
    toggleFS: {
      icon: '<svg><g><path d="M14.5 9.5 21 3m0 0h-6m6 0v6M3 21l6.5-6.5M3 21v-6m0 6h6"/></g><g><path d="m14 10 7-7m-7 7h6m-6 0V4M3 21l7-7m0 0v6m0-6H4"/></g></svg>',
      action: "toggleFS"
    }
  };
  var Ct;
  !function (t) {
    t[t.Init = 0] = "Init", t[t.Ready = 1] = "Ready", t[t.Disabled = 2] = "Disabled";
  }(Ct || (Ct = {}));
  var Mt = {
      absolute: "auto",
      display: {
        left: ["infobar"],
        middle: [],
        right: ["iterateZoom", "slideshow", "fullscreen", "thumbs", "close"]
      },
      enabled: "auto",
      items: {
        infobar: {
          tpl: '<div class="fancybox__infobar" tabindex="-1"><span data-fancybox-current-index></span>/<span data-fancybox-count></span></div>'
        },
        download: {
          tpl: '<a class="f-button" title="{{DOWNLOAD}}" data-fancybox-download href="javasript:;"><svg><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2M7 11l5 5 5-5M12 4v12"/></svg></a>'
        },
        prev: {
          tpl: '<button class="f-button" title="{{PREV}}" data-fancybox-prev><svg><path d="m15 6-6 6 6 6"/></svg></button>'
        },
        next: {
          tpl: '<button class="f-button" title="{{NEXT}}" data-fancybox-next><svg><path d="m9 6 6 6-6 6"/></svg></button>'
        },
        slideshow: {
          tpl: '<button class="f-button" title="{{TOGGLE_SLIDESHOW}}" data-fancybox-toggle-slideshow><svg><g><path d="M8 4v16l13 -8z"></path></g><g><path d="M8 4v15M17 4v15"/></g></svg></button>'
        },
        fullscreen: {
          tpl: '<button class="f-button" title="{{TOGGLE_FULLSCREEN}}" data-fancybox-toggle-fullscreen><svg><g><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2M16 4h2a2 2 0 0 1 2 2v2M16 20h2a2 2 0 0 0 2-2v-2"/></g><g><path d="M15 19v-2a2 2 0 0 1 2-2h2M15 5v2a2 2 0 0 0 2 2h2M5 15h2a2 2 0 0 1 2 2v2M5 9h2a2 2 0 0 0 2-2V5"/></g></svg></button>'
        },
        thumbs: {
          tpl: '<button class="f-button" title="{{TOGGLE_THUMBS}}" data-fancybox-toggle-thumbs><svg><circle cx="5.5" cy="5.5" r="1"/><circle cx="12" cy="5.5" r="1"/><circle cx="18.5" cy="5.5" r="1"/><circle cx="5.5" cy="12" r="1"/><circle cx="12" cy="12" r="1"/><circle cx="18.5" cy="12" r="1"/><circle cx="5.5" cy="18.5" r="1"/><circle cx="12" cy="18.5" r="1"/><circle cx="18.5" cy="18.5" r="1"/></svg></button>'
        },
        close: {
          tpl: '<button class="f-button" title="{{CLOSE}}" data-fancybox-close><svg><path d="m19.5 4.5-15 15M4.5 4.5l15 15"/></svg></button>'
        }
      },
      parentEl: null
    },
    Tt = {
      tabindex: "-1",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      xmlns: "http://www.w3.org/2000/svg"
    };
  var Ot = /*#__PURE__*/function (_N11) {
    _inherits(Ot, _N11);
    var _super15 = _createSuper(Ot);
    function Ot() {
      var _this38;
      _classCallCheck(this, Ot);
      _this38 = _super15.apply(this, arguments), Object.defineProperty(_assertThisInitialized(_this38), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: Ct.Init
      }), Object.defineProperty(_assertThisInitialized(_this38), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      });
      return _this38;
    }
    _createClass(Ot, [{
      key: "onReady",
      value: function onReady(t) {
        var e;
        if (!t.carousel) return;
        var i = this.option("display"),
          n = this.option("absolute"),
          s = this.option("enabled");
        if ("auto" === s) {
          var _t54 = this.instance.carousel;
          var _e49 = 0;
          if (_t54) {
            var _iterator36 = _createForOfIteratorHelper(_t54.slides),
              _step36;
            try {
              for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                var _i59 = _step36.value;
                (_i59.panzoom || "image" === _i59.type) && _e49++;
              }
            } catch (err) {
              _iterator36.e(err);
            } finally {
              _iterator36.f();
            }
          }
          _e49 || (s = !1);
        }
        s || (i = void 0);
        var o = 0;
        var a = {
          left: [],
          middle: [],
          right: []
        };
        if (i) for (var _i60 = 0, _arr5 = ["left", "middle", "right"]; _i60 < _arr5.length; _i60++) {
          var _t55 = _arr5[_i60];
          var _iterator37 = _createForOfIteratorHelper(i[_t55]),
            _step37;
          try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
              var _n21 = _step37.value;
              var _i61 = this.createEl(_n21);
              _i61 && (null === (e = a[_t55]) || void 0 === e || e.push(_i61), o++);
            }
          } catch (err) {
            _iterator37.e(err);
          } finally {
            _iterator37.f();
          }
        }
        var r = null;
        if (o && (r = this.createContainer()), r) {
          for (var _i62 = 0, _Object$entries6 = Object.entries(a); _i62 < _Object$entries6.length; _i62++) {
            var _Object$entries6$_i = _slicedToArray(_Object$entries6[_i62], 2),
              _t56 = _Object$entries6$_i[0],
              _e50 = _Object$entries6$_i[1];
            var _i63 = document.createElement("div");
            P(_i63, "fancybox__toolbar__column is-" + _t56);
            var _iterator38 = _createForOfIteratorHelper(_e50),
              _step38;
            try {
              for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                var _t57 = _step38.value;
                _i63.appendChild(_t57);
              }
            } catch (err) {
              _iterator38.e(err);
            } finally {
              _iterator38.f();
            }
            "auto" !== n || "middle" !== _t56 || _e50.length || (n = !0), r.appendChild(_i63);
          }
          !0 === n && P(r, "is-absolute"), this.state = Ct.Ready, this.onRefresh();
        } else this.state = Ct.Disabled;
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var e, i;
        var n = this.instance,
          s = n.getSlide(),
          o = null == s ? void 0 : s.panzoom,
          a = t.target,
          r = a && E(a) ? a.dataset : null;
        if (!r) return;
        if (void 0 !== r.fancyboxToggleThumbs) return t.preventDefault(), t.stopPropagation(), void (null === (e = n.plugins.Thumbs) || void 0 === e || e.toggle());
        if (void 0 !== r.fancyboxToggleFullscreen) return t.preventDefault(), t.stopPropagation(), void this.instance.toggleFullscreen();
        if (void 0 !== r.fancyboxToggleSlideshow) {
          t.preventDefault(), t.stopPropagation();
          var _e51 = null === (i = n.carousel) || void 0 === i ? void 0 : i.plugins.Autoplay;
          var _s12 = _e51.isActive;
          return o && "mousemove" === o.panMode && !_s12 && o.reset(), void (_s12 ? _e51.stop() : _e51.start());
        }
        var l = r.panzoomAction,
          c = r.panzoomChange;
        if ((c || l) && (t.preventDefault(), t.stopPropagation()), c) {
          var _t58 = {};
          try {
            _t58 = JSON.parse(c);
          } catch (t) {}
          o && o.applyChange(_t58);
        } else l && o && o[l] && o[l]();
      }
    }, {
      key: "onChange",
      value: function onChange() {
        this.onRefresh();
      }
    }, {
      key: "onRefresh",
      value: function onRefresh() {
        if (this.instance.isClosing()) return;
        var t = this.container;
        if (!t) return;
        var e = this.instance.getSlide();
        if (!e || e.state !== nt.Ready) return;
        var i = e && !e.error && e.panzoom;
        var _iterator39 = _createForOfIteratorHelper(t.querySelectorAll("[data-panzoom-action]")),
          _step39;
        try {
          for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
            var _e52 = _step39.value;
            i ? (_e52.removeAttribute("disabled"), _e52.removeAttribute("tabindex")) : (_e52.setAttribute("disabled", ""), _e52.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _iterator39.e(err);
        } finally {
          _iterator39.f();
        }
        var n = i && i.canZoomIn(),
          s = i && i.canZoomOut();
        var _iterator40 = _createForOfIteratorHelper(t.querySelectorAll('[data-panzoom-action="zoomIn"]')),
          _step40;
        try {
          for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var _e53 = _step40.value;
            n ? (_e53.removeAttribute("disabled"), _e53.removeAttribute("tabindex")) : (_e53.setAttribute("disabled", ""), _e53.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _iterator40.e(err);
        } finally {
          _iterator40.f();
        }
        var _iterator41 = _createForOfIteratorHelper(t.querySelectorAll('[data-panzoom-action="zoomOut"]')),
          _step41;
        try {
          for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
            var _e54 = _step41.value;
            s ? (_e54.removeAttribute("disabled"), _e54.removeAttribute("tabindex")) : (_e54.setAttribute("disabled", ""), _e54.setAttribute("tabindex", "-1"));
          }
        } catch (err) {
          _iterator41.e(err);
        } finally {
          _iterator41.f();
        }
        var _iterator42 = _createForOfIteratorHelper(t.querySelectorAll('[data-panzoom-action="toggleZoom"],[data-panzoom-action="iterateZoom"]')),
          _step42;
        try {
          for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
            var _e55 = _step42.value;
            s || n ? (_e55.removeAttribute("disabled"), _e55.removeAttribute("tabindex")) : (_e55.setAttribute("disabled", ""), _e55.setAttribute("tabindex", "-1"));
            var _t59 = _e55.querySelector("g");
            _t59 && (_t59.style.display = n ? "" : "none");
          }
        } catch (err) {
          _iterator42.e(err);
        } finally {
          _iterator42.f();
        }
      }
    }, {
      key: "onDone",
      value: function onDone(t, e) {
        var _this39 = this;
        var i;
        null === (i = e.panzoom) || void 0 === i || i.on("afterTransform", function () {
          _this39.instance.isCurrentSlide(e) && _this39.onRefresh();
        }), this.instance.isCurrentSlide(e) && this.onRefresh();
      }
    }, {
      key: "createContainer",
      value: function createContainer() {
        var t = this.instance.container;
        if (!t) return null;
        var e = this.option("parentEl") || t,
          i = document.createElement("div");
        return P(i, "fancybox__toolbar"), e.prepend(i), i.addEventListener("click", this.onClick, {
          passive: !1,
          capture: !0
        }), t && P(t, "has-toolbar"), this.container = i, i;
      }
    }, {
      key: "createEl",
      value: function createEl(t) {
        var _this40 = this;
        var e = this.instance,
          i = e.carousel;
        if (!i) return null;
        if ("toggleFS" === t) return null;
        if ("fullscreen" === t && !e.fsAPI) return null;
        var n = null;
        var o = i.slides.length || 0;
        var a = 0,
          r = 0;
        var _iterator43 = _createForOfIteratorHelper(i.slides),
          _step43;
        try {
          for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
            var _t62 = _step43.value;
            (_t62.panzoom || "image" === _t62.type) && a++, ("image" === _t62.type || _t62.downloadSrc) && r++;
          }
        } catch (err) {
          _iterator43.e(err);
        } finally {
          _iterator43.f();
        }
        if (o < 2 && ["infobar", "prev", "next"].includes(t)) return n;
        if (void 0 !== Pt[t] && !a) return null;
        if ("download" === t && !r) return null;
        if ("thumbs" === t) {
          var _t60 = e.plugins.Thumbs;
          if (!_t60 || !_t60.isEnabled) return null;
        }
        if ("slideshow" === t) {
          if (!i.plugins.Autoplay || o < 2) return null;
        }
        if (void 0 !== Pt[t]) {
          var _e56 = Pt[t];
          n = document.createElement("button"), n.setAttribute("title", this.instance.localize("{{".concat(t.toUpperCase(), "}}"))), P(n, "f-button"), _e56.action && (n.dataset.panzoomAction = _e56.action), _e56.change && (n.dataset.panzoomChange = JSON.stringify(_e56.change)), n.appendChild(s(this.instance.localize(_e56.icon)));
        } else {
          var _e57 = (this.option("items") || [])[t];
          _e57 && (n = s(this.instance.localize(_e57.tpl)), "function" == typeof _e57.click && n.addEventListener("click", function (t) {
            t.preventDefault(), t.stopPropagation(), "function" == typeof _e57.click && _e57.click.call(_this40, _this40, t);
          }));
        }
        var l = null == n ? void 0 : n.querySelector("svg");
        if (l) for (var _i64 = 0, _Object$entries7 = Object.entries(Tt); _i64 < _Object$entries7.length; _i64++) {
          var _Object$entries7$_i = _slicedToArray(_Object$entries7[_i64], 2),
            _t61 = _Object$entries7$_i[0],
            _e58 = _Object$entries7$_i[1];
          l.getAttribute(_t61) || l.setAttribute(_t61, String(_e58));
        }
        return n;
      }
    }, {
      key: "removeContainer",
      value: function removeContainer() {
        var t = this.container;
        t && t.remove(), this.container = null, this.state = Ct.Disabled;
        var e = this.instance.container;
        e && S(e, "has-toolbar");
      }
    }, {
      key: "attach",
      value: function attach() {
        var t = this,
          e = t.instance;
        e.on("Carousel.initSlides", t.onReady), e.on("done", t.onDone), e.on("reveal", t.onChange), e.on("Carousel.change", t.onChange), t.onReady(t.instance);
      }
    }, {
      key: "detach",
      value: function detach() {
        var t = this,
          e = t.instance;
        e.off("Carousel.initSlides", t.onReady), e.off("done", t.onDone), e.off("reveal", t.onChange), e.off("Carousel.change", t.onChange), t.removeContainer();
      }
    }]);
    return Ot;
  }(N);
  Object.defineProperty(Ot, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: Mt
  });
  var At = {
      Hash: ot,
      Html: dt,
      Images: rt,
      Slideshow: gt,
      Thumbs: St,
      Toolbar: Ot
    },
    zt = "with-fancybox",
    Lt = "hide-scrollbar",
    Rt = "--fancybox-scrollbar-compensate",
    kt = "--fancybox-body-margin",
    It = "is-animated",
    Dt = "is-compact",
    Ft = "is-loading",
    jt = function jt() {
      var t = window.getSelection();
      return t && "Range" === t.type;
    };
  var Ht = null,
    Bt = null;
  var Nt = new Map();
  var _t = 0;
  var Wt = /*#__PURE__*/function (_g4) {
    _inherits(Wt, _g4);
    var _super16 = _createSuper(Wt);
    function Wt() {
      var _this41;
      var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      _classCallCheck(this, Wt);
      _this41 = _super16.call(this, e), Object.defineProperty(_assertThisInitialized(_this41), "userSlides", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: []
      }), Object.defineProperty(_assertThisInitialized(_this41), "userPlugins", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: {}
      }), Object.defineProperty(_assertThisInitialized(_this41), "idle", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this41), "idleTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "clickTimer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "pwt", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this41), "ignoreFocusChange", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: !1
      }), Object.defineProperty(_assertThisInitialized(_this41), "state", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: it.Init
      }), Object.defineProperty(_assertThisInitialized(_this41), "id", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: 0
      }), Object.defineProperty(_assertThisInitialized(_this41), "container", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "footer", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "caption", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "carousel", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "lastFocus", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: null
      }), Object.defineProperty(_assertThisInitialized(_this41), "prevMouseMoveEvent", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(_assertThisInitialized(_this41), "fsAPI", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), _this41.fsAPI = function () {
        var t,
          e = "",
          i = "",
          n = "";
        return document.fullscreenEnabled ? (e = "requestFullscreen", i = "exitFullscreen", n = "fullscreenElement") : document.webkitFullscreenEnabled && (e = "webkitRequestFullscreen", i = "webkitExitFullscreen", n = "webkitFullscreenElement"), e && (t = {
          request: function request(t) {
            return "webkitRequestFullscreen" === e ? t[e](Element.ALLOW_KEYBOARD_INPUT) : t[e]();
          },
          exit: function exit() {
            return document[n] && document[i]();
          },
          isFullscreen: function isFullscreen() {
            return document[n];
          }
        }), t;
      }(), _this41.id = e.id || ++_t, Nt.set(_this41.id, _assertThisInitialized(_this41)), _this41.userSlides = t, _this41.userPlugins = i, queueMicrotask(function () {
        _this41.init();
      });
      return _this41;
    }
    _createClass(Wt, [{
      key: "isIdle",
      get: function get() {
        return this.idle;
      }
    }, {
      key: "isCompact",
      get: function get() {
        return this.option("compact");
      }
    }, {
      key: "init",
      value: function init() {
        var _this42 = this;
        if (this.state === it.Destroy) return;
        this.state = it.Init, this.attachPlugins(Object.assign(Object.assign({}, Wt.Plugins), this.userPlugins)), this.emit("init"), !0 === this.option("hideScrollbar") && function () {
          if (!K) return;
          var t = document.body;
          if (t.classList.contains(Lt)) return;
          var e = window.innerWidth - document.documentElement.getBoundingClientRect().width;
          e < 0 && (e = 0);
          var i = t.currentStyle || window.getComputedStyle(t),
            n = parseFloat(i.marginRight);
          document.documentElement.style.setProperty(Rt, "".concat(e, "px")), n && t.style.setProperty(kt, "".concat(n, "px")), t.classList.add(Lt);
        }(), this.initLayout(), this.scale();
        var t = function t() {
            _this42.initCarousel(_this42.userSlides), _this42.state = it.Ready, _this42.attachEvents(), _this42.emit("ready"), setTimeout(function () {
              _this42.container && _this42.container.setAttribute("aria-hidden", "false");
            }, 16);
          },
          e = this.fsAPI;
        this.option("Fullscreen.autoStart") && e && !e.isFullscreen() ? e.request(this.container).then(function () {
          return t();
        })["catch"](function () {
          return t();
        }) : t();
      }
    }, {
      key: "initLayout",
      value: function initLayout() {
        var _this43 = this;
        var t, e;
        var i = this.option("parentEl") || document.body,
          n = s(this.localize(this.option("tpl.main") || ""));
        n && (n.setAttribute("id", "fancybox-".concat(this.id)), n.setAttribute("aria-label", this.localize("{{MODAL}}")), n.classList.toggle(Dt, this.isCompact), P(n, this.option("mainClass") || ""), this.container = n, this.footer = n.querySelector(".fancybox__footer"), i.appendChild(n), P(document.documentElement, zt), Ht && Bt || (Ht = document.createElement("span"), P(Ht, "fancybox-focus-guard"), Ht.setAttribute("tabindex", "0"), Ht.setAttribute("aria-hidden", "true"), Ht.setAttribute("aria-label", "Focus guard"), Bt = Ht.cloneNode(), null === (t = n.parentElement) || void 0 === t || t.insertBefore(Ht, n), null === (e = n.parentElement) || void 0 === e || e.append(Bt)), this.option("animated") && (P(n, It), setTimeout(function () {
          _this43.isClosing() || S(n, It);
        }, 350)), this.emit("initLayout"));
      }
    }, {
      key: "initCarousel",
      value: function initCarousel(t) {
        var _this44 = this;
        var e = this.container;
        if (!e) return;
        var n = e.querySelector(".fancybox__carousel");
        if (!n) return;
        var s = this.carousel = new U(n, p({}, {
          slides: t,
          transition: "fade",
          Panzoom: {
            lockAxis: this.option("dragToClose") ? "xy" : "x",
            infinite: !!this.option("dragToClose") && "y"
          },
          Dots: !1,
          Navigation: {
            classes: {
              container: "fancybox__nav",
              button: "f-button",
              isNext: "is-next",
              isPrev: "is-prev"
            }
          },
          initialPage: this.option("startIndex"),
          l10n: this.option("l10n")
        }, this.option("Carousel") || {}));
        s.on("*", function (t, e) {
          for (var _len5 = arguments.length, i = new Array(_len5 > 2 ? _len5 - 2 : 0), _key5 = 2; _key5 < _len5; _key5++) {
            i[_key5 - 2] = arguments[_key5];
          }
          _this44.emit.apply(_this44, ["Carousel.".concat(e), t].concat(i));
        }), s.on(["ready", "change"], function () {
          var t;
          var e = _this44.getSlide();
          e && (null === (t = e.panzoom) || void 0 === t || t.updateControls()), _this44.manageCaption(e);
        }), this.on("Carousel.removeSlide", function (t, e, i) {
          i.contentEl && (i.contentEl.remove(), i.contentEl = void 0);
          var n = i.el;
          n && (S(n, "has-error"), S(n, "has-unknown"), S(n, "has-".concat(i.type || "unknown"))), i.closeBtnEl && i.closeBtnEl.remove(), i.closeBtnEl = void 0, i.captionEl && i.captionEl.remove(), i.captionEl = void 0, i.spinnerEl && i.spinnerEl.remove(), i.spinnerEl = void 0, i.state = void 0;
        }), s.on("Panzoom.touchStart", function () {
          var t, e;
          _this44.isCompact || _this44.endIdle(), (null === (t = document.activeElement) || void 0 === t ? void 0 : t.closest(".f-thumbs")) && (null === (e = _this44.container) || void 0 === e || e.focus());
        }), s.on("settle", function () {
          _this44.idleTimer || _this44.isCompact || !_this44.option("idle") || _this44.setIdle(), _this44.option("autoFocus") && !_this44.isClosing && _this44.checkFocus();
        }), this.option("dragToClose") && (s.on("Panzoom.afterTransform", function (t, e) {
          var n = _this44.getSlide();
          if (n && i(n.el)) return;
          var s = _this44.container;
          if (s) {
            var _t63 = Math.abs(e.current.f),
              _i65 = _t63 < 1 ? "" : Math.max(.5, Math.min(1, 1 - _t63 / e.contentRect.fitHeight * 1.5));
            s.style.setProperty("--fancybox-ts", _i65 ? "0s" : ""), s.style.setProperty("--fancybox-opacity", _i65 + "");
          }
        }), s.on("Panzoom.touchEnd", function (t, e, n) {
          var s;
          var o = _this44.getSlide();
          if (o && i(o.el)) return;
          if (e.isMobile && document.activeElement && -1 !== ["TEXTAREA", "INPUT"].indexOf(null === (s = document.activeElement) || void 0 === s ? void 0 : s.nodeName)) return;
          var a = Math.abs(e.dragOffset.y);
          "y" === e.lockedAxis && (a >= 200 || a >= 50 && e.dragOffset.time < 300) && (n && n.cancelable && n.preventDefault(), _this44.close(n, "f-throwOut" + (e.current.f < 0 ? "Up" : "Down")));
        })), s.on("change", function (t) {
          var e;
          var i = null === (e = _this44.getSlide()) || void 0 === e ? void 0 : e.triggerEl;
          if (i) {
            var _e59 = new CustomEvent("slideTo", {
              bubbles: !0,
              cancelable: !0,
              detail: t.page
            });
            i.dispatchEvent(_e59);
          }
        }), s.on(["refresh", "change"], function (t) {
          var e = _this44.container;
          if (!e) return;
          var _iterator44 = _createForOfIteratorHelper(e.querySelectorAll("[data-fancybox-current-index]")),
            _step44;
          try {
            for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
              var _i68 = _step44.value;
              _i68.innerHTML = t.page + 1;
            }
          } catch (err) {
            _iterator44.e(err);
          } finally {
            _iterator44.f();
          }
          var _iterator45 = _createForOfIteratorHelper(e.querySelectorAll("[data-fancybox-count]")),
            _step45;
          try {
            for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
              var _i69 = _step45.value;
              _i69.innerHTML = t.pages.length;
            }
          } catch (err) {
            _iterator45.e(err);
          } finally {
            _iterator45.f();
          }
          if (!t.isInfinite) {
            var _iterator46 = _createForOfIteratorHelper(e.querySelectorAll("[data-fancybox-next]")),
              _step46;
            try {
              for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var _i66 = _step46.value;
                t.page < t.pages.length - 1 ? (_i66.removeAttribute("disabled"), _i66.removeAttribute("tabindex")) : (_i66.setAttribute("disabled", ""), _i66.setAttribute("tabindex", "-1"));
              }
            } catch (err) {
              _iterator46.e(err);
            } finally {
              _iterator46.f();
            }
            var _iterator47 = _createForOfIteratorHelper(e.querySelectorAll("[data-fancybox-prev]")),
              _step47;
            try {
              for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                var _i67 = _step47.value;
                t.page > 0 ? (_i67.removeAttribute("disabled"), _i67.removeAttribute("tabindex")) : (_i67.setAttribute("disabled", ""), _i67.setAttribute("tabindex", "-1"));
              }
            } catch (err) {
              _iterator47.e(err);
            } finally {
              _iterator47.f();
            }
          }
          var i = _this44.getSlide();
          if (!i) return;
          var n = i.downloadSrc || "";
          n || "image" !== i.type || i.error || "string" != typeof i.src || (n = i.src);
          var s = "disabled",
            o = "tabindex",
            a = "download",
            r = "href";
          var _iterator48 = _createForOfIteratorHelper(e.querySelectorAll("[data-fancybox-download]")),
            _step48;
          try {
            for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
              var _t64 = _step48.value;
              var _e60 = i.downloadFilename;
              n ? (_t64.removeAttribute(s), _t64.removeAttribute(o), _t64.setAttribute(r, n), _t64.setAttribute(a, _e60 || n), _t64.setAttribute("target", "_blank")) : (_t64.setAttribute(s, ""), _t64.setAttribute(o, "-1"), _t64.removeAttribute(r), _t64.removeAttribute(a));
            }
          } catch (err) {
            _iterator48.e(err);
          } finally {
            _iterator48.f();
          }
        }), this.emit("initCarousel");
      }
    }, {
      key: "attachEvents",
      value: function attachEvents() {
        var t = this,
          e = t.container;
        if (!e) return;
        e.addEventListener("click", t.onClick, {
          passive: !1,
          capture: !1
        }), e.addEventListener("wheel", t.onWheel, {
          passive: !1,
          capture: !1
        }), document.addEventListener("keydown", t.onKeydown, {
          passive: !1,
          capture: !0
        }), document.addEventListener("visibilitychange", t.onVisibilityChange, !1), document.addEventListener("mousemove", t.onMousemove), t.option("trapFocus") && document.addEventListener("focus", t.onFocus, !0), window.addEventListener("resize", t.onResize);
        var i = window.visualViewport;
        i && (i.addEventListener("scroll", t.onResize), i.addEventListener("resize", t.onResize));
      }
    }, {
      key: "detachEvents",
      value: function detachEvents() {
        var t = this,
          e = t.container;
        if (!e) return;
        document.removeEventListener("keydown", t.onKeydown, {
          passive: !1,
          capture: !0
        }), e.removeEventListener("wheel", t.onWheel, {
          passive: !1,
          capture: !1
        }), e.removeEventListener("click", t.onClick, {
          passive: !1,
          capture: !1
        }), document.removeEventListener("mousemove", t.onMousemove), window.removeEventListener("resize", t.onResize);
        var i = window.visualViewport;
        i && (i.removeEventListener("resize", t.onResize), i.removeEventListener("scroll", t.onResize)), document.removeEventListener("visibilitychange", t.onVisibilityChange, !1), document.removeEventListener("focus", t.onFocus, !0);
      }
    }, {
      key: "scale",
      value: function scale() {
        var t = this.container;
        if (!t) return;
        var e = window.visualViewport,
          i = Math.max(1, (null == e ? void 0 : e.scale) || 1);
        var n = "",
          s = "",
          o = "";
        if (e && i > 1) {
          var _t65 = "".concat(e.offsetLeft, "px"),
            _a5 = "".concat(e.offsetTop, "px");
          n = e.width * i + "px", s = e.height * i + "px", o = "translate3d(".concat(_t65, ", ").concat(_a5, ", 0) scale(").concat(1 / i, ")");
        }
        t.style.transform = o, t.style.width = n, t.style.height = s;
      }
    }, {
      key: "onClick",
      value: function onClick(t) {
        var _this45 = this;
        var e, i;
        var n = this.container,
          s = this.isCompact;
        if (!n || this.isClosing()) return;
        !s && this.option("idle") && this.resetIdle();
        var o = document.activeElement;
        if (jt() && o && n.contains(o)) return;
        var a = t.composedPath()[0];
        if (a === (null === (e = this.carousel) || void 0 === e ? void 0 : e.container)) return;
        if (a.closest(".f-spinner") || a.closest("[data-fancybox-close]")) return t.preventDefault(), void this.close(t);
        if (a.closest("[data-fancybox-prev]")) return t.preventDefault(), void this.prev();
        if (a.closest("[data-fancybox-next]")) return t.preventDefault(), void this.next();
        if (s && "image" === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.type)) return void (this.clickTimer ? (clearTimeout(this.clickTimer), this.clickTimer = null) : this.clickTimer = setTimeout(function () {
          _this45.toggleIdle(), _this45.clickTimer = null;
        }, 350));
        if (this.emit("click", t), t.defaultPrevented) return;
        var r = !1;
        if (a.closest(".fancybox__content")) {
          if (o) {
            if (o.closest("[contenteditable]")) return;
            a.matches(Q) || o.blur();
          }
          if (jt()) return;
          r = this.option("contentClick");
        } else a.closest(".fancybox__carousel") && !a.matches(Q) && (r = this.option("backdropClick"));
        "close" === r ? (t.preventDefault(), this.close(t)) : "next" === r ? (t.preventDefault(), this.next()) : "prev" === r && (t.preventDefault(), this.prev());
      }
    }, {
      key: "onWheel",
      value: function onWheel(t) {
        var e;
        var i = this.option("wheel", t);
        (null === (e = t.target) || void 0 === e ? void 0 : e.closest(".fancybox__thumbs")) && (i = "slide");
        var n = "slide" === i,
          s = [-t.deltaX || 0, -t.deltaY || 0, -t.detail || 0].reduce(function (t, e) {
            return Math.abs(e) > Math.abs(t) ? e : t;
          }),
          o = Math.max(-1, Math.min(1, s)),
          a = Date.now();
        this.pwt && a - this.pwt < 300 ? n && t.preventDefault() : (this.pwt = a, this.emit("wheel", t), t.defaultPrevented || ("close" === i ? (t.preventDefault(), this.close(t)) : "slide" === i && (t.preventDefault(), this[o > 0 ? "prev" : "next"]())));
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(t) {
        if (!this.isTopmost()) return;
        this.isCompact || !this.option("idle") || this.isClosing() || this.resetIdle();
        var e = t.key,
          i = this.option("keyboard");
        if (!i || t.ctrlKey || t.altKey || t.shiftKey) return;
        var n = t.composedPath()[0],
          s = document.activeElement && document.activeElement.classList,
          o = s && s.contains("f-button") || n.dataset.carouselPage || n.dataset.carouselIndex;
        if ("Escape" !== e && !o && E(n)) {
          if (n.isContentEditable || -1 !== ["TEXTAREA", "OPTION", "INPUT", "SELECT", "VIDEO"].indexOf(n.nodeName)) return;
        }
        this.emit("keydown", e, t);
        var a = i[e];
        "function" == typeof this[a] && (t.preventDefault(), this[a]());
      }
    }, {
      key: "onResize",
      value: function onResize() {
        var t = Dt,
          e = this.container;
        if (!e) return;
        var i = this.isCompact;
        e.classList.toggle(t, i), this.manageCaption(this.getSlide()), this.isCompact ? this.clearIdle() : this.endIdle(), this.scale(), this.emit("resize");
      }
    }, {
      key: "onFocus",
      value: function onFocus(t) {
        this.isTopmost() && this.checkFocus(t);
      }
    }, {
      key: "onMousemove",
      value: function onMousemove(t) {
        this.prevMouseMoveEvent = t, !this.isCompact && this.option("idle") && this.resetIdle();
      }
    }, {
      key: "onVisibilityChange",
      value: function onVisibilityChange() {
        "visible" === document.visibilityState ? this.checkFocus() : this.endIdle();
      }
    }, {
      key: "manageCloseBtn",
      value: function manageCloseBtn(t) {
        var e = this.optionFor(t, "closeButton") || !1;
        if ("auto" === e) {
          var _t66 = this.plugins.Toolbar;
          if (_t66 && _t66.state === Ct.Ready) return;
        }
        if (!e) return;
        if (!t.contentEl || t.closeBtnEl) return;
        var i = this.option("tpl.closeButton");
        if (i) {
          var _e61 = s(this.localize(i));
          t.closeBtnEl = t.contentEl.appendChild(_e61), t.el && P(t.el, "has-close-btn");
        }
      }
    }, {
      key: "manageCaption",
      value: function manageCaption() {
        var _this46 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : void 0;
        var e, i;
        var n = "fancybox__caption",
          s = "has-caption",
          o = this.container;
        if (!o) return;
        var a = this.isCompact || this.option("commonCaption"),
          r = !a;
        if (this.caption && this.stop(this.caption), r && this.caption && (this.caption.remove(), this.caption = null), a && !this.caption) {
          var _iterator49 = _createForOfIteratorHelper((null === (e = this.carousel) || void 0 === e ? void 0 : e.slides) || []),
            _step49;
          try {
            for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
              var _t67 = _step49.value;
              _t67.captionEl && (_t67.captionEl.remove(), _t67.captionEl = void 0, S(_t67.el, s), null === (i = _t67.el) || void 0 === i || i.removeAttribute("aria-labelledby"));
            }
          } catch (err) {
            _iterator49.e(err);
          } finally {
            _iterator49.f();
          }
        }
        if (t || (t = this.getSlide()), !t || a && !this.isCurrentSlide(t)) return;
        var l = t.el;
        var c = this.optionFor(t, "caption", "");
        if (!c) return void (a && this.caption && this.animate(this.caption, "f-fadeOut", function () {
          _this46.caption && (_this46.caption.innerHTML = "");
        }));
        var h = null;
        if (r) {
          if (h = t.captionEl || null, l && !h) {
            var _e62 = n + "_".concat(this.id, "_").concat(t.index);
            h = document.createElement("div"), P(h, n), h.setAttribute("id", _e62), t.captionEl = l.appendChild(h), P(l, s), l.setAttribute("aria-labelledby", _e62);
          }
        } else {
          if (h = this.caption, h || (h = o.querySelector("." + n)), !h) {
            h = document.createElement("div"), h.dataset.fancyboxCaption = "", P(h, n);
            (this.footer || o).prepend(h);
          }
          P(o, s), this.caption = h;
        }
        h && (h.innerHTML = "", "string" == typeof c ? h.innerHTML = c : c instanceof HTMLElement && h.appendChild(c));
      }
    }, {
      key: "checkFocus",
      value: function checkFocus(t) {
        var e;
        var i = document.activeElement || null;
        i && (null === (e = this.container) || void 0 === e ? void 0 : e.contains(i)) || this.focus(t);
      }
    }, {
      key: "focus",
      value: function focus(t) {
        var e;
        if (this.ignoreFocusChange) return;
        var i = document.activeElement || null,
          n = (null == t ? void 0 : t.target) || null,
          s = this.container,
          o = this.getSlide();
        if (!s || !(null === (e = this.carousel) || void 0 === e ? void 0 : e.viewport)) return;
        if (!t && i && s.contains(i)) return;
        var a = o && o.state === nt.Ready ? o.el : null;
        if (!a || a.contains(i) || s === i) return;
        t && t.cancelable && t.preventDefault(), this.ignoreFocusChange = !0;
        var r = Array.from(s.querySelectorAll(Q));
        var l = [],
          c = null;
        for (var _i70 = 0, _r5 = r; _i70 < _r5.length; _i70++) {
          var _t68 = _r5[_i70];
          var _e63 = !_t68.offsetParent || _t68.closest('[aria-hidden="true"]'),
            _i71 = a && a.contains(_t68),
            _n22 = !this.carousel.viewport.contains(_t68);
          if (_t68 === s || (_i71 || _n22) && !_e63) {
            l.push(_t68);
            var _e64 = _t68.dataset.origTabindex;
            void 0 !== _e64 && _e64 && (_t68.tabIndex = parseFloat(_e64)), _t68.removeAttribute("data-orig-tabindex"), !_t68.hasAttribute("autoFocus") && c || (c = _t68);
          } else {
            var _e65 = void 0 === _t68.dataset.origTabindex ? _t68.getAttribute("tabindex") || "" : _t68.dataset.origTabindex;
            _e65 && (_t68.dataset.origTabindex = _e65), _t68.tabIndex = -1;
          }
        }
        var h = null;
        t ? (!n || l.indexOf(n) < 0) && (h = c || s, l.length && (i === Bt ? h = l[0] : this.lastFocus !== s && i !== Ht || (h = l[l.length - 1]))) : h = o && "image" === o.type ? s : c || s, h && tt(h), this.lastFocus = document.activeElement, this.ignoreFocusChange = !1;
      }
    }, {
      key: "next",
      value: function next() {
        var t = this.carousel;
        t && t.pages.length > 1 && t.slideNext();
      }
    }, {
      key: "prev",
      value: function prev() {
        var t = this.carousel;
        t && t.pages.length > 1 && t.slidePrev();
      }
    }, {
      key: "jumpTo",
      value: function jumpTo() {
        var _this$carousel;
        this.carousel && (_this$carousel = this.carousel).slideTo.apply(_this$carousel, arguments);
      }
    }, {
      key: "isTopmost",
      value: function isTopmost() {
        var t;
        return (null === (t = Wt.getInstance()) || void 0 === t ? void 0 : t.id) == this.id;
      }
    }, {
      key: "animate",
      value: function animate() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 ? arguments[2] : undefined;
        if (!t || !e) return void (i && i());
        this.stop(t);
        var n = function n(s) {
          s.target === t && t.dataset.animationName && (t.removeEventListener("animationend", n), delete t.dataset.animationName, i && i(), S(t, e));
        };
        t.dataset.animationName = e, t.addEventListener("animationend", n), P(t, e);
      }
    }, {
      key: "stop",
      value: function stop(t) {
        t && t.dispatchEvent(new CustomEvent("animationend", {
          bubbles: !1,
          cancelable: !0,
          currentTarget: t
        }));
      }
    }, {
      key: "setContent",
      value: function setContent(t) {
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var i = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : !0;
        if (this.isClosing()) return;
        var n = t.el;
        if (!n) return;
        var o = null;
        if (E(e) ? o = e : (o = s(e + ""), E(o) || (o = document.createElement("div"), o.innerHTML = e + "")), ["img", "picture", "iframe", "video", "audio"].includes(o.nodeName.toLowerCase())) {
          var _t69 = document.createElement("div");
          _t69.appendChild(o), o = _t69;
        }
        E(o) && t.filter && !t.error && (o = o.querySelector(t.filter)), o && E(o) ? (P(o, "fancybox__content"), t.id && o.setAttribute("id", t.id), "none" !== o.style.display && "none" !== getComputedStyle(o).getPropertyValue("display") || (o.style.display = t.display || this.option("defaultDisplay") || "flex"), n.classList.add("has-".concat(t.error ? "error" : t.type || "unknown")), n.prepend(o), t.contentEl = o, i && this.revealContent(t), this.manageCloseBtn(t), this.manageCaption(t)) : this.setError(t, "{{ELEMENT_NOT_FOUND}}");
      }
    }, {
      key: "revealContent",
      value: function revealContent(t, e) {
        var _this47 = this;
        var i = t.el,
          n = t.contentEl;
        i && n && (this.emit("reveal", t), this.hideLoading(t), t.state = nt.Opening, (e = this.isOpeningSlide(t) ? void 0 === e ? this.optionFor(t, "showClass") : e : "f-fadeIn") ? this.animate(n, e, function () {
          _this47.done(t);
        }) : this.done(t));
      }
    }, {
      key: "done",
      value: function done(t) {
        var _this48 = this;
        this.isClosing() || (t.state = nt.Ready, this.emit("done", t), P(t.el, "is-done"), this.isCurrentSlide(t) && this.option("autoFocus") && queueMicrotask(function () {
          _this48.option("autoFocus") && (_this48.option("autoFocus") ? _this48.focus() : _this48.checkFocus());
        }), this.isOpeningSlide(t) && !this.isCompact && this.option("idle") && this.setIdle());
      }
    }, {
      key: "isCurrentSlide",
      value: function isCurrentSlide(t) {
        var e = this.getSlide();
        return !(!t || !e) && e.index === t.index;
      }
    }, {
      key: "isOpeningSlide",
      value: function isOpeningSlide(t) {
        var e, i;
        return null === (null === (e = this.carousel) || void 0 === e ? void 0 : e.prevPage) && t.index === (null === (i = this.getSlide()) || void 0 === i ? void 0 : i.index);
      }
    }, {
      key: "showLoading",
      value: function showLoading(t) {
        var _this49 = this;
        t.state = nt.Loading;
        var e = t.el;
        if (!e) return;
        P(e, Ft), this.emit("loading", t), t.spinnerEl || setTimeout(function () {
          if (!_this49.isClosing() && !t.spinnerEl && t.state === nt.Loading) {
            var _i72 = s(x);
            t.spinnerEl = _i72, e.prepend(_i72), _this49.animate(_i72, "f-fadeIn");
          }
        }, 250);
      }
    }, {
      key: "hideLoading",
      value: function hideLoading(t) {
        var e = t.el;
        if (!e) return;
        var i = t.spinnerEl;
        this.isClosing() ? null == i || i.remove() : (S(e, Ft), i && this.animate(i, "f-fadeOut", function () {
          i.remove();
        }), t.state === nt.Loading && (this.emit("loaded", t), t.state = nt.Ready));
      }
    }, {
      key: "setError",
      value: function setError(t, e) {
        if (this.isClosing()) return;
        var i = new Event("error", {
          bubbles: !0,
          cancelable: !0
        });
        if (this.emit("error", i, t), i.defaultPrevented) return;
        t.error = e, this.hideLoading(t), this.clearContent(t);
        var n = document.createElement("div");
        n.classList.add("fancybox-error"), n.innerHTML = this.localize(e || "<p>{{ERROR}}</p>"), this.setContent(t, n);
      }
    }, {
      key: "clearContent",
      value: function clearContent(t) {
        var e;
        null === (e = this.carousel) || void 0 === e || e.emit("removeSlide", t);
      }
    }, {
      key: "getSlide",
      value: function getSlide() {
        var t;
        var e = this.carousel;
        return (null === (t = null == e ? void 0 : e.pages[null == e ? void 0 : e.page]) || void 0 === t ? void 0 : t.slides[0]) || void 0;
      }
    }, {
      key: "close",
      value: function close(t, e) {
        var _this50 = this;
        if (this.isClosing()) return;
        var i = new Event("shouldClose", {
          bubbles: !0,
          cancelable: !0
        });
        if (this.emit("shouldClose", i, t), i.defaultPrevented) return;
        t && t.cancelable && (t.preventDefault(), t.stopPropagation());
        var n = this.fsAPI,
          s = function s() {
            _this50.proceedClose(t, e);
          };
        n && n.isFullscreen() ? Promise.resolve(n.exit()).then(function () {
          return s();
        }) : s();
      }
    }, {
      key: "clearIdle",
      value: function clearIdle() {
        this.idleTimer && clearTimeout(this.idleTimer), this.idleTimer = null;
      }
    }, {
      key: "setIdle",
      value: function setIdle() {
        var _this51 = this;
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !1;
        var e = function e() {
          _this51.clearIdle(), _this51.idle = !0, P(_this51.container, "is-idle"), _this51.emit("setIdle");
        };
        if (this.clearIdle(), !this.isClosing()) if (t) e();else {
          var _t70 = this.option("idle");
          _t70 && (this.idleTimer = setTimeout(e, _t70));
        }
      }
    }, {
      key: "endIdle",
      value: function endIdle() {
        this.clearIdle(), this.idle && !this.isClosing() && (this.idle = !1, S(this.container, "is-idle"), this.emit("endIdle"));
      }
    }, {
      key: "resetIdle",
      value: function resetIdle() {
        this.endIdle(), this.setIdle();
      }
    }, {
      key: "toggleIdle",
      value: function toggleIdle() {
        this.idle ? this.endIdle() : this.setIdle(!0);
      }
    }, {
      key: "toggleFullscreen",
      value: function toggleFullscreen() {
        var t = this.fsAPI;
        t && (t.isFullscreen() ? t.exit() : this.container && t.request(this.container));
      }
    }, {
      key: "isClosing",
      value: function isClosing() {
        return [it.Closing, it.CustomClosing, it.Destroy].includes(this.state);
      }
    }, {
      key: "proceedClose",
      value: function proceedClose(t, e) {
        var _this52 = this;
        var i, n;
        this.state = it.Closing, this.clearIdle(), this.detachEvents();
        var s = this.container,
          o = this.carousel,
          a = this.getSlide(),
          r = a && this.option("placeFocusBack") ? a.triggerEl || this.option("triggerEl") : null;
        if (r && (G(r) ? tt(r) : r.focus()), s && (P(s, "is-closing"), s.setAttribute("aria-hidden", "true"), this.option("animated") && P(s, It), s.style.pointerEvents = "none"), o) {
          o.clearTransitions(), null === (i = o.panzoom) || void 0 === i || i.destroy(), null === (n = o.plugins.Navigation) || void 0 === n || n.detach();
          var _iterator50 = _createForOfIteratorHelper(o.slides),
            _step50;
          try {
            for (_iterator50.s(); !(_step50 = _iterator50.n()).done;) {
              var _t71 = _step50.value;
              _t71.state = nt.Closing, this.hideLoading(_t71);
              var _e66 = _t71.contentEl;
              _e66 && this.stop(_e66);
              var _i73 = null == _t71 ? void 0 : _t71.panzoom;
              _i73 && (_i73.stop(), _i73.detachEvents(), _i73.detachObserver()), this.isCurrentSlide(_t71) || o.emit("removeSlide", _t71);
            }
          } catch (err) {
            _iterator50.e(err);
          } finally {
            _iterator50.f();
          }
        }
        this.emit("close", t), this.state !== it.CustomClosing ? (void 0 === e && a && (e = this.optionFor(a, "hideClass")), e && a ? (this.animate(a.contentEl, e, function () {
          o && o.emit("removeSlide", a);
        }), setTimeout(function () {
          _this52.destroy();
        }, 500)) : this.destroy()) : setTimeout(function () {
          _this52.destroy();
        }, 500);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var t;
        if (this.state === it.Destroy) return;
        this.state = it.Destroy, null === (t = this.carousel) || void 0 === t || t.destroy();
        var e = this.container;
        e && e.remove(), Nt["delete"](this.id);
        var i = Wt.getInstance();
        i ? i.focus() : (Ht && (Ht.remove(), Ht = null), Bt && (Bt.remove(), Bt = null), S(document.documentElement, zt), function () {
          if (!K) return;
          var t = document,
            e = t.body;
          e.classList.remove(Lt), e.style.setProperty(kt, ""), t.documentElement.style.setProperty(Rt, "");
        }(), this.emit("destroy"));
      }
    }], [{
      key: "bind",
      value: function bind(t, e, i) {
        if (!K) return;
        var n,
          s = "",
          o = {};
        if (void 0 === t ? n = document.body : "string" == typeof t ? (n = document.body, s = t, "object" == _typeof(e) && (o = e || {})) : (n = t, "string" == typeof e && (s = e), "object" == _typeof(i) && (o = i || {})), !n || !E(n)) return;
        s = s || "[data-fancybox]";
        var a = Wt.openers.get(n) || new Map();
        a.set(s, o), Wt.openers.set(n, a), 1 === a.size && n.addEventListener("click", Wt.fromEvent);
      }
    }, {
      key: "unbind",
      value: function unbind(t, e) {
        var i,
          n = "";
        if ("string" == typeof t ? (i = document.body, n = t) : (i = t, "string" == typeof e && (n = e)), !i) return;
        var s = Wt.openers.get(i);
        s && n && s["delete"](n), n && s || (Wt.openers["delete"](i), i.removeEventListener("click", Wt.fromEvent));
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var t;
        for (; t = Wt.getInstance();) t.destroy();
        var _iterator51 = _createForOfIteratorHelper(Wt.openers.keys()),
          _step51;
        try {
          for (_iterator51.s(); !(_step51 = _iterator51.n()).done;) {
            var _t72 = _step51.value;
            _t72.removeEventListener("click", Wt.fromEvent);
          }
        } catch (err) {
          _iterator51.e(err);
        } finally {
          _iterator51.f();
        }
        Wt.openers = new Map();
      }
    }, {
      key: "fromEvent",
      value: function fromEvent(t) {
        if (t.defaultPrevented) return;
        if (t.button && 0 !== t.button) return;
        if (t.ctrlKey || t.metaKey || t.shiftKey) return;
        var e = t.composedPath()[0];
        var i = e.closest("[data-fancybox-trigger]");
        if (i) {
          var _t73 = i.dataset.fancyboxTrigger || "",
            _n23 = document.querySelectorAll("[data-fancybox=\"".concat(_t73, "\"]")),
            _s13 = parseInt(i.dataset.fancyboxIndex || "", 10) || 0;
          e = _n23[_s13] || e;
        }
        if (!(e && e instanceof Element)) return;
        var n, s, o, a;
        if (_toConsumableArray(Wt.openers).reverse().find(function (_ref9) {
          var _ref10 = _slicedToArray(_ref9, 2),
            t = _ref10[0],
            i = _ref10[1];
          return !(!t.contains(e) || !_toConsumableArray(i).reverse().find(function (_ref11) {
            var _ref12 = _slicedToArray(_ref11, 2),
              i = _ref12[0],
              r = _ref12[1];
            var l = e.closest(i);
            return !!l && (n = t, s = i, o = l, a = r, !0);
          }));
        }), !n || !s || !o) return;
        a = a || {}, t.preventDefault(), e = o;
        var r = [],
          l = p({}, et, a);
        l.event = t, l.triggerEl = e, l.delegate = i;
        var c = l.groupAll,
          h = l.groupAttr,
          d = h && e ? e.getAttribute("".concat(h)) : "";
        if ((!e || d || c) && (r = [].slice.call(n.querySelectorAll(s))), e && !c && (r = d ? r.filter(function (t) {
          return t.getAttribute("".concat(h)) === d;
        }) : [e]), !r.length) return;
        var u = Wt.getInstance();
        return u && u.options.triggerEl && r.indexOf(u.options.triggerEl) > -1 ? void 0 : (e && (l.startIndex = r.indexOf(e)), Wt.fromNodes(r, l));
      }
    }, {
      key: "fromSelector",
      value: function fromSelector(t, e) {
        var i = null,
          n = "";
        if ("string" == typeof t ? (i = document.body, n = t) : t instanceof HTMLElement && "string" == typeof e && (i = t, n = e), !i || !n) return !1;
        var s = Wt.openers.get(i);
        if (!s) return !1;
        var o = s.get(n);
        return !!o && Wt.fromNodes(Array.from(i.querySelectorAll(n)), o);
      }
    }, {
      key: "fromNodes",
      value: function fromNodes(t, e) {
        e = p({}, et, e || {});
        var i = [];
        var _iterator52 = _createForOfIteratorHelper(t),
          _step52;
        try {
          for (_iterator52.s(); !(_step52 = _iterator52.n()).done;) {
            var _n24 = _step52.value;
            var _t74 = _n24.dataset || {},
              _s14 = _t74.src || _n24.getAttribute("href") || _n24.getAttribute("currentSrc") || _n24.getAttribute("src") || void 0;
            var _o9 = void 0;
            var _a6 = e.delegate;
            var _r6 = void 0;
            _a6 && i.length === e.startIndex && (_o9 = _a6 instanceof HTMLImageElement ? _a6 : _a6.querySelector("img:not([aria-hidden])")), _o9 || (_o9 = _n24 instanceof HTMLImageElement ? _n24 : _n24.querySelector("img:not([aria-hidden])")), _o9 && (_r6 = _o9.currentSrc || _o9.src || void 0, !_r6 && _o9.dataset && (_r6 = _o9.dataset.lazySrc || _o9.dataset.src || void 0));
            var _l6 = {
              src: _s14,
              triggerEl: _n24,
              thumbEl: _o9,
              thumbElSrc: _r6,
              thumbSrc: _r6
            };
            for (var _e67 in _t74) _l6[_e67] = _t74[_e67] + "";
            i.push(_l6);
          }
        } catch (err) {
          _iterator52.e(err);
        } finally {
          _iterator52.f();
        }
        return new Wt(i, e);
      }
    }, {
      key: "getInstance",
      value: function getInstance(t) {
        if (t) return Nt.get(t);
        return Array.from(Nt.values()).reverse().find(function (t) {
          return !t.isClosing() && t;
        }) || null;
      }
    }, {
      key: "getSlide",
      value: function getSlide() {
        var t;
        return (null === (t = Wt.getInstance()) || void 0 === t ? void 0 : t.getSlide()) || null;
      }
    }, {
      key: "show",
      value: function show() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var e = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        return new Wt(t, e);
      }
    }, {
      key: "next",
      value: function next() {
        var t = Wt.getInstance();
        t && t.next();
      }
    }, {
      key: "prev",
      value: function prev() {
        var t = Wt.getInstance();
        t && t.prev();
      }
    }, {
      key: "close",
      value: function close() {
        var t = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : !0;
        for (var _len6 = arguments.length, e = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          e[_key6 - 1] = arguments[_key6];
        }
        if (t) {
          var _iterator53 = _createForOfIteratorHelper(Nt.values()),
            _step53;
          try {
            for (_iterator53.s(); !(_step53 = _iterator53.n()).done;) {
              var _t75 = _step53.value;
              _t75.close.apply(_t75, e);
            }
          } catch (err) {
            _iterator53.e(err);
          } finally {
            _iterator53.f();
          }
        } else {
          var _t76 = Wt.getInstance();
          _t76 && _t76.close.apply(_t76, e);
        }
      }
    }]);
    return Wt;
  }(g);
  Object.defineProperty(Wt, "version", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: "5.0.22"
  }), Object.defineProperty(Wt, "defaults", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: et
  }), Object.defineProperty(Wt, "Plugins", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: At
  }), Object.defineProperty(Wt, "openers", {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: new Map()
  }), t.Carousel = U, t.Fancybox = Wt, t.Panzoom = k;
});