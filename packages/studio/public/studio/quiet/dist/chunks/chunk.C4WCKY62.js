/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  __commonJS
} from "./chunk.32UODNLB.js";

// node_modules/axe-core/axe.min.js
var require_axe_min = __commonJS({
  "node_modules/axe-core/axe.min.js"(exports, module) {
    !function i(window2) {
      var q = window2, document = window2.document;
      function te(e2) {
        return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var axe = axe || {};
      function S(e2) {
        this.name = "SupportError", this.cause = e2.cause, this.message = "`".concat(e2.cause, "` - feature unsupported in your environment."), e2.ruleId && (this.ruleId = e2.ruleId, this.message += " Skipping ".concat(this.ruleId, " rule.")), this.stack = new Error().stack;
      }
      axe.version = "4.10.0", "function" == typeof define && define.amd && define("axe-core", [], function() {
        return axe;
      }), "object" === ("undefined" == typeof module ? "undefined" : te(module)) && module.exports && "function" == typeof i.toString && (axe.source = "(" + i.toString() + ')(typeof window === "object" ? window : this);', module.exports = axe), "function" == typeof window2.getComputedStyle && (window2.axe = axe), (S.prototype = Object.create(Error.prototype)).constructor = S;
      var M = ["node"], P = ["relatedNodes"], I = ["node"], B = ["variant"], j = ["matches"], L = ["chromium"], z = ["noImplicit"], V = ["noPresentational"], $ = ["precision", "format", "inGamut"], H = ["space"], U = ["algorithm"], G = ["method"], W = ["maxDeltaE", "deltaEMethod", "steps", "maxSteps"], Y = ["node"], K = ["environmentData"], X = ["environmentData"], Z = ["environmentData"], J = ["environmentData"], Q = ["environmentData"];
      function ee(e2) {
        return he(e2) || fe(e2) || we(e2) || me();
      }
      function ne(e2, t2, n2) {
        t2 = ae(t2);
        var r2 = e2, t2 = re() ? Reflect.construct(t2, n2 || [], ae(e2).constructor) : t2.apply(e2, n2);
        if (t2 && ("object" == te(t2) || "function" == typeof t2)) return t2;
        if (void 0 !== t2) throw new TypeError("Derived constructors may only return object or undefined");
        if (void 0 !== (t2 = r2)) return t2;
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      }
      function re() {
        try {
          var e2 = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
          }));
        } catch (e3) {
        }
        return (re = function() {
          return !!e2;
        })();
      }
      function ae(e2) {
        return (ae = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e3) {
          return e3.__proto__ || Object.getPrototypeOf(e3);
        })(e2);
      }
      function oe(e2, t2) {
        if ("function" != typeof t2 && null !== t2) throw new TypeError("Super expression must either be null or a function");
        e2.prototype = Object.create(t2 && t2.prototype, { constructor: { value: e2, writable: true, configurable: true } }), Object.defineProperty(e2, "prototype", { writable: false }), t2 && ie(e2, t2);
      }
      function ie(e2, t2) {
        return (ie = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e3, t3) {
          return e3.__proto__ = t3, e3;
        })(e2, t2);
      }
      function le(e2, t2, n2) {
        se(e2, t2), t2.set(e2, n2);
      }
      function ue(e2, t2) {
        se(e2, t2), t2.add(e2);
      }
      function se(e2, t2) {
        if (t2.has(e2)) throw new TypeError("Cannot initialize the same private elements twice on an object");
      }
      function ce(e2, t2) {
        return e2.get(pe(e2, t2));
      }
      function de(e2, t2, n2) {
        e2.set(pe(e2, t2), n2);
      }
      function pe(e2, t2, n2) {
        if ("function" == typeof e2 ? e2 === t2 : e2.has(t2)) return arguments.length < 3 ? t2 : n2;
        throw new TypeError("Private element is not present on this object");
      }
      function b(e2, t2) {
        if (null == e2) return {};
        var n2, r2 = function(e3, t3) {
          if (null == e3) return {};
          var n3, r3 = {};
          for (n3 in e3) !{}.hasOwnProperty.call(e3, n3) || 0 <= t3.indexOf(n3) || (r3[n3] = e3[n3]);
          return r3;
        }(e2, t2);
        if (Object.getOwnPropertySymbols) for (var a2 = Object.getOwnPropertySymbols(e2), o2 = 0; o2 < a2.length; o2++) n2 = a2[o2], 0 <= t2.indexOf(n2) || {}.propertyIsEnumerable.call(e2, n2) && (r2[n2] = e2[n2]);
        return r2;
      }
      function w(e2) {
        return function(e3) {
          if (Array.isArray(e3)) return De(e3);
        }(e2) || fe(e2) || we(e2) || function() {
          throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
        }();
      }
      function fe(e2) {
        if ("undefined" != typeof Symbol && null != e2[Symbol.iterator] || null != e2["@@iterator"]) return Array.from(e2);
      }
      function h() {
        return (h = Object.assign ? Object.assign.bind() : function(e2) {
          for (var t2 = 1; t2 < arguments.length; t2++) {
            var n2, r2 = arguments[t2];
            for (n2 in r2) !{}.hasOwnProperty.call(r2, n2) || (e2[n2] = r2[n2]);
          }
          return e2;
        }).apply(null, arguments);
      }
      function D(e2, t2) {
        return he(e2) || function(e3, t3) {
          var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
          if (null != n2) {
            var r2, a2, o2, i2, l2 = [], u2 = true, s2 = false;
            try {
              if (o2 = (n2 = n2.call(e3)).next, 0 === t3) {
                if (Object(n2) !== n2) return;
                u2 = false;
              } else for (; !(u2 = (r2 = o2.call(n2)).done) && (l2.push(r2.value), l2.length !== t3); u2 = true) ;
            } catch (e4) {
              s2 = true, a2 = e4;
            } finally {
              try {
                if (!u2 && null != n2.return && (i2 = n2.return(), Object(i2) !== i2)) return;
              } finally {
                if (s2) throw a2;
              }
            }
            return l2;
          }
        }(e2, t2) || we(e2, t2) || me();
      }
      function me() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function he(e2) {
        if (Array.isArray(e2)) return e2;
      }
      function ge(e2, t2) {
        if (!(e2 instanceof t2)) throw new TypeError("Cannot call a class as a function");
      }
      function be(e2, t2) {
        for (var n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          r2.enumerable = r2.enumerable || false, r2.configurable = true, "value" in r2 && (r2.writable = true), Object.defineProperty(e2, ye(r2.key), r2);
        }
      }
      function ve(e2, t2, n2) {
        return t2 && be(e2.prototype, t2), n2 && be(e2, n2), Object.defineProperty(e2, "prototype", { writable: false }), e2;
      }
      function ye(e2) {
        e2 = function(e3, t2) {
          if ("object" != te(e3) || !e3) return e3;
          var n2 = e3[Symbol.toPrimitive];
          if (void 0 === n2) return ("string" === t2 ? String : Number)(e3);
          n2 = n2.call(e3, t2 || "default");
          if ("object" == te(n2)) throw new TypeError("@@toPrimitive must return a primitive value.");
          return n2;
        }(e2, "string");
        return "symbol" == te(e2) ? e2 : e2 + "";
      }
      function x(e2, t2) {
        var n2, r2, a2, o2, i2 = "undefined" != typeof Symbol && e2[Symbol.iterator] || e2["@@iterator"];
        if (i2) return a2 = !(r2 = true), { s: function() {
          i2 = i2.call(e2);
        }, n: function() {
          var e3 = i2.next();
          return r2 = e3.done, e3;
        }, e: function(e3) {
          a2 = true, n2 = e3;
        }, f: function() {
          try {
            r2 || null == i2.return || i2.return();
          } finally {
            if (a2) throw n2;
          }
        } };
        if (Array.isArray(e2) || (i2 = we(e2)) || t2 && e2 && "number" == typeof e2.length) return i2 && (e2 = i2), o2 = 0, { s: t2 = function() {
        }, n: function() {
          return o2 >= e2.length ? { done: true } : { done: false, value: e2[o2++] };
        }, e: function(e3) {
          throw e3;
        }, f: t2 };
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
      }
      function we(e2, t2) {
        var n2;
        if (e2) return "string" == typeof e2 ? De(e2, t2) : "Map" === (n2 = "Object" === (n2 = {}.toString.call(e2).slice(8, -1)) && e2.constructor ? e2.constructor.name : n2) || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? De(e2, t2) : void 0;
      }
      function De(e2, t2) {
        (null == t2 || t2 > e2.length) && (t2 = e2.length);
        for (var n2 = 0, r2 = Array(t2); n2 < t2; n2++) r2[n2] = e2[n2];
        return r2;
      }
      function te(e2) {
        return (te = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
          return typeof e3;
        } : function(e3) {
          return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
        })(e2);
      }
      var xe = void 0, Ee = void 0, Fe = void 0, Ae = void 0, Ce = void 0, ke = void 0, Ne = void 0, Te = void 0, Re = void 0, Oe = void 0, _e = void 0;
      function e(e2, t2) {
        return function() {
          return t2 || e2((t2 = { exports: {} }).exports, t2), t2.exports;
        };
      }
      function Se(e2, t2) {
        for (var n2 in t2) je(e2, n2, { get: t2[n2], enumerable: true });
      }
      function Me(t2, n2, r2) {
        if (n2 && "object" === te(n2) || "function" == typeof n2) {
          var a2, o2 = x(ze(n2));
          try {
            for (o2.s(); !(a2 = o2.n()).done; ) !function() {
              var e2 = a2.value;
              qe.call(t2, e2) || "default" === e2 || je(t2, e2, { get: function() {
                return n2[e2];
              }, enumerable: !(r2 = Ve(n2, e2)) || r2.enumerable });
            }();
          } catch (e2) {
            o2.e(e2);
          } finally {
            o2.f();
          }
        }
        return t2;
      }
      function Pe(e2) {
        return Me((t2 = je(null != e2 ? Be(Le(e2)) : {}, "default", e2 && e2.__esModule && "default" in e2 ? { get: function() {
          return e2.default;
        }, enumerable: true } : { value: e2, enumerable: true }), je(t2, "__esModule", { value: true })), e2);
        var t2;
      }
      function Ie(e2, t2, n2) {
        e2 = e2, t2 = "symbol" !== te(t2) ? t2 + "" : t2, n2 = n2, t2 in e2 ? je(e2, t2, { enumerable: true, configurable: true, writable: true, value: n2 }) : e2[t2] = n2;
      }
      var Be = Object.create, je = Object.defineProperty, Le = Object.getPrototypeOf, qe = Object.prototype.hasOwnProperty, ze = Object.getOwnPropertyNames, Ve = Object.getOwnPropertyDescriptor, $e = e(function(e2, t2) {
        t2.exports = function() {
        };
      }), He = e(function(e2, t2) {
        var n2 = $e()();
        t2.exports = function(e3) {
          return e3 !== n2 && null !== e3;
        };
      }), Ue = e(function(e2, t2) {
        var o2 = He(), n2 = Array.prototype.forEach, r2 = Object.create;
        t2.exports = function(e3) {
          var a2 = r2(null);
          return n2.call(arguments, function(e4) {
            if (o2(e4)) {
              var t3, n3 = Object(e4), r3 = a2;
              for (t3 in n3) r3[t3] = n3[t3];
            }
          }), a2;
        };
      }), Ge = e(function(e2, t2) {
        t2.exports = function() {
          var e3 = Math.sign;
          return "function" == typeof e3 && 1 === e3(10) && -1 === e3(-20);
        };
      }), We = e(function(e2, t2) {
        t2.exports = function(e3) {
          return e3 = Number(e3), isNaN(e3) || 0 === e3 ? e3 : 0 < e3 ? 1 : -1;
        };
      }), Ye = e(function(e2, t2) {
        t2.exports = Ge()() ? Math.sign : We();
      }), Ke = e(function(e2, t2) {
        var n2 = Ye(), r2 = Math.abs, a2 = Math.floor;
        t2.exports = function(e3) {
          return isNaN(e3) ? 0 : 0 !== (e3 = Number(e3)) && isFinite(e3) ? n2(e3) * a2(r2(e3)) : e3;
        };
      }), Xe = e(function(e2, t2) {
        var n2 = Ke(), r2 = Math.max;
        t2.exports = function(e3) {
          return r2(0, n2(e3));
        };
      }), Ze = e(function(e2, t2) {
        var r2 = Xe();
        t2.exports = function(e3, t3, n2) {
          return isNaN(e3) ? 0 <= t3 ? n2 && t3 ? t3 - 1 : t3 : 1 : false !== e3 && r2(e3);
        };
      }), Je = e(function(e2, t2) {
        t2.exports = function(e3) {
          if ("function" != typeof e3) throw new TypeError(e3 + " is not a function");
          return e3;
        };
      }), Qe = e(function(e2, t2) {
        var n2 = He();
        t2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw new TypeError("Cannot use null or undefined");
        };
      }), et = e(function(e2, t2) {
        var l2 = Je(), u2 = Qe(), s2 = Function.prototype.bind, c2 = Function.prototype.call, d2 = Object.keys, p2 = Object.prototype.propertyIsEnumerable;
        t2.exports = function(o2, i2) {
          return function(n2, r2) {
            var e3, a2 = arguments[2], t3 = arguments[3];
            return n2 = Object(u2(n2)), l2(r2), e3 = d2(n2), t3 && e3.sort("function" == typeof t3 ? s2.call(t3, n2) : void 0), "function" != typeof o2 && (o2 = e3[o2]), c2.call(o2, e3, function(e4, t4) {
              return p2.call(n2, e4) ? c2.call(r2, a2, n2[e4], e4, n2, t4) : i2;
            });
          };
        };
      }), tt = e(function(e2, t2) {
        t2.exports = et()("forEach");
      }), nt = e(function() {
      }), rt = e(function(e2, t2) {
        t2.exports = function() {
          var e3 = Object.assign;
          return "function" == typeof e3 && (e3(e3 = { foo: "raz" }, { bar: "dwa" }, { trzy: "trzy" }), e3.foo + e3.bar + e3.trzy === "razdwatrzy");
        };
      }), at = e(function(e2, t2) {
        t2.exports = function() {
          try {
            return Object.keys("primitive"), true;
          } catch (e3) {
            return false;
          }
        };
      }), ot = e(function(e2, t2) {
        var n2 = He(), r2 = Object.keys;
        t2.exports = function(e3) {
          return r2(n2(e3) ? Object(e3) : e3);
        };
      }), it = e(function(e2, t2) {
        t2.exports = at()() ? Object.keys : ot();
      }), lt = e(function(e2, t2) {
        var i2 = it(), l2 = Qe(), u2 = Math.max;
        t2.exports = function(t3, n2) {
          var r2, e3, a2, o2 = u2(arguments.length, 2);
          for (t3 = Object(l2(t3)), a2 = function(e4) {
            try {
              t3[e4] = n2[e4];
            } catch (e5) {
              r2 = r2 || e5;
            }
          }, e3 = 1; e3 < o2; ++e3) i2(n2 = arguments[e3]).forEach(a2);
          if (void 0 !== r2) throw r2;
          return t3;
        };
      }), ut = e(function(e2, t2) {
        t2.exports = rt()() ? Object.assign : lt();
      }), st = e(function(e2, t2) {
        var n2 = He(), r2 = { function: true, object: true };
        t2.exports = function(e3) {
          return n2(e3) && r2[te(e3)] || false;
        };
      }), ct = e(function(e2, r2) {
        var a2 = ut(), o2 = st(), i2 = He(), l2 = Error.captureStackTrace;
        r2.exports = function(e3) {
          var e3 = new Error(e3), t2 = arguments[1], n2 = arguments[2];
          return i2(n2) || o2(t2) && (n2 = t2, t2 = null), i2(n2) && a2(e3, n2), i2(t2) && (e3.code = t2), l2 && l2(e3, r2.exports), e3;
        };
      }), dt = e(function(e2, t2) {
        var a2 = Qe(), o2 = Object.defineProperty, i2 = Object.getOwnPropertyDescriptor, l2 = Object.getOwnPropertyNames, u2 = Object.getOwnPropertySymbols;
        t2.exports = function(t3, n2) {
          var r2, e3 = Object(a2(n2));
          if (t3 = Object(a2(t3)), l2(e3).forEach(function(e4) {
            try {
              o2(t3, e4, i2(n2, e4));
            } catch (e5) {
              r2 = e5;
            }
          }), "function" == typeof u2 && u2(e3).forEach(function(e4) {
            try {
              o2(t3, e4, i2(n2, e4));
            } catch (e5) {
              r2 = e5;
            }
          }), void 0 !== r2) throw r2;
          return t3;
        };
      }), pt = e(function(e2, t2) {
        function n2(e3, t3) {
          return t3;
        }
        var r2, a2, o2, i2, l2, u2 = Xe();
        try {
          Object.defineProperty(n2, "length", { configurable: true, writable: false, enumerable: false, value: 1 });
        } catch (e3) {
        }
        1 === n2.length ? (r2 = { configurable: true, writable: false, enumerable: false }, a2 = Object.defineProperty, t2.exports = function(e3, t3) {
          return t3 = u2(t3), e3.length === t3 ? e3 : (r2.value = t3, a2(e3, "length", r2));
        }) : (i2 = dt(), l2 = [], o2 = function(e3) {
          var t3, n3 = 0;
          if (l2[e3]) return l2[e3];
          for (t3 = []; e3--; ) t3.push("a" + (++n3).toString(36));
          return new Function("fn", "return function (" + t3.join(", ") + ") { return fn.apply(this, arguments); };");
        }, t2.exports = function(e3, t3) {
          if (t3 = u2(t3), e3.length === t3) return e3;
          t3 = o2(t3)(e3);
          try {
            i2(t3, e3);
          } catch (e4) {
          }
          return t3;
        });
      }), ft = e(function(e2, t2) {
        t2.exports = function(e3) {
          return null != e3;
        };
      }), mt = e(function(e2, t2) {
        var n2 = ft(), r2 = { object: true, function: true, undefined: true };
        t2.exports = function(e3) {
          return !!n2(e3) && hasOwnProperty.call(r2, te(e3));
        };
      }), ht = e(function(e2, t2) {
        var n2 = mt();
        t2.exports = function(e3) {
          if (!n2(e3)) return false;
          try {
            return e3.constructor ? e3.constructor.prototype === e3 : false;
          } catch (e4) {
            return false;
          }
        };
      }), gt = e(function(e2, t2) {
        var n2 = ht();
        t2.exports = function(e3) {
          if ("function" != typeof e3) return false;
          if (!hasOwnProperty.call(e3, "length")) return false;
          try {
            if ("number" != typeof e3.length) return false;
            if ("function" != typeof e3.call) return false;
            if ("function" != typeof e3.apply) return false;
          } catch (e4) {
            return false;
          }
          return !n2(e3);
        };
      }), bt = e(function(e2, t2) {
        var n2 = gt(), r2 = /^\s*class[\s{/}]/, a2 = Function.prototype.toString;
        t2.exports = function(e3) {
          return !!n2(e3) && !r2.test(a2.call(e3));
        };
      }), vt = e(function(e2, t2) {
        var n2 = "razdwatrzy";
        t2.exports = function() {
          return "function" == typeof n2.contains && true === n2.contains("dwa") && false === n2.contains("foo");
        };
      }), yt = e(function(e2, t2) {
        var n2 = String.prototype.indexOf;
        t2.exports = function(e3) {
          return -1 < n2.call(this, e3, arguments[1]);
        };
      }), wt = e(function(e2, t2) {
        t2.exports = vt()() ? String.prototype.contains : yt();
      }), Dt = e(function(e2, t2) {
        var i2 = ft(), o2 = bt(), l2 = ut(), u2 = Ue(), s2 = wt();
        (t2.exports = function(e3, t3) {
          var n2, r2, a2, o3;
          return arguments.length < 2 || "string" != typeof e3 ? (o3 = t3, t3 = e3, e3 = null) : o3 = arguments[2], i2(e3) ? (n2 = s2.call(e3, "c"), r2 = s2.call(e3, "e"), a2 = s2.call(e3, "w")) : r2 = !(n2 = a2 = true), e3 = { value: t3, configurable: n2, enumerable: r2, writable: a2 }, o3 ? l2(u2(o3), e3) : e3;
        }).gs = function(e3, t3, n2) {
          var r2, a2;
          return "string" != typeof e3 ? (a2 = n2, n2 = t3, t3 = e3, e3 = null) : a2 = arguments[3], i2(t3) ? o2(t3) ? i2(n2) ? o2(n2) || (a2 = n2, n2 = void 0) : n2 = void 0 : (a2 = t3, t3 = n2 = void 0) : t3 = void 0, e3 = i2(e3) ? (r2 = s2.call(e3, "c"), s2.call(e3, "e")) : !(r2 = true), t3 = { get: t3, set: n2, configurable: r2, enumerable: e3 }, a2 ? l2(u2(a2), t3) : t3;
        };
      }), xt = e(function(e2, t2) {
        var n2 = Dt(), i2 = Je(), l2 = Function.prototype.apply, u2 = Function.prototype.call, r2 = Object.create, a2 = Object.defineProperty, o2 = Object.defineProperties, s2 = Object.prototype.hasOwnProperty, c2 = { configurable: true, enumerable: false, writable: true }, d2 = function(e3, t3) {
          var n3;
          return i2(t3), s2.call(this, "__ee__") ? n3 = this.__ee__ : (n3 = c2.value = r2(null), a2(this, "__ee__", c2), c2.value = null), n3[e3] ? "object" === te(n3[e3]) ? n3[e3].push(t3) : n3[e3] = [n3[e3], t3] : n3[e3] = t3, this;
        }, p2 = function(e3, t3) {
          var n3, r3;
          return i2(t3), r3 = this, d2.call(this, e3, n3 = function() {
            f2.call(r3, e3, n3), l2.call(t3, this, arguments);
          }), n3.__eeOnceListener__ = t3, this;
        }, f2 = function(e3, t3) {
          var n3, r3, a3, o3;
          if (i2(t3), s2.call(this, "__ee__") && (n3 = this.__ee__)[e3]) if (r3 = n3[e3], "object" === te(r3)) for (o3 = 0; a3 = r3[o3]; ++o3) a3 !== t3 && a3.__eeOnceListener__ !== t3 || (2 === r3.length ? n3[e3] = r3[o3 ? 0 : 1] : r3.splice(o3, 1));
          else r3 !== t3 && r3.__eeOnceListener__ !== t3 || delete n3[e3];
          return this;
        }, m2 = function(e3) {
          var t3, n3, r3, a3, o3;
          if (s2.call(this, "__ee__") && (a3 = this.__ee__[e3])) if ("object" === te(a3)) {
            for (n3 = arguments.length, o3 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) o3[t3 - 1] = arguments[t3];
            for (a3 = a3.slice(), t3 = 0; r3 = a3[t3]; ++t3) l2.call(r3, this, o3);
          } else switch (arguments.length) {
            case 1:
              u2.call(a3, this);
              break;
            case 2:
              u2.call(a3, this, arguments[1]);
              break;
            case 3:
              u2.call(a3, this, arguments[1], arguments[2]);
              break;
            default:
              for (n3 = arguments.length, o3 = new Array(n3 - 1), t3 = 1; t3 < n3; ++t3) o3[t3 - 1] = arguments[t3];
              l2.call(a3, this, o3);
          }
        }, h2 = { on: d2, once: p2, off: f2, emit: m2 }, g2 = { on: n2(d2), once: n2(p2), off: n2(f2), emit: n2(m2) }, b2 = o2({}, g2);
        t2.exports = e2 = function(e3) {
          return null == e3 ? r2(b2) : o2(Object(e3), g2);
        }, e2.methods = h2;
      }), Et = e(function(e2, t2) {
        t2.exports = function() {
          var e3, t3 = Array.from;
          return "function" == typeof t3 && (e3 = t3(t3 = ["raz", "dwa"]), Boolean(e3 && e3 !== t3 && "dwa" === e3[1]));
        };
      }), Ft = e(function(e2, t2) {
        t2.exports = function() {
          return "object" === ("undefined" == typeof globalThis ? "undefined" : te(globalThis)) && !!globalThis && globalThis.Array === Array;
        };
      }), At = e(function(e2, t2) {
        function n2() {
          if ("object" === ("undefined" == typeof self ? "undefined" : te(self)) && self) return self;
          if ("object" === (void 0 === window2 ? "undefined" : te(window2)) && window2) return window2;
          throw new Error("Unable to resolve global `this`");
        }
        t2.exports = function() {
          if (this) return this;
          try {
            Object.defineProperty(Object.prototype, "__global__", { get: function() {
              return this;
            }, configurable: true });
          } catch (e3) {
            return n2();
          }
          try {
            return __global__ ? __global__ : n2();
          } finally {
            delete Object.prototype.__global__;
          }
        }();
      }), Ct = e(function(e2, t2) {
        t2.exports = Ft()() ? globalThis : At();
      }), kt = e(function(e2, t2) {
        var n2 = Ct(), r2 = { object: true, symbol: true };
        t2.exports = function() {
          var e3, t3 = n2.Symbol;
          if ("function" != typeof t3) return false;
          e3 = t3("test symbol");
          try {
            String(e3);
          } catch (e4) {
            return false;
          }
          return !!r2[te(t3.iterator)] && !!r2[te(t3.toPrimitive)] && !!r2[te(t3.toStringTag)];
        };
      }), Nt = e(function(e2, t2) {
        t2.exports = function(e3) {
          return !!e3 && ("symbol" === te(e3) || !!e3.constructor && "Symbol" === e3.constructor.name && "Symbol" === e3[e3.constructor.toStringTag]);
        };
      }), Tt = e(function(e2, t2) {
        var n2 = Nt();
        t2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw new TypeError(e3 + " is not a symbol");
        };
      }), Rt = e(function(e2, t2) {
        var a2 = Dt(), n2 = Object.create, o2 = Object.defineProperty, i2 = Object.prototype, l2 = n2(null);
        t2.exports = function(e3) {
          for (var t3, n3, r2 = 0; l2[e3 + (r2 || "")]; ) ++r2;
          return l2[e3 += r2 || ""] = true, o2(i2, t3 = "@@" + e3, a2.gs(null, function(e4) {
            n3 || (n3 = true, o2(this, t3, a2(e4)), n3 = false);
          })), t3;
        };
      }), Ot = e(function(e2, t2) {
        var n2 = Dt(), r2 = Ct().Symbol;
        t2.exports = function(e3) {
          return Object.defineProperties(e3, { hasInstance: n2("", r2 && r2.hasInstance || e3("hasInstance")), isConcatSpreadable: n2("", r2 && r2.isConcatSpreadable || e3("isConcatSpreadable")), iterator: n2("", r2 && r2.iterator || e3("iterator")), match: n2("", r2 && r2.match || e3("match")), replace: n2("", r2 && r2.replace || e3("replace")), search: n2("", r2 && r2.search || e3("search")), species: n2("", r2 && r2.species || e3("species")), split: n2("", r2 && r2.split || e3("split")), toPrimitive: n2("", r2 && r2.toPrimitive || e3("toPrimitive")), toStringTag: n2("", r2 && r2.toStringTag || e3("toStringTag")), unscopables: n2("", r2 && r2.unscopables || e3("unscopables")) });
        };
      }), _t = e(function(e2, t2) {
        var n2 = Dt(), r2 = Tt(), a2 = /* @__PURE__ */ Object.create(null);
        t2.exports = function(t3) {
          return Object.defineProperties(t3, { for: n2(function(e3) {
            return a2[e3] || (a2[e3] = t3(String(e3)));
          }), keyFor: n2(function(e3) {
            for (var t4 in r2(e3), a2) if (a2[t4] === e3) return t4;
          }) });
        };
      }), St = e(function(e2, t2) {
        var n2, r2, a2, o2 = Dt(), i2 = Tt(), l2 = Ct().Symbol, u2 = Rt(), s2 = Ot(), c2 = _t(), d2 = Object.create, p2 = Object.defineProperties, f2 = Object.defineProperty;
        if ("function" == typeof l2) try {
          String(l2()), a2 = true;
        } catch (e3) {
        }
        else l2 = null;
        r2 = function(e3) {
          if (this instanceof r2) throw new TypeError("Symbol is not a constructor");
          return n2(e3);
        }, t2.exports = n2 = function e3(t3) {
          var n3;
          if (this instanceof e3) throw new TypeError("Symbol is not a constructor");
          return a2 ? l2(t3) : (n3 = d2(r2.prototype), t3 = void 0 === t3 ? "" : String(t3), p2(n3, { __description__: o2("", t3), __name__: o2("", u2(t3)) }));
        }, s2(n2), c2(n2), p2(r2.prototype, { constructor: o2(n2), toString: o2("", function() {
          return this.__name__;
        }) }), p2(n2.prototype, { toString: o2(function() {
          return "Symbol (" + i2(this).__description__ + ")";
        }), valueOf: o2(function() {
          return i2(this);
        }) }), f2(n2.prototype, n2.toPrimitive, o2("", function() {
          var e3 = i2(this);
          return "symbol" === te(e3) ? e3 : e3.toString();
        })), f2(n2.prototype, n2.toStringTag, o2("c", "Symbol")), f2(r2.prototype, n2.toStringTag, o2("c", n2.prototype[n2.toStringTag])), f2(r2.prototype, n2.toPrimitive, o2("c", n2.prototype[n2.toPrimitive]));
      }), Mt = e(function(e2, t2) {
        t2.exports = kt()() ? Ct().Symbol : St();
      }), Pt = e(function(e2, t2) {
        var n2 = Object.prototype.toString, r2 = n2.call(/* @__PURE__ */ function() {
          return arguments;
        }());
        t2.exports = function(e3) {
          return n2.call(e3) === r2;
        };
      }), It = e(function(e2, t2) {
        var n2 = Object.prototype.toString, r2 = RegExp.prototype.test.bind(/^[object [A-Za-z0-9]*Function]$/);
        t2.exports = function(e3) {
          return "function" == typeof e3 && r2(n2.call(e3));
        };
      }), Bt = e(function(e2, t2) {
        var n2 = Object.prototype.toString, r2 = n2.call("");
        t2.exports = function(e3) {
          return "string" == typeof e3 || e3 && "object" === te(e3) && (e3 instanceof String || n2.call(e3) === r2) || false;
        };
      }), jt = e(function(e2, t2) {
        var f2 = Mt().iterator, m2 = Pt(), h2 = It(), g2 = Xe(), b2 = Je(), v2 = Qe(), y2 = He(), w2 = Bt(), D2 = Array.isArray, x2 = Function.prototype.call, E2 = { configurable: true, enumerable: true, writable: true, value: null }, F2 = Object.defineProperty;
        t2.exports = function(e3) {
          var t3, n2, r2, a2, o2, i2, l2, u2, s2, c2, d2 = arguments[1], p2 = arguments[2];
          if (e3 = Object(v2(e3)), y2(d2) && b2(d2), this && this !== Array && h2(this)) t3 = this;
          else {
            if (!d2) {
              if (m2(e3)) return 1 !== (o2 = e3.length) ? Array.apply(null, e3) : ((a2 = new Array(1))[0] = e3[0], a2);
              if (D2(e3)) {
                for (a2 = new Array(o2 = e3.length), n2 = 0; n2 < o2; ++n2) a2[n2] = e3[n2];
                return a2;
              }
            }
            a2 = [];
          }
          if (!D2(e3)) {
            if (void 0 !== (s2 = e3[f2])) {
              for (l2 = b2(s2).call(e3), t3 && (a2 = new t3()), u2 = l2.next(), n2 = 0; !u2.done; ) c2 = d2 ? x2.call(d2, p2, u2.value, n2) : u2.value, t3 ? (E2.value = c2, F2(a2, n2, E2)) : a2[n2] = c2, u2 = l2.next(), ++n2;
              o2 = n2;
            } else if (w2(e3)) {
              for (o2 = e3.length, t3 && (a2 = new t3()), r2 = n2 = 0; n2 < o2; ++n2) c2 = e3[n2], n2 + 1 < o2 && 55296 <= (i2 = c2.charCodeAt(0)) && i2 <= 56319 && (c2 += e3[++n2]), c2 = d2 ? x2.call(d2, p2, c2, r2) : c2, t3 ? (E2.value = c2, F2(a2, r2, E2)) : a2[r2] = c2, ++r2;
              o2 = r2;
            }
          }
          if (void 0 === o2) for (o2 = g2(e3.length), t3 && (a2 = new t3(o2)), n2 = 0; n2 < o2; ++n2) c2 = d2 ? x2.call(d2, p2, e3[n2], n2) : e3[n2], t3 ? (E2.value = c2, F2(a2, n2, E2)) : a2[n2] = c2;
          return t3 && (E2.value = null, a2.length = o2), a2;
        };
      }), Lt = e(function(e2, t2) {
        t2.exports = Et()() ? Array.from : jt();
      }), qt = e(function(e2, t2) {
        var n2 = Lt(), r2 = Array.isArray;
        t2.exports = function(e3) {
          return r2(e3) ? e3 : n2(e3);
        };
      }), zt = e(function(e2, t2) {
        var n2 = qt(), r2 = He(), a2 = Je(), o2 = Array.prototype.slice, i2 = function(n3) {
          return this.map(function(e3, t3) {
            return e3 ? e3(n3[t3]) : n3[t3];
          }).concat(o2.call(n3, this.length));
        };
        t2.exports = function(e3) {
          return (e3 = n2(e3)).forEach(function(e4) {
            r2(e4) && a2(e4);
          }), i2.bind(e3);
        };
      }), Vt = e(function(e2, t2) {
        var n2 = Je();
        t2.exports = function(e3) {
          var t3;
          return "function" == typeof e3 ? { set: e3, get: e3 } : (t3 = { get: n2(e3.get) }, void 0 !== e3.set ? (t3.set = n2(e3.set), e3.delete && (t3.delete = n2(e3.delete)), e3.clear && (t3.clear = n2(e3.clear))) : t3.set = t3.get, t3);
        };
      }), $t = e(function(e2, t2) {
        var g2 = ct(), b2 = pt(), v2 = Dt(), n2 = xt().methods, y2 = zt(), w2 = Vt(), D2 = Function.prototype.apply, x2 = Function.prototype.call, E2 = Object.create, F2 = Object.defineProperties, A2 = n2.on, C2 = n2.emit;
        t2.exports = function(a2, t3, e3) {
          var o2, i2, l2, n3, r2, u2, s2, c2, d2, p2, f2, m2 = E2(null), h2 = false !== t3 ? t3 : isNaN(a2.length) ? 1 : a2.length;
          return e3.normalizer && (p2 = w2(e3.normalizer), i2 = p2.get, l2 = p2.set, n3 = p2.delete, r2 = p2.clear), null != e3.resolvers && (f2 = y2(e3.resolvers)), p2 = i2 ? b2(function(e4) {
            var t4, n4, r3 = arguments;
            if (f2 && (r3 = f2(r3)), null !== (t4 = i2(r3)) && hasOwnProperty.call(m2, t4)) return s2 && o2.emit("get", t4, r3, this), m2[t4];
            if (n4 = 1 === r3.length ? x2.call(a2, this, r3[0]) : D2.call(a2, this, r3), null === t4) {
              if (null !== (t4 = i2(r3))) throw g2("Circular invocation", "CIRCULAR_INVOCATION");
              t4 = l2(r3);
            } else if (hasOwnProperty.call(m2, t4)) throw g2("Circular invocation", "CIRCULAR_INVOCATION");
            return m2[t4] = n4, c2 && o2.emit("set", t4, null, n4), n4;
          }, h2) : 0 === t3 ? function() {
            var e4;
            if (hasOwnProperty.call(m2, "data")) return s2 && o2.emit("get", "data", arguments, this), m2.data;
            if (e4 = arguments.length ? D2.call(a2, this, arguments) : x2.call(a2, this), hasOwnProperty.call(m2, "data")) throw g2("Circular invocation", "CIRCULAR_INVOCATION");
            return m2.data = e4, c2 && o2.emit("set", "data", null, e4), e4;
          } : function(e4) {
            var t4, n4 = arguments;
            if (f2 && (n4 = f2(arguments)), t4 = String(n4[0]), hasOwnProperty.call(m2, t4)) return s2 && o2.emit("get", t4, n4, this), m2[t4];
            if (n4 = 1 === n4.length ? x2.call(a2, this, n4[0]) : D2.call(a2, this, n4), hasOwnProperty.call(m2, t4)) throw g2("Circular invocation", "CIRCULAR_INVOCATION");
            return m2[t4] = n4, c2 && o2.emit("set", t4, null, n4), n4;
          }, o2 = { original: a2, memoized: p2, profileName: e3.profileName, get: function(e4) {
            return f2 && (e4 = f2(e4)), i2 ? i2(e4) : String(e4[0]);
          }, has: function(e4) {
            return hasOwnProperty.call(m2, e4);
          }, delete: function(e4) {
            var t4;
            hasOwnProperty.call(m2, e4) && (n3 && n3(e4), t4 = m2[e4], delete m2[e4], d2) && o2.emit("delete", e4, t4);
          }, clear: function() {
            var e4 = m2;
            r2 && r2(), m2 = E2(null), o2.emit("clear", e4);
          }, on: function(e4, t4) {
            return "get" === e4 ? s2 = true : "set" === e4 ? c2 = true : "delete" === e4 && (d2 = true), A2.call(this, e4, t4);
          }, emit: C2, updateEnv: function() {
            a2 = o2.original;
          } }, e3 = i2 ? b2(function(e4) {
            var t4 = arguments;
            f2 && (t4 = f2(t4)), null !== (t4 = i2(t4)) && o2.delete(t4);
          }, h2) : 0 === t3 ? function() {
            return o2.delete("data");
          } : function(e4) {
            return f2 && (e4 = f2(arguments)[0]), o2.delete(e4);
          }, h2 = b2(function() {
            var e4 = arguments;
            return 0 === t3 ? m2.data : (f2 && (e4 = f2(e4)), e4 = i2 ? i2(e4) : String(e4[0]), m2[e4]);
          }), u2 = b2(function() {
            var e4 = arguments;
            return 0 === t3 ? o2.has("data") : (f2 && (e4 = f2(e4)), null !== (e4 = i2 ? i2(e4) : String(e4[0])) && o2.has(e4));
          }), F2(p2, { __memoized__: v2(true), delete: v2(e3), clear: v2(o2.clear), _get: v2(h2), _has: v2(u2) }), o2;
        };
      }), Ht = e(function(e2, t2) {
        var o2 = Je(), i2 = tt(), l2 = nt(), u2 = $t(), s2 = Ze();
        t2.exports = function e3(t3) {
          var n2, r2, a2;
          if (o2(t3), (n2 = Object(arguments[1])).async && n2.promise) throw new Error("Options 'async' and 'promise' cannot be used together");
          return hasOwnProperty.call(t3, "__memoized__") && !n2.force ? t3 : (r2 = s2(n2.length, t3.length, n2.async && l2.async), a2 = u2(t3, r2, n2), i2(l2, function(e4, t4) {
            n2[t4] && e4(n2[t4], a2, n2);
          }), e3.__profiler__ && e3.__profiler__(a2), a2.updateEnv(), a2.memoized);
        };
      }), Ut = e(function(e2, t2) {
        t2.exports = function(e3) {
          var t3, n2, r2 = e3.length;
          if (!r2) return "";
          for (t3 = String(e3[n2 = 0]); --r2; ) t3 += "" + e3[++n2];
          return t3;
        };
      }), Gt = e(function(e2, t2) {
        t2.exports = function(a2) {
          return a2 ? function(e3) {
            for (var t3 = String(e3[0]), n2 = 0, r2 = a2; --r2; ) t3 += "" + e3[++n2];
            return t3;
          } : function() {
            return "";
          };
        };
      }), Wt = e(function(e2, t2) {
        t2.exports = function() {
          var e3 = Number.isNaN;
          return "function" == typeof e3 && !e3({}) && e3(NaN) && !e3(34);
        };
      }), Yt = e(function(e2, t2) {
        t2.exports = function(e3) {
          return e3 != e3;
        };
      }), Kt = e(function(e2, t2) {
        t2.exports = Wt()() ? Number.isNaN : Yt();
      }), Xt = e(function(e2, t2) {
        var a2 = Kt(), o2 = Xe(), i2 = Qe(), l2 = Array.prototype.indexOf, u2 = Object.prototype.hasOwnProperty, s2 = Math.abs, c2 = Math.floor;
        t2.exports = function(e3) {
          var t3, n2, r2;
          if (!a2(e3)) return l2.apply(this, arguments);
          for (n2 = o2(i2(this).length), e3 = arguments[1], t3 = e3 = isNaN(e3) ? 0 : 0 <= e3 ? c2(e3) : o2(this.length) - c2(s2(e3)); t3 < n2; ++t3) if (u2.call(this, t3) && (r2 = this[t3], a2(r2))) return t3;
          return -1;
        };
      }), Zt = e(function(e2, t2) {
        var s2 = Xt(), n2 = Object.create;
        t2.exports = function() {
          var o2 = 0, l2 = [], u2 = n2(null);
          return { get: function(e3) {
            var t3, n3 = 0, r2 = l2, a2 = e3.length;
            if (0 === a2) return r2[a2] || null;
            if (r2 = r2[a2]) {
              for (; n3 < a2 - 1; ) {
                if (-1 === (t3 = s2.call(r2[0], e3[n3]))) return null;
                r2 = r2[1][t3], ++n3;
              }
              return -1 === (t3 = s2.call(r2[0], e3[n3])) ? null : r2[1][t3] || null;
            }
            return null;
          }, set: function(e3) {
            var t3, n3 = 0, r2 = l2, a2 = e3.length;
            if (0 === a2) r2[a2] = ++o2;
            else {
              for (r2[a2] || (r2[a2] = [[], []]), r2 = r2[a2]; n3 < a2 - 1; ) -1 === (t3 = s2.call(r2[0], e3[n3])) && (t3 = r2[0].push(e3[n3]) - 1, r2[1].push([[], []])), r2 = r2[1][t3], ++n3;
              -1 === (t3 = s2.call(r2[0], e3[n3])) && (t3 = r2[0].push(e3[n3]) - 1), r2[1][t3] = ++o2;
            }
            return u2[o2] = e3, o2;
          }, delete: function(e3) {
            var t3, n3 = 0, r2 = l2, a2 = u2[e3], o3 = a2.length, i2 = [];
            if (0 === o3) delete r2[o3];
            else if (r2 = r2[o3]) {
              for (; n3 < o3 - 1; ) {
                if (-1 === (t3 = s2.call(r2[0], a2[n3]))) return;
                i2.push(r2, t3), r2 = r2[1][t3], ++n3;
              }
              if (-1 === (t3 = s2.call(r2[0], a2[n3]))) return;
              for (e3 = r2[1][t3], r2[0].splice(t3, 1), r2[1].splice(t3, 1); !r2[0].length && i2.length; ) t3 = i2.pop(), (r2 = i2.pop())[0].splice(t3, 1), r2[1].splice(t3, 1);
            }
            delete u2[e3];
          }, clear: function() {
            l2 = [], u2 = n2(null);
          } };
        };
      }), Jt = e(function(e2, t2) {
        var a2 = Xt();
        t2.exports = function() {
          var t3 = 0, n2 = [], r2 = [];
          return { get: function(e3) {
            e3 = a2.call(n2, e3[0]);
            return -1 === e3 ? null : r2[e3];
          }, set: function(e3) {
            return n2.push(e3[0]), r2.push(++t3), t3;
          }, delete: function(e3) {
            e3 = a2.call(r2, e3);
            -1 !== e3 && (n2.splice(e3, 1), r2.splice(e3, 1));
          }, clear: function() {
            n2 = [], r2 = [];
          } };
        };
      }), Qt = e(function(e2, t2) {
        var s2 = Xt(), n2 = Object.create;
        t2.exports = function(i2) {
          var a2 = 0, l2 = [[], []], u2 = n2(null);
          return { get: function(e3) {
            for (var t3, n3 = 0, r2 = l2; n3 < i2 - 1; ) {
              if (-1 === (t3 = s2.call(r2[0], e3[n3]))) return null;
              r2 = r2[1][t3], ++n3;
            }
            return -1 !== (t3 = s2.call(r2[0], e3[n3])) && r2[1][t3] || null;
          }, set: function(e3) {
            for (var t3, n3 = 0, r2 = l2; n3 < i2 - 1; ) -1 === (t3 = s2.call(r2[0], e3[n3])) && (t3 = r2[0].push(e3[n3]) - 1, r2[1].push([[], []])), r2 = r2[1][t3], ++n3;
            return -1 === (t3 = s2.call(r2[0], e3[n3])) && (t3 = r2[0].push(e3[n3]) - 1), r2[1][t3] = ++a2, u2[a2] = e3, a2;
          }, delete: function(e3) {
            for (var t3, n3 = 0, r2 = l2, a3 = [], o2 = u2[e3]; n3 < i2 - 1; ) {
              if (-1 === (t3 = s2.call(r2[0], o2[n3]))) return;
              a3.push(r2, t3), r2 = r2[1][t3], ++n3;
            }
            if (-1 !== (t3 = s2.call(r2[0], o2[n3]))) {
              for (e3 = r2[1][t3], r2[0].splice(t3, 1), r2[1].splice(t3, 1); !r2[0].length && a3.length; ) t3 = a3.pop(), (r2 = a3.pop())[0].splice(t3, 1), r2[1].splice(t3, 1);
              delete u2[e3];
            }
          }, clear: function() {
            l2 = [[], []], u2 = n2(null);
          } };
        };
      }), en = e(function(e2, t2) {
        var n2 = Je(), r2 = tt(), l2 = Function.prototype.call;
        t2.exports = function(e3, a2) {
          var o2 = {}, i2 = arguments[2];
          return n2(a2), r2(e3, function(e4, t3, n3, r3) {
            o2[t3] = l2.call(a2, i2, e4, t3, n3, r3);
          }), o2;
        };
      }), tn = e(function(e2, t2) {
        function o2(e3) {
          if ("function" != typeof e3) throw new TypeError(e3 + " is not a function");
          return e3;
        }
        function n2(e3) {
          var t3, n3, r2 = document.createTextNode(""), a2 = 0;
          return new e3(function() {
            var e4;
            if (t3) n3 && (t3 = n3.concat(t3));
            else {
              if (!n3) return;
              t3 = n3;
            }
            if (n3 = t3, t3 = null, "function" == typeof n3) e4 = n3, n3 = null, e4();
            else for (r2.data = a2 = ++a2 % 2; n3; ) e4 = n3.shift(), n3.length || (n3 = null), e4();
          }).observe(r2, { characterData: true }), function(e4) {
            o2(e4), t3 ? "function" == typeof t3 ? t3 = [t3, e4] : t3.push(e4) : (t3 = e4, r2.data = a2 = ++a2 % 2);
          };
        }
        t2.exports = function() {
          if ("object" === ("undefined" == typeof process ? "undefined" : te(process)) && process && "function" == typeof process.nextTick) return process.nextTick;
          if ("function" == typeof queueMicrotask) return function(e3) {
            queueMicrotask(o2(e3));
          };
          if ("object" === (void 0 === document ? "undefined" : te(document)) && document) {
            if ("function" == typeof MutationObserver) return n2(MutationObserver);
            if ("function" == typeof WebKitMutationObserver) return n2(WebKitMutationObserver);
          }
          return "function" == typeof setImmediate ? function(e3) {
            setImmediate(o2(e3));
          } : "function" == typeof setTimeout || "object" === ("undefined" == typeof setTimeout ? "undefined" : te(setTimeout)) ? function(e3) {
            setTimeout(o2(e3), 0);
          } : null;
        }();
      }), nn = e(function() {
        var p2 = Lt(), t2 = en(), n2 = dt(), a2 = pt(), f2 = tn(), m2 = Array.prototype.slice, h2 = Function.prototype.apply, g2 = Object.create;
        nt().async = function(e2, i2) {
          var l2, u2, s2, c2 = g2(null), d2 = g2(null), o2 = i2.memoized, r2 = i2.original;
          i2.memoized = a2(function(e3) {
            var t3 = arguments, n3 = t3[t3.length - 1];
            return "function" == typeof n3 && (l2 = n3, t3 = m2.call(t3, 0, -1)), o2.apply(u2 = this, s2 = t3);
          }, o2);
          try {
            n2(i2.memoized, o2);
          } catch (e3) {
          }
          i2.on("get", function(t3) {
            var n3, r3, a3;
            l2 && (c2[t3] ? ("function" == typeof c2[t3] ? c2[t3] = [c2[t3], l2] : c2[t3].push(l2), l2 = null) : (n3 = l2, r3 = u2, a3 = s2, l2 = u2 = s2 = null, f2(function() {
              var e3;
              hasOwnProperty.call(d2, t3) ? (e3 = d2[t3], i2.emit("getasync", t3, a3, r3), h2.call(n3, e3.context, e3.args)) : (l2 = n3, u2 = r3, s2 = a3, o2.apply(r3, a3));
            })));
          }), i2.original = function() {
            var e3, t3, n3, o3;
            return l2 ? (e3 = p2(arguments), n3 = l2, l2 = u2 = s2 = null, e3.push(t3 = function e4(t4) {
              var n4, r3, a3 = e4.id;
              if (null == a3) f2(h2.bind(e4, this, arguments));
              else if (delete e4.id, n4 = c2[a3], delete c2[a3], n4) return r3 = p2(arguments), i2.has(a3) && (t4 ? i2.delete(a3) : (d2[a3] = { context: this, args: r3 }, i2.emit("setasync", a3, "function" == typeof n4 ? 1 : n4.length))), "function" == typeof n4 ? o3 = h2.call(n4, this, r3) : n4.forEach(function(e5) {
                o3 = h2.call(e5, this, r3);
              }, this), o3;
            }), o3 = h2.call(r2, this, e3), t3.cb = n3, l2 = t3, o3) : h2.call(r2, this, arguments);
          }, i2.on("set", function(e3) {
            l2 ? (c2[e3] ? "function" == typeof c2[e3] ? c2[e3] = [c2[e3], l2.cb] : c2[e3].push(l2.cb) : c2[e3] = l2.cb, delete l2.cb, l2.id = e3, l2 = null) : i2.delete(e3);
          }), i2.on("delete", function(e3) {
            var t3;
            hasOwnProperty.call(c2, e3) || d2[e3] && (t3 = d2[e3], delete d2[e3], i2.emit("deleteasync", e3, m2.call(t3.args, 1)));
          }), i2.on("clear", function() {
            var e3 = d2;
            d2 = g2(null), i2.emit("clearasync", t2(e3, function(e4) {
              return m2.call(e4.args, 1);
            }));
          });
        };
      }), rn = e(function(e2, t2) {
        var n2 = Array.prototype.forEach, r2 = Object.create;
        t2.exports = function(e3) {
          var t3 = r2(null);
          return n2.call(arguments, function(e4) {
            t3[e4] = true;
          }), t3;
        };
      }), an = e(function(e2, t2) {
        t2.exports = function(e3) {
          return "function" == typeof e3;
        };
      }), on = e(function(e2, t2) {
        var n2 = an();
        t2.exports = function(e3) {
          try {
            return e3 && n2(e3.toString) ? e3.toString() : String(e3);
          } catch (e4) {
            throw new TypeError("Passed argument cannot be stringifed");
          }
        };
      }), ln = e(function(e2, t2) {
        var n2 = Qe(), r2 = on();
        t2.exports = function(e3) {
          return r2(n2(e3));
        };
      }), un = e(function(e2, t2) {
        var n2 = an();
        t2.exports = function(e3) {
          try {
            return e3 && n2(e3.toString) ? e3.toString() : String(e3);
          } catch (e4) {
            return "<Non-coercible to string value>";
          }
        };
      }), sn = e(function(e2, t2) {
        var n2 = un(), r2 = /[\n\r\u2028\u2029]/g;
        t2.exports = function(e3) {
          e3 = n2(e3);
          return e3 = (e3 = 100 < e3.length ? e3.slice(0, 99) + "\u2026" : e3).replace(r2, function(e4) {
            return JSON.stringify(e4).slice(1, -1);
          });
        };
      }), cn = e(function(e2, t2) {
        function n2(e3) {
          return !!e3 && ("object" === te(e3) || "function" == typeof e3) && "function" == typeof e3.then;
        }
        t2.exports = n2, t2.exports.default = n2;
      }), dn = e(function() {
        var t2 = en(), e2 = rn(), n2 = ln(), r2 = sn(), f2 = cn(), m2 = tn(), a2 = Object.create, o2 = e2("then", "then:finally", "done", "done:finally");
        nt().promise = function(u2, s2) {
          var c2 = a2(null), d2 = a2(null), p2 = a2(null);
          if (true === u2) u2 = null;
          else if (u2 = n2(u2), !o2[u2]) throw new TypeError("'" + r2(u2) + "' is not valid promise mode");
          s2.on("set", function(n3, e3, t3) {
            var r3 = false;
            if (f2(t3)) {
              c2[n3] = 1, p2[n3] = t3;
              var a3 = function(e4) {
                var t4 = c2[n3];
                if (r3) throw new Error("Memoizee error: Detected unordered then|done & finally resolution, which in turn makes proper detection of success/failure impossible (when in 'done:finally' mode)\nConsider to rely on 'then' or 'done' mode instead.");
                t4 && (delete c2[n3], d2[n3] = e4, s2.emit("setasync", n3, t4));
              }, o3 = function() {
                r3 = true, c2[n3] && (delete c2[n3], delete p2[n3], s2.delete(n3));
              }, i2 = u2;
              if ("then" === (i2 = i2 || "then")) {
                var l2 = function() {
                  m2(o3);
                };
                "function" == typeof (t3 = t3.then(function(e4) {
                  m2(a3.bind(this, e4));
                }, l2)).finally && t3.finally(l2);
              } else if ("done" === i2) {
                if ("function" != typeof t3.done) throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done' mode");
                t3.done(a3, o3);
              } else if ("done:finally" === i2) {
                if ("function" != typeof t3.done) throw new Error("Memoizee error: Retrieved promise does not implement 'done' in 'done:finally' mode");
                if ("function" != typeof t3.finally) throw new Error("Memoizee error: Retrieved promise does not implement 'finally' in 'done:finally' mode");
                t3.done(a3), t3.finally(o3);
              }
            } else d2[n3] = t3, s2.emit("setasync", n3, 1);
          }), s2.on("get", function(e3, t3, n3) {
            var r3, a3;
            c2[e3] ? ++c2[e3] : (r3 = p2[e3], a3 = function() {
              s2.emit("getasync", e3, t3, n3);
            }, f2(r3) ? "function" == typeof r3.done ? r3.done(a3) : r3.then(function() {
              m2(a3);
            }) : a3());
          }), s2.on("delete", function(e3) {
            var t3;
            delete p2[e3], c2[e3] ? delete c2[e3] : hasOwnProperty.call(d2, e3) && (t3 = d2[e3], delete d2[e3], s2.emit("deleteasync", e3, [t3]));
          }), s2.on("clear", function() {
            var e3 = d2;
            d2 = a2(null), c2 = a2(null), p2 = a2(null), s2.emit("clearasync", t2(e3, function(e4) {
              return [e4];
            }));
          });
        };
      }), pn = e(function() {
        var a2 = Je(), o2 = tt(), i2 = nt(), l2 = Function.prototype.apply;
        i2.dispose = function(n2, e2, t2) {
          var r2;
          a2(n2), t2.async && i2.async || t2.promise && i2.promise ? (e2.on("deleteasync", r2 = function(e3, t3) {
            l2.call(n2, null, t3);
          }), e2.on("clearasync", function(e3) {
            o2(e3, function(e4, t3) {
              r2(t3, e4);
            });
          })) : (e2.on("delete", r2 = function(e3, t3) {
            n2(t3);
          }), e2.on("clear", function(e3) {
            o2(e3, function(e4, t3) {
              r2(t3, e4);
            });
          }));
        };
      }), fn = e(function(e2, t2) {
        t2.exports = 2147483647;
      }), mn = e(function(e2, t2) {
        var n2 = Xe(), r2 = fn();
        t2.exports = function(e3) {
          if (e3 = n2(e3), r2 < e3) throw new TypeError(e3 + " exceeds maximum possible timeout");
          return e3;
        };
      }), hn = e(function() {
        var l2 = Lt(), u2 = tt(), s2 = tn(), c2 = cn(), d2 = mn(), p2 = nt(), f2 = Function.prototype, m2 = Math.max, h2 = Math.min, g2 = Object.create;
        p2.maxAge = function(t2, a2, o2) {
          var n2, e2, r2, i2;
          (t2 = d2(t2)) && (n2 = g2(null), e2 = o2.async && p2.async || o2.promise && p2.promise ? "async" : "", a2.on("set" + e2, function(e3) {
            n2[e3] = setTimeout(function() {
              a2.delete(e3);
            }, t2), "function" == typeof n2[e3].unref && n2[e3].unref(), i2 && (i2[e3] && "nextTick" !== i2[e3] && clearTimeout(i2[e3]), i2[e3] = setTimeout(function() {
              delete i2[e3];
            }, r2), "function" == typeof i2[e3].unref) && i2[e3].unref();
          }), a2.on("delete" + e2, function(e3) {
            clearTimeout(n2[e3]), delete n2[e3], i2 && ("nextTick" !== i2[e3] && clearTimeout(i2[e3]), delete i2[e3]);
          }), o2.preFetch && (r2 = true === o2.preFetch || isNaN(o2.preFetch) ? 0.333 : m2(h2(Number(o2.preFetch), 1), 0)) && (i2 = {}, r2 = (1 - r2) * t2, a2.on("get" + e2, function(t3, n3, r3) {
            i2[t3] || (i2[t3] = "nextTick", s2(function() {
              var e3;
              "nextTick" === i2[t3] && (delete i2[t3], a2.delete(t3), o2.async && (n3 = l2(n3)).push(f2), e3 = a2.memoized.apply(r3, n3), o2.promise) && c2(e3) && ("function" == typeof e3.done ? e3.done(f2, f2) : e3.then(f2, f2));
            }));
          })), a2.on("clear" + e2, function() {
            u2(n2, function(e3) {
              clearTimeout(e3);
            }), n2 = {}, i2 && (u2(i2, function(e3) {
              "nextTick" !== e3 && clearTimeout(e3);
            }), i2 = {});
          }));
        };
      }), gn = e(function(e2, t2) {
        var n2 = Xe(), c2 = Object.create, d2 = Object.prototype.hasOwnProperty;
        t2.exports = function(r2) {
          var a2, o2 = 0, i2 = 1, l2 = c2(null), u2 = c2(null), s2 = 0;
          return r2 = n2(r2), { hit: function(e3) {
            var t3 = u2[e3], n3 = ++s2;
            if (l2[n3] = e3, u2[e3] = n3, !t3) return ++o2 <= r2 ? void 0 : (e3 = l2[i2], a2(e3), e3);
            if (delete l2[t3], i2 === t3) for (; !d2.call(l2, ++i2); ) ;
          }, delete: a2 = function(e3) {
            var t3 = u2[e3];
            if (t3 && (delete l2[t3], delete u2[e3], --o2, i2 === t3)) if (o2) for (; !d2.call(l2, ++i2); ) ;
            else s2 = 0, i2 = 1;
          }, clear: function() {
            o2 = 0, i2 = 1, l2 = c2(null), u2 = c2(null), s2 = 0;
          } };
        };
      }), bn = e(function() {
        var a2 = Xe(), o2 = gn(), i2 = nt();
        i2.max = function(e2, t2, n2) {
          var r2;
          (e2 = a2(e2)) && (r2 = o2(e2), e2 = n2.async && i2.async || n2.promise && i2.promise ? "async" : "", t2.on("set" + e2, n2 = function(e3) {
            void 0 !== (e3 = r2.hit(e3)) && t2.delete(e3);
          }), t2.on("get" + e2, n2), t2.on("delete" + e2, r2.delete), t2.on("clear" + e2, r2.clear));
        };
      }), vn = e(function() {
        var a2 = Dt(), o2 = nt(), i2 = Object.create, l2 = Object.defineProperties;
        o2.refCounter = function(e2, t2, n2) {
          var r2 = i2(null), n2 = n2.async && o2.async || n2.promise && o2.promise ? "async" : "";
          t2.on("set" + n2, function(e3, t3) {
            r2[e3] = t3 || 1;
          }), t2.on("get" + n2, function(e3) {
            ++r2[e3];
          }), t2.on("delete" + n2, function(e3) {
            delete r2[e3];
          }), t2.on("clear" + n2, function() {
            r2 = {};
          }), l2(t2.memoized, { deleteRef: a2(function() {
            var e3 = t2.get(arguments);
            return null !== e3 && r2[e3] ? !--r2[e3] && (t2.delete(e3), true) : null;
          }), getRefCount: a2(function() {
            var e3 = t2.get(arguments);
            return null !== e3 && r2[e3] || 0;
          }) });
        };
      }), yn = e(function(e2, t2) {
        var r2 = Ue(), a2 = Ze(), o2 = Ht();
        t2.exports = function(e3) {
          var t3, n2 = r2(arguments[1]);
          return n2.normalizer || 0 !== (t3 = n2.length = a2(n2.length, e3.length, n2.async)) && (n2.primitive ? false === t3 ? n2.normalizer = Ut() : 1 < t3 && (n2.normalizer = Gt()(t3)) : n2.normalizer = false === t3 ? Zt()() : 1 === t3 ? Jt()() : Qt()(t3)), n2.async && nn(), n2.promise && dn(), n2.dispose && pn(), n2.maxAge && hn(), n2.max && bn(), n2.refCounter && vn(), o2(e3, n2);
        };
      }), wn = e(function(i2) {
        Object.defineProperty(i2, "__esModule", { value: true }), i2.isIdentStart = function(e2) {
          return "a" <= e2 && e2 <= "z" || "A" <= e2 && e2 <= "Z" || "-" === e2 || "_" === e2;
        }, i2.isIdent = function(e2) {
          return "a" <= e2 && e2 <= "z" || "A" <= e2 && e2 <= "Z" || "0" <= e2 && e2 <= "9" || "-" === e2 || "_" === e2;
        }, i2.isHex = function(e2) {
          return "a" <= e2 && e2 <= "f" || "A" <= e2 && e2 <= "F" || "0" <= e2 && e2 <= "9";
        }, i2.escapeIdentifier = function(e2) {
          for (var t2 = e2.length, n2 = "", r2 = 0; r2 < t2; ) {
            var a2 = e2.charAt(r2);
            if (i2.identSpecialChars[a2]) n2 += "\\" + a2;
            else if ("_" === a2 || "-" === a2 || "A" <= a2 && a2 <= "Z" || "a" <= a2 && a2 <= "z" || 0 !== r2 && "0" <= a2 && a2 <= "9") n2 += a2;
            else {
              a2 = a2.charCodeAt(0);
              if (55296 == (63488 & a2)) {
                var o2 = e2.charCodeAt(r2++);
                if (55296 != (64512 & a2) || 56320 != (64512 & o2)) throw Error("UCS-2(decode): illegal sequence");
                a2 = ((1023 & a2) << 10) + (1023 & o2) + 65536;
              }
              n2 += "\\" + a2.toString(16) + " ";
            }
            r2++;
          }
          return n2;
        }, i2.escapeStr = function(e2) {
          for (var t2, n2 = e2.length, r2 = "", a2 = 0; a2 < n2; ) {
            var o2 = e2.charAt(a2);
            '"' === o2 ? o2 = '\\"' : "\\" === o2 ? o2 = "\\\\" : void 0 !== (t2 = i2.strReplacementsRev[o2]) && (o2 = t2), r2 += o2, a2++;
          }
          return '"' + r2 + '"';
        }, i2.identSpecialChars = { "!": true, '"': true, "#": true, $: true, "%": true, "&": true, "'": true, "(": true, ")": true, "*": true, "+": true, ",": true, ".": true, "/": true, ";": true, "<": true, "=": true, ">": true, "?": true, "@": true, "[": true, "\\": true, "]": true, "^": true, "`": true, "{": true, "|": true, "}": true, "~": true }, i2.strReplacementsRev = { "\n": "\\n", "\r": "\\r", "	": "\\t", "\f": "\\f", "\v": "\\v" }, i2.singleQuoteEscapeChars = { n: "\n", r: "\r", t: "	", f: "\f", "\\": "\\", "'": "'" }, i2.doubleQuotesEscapeChars = { n: "\n", r: "\r", t: "	", f: "\f", "\\": "\\", '"': '"' };
      }), Dn = e(function(e2) {
        Object.defineProperty(e2, "__esModule", { value: true });
        var b2 = wn();
        e2.parseCssSelector = function(o2, i2, l2, u2, a2, s2) {
          var c2 = o2.length, d2 = "";
          function p2(e4, t2) {
            var n3 = "";
            for (i2++, d2 = o2.charAt(i2); i2 < c2; ) {
              if (d2 === e4) return i2++, n3;
              if ("\\" === d2) {
                i2++;
                var r2;
                if ((d2 = o2.charAt(i2)) === e4) n3 += e4;
                else if (void 0 !== (r2 = t2[d2])) n3 += r2;
                else {
                  if (b2.isHex(d2)) {
                    var a3 = d2;
                    for (i2++, d2 = o2.charAt(i2); b2.isHex(d2); ) a3 += d2, i2++, d2 = o2.charAt(i2);
                    " " === d2 && (i2++, d2 = o2.charAt(i2)), n3 += String.fromCharCode(parseInt(a3, 16));
                    continue;
                  }
                  n3 += d2;
                }
              } else n3 += d2;
              i2++, d2 = o2.charAt(i2);
            }
            return n3;
          }
          function f2() {
            var e4 = "";
            for (d2 = o2.charAt(i2); i2 < c2; ) {
              if (!b2.isIdent(d2)) {
                if ("\\" !== d2) return e4;
                if (c2 <= ++i2) throw Error("Expected symbol but end of file reached.");
                if (d2 = o2.charAt(i2), !b2.identSpecialChars[d2] && b2.isHex(d2)) {
                  var t2 = d2;
                  for (i2++, d2 = o2.charAt(i2); b2.isHex(d2); ) t2 += d2, i2++, d2 = o2.charAt(i2);
                  " " === d2 && (i2++, d2 = o2.charAt(i2)), e4 += String.fromCharCode(parseInt(t2, 16));
                  continue;
                }
              }
              e4 += d2, i2++, d2 = o2.charAt(i2);
            }
            return e4;
          }
          function m2() {
            d2 = o2.charAt(i2);
            for (; " " === d2 || "	" === d2 || "\n" === d2 || "\r" === d2 || "\f" === d2; ) i2++, d2 = o2.charAt(i2);
          }
          function h2() {
            var e4 = n2();
            if (!e4) return null;
            var t2 = e4;
            for (d2 = o2.charAt(i2); "," === d2; ) {
              if (i2++, m2(), "selectors" !== t2.type && (t2 = { type: "selectors", selectors: [e4] }), !(e4 = n2())) throw Error('Rule expected after ",".');
              t2.selectors.push(e4);
            }
            return t2;
          }
          function n2() {
            m2();
            var e4 = { type: "ruleSet" }, t2 = g2();
            if (!t2) return null;
            for (var n3 = e4; t2 && (t2.type = "rule", n3.rule = t2, n3 = t2, m2(), d2 = o2.charAt(i2), !(c2 <= i2 || "," === d2 || ")" === d2)); ) if (a2[d2]) {
              var r2 = d2;
              if (i2++, m2(), !(t2 = g2())) throw Error('Rule expected after "' + r2 + '".');
              t2.nestingOperator = r2;
            } else (t2 = g2()) && (t2.nestingOperator = null);
            return e4;
          }
          function g2() {
            for (var e4 = null; i2 < c2; ) if ("*" === (d2 = o2.charAt(i2))) i2++, (e4 = e4 || {}).tagName = "*";
            else if (b2.isIdentStart(d2) || "\\" === d2) (e4 = e4 || {}).tagName = f2();
            else if ("." === d2) i2++, ((e4 = e4 || {}).classNames = e4.classNames || []).push(f2());
            else if ("#" === d2) i2++, (e4 = e4 || {}).id = f2();
            else if ("[" === d2) {
              i2++, m2();
              var t2 = { name: f2() };
              if (m2(), "]" === d2) i2++;
              else {
                var n3 = "";
                if (u2[d2] && (n3 = d2, i2++, d2 = o2.charAt(i2)), c2 <= i2) throw Error('Expected "=" but end of file reached.');
                if ("=" !== d2) throw Error('Expected "=" but "' + d2 + '" found.');
                t2.operator = n3 + "=", i2++, m2();
                var r2 = "";
                if (t2.valueType = "string", '"' === d2) r2 = p2('"', b2.doubleQuotesEscapeChars);
                else if ("'" === d2) r2 = p2("'", b2.singleQuoteEscapeChars);
                else if (s2 && "$" === d2) i2++, r2 = f2(), t2.valueType = "substitute";
                else {
                  for (; i2 < c2 && "]" !== d2; ) r2 += d2, i2++, d2 = o2.charAt(i2);
                  r2 = r2.trim();
                }
                if (m2(), c2 <= i2) throw Error('Expected "]" but end of file reached.');
                if ("]" !== d2) throw Error('Expected "]" but "' + d2 + '" found.');
                i2++, t2.value = r2;
              }
              ((e4 = e4 || {}).attrs = e4.attrs || []).push(t2);
            } else {
              if (":" !== d2) break;
              i2++;
              n3 = f2(), t2 = { name: n3 };
              if ("(" === d2) {
                i2++;
                var a3 = "";
                if (m2(), "selector" === l2[n3]) t2.valueType = "selector", a3 = h2();
                else {
                  if (t2.valueType = l2[n3] || "string", '"' === d2) a3 = p2('"', b2.doubleQuotesEscapeChars);
                  else if ("'" === d2) a3 = p2("'", b2.singleQuoteEscapeChars);
                  else if (s2 && "$" === d2) i2++, a3 = f2(), t2.valueType = "substitute";
                  else {
                    for (; i2 < c2 && ")" !== d2; ) a3 += d2, i2++, d2 = o2.charAt(i2);
                    a3 = a3.trim();
                  }
                  m2();
                }
                if (c2 <= i2) throw Error('Expected ")" but end of file reached.');
                if (")" !== d2) throw Error('Expected ")" but "' + d2 + '" found.');
                i2++, t2.value = a3;
              }
              ((e4 = e4 || {}).pseudos = e4.pseudos || []).push(t2);
            }
            return e4;
          }
          var e3 = h2();
          if (i2 < c2) throw Error('Rule expected but "' + o2.charAt(i2) + '" found.');
          return e3;
        };
      }), xn = e(function(e2) {
        Object.defineProperty(e2, "__esModule", { value: true });
        var o2 = wn();
        e2.renderEntity = function t2(e3) {
          var n2 = "";
          switch (e3.type) {
            case "ruleSet":
              for (var r2 = e3.rule, a2 = []; r2; ) r2.nestingOperator && a2.push(r2.nestingOperator), a2.push(t2(r2)), r2 = r2.rule;
              n2 = a2.join(" ");
              break;
            case "selectors":
              n2 = e3.selectors.map(t2).join(", ");
              break;
            case "rule":
              e3.tagName && (n2 = "*" === e3.tagName ? "*" : o2.escapeIdentifier(e3.tagName)), e3.id && (n2 += "#" + o2.escapeIdentifier(e3.id)), e3.classNames && (n2 += e3.classNames.map(function(e4) {
                return "." + o2.escapeIdentifier(e4);
              }).join("")), e3.attrs && (n2 += e3.attrs.map(function(e4) {
                return "operator" in e4 ? "substitute" === e4.valueType ? "[" + o2.escapeIdentifier(e4.name) + e4.operator + "$" + e4.value + "]" : "[" + o2.escapeIdentifier(e4.name) + e4.operator + o2.escapeStr(e4.value) + "]" : "[" + o2.escapeIdentifier(e4.name) + "]";
              }).join("")), e3.pseudos && (n2 += e3.pseudos.map(function(e4) {
                return e4.valueType ? "selector" === e4.valueType ? ":" + o2.escapeIdentifier(e4.name) + "(" + t2(e4.value) + ")" : "substitute" === e4.valueType ? ":" + o2.escapeIdentifier(e4.name) + "($" + e4.value + ")" : "numeric" === e4.valueType ? ":" + o2.escapeIdentifier(e4.name) + "(" + e4.value + ")" : ":" + o2.escapeIdentifier(e4.name) + "(" + o2.escapeIdentifier(e4.value) + ")" : ":" + o2.escapeIdentifier(e4.name);
              }).join(""));
              break;
            default:
              throw Error('Unknown entity type: "' + e3.type + '".');
          }
          return n2;
        };
      }), En = e(function(e2) {
        Object.defineProperty(e2, "__esModule", { value: true });
        var t2 = Dn(), n2 = xn();
        function r2() {
          this.pseudos = {}, this.attrEqualityMods = {}, this.ruleNestingOperators = {}, this.substitutesEnabled = false;
        }
        r2.prototype.registerSelectorPseudos = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) this.pseudos[r3[n3]] = "selector";
          return this;
        }, r2.prototype.unregisterSelectorPseudos = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) delete this.pseudos[r3[n3]];
          return this;
        }, r2.prototype.registerNumericPseudos = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) this.pseudos[r3[n3]] = "numeric";
          return this;
        }, r2.prototype.unregisterNumericPseudos = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) delete this.pseudos[r3[n3]];
          return this;
        }, r2.prototype.registerNestingOperators = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) this.ruleNestingOperators[r3[n3]] = true;
          return this;
        }, r2.prototype.unregisterNestingOperators = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) delete this.ruleNestingOperators[r3[n3]];
          return this;
        }, r2.prototype.registerAttrEqualityMods = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) this.attrEqualityMods[r3[n3]] = true;
          return this;
        }, r2.prototype.unregisterAttrEqualityMods = function() {
          for (var e3 = [], t3 = 0; t3 < arguments.length; t3++) e3[t3] = arguments[t3];
          for (var n3 = 0, r3 = e3; n3 < r3.length; n3++) delete this.attrEqualityMods[r3[n3]];
          return this;
        }, r2.prototype.enableSubstitutes = function() {
          return this.substitutesEnabled = true, this;
        }, r2.prototype.disableSubstitutes = function() {
          return this.substitutesEnabled = false, this;
        }, r2.prototype.parse = function(e3) {
          return t2.parseCssSelector(e3, 0, this.pseudos, this.attrEqualityMods, this.ruleNestingOperators, this.substitutesEnabled);
        }, r2.prototype.render = function(e3) {
          return n2.renderEntity(e3).trim();
        }, e2.CssSelectorParser = r2;
      }), Fn = e(function(e2, t2) {
        var n2;
        n2 = function() {
          function u2(e4) {
            return "function" == typeof e4;
          }
          var n3 = Array.isArray || function(e4) {
            return "[object Array]" === Object.prototype.toString.call(e4);
          }, r2 = 0, t3 = void 0, a2 = void 0, i2 = function(e4, t4) {
            d2[r2] = e4, d2[r2 + 1] = t4, 2 === (r2 += 2) && (a2 ? a2(p2) : I2());
          };
          var e3 = void 0 !== window2 ? window2 : void 0, o2 = e3 || {}, o2 = o2.MutationObserver || o2.WebKitMutationObserver, l2 = "undefined" == typeof self && "undefined" != typeof process && "[object process]" === {}.toString.call(process), s2 = "undefined" != typeof Uint8ClampedArray && "undefined" != typeof importScripts && "undefined" != typeof MessageChannel;
          function c2() {
            var e4 = setTimeout;
            return function() {
              return e4(p2, 1);
            };
          }
          var d2 = new Array(1e3);
          function p2() {
            for (var e4 = 0; e4 < r2; e4 += 2) (0, d2[e4])(d2[e4 + 1]), d2[e4] = void 0, d2[e4 + 1] = void 0;
            r2 = 0;
          }
          function f2() {
            try {
              var e4 = Function("return this")().require("vertx");
              return void 0 !== (t3 = e4.runOnLoop || e4.runOnContext) ? function() {
                t3(p2);
              } : c2();
            } catch (e5) {
              return c2();
            }
          }
          var m2, h2, g2, I2 = void 0;
          function b2(e4, t4) {
            var n4, r3 = this, a3 = new this.constructor(w2), o3 = (void 0 === a3[y2] && _2(a3), r3._state);
            return o3 ? (n4 = arguments[o3 - 1], i2(function() {
              return R2(o3, a3, n4, r3._result);
            })) : N2(r3, a3, e4, t4), a3;
          }
          function v2(e4) {
            var t4;
            return e4 && "object" === te(e4) && e4.constructor === this ? e4 : (A2(t4 = new this(w2), e4), t4);
          }
          var I2 = l2 ? function() {
            return process.nextTick(p2);
          } : o2 ? (h2 = 0, l2 = new o2(p2), g2 = document.createTextNode(""), l2.observe(g2, { characterData: true }), function() {
            g2.data = h2 = ++h2 % 2;
          }) : s2 ? ((m2 = new MessageChannel()).port1.onmessage = p2, function() {
            return m2.port2.postMessage(0);
          }) : (void 0 === e3 ? f2 : c2)(), y2 = Math.random().toString(36).substring(2);
          function w2() {
          }
          var D2 = void 0, x2 = 1, E2 = 2;
          function B2(e4, r3, a3) {
            i2(function(t4) {
              var n4 = false, e5 = function(e6, t5, n5, r4) {
                try {
                  e6.call(t5, n5, r4);
                } catch (e7) {
                  return e7;
                }
              }(a3, r3, function(e6) {
                n4 || (n4 = true, (r3 !== e6 ? A2 : C2)(t4, e6));
              }, function(e6) {
                n4 || (n4 = true, k2(t4, e6));
              }, t4._label);
              !n4 && e5 && (n4 = true, k2(t4, e5));
            }, e4);
          }
          function F2(e4, t4, n4) {
            var r3, a3;
            t4.constructor === e4.constructor && n4 === b2 && t4.constructor.resolve === v2 ? (r3 = e4, (a3 = t4)._state === x2 ? C2(r3, a3._result) : a3._state === E2 ? k2(r3, a3._result) : N2(a3, void 0, function(e5) {
              return A2(r3, e5);
            }, function(e5) {
              return k2(r3, e5);
            })) : void 0 !== n4 && u2(n4) ? B2(e4, t4, n4) : C2(e4, t4);
          }
          function A2(t4, e4) {
            if (t4 === e4) k2(t4, new TypeError("You cannot resolve a promise with itself"));
            else if (r3 = te(n4 = e4), null === n4 || "object" !== r3 && "function" !== r3) C2(t4, e4);
            else {
              n4 = void 0;
              try {
                n4 = e4.then;
              } catch (e5) {
                return void k2(t4, e5);
              }
              F2(t4, e4, n4);
            }
            var n4, r3;
          }
          function j2(e4) {
            e4._onerror && e4._onerror(e4._result), T2(e4);
          }
          function C2(e4, t4) {
            e4._state === D2 && (e4._result = t4, e4._state = x2, 0 !== e4._subscribers.length) && i2(T2, e4);
          }
          function k2(e4, t4) {
            e4._state === D2 && (e4._state = E2, e4._result = t4, i2(j2, e4));
          }
          function N2(e4, t4, n4, r3) {
            var a3 = e4._subscribers, o3 = a3.length;
            e4._onerror = null, a3[o3] = t4, a3[o3 + x2] = n4, a3[o3 + E2] = r3, 0 === o3 && e4._state && i2(T2, e4);
          }
          function T2(e4) {
            var t4 = e4._subscribers, n4 = e4._state;
            if (0 !== t4.length) {
              for (var r3, a3 = void 0, o3 = e4._result, i3 = 0; i3 < t4.length; i3 += 3) r3 = t4[i3], a3 = t4[i3 + n4], r3 ? R2(n4, r3, a3, o3) : a3(o3);
              e4._subscribers.length = 0;
            }
          }
          function R2(e4, t4, n4, r3) {
            var a3 = u2(n4), o3 = void 0, i3 = void 0, l3 = true;
            if (a3) {
              try {
                o3 = n4(r3);
              } catch (e5) {
                l3 = false, i3 = e5;
              }
              if (t4 === o3) return void k2(t4, new TypeError("A promises callback cannot return that same promise."));
            } else o3 = r3;
            t4._state === D2 && (a3 && l3 ? A2(t4, o3) : false === l3 ? k2(t4, i3) : e4 === x2 ? C2(t4, o3) : e4 === E2 && k2(t4, o3));
          }
          var O2 = 0;
          function _2(e4) {
            e4[y2] = O2++, e4._state = void 0, e4._result = void 0, e4._subscribers = [];
          }
          S2.prototype._enumerate = function(e4) {
            for (var t4 = 0; this._state === D2 && t4 < e4.length; t4++) this._eachEntry(e4[t4], t4);
          }, S2.prototype._eachEntry = function(t4, e4) {
            var n4 = this._instanceConstructor, r3 = n4.resolve;
            if (r3 === v2) {
              var a3, o3 = void 0, i3 = void 0, l3 = false;
              try {
                o3 = t4.then;
              } catch (e5) {
                l3 = true, i3 = e5;
              }
              o3 === b2 && t4._state !== D2 ? this._settledAt(t4._state, e4, t4._result) : "function" != typeof o3 ? (this._remaining--, this._result[e4] = t4) : n4 === M2 ? (a3 = new n4(w2), l3 ? k2(a3, i3) : F2(a3, t4, o3), this._willSettleAt(a3, e4)) : this._willSettleAt(new n4(function(e5) {
                return e5(t4);
              }), e4);
            } else this._willSettleAt(r3(t4), e4);
          }, S2.prototype._settledAt = function(e4, t4, n4) {
            var r3 = this.promise;
            r3._state === D2 && (this._remaining--, e4 === E2 ? k2(r3, n4) : this._result[t4] = n4), 0 === this._remaining && C2(r3, this._result);
          }, S2.prototype._willSettleAt = function(e4, t4) {
            var n4 = this;
            N2(e4, void 0, function(e5) {
              return n4._settledAt(x2, t4, e5);
            }, function(e5) {
              return n4._settledAt(E2, t4, e5);
            });
          };
          var L2 = S2;
          function S2(e4, t4) {
            this._instanceConstructor = e4, this.promise = new e4(w2), this.promise[y2] || _2(this.promise), n3(t4) ? (this.length = t4.length, this._remaining = t4.length, this._result = new Array(this.length), 0 !== this.length && (this.length = this.length || 0, this._enumerate(t4), 0 !== this._remaining) || C2(this.promise, this._result)) : k2(this.promise, new Error("Array Methods must be provided an Array"));
          }
          P2.prototype.catch = function(e4) {
            return this.then(null, e4);
          }, P2.prototype.finally = function(t4) {
            var n4 = this.constructor;
            return u2(t4) ? this.then(function(e4) {
              return n4.resolve(t4()).then(function() {
                return e4;
              });
            }, function(e4) {
              return n4.resolve(t4()).then(function() {
                throw e4;
              });
            }) : this.then(t4, t4);
          };
          var M2 = P2;
          function P2(e4) {
            if (this[y2] = O2++, this._result = this._state = void 0, this._subscribers = [], w2 !== e4) {
              if ("function" != typeof e4) throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
              if (!(this instanceof P2)) throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
              var t4 = this;
              try {
                e4(function(e5) {
                  A2(t4, e5);
                }, function(e5) {
                  k2(t4, e5);
                });
              } catch (e5) {
                k2(t4, e5);
              }
            }
          }
          return M2.prototype.then = b2, M2.all = function(e4) {
            return new L2(this, e4).promise;
          }, M2.race = function(a3) {
            var o3 = this;
            return n3(a3) ? new o3(function(e4, t4) {
              for (var n4 = a3.length, r3 = 0; r3 < n4; r3++) o3.resolve(a3[r3]).then(e4, t4);
            }) : new o3(function(e4, t4) {
              return t4(new TypeError("You must pass an array to race."));
            });
          }, M2.resolve = v2, M2.reject = function(e4) {
            var t4 = new this(w2);
            return k2(t4, e4), t4;
          }, M2._setScheduler = function(e4) {
            a2 = e4;
          }, M2._setAsap = function(e4) {
            i2 = e4;
          }, M2._asap = i2, M2.polyfill = function() {
            var e4 = void 0;
            if (void 0 !== q) e4 = q;
            else if ("undefined" != typeof self) e4 = self;
            else try {
              e4 = Function("return this")();
            } catch (e5) {
              throw new Error("polyfill failed because global object is unavailable in this environment");
            }
            var t4 = e4.Promise;
            if (t4) {
              var n4 = null;
              try {
                n4 = Object.prototype.toString.call(t4.resolve());
              } catch (e5) {
              }
              if ("[object Promise]" === n4 && !t4.cast) return;
            }
            e4.Promise = M2;
          }, M2.Promise = M2;
        }, "object" === te(e2 = e2) && void 0 !== t2 ? t2.exports = n2() : "function" == typeof define && define.amd ? define(n2) : e2.ES6Promise = n2();
      }), t = e(function(l2) {
        var t2, n2, r2 = 1e5, p2 = (t2 = Object.prototype.toString, n2 = Object.prototype.hasOwnProperty, { Class: function(e3) {
          return t2.call(e3).replace(/^\[object *|\]$/g, "");
        }, HasProperty: function(e3, t3) {
          return t3 in e3;
        }, HasOwnProperty: function(e3, t3) {
          return n2.call(e3, t3);
        }, IsCallable: function(e3) {
          return "function" == typeof e3;
        }, ToInt32: function(e3) {
          return e3 >> 0;
        }, ToUint32: function(e3) {
          return e3 >>> 0;
        } }), f2 = Math.LN2, m2 = Math.abs, h2 = Math.floor, g2 = Math.log, b2 = Math.min, v2 = Math.pow, I2 = Math.round;
        function a2(e3, t3, n3) {
          return e3 < t3 ? t3 : n3 < e3 ? n3 : e3;
        }
        var o2, e2, i2, u2, s2, c2, d2, y2, w2, D2, x2, E2 = Object.getOwnPropertyNames || function(e3) {
          if (e3 !== Object(e3)) throw new TypeError("Object.getOwnPropertyNames called on non-object");
          var t3, n3 = [];
          for (t3 in e3) p2.HasOwnProperty(e3, t3) && n3.push(t3);
          return n3;
        };
        function F2(e3) {
          if (E2 && o2) for (var t3 = E2(e3), n3 = 0; n3 < t3.length; n3 += 1) o2(e3, t3[n3], { value: e3[t3[n3]], writable: false, enumerable: false, configurable: false });
        }
        function B2(n3) {
          if (o2) {
            if (n3.length > r2) throw new RangeError("Array too large for polyfill");
            for (var e3 = 0; e3 < n3.length; e3 += 1) !function(t3) {
              o2(n3, t3, { get: function() {
                return n3._getter(t3);
              }, set: function(e4) {
                n3._setter(t3, e4);
              }, enumerable: true, configurable: false });
            }(e3);
          }
        }
        function A2(e3, t3) {
          t3 = 32 - t3;
          return e3 << t3 >> t3;
        }
        function C2(e3, t3) {
          t3 = 32 - t3;
          return e3 << t3 >>> t3;
        }
        function j2(e3) {
          return [255 & e3];
        }
        function L2(e3) {
          return A2(e3[0], 8);
        }
        function q2(e3) {
          return [255 & e3];
        }
        function k2(e3) {
          return C2(e3[0], 8);
        }
        function z2(e3) {
          return [(e3 = I2(Number(e3))) < 0 ? 0 : 255 < e3 ? 255 : 255 & e3];
        }
        function V2(e3) {
          return [e3 >> 8 & 255, 255 & e3];
        }
        function $2(e3) {
          return A2(e3[0] << 8 | e3[1], 16);
        }
        function H2(e3) {
          return [e3 >> 8 & 255, 255 & e3];
        }
        function U2(e3) {
          return C2(e3[0] << 8 | e3[1], 16);
        }
        function G2(e3) {
          return [e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3];
        }
        function W2(e3) {
          return A2(e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], 32);
        }
        function Y2(e3) {
          return [e3 >> 24 & 255, e3 >> 16 & 255, e3 >> 8 & 255, 255 & e3];
        }
        function K2(e3) {
          return C2(e3[0] << 24 | e3[1] << 16 | e3[2] << 8 | e3[3], 32);
        }
        function N2(e3, t3, n3) {
          var r3, a3, o3, i3, l3, u3, s3, c3 = (1 << t3 - 1) - 1;
          function d3(e4) {
            var t4 = h2(e4), e4 = e4 - t4;
            return !(e4 < 0.5) && (0.5 < e4 || t4 % 2) ? t4 + 1 : t4;
          }
          for (e3 != e3 ? (a3 = (1 << t3) - 1, o3 = v2(2, n3 - 1), r3 = 0) : e3 === 1 / 0 || e3 === -1 / 0 ? (a3 = (1 << t3) - 1, r3 = e3 < (o3 = 0) ? 1 : 0) : 0 === e3 ? r3 = 1 / e3 == -1 / (o3 = a3 = 0) ? 1 : 0 : (r3 = e3 < 0, (e3 = m2(e3)) >= v2(2, 1 - c3) ? (a3 = b2(h2(g2(e3) / f2), 1023), 2 <= (o3 = d3(e3 / v2(2, a3) * v2(2, n3))) / v2(2, n3) && (a3 += 1, o3 = 1), c3 < a3 ? (a3 = (1 << t3) - 1, o3 = 0) : (a3 += c3, o3 -= v2(2, n3))) : (a3 = 0, o3 = d3(e3 / v2(2, 1 - c3 - n3)))), l3 = [], i3 = n3; i3; --i3) l3.push(o3 % 2 ? 1 : 0), o3 = h2(o3 / 2);
          for (i3 = t3; i3; --i3) l3.push(a3 % 2 ? 1 : 0), a3 = h2(a3 / 2);
          for (l3.push(r3 ? 1 : 0), l3.reverse(), u3 = l3.join(""), s3 = []; u3.length; ) s3.push(parseInt(u3.substring(0, 8), 2)), u3 = u3.substring(8);
          return s3;
        }
        function T2(e3, t3, n3) {
          for (var r3, a3, o3, i3, l3, u3, s3 = [], c3 = e3.length; c3; --c3) for (a3 = e3[c3 - 1], r3 = 8; r3; --r3) s3.push(a3 % 2 ? 1 : 0), a3 >>= 1;
          return s3.reverse(), u3 = s3.join(""), o3 = (1 << t3 - 1) - 1, i3 = parseInt(u3.substring(0, 1), 2) ? -1 : 1, l3 = parseInt(u3.substring(1, 1 + t3), 2), u3 = parseInt(u3.substring(1 + t3), 2), l3 === (1 << t3) - 1 ? 0 === u3 ? 1 / 0 * i3 : NaN : 0 < l3 ? i3 * v2(2, l3 - o3) * (1 + u3 / v2(2, n3)) : 0 !== u3 ? i3 * v2(2, -(o3 - 1)) * (u3 / v2(2, n3)) : i3 < 0 ? -0 : 0;
        }
        function X2(e3) {
          return T2(e3, 11, 52);
        }
        function Z2(e3) {
          return N2(e3, 11, 52);
        }
        function J2(e3) {
          return T2(e3, 8, 23);
        }
        function Q2(e3) {
          return N2(e3, 8, 23);
        }
        function R2(e3) {
          if ((e3 = p2.ToInt32(e3)) < 0) throw new RangeError("ArrayBuffer size is not a small enough positive integer");
          var t3;
          for (this.byteLength = e3, this._bytes = [], this._bytes.length = e3, t3 = 0; t3 < this.byteLength; t3 += 1) this._bytes[t3] = 0;
          F2(this);
        }
        function ee2() {
        }
        function O2(e3, t3, n3) {
          var l3 = function(e4, t4, n4) {
            var r3, a3, o3, i3;
            if (arguments.length && "number" != typeof e4) if ("object" === te(e4) && e4.constructor === l3) for (this.length = (r3 = e4).length, this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new R2(this.byteLength), o3 = this.byteOffset = 0; o3 < this.length; o3 += 1) this._setter(o3, r3._getter(o3));
            else if ("object" !== te(e4) || (e4 instanceof R2 || "ArrayBuffer" === p2.Class(e4))) {
              if ("object" !== te(e4) || !(e4 instanceof R2 || "ArrayBuffer" === p2.Class(e4))) throw new TypeError("Unexpected argument type(s)");
              if (this.buffer = e4, this.byteOffset = p2.ToUint32(t4), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
              if (this.byteOffset % this.BYTES_PER_ELEMENT) throw new RangeError("ArrayBuffer length minus the byteOffset is not a multiple of the element size.");
              if (arguments.length < 3) {
                if (this.byteLength = this.buffer.byteLength - this.byteOffset, this.byteLength % this.BYTES_PER_ELEMENT) throw new RangeError("length of buffer minus byteOffset not a multiple of the element size");
                this.length = this.byteLength / this.BYTES_PER_ELEMENT;
              } else this.length = p2.ToUint32(n4), this.byteLength = this.length * this.BYTES_PER_ELEMENT;
              if (this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
            } else for (this.length = p2.ToUint32((a3 = e4).length), this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new R2(this.byteLength), o3 = this.byteOffset = 0; o3 < this.length; o3 += 1) i3 = a3[o3], this._setter(o3, Number(i3));
            else {
              if (this.length = p2.ToInt32(e4), n4 < 0) throw new RangeError("ArrayBufferView size is not a small enough positive integer");
              this.byteLength = this.length * this.BYTES_PER_ELEMENT, this.buffer = new R2(this.byteLength), this.byteOffset = 0;
            }
            this.constructor = l3, F2(this), B2(this);
          };
          return (l3.prototype = new ee2()).BYTES_PER_ELEMENT = e3, l3.prototype._pack = t3, l3.prototype._unpack = n3, l3.BYTES_PER_ELEMENT = e3, l3.prototype.get = l3.prototype._getter = function(e4) {
            if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
            if (!((e4 = p2.ToUint32(e4)) >= this.length)) {
              for (var t4 = [], n4 = 0, r3 = this.byteOffset + e4 * this.BYTES_PER_ELEMENT; n4 < this.BYTES_PER_ELEMENT; n4 += 1, r3 += 1) t4.push(this.buffer._bytes[r3]);
              return this._unpack(t4);
            }
          }, l3.prototype._setter = function(e4, t4) {
            if (arguments.length < 2) throw new SyntaxError("Not enough arguments");
            if ((e4 = p2.ToUint32(e4)) < this.length) for (var n4 = this._pack(t4), r3 = 0, a3 = this.byteOffset + e4 * this.BYTES_PER_ELEMENT; r3 < this.BYTES_PER_ELEMENT; r3 += 1, a3 += 1) this.buffer._bytes[a3] = n4[r3];
          }, l3.prototype.set = function(e4, t4) {
            if (arguments.length < 1) throw new SyntaxError("Not enough arguments");
            var n4, r3, a3, o3, i3, l4, u3, s3, c3, d3;
            if ("object" === te(e4) && e4.constructor === this.constructor) {
              if (n4 = e4, (a3 = p2.ToUint32(t4)) + n4.length > this.length) throw new RangeError("Offset plus length of array is out of range");
              if (s3 = this.byteOffset + a3 * this.BYTES_PER_ELEMENT, c3 = n4.length * this.BYTES_PER_ELEMENT, n4.buffer === this.buffer) {
                for (d3 = [], i3 = 0, l4 = n4.byteOffset; i3 < c3; i3 += 1, l4 += 1) d3[i3] = n4.buffer._bytes[l4];
                for (i3 = 0, u3 = s3; i3 < c3; i3 += 1, u3 += 1) this.buffer._bytes[u3] = d3[i3];
              } else for (i3 = 0, l4 = n4.byteOffset, u3 = s3; i3 < c3; i3 += 1, l4 += 1, u3 += 1) this.buffer._bytes[u3] = n4.buffer._bytes[l4];
            } else {
              if ("object" !== te(e4) || void 0 === e4.length) throw new TypeError("Unexpected argument type(s)");
              if (o3 = p2.ToUint32((r3 = e4).length), (a3 = p2.ToUint32(t4)) + o3 > this.length) throw new RangeError("Offset plus length of array is out of range");
              for (i3 = 0; i3 < o3; i3 += 1) l4 = r3[i3], this._setter(a3 + i3, Number(l4));
            }
          }, l3.prototype.subarray = function(e4, t4) {
            e4 = p2.ToInt32(e4), t4 = p2.ToInt32(t4), arguments.length < 1 && (e4 = 0), arguments.length < 2 && (t4 = this.length), e4 < 0 && (e4 = this.length + e4), t4 < 0 && (t4 = this.length + t4), e4 = a2(e4, 0, this.length);
            t4 = (t4 = a2(t4, 0, this.length)) - e4;
            return new this.constructor(this.buffer, this.byteOffset + e4 * this.BYTES_PER_ELEMENT, t4 = t4 < 0 ? 0 : t4);
          }, l3;
        }
        function _2(e3, t3) {
          return p2.IsCallable(e3.get) ? e3.get(t3) : e3[t3];
        }
        function S2(e3, t3, n3) {
          if (0 === arguments.length) e3 = new l2.ArrayBuffer(0);
          else if (!(e3 instanceof l2.ArrayBuffer || "ArrayBuffer" === p2.Class(e3))) throw new TypeError("TypeError");
          if (this.buffer = e3 || new l2.ArrayBuffer(0), this.byteOffset = p2.ToUint32(t3), this.byteOffset > this.buffer.byteLength) throw new RangeError("byteOffset out of range");
          if (this.byteLength = arguments.length < 3 ? this.buffer.byteLength - this.byteOffset : p2.ToUint32(n3), this.byteOffset + this.byteLength > this.buffer.byteLength) throw new RangeError("byteOffset and length reference an area beyond the end of the buffer");
          F2(this);
        }
        function M2(o3) {
          return function(e3, t3) {
            if ((e3 = p2.ToUint32(e3)) + o3.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
            e3 += this.byteOffset;
            for (var n3 = new l2.Uint8Array(this.buffer, e3, o3.BYTES_PER_ELEMENT), r3 = [], a3 = 0; a3 < o3.BYTES_PER_ELEMENT; a3 += 1) r3.push(_2(n3, a3));
            return Boolean(t3) === Boolean(x2) && r3.reverse(), _2(new o3(new l2.Uint8Array(r3).buffer), 0);
          };
        }
        function P2(i3) {
          return function(e3, t3, n3) {
            if ((e3 = p2.ToUint32(e3)) + i3.BYTES_PER_ELEMENT > this.byteLength) throw new RangeError("Array index out of range");
            for (var t3 = new i3([t3]), r3 = new l2.Uint8Array(t3.buffer), a3 = [], o3 = 0; o3 < i3.BYTES_PER_ELEMENT; o3 += 1) a3.push(_2(r3, o3));
            Boolean(n3) === Boolean(x2) && a3.reverse(), new l2.Uint8Array(this.buffer, e3, i3.BYTES_PER_ELEMENT).set(a3);
          };
        }
        o2 = Object.defineProperty && function() {
          try {
            return Object.defineProperty({}, "x", {}), 1;
          } catch (e3) {
          }
        }() ? Object.defineProperty : function(e3, t3, n3) {
          if (!e3 === Object(e3)) throw new TypeError("Object.defineProperty called on non-object");
          return p2.HasProperty(n3, "get") && Object.prototype.__defineGetter__ && Object.prototype.__defineGetter__.call(e3, t3, n3.get), p2.HasProperty(n3, "set") && Object.prototype.__defineSetter__ && Object.prototype.__defineSetter__.call(e3, t3, n3.set), p2.HasProperty(n3, "value") && (e3[t3] = n3.value), e3;
        }, l2.ArrayBuffer = l2.ArrayBuffer || R2, D2 = O2(1, j2, L2), e2 = O2(1, q2, k2), i2 = O2(1, z2, k2), u2 = O2(2, V2, $2), s2 = O2(2, H2, U2), c2 = O2(4, G2, W2), d2 = O2(4, Y2, K2), y2 = O2(4, Q2, J2), w2 = O2(8, Z2, X2), l2.Int8Array = l2.Int8Array || D2, l2.Uint8Array = l2.Uint8Array || e2, l2.Uint8ClampedArray = l2.Uint8ClampedArray || i2, l2.Int16Array = l2.Int16Array || u2, l2.Uint16Array = l2.Uint16Array || s2, l2.Int32Array = l2.Int32Array || c2, l2.Uint32Array = l2.Uint32Array || d2, l2.Float32Array = l2.Float32Array || y2, l2.Float64Array = l2.Float64Array || w2, D2 = new l2.Uint16Array([4660]), x2 = 18 === _2(new l2.Uint8Array(D2.buffer), 0), S2.prototype.getUint8 = M2(l2.Uint8Array), S2.prototype.getInt8 = M2(l2.Int8Array), S2.prototype.getUint16 = M2(l2.Uint16Array), S2.prototype.getInt16 = M2(l2.Int16Array), S2.prototype.getUint32 = M2(l2.Uint32Array), S2.prototype.getInt32 = M2(l2.Int32Array), S2.prototype.getFloat32 = M2(l2.Float32Array), S2.prototype.getFloat64 = M2(l2.Float64Array), S2.prototype.setUint8 = P2(l2.Uint8Array), S2.prototype.setInt8 = P2(l2.Int8Array), S2.prototype.setUint16 = P2(l2.Uint16Array), S2.prototype.setInt16 = P2(l2.Int16Array), S2.prototype.setUint32 = P2(l2.Uint32Array), S2.prototype.setInt32 = P2(l2.Int32Array), S2.prototype.setFloat32 = P2(l2.Float32Array), S2.prototype.setFloat64 = P2(l2.Float64Array), l2.DataView = l2.DataView || S2;
      }), An = e(function(e2) {
        function t2() {
          if (void 0 === this) throw new TypeError("Constructor WeakMap requires 'new'");
          if (l2(this, "_id", "_WeakMap_" + n2() + "." + n2()), 0 < arguments.length) throw new TypeError("WeakMap iterable is not supported");
        }
        function r2(e3, t3) {
          if (!a2(e3) || !o2.call(e3, "_id")) throw new TypeError(t3 + " method called on incompatible receiver " + te(e3));
        }
        function n2() {
          return Math.random().toString().substring(2);
        }
        function a2(e3) {
          return Object(e3) === e3;
        }
        var o2, i2, l2;
        (e2 = "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : void 0 !== window2 ? window2 : void 0 !== q ? q : e2).WeakMap || (o2 = Object.prototype.hasOwnProperty, i2 = Object.defineProperty && function() {
          try {
            return 1 === Object.defineProperty({}, "x", { value: 1 }).x;
          } catch (e3) {
          }
        }(), e2.WeakMap = ((l2 = function(e3, t3, n3) {
          i2 ? Object.defineProperty(e3, t3, { configurable: true, writable: true, value: n3 }) : e3[t3] = n3;
        })(t2.prototype, "delete", function(e3) {
          var t3;
          return r2(this, "delete"), !!a2(e3) && !(!(t3 = e3[this._id]) || t3[0] !== e3 || (delete e3[this._id], 0));
        }), l2(t2.prototype, "get", function(e3) {
          var t3;
          return r2(this, "get"), a2(e3) && (t3 = e3[this._id]) && t3[0] === e3 ? t3[1] : void 0;
        }), l2(t2.prototype, "has", function(e3) {
          var t3;
          return r2(this, "has"), !!a2(e3) && !(!(t3 = e3[this._id]) || t3[0] !== e3);
        }), l2(t2.prototype, "set", function(e3, t3) {
          var n3;
          if (r2(this, "set"), a2(e3)) return (n3 = e3[this._id]) && n3[0] === e3 ? n3[1] = t3 : l2(e3, this._id, [e3, t3]), this;
          throw new TypeError("Invalid value used as weak map key");
        }), l2(t2, "_polyfill", true), t2));
      }), Cn = e(function(e2, t2) {
        function n2(e3) {
          return e3 && e3.Math === Math && e3;
        }
        t2.exports = n2("object" == ("undefined" == typeof globalThis ? "undefined" : te(globalThis)) && globalThis) || n2("object" == (void 0 === window2 ? "undefined" : te(window2)) && window2) || n2("object" == ("undefined" == typeof self ? "undefined" : te(self)) && self) || n2("object" == (void 0 === q ? "undefined" : te(q)) && q) || /* @__PURE__ */ function() {
          return this;
        }() || e2 || Function("return this")();
      }), kn = e(function(e2, t2) {
        t2.exports = function(e3) {
          try {
            return !!e3();
          } catch (e4) {
            return true;
          }
        };
      }), Nn = e(function(e2, t2) {
        var n2 = kn();
        t2.exports = !n2(function() {
          var e3 = function() {
          }.bind();
          return "function" != typeof e3 || e3.hasOwnProperty("prototype");
        });
      }), Tn = e(function(e2, t2) {
        var n2 = Nn(), r2 = Function.prototype, a2 = r2.apply, o2 = r2.call;
        t2.exports = "object" == ("undefined" == typeof Reflect ? "undefined" : te(Reflect)) && Reflect.apply || (n2 ? o2.bind(a2) : function() {
          return o2.apply(a2, arguments);
        });
      }), Rn = e(function(e2, t2) {
        var n2 = Nn(), r2 = Function.prototype, a2 = r2.call, r2 = n2 && r2.bind.bind(a2, a2);
        t2.exports = n2 ? r2 : function(e3) {
          return function() {
            return a2.apply(e3, arguments);
          };
        };
      }), On = e(function(e2, t2) {
        var n2 = Rn(), r2 = n2({}.toString), a2 = n2("".slice);
        t2.exports = function(e3) {
          return a2(r2(e3), 8, -1);
        };
      }), _n = e(function(e2, t2) {
        var n2 = On(), r2 = Rn();
        t2.exports = function(e3) {
          if ("Function" === n2(e3)) return r2(e3);
        };
      }), Sn = e(function(e2, t2) {
        var n2 = "object" == (void 0 === document ? "undefined" : te(document)) && document.all;
        t2.exports = { all: n2, IS_HTMLDDA: void 0 === n2 && void 0 !== n2 };
      }), Mn = e(function(e2, t2) {
        var n2 = Sn(), r2 = n2.all;
        t2.exports = n2.IS_HTMLDDA ? function(e3) {
          return "function" == typeof e3 || e3 === r2;
        } : function(e3) {
          return "function" == typeof e3;
        };
      }), Pn = e(function(e2, t2) {
        var n2 = kn();
        t2.exports = !n2(function() {
          return 7 !== Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1];
        });
      }), In = e(function(e2, t2) {
        var n2 = Nn(), r2 = Function.prototype.call;
        t2.exports = n2 ? r2.bind(r2) : function() {
          return r2.apply(r2, arguments);
        };
      }), Bn = e(function(e2) {
        var t2 = {}.propertyIsEnumerable, n2 = Object.getOwnPropertyDescriptor, r2 = n2 && !t2.call({ 1: 2 }, 1);
        e2.f = r2 ? function(e3) {
          e3 = n2(this, e3);
          return !!e3 && e3.enumerable;
        } : t2;
      }), jn = e(function(e2, t2) {
        t2.exports = function(e3, t3) {
          return { enumerable: !(1 & e3), configurable: !(2 & e3), writable: !(4 & e3), value: t3 };
        };
      }), Ln = e(function(e2, t2) {
        var n2 = Rn(), r2 = kn(), a2 = On(), o2 = Object, i2 = n2("".split);
        t2.exports = r2(function() {
          return !o2("z").propertyIsEnumerable(0);
        }) ? function(e3) {
          return "String" === a2(e3) ? i2(e3, "") : o2(e3);
        } : o2;
      }), qn = e(function(e2, t2) {
        t2.exports = function(e3) {
          return null == e3;
        };
      }), zn = e(function(e2, t2) {
        var n2 = qn(), r2 = TypeError;
        t2.exports = function(e3) {
          if (n2(e3)) throw new r2("Can't call method on " + e3);
          return e3;
        };
      }), Vn = e(function(e2, t2) {
        var n2 = Ln(), r2 = zn();
        t2.exports = function(e3) {
          return n2(r2(e3));
        };
      }), $n = e(function(e2, t2) {
        var n2 = Mn(), r2 = Sn(), a2 = r2.all;
        t2.exports = r2.IS_HTMLDDA ? function(e3) {
          return "object" == te(e3) ? null !== e3 : n2(e3) || e3 === a2;
        } : function(e3) {
          return "object" == te(e3) ? null !== e3 : n2(e3);
        };
      }), Hn = e(function(e2, t2) {
        t2.exports = {};
      }), Un = e(function(e2, t2) {
        function n2(e3) {
          return o2(e3) ? e3 : void 0;
        }
        var r2 = Hn(), a2 = Cn(), o2 = Mn();
        t2.exports = function(e3, t3) {
          return arguments.length < 2 ? n2(r2[e3]) || n2(a2[e3]) : r2[e3] && r2[e3][t3] || a2[e3] && a2[e3][t3];
        };
      }), Gn = e(function(e2, t2) {
        var n2 = Rn();
        t2.exports = n2({}.isPrototypeOf);
      }), Wn = e(function(e2, t2) {
        t2.exports = "undefined" != typeof navigator && String(navigator.userAgent) || "";
      }), Yn = e(function(e2, t2) {
        var n2, r2, a2 = Cn(), o2 = Wn(), i2 = a2.process, a2 = a2.Deno, i2 = i2 && i2.versions || a2 && a2.version, a2 = i2 && i2.v8;
        !(r2 = a2 ? 0 < (n2 = a2.split("."))[0] && n2[0] < 4 ? 1 : +(n2[0] + n2[1]) : r2) && o2 && (!(n2 = o2.match(/Edge\/(\d+)/)) || 74 <= n2[1]) && (n2 = o2.match(/Chrome\/(\d+)/)) && (r2 = +n2[1]), t2.exports = r2;
      }), Kn = e(function(e2, t2) {
        var n2 = Yn(), r2 = kn(), a2 = Cn().String;
        t2.exports = !!Object.getOwnPropertySymbols && !r2(function() {
          var e3 = Symbol("symbol detection");
          return !a2(e3) || !(Object(e3) instanceof Symbol) || !Symbol.sham && n2 && n2 < 41;
        });
      }), Xn = e(function(e2, t2) {
        var n2 = Kn();
        t2.exports = n2 && !Symbol.sham && "symbol" == te(Symbol.iterator);
      }), Zn = e(function(e2, t2) {
        var n2 = Un(), r2 = Mn(), a2 = Gn(), o2 = Xn(), i2 = Object;
        t2.exports = o2 ? function(e3) {
          return "symbol" == te(e3);
        } : function(e3) {
          var t3 = n2("Symbol");
          return r2(t3) && a2(t3.prototype, i2(e3));
        };
      }), Jn = e(function(e2, t2) {
        var n2 = String;
        t2.exports = function(e3) {
          try {
            return n2(e3);
          } catch (e4) {
            return "Object";
          }
        };
      }), Qn = e(function(e2, t2) {
        var n2 = Mn(), r2 = Jn(), a2 = TypeError;
        t2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw new a2(r2(e3) + " is not a function");
        };
      }), er = e(function(e2, t2) {
        var n2 = Qn(), r2 = qn();
        t2.exports = function(e3, t3) {
          e3 = e3[t3];
          return r2(e3) ? void 0 : n2(e3);
        };
      }), tr = e(function(e2, t2) {
        var a2 = In(), o2 = Mn(), i2 = $n(), l2 = TypeError;
        t2.exports = function(e3, t3) {
          var n2, r2;
          if ("string" === t3 && o2(n2 = e3.toString) && !i2(r2 = a2(n2, e3))) return r2;
          if (o2(n2 = e3.valueOf) && !i2(r2 = a2(n2, e3))) return r2;
          if ("string" !== t3 && o2(n2 = e3.toString) && !i2(r2 = a2(n2, e3))) return r2;
          throw new l2("Can't convert object to primitive value");
        };
      }), nr = e(function(e2, t2) {
        t2.exports = true;
      }), rr = e(function(e2, t2) {
        var r2 = Cn(), a2 = Object.defineProperty;
        t2.exports = function(t3, n2) {
          try {
            a2(r2, t3, { value: n2, configurable: true, writable: true });
          } catch (e3) {
            r2[t3] = n2;
          }
          return n2;
        };
      }), ar = e(function(e2, t2) {
        var n2 = Cn(), r2 = rr(), a2 = "__core-js_shared__", n2 = n2[a2] || r2(a2, {});
        t2.exports = n2;
      }), or = e(function(e2, t2) {
        var n2 = nr(), r2 = ar();
        (t2.exports = function(e3, t3) {
          return r2[e3] || (r2[e3] = void 0 !== t3 ? t3 : {});
        })("versions", []).push({ version: "3.33.0", mode: n2 ? "pure" : "global", copyright: "\xA9 2014-2023 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.33.0/LICENSE", source: "https://github.com/zloirock/core-js" });
      }), ir = e(function(e2, t2) {
        var n2 = zn(), r2 = Object;
        t2.exports = function(e3) {
          return r2(n2(e3));
        };
      }), lr = e(function(e2, t2) {
        var n2 = Rn(), r2 = ir(), a2 = n2({}.hasOwnProperty);
        t2.exports = Object.hasOwn || function(e3, t3) {
          return a2(r2(e3), t3);
        };
      }), ur = e(function(e2, t2) {
        var n2 = Rn(), r2 = 0, a2 = Math.random(), o2 = n2(1 .toString);
        t2.exports = function(e3) {
          return "Symbol(" + (void 0 === e3 ? "" : e3) + ")_" + o2(++r2 + a2, 36);
        };
      }), sr = e(function(e2, t2) {
        var n2 = Cn(), r2 = or(), a2 = lr(), o2 = ur(), i2 = Kn(), l2 = Xn(), u2 = n2.Symbol, s2 = r2("wks"), c2 = l2 ? u2.for || u2 : u2 && u2.withoutSetter || o2;
        t2.exports = function(e3) {
          return a2(s2, e3) || (s2[e3] = i2 && a2(u2, e3) ? u2[e3] : c2("Symbol." + e3)), s2[e3];
        };
      }), cr = e(function(e2, t2) {
        var r2 = In(), a2 = $n(), o2 = Zn(), i2 = er(), l2 = tr(), n2 = sr(), u2 = TypeError, s2 = n2("toPrimitive");
        t2.exports = function(e3, t3) {
          if (!a2(e3) || o2(e3)) return e3;
          var n3 = i2(e3, s2);
          if (n3) {
            if (n3 = r2(n3, e3, t3 = void 0 === t3 ? "default" : t3), !a2(n3) || o2(n3)) return n3;
            throw new u2("Can't convert object to primitive value");
          }
          return l2(e3, t3 = void 0 === t3 ? "number" : t3);
        };
      }), dr = e(function(e2, t2) {
        var n2 = cr(), r2 = Zn();
        t2.exports = function(e3) {
          e3 = n2(e3, "string");
          return r2(e3) ? e3 : e3 + "";
        };
      }), pr = e(function(e2, t2) {
        var n2 = Cn(), r2 = $n(), a2 = n2.document, o2 = r2(a2) && r2(a2.createElement);
        t2.exports = function(e3) {
          return o2 ? a2.createElement(e3) : {};
        };
      }), fr = e(function(e2, t2) {
        var n2 = Pn(), r2 = kn(), a2 = pr();
        t2.exports = !n2 && !r2(function() {
          return 7 !== Object.defineProperty(a2("div"), "a", { get: function() {
            return 7;
          } }).a;
        });
      }), mr = e(function(e2) {
        var t2 = Pn(), n2 = In(), r2 = Bn(), a2 = jn(), o2 = Vn(), i2 = dr(), l2 = lr(), u2 = fr(), s2 = Object.getOwnPropertyDescriptor;
        e2.f = t2 ? s2 : function(e3, t3) {
          if (e3 = o2(e3), t3 = i2(t3), u2) try {
            return s2(e3, t3);
          } catch (e4) {
          }
          if (l2(e3, t3)) return a2(!n2(r2.f, e3, t3), e3[t3]);
        };
      }), hr = e(function(e2, t2) {
        function n2(e3, t3) {
          return (e3 = l2[i2(e3)]) === s2 || e3 !== u2 && (a2(t3) ? r2(t3) : !!t3);
        }
        var r2 = kn(), a2 = Mn(), o2 = /#|\.prototype\./, i2 = n2.normalize = function(e3) {
          return String(e3).replace(o2, ".").toLowerCase();
        }, l2 = n2.data = {}, u2 = n2.NATIVE = "N", s2 = n2.POLYFILL = "P";
        t2.exports = n2;
      }), gr = e(function(e2, t2) {
        var n2 = _n(), r2 = Qn(), a2 = Nn(), o2 = n2(n2.bind);
        t2.exports = function(e3, t3) {
          return r2(e3), void 0 === t3 ? e3 : a2 ? o2(e3, t3) : function() {
            return e3.apply(t3, arguments);
          };
        };
      }), br = e(function(e2, t2) {
        var n2 = Pn(), r2 = kn();
        t2.exports = n2 && r2(function() {
          return 42 !== Object.defineProperty(function() {
          }, "prototype", { value: 42, writable: false }).prototype;
        });
      }), vr = e(function(e2, t2) {
        var n2 = $n(), r2 = String, a2 = TypeError;
        t2.exports = function(e3) {
          if (n2(e3)) return e3;
          throw new a2(r2(e3) + " is not an object");
        };
      }), yr = e(function(e2) {
        var t2 = Pn(), r2 = fr(), n2 = br(), a2 = vr(), o2 = dr(), i2 = TypeError, l2 = Object.defineProperty, u2 = Object.getOwnPropertyDescriptor, s2 = "enumerable", c2 = "configurable", d2 = "writable";
        e2.f = t2 ? n2 ? function(e3, t3, n3) {
          var r3;
          return a2(e3), t3 = o2(t3), a2(n3), "function" == typeof e3 && "prototype" === t3 && "value" in n3 && d2 in n3 && !n3[d2] && (r3 = u2(e3, t3)) && r3[d2] && (e3[t3] = n3.value, n3 = { configurable: (c2 in n3 ? n3 : r3)[c2], enumerable: (s2 in n3 ? n3 : r3)[s2], writable: false }), l2(e3, t3, n3);
        } : l2 : function(e3, t3, n3) {
          if (a2(e3), t3 = o2(t3), a2(n3), r2) try {
            return l2(e3, t3, n3);
          } catch (e4) {
          }
          if ("get" in n3 || "set" in n3) throw new i2("Accessors not supported");
          return "value" in n3 && (e3[t3] = n3.value), e3;
        };
      }), wr = e(function(e2, t2) {
        var n2 = Pn(), r2 = yr(), a2 = jn();
        t2.exports = n2 ? function(e3, t3, n3) {
          return r2.f(e3, t3, a2(1, n3));
        } : function(e3, t3, n3) {
          return e3[t3] = n3, e3;
        };
      }), Dr = e(function(e2, t2) {
        function h2(r2) {
          function a2(e3, t3, n2) {
            if (this instanceof a2) {
              switch (arguments.length) {
                case 0:
                  return new r2();
                case 1:
                  return new r2(e3);
                case 2:
                  return new r2(e3, t3);
              }
              return new r2(e3, t3, n2);
            }
            return o2(r2, this, arguments);
          }
          return a2.prototype = r2.prototype, a2;
        }
        var g2 = Cn(), o2 = Tn(), b2 = _n(), v2 = Mn(), y2 = mr().f, w2 = hr(), D2 = Hn(), x2 = gr(), E2 = wr(), F2 = lr();
        t2.exports = function(e3, t3) {
          var n2, r2, a2, o3, i2, l2, u2 = e3.target, s2 = e3.global, c2 = e3.stat, d2 = e3.proto, p2 = s2 ? g2 : c2 ? g2[u2] : (g2[u2] || {}).prototype, f2 = s2 ? D2 : D2[u2] || E2(D2, u2, {})[u2], m2 = f2.prototype;
          for (r2 in t3) i2 = !(n2 = w2(s2 ? r2 : u2 + (c2 ? "." : "#") + r2, e3.forced)) && p2 && F2(p2, r2), o3 = f2[r2], i2 && (l2 = e3.dontCallGetSet ? (l2 = y2(p2, r2)) && l2.value : p2[r2]), a2 = i2 && l2 ? l2 : t3[r2], i2 && te(o3) == te(a2) || (i2 = e3.bind && i2 ? x2(a2, g2) : e3.wrap && i2 ? h2(a2) : d2 && v2(a2) ? b2(a2) : a2, (e3.sham || a2 && a2.sham || o3 && o3.sham) && E2(i2, "sham", true), E2(f2, r2, i2), d2 && (F2(D2, o3 = u2 + "Prototype") || E2(D2, o3, {}), E2(D2[o3], r2, a2), e3.real) && m2 && (n2 || !m2[r2]) && E2(m2, r2, a2));
        };
      }), xr = e(function() {
        Dr()({ target: "Object", stat: true }, { hasOwn: lr() });
      }), Er = e(function(e2, t2) {
        xr();
        var n2 = Hn();
        t2.exports = n2.Object.hasOwn;
      }), Fr = e(function(e2, t2) {
        var n2 = Er();
        t2.exports = n2;
      }), Ar = e(function(e2, t2) {
        var n2 = Fr();
        t2.exports = n2;
      }), Cr = e(function(e2, t2) {
        var n2 = or(), r2 = ur(), a2 = n2("keys");
        t2.exports = function(e3) {
          return a2[e3] || (a2[e3] = r2(e3));
        };
      }), kr = e(function(e2, t2) {
        var n2 = kn();
        t2.exports = !n2(function() {
          function e3() {
          }
          return e3.prototype.constructor = null, Object.getPrototypeOf(new e3()) !== e3.prototype;
        });
      }), Nr = e(function(e2, t2) {
        var n2 = lr(), r2 = Mn(), a2 = ir(), o2 = Cr(), i2 = kr(), l2 = o2("IE_PROTO"), u2 = Object, s2 = u2.prototype;
        t2.exports = i2 ? u2.getPrototypeOf : function(e3) {
          var t3, e3 = a2(e3);
          return n2(e3, l2) ? e3[l2] : (t3 = e3.constructor, r2(t3) && e3 instanceof t3 ? t3.prototype : e3 instanceof u2 ? s2 : null);
        };
      }), Tr = e(function(e2, t2) {
        var n2 = Math.ceil, r2 = Math.floor;
        t2.exports = Math.trunc || function(e3) {
          e3 = +e3;
          return (0 < e3 ? r2 : n2)(e3);
        };
      }), Rr = e(function(e2, t2) {
        var n2 = Tr();
        t2.exports = function(e3) {
          e3 = +e3;
          return e3 != e3 || 0 == e3 ? 0 : n2(e3);
        };
      }), Or = e(function(e2, t2) {
        var n2 = Rr(), r2 = Math.max, a2 = Math.min;
        t2.exports = function(e3, t3) {
          e3 = n2(e3);
          return e3 < 0 ? r2(e3 + t3, 0) : a2(e3, t3);
        };
      }), _r = e(function(e2, t2) {
        var n2 = Rr(), r2 = Math.min;
        t2.exports = function(e3) {
          return 0 < e3 ? r2(n2(e3), 9007199254740991) : 0;
        };
      }), Sr = e(function(e2, t2) {
        var n2 = _r();
        t2.exports = function(e3) {
          return n2(e3.length);
        };
      }), Mr = e(function(e2, t2) {
        function n2(l2) {
          return function(e3, t3, n3) {
            var r2, a2 = u2(e3), o2 = c2(a2), i2 = s2(n3, o2);
            if (l2 && t3 != t3) {
              for (; i2 < o2; ) if ((r2 = a2[i2++]) != r2) return true;
            } else for (; i2 < o2; i2++) if ((l2 || i2 in a2) && a2[i2] === t3) return l2 || i2 || 0;
            return !l2 && -1;
          };
        }
        var u2 = Vn(), s2 = Or(), c2 = Sr();
        t2.exports = { includes: n2(true), indexOf: n2(false) };
      }), Pr = e(function(e2, t2) {
        t2.exports = {};
      }), Ir = e(function(e2, t2) {
        var n2 = Rn(), i2 = lr(), l2 = Vn(), u2 = Mr().indexOf, s2 = Pr(), c2 = n2([].push);
        t2.exports = function(e3, t3) {
          var n3, r2 = l2(e3), a2 = 0, o2 = [];
          for (n3 in r2) !i2(s2, n3) && i2(r2, n3) && c2(o2, n3);
          for (; t3.length > a2; ) !i2(r2, n3 = t3[a2++]) || ~u2(o2, n3) || c2(o2, n3);
          return o2;
        };
      }), Br = e(function(e2, t2) {
        t2.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
      }), jr = e(function(e2, t2) {
        var n2 = Ir(), r2 = Br();
        t2.exports = Object.keys || function(e3) {
          return n2(e3, r2);
        };
      }), Lr = e(function(e2, t2) {
        function n2(u2) {
          return function(e3) {
            for (var t3, n3 = p2(e3), r3 = d2(n3), a3 = h2 && null === c2(n3), o2 = r3.length, i2 = 0, l2 = []; i2 < o2; ) t3 = r3[i2++], s2 && !(a3 ? t3 in n3 : f2(n3, t3)) || m2(l2, u2 ? [t3, n3[t3]] : n3[t3]);
            return l2;
          };
        }
        var s2 = Pn(), r2 = kn(), a2 = Rn(), c2 = Nr(), d2 = jr(), p2 = Vn(), f2 = a2(Bn().f), m2 = a2([].push), h2 = s2 && r2(function() {
          var e3 = /* @__PURE__ */ Object.create(null);
          return e3[2] = 2, !f2(e3, 2);
        });
        t2.exports = { entries: n2(true), values: n2(false) };
      }), qr = e(function() {
        var e2 = Dr(), t2 = Lr().values;
        e2({ target: "Object", stat: true }, { values: function(e3) {
          return t2(e3);
        } });
      }), zr = e(function(e2, t2) {
        qr();
        var n2 = Hn();
        t2.exports = n2.Object.values;
      }), Vr = e(function(e2, t2) {
        var n2 = zr();
        t2.exports = n2;
      }), $r = e(function(e2, t2) {
        var n2 = Vr();
        t2.exports = n2;
      }), Hr = e(function(e2, t2) {
        var n2 = {};
        n2[sr()("toStringTag")] = "z", t2.exports = "[object z]" === String(n2);
      }), Ur = e(function(e2, t2) {
        var n2 = Hr(), r2 = Mn(), a2 = On(), o2 = sr()("toStringTag"), i2 = Object, l2 = "Arguments" === a2(/* @__PURE__ */ function() {
          return arguments;
        }());
        t2.exports = n2 ? a2 : function(e3) {
          var t3;
          return void 0 === e3 ? "Undefined" : null === e3 ? "Null" : "string" == typeof (t3 = function(e4, t4) {
            try {
              return e4[t4];
            } catch (e5) {
            }
          }(e3 = i2(e3), o2)) ? t3 : l2 ? a2(e3) : "Object" === (t3 = a2(e3)) && r2(e3.callee) ? "Arguments" : t3;
        };
      }), Gr = e(function(e2, t2) {
        var n2 = Ur(), r2 = String;
        t2.exports = function(e3) {
          if ("Symbol" === n2(e3)) throw new TypeError("Cannot convert a Symbol value to a string");
          return r2(e3);
        };
      }), Wr = e(function(e2, t2) {
        function n2(a2) {
          return function(e3, t3) {
            var n3, e3 = i2(l2(e3)), t3 = o2(t3), r3 = e3.length;
            return t3 < 0 || r3 <= t3 ? a2 ? "" : void 0 : (n3 = s2(e3, t3)) < 55296 || 56319 < n3 || t3 + 1 === r3 || (r3 = s2(e3, t3 + 1)) < 56320 || 57343 < r3 ? a2 ? u2(e3, t3) : n3 : a2 ? c2(e3, t3, t3 + 2) : r3 - 56320 + (n3 - 55296 << 10) + 65536;
          };
        }
        var r2 = Rn(), o2 = Rr(), i2 = Gr(), l2 = zn(), u2 = r2("".charAt), s2 = r2("".charCodeAt), c2 = r2("".slice);
        t2.exports = { codeAt: n2(false), charAt: n2(true) };
      }), Yr = e(function(e2, t2) {
        var n2 = Cn(), r2 = Mn(), n2 = n2.WeakMap;
        t2.exports = r2(n2) && /native code/.test(String(n2));
      }), Kr = e(function(e2, t2) {
        var n2, r2, a2, o2, i2 = Yr(), l2 = Cn(), u2 = $n(), s2 = wr(), c2 = lr(), d2 = ar(), p2 = Cr(), f2 = Pr(), m2 = "Object already initialized", h2 = l2.TypeError, l2 = l2.WeakMap, g2 = i2 || d2.state ? ((a2 = d2.state || (d2.state = new l2())).get = a2.get, a2.has = a2.has, a2.set = a2.set, n2 = function(e3, t3) {
          if (a2.has(e3)) throw new h2(m2);
          return t3.facade = e3, a2.set(e3, t3), t3;
        }, r2 = function(e3) {
          return a2.get(e3) || {};
        }, function(e3) {
          return a2.has(e3);
        }) : (f2[o2 = p2("state")] = true, n2 = function(e3, t3) {
          if (c2(e3, o2)) throw new h2(m2);
          return t3.facade = e3, s2(e3, o2, t3), t3;
        }, r2 = function(e3) {
          return c2(e3, o2) ? e3[o2] : {};
        }, function(e3) {
          return c2(e3, o2);
        });
        t2.exports = { set: n2, get: r2, has: g2, enforce: function(e3) {
          return g2(e3) ? r2(e3) : n2(e3, {});
        }, getterFor: function(t3) {
          return function(e3) {
            if (u2(e3) && (e3 = r2(e3)).type === t3) return e3;
            throw new h2("Incompatible receiver, " + t3 + " required");
          };
        } };
      }), Xr = e(function(e2, t2) {
        var n2 = Pn(), r2 = lr(), a2 = Function.prototype, o2 = n2 && Object.getOwnPropertyDescriptor, r2 = r2(a2, "name"), i2 = r2 && "something" === function() {
        }.name, n2 = r2 && (!n2 || o2(a2, "name").configurable);
        t2.exports = { EXISTS: r2, PROPER: i2, CONFIGURABLE: n2 };
      }), Zr = e(function(e2) {
        var t2 = Pn(), n2 = br(), l2 = yr(), u2 = vr(), s2 = Vn(), c2 = jr();
        e2.f = t2 && !n2 ? Object.defineProperties : function(e3, t3) {
          u2(e3);
          for (var n3, r2 = s2(t3), a2 = c2(t3), o2 = a2.length, i2 = 0; i2 < o2; ) l2.f(e3, n3 = a2[i2++], r2[n3]);
          return e3;
        };
      }), Jr = e(function(e2, t2) {
        var n2 = Un();
        t2.exports = n2("document", "documentElement");
      }), Qr = e(function(e2, t2) {
        function r2() {
        }
        function a2(e3) {
          e3.write(b2("")), e3.close();
          var t3 = e3.parentWindow.Object;
          return e3 = null, t3;
        }
        var o2, i2 = vr(), l2 = Zr(), u2 = Br(), n2 = Pr(), s2 = Jr(), c2 = pr(), d2 = Cr(), p2 = ">", f2 = "<", m2 = "prototype", h2 = "script", g2 = d2("IE_PROTO"), b2 = function(e3) {
          return f2 + h2 + p2 + e3 + f2 + "/" + h2 + p2;
        }, v2 = function() {
          try {
            o2 = new ActiveXObject("htmlfile");
          } catch (e4) {
          }
          v2 = void 0 === document || document.domain && o2 ? a2(o2) : (e3 = c2("iframe"), t3 = "java" + h2 + ":", e3.style.display = "none", s2.appendChild(e3), e3.src = String(t3), (t3 = e3.contentWindow.document).open(), t3.write(b2("document.F=Object")), t3.close(), t3.F);
          for (var e3, t3, n3 = u2.length; n3--; ) delete v2[m2][u2[n3]];
          return v2();
        };
        n2[g2] = true, t2.exports = Object.create || function(e3, t3) {
          var n3;
          return null !== e3 ? (r2[m2] = i2(e3), n3 = new r2(), r2[m2] = null, n3[g2] = e3) : n3 = v2(), void 0 === t3 ? n3 : l2.f(n3, t3);
        };
      }), ea = e(function(e2, t2) {
        var a2 = wr();
        t2.exports = function(e3, t3, n2, r2) {
          return r2 && r2.enumerable ? e3[t3] = n2 : a2(e3, t3, n2), e3;
        };
      }), ta = e(function(e2, t2) {
        var n2, r2, a2 = kn(), o2 = Mn(), i2 = $n(), l2 = Qr(), u2 = Nr(), s2 = ea(), c2 = sr(), d2 = nr(), p2 = c2("iterator"), c2 = false;
        [].keys && ("next" in (r2 = [].keys()) ? (u2 = u2(u2(r2))) !== Object.prototype && (n2 = u2) : c2 = true), !i2(n2) || a2(function() {
          var e3 = {};
          return n2[p2].call(e3) !== e3;
        }) ? n2 = {} : d2 && (n2 = l2(n2)), o2(n2[p2]) || s2(n2, p2, function() {
          return this;
        }), t2.exports = { IteratorPrototype: n2, BUGGY_SAFARI_ITERATORS: c2 };
      }), na = e(function(e2, t2) {
        var n2 = Hr(), r2 = Ur();
        t2.exports = n2 ? {}.toString : function() {
          return "[object " + r2(this) + "]";
        };
      }), ra = e(function(e2, t2) {
        var a2 = Hr(), o2 = yr().f, i2 = wr(), l2 = lr(), u2 = na(), s2 = sr()("toStringTag");
        t2.exports = function(e3, t3, n2, r2) {
          e3 && (n2 = n2 ? e3 : e3.prototype, l2(n2, s2) || o2(n2, s2, { configurable: true, value: t3 }), r2) && !a2 && i2(n2, "toString", u2);
        };
      }), aa = e(function(e2, t2) {
        t2.exports = {};
      }), oa = e(function(e2, t2) {
        function a2() {
          return this;
        }
        var o2 = ta().IteratorPrototype, i2 = Qr(), l2 = jn(), u2 = ra(), s2 = aa();
        t2.exports = function(e3, t3, n2, r2) {
          t3 += " Iterator";
          return e3.prototype = i2(o2, { next: l2(+!r2, n2) }), u2(e3, t3, false, true), s2[t3] = a2, e3;
        };
      }), ia = e(function(e2, t2) {
        var r2 = Rn(), a2 = Qn();
        t2.exports = function(e3, t3, n2) {
          try {
            return r2(a2(Object.getOwnPropertyDescriptor(e3, t3)[n2]));
          } catch (e4) {
          }
        };
      }), la = e(function(e2, t2) {
        var n2 = Mn(), r2 = String, a2 = TypeError;
        t2.exports = function(e3) {
          if ("object" == te(e3) || n2(e3)) return e3;
          throw new a2("Can't set " + r2(e3) + " as a prototype");
        };
      }), ua = e(function(e2, t2) {
        var a2 = ia(), o2 = vr(), i2 = la();
        t2.exports = Object.setPrototypeOf || ("__proto__" in {} ? function() {
          var n2, r2 = false, e3 = {};
          try {
            (n2 = a2(Object.prototype, "__proto__", "set"))(e3, []), r2 = e3 instanceof Array;
          } catch (e4) {
          }
          return function(e4, t3) {
            return o2(e4), i2(t3), r2 ? n2(e4, t3) : e4.__proto__ = t3, e4;
          };
        }() : void 0);
      }), sa = e(function(e2, t2) {
        function h2() {
          return this;
        }
        var g2 = Dr(), b2 = In(), v2 = nr(), n2 = Xr(), y2 = Mn(), w2 = oa(), D2 = Nr(), x2 = ua(), E2 = ra(), F2 = wr(), A2 = ea(), r2 = sr(), C2 = aa(), a2 = ta(), k2 = n2.PROPER, N2 = n2.CONFIGURABLE, T2 = a2.IteratorPrototype, R2 = a2.BUGGY_SAFARI_ITERATORS, O2 = r2("iterator"), _2 = "values";
        t2.exports = function(e3, t3, n3, r3, a3, o2, i2) {
          w2(n3, t3, r3);
          function l2(e4) {
            if (e4 === a3 && f2) return f2;
            if (!R2 && e4 && e4 in d2) return d2[e4];
            switch (e4) {
              case "keys":
              case _2:
              case "entries":
                return function() {
                  return new n3(this, e4);
                };
            }
            return function() {
              return new n3(this);
            };
          }
          var u2, s2, r3 = t3 + " Iterator", c2 = false, d2 = e3.prototype, p2 = d2[O2] || d2["@@iterator"] || a3 && d2[a3], f2 = !R2 && p2 || l2(a3), m2 = "Array" === t3 && d2.entries || p2;
          if (m2 && (m2 = D2(m2.call(new e3()))) !== Object.prototype && m2.next && (v2 || D2(m2) === T2 || (x2 ? x2(m2, T2) : y2(m2[O2]) || A2(m2, O2, h2)), E2(m2, r3, true, true), v2) && (C2[r3] = h2), k2 && a3 === _2 && p2 && p2.name !== _2 && (!v2 && N2 ? F2(d2, "name", _2) : (c2 = true, f2 = function() {
            return b2(p2, this);
          })), a3) if (u2 = { values: l2(_2), keys: o2 ? f2 : l2("keys"), entries: l2("entries") }, i2) for (s2 in u2) !R2 && !c2 && s2 in d2 || A2(d2, s2, u2[s2]);
          else g2({ target: t3, proto: true, forced: R2 || c2 }, u2);
          return v2 && !i2 || d2[O2] === f2 || A2(d2, O2, f2, { name: a3 }), C2[t3] = f2, u2;
        };
      }), ca = e(function(e2, t2) {
        t2.exports = function(e3, t3) {
          return { value: e3, done: t3 };
        };
      }), da = e(function() {
        var r2 = Wr().charAt, t2 = Gr(), e2 = Kr(), n2 = sa(), a2 = ca(), o2 = "String Iterator", i2 = e2.set, l2 = e2.getterFor(o2);
        n2(String, "String", function(e3) {
          i2(this, { type: o2, string: t2(e3), index: 0 });
        }, function() {
          var e3 = l2(this), t3 = e3.string, n3 = e3.index;
          return n3 >= t3.length ? a2(void 0, true) : (t3 = r2(t3, n3), e3.index += t3.length, a2(t3, false));
        });
      }), pa = e(function(e2, t2) {
        var o2 = In(), i2 = vr(), l2 = er();
        t2.exports = function(e3, t3, n2) {
          var r2, a2;
          i2(e3);
          try {
            if (!(r2 = l2(e3, "return"))) {
              if ("throw" === t3) throw n2;
              return n2;
            }
            r2 = o2(r2, e3);
          } catch (e4) {
            a2 = true, r2 = e4;
          }
          if ("throw" === t3) throw n2;
          if (a2) throw r2;
          return i2(r2), n2;
        };
      }), fa = e(function(e2, t2) {
        var a2 = vr(), o2 = pa();
        t2.exports = function(t3, e3, n2, r2) {
          try {
            return r2 ? e3(a2(n2)[0], n2[1]) : e3(n2);
          } catch (e4) {
            o2(t3, "throw", e4);
          }
        };
      }), ma = e(function(e2, t2) {
        var n2 = sr(), r2 = aa(), a2 = n2("iterator"), o2 = Array.prototype;
        t2.exports = function(e3) {
          return void 0 !== e3 && (r2.Array === e3 || o2[a2] === e3);
        };
      }), ha = e(function(e2, t2) {
        var n2 = Rn(), r2 = Mn(), a2 = ar(), o2 = n2(Function.toString);
        r2(a2.inspectSource) || (a2.inspectSource = function(e3) {
          return o2(e3);
        }), t2.exports = a2.inspectSource;
      }), ga = e(function(e2, t2) {
        function n2() {
        }
        function r2(e3) {
          if (!l2(e3)) return false;
          try {
            return p2(n2, d2, e3), true;
          } catch (e4) {
            return false;
          }
        }
        function a2(e3) {
          if (!l2(e3)) return false;
          switch (u2(e3)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          try {
            return h2 || !!m2(f2, c2(e3));
          } catch (e4) {
            return true;
          }
        }
        var o2 = Rn(), i2 = kn(), l2 = Mn(), u2 = Ur(), s2 = Un(), c2 = ha(), d2 = [], p2 = s2("Reflect", "construct"), f2 = /^\s*(?:class|function)\b/, m2 = o2(f2.exec), h2 = !f2.test(n2);
        a2.sham = true, t2.exports = !p2 || i2(function() {
          var e3;
          return r2(r2.call) || !r2(Object) || !r2(function() {
            e3 = true;
          }) || e3;
        }) ? a2 : r2;
      }), ba = e(function(e2, t2) {
        var r2 = dr(), a2 = yr(), o2 = jn();
        t2.exports = function(e3, t3, n2) {
          t3 = r2(t3);
          t3 in e3 ? a2.f(e3, t3, o2(0, n2)) : e3[t3] = n2;
        };
      }), va = e(function(e2, t2) {
        var n2 = Ur(), r2 = er(), a2 = qn(), o2 = aa(), i2 = sr()("iterator");
        t2.exports = function(e3) {
          if (!a2(e3)) return r2(e3, i2) || r2(e3, "@@iterator") || o2[n2(e3)];
        };
      }), ya = e(function(e2, t2) {
        var n2 = In(), r2 = Qn(), a2 = vr(), o2 = Jn(), i2 = va(), l2 = TypeError;
        t2.exports = function(e3, t3) {
          t3 = arguments.length < 2 ? i2(e3) : t3;
          if (r2(t3)) return a2(n2(t3, e3));
          throw new l2(o2(e3) + " is not iterable");
        };
      }), wa = e(function(e2, t2) {
        var p2 = gr(), f2 = In(), m2 = ir(), h2 = fa(), g2 = ma(), b2 = ga(), v2 = Sr(), y2 = ba(), w2 = ya(), D2 = va(), x2 = Array;
        t2.exports = function(e3) {
          var t3, n2, r2, a2, o2, i2, l2 = m2(e3), e3 = b2(this), u2 = arguments.length, s2 = 1 < u2 ? arguments[1] : void 0, c2 = void 0 !== s2, u2 = (c2 && (s2 = p2(s2, 2 < u2 ? arguments[2] : void 0)), D2(l2)), d2 = 0;
          if (!u2 || this === x2 && g2(u2)) for (t3 = v2(l2), n2 = e3 ? new this(t3) : x2(t3); d2 < t3; d2++) i2 = c2 ? s2(l2[d2], d2) : l2[d2], y2(n2, d2, i2);
          else for (o2 = (a2 = w2(l2, u2)).next, n2 = e3 ? new this() : []; !(r2 = f2(o2, a2)).done; d2++) i2 = c2 ? h2(a2, s2, [r2.value, d2], true) : r2.value, y2(n2, d2, i2);
          return n2.length = d2, n2;
        };
      }), Da = e(function(e2, t2) {
        var n2, r2, a2 = sr()("iterator"), o2 = false;
        try {
          n2 = 0, (r2 = { next: function() {
            return { done: !!n2++ };
          }, return: function() {
            o2 = true;
          } })[a2] = function() {
            return this;
          }, Array.from(r2, function() {
            throw 2;
          });
        } catch (e3) {
        }
        t2.exports = function(e3, t3) {
          try {
            if (!t3 && !o2) return false;
          } catch (e4) {
            return false;
          }
          var n3 = false;
          try {
            var r3 = {};
            r3[a2] = function() {
              return { next: function() {
                return { done: n3 = true };
              } };
            }, e3(r3);
          } catch (e4) {
          }
          return n3;
        };
      }), xa = e(function() {
        var e2 = Dr(), t2 = wa();
        e2({ target: "Array", stat: true, forced: !Da()(function(e3) {
          Array.from(e3);
        }) }, { from: t2 });
      }), Ea = e(function(e2, t2) {
        da(), xa();
        var n2 = Hn();
        t2.exports = n2.Array.from;
      }), Fa = e(function(e2, t2) {
        var n2 = Ea();
        t2.exports = n2;
      }), Aa = e(function(e2, t2) {
        var n2 = Fa();
        t2.exports = n2;
      }), Ca = e(function(e2, t2) {
        var l2 = { name: "doT", version: "1.1.1", templateSettings: { evaluate: /\{\{([\s\S]+?(\}?)+)\}\}/g, interpolate: /\{\{=([\s\S]+?)\}\}/g, encode: /\{\{!([\s\S]+?)\}\}/g, use: /\{\{#([\s\S]+?)\}\}/g, useParams: /(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g, define: /\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g, defineParams: /^\s*([\w$]+):([\s\S]+)/, conditional: /\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g, iterate: /\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g, varname: "it", strip: true, append: true, selfcontained: false, doNotSkipEncoded: false }, template: void 0, compile: void 0, log: true };
        if ("object" !== ("undefined" == typeof globalThis ? "undefined" : te(globalThis))) try {
          Object.defineProperty(Object.prototype, "__magic__", { get: function() {
            return this;
          }, configurable: true }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__;
        } catch (e3) {
          window2.globalThis = function() {
            if ("undefined" != typeof self) return self;
            if (void 0 !== window2) return window2;
            if (void 0 !== q) return q;
            if (void 0 !== this) return this;
            throw new Error("Unable to locate global `this`");
          }();
        }
        l2.encodeHTMLSource = function(e3) {
          var t3 = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" }, n2 = e3 ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
          return function(e4) {
            return e4 ? e4.toString().replace(n2, function(e5) {
              return t3[e5] || e5;
            }) : "";
          };
        }, void 0 !== t2 && t2.exports ? t2.exports = l2 : "function" == typeof define && define.amd ? define(function() {
          return l2;
        }) : globalThis.doT = l2;
        var u2 = { append: { start: "'+(", end: ")+'", startencode: "'+encodeHTML(" }, split: { start: "';out+=(", end: ");out+='", startencode: "';out+=encodeHTML(" } }, s2 = /$^/;
        function c2(e3) {
          return e3.replace(/\\('|\\)/g, "$1").replace(/[\r\t\n]/g, " ");
        }
        l2.template = function(e3, t3, n2) {
          var r2, a2, o2 = (t3 = t3 || l2.templateSettings).append ? u2.append : u2.split, i2 = 0, n2 = t3.use || t3.define ? function n3(a3, e4, o3) {
            return ("string" == typeof e4 ? e4 : e4.toString()).replace(a3.define || s2, function(e5, r3, t4, n4) {
              return (r3 = 0 === r3.indexOf("def.") ? r3.substring(4) : r3) in o3 || (":" === t4 ? (a3.defineParams && n4.replace(a3.defineParams, function(e6, t5, n5) {
                o3[r3] = { arg: t5, text: n5 };
              }), r3 in o3 || (o3[r3] = n4)) : new Function("def", "def['" + r3 + "']=" + n4)(o3)), "";
            }).replace(a3.use || s2, function(e5, t4) {
              return a3.useParams && (t4 = t4.replace(a3.useParams, function(e6, t5, n4, r3) {
                var a4;
                if (o3[n4] && o3[n4].arg && r3) return a4 = (n4 + ":" + r3).replace(/'|\\/g, "_"), o3.__exp = o3.__exp || {}, o3.__exp[a4] = o3[n4].text.replace(new RegExp("(^|[^\\w$])" + o3[n4].arg + "([^\\w$])", "g"), "$1" + r3 + "$2"), t5 + "def.__exp['" + a4 + "']";
              })), (t4 = new Function("def", "return " + t4)(o3)) && n3(a3, t4, o3);
            });
          }(t3, e3, n2 || {}) : e3, n2 = ("var out='" + (t3.strip ? n2.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g, " ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g, "") : n2).replace(/'|\\/g, "\\$&").replace(t3.interpolate || s2, function(e4, t4) {
            return o2.start + c2(t4) + o2.end;
          }).replace(t3.encode || s2, function(e4, t4) {
            return r2 = true, o2.startencode + c2(t4) + o2.end;
          }).replace(t3.conditional || s2, function(e4, t4, n3) {
            return t4 ? n3 ? "';}else if(" + c2(n3) + "){out+='" : "';}else{out+='" : n3 ? "';if(" + c2(n3) + "){out+='" : "';}out+='";
          }).replace(t3.iterate || s2, function(e4, t4, n3, r3) {
            return t4 ? (i2 += 1, a2 = r3 || "i" + i2, t4 = c2(t4), "';var arr" + i2 + "=" + t4 + ";if(arr" + i2 + "){var " + n3 + "," + a2 + "=-1,l" + i2 + "=arr" + i2 + ".length-1;while(" + a2 + "<l" + i2 + "){" + n3 + "=arr" + i2 + "[" + a2 + "+=1];out+='") : "';} } out+='";
          }).replace(t3.evaluate || s2, function(e4, t4) {
            return "';" + c2(t4) + "out+='";
          }) + "';return out;").replace(/\n/g, "\\n").replace(/\t/g, "\\t").replace(/\r/g, "\\r").replace(/(\s|;|\}|^|\{)out\+='';/g, "$1").replace(/\+''/g, "");
          r2 && (t3.selfcontained || !globalThis || globalThis._encodeHTML || (globalThis._encodeHTML = l2.encodeHTMLSource(t3.doNotSkipEncoded)), n2 = "var encodeHTML = typeof _encodeHTML !== 'undefined' ? _encodeHTML : (" + l2.encodeHTMLSource.toString() + "(" + (t3.doNotSkipEncoded || "") + "));" + n2);
          try {
            return new Function(t3.varname, n2);
          } catch (e4) {
            throw "undefined" != typeof console && console.log("Could not create a template function: " + n2), e4;
          }
        }, l2.compile = function(e3, t3) {
          return l2.template(e3, null, t3);
        };
      }), ka = { helpUrlBase: "https://dequeuniversity.com/rules/", gridSize: 200, results: [], resultGroups: [], resultGroupMap: {}, impact: Object.freeze(["minor", "moderate", "serious", "critical"]), preload: Object.freeze({ assets: ["cssom", "media"], timeout: 1e4 }), allOrigins: "<unsafe_all_origins>", sameOrigin: "<same_origin>" }, f = ([{ name: "NA", value: "inapplicable", priority: 0, group: "inapplicable" }, { name: "PASS", value: "passed", priority: 1, group: "passes" }, { name: "CANTTELL", value: "cantTell", priority: 2, group: "incomplete" }, { name: "FAIL", value: "failed", priority: 3, group: "violations" }].forEach(function(e2) {
        var t2 = e2.name, n2 = e2.value, r2 = e2.priority, e2 = e2.group;
        ka[t2] = n2, ka[t2 + "_PRIO"] = r2, ka[t2 + "_GROUP"] = e2, ka.results[r2] = n2, ka.resultGroups[r2] = e2, ka.resultGroupMap[n2] = e2;
      }), Object.freeze(ka.results), Object.freeze(ka.resultGroups), Object.freeze(ka.resultGroupMap), Object.freeze(ka), ka), Na = function() {
        "object" === ("undefined" == typeof console ? "undefined" : te(console)) && console.log && Function.prototype.apply.call(console.log, console, arguments);
      }, Ta = /[\t\r\n\f]/g, p = ve(function e2() {
        ge(this, e2), this.parent = void 0;
      }, [{ key: "props", get: function() {
        throw new Error('VirtualNode class must have a "props" object consisting of "nodeType" and "nodeName" properties');
      } }, { key: "attrNames", get: function() {
        throw new Error('VirtualNode class must have an "attrNames" property');
      } }, { key: "attr", value: function() {
        throw new Error('VirtualNode class must have an "attr" function');
      } }, { key: "hasAttr", value: function() {
        throw new Error('VirtualNode class must have a "hasAttr" function');
      } }, { key: "hasClass", value: function(e2) {
        var t2 = this.attr("class");
        return !!t2 && (e2 = " " + e2 + " ", 0 <= (" " + t2 + " ").replace(Ta, " ").indexOf(e2));
      } }]), Ra = {}, Oa = (Se(Ra, { DqElement: function() {
        return yo;
      }, aggregate: function() {
        return Oa;
      }, aggregateChecks: function() {
        return Ba;
      }, aggregateNodeResults: function() {
        return La;
      }, aggregateResult: function() {
        return za;
      }, areStylesSet: function() {
        return Va;
      }, assert: function() {
        return E;
      }, checkHelper: function() {
        return wo;
      }, clone: function() {
        return Do;
      }, closest: function() {
        return Oo;
      }, collectResultsFromFrames: function() {
        return Ai;
      }, contains: function() {
        return Ci;
      }, convertSelector: function() {
        return To;
      }, cssParser: function() {
        return xo;
      }, deepMerge: function() {
        return ki;
      }, escapeSelector: function() {
        return m;
      }, extendMetaData: function() {
        return Ni;
      }, filterHtmlAttrs: function() {
        return xf;
      }, finalizeRuleResult: function() {
        return ja;
      }, findBy: function() {
        return xi;
      }, getAllChecks: function() {
        return Di;
      }, getAncestry: function() {
        return mo;
      }, getBaseLang: function() {
        return mp;
      }, getCheckMessage: function() {
        return Ep;
      }, getCheckOption: function() {
        return Fp;
      }, getEnvironmentData: function() {
        return Ap;
      }, getFlattenedTree: function() {
        return dp;
      }, getFrameContexts: function() {
        return Op;
      }, getFriendlyUriEnd: function() {
        return Wa;
      }, getNodeAttributes: function() {
        return Ya;
      }, getNodeFromTree: function() {
        return g;
      }, getPreloadConfig: function() {
        return gf;
      }, getRootNode: function() {
        return _i;
      }, getRule: function() {
        return _p;
      }, getScroll: function() {
        return Mp;
      }, getScrollState: function() {
        return Pp;
      }, getSelector: function() {
        return po;
      }, getSelectorData: function() {
        return lo;
      }, getShadowSelector: function() {
        return Ja;
      }, getStandards: function() {
        return Ip;
      }, getStyleSheetFactory: function() {
        return jp;
      }, getXpath: function() {
        return ho;
      }, injectStyle: function() {
        return Lp;
      }, isArrayLike: function() {
        return qp;
      }, isContextObject: function() {
        return $p;
      }, isContextProp: function() {
        return Hp;
      }, isContextSpec: function() {
        return Vp;
      }, isHidden: function() {
        return Wp;
      }, isHtmlElement: function() {
        return Yp;
      }, isLabelledFramesSelector: function() {
        return Up;
      }, isLabelledShadowDomSelector: function() {
        return Gp;
      }, isNodeInContext: function() {
        return Kp;
      }, isShadowRoot: function() {
        return Ri;
      }, isValidLang: function() {
        return Of;
      }, isXHTML: function() {
        return Za;
      }, matchAncestry: function() {
        return Zp;
      }, matches: function() {
        return Eo;
      }, matchesExpression: function() {
        return Ro;
      }, matchesSelector: function() {
        return Ka;
      }, memoize: function() {
        return n;
      }, mergeResults: function() {
        return Fi;
      }, nodeLookup: function() {
        return l;
      }, nodeSerializer: function() {
        return wi;
      }, nodeSorter: function() {
        return Jp;
      }, objectHasOwn: function() {
        return zp;
      }, parseCrossOriginStylesheet: function() {
        return rf;
      }, parseSameOriginStylesheet: function() {
        return tf;
      }, parseStylesheet: function() {
        return nf;
      }, performanceTimer: function() {
        return _;
      }, pollyfillElementsFromPoint: function() {
        return of;
      }, preload: function() {
        return mf;
      }, preloadCssom: function() {
        return cf;
      }, preloadMedia: function() {
        return ff;
      }, processMessage: function() {
        return xp;
      }, publishMetaData: function() {
        return bf;
      }, querySelectorAll: function() {
        return yf;
      }, querySelectorAllFilter: function() {
        return sf;
      }, queue: function() {
        return Bo;
      }, respondable: function() {
        return fi;
      }, ruleShouldRun: function() {
        return Df;
      }, select: function() {
        return Ff;
      }, sendCommandToFrame: function() {
        return hi;
      }, setScrollState: function() {
        return Af;
      }, shadowSelect: function() {
        return Cf;
      }, shadowSelectAll: function() {
        return kf;
      }, shouldPreload: function() {
        return hf;
      }, toArray: function() {
        return $a;
      }, tokenList: function() {
        return ap;
      }, uniqueArray: function() {
        return lf;
      }, uuid: function() {
        return Ko;
      }, validInputTypes: function() {
        return Nf;
      }, validLangs: function() {
        return Rf;
      } }), function(t2, e2, n2) {
        return e2 = e2.slice(), n2 && e2.push(n2), n2 = e2.map(function(e3) {
          return t2.indexOf(e3);
        }).sort(), t2[n2.pop()];
      }), _a = f.CANTTELL_PRIO, Sa = f.FAIL_PRIO, Ma = [], Pa = (Ma[f.PASS_PRIO] = true, Ma[f.CANTTELL_PRIO] = null, Ma[f.FAIL_PRIO] = false, ["any", "all", "none"]);
      function Ia(n2, r2) {
        Pa.reduce(function(e2, t2) {
          return e2[t2] = (n2[t2] || []).map(function(e3) {
            return r2(e3, t2);
          }), e2;
        }, {});
      }
      var Ba = function(e2) {
        var n2 = Object.assign({}, e2), r2 = (Ia(n2, function(e3, t2) {
          var n3 = void 0 === e3.result ? -1 : Ma.indexOf(e3.result);
          e3.priority = -1 !== n3 ? n3 : f.CANTTELL_PRIO, "none" === t2 && (e3.priority === f.PASS_PRIO ? e3.priority = f.FAIL_PRIO : e3.priority === f.FAIL_PRIO && (e3.priority = f.PASS_PRIO));
        }), { all: n2.all.reduce(function(e3, t2) {
          return Math.max(e3, t2.priority);
        }, 0), none: n2.none.reduce(function(e3, t2) {
          return Math.max(e3, t2.priority);
        }, 0), any: n2.any.reduce(function(e3, t2) {
          return Math.min(e3, t2.priority);
        }, 4) % 4 }), a2 = (n2.priority = Math.max(r2.all, r2.none, r2.any), []);
        return Pa.forEach(function(t2) {
          n2[t2] = n2[t2].filter(function(e3) {
            return e3.priority === n2.priority && e3.priority === r2[t2];
          }), n2[t2].forEach(function(e3) {
            return a2.push(e3.impact);
          });
        }), [_a, Sa].includes(n2.priority) ? n2.impact = Oa(f.impact, a2) : n2.impact = null, Ia(n2, function(e3) {
          delete e3.result, delete e3.priority;
        }), n2.result = f.results[n2.priority], delete n2.priority, n2;
      };
      function ja(t2) {
        var n2 = axe._audit.rules.find(function(e2) {
          return e2.id === t2.id;
        });
        return n2 && n2.impact && t2.nodes.forEach(function(t3) {
          ["any", "all", "none"].forEach(function(e2) {
            (t3[e2] || []).forEach(function(e3) {
              e3.impact = n2.impact;
            });
          });
        }), Object.assign(t2, La(t2.nodes)), delete t2.nodes, t2;
      }
      var La = function(e2) {
        var n2 = {}, t2 = ((e2 = e2.map(function(e3) {
          if (e3.any && e3.all && e3.none) return Ba(e3);
          if (Array.isArray(e3.node)) return ja(e3);
          throw new TypeError("Invalid Result type");
        })) && e2.length ? (t2 = e2.map(function(e3) {
          return e3.result;
        }), n2.result = Oa(f.results, t2, n2.result)) : n2.result = "inapplicable", f.resultGroups.forEach(function(e3) {
          return n2[e3] = [];
        }), e2.forEach(function(e3) {
          var t3 = f.resultGroupMap[e3.result];
          n2[t3].push(e3);
        }), f.FAIL_GROUP);
        return 0 === n2[t2].length && (t2 = f.CANTTELL_GROUP), 0 < n2[t2].length ? (e2 = n2[t2].map(function(e3) {
          return e3.impact;
        }), n2.impact = Oa(f.impact, e2) || null) : n2.impact = null, n2;
      };
      function qa(e2, t2, n2) {
        var r2 = Object.assign({}, t2);
        r2.nodes = (r2[n2] || []).concat(), f.resultGroups.forEach(function(e3) {
          delete r2[e3];
        }), e2[n2].push(r2);
      }
      var za = function(e2) {
        var n2 = {};
        return f.resultGroups.forEach(function(e3) {
          return n2[e3] = [];
        }), e2.forEach(function(t2) {
          t2.error ? qa(n2, t2, f.CANTTELL_GROUP) : t2.result === f.NA ? qa(n2, t2, f.NA_GROUP) : f.resultGroups.forEach(function(e3) {
            Array.isArray(t2[e3]) && 0 < t2[e3].length && qa(n2, t2, e3);
          });
        }), n2;
      }, Va = function e2(t2, n2, r2) {
        var a2 = window2.getComputedStyle(t2, null);
        if (!a2) return false;
        for (var o2 = 0; o2 < n2.length; ++o2) {
          var i2 = n2[o2];
          if (a2.getPropertyValue(i2.property) === i2.value) return true;
        }
        return !(!t2.parentNode || t2.nodeName.toUpperCase() === r2.toUpperCase()) && e2(t2.parentNode, n2, r2);
      }, E = function(e2, t2) {
        if (!e2) throw new Error(t2);
      }, $a = function(e2) {
        return Array.prototype.slice.call(e2);
      }, m = function(e2) {
        for (var t2, n2 = String(e2), r2 = n2.length, a2 = -1, o2 = "", i2 = n2.charCodeAt(0); ++a2 < r2; ) 0 == (t2 = n2.charCodeAt(a2)) ? o2 += "\uFFFD" : o2 += 1 <= t2 && t2 <= 31 || 127 == t2 || 0 == a2 && 48 <= t2 && t2 <= 57 || 1 == a2 && 48 <= t2 && t2 <= 57 && 45 == i2 ? "\\" + t2.toString(16) + " " : (0 != a2 || 1 != r2 || 45 != t2) && (128 <= t2 || 45 == t2 || 95 == t2 || 48 <= t2 && t2 <= 57 || 65 <= t2 && t2 <= 90 || 97 <= t2 && t2 <= 122) ? n2.charAt(a2) : "\\" + n2.charAt(a2);
        return o2;
      };
      function Ha(e2, t2) {
        return [e2.substring(0, t2), e2.substring(t2)];
      }
      function Ua(e2) {
        return e2.replace(/\s+$/, "");
      }
      var Ga, Wa = function() {
        var e2, t2, n2, r2, a2, o2, i2, l2, u2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : "", s2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
        if (!(u2.length <= 1 || "data:" === u2.substr(0, 5) || "javascript:" === u2.substr(0, 11) || u2.includes("?"))) return e2 = s2.currentDomain, s2 = void 0 === (s2 = s2.maxLength) ? 25 : s2, i2 = o2 = l2 = a2 = r2 = "", (n2 = u2 = u2).includes("#") && (u2 = (t2 = D(Ha(u2, u2.indexOf("#")), 2))[0], i2 = t2[1]), u2.includes("?") && (u2 = (t2 = D(Ha(u2, u2.indexOf("?")), 2))[0], o2 = t2[1]), u2.includes("://") ? (r2 = (t2 = D(u2.split("://"), 2))[0], a2 = (t2 = D(Ha(u2 = t2[1], u2.indexOf("/")), 2))[0], u2 = t2[1]) : "//" === u2.substr(0, 2) && (a2 = (t2 = D(Ha(u2 = u2.substr(2), u2.indexOf("/")), 2))[0], u2 = t2[1]), (a2 = "www." === a2.substr(0, 4) ? a2.substr(4) : a2) && a2.includes(":") && (a2 = (t2 = D(Ha(a2, a2.indexOf(":")), 2))[0], l2 = t2[1]), n2 = (t2 = { original: n2, protocol: r2, domain: a2, port: l2, path: u2, query: o2, hash: i2 }).domain, r2 = t2.hash, l2 = (a2 = t2.path).substr(a2.substr(0, a2.length - 2).lastIndexOf("/") + 1), r2 ? l2 && (l2 + r2).length <= s2 ? Ua(l2 + r2) : l2.length < 2 && 2 < r2.length && r2.length <= s2 ? Ua(r2) : void 0 : n2 && n2.length < s2 && a2.length <= 1 || a2 === "/" + l2 && n2 && e2 && n2 !== e2 && (n2 + a2).length <= s2 ? Ua(n2 + a2) : (-1 === (u2 = l2.lastIndexOf(".")) || 1 < u2) && (-1 !== u2 || 2 < l2.length) && l2.length <= s2 && !l2.match(/index(\.[a-zA-Z]{2-4})?/) && !function(e3) {
          return 0 !== (e3 = 0 < arguments.length && void 0 !== e3 ? e3 : "").length && (e3.match(/[0-9]/g) || "").length >= e3.length / 2;
        }(l2) ? Ua(l2) : void 0;
      }, Ya = function(e2) {
        return (e2.attributes instanceof window2.NamedNodeMap ? e2 : e2.cloneNode(false)).attributes;
      }, Ka = function(e2, t2) {
        return !!e2[Ga = Ga && e2[Ga] ? Ga : function(e3) {
          for (var t3, n2 = ["matches", "matchesSelector", "mozMatchesSelector", "webkitMatchesSelector", "msMatchesSelector"], r2 = n2.length, a2 = 0; a2 < r2; a2++) if (e3[t3 = n2[a2]]) return t3;
        }(e2)] && e2[Ga](t2);
      }, Xa = Pe(yn()), n = (axe._memoizedFns = [], function(e2) {
        return e2 = (0, Xa.default)(e2), axe._memoizedFns.push(e2), e2;
      }), Za = n(function(e2) {
        return !(null == e2 || !e2.createElement) && "A" === e2.createElement("A").localName;
      });
      function Ja(t2, e2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        if (!e2) return "";
        var r2 = e2.getRootNode && e2.getRootNode() || document;
        if (11 !== r2.nodeType) return t2(e2, n2, r2);
        for (var a2 = []; 11 === r2.nodeType; ) {
          if (!r2.host) return "";
          a2.unshift({ elm: e2, doc: r2 }), r2 = (e2 = r2.host).getRootNode();
        }
        return a2.unshift({ elm: e2, doc: r2 }), a2.map(function(e3) {
          return t2(e3.elm, n2, e3.doc);
        });
      }
      var Qa = ["class", "style", "id", "selected", "checked", "disabled", "tabindex", "aria-checked", "aria-selected", "aria-invalid", "aria-activedescendant", "aria-busy", "aria-disabled", "aria-expanded", "aria-grabbed", "aria-pressed", "aria-valuenow", "xmlns"], eo = 31, to = /([\\"])/g, no = /(\r\n|\r|\n)/g;
      function ro(e2) {
        return e2.replace(to, "\\$1").replace(no, "\\a ");
      }
      function ao(e2, t2) {
        var n2, r2 = t2.name;
        return -1 !== r2.indexOf("href") || -1 !== r2.indexOf("src") ? (n2 = Wa(e2.getAttribute(r2))) ? m(t2.name) + '$="' + ro(n2) + '"' : m(t2.name) + '="' + ro(e2.getAttribute(r2)) + '"' : m(r2) + '="' + ro(t2.value) + '"';
      }
      function oo(e2, t2) {
        return e2.count < t2.count ? -1 : e2.count === t2.count ? 0 : 1;
      }
      function io(e2) {
        return !Qa.includes(e2.name) && -1 === e2.name.indexOf(":") && (!e2.value || e2.value.length < eo);
      }
      function lo(e2) {
        for (var r2 = { classes: {}, tags: {}, attributes: {} }, a2 = (e2 = Array.isArray(e2) ? e2 : [e2]).slice(), o2 = []; a2.length; ) !function() {
          var e3, t2 = a2.pop(), n2 = t2.actualNode;
          for (n2.querySelectorAll && (e3 = n2.nodeName, r2.tags[e3] ? r2.tags[e3]++ : r2.tags[e3] = 1, n2.classList && Array.from(n2.classList).forEach(function(e4) {
            e4 = m(e4);
            r2.classes[e4] ? r2.classes[e4]++ : r2.classes[e4] = 1;
          }), n2.hasAttributes()) && Array.from(Ya(n2)).filter(io).forEach(function(e4) {
            e4 = ao(n2, e4);
            e4 && (r2.attributes[e4] ? r2.attributes[e4]++ : r2.attributes[e4] = 1);
          }), t2.children.length && (o2.push(a2), a2 = t2.children.slice()); !a2.length && o2.length; ) a2 = o2.pop();
        }();
        return r2;
      }
      function uo(e2) {
        var t2 = Za(document);
        return m(t2 ? e2.localName : e2.nodeName.toLowerCase());
      }
      function so(e2, t2) {
        var n2, r2, a2, o2, i2, l2, u2, s2, c2, d2 = "", p2 = (r2 = e2, a2 = [], o2 = t2.classes, i2 = t2.tags, r2.classList && Array.from(r2.classList).forEach(function(e3) {
          e3 = m(e3);
          o2[e3] < i2[r2.nodeName] && a2.push({ name: e3, count: o2[e3], species: "class" });
        }), a2.sort(oo)), t2 = (l2 = e2, u2 = [], s2 = t2.attributes, c2 = t2.tags, l2.hasAttributes() && Array.from(Ya(l2)).filter(io).forEach(function(e3) {
          e3 = ao(l2, e3);
          e3 && s2[e3] < c2[l2.nodeName] && u2.push({ name: e3, count: s2[e3], species: "attribute" });
        }), u2.sort(oo));
        return p2.length && 1 === p2[0].count ? n2 = [p2[0]] : t2.length && 1 === t2[0].count ? (n2 = [t2[0]], d2 = uo(e2)) : ((n2 = p2.concat(t2)).sort(oo), (n2 = n2.slice(0, 3)).some(function(e3) {
          return "class" === e3.species;
        }) ? n2.sort(function(e3, t3) {
          return e3.species !== t3.species && "class" === e3.species ? -1 : e3.species === t3.species ? 0 : 1;
        }) : d2 = uo(e2)), d2 + n2.reduce(function(e3, t3) {
          switch (t3.species) {
            case "class":
              return e3 + "." + t3.name;
            case "attribute":
              return e3 + "[" + t3.name + "]";
          }
          return e3;
        }, "");
      }
      function co(e2, t2, n2) {
        if (!axe._selectorData) throw new Error("Expect axe._selectorData to be set up");
        var r2, a2, t2 = t2.toRoot, o2 = void 0 !== t2 && t2;
        do {
          var i2 = function(e3) {
            var t3;
            if (e3.getAttribute("id")) return t3 = e3.getRootNode && e3.getRootNode() || document, (e3 = "#" + m(e3.getAttribute("id") || "")).match(/player_uid_/) || 1 !== t3.querySelectorAll(e3).length ? void 0 : e3;
          }(e2);
          i2 || (i2 = so(e2, axe._selectorData), i2 += function(t3, n3) {
            var e3 = t3.parentNode && Array.from(t3.parentNode.children || "") || [];
            return e3.find(function(e4) {
              return e4 !== t3 && Ka(e4, n3);
            }) ? ":nth-child(" + (1 + e3.indexOf(t3)) + ")" : "";
          }(e2, i2)), r2 = r2 ? i2 + " > " + r2 : i2, a2 = a2 ? a2.filter(function(e3) {
            return Ka(e3, r2);
          }) : Array.from(n2.querySelectorAll(r2)), e2 = e2.parentElement;
        } while ((1 < a2.length || o2) && e2 && 11 !== e2.nodeType);
        return 1 === a2.length ? r2 : -1 !== r2.indexOf(" > ") ? ":root" + r2.substring(r2.indexOf(" > ")) : ":root";
      }
      function po(e2, t2) {
        return Ja(co, e2, t2);
      }
      function fo(e2) {
        var t2, n2 = e2.nodeName.toLowerCase(), r2 = e2.parentElement;
        return r2 ? (t2 = "", "head" !== n2 && "body" !== n2 && 1 < r2.children.length && (e2 = Array.prototype.indexOf.call(r2.children, e2) + 1, t2 = ":nth-child(".concat(e2, ")")), fo(r2) + " > " + n2 + t2) : n2;
      }
      function mo(e2, t2) {
        return Ja(fo, e2, t2);
      }
      var ho = function(e2) {
        return function e3(t2, n2) {
          var r2, a2, o2, i2;
          if (!t2) return [];
          if (!n2 && 9 === t2.nodeType) return n2 = [{ str: "html" }];
          if (n2 = n2 || [], t2.parentNode && t2.parentNode !== t2 && (n2 = e3(t2.parentNode, n2)), t2.previousSibling) {
            for (a2 = 1, r2 = t2.previousSibling; 1 === r2.nodeType && r2.nodeName === t2.nodeName && a2++, r2 = r2.previousSibling; ) ;
            1 === a2 && (a2 = null);
          } else if (t2.nextSibling) for (r2 = t2.nextSibling; r2 = 1 === r2.nodeType && r2.nodeName === t2.nodeName ? (a2 = 1, null) : (a2 = null, r2.previousSibling); ) ;
          return 1 === t2.nodeType && ((o2 = {}).str = t2.nodeName.toLowerCase(), (i2 = t2.getAttribute && m(t2.getAttribute("id"))) && 1 === t2.ownerDocument.querySelectorAll("#" + i2).length && (o2.id = t2.getAttribute("id")), 1 < a2 && (o2.count = a2), n2.push(o2)), n2;
        }(e2).reduce(function(e3, t2) {
          return t2.id ? "/".concat(t2.str, "[@id='").concat(t2.id, "']") : e3 + "/".concat(t2.str) + (0 < t2.count ? "[".concat(t2.count, "]") : "");
        }, "");
      }, go = {}, v = { set: function(e2, t2) {
        var n2;
        E("string" == typeof (n2 = e2), "key must be a string, " + te(n2) + " given"), E("" !== n2, "key must not be empty"), go[e2] = t2;
      }, get: function(e2, t2) {
        var n2;
        return E("function" == typeof (n2 = t2) || void 0 === n2, "creator must be a function or undefined, " + te(n2) + " given"), e2 in go ? go[e2] : "function" == typeof t2 ? (n2 = t2(), E(void 0 !== n2, "Cache creator function should not return undefined"), this.set(e2, n2), go[e2]) : void 0;
      }, clear: function() {
        go = {};
      } }, g = function(e2, t2) {
        return t2 = t2 || e2, v.get("nodeMap") ? v.get("nodeMap").get(t2) : null;
      }, bo = "DqElm.RunOptions", vo = n(function(e2, t2, n2) {
        var r2, a2;
        return null == n2 && (n2 = {}), t2 = (t2 = null == t2 ? null : t2) || (null != (r2 = v.get(bo)) ? r2 : {}), this.spec = n2, e2 instanceof p ? (this._virtualNode = e2, this._element = e2.actualNode) : (this._element = e2, this._virtualNode = g(e2)), this.fromFrame = 1 < (null == (r2 = this.spec.selector) ? void 0 : r2.length), this._includeElementInJson = t2.elementRef, t2.absolutePaths && (this._options = { toRoot: true }), this.nodeIndexes = [], Array.isArray(this.spec.nodeIndexes) ? this.nodeIndexes = this.spec.nodeIndexes : "number" == typeof (null == (n2 = this._virtualNode) ? void 0 : n2.nodeIndex) && (this.nodeIndexes = [this._virtualNode.nodeIndex]), this.source = null, axe._audit.noHtml || (this.source = null != (e2 = this.spec.source) ? e2 : null != (r2 = this._element) && r2.outerHTML ? ((t2 = r2.outerHTML) || "function" != typeof window2.XMLSerializer || (t2 = new window2.XMLSerializer().serializeToString(r2)), (r2 = t2 || "").length > (a2 = a2 || 300) && (a2 = r2.indexOf(">"), r2 = r2.substring(0, a2 + 1)), r2) : ""), this;
      }), yo = (vo.prototype = { get selector() {
        return this.spec.selector || [po(this.element, this._options)];
      }, get ancestry() {
        return this.spec.ancestry || [mo(this.element)];
      }, get xpath() {
        return this.spec.xpath || [ho(this.element)];
      }, get element() {
        return this._element;
      }, toJSON: function() {
        var e2 = { selector: this.selector, source: this.source, xpath: this.xpath, ancestry: this.ancestry, nodeIndexes: this.nodeIndexes, fromFrame: this.fromFrame };
        return this._includeElementInJson && (e2.element = this._element), e2;
      } }, vo.fromFrame = function(e2, t2, n2) {
        e2 = vo.mergeSpecs(e2, n2);
        return new vo(n2.element, t2, e2);
      }, vo.mergeSpecs = function(e2, t2) {
        return h({}, e2, { selector: [].concat(w(t2.selector), w(e2.selector)), ancestry: [].concat(w(t2.ancestry), w(e2.ancestry)), xpath: [].concat(w(t2.xpath), w(e2.xpath)), nodeIndexes: [].concat(w(t2.nodeIndexes), w(e2.nodeIndexes)), fromFrame: true });
      }, vo.setRunOptions = function(e2) {
        var t2 = e2.elementRef, e2 = e2.absolutePaths;
        v.set(bo, { elementRef: t2, absolutePaths: e2 });
      }, vo), wo = function(t2, e2, n2, r2) {
        return { isAsync: false, async: function() {
          return this.isAsync = true, function(e3) {
            e3 instanceof Error == false ? (t2.result = e3, n2(t2)) : r2(e3);
          };
        }, data: function(e3) {
          t2.data = e3;
        }, relatedNodes: function(e3) {
          window2.Node && (e3 = e3 instanceof window2.Node || e3 instanceof p ? [e3] : $a(e3), t2.relatedNodes = [], e3.forEach(function(e4) {
            (e4 = e4 instanceof p ? e4.actualNode : e4) instanceof window2.Node && (e4 = new yo(e4), t2.relatedNodes.push(e4));
          }));
        } };
      };
      function Do(e2) {
        return function t2(e3, n2) {
          var r2;
          if (null === e3 || "object" !== te(e3)) return e3;
          if (null != (r2 = window2) && r2.Node && e3 instanceof window2.Node || null != (r2 = window2) && r2.HTMLCollection && e3 instanceof window2.HTMLCollection || "nodeName" in e3 && "nodeType" in e3 && "ownerDocument" in e3) return e3;
          if (n2.has(e3)) return n2.get(e3);
          {
            var a2;
            if (Array.isArray(e3)) return a2 = [], n2.set(e3, a2), e3.forEach(function(e4) {
              a2.push(t2(e4, n2));
            }), a2;
          }
          var o2 = {};
          n2.set(e3, o2);
          for (var i2 in e3) o2[i2] = t2(e3[i2], n2);
          return o2;
        }(e2, /* @__PURE__ */ new Map());
      }
      (a = new (Pe(En())).CssSelectorParser()).registerSelectorPseudos("not"), a.registerSelectorPseudos("is"), a.registerNestingOperators(">"), a.registerAttrEqualityMods("^", "$", "*", "~");
      var xo = a;
      function Eo(t2, e2) {
        return To(e2).some(function(e3) {
          return Ro(t2, e3);
        });
      }
      function Fo(e2, t2) {
        return i2 = t2, 1 === (o2 = e2).props.nodeType && ("*" === i2.tag || o2.props.nodeName === i2.tag) && (a2 = e2, !(o2 = t2).classes || o2.classes.every(function(e3) {
          return a2.hasClass(e3.value);
        })) && (r2 = e2, !(i2 = t2).attributes || i2.attributes.every(function(e3) {
          var t3 = r2.attr(e3.key);
          return null !== t3 && e3.test(t3);
        })) && (o2 = e2, !(i2 = t2).id || o2.props.id === i2.id) && (n2 = e2, !((o2 = t2).pseudos && !o2.pseudos.every(function(e3) {
          if ("not" === e3.name) return !e3.expressions.some(function(e4) {
            return Ro(n2, e4);
          });
          if ("is" === e3.name) return e3.expressions.some(function(e4) {
            return Ro(n2, e4);
          });
          throw new Error("the pseudo selector " + e3.name + " has not yet been implemented");
        })));
        var n2, r2, a2, o2, i2;
      }
      Ao = /(?=[\-\[\]{}()*+?.\\\^$|,#\s])/g;
      var Ao, Co = function(e2) {
        return e2.replace(Ao, "\\");
      }, ko = /\\/g;
      function No(e2) {
        return e2.map(function(e3) {
          for (var t2 = [], n2 = e3.rule; n2; ) t2.push({ tag: n2.tagName ? n2.tagName.toLowerCase() : "*", combinator: n2.nestingOperator || " ", id: n2.id, attributes: function(e4) {
            if (e4) return e4.map(function(e5) {
              var t3, n3, r2 = e5.name.replace(ko, ""), a2 = (e5.value || "").replace(ko, "");
              switch (e5.operator) {
                case "^=":
                  n3 = new RegExp("^" + Co(a2));
                  break;
                case "$=":
                  n3 = new RegExp(Co(a2) + "$");
                  break;
                case "~=":
                  n3 = new RegExp("(^|\\s)" + Co(a2) + "(\\s|$)");
                  break;
                case "|=":
                  n3 = new RegExp("^" + Co(a2) + "(-|$)");
                  break;
                case "=":
                  t3 = function(e6) {
                    return a2 === e6;
                  };
                  break;
                case "*=":
                  t3 = function(e6) {
                    return e6 && e6.includes(a2);
                  };
                  break;
                case "!=":
                  t3 = function(e6) {
                    return a2 !== e6;
                  };
                  break;
                default:
                  t3 = function(e6) {
                    return null !== e6;
                  };
              }
              return "" === a2 && /^[*$^]=$/.test(e5.operator) && (t3 = function() {
                return false;
              }), { key: r2, value: a2, type: void 0 === e5.value ? "attrExist" : "attrValue", test: t3 = t3 || function(e6) {
                return e6 && n3.test(e6);
              } };
            });
          }(n2.attrs), classes: function(e4) {
            if (e4) return e4.map(function(e5) {
              return { value: e5 = e5.replace(ko, ""), regexp: new RegExp("(^|\\s)" + Co(e5) + "(\\s|$)") };
            });
          }(n2.classNames), pseudos: function(e4) {
            if (e4) return e4.map(function(e5) {
              var t3;
              return ["is", "not"].includes(e5.name) && (t3 = No(t3 = (t3 = e5.value).selectors || [t3])), { name: e5.name, expressions: t3, value: e5.value };
            });
          }(n2.pseudos) }), n2 = n2.rule;
          return t2;
        });
      }
      function To(e2) {
        e2 = xo.parse(e2);
        return No(e2.selectors || [e2]);
      }
      function Ro(e2, t2, n2) {
        return function e3(t3, n3, r2, a2) {
          if (!t3) return false;
          for (var o2 = Array.isArray(n3) ? n3[r2] : n3, i2 = Fo(t3, o2); !i2 && a2 && t3.parent; ) i2 = Fo(t3 = t3.parent, o2);
          if (0 < r2) {
            if (false === [" ", ">"].includes(o2.combinator)) throw new Error("axe.utils.matchesExpression does not support the combinator: " + o2.combinator);
            i2 = i2 && e3(t3.parent, n3, r2 - 1, " " === o2.combinator);
          }
          return i2;
        }(e2, t2, t2.length - 1, n2);
      }
      var Oo = function(e2, t2) {
        for (; e2; ) {
          if (Eo(e2, t2)) return e2;
          if (void 0 === e2.parent) throw new TypeError("Cannot resolve parent for non-DOM nodes");
          e2 = e2.parent;
        }
        return null;
      };
      function _o() {
      }
      function So(e2) {
        if ("function" != typeof e2) throw new TypeError("Queue methods require functions as arguments");
      }
      for (var Mo, Po, Io, Bo = function() {
        function t2(e2) {
          r2 = e2, setTimeout(function() {
            null != r2 && Na("Uncaught error (of queue)", r2);
          }, 1);
        }
        var r2, a2 = [], n2 = 0, o2 = 0, i2 = _o, l2 = false, u2 = t2;
        function s2(e2) {
          return i2 = _o, u2(e2), a2;
        }
        function c2() {
          for (var e2 = a2.length; n2 < e2; n2++) {
            var t3 = a2[n2];
            try {
              t3.call(null, /* @__PURE__ */ function(t4) {
                return function(e3) {
                  a2[t4] = e3, --o2 || i2 === _o || (l2 = true, i2(a2));
                };
              }(n2), s2);
            } catch (e3) {
              s2(e3);
            }
          }
        }
        var d2 = { defer: function(e2) {
          var n3;
          if ("object" === te(e2) && e2.then && e2.catch && (n3 = e2, e2 = function(e3, t3) {
            n3.then(e3).catch(t3);
          }), So(e2), void 0 === r2) {
            if (l2) throw new Error("Queue already completed");
            return a2.push(e2), ++o2, c2(), d2;
          }
        }, then: function(e2) {
          if (So(e2), i2 !== _o) throw new Error("queue `then` already set");
          return r2 || (i2 = e2, o2) || (l2 = true, i2(a2)), d2;
        }, catch: function(e2) {
          if (So(e2), u2 !== t2) throw new Error("queue `catch` already set");
          return r2 ? (e2(r2), r2 = null) : u2 = e2, d2;
        }, abort: s2 };
        return d2;
      }, jo = window2.crypto || window2.msCrypto, Lo = (!Po && jo && jo.getRandomValues && (Mo = new Uint8Array(16), Po = function() {
        return jo.getRandomValues(Mo), Mo;
      }), Po || (Io = new Array(16), Po = function() {
        for (var e2, t2 = 0; t2 < 16; t2++) 0 == (3 & t2) && (e2 = 4294967296 * Math.random()), Io[t2] = e2 >>> ((3 & t2) << 3) & 255;
        return Io;
      }), "function" == typeof window2.Buffer ? window2.Buffer : Array), r = [], qo = {}, zo = 0; zo < 256; zo++) r[zo] = (zo + 256).toString(16).substr(1), qo[r[zo]] = zo;
      function Vo(e2, t2) {
        t2 = t2 || 0;
        return r[e2[t2++]] + r[e2[t2++]] + r[e2[t2++]] + r[e2[t2++]] + "-" + r[e2[t2++]] + r[e2[t2++]] + "-" + r[e2[t2++]] + r[e2[t2++]] + "-" + r[e2[t2++]] + r[e2[t2++]] + "-" + r[e2[t2++]] + r[e2[t2++]] + r[e2[t2++]] + r[e2[t2++]] + r[e2[t2++]] + r[e2[+t2]];
      }
      var $o = [1 | (a = Po())[0], a[1], a[2], a[3], a[4], a[5]], Ho = 16383 & (a[6] << 8 | a[7]), Uo = 0, Go = 0;
      function Wo(e2, t2, n2) {
        var r2 = t2 && n2 || 0, a2 = t2 || [], n2 = null != (e2 = e2 || {}).clockseq ? e2.clockseq : Ho, o2 = null != e2.msecs ? e2.msecs : (/* @__PURE__ */ new Date()).getTime(), i2 = null != e2.nsecs ? e2.nsecs : Go + 1, l2 = o2 - Uo + (i2 - Go) / 1e4;
        if (l2 < 0 && null == e2.clockseq && (n2 = n2 + 1 & 16383), 1e4 <= (i2 = (l2 < 0 || Uo < o2) && null == e2.nsecs ? 0 : i2)) throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
        Uo = o2, Ho = n2;
        for (var l2 = (1e4 * (268435455 & (o2 += 122192928e5)) + (Go = i2)) % 4294967296, i2 = (a2[r2++] = l2 >>> 24 & 255, a2[r2++] = l2 >>> 16 & 255, a2[r2++] = l2 >>> 8 & 255, a2[r2++] = 255 & l2, o2 / 4294967296 * 1e4 & 268435455), u2 = (a2[r2++] = i2 >>> 8 & 255, a2[r2++] = 255 & i2, a2[r2++] = i2 >>> 24 & 15 | 16, a2[r2++] = i2 >>> 16 & 255, a2[r2++] = n2 >>> 8 | 128, a2[r2++] = 255 & n2, e2.node || $o), s2 = 0; s2 < 6; s2++) a2[r2 + s2] = u2[s2];
        return t2 || Vo(a2);
      }
      function Yo(e2, t2, n2) {
        var r2 = t2 && n2 || 0, a2 = ("string" == typeof e2 && (t2 = "binary" == e2 ? new Lo(16) : null, e2 = null), (e2 = e2 || {}).random || (e2.rng || Po)());
        if (a2[6] = 15 & a2[6] | 64, a2[8] = 63 & a2[8] | 128, t2) for (var o2 = 0; o2 < 16; o2++) t2[r2 + o2] = a2[o2];
        return t2 || Vo(a2);
      }
      (a = Yo).v1 = Wo, a.v4 = Yo, a.parse = function(e2, t2, n2) {
        var r2 = t2 && n2 || 0, a2 = 0;
        for (t2 = t2 || [], e2.toLowerCase().replace(/[0-9a-f]{2}/g, function(e3) {
          a2 < 16 && (t2[r2 + a2++] = qo[e3]);
        }); a2 < 16; ) t2[r2 + a2++] = 0;
        return t2;
      }, a.unparse = Vo, a.BufferClass = Lo, axe._uuid = Wo();
      var Ko = Yo, Xo = Object.freeze(["EvalError", "RangeError", "ReferenceError", "SyntaxError", "TypeError", "URIError"]);
      function Zo(e2) {
        var t2, n2, r2, a2;
        try {
          t2 = JSON.parse(e2);
        } catch (e3) {
          return;
        }
        if (null !== (e2 = t2) && "object" === te(e2) && "string" == typeof e2.channelId && e2.source === Jo()) return n2 = (e2 = t2).topic, r2 = e2.channelId, a2 = e2.messageId, e2 = e2.keepalive, { topic: n2, message: "object" === te(t2.error) ? function(e3) {
          var t3 = e3.message || "Unknown error occurred", n3 = Xo.includes(e3.name) ? e3.name : "Error", n3 = window2[n3] || Error;
          e3.stack && (t3 += "\n" + e3.stack.replace(e3.message, ""));
          return new n3(t3);
        }(t2.error) : t2.payload, messageId: a2, channelId: r2, keepalive: !!e2 };
      }
      function Jo() {
        var e2 = "axeAPI", t2 = "";
        return (e2 = void 0 !== axe && axe._audit && axe._audit.application ? axe._audit.application : e2) + "." + (t2 = void 0 !== axe ? axe.version : t2);
      }
      function Qo(e2) {
        ti(e2), E(window2.parent === e2, "Source of the response must be the parent window.");
      }
      function ei(e2) {
        ti(e2), E(e2.parent === window2, "Respondable target must be a frame in the current window");
      }
      function ti(e2) {
        E(window2 !== e2, "Messages can not be sent to the same window.");
      }
      var ni = {}, ri = [];
      function ai() {
        var e2 = "".concat(Yo(), ":").concat(Yo());
        return ri.includes(e2) ? ai() : (ri.push(e2), e2);
      }
      function oi(n2, e2, t2, r2) {
        var a2, o2, i2, l2, u2;
        return (t2 ? Qo : ei)(n2), e2.message instanceof Error && !t2 ? (axe.log(e2.message), false) : (o2 = h({ messageId: ai() }, e2), u2 = o2.topic, i2 = o2.channelId, l2 = o2.message, i2 = { channelId: i2, topic: u2, messageId: o2.messageId, keepalive: !!o2.keepalive, source: Jo() }, l2 instanceof Error ? i2.error = { name: l2.name, message: l2.message, stack: l2.stack } : i2.payload = l2, a2 = JSON.stringify(i2), !(!(u2 = axe._audit.allowedOrigins) || !u2.length || ("function" == typeof r2 && function(e3, t3, n3) {
          n3 = !(2 < arguments.length && void 0 !== n3) || n3, E(!ni[e3], "A replyHandler already exists for this message channel."), ni[e3] = { replyHandler: t3, sendToParent: n3 };
        }(e2.channelId, r2, t2), u2.forEach(function(t3) {
          try {
            n2.postMessage(a2, t3);
          } catch (e3) {
            if (e3 instanceof n2.DOMException) throw new Error('allowedOrigins value "'.concat(t3, '" is not a valid origin'));
            throw e3;
          }
        }), 0)));
      }
      function ii(r2, a2, e2) {
        var o2 = !(2 < arguments.length && void 0 !== e2) || e2;
        return function(e3, t2, n2) {
          oi(r2, { channelId: a2, message: e3, keepalive: t2 }, o2, n2);
        };
      }
      function li(t2, e2) {
        var n2, r2, a2, o2 = t2.origin, i2 = t2.data, t2 = t2.source;
        try {
          var l2 = Zo(i2) || {}, u2 = l2.channelId, s2 = l2.message, c2 = l2.messageId;
          if (r2 = o2, ((a2 = axe._audit.allowedOrigins) && a2.includes("*") || a2.includes(r2)) && (n2 = c2, !ri.includes(n2)) && (ri.push(n2), true)) if (s2 instanceof Error && t2.parent !== window2) axe.log(s2);
          else try {
            if (l2.topic) {
              var d2 = ii(t2, u2);
              Qo(t2), e2(l2, d2);
            } else {
              var p2 = t2, f2 = (h2 = l2).channelId, m2 = h2.message, h2 = h2.keepalive, g2 = (b2 = function(e3) {
                return ni[e3];
              }(f2) || {}).replyHandler, b2 = b2.sendToParent;
              if (g2) {
                (b2 ? Qo : ei)(p2);
                p2 = ii(p2, f2, b2);
                !h2 && f2 && !function(e3) {
                  delete ni[e3];
                }(f2);
                try {
                  g2(m2, h2, p2);
                } catch (e3) {
                  axe.log(e3), p2(e3, h2);
                }
              }
            }
          } catch (e3) {
            var v2 = t2, y2 = e3, w2 = u2;
            if (!v2.parent !== window2) axe.log(y2);
            else try {
              oi(v2, { topic: null, channelId: w2, message: y2, messageId: ai(), keepalive: true }, true);
            } catch (e4) {
              return void axe.log(e4);
            }
          }
        } catch (e3) {
          axe.log(e3);
        }
      }
      var ui, si, ci = { open: function(t2) {
        var e2;
        if ("function" == typeof window2.addEventListener) return window2.addEventListener("message", e2 = function(e3) {
          li(e3, t2);
        }, false), function() {
          window2.removeEventListener("message", e2, false);
        };
      }, post: function(e2, t2, n2) {
        return "function" == typeof window2.addEventListener && oi(e2, t2, false, n2);
      } };
      function di(e2) {
        e2.updateMessenger(ci);
      }
      var pi = {};
      function fi(e2, t2, n2, r2, a2) {
        t2 = { topic: t2, message: n2, channelId: "".concat(Yo(), ":").concat(Yo()), keepalive: r2 };
        return si(e2, t2, a2);
      }
      function mi(t2, n2) {
        var e2 = t2.topic, r2 = t2.message, t2 = t2.keepalive, e2 = pi[e2];
        if (e2) try {
          e2(r2, t2, n2);
        } catch (e3) {
          axe.log(e3), n2(e3, t2);
        }
      }
      function hi(e2, t2, n2, r2) {
        var a2, o2 = e2.contentWindow, i2 = null != (i2 = null == (i2 = t2.options) ? void 0 : i2.pingWaitTime) ? i2 : 500;
        o2 ? 0 === i2 ? gi(e2, t2, n2, r2) : (a2 = setTimeout(function() {
          a2 = setTimeout(function() {
            t2.debug ? r2(bi("No response from frame", e2)) : n2(null);
          }, 0);
        }, i2), fi(o2, "axe.ping", null, void 0, function() {
          clearTimeout(a2), gi(e2, t2, n2, r2);
        })) : (Na("Frame does not have a content window", e2), n2(null));
      }
      function gi(e2, t2, n2, r2) {
        var a2 = null != (a2 = null == (a2 = t2.options) ? void 0 : a2.frameWaitTime) ? a2 : 6e4, o2 = e2.contentWindow, i2 = setTimeout(function() {
          r2(bi("Axe in frame timed out", e2));
        }, a2);
        fi(o2, "axe.start", t2, void 0, function(e3) {
          clearTimeout(i2), (e3 instanceof Error == false ? n2 : r2)(e3);
        });
      }
      function bi(e2, t2) {
        var n2;
        return axe._tree && (n2 = po(t2)), new Error(e2 + ": " + (n2 || t2));
      }
      fi.updateMessenger = function(e2) {
        var t2 = e2.open, e2 = e2.post, t2 = (E("function" == typeof t2, "open callback must be a function"), E("function" == typeof e2, "post callback must be a function"), ui && ui(), t2(mi));
        ui = t2 ? (E("function" == typeof t2, "open callback must return a cleanup function"), t2) : null, si = e2;
      }, fi.subscribe = function(e2, t2) {
        E("function" == typeof t2, "Subscriber callback must be a function"), E(!pi[e2], "Topic ".concat(e2, " is already registered to.")), pi[e2] = t2;
      }, fi.isInFrame = function() {
        return !!(0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window2).frameElement;
      }, di(fi);
      var vi = null, yi = { update: function(e2) {
        E("object" === te(e2), "serializer must be an object"), vi = e2;
      }, toSpec: function(e2) {
        return yi.dqElmToSpec(new yo(e2));
      }, dqElmToSpec: function(e2, t2) {
        var n2, r2, a2, o2, i2;
        return e2 instanceof yo == false ? e2 : (t2 && (r2 = (n2 = e2).fromFrame, a2 = t2.ancestry, o2 = t2.xpath, i2 = false !== t2.selectors || r2, (n2 = new yo(n2.element, t2, { source: n2.source, nodeIndexes: n2.nodeIndexes, selector: i2 ? n2.selector : [":root"], ancestry: a2 ? n2.ancestry : [":root"], xpath: o2 ? n2.xpath : "/" })).fromFrame = r2, e2 = n2), "function" == typeof (null == (t2 = vi) ? void 0 : t2.toSpec) ? vi.toSpec(e2) : e2.toJSON());
      }, mergeSpecs: function(e2, t2) {
        var n2;
        return ("function" == typeof (null == (n2 = vi) ? void 0 : n2.mergeSpecs) ? vi : yo).mergeSpecs(e2, t2);
      }, mapRawResults: function(e2) {
        return e2.map(function(e3) {
          return h({}, e3, { nodes: yi.mapRawNodeResults(e3.nodes) });
        });
      }, mapRawNodeResults: function(e2) {
        return null == e2 ? void 0 : e2.map(function(e3) {
          var t2 = e3.node, n2 = b(e3, M);
          n2.node = yi.dqElmToSpec(t2);
          for (var r2 = 0, a2 = ["any", "all", "none"]; r2 < a2.length; r2++) {
            var o2 = a2[r2];
            n2[o2] = n2[o2].map(function(e4) {
              var t3 = e4.relatedNodes, e4 = b(e4, P);
              return e4.relatedNodes = t3.map(yi.dqElmToSpec), e4;
            });
          }
          return n2;
        });
      } }, wi = yi, Di = function(e2) {
        return [].concat(e2.any || []).concat(e2.all || []).concat(e2.none || []);
      }, xi = function(e2, t2, n2) {
        if (Array.isArray(e2)) return e2.find(function(e3) {
          return null !== e3 && "object" === te(e3) && Object.hasOwn(e3, t2) && e3[t2] === n2;
        });
      };
      function Ei(e2, t2) {
        for (var n2 = 0 < arguments.length && void 0 !== e2 ? e2 : [], r2 = 1 < arguments.length && void 0 !== t2 ? t2 : [], a2 = Math.max(null == n2 ? void 0 : n2.length, null == r2 ? void 0 : r2.length), o2 = 0; o2 < a2; o2++) {
          var i2 = null == n2 ? void 0 : n2[o2], l2 = null == r2 ? void 0 : r2[o2];
          if ("number" != typeof i2 || isNaN(i2)) return 0 === o2 ? 1 : -1;
          if ("number" != typeof l2 || isNaN(l2)) return 0 === o2 ? -1 : 1;
          if (i2 !== l2) return i2 - l2;
        }
        return 0;
      }
      var Fi = function(e2, t2) {
        var c2 = [];
        return e2.forEach(function(e3) {
          var s2, t3 = (t3 = e3) && t3.results ? Array.isArray(t3.results) ? t3.results.length ? t3.results : null : [t3.results] : null;
          t3 && t3.length && (s2 = function(e4) {
            {
              if (e4.frameElement) return wi.toSpec(e4.frameElement);
              if (e4.frameSpec) return e4.frameSpec;
            }
            return null;
          }(e3), t3.forEach(function(e4) {
            e4.nodes && s2 && (n2 = e4.nodes, t4 = s2, n2.forEach(function(e5) {
              e5.node = wi.mergeSpecs(e5.node, t4), Di(e5).forEach(function(e6) {
                e6.relatedNodes = e6.relatedNodes.map(function(e7) {
                  return wi.mergeSpecs(e7, t4);
                });
              });
            }));
            var t4, n2 = xi(c2, "id", e4.id);
            if (n2) {
              if (e4.nodes.length) {
                for (var r2 = n2.nodes, a2 = e4.nodes, o2 = a2[0].node, i2 = 0; i2 < r2.length; i2++) {
                  var l2, u2 = Ei((l2 = r2[i2].node).nodeIndexes, o2.nodeIndexes);
                  if (0 < u2 || 0 === u2 && o2.selector.length < l2.selector.length) return void r2.splice.apply(r2, [i2, 0].concat(w(a2)));
                }
                r2.push.apply(r2, w(a2));
              }
            } else c2.push(e4);
          }));
        }), c2.forEach(function(e3) {
          e3.nodes && e3.nodes.sort(function(e4, t3) {
            return Ei(e4.node.nodeIndexes, t3.node.nodeIndexes);
          });
        }), c2;
      };
      function Ai(e2, a2, o2, i2, t2, n2) {
        a2 = h({}, a2, { elementRef: false });
        var l2 = Bo();
        e2.frames.forEach(function(e3) {
          var n3 = e3.node, r2 = b(e3, I);
          l2.defer(function(t3, e4) {
            hi(n3, { options: a2, command: o2, parameter: i2, context: r2 }, function(e5) {
              return t3(e5 ? { results: e5, frameElement: n3 } : null);
            }, e4);
          });
        }), l2.then(function(e3) {
          t2(Fi(e3, a2));
        }).catch(n2);
      }
      function Ci(e2, t2) {
        if (!e2.shadowId && !t2.shadowId && e2.actualNode && "function" == typeof e2.actualNode.contains) return e2.actualNode.contains(t2.actualNode);
        do {
          if (e2 === t2) return true;
          if (t2.nodeIndex < e2.nodeIndex) return false;
        } while (t2 = t2.parent);
        return false;
      }
      var ki = function a2() {
        for (var o2 = {}, e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
        return t2.forEach(function(e3) {
          if (e3 && "object" === te(e3) && !Array.isArray(e3)) for (var t3 = 0, n3 = Object.keys(e3); t3 < n3.length; t3++) {
            var r2 = n3[t3];
            !o2.hasOwnProperty(r2) || "object" !== te(e3[r2]) || Array.isArray(o2[r2]) ? o2[r2] = e3[r2] : o2[r2] = a2(o2[r2], e3[r2]);
          }
        }), o2;
      }, Ni = function(t2, n2) {
        Object.assign(t2, n2), Object.keys(n2).filter(function(e2) {
          return "function" == typeof n2[e2];
        }).forEach(function(e2) {
          t2[e2] = null;
          try {
            t2[e2] = n2[e2](t2);
          } catch (e3) {
          }
        });
      }, Ti = ["article", "aside", "blockquote", "body", "div", "footer", "h1", "h2", "h3", "h4", "h5", "h6", "header", "main", "nav", "p", "section", "span"], Ri = function(e2) {
        if (e2.shadowRoot) {
          e2 = e2.nodeName.toLowerCase();
          if (Ti.includes(e2) || /^[a-z][a-z0-9_.-]*-[a-z0-9_.-]*$/.test(e2)) return true;
        }
        return false;
      }, Oi = {}, _i = (Se(Oi, { createGrid: function() {
        return kl;
      }, findElmsInContext: function() {
        return Si;
      }, findNearbyElms: function() {
        return Ml;
      }, findUp: function() {
        return Pi;
      }, findUpVirtual: function() {
        return Mi;
      }, focusDisabled: function() {
        return zl;
      }, getComposedParent: function() {
        return s;
      }, getElementByReference: function() {
        return Ul;
      }, getElementCoordinates: function() {
        return rl;
      }, getElementStack: function() {
        return Kl;
      }, getModalDialog: function() {
        return Il;
      }, getOverflowHiddenAncestors: function() {
        return ji;
      }, getRootNode: function() {
        return y;
      }, getScrollOffset: function() {
        return nl;
      }, getTabbableElements: function() {
        return Xl;
      }, getTargetRects: function() {
        return Ql;
      }, getTargetSize: function() {
        return eu;
      }, getTextElementStack: function() {
        return Is;
      }, getViewportSize: function() {
        return al;
      }, getVisibleChildTextRects: function() {
        return Ms;
      }, hasContent: function() {
        return Vs;
      }, hasContentVirtual: function() {
        return zs;
      }, hasLangText: function() {
        return $s;
      }, idrefs: function() {
        return nu;
      }, insertedIntoFocusOrder: function() {
        return Hs;
      }, isCurrentPageLink: function() {
        return Hl;
      }, isFocusable: function() {
        return F;
      }, isHTML5: function() {
        return Ys;
      }, isHiddenForEveryone: function() {
        return Qi;
      }, isHiddenWithCSS: function() {
        return Ws;
      }, isInTabOrder: function() {
        return Jl;
      }, isInTextBlock: function() {
        return Js;
      }, isInert: function() {
        return Bl;
      }, isModalOpen: function() {
        return Qs;
      }, isMultiline: function() {
        return ec;
      }, isNativelyFocusable: function() {
        return Zl;
      }, isNode: function() {
        return tc;
      }, isOffscreen: function() {
        return ol;
      }, isOpaque: function() {
        return zd;
      }, isSkipLink: function() {
        return Vd;
      }, isVisible: function() {
        return Wd;
      }, isVisibleOnScreen: function() {
        return ll;
      }, isVisibleToScreenReaders: function() {
        return k;
      }, isVisualContent: function() {
        return js;
      }, reduceToElementsBelowFloating: function() {
        return Yd;
      }, shadowElementsFromPoint: function() {
        return Zd;
      }, urlPropsFromAttribute: function() {
        return Jd;
      }, visuallyContains: function() {
        return Kd;
      }, visuallyOverlaps: function() {
        return Qd;
      }, visuallySort: function() {
        return Gl;
      } }), function(e2) {
        var t2 = e2.getRootNode && e2.getRootNode() || document;
        return t2 = t2 === e2 ? document : t2;
      }), y = _i, Si = function(e2) {
        var t2 = e2.context, n2 = e2.value, r2 = e2.attr, e2 = void 0 === (e2 = e2.elm) ? "" : e2, n2 = m(n2), t2 = 9 === t2.nodeType || 11 === t2.nodeType ? t2 : y(t2);
        return Array.from(t2.querySelectorAll(e2 + "[" + r2 + "=" + n2 + "]"));
      }, Mi = function(e2, t2) {
        var n2 = e2.actualNode;
        if (!e2.shadowId && "function" == typeof e2.actualNode.closest) return e2.actualNode.closest(t2) || null;
        for (; (n2 = (n2 = n2.assignedSlot || n2.parentNode) && 11 === n2.nodeType ? n2.host : n2) && !Ka(n2, t2) && n2 !== document.documentElement; ) ;
        return n2 && Ka(n2, t2) ? n2 : null;
      }, Pi = function(e2, t2) {
        return Mi(g(e2), t2);
      };
      function Ii(e2, t2) {
        return (0 | e2.left) < (0 | t2.right) && (0 | e2.right) > (0 | t2.left) && (0 | e2.top) < (0 | t2.bottom) && (0 | e2.bottom) > (0 | t2.top);
      }
      var Bi = n(function(e2) {
        var t2 = [];
        return e2 ? ("hidden" === e2.getComputedStylePropertyValue("overflow") && t2.push(e2), t2.concat(Bi(e2.parent))) : t2;
      }), ji = Bi, Li = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, qi = /(\w+)\((\d+)/;
      function zi(e2) {
        return ["style", "script", "noscript", "template"].includes(e2.props.nodeName);
      }
      function Vi(e2) {
        return "area" !== e2.props.nodeName && "none" === e2.getComputedStylePropertyValue("display");
      }
      function $i(e2) {
        return !(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).isAncestor && ["hidden", "collapse"].includes(e2.getComputedStylePropertyValue("visibility"));
      }
      function Hi(e2) {
        return !!(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).isAncestor && "hidden" === e2.getComputedStylePropertyValue("content-visibility");
      }
      function Ui(e2) {
        return "true" === e2.attr("aria-hidden");
      }
      function Gi(e2) {
        return "0" === e2.getComputedStylePropertyValue("opacity");
      }
      function Wi(e2) {
        var t2 = Mp(e2.actualNode), n2 = parseInt(e2.getComputedStylePropertyValue("height")), e2 = parseInt(e2.getComputedStylePropertyValue("width"));
        return !!t2 && (0 === n2 || 0 === e2);
      }
      function Yi(t2) {
        var n2, e2, r2;
        return !(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).isAncestor && "fixed" !== (n2 = t2.getComputedStylePropertyValue("position")) && !!(e2 = ji(t2)).length && (r2 = t2.boundingClientRect, e2.some(function(e3) {
          return !("absolute" === n2 && !function(e4, t3) {
            var n3 = e4.parent;
            for (; n3 && n3 !== t3; ) {
              if (["relative", "sticky"].includes(n3.getComputedStylePropertyValue("position"))) return 1;
              n3 = n3.parent;
            }
            return;
          }(t2, e3) && "static" === e3.getComputedStylePropertyValue("position")) && ((e3 = e3.boundingClientRect).width < 2 || e3.height < 2 || !Ii(r2, e3));
        }));
      }
      function Ki(e2) {
        var t2 = e2.getComputedStylePropertyValue("clip").match(Li), n2 = e2.getComputedStylePropertyValue("clip-path").match(qi);
        if (t2 && 5 === t2.length) {
          e2 = e2.getComputedStylePropertyValue("position");
          if (["fixed", "absolute"].includes(e2)) return t2[3] - t2[1] <= 0 && t2[2] - t2[4] <= 0;
        }
        if (n2) {
          var e2 = n2[1], r2 = parseInt(n2[2], 10);
          switch (e2) {
            case "inset":
              return 50 <= r2;
            case "circle":
              return 0 === r2;
          }
        }
        return false;
      }
      function Xi(e2, t2) {
        var n2, r2 = Oo(e2, "map");
        return !r2 || !((r2 = r2.attr("name")) && (e2 = _i(e2.actualNode)) && 9 === e2.nodeType && (n2 = yf(axe._tree, 'img[usemap="#'.concat(m(r2), '"]'))) && n2.length) || n2.some(function(e3) {
          return !t2(e3);
        });
      }
      function Zi(e2) {
        var t2;
        if ("details" !== (null == (t2 = e2.parent) ? void 0 : t2.props.nodeName)) return false;
        if ("summary" === e2.props.nodeName && e2.parent.children.find(function(e3) {
          return "summary" === e3.props.nodeName;
        }) === e2) return false;
        return !e2.parent.hasAttr("open");
      }
      var Ji = [Vi, $i, Hi, Zi];
      function Qi(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.skipAncestors, t2 = t2.isAncestor, t2 = void 0 !== t2 && t2;
        return e2 = l(e2).vNode, (n2 ? el : tl)(e2, t2);
      }
      var el = n(function(t2, n2) {
        return !!zi(t2) || !(!t2.actualNode || !Ji.some(function(e2) {
          return e2(t2, { isAncestor: n2 });
        }) && t2.actualNode.isConnected);
      }), tl = n(function(e2, t2) {
        return !!el(e2, t2) || !!e2.parent && tl(e2.parent, true);
      }), s = function e2(t2) {
        if (t2.assignedSlot) return e2(t2.assignedSlot);
        if (t2.parentNode) {
          if (1 === (t2 = t2.parentNode).nodeType) return t2;
          if (t2.host) return t2.host;
        }
        return null;
      }, nl = function(e2) {
        var t2, n2;
        return 9 === (e2 = !e2.nodeType && e2.document ? e2.document : e2).nodeType ? (t2 = e2.documentElement, n2 = e2.body, { left: t2 && t2.scrollLeft || n2 && n2.scrollLeft || 0, top: t2 && t2.scrollTop || n2 && n2.scrollTop || 0 }) : { left: e2.scrollLeft, top: e2.scrollTop };
      }, rl = function(e2) {
        var t2 = (n2 = nl(document)).left, n2 = n2.top;
        return { top: (e2 = e2.getBoundingClientRect()).top + n2, right: e2.right + t2, bottom: e2.bottom + n2, left: e2.left + t2, width: e2.right - e2.left, height: e2.bottom - e2.top };
      }, al = function(e2) {
        var t2 = e2.document, n2 = t2.documentElement;
        return e2.innerWidth ? { width: e2.innerWidth, height: e2.innerHeight } : n2 ? { width: n2.clientWidth, height: n2.clientHeight } : { width: (e2 = t2.body).clientWidth, height: e2.clientHeight };
      }, ol = function(e2) {
        if ((1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).isAncestor) return false;
        if (e2 = l(e2).domNode) {
          var t2 = document.documentElement, n2 = window2.getComputedStyle(e2), r2 = window2.getComputedStyle(document.body || t2).getPropertyValue("direction"), a2 = rl(e2);
          if (a2.bottom < 0 && (function(e3, t3) {
            for (e3 = s(e3); e3 && "html" !== e3.nodeName.toLowerCase(); ) {
              if (e3.scrollTop && 0 <= (t3 += e3.scrollTop)) return;
              e3 = s(e3);
            }
            return 1;
          }(e2, a2.bottom) || "absolute" === n2.position)) return true;
          if (0 !== a2.left || 0 !== a2.right) {
            if ("ltr" === r2) {
              if (a2.right <= 0) return true;
            } else if (e2 = Math.max(t2.scrollWidth, al(window2).width), a2.left >= e2) return true;
          }
          return false;
        }
      }, il = [Gi, Wi, Yi, Ki, ol];
      function ll(e2) {
        return e2 = l(e2).vNode, ul(e2);
      }
      var ul = n(function(t2, n2) {
        return t2.actualNode && "area" === t2.props.nodeName ? !Xi(t2, ul) : !(Qi(t2, { skipAncestors: true, isAncestor: n2 }) || t2.actualNode && il.some(function(e2) {
          return e2(t2, { isAncestor: n2 });
        })) && (!t2.parent || ul(t2.parent, true));
      });
      function sl(e2, t2) {
        var n2 = Math.min(e2.top, t2.top), r2 = Math.max(e2.right, t2.right), a2 = Math.max(e2.bottom, t2.bottom), e2 = Math.min(e2.left, t2.left);
        return new window2.DOMRect(e2, n2, r2 - e2, a2 - n2);
      }
      function cl(e2, t2) {
        var n2 = e2.x, e2 = e2.y, r2 = t2.top, a2 = t2.right, o2 = t2.bottom, t2 = t2.left;
        return r2 <= e2 && n2 <= a2 && e2 <= o2 && t2 <= n2;
      }
      var dl = {};
      function pl(e2, t2) {
        var n2 = Math.max(e2.left, t2.left), r2 = Math.min(e2.right, t2.right), a2 = Math.max(e2.top, t2.top), e2 = Math.min(e2.bottom, t2.bottom);
        return r2 <= n2 || e2 <= a2 ? null : new window2.DOMRect(n2, a2, r2 - n2, e2 - a2);
      }
      function fl(e2) {
        var t2 = e2.left, n2 = e2.top, r2 = e2.width, e2 = e2.height;
        return new window2.DOMPoint(t2 + r2 / 2, n2 + e2 / 2);
      }
      Se(dl, { getBoundingRect: function() {
        return sl;
      }, getIntersectionRect: function() {
        return pl;
      }, getOffset: function() {
        return gl;
      }, getRectCenter: function() {
        return fl;
      }, hasVisualOverlap: function() {
        return vl;
      }, isPointInRect: function() {
        return cl;
      }, rectHasMinimumSize: function() {
        return hl;
      }, rectsOverlap: function() {
        return Ii;
      }, splitRects: function() {
        return yl;
      } });
      var ml = 0.05;
      function hl(e2, t2) {
        var n2 = t2.width, t2 = t2.height;
        return e2 <= n2 + ml && e2 <= t2 + ml;
      }
      function gl(e2, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 12, e2 = Ql(e2), r2 = Ql(t2);
        if (!e2.length || !r2.length) return null;
        var a2, o2 = fl(e2.reduce(sl)), i2 = 1 / 0, l2 = x(r2);
        try {
          for (l2.s(); !(a2 = l2.n()).done; ) {
            var u2 = a2.value;
            if (cl(o2, u2)) return 0;
            var s2 = bl(o2, function(e3, t3) {
              var n3;
              n3 = e3.x < t3.left ? t3.left : e3.x > t3.right ? t3.right : e3.x;
              t3 = e3.y < t3.top ? t3.top : e3.y > t3.bottom ? t3.bottom : e3.y;
              return { x: n3, y: t3 };
            }(o2, u2)), i2 = Math.min(i2, s2);
          }
        } catch (e3) {
          l2.e(e3);
        } finally {
          l2.f();
        }
        return hl(2 * n2, eu(t2)) ? i2 : (e2 = bl(o2, fl(r2.reduce(sl))) - n2, Math.max(0, Math.min(i2, e2)));
      }
      function bl(e2, t2) {
        return Math.hypot(e2.x - t2.x, e2.y - t2.y);
      }
      function vl(e2, t2) {
        var n2 = e2.boundingClientRect, r2 = t2.boundingClientRect;
        return !(n2.left >= r2.right || n2.right <= r2.left || n2.top >= r2.bottom || n2.bottom <= r2.top) && 0 < Gl(e2, t2);
      }
      function yl(e2, t2) {
        var r2, a2 = [e2], n2 = x(t2);
        try {
          var o2 = function() {
            var n3 = r2.value;
            if (4e3 < (a2 = a2.reduce(function(e3, t3) {
              return e3.concat(function(e4, t4) {
                var n4 = e4.top, r3 = e4.left, a3 = e4.bottom, o3 = e4.right, i2 = n4 < t4.bottom && a3 > t4.top, l2 = r3 < t4.right && o3 > t4.left, u2 = [];
                wl(t4.top, n4, a3) && l2 && u2.push({ top: n4, left: r3, bottom: t4.top, right: o3 });
                wl(t4.right, r3, o3) && i2 && u2.push({ top: n4, left: t4.right, bottom: a3, right: o3 });
                wl(t4.bottom, n4, a3) && l2 && u2.push({ top: t4.bottom, right: o3, bottom: a3, left: r3 });
                wl(t4.left, r3, o3) && i2 && u2.push({ top: n4, left: r3, bottom: a3, right: t4.left });
                if (0 === u2.length) {
                  if (function(e5, t5) {
                    return e5.top >= t5.top && e5.left >= t5.left && e5.bottom <= t5.bottom && e5.right <= t5.right;
                  }(e4, t4)) return [];
                  u2.push(e4);
                }
                return u2.map(Dl);
              }(t3, n3));
            }, [])).length) throw new Error("splitRects: Too many rects");
          };
          for (n2.s(); !(r2 = n2.n()).done; ) o2();
        } catch (e3) {
          n2.e(e3);
        } finally {
          n2.f();
        }
        return a2;
      }
      var wl = function(e2, t2, n2) {
        return t2 < e2 && e2 < n2;
      };
      function Dl(e2) {
        return new window2.DOMRect(e2.left, e2.top, e2.right - e2.left, e2.bottom - e2.top);
      }
      var xl = 0, El = 0.1, Fl = 0.2, Al = 0.3, Cl = 0;
      function kl() {
        var e2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document.body, t2 = 1 < arguments.length ? arguments[1] : void 0, n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!v.get("gridCreated") || n2) {
          v.set("gridCreated", true), n2 || (a2 = (a2 = g(document.documentElement)) || new rp(document.documentElement), Cl = 0, a2._stackingOrder = [Rl(xl, Cl++, null)], Ol(t2 = null != t2 ? t2 : new _l(), a2), Mp(a2.actualNode) && (r2 = new _l(a2), a2._subGrid = r2));
          for (var r2, a2, o2 = document.createTreeWalker(e2, window2.NodeFilter.SHOW_ELEMENT, null, false), i2 = n2 ? o2.nextNode() : o2.currentNode; i2; ) {
            var l2 = g(i2), u2 = (l2 && l2.parent ? n2 = l2.parent : i2.assignedSlot ? n2 = g(i2.assignedSlot) : i2.parentElement ? n2 = g(i2.parentElement) : i2.parentNode && g(i2.parentNode) && (n2 = g(i2.parentNode)), (l2 = l2 || new axe.VirtualNode(i2, n2))._stackingOrder = function(e3, t3, n3) {
              var r3 = t3._stackingOrder.slice();
              Nl(e3, t3) && -1 !== (a3 = r3.findIndex(function(e4) {
                e4 = e4.stackLevel;
                return [xl, Fl, Al].includes(e4);
              })) && r3.splice(a3, r3.length - a3);
              var a3 = function(e4, t4) {
                var n4 = function(e5, t5) {
                  return "static" !== e5.getComputedStylePropertyValue("position") || Tl(t5) ? e5.getComputedStylePropertyValue("z-index") : "auto";
                }(e4, t4);
                if (!["auto", "0"].includes(n4)) return parseInt(n4);
                if ("static" !== e4.getComputedStylePropertyValue("position")) return Al;
                if ("none" !== e4.getComputedStylePropertyValue("float")) return Fl;
                if (Nl(e4, t4)) return El;
                return null;
              }(e3, t3);
              null !== a3 && r3.push(Rl(a3, n3, e3));
              return r3;
            }(l2, n2, Cl++), function(e3, t3) {
              var n3 = null, r3 = [e3];
              for (; t3; ) {
                if (Mp(t3.actualNode)) {
                  n3 = t3;
                  break;
                }
                if (t3._scrollRegionParent) {
                  n3 = t3._scrollRegionParent;
                  break;
                }
                r3.push(t3), t3 = g(t3.actualNode.parentElement || t3.actualNode.parentNode);
              }
              return r3.forEach(function(e4) {
                return e4._scrollRegionParent = n3;
              }), n3;
            }(l2, n2)), u2 = u2 ? u2._subGrid : t2, s2 = (Mp(l2.actualNode) && (s2 = new _l(l2), l2._subGrid = s2), l2.boundingClientRect);
            0 !== s2.width && 0 !== s2.height && ll(i2) && Ol(u2, l2), Ri(i2) && kl(i2.shadowRoot, u2, l2), i2 = o2.nextNode();
          }
        }
        return f.gridSize;
      }
      function Nl(e2, t2) {
        var n2 = e2.getComputedStylePropertyValue("position"), r2 = e2.getComputedStylePropertyValue("z-index");
        return "fixed" === n2 || "sticky" === n2 || "auto" !== r2 && "static" !== n2 || "1" !== e2.getComputedStylePropertyValue("opacity") || "none" !== (e2.getComputedStylePropertyValue("-webkit-transform") || e2.getComputedStylePropertyValue("-ms-transform") || e2.getComputedStylePropertyValue("transform") || "none") || (n2 = e2.getComputedStylePropertyValue("mix-blend-mode")) && "normal" !== n2 || (n2 = e2.getComputedStylePropertyValue("filter")) && "none" !== n2 || (n2 = e2.getComputedStylePropertyValue("perspective")) && "none" !== n2 || (n2 = e2.getComputedStylePropertyValue("clip-path")) && "none" !== n2 || "none" !== (e2.getComputedStylePropertyValue("-webkit-mask") || e2.getComputedStylePropertyValue("mask") || "none") || "none" !== (e2.getComputedStylePropertyValue("-webkit-mask-image") || e2.getComputedStylePropertyValue("mask-image") || "none") || "none" !== (e2.getComputedStylePropertyValue("-webkit-mask-border") || e2.getComputedStylePropertyValue("mask-border") || "none") || "isolate" === e2.getComputedStylePropertyValue("isolation") || "transform" === (n2 = e2.getComputedStylePropertyValue("will-change")) || "opacity" === n2 || "touch" === e2.getComputedStylePropertyValue("-webkit-overflow-scrolling") || (n2 = e2.getComputedStylePropertyValue("contain"), ["layout", "paint", "strict", "content"].includes(n2)) || !("auto" === r2 || !Tl(t2));
      }
      function Tl(e2) {
        if (e2) return e2 = e2.getComputedStylePropertyValue("display"), ["flex", "inline-flex", "grid", "inline-grid"].includes(e2);
      }
      function Rl(e2, t2, n2) {
        return { stackLevel: e2, treeOrder: t2, vNode: n2 };
      }
      function Ol(t2, n2) {
        var r2 = ji(n2);
        n2.clientRects.forEach(function(e2) {
          var e2 = r2.reduce(function(e3, t3) {
            return e3 && pl(e3, t3.boundingClientRect);
          }, e2);
          e2 && (null == n2._grid && (n2._grid = t2), e2 = t2.getGridPositionOfRect(e2), t2.loopGridPosition(e2, function(e3) {
            e3.includes(n2) || e3.push(n2);
          }));
        });
      }
      var _l = ve(function e2() {
        var t2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null;
        ge(this, e2), this.container = t2, this.cells = [];
      }, [{ key: "toGridIndex", value: function(e2) {
        return Math.floor(e2 / f.gridSize);
      } }, { key: "getCellFromPoint", value: function(e2) {
        var t2 = e2.x, e2 = e2.y, e2 = (E(this.boundaries, "Grid does not have cells added"), this.toGridIndex(e2)), t2 = this.toGridIndex(t2), e2 = (E(cl({ y: e2, x: t2 }, this.boundaries), "Element midpoint exceeds the grid bounds"), null != (e2 = this.cells[e2 - this.cells._negativeIndex]) ? e2 : []);
        return null != (t2 = e2[t2 - e2._negativeIndex]) ? t2 : [];
      } }, { key: "loopGridPosition", value: function(e2, r2) {
        var t2 = e2, a2 = t2.left, o2 = t2.right, n2 = t2.top, t2 = t2.bottom;
        this.boundaries && (e2 = sl(this.boundaries, e2)), this.boundaries = e2, Sl(this.cells, n2, t2, function(e3, n3) {
          Sl(e3, a2, o2, function(e4, t3) {
            r2(e4, { row: n3, col: t3 });
          });
        });
      } }, { key: "getGridPositionOfRect", value: function(e2) {
        var t2 = e2.top, n2 = e2.right, r2 = e2.bottom, e2 = e2.left, a2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, t2 = this.toGridIndex(t2 - a2), n2 = this.toGridIndex(n2 + a2 - 1), r2 = this.toGridIndex(r2 + a2 - 1), e2 = this.toGridIndex(e2 - a2);
        return new window2.DOMRect(e2, t2, n2 - e2, r2 - t2);
      } }]);
      function Sl(e2, t2, n2, r2) {
        if (null != e2._negativeIndex || (e2._negativeIndex = 0), t2 < e2._negativeIndex) {
          for (var a2 = 0; a2 < e2._negativeIndex - t2; a2++) e2.splice(0, 0, []);
          e2._negativeIndex = t2;
        }
        for (var o2, i2 = t2 - e2._negativeIndex, l2 = n2 - e2._negativeIndex, u2 = i2; u2 <= l2; u2++) null == e2[o2 = u2] && (e2[o2] = []), r2(e2[u2], u2 + e2._negativeIndex);
      }
      function Ml(a2) {
        var e2, o2, t2, i2, n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0;
        return kl(), null != (t2 = a2._grid) && null != (t2 = t2.cells) && t2.length ? (t2 = a2.boundingClientRect, e2 = a2._grid, o2 = Pl(a2), t2 = e2.getGridPositionOfRect(t2, n2), i2 = [], e2.loopGridPosition(t2, function(e3) {
          var t3, n3 = x(e3);
          try {
            for (n3.s(); !(t3 = n3.n()).done; ) {
              var r2 = t3.value;
              r2 && r2 !== a2 && !i2.includes(r2) && o2 === Pl(r2) && i2.push(r2);
            }
          } catch (e4) {
            n3.e(e4);
          } finally {
            n3.f();
          }
        }), i2) : [];
      }
      var Pl = n(function(e2) {
        return !!e2 && ("fixed" === e2.getComputedStylePropertyValue("position") || Pl(e2.parent));
      }), Il = n(function() {
        var e2;
        return axe._tree && (e2 = sf(axe._tree[0], "dialog[open]", function(e3) {
          var t2 = e3.boundingClientRect;
          return document.elementsFromPoint(t2.left + 1, t2.top + 1).includes(e3.actualNode) && ll(e3);
        })).length ? e2.find(function(e3) {
          var t2 = e3.boundingClientRect;
          return document.elementsFromPoint(t2.left - 10, t2.top - 10).includes(e3.actualNode);
        }) || (null != (e2 = e2.find(function(e3) {
          var e3 = null != (e3 = function(e4) {
            kl();
            var t3 = axe._tree[0]._grid, n2 = new window2.DOMRect(0, 0, window2.innerWidth, window2.innerHeight);
            if (t3) for (var r2 = 0; r2 < t3.cells.length; r2++) {
              var a2 = t3.cells[r2];
              if (a2) for (var o2 = 0; o2 < a2.length; o2++) {
                var i2 = a2[o2];
                if (i2) for (var l2 = 0; l2 < i2.length; l2++) {
                  var u2 = i2[l2], s2 = pl(u2.boundingClientRect, n2);
                  if ("html" !== u2.props.nodeName && u2 !== e4 && "none" !== u2.getComputedStylePropertyValue("pointer-events") && s2) return { vNode: u2, rect: s2 };
                }
              }
            }
          }(e3)) ? e3 : {}, t2 = e3.vNode, e3 = e3.rect;
          return !!t2 && !document.elementsFromPoint(e3.left + 1, e3.top + 1).includes(t2.actualNode);
        })) ? e2 : null) : null;
      });
      function Bl(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.skipAncestors, t2 = t2.isAncestor;
        return (n2 ? jl : Ll)(e2, t2);
      }
      var jl = n(function(e2, t2) {
        if (e2.hasAttr("inert")) return true;
        if (!t2 && e2.actualNode) {
          t2 = Il();
          if (t2 && !Ci(t2, e2)) return true;
        }
        return false;
      }), Ll = n(function(e2, t2) {
        return !!jl(e2, t2) || !!e2.parent && Ll(e2.parent, true);
      }), ql = ["button", "command", "fieldset", "keygen", "optgroup", "option", "select", "textarea", "input"], zl = function(e2) {
        var t2 = l(e2).vNode;
        if (e2 = t2.props.nodeName, ql.includes(e2) && t2.hasAttr("disabled") || Bl(t2)) return true;
        for (var n2 = t2.parent, r2 = [], a2 = false; n2 && n2.shadowId === t2.shadowId && !a2 && (r2.push(n2), "legend" !== n2.props.nodeName); ) {
          if (void 0 !== n2._inDisabledFieldset) {
            a2 = n2._inDisabledFieldset;
            break;
          }
          "fieldset" === n2.props.nodeName && n2.hasAttr("disabled") && (a2 = true), n2 = n2.parent;
        }
        return r2.forEach(function(e3) {
          return e3._inDisabledFieldset = a2;
        }), !!a2 || "area" !== t2.props.nodeName && !!t2.actualNode && Qi(t2);
      }, Vl = /^\/\#/, $l = /^#[!/]/;
      function Hl(e2) {
        var t2, n2, r2, a2, o2 = e2.getAttribute("href");
        return !(!o2 || "#" === o2) && (!!Vl.test(o2) || (a2 = e2.hash, t2 = e2.protocol, n2 = e2.hostname, r2 = e2.port, e2 = e2.pathname, !$l.test(a2) && ("#" === o2.charAt(0) || ("string" != typeof (null == (a2 = window2.location) ? void 0 : a2.origin) || -1 === window2.location.origin.indexOf("://") ? null : (o2 = window2.location.origin + window2.location.pathname, a2 = n2 ? "".concat(t2, "//").concat(n2).concat(r2 ? ":".concat(r2) : "") : window2.location.origin, (a2 += e2 ? ("/" !== e2[0] ? "/" : "") + e2 : window2.location.pathname) === o2)))));
      }
      var Ul = function(e2, t2) {
        var n2 = e2.getAttribute(t2);
        return n2 && ("href" !== t2 || Hl(e2)) ? (-1 !== n2.indexOf("#") && (n2 = decodeURIComponent(n2.substr(n2.indexOf("#") + 1))), (t2 = document.getElementById(n2)) || ((t2 = document.getElementsByName(n2)).length ? t2[0] : null)) : null;
      };
      function Gl(e2, t2) {
        kl();
        for (var n2 = Math.max(e2._stackingOrder.length, t2._stackingOrder.length), r2 = 0; r2 < n2; r2++) {
          if (void 0 === t2._stackingOrder[r2]) return -1;
          if (void 0 === e2._stackingOrder[r2]) return 1;
          if (t2._stackingOrder[r2].stackLevel > e2._stackingOrder[r2].stackLevel) return 1;
          if (t2._stackingOrder[r2].stackLevel < e2._stackingOrder[r2].stackLevel) return -1;
          if (t2._stackingOrder[r2].treeOrder !== e2._stackingOrder[r2].treeOrder) return t2._stackingOrder[r2].treeOrder - e2._stackingOrder[r2].treeOrder;
        }
        var a2 = e2.actualNode, o2 = t2.actualNode;
        if (a2.getRootNode && a2.getRootNode() !== o2.getRootNode()) {
          for (var i2 = []; a2; ) i2.push({ root: a2.getRootNode(), node: a2 }), a2 = a2.getRootNode().host;
          for (; o2 && !i2.find(function(e3) {
            return e3.root === o2.getRootNode();
          }); ) o2 = o2.getRootNode().host;
          if ((a2 = i2.find(function(e3) {
            return e3.root === o2.getRootNode();
          }).node) === o2) return e2.actualNode.getRootNode() !== a2.getRootNode() ? -1 : 1;
        }
        var l2 = window2.Node, u2 = l2.DOCUMENT_POSITION_FOLLOWING, s2 = l2.DOCUMENT_POSITION_CONTAINS, l2 = l2.DOCUMENT_POSITION_CONTAINED_BY, c2 = a2.compareDocumentPosition(o2), u2 = c2 & u2 ? 1 : -1, s2 = c2 & s2 || c2 & l2, c2 = Wl(e2), l2 = Wl(t2);
        return c2 === l2 || s2 ? u2 : l2 - c2;
      }
      function Wl(e2) {
        return -1 !== e2.getComputedStylePropertyValue("display").indexOf("inline") ? 2 : function e3(t2) {
          if (!t2) return false;
          if (void 0 !== t2._isFloated) return t2._isFloated;
          var n2 = t2.getComputedStylePropertyValue("float");
          if ("none" !== n2) return t2._isFloated = true;
          n2 = e3(t2.parent);
          t2._isFloated = n2;
          return n2;
        }(e2) ? 1 : 0;
      }
      function Yl(e2, t2, n2) {
        var n2 = 2 < arguments.length && void 0 !== n2 && n2, t2 = fl(t2), r2 = e2.getCellFromPoint(t2) || [], a2 = Math.floor(t2.x), o2 = Math.floor(t2.y), t2 = r2.filter(function(e3) {
          return e3.clientRects.some(function(e4) {
            var t3 = e4.left, n3 = e4.top;
            return a2 < Math.floor(t3 + e4.width) && a2 >= Math.floor(t3) && o2 < Math.floor(n3 + e4.height) && o2 >= Math.floor(n3);
          });
        }), r2 = e2.container;
        return r2 && (t2 = Yl(r2._grid, r2.boundingClientRect, true).concat(t2)), t2 = n2 ? t2 : t2.sort(Gl).map(function(e3) {
          return e3.actualNode;
        }).concat(document.documentElement).filter(function(e3, t3, n3) {
          return n3.indexOf(e3) === t3;
        });
      }
      var Kl = function(e2) {
        kl();
        var t2 = (e2 = g(e2))._grid;
        return t2 ? Yl(t2, e2.boundingClientRect) : [];
      }, Xl = function(e2) {
        return yf(e2, "*").filter(function(e3) {
          var t2 = e3.isFocusable, e3 = e3.actualNode.getAttribute("tabindex");
          return (e3 = e3 && !isNaN(parseInt(e3, 10)) ? parseInt(e3) : null) ? t2 && 0 <= e3 : t2;
        });
      }, Zl = function(e2) {
        var t2 = l(e2).vNode;
        if (t2 && !zl(t2)) switch (t2.props.nodeName) {
          case "a":
          case "area":
            if (t2.hasAttr("href")) return true;
            break;
          case "input":
            return "hidden" !== t2.props.type;
          case "textarea":
          case "select":
          case "summary":
          case "button":
            return true;
          case "details":
            return !yf(t2, "summary").length;
        }
        return false;
      };
      function F(e2) {
        var e2 = l(e2).vNode;
        return 1 === e2.props.nodeType && !(zl(e2) || !Zl(e2) && (!(e2 = e2.attr("tabindex")) || isNaN(parseInt(e2, 10))));
      }
      function Jl(e2) {
        e2 = l(e2).vNode;
        return 1 === e2.props.nodeType && !(parseInt(e2.attr("tabindex", 10)) <= -1) && F(e2);
      }
      var Ql = n(function(t2) {
        var e2 = t2.boundingClientRect, n2 = Ml(t2).filter(function(e3) {
          return vl(t2, e3) && "none" !== e3.getComputedStylePropertyValue("pointer-events") && !(Ci(t2, e3 = e3) && !Jl(e3));
        });
        return n2.length ? (n2 = n2.map(function(e3) {
          return e3.boundingClientRect;
        }), yl(e2, n2)) : [e2];
      }), eu = n(function(e2, t2) {
        return function(e3, r2) {
          return e3.reduce(function(e4, t3) {
            var n2 = hl(r2, e4);
            return n2 !== hl(r2, t3) ? n2 ? e4 : t3 : (n2 = e4.width * e4.height, t3.width * t3.height < n2 ? e4 : t3);
          });
        }(Ql(e2), t2);
      }), tu = {}, nu = (Se(tu, { accessibleText: function() {
        return ru;
      }, accessibleTextVirtual: function() {
        return u;
      }, autocomplete: function() {
        return Cs;
      }, formControlValue: function() {
        return ls;
      }, formControlValueMethods: function() {
        return os;
      }, hasUnicode: function() {
        return Ds;
      }, isHumanInterpretable: function() {
        return As;
      }, isIconLigature: function() {
        return xs;
      }, isValidAutocomplete: function() {
        return ks;
      }, label: function() {
        return Os;
      }, labelText: function() {
        return cs;
      }, labelVirtual: function() {
        return Rs;
      }, nativeElementType: function() {
        return _s;
      }, nativeTextAlternative: function() {
        return hs;
      }, nativeTextMethods: function() {
        return ms;
      }, removeUnicode: function() {
        return Fs;
      }, sanitize: function() {
        return C;
      }, subtreeText: function() {
        return ss;
      }, titleText: function() {
        return Hu;
      }, unsupported: function() {
        return Wu;
      }, visible: function() {
        return Ts;
      }, visibleTextNodes: function() {
        return Ss;
      }, visibleVirtual: function() {
        return Ku;
      } }), function(e2, t2) {
        e2 = e2.actualNode || e2;
        try {
          var n2 = y(e2), r2 = [];
          if (a2 = e2.getAttribute(t2)) for (var a2 = ap(a2), o2 = 0; o2 < a2.length; o2++) r2.push(n2.getElementById(a2[o2]));
          return r2;
        } catch (e3) {
          throw new TypeError("Cannot resolve id references for non-DOM nodes");
        }
      }), ru = function(e2, t2) {
        return u(g(e2), t2);
      }, au = function(e2) {
        var n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r2 = l(e2).vNode;
        return 1 !== (null == r2 ? void 0 : r2.props.nodeType) || 1 !== r2.props.nodeType || n2.inLabelledByContext || n2.inControlContext || !r2.attr("aria-labelledby") ? "" : nu(r2, "aria-labelledby").filter(function(e3) {
          return e3;
        }).reduce(function(e3, t2) {
          t2 = ru(t2, h({ inLabelledByContext: true, startNode: n2.startNode || r2 }, n2));
          return e3 ? "".concat(e3, " ").concat(t2) : t2;
        }, "");
      };
      function ou(e2) {
        e2 = l(e2).vNode;
        return 1 === (null == e2 ? void 0 : e2.props.nodeType) && e2.attr("aria-label") || "";
      }
      var iu = { "aria-activedescendant": { type: "idref", allowEmpty: true }, "aria-atomic": { type: "boolean", global: true }, "aria-autocomplete": { type: "nmtoken", values: ["inline", "list", "both", "none"] }, "aria-braillelabel": { type: "string", allowEmpty: true, global: true }, "aria-brailleroledescription": { type: "string", allowEmpty: true, global: true }, "aria-busy": { type: "boolean", global: true }, "aria-checked": { type: "nmtoken", values: ["false", "mixed", "true", "undefined"] }, "aria-colcount": { type: "int", minValue: -1 }, "aria-colindex": { type: "int", minValue: 1 }, "aria-colspan": { type: "int", minValue: 1 }, "aria-controls": { type: "idrefs", allowEmpty: true, global: true }, "aria-current": { type: "nmtoken", allowEmpty: true, values: ["page", "step", "location", "date", "time", "true", "false"], global: true }, "aria-describedby": { type: "idrefs", allowEmpty: true, global: true }, "aria-description": { type: "string", allowEmpty: true, global: true }, "aria-details": { type: "idref", allowEmpty: true, global: true }, "aria-disabled": { type: "boolean", global: true }, "aria-dropeffect": { type: "nmtokens", values: ["copy", "execute", "link", "move", "none", "popup"], global: true }, "aria-errormessage": { type: "idref", allowEmpty: true, global: true }, "aria-expanded": { type: "nmtoken", values: ["true", "false", "undefined"] }, "aria-flowto": { type: "idrefs", allowEmpty: true, global: true }, "aria-grabbed": { type: "nmtoken", values: ["true", "false", "undefined"], global: true }, "aria-haspopup": { type: "nmtoken", allowEmpty: true, values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"], global: true }, "aria-hidden": { type: "nmtoken", values: ["true", "false", "undefined"], global: true }, "aria-invalid": { type: "nmtoken", values: ["grammar", "false", "spelling", "true"], global: true }, "aria-keyshortcuts": { type: "string", allowEmpty: true, global: true }, "aria-label": { type: "string", allowEmpty: true, global: true }, "aria-labelledby": { type: "idrefs", allowEmpty: true, global: true }, "aria-level": { type: "int", minValue: 1 }, "aria-live": { type: "nmtoken", values: ["assertive", "off", "polite"], global: true }, "aria-modal": { type: "boolean" }, "aria-multiline": { type: "boolean" }, "aria-multiselectable": { type: "boolean" }, "aria-orientation": { type: "nmtoken", values: ["horizontal", "undefined", "vertical"] }, "aria-owns": { type: "idrefs", allowEmpty: true, global: true }, "aria-placeholder": { type: "string", allowEmpty: true }, "aria-posinset": { type: "int", minValue: 1 }, "aria-pressed": { type: "nmtoken", values: ["false", "mixed", "true", "undefined"] }, "aria-readonly": { type: "boolean" }, "aria-relevant": { type: "nmtokens", values: ["additions", "all", "removals", "text"], global: true }, "aria-required": { type: "boolean" }, "aria-roledescription": { type: "string", allowEmpty: true, global: true }, "aria-rowcount": { type: "int", minValue: -1 }, "aria-rowindex": { type: "int", minValue: 1 }, "aria-rowspan": { type: "int", minValue: 0 }, "aria-selected": { type: "nmtoken", values: ["false", "true", "undefined"] }, "aria-setsize": { type: "int", minValue: -1 }, "aria-sort": { type: "nmtoken", values: ["ascending", "descending", "none", "other"] }, "aria-valuemax": { type: "decimal" }, "aria-valuemin": { type: "decimal" }, "aria-valuenow": { type: "decimal" }, "aria-valuetext": { type: "string", allowEmpty: true } }, lu = { alert: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, alertdialog: { type: "window", allowedAttrs: ["aria-expanded", "aria-modal"], superclassRole: ["alert", "dialog"], accessibleNameRequired: true }, application: { type: "landmark", allowedAttrs: ["aria-activedescendant", "aria-expanded"], superclassRole: ["structure"], accessibleNameRequired: true }, article: { type: "structure", allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"], superclassRole: ["document"] }, banner: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, blockquote: { type: "structure", superclassRole: ["section"] }, button: { type: "widget", allowedAttrs: ["aria-expanded", "aria-pressed"], superclassRole: ["command"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, caption: { type: "structure", requiredContext: ["figure", "table", "grid", "treegrid"], superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, cell: { type: "structure", requiredContext: ["row"], allowedAttrs: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-expanded"], superclassRole: ["section"], nameFromContent: true }, checkbox: { type: "widget", requiredAttrs: ["aria-checked"], allowedAttrs: ["aria-readonly", "aria-expanded", "aria-required"], superclassRole: ["input"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, code: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, columnheader: { type: "structure", requiredContext: ["row"], allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"], superclassRole: ["cell", "gridcell", "sectionhead"], accessibleNameRequired: false, nameFromContent: true }, combobox: { type: "widget", requiredAttrs: ["aria-expanded", "aria-controls"], allowedAttrs: ["aria-owns", "aria-autocomplete", "aria-readonly", "aria-required", "aria-activedescendant", "aria-orientation"], superclassRole: ["select"], accessibleNameRequired: true }, command: { type: "abstract", superclassRole: ["widget"] }, complementary: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, composite: { type: "abstract", superclassRole: ["widget"] }, contentinfo: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, comment: { type: "structure", allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize"], superclassRole: ["article"] }, definition: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, deletion: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, dialog: { type: "window", allowedAttrs: ["aria-expanded", "aria-modal"], superclassRole: ["window"], accessibleNameRequired: true }, directory: { type: "structure", deprecated: true, allowedAttrs: ["aria-expanded"], superclassRole: ["list"], nameFromContent: true }, document: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["structure"] }, emphasis: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, feed: { type: "structure", requiredOwned: ["article"], allowedAttrs: ["aria-expanded"], superclassRole: ["list"] }, figure: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], nameFromContent: true }, form: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, grid: { type: "composite", requiredOwned: ["rowgroup", "row"], allowedAttrs: ["aria-level", "aria-multiselectable", "aria-readonly", "aria-activedescendant", "aria-colcount", "aria-expanded", "aria-rowcount"], superclassRole: ["composite", "table"], accessibleNameRequired: false }, gridcell: { type: "widget", requiredContext: ["row"], allowedAttrs: ["aria-readonly", "aria-required", "aria-selected", "aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan"], superclassRole: ["cell", "widget"], nameFromContent: true }, group: { type: "structure", allowedAttrs: ["aria-activedescendant", "aria-expanded"], superclassRole: ["section"] }, heading: { type: "structure", requiredAttrs: ["aria-level"], allowedAttrs: ["aria-expanded"], superclassRole: ["sectionhead"], accessibleNameRequired: false, nameFromContent: true }, img: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], accessibleNameRequired: true, childrenPresentational: true }, input: { type: "abstract", superclassRole: ["widget"] }, insertion: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, landmark: { type: "abstract", superclassRole: ["section"] }, link: { type: "widget", allowedAttrs: ["aria-expanded"], superclassRole: ["command"], accessibleNameRequired: true, nameFromContent: true }, list: { type: "structure", requiredOwned: ["listitem"], allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, listbox: { type: "widget", requiredOwned: ["group", "option"], allowedAttrs: ["aria-multiselectable", "aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"], superclassRole: ["select"], accessibleNameRequired: true }, listitem: { type: "structure", requiredContext: ["list"], allowedAttrs: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded"], superclassRole: ["section"], nameFromContent: true }, log: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, main: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, marquee: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, math: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], childrenPresentational: true }, menu: { type: "composite", requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"], allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"], superclassRole: ["select"] }, menubar: { type: "composite", requiredOwned: ["group", "menuitemradio", "menuitem", "menuitemcheckbox", "menu", "separator"], allowedAttrs: ["aria-activedescendant", "aria-expanded", "aria-orientation"], superclassRole: ["menu"] }, menuitem: { type: "widget", requiredContext: ["menu", "menubar", "group"], allowedAttrs: ["aria-posinset", "aria-setsize", "aria-expanded"], superclassRole: ["command"], accessibleNameRequired: true, nameFromContent: true }, menuitemcheckbox: { type: "widget", requiredContext: ["menu", "menubar", "group"], requiredAttrs: ["aria-checked"], allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"], superclassRole: ["checkbox", "menuitem"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, menuitemradio: { type: "widget", requiredContext: ["menu", "menubar", "group"], requiredAttrs: ["aria-checked"], allowedAttrs: ["aria-expanded", "aria-posinset", "aria-readonly", "aria-setsize"], superclassRole: ["menuitemcheckbox", "radio"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, meter: { type: "structure", requiredAttrs: ["aria-valuenow"], allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-valuetext"], superclassRole: ["range"], accessibleNameRequired: true, childrenPresentational: true }, mark: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, navigation: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, none: { type: "structure", superclassRole: ["structure"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, note: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, option: { type: "widget", requiredContext: ["group", "listbox"], allowedAttrs: ["aria-selected", "aria-checked", "aria-posinset", "aria-setsize"], superclassRole: ["input"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, paragraph: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, presentation: { type: "structure", superclassRole: ["structure"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, progressbar: { type: "widget", allowedAttrs: ["aria-expanded", "aria-valuemax", "aria-valuemin", "aria-valuenow", "aria-valuetext"], superclassRole: ["range"], accessibleNameRequired: true, childrenPresentational: true }, radio: { type: "widget", requiredAttrs: ["aria-checked"], allowedAttrs: ["aria-posinset", "aria-setsize", "aria-required"], superclassRole: ["input"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, radiogroup: { type: "composite", allowedAttrs: ["aria-readonly", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"], superclassRole: ["select"], accessibleNameRequired: false }, range: { type: "abstract", superclassRole: ["widget"] }, region: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"], accessibleNameRequired: false }, roletype: { type: "abstract", superclassRole: [] }, row: { type: "structure", requiredContext: ["grid", "rowgroup", "table", "treegrid"], requiredOwned: ["cell", "columnheader", "gridcell", "rowheader"], allowedAttrs: ["aria-colindex", "aria-level", "aria-rowindex", "aria-selected", "aria-activedescendant", "aria-expanded", "aria-posinset", "aria-setsize"], superclassRole: ["group", "widget"], nameFromContent: true }, rowgroup: { type: "structure", requiredContext: ["grid", "table", "treegrid"], requiredOwned: ["row"], superclassRole: ["structure"], nameFromContent: true }, rowheader: { type: "structure", requiredContext: ["row"], allowedAttrs: ["aria-sort", "aria-colindex", "aria-colspan", "aria-expanded", "aria-readonly", "aria-required", "aria-rowindex", "aria-rowspan", "aria-selected"], superclassRole: ["cell", "gridcell", "sectionhead"], accessibleNameRequired: false, nameFromContent: true }, scrollbar: { type: "widget", requiredAttrs: ["aria-valuenow"], allowedAttrs: ["aria-controls", "aria-orientation", "aria-valuemax", "aria-valuemin", "aria-valuetext"], superclassRole: ["range"], childrenPresentational: true }, search: { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, searchbox: { type: "widget", allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"], superclassRole: ["textbox"], accessibleNameRequired: true }, section: { type: "abstract", superclassRole: ["structure"], nameFromContent: true }, sectionhead: { type: "abstract", superclassRole: ["structure"], nameFromContent: true }, select: { type: "abstract", superclassRole: ["composite", "group"] }, separator: { type: "structure", requiredAttrs: ["aria-valuenow"], allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-valuetext"], superclassRole: ["structure", "widget"], childrenPresentational: true }, slider: { type: "widget", requiredAttrs: ["aria-valuenow"], allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-orientation", "aria-readonly", "aria-required", "aria-valuetext"], superclassRole: ["input", "range"], accessibleNameRequired: true, childrenPresentational: true }, spinbutton: { type: "widget", allowedAttrs: ["aria-valuemax", "aria-valuemin", "aria-readonly", "aria-required", "aria-activedescendant", "aria-valuetext", "aria-valuenow"], superclassRole: ["composite", "input", "range"], accessibleNameRequired: true }, status: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, strong: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, structure: { type: "abstract", superclassRole: ["roletype"] }, subscript: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, superscript: { type: "structure", superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, switch: { type: "widget", requiredAttrs: ["aria-checked"], allowedAttrs: ["aria-expanded", "aria-readonly", "aria-required"], superclassRole: ["checkbox"], accessibleNameRequired: true, nameFromContent: true, childrenPresentational: true }, suggestion: { type: "structure", requiredOwned: ["insertion", "deletion"], superclassRole: ["section"], prohibitedAttrs: ["aria-label", "aria-labelledby"] }, tab: { type: "widget", requiredContext: ["tablist"], allowedAttrs: ["aria-posinset", "aria-selected", "aria-setsize", "aria-expanded"], superclassRole: ["sectionhead", "widget"], nameFromContent: true, childrenPresentational: true }, table: { type: "structure", requiredOwned: ["rowgroup", "row"], allowedAttrs: ["aria-colcount", "aria-rowcount", "aria-expanded"], superclassRole: ["section"], accessibleNameRequired: false, nameFromContent: true }, tablist: { type: "composite", requiredOwned: ["tab"], allowedAttrs: ["aria-level", "aria-multiselectable", "aria-orientation", "aria-activedescendant", "aria-expanded"], superclassRole: ["composite"] }, tabpanel: { type: "widget", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], accessibleNameRequired: false }, term: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], nameFromContent: true }, text: { type: "structure", superclassRole: ["section"], nameFromContent: true }, textbox: { type: "widget", allowedAttrs: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-placeholder", "aria-readonly", "aria-required"], superclassRole: ["input"], accessibleNameRequired: true }, time: { type: "structure", superclassRole: ["section"] }, timer: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["status"] }, toolbar: { type: "structure", allowedAttrs: ["aria-orientation", "aria-activedescendant", "aria-expanded"], superclassRole: ["group"], accessibleNameRequired: true }, tooltip: { type: "structure", allowedAttrs: ["aria-expanded"], superclassRole: ["section"], nameFromContent: true }, tree: { type: "composite", requiredOwned: ["group", "treeitem"], allowedAttrs: ["aria-multiselectable", "aria-required", "aria-activedescendant", "aria-expanded", "aria-orientation"], superclassRole: ["select"], accessibleNameRequired: false }, treegrid: { type: "composite", requiredOwned: ["rowgroup", "row"], allowedAttrs: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-readonly", "aria-required", "aria-rowcount"], superclassRole: ["grid", "tree"], accessibleNameRequired: false }, treeitem: { type: "widget", requiredContext: ["group", "tree"], allowedAttrs: ["aria-checked", "aria-expanded", "aria-level", "aria-posinset", "aria-selected", "aria-setsize"], superclassRole: ["listitem", "option"], accessibleNameRequired: true, nameFromContent: true }, widget: { type: "abstract", superclassRole: ["roletype"] }, window: { type: "abstract", superclassRole: ["roletype"] } }, a = { a: { variant: { href: { matches: "[href]", contentTypes: ["interactive", "phrasing", "flow"], allowedRoles: ["button", "checkbox", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab", "treeitem", "doc-backlink", "doc-biblioref", "doc-glossref", "doc-noteref"], namingMethods: ["subtreeText"] }, default: { contentTypes: ["phrasing", "flow"], allowedRoles: true } } }, abbr: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, address: { contentTypes: ["flow"], allowedRoles: true }, area: { variant: { href: { matches: "[href]", allowedRoles: false }, default: { allowedRoles: ["button", "link"] } }, contentTypes: ["phrasing", "flow"], namingMethods: ["altText"] }, article: { contentTypes: ["sectioning", "flow"], allowedRoles: ["feed", "presentation", "none", "document", "application", "main", "region"], shadowRoot: true }, aside: { contentTypes: ["sectioning", "flow"], allowedRoles: ["feed", "note", "presentation", "none", "region", "search", "doc-dedication", "doc-example", "doc-footnote", "doc-glossary", "doc-pullquote", "doc-tip"] }, audio: { variant: { controls: { matches: "[controls]", contentTypes: ["interactive", "embedded", "phrasing", "flow"] }, default: { contentTypes: ["embedded", "phrasing", "flow"] } }, allowedRoles: ["application"], chromiumRole: "Audio" }, b: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, base: { allowedRoles: false, noAriaAttrs: true }, bdi: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, bdo: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, blockquote: { contentTypes: ["flow"], allowedRoles: true, shadowRoot: true }, body: { allowedRoles: false, shadowRoot: true }, br: { contentTypes: ["phrasing", "flow"], allowedRoles: ["presentation", "none"], namingMethods: ["titleText", "singleSpace"] }, button: { contentTypes: ["interactive", "phrasing", "flow"], allowedRoles: ["checkbox", "combobox", "gridcell", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "separator", "slider", "switch", "tab", "treeitem"], namingMethods: ["subtreeText"] }, canvas: { allowedRoles: true, contentTypes: ["embedded", "phrasing", "flow"], chromiumRole: "Canvas" }, caption: { allowedRoles: false }, cite: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, code: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, col: { allowedRoles: false, noAriaAttrs: true }, colgroup: { allowedRoles: false, noAriaAttrs: true }, data: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, datalist: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true, implicitAttrs: { "aria-multiselectable": "false" } }, dd: { allowedRoles: false }, del: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, dfn: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, details: { contentTypes: ["interactive", "flow"], allowedRoles: false }, dialog: { contentTypes: ["flow"], allowedRoles: ["alertdialog"] }, div: { contentTypes: ["flow"], allowedRoles: true, shadowRoot: true }, dl: { contentTypes: ["flow"], allowedRoles: ["group", "list", "presentation", "none"], chromiumRole: "DescriptionList" }, dt: { allowedRoles: ["listitem"] }, em: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, embed: { contentTypes: ["interactive", "embedded", "phrasing", "flow"], allowedRoles: ["application", "document", "img", "presentation", "none"], chromiumRole: "EmbeddedObject" }, fieldset: { contentTypes: ["flow"], allowedRoles: ["none", "presentation", "radiogroup"], namingMethods: ["fieldsetLegendText"] }, figcaption: { allowedRoles: ["group", "none", "presentation"] }, figure: { contentTypes: ["flow"], allowedRoles: true, namingMethods: ["figureText", "titleText"] }, footer: { contentTypes: ["flow"], allowedRoles: ["group", "none", "presentation", "doc-footnote"], shadowRoot: true }, form: { contentTypes: ["flow"], allowedRoles: ["search", "none", "presentation"] }, h1: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "1" } }, h2: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "2" } }, h3: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "3" } }, h4: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "4" } }, h5: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "5" } }, h6: { contentTypes: ["heading", "flow"], allowedRoles: ["none", "presentation", "tab", "doc-subtitle"], shadowRoot: true, implicitAttrs: { "aria-level": "6" } }, head: { allowedRoles: false, noAriaAttrs: true }, header: { contentTypes: ["flow"], allowedRoles: ["group", "none", "presentation", "doc-footnote"], shadowRoot: true }, hgroup: { contentTypes: ["heading", "flow"], allowedRoles: true }, hr: { contentTypes: ["flow"], allowedRoles: ["none", "presentation", "doc-pagebreak"], namingMethods: ["titleText", "singleSpace"] }, html: { allowedRoles: false, noAriaAttrs: true }, i: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, iframe: { contentTypes: ["interactive", "embedded", "phrasing", "flow"], allowedRoles: ["application", "document", "img", "none", "presentation"], chromiumRole: "Iframe" }, img: { variant: { nonEmptyAlt: { matches: [{ attributes: { alt: "/.+/" } }, { hasAccessibleName: true }], allowedRoles: ["button", "checkbox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "meter", "option", "progressbar", "radio", "scrollbar", "separator", "slider", "switch", "tab", "treeitem", "doc-cover"] }, usemap: { matches: "[usemap]", contentTypes: ["interactive", "embedded", "flow"] }, default: { allowedRoles: ["presentation", "none"], contentTypes: ["embedded", "flow"] } }, namingMethods: ["altText"] }, input: { variant: { button: { matches: { properties: { type: "button" } }, allowedRoles: ["checkbox", "combobox", "link", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "radio", "switch", "tab"] }, buttonType: { matches: { properties: { type: ["button", "submit", "reset"] } }, namingMethods: ["valueText", "titleText", "buttonDefaultText"] }, checkboxPressed: { matches: { properties: { type: "checkbox" }, attributes: { "aria-pressed": "/.*/" } }, allowedRoles: ["button", "menuitemcheckbox", "option", "switch"], implicitAttrs: { "aria-checked": "false" } }, checkbox: { matches: { properties: { type: "checkbox" }, attributes: { "aria-pressed": null } }, allowedRoles: ["menuitemcheckbox", "option", "switch"], implicitAttrs: { "aria-checked": "false" } }, noRoles: { matches: { properties: { type: ["color", "date", "datetime-local", "file", "month", "number", "password", "range", "reset", "submit", "time", "week"] } }, allowedRoles: false }, hidden: { matches: { properties: { type: "hidden" } }, contentTypes: ["flow"], allowedRoles: false, noAriaAttrs: true }, image: { matches: { properties: { type: "image" } }, allowedRoles: ["link", "menuitem", "menuitemcheckbox", "menuitemradio", "radio", "switch"], namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"] }, radio: { matches: { properties: { type: "radio" } }, allowedRoles: ["menuitemradio"], implicitAttrs: { "aria-checked": "false" } }, textWithList: { matches: { properties: { type: "text" }, attributes: { list: "/.*/" } }, allowedRoles: false }, default: { contentTypes: ["interactive", "flow"], allowedRoles: ["combobox", "searchbox", "spinbutton"], implicitAttrs: { "aria-valuenow": "" }, namingMethods: ["labelText", "placeholderText"] } } }, ins: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, kbd: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, label: { contentTypes: ["interactive", "phrasing", "flow"], allowedRoles: false, chromiumRole: "Label" }, legend: { allowedRoles: false }, li: { allowedRoles: ["menuitem", "menuitemcheckbox", "menuitemradio", "option", "none", "presentation", "radio", "separator", "tab", "treeitem", "doc-biblioentry", "doc-endnote"], implicitAttrs: { "aria-setsize": "1", "aria-posinset": "1" } }, link: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, main: { contentTypes: ["flow"], allowedRoles: false, shadowRoot: true }, map: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, math: { contentTypes: ["embedded", "phrasing", "flow"], allowedRoles: false }, mark: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, menu: { contentTypes: ["flow"], allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"] }, meta: { variant: { itemprop: { matches: "[itemprop]", contentTypes: ["phrasing", "flow"] } }, allowedRoles: false, noAriaAttrs: true }, meter: { contentTypes: ["phrasing", "flow"], allowedRoles: false, chromiumRole: "progressbar" }, nav: { contentTypes: ["sectioning", "flow"], allowedRoles: ["doc-index", "doc-pagelist", "doc-toc", "menu", "menubar", "none", "presentation", "tablist"], shadowRoot: true }, noscript: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, object: { variant: { usemap: { matches: "[usemap]", contentTypes: ["interactive", "embedded", "phrasing", "flow"] }, default: { contentTypes: ["embedded", "phrasing", "flow"] } }, allowedRoles: ["application", "document", "img"], chromiumRole: "PluginObject" }, ol: { contentTypes: ["flow"], allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"] }, optgroup: { allowedRoles: false }, option: { allowedRoles: false, implicitAttrs: { "aria-selected": "false" } }, output: { contentTypes: ["phrasing", "flow"], allowedRoles: true, namingMethods: ["subtreeText"] }, p: { contentTypes: ["flow"], allowedRoles: true, shadowRoot: true }, param: { allowedRoles: false, noAriaAttrs: true }, picture: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, pre: { contentTypes: ["flow"], allowedRoles: true }, progress: { contentTypes: ["phrasing", "flow"], allowedRoles: false, implicitAttrs: { "aria-valuemax": "100", "aria-valuemin": "0", "aria-valuenow": "0" } }, q: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, rp: { allowedRoles: true }, rt: { allowedRoles: true }, ruby: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, s: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, samp: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, script: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, search: { contentTypes: ["flow"], allowedRoles: ["form", "group", "none", "presentation", "region", "search"] }, section: { contentTypes: ["sectioning", "flow"], allowedRoles: ["alert", "alertdialog", "application", "banner", "complementary", "contentinfo", "dialog", "document", "feed", "group", "log", "main", "marquee", "navigation", "none", "note", "presentation", "search", "status", "tabpanel", "doc-abstract", "doc-acknowledgments", "doc-afterword", "doc-appendix", "doc-bibliography", "doc-chapter", "doc-colophon", "doc-conclusion", "doc-credit", "doc-credits", "doc-dedication", "doc-endnotes", "doc-epigraph", "doc-epilogue", "doc-errata", "doc-example", "doc-foreword", "doc-glossary", "doc-index", "doc-introduction", "doc-notice", "doc-pagelist", "doc-part", "doc-preface", "doc-prologue", "doc-pullquote", "doc-qna", "doc-toc"], shadowRoot: true }, select: { variant: { combobox: { matches: { attributes: { multiple: null, size: [null, "1"] } }, allowedRoles: ["menu"] }, default: { allowedRoles: false } }, contentTypes: ["interactive", "phrasing", "flow"], implicitAttrs: { "aria-valuenow": "" }, namingMethods: ["labelText"] }, slot: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, small: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, source: { allowedRoles: false, noAriaAttrs: true }, span: { contentTypes: ["phrasing", "flow"], allowedRoles: true, shadowRoot: true }, strong: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, style: { allowedRoles: false, noAriaAttrs: true }, svg: { contentTypes: ["embedded", "phrasing", "flow"], allowedRoles: true, chromiumRole: "SVGRoot", namingMethods: ["svgTitleText"] }, sub: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, summary: { allowedRoles: false, namingMethods: ["subtreeText"] }, sup: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, table: { contentTypes: ["flow"], allowedRoles: true, namingMethods: ["tableCaptionText", "tableSummaryText"] }, tbody: { allowedRoles: true }, template: { contentTypes: ["phrasing", "flow"], allowedRoles: false, noAriaAttrs: true }, textarea: { contentTypes: ["interactive", "phrasing", "flow"], allowedRoles: false, implicitAttrs: { "aria-valuenow": "", "aria-multiline": "true" }, namingMethods: ["labelText", "placeholderText"] }, tfoot: { allowedRoles: true }, thead: { allowedRoles: true }, time: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, title: { allowedRoles: false, noAriaAttrs: true }, td: { allowedRoles: true }, th: { allowedRoles: true }, tr: { allowedRoles: true }, track: { allowedRoles: false, noAriaAttrs: true }, u: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, ul: { contentTypes: ["flow"], allowedRoles: ["directory", "group", "listbox", "menu", "menubar", "none", "presentation", "radiogroup", "tablist", "toolbar", "tree"] }, var: { contentTypes: ["phrasing", "flow"], allowedRoles: true }, video: { variant: { controls: { matches: "[controls]", contentTypes: ["interactive", "embedded", "phrasing", "flow"] }, default: { contentTypes: ["embedded", "phrasing", "flow"] } }, allowedRoles: ["application"], chromiumRole: "video" }, wbr: { contentTypes: ["phrasing", "flow"], allowedRoles: ["presentation", "none"] } }, uu = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, su = { ariaAttrs: iu, ariaRoles: h({}, lu, { "doc-abstract": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-acknowledgments": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-afterword": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-appendix": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-backlink": { type: "link", allowedAttrs: ["aria-expanded"], nameFromContent: true, superclassRole: ["link"] }, "doc-biblioentry": { type: "listitem", allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"], superclassRole: ["listitem"], deprecated: true }, "doc-bibliography": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-biblioref": { type: "link", allowedAttrs: ["aria-expanded"], nameFromContent: true, superclassRole: ["link"] }, "doc-chapter": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-colophon": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-conclusion": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-cover": { type: "img", allowedAttrs: ["aria-expanded"], superclassRole: ["img"] }, "doc-credit": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-credits": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-dedication": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-endnote": { type: "listitem", allowedAttrs: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize"], superclassRole: ["listitem"], deprecated: true }, "doc-endnotes": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-epigraph": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-epilogue": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-errata": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-example": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-footnote": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-foreword": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-glossary": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-glossref": { type: "link", allowedAttrs: ["aria-expanded"], nameFromContent: true, superclassRole: ["link"] }, "doc-index": { type: "navigation", allowedAttrs: ["aria-expanded"], superclassRole: ["navigation"] }, "doc-introduction": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-noteref": { type: "link", allowedAttrs: ["aria-expanded"], nameFromContent: true, superclassRole: ["link"] }, "doc-notice": { type: "note", allowedAttrs: ["aria-expanded"], superclassRole: ["note"] }, "doc-pagebreak": { type: "separator", allowedAttrs: ["aria-expanded", "aria-orientation"], superclassRole: ["separator"], childrenPresentational: true }, "doc-pagelist": { type: "navigation", allowedAttrs: ["aria-expanded"], superclassRole: ["navigation"] }, "doc-part": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-preface": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-prologue": { type: "landmark", allowedAttrs: ["aria-expanded"], superclassRole: ["landmark"] }, "doc-pullquote": { type: "none", superclassRole: ["none"] }, "doc-qna": { type: "section", allowedAttrs: ["aria-expanded"], superclassRole: ["section"] }, "doc-subtitle": { type: "sectionhead", allowedAttrs: ["aria-expanded"], superclassRole: ["sectionhead"] }, "doc-tip": { type: "note", allowedAttrs: ["aria-expanded"], superclassRole: ["note"] }, "doc-toc": { type: "navigation", allowedAttrs: ["aria-expanded"], superclassRole: ["navigation"] } }, { "graphics-document": { type: "structure", superclassRole: ["document"], accessibleNameRequired: true }, "graphics-object": { type: "structure", superclassRole: ["group"], nameFromContent: true }, "graphics-symbol": { type: "structure", superclassRole: ["img"], accessibleNameRequired: true, childrenPresentational: true } }), htmlElms: a, cssColors: uu }, cu = h({}, su), A = cu, du = function(e2) {
        return !!(e2 = A.ariaRoles[e2]) && !!e2.unsupported;
      }, pu = function(e2) {
        var t2 = (n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).allowAbstract, n2 = void 0 !== (n2 = n2.flagUnsupported) && n2, r2 = A.ariaRoles[e2], e2 = du(e2);
        return !(!r2 || n2 && e2 || !t2 && "abstract" === r2.type);
      }, c = function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.fallback, r2 = t2.abstracts, a2 = t2.dpub;
        return 1 === (e2 = e2 instanceof p ? e2 : g(e2)).props.nodeType && (t2 = (e2.attr("role") || "").trim().toLowerCase(), (n2 ? ap(t2) : [t2]).find(function(e3) {
          return !(!a2 && "doc-" === e3.substr(0, 4)) && pu(e3, { allowAbstract: r2 });
        })) || null;
      }, fu = function(t2) {
        return Object.keys(A.htmlElms).filter(function(e2) {
          e2 = A.htmlElms[e2];
          return e2.contentTypes ? e2.contentTypes.includes(t2) : !!e2.variant && !(!e2.variant.default || !e2.variant.default.contentTypes) && e2.variant.default.contentTypes.includes(t2);
        });
      }, mu = function() {
        return v.get("globalAriaAttrs", function() {
          return Object.keys(A.ariaAttrs).filter(function(e2) {
            return A.ariaAttrs[e2].global;
          });
        });
      }, hu = n(function(e2) {
        for (var t2 = [], n2 = e2.rows, r2 = 0, a2 = n2.length; r2 < a2; r2++) for (var o2 = n2[r2].cells, i2 = (t2[r2] = t2[r2] || [], 0), l2 = 0, u2 = o2.length; l2 < u2; l2++) for (var s2 = 0; s2 < o2[l2].colSpan; s2++) {
          for (var c2 = o2[l2].getAttribute("rowspan"), d2 = 0 === parseInt(c2) || 0 === o2[l2].rowspan ? n2.length : o2[l2].rowSpan, p2 = 0; p2 < d2; p2++) {
            for (t2[r2 + p2] = t2[r2 + p2] || []; t2[r2 + p2][i2]; ) i2++;
            t2[r2 + p2][i2] = o2[l2];
          }
          i2++;
        }
        return t2;
      }), gu = n(function(e2, t2) {
        var n2, r2;
        for (t2 = t2 || hu(Pi(e2, "table")), n2 = 0; n2 < t2.length; n2++) if (t2[n2] && -1 !== (r2 = t2[n2].indexOf(e2))) return { x: r2, y: n2 };
      });
      function bu(e2) {
        var t2, e2 = l(e2), n2 = e2.vNode, e2 = e2.domNode, r2 = n2.attr("scope"), a2 = n2.attr("role");
        if (["td", "th"].includes(n2.props.nodeName)) return "columnheader" === a2 ? "col" : "rowheader" === a2 ? "row" : "col" === r2 || "row" === r2 ? r2 : "th" === n2.props.nodeName && (n2.actualNode ? (a2 = hu(Pi(e2, "table")))[(t2 = gu(e2, a2)).y].every(function(e3) {
          return "TH" === e3.nodeName.toUpperCase();
        }) ? "col" : a2.map(function(e3) {
          return e3[t2.x];
        }).every(function(e3) {
          return e3 && "TH" === e3.nodeName.toUpperCase();
        }) ? "row" : "auto" : "auto");
        throw new TypeError("Expected TD or TH element");
      }
      var vu = function(e2) {
        return -1 !== ["col", "auto"].indexOf(bu(e2));
      }, yu = function(e2) {
        return ["row", "auto"].includes(bu(e2));
      };
      function wu() {
        return v.get("sectioningContentSelector", function() {
          return fu("sectioning").map(function(e2) {
            return "".concat(e2, ":not([role])");
          }).join(", ") + " , [role=article], [role=complementary], [role=navigation], [role=region]";
        });
      }
      function Du() {
        return v.get("sectioningContentPlusMainSelector", function() {
          return wu() + " , main:not([role]), [role=main]";
        });
      }
      var C = function(e2) {
        return e2 ? e2.replace(/\r\n/g, "\n").replace(/\u00A0/g, " ").replace(/[\s]{2,}/g, " ").trim() : "";
      };
      function xu(e2, t2) {
        t2 = (1 < arguments.length && void 0 !== t2 ? t2 : {}).checkTitle, t2 = void 0 !== t2 && t2;
        return C(au(e2)) || C(ou(e2)) || t2 && 1 === (null == e2 ? void 0 : e2.props.nodeType) && C(e2.attr("title"));
      }
      var Eu = { a: function(e2) {
        return e2.hasAttr("href") ? "link" : null;
      }, area: function(e2) {
        return e2.hasAttr("href") ? "link" : null;
      }, article: "article", aside: function(e2) {
        return Oo(e2.parent, wu()) && !xu(e2, { checkTitle: true }) ? null : "complementary";
      }, body: "document", button: "button", datalist: "listbox", dd: "definition", dfn: "term", details: "group", dialog: "dialog", dt: "term", fieldset: "group", figure: "figure", footer: function(e2) {
        return Oo(e2, Du()) ? null : "contentinfo";
      }, form: function(e2) {
        return xu(e2) ? "form" : null;
      }, h1: "heading", h2: "heading", h3: "heading", h4: "heading", h5: "heading", h6: "heading", header: function(e2) {
        return Oo(e2, Du()) ? null : "banner";
      }, hr: "separator", img: function(t2) {
        var e2 = t2.hasAttr("alt") && !t2.attr("alt"), n2 = mu().find(function(e3) {
          return t2.hasAttr(e3);
        });
        return !e2 || n2 || F(t2) ? "img" : "presentation";
      }, input: function(e2) {
        var t2, n2;
        switch (e2.hasAttr("list") && (n2 = (t2 = nu(e2.actualNode, "list").filter(function(e3) {
          return !!e3;
        })[0]) && "datalist" === t2.nodeName.toLowerCase()), e2.props.type) {
          case "checkbox":
            return "checkbox";
          case "number":
            return "spinbutton";
          case "radio":
            return "radio";
          case "range":
            return "slider";
          case "search":
            return n2 ? "combobox" : "searchbox";
          case "button":
          case "image":
          case "reset":
          case "submit":
            return "button";
          case "text":
          case "tel":
          case "url":
          case "email":
          case "":
            return n2 ? "combobox" : "textbox";
          default:
            return "textbox";
        }
      }, li: "listitem", main: "main", math: "math", menu: "list", meter: "meter", nav: "navigation", ol: "list", optgroup: "group", option: "option", output: "status", progress: "progressbar", search: "search", section: function(e2) {
        return xu(e2) ? "region" : null;
      }, select: function(e2) {
        return e2.hasAttr("multiple") || 1 < parseInt(e2.attr("size")) ? "listbox" : "combobox";
      }, summary: "button", table: "table", tbody: "rowgroup", td: function(e2) {
        e2 = Oo(e2, "table"), e2 = c(e2);
        return ["grid", "treegrid"].includes(e2) ? "gridcell" : "cell";
      }, textarea: "textbox", tfoot: "rowgroup", th: function(e2) {
        return vu(e2) ? "columnheader" : yu(e2) ? "rowheader" : void 0;
      }, thead: "rowgroup", tr: "row", ul: "list" }, Fu = function(e2, t2) {
        var n2 = te(t2);
        if (Array.isArray(t2) && void 0 !== e2) return t2.includes(e2);
        if ("function" === n2) return !!t2(e2);
        if (null != e2) {
          if (t2 instanceof RegExp) return t2.test(e2);
          if (/^\/.*\/$/.test(t2)) return n2 = t2.substring(1, t2.length - 1), new RegExp(n2).test(e2);
        }
        return t2 === e2;
      };
      function Au(e2, t2) {
        return Fu(!!u(e2), t2);
      }
      var Cu = function(t2, n2) {
        if ("object" !== te(n2) || Array.isArray(n2) || n2 instanceof RegExp) throw new Error("Expect matcher to be an object");
        return Object.keys(n2).every(function(e2) {
          return Fu(t2(e2), n2[e2]);
        });
      };
      function ku(t2, e2) {
        return t2 = l(t2).vNode, Cu(function(e3) {
          return t2.attr(e3);
        }, e2);
      }
      function Nu(e2, t2) {
        return !!t2(e2);
      }
      function Tu(e2, t2) {
        return Fu(c(e2), t2);
      }
      function Ru(e2, t2) {
        return Fu(Lu(e2), t2);
      }
      function Ou(e2, t2) {
        return e2 = l(e2).vNode, Fu(e2.props.nodeName, t2);
      }
      function _u(t2, e2) {
        return t2 = l(t2).vNode, Cu(function(e3) {
          return t2.props[e3];
        }, e2);
      }
      function Su(e2, t2) {
        return Fu(d(e2), t2);
      }
      var Mu = { hasAccessibleName: Au, attributes: ku, condition: Nu, explicitRole: Tu, implicitRole: Ru, nodeName: Ou, properties: _u, semanticRole: Su }, Pu = function t2(n2, r2) {
        return n2 = l(n2).vNode, Array.isArray(r2) ? r2.some(function(e2) {
          return t2(n2, e2);
        }) : "string" == typeof r2 ? Eo(n2, r2) : Object.keys(r2).every(function(e2) {
          var t3;
          if (Mu[e2]) return t3 = r2[e2], (0, Mu[e2])(n2, t3);
          throw new Error('Unknown matcher type "'.concat(e2, '"'));
        });
      }, Iu = function(e2, t2) {
        return Pu(e2, t2);
      }, Bu = (Iu.hasAccessibleName = Au, Iu.attributes = ku, Iu.condition = Nu, Iu.explicitRole = Tu, Iu.fromDefinition = Pu, Iu.fromFunction = Cu, Iu.fromPrimative = Fu, Iu.implicitRole = Ru, Iu.nodeName = Ou, Iu.properties = _u, Iu.semanticRole = Su, Iu), ju = function(e2) {
        var t2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).noMatchAccessibleName, n2 = void 0 !== t2 && t2, r2 = A.htmlElms[e2.props.nodeName];
        if (!r2) return {};
        if (!r2.variant) return r2;
        var a2, o2, i2 = r2.variant, l2 = b(r2, B);
        for (a2 in i2) if (i2.hasOwnProperty(a2) && "default" !== a2) {
          for (var u2 = i2[a2], s2 = u2.matches, c2 = b(u2, j), d2 = Array.isArray(s2) ? s2 : [s2], p2 = 0; p2 < d2.length && n2; p2++) if (d2[p2].hasOwnProperty("hasAccessibleName")) return r2;
          if (Bu(e2, s2)) for (var f2 in c2) c2.hasOwnProperty(f2) && (l2[f2] = c2[f2]);
        }
        for (o2 in i2.default) i2.default.hasOwnProperty(o2) && void 0 === l2[o2] && (l2[o2] = i2.default[o2]);
        return l2;
      }, Lu = function(e2) {
        var t2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).chromium, n2 = e2 instanceof p ? e2 : g(e2);
        if (e2 = n2.actualNode, n2) return e2 = n2.props.nodeName, !(e2 = Eu[e2]) && t2 ? ju(n2).chromiumRole || null : "function" == typeof e2 ? e2(n2) : e2 || null;
        throw new ReferenceError("Cannot get implicit role of a node outside the current scope.");
      }, qu = { td: ["tr"], th: ["tr"], tr: ["thead", "tbody", "tfoot", "table"], thead: ["table"], tbody: ["table"], tfoot: ["table"], li: ["ol", "ul"], dt: ["dl", "div"], dd: ["dl", "div"], div: ["dl"] };
      function zu(e2, t2) {
        var n2 = t2.chromium, t2 = b(t2, L), n2 = Lu(e2, { chromium: n2 });
        return n2 ? function e3(t3, n3) {
          var r2 = qu[t3.props.nodeName];
          if (r2) {
            if (t3.parent) return r2.includes(t3.parent.props.nodeName) ? (r2 = c(t3.parent, n3), ["none", "presentation"].includes(r2) && !Vu(t3.parent) ? r2 : r2 ? null : e3(t3.parent, n3)) : null;
            if (t3.actualNode) throw new ReferenceError("Cannot determine role presentational inheritance of a required parent outside the current scope.");
          }
          return null;
        }(e2, t2) || n2 : null;
      }
      function Vu(t2) {
        return mu().some(function(e2) {
          return t2.hasAttr(e2);
        }) || F(t2);
      }
      var d = function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.noPresentational, e2 = function(e3, t3) {
          var n3, t3 = 1 < arguments.length && void 0 !== t3 ? t3 : {}, r2 = t3.noImplicit, t3 = b(t3, z), e3 = l(e3).vNode;
          return 1 !== e3.props.nodeType ? null : !(n3 = c(e3, t3)) || ["presentation", "none"].includes(n3) && Vu(e3) ? r2 ? null : zu(e3, t3) : n3;
        }(e2, b(t2, V));
        return n2 && ["presentation", "none"].includes(e2) ? null : e2;
      }, $u = ["iframe"], Hu = function(e2) {
        var t2 = l(e2).vNode;
        return 1 !== t2.props.nodeType || !e2.hasAttr("title") || !Iu(t2, $u) && ["none", "presentation"].includes(d(t2)) ? "" : t2.attr("title");
      }, Uu = function(e2) {
        var t2, n2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).strict;
        return 1 === (e2 = e2 instanceof p ? e2 : g(e2)).props.nodeType && (e2 = d(e2), !(!(t2 = A.ariaRoles[e2]) || !t2.nameFromContent) || !n2 && (!t2 || ["presentation", "none"].includes(e2)));
      }, Gu = function(e2) {
        var t2 = e2.actualNode, n2 = e2.children;
        if (n2) return e2.hasAttr("aria-owns") ? (e2 = nu(t2, "aria-owns").filter(function(e3) {
          return !!e3;
        }).map(function(e3) {
          return axe.utils.getNodeFromTree(e3);
        }), [].concat(w(n2), w(e2))) : w(n2);
        throw new Error("getOwnedVirtual requires a virtual node");
      }, Wu = { accessibleNameFromFieldValue: ["progressbar"] };
      function k(e2) {
        return e2 = l(e2).vNode, Yu(e2);
      }
      var Yu = n(function(e2, t2) {
        return !Ui(e2) && !Bl(e2, { skipAncestors: true, isAncestor: t2 }) && (e2.actualNode && "area" === e2.props.nodeName ? !Xi(e2, Yu) : !Qi(e2, { skipAncestors: true, isAncestor: t2 }) && (!e2.parent || Yu(e2.parent, true)));
      }), Ku = function r2(e2, a2, o2) {
        var t2 = l(e2).vNode, n2 = a2 ? k : ll, i2 = !e2.actualNode || e2.actualNode && n2(e2), n2 = t2.children.map(function(e3) {
          var t3 = (n3 = e3.props).nodeType, n3 = n3.nodeValue;
          if (3 === t3) {
            if (n3 && i2) return n3;
          } else if (!o2) return r2(e3, a2);
        }).join("");
        return C(n2);
      }, Xu = ["button", "checkbox", "color", "file", "hidden", "image", "password", "radio", "reset", "submit"], Zu = function(e2) {
        var t2 = (e2 = e2 instanceof p ? e2 : g(e2)).props.nodeName;
        return "textarea" === t2 || "input" === t2 && !Xu.includes((e2.attr("type") || "").toLowerCase());
      }, Ju = function(e2) {
        return "select" === (e2 = e2 instanceof p ? e2 : g(e2)).props.nodeName;
      }, Qu = function(e2) {
        return "textbox" === c(e2);
      }, es = function(e2) {
        return "listbox" === c(e2);
      }, ts = function(e2) {
        return "combobox" === c(e2);
      }, ns = ["progressbar", "scrollbar", "slider", "spinbutton"], rs = function(e2) {
        return e2 = c(e2), ns.includes(e2);
      }, as = ["textbox", "progressbar", "scrollbar", "slider", "spinbutton", "combobox", "listbox"], os = { nativeTextboxValue: function(e2) {
        e2 = l(e2).vNode;
        if (Zu(e2)) return e2.props.value || "";
        return "";
      }, nativeSelectValue: function(e2) {
        e2 = l(e2).vNode;
        if (!Ju(e2)) return "";
        var e2 = yf(e2, "option"), t2 = e2.filter(function(e3) {
          return e3.props.selected;
        });
        t2.length || t2.push(e2[0]);
        return t2.map(function(e3) {
          return Ku(e3);
        }).join(" ") || "";
      }, ariaTextboxValue: function(e2) {
        var e2 = l(e2), t2 = e2.vNode, e2 = e2.domNode;
        if (!Qu(t2)) return "";
        return e2 && Qi(e2) ? e2.textContent : Ku(t2, true);
      }, ariaListboxValue: is, ariaComboboxValue: function(e2, t2) {
        var e2 = l(e2).vNode;
        return ts(e2) && (e2 = Gu(e2).filter(function(e3) {
          return "listbox" === d(e3);
        })[0]) ? is(e2, t2) : "";
      }, ariaRangeValue: function(e2) {
        var e2 = l(e2).vNode;
        return rs(e2) && e2.hasAttr("aria-valuenow") ? (e2 = +e2.attr("aria-valuenow"), isNaN(e2) ? "0" : String(e2)) : "";
      } };
      function is(e2, t2) {
        var e2 = l(e2).vNode;
        return !es(e2) || 0 === (e2 = Gu(e2).filter(function(e3) {
          return "option" === d(e3) && "true" === e3.attr("aria-selected");
        })).length ? "" : u(e2[0], t2);
      }
      var ls = function(n2) {
        var r2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, e2 = n2.actualNode, t2 = Wu.accessibleNameFromFieldValue || [], a2 = d(n2);
        return r2.startNode === n2 || !as.includes(a2) || t2.includes(a2) ? "" : (t2 = Object.keys(os).map(function(e3) {
          return os[e3];
        }).reduce(function(e3, t3) {
          return e3 || t3(n2, r2);
        }, ""), r2.debug && Na(t2 || "{empty-value}", e2, r2), t2);
      }, us = fu("phrasing").concat(["#text"]), ss = function(e2) {
        var a2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t2 = u.alreadyProcessed;
        a2.startNode = a2.startNode || e2;
        var n2 = (o2 = a2).strict, r2 = o2.inControlContext, o2 = o2.inLabelledByContext, i2 = d(e2), l2 = ju(e2, { noMatchAccessibleName: true }).contentTypes;
        return !(t2(e2, a2) || 1 !== e2.props.nodeType || null != l2 && l2.includes("embedded") || as.includes(i2)) && (a2.subtreeDescendant || a2.inLabelledByContext || Uu(e2, { strict: n2 })) ? (n2 || (a2 = h({ subtreeDescendant: !r2 && !o2 }, a2)), Gu(e2).reduce(function(e3, t3) {
          var n3 = a2, r3 = t3.props.nodeName;
          return (t3 = u(t3, n3)) ? (us.includes(r3) || (" " !== t3[0] && (t3 += " "), e3 && " " !== e3[e3.length - 1] && (t3 = " " + t3)), e3 + t3) : e3;
        }, "")) : "";
      }, cs = function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = u.alreadyProcessed;
        if (t2.inControlContext || t2.inLabelledByContext || n2(e2, t2)) return "";
        t2.startNode || (t2.startNode = e2);
        var r2, a2 = h({ inControlContext: true }, t2), n2 = function(e3) {
          if (!e3.attr("id")) return [];
          if (e3.actualNode) return Si({ elm: "label", attr: "for", value: e3.attr("id"), context: e3.actualNode });
          throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
        }(e2);
        return (t2 = Oo(e2, "label")) ? (r2 = [].concat(w(n2), [t2.actualNode])).sort(Jp) : r2 = n2, r2.map(function(e3) {
          return ru(e3, a2);
        }).filter(function(e3) {
          return "" !== e3;
        }).join(" ");
      }, ds = { submit: "Submit", image: "Submit", reset: "Reset", button: "" };
      function ps(e2, t2) {
        return t2.attr(e2) || "";
      }
      function fs(e2, t2, n2) {
        var t2 = t2.actualNode, r2 = [e2 = e2.toLowerCase(), t2.nodeName.toLowerCase()].join(","), t2 = t2.querySelector(r2);
        return t2 && t2.nodeName.toLowerCase() === e2 ? ru(t2, n2) : "";
      }
      var ms = { valueText: function(e2) {
        return e2.actualNode.value || "";
      }, buttonDefaultText: function(e2) {
        e2 = e2.actualNode;
        return ds[e2.type] || "";
      }, tableCaptionText: fs.bind(null, "caption"), figureText: fs.bind(null, "figcaption"), svgTitleText: fs.bind(null, "title"), fieldsetLegendText: fs.bind(null, "legend"), altText: ps.bind(null, "alt"), tableSummaryText: ps.bind(null, "summary"), titleText: Hu, subtreeText: ss, labelText: cs, singleSpace: function() {
        return " ";
      }, placeholderText: ps.bind(null, "placeholder") };
      function hs(n2) {
        var e2, r2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t2 = n2.actualNode;
        return 1 !== n2.props.nodeType || ["presentation", "none"].includes(d(n2)) ? "" : (e2 = (ju(n2, { noMatchAccessibleName: true }).namingMethods || []).map(function(e3) {
          return ms[e3];
        }).reduce(function(e3, t3) {
          return e3 || t3(n2, r2);
        }, ""), r2.debug && axe.log(e2 || "{empty-value}", t2, r2), e2);
      }
      function gs() {
        return /[\u1D00-\u1D7F\u1D80-\u1DBF\u1DC0-\u1DFF\u20A0-\u20CF\u20D0-\u20FF\u2100-\u214F\u2150-\u218F\u2190-\u21FF\u2200-\u22FF\u2300-\u23FF\u2400-\u243F\u2440-\u245F\u2460-\u24FF\u2500-\u257F\u2580-\u259F\u25A0-\u25FF\u2600-\u26FF\u2700-\u27BF\uE000-\uF8FF]/g;
      }
      function bs() {
        return /[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&\xa3\xa2\xa5\xa7\u20ac()*+,\-.\/:;<=>?@\[\]^_`{|}~\xb1]/g;
      }
      function vs() {
        return /[\uDB80-\uDBBF][\uDC00-\uDFFF]/g;
      }
      function ys() {
        return /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC38]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/g;
      }
      function ws() {
        return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC2\uDECE-\uDEDB\uDEE0-\uDEE8]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
      }
      var Ds = function(e2, t2) {
        var n2 = t2.emoji, r2 = t2.nonBmp, t2 = t2.punctuations, a2 = false;
        return n2 && (a2 = a2 || ws().test(e2)), r2 && (a2 = a2 || gs().test(e2) || vs().test(e2) || ys().test(e2)), a2 = t2 ? a2 || bs().test(e2) : a2;
      };
      function xs(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0.15, n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 3, r2 = e2.actualNode.nodeValue.trim();
        if (!C(r2) || Ds(r2, { emoji: true, nonBmp: true })) return false;
        var a2 = v.get("canvasContext", function() {
          return document.createElement("canvas").getContext("2d", { willReadFrequently: true });
        }), o2 = a2.canvas, i2 = v.get("fonts", function() {
          return {};
        }), e2 = window2.getComputedStyle(e2.parent.actualNode).getPropertyValue("font-family"), i2 = (i2[e2] || (i2[e2] = { occurrences: 0, numLigatures: 0 }), i2[e2]);
        if (i2.occurrences >= n2) {
          if (i2.numLigatures / i2.occurrences == 1) return true;
          if (0 === i2.numLigatures) return false;
        }
        i2.occurrences++;
        var n2 = 30, l2 = "".concat(n2, "px ").concat(e2), u2 = (a2.font = l2, r2.charAt(0)), s2 = a2.measureText(u2).width;
        if (0 === s2) return i2.numLigatures++, true;
        s2 < 30 && (s2 *= c2 = 30 / s2, l2 = "".concat(n2 *= c2, "px ").concat(e2)), o2.width = s2, o2.height = n2, a2.font = l2, a2.textAlign = "left", a2.textBaseline = "top", a2.fillText(u2, 0, 0);
        var c2 = new Uint32Array(a2.getImageData(0, 0, s2, n2).data.buffer);
        if (!c2.some(function(e3) {
          return e3;
        })) return i2.numLigatures++, true;
        a2.clearRect(0, 0, s2, n2), a2.fillText(r2, 0, 0);
        var d2 = new Uint32Array(a2.getImageData(0, 0, s2, n2).data.buffer), e2 = c2.reduce(function(e3, t3, n3) {
          return 0 === t3 && 0 === d2[n3] || 0 !== t3 && 0 !== d2[n3] ? e3 : ++e3;
        }, 0), o2 = r2.split("").reduce(function(e3, t3) {
          return e3 + a2.measureText(t3).width;
        }, 0), l2 = a2.measureText(r2).width;
        return t2 <= e2 / c2.length && t2 <= 1 - l2 / o2 && (i2.numLigatures++, true);
      }
      function u(n2) {
        var e2, t2, r2, a2, o2, i2 = function(e3, t3) {
          t3.startNode || (t3 = h({ startNode: e3 }, t3));
          1 === e3.props.nodeType && t3.inLabelledByContext && void 0 === t3.includeHidden && (t3 = h({ includeHidden: !k(e3) }, t3));
          return t3;
        }(n2, 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {});
        return function(e3, t3) {
          if (!e3) return;
          if (1 !== e3.props.nodeType || t3.includeHidden) return;
          return !k(e3);
        }(n2, i2) || (e2 = n2, t2 = (o2 = i2).ignoreIconLigature, r2 = o2.pixelThreshold, a2 = null != (a2 = o2.occurrenceThreshold) ? a2 : o2.occuranceThreshold, 3 === e2.props.nodeType && t2 && xs(e2, r2, a2)) ? "" : (o2 = [au, ou, hs, ls, ss, Es, Hu].reduce(function(e3, t3) {
          return "" !== (e3 = i2.startNode === n2 ? C(e3) : e3) ? e3 : t3(n2, i2);
        }, ""), i2.debug && axe.log(o2 || "{empty-value}", n2.actualNode, i2), o2);
      }
      function Es(e2) {
        return 3 !== e2.props.nodeType ? "" : e2.props.nodeValue;
      }
      u.alreadyProcessed = function(e2, t2) {
        return t2.processed = t2.processed || [], !!t2.processed.includes(e2) || (t2.processed.push(e2), false);
      };
      var Fs = function(e2, t2) {
        var n2 = t2.emoji, r2 = t2.nonBmp, t2 = t2.punctuations;
        return n2 && (e2 = e2.replace(ws(), "")), r2 && (e2 = e2.replace(gs(), "").replace(vs(), "").replace(ys(), "")), e2 = t2 ? e2.replace(bs(), "") : e2;
      }, As = function(e2) {
        var t2;
        return 0 === C(e2).length || 1 === (t2 = e2).length && t2.match(/\D/) || ["aa", "abc"].includes(e2.toLowerCase()) || function(e3) {
          e3 = Fs(e3, { emoji: true, nonBmp: true, punctuations: true });
          return !C(e3);
        }(e2) ? 0 : 1;
      }, Cs = { stateTerms: ["on", "off"], standaloneTerms: ["name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "username", "new-password", "current-password", "organization-title", "organization", "street-address", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-csc", "cc-type", "transaction-currency", "transaction-amount", "language", "bday", "bday-day", "bday-month", "bday-year", "sex", "url", "photo", "one-time-code"], qualifiers: ["home", "work", "mobile", "fax", "pager"], qualifiedTerms: ["tel", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension", "email", "impp"], locations: ["billing", "shipping"] }, ks = function(e2) {
        var t2 = void 0 !== (t2 = (l2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).looseTyped) && t2, n2 = void 0 === (n2 = l2.stateTerms) ? [] : n2, r2 = void 0 === (r2 = l2.locations) ? [] : r2, a2 = void 0 === (a2 = l2.qualifiers) ? [] : a2, o2 = void 0 === (o2 = l2.standaloneTerms) ? [] : o2, i2 = void 0 === (i2 = l2.qualifiedTerms) ? [] : i2, l2 = void 0 === (l2 = l2.ignoredValues) ? [] : l2;
        return e2 = e2.toLowerCase().trim(), !(!(n2 = n2.concat(Cs.stateTerms)).includes(e2) && "" !== e2) || (a2 = a2.concat(Cs.qualifiers), r2 = r2.concat(Cs.locations), o2 = o2.concat(Cs.standaloneTerms), i2 = i2.concat(Cs.qualifiedTerms), !("webauthn" === (n2 = e2.split(/\s+/g))[n2.length - 1] && (n2.pop(), 0 === n2.length) || !t2 && (8 < n2[0].length && "section-" === n2[0].substr(0, 8) && n2.shift(), r2.includes(n2[0]) && n2.shift(), a2.includes(n2[0]) && (n2.shift(), o2 = []), 1 !== n2.length)) && (e2 = n2[n2.length - 1], l2.includes(e2) ? void 0 : o2.includes(e2) || i2.includes(e2)));
      }, Ns = function(e2) {
        var t2;
        return e2.attr("aria-labelledby") && (t2 = nu(e2.actualNode, "aria-labelledby").map(function(e3) {
          e3 = g(e3);
          return e3 ? Ku(e3) : "";
        }).join(" ").trim()) ? t2 : (t2 = (t2 = e2.attr("aria-label")) && C(t2)) || null;
      }, Ts = function(e2, t2, n2) {
        return e2 = g(e2), Ku(e2, t2, n2);
      }, Rs = function(e2) {
        if (t2 = Ns(e2)) return t2;
        if (e2.attr("id")) {
          if (!e2.actualNode) throw new TypeError("Cannot resolve explicit label reference for non-DOM nodes");
          var t2, n2 = m(e2.attr("id"));
          if (t2 = (n2 = y(e2.actualNode).querySelector('label[for="' + n2 + '"]')) && Ts(n2, true)) return t2;
        }
        return (t2 = (n2 = Oo(e2, "label")) && Ku(n2, true)) || null;
      }, Os = function(e2) {
        return e2 = g(e2), Rs(e2);
      }, _s = [{ matches: [{ nodeName: "textarea" }, { nodeName: "input", properties: { type: ["text", "password", "search", "tel", "email", "url"] } }], namingMethods: "labelText" }, { matches: { nodeName: "input", properties: { type: ["button", "submit", "reset"] } }, namingMethods: ["valueText", "titleText", "buttonDefaultText"] }, { matches: { nodeName: "input", properties: { type: "image" } }, namingMethods: ["altText", "valueText", "labelText", "titleText", "buttonDefaultText"] }, { matches: "button", namingMethods: "subtreeText" }, { matches: "fieldset", namingMethods: "fieldsetLegendText" }, { matches: "OUTPUT", namingMethods: "subtreeText" }, { matches: [{ nodeName: "select" }, { nodeName: "input", properties: { type: /^(?!text|password|search|tel|email|url|button|submit|reset)/ } }], namingMethods: "labelText" }, { matches: "summary", namingMethods: "subtreeText" }, { matches: "figure", namingMethods: ["figureText", "titleText"] }, { matches: "img", namingMethods: "altText" }, { matches: "table", namingMethods: ["tableCaptionText", "tableSummaryText"] }, { matches: ["hr", "br"], namingMethods: ["titleText", "singleSpace"] }], Ss = function t2(e2) {
        var n2 = ll(e2), r2 = [];
        return e2.children.forEach(function(e3) {
          3 === e3.actualNode.nodeType ? n2 && r2.push(e3) : r2 = r2.concat(t2(e3));
        }), r2;
      }, Ms = n(function(e2) {
        var t2 = g(e2), r2 = t2.boundingClientRect, a2 = [], o2 = ji(t2);
        return e2.childNodes.forEach(function(e3) {
          var t3, n2;
          3 !== e3.nodeType || "" === C(e3.nodeValue) || (e3 = e3, (t3 = document.createRange()).selectNodeContents(e3), e3 = Array.from(t3.getClientRects()), n2 = r2, e3.some(function(e4) {
            return !cl(fl(e4), n2);
          })) || a2.push.apply(a2, w(Ps(e3, o2)));
        }), a2.length ? a2 : Ps([r2], o2);
      });
      function Ps(e2, t2) {
        var n2 = [];
        return e2.forEach(function(e3) {
          e3.width < 1 || e3.height < 1 || (e3 = t2.reduce(function(e4, t3) {
            return e4 && pl(e4, t3.boundingClientRect);
          }, e3)) && n2.push(e3);
        }), n2;
      }
      var Is = function(e2) {
        kl();
        var t2 = g(e2)._grid;
        return t2 ? Ms(e2).map(function(e3) {
          return Yl(t2, e3);
        }) : [];
      }, Bs = ["checkbox", "img", "meter", "progressbar", "scrollbar", "radio", "slider", "spinbutton", "textbox"], js = function(e2) {
        var t2 = l(e2).vNode;
        if (e2 = axe.commons.aria.getExplicitRole(t2)) return -1 !== Bs.indexOf(e2);
        switch (t2.props.nodeName) {
          case "img":
          case "iframe":
          case "object":
          case "video":
          case "audio":
          case "canvas":
          case "svg":
          case "math":
          case "button":
          case "select":
          case "textarea":
          case "keygen":
          case "progress":
          case "meter":
            return true;
          case "input":
            return "hidden" !== t2.props.type;
          default:
            return false;
        }
      }, Ls = ["head", "title", "template", "script", "style", "iframe", "object", "video", "audio", "noscript"];
      function qs(e2) {
        return !Ls.includes(e2.props.nodeName) && e2.children.some(function(e3) {
          e3 = e3.props;
          return 3 === e3.nodeType && e3.nodeValue.trim();
        });
      }
      var zs = function t2(e2, n2, r2) {
        return qs(e2) || js(e2.actualNode) || !r2 && !!Ns(e2) || !n2 && e2.children.some(function(e3) {
          return 1 === e3.actualNode.nodeType && t2(e3);
        });
      }, Vs = function(e2, t2, n2) {
        return e2 = g(e2), zs(e2, t2, n2);
      };
      function $s(e2) {
        return !(void 0 !== e2.children && !qs(e2)) || (1 === e2.props.nodeType && js(e2) ? !!axe.commons.text.accessibleTextVirtual(e2) : e2.children.some(function(e3) {
          return !e3.attr("lang") && $s(e3) && !Qi(e3);
        }));
      }
      var Hs = function(e2) {
        return -1 < parseInt(e2.getAttribute("tabindex"), 10) && F(e2) && !Zl(e2);
      };
      function Us(e2, t2) {
        var e2 = l(e2), n2 = e2.vNode, e2 = e2.domNode;
        return n2 ? (void 0 === n2._isHiddenWithCSS && (n2._isHiddenWithCSS = Gs(e2, t2)), n2._isHiddenWithCSS) : Gs(e2, t2);
      }
      function Gs(e2, t2) {
        if (9 === e2.nodeType) return false;
        if (11 === e2.nodeType && (e2 = e2.host), ["STYLE", "SCRIPT"].includes(e2.nodeName.toUpperCase())) return false;
        var n2, r2 = window2.getComputedStyle(e2, null);
        if (r2) return "none" === r2.getPropertyValue("display") || (n2 = ["hidden", "collapse"], r2 = r2.getPropertyValue("visibility"), !(!n2.includes(r2) || t2)) || !!(n2.includes(r2) && t2 && n2.includes(t2)) || !(!(t2 = s(e2)) || n2.includes(r2)) && Us(t2, r2);
        throw new Error("Style does not exist for the given element.");
      }
      var Ws = Us, Ys = function(e2) {
        return null !== (e2 = e2.doctype) && "html" === e2.name && !e2.publicId && !e2.systemId;
      }, Ks = function(e2) {
        (e2 instanceof p || null != (t2 = window2) && t2.Node && e2 instanceof window2.Node) && (e2 = axe.commons.aria.getRole(e2));
        var t2 = A.ariaRoles[e2];
        return (null == t2 ? void 0 : t2.type) || null;
      }, Xs = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Zs(e2) {
        e2 = window2.getComputedStyle(e2).getPropertyValue("display");
        return Xs.includes(e2) || "table-" === e2.substr(0, 6);
      }
      var Js = function(n2, e2) {
        var t2, r2, a2, o2;
        return !Zs(n2) && (t2 = function(e3) {
          for (var t3 = s(e3); t3 && !Zs(t3); ) t3 = s(t3);
          return g(t3);
        }(n2), a2 = r2 = "", o2 = 0, function t3(e3, n3) {
          false !== n3(e3.actualNode) && e3.children.forEach(function(e4) {
            return t3(e4, n3);
          });
        }(t2, function(e3) {
          if (2 === o2) return false;
          if (3 === e3.nodeType && (r2 += e3.nodeValue), 1 === e3.nodeType) {
            var t3 = (e3.nodeName || "").toUpperCase();
            if (e3 === n2 && (o2 = 1), !["BR", "HR"].includes(t3)) {
              if ("none" !== e3.style.display && "hidden" !== e3.style.overflow && ["", null, "none"].includes(e3.style.float) && ["", null, "relative"].includes(e3.style.position)) return "widget" === Ks(e3) ? (a2 += e3.textContent, false) : void 0;
              return false;
            }
            0 === o2 ? a2 = r2 = "" : o2 = 2;
          }
        }), r2 = C(r2), null != e2 && e2.noLengthCompare ? 0 !== r2.length : (a2 = C(a2), r2.length > a2.length));
      }, Qs = function(e2) {
        if (e2 = (e2 = e2 || {}).modalPercent || 0.75, v.get("isModalOpen")) return v.get("isModalOpen");
        if (sf(axe._tree[0], "dialog, [role=dialog], [aria-modal=true]", ll).length) return v.set("isModalOpen", true), true;
        for (var t2, n2 = al(window2), r2 = n2.width * e2, a2 = n2.height * e2, e2 = (n2.width - r2) / 2, o2 = (n2.height - a2) / 2, i2 = [{ x: e2, y: o2 }, { x: n2.width - e2, y: o2 }, { x: n2.width / 2, y: n2.height / 2 }, { x: e2, y: n2.height - o2 }, { x: n2.width - e2, y: n2.height - o2 }].map(function(e3) {
          return Array.from(document.elementsFromPoint(e3.x, e3.y));
        }), l2 = 0; l2 < i2.length; l2++) if (t2 = function() {
          var t3 = i2[l2].find(function(e3) {
            e3 = window2.getComputedStyle(e3);
            return parseInt(e3.width, 10) >= r2 && parseInt(e3.height, 10) >= a2 && "none" !== e3.getPropertyValue("pointer-events") && ("absolute" === e3.position || "fixed" === e3.position);
          });
          if (t3 && i2.every(function(e3) {
            return e3.includes(t3);
          })) return v.set("isModalOpen", true), { v: true };
        }()) return t2.v;
        v.set("isModalOpen", void 0);
      };
      function ec(e2) {
        var t2, n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 2, r2 = e2.ownerDocument.createRange(), a2 = (r2.setStart(e2, 0), r2.setEnd(e2, e2.childNodes.length), 0), o2 = 0, i2 = x(r2.getClientRects());
        try {
          for (i2.s(); !(t2 = i2.n()).done; ) {
            var l2 = t2.value;
            if (!(l2.height <= n2)) if (a2 > l2.top + n2) a2 = Math.max(a2, l2.bottom);
            else {
              if (0 !== o2) return true;
              a2 = l2.bottom, o2++;
            }
          }
        } catch (e3) {
          i2.e(e3);
        } finally {
          i2.f();
        }
        return false;
      }
      var tc = function(e2) {
        return e2 instanceof window2.Node;
      }, nc = "color.incompleteData", N = { set: function(e2, t2) {
        if ("string" != typeof e2) throw new Error("Incomplete data: key must be a string");
        var n2 = v.get(nc, function() {
          return {};
        });
        return t2 && (n2[e2] = t2), n2[e2];
      }, get: function(e2) {
        var t2 = v.get(nc);
        return null == t2 ? void 0 : t2[e2];
      }, clear: function() {
        v.set(nc, {});
      } }, rc = function(e2, t2) {
        var n2 = e2.nodeName.toUpperCase();
        return ["IMG", "CANVAS", "OBJECT", "IFRAME", "VIDEO", "SVG"].includes(n2) ? (N.set("bgColor", "imgNode"), true) : ((e2 = "none" !== (n2 = (t2 = t2 || window2.getComputedStyle(e2)).getPropertyValue("background-image"))) && (t2 = /gradient/.test(n2), N.set("bgColor", t2 ? "bgGradient" : "bgImage")), e2);
      }, uu = (Se(a = {}, { ArrayFrom: function() {
        return Sd.default;
      }, Colorjs: function() {
        return Cd;
      }, CssSelectorParser: function() {
        return ac.CssSelectorParser;
      }, doT: function() {
        return oc.default;
      }, emojiRegexText: function() {
        return ws;
      }, memoize: function() {
        return ic.default;
      } }), Pe(Fn())), Fn = Pe(t()), t = (Pe(An()), Pe(Ar())), An = Pe($r()), Ar = Pe(Aa()), ac = ("hasOwn" in Object || (Object.hasOwn = t.default), "values" in Object || (Object.values = An.default), "Promise" in window2 || uu.default.polyfill(), "Uint32Array" in window2 || (window2.Uint32Array = Fn.Uint32Array), window2.Uint32Array && ("some" in window2.Uint32Array.prototype || Object.defineProperty(window2.Uint32Array.prototype, "some", { value: Array.prototype.some }), "reduce" in window2.Uint32Array.prototype || Object.defineProperty(window2.Uint32Array.prototype, "reduce", { value: Array.prototype.reduce })), "function" != typeof Object.assign && (Object.assign = function(e2) {
        if (null == e2) throw new TypeError("Cannot convert undefined or null to object");
        for (var t2 = Object(e2), n2 = 1; n2 < arguments.length; n2++) {
          var r2 = arguments[n2];
          if (null != r2) for (var a2 in r2) r2.hasOwnProperty(a2) && (t2[a2] = r2[a2]);
        }
        return t2;
      }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", { value: function(e2) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e2) throw new TypeError("predicate must be a function");
        for (var t2, n2 = Object(this), r2 = n2.length >>> 0, a2 = arguments[1], o2 = 0; o2 < r2; o2++) if (t2 = n2[o2], e2.call(a2, t2, o2, n2)) return t2;
      } }), Array.prototype.findIndex || Object.defineProperty(Array.prototype, "findIndex", { value: function(e2, t2) {
        if (null === this) throw new TypeError("Array.prototype.find called on null or undefined");
        if ("function" != typeof e2) throw new TypeError("predicate must be a function");
        for (var n2, r2 = Object(this), a2 = r2.length >>> 0, o2 = 0; o2 < a2; o2++) if (n2 = r2[o2], e2.call(t2, n2, o2, r2)) return o2;
        return -1;
      } }), Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", { value: function(e2) {
        var t2 = Object(this), n2 = parseInt(t2.length, 10) || 0;
        if (0 !== n2) {
          var r2, a2, o2 = parseInt(arguments[1], 10) || 0;
          for (0 <= o2 ? r2 = o2 : (r2 = n2 + o2) < 0 && (r2 = 0); r2 < n2; ) {
            if (e2 === (a2 = t2[r2]) || e2 != e2 && a2 != a2) return true;
            r2++;
          }
        }
        return false;
      } }), Array.prototype.some || Object.defineProperty(Array.prototype, "some", { value: function(e2) {
        if (null == this) throw new TypeError("Array.prototype.some called on null or undefined");
        if ("function" != typeof e2) throw new TypeError();
        for (var t2 = Object(this), n2 = t2.length >>> 0, r2 = 2 <= arguments.length ? arguments[1] : void 0, a2 = 0; a2 < n2; a2++) if (a2 in t2 && e2.call(r2, t2[a2], a2, t2)) return true;
        return false;
      } }), Array.from || (Array.from = Ar.default), String.prototype.includes || (String.prototype.includes = function(e2, t2) {
        return !((t2 = "number" != typeof t2 ? 0 : t2) + e2.length > this.length) && -1 !== this.indexOf(e2, t2);
      }), Array.prototype.flat || Object.defineProperty(Array.prototype, "flat", { configurable: true, value: function n2() {
        var r2 = isNaN(arguments[0]) ? 1 : Number(arguments[0]);
        return r2 ? Array.prototype.reduce.call(this, function(e2, t2) {
          return Array.isArray(t2) ? e2.push.apply(e2, n2.call(t2, r2 - 1)) : e2.push(t2), e2;
        }, []) : Array.prototype.slice.call(this);
      }, writable: true }), !window2.Node || "isConnected" in window2.Node.prototype || Object.defineProperty(window2.Node.prototype, "isConnected", { get: function() {
        return !(this.ownerDocument && this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
      } }), Pe(En())), oc = Pe(Ca()), ic = Pe(yn());
      function o(e2, n2) {
        var t2 = e2.length, r2 = (Array.isArray(e2[0]) || (e2 = [e2]), (n2 = Array.isArray(n2[0]) ? n2 : n2.map(function(e3) {
          return [e3];
        }))[0].length), a2 = n2[0].map(function(e3, t3) {
          return n2.map(function(e4) {
            return e4[t3];
          });
        }), e2 = e2.map(function(i2) {
          return a2.map(function(e3) {
            var t3 = 0;
            if (Array.isArray(i2)) for (var n3 = 0; n3 < i2.length; n3++) t3 += i2[n3] * (e3[n3] || 0);
            else {
              var r3, a3 = x(e3);
              try {
                for (a3.s(); !(r3 = a3.n()).done; ) {
                  var o2 = r3.value;
                  t3 += i2 * o2;
                }
              } catch (e4) {
                a3.e(e4);
              } finally {
                a3.f();
              }
            }
            return t3;
          });
        });
        return 1 === t2 && (e2 = e2[0]), 1 === r2 ? e2.map(function(e3) {
          return e3[0];
        }) : e2;
      }
      function lc(e2) {
        return "string" === uc(e2);
      }
      function uc(e2) {
        return (Object.prototype.toString.call(e2).match(/^\[object\s+(.*?)\]$/)[1] || "").toLowerCase();
      }
      function sc(e2, t2) {
        e2 = +e2, t2 = +t2;
        var n2 = (Math.floor(e2) + "").length;
        return n2 < t2 ? +e2.toFixed(t2 - n2) : (n2 = Math.pow(10, n2 - t2), Math.round(e2 / n2) * n2);
      }
      function cc(e2) {
        var n2, r2;
        if (e2) return e2 = e2.trim(), n2 = /^-?[\d.]+$/, (e2 = e2.match(/^([a-z]+)\((.+?)\)$/i)) ? (r2 = [], e2[2].replace(/\/?\s*([-\w.]+(?:%|deg)?)/g, function(e3, t2) {
          /%$/.test(t2) ? (t2 = new Number(t2.slice(0, -1) / 100)).type = "<percentage>" : /deg$/.test(t2) ? ((t2 = new Number(+t2.slice(0, -3))).type = "<angle>", t2.unit = "deg") : n2.test(t2) && ((t2 = new Number(t2)).type = "<number>"), e3.startsWith("/") && ((t2 = t2 instanceof Number ? t2 : new Number(t2)).alpha = true), r2.push(t2);
        }), { name: e2[1].toLowerCase(), rawName: e2[1], rawArgs: e2[2], args: r2 }) : void 0;
      }
      function dc(e2) {
        return e2[e2.length - 1];
      }
      function pc(e2, t2, n2) {
        return isNaN(e2) ? t2 : isNaN(t2) ? e2 : e2 + (t2 - e2) * n2;
      }
      function fc(e2, t2, n2) {
        return (n2 - e2) / (t2 - e2);
      }
      function mc(e2, t2, n2) {
        return pc(t2[0], t2[1], fc(e2[0], e2[1], n2));
      }
      function hc(e2) {
        return e2.map(function(e3) {
          return e3.split("|").map(function(e4) {
            var t2, n2 = (e4 = e4.trim()).match(/^(<[a-z]+>)\[(-?[.\d]+),\s*(-?[.\d]+)\]?$/);
            return n2 ? ((t2 = new String(n2[1])).range = [+n2[2], +n2[3]], t2) : e4;
          });
        });
      }
      var $r = Object.freeze({ __proto__: null, isString: lc, type: uc, toPrecision: sc, parseFunction: cc, last: dc, interpolate: pc, interpolateInv: fc, mapRange: mc, parseCoordGrammar: hc, multiplyMatrices: o }), gc = new (ve(function e2() {
        ge(this, e2);
      }, [{ key: "add", value: function(e2, t2, n2) {
        if ("string" != typeof arguments[0]) for (var e2 in arguments[0]) this.add(e2, arguments[0][e2], t2);
        else (Array.isArray(e2) ? e2 : [e2]).forEach(function(e3) {
          this[e3] = this[e3] || [], t2 && this[e3][n2 ? "unshift" : "push"](t2);
        }, this);
      } }, { key: "run", value: function(e2, t2) {
        this[e2] = this[e2] || [], this[e2].forEach(function(e3) {
          e3.call(t2 && t2.context ? t2.context : t2, t2);
        });
      } }]))(), bc = { gamut_mapping: "lch.c", precision: 5, deltaE: "76" }, vc = { D50: [0.3457 / 0.3585, 1, 0.2958 / 0.3585], D65: [0.3127 / 0.329, 1, 0.3583 / 0.329] };
      function yc(e2) {
        return Array.isArray(e2) ? e2 : vc[e2];
      }
      function wc(e2, t2, n2, r2) {
        r2 = 3 < arguments.length && void 0 !== r2 ? r2 : {};
        if (e2 = yc(e2), t2 = yc(t2), !e2 || !t2) throw new TypeError("Missing white point to convert ".concat(e2 ? "" : "from").concat(e2 || t2 ? "" : "/").concat(t2 ? "" : "to"));
        if (e2 === t2) return n2;
        e2 = { W1: e2, W2: t2, XYZ: n2, options: r2 };
        if (gc.run("chromatic-adaptation-start", e2), e2.M || (e2.W1 === vc.D65 && e2.W2 === vc.D50 ? e2.M = [[1.0479298208405488, 0.022946793341019088, -0.05019222954313557], [0.029627815688159344, 0.990434484573249, -0.01707382502938514], [-0.009243058152591178, 0.015055144896577895, 0.7518742899580008]] : e2.W1 === vc.D50 && e2.W2 === vc.D65 && (e2.M = [[0.9554734527042182, -0.023098536874261423, 0.0632593086610217], [-0.028369706963208136, 1.0099954580058226, 0.021041398966943008], [0.012314001688319899, -0.020507696433477912, 1.3303659366080753]])), gc.run("chromatic-adaptation-end", e2), e2.M) return o(e2.M, e2.XYZ);
        throw new TypeError("Only Bradford CAT with white points D50 and D65 supported for now.");
      }
      function Dc(e2) {
        ge(this, Dc), ue(this, xe), le(this, Ee, void 0), this.id = e2.id, this.name = e2.name, this.base = e2.base ? Dc.get(e2.base) : null, this.aliases = e2.aliases, this.base && (this.fromBase = e2.fromBase, this.toBase = e2.toBase);
        var t2, n2 = null != (n2 = e2.coords) ? n2 : this.base.coords, n2 = (this.coords = n2, null != (n2 = null != (n2 = e2.white) ? n2 : this.base.white) ? n2 : "D65");
        for (t2 in this.white = yc(n2), this.formats = null != (n2 = e2.formats) ? n2 : {}, this.formats) {
          var r2 = this.formats[t2];
          r2.type || (r2.type = "function"), r2.name || (r2.name = t2);
        }
        !e2.cssId || null != (n2 = this.formats.functions) && n2.color ? null == (n2 = this.formats) || !n2.color || null != (n2 = this.formats) && n2.color.id || (this.formats.color.id = this.id) : (this.formats.color = { id: e2.cssId }, Object.defineProperty(this, "cssId", { value: e2.cssId })), this.referred = e2.referred, de(Ee, this, pe(xe, this, Ec).call(this).reverse()), gc.run("colorspace-init-end", this);
      }
      function xc(a2) {
        var o2;
        return a2.coords && !a2.coordGrammar && (a2.type || (a2.type = "function"), a2.name || (a2.name = "color"), a2.coordGrammar = hc(a2.coords), o2 = Object.entries(this.coords).map(function(e2, t2) {
          var e2 = D(e2, 2), e2 = (e2[0], e2[1]), t2 = a2.coordGrammar[t2][0], e2 = e2.range || e2.refRange, n2 = t2.range, r2 = "";
          return "<percentage>" == t2 ? (n2 = [0, 100], r2 = "%") : "<angle>" == t2 && (r2 = "deg"), { fromRange: e2, toRange: n2, suffix: r2 };
        }), a2.serializeCoords = function(e2, a3) {
          return e2.map(function(e3, t2) {
            var t2 = o2[t2], n2 = t2.fromRange, r2 = t2.toRange, t2 = t2.suffix;
            return e3 = sc(e3 = n2 && r2 ? mc(n2, r2, e3) : e3, a3), t2 && (e3 += t2), e3;
          });
        }), a2;
      }
      function Ec() {
        for (var e2 = [this], t2 = this; t2 = t2.base; ) e2.push(t2);
        return e2;
      }
      xe = /* @__PURE__ */ new WeakSet(), Ee = /* @__PURE__ */ new WeakMap();
      var T = ve(Dc, [{ key: "inGamut", value: function(e2) {
        var r2, t2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).epsilon, a2 = void 0 === t2 ? 75e-6 : t2;
        return this.isPolar ? (e2 = this.toBase(e2), this.base.inGamut(e2, { epsilon: a2 })) : (r2 = Object.values(this.coords), e2.every(function(e3, t3) {
          var n2, t3 = r2[t3];
          return "angle" === t3.type || !t3.range || !!Number.isNaN(e3) || (n2 = (t3 = D(t3.range, 2))[0], t3 = t3[1], (void 0 === n2 || n2 - a2 <= e3) && (void 0 === t3 || e3 <= t3 + a2));
        }));
      } }, { key: "cssId", get: function() {
        var e2;
        return (null == (e2 = this.formats.functions) || null == (e2 = e2.color) ? void 0 : e2.id) || this.id;
      } }, { key: "isPolar", get: function() {
        for (var e2 in this.coords) if ("angle" === this.coords[e2].type) return true;
        return false;
      } }, { key: "getFormat", value: function(e2) {
        return "object" === te(e2) || (e2 = "default" === e2 ? Object.values(this.formats)[0] : this.formats[e2]) ? pe(xe, this, xc).call(this, e2) : null;
      } }, { key: "to", value: function(e2, t2) {
        var n2;
        if (1 === arguments.length && (e2 = (n2 = [e2.space, e2.coords])[0], t2 = n2[1]), this !== (e2 = Dc.get(e2))) {
          t2 = t2.map(function(e3) {
            return Number.isNaN(e3) ? 0 : e3;
          });
          for (var r2, a2, o2 = ce(Ee, this), i2 = ce(Ee, e2), l2 = 0; l2 < o2.length && o2[l2] === i2[l2]; l2++) r2 = o2[l2], a2 = l2;
          if (!r2) throw new Error("Cannot convert between color spaces ".concat(this, " and ").concat(e2, ": no connection space was found"));
          for (var u2 = o2.length - 1; a2 < u2; u2--) t2 = o2[u2].toBase(t2);
          for (var s2 = a2 + 1; s2 < i2.length; s2++) t2 = i2[s2].fromBase(t2);
        }
        return t2;
      } }, { key: "from", value: function(e2, t2) {
        var n2;
        return 1 === arguments.length && (e2 = (n2 = [e2.space, e2.coords])[0], t2 = n2[1]), (e2 = Dc.get(e2)).to(this, t2);
      } }, { key: "toString", value: function() {
        return "".concat(this.name, " (").concat(this.id, ")");
      } }, { key: "getMinCoords", value: function() {
        var e2, t2 = [];
        for (e2 in this.coords) {
          var n2 = this.coords[e2], n2 = n2.range || n2.refRange;
          t2.push(null != (n2 = null == n2 ? void 0 : n2.min) ? n2 : 0);
        }
        return t2;
      } }], [{ key: "all", get: function() {
        return w(new Set(Object.values(Dc.registry)));
      } }, { key: "register", value: function(e2, t2) {
        if (1 === arguments.length && (e2 = (t2 = arguments[0]).id), t2 = this.get(t2), this.registry[e2] && this.registry[e2] !== t2) throw new Error("Duplicate color space registration: '".concat(e2, "'"));
        if (this.registry[e2] = t2, 1 === arguments.length && t2.aliases) {
          var n2, r2 = x(t2.aliases);
          try {
            for (r2.s(); !(n2 = r2.n()).done; ) {
              var a2 = n2.value;
              this.register(a2, t2);
            }
          } catch (e3) {
            r2.e(e3);
          } finally {
            r2.f();
          }
        }
        return t2;
      } }, { key: "get", value: function(e2) {
        if (!e2 || e2 instanceof Dc) return e2;
        if ("string" === uc(e2)) {
          var t2 = Dc.registry[e2.toLowerCase()];
          if (t2) return t2;
          throw new TypeError('No color space found with id = "'.concat(e2, '"'));
        }
        for (var n2 = arguments.length, r2 = new Array(1 < n2 ? n2 - 1 : 0), a2 = 1; a2 < n2; a2++) r2[a2 - 1] = arguments[a2];
        if (r2.length) return Dc.get.apply(Dc, r2);
        throw new TypeError("".concat(e2, " is not a valid color space"));
      } }, { key: "resolveCoord", value: function(e2, t2) {
        var n2, r2;
        if (r2 = "string" === uc(e2) ? e2.includes(".") ? (n2 = (r2 = D(e2.split("."), 2))[0], r2[1]) : (n2 = void 0, e2) : Array.isArray(e2) ? (n2 = (r2 = D(e2, 2))[0], r2[1]) : (n2 = e2.space, e2.coordId), !(n2 = (n2 = Dc.get(n2)) || t2)) throw new TypeError("Cannot resolve coordinate reference ".concat(e2, ": No color space specified and relative references are not allowed here"));
        if ("number" === (t2 = uc(r2)) || "string" === t2 && 0 <= r2) {
          e2 = Object.entries(n2.coords)[r2];
          if (e2) return h({ space: n2, id: e2[0], index: r2 }, e2[1]);
        }
        n2 = Dc.get(n2);
        var a2, o2 = r2.toLowerCase(), i2 = 0;
        for (a2 in n2.coords) {
          var l2, u2 = n2.coords[a2];
          if (a2.toLowerCase() === o2 || (null == (l2 = u2.name) ? void 0 : l2.toLowerCase()) === o2) return h({ space: n2, id: a2, index: i2 }, u2);
          i2++;
        }
        throw new TypeError('No "'.concat(r2, '" coordinate found in ').concat(n2.name, ". Its coordinates are: ").concat(Object.keys(n2.coords).join(", ")));
      } }]), Fc = (Ie(T, "registry", {}), Ie(T, "DEFAULT_FORMAT", { type: "functions", name: "color" }), new T({ id: "xyz-d65", name: "XYZ D65", coords: { x: { name: "X" }, y: { name: "Y" }, z: { name: "Z" } }, white: "D65", formats: { color: { ids: ["xyz-d65", "xyz"] } }, aliases: ["xyz"] })), t = (oe(Ac, T), ve(Ac));
      function Ac(t2) {
        var n2;
        return ge(this, Ac), t2.coords || (t2.coords = { r: { range: [0, 1], name: "Red" }, g: { range: [0, 1], name: "Green" }, b: { range: [0, 1], name: "Blue" } }), t2.base || (t2.base = Fc), t2.toXYZ_M && t2.fromXYZ_M && (null == t2.toBase && (t2.toBase = function(e2) {
          e2 = o(t2.toXYZ_M, e2);
          return e2 = n2.white !== n2.base.white ? wc(n2.white, n2.base.white, e2) : e2;
        }), null == t2.fromBase) && (t2.fromBase = function(e2) {
          return e2 = wc(n2.base.white, n2.white, e2), o(t2.fromXYZ_M, e2);
        }), null == t2.referred && (t2.referred = "display"), n2 = ne(this, Ac, [t2]);
      }
      function Cc(e2) {
        var r2 = { str: null == (s2 = String(e2)) ? void 0 : s2.trim() };
        if (gc.run("parse-start", r2), r2.color) return r2.color;
        if (r2.parsed = cc(r2.str), r2.parsed) {
          var u2 = r2.parsed.name;
          if ("color" === u2) {
            var a2, o2 = r2.parsed.args.shift(), i2 = 0 < r2.parsed.rawArgs.indexOf("/") ? r2.parsed.args.pop() : 1, t2 = x(T.all);
            try {
              var n2;
              for (t2.s(); !(a2 = t2.n()).done; ) if (n2 = function() {
                var n3, e3 = a2.value, t3 = e3.getFormat("color");
                if (t3 && (o2 === t3.id || null != (t3 = t3.ids) && t3.includes(o2))) return t3 = Object.keys(e3.coords).length, (n3 = Array(t3).fill(0)).forEach(function(e4, t4) {
                  return n3[t4] = r2.parsed.args[t4] || 0;
                }), { v: { spaceId: e3.id, coords: n3, alpha: i2 } };
              }()) return n2.v;
            } catch (e3) {
              t2.e(e3);
            } finally {
              t2.f();
            }
            var l2, s2 = "";
            throw o2 in T.registry && (l2 = null == (l2 = T.registry[o2].formats) || null == (l2 = l2.functions) || null == (l2 = l2.color) ? void 0 : l2.id) && (s2 = "Did you mean color(".concat(l2, ")?")), new TypeError("Cannot parse color(".concat(o2, "). ") + (s2 || "Missing a plugin?"));
          }
          var c2, d2 = x(T.all);
          try {
            var p2;
            for (d2.s(); !(c2 = d2.n()).done; ) if (p2 = function() {
              var e3, i3, t3 = c2.value, l3 = t3.getFormat(u2);
              if (l3 && "function" === l3.type) return e3 = 1, (l3.lastAlpha || dc(r2.parsed.args).alpha) && (e3 = r2.parsed.args.pop()), i3 = r2.parsed.args, l3.coordGrammar && Object.entries(t3.coords).forEach(function(e4, t4) {
                var e4 = D(e4, 2), n3 = e4[0], e4 = e4[1], r3 = l3.coordGrammar[t4], a3 = null == (o3 = i3[t4]) ? void 0 : o3.type;
                if (!(r3 = r3.find(function(e5) {
                  return e5 == a3;
                }))) throw o3 = e4.name || n3, new TypeError("".concat(a3, " not allowed for ").concat(o3, " in ").concat(u2, "()"));
                var n3 = r3.range, o3 = e4.range || e4.refRange;
                (n3 = "<percentage>" === a3 ? n3 || [0, 1] : n3) && o3 && (i3[t4] = mc(n3, o3, i3[t4]));
              }), { v: { spaceId: t3.id, coords: i3, alpha: e3 } };
            }()) return p2.v;
          } catch (e3) {
            d2.e(e3);
          } finally {
            d2.f();
          }
        } else {
          var f2, m2 = x(T.all);
          try {
            for (m2.s(); !(f2 = m2.n()).done; ) {
              var h2, g2 = f2.value;
              for (h2 in g2.formats) {
                var b2 = g2.formats[h2];
                if ("custom" === b2.type && (!b2.test || b2.test(r2.str))) {
                  var v2 = b2.parse(r2.str);
                  if (v2) return null == v2.alpha && (v2.alpha = 1), v2;
                }
              }
            }
          } catch (e3) {
            m2.e(e3);
          } finally {
            m2.f();
          }
        }
        throw new TypeError("Could not parse ".concat(e2, " as a color. Missing a plugin?"));
      }
      function R(e2) {
        var t2;
        if (e2) return (t2 = (e2 = lc(e2) ? Cc(e2) : e2).space || e2.spaceId) instanceof T || (e2.space = T.get(t2)), void 0 === e2.alpha && (e2.alpha = 1), e2;
        throw new TypeError("Empty color reference");
      }
      function kc(e2, t2) {
        return (t2 = T.get(t2)).from(e2);
      }
      function Nc(e2, t2) {
        var t2 = T.resolveCoord(t2, e2.space), n2 = t2.space, t2 = t2.index;
        return kc(e2, n2)[t2];
      }
      function Tc(e2, t2, n2) {
        return t2 = T.get(t2), e2.coords = t2.to(e2.space, n2), e2;
      }
      function Rc(e2, t2, n2) {
        if (e2 = R(e2), 2 === arguments.length && "object" === uc(t2)) {
          var r2, a2 = t2;
          for (r2 in a2) Rc(e2, r2, a2[r2]);
        } else {
          "function" == typeof n2 && (n2 = n2(Nc(e2, t2)));
          var t2 = T.resolveCoord(t2, e2.space), o2 = t2.space, t2 = t2.index, i2 = kc(e2, o2);
          i2[t2] = n2, Tc(e2, o2, i2);
        }
        return e2;
      }
      var An = new T({ id: "xyz-d50", name: "XYZ D50", white: "D50", base: Fc, fromBase: function(e2) {
        return wc(Fc.white, "D50", e2);
      }, toBase: function(e2) {
        return wc("D50", Fc.white, e2);
      }, formats: { color: {} } }), Oc = 24389 / 27, _c = vc.D50, Sc = new T({ id: "lab", name: "Lab", coords: { l: { refRange: [0, 100], name: "L" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: _c, base: An, fromBase: function(e2) {
        e2 = e2.map(function(e3, t2) {
          return e3 / _c[t2];
        }).map(function(e3) {
          return 216 / 24389 < e3 ? Math.cbrt(e3) : (Oc * e3 + 16) / 116;
        });
        return [116 * e2[1] - 16, 500 * (e2[0] - e2[1]), 200 * (e2[1] - e2[2])];
      }, toBase: function(e2) {
        var t2 = [];
        return t2[1] = (e2[0] + 16) / 116, t2[0] = e2[1] / 500 + t2[1], t2[2] = t2[1] - e2[2] / 200, [24 / 116 < t2[0] ? Math.pow(t2[0], 3) : (116 * t2[0] - 16) / Oc, 8 < e2[0] ? Math.pow((e2[0] + 16) / 116, 3) : e2[0] / Oc, 24 / 116 < t2[2] ? Math.pow(t2[2], 3) : (116 * t2[2] - 16) / Oc].map(function(e3, t3) {
          return e3 * _c[t3];
        });
      }, formats: { lab: { coords: ["<number> | <percentage>", "<number>", "<number>"] } } });
      function Mc(e2) {
        return (e2 % 360 + 360) % 360;
      }
      var Pc = new T({ id: "lch", name: "LCH", coords: { l: { refRange: [0, 100], name: "Lightness" }, c: { refRange: [0, 150], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: Sc, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], r2 = Math.abs(n2) < 0.02 && Math.abs(e2) < 0.02 ? NaN : 180 * Math.atan2(e2, n2) / Math.PI;
        return [t2, Math.sqrt(Math.pow(n2, 2) + Math.pow(e2, 2)), Mc(r2)];
      }, toBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2];
        return n2 < 0 && (n2 = 0), isNaN(e2) && (e2 = 0), [t2, n2 * Math.cos(e2 * Math.PI / 180), n2 * Math.sin(e2 * Math.PI / 180)];
      }, formats: { lch: { coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"] } } }), Ic = Math.pow(25, 7), Bc = Math.PI, jc = 180 / Bc, Lc = Bc / 180;
      function qc(e2, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r2 = n2.kL, r2 = void 0 === r2 ? 1 : r2, a2 = n2.kC, a2 = void 0 === a2 ? 1 : a2, n2 = n2.kH, n2 = void 0 === n2 ? 1 : n2, e2 = D(Sc.from(e2), 3), o2 = e2[0], i2 = e2[1], e2 = e2[2], l2 = Pc.from(Sc, [o2, i2, e2])[1], t2 = D(Sc.from(t2), 3), u2 = t2[0], s2 = t2[1], t2 = t2[2], c2 = Pc.from(Sc, [u2, s2, t2])[1], l2 = ((l2 = l2 < 0 ? 0 : l2) + (c2 = c2 < 0 ? 0 : c2)) / 2, c2 = Math.pow(l2, 7), l2 = 0.5 * (1 - Math.sqrt(c2 / (c2 + Ic))), c2 = (1 + l2) * i2, i2 = (1 + l2) * s2, l2 = Math.sqrt(Math.pow(c2, 2) + Math.pow(e2, 2)), s2 = Math.sqrt(Math.pow(i2, 2) + Math.pow(t2, 2)), e2 = 0 == c2 && 0 === e2 ? 0 : Math.atan2(e2, c2), c2 = 0 == i2 && 0 === t2 ? 0 : Math.atan2(t2, i2), t2 = (e2 < 0 && (e2 += 2 * Bc), c2 < 0 && (c2 += 2 * Bc), u2 - o2), i2 = s2 - l2, d2 = (c2 *= jc) - (e2 *= jc), e2 = e2 + c2, c2 = Math.abs(d2), d2 = (l2 * s2 == 0 ? p2 = 0 : c2 <= 180 ? p2 = d2 : 180 < d2 ? p2 = d2 - 360 : d2 < -180 ? p2 = 360 + d2 : console.log("the unthinkable has happened"), 2 * Math.sqrt(s2 * l2) * Math.sin(p2 * Lc / 2)), p2 = (o2 + u2) / 2, o2 = (l2 + s2) / 2, u2 = Math.pow(o2, 7), l2 = l2 * s2 == 0 ? e2 : c2 <= 180 ? e2 / 2 : e2 < 360 ? (e2 + 360) / 2 : (e2 - 360) / 2, s2 = Math.pow(p2 - 50, 2), c2 = 1 + 0.015 * s2 / Math.sqrt(20 + s2), e2 = 1 + 0.045 * o2, p2 = 1, s2 = 1 + 0.015 * o2 * ((p2 -= 0.17 * Math.cos((l2 - 30) * Lc)) + 0.24 * Math.cos(2 * l2 * Lc) + 0.32 * Math.cos((3 * l2 + 6) * Lc) - 0.2 * Math.cos((4 * l2 - 63) * Lc)), o2 = 30 * Math.exp(-1 * Math.pow((l2 - 275) / 25, 2)), p2 = 2 * Math.sqrt(u2 / (u2 + Ic)), l2 = -1 * Math.sin(2 * o2 * Lc) * p2, u2 = Math.pow(t2 / (r2 * c2), 2), u2 = (u2 += Math.pow(i2 / (a2 * e2), 2)) + Math.pow(d2 / (n2 * s2), 2) + i2 / (a2 * e2) * l2 * (d2 / (n2 * s2));
        return Math.sqrt(u2);
      }
      var zc = 75e-6;
      function Vc(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : e2.space, n2 = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).epsilon, n2 = void 0 === n2 ? zc : n2, r2 = (e2 = R(e2), t2 = T.get(t2), e2.coords);
        return t2 !== e2.space && (r2 = t2.from(e2)), t2.inGamut(r2, { epsilon: n2 });
      }
      function $c(e2) {
        return { space: e2.space, coords: e2.coords.slice(), alpha: e2.alpha };
      }
      function Hc(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.method, n2 = void 0 === n2 ? bc.gamut_mapping : n2, t2 = t2.space, r2 = void 0 === t2 ? e2.space : t2;
        if (lc(arguments[1]) && (r2 = arguments[1]), !Vc(e2, r2 = T.get(r2), { epsilon: 0 })) {
          var a2, t2 = Uc(e2, r2);
          if ("clip" !== n2 && !Vc(e2, r2)) {
            var o2 = Hc($c(t2), { method: "clip", space: r2 });
            if (2 < qc(e2, o2)) {
              for (var i2 = T.resolveCoord(n2), l2 = i2.space, u2 = i2.id, s2 = Uc(t2, l2), c2 = (i2.range || i2.refRange)[0], d2 = Nc(s2, u2); 0.01 < d2 - c2; ) qc(s2, Hc($c(s2), { space: r2, method: "clip" })) - 2 < 0.01 ? c2 = Nc(s2, u2) : d2 = Nc(s2, u2), Rc(s2, u2, (c2 + d2) / 2);
              t2 = Uc(s2, r2);
            } else t2 = o2;
          }
          "clip" !== n2 && Vc(t2, r2, { epsilon: 0 }) || (a2 = Object.values(r2.coords).map(function(e3) {
            return e3.range || [];
          }), t2.coords = t2.coords.map(function(e3, t3) {
            var t3 = D(a2[t3], 2), n3 = t3[0], t3 = t3[1];
            return void 0 !== n3 && (e3 = Math.max(n3, e3)), e3 = void 0 !== t3 ? Math.min(e3, t3) : e3;
          })), r2 !== e2.space && (t2 = Uc(t2, e2.space)), e2.coords = t2.coords;
        }
        return e2;
      }
      function Uc(e2, t2) {
        var n2 = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).inGamut, r2 = (e2 = R(e2), (t2 = T.get(t2)).from(e2)), t2 = { space: t2, coords: r2, alpha: e2.alpha };
        return t2 = n2 ? Hc(t2) : t2;
      }
      function Gc(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.precision, r2 = void 0 === n2 ? bc.precision : n2, n2 = t2.format, n2 = void 0 === n2 ? "default" : n2, a2 = t2.inGamut, a2 = void 0 === a2 || a2, t2 = b(t2, $), o2 = n2, n2 = null != (i2 = null != (i2 = (e2 = R(e2)).space.getFormat(n2)) ? i2 : e2.space.getFormat("default")) ? i2 : T.DEFAULT_FORMAT, a2 = a2 || n2.toGamut, i2 = (i2 = e2.coords).map(function(e3) {
          return e3 || 0;
        });
        if (a2 && !Vc(e2) && (i2 = Hc($c(e2), true === a2 ? void 0 : a2).coords), "custom" === n2.type) {
          if (t2.precision = r2, !n2.serialize) throw new TypeError("format ".concat(o2, " can only be used to parse colors, not for serialization"));
          l2 = n2.serialize(i2, e2.alpha, t2);
        } else var a2 = n2.name || "color", o2 = (n2.serializeCoords ? i2 = n2.serializeCoords(i2, r2) : null !== r2 && (i2 = i2.map(function(e3) {
          return sc(e3, r2);
        })), w(i2)), t2 = ("color" === a2 && (i2 = n2.id || (null == (t2 = n2.ids) ? void 0 : t2[0]) || e2.space.id, o2.unshift(i2)), e2.alpha), i2 = (null !== r2 && (t2 = sc(t2, r2)), e2.alpha < 1 && !n2.noAlpha ? "".concat(n2.commas ? "," : " /", " ").concat(t2) : ""), l2 = "".concat(a2, "(").concat(o2.join(n2.commas ? ", " : " ")).concat(i2, ")");
        return l2;
      }
      Uc.returns = Hc.returns = "color";
      var uu = new t({ id: "rec2020-linear", name: "Linear REC.2020", white: "D65", toXYZ_M: [[0.6369580483012914, 0.14461690358620832, 0.1688809751641721], [0.2627002120112671, 0.6779980715188708, 0.05930171646986196], [0, 0.028072693049087428, 1.060985057710791]], fromXYZ_M: [[1.716651187971268, -0.355670783776392, -0.25336628137366], [-0.666684351832489, 1.616481236634939, 0.0157685458139111], [0.017639857445311, -0.042770613257809, 0.942103121235474]], formats: { color: {} } }), Wc = 1.09929682680944, Yc = 0.018053968510807, Fn = new t({ id: "rec2020", name: "REC.2020", base: uu, toBase: function(e2) {
        return e2.map(function(e3) {
          return e3 < 4.5 * Yc ? e3 / 4.5 : Math.pow((e3 + Wc - 1) / Wc, 1 / 0.45);
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          return Yc <= e3 ? Wc * Math.pow(e3, 0.45) - (Wc - 1) : 4.5 * e3;
        });
      }, formats: { color: {} } }), Ar = new t({ id: "p3-linear", name: "Linear P3", white: "D65", toXYZ_M: [[0.4865709486482162, 0.26566769316909306, 0.1982172852343625], [0.2289745640697488, 0.6917385218365064, 0.079286914093745], [0, 0.04511338185890264, 1.043944368900976]], fromXYZ_M: [[2.493496911941425, -0.9313836179191239, -0.40271078445071684], [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577], [0.03584583024378447, -0.07617238926804182, 0.9568845240076872]] }), En = new t({ id: "srgb-linear", name: "Linear sRGB", white: "D65", toXYZ_M: [[0.41239079926595934, 0.357584339383878, 0.1804807884018343], [0.21263900587151027, 0.715168678767756, 0.07219231536073371], [0.01933081871559182, 0.11919477979462598, 0.9505321522496607]], fromXYZ_M: [[3.2409699419045226, -1.537383177570094, -0.4986107602930034], [-0.9692436362808796, 1.8759675015077202, 0.04155505740717559], [0.05563007969699366, -0.20397695888897652, 1.0569715142428786]], formats: { color: {} } }), Kc = { aliceblue: [240 / 255, 248 / 255, 1], antiquewhite: [250 / 255, 235 / 255, 215 / 255], aqua: [0, 1, 1], aquamarine: [127 / 255, 1, 212 / 255], azure: [240 / 255, 1, 1], beige: [245 / 255, 245 / 255, 220 / 255], bisque: [1, 228 / 255, 196 / 255], black: [0, 0, 0], blanchedalmond: [1, 235 / 255, 205 / 255], blue: [0, 0, 1], blueviolet: [138 / 255, 43 / 255, 226 / 255], brown: [165 / 255, 42 / 255, 42 / 255], burlywood: [222 / 255, 184 / 255, 135 / 255], cadetblue: [95 / 255, 158 / 255, 160 / 255], chartreuse: [127 / 255, 1, 0], chocolate: [210 / 255, 105 / 255, 30 / 255], coral: [1, 127 / 255, 80 / 255], cornflowerblue: [100 / 255, 149 / 255, 237 / 255], cornsilk: [1, 248 / 255, 220 / 255], crimson: [220 / 255, 20 / 255, 60 / 255], cyan: [0, 1, 1], darkblue: [0, 0, 139 / 255], darkcyan: [0, 139 / 255, 139 / 255], darkgoldenrod: [184 / 255, 134 / 255, 11 / 255], darkgray: [169 / 255, 169 / 255, 169 / 255], darkgreen: [0, 100 / 255, 0], darkgrey: [169 / 255, 169 / 255, 169 / 255], darkkhaki: [189 / 255, 183 / 255, 107 / 255], darkmagenta: [139 / 255, 0, 139 / 255], darkolivegreen: [85 / 255, 107 / 255, 47 / 255], darkorange: [1, 140 / 255, 0], darkorchid: [0.6, 50 / 255, 0.8], darkred: [139 / 255, 0, 0], darksalmon: [233 / 255, 150 / 255, 122 / 255], darkseagreen: [143 / 255, 188 / 255, 143 / 255], darkslateblue: [72 / 255, 61 / 255, 139 / 255], darkslategray: [47 / 255, 79 / 255, 79 / 255], darkslategrey: [47 / 255, 79 / 255, 79 / 255], darkturquoise: [0, 206 / 255, 209 / 255], darkviolet: [148 / 255, 0, 211 / 255], deeppink: [1, 20 / 255, 147 / 255], deepskyblue: [0, 191 / 255, 1], dimgray: [105 / 255, 105 / 255, 105 / 255], dimgrey: [105 / 255, 105 / 255, 105 / 255], dodgerblue: [30 / 255, 144 / 255, 1], firebrick: [178 / 255, 34 / 255, 34 / 255], floralwhite: [1, 250 / 255, 240 / 255], forestgreen: [34 / 255, 139 / 255, 34 / 255], fuchsia: [1, 0, 1], gainsboro: [220 / 255, 220 / 255, 220 / 255], ghostwhite: [248 / 255, 248 / 255, 1], gold: [1, 215 / 255, 0], goldenrod: [218 / 255, 165 / 255, 32 / 255], gray: [128 / 255, 128 / 255, 128 / 255], green: [0, 128 / 255, 0], greenyellow: [173 / 255, 1, 47 / 255], grey: [128 / 255, 128 / 255, 128 / 255], honeydew: [240 / 255, 1, 240 / 255], hotpink: [1, 105 / 255, 180 / 255], indianred: [205 / 255, 92 / 255, 92 / 255], indigo: [75 / 255, 0, 130 / 255], ivory: [1, 1, 240 / 255], khaki: [240 / 255, 230 / 255, 140 / 255], lavender: [230 / 255, 230 / 255, 250 / 255], lavenderblush: [1, 240 / 255, 245 / 255], lawngreen: [124 / 255, 252 / 255, 0], lemonchiffon: [1, 250 / 255, 205 / 255], lightblue: [173 / 255, 216 / 255, 230 / 255], lightcoral: [240 / 255, 128 / 255, 128 / 255], lightcyan: [224 / 255, 1, 1], lightgoldenrodyellow: [250 / 255, 250 / 255, 210 / 255], lightgray: [211 / 255, 211 / 255, 211 / 255], lightgreen: [144 / 255, 238 / 255, 144 / 255], lightgrey: [211 / 255, 211 / 255, 211 / 255], lightpink: [1, 182 / 255, 193 / 255], lightsalmon: [1, 160 / 255, 122 / 255], lightseagreen: [32 / 255, 178 / 255, 170 / 255], lightskyblue: [135 / 255, 206 / 255, 250 / 255], lightslategray: [119 / 255, 136 / 255, 0.6], lightslategrey: [119 / 255, 136 / 255, 0.6], lightsteelblue: [176 / 255, 196 / 255, 222 / 255], lightyellow: [1, 1, 224 / 255], lime: [0, 1, 0], limegreen: [50 / 255, 205 / 255, 50 / 255], linen: [250 / 255, 240 / 255, 230 / 255], magenta: [1, 0, 1], maroon: [128 / 255, 0, 0], mediumaquamarine: [0.4, 205 / 255, 170 / 255], mediumblue: [0, 0, 205 / 255], mediumorchid: [186 / 255, 85 / 255, 211 / 255], mediumpurple: [147 / 255, 112 / 255, 219 / 255], mediumseagreen: [60 / 255, 179 / 255, 113 / 255], mediumslateblue: [123 / 255, 104 / 255, 238 / 255], mediumspringgreen: [0, 250 / 255, 154 / 255], mediumturquoise: [72 / 255, 209 / 255, 0.8], mediumvioletred: [199 / 255, 21 / 255, 133 / 255], midnightblue: [25 / 255, 25 / 255, 112 / 255], mintcream: [245 / 255, 1, 250 / 255], mistyrose: [1, 228 / 255, 225 / 255], moccasin: [1, 228 / 255, 181 / 255], navajowhite: [1, 222 / 255, 173 / 255], navy: [0, 0, 128 / 255], oldlace: [253 / 255, 245 / 255, 230 / 255], olive: [128 / 255, 128 / 255, 0], olivedrab: [107 / 255, 142 / 255, 35 / 255], orange: [1, 165 / 255, 0], orangered: [1, 69 / 255, 0], orchid: [218 / 255, 112 / 255, 214 / 255], palegoldenrod: [238 / 255, 232 / 255, 170 / 255], palegreen: [152 / 255, 251 / 255, 152 / 255], paleturquoise: [175 / 255, 238 / 255, 238 / 255], palevioletred: [219 / 255, 112 / 255, 147 / 255], papayawhip: [1, 239 / 255, 213 / 255], peachpuff: [1, 218 / 255, 185 / 255], peru: [205 / 255, 133 / 255, 63 / 255], pink: [1, 192 / 255, 203 / 255], plum: [221 / 255, 160 / 255, 221 / 255], powderblue: [176 / 255, 224 / 255, 230 / 255], purple: [128 / 255, 0, 128 / 255], rebeccapurple: [0.4, 0.2, 0.6], red: [1, 0, 0], rosybrown: [188 / 255, 143 / 255, 143 / 255], royalblue: [65 / 255, 105 / 255, 225 / 255], saddlebrown: [139 / 255, 69 / 255, 19 / 255], salmon: [250 / 255, 128 / 255, 114 / 255], sandybrown: [244 / 255, 164 / 255, 96 / 255], seagreen: [46 / 255, 139 / 255, 87 / 255], seashell: [1, 245 / 255, 238 / 255], sienna: [160 / 255, 82 / 255, 45 / 255], silver: [192 / 255, 192 / 255, 192 / 255], skyblue: [135 / 255, 206 / 255, 235 / 255], slateblue: [106 / 255, 90 / 255, 205 / 255], slategray: [112 / 255, 128 / 255, 144 / 255], slategrey: [112 / 255, 128 / 255, 144 / 255], snow: [1, 250 / 255, 250 / 255], springgreen: [0, 1, 127 / 255], steelblue: [70 / 255, 130 / 255, 180 / 255], tan: [210 / 255, 180 / 255, 140 / 255], teal: [0, 128 / 255, 128 / 255], thistle: [216 / 255, 191 / 255, 216 / 255], tomato: [1, 99 / 255, 71 / 255], turquoise: [64 / 255, 224 / 255, 208 / 255], violet: [238 / 255, 130 / 255, 238 / 255], wheat: [245 / 255, 222 / 255, 179 / 255], white: [1, 1, 1], whitesmoke: [245 / 255, 245 / 255, 245 / 255], yellow: [1, 1, 0], yellowgreen: [154 / 255, 205 / 255, 50 / 255] }, yn = Array(3).fill("<percentage> | <number>[0, 255]"), Xc = Array(3).fill("<number>[0, 255]"), yn = new t({ id: "srgb", name: "sRGB", base: En, fromBase: function(e2) {
        return e2.map(function(e3) {
          var t2 = e3 < 0 ? -1 : 1, n2 = e3 * t2;
          return 31308e-7 < n2 ? t2 * (1.055 * Math.pow(n2, 1 / 2.4) - 0.055) : 12.92 * e3;
        });
      }, toBase: function(e2) {
        return e2.map(function(e3) {
          var t2 = e3 < 0 ? -1 : 1, n2 = e3 * t2;
          return n2 < 0.04045 ? e3 / 12.92 : t2 * Math.pow((0.055 + n2) / 1.055, 2.4);
        });
      }, formats: { rgb: { coords: yn }, rgb_number: { name: "rgb", commas: true, coords: Xc, noAlpha: true }, color: {}, rgba: { coords: yn, commas: true, lastAlpha: true }, rgba_number: { name: "rgba", commas: true, coords: Xc }, hex: { type: "custom", toGamut: true, test: function(e2) {
        return /^#([a-f0-9]{3,4}){1,2}$/i.test(e2);
      }, parse: function(e2) {
        e2.length <= 5 && (e2 = e2.replace(/[a-f0-9]/gi, "$&$&"));
        var t2 = [];
        return e2.replace(/[a-f0-9]{2}/gi, function(e3) {
          t2.push(parseInt(e3, 16) / 255);
        }), { spaceId: "srgb", coords: t2.slice(0, 3), alpha: t2.slice(3)[0] };
      }, serialize: function(e2, t2) {
        var n2 = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).collapse, n2 = void 0 === n2 || n2, r2 = (t2 < 1 && e2.push(t2), e2 = e2.map(function(e3) {
          return Math.round(255 * e3);
        }), n2 && e2.every(function(e3) {
          return e3 % 17 == 0;
        }));
        return "#" + e2.map(function(e3) {
          return r2 ? (e3 / 17).toString(16) : e3.toString(16).padStart(2, "0");
        }).join("");
      } }, keyword: { type: "custom", test: function(e2) {
        return /^[a-z]+$/i.test(e2);
      }, parse: function(e2) {
        var t2 = { spaceId: "srgb", coords: null, alpha: 1 };
        if ("transparent" === (e2 = e2.toLowerCase()) ? (t2.coords = Kc.black, t2.alpha = 0) : t2.coords = Kc[e2], t2.coords) return t2;
      } } } }), Xc = new t({ id: "p3", name: "P3", base: Ar, fromBase: yn.fromBase, toBase: yn.toBase, formats: { color: { id: "display-p3" } } });
      if (bc.display_space = yn, "undefined" != typeof CSS && null != (Fe = CSS) && Fe.supports) for (var Zc = 0, Jc = [Sc, Fn, Xc]; Zc < Jc.length; Zc++) {
        var Qc = Jc[Zc], e1 = Qc.getMinCoords(), e1 = Gc({ space: Qc, coords: e1, alpha: 1 });
        if (CSS.supports("color", e1)) {
          bc.display_space = Qc;
          break;
        }
      }
      function t1(e2, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "lab", e2 = (n2 = T.get(n2)).from(e2), r2 = n2.from(t2);
        return Math.sqrt(e2.reduce(function(e3, t3, n3) {
          n3 = r2[n3];
          return isNaN(t3) || isNaN(n3) ? e3 : e3 + Math.pow(n3 - t3, 2);
        }, 0));
      }
      function n1(e2) {
        return Nc(e2, [Fc, "y"]);
      }
      function r1(e2, t2) {
        Rc(e2, [Fc, "y"], t2);
      }
      Fe = Object.freeze({ __proto__: null, getLuminance: n1, setLuminance: r1, register: function(e2) {
        Object.defineProperty(e2.prototype, "luminance", { get: function() {
          return n1(this);
        }, set: function(e3) {
          r1(this, e3);
        } });
      } });
      var a1 = 0.022, o1 = 1.414;
      function i1(e2) {
        return a1 <= e2 ? e2 : e2 + Math.pow(a1 - e2, o1);
      }
      function l1(e2) {
        var t2 = e2 < 0 ? -1 : 1, e2 = Math.abs(e2);
        return t2 * Math.pow(e2, 2.4);
      }
      var u1 = 24389 / 27, s1 = vc.D65, c1 = new T({ id: "lab-d65", name: "Lab D65", coords: { l: { refRange: [0, 100], name: "L" }, a: { refRange: [-125, 125] }, b: { refRange: [-125, 125] } }, white: s1, base: Fc, fromBase: function(e2) {
        e2 = e2.map(function(e3, t2) {
          return e3 / s1[t2];
        }).map(function(e3) {
          return 216 / 24389 < e3 ? Math.cbrt(e3) : (u1 * e3 + 16) / 116;
        });
        return [116 * e2[1] - 16, 500 * (e2[0] - e2[1]), 200 * (e2[1] - e2[2])];
      }, toBase: function(e2) {
        var t2 = [];
        return t2[1] = (e2[0] + 16) / 116, t2[0] = e2[1] / 500 + t2[1], t2[2] = t2[1] - e2[2] / 200, [24 / 116 < t2[0] ? Math.pow(t2[0], 3) : (116 * t2[0] - 16) / u1, 8 < e2[0] ? Math.pow((e2[0] + 16) / 116, 3) : e2[0] / u1, 24 / 116 < t2[2] ? Math.pow(t2[2], 3) : (116 * t2[2] - 16) / u1].map(function(e3, t3) {
          return e3 * s1[t3];
        });
      }, formats: { "lab-d65": { coords: ["<number> | <percentage>", "<number>", "<number>"] } } }), d1 = 0.5 * Math.pow(5, 0.5) + 0.5, p1 = Object.freeze({ __proto__: null, contrastWCAG21: function(e2, t2) {
        e2 = R(e2), t2 = R(t2);
        var n2, e2 = Math.max(n1(e2), 0), t2 = Math.max(n1(t2), 0);
        return e2 < t2 && (e2 = (n2 = [t2, e2])[0], t2 = n2[1]), (e2 + 0.05) / (t2 + 0.05);
      }, contrastAPCA: function(e2, t2) {
        t2 = R(t2), e2 = R(e2);
        var n2 = (t2 = D((t2 = Uc(t2, "srgb")).coords, 3))[0], r2 = t2[1], t2 = t2[2], a2 = 0.2126729 * l1(n2) + 0.7151522 * l1(r2) + 0.072175 * l1(t2), e2 = D((e2 = Uc(e2, "srgb")).coords, 3), e2 = (n2 = e2[0], r2 = e2[1], t2 = e2[2], 0.2126729 * l1(n2) + 0.7151522 * l1(r2) + 0.072175 * l1(t2)), n2 = i1(a2), r2 = i1(e2), t2 = n2 < r2, a2 = Math.abs(r2 - n2) < 5e-4 ? 0 : t2 ? 1.14 * (Math.pow(r2, 0.56) - Math.pow(n2, 0.57)) : 1.14 * (Math.pow(r2, 0.65) - Math.pow(n2, 0.62));
        return 100 * (e2 = Math.abs(a2) < 0.1 ? 0 : 0 < a2 ? a2 - 0.027 : a2 + 0.027);
      }, contrastMichelson: function(e2, t2) {
        e2 = R(e2), t2 = R(t2);
        var e2 = Math.max(n1(e2), 0), t2 = Math.max(n1(t2), 0), n2 = (e2 < t2 && (e2 = (n2 = [t2, e2])[0], t2 = n2[1]), e2 + t2);
        return 0 === n2 ? 0 : (e2 - t2) / n2;
      }, contrastWeber: function(e2, t2) {
        e2 = R(e2), t2 = R(t2);
        var n2, e2 = Math.max(n1(e2), 0), t2 = Math.max(n1(t2), 0);
        return e2 < t2 && (e2 = (n2 = [t2, e2])[0], t2 = n2[1]), 0 === t2 ? 5e4 : (e2 - t2) / t2;
      }, contrastLstar: function(e2, t2) {
        return e2 = R(e2), t2 = R(t2), e2 = Nc(e2, [Sc, "l"]), t2 = Nc(t2, [Sc, "l"]), Math.abs(e2 - t2);
      }, contrastDeltaPhi: function(e2, t2) {
        return e2 = R(e2), t2 = R(t2), e2 = Nc(e2, [c1, "l"]), t2 = Nc(t2, [c1, "l"]), e2 = Math.abs(Math.pow(e2, d1) - Math.pow(t2, d1)), (t2 = Math.pow(e2, 1 / d1) * Math.SQRT2 - 40) < 7.5 ? 0 : t2;
      } });
      function f1(e2) {
        var e2 = D(kc(e2, Fc), 3), t2 = e2[0], n2 = e2[1], e2 = t2 + 15 * n2 + 3 * e2[2];
        return [4 * t2 / e2, 9 * n2 / e2];
      }
      function m1(e2) {
        var e2 = D(kc(e2, Fc), 3), t2 = e2[0], n2 = e2[1], e2 = t2 + n2 + e2[2];
        return [t2 / e2, n2 / e2];
      }
      var h1 = Object.freeze({ __proto__: null, uv: f1, xy: m1, register: function(e2) {
        Object.defineProperty(e2.prototype, "uv", { get: function() {
          return f1(this);
        } }), Object.defineProperty(e2.prototype, "xy", { get: function() {
          return m1(this);
        } });
      } }), g1 = Math.PI / 180, b1 = new T({ id: "xyz-abs-d65", name: "Absolute XYZ D65", coords: { x: { refRange: [0, 9504.7], name: "Xa" }, y: { refRange: [0, 1e4], name: "Ya" }, z: { refRange: [0, 10888.3], name: "Za" } }, base: Fc, fromBase: function(e2) {
        return e2.map(function(e3) {
          return Math.max(203 * e3, 0);
        });
      }, toBase: function(e2) {
        return e2.map(function(e3) {
          return Math.max(e3 / 203, 0);
        });
      } }), v1 = 2610 / Math.pow(2, 14), y1 = Math.pow(2, 14) / 2610, w1 = 3424 / Math.pow(2, 12), D1 = 2413 / Math.pow(2, 7), x1 = 2392 / Math.pow(2, 7), E1 = 1.7 * 2523 / Math.pow(2, 5), F1 = Math.pow(2, 5) / (1.7 * 2523), A1 = 16295499532821565e-27, C1 = [[0.41478972, 0.579999, 0.014648], [-0.20151, 1.120649, 0.0531008], [-0.0166008, 0.2648, 0.6684799]], k1 = [[1.9242264357876067, -1.0047923125953657, 0.037651404030618], [0.35031676209499907, 0.7264811939316552, -0.06538442294808501], [-0.09098281098284752, -0.3127282905230739, 1.5227665613052603]], N1 = [[0.5, 0.5, 0], [3.524, -4.066708, 0.542708], [0.199076, 1.096799, -1.295875]], T1 = [[1, 0.1386050432715393, 0.05804731615611886], [0.9999999999999999, -0.1386050432715393, -0.05804731615611886], [0.9999999999999998, -0.09601924202631895, -0.8118918960560388]], R1 = new T({ id: "jzazbz", name: "Jzazbz", coords: { jz: { refRange: [0, 1], name: "Jz" }, az: { refRange: [-0.5, 0.5] }, bz: { refRange: [-0.5, 0.5] } }, base: b1, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], n2 = o(C1, [1.15 * t2 - (1.15 - 1) * e2, 0.66 * n2 - (0.66 - 1) * t2, e2]).map(function(e3) {
          var t3 = w1 + D1 * Math.pow(e3 / 1e4, v1), e3 = 1 + x1 * Math.pow(e3 / 1e4, v1);
          return Math.pow(t3 / e3, E1);
        }), t2 = D(o(N1, n2), 3), e2 = t2[0], n2 = t2[1], t2 = t2[2];
        return [(1 - 0.56) * e2 / (1 + -0.56 * e2) - A1, n2, t2];
      }, toBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], t2 = o(T1, [(t2 + A1) / (1 - 0.56 - -0.56 * (t2 + A1)), n2, e2]).map(function(e3) {
          var t3 = w1 - Math.pow(e3, F1), e3 = x1 * Math.pow(e3, F1) - D1;
          return 1e4 * Math.pow(t3 / e3, y1);
        }), n2 = D(o(k1, t2), 3), e2 = n2[0], t2 = n2[1], n2 = n2[2], e2 = (e2 + (1.15 - 1) * n2) / 1.15;
        return [e2, (t2 + (0.66 - 1) * e2) / 0.66, n2];
      }, formats: { color: {} } }), O1 = new T({ id: "jzczhz", name: "JzCzHz", coords: { jz: { refRange: [0, 1], name: "Jz" }, cz: { refRange: [0, 1], name: "Chroma" }, hz: { refRange: [0, 360], type: "angle", name: "Hue" } }, base: R1, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], r2 = Math.abs(n2) < 2e-4 && Math.abs(e2) < 2e-4 ? NaN : 180 * Math.atan2(e2, n2) / Math.PI;
        return [t2, Math.sqrt(Math.pow(n2, 2) + Math.pow(e2, 2)), Mc(r2)];
      }, toBase: function(e2) {
        return [e2[0], e2[1] * Math.cos(e2[2] * Math.PI / 180), e2[1] * Math.sin(e2[2] * Math.PI / 180)];
      }, formats: { color: {} } }), _1 = 2610 / 16384, S1 = [[0.3592, 0.6976, -0.0358], [-0.1922, 1.1004, 0.0755], [7e-3, 0.0749, 0.8434]], M1 = [[0.5, 0.5, 0], [6610 / 4096, -13613 / 4096, 7003 / 4096], [17933 / 4096, -17390 / 4096, -543 / 4096]], P1 = [[0.9999888965628402, 0.008605050147287059, 0.11103437159861648], [1.00001110343716, -0.008605050147287059, -0.11103437159861648], [1.0000320633910054, 0.56004913547279, -0.3206339100541203]], I1 = [[2.0701800566956137, -1.326456876103021, 0.20661600684785517], [0.3649882500326575, 0.6804673628522352, -0.04542175307585323], [-0.04959554223893211, -0.04942116118675749, 1.1879959417328034]], B1 = new T({ id: "ictcp", name: "ICTCP", coords: { i: { refRange: [0, 1], name: "I" }, ct: { refRange: [-0.5, 0.5], name: "CT" }, cp: { refRange: [-0.5, 0.5], name: "CP" } }, base: b1, fromBase: function(e2) {
        var e2 = o(S1, e2), t2 = e2;
        return t2 = e2.map(function(e3) {
          var t3 = 0.8359375 + 2413 / 128 * Math.pow(e3 / 1e4, _1), e3 = 1 + 18.6875 * Math.pow(e3 / 1e4, _1);
          return Math.pow(t3 / e3, 2523 / 32);
        }), o(M1, t2);
      }, toBase: function(e2) {
        e2 = o(P1, e2).map(function(e3) {
          var t2 = Math.max(Math.pow(e3, 32 / 2523) - 0.8359375, 0), e3 = 2413 / 128 - 18.6875 * Math.pow(e3, 32 / 2523);
          return 1e4 * Math.pow(t2 / e3, 16384 / 2610);
        });
        return o(I1, e2);
      }, formats: { color: {} } }), j1 = [[0.8190224432164319, 0.3619062562801221, -0.12887378261216414], [0.0329836671980271, 0.9292868468965546, 0.03614466816999844], [0.048177199566046255, 0.26423952494422764, 0.6335478258136937]], L1 = [[1.2268798733741557, -0.5578149965554813, 0.28139105017721583], [-0.04057576262431372, 1.1122868293970594, -0.07171106666151701], [-0.07637294974672142, -0.4214933239627914, 1.5869240244272418]], q1 = [[0.2104542553, 0.793617785, -0.0040720468], [1.9779984951, -2.428592205, 0.4505937099], [0.0259040371, 0.7827717662, -0.808675766]], z1 = [[0.9999999984505198, 0.39633779217376786, 0.2158037580607588], [1.0000000088817609, -0.10556134232365635, -0.06385417477170591], [1.0000000546724108, -0.08948418209496575, -1.2914855378640917]], V1 = new T({ id: "oklab", name: "OKLab", coords: { l: { refRange: [0, 1], name: "L" }, a: { refRange: [-0.4, 0.4] }, b: { refRange: [-0.4, 0.4] } }, white: "D65", base: Fc, fromBase: function(e2) {
        e2 = o(j1, e2).map(function(e3) {
          return Math.cbrt(e3);
        });
        return o(q1, e2);
      }, toBase: function(e2) {
        e2 = o(z1, e2).map(function(e3) {
          return Math.pow(e3, 3);
        });
        return o(L1, e2);
      }, formats: { oklab: { coords: ["<number> | <percentage>", "<number>", "<number>"] } } }), $1 = Object.freeze({ __proto__: null, deltaE76: function(e2, t2) {
        return t1(e2, t2, "lab");
      }, deltaECMC: function(e2, t2) {
        var n2 = void 0 === (n2 = (r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).l) ? 2 : n2, r2 = void 0 === (r2 = r2.c) ? 1 : r2, e2 = D(Sc.from(e2), 3), a2 = e2[0], o2 = e2[1], e2 = e2[2], i2 = (l2 = D(Pc.from(Sc, [a2, o2, e2]), 3))[1], l2 = l2[2], t2 = D(Sc.from(t2), 3), u2 = t2[0], s2 = t2[1], t2 = t2[2], c2 = Pc.from(Sc, [u2, s2, t2])[1], u2 = a2 - u2, c2 = (i2 = i2 < 0 ? 0 : i2) - (c2 = c2 < 0 ? 0 : c2), e2 = e2 - t2, t2 = Math.pow(o2 - s2, 2) + Math.pow(e2, 2) - Math.pow(c2, 2), o2 = 0.511, s2 = (16 <= a2 && (o2 = 0.040975 * a2 / (1 + 0.01765 * a2)), 0.0638 * i2 / (1 + 0.0131 * i2) + 0.638), a2 = (e2 = 164 <= (l2 = Number.isNaN(l2) ? 0 : l2) && l2 <= 345 ? 0.56 + Math.abs(0.2 * Math.cos((l2 + 168) * g1)) : 0.36 + Math.abs(0.4 * Math.cos((l2 + 35) * g1)), Math.pow(i2, 4)), l2 = Math.sqrt(a2 / (a2 + 1900)), i2 = s2 * (l2 * e2 + 1 - l2), a2 = Math.pow(u2 / (n2 * o2), 2), a2 = (a2 += Math.pow(c2 / (r2 * s2), 2)) + t2 / Math.pow(i2, 2);
        return Math.sqrt(a2);
      }, deltaE2000: qc, deltaEJz: function(e2, t2) {
        var n2 = (e2 = D(O1.from(e2), 3))[0], r2 = e2[1], e2 = e2[2], a2 = (t2 = D(O1.from(t2), 3))[0], o2 = t2[1], t2 = t2[2], n2 = n2 - a2, a2 = r2 - o2, e2 = (Number.isNaN(e2) && Number.isNaN(t2) ? t2 = e2 = 0 : Number.isNaN(e2) ? e2 = t2 : Number.isNaN(t2) && (t2 = e2), e2 - t2), t2 = 2 * Math.sqrt(r2 * o2) * Math.sin(e2 / 2 * (Math.PI / 180));
        return Math.sqrt(Math.pow(n2, 2) + Math.pow(a2, 2) + Math.pow(t2, 2));
      }, deltaEITP: function(e2, t2) {
        var n2 = (e2 = D(B1.from(e2), 3))[0], r2 = e2[1], e2 = e2[2], a2 = (t2 = D(B1.from(t2), 3))[0], o2 = t2[1], t2 = t2[2];
        return 720 * Math.sqrt(Math.pow(n2 - a2, 2) + 0.25 * Math.pow(r2 - o2, 2) + Math.pow(e2 - t2, 2));
      }, deltaEOK: function(e2, t2) {
        var n2 = (e2 = D(V1.from(e2), 3))[0], r2 = e2[1], e2 = e2[2], a2 = (t2 = D(V1.from(t2), 3))[0], r2 = r2 - t2[1], e2 = e2 - t2[2];
        return Math.sqrt(Math.pow(n2 - a2, 2) + Math.pow(r2, 2) + Math.pow(e2, 2));
      } });
      function H1(e2, t2) {
        var n2, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r2 = r2 = lc(r2) ? { method: r2 } : r2, a2 = r2.method, o2 = void 0 === a2 ? bc.deltaE : a2, i2 = b(r2, G);
        for (n2 in e2 = R(e2), t2 = R(t2), $1) if ("deltae" + o2.toLowerCase() === n2.toLowerCase()) return $1[n2](e2, t2, i2);
        throw new TypeError("Unknown deltaE method: ".concat(o2));
      }
      var U1 = Object.freeze({ __proto__: null, lighten: function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0.25;
        return Rc(e2, [T.get("oklch", "lch"), "l"], function(e3) {
          return e3 * (1 + t2);
        });
      }, darken: function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0.25;
        return Rc(e2, [T.get("oklch", "lch"), "l"], function(e3) {
          return e3 * (1 - t2);
        });
      } });
      function G1(e2, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0.5, r2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, a2 = [R(e2), R(t2)], a2 = (e2 = a2[0], t2 = a2[1], "object" === uc(n2) && (n2 = (a2 = [0.5, n2])[0], r2 = a2[1]), r2);
        return Y1(e2, t2, { space: a2.space, outputSpace: a2.outputSpace, premultiplied: a2.premultiplied })(n2);
      }
      function W1(e2, t2) {
        var n2, r2, a2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, o2 = (K1(e2) && (a2 = t2, e2 = (o2 = D((n2 = e2).rangeArgs.colors, 2))[0], t2 = o2[1]), a2), i2 = o2.maxDeltaE, l2 = o2.deltaEMethod, a2 = o2.steps, a2 = void 0 === a2 ? 2 : a2, u2 = o2.maxSteps, s2 = void 0 === u2 ? 1e3 : u2, u2 = b(o2, W), o2 = (n2 || (o2 = [R(e2), R(t2)], n2 = Y1(e2 = o2[0], t2 = o2[1], u2)), H1(e2, t2)), u2 = 0 < i2 ? Math.max(a2, Math.ceil(o2 / i2) + 1) : a2, c2 = [];
        if (void 0 !== s2 && (u2 = Math.min(u2, s2)), c2 = 1 === u2 ? [{ p: 0.5, color: n2(0.5) }] : (r2 = 1 / (u2 - 1), Array.from({ length: u2 }, function(e3, t3) {
          t3 *= r2;
          return { p: t3, color: n2(t3) };
        })), 0 < i2) for (var d2 = c2.reduce(function(e3, t3, n3) {
          return 0 === n3 ? 0 : (t3 = H1(t3.color, c2[n3 - 1].color, l2), Math.max(e3, t3));
        }, 0); i2 < d2; ) {
          d2 = 0;
          for (var p2 = 1; p2 < c2.length && c2.length < s2; p2++) {
            var f2 = c2[p2 - 1], m2 = c2[p2], h2 = (m2.p + f2.p) / 2, g2 = n2(h2), d2 = Math.max(d2, H1(g2, f2.color), H1(g2, m2.color));
            c2.splice(p2, 0, { p: h2, color: n2(h2) }), p2++;
          }
        }
        return c2 = c2.map(function(e3) {
          return e3.color;
        });
      }
      function Y1(r2, a2) {
        var o2, i2, e2, t2, n2, l2, u2, s2, c2, d2, p2, f2, m2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
        return K1(r2) ? (e2 = r2, t2 = a2, Y1.apply(void 0, w(e2.rangeArgs.colors).concat([h({}, e2.rangeArgs.options, t2)]))) : (p2 = m2.space, f2 = m2.outputSpace, o2 = m2.progression, i2 = m2.premultiplied, r2 = R(r2), a2 = R(a2), r2 = $c(r2), a2 = $c(a2), e2 = { colors: [r2, a2], options: m2 }, p2 = p2 ? T.get(p2) : T.registry[bc.interpolationSpace] || r2.space, f2 = f2 ? T.get(f2) : p2, r2 = Uc(r2, p2), a2 = Uc(a2, p2), r2 = Hc(r2), a2 = Hc(a2), p2.coords.h && "angle" === p2.coords.h.type && (t2 = m2.hue = m2.hue || "shorter", l2 = [Nc(r2, m2 = [p2, "h"]), Nc(a2, m2)], s2 = [n2 = l2[0], l2 = l2[1]], u2 = "raw" === (u2 = t2) ? s2 : (c2 = (s2 = D(s2.map(Mc), 2))[0], d2 = (s2 = s2[1]) - c2, "increasing" === u2 ? d2 < 0 && (s2 += 360) : "decreasing" === u2 ? 0 < d2 && (c2 += 360) : "longer" === u2 ? -180 < d2 && d2 < 180 && (0 < d2 ? s2 += 360 : c2 += 360) : "shorter" === u2 && (180 < d2 ? c2 += 360 : d2 < -180 && (s2 += 360)), [c2, s2]), n2 = (d2 = D(u2, 2))[0], l2 = d2[1], Rc(r2, m2, n2), Rc(a2, m2, l2)), i2 && (r2.coords = r2.coords.map(function(e3) {
          return e3 * r2.alpha;
        }), a2.coords = a2.coords.map(function(e3) {
          return e3 * a2.alpha;
        })), Object.assign(function(n3) {
          n3 = o2 ? o2(n3) : n3;
          var e3 = r2.coords.map(function(e4, t4) {
            return pc(e4, a2.coords[t4], n3);
          }), t3 = pc(r2.alpha, a2.alpha, n3), e3 = { space: p2, coords: e3, alpha: t3 };
          return i2 && (e3.coords = e3.coords.map(function(e4) {
            return e4 / t3;
          })), e3 = f2 !== p2 ? Uc(e3, f2) : e3;
        }, { rangeArgs: e2 }));
      }
      function K1(e2) {
        return "function" === uc(e2) && !!e2.rangeArgs;
      }
      bc.interpolationSpace = "lab";
      var X1 = Object.freeze({ __proto__: null, mix: G1, steps: W1, range: Y1, isRange: K1, register: function(e2) {
        e2.defineFunction("mix", G1, { returns: "color" }), e2.defineFunction("range", Y1, { returns: "function<color>" }), e2.defineFunction("steps", W1, { returns: "array<color>" });
      } }), Z1 = new T({ id: "hsl", name: "HSL", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, l: { range: [0, 100], name: "Lightness" } }, base: yn, fromBase: function(e2) {
        var t2 = Math.max.apply(Math, w(e2)), n2 = Math.min.apply(Math, w(e2)), e2 = D(e2, 3), r2 = e2[0], a2 = e2[1], o2 = e2[2], i2 = NaN, e2 = 0, l2 = (n2 + t2) / 2, u2 = t2 - n2;
        if (0 != u2) {
          switch (e2 = 0 == l2 || 1 == l2 ? 0 : (t2 - l2) / Math.min(l2, 1 - l2), t2) {
            case r2:
              i2 = (a2 - o2) / u2 + (a2 < o2 ? 6 : 0);
              break;
            case a2:
              i2 = (o2 - r2) / u2 + 2;
              break;
            case o2:
              i2 = (r2 - a2) / u2 + 4;
          }
          i2 *= 60;
        }
        return [i2, 100 * e2, 100 * l2];
      }, toBase: function(e2) {
        var e2 = D(e2, 3), n2 = e2[0], r2 = e2[1], a2 = e2[2];
        function t2(e3) {
          var e3 = (e3 + n2 / 30) % 12, t3 = r2 * Math.min(a2, 1 - a2);
          return a2 - t3 * Math.max(-1, Math.min(e3 - 3, 9 - e3, 1));
        }
        return (n2 %= 360) < 0 && (n2 += 360), r2 /= 100, a2 /= 100, [t2(0), t2(8), t2(4)];
      }, formats: { hsl: { toGamut: true, coords: ["<number> | <angle>", "<percentage>", "<percentage>"] }, hsla: { coords: ["<number> | <angle>", "<percentage>", "<percentage>"], commas: true, lastAlpha: true } } }), J1 = new T({ id: "hsv", name: "HSV", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, s: { range: [0, 100], name: "Saturation" }, v: { range: [0, 100], name: "Value" } }, base: Z1, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], n2 = (e2 /= 100) + (n2 /= 100) * Math.min(e2, 1 - e2);
        return [t2, 0 == n2 ? 0 : 200 * (1 - e2 / n2), 100 * n2];
      }, toBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], n2 = (e2 /= 100) * (1 - (n2 /= 100) / 2);
        return [t2, 0 == n2 || 1 == n2 ? 0 : (e2 - n2) / Math.min(n2, 1 - n2) * 100, 100 * n2];
      }, formats: { color: { toGamut: true } } }), Q1 = new T({ id: "hwb", name: "HWB", coords: { h: { refRange: [0, 360], type: "angle", name: "Hue" }, w: { range: [0, 100], name: "Whiteness" }, b: { range: [0, 100], name: "Blackness" } }, base: J1, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2];
        return [t2, e2 * (100 - n2) / 100, 100 - e2];
      }, toBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], r2 = (n2 /= 100) + (e2 /= 100);
        return 1 <= r2 ? [t2, 0, 100 * (n2 / r2)] : [t2, 100 * (0 == (r2 = 1 - e2) ? 0 : 1 - n2 / r2), 100 * r2];
      }, formats: { hwb: { toGamut: true, coords: ["<number> | <angle>", "<percentage>", "<percentage>"] } } }), ed = new t({ id: "a98rgb-linear", name: "Linear Adobe\xAE 98 RGB compatible", white: "D65", toXYZ_M: [[0.5766690429101305, 0.1855582379065463, 0.1882286462349947], [0.29734497525053605, 0.6273635662554661, 0.07529145849399788], [0.02703136138641234, 0.07068885253582723, 0.9913375368376388]], fromXYZ_M: [[2.0415879038107465, -0.5650069742788596, -0.34473135077832956], [-0.9692436362808795, 1.8759675015077202, 0.04155505740717557], [0.013444280632031142, -0.11836239223101838, 1.0151749943912054]] }), td = new t({ id: "a98rgb", name: "Adobe\xAE 98 RGB compatible", base: ed, toBase: function(e2) {
        return e2.map(function(e3) {
          return Math.pow(Math.abs(e3), 563 / 256) * Math.sign(e3);
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          return Math.pow(Math.abs(e3), 256 / 563) * Math.sign(e3);
        });
      }, formats: { color: { id: "a98-rgb" } } }), nd = new t({ id: "prophoto-linear", name: "Linear ProPhoto", white: "D50", base: An, toXYZ_M: [[0.7977604896723027, 0.13518583717574031, 0.0313493495815248], [0.2880711282292934, 0.7118432178101014, 8565396060525902e-20], [0, 0, 0.8251046025104601]], fromXYZ_M: [[1.3457989731028281, -0.25558010007997534, -0.05110628506753401], [-0.5446224939028347, 1.5082327413132781, 0.02053603239147973], [0, 0, 1.2119675456389454]] }), rd = new t({ id: "prophoto", name: "ProPhoto", base: nd, toBase: function(e2) {
        return e2.map(function(e3) {
          return e3 < 0.03125 ? e3 / 16 : Math.pow(e3, 1.8);
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          return 1 / 512 <= e3 ? Math.pow(e3, 1 / 1.8) : 16 * e3;
        });
      }, formats: { color: { id: "prophoto-rgb" } } }), ad = new T({ id: "oklch", name: "OKLCh", coords: { l: { refRange: [0, 1], name: "Lightness" }, c: { refRange: [0, 0.4], name: "Chroma" }, h: { refRange: [0, 360], type: "angle", name: "Hue" } }, white: "D65", base: V1, fromBase: function(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], r2 = Math.abs(n2) < 2e-4 && Math.abs(e2) < 2e-4 ? NaN : 180 * Math.atan2(e2, n2) / Math.PI;
        return [t2, Math.sqrt(Math.pow(n2, 2) + Math.pow(e2, 2)), Mc(r2)];
      }, toBase: function(e2) {
        var t2, e2 = D(e2, 3), n2 = e2[0], r2 = e2[1], e2 = e2[2], r2 = isNaN(e2) ? t2 = 0 : (t2 = r2 * Math.cos(e2 * Math.PI / 180), r2 * Math.sin(e2 * Math.PI / 180));
        return [n2, t2, r2];
      }, formats: { oklch: { coords: ["<number> | <percentage>", "<number>", "<number> | <angle>"] } } }), od = 2610 / Math.pow(2, 14), id = Math.pow(2, 14) / 2610, ld = 2523 / Math.pow(2, 5), ud = Math.pow(2, 5) / 2523, sd = 3424 / Math.pow(2, 12), cd = 2413 / Math.pow(2, 7), dd = 2392 / Math.pow(2, 7), pd = new t({ id: "rec2100pq", name: "REC.2100-PQ", base: uu, toBase: function(e2) {
        return e2.map(function(e3) {
          return 1e4 * Math.pow(Math.max(Math.pow(e3, ud) - sd, 0) / (cd - dd * Math.pow(e3, ud)), id) / 203;
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          var e3 = Math.max(203 * e3 / 1e4, 0), t2 = sd + cd * Math.pow(e3, od), e3 = 1 + dd * Math.pow(e3, od);
          return Math.pow(t2 / e3, ld);
        });
      }, formats: { color: { id: "rec2100-pq" } } }), fd = 0.17883277, md = 0.28466892, hd = 0.55991073, gd = 3.7743, bd = new t({ id: "rec2100hlg", cssid: "rec2100-hlg", name: "REC.2100-HLG", referred: "scene", base: uu, toBase: function(e2) {
        return e2.map(function(e3) {
          return e3 <= 0.5 ? Math.pow(e3, 2) / 3 * gd : Math.exp((e3 - hd) / fd + md) / 12 * gd;
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          return (e3 /= gd) <= 1 / 12 ? Math.sqrt(3 * e3) : fd * Math.log(12 * e3 - md) + hd;
        });
      }, formats: { color: { id: "rec2100-hlg" } } }), vd = {};
      function yd(e2) {
        var t2 = e2.id;
        e2.toCone_M, e2.fromCone_M;
        vd[t2] = e2;
      }
      function wd(e2, t2, n2) {
        var n2 = vd[2 < arguments.length && void 0 !== n2 ? n2 : "Bradford"], e2 = D(o(n2.toCone_M, e2), 3), r2 = e2[0], a2 = e2[1], e2 = e2[2], t2 = D(o(n2.toCone_M, t2), 3), r2 = o([[t2[0] / r2, 0, 0], [0, t2[1] / a2, 0], [0, 0, t2[2] / e2]], n2.toCone_M);
        return o(n2.fromCone_M, r2);
      }
      gc.add("chromatic-adaptation-start", function(e2) {
        e2.options.method && (e2.M = wd(e2.W1, e2.W2, e2.options.method));
      }), gc.add("chromatic-adaptation-end", function(e2) {
        e2.M || (e2.M = wd(e2.W1, e2.W2, e2.options.method));
      }), yd({ id: "von Kries", toCone_M: [[0.40024, 0.7076, -0.08081], [-0.2263, 1.16532, 0.0457], [0, 0, 0.91822]], fromCone_M: [[1.8599364, -1.1293816, 0.2198974], [0.3611914, 0.6388125, -64e-7], [0, 0, 1.0890636]] }), yd({ id: "Bradford", toCone_M: [[0.8951, 0.2664, -0.1614], [-0.7502, 1.7135, 0.0367], [0.0389, -0.0685, 1.0296]], fromCone_M: [[0.9869929, -0.1470543, 0.1599627], [0.4323053, 0.5183603, 0.0492912], [-85287e-7, 0.0400428, 0.9684867]] }), yd({ id: "CAT02", toCone_M: [[0.7328, 0.4296, -0.1624], [-0.7036, 1.6975, 61e-4], [3e-3, 0.0136, 0.9834]], fromCone_M: [[1.0961238, -0.278869, 0.1827452], [0.454369, 0.4735332, 0.0720978], [-96276e-7, -5698e-6, 1.0153256]] }), yd({ id: "CAT16", toCone_M: [[0.401288, 0.650173, -0.051461], [-0.250268, 1.204414, 0.045854], [-2079e-6, 0.048952, 0.953127]], fromCone_M: [[1.862067855087233, -1.011254630531685, 0.1491867754444518], [0.3875265432361372, 0.6214474419314753, -0.008973985167612518], [-0.01584149884933386, -0.03412293802851557, 1.04996443687785]] }), Object.assign(vc, { A: [1.0985, 1, 0.35585], C: [0.98074, 1, 1.18232], D55: [0.95682, 1, 0.92149], D75: [0.94972, 1, 1.22638], E: [1, 1, 1], F2: [0.99186, 1, 0.67393], F7: [0.95041, 1, 1.08747], F11: [1.00962, 1, 0.6435] }), vc.ACES = [0.32168 / 0.33767, 1, 0.34065 / 0.33767];
      var Dd = new t({ id: "acescg", name: "ACEScg", coords: { r: { range: [0, 65504], name: "Red" }, g: { range: [0, 65504], name: "Green" }, b: { range: [0, 65504], name: "Blue" } }, referred: "scene", white: vc.ACES, toXYZ_M: [[0.6624541811085053, 0.13400420645643313, 0.1561876870049078], [0.27222871678091454, 0.6740817658111484, 0.05368951740793705], [-0.005574649490394108, 0.004060733528982826, 1.0103391003129971]], fromXYZ_M: [[1.6410233796943257, -0.32480329418479, -0.23642469523761225], [-0.6636628587229829, 1.6153315916573379, 0.016756347685530137], [0.011721894328375376, -0.008284441996237409, 0.9883948585390215]], formats: { color: {} } }), xd = Math.pow(2, -16), Ed = -0.35828683, Fd = (Math.log2(65504) + 9.72) / 17.52, t = new t({ id: "acescc", name: "ACEScc", coords: { r: { range: [Ed, Fd], name: "Red" }, g: { range: [Ed, Fd], name: "Green" }, b: { range: [Ed, Fd], name: "Blue" } }, referred: "scene", base: Dd, toBase: function(e2) {
        return e2.map(function(e3) {
          return e3 <= (9.72 - 15) / 17.52 ? 2 * (Math.pow(2, 17.52 * e3 - 9.72) - xd) : e3 < Fd ? Math.pow(2, 17.52 * e3 - 9.72) : 65504;
        });
      }, fromBase: function(e2) {
        return e2.map(function(e3) {
          return e3 <= 0 ? (Math.log2(xd) + 9.72) / 17.52 : e3 < xd ? (Math.log2(xd + 0.5 * e3) + 9.72) / 17.52 : (Math.log2(e3) + 9.72) / 17.52;
        });
      }, formats: { color: {} } }), Ad = Object.freeze({ __proto__: null, XYZ_D65: Fc, XYZ_D50: An, XYZ_ABS_D65: b1, Lab_D65: c1, Lab: Sc, LCH: Pc, sRGB_Linear: En, sRGB: yn, HSL: Z1, HWB: Q1, HSV: J1, P3_Linear: Ar, P3: Xc, A98RGB_Linear: ed, A98RGB: td, ProPhoto_Linear: nd, ProPhoto: rd, REC_2020_Linear: uu, REC_2020: Fn, OKLab: V1, OKLCH: ad, Jzazbz: R1, JzCzHz: O1, ICTCP: B1, REC_2100_PQ: pd, REC_2100_HLG: bd, ACEScg: Dd, ACEScc: t }), Cd = (Ae = /* @__PURE__ */ new WeakMap(), ve(kd, [{ key: "space", get: function() {
        return ce(Ae, this);
      } }, { key: "spaceId", get: function() {
        return ce(Ae, this).id;
      } }, { key: "clone", value: function() {
        return new kd(this.space, this.coords, this.alpha);
      } }, { key: "toJSON", value: function() {
        return { spaceId: this.spaceId, coords: this.coords, alpha: this.alpha };
      } }, { key: "display", value: function() {
        for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
        var r2 = function(e3) {
          var t3, n3 = void 0 === (n3 = (r3 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).space) ? bc.display_space : n3, r3 = b(r3, H), a2 = Gc(e3, r3);
          return "undefined" == typeof CSS || null != (t3 = CSS) && t3.supports("color", a2) || !bc.display_space ? (a2 = new String(a2)).color = e3 : (t3 = Uc(e3, n3), (a2 = new String(Gc(t3, r3))).color = t3), a2;
        }.apply(void 0, [this].concat(t2));
        return r2.color = new kd(r2.color), r2;
      } }], [{ key: "get", value: function(e2) {
        if (e2 instanceof kd) return e2;
        for (var t2 = arguments.length, n2 = new Array(1 < t2 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++) n2[r2 - 1] = arguments[r2];
        return function(e3, t3, n3) {
          var r3;
          return re() ? Reflect.construct.apply(null, arguments) : ((r3 = [null]).push.apply(r3, t3), t3 = new (e3.bind.apply(e3, r3))(), n3 && ie(t3, n3.prototype), t3);
        }(kd, [e2].concat(n2));
      } }, { key: "defineFunction", value: function(e2, n2) {
        function r2() {
          var t3, e3 = n2.apply(void 0, arguments);
          return "color" === o2 ? e3 = kd.get(e3) : "function<color>" === o2 ? (t3 = e3, e3 = function() {
            var e4 = t3.apply(void 0, arguments);
            return kd.get(e4);
          }, Object.assign(e3, t3)) : "array<color>" === o2 && (e3 = e3.map(function(e4) {
            return kd.get(e4);
          })), e3;
        }
        var t2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : n2, a2 = t2.instance, a2 = void 0 === a2 || a2, o2 = t2.returns;
        e2 in kd || (kd[e2] = r2), a2 && (kd.prototype[e2] = function() {
          for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++) t3[n3] = arguments[n3];
          return r2.apply(void 0, [this].concat(t3));
        });
      } }, { key: "defineFunctions", value: function(e2) {
        for (var t2 in e2) kd.defineFunction(t2, e2[t2], e2[t2]);
      } }, { key: "extend", value: function(e2) {
        if (e2.register) e2.register(kd);
        else for (var t2 in e2) kd.defineFunction(t2, e2[t2]);
      } }]));
      function kd() {
        var n2 = this;
        ge(this, kd), le(this, Ae, void 0);
        for (var e2, t2, r2, a2 = arguments.length, o2 = new Array(a2), i2 = 0; i2 < a2; i2++) o2[i2] = arguments[i2];
        r2 = (r2 = 1 === o2.length ? R(o2[0]) : r2) ? (e2 = r2.space || r2.spaceId, t2 = r2.coords, r2.alpha) : (e2 = o2[0], t2 = o2[1], o2[2]), de(Ae, this, T.get(e2)), this.coords = t2 ? t2.slice() : [0, 0, 0], this.alpha = r2 < 1 ? r2 : 1;
        for (var l2 = 0; l2 < this.coords.length; l2++) "NaN" === this.coords[l2] && (this.coords[l2] = NaN);
        for (var u2 in ce(Ae, this).coords) !function(t3) {
          Object.defineProperty(n2, t3, { get: function() {
            return n2.get(t3);
          }, set: function(e3) {
            return n2.set(t3, e3);
          } });
        }(u2);
      }
      Cd.defineFunctions({ get: Nc, getAll: kc, set: Rc, setAll: Tc, to: Uc, equals: function(e2, n2) {
        return e2 = R(e2), n2 = R(n2), e2.space === n2.space && e2.alpha === n2.alpha && e2.coords.every(function(e3, t2) {
          return e3 === n2.coords[t2];
        });
      }, inGamut: Vc, toGamut: Hc, distance: t1, toString: Gc }), Object.assign(Cd, { util: $r, hooks: gc, WHITES: vc, Space: T, spaces: T.registry, parse: Cc, defaults: bc });
      for (var Nd, Td = 0, Rd = Object.keys(Ad); Td < Rd.length; Td++) {
        var Od = Rd[Td];
        T.register(Ad[Od]);
      }
      for (Nd in T.registry) _d(Nd, T.registry[Nd]);
      function _d(i2, l2) {
        Object.keys(l2.coords), Object.values(l2.coords).map(function(e3) {
          return e3.name;
        });
        var e2 = i2.replace(/-/g, "_");
        Object.defineProperty(Cd.prototype, e2, { get: function() {
          var o2 = this, e3 = this.getAll(i2);
          return "undefined" == typeof Proxy ? e3 : new Proxy(e3, { has: function(e4, t2) {
            try {
              return T.resolveCoord([l2, t2]), true;
            } catch (e5) {
            }
            return Reflect.has(e4, t2);
          }, get: function(e4, t2, n2) {
            if (t2 && "symbol" !== te(t2) && !(t2 in e4)) {
              var r2 = T.resolveCoord([l2, t2]).index;
              if (0 <= r2) return e4[r2];
            }
            return Reflect.get(e4, t2, n2);
          }, set: function(e4, t2, n2, r2) {
            if (t2 && "symbol" !== te(t2) && !(t2 in e4) || 0 <= t2) {
              var a2 = T.resolveCoord([l2, t2]).index;
              if (0 <= a2) return e4[a2] = n2, o2.setAll(i2, e4), true;
            }
            return Reflect.set(e4, t2, n2, r2);
          } });
        }, set: function(e3) {
          this.setAll(i2, e3);
        }, configurable: true, enumerable: true });
      }
      gc.add("colorspace-init-end", function(t2) {
        var e2;
        _d(t2.id, t2), null != (e2 = t2.aliases) && e2.forEach(function(e3) {
          _d(e3, t2);
        });
      }), Cd.extend($1), Cd.extend({ deltaE: H1 }), Cd.extend(U1), Cd.extend({ contrast: function(e2, t2) {
        var n2, r2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, a2 = (r2 = r2 = lc(r2) ? { algorithm: r2 } : r2).algorithm, o2 = b(r2, U);
        if (!a2) throw r2 = Object.keys(p1).map(function(e3) {
          return e3.replace(/^contrast/, "");
        }).join(", "), new TypeError("contrast() function needs a contrast algorithm. Please specify one of: ".concat(r2));
        for (n2 in e2 = R(e2), t2 = R(t2), p1) if ("contrast" + a2.toLowerCase() === n2.toLowerCase()) return p1[n2](e2, t2, o2);
        throw new TypeError("Unknown contrast algorithm: ".concat(a2));
      } }), Cd.extend(h1), Cd.extend(Fe), Cd.extend(X1), Cd.extend(p1);
      var Sd = Pe(Aa()), Md = (oc.default.templateSettings.strip = false, /^#[0-9a-f]{3,8}$/i), Pd = /hsl\(\s*([-\d.]+)(rad|turn)/, Id = (Ce = /* @__PURE__ */ new WeakMap(), ke = /* @__PURE__ */ new WeakMap(), Ne = /* @__PURE__ */ new WeakMap(), Te = /* @__PURE__ */ new WeakMap(), Re = /* @__PURE__ */ new WeakMap(), Oe = /* @__PURE__ */ new WeakMap(), _e = /* @__PURE__ */ new WeakSet(), ve(Bd, [{ key: "r", get: function() {
        return ce(Ce, this);
      }, set: function(e2) {
        de(Ce, this, e2), de(Te, this, Math.round(255 * Ld(e2, 0, 1)));
      } }, { key: "g", get: function() {
        return ce(ke, this);
      }, set: function(e2) {
        de(ke, this, e2), de(Re, this, Math.round(255 * Ld(e2, 0, 1)));
      } }, { key: "b", get: function() {
        return ce(Ne, this);
      }, set: function(e2) {
        de(Ne, this, e2), de(Oe, this, Math.round(255 * Ld(e2, 0, 1)));
      } }, { key: "red", get: function() {
        return ce(Te, this);
      }, set: function(e2) {
        de(Ce, this, e2 / 255), de(Te, this, Ld(e2, 0, 255));
      } }, { key: "green", get: function() {
        return ce(Re, this);
      }, set: function(e2) {
        de(ke, this, e2 / 255), de(Re, this, Ld(e2, 0, 255));
      } }, { key: "blue", get: function() {
        return ce(Oe, this);
      }, set: function(e2) {
        de(Ne, this, e2 / 255), de(Oe, this, Ld(e2, 0, 255));
      } }, { key: "toHexString", value: function() {
        var e2 = Math.round(this.red).toString(16), t2 = Math.round(this.green).toString(16), n2 = Math.round(this.blue).toString(16);
        return "#" + (15.5 < this.red ? e2 : "0" + e2) + (15.5 < this.green ? t2 : "0" + t2) + (15.5 < this.blue ? n2 : "0" + n2);
      } }, { key: "toJSON", value: function() {
        return { red: this.red, green: this.green, blue: this.blue, alpha: this.alpha };
      } }, { key: "parseString", value: function(t2) {
        t2 = t2.replace(Pd, function(e3, t3, n3) {
          var r2 = t3 + n3;
          switch (n3) {
            case "rad":
              return e3.replace(r2, 180 * t3 / Math.PI);
            case "turn":
              return e3.replace(r2, 360 * t3);
          }
        });
        try {
          "Prototype" in window2 && "Version" in window2.Prototype && (e2 = Array.from, Array.from = Sd.default);
          var e2, n2 = new Cd(t2).to("srgb");
          e2 && (Array.from = e2, e2 = null), this.r = n2.r, this.g = n2.g, this.b = n2.b, this.alpha = +n2.alpha;
        } catch (e3) {
          throw new Error('Unable to parse color "'.concat(t2, '"'));
        }
        return this;
      } }, { key: "parseRgbString", value: function(e2) {
        this.parseString(e2);
      } }, { key: "parseHexString", value: function(e2) {
        e2.match(Md) && ![6, 8].includes(e2.length) && this.parseString(e2);
      } }, { key: "parseColorFnString", value: function(e2) {
        this.parseString(e2);
      } }, { key: "getRelativeLuminance", value: function() {
        var e2 = this.r, t2 = this.g, n2 = this.b;
        return 0.2126 * (e2 <= 0.03928 ? e2 / 12.92 : Math.pow((e2 + 0.055) / 1.055, 2.4)) + 0.7152 * (t2 <= 0.03928 ? t2 / 12.92 : Math.pow((t2 + 0.055) / 1.055, 2.4)) + 0.0722 * (n2 <= 0.03928 ? n2 / 12.92 : Math.pow((n2 + 0.055) / 1.055, 2.4));
      } }, { key: "getLuminosity", value: function() {
        return 0.3 * this.r + 0.59 * this.g + 0.11 * this.b;
      } }, { key: "setLuminosity", value: function(e2) {
        e2 -= this.getLuminosity();
        return pe(_e, this, jd).call(this, e2).clip();
      } }, { key: "getSaturation", value: function() {
        return Math.max(this.r, this.g, this.b) - Math.min(this.r, this.g, this.b);
      } }, { key: "setSaturation", value: function(e2) {
        var t2 = new Bd(this), n2 = D([{ name: "r", value: t2.r }, { name: "g", value: t2.g }, { name: "b", value: t2.b }].sort(function(e3, t3) {
          return e3.value - t3.value;
        }), 3), r2 = n2[0], a2 = n2[1], n2 = n2[2];
        return n2.value > r2.value ? (a2.value = (a2.value - r2.value) * e2 / (n2.value - r2.value), n2.value = e2) : a2.value = n2.value = 0, r2.value = 0, t2[n2.name] = n2.value, t2[r2.name] = r2.value, t2[a2.name] = a2.value, t2;
      } }, { key: "clip", value: function() {
        var e2 = new Bd(this), t2 = e2.getLuminosity(), n2 = Math.min(e2.r, e2.g, e2.b), r2 = Math.max(e2.r, e2.g, e2.b);
        return n2 < 0 && (e2.r = t2 + (e2.r - t2) * t2 / (t2 - n2), e2.g = t2 + (e2.g - t2) * t2 / (t2 - n2), e2.b = t2 + (e2.b - t2) * t2 / (t2 - n2)), 1 < r2 && (e2.r = t2 + (e2.r - t2) * (1 - t2) / (r2 - t2), e2.g = t2 + (e2.g - t2) * (1 - t2) / (r2 - t2), e2.b = t2 + (e2.b - t2) * (1 - t2) / (r2 - t2)), e2;
      } }]));
      function Bd(e2, t2, n2) {
        var r2, a2, o2, i2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 1;
        ge(this, Bd), ue(this, _e), le(this, Ce, void 0), le(this, ke, void 0), le(this, Ne, void 0), le(this, Te, void 0), le(this, Re, void 0), le(this, Oe, void 0), e2 instanceof Bd ? (r2 = e2.r, a2 = e2.g, o2 = e2.b, this.r = r2, this.g = a2, this.b = o2, this.alpha = e2.alpha) : (this.red = e2, this.green = t2, this.blue = n2, this.alpha = i2);
      }
      function jd(e2) {
        var t2 = new Id(this);
        return t2.r += e2, t2.g += e2, t2.b += e2, t2;
      }
      var O = Id;
      function Ld(e2, t2, n2) {
        return Math.min(Math.max(t2, e2), n2);
      }
      var qd = function(e2) {
        var t2 = new O();
        return t2.parseString(e2.getPropertyValue("background-color")), 0 !== t2.alpha && (e2 = e2.getPropertyValue("opacity"), t2.alpha = t2.alpha * e2), t2;
      }, zd = function(e2) {
        var t2 = window2.getComputedStyle(e2);
        return rc(e2, t2) || 1 === qd(t2).alpha;
      };
      function Vd(e2) {
        var t2;
        return !(!e2.href || (t2 = v.get("firstPageLink", $d)) && e2.compareDocumentPosition(t2.actualNode) !== e2.DOCUMENT_POSITION_FOLLOWING);
      }
      function $d() {
        var e2 = window2.location.origin ? yf(axe._tree, 'a[href]:not([href^="javascript:"])').find(function(e3) {
          return !Hl(e3.actualNode);
        }) : yf(axe._tree, 'a:not([href^="#"]):not([href^="/#"]):not([href^="javascript:"])')[0];
        return e2 || null;
      }
      var Hd = /rect\s*\(([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px,?\s*([0-9]+)px\s*\)/, Ud = /(\w+)\((\d+)/;
      function Gd(e2, t2, n2) {
        if (!e2) throw new TypeError("Cannot determine if element is visible for non-DOM nodes");
        var r2, a2, o2, i2 = e2 instanceof p ? e2 : g(e2), l2 = (e2 = i2 ? i2.actualNode : e2, "_isVisible" + (t2 ? "ScreenReader" : "")), u2 = null != (u2 = window2.Node) ? u2 : {}, s2 = u2.DOCUMENT_NODE, u2 = u2.DOCUMENT_FRAGMENT_NODE, c2 = (i2 ? i2.props : e2).nodeType, d2 = i2 ? i2.props.nodeName : e2.nodeName.toLowerCase();
        if (i2 && void 0 !== i2[l2]) return i2[l2];
        if (c2 === s2) return true;
        if (["style", "script", "noscript", "template"].includes(d2)) return false;
        if ((e2 && c2 === u2 && (e2 = e2.host), t2) && "true" === (i2 ? i2.attr("aria-hidden") : e2.getAttribute("aria-hidden"))) return false;
        return e2 ? null !== (s2 = window2.getComputedStyle(e2, null)) && ("area" === d2 ? (r2 = t2, a2 = n2, !!(u2 = Pi(c2 = e2, "map")) && !!(u2 = u2.getAttribute("name")) && !(!(c2 = y(c2)) || 9 !== c2.nodeType || !(o2 = yf(axe._tree, 'img[usemap="#'.concat(m(u2), '"]'))) || !o2.length) && o2.some(function(e3) {
          return Gd(e3.actualNode, r2, a2);
        })) : "none" !== s2.getPropertyValue("display") && (d2 = parseInt(s2.getPropertyValue("height")), c2 = parseInt(s2.getPropertyValue("width")), o2 = (u2 = Mp(e2)) && 0 === d2, u2 = u2 && 0 === c2, d2 = "absolute" === s2.getPropertyValue("position") && (d2 < 2 || c2 < 2) && "hidden" === s2.getPropertyValue("overflow"), !(!t2 && (function(e3) {
          var t3 = e3.getPropertyValue("clip").match(Hd), n3 = e3.getPropertyValue("clip-path").match(Ud);
          if (t3 && 5 === t3.length) {
            e3 = e3.getPropertyValue("position");
            if (["fixed", "absolute"].includes(e3)) return t3[3] - t3[1] <= 0 && t3[2] - t3[4] <= 0;
          }
          if (n3) {
            var e3 = n3[1], r3 = parseInt(n3[2], 10);
            switch (e3) {
              case "inset":
                return 50 <= r3;
              case "circle":
                return 0 === r3;
            }
          }
        }(s2) || "0" === s2.getPropertyValue("opacity") || o2 || u2 || d2) || !n2 && ("hidden" === s2.getPropertyValue("visibility") || !t2 && ol(e2)))) && (c2 = false, (u2 = e2.assignedSlot || e2.parentNode) && (c2 = Gd(u2, t2, true)), i2 && (i2[l2] = c2), c2)) : (d2 = true, (n2 = i2.parent) && (d2 = Gd(n2, t2, true)), i2 && (i2[l2] = d2), d2);
      }
      var Wd = Gd, Yd = function(e2, t2) {
        for (var n2 = ["fixed", "sticky"], r2 = [], a2 = false, o2 = 0; o2 < e2.length; ++o2) {
          var i2 = e2[o2], l2 = (i2 === t2 && (a2 = true), window2.getComputedStyle(i2));
          a2 || -1 === n2.indexOf(l2.position) ? r2.push(i2) : r2 = [];
        }
        return r2;
      };
      function Kd(e2, t2) {
        var n2 = Xd(t2);
        do {
          var r2, a2, o2, i2, l2, u2, s2 = Xd(e2);
          if (s2 === n2 || s2 === t2) return i2 = e2, r2 = t2, a2 = window2.getComputedStyle(r2), o2 = a2.getPropertyValue("overflow"), "inline" === a2.getPropertyValue("display") || (i2 = Array.from(i2.getClientRects()), l2 = r2.getBoundingClientRect(), u2 = { left: l2.left, top: l2.top, width: l2.width, height: l2.height }, (["scroll", "auto"].includes(o2) || r2 instanceof window2.HTMLHtmlElement) && (u2.width = r2.scrollWidth, u2.height = r2.scrollHeight), 1 === i2.length && "hidden" === o2 && "nowrap" === a2.getPropertyValue("white-space") && (i2[0] = u2), i2.some(function(e3) {
            return !(Math.ceil(e3.left) < Math.floor(u2.left) || Math.ceil(e3.top) < Math.floor(u2.top) || Math.floor(e3.left + e3.width) > Math.ceil(u2.left + u2.width) || Math.floor(e3.top + e3.height) > Math.ceil(u2.top + u2.height));
          }));
        } while (e2 = s2);
        return false;
      }
      function Xd(e2) {
        for (var t2 = g(e2).parent; t2; ) {
          if (Mp(t2.actualNode)) return t2.actualNode;
          t2 = t2.parent;
        }
      }
      var Zd = function r2(a2, o2) {
        var t2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : document, i2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 0;
        if (999 < i2) throw new Error("Infinite loop detected");
        return Array.from(t2.elementsFromPoint(a2, o2) || []).filter(function(e2) {
          return y(e2) === t2;
        }).reduce(function(e2, t3) {
          var n2;
          return Ri(t3) && (n2 = r2(a2, o2, t3.shadowRoot, i2 + 1), !(e2 = e2.concat(n2)).length || !Kd(e2[0], t3)) || e2.push(t3), e2;
        }, []);
      }, Jd = function(e2, t2) {
        var n2, r2;
        if (e2.hasAttribute(t2)) return r2 = e2.nodeName.toUpperCase(), n2 = e2, ["A", "AREA"].includes(r2) && !e2.ownerSVGElement || ((n2 = document.createElement("a")).href = e2.getAttribute(t2)), r2 = ["https:", "ftps:"].includes(n2.protocol) ? n2.protocol.replace(/s:$/, ":") : n2.protocol, e2 = /^\//.test(n2.pathname) ? n2.pathname : "/".concat(n2.pathname), t2 = (e2 = (e2 = (t2 = e2).split("/").pop()) && -1 !== e2.indexOf(".") ? { pathname: t2.replace(e2, ""), filename: /index./.test(e2) ? "" : e2 } : { pathname: t2, filename: "" }).pathname, e2 = e2.filename, { protocol: r2, hostname: n2.hostname, port: (r2 = n2.port, ["443", "80"].includes(r2) ? "" : r2), pathname: /\/$/.test(t2) ? t2 : "".concat(t2, "/"), search: function(e3) {
          var t3 = {};
          if (e3 && e3.length) {
            var n3 = e3.substring(1).split("&");
            if (n3 && n3.length) for (var r3 = 0; r3 < n3.length; r3++) {
              var a2 = D(n3[r3].split("="), 2), o2 = a2[0], a2 = a2[1], a2 = void 0 === a2 ? "" : a2;
              t3[decodeURIComponent(o2)] = decodeURIComponent(a2);
            }
          }
          return t3;
        }(n2.search), hash: (r2 = n2.hash) && (t2 = r2.match(/#!?\/?/g)) && "#" !== D(t2, 1)[0] ? r2 : "", filename: e2 };
      }, Qd = function(e2, t2) {
        var n2 = t2.getBoundingClientRect(), r2 = n2.top, a2 = n2.left, o2 = r2 - t2.scrollTop, r2 = r2 - t2.scrollTop + t2.scrollHeight, i2 = a2 - t2.scrollLeft, a2 = a2 - t2.scrollLeft + t2.scrollWidth;
        return !(e2.left > a2 && e2.left > n2.right || e2.top > r2 && e2.top > n2.bottom || e2.right < i2 && e2.right < n2.left || e2.bottom < o2 && e2.bottom < n2.top) && (a2 = window2.getComputedStyle(t2), !(e2.left > n2.right || e2.top > n2.bottom) || "scroll" === a2.overflow || "auto" === a2.overflow || t2 instanceof window2.HTMLBodyElement || t2 instanceof window2.HTMLHtmlElement);
      }, ep = 0;
      function tp(e2, t2, n2) {
        var r2;
        return ge(this, tp), (r2 = ne(this, tp)).shadowId = n2, r2.children = [], r2.actualNode = e2, (r2.parent = t2) || (ep = 0), r2.nodeIndex = ep++, r2._isHidden = null, r2._cache = {}, r2._isXHTML = Za(e2.ownerDocument), "input" === e2.nodeName.toLowerCase() && (n2 = e2.getAttribute("type"), n2 = r2._isXHTML ? n2 : (n2 || "").toLowerCase(), Nf().includes(n2) || (n2 = "text"), r2._type = n2), v.get("nodeMap") && v.get("nodeMap").set(e2, r2), r2;
      }
      oe(tp, p);
      var np, rp = ve(tp, [{ key: "props", get: function() {
        var e2, t2, n2, r2;
        return this._cache.hasOwnProperty("props") || (e2 = (r2 = this.actualNode).nodeType, t2 = r2.nodeName, n2 = r2.id, r2 = r2.nodeValue, this._cache.props = { nodeType: e2, nodeName: this._isXHTML ? t2 : t2.toLowerCase(), id: n2, type: this._type, nodeValue: r2 }, 1 === e2 && (this._cache.props.multiple = this.actualNode.multiple, this._cache.props.value = this.actualNode.value, this._cache.props.selected = this.actualNode.selected, this._cache.props.checked = this.actualNode.checked, this._cache.props.indeterminate = this.actualNode.indeterminate)), this._cache.props;
      } }, { key: "attr", value: function(e2) {
        return "function" != typeof this.actualNode.getAttribute ? null : this.actualNode.getAttribute(e2);
      } }, { key: "hasAttr", value: function(e2) {
        return "function" == typeof this.actualNode.hasAttribute && this.actualNode.hasAttribute(e2);
      } }, { key: "attrNames", get: function() {
        var e2;
        return this._cache.hasOwnProperty("attrNames") || (e2 = (this.actualNode.attributes instanceof window2.NamedNodeMap ? this.actualNode : this.actualNode.cloneNode(false)).attributes, this._cache.attrNames = Array.from(e2).map(function(e3) {
          return e3.name;
        })), this._cache.attrNames;
      } }, { key: "getComputedStylePropertyValue", value: function(e2) {
        var t2 = "computedStyle_" + e2;
        return this._cache.hasOwnProperty(t2) || (this._cache.hasOwnProperty("computedStyle") || (this._cache.computedStyle = window2.getComputedStyle(this.actualNode)), this._cache[t2] = this._cache.computedStyle.getPropertyValue(e2)), this._cache[t2];
      } }, { key: "isFocusable", get: function() {
        return this._cache.hasOwnProperty("isFocusable") || (this._cache.isFocusable = F(this.actualNode)), this._cache.isFocusable;
      } }, { key: "tabbableElements", get: function() {
        return this._cache.hasOwnProperty("tabbableElements") || (this._cache.tabbableElements = Xl(this)), this._cache.tabbableElements;
      } }, { key: "clientRects", get: function() {
        return this._cache.hasOwnProperty("clientRects") || (this._cache.clientRects = Array.from(this.actualNode.getClientRects()).filter(function(e2) {
          return 0 < e2.width;
        })), this._cache.clientRects;
      } }, { key: "boundingClientRect", get: function() {
        return this._cache.hasOwnProperty("boundingClientRect") || (this._cache.boundingClientRect = this.actualNode.getBoundingClientRect()), this._cache.boundingClientRect;
      } }]), ap = function(e2) {
        return (e2 || "").trim().replace(/\s{2,}/g, " ").split(" ");
      }, op = " [idsMap]";
      function ip(e2, t2, n2) {
        var r2 = e2[0]._selectorMap;
        if (r2) {
          for (var a2 = e2[0].shadowId, o2 = 0; o2 < t2.length; o2++) if (1 < t2[o2].length && t2[o2].some(lp)) return;
          var i2 = /* @__PURE__ */ new Set(), l2 = (t2.forEach(function(t3) {
            var e3, n3 = function(e4, t4, n4) {
              var r3 = e4[e4.length - 1], a3 = null, o3 = 1 < e4.length || !!r3.pseudos || !!r3.classes;
              if (lp(r3)) a3 = t4["*"];
              else {
                if (r3.id) {
                  if (!t4[op] || !Object.hasOwn(t4[op], r3.id) || null == (e4 = t4[op][r3.id]) || !e4.length) return;
                  a3 = t4[op][r3.id].filter(function(e5) {
                    return e5.shadowId === n4;
                  });
                }
                if (r3.tag && "*" !== r3.tag) {
                  if (null == (e4 = t4[r3.tag]) || !e4.length) return;
                  var e4 = t4[r3.tag];
                  a3 = a3 ? up(e4, a3) : e4;
                }
                if (r3.classes) {
                  if (null == (e4 = t4["[class]"]) || !e4.length) return;
                  e4 = t4["[class]"];
                  a3 = a3 ? up(e4, a3) : e4;
                }
                if (r3.attributes) for (var i3 = 0; i3 < r3.attributes.length; i3++) {
                  var l3 = r3.attributes[i3];
                  if ("attrValue" === l3.type && (o3 = true), null == (u2 = t4["[".concat(l3.key, "]")]) || !u2.length) return;
                  var u2 = t4["[".concat(l3.key, "]")];
                  a3 = a3 ? up(u2, a3) : u2;
                }
              }
              return { nodes: a3, isComplexSelector: o3 };
            }(t3, r2, a2);
            null != n3 && null != (e3 = n3.nodes) && e3.forEach(function(e4) {
              n3.isComplexSelector && !Ro(e4, t3) || i2.add(e4);
            });
          }), []);
          return i2.forEach(function(e3) {
            return l2.push(e3);
          }), (l2 = n2 ? l2.filter(n2) : l2).sort(function(e3, t3) {
            return e3.nodeIndex - t3.nodeIndex;
          });
        }
      }
      function lp(e2) {
        return "*" === e2.tag && !e2.attributes && !e2.id && !e2.classes;
      }
      function up(e2, t2) {
        return e2.filter(function(e3) {
          return t2.includes(e3);
        });
      }
      function sp(e2, t2, n2) {
        Object.hasOwn(n2, e2) || (n2[e2] = []), n2[e2].push(t2);
      }
      function cp(t2, n2) {
        1 === t2.props.nodeType && (sp(t2.props.nodeName, t2, n2), sp("*", t2, n2), t2.attrNames.forEach(function(e2) {
          "id" === e2 && (n2[op] = n2[op] || {}, ap(t2.attr(e2)).forEach(function(e3) {
            sp(e3, t2, n2[op]);
          })), sp("[".concat(e2, "]"), t2, n2);
        }));
      }
      function dp() {
        var e2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : document.documentElement, t2 = 1 < arguments.length ? arguments[1] : void 0, n2 = (np = false, {}), e2 = (v.set("nodeMap", /* @__PURE__ */ new WeakMap()), v.set("selectorMap", n2), function r2(e3, a2, n3) {
          var o2, t3;
          function i2(e4, t4, n4) {
            t4 = r2(t4, a2, n4);
            return e4 = t4 ? e4.concat(t4) : e4;
          }
          e3.documentElement && (e3 = e3.documentElement);
          var l2 = e3.nodeName.toLowerCase();
          return Ri(e3) ? (np = true, o2 = fp(e3, n3, a2), a2 = "a" + Math.random().toString().substring(2), t3 = Array.from(e3.shadowRoot.childNodes), o2.children = t3.reduce(function(e4, t4) {
            return i2(e4, t4, o2);
          }, []), [o2]) : "content" === l2 && "function" == typeof e3.getDistributedNodes ? (t3 = Array.from(e3.getDistributedNodes())).reduce(function(e4, t4) {
            return i2(e4, t4, n3);
          }, []) : "slot" === l2 && "function" == typeof e3.assignedNodes ? ((t3 = Array.from(e3.assignedNodes())).length || (t3 = pp(e3)), window2.getComputedStyle(e3), t3.reduce(function(e4, t4) {
            return i2(e4, t4, n3);
          }, [])) : 1 === e3.nodeType ? (o2 = fp(e3, n3, a2), t3 = Array.from(e3.childNodes), o2.children = t3.reduce(function(e4, t4) {
            return i2(e4, t4, o2);
          }, []), [o2]) : 3 === e3.nodeType ? [fp(e3, n3)] : void 0;
        }(e2, t2, null));
        return e2[0]._selectorMap = n2, e2[0]._hasShadowRoot = np, e2;
      }
      function pp(e2) {
        var t2 = [];
        for (e2 = e2.firstChild; e2; ) t2.push(e2), e2 = e2.nextSibling;
        return t2;
      }
      function fp(e2, t2, n2) {
        e2 = new rp(e2, t2, n2);
        return cp(e2, v.get("selectorMap")), e2;
      }
      var mp = function(e2) {
        return e2 ? e2.trim().split("-")[0].toLowerCase() : "";
      }, hp = function(e2) {
        var n2 = {};
        return n2.none = e2.none.concat(e2.all), n2.any = e2.any, Object.keys(n2).map(function(e3) {
          var t2;
          return n2[e3].length && (t2 = axe._audit.data.failureSummaries[e3]) && "function" == typeof t2.failureMessage ? t2.failureMessage(n2[e3].map(function(e4) {
            return e4.message || "";
          })) : void 0;
        }).filter(function(e3) {
          return void 0 !== e3;
        }).join("\n\n");
      };
      function gp() {
        var e2 = axe._audit.data.incompleteFallbackMessage;
        return "string" != typeof (e2 = "function" == typeof e2 ? e2() : e2) ? "" : e2;
      }
      var bp = f.resultGroups;
      function vp(e2, a2) {
        var t2 = axe.utils.aggregateResult(e2);
        return bp.forEach(function(e3) {
          a2.resultTypes && !a2.resultTypes.includes(e3) && (t2[e3] || []).forEach(function(e4) {
            Array.isArray(e4.nodes) && 0 < e4.nodes.length && (e4.nodes = [e4.nodes[0]]);
          }), t2[e3] = (t2[e3] || []).map(function(t3) {
            return t3 = Object.assign({}, t3), Array.isArray(t3.nodes) && 0 < t3.nodes.length && (t3.nodes = t3.nodes.map(function(e4) {
              var t4, n2, r2;
              return "object" === te(e4.node) && (t4 = yp(e4.node, a2), Object.assign(e4, t4)), delete e4.result, delete e4.node, n2 = e4, r2 = a2, ["any", "all", "none"].forEach(function(e5) {
                Array.isArray(n2[e5]) && n2[e5].filter(function(e6) {
                  return Array.isArray(e6.relatedNodes);
                }).forEach(function(e6) {
                  e6.relatedNodes = e6.relatedNodes.map(function(e7) {
                    return yp(e7, r2);
                  });
                });
              }), e4;
            })), bp.forEach(function(e4) {
              return delete t3[e4];
            }), delete t3.pageLevel, delete t3.result, t3;
          });
        }), t2;
      }
      function yp(e2, t2) {
        var n2, e2 = 0 < arguments.length && void 0 !== e2 ? e2 : {}, t2 = 1 < arguments.length ? t2 : void 0, e2 = wi.dqElmToSpec(e2, t2), r2 = {};
        return axe._audit.noHtml ? r2.html = null : r2.html = null != (n2 = e2.source) ? n2 : "Undefined", t2.elementRef && !e2.fromFrame && (r2.element = null != (n2 = e2.element) ? n2 : null), false === t2.selectors && !e2.fromFrame || (r2.target = null != (n2 = e2.selector) ? n2 : [":root"]), t2.ancestry && (r2.ancestry = null != (n2 = e2.ancestry) ? n2 : [":root"]), t2.xpath && (r2.xpath = null != (n2 = e2.xpath) ? n2 : ["/"]), r2;
      }
      var wp = /\$\{\s?data\s?\}/g;
      function Dp(e2, t2) {
        if ("string" == typeof t2) return e2.replace(wp, t2);
        for (var n2 in t2) {
          var r2;
          t2.hasOwnProperty(n2) && (r2 = new RegExp("\\${\\s?data\\." + n2 + "\\s?}", "g"), n2 = void 0 === t2[n2] ? "" : String(t2[n2]), e2 = e2.replace(r2, n2));
        }
        return e2;
      }
      var xp = function e2(t2, n2) {
        var r2;
        if (t2) return Array.isArray(n2) ? (n2.values = n2.join(", "), "string" == typeof t2.singular && "string" == typeof t2.plural ? Dp(1 === n2.length ? t2.singular : t2.plural, n2) : Dp(t2, n2)) : "string" == typeof t2 ? Dp(t2, n2) : "string" == typeof n2 ? Dp(t2[n2], n2) : (r2 = t2.default || gp(), e2(r2 = n2 && n2.messageKey && t2[n2.messageKey] ? t2[n2.messageKey] : r2, n2));
      }, Ep = function(e2, t2, n2) {
        var r2 = axe._audit.data.checks[e2];
        if (!r2) throw new Error("Cannot get message for unknown check: ".concat(e2, "."));
        if (r2.messages[t2]) return xp(r2.messages[t2], n2);
        throw new Error('Check "'.concat(e2, '"" does not have a "').concat(t2, '" message.'));
      }, Fp = function(e2, t2, n2) {
        var t2 = ((n2.rules && n2.rules[t2] || {}).checks || {})[e2.id], r2 = (n2.checks || {})[e2.id], a2 = e2.enabled, e2 = e2.options;
        return r2 && (r2.hasOwnProperty("enabled") && (a2 = r2.enabled), r2.hasOwnProperty("options")) && (e2 = r2.options), t2 && (t2.hasOwnProperty("enabled") && (a2 = t2.enabled), t2.hasOwnProperty("options")) && (e2 = t2.options), { enabled: a2, options: e2, absolutePaths: n2.absolutePaths };
      };
      function Ap() {
        var e2, t2, n2, r2, a2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, o2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : window2;
        return a2 && "object" === te(a2) ? a2 : "object" !== te(o2) ? {} : { testEngine: { name: "axe-core", version: axe.version }, testRunner: { name: axe._audit.brand }, testEnvironment: (a2 = o2).navigator && "object" === te(a2.navigator) ? (e2 = a2.navigator, t2 = a2.innerHeight, n2 = a2.innerWidth, a2 = function(e3) {
          e3 = e3.screen;
          return e3.orientation || e3.msOrientation || e3.mozOrientation;
        }(a2) || {}, r2 = a2.angle, a2 = a2.type, { userAgent: e2.userAgent, windowWidth: n2, windowHeight: t2, orientationAngle: r2, orientationType: a2 }) : {}, timestamp: (/* @__PURE__ */ new Date()).toISOString(), url: null == (e2 = o2.location) ? void 0 : e2.href };
      }
      function Cp(e2, t2) {
        var n2 = t2.focusable, t2 = t2.page;
        return { node: e2, include: [], exclude: [], initiator: false, focusable: n2 && (!(n2 = (n2 = e2).getAttribute("tabindex")) || (n2 = parseInt(n2, 10), isNaN(n2)) || 0 <= n2), size: function(e3) {
          var t3 = parseInt(e3.getAttribute("width"), 10), n3 = parseInt(e3.getAttribute("height"), 10);
          (isNaN(t3) || isNaN(n3)) && (e3 = e3.getBoundingClientRect(), t3 = isNaN(t3) ? e3.width : t3, n3 = isNaN(n3) ? e3.height : n3);
          return { width: t3, height: n3 };
        }(e2), page: t2 };
      }
      function kp(e2) {
        var t2 = 0 < arguments.length && void 0 !== e2 ? e2 : [], n2 = [];
        qp(t2) || (t2 = [t2]);
        for (var r2 = 0; r2 < t2.length; r2++) {
          var a2 = function(e3) {
            if (e3 instanceof window2.Node) return e3;
            if ("string" == typeof e3) return [e3];
            Up(e3) ? (function(e4) {
              Np(Array.isArray(e4.fromFrames), "fromFrames property must be an array"), Np(e4.fromFrames.every(function(e5) {
                return !zp(e5, "fromFrames");
              }), "Invalid context; fromFrames selector must be appended, rather than nested"), Np(!zp(e4, "fromShadowDom"), "fromFrames and fromShadowDom cannot be used on the same object");
            }(e3), e3 = e3.fromFrames) : Gp(e3) && (e3 = [e3]);
            return function(e4) {
              if (Array.isArray(e4)) {
                var t3, n3 = [], r3 = x(e4);
                try {
                  for (r3.s(); !(t3 = r3.n()).done; ) {
                    var a3 = t3.value;
                    if (Gp(a3) && (!function(e5) {
                      Np(Array.isArray(e5.fromShadowDom), "fromShadowDom property must be an array"), Np(e5.fromShadowDom.every(function(e6) {
                        return !zp(e6, "fromFrames");
                      }), "shadow selector must be inside fromFrame instead"), Np(e5.fromShadowDom.every(function(e6) {
                        return !zp(e6, "fromShadowDom");
                      }), "fromShadowDom selector must be appended, rather than nested");
                    }(a3), a3 = a3.fromShadowDom), "string" != typeof a3 && !function(e5) {
                      return Array.isArray(e5) && e5.every(function(e6) {
                        return "string" == typeof e6;
                      });
                    }(a3)) return;
                    n3.push(a3);
                  }
                } catch (e5) {
                  r3.e(e5);
                } finally {
                  r3.f();
                }
                return n3;
              }
            }(e3);
          }(t2[r2]);
          a2 && n2.push(a2);
        }
        return n2;
      }
      function Np(e2, t2) {
        E(e2, "Invalid context; ".concat(t2, "\nSee: https://github.com/dequelabs/axe-core/blob/master/doc/context.md"));
      }
      function Tp(e2, t2) {
        for (var n2 = [], r2 = 0, a2 = e2[t2].length; r2 < a2; r2++) {
          var o2 = e2[t2][r2];
          o2 instanceof window2.Node ? o2.documentElement instanceof window2.Node ? n2.push(e2.flatTree[0]) : n2.push(g(o2)) : o2 && o2.length && (1 < o2.length ? function(n3, r3, a3) {
            n3.frames = n3.frames || [], kf(a3.shift()).forEach(function(t3) {
              var e3 = n3.frames.find(function(e4) {
                return e4.node === t3;
              });
              e3 || (e3 = Cp(t3, n3), n3.frames.push(e3)), e3[r3].push(a3);
            });
          }(e2, t2, o2) : (o2 = kf(o2[0]), n2.push.apply(n2, w(o2.map(function(e3) {
            return g(e3);
          })))));
        }
        return n2.filter(function(e3) {
          return e3;
        });
      }
      function Rp(e2, t2) {
        var n2 = this, r2 = (e2 = Do(e2), this.frames = [], this.page = "boolean" == typeof (null == (r2 = e2) ? void 0 : r2.page) ? e2.page : void 0, this.initiator = "boolean" != typeof (null == (r2 = e2) ? void 0 : r2.initiator) || e2.initiator, this.focusable = "boolean" != typeof (null == (r2 = e2) ? void 0 : r2.focusable) || e2.focusable, this.size = "object" === te(null == (r2 = e2) ? void 0 : r2.size) ? e2.size : {}, e2 = function(e3) {
          if ($p(e3)) {
            var t3 = " must be used inside include or exclude. It should not be on the same object.";
            Np(!zp(e3, "fromFrames"), "fromFrames" + t3), Np(!zp(e3, "fromShadowDom"), "fromShadowDom" + t3);
          } else {
            if (!Hp(e3)) return { include: [document], exclude: [] };
            e3 = { include: e3, exclude: [] };
          }
          return 0 === (t3 = kp(e3.include)).length && t3.push(document), e3 = kp(e3.exclude), { include: t3, exclude: e3 };
        }(e2), this.flatTree = null != t2 ? t2 : dp(function(e3) {
          for (var t3 = e3.include, e3 = e3.exclude, n3 = Array.from(t3).concat(Array.from(e3)), r3 = 0; r3 < n3.length; r3++) {
            var a2 = n3[r3];
            if (a2 instanceof window2.Element) return a2.ownerDocument.documentElement;
            if (a2 instanceof window2.Document) return a2.documentElement;
          }
          return document.documentElement;
        }(e2)), this.exclude = e2.exclude, this.include = e2.include, this.include = Tp(this, "include"), this.exclude = Tp(this, "exclude"), Ff("frame, iframe", this).forEach(function(e3) {
          var t3;
          Kp(e3, n2) && (t3 = n2, k(e3 = e3.actualNode)) && !xi(t3.frames, "node", e3) && t3.frames.push(Cp(e3, t3));
        }), void 0 === this.page && (this.page = function(e3) {
          e3 = e3.include;
          return 1 === e3.length && e3[0].actualNode === document.documentElement;
        }(this), this.frames.forEach(function(e3) {
          e3.page = n2.page;
        })), this);
        if (0 === r2.include.length && 0 === r2.frames.length) throw r2 = fi.isInFrame() ? "frame" : "page", new Error("No elements found for include in " + r2 + " Context");
        Array.isArray(this.include) || (this.include = Array.from(this.include)), this.include.sort(Jp);
      }
      function Op(e2) {
        return false === (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).iframes ? [] : new Rp(e2).frames.map(function(e3) {
          var t2 = e3.node, e3 = b(e3, Y);
          return e3.initiator = false, { frameSelector: mo(t2), frameContext: e3 };
        });
      }
      function _p(t2) {
        var e2 = axe._audit.rules.find(function(e3) {
          return e3.id === t2;
        });
        if (e2) return e2;
        throw new Error("Cannot find rule by id: ".concat(t2));
      }
      function Sp(e2, t2) {
        e2 = e2.getPropertyValue(t2);
        return ["scroll", "auto"].includes(e2);
      }
      var Mp = n(function(e2) {
        var t2, n2, r2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, a2 = e2.scrollWidth > e2.clientWidth + r2, r2 = e2.scrollHeight > e2.clientHeight + r2;
        if (a2 || r2) return t2 = Sp(n2 = window2.getComputedStyle(e2), "overflow-x"), n2 = Sp(n2, "overflow-y"), a2 && t2 || r2 && n2 ? { elm: e2, top: e2.scrollTop, left: e2.scrollLeft } : void 0;
      }), Pp = function() {
        var e2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window2, t2 = e2.document.documentElement;
        return [void 0 !== e2.pageXOffset ? { elm: e2, top: e2.pageYOffset, left: e2.pageXOffset } : { elm: t2, top: t2.scrollTop, left: t2.scrollLeft }].concat(function r2(e3) {
          return Array.from(e3.children || e3.childNodes || []).reduce(function(e4, t3) {
            var n2 = Mp(t3);
            return n2 && e4.push(n2), e4.concat(r2(t3));
          }, []);
        }(document.body));
      };
      function Ip() {
        return Do(A);
      }
      var Bp, jp = function(l2) {
        if (l2) return function(e2) {
          var t2 = e2.data, n2 = e2.isCrossOrigin, n2 = void 0 !== n2 && n2, r2 = e2.shadowId, a2 = e2.root, o2 = e2.priority, e2 = e2.isLink, e2 = void 0 !== e2 && e2, i2 = l2.createElement("style");
          return e2 ? (e2 = l2.createTextNode('@import "'.concat(t2.href, '"')), i2.appendChild(e2)) : i2.appendChild(l2.createTextNode(t2)), l2.head.appendChild(i2), { sheet: i2.sheet, isCrossOrigin: n2, shadowId: r2, root: a2, priority: o2 };
        };
        throw new Error("axe.utils.getStyleSheetFactory should be invoked with an argument");
      }, Lp = function(e2) {
        var t2;
        return Bp && Bp.parentNode ? (void 0 === Bp.styleSheet ? Bp.appendChild(document.createTextNode(e2)) : Bp.styleSheet.cssText += e2, Bp) : e2 ? (t2 = document.head || document.getElementsByTagName("head")[0], (Bp = document.createElement("style")).type = "text/css", void 0 === Bp.styleSheet ? Bp.appendChild(document.createTextNode(e2)) : Bp.styleSheet.cssText = e2, t2.appendChild(Bp), Bp) : void 0;
      };
      function qp(e2) {
        return !!e2 && "object" === te(e2) && "number" == typeof e2.length && e2 instanceof window2.Node == false;
      }
      function zp(e2, t2) {
        return !(!e2 || "object" !== te(e2)) && Object.prototype.hasOwnProperty.call(e2, t2);
      }
      function Vp(e2) {
        return $p(e2) || Hp(e2);
      }
      function $p(t2) {
        return ["include", "exclude"].some(function(e2) {
          return zp(t2, e2) && Hp(t2[e2]);
        });
      }
      function Hp(e2) {
        return "string" == typeof e2 || e2 instanceof window2.Node || Up(e2) || Gp(e2) || qp(e2);
      }
      function Up(e2) {
        return zp(e2, "fromFrames");
      }
      function Gp(e2) {
        return zp(e2, "fromShadowDom");
      }
      var Wp = function e2(t2, n2) {
        var r2, a2 = g(t2);
        return 9 !== t2.nodeType && (11 === t2.nodeType && (t2 = t2.host), a2 && null !== a2._isHidden ? a2._isHidden : !(r2 = window2.getComputedStyle(t2, null)) || !t2.parentNode || "none" === r2.getPropertyValue("display") || !n2 && "hidden" === r2.getPropertyValue("visibility") || "true" === t2.getAttribute("aria-hidden") || (n2 = e2(t2.assignedSlot || t2.parentNode, true), a2 && (a2._isHidden = n2), n2));
      }, Yp = function(e2) {
        var t2 = null != (t2 = null == (t2 = e2.props) ? void 0 : t2.nodeName) ? t2 : e2.nodeName.toLowerCase();
        return "http://www.w3.org/2000/svg" !== e2.namespaceURI && !!A.htmlElms[t2];
      };
      function Kp(t2, e2) {
        var n2 = e2.include, n2 = void 0 === n2 ? [] : n2, e2 = e2.exclude, e2 = void 0 === e2 ? [] : e2, n2 = n2.filter(function(e3) {
          return Ci(e3, t2);
        });
        return 0 !== n2.length && (0 === (e2 = e2.filter(function(e3) {
          return Ci(e3, t2);
        })).length || (n2 = Xp(n2), Ci(Xp(e2), n2)));
      }
      function Xp(e2) {
        var t2, n2, r2 = x(e2);
        try {
          for (r2.s(); !(n2 = r2.n()).done; ) {
            var a2 = n2.value;
            t2 && Ci(a2, t2) || (t2 = a2);
          }
        } catch (e3) {
          r2.e(e3);
        } finally {
          r2.f();
        }
        return t2;
      }
      function Zp(e2, r2) {
        return e2.length === r2.length && e2.every(function(e3, t2) {
          var n2 = r2[t2];
          return Array.isArray(e3) ? e3.length === n2.length && e3.every(function(e4, t3) {
            return n2[t3] === e4;
          }) : e3 === n2;
        });
      }
      var Jp = function(e2, t2) {
        return (e2 = e2.actualNode || e2) === (t2 = t2.actualNode || t2) ? 0 : 4 & e2.compareDocumentPosition(t2) ? -1 : 1;
      };
      function l(e2) {
        return e2 instanceof p ? { vNode: e2, domNode: e2.actualNode } : { vNode: g(e2), domNode: e2 };
      }
      var Qp, ef, tf = function(e2, r2, a2, o2) {
        var t2, n2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4], i2 = Array.from(e2.cssRules);
        return i2 ? (t2 = i2.filter(function(e3) {
          return 3 === e3.type;
        })).length ? (t2 = t2.filter(function(e3) {
          return e3.href;
        }).map(function(e3) {
          return e3.href;
        }).filter(function(e3) {
          return !o2.includes(e3);
        }).map(function(e3, t3) {
          var t3 = [].concat(w(a2), [t3]), n3 = /^https?:\/\/|^\/\//i.test(e3);
          return rf(e3, r2, t3, o2, n3);
        }), (i2 = i2.filter(function(e3) {
          return 3 !== e3.type;
        })).length && t2.push(Promise.resolve(r2.convertDataToStylesheet({ data: i2.map(function(e3) {
          return e3.cssText;
        }).join(), isCrossOrigin: n2, priority: a2, root: r2.rootNode, shadowId: r2.shadowId }))), Promise.all(t2)) : Promise.resolve({ isCrossOrigin: n2, priority: a2, root: r2.rootNode, shadowId: r2.shadowId, sheet: e2 }) : Promise.resolve();
      }, nf = function(e2, t2, n2, r2) {
        var a2 = 4 < arguments.length && void 0 !== arguments[4] && arguments[4];
        return function(e3) {
          try {
            return !e3.cssRules && e3.href ? false : true;
          } catch (e4) {
            return false;
          }
        }(e2) ? tf(e2, t2, n2, r2, a2) : rf(e2.href, t2, n2, r2, true);
      }, rf = function(e2, t2, n2, r2, a2) {
        return r2.push(e2), new Promise(function(t3, n3) {
          var r3 = new window2.XMLHttpRequest();
          r3.open("GET", e2), r3.timeout = f.preload.timeout, r3.addEventListener("error", n3), r3.addEventListener("timeout", n3), r3.addEventListener("loadend", function(e3) {
            if (e3.loaded && r3.responseText) return t3(r3.responseText);
            n3(r3.responseText);
          }), r3.send();
        }).then(function(e3) {
          e3 = t2.convertDataToStylesheet({ data: e3, isCrossOrigin: a2, priority: n2, root: t2.rootNode, shadowId: t2.shadowId });
          return nf(e3.sheet, t2, n2, r2, e3.isCrossOrigin);
        });
      };
      function af() {
        if (window2.performance && window2.performance) return window2.performance.now();
      }
      Qp = null, ef = af();
      var _ = { start: function() {
        this.mark("mark_axe_start");
      }, end: function() {
        this.mark("mark_axe_end"), this.measure("axe", "mark_axe_start", "mark_axe_end"), this.logMeasures("axe");
      }, auditStart: function() {
        this.mark("mark_audit_start");
      }, auditEnd: function() {
        this.mark("mark_audit_end"), this.measure("audit_start_to_end", "mark_audit_start", "mark_audit_end"), this.logMeasures();
      }, mark: function(e2) {
        window2.performance && void 0 !== window2.performance.mark && window2.performance.mark(e2);
      }, measure: function(e2, t2, n2) {
        window2.performance && void 0 !== window2.performance.measure && window2.performance.measure(e2, t2, n2);
      }, logMeasures: function(e2) {
        function t2(e3) {
          Na("Measure " + e3.name + " took " + e3.duration + "ms");
        }
        if (window2.performance && void 0 !== window2.performance.getEntriesByType) for (var n2 = window2.performance.getEntriesByName("mark_axe_start")[0], r2 = window2.performance.getEntriesByType("measure").filter(function(e3) {
          return e3.startTime >= n2.startTime;
        }), a2 = 0; a2 < r2.length; ++a2) {
          var o2 = r2[a2];
          if (o2.name === e2) return void t2(o2);
          t2(o2);
        }
      }, timeElapsed: function() {
        return af() - ef;
      }, reset: function() {
        Qp = Qp || af(), ef = af();
      } };
      function of() {
        var e2, l2, u2, s2;
        return document.elementsFromPoint || document.msElementsFromPoint || ((e2 = document.createElement("x")).style.cssText = "pointer-events:auto", e2 = "auto" === e2.style.pointerEvents, l2 = e2 ? "pointer-events" : "visibility", u2 = e2 ? "none" : "hidden", (s2 = document.createElement("style")).innerHTML = e2 ? "* { pointer-events: all }" : "* { visibility: visible }", function(e3, t2) {
          var n2, r2, a2, o2 = [], i2 = [];
          for (document.head.appendChild(s2); (n2 = document.elementFromPoint(e3, t2)) && -1 === o2.indexOf(n2); ) o2.push(n2), i2.push({ value: n2.style.getPropertyValue(l2), priority: n2.style.getPropertyPriority(l2) }), n2.style.setProperty(l2, u2, "important");
          for (o2.indexOf(document.documentElement) < o2.length - 1 && (o2.splice(o2.indexOf(document.documentElement), 1), o2.push(document.documentElement)), r2 = i2.length; a2 = i2[--r2]; ) o2[r2].style.setProperty(l2, a2.value || "", a2.priority);
          return document.head.removeChild(s2), o2;
        });
      }
      "function" == typeof window2.addEventListener && (document.elementsFromPoint = of());
      var lf = function(e2, t2) {
        return e2.concat(t2).filter(function(e3, t3, n2) {
          return n2.indexOf(e3) === t3;
        });
      };
      function uf(e2, t2, n2, r2, a2) {
        a2 = a2 || {};
        return a2.vNodes = e2, a2.vNodesIndex = 0, a2.anyLevel = t2, a2.thisLevel = n2, a2.parentShadowId = r2, a2;
      }
      var sf = function(e2, t2, n2) {
        e2 = Array.isArray(e2) ? e2 : [e2];
        t2 = To(t2);
        if (r2 = ip(e2, t2, n2)) return r2;
        for (var r2 = e2, e2 = t2, a2 = n2, o2 = v.get("qsa.recycledLocalVariables", function() {
          return [];
        }), i2 = [], l2 = uf(Array.isArray(r2) ? r2 : [r2], e2, null, r2[0].shadowId, o2.pop()), u2 = []; l2.vNodesIndex < l2.vNodes.length; ) {
          for (var s2, c2 = l2.vNodes[l2.vNodesIndex++], d2 = null, p2 = null, f2 = ((null == (s2 = l2.anyLevel) ? void 0 : s2.length) || 0) + ((null == (s2 = l2.thisLevel) ? void 0 : s2.length) || 0), m2 = false, h2 = 0; h2 < f2; h2++) {
            var g2 = h2 < ((null == (g2 = l2.anyLevel) ? void 0 : g2.length) || 0) ? l2.anyLevel[h2] : l2.thisLevel[h2 - ((null == (g2 = l2.anyLevel) ? void 0 : g2.length) || 0)];
            if ((!g2[0].id || c2.shadowId === l2.parentShadowId) && Ro(c2, g2[0])) if (1 === g2.length) m2 || a2 && !a2(c2) || (u2.push(c2), m2 = true);
            else {
              var b2 = g2.slice(1);
              if (false === [" ", ">"].includes(b2[0].combinator)) throw new Error("axe.utils.querySelectorAll does not support the combinator: " + g2[1].combinator);
              (">" === b2[0].combinator ? d2 = d2 || [] : p2 = p2 || []).push(b2);
            }
            g2[0].id && c2.shadowId !== l2.parentShadowId || null == (b2 = l2.anyLevel) || !b2.includes(g2) || (p2 = p2 || []).push(g2);
          }
          for (c2.children && c2.children.length && (i2.push(l2), l2 = uf(c2.children, p2, d2, c2.shadowId, o2.pop())); l2.vNodesIndex === l2.vNodes.length && i2.length; ) o2.push(l2), l2 = i2.pop();
        }
        return u2;
      }, cf = function(e2) {
        var t2, n2, l2, u2, e2 = void 0 === (e2 = e2.treeRoot) ? axe._tree[0] : e2;
        return t2 = [], e2 = sf(e2 = e2, "*", function(e3) {
          return !t2.includes(e3.shadowId) && (t2.push(e3.shadowId), true);
        }).map(function(e3) {
          return { shadowId: e3.shadowId, rootNode: _i(e3.actualNode) };
        }), (e2 = lf(e2, [])).length ? (n2 = document.implementation.createHTMLDocument("Dynamic document for loading cssom"), n2 = jp(n2), l2 = n2, u2 = [], e2.forEach(function(e3, t3) {
          var n3 = e3.rootNode, e3 = e3.shadowId, r2 = function(e4, t4, n4) {
            t4 = 11 === e4.nodeType && t4 ? function(r3, a3) {
              return Array.from(r3.children).filter(df).reduce(function(e5, t5) {
                var n5 = t5.nodeName.toUpperCase(), t5 = "STYLE" === n5 ? t5.textContent : t5, t5 = a3({ data: t5, isLink: "LINK" === n5, root: r3 });
                return t5.sheet && e5.push(t5.sheet), e5;
              }, []);
            }(e4, n4) : function(e5) {
              return Array.from(e5.styleSheets).filter(function(e6) {
                return !!e6.media && pf(e6.media.mediaText);
              });
            }(e4);
            return function(e5) {
              var t5 = [];
              return e5.filter(function(e6) {
                if (e6.href) {
                  if (t5.includes(e6.href)) return false;
                  t5.push(e6.href);
                }
                return true;
              });
            }(t4);
          }(n3, e3, l2);
          if (!r2) return Promise.all(u2);
          var a2 = t3 + 1, o2 = { rootNode: n3, shadowId: e3, convertDataToStylesheet: l2, rootIndex: a2 }, i2 = [], t3 = Promise.all(r2.map(function(e4, t4) {
            return nf(e4, o2, [a2, t4], i2);
          }));
          u2.push(t3);
        }), Promise.all(u2).then(function n3(e3) {
          return e3.reduce(function(e4, t3) {
            return Array.isArray(t3) ? e4.concat(n3(t3)) : e4.concat(t3);
          }, []);
        })) : Promise.resolve();
      };
      function df(e2) {
        var t2 = e2.nodeName.toUpperCase(), n2 = e2.getAttribute("href"), r2 = e2.getAttribute("rel"), n2 = "LINK" === t2 && n2 && r2 && e2.rel.toUpperCase().includes("STYLESHEET");
        return "STYLE" === t2 || n2 && pf(e2.media);
      }
      function pf(e2) {
        return !e2 || !e2.toUpperCase().includes("PRINT");
      }
      var ff = function(e2) {
        return e2 = void 0 === (e2 = e2.treeRoot) ? axe._tree[0] : e2, e2 = sf(e2, "video, audio", function(e3) {
          e3 = e3.actualNode;
          return e3.hasAttribute("src") ? !!e3.getAttribute("src") : !(Array.from(e3.getElementsByTagName("source")).filter(function(e4) {
            return !!e4.getAttribute("src");
          }).length <= 0);
        }), Promise.all(e2.map(function(e3) {
          var n2, e3 = e3.actualNode;
          return n2 = e3, new Promise(function(t2) {
            0 < n2.readyState && t2(n2), n2.addEventListener("loadedmetadata", function e4() {
              n2.removeEventListener("loadedmetadata", e4), t2(n2);
            });
          });
        }));
      };
      function mf(o2) {
        var i2 = { cssom: cf, media: ff };
        return hf(o2) ? new Promise(function(t2, n2) {
          var e2 = gf(o2), r2 = e2.assets, e2 = e2.timeout, a2 = setTimeout(function() {
            return n2(new Error("Preload assets timed out."));
          }, e2);
          Promise.all(r2.map(function(r3) {
            return i2[r3](o2).then(function(e3) {
              return t3 = {}, e3 = e3, (n3 = ye(n3 = r3)) in t3 ? Object.defineProperty(t3, n3, { value: e3, enumerable: true, configurable: true, writable: true }) : t3[n3] = e3, t3;
              var t3, n3;
            });
          })).then(function(e3) {
            e3 = e3.reduce(function(e4, t3) {
              return h({}, e4, t3);
            }, {});
            clearTimeout(a2), t2(e3);
          }).catch(function(e3) {
            clearTimeout(a2), n2(e3);
          });
        }) : Promise.resolve();
      }
      function hf(e2) {
        return !e2 || void 0 === e2.preload || null === e2.preload || ("boolean" == typeof e2.preload ? e2.preload : (e2 = e2.preload, "object" === te(e2) && Array.isArray(e2.assets)));
      }
      function gf(e2) {
        var t2 = f.preload, n2 = t2.assets, t2 = t2.timeout, t2 = { assets: n2, timeout: t2 };
        if (e2.preload && "boolean" != typeof e2.preload) {
          if (!e2.preload.assets.every(function(e3) {
            return n2.includes(e3.toLowerCase());
          })) throw new Error("Requested assets, not supported. Supported assets are: ".concat(n2.join(", "), "."));
          t2.assets = lf(e2.preload.assets.map(function(e3) {
            return e3.toLowerCase();
          }), []), e2.preload.timeout && "number" == typeof e2.preload.timeout && !isNaN(e2.preload.timeout) && (t2.timeout = e2.preload.timeout);
        }
        return t2;
      }
      function bf(e2) {
        var t2 = axe._audit.data.checks || {}, n2 = axe._audit.data.rules || {}, r2 = xi(axe._audit.rules, "id", e2.id) || {}, a2 = (e2.tags = Do(r2.tags || []), vf(t2, true, r2)), o2 = vf(t2, false, r2);
        e2.nodes.forEach(function(e3) {
          e3.any.forEach(a2), e3.all.forEach(a2), e3.none.forEach(o2);
        }), Ni(e2, Do(n2[e2.id] || {}));
      }
      function vf(r2, a2, o2) {
        return function(e2) {
          var t2 = r2[e2.id] || {}, n2 = t2.messages || {}, t2 = Object.assign({}, t2);
          delete t2.messages, o2.reviewOnFail || void 0 !== e2.result ? t2.message = e2.result === a2 ? n2.pass : n2.fail : ("object" !== te(n2.incomplete) || Array.isArray(e2.data) || (t2.message = function(t3, n3) {
            function r3(e4) {
              return e4.incomplete && e4.incomplete.default ? e4.incomplete.default : gp();
            }
            if (!t3 || !t3.missingData) return t3 && t3.messageKey ? n3.incomplete[t3.messageKey] : r3(n3);
            try {
              var e3 = n3.incomplete[t3.missingData[0].reason];
              if (e3) return e3;
              throw new Error();
            } catch (e4) {
              return "string" == typeof t3.missingData ? n3.incomplete[t3.missingData] : r3(n3);
            }
          }(e2.data, n2)), t2.message || (t2.message = n2.incomplete)), "function" != typeof t2.message && (t2.message = xp(t2.message, e2.data)), Ni(e2, t2);
        };
      }
      var yf = function(e2, t2) {
        return sf(e2, t2);
      };
      function wf(t2, e2) {
        var n2, r2 = axe._audit && axe._audit.tagExclude ? axe._audit.tagExclude : [], a2 = e2.hasOwnProperty("include") || e2.hasOwnProperty("exclude") ? (n2 = e2.include || [], n2 = Array.isArray(n2) ? n2 : [n2], a2 = e2.exclude || [], (a2 = Array.isArray(a2) ? a2 : [a2]).concat(r2.filter(function(e3) {
          return -1 === n2.indexOf(e3);
        }))) : (n2 = Array.isArray(e2) ? e2 : [e2], r2.filter(function(e3) {
          return -1 === n2.indexOf(e3);
        }));
        return !!(n2.some(function(e3) {
          return -1 !== t2.tags.indexOf(e3);
        }) || 0 === n2.length && false !== t2.enabled) && a2.every(function(e3) {
          return -1 === t2.tags.indexOf(e3);
        });
      }
      var Df = function(e2, t2, n2) {
        var r2 = n2.runOnly || {}, n2 = (n2.rules || {})[e2.id];
        return !(e2.pageLevel && !t2.page) && ("rule" === r2.type ? -1 !== r2.values.indexOf(e2.id) : n2 && "boolean" == typeof n2.enabled ? n2.enabled : "tag" === r2.type && r2.values ? wf(e2, r2.values) : wf(e2, []));
      };
      function xf(e2, t2) {
        var n2, r2, a2;
        return t2 ? (a2 = e2.cloneNode(false), n2 = Ya(a2), a2 = 1 === a2.nodeType ? (r2 = a2.outerHTML, v.get(r2, function() {
          return Ef(a2, n2, e2, t2);
        })) : Ef(a2, n2, e2, t2), Array.from(e2.childNodes).forEach(function(e3) {
          a2.appendChild(xf(e3, t2));
        }), a2) : e2;
      }
      function Ef(a2, e2, o2, i2) {
        return e2 && (a2 = document.createElement(a2.nodeName), Array.from(e2).forEach(function(e3) {
          var t2, n2, r2;
          t2 = o2, n2 = e3.name, void 0 !== (r2 = i2)[n2] && (true === r2[n2] || Ka(t2, r2[n2])) || a2.setAttribute(e3.name, e3.value);
        })), a2;
      }
      function Ff(e2, t2) {
        var n2 = [];
        if (axe._selectCache) for (var r2 = 0, a2 = axe._selectCache.length; r2 < a2; r2++) {
          var o2 = axe._selectCache[r2];
          if (o2.selector === e2) return o2.result;
        }
        for (var i2, l2 = t2.include.reduce(function(e3, t3) {
          return e3.length && Ci(e3[e3.length - 1], t3) || e3.push(t3), e3;
        }, []), u2 = (i2 = t2).exclude && 0 !== i2.exclude.length ? function(e3) {
          return Kp(e3, i2);
        } : null, s2 = 0; s2 < l2.length; s2++) var c2 = l2[s2], n2 = function(e3, t3) {
          if (0 === e3.length) return t3;
          {
            var n3;
            e3.length < t3.length && (n3 = e3, e3 = t3, t3 = n3);
          }
          for (var r3 = 0, a3 = t3.length; r3 < a3; r3++) e3.includes(t3[r3]) || e3.push(t3[r3]);
          return e3;
        }(n2, sf(c2, e2, u2));
        return axe._selectCache && axe._selectCache.push({ selector: e2, result: n2 }), n2;
      }
      var Af = function(e2) {
        e2.forEach(function(e3) {
          var t2 = e3.elm, n2 = e3.top, e3 = e3.left;
          if (t2 === window2) return t2.scroll(e3, n2);
          t2.scrollTop = n2, t2.scrollLeft = e3;
        });
      };
      function Cf(e2) {
        return function e3(t2, n2) {
          var r2 = t2.shift();
          n2 = r2 ? n2.querySelector(r2) : null;
          if (0 === t2.length) return n2;
          if (null == n2 || !n2.shadowRoot) return null;
          return e3(t2, n2.shadowRoot);
        }(Array.isArray(e2) ? w(e2) : [e2], document);
      }
      function kf(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : document, n2 = Array.isArray(e2) ? w(e2) : [e2];
        return 0 === e2.length ? [] : function e3(t3, n3) {
          var t3 = ee(t3), r2 = t3[0], a2 = t3.slice(1);
          t3 = n3.querySelectorAll(r2);
          if (0 === a2.length) return Array.from(t3);
          var o2 = [];
          var i2, l2 = x(t3);
          try {
            for (l2.s(); !(i2 = l2.n()).done; ) {
              var u2 = i2.value;
              null != u2 && u2.shadowRoot && o2.push.apply(o2, w(e3(a2, u2.shadowRoot)));
            }
          } catch (e4) {
            l2.e(e4);
          } finally {
            l2.f();
          }
          return o2;
        }(n2, t2);
      }
      var Nf = function() {
        return ["hidden", "text", "search", "tel", "url", "email", "password", "date", "month", "week", "time", "datetime-local", "number", "range", "color", "checkbox", "radio", "file", "submit", "image", "reset", "button"];
      }, Tf = [, [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , , , , , 1, 1, 1, 1, , , 1, 1, 1, , 1, , 1, , 1, 1], [1, 1, 1, , 1, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, 1, 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, , , , , , 1, , 1, , , , , 1, , 1, , , , 1, 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, , , 1, , , , , 1, 1, 1, , 1, , 1, , 1, , , , , , 1], [1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, , 1, , 1, , , , , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1], [1, 1, 1, 1, 1, , , 1, , , 1, , , 1, 1, 1, , , , , 1, , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , 1, 1, 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , , 1, 1, , , , , , 1, 1], [1, 1, 1, , , , , 1, , , , 1, 1, , 1, , , , , , 1, , , , , 1], [, 1, , , 1, , , 1, , , , , , 1], [, 1, , 1, , , , 1, , , , 1], [1, , 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, , , 1, , 1, 1, , 1, , 1, , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [, 1, 1, , , , , , 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, , , , , 1, 1, , 1, , 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, , , , 1, 1, 1, , 1, 1, , , 1, 1, , 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , 1, 1], [, , , , 1, , , , , , , , , , , , , , , , , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, , 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, 1, , , , , 1], [1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , 1, , , , , , , 1], [, 1, 1, , 1, 1, , 1, , , , , , , , , , , , , 1], , [1, 1, 1, , , , , , , , , , , , , 1], [, , , , , , , , 1, , , 1, , , 1, 1, , , , , 1]], [, [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , 1, , , , , , , , , , , , , , , 1], [, 1, , , 1, 1, , 1, , 1, 1, , , , 1, 1, , , 1, 1, , , , 1], [1, , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, , , 1, , 1, , , 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, , , 1, , , 1, , 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , , , , 1], [, , , , , , , 1, , , , 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , 1], , [, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , 1], [, , 1, , , 1, , , 1, 1, , , 1, , 1, 1, , 1], [, 1, 1, , 1, , , , 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1], [, 1, , , , , , , , , , 1, 1, , , , , , 1, 1, , 1, , 1, , 1, 1], , [, 1, 1, , 1, , , 1, , 1, , , , 1, 1, 1, , , , , , 1, , , , 1], [1, 1, , , 1, 1, , 1, , , , , 1, , 1]], [, [, 1], [, , , 1, , , , 1, , , , 1, , , , 1, , , 1, , , 1], [, , , , , , , , , , , , , , , , , , 1, 1, , , , , , 1], , [1, , , , , 1], [, 1, , , , 1, , , , 1], [, 1, , , , , , , , , , , 1, , , 1, , , , , , , , , 1, 1], [, , , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , 1, , 1], [, 1], [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, , 1, 1, , 1, , , , , , , 1], [1, , , , , 1, , , 1, 1, , 1, , 1, , 1, 1, , , , , 1, , , 1], [, 1, 1, , , 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , 1, , 1, , 1, 1, 1], [1, 1, 1, 1, 1, , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1], [1, , , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], , [, 1, , , , , , 1, 1, 1, , 1, , , , 1, , , 1, 1, 1, , , 1], [1, , , , , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, , 1, , 1, , , 1, 1], [1, , 1, 1, , , , , 1, , , , , , 1, 1, , , 1, 1, 1, 1, , , 1, , 1], [1, , , , , , , , , , , , , , , , , 1], [, , , , , 1, , , 1, , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1], [, 1, , , , 1]], [, [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, 1, 1], [, , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], , [, , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1], , [1, 1, , , , 1, 1, , , , , , 1, , , , 1, , 1, , 1, 1, , 1], [1], [, , , , , , , , , , , 1, , , , , , , , , , , 1], [, 1, , , , , , , 1, 1, , , 1, , 1, , , , 1, , , , , , , 1], [, , , , , , , , , , , , , , , , 1, , , , , 1], [, , 1, , , , , 1, , 1], [1, , , , 1, , , , , 1, , , , 1, 1, , , , 1, 1, , , , , 1], [, , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [1, , , 1, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, 1, 1], [, , , , , 1, , , , , , , 1, , , , , , , 1], , [, , 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , , 1, 1, , 1, 1, 1, , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, , , , 1], , [1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , , , , , 1, , 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1], [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, , , 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , , , , , , , , 1, , , , 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, , 1, 1, , , 1, , 1, 1, , 1], [, 1, , 1, , 1, , , 1, , , 1, 1, , 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, , , , , , , , , 1, , 1, , 1, 1, , , , 1, , , 1], [, 1, , , 1, 1, , , , , , , , , 1, 1, 1, , , , , 1], [1, , , 1, 1, , , , 1, 1, 1, 1, 1, , , 1, , , 1, , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, , , , 1, 1, 1, , , 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1, , , , 1, , , 1], [, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1, , 1, , , , , 1, 1, 1, 1, 1, , , 1, , , , 1], [, 1, , , , , , , , 1, , , , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, , , , 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, 1, 1, , 1, , , 1, 1, 1, 1, , , 1, , , , , , , 1], [, 1, , , , , , , , 1, , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, 1, , , , , , , , , , , , 1, 1, , , , , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , , , , , 1], [1, 1, , , 1, , , 1, 1, 1, , , , 1], , [, , , , , , , , , , , , , 1, , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , 1, , , , , , , 1], [1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, , , 1, , 1, , , 1, 1], [, , , , , , , , , 1], [, 1, , , , 1, , , , , , 1, , , 1, , , , , 1], [, 1, 1, , 1, 1, , , , , , , , , , , , , , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, 1, 1, 1, , , , 1, 1, , , , 1, , 1], [1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, , 1, 1], [, , , , , , , , , , , , , , , 1, , , , 1], , [1, 1, , 1, , 1, , , , , , 1, , 1, , 1, 1, , 1, , 1, 1, , 1, 1, , 1], [, , 1, , , , , , 1, , , , 1, , 1, , , , , 1], [1, , , , , , , , , 1, , , , , , 1, , , , 1, , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, , 1, , , , , , 1, , , 1, , , , , , , , 1], [, 1, , 1, , , , , , , , , , , , 1], , [1, 1, , , , , , , , , , , , , , , , , , , , , , 1, 1], [1]], [, [1, , , , , , , , , 1, , , , , 1, , 1, , 1], [, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1, 1, , , , 1, , , 1, , , , 1], [, 1, , , , , , , 1, , , , 1, , , , , , 1], [1, 1, 1, 1, 1, 1, , , , 1, , , , , , , , , 1, 1, 1, 1], [1], [, 1, 1, , , 1, 1, , , , , 1, , 1, , , , , , , , 1, , , , 1], [1, , 1, , , 1, , 1, , , , , 1, 1, 1, 1, , , , 1, , , , 1], [, , 1, , , , , , , 1, , , , , , , 1, , , , , , , 1], [1, , , , , , , , , , , , , , 1, , , , 1], [, , , 1, , 1, , , , , 1, , , , 1, 1, , , , 1], [1, , , , , 1, , , , 1, , 1, 1, , , 1, 1, , 1, 1, 1, , 1, 1, 1, , 1], [, 1, 1, , , , , 1, , 1, , 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , 1, 1, , , 1, 1, , , , , , 1], [1, , 1, 1, , 1, , 1, 1, , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , , , 1], [1, , , , , , , , , , , , , , , , , , 1, , , 1, , 1], [, , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , , 1, , 1], [, 1, , , , 1, , , 1, 1, , 1, , , 1, 1, , , 1, , , 1, , , 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, , , 1, , 1, 1], [1, , 1, 1, 1, 1, , , , 1, , 1, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1], [1, , , , , , , , , , , , , 1], [, , 1, , , , , , , , , , , , , , , , , , , , 1], [1, , , , , , , , , , , 1, , 1, , 1, , , , 1], [, , , 1, , , , , , , , , 1], [, 1, , , , , , , , , , , , , , 1, , , , , , , , , 1], [, , , , , , , , 1, 1, , , , , , , , , 1, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1], [, , , , , 1, , , , 1, 1, 1, , , 1, 1, , , 1, , 1, 1, , 1], [, , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , 1, , , , , , , , , , , , , 1], [, , 1, , , 1, , 1, 1, 1, , 1, 1, , 1, , , , 1, , 1, 1], , [, , 1, , , 1, , , , , , 1, , , , 1], [, , , , , , , , , 1, , , , , , , , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, , , 1, 1, , 1, , 1, , , 1, 1, 1, , , 1], [, , , , , 1, , , , , , , , , , , , , 1], [, 1, , , , , , , , , , , , 1, , 1, 1, , 1, , , 1], [, , , , , 1, , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, , , , , 1, , , 1, , 1, , , , 1, 1, , , , 1, 1], [, 1, , , 1, , , 1, , 1, 1, , 1, , , , , , , 1], [, , 1, , 1, , , 1, , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , , , , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , , , , , , , , , , 1, , 1, 1], [, , , , , , , , , , , , 1], , [, 1, 1, 1, 1, , , , 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1], [1, , , , 1, , , , , , , , , , 1], [1, , , , , , , , , 1], , [, 1, , , , 1, , , , , , , , , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, , 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, , 1, , , , 1, 1, , , 1, 1, , 1], [, 1, 1, , 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , 1], [1, 1, 1, , , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, , 1, 1, , , , , 1], [, 1, , , , , , , 1, 1, , , 1, 1, 1, , 1, , , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , , 1, , , , 1, , , , , , , 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, , , , 1, , 1, , 1, , , 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , , 1, 1, , , , , , , , , 1], , [, 1, , 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1, , , , 1], [, 1, , , 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1], [1, , , 1, , , , 1, 1, 1, , , , , 1, 1, , , , 1, , 1], [1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , , 1, , 1, , , , , , , , 1, , 1], [, 1, , , , 1, , 1, 1, , , , 1, 1, , 1, , , , 1, 1, 1, , 1], , [, 1, , , , , , 1, , , , , , , 1], [, , , , , , , , 1, , , , 1, , 1, , , , , , , , , , , , 1]], [, [, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, , , , , , , , 1, , , , , , 1, , , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, , , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , , , , 1, 1, 1, , , 1, , 1, 1, , , , 1, , 1, , , 1, 1], [, , , , , , , 1, , , , 1, 1, 1, 1, 1, , 1, , , , , , , , 1], [1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, , 1, , 1, 1, , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , 1, 1, , 1, , 1, 1, 1, , 1, , 1, 1, , 1, 1, , 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , , , , , , 1, , , , , 1, , 1], [, 1, 1, 1, , 1, , 1, , 1, , , , 1, , 1, , , 1, , , , , , 1, 1], [, 1, , , 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , , 1, , , 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , , , 1, , 1, , 1, , , , , , 1, , 1, , , , 1, 1]], [, [, 1, , 1, , , , , , , , , , , , , , , 1, , , , 1], [, , , , , , , , , 1, , 1, 1, 1, , 1, , , 1, , 1, 1], [1, 1, , , , , , , 1, , , , , , , 1, , , , , , 1], [, 1, , , , , , , , , , 1, , , , , , , , , 1, 1], , [, , , , , , , , , , , , , , , 1, , , , 1, , 1], [, , 1, 1, , 1, , 1, , , , , , , , 1, , , , , , 1], [, , , , , , , , , , , , , , , , , , , , 1, 1], [, 1, , , , , , , , , , , , , 1], [1, , 1, 1, , , , 1, , , , , , , , , 1, , , 1, , , 1, 1], [, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , , , , , 1, , 1, , 1, , , 1, , 1, 1], [1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, , , 1, , 1, , 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, , 1, 1], [, , , , 1, , , 1, , , , , , , 1, , , , 1, 1], [, 1, , , , , , , , , , 1, , 1, , 1, , , , , 1, , , , , 1], , [1, 1, , 1, , 1, , 1, 1, , , , , , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, , , , , , 1, , , , , , 1, 1, , , , 1, 1, , , 1], [, 1, 1, , 1, 1, , , , 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, , , 1, , , , 1, , , , 1, 1], [, , , , 1], [, , , , , , , , , 1, , , 1], , [, , 1, , 1, , , , , , , , , 1, , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1], [, 1, , 1, , , , , , 1, , , , , 1, 1, , , , , 1, 1], [, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , , 1, , 1, 1, 1], [, 1, , , , 1, , , , , , , 1], [, 1, , , 1, , , 1, , 1, , 1, 1, , 1, , , , , 1, , 1, , , , 1, 1], [, 1, , , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, , , , 1, 1, , , , , , 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1], [, 1, , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , 1, , , , , , , , 1, , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, , 1, 1, 1, , 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, , , , , , , 1, 1, , , , , 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1], , [, 1, 1, , , , , 1, , 1, , , , 1, 1, 1, , , 1, , , , , 1], [, , , , , , , , , , , , , 1], [, , , , , 1, , , , , , , , 1, 1, , , , , 1, , 1, , , 1, 1], [, , , , , , , , , , , , , , 1]], [, [, 1], , , , , , , , , , , , , , , , , , , , [1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, , , 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, , , , 1, , 1, 1], [, 1, , 1, , 1, , , 1, , , , , 1, , , , , , 1, 1], [, 1, , 1, , , , , 1, , , , 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, , , , , , , , , , , , , , , 1]], [, [, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , 1, 1, , , , 1], [, , , , , , 1], [, , 1], [, 1, 1, , , 1, , 1, , 1, 1, , 1, 1, 1, , , , 1, 1, 1, , , , , 1], , [, 1, , , , 1, , , , , , 1, , , 1, , , , 1, 1, , 1], [, , , , , , , 1, , , , , , , , , 1], [, 1, , , , 1, 1, , , , , , 1, 1, 1, , , , 1, , 1, 1], [, , , , , , , 1, , 1, , , , , , , , , , 1], [, 1, 1, , , , , , 1, 1, , , , 1, , , , , , , 1, , , 1], , [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , , 1, , , 1, , , , , 1, , 1, , 1, , 1, , , , , 1], [1, 1, 1, 1, 1, 1, 1, 1, , , , , 1, 1, , 1, 1, , 1, , , 1, , 1], [, , , , , , , , , , , , , , 1, , , , , , 1], , [, , , , , , , , , 1, , , , , , 1, , , , , 1], [, , 1, , , , , , , 1, , , 1, 1], [, , , 1, , , , , 1, , , , , 1, , , , , , 1, , , , 1], [1, , 1, 1, , 1, 1, 1, 1, 1, , 1, , , , 1, 1, 1, , , 1, 1, , , , 1, 1], , [1, 1, , , , , , , , , , 1, , 1, , 1, , , 1], [, , , , 1, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , 1, , , , , 1, , 1], [, , , , , , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, , 1, , , 1, , , , , , , , 1, , , , , , 1, , , , 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, , , , , , , 1, , 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], [1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, , 1, , 1, , 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1], [1, 1, 1, 1, , 1, , , , , , 1, , 1, , , , , 1, 1, , , , , 1], [1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1, 1, , 1, , 1], [, 1, 1, 1, 1, , , , , 1, , 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , , , , 1, , 1, , 1, , , 1, , , 1, 1, , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , , , , , 1, , , , , 1, 1, , , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , , 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, 1, , 1, 1, 1, 1, 1, , , 1, , 1, , 1], [1, 1, 1, , 1, 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1], [, , 1, , , , , , , , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , , , , , 1, 1, 1, 1, 1, , , , 1, 1, 1, , 1, 1, 1], [1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1], [, 1, 1, 1, , 1, , 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, , , 1, 1], [1, 1, , , , 1, , , 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, 1, , 1, , 1], [, 1, , , , , , , 1, , 1, , 1, 1, 1, 1, , , , , , , , , 1]], [, [, , , , , , , , , , , , , 1, 1, , , , 1], [, 1, , , , , , , , 1, , , 1, , , , , , 1, , , 1, , , , 1], , [, 1, , , , 1, , 1, , 1, 1, , 1, 1, , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1], [, , , , , , , , , 1], [1, 1, 1, , , 1, , , , , , , , , 1, 1, , , , , , , , , , 1], [, 1, , , , , , , , , , , , , 1], [, , , , , , , , , , , , , , , , , , , 1, , , 1], [, , , , , , , , , 1], [1, 1, , , , , , 1, 1, 1, , 1, 1, , , , 1, 1, , 1, , 1, 1, 1, , 1], [, 1, 1, 1, , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, , , 1, , 1, , , , 1, 1, 1, 1, , 1, 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , 1, 1, , 1, , 1, , , 1, , , 1, , 1], [, , , , , , , , , , , 1], [, , , , , , , , , 1, , , , , , , , , , , , , 1], , [1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , 1, 1, , 1, , , , , 1, , , 1, , 1], [, 1, , , , 1, , , 1, , , , , , , , 1, , 1, , , 1], [, , , , , , , , , , , , , 1, 1, , , , 1, , , 1], [, , , , , 1, , , 1, , , , 1], [, 1], , [, 1], [1, , , , , , , , , , , , , , 1, , , , , 1]], [, [, 1, , , , 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, , 1, 1, , 1, 1, , , 1], [, , 1, , , , , , , , , 1], , , [1, , , 1, 1, , , , , , , , 1, 1, , 1, 1, , 1], , [, , , , , , , , , , , , , , , , , , 1, , 1], , [1, , , 1, 1, , 1, 1, , , , , 1, , 1, , , , , 1, 1, , 1], , [, 1, , , , , , , , 1, 1, 1, 1, 1, , 1, 1, , , , 1, 1], [, , , , , , , , , , , , , , , , 1, , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1], [, , , , , , , , , , , 1, , 1, , , 1], [1, , , , , , , , , , , , , , , , , , 1, , 1], , , [, 1, , , , , , , , , , , , , , 1, , , , 1, 1], [, , , , , , , , , 1, , , 1, , , , , , , , , , 1], [, , , , , , , , , , , , , , , 1], [, , , , , , , , , , , , , 1, 1, , , , , , 1], , [, 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , , 1, 1, , 1, 1, 1, 1, 1, 1, , , 1, 1, 1, 1, 1, , 1, 1], [, 1, , , , , , , , 1], [, , , , 1, , , 1, , , 1, 1, , , , , , , , , , 1, , , , 1], [, 1, , 1, 1, , , 1, 1, 1, , , , 1, 1, 1, 1, , 1, 1, 1, 1, , 1], [, , , , , , , 1], [, 1, 1, , , , , 1, , 1, , , , , , 1, , , , , , 1, , 1, , 1], [, 1, , , , , , 1, , , , 1, , , , , , , , , , 1], [, , 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1, 1, 1, 1, , 1], [, 1, , , , , , , , 1], [, 1, 1, , 1, , , , , , , , 1, , , , , , 1, , , 1, , 1, , 1], [, 1, , 1, , 1, , 1, 1, 1, , 1, 1, 1, , 1, , , 1, 1, , 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , , 1, 1, , , , 1, 1, 1, , , , 1, 1, , , 1, 1], [, , 1, 1, 1, 1, , 1, , 1, , 1, , 1, 1, 1, 1, , , , , 1, , 1, , 1], [1, 1, 1, 1, 1, 1, 1, 1, , 1, , 1, , 1, 1, 1, , , 1, 1, , , , 1, , 1], [, , , 1], , [, 1, 1, , 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, , 1, 1, 1, 1, 1, 1], [, 1, , , , , , 1, , 1, , 1, , , , , , , 1, 1, , 1, 1], [, , , , , , 1, , 1, 1, , 1, , 1, , , , , , , , , , 1], [, 1, 1, , 1, , , , 1, , , , 1, 1, 1, , , , 1, , 1, 1, 1, , 1, 1], , [, 1, 1, , , , , , , , , , , , , 1, , , 1, , , , , 1], [, 1, , , , , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , , , , , , 1, , , , 1, , , , , 1, , , , , , , 1]], [, [, 1, 1, 1, 1, 1, , 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1], [, 1, 1, 1, 1, 1, , 1, , 1, 1, , , 1, 1, 1, 1, , 1, , , , , 1, 1, 1], [, , 1, 1, , 1, , 1, 1, , , , 1, 1, 1, 1, , , 1, , 1, 1, 1, 1, , 1], [, 1, , 1, , , , , , , , 1, , 1, , 1, , , , , , , , , , 1], [, , 1, , 1, , , 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1], [, 1], [, 1, 1, , 1, , 1, 1, , 1, , , 1, 1, 1, , , , 1, , , 1, , 1], [1, 1, , 1, 1, 1, , , , , , , , , , , , , 1, , 1, 1, 1], [, 1, 1, , , , , , , 1, , , 1, , 1, , 1, , 1, 1, , , 1, , , 1], [, , 1, , , , , , , , , , , , , , , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, 1, 1, 1, , 1, , 1, , , , , 1, 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , 1, 1, 1, 1, , , , 1, 1], [, , , 1, 1, , , 1, , 1, , 1, , 1, 1, 1, 1, , 1, , , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, 1, , 1, 1, , 1, , 1, , , , 1, 1, , , 1, 1, , 1, 1, , 1], [, 1, 1, 1, 1, 1, , , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1], [, 1, 1, , 1, , , 1, , , 1, , 1, 1, 1, 1, 1, , 1, , 1, 1], [, , , , , 1, , , , 1, , , , , 1, 1, , , , 1], [, 1, , 1, 1, 1, , 1, , , 1, 1, 1, , , 1, , , 1, , 1, , , 1], [, , 1, , , , , , , , , 1, , 1, , , , , 1, , 1], [, 1, 1, , , , , , , , 1, 1, 1, , , , , , , , 1, , , , , 1], [, , , , , , , , 1, , , , , 1, , , 1]], [, [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, 1, , 1, 1, , , 1, 1, 1, 1, 1, 1, 1, 1, , , , , , , , , 1, 1], [, , , , , , , , 1, , , , 1, , 1, , 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, 1, , 1, , 1, , , , 1, 1, , 1, , 1, , , , 1, 1, 1, 1, 1, , , 1], , [, 1, , , , , , , , 1, , , 1, 1, , , 1, , 1, 1, , 1, , 1], [, 1, , , 1, , , , , , , , 1, , , , , , , 1], [1, 1, , , , , 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1], , [, 1, , , , , , 1, , 1, , 1, 1, 1, 1, 1, , , 1, , 1, 1, , , , 1], [, 1, 1, , , 1, , 1, , 1, , , 1, 1, 1, 1, , , 1, , , 1, , , , 1], [, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , , , 1, , 1], [, 1, , , 1, 1, , 1, 1, , , 1, 1, , 1, 1, , 1, , 1, , 1], [1, , 1, , , , , 1, , 1, , 1, 1, 1, 1, , , , , 1, 1, , , , 1, 1], [, 1, 1, , , , , 1, 1, , , 1, , 1, 1, 1, 1, , , , , , , , , , 1], , [, 1, 1, , , 1, , , , 1, , 1, 1, 1, 1, 1, , , , 1, , , , 1, , 1], [, , , 1, 1, , , 1, , , , , 1, , 1, 1, 1, , 1, 1, , , , , , 1], [, 1, , , , , , , , , , , 1, , , , 1, , , , , , , 1, , 1], [, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, , 1, 1, 1, , 1, 1, , 1, 1, 1, 1], [, 1, , , , , , , , , , , , , , , , , , , 1], [, 1, , , , , , 1, , , , , 1, , 1, , , 1, 1, , 1, 1, , 1], [, 1, , , , , , 1, , , , , 1, 1, , , , , , , , 1, , , , 1], [, , , , , , , , , , , , , , , , , , 1, , , 1, , , , , 1], [, , , , , , , 1, , , , 1]], [, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, , 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , 1, , 1, , , , , , , 1, , , , , , , , 1, , , 1], [, 1, , , , , , , 1], [, , , , , , , , , , 1], [, 1, , , , , , 1, 1, , , , , , 1], , [, 1, 1, , , , , , 1, , , , , 1, 1, , , , 1], [1, , 1, , 1, , , , , 1, , , , , 1, , , , , , , , , 1, 1], [, 1, 1, , , , , , , , , 1, 1, 1, 1, , , , 1, , , , , 1, , , 1], , [, 1, 1, , 1, , , 1, 1, , , 1, , , 1, 1, 1, , 1, , 1, 1, 1, , , , 1], [, , , , , 1, , , , , 1, , , 1, 1, , , 1, , 1, , , , 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, 1, , , 1, 1, , 1, , , , 1, , , , , , , , 1], [, , , 1, , , , , 1, , , , , 1, , 1, , 1, 1, 1], [, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], [, , , , , 1], [, 1, , , , , , 1, , , , , , , 1, 1, 1, , , 1], [, 1, , , , , , , , , , 1, 1, 1, , , , , 1, , , 1], [, , , , , 1, , 1, , , , , 1, 1, 1, , 1, 1, , 1, 1, 1, , , 1, 1], [1, 1, , , , , , , 1, , , , , 1, 1, , , , , , , , , , , 1], , [, 1], [, , , , , , , , , , , , , , , , , , , , , , , , 1], [, , 1, , , , , 1, , , 1, , , , 1, , 1], [, 1, , , , , , , , , 1]]];
      function Rf(e2) {
        e2 = Array.isArray(e2) ? e2 : Tf;
        var r2 = [];
        return e2.forEach(function(e3, t2) {
          var n2 = String.fromCharCode(t2 + 96).replace("`", "");
          Array.isArray(e3) ? r2 = r2.concat(Rf(e3).map(function(e4) {
            return n2 + e4;
          })) : r2.push(n2);
        }), r2;
      }
      var Of = function(e2) {
        for (var t2 = Tf; e2.length < 3; ) e2 += "`";
        for (var n2 = 0; n2 <= e2.length - 1; n2++) if (!(t2 = t2[e2.charCodeAt(n2) - 96])) return false;
        return true;
      }, Ed = (oe(_f, p), ve(_f, [{ key: "props", get: function() {
        return this._props;
      } }, { key: "attr", value: function(e2) {
        return null != (e2 = this._attrs[e2]) ? e2 : null;
      } }, { key: "hasAttr", value: function(e2) {
        return void 0 !== this._attrs[e2];
      } }, { key: "attrNames", get: function() {
        return Object.keys(this._attrs);
      } }]));
      function _f(e2) {
        var t2, r2, a2;
        return ge(this, _f), (t2 = ne(this, _f))._props = function(e3) {
          var t3 = null != (t3 = e3.nodeName) ? t3 : Pf[e3.nodeType], n2 = null != (n2 = null != (n2 = e3.nodeType) ? n2 : Mf[e3.nodeName]) ? n2 : 1, r3 = (E("number" == typeof n2, "nodeType has to be a number, got '".concat(n2, "'")), E("string" == typeof t3, "nodeName has to be a string, got '".concat(t3, "'")), t3 = t3.toLowerCase(), null);
          "input" === t3 && (r3 = (e3.type || e3.attributes && e3.attributes.type || "").toLowerCase(), Nf().includes(r3) || (r3 = "text"));
          e3 = h({}, e3, { nodeType: n2, nodeName: t3 });
          r3 && (e3.type = r3);
          return delete e3.attributes, Object.freeze(e3);
        }(e2), t2._attrs = (e2 = (e2 = e2).attributes, r2 = void 0 === e2 ? {} : e2, a2 = { htmlFor: "for", className: "class" }, Object.keys(r2).reduce(function(e3, t3) {
          var n2 = r2[t3];
          return E("object" !== te(n2) || null === n2, "expects attributes not to be an object, '".concat(t3, "' was")), void 0 !== n2 && (e3[a2[t3] || t3] = null !== n2 ? String(n2) : null), e3;
        }, {})), t2;
      }
      var Sf, Mf = { "#cdata-section": 2, "#text": 3, "#comment": 8, "#document": 9, "#document-fragment": 11 }, Pf = {}, If = (Object.keys(Mf).forEach(function(e2) {
        Pf[Mf[e2]] = e2;
      }), Ed), Bf = function(t2, n2) {
        if (t2 = t2 || function() {
        }, n2 = n2 || axe.log, !axe._audit) throw new Error("No audit configured");
        var r2 = axe.utils.queue(), a2 = [], e2 = (Object.keys(axe.plugins).forEach(function(e3) {
          r2.defer(function(t3) {
            function n3(e4) {
              a2.push(e4), t3();
            }
            try {
              axe.plugins[e3].cleanup(t3, n3);
            } catch (e4) {
              n3(e4);
            }
          });
        }), axe.utils.getFlattenedTree(document.body));
        axe.utils.querySelectorAll(e2, "iframe, frame").forEach(function(n3) {
          r2.defer(function(e3, t3) {
            return axe.utils.sendCommandToFrame(n3.actualNode, { command: "cleanup-plugin" }, e3, t3);
          });
        }), r2.then(function(e3) {
          0 === a2.length ? t2(e3) : n2(a2);
        }).catch(n2);
      }, jf = {};
      function Lf(e2) {
        return jf.hasOwnProperty(e2);
      }
      function qf(e2) {
        return "string" == typeof e2 && jf[e2] ? jf[e2] : "function" == typeof e2 ? e2 : Sf;
      }
      function zf(e2) {
        var t2 = axe._audit;
        if (!t2) throw new Error("No audit configured");
        if (e2.axeVersion || e2.ver) {
          var n2 = e2.axeVersion || e2.ver;
          if (!/^\d+\.\d+\.\d+(-canary)?/.test(n2)) throw new Error("Invalid configured version ".concat(n2));
          var r2 = D(n2.split("-"), 2), a2 = r2[0], r2 = r2[1], a2 = D(a2.split(".").map(Number), 3), o2 = a2[0], i2 = a2[1], a2 = a2[2], l2 = D(axe.version.split("-"), 2), u2 = l2[0], l2 = l2[1], u2 = D(u2.split(".").map(Number), 3), s2 = u2[0], c2 = u2[1], u2 = u2[2];
          if (o2 !== s2 || c2 < i2 || c2 === i2 && u2 < a2 || o2 === s2 && i2 === c2 && a2 === u2 && r2 && r2 !== l2) throw new Error("Configured version ".concat(n2, " is not compatible with current axe version ").concat(axe.version));
        }
        if (e2.reporter && ("function" == typeof e2.reporter || Lf(e2.reporter)) && (t2.reporter = e2.reporter), e2.checks) {
          if (!Array.isArray(e2.checks)) throw new TypeError("Checks property must be an array");
          e2.checks.forEach(function(e3) {
            if (!e3.id) throw new TypeError("Configured check ".concat(JSON.stringify(e3), " is invalid. Checks must be an object with at least an id property"));
            t2.addCheck(e3);
          });
        }
        var d2, p2 = [];
        if (e2.rules) {
          if (!Array.isArray(e2.rules)) throw new TypeError("Rules property must be an array");
          e2.rules.forEach(function(e3) {
            if (!e3.id) throw new TypeError("Configured rule ".concat(JSON.stringify(e3), " is invalid. Rules must be an object with at least an id property"));
            p2.push(e3.id), t2.addRule(e3);
          });
        }
        if (e2.disableOtherRules && t2.rules.forEach(function(e3) {
          false === p2.includes(e3.id) && (e3.enabled = false);
        }), void 0 !== e2.branding ? t2.setBranding(e2.branding) : t2._constructHelpUrls(), e2.tagExclude && (t2.tagExclude = e2.tagExclude), e2.locale && t2.applyLocale(e2.locale), e2.standards && (d2 = e2.standards, Object.keys(cu).forEach(function(e3) {
          d2[e3] && (cu[e3] = ki(cu[e3], d2[e3]));
        })), e2.noHtml && (t2.noHtml = true), e2.allowedOrigins) {
          if (!Array.isArray(e2.allowedOrigins)) throw new TypeError("Allowed origins property must be an array");
          if (e2.allowedOrigins.includes("*")) throw new Error('"*" is not allowed. Use "'.concat(f.allOrigins, '" instead'));
          t2.setAllowedOrigins(e2.allowedOrigins);
        }
      }
      function Vf(e2) {
        var t2 = (e2 = e2 || []).length ? axe._audit.rules.filter(function(t3) {
          return !!e2.filter(function(e3) {
            return -1 !== t3.tags.indexOf(e3);
          }).length;
        }) : axe._audit.rules, n2 = axe._audit.data.rules || {};
        return t2.map(function(e3) {
          var t3 = n2[e3.id] || {};
          return { ruleId: e3.id, description: t3.description, help: t3.help, helpUrl: t3.helpUrl, tags: e3.tags, actIds: e3.actIds };
        });
      }
      function $f(e2, t2, n2) {
        if (!["SCRIPT", "HEAD", "TITLE", "NOSCRIPT", "STYLE", "TEMPLATE"].includes(e2.nodeName.toUpperCase()) && zs(n2)) {
          n2 = window2.getComputedStyle(e2);
          if ("none" === n2.getPropertyValue("display")) return;
          if ("hidden" === n2.getPropertyValue("visibility")) {
            n2 = s(e2), e2 = n2 && window2.getComputedStyle(n2);
            if (!e2 || "hidden" !== e2.getPropertyValue("visibility")) return;
          }
        }
        return true;
      }
      var Hf = {}, Uf = (Se(Hf, { getAllCells: function() {
        return Uf;
      }, getCellPosition: function() {
        return gu;
      }, getHeaders: function() {
        return Wf;
      }, getScope: function() {
        return bu;
      }, isColumnHeader: function() {
        return vu;
      }, isDataCell: function() {
        return Yf;
      }, isDataTable: function() {
        return Kf;
      }, isHeader: function() {
        return Xf;
      }, isRowHeader: function() {
        return yu;
      }, toArray: function() {
        return hu;
      }, toGrid: function() {
        return hu;
      }, traverse: function() {
        return Zf;
      } }), function(e2) {
        for (var t2, n2, r2 = [], a2 = 0, o2 = e2.rows.length; a2 < o2; a2++) for (t2 = 0, n2 = e2.rows[a2].cells.length; t2 < n2; t2++) r2.push(e2.rows[a2].cells[t2]);
        return r2;
      });
      function Gf(e2, t2, n2) {
        for (var r2, a2 = "row" === e2 ? "_rowHeaders" : "_colHeaders", o2 = "row" === e2 ? yu : vu, i2 = n2[t2.y][t2.x], l2 = i2.colSpan - 1, u2 = i2.getAttribute("rowspan"), u2 = 0 === parseInt(u2) || 0 === i2.rowspan ? n2.length : i2.rowSpan, i2 = t2.y + (u2 - 1), s2 = t2.x + l2, c2 = "row" === e2 ? t2.y : 0, d2 = "row" === e2 ? 0 : t2.x, p2 = [], f2 = i2; c2 <= f2 && !r2; f2--) for (var m2 = s2; d2 <= m2; m2--) {
          var h2 = n2[f2] ? n2[f2][m2] : void 0;
          if (h2) {
            var g2 = axe.utils.getNodeFromTree(h2);
            if (g2[a2]) {
              r2 = g2[a2];
              break;
            }
            p2.push(h2);
          }
        }
        return r2 = (r2 || []).concat(p2.filter(o2)), p2.forEach(function(e3) {
          axe.utils.getNodeFromTree(e3)[a2] = r2;
        }), r2;
      }
      var Wf = function(e2, t2) {
        if (e2.getAttribute("headers")) {
          var n2 = nu(e2, "headers");
          if (n2.filter(function(e3) {
            return e3;
          }).length) return n2;
        }
        return t2 = t2 || hu(Pi(e2, "table")), n2 = gu(e2, t2), e2 = Gf("row", n2, t2), n2 = Gf("col", n2, t2), [].concat(e2, n2).reverse();
      }, Yf = function(e2) {
        var t2;
        return !(!e2.children.length && !e2.textContent.trim()) && (t2 = e2.getAttribute("role"), pu(t2) ? ["cell", "gridcell"].includes(t2) : "TD" === e2.nodeName.toUpperCase());
      }, Kf = function(e2) {
        var t2 = (e2.getAttribute("role") || "").toLowerCase();
        if (("presentation" === t2 || "none" === t2) && !F(e2)) return false;
        if ("true" === e2.getAttribute("contenteditable") || Pi(e2, '[contenteditable="true"]')) return true;
        if ("grid" === t2 || "treegrid" === t2 || "table" === t2) return true;
        if ("landmark" === Ks(t2)) return true;
        if ("0" === e2.getAttribute("datatable")) return false;
        if (e2.getAttribute("summary")) return true;
        if (e2.tHead || e2.tFoot || e2.caption) return true;
        for (var n2 = 0, r2 = e2.children.length; n2 < r2; n2++) if ("COLGROUP" === e2.children[n2].nodeName.toUpperCase()) return true;
        for (var a2, o2, i2, l2 = 0, u2 = e2.rows.length, s2 = false, c2 = 0; c2 < u2; c2++) for (var d2, p2 = 0, f2 = (d2 = e2.rows[c2]).cells.length; p2 < f2; p2++) {
          if ("TH" === (a2 = d2.cells[p2]).nodeName.toUpperCase()) return true;
          if (s2 || a2.offsetWidth === a2.clientWidth && a2.offsetHeight === a2.clientHeight || (s2 = true), a2.getAttribute("scope") || a2.getAttribute("headers") || a2.getAttribute("abbr")) return true;
          if (["columnheader", "rowheader"].includes((a2.getAttribute("role") || "").toLowerCase())) return true;
          if (1 === a2.children.length && "ABBR" === a2.children[0].nodeName.toUpperCase()) return true;
          l2++;
        }
        if (e2.getElementsByTagName("table").length) return false;
        if (u2 < 2) return false;
        if (1 === (t2 = e2.rows[Math.ceil(u2 / 2)]).cells.length && 1 === t2.cells[0].colSpan) return false;
        if (5 <= t2.cells.length) return true;
        if (s2) return true;
        for (var m2 = 0; m2 < u2; m2++) {
          if (d2 = e2.rows[m2], o2 && o2 !== window2.getComputedStyle(d2).getPropertyValue("background-color")) return true;
          if (o2 = window2.getComputedStyle(d2).getPropertyValue("background-color"), i2 && i2 !== window2.getComputedStyle(d2).getPropertyValue("background-image")) return true;
          i2 = window2.getComputedStyle(d2).getPropertyValue("background-image");
        }
        return 20 <= u2 || !(rl(e2).width > 0.95 * al(window2).width || l2 < 10 || e2.querySelector("object, embed, iframe, applet"));
      }, Xf = function(e2) {
        return !(!vu(e2) && !yu(e2)) || !!e2.getAttribute("id") && (e2 = m(e2.getAttribute("id")), !!document.querySelector('[headers~="'.concat(e2, '"]')));
      }, Zf = function(e2, t2, n2, r2) {
        if (Array.isArray(t2) && (r2 = n2, n2 = t2, t2 = { x: 0, y: 0 }), "string" == typeof e2) switch (e2) {
          case "left":
            e2 = { x: -1, y: 0 };
            break;
          case "up":
            e2 = { x: 0, y: -1 };
            break;
          case "right":
            e2 = { x: 1, y: 0 };
            break;
          case "down":
            e2 = { x: 0, y: 1 };
        }
        return function e3(t3, n3, r3, a2) {
          var o2, i2 = r3[n3.y] ? r3[n3.y][n3.x] : void 0;
          return i2 ? "function" == typeof a2 && true === (o2 = a2(i2, n3, r3)) ? [i2] : ((o2 = e3(t3, { x: n3.x + t3.x, y: n3.y + t3.y }, r3, a2)).unshift(i2), o2) : [];
        }(e2, { x: t2.x + e2.x, y: t2.y + e2.y }, n2, r2);
      };
      function Jf(e2) {
        var t2 = Uf(e2), r2 = this, a2 = [], t2 = (t2.forEach(function(e3) {
          var t3 = e3.getAttribute("headers"), t3 = (t3 && (a2 = a2.concat(t3.split(/\s+/))), e3.getAttribute("aria-labelledby"));
          t3 && (a2 = a2.concat(t3.split(/\s+/)));
        }), t2.filter(function(e3) {
          return "" !== C(e3.textContent) && ("TH" === e3.nodeName.toUpperCase() || -1 !== ["rowheader", "columnheader"].indexOf(e3.getAttribute("role")));
        })), o2 = hu(e2), i2 = true;
        return t2.forEach(function(t3) {
          var e3, n2;
          t3.getAttribute("id") && a2.includes(t3.getAttribute("id")) || (e3 = gu(t3, o2), n2 = false, (n2 = !(n2 = vu(t3) ? Zf("down", e3, o2).find(function(e4) {
            return !vu(e4) && Wf(e4, o2).includes(t3);
          }) : n2) && yu(t3) ? Zf("right", e3, o2).find(function(e4) {
            return !yu(e4) && Wf(e4, o2).includes(t3);
          }) : n2) || r2.relatedNodes(t3), i2 = i2 && n2);
        }), !!i2 || void 0;
      }
      var Qf = {}, em = (Se(Qf, { allowedAttr: function() {
        return em;
      }, arialabelText: function() {
        return ou;
      }, arialabelledbyText: function() {
        return au;
      }, getAccessibleRefs: function() {
        return nm;
      }, getElementUnallowedRoles: function() {
        return im;
      }, getExplicitRole: function() {
        return c;
      }, getImplicitRole: function() {
        return Lu;
      }, getOwnedVirtual: function() {
        return Gu;
      }, getRole: function() {
        return d;
      }, getRoleType: function() {
        return Ks;
      }, getRolesByType: function() {
        return um;
      }, getRolesWithNameFromContents: function() {
        return pm;
      }, implicitNodes: function() {
        return mm;
      }, implicitRole: function() {
        return Lu;
      }, isAccessibleRef: function() {
        return hm;
      }, isAriaRoleAllowedOnElement: function() {
        return rm;
      }, isComboboxPopup: function() {
        return gm;
      }, isUnsupportedRole: function() {
        return du;
      }, isValidRole: function() {
        return pu;
      }, label: function() {
        return vm;
      }, labelVirtual: function() {
        return Ns;
      }, lookupTable: function() {
        return fm;
      }, namedFromContents: function() {
        return Uu;
      }, requiredAttr: function() {
        return ym;
      }, requiredContext: function() {
        return wm;
      }, requiredOwned: function() {
        return Dm;
      }, validateAttr: function() {
        return Em;
      }, validateAttrValue: function() {
        return xm;
      } }), function(e2) {
        var e2 = A.ariaRoles[e2], t2 = w(mu());
        return e2 && (e2.allowedAttrs && t2.push.apply(t2, w(e2.allowedAttrs)), e2.requiredAttrs) && t2.push.apply(t2, w(e2.requiredAttrs)), t2;
      }), tm = /^idrefs?$/, nm = function(e2) {
        e2 = e2.actualNode || e2;
        var t2 = (t2 = y(e2)).documentElement || t2, n2 = v.get("idRefsByRoot", function() {
          return /* @__PURE__ */ new Map();
        }), r2 = n2.get(t2);
        return r2 || (r2 = /* @__PURE__ */ new Map(), n2.set(t2, r2), function e3(t3, n3, r3) {
          if (t3.hasAttribute) {
            var a2;
            "LABEL" === t3.nodeName.toUpperCase() && t3.hasAttribute("for") && (a2 = t3.getAttribute("for"), n3.has(a2) ? n3.get(a2).push(t3) : n3.set(a2, [t3]));
            for (var o2 = 0; o2 < r3.length; ++o2) {
              var i2 = r3[o2];
              if (i2 = C(t3.getAttribute(i2) || "")) {
                var l2, u2 = x(ap(i2));
                try {
                  for (u2.s(); !(l2 = u2.n()).done; ) {
                    var s2 = l2.value;
                    n3.has(s2) ? n3.get(s2).push(t3) : n3.set(s2, [t3]);
                  }
                } catch (e4) {
                  u2.e(e4);
                } finally {
                  u2.f();
                }
              }
            }
          }
          for (var c2 = 0; c2 < t3.childNodes.length; c2++) 1 === t3.childNodes[c2].nodeType && e3(t3.childNodes[c2], n3, r3);
        }(t2, r2, Object.keys(A.ariaAttrs).filter(function(e3) {
          e3 = A.ariaAttrs[e3].type;
          return tm.test(e3);
        }))), null != (n2 = r2.get(e2.id)) ? n2 : [];
      }, rm = function(e2, t2) {
        var e2 = e2 instanceof p ? e2 : g(e2), n2 = Lu(e2), e2 = ju(e2);
        return Array.isArray(e2.allowedRoles) ? e2.allowedRoles.includes(t2) : t2 !== n2 && !!e2.allowedRoles;
      }, am = ["doc-backlink", "doc-biblioentry", "doc-biblioref", "doc-cover", "doc-endnote", "doc-glossref", "doc-noteref"], om = { header: "banner", footer: "contentinfo" }, im = function(e2) {
        var r2, t2, a2 = !(1 < arguments.length && void 0 !== arguments[1]) || arguments[1], o2 = l(e2).vNode;
        return Yp(o2) ? (e2 = o2.props.nodeName, r2 = Lu(o2) || om[e2], e2 = [], ((t2 = o2) ? (t2.hasAttr("role") && (t2 = ap(t2.attr("role").toLowerCase()), e2 = e2.concat(t2)), e2.filter(function(e3) {
          return pu(e3);
        })) : e2).filter(function(e3) {
          var t3 = o2, n2 = r2;
          return !(a2 && e3 === n2 || (!am.includes(e3) || Ks(e3) === n2) && rm(t3, e3));
        })) : [];
      }, lm = function(t2) {
        return Object.keys(A.ariaRoles).filter(function(e2) {
          return A.ariaRoles[e2].type === t2;
        });
      }, um = function(e2) {
        return lm(e2);
      }, sm = function() {
        return v.get("ariaRolesNameFromContent", function() {
          return Object.keys(A.ariaRoles).filter(function(e2) {
            return A.ariaRoles[e2].nameFromContent;
          });
        });
      };
      function cm(e2) {
        return null === e2;
      }
      function dm(e2) {
        return null !== e2;
      }
      var pm = function() {
        return sm();
      }, fm = ((An = { attributes: { "aria-activedescendant": { type: "idref", allowEmpty: true, unsupported: false }, "aria-atomic": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-autocomplete": { type: "nmtoken", values: ["inline", "list", "both", "none"], unsupported: false }, "aria-busy": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-checked": { type: "nmtoken", values: ["true", "false", "mixed", "undefined"], unsupported: false }, "aria-colcount": { type: "int", unsupported: false }, "aria-colindex": { type: "int", unsupported: false }, "aria-colspan": { type: "int", unsupported: false }, "aria-controls": { type: "idrefs", allowEmpty: true, unsupported: false }, "aria-current": { type: "nmtoken", allowEmpty: true, values: ["page", "step", "location", "date", "time", "true", "false"], unsupported: false }, "aria-describedby": { type: "idrefs", allowEmpty: true, unsupported: false }, "aria-describedat": { unsupported: true, unstandardized: true }, "aria-details": { type: "idref", allowEmpty: true, unsupported: false }, "aria-disabled": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-dropeffect": { type: "nmtokens", values: ["copy", "move", "reference", "execute", "popup", "none"], unsupported: false }, "aria-errormessage": { type: "idref", allowEmpty: true, unsupported: false }, "aria-expanded": { type: "nmtoken", values: ["true", "false", "undefined"], unsupported: false }, "aria-flowto": { type: "idrefs", allowEmpty: true, unsupported: false }, "aria-grabbed": { type: "nmtoken", values: ["true", "false", "undefined"], unsupported: false }, "aria-haspopup": { type: "nmtoken", allowEmpty: true, values: ["true", "false", "menu", "listbox", "tree", "grid", "dialog"], unsupported: false }, "aria-hidden": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-invalid": { type: "nmtoken", allowEmpty: true, values: ["true", "false", "spelling", "grammar"], unsupported: false }, "aria-keyshortcuts": { type: "string", allowEmpty: true, unsupported: false }, "aria-label": { type: "string", allowEmpty: true, unsupported: false }, "aria-labelledby": { type: "idrefs", allowEmpty: true, unsupported: false }, "aria-level": { type: "int", unsupported: false }, "aria-live": { type: "nmtoken", values: ["off", "polite", "assertive"], unsupported: false }, "aria-modal": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-multiline": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-multiselectable": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-orientation": { type: "nmtoken", values: ["horizontal", "vertical"], unsupported: false }, "aria-owns": { type: "idrefs", allowEmpty: true, unsupported: false }, "aria-placeholder": { type: "string", allowEmpty: true, unsupported: false }, "aria-posinset": { type: "int", unsupported: false }, "aria-pressed": { type: "nmtoken", values: ["true", "false", "mixed", "undefined"], unsupported: false }, "aria-readonly": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-relevant": { type: "nmtokens", values: ["additions", "removals", "text", "all"], unsupported: false }, "aria-required": { type: "boolean", values: ["true", "false"], unsupported: false }, "aria-roledescription": { type: "string", allowEmpty: true, unsupported: false }, "aria-rowcount": { type: "int", unsupported: false }, "aria-rowindex": { type: "int", unsupported: false }, "aria-rowspan": { type: "int", unsupported: false }, "aria-selected": { type: "nmtoken", values: ["true", "false", "undefined"], unsupported: false }, "aria-setsize": { type: "int", unsupported: false }, "aria-sort": { type: "nmtoken", values: ["ascending", "descending", "other", "none"], unsupported: false }, "aria-valuemax": { type: "decimal", unsupported: false }, "aria-valuemin": { type: "decimal", unsupported: false }, "aria-valuenow": { type: "decimal", unsupported: false }, "aria-valuetext": { type: "string", unsupported: false } }, globalAttributes: ["aria-atomic", "aria-busy", "aria-controls", "aria-current", "aria-describedby", "aria-details", "aria-disabled", "aria-dropeffect", "aria-flowto", "aria-grabbed", "aria-haspopup", "aria-hidden", "aria-invalid", "aria-keyshortcuts", "aria-label", "aria-labelledby", "aria-live", "aria-owns", "aria-relevant", "aria-roledescription"] }).role = { alert: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, alertdialog: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-modal", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["dialog", "section"] }, application: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage", "aria-activedescendant"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["article", "audio", "embed", "iframe", "object", "section", "svg", "video"] }, article: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["article"], unsupported: false }, banner: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["header"], unsupported: false, allowedElements: ["section"] }, button: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-pressed", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ["button", 'input[type="button"]', 'input[type="image"]', 'input[type="reset"]', 'input[type="submit"]', "summary"], unsupported: false, allowedElements: [{ nodeName: "a", attributes: { href: dm } }] }, cell: { type: "structure", attributes: { allowed: ["aria-colindex", "aria-colspan", "aria-rowindex", "aria-rowspan", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["row"], implicit: ["td", "th"], unsupported: false }, checkbox: { type: "widget", attributes: { allowed: ["aria-checked", "aria-required", "aria-readonly", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ['input[type="checkbox"]'], unsupported: false, allowedElements: ["button"] }, columnheader: { type: "structure", attributes: { allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["row"], implicit: ["th"], unsupported: false }, combobox: { type: "composite", attributes: { allowed: ["aria-autocomplete", "aria-required", "aria-activedescendant", "aria-orientation", "aria-errormessage"], required: ["aria-expanded"] }, owned: { all: ["listbox", "tree", "grid", "dialog", "textbox"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: [{ nodeName: "input", properties: { type: ["text", "search", "tel", "url", "email"] } }] }, command: { nameFrom: ["author"], type: "abstract", unsupported: false }, complementary: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["aside"], unsupported: false, allowedElements: ["section"] }, composite: { nameFrom: ["author"], type: "abstract", unsupported: false }, contentinfo: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["footer"], unsupported: false, allowedElements: ["section"] }, definition: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["dd", "dfn"], unsupported: false }, dialog: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-modal", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["dialog"], unsupported: false, allowedElements: ["section"] }, directory: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, unsupported: false, allowedElements: ["ol", "ul"] }, document: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["body"], unsupported: false, allowedElements: ["article", "embed", "iframe", "object", "section", "svg"] }, "doc-abstract": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-acknowledgments": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-afterword": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-appendix": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-backlink": { type: "link", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, unsupported: false, allowedElements: [{ nodeName: "a", attributes: { href: dm } }] }, "doc-biblioentry": { type: "listitem", attributes: { allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: ["doc-bibliography"], unsupported: false, allowedElements: ["li"] }, "doc-bibliography": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: { one: ["doc-biblioentry"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-biblioref": { type: "link", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, unsupported: false, allowedElements: [{ nodeName: "a", attributes: { href: dm } }] }, "doc-chapter": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-colophon": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-conclusion": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-cover": { type: "img", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false }, "doc-credit": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-credits": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-dedication": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-endnote": { type: "listitem", attributes: { allowed: ["aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: ["doc-endnotes"], unsupported: false, allowedElements: ["li"] }, "doc-endnotes": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: { one: ["doc-endnote"] }, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-epigraph": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false }, "doc-epilogue": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-errata": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-example": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["aside", "section"] }, "doc-footnote": { type: "section", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["aside", "footer", "header"] }, "doc-foreword": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-glossary": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: ["term", "definition"], namefrom: ["author"], context: null, unsupported: false, allowedElements: ["dl"] }, "doc-glossref": { type: "link", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author", "contents"], context: null, unsupported: false, allowedElements: [{ nodeName: "a", attributes: { href: dm } }] }, "doc-index": { type: "navigation", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["nav", "section"] }, "doc-introduction": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-noteref": { type: "link", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author", "contents"], context: null, unsupported: false, allowedElements: [{ nodeName: "a", attributes: { href: dm } }] }, "doc-notice": { type: "note", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-pagebreak": { type: "separator", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["hr"] }, "doc-pagelist": { type: "navigation", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["nav", "section"] }, "doc-part": { type: "landmark", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-preface": { type: "landmark", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-prologue": { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-pullquote": { type: "none", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["aside", "section"] }, "doc-qna": { type: "section", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, "doc-subtitle": { type: "sectionhead", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: { nodeName: ["h1", "h2", "h3", "h4", "h5", "h6"] } }, "doc-tip": { type: "note", attributes: { allowed: ["aria-expanded"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["aside"] }, "doc-toc": { type: "navigation", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, namefrom: ["author"], context: null, unsupported: false, allowedElements: ["nav", "section"] }, feed: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: { one: ["article"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["article", "aside", "section"] }, figure: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ["figure"], unsupported: false }, form: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["form"], unsupported: false }, grid: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-colcount", "aria-level", "aria-multiselectable", "aria-readonly", "aria-rowcount", "aria-errormessage"] }, owned: { one: ["rowgroup", "row"] }, nameFrom: ["author"], context: null, implicit: ["table"], unsupported: false }, gridcell: { type: "widget", attributes: { allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-selected", "aria-readonly", "aria-required", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["row"], implicit: ["td", "th"], unsupported: false }, group: { type: "structure", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["details", "optgroup"], unsupported: false, allowedElements: ["dl", "figcaption", "fieldset", "figure", "footer", "header", "ol", "ul"] }, heading: { type: "structure", attributes: { required: ["aria-level"], allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ["h1", "h2", "h3", "h4", "h5", "h6"], unsupported: false }, img: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["img"], unsupported: false, allowedElements: ["embed", "iframe", "object", "svg"] }, input: { nameFrom: ["author"], type: "abstract", unsupported: false }, landmark: { nameFrom: ["author"], type: "abstract", unsupported: false }, link: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ["a[href]", "area[href]"], unsupported: false, allowedElements: ["button", { nodeName: "input", properties: { type: ["image", "button"] } }] }, list: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: { all: ["listitem"] }, nameFrom: ["author"], context: null, implicit: ["ol", "ul", "dl"], unsupported: false }, listbox: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-multiselectable", "aria-readonly", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"] }, owned: { all: ["option"] }, nameFrom: ["author"], context: null, implicit: ["select"], unsupported: false, allowedElements: ["ol", "ul"] }, listitem: { type: "structure", attributes: { allowed: ["aria-level", "aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["list"], implicit: ["li", "dt"], unsupported: false }, log: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, main: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["main"], unsupported: false, allowedElements: ["article", "section"] }, marquee: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, math: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["math"], unsupported: false }, menu: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"] }, owned: { one: ["menuitem", "menuitemradio", "menuitemcheckbox"] }, nameFrom: ["author"], context: null, implicit: ['menu[type="context"]'], unsupported: false, allowedElements: ["ol", "ul"] }, menubar: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"] }, owned: { one: ["menuitem", "menuitemradio", "menuitemcheckbox"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["ol", "ul"] }, menuitem: { type: "widget", attributes: { allowed: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["menu", "menubar"], implicit: ['menuitem[type="command"]'], unsupported: false, allowedElements: ["button", "li", { nodeName: "iput", properties: { type: ["image", "button"] } }, { nodeName: "a", attributes: { href: dm } }] }, menuitemcheckbox: { type: "widget", attributes: { allowed: ["aria-checked", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["menu", "menubar"], implicit: ['menuitem[type="checkbox"]'], unsupported: false, allowedElements: [{ nodeName: ["button", "li"] }, { nodeName: "input", properties: { type: ["checkbox", "image", "button"] } }, { nodeName: "a", attributes: { href: dm } }] }, menuitemradio: { type: "widget", attributes: { allowed: ["aria-checked", "aria-selected", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["menu", "menubar"], implicit: ['menuitem[type="radio"]'], unsupported: false, allowedElements: [{ nodeName: ["button", "li"] }, { nodeName: "input", properties: { type: ["image", "button", "radio"] } }, { nodeName: "a", attributes: { href: dm } }] }, navigation: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["nav"], unsupported: false, allowedElements: ["section"] }, none: { type: "structure", attributes: null, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: [{ nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"] }, { nodeName: "img", attributes: { alt: dm } }] }, note: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["aside"] }, option: { type: "widget", attributes: { allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-checked", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["listbox"], implicit: ["option"], unsupported: false, allowedElements: [{ nodeName: ["button", "li"] }, { nodeName: "input", properties: { type: ["checkbox", "button"] } }, { nodeName: "a", attributes: { href: dm } }] }, presentation: { type: "structure", attributes: null, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: [{ nodeName: ["article", "aside", "dl", "embed", "figcaption", "fieldset", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hr", "iframe", "li", "ol", "section", "ul"] }, { nodeName: "img", attributes: { alt: dm } }] }, progressbar: { type: "widget", attributes: { allowed: ["aria-valuetext", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["progress"], unsupported: false }, radio: { type: "widget", attributes: { allowed: ["aria-selected", "aria-posinset", "aria-setsize", "aria-required", "aria-errormessage", "aria-checked"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ['input[type="radio"]'], unsupported: false, allowedElements: [{ nodeName: ["button", "li"] }, { nodeName: "input", properties: { type: ["image", "button"] } }] }, radiogroup: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-required", "aria-expanded", "aria-readonly", "aria-errormessage", "aria-orientation"] }, owned: { all: ["radio"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: { nodeName: ["ol", "ul", "fieldset"] } }, range: { nameFrom: ["author"], type: "abstract", unsupported: false }, region: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["section[aria-label]", "section[aria-labelledby]", "section[title]"], unsupported: false, allowedElements: { nodeName: ["article", "aside"] } }, roletype: { type: "abstract", unsupported: false }, row: { type: "structure", attributes: { allowed: ["aria-activedescendant", "aria-colindex", "aria-expanded", "aria-level", "aria-selected", "aria-rowindex", "aria-errormessage"] }, owned: { one: ["cell", "columnheader", "rowheader", "gridcell"] }, nameFrom: ["author", "contents"], context: ["rowgroup", "grid", "treegrid", "table"], implicit: ["tr"], unsupported: false }, rowgroup: { type: "structure", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-errormessage"] }, owned: { all: ["row"] }, nameFrom: ["author", "contents"], context: ["grid", "table", "treegrid"], implicit: ["tbody", "thead", "tfoot"], unsupported: false }, rowheader: { type: "structure", attributes: { allowed: ["aria-colindex", "aria-colspan", "aria-expanded", "aria-rowindex", "aria-rowspan", "aria-required", "aria-readonly", "aria-selected", "aria-sort", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["row"], implicit: ["th"], unsupported: false }, scrollbar: { type: "widget", attributes: { required: ["aria-controls", "aria-valuenow"], allowed: ["aria-valuetext", "aria-orientation", "aria-errormessage", "aria-valuemax", "aria-valuemin"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false }, search: { type: "landmark", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: { nodeName: ["aside", "form", "section"] } }, searchbox: { type: "widget", attributes: { allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ['input[type="search"]'], unsupported: false, allowedElements: { nodeName: "input", properties: { type: "text" } } }, section: { nameFrom: ["author", "contents"], type: "abstract", unsupported: false }, sectionhead: { nameFrom: ["author", "contents"], type: "abstract", unsupported: false }, select: { nameFrom: ["author"], type: "abstract", unsupported: false }, separator: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-orientation", "aria-valuenow", "aria-valuemax", "aria-valuemin", "aria-valuetext", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["hr"], unsupported: false, allowedElements: ["li"] }, slider: { type: "widget", attributes: { allowed: ["aria-valuetext", "aria-orientation", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"], required: ["aria-valuenow"] }, owned: null, nameFrom: ["author"], context: null, implicit: ['input[type="range"]'], unsupported: false }, spinbutton: { type: "widget", attributes: { allowed: ["aria-valuetext", "aria-required", "aria-readonly", "aria-errormessage", "aria-valuemax", "aria-valuemin"], required: ["aria-valuenow"] }, owned: null, nameFrom: ["author"], context: null, implicit: ['input[type="number"]'], unsupported: false, allowedElements: { nodeName: "input", properties: { type: ["text", "tel"] } } }, status: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ["output"], unsupported: false, allowedElements: ["section"] }, structure: { type: "abstract", unsupported: false }, switch: { type: "widget", attributes: { allowed: ["aria-errormessage"], required: ["aria-checked"] }, owned: null, nameFrom: ["author", "contents"], context: null, unsupported: false, allowedElements: ["button", { nodeName: "input", properties: { type: ["checkbox", "image", "button"] } }, { nodeName: "a", attributes: { href: dm } }] }, tab: { type: "widget", attributes: { allowed: ["aria-selected", "aria-expanded", "aria-setsize", "aria-posinset", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["tablist"], unsupported: false, allowedElements: [{ nodeName: ["button", "h1", "h2", "h3", "h4", "h5", "h6", "li"] }, { nodeName: "input", properties: { type: "button" } }, { nodeName: "a", attributes: { href: dm } }] }, table: { type: "structure", attributes: { allowed: ["aria-colcount", "aria-rowcount", "aria-errormessage"] }, owned: { one: ["rowgroup", "row"] }, nameFrom: ["author", "contents"], context: null, implicit: ["table"], unsupported: false }, tablist: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-level", "aria-multiselectable", "aria-orientation", "aria-errormessage"] }, owned: { all: ["tab"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["ol", "ul"] }, tabpanel: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["section"] }, term: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, implicit: ["dt"], unsupported: false }, textbox: { type: "widget", attributes: { allowed: ["aria-activedescendant", "aria-autocomplete", "aria-multiline", "aria-readonly", "aria-required", "aria-placeholder", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ['input[type="text"]', 'input[type="email"]', 'input[type="password"]', 'input[type="tel"]', 'input[type="url"]', "input:not([type])", "textarea"], unsupported: false }, timer: { type: "widget", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, unsupported: false }, toolbar: { type: "structure", attributes: { allowed: ["aria-activedescendant", "aria-expanded", "aria-orientation", "aria-errormessage"] }, owned: null, nameFrom: ["author"], context: null, implicit: ['menu[type="toolbar"]'], unsupported: false, allowedElements: ["ol", "ul"] }, tooltip: { type: "structure", attributes: { allowed: ["aria-expanded", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: null, unsupported: false }, tree: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-multiselectable", "aria-required", "aria-expanded", "aria-orientation", "aria-errormessage"] }, owned: { all: ["treeitem"] }, nameFrom: ["author"], context: null, unsupported: false, allowedElements: ["ol", "ul"] }, treegrid: { type: "composite", attributes: { allowed: ["aria-activedescendant", "aria-colcount", "aria-expanded", "aria-level", "aria-multiselectable", "aria-readonly", "aria-required", "aria-rowcount", "aria-orientation", "aria-errormessage"] }, owned: { one: ["rowgroup", "row"] }, nameFrom: ["author"], context: null, unsupported: false }, treeitem: { type: "widget", attributes: { allowed: ["aria-checked", "aria-selected", "aria-expanded", "aria-level", "aria-posinset", "aria-setsize", "aria-errormessage"] }, owned: null, nameFrom: ["author", "contents"], context: ["group", "tree"], unsupported: false, allowedElements: ["li", { nodeName: "a", attributes: { href: dm } }] }, widget: { type: "abstract", unsupported: false }, window: { nameFrom: ["author"], type: "abstract", unsupported: false } }, An.implicitHtmlRole = Eu, An.elementsAllowedNoRole = [{ nodeName: ["base", "body", "caption", "col", "colgroup", "datalist", "dd", "details", "dt", "head", "html", "keygen", "label", "legend", "main", "map", "math", "meta", "meter", "noscript", "optgroup", "param", "picture", "progress", "script", "source", "style", "template", "textarea", "title", "track"] }, { nodeName: "area", attributes: { href: dm } }, { nodeName: "input", properties: { type: ["color", "data", "datatime", "file", "hidden", "month", "number", "password", "range", "reset", "submit", "time", "week"] } }, { nodeName: "link", attributes: { href: dm } }, { nodeName: "menu", attributes: { type: "context" } }, { nodeName: "menuitem", attributes: { type: ["command", "checkbox", "radio"] } }, { nodeName: "select", condition: function(e2) {
        return e2 instanceof axe.AbstractVirtualNode || (e2 = axe.utils.getNodeFromTree(e2)), 1 < Number(e2.attr("size"));
      }, properties: { multiple: true } }, { nodeName: ["clippath", "cursor", "defs", "desc", "feblend", "fecolormatrix", "fecomponenttransfer", "fecomposite", "feconvolvematrix", "fediffuselighting", "fedisplacementmap", "fedistantlight", "fedropshadow", "feflood", "fefunca", "fefuncb", "fefuncg", "fefuncr", "fegaussianblur", "feimage", "femerge", "femergenode", "femorphology", "feoffset", "fepointlight", "fespecularlighting", "fespotlight", "fetile", "feturbulence", "filter", "hatch", "hatchpath", "lineargradient", "marker", "mask", "meshgradient", "meshpatch", "meshrow", "metadata", "mpath", "pattern", "radialgradient", "solidcolor", "stop", "switch", "view"] }], An.elementsAllowedAnyRole = [{ nodeName: "a", attributes: { href: cm } }, { nodeName: "img", attributes: { alt: cm } }, { nodeName: ["abbr", "address", "canvas", "div", "p", "pre", "blockquote", "ins", "del", "output", "span", "table", "tbody", "thead", "tfoot", "td", "em", "strong", "small", "s", "cite", "q", "dfn", "abbr", "time", "code", "var", "samp", "kbd", "sub", "sup", "i", "b", "u", "mark", "ruby", "rt", "rp", "bdi", "bdo", "br", "wbr", "th", "tr"] }], An.evaluateRoleForElement = { A: function(e2) {
        var t2 = e2.node, e2 = e2.out;
        return "http://www.w3.org/2000/svg" === t2.namespaceURI || !t2.href.length || e2;
      }, AREA: function(e2) {
        return !e2.node.href;
      }, BUTTON: function(e2) {
        var t2 = e2.node, n2 = e2.role, e2 = e2.out;
        return "menu" === t2.getAttribute("type") ? "menuitem" === n2 : e2;
      }, IMG: function(e2) {
        var t2 = e2.node, n2 = e2.role, r2 = e2.out;
        switch (t2.alt) {
          case null:
            return r2;
          case "":
            return "presentation" === n2 || "none" === n2;
          default:
            return "presentation" !== n2 && "none" !== n2;
        }
      }, INPUT: function(e2) {
        var t2 = e2.node, n2 = e2.role, r2 = e2.out;
        switch (t2.type) {
          case "button":
          case "image":
            return r2;
          case "checkbox":
            return "button" === n2 && t2.hasAttribute("aria-pressed") ? true : r2;
          case "radio":
            return "menuitemradio" === n2;
          case "text":
            return "combobox" === n2 || "searchbox" === n2 || "spinbutton" === n2;
          case "tel":
            return "combobox" === n2 || "spinbutton" === n2;
          case "url":
          case "search":
          case "email":
            return "combobox" === n2;
          default:
            return false;
        }
      }, LI: function(e2) {
        var t2 = e2.node, e2 = e2.out;
        return !axe.utils.matchesSelector(t2, "ol li, ul li") || e2;
      }, MENU: function(e2) {
        return "context" !== e2.node.getAttribute("type");
      }, OPTION: function(e2) {
        e2 = e2.node;
        return !axe.utils.matchesSelector(e2, "select > option, datalist > option, optgroup > option");
      }, SELECT: function(e2) {
        var t2 = e2.node, e2 = e2.role;
        return !t2.multiple && t2.size <= 1 && "menu" === e2;
      }, SVG: function(e2) {
        var t2 = e2.node, e2 = e2.out;
        return !(!t2.parentNode || "http://www.w3.org/2000/svg" !== t2.parentNode.namespaceURI) || e2;
      } }, An.rolesOfType = { widget: ["button", "checkbox", "dialog", "gridcell", "link", "log", "marquee", "menuitem", "menuitemcheckbox", "menuitemradio", "option", "progressbar", "radio", "scrollbar", "searchbox", "slider", "spinbutton", "status", "switch", "tab", "tabpanel", "textbox", "timer", "tooltip", "tree", "treeitem"] }, An), mm = function(e2) {
        var t2 = null, e2 = fm.role[e2];
        return t2 = e2 && e2.implicit ? Do(e2.implicit) : t2;
      }, hm = function(e2) {
        return !!nm(e2).length;
      };
      function gm(e2) {
        var t2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).popupRoles, n2 = d(e2);
        if (!(t2 = null != t2 ? t2 : iu["aria-haspopup"].values).includes(n2)) return false;
        t2 = function(e3) {
          for (; e3 = e3.parent; ) if (null !== d(e3, { noPresentational: true })) return e3;
          return null;
        }(e2);
        if (bm(t2)) return true;
        n2 = e2.props.id;
        if (!n2) return false;
        if (e2.actualNode) return t2 = _i(e2.actualNode).querySelectorAll('[aria-owns~="'.concat(n2, '"][role~="combobox"]:not(select),\n     [aria-controls~="').concat(n2, '"][role~="combobox"]:not(select)')), Array.from(t2).some(bm);
        throw new Error("Unable to determine combobox popup without an actualNode");
      }
      var bm = function(e2) {
        return e2 && "combobox" === d(e2);
      }, vm = function(e2) {
        return e2 = g(e2), Ns(e2);
      }, ym = function(e2) {
        return (e2 = A.ariaRoles[e2]) && Array.isArray(e2.requiredAttrs) ? w(e2.requiredAttrs) : [];
      }, wm = function(e2) {
        return (e2 = A.ariaRoles[e2]) && Array.isArray(e2.requiredContext) ? w(e2.requiredContext) : null;
      }, Dm = function(e2) {
        return (e2 = A.ariaRoles[e2]) && Array.isArray(e2.requiredOwned) ? w(e2.requiredOwned) : null;
      }, xm = function(e2, t2) {
        var n2, r2 = (e2 = e2 instanceof p ? e2 : g(e2)).attr(t2), a2 = A.ariaAttrs[t2];
        if (!a2) return true;
        if (a2.allowEmpty && (!r2 || "" === r2.trim())) return true;
        switch (a2.type) {
          case "boolean":
            return ["true", "false"].includes(r2.toLowerCase());
          case "nmtoken":
            return "string" == typeof r2 && a2.values.includes(r2.toLowerCase());
          case "nmtokens":
            return (n2 = ap(r2)).reduce(function(e3, t3) {
              return e3 && a2.values.includes(t3);
            }, 0 !== n2.length);
          case "idref":
            try {
              var o2 = y(e2.actualNode);
              return !(!r2 || !o2.getElementById(r2));
            } catch (e3) {
              throw new TypeError("Cannot resolve id references for partial DOM");
            }
          case "idrefs":
            return nu(e2, t2).some(function(e3) {
              return !!e3;
            });
          case "string":
            return "" !== r2.trim();
          case "decimal":
            return !(!(n2 = r2.match(/^[-+]?([0-9]*)\.?([0-9]*)$/)) || !n2[1] && !n2[2]);
          case "int":
            o2 = void 0 !== a2.minValue ? a2.minValue : -1 / 0;
            return /^[-+]?[0-9]+$/.test(r2) && parseInt(r2) >= o2;
        }
      }, Em = function(e2) {
        return !!A.ariaAttrs[e2];
      };
      function Fm(e2) {
        var t2 = [], n2 = Uf(e2), r2 = hu(e2);
        return n2.forEach(function(e3) {
          Vs(e3) && Yf(e3) && !vm(e3) && !Wf(e3, r2).some(function(e4) {
            return null !== e4 && !!Vs(e4);
          }) && t2.push(e3);
        }), !t2.length || (this.relatedNodes(t2), false);
      }
      function Am(e2, t2) {
        return e2 = e2.getAttribute("scope").toLowerCase(), -1 !== t2.values.indexOf(e2);
      }
      function Cm(e2, t2, n2) {
        var r2;
        if (void 0 !== n2.children) return r2 = n2.attr("summary"), !(!(n2 = !!(n2 = n2.children.find(km)) && C(ss(n2))) || !r2) && C(r2).toLowerCase() === C(n2).toLowerCase();
      }
      function km(e2) {
        return "caption" === e2.props.nodeName;
      }
      function Nm(e2) {
        return !Ys(document) || "TH" === e2.nodeName.toUpperCase();
      }
      function Tm(e2) {
        var t2 = hu(e2), r2 = t2[0];
        return t2.length <= 1 || r2.length <= 1 || e2.rows.length <= 1 || r2.reduce(function(e3, t3, n2) {
          return e3 || t3 !== r2[n2 + 1] && void 0 !== r2[n2 + 1];
        }, false);
      }
      function Rm(e2, t2, n2) {
        if (n2.children) {
          n2 = n2.children.find(function(e3) {
            return "title" === e3.props.nodeName;
          });
          if (!n2) return this.data({ messageKey: "noTitle" }), false;
          try {
            if ("" === ss(n2, { includeHidden: true }).trim()) return this.data({ messageKey: "emptyTitle" }), false;
          } catch (e3) {
            return;
          }
          return true;
        }
      }
      var Om = {};
      function _m(e2, t2, n2) {
        var r2 = n2.props.nodeName, a2 = (n2.attr("type") || "").toLowerCase();
        return (n2 = n2.attr("value")) && this.data({ messageKey: "has-label" }), !("input" !== r2 || !["submit", "reset"].includes(a2)) && null === n2;
      }
      function Sm(e2, t2, n2) {
        var r2 = n2.props.nodeName;
        return !!["img", "input", "area"].includes(r2) && n2.hasAttr("alt");
      }
      function Mm() {
      }
      function Pm() {
        var e2 = document.title;
        return !!C(e2);
      }
      function Im(t2, e2) {
        return !(0 < (e2 = e2.cssProperties.filter(function(e3) {
          if ("important" === t2.style.getPropertyPriority(e3)) return e3;
        })).length && (this.data(e2), 1));
      }
      function Bm(e2, t2, n2) {
        try {
          return !!C(au(n2));
        } catch (e3) {
        }
      }
      function jm(e2, t2, n2) {
        return !!C(ou(n2));
      }
      function Lm(t2) {
        var e2, n2 = t2.getAttribute("id").trim();
        return !n2 || (e2 = y(t2), (e2 = Array.from(e2.querySelectorAll('[id="'.concat(m(n2), '"]'))).filter(function(e3) {
          return e3 !== t2;
        })).length && this.relatedNodes(e2), this.data(n2), 0 === e2.length);
      }
      function qm(e2) {
        var t2 = [];
        return e2.filter(function(e3) {
          return -1 === t2.indexOf(e3.data) && (t2.push(e3.data), true);
        });
      }
      function zm(e2, t2, n2) {
        return n2 = C(n2.attr("title")).toLowerCase(), this.data(n2), true;
      }
      function Vm(e2) {
        var t2 = {};
        return e2.forEach(function(e3) {
          t2[e3.data] = void 0 !== t2[e3.data] ? ++t2[e3.data] : 0;
        }), e2.forEach(function(e3) {
          e3.result = !!t2[e3.data];
        }), e2;
      }
      function $m(e2) {
        return !!(e2 = Ul(e2, "href")) && (k(e2) || void 0);
      }
      Se(Om, { getAriaRolesByType: function() {
        return lm;
      }, getAriaRolesSupportingNameFromContent: function() {
        return sm;
      }, getElementSpec: function() {
        return ju;
      }, getElementsByContentType: function() {
        return fu;
      }, getGlobalAriaAttrs: function() {
        return mu;
      }, implicitHtmlRoles: function() {
        return Eu;
      } }), b1 = ll;
      var Hm = ["alert", "log", "status"];
      function Um(e2) {
        return ["none", "presentation"].includes(d(e2)) && !qs(e2);
      }
      function Gm(e2, t2) {
        var n2 = e2.actualNode, r2 = d(e2), n2 = (n2.getAttribute("aria-live") || "").toLowerCase().trim(), a2 = lm("landmark");
        return !!(["assertive", "polite"].includes(n2) || Hm.includes(r2) || a2.includes(r2) || t2.regionMatcher && Bu(e2, t2.regionMatcher));
      }
      function Wm(e2) {
        var o2 = e2.filter(function(e3) {
          return e3.data.isIframe;
        });
        return e2.forEach(function(e3) {
          if (!e3.result && 1 !== e3.node.ancestry.length) {
            var t2, n2 = e3.node.ancestry.slice(0, -1), r2 = x(o2);
            try {
              for (r2.s(); !(t2 = r2.n()).done; ) {
                var a2 = t2.value;
                if (Zp(n2, a2.node.ancestry)) {
                  e3.result = a2.result;
                  break;
                }
              }
            } catch (e4) {
              r2.e(e4);
            } finally {
              r2.f();
            }
          }
        }), o2.forEach(function(e3) {
          e3.result || (e3.result = true);
        }), e2;
      }
      function Ym(e2) {
        e2 = window2.getComputedStyle(function(e3) {
          for (var t2 = e3, n2 = e3.textContent.trim(), r2 = n2; r2 === n2 && void 0 !== t2; ) {
            var a2 = -1;
            if (0 === (e3 = t2).children.length) return e3;
            for (; a2++, "" === (r2 = e3.children[a2].textContent.trim()) && a2 + 1 < e3.children.length; ) ;
            t2 = e3.children[a2];
          }
          return e3;
        }(e2));
        return { fontWeight: function(e3) {
          switch (e3) {
            case "lighter":
              return 100;
            case "normal":
              return 400;
            case "bold":
              return 700;
            case "bolder":
              return 900;
          }
          return e3 = parseInt(e3), isNaN(e3) ? 400 : e3;
        }(e2.getPropertyValue("font-weight")), fontSize: parseInt(e2.getPropertyValue("font-size")), isItalic: "italic" === e2.getPropertyValue("font-style") };
      }
      function Km(n2, r2, e2) {
        return e2.reduce(function(e3, t2) {
          return e3 || (!t2.size || n2.fontSize / t2.size > r2.fontSize) && (!t2.weight || n2.fontWeight - t2.weight > r2.fontWeight) && (!t2.italic || n2.isItalic && !r2.isItalic);
        }, false);
      }
      function Xm(e2, t2, n2) {
        var r2 = (i2 = Array.from(e2.parentNode.children)).indexOf(e2), a2 = (t2 = t2 || {}).margins || [], o2 = i2.slice(r2 + 1).find(function(e3) {
          return "P" === e3.nodeName.toUpperCase();
        }), i2 = i2.slice(0, r2).reverse().find(function(e3) {
          return "P" === e3.nodeName.toUpperCase();
        }), r2 = Ym(e2), l2 = o2 ? Ym(o2) : null, i2 = i2 ? Ym(i2) : null, u2 = t2.passLength, t2 = t2.failLength, e2 = e2.textContent.trim().length;
        return (o2 = null == o2 ? void 0 : o2.textContent.trim().length) * u2 < e2 || !l2 || !Km(r2, l2, a2) || !!((u2 = Mi(n2, "blockquote")) && "BLOCKQUOTE" === u2.nodeName.toUpperCase() || i2 && !Km(r2, i2, a2) || o2 * t2 < e2) && void 0;
      }
      var Zm = /[;,\s]/, Jm = /^[0-9.]+$/;
      function Qm(e2, t2, n2) {
        return yf(n2, "a[href]").some(function(e3) {
          return /^#[^/!]/.test(e3.attr("href"));
        });
      }
      Se(En = {}, { aria: function() {
        return Qf;
      }, color: function() {
        return eh;
      }, dom: function() {
        return Oi;
      }, forms: function() {
        return Oh;
      }, matches: function() {
        return Bu;
      }, math: function() {
        return dl;
      }, standards: function() {
        return Om;
      }, table: function() {
        return Hf;
      }, text: function() {
        return tu;
      }, utils: function() {
        return Ra;
      } });
      var eh = {}, th = (Se(eh, { Color: function() {
        return O;
      }, centerPointOfRect: function() {
        return th;
      }, elementHasImage: function() {
        return rc;
      }, elementIsDistinct: function() {
        return rh;
      }, filteredRectStack: function() {
        return oh;
      }, flattenColors: function() {
        return uh;
      }, flattenShadowColors: function() {
        return ch;
      }, getBackgroundColor: function() {
        return Ah;
      }, getBackgroundStack: function() {
        return dh;
      }, getContrast: function() {
        return Nh;
      }, getForegroundColor: function() {
        return Th;
      }, getOwnBackgroundColor: function() {
        return qd;
      }, getRectStack: function() {
        return ah;
      }, getStackingContext: function() {
        return wh;
      }, getStrokeColorsFromShadows: function() {
        return gh;
      }, getTextShadowColors: function() {
        return yh;
      }, hasValidContrastRatio: function() {
        return Rh;
      }, incompleteData: function() {
        return N;
      }, parseTextShadows: function() {
        return vh;
      }, stackingContextToColor: function() {
        return Dh;
      } }), function(e2) {
        if (!(e2.left > window2.innerWidth || e2.top > window2.innerHeight)) return { x: Math.min(Math.ceil(e2.left + e2.width / 2), window2.innerWidth - 1), y: Math.min(Math.ceil(e2.top + e2.height / 2), window2.innerHeight - 1) };
      });
      function nh(e2) {
        return e2.getPropertyValue("font-family").split(/[,;]/g).map(function(e3) {
          return e3.trim().toLowerCase();
        });
      }
      var rh = function(e2, t2) {
        var n2, r2 = window2.getComputedStyle(e2);
        return "none" !== r2.getPropertyValue("background-image") || !!["border-bottom", "border-top", "outline"].reduce(function(e3, t3) {
          var n3 = new O();
          return n3.parseString(r2.getPropertyValue(t3 + "-color")), e3 || "none" !== r2.getPropertyValue(t3 + "-style") && 0 < parseFloat(r2.getPropertyValue(t3 + "-width")) && 0 !== n3.alpha;
        }, false) || (n2 = window2.getComputedStyle(t2), nh(r2)[0] !== nh(n2)[0]) || (e2 = ["text-decoration-line", "text-decoration-style", "font-weight", "font-style", "font-size"].reduce(function(e3, t3) {
          return e3 || r2.getPropertyValue(t3) !== n2.getPropertyValue(t3);
        }, false), (t2 = r2.getPropertyValue("text-decoration")).split(" ").length < 3 ? e2 || t2 !== n2.getPropertyValue("text-decoration") : e2);
      }, ah = function(e2) {
        var t2 = Kl(e2);
        return !(e2 = Is(e2)) || e2.length <= 1 ? [t2] : e2.some(function(e3) {
          return void 0 === e3;
        }) ? null : (e2.splice(0, 0, t2), e2);
      }, oh = function(a2) {
        var o2, i2, l2 = ah(a2);
        return l2 && 1 === l2.length ? l2[0] : l2 && 1 < l2.length ? (o2 = l2.shift(), l2.forEach(function(e2, t2) {
          var n2, r2;
          0 !== t2 && (n2 = l2[t2 - 1], r2 = l2[t2], i2 = n2.every(function(e3, t3) {
            return e3 === r2[t3];
          }) || o2.includes(a2));
        }), i2 ? l2[0] : (N.set("bgColor", "elmPartiallyObscuring"), null)) : (N.set("bgColor", "outsideViewport"), null);
      }, ih = ["hue", "saturation", "color", "luminosity"], lh = { normal: function(e2, t2) {
        return t2;
      }, multiply: function(e2, t2) {
        return t2 * e2;
      }, screen: function(e2, t2) {
        return e2 + t2 - e2 * t2;
      }, overlay: function(e2, t2) {
        return this["hard-light"](t2, e2);
      }, darken: function(e2, t2) {
        return Math.min(e2, t2);
      }, lighten: function(e2, t2) {
        return Math.max(e2, t2);
      }, "color-dodge": function(e2, t2) {
        return 0 === e2 ? 0 : 1 === t2 ? 1 : Math.min(1, e2 / (1 - t2));
      }, "color-burn": function(e2, t2) {
        return 1 === e2 ? 1 : 0 === t2 ? 0 : 1 - Math.min(1, (1 - e2) / t2);
      }, "hard-light": function(e2, t2) {
        return t2 <= 0.5 ? this.multiply(e2, 2 * t2) : this.screen(e2, 2 * t2 - 1);
      }, "soft-light": function(e2, t2) {
        return t2 <= 0.5 ? e2 - (1 - 2 * t2) * e2 * (1 - e2) : e2 + (2 * t2 - 1) * ((e2 <= 0.25 ? ((16 * e2 - 12) * e2 + 4) * e2 : Math.sqrt(e2)) - e2);
      }, difference: function(e2, t2) {
        return Math.abs(e2 - t2);
      }, exclusion: function(e2, t2) {
        return e2 + t2 - 2 * e2 * t2;
      }, hue: function(e2, t2) {
        return t2.setSaturation(e2.getSaturation()).setLuminosity(e2.getLuminosity());
      }, saturation: function(e2, t2) {
        return e2.setSaturation(t2.getSaturation()).setLuminosity(e2.getLuminosity());
      }, color: function(e2, t2) {
        return t2.setLuminosity(e2.getLuminosity());
      }, luminosity: function(e2, t2) {
        return e2.setLuminosity(t2.getLuminosity());
      } };
      function uh(e2, t2) {
        var n2, r2 = function(t3, n3, r3) {
          if (ih.includes(r3)) return lh[r3](t3, n3);
          var a3 = new O();
          return ["r", "g", "b"].forEach(function(e3) {
            a3[e3] = lh[r3](t3[e3], n3[e3]);
          }), a3;
        }(t2, e2, 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : "normal"), a2 = sh(e2.red, e2.alpha, t2.red, t2.alpha, 255 * r2.r), o2 = sh(e2.green, e2.alpha, t2.green, t2.alpha, 255 * r2.g), r2 = sh(e2.blue, e2.alpha, t2.blue, t2.alpha, 255 * r2.b), e2 = (t2 = e2.alpha + t2.alpha * (1 - e2.alpha), e2 = 0, n2 = 1, Math.min(Math.max(e2, t2), n2));
        return 0 === e2 ? new O(a2, o2, r2, e2) : (t2 = Math.round(a2 / e2), n2 = Math.round(o2 / e2), a2 = Math.round(r2 / e2), new O(t2, n2, a2, e2));
      }
      function sh(e2, t2, n2, r2, a2) {
        return t2 * (1 - r2) * e2 + t2 * r2 * a2 + (1 - t2) * r2 * n2;
      }
      function ch(e2, t2) {
        var n2 = e2.alpha, r2 = (1 - n2) * t2.red + n2 * e2.red, a2 = (1 - n2) * t2.green + n2 * e2.green, n2 = (1 - n2) * t2.blue + n2 * e2.blue, t2 = e2.alpha + t2.alpha * (1 - e2.alpha);
        return new O(r2, a2, n2, t2);
      }
      function dh(t2) {
        for (var e2 = Is(t2).map(function(e3) {
          return e3 = function(e4) {
            var t3 = e4.indexOf(document.body), n3 = qd(window2.getComputedStyle(document.documentElement));
            1 < t3 && 0 === n3.alpha && !rc(document.documentElement) && (1 < t3 && (e4.splice(t3, 1), e4.push(document.body)), 0 < (n3 = e4.indexOf(document.documentElement))) && (e4.splice(n3, 1), e4.push(document.documentElement));
            return e4;
          }(e3 = Yd(e3, t2));
        }), n2 = 0; n2 < e2.length; n2++) {
          var r2 = e2[n2];
          if (r2[0] !== t2) return N.set("bgColor", "bgOverlap"), null;
          if (0 !== n2 && !function(e3, t3) {
            if (e3 !== t3) {
              if (null === e3 || null === t3) return;
              if (e3.length !== t3.length) return;
              for (var n3 = 0; n3 < e3.length; ++n3) if (e3[n3] !== t3[n3]) return;
            }
            return 1;
          }(r2, e2[0])) return N.set("bgColor", "elmPartiallyObscuring"), null;
        }
        return e2[0] || null;
      }
      var ph = 0.54, fh = 0.5, mh = 1.5, hh = ["top", "right", "bottom", "left"];
      function gh(e2) {
        var t2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).ignoreEdgeCount, t2 = void 0 !== t2 && t2, e2 = function(e3) {
          var t3, n2 = {}, r2 = x(e3);
          try {
            for (r2.s(); !(t3 = r2.n()).done; ) {
              var a2 = t3.value, o2 = a2.colorStr, i2 = a2.pixels, l2 = (null != n2[o2] || (n2[o2] = { top: [], right: [], bottom: [], left: [] }), n2[o2]), u2 = D(i2, 2), s2 = u2[0], c2 = u2[1];
              fh < s2 ? l2.right.push(s2) : fh < -s2 && l2.left.push(-s2), fh < c2 ? l2.bottom.push(c2) : fh < -c2 && l2.top.push(-c2);
            }
          } catch (e4) {
            r2.e(e4);
          } finally {
            r2.f();
          }
          return n2;
        }(e2), e2 = Object.entries(e2).map(function(e3) {
          var e3 = D(e3, 2), t3 = e3[0], n2 = e3[1], e3 = hh.filter(function(e4) {
            return 0 !== n2[e4].length;
          }).length;
          return { colorStr: t3, sides: n2, edgeCount: e3 };
        });
        return !t2 && e2.some(function(e3) {
          e3 = e3.edgeCount;
          return 1 < e3 && e3 < 4;
        }) ? null : e2.map(bh).filter(function(e3) {
          return null !== e3;
        });
      }
      function bh(e2) {
        var t2, n2, r2 = e2.colorStr, a2 = e2.sides;
        return 4 !== e2.edgeCount ? null : ((e2 = new O()).parseString(r2), n2 = !(t2 = 0), hh.forEach(function(e3) {
          t2 += a2[e3].length / 4, n2 = n2 && a2[e3].every(function(e4) {
            return mh < e4;
          });
        }), n2 || (e2.alpha = 1 - Math.pow(ph, t2)), e2);
      }
      function vh(e2) {
        var t2 = { pixels: [] }, n2 = [t2];
        if (!(o2 = e2.trim())) return [];
        for (; o2; ) {
          var r2 = o2.match(/^[a-z]+(\([^)]+\))?/i) || o2.match(/^#[0-9a-f]+/i), a2 = o2.match(/^([0-9.-]+)px/i) || o2.match(/^(0)/);
          if (r2) E(!t2.colorStr, "Multiple colors identified in text-shadow: ".concat(e2)), o2 = o2.replace(r2[0], "").trim(), t2.colorStr = r2[0];
          else if (a2) {
            E(t2.pixels.length < 3, "Too many pixel units in text-shadow: ".concat(e2));
            var o2 = o2.replace(a2[0], "").trim(), r2 = parseFloat(("." === a2[1][0] ? "0" : "") + a2[1]);
            t2.pixels.push(r2);
          } else {
            if ("," !== o2[0]) throw new Error("Unable to process text-shadows: ".concat(o2));
            E(2 <= t2.pixels.length, "Missing pixel value in text-shadow: ".concat(e2)), n2.push(t2 = { pixels: [] }), o2 = o2.substr(1).trim();
          }
        }
        return n2.forEach(function(e3) {
          e3 = e3.pixels;
          2 === e3.length && e3.push(0);
        }), n2;
      }
      function yh(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = t2.minRatio, r2 = t2.maxRatio, a2 = t2.ignoreEdgeCount, o2 = [], i2 = window2.getComputedStyle(e2), t2 = i2.getPropertyValue("text-shadow");
        if ("none" !== t2) {
          var l2, e2 = i2.getPropertyValue("font-size"), u2 = parseInt(e2), s2 = (E(false === isNaN(u2), "Unable to determine font-size value ".concat(e2)), []), c2 = x(vh(t2));
          try {
            for (c2.s(); !(l2 = c2.n()).done; ) {
              var d2 = l2.value, p2 = d2.colorStr || i2.getPropertyValue("color"), f2 = D(d2.pixels, 3), m2 = f2[0], h2 = f2[1], g2 = f2[2], b2 = void 0 === g2 ? 0 : g2;
              if (!(r2 && u2 * r2 <= b2)) if (n2 && b2 < u2 * n2) s2.push({ colorStr: p2, pixels: d2.pixels });
              else {
                if (0 < s2.length) {
                  var v2 = gh(s2, { ignoreEdgeCount: a2 });
                  if (null === v2) return null;
                  o2.push.apply(o2, w(v2)), s2.splice(0, s2.length);
                }
                var y2 = function(e3) {
                  var t3 = e3.colorStr, n3 = e3.offsetX, r3 = e3.offsetY, a3 = e3.blurRadius, e3 = e3.fontSize;
                  if (a3 < n3 || a3 < r3) return new O(0, 0, 0, 0);
                  n3 = new O();
                  return n3.parseString(t3), n3.alpha *= function(e4, t4) {
                    if (0 === e4) return 1;
                    return 0.185 / (e4 / t4 + 0.4);
                  }(a3, e3), n3;
                }({ colorStr: p2, offsetX: m2, offsetY: h2, blurRadius: b2, fontSize: u2 });
                o2.push(y2);
              }
            }
          } catch (e3) {
            c2.e(e3);
          } finally {
            c2.f();
          }
          if (0 < s2.length) {
            e2 = gh(s2, { ignoreEdgeCount: a2 });
            if (null === e2) return null;
            o2.push.apply(o2, w(e2));
          }
        }
        return o2;
      }
      function wh(e2, t2) {
        var n2, a2, o2, r2 = g(e2);
        return r2._stackingContext || (a2 = [], o2 = /* @__PURE__ */ new Map(), (t2 = null != (n2 = t2) ? n2 : dh(e2)).forEach(function(e3) {
          var e3 = g(e3), t3 = (t3 = e3, (n3 = new O()).parseString(t3.getComputedStylePropertyValue("background-color")), n3), r3 = e3._stackingOrder.filter(function(e4) {
            return !!e4.vNode;
          }), n3 = (r3.forEach(function(e4, t4) {
            var e4 = e4.vNode, n4 = null == (n4 = r3[t4 - 1]) ? void 0 : n4.vNode, n4 = Fh(o2, e4, n4);
            0 !== t4 || o2.get(e4) || a2.unshift(n4), o2.set(e4, n4);
          }), null == (n3 = r3[r3.length - 1]) ? void 0 : n3.vNode), e3 = Fh(o2, e3, n3);
          r3.length || a2.unshift(e3), e3.bgColor = t3;
        }), r2._stackingContext = a2);
      }
      function Dh(e2) {
        var t2;
        return null != (t2 = e2.descendants) && t2.length ? (t2 = uh(e2.descendants.reduce(xh, Eh()), e2.bgColor, e2.descendants[0].blendMode)).alpha *= e2.opacity : (t2 = e2.bgColor).alpha *= e2.opacity, { color: t2, blendMode: e2.blendMode };
      }
      function xh(e2, t2) {
        e2 = e2 instanceof O ? e2 : Dh(e2).color;
        return uh(Dh(t2).color, e2, t2.blendMode);
      }
      function Eh(e2, t2) {
        return { vNode: e2, ancestor: t2, opacity: parseFloat(null != (t2 = null == e2 ? void 0 : e2.getComputedStylePropertyValue("opacity")) ? t2 : 1), bgColor: new O(0, 0, 0, 0), blendMode: (null == e2 ? void 0 : e2.getComputedStylePropertyValue("mix-blend-mode")) || void 0, descendants: [] };
      }
      function Fh(e2, t2, n2) {
        var r2 = e2.get(n2), e2 = null != (e2 = e2.get(t2)) ? e2 : Eh(t2, r2);
        return r2 && n2 !== t2 && !r2.descendants.includes(e2) && r2.descendants.unshift(e2), e2;
      }
      function Ah(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : [], n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0.1, r2 = g(e2), a2 = r2._cache.getBackgroundColor;
        return a2 ? (t2.push.apply(t2, w(a2.bgElms)), N.set("bgColor", a2.incompleteData), a2.bgColor) : (a2 = function(e3, t3, n3) {
          var r3 = dh(e3);
          if (!r3) return null;
          var a3 = Ms(e3), n3 = null != (n3 = yh(e3, { minRatio: n3, ignoreEdgeCount: true })) ? n3 : [];
          n3.length && (n3 = [{ color: n3.reduce(ch) }]);
          for (var o2 = 0; o2 < r3.length; o2++) {
            var i2 = r3[o2], l2 = window2.getComputedStyle(i2);
            if (rc(i2, l2)) return t3.push(i2), null;
            var u2 = qd(l2);
            if (0 !== u2.alpha) {
              if ("inline" !== l2.getPropertyValue("display") && !Ch(i2, a3)) return t3.push(i2), N.set("bgColor", "elmPartiallyObscured"), null;
              if (t3.push(i2), 1 === u2.alpha) break;
            }
          }
          var s2 = wh(e3, r3), s2 = (n3 = s2.map(Dh).concat(n3), function(e4, t4) {
            var n4 = [];
            {
              var r4, a4, o3, i3;
              t4 || (t4 = document.documentElement, i3 = document.body, t4 = window2.getComputedStyle(t4), r4 = window2.getComputedStyle(i3), a4 = qd(t4), o3 = qd(r4), i3 = 0 !== o3.alpha && Ch(i3, e4.getBoundingClientRect()), (0 !== o3.alpha && 0 === a4.alpha || i3 && 1 !== o3.alpha) && n4.unshift({ color: o3, blendMode: kh(r4.getPropertyValue("mix-blend-mode")) }), 0 === a4.alpha) || i3 && 1 === o3.alpha || n4.unshift({ color: a4, blendMode: kh(t4.getPropertyValue("mix-blend-mode")) });
            }
            return n4;
          }(e3, r3.includes(document.body)));
          if (n3.unshift.apply(n3, w(s2)), 0 === n3.length) return new O(255, 255, 255, 1);
          e3 = n3.reduce(function(e4, t4) {
            return uh(t4.color, e4.color instanceof O ? e4.color : e4, t4.blendMode);
          });
          return uh(e3.color instanceof O ? e3.color : e3, new O(255, 255, 255, 1));
        }(e2, t2, n2), r2._cache.getBackgroundColor = { bgColor: a2, bgElms: t2, incompleteData: N.get("bgColor") }, a2);
      }
      function Ch(e2, t2) {
        t2 = Array.isArray(t2) ? t2 : [t2];
        var n2 = e2.getBoundingClientRect(), r2 = n2.right, a2 = n2.bottom, o2 = window2.getComputedStyle(e2).getPropertyValue("overflow");
        return (["scroll", "auto"].includes(o2) || e2 instanceof window2.HTMLHtmlElement) && (r2 = n2.left + e2.scrollWidth, a2 = n2.top + e2.scrollHeight), t2.every(function(e3) {
          return e3.top >= n2.top && e3.bottom <= a2 && e3.left >= n2.left && e3.right <= r2;
        });
      }
      function kh(e2) {
        return e2 || void 0;
      }
      var Nh = function(e2, t2) {
        return t2 && e2 ? (t2.alpha < 1 && (t2 = uh(t2, e2)), e2 = e2.getRelativeLuminance(), t2 = t2.getRelativeLuminance(), (Math.max(t2, e2) + 0.05) / (Math.min(t2, e2) + 0.05)) : null;
      };
      function Th(e2, t2, n2) {
        for (var a2 = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {}, o2 = window2.getComputedStyle(e2), r2 = [], i2 = 0, l2 = [function() {
          var e3, t3, n3 = o2, r3 = void 0 === (r3 = (r3 = a2).textStrokeEmMin) ? 0 : r3;
          return 0 === (t3 = parseFloat(n3.getPropertyValue("-webkit-text-stroke-width"))) || (e3 = n3.getPropertyValue("font-size"), t3 /= parseFloat(e3), isNaN(t3)) || t3 < r3 ? null : (e3 = n3.getPropertyValue("-webkit-text-stroke-color"), new O().parseString(e3));
        }, function() {
          return e3 = o2, new O().parseString(e3.getPropertyValue("-webkit-text-fill-color") || e3.getPropertyValue("color"));
          var e3;
        }, function() {
          return yh(e2, { minRatio: 0 });
        }]; i2 < l2.length; i2++) {
          var u2 = (0, l2[i2])();
          if (u2 && (r2 = r2.concat(u2), 1 === u2.alpha)) break;
        }
        var s2 = r2.reduce(function(e3, t3) {
          return uh(e3, t3);
        });
        return null === (n2 = null == n2 ? Ah(e2, []) : n2) ? (n2 = N.get("bgColor"), N.set("fgColor", n2), null) : uh(function(e3, t3, n3) {
          for (; t3; ) {
            var r3;
            1 === t3.opacity && t3.ancestor ? t3 = t3.ancestor : (e3.alpha *= t3.opacity, r3 = (null == (r3 = t3.ancestor) ? void 0 : r3.descendants) || n3, r3 = (r3 = 1 !== t3.opacity ? r3.slice(0, r3.indexOf(t3)) : r3).map(Dh), t3 = (r3.length && (r3 = r3.reduce(function(e4, t4) {
              return uh(t4.color, e4.color instanceof O ? e4.color : e4);
            }, { color: new O(0, 0, 0, 0), blendMode: "normal" }), e3 = uh(e3, r3)), t3.ancestor));
          }
          return e3;
        }(s2, function e3(t3, n3) {
          var r3, a3 = x(t3);
          try {
            for (a3.s(); !(r3 = a3.n()).done; ) {
              var o3, i3 = r3.value;
              if ((null == (o3 = i3.vNode) ? void 0 : o3.actualNode) === n3) return i3;
              var l3 = e3(i3.descendants, n3);
              if (l3) return l3;
            }
          } catch (e4) {
            a3.e(e4);
          } finally {
            a3.f();
          }
        }(n2 = wh(e2), e2), n2), new O(255, 255, 255, 1));
      }
      var Rh = function(e2, t2, n2, r2) {
        return e2 = Nh(e2, t2), { isValid: (t2 = r2 && Math.ceil(72 * n2) / 96 < 14 || !r2 && Math.ceil(72 * n2) / 96 < 18 ? 4.5 : 3) < e2, contrastRatio: e2, expectedContrastRatio: t2 };
      }, Oh = {}, _h = (Se(Oh, { isAriaCombobox: function() {
        return ts;
      }, isAriaListbox: function() {
        return es;
      }, isAriaRange: function() {
        return rs;
      }, isAriaTextbox: function() {
        return Qu;
      }, isDisabled: function() {
        return Sh;
      }, isNativeSelect: function() {
        return Ju;
      }, isNativeTextbox: function() {
        return Zu;
      } }), ["fieldset", "button", "select", "input", "textarea"]), Sh = function e2(t2) {
        var n2, r2, a2 = t2._isDisabled;
        return "boolean" != typeof a2 && (n2 = t2.props.nodeName, r2 = t2.attr("aria-disabled"), a2 = !(!_h.includes(n2) || !t2.hasAttr("disabled")) || (r2 ? "true" === r2.toLowerCase() : !!t2.parent && e2(t2.parent)), t2._isDisabled = a2), a2;
      };
      function Mh(e2, t2, n2) {
        var n2 = tu.accessibleTextVirtual(n2);
        if (n2 = tu.sanitize(tu.removeUnicode(n2, { emoji: true, nonBmp: true, punctuations: true })).toLowerCase()) return n2 = { name: n2, urlProps: Oi.urlPropsFromAttribute(e2, "href") }, this.data(n2), this.relatedNodes([e2]), true;
      }
      function Ph(e2) {
        if (e2.length < 2) return e2;
        for (var i2 = e2.filter(function(e3) {
          return void 0 !== e3.result;
        }), l2 = [], u2 = {}, t2 = function(n3) {
          var e3 = i2[n3], t3 = e3.data, r2 = t3.name, a2 = t3.urlProps;
          if (u2[r2]) return 1;
          var t3 = i2.filter(function(e4, t4) {
            return e4.data.name === r2 && t4 !== n3;
          }), o2 = t3.every(function(e4) {
            return function n4(r3, a3) {
              var e5, t4;
              return !(!r3 || !a3) && (e5 = Object.getOwnPropertyNames(r3), t4 = Object.getOwnPropertyNames(a3), e5.length === t4.length) && e5.every(function(e6) {
                var t5 = r3[e6], e6 = a3[e6];
                return te(t5) === te(e6) && ("object" === te(t5) || "object" === te(e6) ? n4(t5, e6) : t5 === e6);
              });
            }(e4.data.urlProps, a2);
          });
          t3.length && !o2 && (e3.result = void 0), e3.relatedNodes = [], (o2 = e3.relatedNodes).push.apply(o2, w(t3.map(function(e4) {
            return e4.relatedNodes[0];
          }))), u2[r2] = t3, l2.push(e3);
        }, n2 = 0; n2 < i2.length; n2++) t2(n2);
        return l2;
      }
      function Ih() {
        var e2, t2 = v.get("headingOrder");
        return t2 || (t2 = (e2 = sf(axe._tree[0], "h1, h2, h3, h4, h5, h6, [role=heading], iframe, frame", k)).map(function(e3) {
          return { ancestry: [mo(e3.actualNode)], level: (t3 = (t3 = d(e3 = e3)) && t3.includes("heading"), n2 = e3.attr("aria-level"), r2 = parseInt(n2, 10), e3 = D(e3.props.nodeName.match(/h(\d)/) || [], 2)[1], t3 ? e3 && !n2 ? parseInt(e3, 10) : isNaN(r2) || r2 < 1 ? e3 ? parseInt(e3, 10) : 2 : r2 || -1 : -1) };
          var t3, n2, r2;
        }), this.data({ headingOrder: t2 }), v.set("headingOrder", e2)), true;
      }
      function Bh(e2, t2) {
        var n2 = null == (n2 = t2.data) ? void 0 : n2.headingOrder, r2 = Lh(t2.node.ancestry, 1);
        return n2 && (t2 = n2.map(function(e3) {
          var t3 = r2;
          return t3 = r2.concat(e3.ancestry), h({}, e3, { ancestry: t3 });
        }), -1 === (n2 = function(e3, t3) {
          for (; t3.length; ) {
            var n3 = jh(e3, t3);
            if (-1 !== n3) return n3;
            t3 = Lh(t3, 1);
          }
          return -1;
        }(e2, r2)) ? e2.push.apply(e2, w(t2)) : e2.splice.apply(e2, [n2, 0].concat(w(t2)))), e2;
      }
      function jh(e2, t2) {
        return e2.findIndex(function(e3) {
          return Zp(e3.ancestry, t2);
        });
      }
      function Lh(e2, t2) {
        return e2.slice(0, e2.length - t2);
      }
      function qh(e2, t2) {
        e2 = e2.boundingClientRect, t2 = t2.boundingClientRect;
        return e2.top >= t2.top && e2.left >= t2.left && e2.bottom <= t2.bottom && e2.right <= t2.right;
      }
      function zh(e2) {
        return { width: Math.round(10 * e2.width) / 10, height: Math.round(10 * e2.height) / 10 };
      }
      function Vh(e2, t2) {
        return Ci(e2, t2) && !Jl(t2);
      }
      function $h(e2) {
        return e2.map(function(e3) {
          return e3.actualNode;
        });
      }
      function Hh(e2, t2, n2) {
        var r2, a2 = void 0 === (a2 = (t2 = t2 || {}).scaleMinimum) ? 2 : a2, t2 = void 0 !== (t2 = t2.lowerBound) && t2;
        return !((n2 = n2.attr("content") || "") && (n2 = n2.split(/[;,]/).reduce(function(e3, t3) {
          var n3, t3 = t3.trim();
          return t3 && (n3 = (t3 = D(t3.split("="), 2))[0], t3 = t3[1], n3) && t3 && (n3 = n3.toLowerCase().trim(), t3 = t3.toLowerCase().trim(), "maximum-scale" === n3 && "yes" === t3 && (t3 = 1), "maximum-scale" === n3 && parseFloat(t3) < 0 || (e3[n3] = t3)), e3;
        }, {}), !(t2 && n2["maximum-scale"] && parseFloat(n2["maximum-scale"]) < t2)) && (t2 || "no" !== n2["user-scalable"] ? (r2 = parseFloat(n2["user-scalable"]), !t2 && n2["user-scalable"] && (r2 || 0 === r2) && -1 < r2 && r2 < 1 ? (this.data("user-scalable"), 1) : n2["maximum-scale"] && parseFloat(n2["maximum-scale"]) < a2 && (this.data("maximum-scale"), 1)) : (this.data("user-scalable=no"), 1)));
      }
      function Uh(e2, t2, n2, r2) {
        var r2 = void 0 === (r2 = (r2 || {}).cssom) ? void 0 : r2, a2 = void 0 === (t2 = (t2 || {}).degreeThreshold) ? 0 : t2;
        if (r2 && r2.length) {
          for (var o2 = false, i2 = [], l2 = r2.reduce(function(e3, t3) {
            var n3 = t3.sheet, r3 = t3.root, t3 = t3.shadowId, t3 = t3 || "topDocument";
            return e3[t3] || (e3[t3] = { root: r3, rules: [] }), n3 && n3.cssRules && (r3 = Array.from(n3.cssRules), e3[t3].rules = e3[t3].rules.concat(r3)), e3;
          }, {}), u2 = function() {
            var e3 = c2[s2], e3 = l2[e3], n3 = e3.root, e3 = e3.rules.filter(d2);
            if (!e3.length) return 1;
            e3.forEach(function(e4) {
              e4 = e4.cssRules;
              Array.from(e4).forEach(function(e5) {
                var t3 = function(e6) {
                  var t4 = e6.selectorText, e6 = e6.style;
                  if (!t4 || e6.length <= 0) return false;
                  t4 = e6.transform || e6.webkitTransform || e6.msTransform || false;
                  if (!t4 && !e6.rotate) return false;
                  t4 = function(e7) {
                    var t5;
                    return e7 && (e7 = e7.match(/(rotate|rotateZ|rotate3d|matrix|matrix3d)\(([^)]+)\)(?!.*(rotate|rotateZ|rotate3d|matrix|matrix3d))/)) ? (e7 = D(e7, 3), t5 = e7[1], e7 = e7[2], p2(t5, e7)) : 0;
                  }(t4), e6 = p2("rotate", e6.rotate), t4 += e6;
                  if (!t4) return false;
                  if (t4 = Math.abs(t4), Math.abs(t4 - 180) % 180 <= a2) return false;
                  return Math.abs(t4 - 90) % 90 <= a2;
                }(e5);
                t3 && "HTML" !== e5.selectorText.toUpperCase() && (e5 = Array.from(n3.querySelectorAll(e5.selectorText)) || [], i2 = i2.concat(e5)), o2 = o2 || t3;
              });
            });
          }, s2 = 0, c2 = Object.keys(l2); s2 < c2.length; s2++) u2();
          return o2 ? (i2.length && this.relatedNodes(i2), false) : true;
        }
        function d2(e3) {
          var t3 = e3.type, e3 = e3.cssText;
          return 4 === t3 && (/orientation:\s*landscape/i.test(e3) || /orientation:\s*portrait/i.test(e3));
        }
        function p2(e3, t3) {
          switch (e3) {
            case "rotate":
            case "rotateZ":
              return f2(t3);
            case "rotate3d":
              var n3 = D(t3.split(",").map(function(e4) {
                return e4.trim();
              }), 4), r3 = n3[2], n3 = n3[3];
              return 0 === parseInt(r3) ? void 0 : f2(n3);
            case "matrix":
            case "matrix3d":
              var a3, o3, r3 = t3;
              return (r3 = r3.split(",")).length <= 6 ? (o3 = D(r3, 2), a3 = o3[0], o3 = o3[1], m2(Math.atan2(parseFloat(o3), parseFloat(a3)))) : (o3 = parseFloat(r3[8]), a3 = Math.asin(o3), o3 = Math.cos(a3), m2(Math.acos(parseFloat(r3[0]) / o3)));
            default:
              return 0;
          }
        }
        function f2(e3) {
          var t3 = D(e3.match(/(deg|grad|rad|turn)/) || [], 1)[0];
          if (!t3) return 0;
          var n3 = parseFloat(e3.replace(t3, ""));
          switch (t3) {
            case "rad":
              return m2(n3);
            case "grad":
              var r3 = n3;
              return (r3 %= 400) < 0 && (r3 += 400), Math.round(r3 / 400 * 360);
            case "turn":
              return Math.round(360 / (1 / n3));
            default:
              return parseInt(n3);
          }
        }
        function m2(e3) {
          return Math.round(e3 * (180 / Math.PI));
        }
      }
      function Gh(e2, t2) {
        var n2, r2;
        if (e2.duration) return t2 = void 0 === (t2 = t2.allowedDuration) ? 3 : t2, ((n2 = e2).currentSrc ? (r2 = function(e3) {
          e3 = e3.match(/#t=(.*)/);
          if (e3) return D(e3, 2)[1].split(",").map(function(e4) {
            if (/:/.test(e4)) {
              for (var t3 = e4.split(":"), n3 = 0, r3 = 1; 0 < t3.length; ) n3 += r3 * parseInt(t3.pop(), 10), r3 *= 60;
              return parseFloat(n3);
            }
            return parseFloat(e4);
          });
        }(n2.currentSrc)) ? 1 !== r2.length ? Math.abs(r2[1] - r2[0]) : Math.abs(n2.duration - r2[0]) : Math.abs(n2.duration - (n2.currentTime || 0)) : 0) <= t2 && !e2.hasAttribute("loop") || !!e2.hasAttribute("controls");
        console.warn("axe.utils.preloadMedia did not load metadata");
      }
      function Wh(e2, t2) {
        return !t2.isViolation && void 0;
      }
      function Yh(e2) {
        var n2 = {};
        return e2.filter(function(e3) {
          var t2;
          return "html" !== e3.node.ancestry[e3.node.ancestry.length - 1] ? (t2 = e3.node.ancestry.flat(1 / 0).join(" > "), n2[t2] = e3, true) : (t2 = e3.node.ancestry.slice(0, e3.node.ancestry.length - 1).flat(1 / 0).join(" > "), n2[t2] && (n2[t2].result = true), false);
        });
      }
      function Kh(e2, t2, n2) {
        return !yf(n2, "track").some(function(e3) {
          return "captions" === (e3.attr("kind") || "").toLowerCase();
        }) && void 0;
      }
      function Xh(e2, t2, n2) {
        var r2 = n2.children;
        if (!r2 || !r2.length) return false;
        for (var a2, o2 = false, i2 = false, l2 = 0; l2 < r2.length; l2++) {
          if ((o2 = "DT" === (a2 = r2[l2].props.nodeName.toUpperCase()) ? true : o2) && "DD" === a2) return false;
          "DD" === a2 && (i2 = true);
        }
        return o2 || i2;
      }
      function Zh(e2, t2, n2) {
        var a2 = false, o2 = false, i2 = true, l2 = [], u2 = [], s2 = [];
        if (n2.children.forEach(function(e3) {
          var t3, n3, r2 = e3.actualNode;
          3 === r2.nodeType && "" !== r2.nodeValue.trim() ? a2 = true : 1 === r2.nodeType && k(r2) && (i2 = false, t3 = "LI" === r2.nodeName.toUpperCase(), n3 = "listitem" === (e3 = d(e3)), t3 || n3 || l2.push(r2), t3 && !n3 && (u2.push(r2), s2.includes(e3) || s2.push(e3)), n3) && (o2 = true);
        }), a2 || l2.length) this.relatedNodes(l2);
        else {
          if (i2 || o2) return false;
          this.relatedNodes(u2), this.data({ messageKey: "roleNotValid", roles: s2.join(", ") });
        }
        return true;
      }
      function Jh(e2, t2) {
        var n2 = 1 < arguments.length && void 0 !== t2 && t2;
        return e2.map(function(e3) {
          return { vChild: e3, nested: n2 };
        });
      }
      function Qh(e2) {
        var t2 = (e2 = s(e2)).nodeName.toUpperCase(), n2 = c(e2);
        return "DIV" === t2 && ["presentation", "none", null].includes(n2) && (t2 = (e2 = s(e2)).nodeName.toUpperCase(), n2 = c(e2)), "DL" === t2 && !(n2 && !["presentation", "none", "list"].includes(n2));
      }
      function eg(e2, t2, n2) {
        return mp(n2.attr("lang")) === mp(n2.attr("xml:lang"));
      }
      function tg(e2, a2, o2) {
        var i2 = [];
        return a2.attributes.forEach(function(e3) {
          var t2, n2, r2 = o2.attr(e3);
          "string" == typeof r2 && (t2 = mp(r2), n2 = a2.value ? !a2.value.map(mp).includes(t2) : !Of(t2), "" !== t2 && n2 || "" !== r2 && !C(r2)) && i2.push(e3 + '="' + o2.attr(e3) + '"');
        }), !!i2.length && !("html" !== o2.props.nodeName && !$s(o2) || (this.data(i2), 0));
      }
      function ng(e2) {
        return "" !== (e2 || "").trim();
      }
      function rg(e2, t2, n2) {
        var r2 = void 0 !== document && Za(document);
        return t2.attributes.includes("xml:lang") && t2.attributes.includes("lang") && ng(n2.attr("xml:lang")) && !ng(n2.attr("lang")) && !r2 ? (this.data({ messageKey: "noXHTML" }), false) : !!t2.attributes.some(function(e3) {
          return ng(n2.attr(e3));
        }) || (this.data({ messageKey: "noLang" }), false);
      }
      function ag(e2, t2, n2) {
        var r2 = d(e2), n2 = (n2 = u(n2)) ? n2.toLowerCase() : null;
        return this.data({ role: r2, accessibleText: n2 }), this.relatedNodes([e2]), true;
      }
      function og(e2) {
        var n2 = [];
        return e2.filter(function(t2) {
          var e3 = n2.find(function(e4) {
            return t2.data.role === e4.data.role && t2.data.accessibleText === e4.data.accessibleText;
          });
          return e3 ? (e3.result = false, e3.relatedNodes.push(t2.relatedNodes[0]), false) : (n2.push(t2), t2.relatedNodes = [], true);
        });
      }
      function ig(e2, t2, n2) {
        var r2 = Rs(n2), a2 = Hu(n2), n2 = n2.attr("aria-describedby");
        return !(r2 || !a2 && !n2);
      }
      function lg(e2) {
        var t2 = m(e2.getAttribute("id")), n2 = e2.parentNode, r2 = (r2 = y(e2)).documentElement || r2, a2 = Array.from(r2.querySelectorAll('label[for="'.concat(t2, '"]')));
        for (a2.length && (a2 = a2.filter(function(e3) {
          return !Qi(e3);
        })); n2; ) "LABEL" === n2.nodeName.toUpperCase() && -1 === a2.indexOf(n2) && a2.push(n2), n2 = n2.parentNode;
        return this.relatedNodes(a2), 1 < a2.length && (1 < (r2 = a2.filter(k)).length || !nu(e2, "aria-labelledby").includes(r2[0])) && void 0;
      }
      function ug(e2) {
        e2 = Fs(e2, { emoji: true, nonBmp: true, punctuations: true });
        return C(e2);
      }
      function sg(e2, t2, n2) {
        var r2 = null == t2 ? void 0 : t2.pixelThreshold, a2 = null != (a2 = null == t2 ? void 0 : t2.occurrenceThreshold) ? a2 : null == t2 ? void 0 : t2.occuranceThreshold, t2 = ru(e2).toLowerCase();
        return !(e2 = C(ss(n2, { subtreeDescendant: true, ignoreIconLigature: true, pixelThreshold: r2, occurrenceThreshold: a2 })).toLowerCase()) || (As(t2) < 1 || As(e2) < 1 ? void 0 : (n2 = e2, r2 = ug(r2 = t2), n2 = ug(n2), !(!r2 || !n2) && r2.includes(n2)));
      }
      function cg(e2, t2, n2) {
        try {
          var r2, a2 = Oo(n2, "label");
          return a2 ? (r2 = C(u(a2, { inControlContext: true, startNode: n2 })), a2.actualNode && this.relatedNodes([a2.actualNode]), this.data({ implicitLabel: r2 }), !!r2) : false;
        } catch (e3) {
        }
      }
      function dg(e2, t2, n2) {
        if (n2.hasAttr("id")) {
          if (!n2.actualNode) return;
          var r2, a2 = y(e2), e2 = m(e2.getAttribute("id")), a2 = a2.querySelector('label[for="'.concat(e2, '"]'));
          if (a2 && !k(a2)) {
            try {
              r2 = u(n2).trim();
            } catch (e3) {
              return;
            }
            return "" === r2;
          }
        }
        return false;
      }
      function pg(e2, t2, n2) {
        var n2 = Rs(n2), r2 = e2.getAttribute("title");
        return !!n2 && (r2 || (r2 = "", e2.getAttribute("aria-describedby") && (r2 = nu(e2, "aria-describedby").map(function(e3) {
          return e3 ? ru(e3) : "";
        }).join(""))), C(r2) === C(n2));
      }
      function fg(e2, t2, n2) {
        var r2 = this;
        if (!n2.attr("id")) return false;
        if (n2.actualNode) {
          var a2 = y(n2.actualNode), o2 = m(n2.attr("id")), a2 = Array.from(a2.querySelectorAll('label[for="'.concat(o2, '"]')));
          if (this.relatedNodes(a2), !a2.length) return false;
          try {
            return a2.some(function(e3) {
              return !ll(e3) || (e3 = C(ru(e3, { inControlContext: true, startNode: n2 })), r2.data({ explicitLabel: e3 }), !!e3);
            });
          } catch (e3) {
          }
        }
      }
      function mg(e2, t2, n2) {
        return !["none", "presentation"].includes(d(n2)) && !!(t2 = Oo(n2, t2.parentSelector)) && "" !== (t2 = Ku(t2, true).toLowerCase()) && t2 === u(n2).toLowerCase();
      }
      function hg(e2, t2, n2) {
        return "string" == typeof (n2 = n2.attr("alt")) && /^\s+$/.test(n2);
      }
      function gg(e2, t2, n2) {
        return n2 = parseInt(n2.attr("tabindex"), 10), !!isNaN(n2) || n2 <= 0;
      }
      function bg(e2) {
        e2 = parseInt(e2.attr("tabindex"), 10);
        return !isNaN(e2) && e2 < 0;
      }
      function vg(e2) {
        var t2 = lm("landmark"), n2 = s(e2), r2 = d(e2);
        for (this.data({ role: r2 }); n2; ) {
          var a2 = n2.getAttribute("role");
          if ((a2 = a2 || "FORM" === n2.nodeName.toUpperCase() ? a2 : Lu(n2)) && t2.includes(a2) && ("main" !== a2 || "complementary" !== r2)) return false;
          n2 = s(n2);
        }
        return true;
      }
      function yg(e2, t2, n2) {
        var r2 = ["button", "fieldset", "input", "select", "textarea"];
        return !((n2 = n2.tabbableElements) && n2.length && (n2 = n2.filter(function(e3) {
          return !r2.includes(e3.props.nodeName);
        }), this.relatedNodes(n2.map(function(e3) {
          return e3.actualNode;
        })), 0 !== n2.length) && !Qs()) || !!n2.every(function(e3) {
          var t3 = e3.getComputedStylePropertyValue("pointer-events"), n3 = parseInt(e3.getComputedStylePropertyValue("width")), r3 = parseInt(e3.getComputedStylePropertyValue("height"));
          return e3.actualNode.onfocus || (0 === n3 || 0 === r3) && "none" === t3;
        }) && void 0;
      }
      function wg(e2, t2, n2) {
        var r2 = n2.attr("tabindex");
        if (!(F(n2) && -1 < r2)) return false;
        try {
          return !u(n2);
        } catch (e3) {
        }
      }
      function Dg(e2, t2, n2) {
        return !(n2 = n2.tabbableElements.map(function(e3) {
          return e3.actualNode;
        })) || !n2.length || !Qs() || void this.relatedNodes(n2);
      }
      function xg(e2, t2, n2) {
        return !(!n2.hasAttr("contenteditable") || !function e3(t3) {
          t3 = t3.attr("contenteditable");
          if ("true" === t3 || "" === t3) return true;
          if ("false" === t3) return false;
          t3 = Oo(n2.parent, "[contenteditable]");
          if (!t3) return false;
          return e3(t3);
        }(n2)) || Jl(n2);
      }
      function Eg(e2, t2, n2) {
        var r2 = ["button", "fieldset", "input", "select", "textarea"];
        return !((n2 = n2.tabbableElements) && n2.length && (n2 = n2.filter(function(e3) {
          return r2.includes(e3.props.nodeName);
        }), this.relatedNodes(n2.map(function(e3) {
          return e3.actualNode;
        })), 0 !== n2.length) && !Qs()) || !!n2.every(function(e3) {
          var t3 = e3.getComputedStylePropertyValue("pointer-events"), n3 = parseInt(e3.getComputedStylePropertyValue("width")), r3 = parseInt(e3.getComputedStylePropertyValue("height"));
          return e3.actualNode.onfocus || (0 === n3 || 0 === r3) && "none" === t3;
        }) && void 0;
      }
      function Fg(e2, t2, n2) {
        var r2 = n2.tabbableElements;
        return !!r2 && 0 < r2.filter(function(e3) {
          return e3 !== n2;
        }).length;
      }
      function Ag(e2, t2, n2) {
        return Qi(n2) || (this.data(n2.attr("accesskey")), this.relatedNodes([e2])), true;
      }
      function Cg(e2) {
        var n2 = {};
        return e2.filter(function(e3) {
          if (e3.data) {
            var t2 = e3.data.toUpperCase();
            if (!n2[t2]) return (n2[t2] = e3).relatedNodes = [], true;
            n2[t2].relatedNodes.push(e3.relatedNodes[0]);
          }
          return false;
        }).map(function(e3) {
          return e3.result = !!e3.relatedNodes.length, e3;
        });
      }
      function kg(e2, t2, n2) {
        if (!t2 || !t2.selector || "string" != typeof t2.selector) throw new TypeError("page-no-duplicate requires options.selector to be a string");
        var r2 = "page-no-duplicate;" + t2.selector;
        if (!v.get(r2)) return v.set(r2, true), r2 = sf(axe._tree[0], t2.selector, k), "string" == typeof t2.nativeScopeFilter && (r2 = r2.filter(function(e3) {
          return e3.actualNode.hasAttribute("role") || !Mi(e3, t2.nativeScopeFilter);
        })), "string" == typeof t2.role && (r2 = r2.filter(function(e3) {
          return d(e3) === t2.role;
        })), this.relatedNodes(r2.filter(function(e3) {
          return e3 !== n2;
        }).map(function(e3) {
          return e3.actualNode;
        })), r2.length <= 1;
        this.data("ignored");
      }
      function Ng(e2) {
        return e2.filter(function(e3) {
          return "ignored" !== e3.data;
        });
      }
      function Tg(e2, t2, n2) {
        return Bu(n2, t2.matcher);
      }
      function Rg(e2, t2, n2) {
        if (t2 && t2.selector && "string" == typeof t2.selector) return !(!t2.passForModal || !Qs()) || (n2 = sf(n2, t2.selector, k), this.relatedNodes(n2.map(function(e3) {
          return e3.actualNode;
        })), 0 < n2.length);
        throw new TypeError("has-descendant requires options.selector to be a string");
      }
      function Og(e2) {
        return e2.some(function(e3) {
          return true === e3.result;
        }) && e2.forEach(function(e3) {
          e3.result = true;
        }), e2;
      }
      function _g(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = 2 < arguments.length ? arguments[2] : void 0;
        if (t2.attribute && "string" == typeof t2.attribute) return n2.hasAttr(t2.attribute) ? (n2 = n2.attr(t2.attribute), !!C(n2) || (this.data({ messageKey: "emptyAttr" }), false)) : (this.data({ messageKey: "noAttr" }), false);
        throw new TypeError("attr-non-space-content requires options.attribute to be a string");
      }
      function Sg(e2, t2, n2) {
        return n2 = n2.attr("autocomplete") || "", ks(n2, t2);
      }
      function Mg(e2, t2, n2) {
        var r2, a2, o2;
        return "input" !== n2.props.nodeName || (a2 = { bday: ["text", "search", "date"], email: ["text", "search", "email"], username: ["text", "search", "email"], "street-address": ["text"], tel: ["text", "search", "tel"], "tel-country-code": ["text", "search", "tel"], "tel-national": ["text", "search", "tel"], "tel-area-code": ["text", "search", "tel"], "tel-local": ["text", "search", "tel"], "tel-local-prefix": ["text", "search", "tel"], "tel-local-suffix": ["text", "search", "tel"], "tel-extension": ["text", "search", "tel"], "cc-number": r2 = ["text", "search", "number", "tel"], "cc-exp": ["text", "search", "month", "tel"], "cc-exp-month": r2, "cc-exp-year": r2, "cc-csc": r2, "transaction-amount": r2, "bday-day": r2, "bday-month": r2, "bday-year": r2, "new-password": ["text", "search", "password"], "current-password": ["text", "search", "password"], url: o2 = ["text", "search", "url"], photo: o2, impp: o2 }, "object" === te(t2) && Object.keys(t2).forEach(function(e3) {
          a2[e3] || (a2[e3] = []), a2[e3] = a2[e3].concat(t2[e3]);
        }), o2 = (r2 = n2.attr("autocomplete").split(/\s+/g).map(function(e3) {
          return e3.toLowerCase();
        }))[r2.length - 1], !!Cs.stateTerms.includes(o2)) || (r2 = a2[o2], o2 = n2.hasAttr("type") ? C(n2.attr("type")).toLowerCase() : "text", o2 = Nf().includes(o2) ? o2 : "text", void 0 === r2 ? "text" === o2 : r2.includes(o2));
      }
      var Pg = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Ig(e2) {
        e2 = window2.getComputedStyle(e2).getPropertyValue("display");
        return -1 !== Pg.indexOf(e2) || "table-" === e2.substr(0, 6);
      }
      function Bg(e2, t2) {
        e2 = e2.getRelativeLuminance(), t2 = t2.getRelativeLuminance();
        return (Math.max(e2, t2) + 0.05) / (Math.min(e2, t2) + 0.05);
      }
      var jg = ["block", "list-item", "table", "flex", "grid", "inline-block"];
      function Lg(e2) {
        e2 = window2.getComputedStyle(e2).getPropertyValue("display");
        return -1 !== jg.indexOf(e2) || "table-" === e2.substr(0, 6);
      }
      function qg(e2, t2) {
        var n2 = t2.requiredContrastRatio, t2 = t2.allowSameColor;
        if (Lg(e2)) return false;
        for (var r2 = s(e2); r2 && 1 === r2.nodeType && !Lg(r2); ) r2 = s(r2);
        if (r2) {
          this.relatedNodes([r2]);
          var a2 = Th(e2), o2 = Th(r2), e2 = Ah(e2), i2 = Ah(r2), l2 = a2 && o2 ? Bg(a2, o2) : void 0;
          if ((l2 = l2 && Math.floor(100 * l2) / 100) && n2 <= l2) return true;
          var u2 = e2 && i2 ? Bg(e2, i2) : void 0;
          if ((u2 = u2 && Math.floor(100 * u2) / 100) && n2 <= u2) return true;
          if (u2) {
            if (l2) return !(!t2 || 1 !== l2 || 1 !== u2) || (1 === l2 && 1 < u2 ? this.data({ messageKey: "bgContrast", contrastRatio: u2, requiredContrastRatio: n2, nodeBackgroundColor: e2 ? e2.toHexString() : void 0, parentBackgroundColor: i2 ? i2.toHexString() : void 0 }) : this.data({ messageKey: "fgContrast", contrastRatio: l2, requiredContrastRatio: n2, nodeColor: a2 ? a2.toHexString() : void 0, parentColor: o2 ? o2.toHexString() : void 0 }), false);
          } else u2 = null != (t2 = N.get("bgColor")) ? t2 : "bgContrast", this.data({ messageKey: u2 }), N.clear();
        }
      }
      var zg = n(function(e2, t2) {
        function n2(e3, t3) {
          return r2.getPropertyValue(e3) === t3;
        }
        var r2 = window2.getComputedStyle(e2, t2);
        return n2("content", "none") || n2("display", "none") || n2("visibility", "hidden") || false === n2("position", "absolute") || 0 === qd(r2).alpha && n2("background-image", "none") ? 0 : (e2 = Vg(r2.getPropertyValue("width")), t2 = Vg(r2.getPropertyValue("height")), "px" !== e2.unit || "px" !== t2.unit ? 0 === e2.value || 0 === t2.value ? 0 : 1 / 0 : e2.value * t2.value);
      });
      function Vg(e2) {
        var e2 = D(e2.match(/^([0-9.]+)([a-z]+)$/i) || [], 3), t2 = e2[1], e2 = e2[2], e2 = void 0 === e2 ? "" : e2;
        return { value: parseFloat(void 0 === t2 ? "" : t2), unit: e2.toLowerCase() };
      }
      var $g = { ARTICLE: true, ASIDE: true, NAV: true, SECTION: true }, Hg = { alert: true, alertdialog: true, application: true, article: true, banner: false, complementary: true, contentinfo: true, dialog: true, form: true, log: true, main: true, navigation: true, region: true, search: false, status: true };
      function Ug(e2, t2) {
        return t2 = t2, (n2 = c(n2 = e2)) && (Hg[n2] || t2.roles.includes(n2)) || (t2 = (t2 = e2).nodeName.toUpperCase(), $g[t2]) || false;
        var n2;
      }
      function Gg(e2, t2, n2) {
        var n2 = d(n2, { dpub: true, fallback: true }), r2 = du(n2);
        return r2 && this.data(n2), r2;
      }
      function Wg(e2, t2, n2) {
        var r2, a2, o2 = d(n2, { noImplicit: true });
        this.data(o2);
        try {
          r2 = C(cs(n2)).toLowerCase(), a2 = C(u(n2)).toLowerCase();
        } catch (e3) {
          return;
        }
        return !(!a2 && !r2 || (a2 || !r2) && a2.includes(r2)) && void 0;
      }
      function Yg(e2, t2, n2) {
        return F(n2);
      }
      function Kg(e2, t2, n2) {
        return !!(n2 = ap(n2.attr("role"))).every(function(e3) {
          return !pu(e3.toLowerCase(), { allowAbstract: true });
        }) && (this.data(n2), true);
      }
      function Xg(e2) {
        return null !== (e2 = e2.getAttribute("role")) && ("widget" === (e2 = Ks(e2)) || "composite" === e2);
      }
      function Zg(e2, t2, n2) {
        var r2 = mu().filter(function(e3) {
          return n2.hasAttr(e3);
        });
        return this.data(r2), 0 < r2.length;
      }
      function Jg(e2, t2, n2) {
        var r2 = ap(n2.attr("role"));
        return !(r2.length <= 1) && (r2 = r2, !(!Lu(n2) && 2 === r2.length && r2.includes("none") && r2.includes("presentation")) || void 0);
      }
      function Qg(e2, t2, n2) {
        t2 = Array.isArray(t2.value) ? t2.value : [];
        var r2 = [], a2 = /^aria-/;
        return n2.attrNames.forEach(function(e3) {
          -1 === t2.indexOf(e3) && a2.test(e3) && !Em(e3) && r2.push(e3);
        }), !r2.length || (this.data(r2), false);
      }
      function e0(n2, e2, t2) {
        return !!(t2 = t2.attrNames.filter(function(e3) {
          var t3 = A.ariaAttrs[e3];
          return !!Em(e3) && (e3 = t3.unsupported, "object" !== te(e3) ? !!e3 : !Bu(n2, e3.exceptions));
        })).length && (this.data(t2), true);
      }
      function t0(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = d(2 < arguments.length ? arguments[2] : void 0);
        return !!(t2.supportedRoles || []).includes(n2) || !(!n2 || "presentation" === n2 || "none" === n2) && void 0;
      }
      function n0(e2, t2, n2, r2) {
        var a2 = c(e2);
        if (!(n2 = n2 || wm(a2))) return null;
        for (var o2 = n2.includes("group"), i2 = r2 ? e2 : e2.parent; i2; ) {
          var l2 = d(i2, { noPresentational: true });
          if (l2) {
            if ("group" !== l2 || !o2) return n2.includes(l2) ? null : n2;
            t2.includes(a2) && n2.push(a2), n2 = n2.filter(function(e3) {
              return "group" !== e3;
            });
          }
          i2 = i2.parent;
        }
        return n2;
      }
      function r0(e2, t2, n2) {
        var r2 = t2 && Array.isArray(t2.ownGroupRoles) ? t2.ownGroupRoles : [], a2 = n0(n2, r2);
        if (!a2) return true;
        var o2 = function(e3) {
          for (var t3, n3 = []; e3; ) e3.getAttribute("id") && (t3 = m(e3.getAttribute("id")), t3 = y(e3).querySelector("[aria-owns~=".concat(t3, "]"))) && n3.push(t3), e3 = e3.parentElement;
          return n3.length ? n3 : null;
        }(e2);
        if (o2) {
          for (var i2 = 0, l2 = o2.length; i2 < l2; i2++) if (!(a2 = n0(g(o2[i2]), r2, a2, true))) return true;
        }
        return this.data(a2), false;
      }
      function a0(e2) {
        e2 = e2.vNode;
        return 3 === e2.props.nodeType ? 0 < e2.props.nodeValue.trim().length : zs(e2, false, true);
      }
      var o0 = n(function(e2) {
        var t2;
        if (e2) return (t2 = d(e2, { noPresentational: true, chromium: true })) ? Ks(t2) : o0(e2.parent);
      });
      function i0(e2, t2, n2) {
        if (n2 = n2.attr("aria-level"), !(6 < (n2 = parseInt(n2, 10)))) return true;
      }
      function l0(e2, t2, n2) {
        return "true" !== n2.attr("aria-hidden");
      }
      function u0(e2) {
        var t2, n2, r2 = (1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}).invalidTableRowAttrs, a2 = 2 < arguments.length ? arguments[2] : void 0, r2 = null != (t2 = null == r2 || null == (t2 = r2.filter) ? void 0 : t2.call(r2, function(e3) {
          return a2.hasAttr(e3);
        })) ? t2 : [];
        return 0 === r2.length || !(t2 = (t2 = function(e3) {
          if (e3.parent) return Oo(e3, 'table:not([role]), [role~="treegrid"], [role~="table"], [role~="grid"]');
        }(a2)) && d(t2)) || "treegrid" === t2 || (n2 = "row".concat(1 < r2.length ? "Plural" : "Singular"), this.data({ messageKey: n2, invalidAttrs: r2, ownerRole: t2 }), false);
      }
      function s0(e2, t2, n2) {
        var r2 = n2.props, a2 = r2.nodeName, r2 = r2.type, o2 = function(e3) {
          if (!e3) return "";
          if (e3 = e3.toLowerCase(), ["mixed", "true"].includes(e3)) return e3;
          return "false";
        }(n2.attr("aria-checked"));
        return "input" !== a2 || "checkbox" !== r2 || !o2 || o2 === (a2 = function(e3) {
          if (e3.props.indeterminate) return "mixed";
          return e3.props.checked ? "true" : "false";
        }(n2)) || (this.data({ messageKey: "checkbox", checkState: a2 }), false);
      }
      var c0 = { row: u0, checkbox: s0 };
      function d0(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = 2 < arguments.length ? arguments[2] : void 0, r2 = void 0 === (r2 = t2.allowImplicit) || r2, t2 = void 0 === (t2 = t2.ignoredTags) ? [] : t2, a2 = n2.props.nodeName;
        return !!t2.map(function(e3) {
          return e3.toLowerCase();
        }).includes(a2) || !(t2 = im(n2, r2)).length || (this.data(t2), !k(n2) && void 0);
      }
      function p0(e2, t2, n2) {
        return 0 < (n2 = ap(n2.attr("role")).filter(function(e3) {
          return "abstract" === Ks(e3);
        })).length && (this.data(n2), true);
      }
      function f0(e2) {
        var t2 = mp(e2.getAttribute("lang")), e2 = mp(e2.getAttribute("xml:lang"));
        return Of(t2) && Of(e2);
      }
      function m0(e2) {
        return e2.ownerDocument.defaultView.self === e2.ownerDocument.defaultView.top;
      }
      var h0 = function(e2, t2) {
        try {
          return "svg" === t2.props.nodeName ? true : !!Oo(t2, "svg");
        } catch (e3) {
          return false;
        }
      }, g0 = [function(e2, t2) {
        return b0(t2);
      }, function(e2, t2) {
        return "area" !== t2.props.nodeName;
      }, function(e2, t2) {
        return !h0(e2, t2);
      }, function(e2, t2) {
        return F(t2);
      }, function(e2, t2) {
        return Jl(t2) || !v0(t2);
      }, function(e2) {
        return !Js(e2, { noLengthCompare: true });
      }];
      function b0(e2) {
        return "widget" === Ks(e2);
      }
      var v0 = n(function e2(t2) {
        return !(null == t2 || !t2.parent) && (!(!b0(t2.parent) || !Jl(t2.parent)) || e2(t2.parent));
      }), y0 = function(e2, t2) {
        var n2 = c(t2);
        return !(n2 && !["none", "presentation"].includes(n2) && !(lu[n2] || {}).accessibleNameRequired && !F(t2));
      }, w0 = function(e2, t2, n2) {
        return n2.initiator;
      }, D0 = { emoji: true, nonBmp: false, punctuations: true }, x0 = { "abstractrole-evaluate": p0, "accesskeys-after": Cg, "accesskeys-evaluate": Ag, "alt-space-value-evaluate": hg, "aria-allowed-attr-evaluate": function(e2, t2, n2) {
        var r2, a2 = [], o2 = d(n2), i2 = em(o2), l2 = (Array.isArray(t2[o2]) && (i2 = lf(t2[o2].concat(i2))), x(n2.attrNames));
        try {
          for (l2.s(); !(r2 = l2.n()).done; ) {
            var u2 = r2.value;
            !Em(u2) || i2.includes(u2) || function(e3, t3, n3) {
              if ("aria-required" === e3 && "false" === t3) return 1;
              if ("aria-multiline" === e3 && "false" === t3 && n3.hasAttr("contenteditable")) return 1;
              return;
            }(u2, n2.attr(u2), n2) || a2.push(u2);
          }
        } catch (e3) {
          l2.e(e3);
        } finally {
          l2.f();
        }
        return !a2.length || (this.data(a2.map(function(e3) {
          return e3 + '="' + n2.attr(e3) + '"';
        })), !(o2 || Yp(n2) || F(n2)) && void 0);
      }, "aria-allowed-attr-matches": function(e2, t2) {
        var n2 = /^aria-/, r2 = t2.attrNames;
        if (r2.length) {
          for (var a2 = 0, o2 = r2.length; a2 < o2; a2++) if (n2.test(r2[a2])) return true;
        }
        return false;
      }, "aria-allowed-role-evaluate": d0, "aria-allowed-role-matches": function(e2, t2) {
        return null !== c(t2, { dpub: true, fallback: true });
      }, "aria-busy-evaluate": function(e2, t2, n2) {
        return "true" === n2.attr("aria-busy");
      }, "aria-conditional-attr-evaluate": function(e2, t2, n2) {
        var r2 = d(n2);
        return !c0[r2] || c0[r2].call(this, e2, t2, n2);
      }, "aria-conditional-checkbox-attr-evaluate": s0, "aria-conditional-row-attr-evaluate": u0, "aria-errormessage-evaluate": function(e2, t2, n2) {
        t2 = Array.isArray(t2) ? t2 : [];
        var r2 = n2.attr("aria-errormessage"), a2 = n2.hasAttr("aria-errormessage"), o2 = n2.attr("aria-invalid");
        return !n2.hasAttr("aria-invalid") || "false" === o2 || -1 !== t2.indexOf(r2) || !a2 || (this.data(ap(r2)), function(t3) {
          if ("" === t3.trim()) return A.ariaAttrs["aria-errormessage"].allowEmpty;
          var e3;
          try {
            e3 = t3 && nu(n2, "aria-errormessage")[0];
          } catch (e4) {
            return void this.data({ messageKey: "idrefs", values: ap(t3) });
          }
          return e3 ? k(e3) ? "alert" === e3.getAttribute("role") || "assertive" === e3.getAttribute("aria-live") || "polite" === e3.getAttribute("aria-live") || -1 < ap(n2.attr("aria-describedby")).indexOf(t3) : (this.data({ messageKey: "hidden", values: ap(t3) }), false) : void 0;
        }.call(this, r2));
      }, "aria-has-attr-matches": function(e2, t2) {
        var n2 = /^aria-/;
        return t2.attrNames.some(function(e3) {
          return n2.test(e3);
        });
      }, "aria-hidden-body-evaluate": l0, "aria-hidden-focus-matches": function(e2) {
        return function e3(t2) {
          return !t2 || "true" !== t2.getAttribute("aria-hidden") && e3(s(t2));
        }(s(e2));
      }, "aria-label-evaluate": jm, "aria-labelledby-evaluate": Bm, "aria-level-evaluate": i0, "aria-prohibited-attr-evaluate": function(e2) {
        var t2, n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r2 = 2 < arguments.length ? arguments[2] : void 0, n2 = (null == n2 ? void 0 : n2.elementsAllowedAriaLabel) || [], a2 = r2.props.nodeName, o2 = d(r2, { chromium: true });
        return 0 !== (n2 = function(e3, t3, n3, r3) {
          var a3 = A.ariaRoles[t3];
          if (a3) return a3.prohibitedAttrs || [];
          return t3 || r3.includes(n3) || "widget" === o0(e3) ? [] : ["aria-label", "aria-labelledby"];
        }(r2, o2, a2, n2).filter(function(e3) {
          return !!r2.attrNames.includes(e3) && "" !== C(r2.attr(e3));
        })).length && (t2 = r2.hasAttr("role") ? "hasRole" : "noRole", t2 += 1 < n2.length ? "Plural" : "Singular", this.data({ role: o2, nodeName: a2, messageKey: t2, prohibited: n2 }), o2 = ss(r2, { subtreeDescendant: true }), "" === C(o2) || void 0);
      }, "aria-required-attr-evaluate": function(e2) {
        var n2, t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r2 = 2 < arguments.length ? arguments[2] : void 0, a2 = c(r2), o2 = r2.attrNames, i2 = ym(a2);
        return Array.isArray(t2[a2]) && (i2 = lf(t2[a2], i2)), !(a2 && o2.length && i2.length && (t2 = r2, "separator" !== a2 || F(t2)) && (o2 = r2, "combobox" !== a2 || "false" !== o2.attr("aria-expanded")) && (("slider" !== a2 || null == (t2 = r2.attr("aria-valuetext")) || !t2.trim()) && (n2 = ju(r2), (o2 = i2.filter(function(e3) {
          return !(r2.attr(e3) || (e3 = e3, void 0 !== (null == (t3 = (t3 = n2).implicitAttrs) ? void 0 : t3[e3])));
          var t3;
        })).length) && (this.data(o2), 1)));
      }, "aria-required-children-evaluate": function(e2, t2, n2) {
        var r2, a2, o2, t2 = t2 && Array.isArray(t2.reviewEmpty) ? t2.reviewEmpty : [], i2 = c(n2, { dpub: true }), l2 = Dm(i2);
        return null === l2 || ((a2 = (r2 = function(e3, a3) {
          function t3() {
            if (3 === o3.props.nodeType && i3.push({ vNode: o3, role: null }), 1 !== o3.props.nodeType || !k(o3)) return 1;
            var t4, n3 = d(o3, { noPresentational: true }), e4 = (t4 = o3, mu().find(function(e5) {
              return t4.hasAttr(e5);
            })), r3 = !!e4 || F(o3);
            !n3 && !r3 || ["group", "rowgroup"].includes(n3) && a3.some(function(e5) {
              return e5 === n3;
            }) ? l3.push.apply(l3, w(o3.children)) : (n3 || r3) && i3.push({ role: n3, attr: e4 || "tabindex", vNode: o3 });
          }
          var o3, i3 = [], l3 = Gu(e3);
          for (; o3 = l3.shift(); ) t3();
          return i3;
        }(n2, l2)).filter(function(e3) {
          var t3 = e3.role;
          return 1 === e3.vNode.props.nodeType && !l2.includes(t3);
        })).length ? (this.relatedNodes(a2.map(function(e3) {
          return e3.vNode;
        })), this.data({ messageKey: "unallowed", values: a2.map(function(e3) {
          var t3 = e3.vNode, e3 = e3.attr, n3 = t3.props, r3 = n3.nodeName;
          return 3 === n3.nodeType ? "#text" : (n3 = c(t3, { dpub: true })) ? "[role=".concat(n3, "]") : e3 ? r3 + "[".concat(e3, "]") : r3;
        }).filter(function(e3, t3, n3) {
          return n3.indexOf(e3) === t3;
        }).join(", ") }), false) : (o2 = l2, !!r2.some(function(e3) {
          e3 = e3.role;
          return e3 && o2.includes(e3);
        }) || ("true" === n2.attr("aria-busy") ? (this.data({ messageKey: "aria-busy" }), true) : (this.data(l2), !(!t2.includes(i2) || r2.some(a0)) && void 0))));
      }, "aria-required-children-matches": function(e2, t2) {
        return t2 = c(t2, { dpub: true }), !!Dm(t2);
      }, "aria-required-parent-evaluate": r0, "aria-required-parent-matches": function(e2, t2) {
        return t2 = c(t2), !!wm(t2);
      }, "aria-roledescription-evaluate": t0, "aria-unsupported-attr-evaluate": e0, "aria-valid-attr-evaluate": Qg, "aria-valid-attr-value-evaluate": function(e2, r2, a2) {
        r2 = Array.isArray(r2.value) ? r2.value : [];
        var o2 = "", i2 = "", l2 = [], u2 = /^aria-/, s2 = ["aria-errormessage"], c2 = { "aria-controls": function() {
          var e3 = false === ["false", null].includes(a2.attr("aria-haspopup"));
          return e3 && (o2 = 'aria-controls="'.concat(a2.attr("aria-controls"), '"'), i2 = "controlsWithinPopup"), "false" !== a2.attr("aria-expanded") && "false" !== a2.attr("aria-selected") && false == e3;
        }, "aria-current": function(e3) {
          e3 || (o2 = 'aria-current="'.concat(a2.attr("aria-current"), '"'), i2 = "ariaCurrent");
        }, "aria-owns": function() {
          return "false" !== a2.attr("aria-expanded");
        }, "aria-describedby": function(e3) {
          e3 || (o2 = 'aria-describedby="'.concat(a2.attr("aria-describedby"), '"'), i2 = axe._tree && axe._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
        }, "aria-labelledby": function(e3) {
          e3 || (o2 = 'aria-labelledby="'.concat(a2.attr("aria-labelledby"), '"'), i2 = axe._tree && axe._tree[0]._hasShadowRoot ? "noIdShadow" : "noId");
        } };
        return a2.attrNames.forEach(function(t2) {
          if (!s2.includes(t2) && !r2.includes(t2) && u2.test(t2)) {
            var e3, n2 = a2.attr(t2);
            try {
              e3 = xm(a2, t2);
            } catch (e4) {
              return o2 = "".concat(t2, '="').concat(n2, '"'), void (i2 = "idrefs");
            }
            c2[t2] && !c2[t2](e3) || e3 || ("" === n2 && (e3 = t2, "string" !== (null == (e3 = A.ariaAttrs[t2]) ? void 0 : e3.type)) ? (o2 = t2, i2 = "empty") : l2.push("".concat(t2, '="').concat(n2, '"')));
          }
        }), l2.length ? (this.data(l2), false) : !o2 || void this.data({ messageKey: i2, needsReview: o2 });
      }, "attr-non-space-content-evaluate": _g, "autocomplete-appropriate-evaluate": Mg, "autocomplete-matches": function(e2, t2) {
        if (!(n2 = t2.attr("autocomplete")) || "" === C(n2)) return false;
        if (n2 = t2.props.nodeName, false === ["textarea", "input", "select"].includes(n2)) return false;
        if ("input" === n2 && ["submit", "reset", "button", "hidden"].includes(t2.props.type)) return false;
        if (n2 = t2.attr("aria-disabled") || "false", t2.hasAttr("disabled") || "true" === n2.toLowerCase()) return false;
        var n2 = t2.attr("role"), r2 = t2.attr("tabindex");
        if ("-1" === r2 && n2) {
          n2 = A.ariaRoles[n2];
          if (void 0 === n2 || "widget" !== n2.type) return false;
        }
        return !("-1" === r2 && t2.actualNode && !ll(t2) && !k(t2));
      }, "autocomplete-valid-evaluate": Sg, "avoid-inline-spacing-evaluate": Im, "braille-label-equivalent-evaluate": function(e2, t2, n2) {
        var r2;
        if (!(null != (r2 = n2.attr("aria-braillelabel")) ? r2 : "").trim()) return true;
        try {
          return "" !== C(u(n2));
        } catch (e3) {
        }
      }, "braille-roledescription-equivalent-evaluate": function(e2, t2, n2) {
        var r2 = null != (r2 = n2.attr("aria-brailleroledescription")) ? r2 : "";
        return "" === C(r2) || ("string" != typeof (r2 = n2.attr("aria-roledescription")) ? (this.data({ messageKey: "noRoleDescription" }), false) : "" !== C(r2) || (this.data({ messageKey: "emptyRoleDescription" }), false));
      }, "bypass-matches": function(e2, t2, n2) {
        return !w0(e2, t2, n2) || !!e2.querySelector("a[href]");
      }, "caption-evaluate": Kh, "caption-faked-evaluate": Tm, "color-contrast-evaluate": function(e2, t2, n2) {
        var r2 = t2.ignoreUnicode, a2 = t2.ignoreLength, o2 = t2.ignorePseudo, i2 = t2.boldValue, l2 = t2.boldTextPt, u2 = t2.largeTextPt, s2 = t2.contrastRatio, c2 = t2.shadowOutlineEmMax, d2 = t2.pseudoSizeThreshold;
        if (!ll(e2)) return this.data({ messageKey: "hidden" }), true;
        var p2 = Ku(n2, false, true);
        if (r2 && (m2 = Ds(r2 = p2, f2 = { nonBmp: true }), r2 = "" === C(Fs(r2, f2)), m2) && r2) this.data({ messageKey: "nonBmp" });
        else {
          var f2 = window2.getComputedStyle(e2), m2 = parseFloat(f2.getPropertyValue("font-size")), r2 = f2.getPropertyValue("font-weight"), i2 = parseFloat(r2) >= i2 || "bold" === r2, r2 = Math.ceil(72 * m2) / 96, l2 = i2 && r2 < l2 || !i2 && r2 < u2 ? s2.normal : s2.large, r2 = l2.expected, u2 = l2.minThreshold, s2 = l2.maxThreshold, l2 = function(e3, t3) {
            var n3 = t3.pseudoSizeThreshold, n3 = void 0 === n3 ? 0.25 : n3, t3 = t3.ignorePseudo, t3 = void 0 !== t3 && t3;
            if (!t3) {
              var t3 = e3.boundingClientRect, r3 = t3.width * t3.height * n3;
              do {
                var a3 = zg(e3.actualNode, ":before"), o3 = zg(e3.actualNode, ":after");
                if (r3 < a3 + o3) return e3;
              } while (e3 = e3.parent);
            }
          }(n2, { ignorePseudo: o2, pseudoSizeThreshold: d2 });
          if (l2) this.data({ fontSize: "".concat((72 * m2 / 96).toFixed(1), "pt (").concat(m2, "px)"), fontWeight: i2 ? "bold" : "normal", messageKey: "pseudoContent", expectedContrastRatio: r2 + ":1" }), this.relatedNodes(l2.actualNode);
          else {
            var h2, g2, b2, n2 = yh(e2, { minRatio: 1e-3, maxRatio: c2 });
            if (null !== n2) return l2 = Th(e2, !(o2 = []), d2 = Ah(e2, o2, c2), t2), t2 = c2 = e2 = null, 0 === n2.length ? e2 = Nh(d2, l2) : l2 && d2 && (t2 = [].concat(w(n2), [d2]).reduce(ch), n2 = Nh(d2, l2), b2 = Nh(d2, t2), h2 = Nh(t2, l2), (e2 = Math.max(n2, b2, h2)) !== n2) && (c2 = h2 < b2 ? "shadowOnBgColor" : "fgOnShadowColor"), n2 = r2 < e2, "number" == typeof u2 && ("number" != typeof e2 || e2 < u2) || "number" == typeof s2 && ("number" != typeof e2 || s2 < e2) ? (this.data({ contrastRatio: e2 }), true) : (h2 = Math.floor(100 * e2) / 100, null === d2 ? g2 = N.get("bgColor") : n2 || (g2 = c2), b2 = 1 === p2.length, (u2 = 1 == h2) ? g2 = N.set("bgColor", "equalRatio") : n2 || !b2 || a2 || (g2 = "shortTextContent"), this.data({ fgColor: l2 ? l2.toHexString() : void 0, bgColor: d2 ? d2.toHexString() : void 0, contrastRatio: h2, fontSize: "".concat((72 * m2 / 96).toFixed(1), "pt (").concat(m2, "px)"), fontWeight: i2 ? "bold" : "normal", messageKey: g2, expectedContrastRatio: r2 + ":1", shadowColor: t2 ? t2.toHexString() : void 0 }), null === l2 || null === d2 || u2 || b2 && !a2 && !n2 ? (g2 = null, N.clear(), void this.relatedNodes(o2)) : (n2 || this.relatedNodes(o2), n2));
            this.data({ messageKey: "complexTextShadows" });
          }
        }
      }, "color-contrast-matches": function(r2, e2) {
        var t2 = (n2 = e2.props).nodeName, n2 = n2.type;
        if ("option" === t2) return false;
        if ("select" === t2 && !r2.options.length) return false;
        if ("input" === t2 && ["hidden", "range", "color", "checkbox", "radio", "image"].includes(n2)) return false;
        if (Sh(e2) || Bl(e2)) return false;
        if (["input", "select", "textarea"].includes(t2)) {
          n2 = window2.getComputedStyle(r2), n2 = parseInt(n2.getPropertyValue("text-indent"), 10);
          if (n2) {
            var a2 = { top: (a2 = r2.getBoundingClientRect()).top, bottom: a2.bottom, left: a2.left + n2, right: a2.right + n2 };
            if (!Qd(a2, r2)) return false;
          }
          return true;
        }
        if (n2 = Mi(e2, "label"), "label" === t2 || n2) {
          a2 = n2 || r2, t2 = n2 ? g(n2) : e2;
          if (a2.htmlFor) {
            n2 = y(a2).getElementById(a2.htmlFor), a2 = n2 && g(n2);
            if (a2 && Sh(a2)) return false;
          }
          n2 = yf(t2, 'input:not([type="hidden"],[type="image"],[type="button"],[type="submit"],[type="reset"]), select, textarea')[0];
          if (n2 && Sh(n2)) return false;
        }
        for (var o2, i2 = [], l2 = e2; l2; ) l2.props.id && (o2 = nm(l2).filter(function(e3) {
          return ap(e3.getAttribute("aria-labelledby") || "").includes(l2.props.id);
        }).map(function(e3) {
          return g(e3);
        }), i2.push.apply(i2, w(o2))), l2 = l2.parent;
        if (0 < i2.length && i2.every(Sh)) return false;
        if ("" === (t2 = Ku(a2 = e2, false, true)) || "" === Fs(t2, D0) || !a2.children.some(function(e3) {
          return "#text" === e3.props.nodeName && !xs(e3);
        })) return false;
        for (var u2 = document.createRange(), s2 = e2.children, c2 = 0; c2 < s2.length; c2++) {
          var d2 = s2[c2];
          3 === d2.actualNode.nodeType && "" !== C(d2.actualNode.nodeValue) && u2.selectNodeContents(d2.actualNode);
        }
        var n2 = Array.from(u2.getClientRects()), p2 = ji(e2);
        return n2.some(function(t3) {
          var e3, n3 = Qd(t3, r2);
          return p2.length ? (e3 = p2.some(function(e4) {
            return Ii(t3, e4.boundingClientRect);
          }), n3 && e3) : n3;
        });
      }, "css-orientation-lock-evaluate": Uh, "data-table-large-matches": function(e2) {
        return !!Kf(e2) && 3 <= (e2 = hu(e2)).length && 3 <= e2[0].length && 3 <= e2[1].length && 3 <= e2[2].length;
      }, "data-table-matches": function(e2) {
        return Kf(e2);
      }, "deprecatedrole-evaluate": function(e2, t2, n2) {
        var n2 = d(n2, { dpub: true, fallback: true }), r2 = A.ariaRoles[n2];
        return !(null == r2 || !r2.deprecated || (this.data(n2), 0));
      }, "dlitem-evaluate": Qh, "doc-has-title-evaluate": Pm, "duplicate-id-active-matches": function(e2) {
        var t2 = e2.getAttribute("id").trim(), t2 = '*[id="'.concat(m(t2), '"]'), t2 = Array.from(y(e2).querySelectorAll(t2));
        return !hm(e2) && t2.some(F);
      }, "duplicate-id-after": qm, "duplicate-id-aria-matches": function(e2) {
        return hm(e2);
      }, "duplicate-id-evaluate": Lm, "duplicate-id-misc-matches": function(e2) {
        var t2 = e2.getAttribute("id").trim(), t2 = '*[id="'.concat(m(t2), '"]'), t2 = Array.from(y(e2).querySelectorAll(t2));
        return !hm(e2) && t2.every(function(e3) {
          return !F(e3);
        });
      }, "duplicate-img-label-evaluate": mg, "exists-evaluate": Mm, "explicit-evaluate": fg, "fallbackrole-evaluate": Jg, "focusable-content-evaluate": Fg, "focusable-disabled-evaluate": Eg, "focusable-element-evaluate": xg, "focusable-modal-open-evaluate": Dg, "focusable-no-name-evaluate": wg, "focusable-not-tabbable-evaluate": yg, "frame-focusable-content-evaluate": function(e2, t2, n2) {
        if (n2.children) try {
          return !n2.children.some(function t3(e3) {
            if (Jl(e3)) return true;
            if (!e3.children) {
              if (1 === e3.props.nodeType) throw new Error("Cannot determine children");
              return false;
            }
            return e3.children.some(function(e4) {
              return t3(e4);
            });
          });
        } catch (e3) {
        }
      }, "frame-focusable-content-matches": function(e2, t2, n2) {
        var r2;
        return !n2.initiator && !n2.focusable && 1 < (null == (r2 = n2.size) ? void 0 : r2.width) * (null == (r2 = n2.size) ? void 0 : r2.height);
      }, "frame-tested-after": Yh, "frame-tested-evaluate": Wh, "frame-title-has-text-matches": function(e2) {
        return e2 = e2.getAttribute("title"), !!C(e2);
      }, "has-alt-evaluate": Sm, "has-descendant-after": Og, "has-descendant-evaluate": Rg, "has-global-aria-attribute-evaluate": Zg, "has-implicit-chromium-role-matches": function(e2, t2) {
        return null !== Lu(t2, { chromium: true });
      }, "has-lang-evaluate": rg, "has-text-content-evaluate": function(e2, t2, n2) {
        try {
          return "" !== C(ss(n2));
        } catch (e3) {
        }
      }, "has-widget-role-evaluate": Xg, "heading-matches": function(e2, t2) {
        return "heading" === d(t2);
      }, "heading-order-after": function(e2) {
        (t2 = w(t2 = e2)).sort(function(e3, t3) {
          e3 = e3.node, t3 = t3.node;
          return e3.ancestry.length - t3.ancestry.length;
        });
        var t2, n2 = t2.reduce(Bh, []).filter(function(e3) {
          return -1 !== e3.level;
        });
        return e2.forEach(function(e3) {
          e3.result = function(e4, t3) {
            var e4 = jh(t3, e4.node.ancestry), n3 = null != (n3 = null == (n3 = t3[e4]) ? void 0 : n3.level) ? n3 : -1, t3 = null != (t3 = null == (t3 = t3[e4 - 1]) ? void 0 : t3.level) ? t3 : -1;
            if (0 === e4) return true;
            if (-1 !== n3) return n3 - t3 <= 1;
          }(e3, n2);
        }), e2;
      }, "heading-order-evaluate": Ih, "help-same-as-label-evaluate": pg, "hidden-content-evaluate": $f, "hidden-explicit-label-evaluate": dg, "html-namespace-matches": function(e2, t2) {
        return !h0(e2, t2);
      }, "html5-scope-evaluate": Nm, "identical-links-same-purpose-after": Ph, "identical-links-same-purpose-evaluate": Mh, "identical-links-same-purpose-matches": function(e2, t2) {
        return !(!u(t2) || (t2 = d(e2)) && "link" !== t2);
      }, "implicit-evaluate": cg, "inline-style-property-evaluate": function(e2, t2) {
        var n2 = t2.cssProperty, r2 = t2.absoluteValues, a2 = t2.minValue, o2 = t2.maxValue, i2 = void 0 === (i2 = t2.normalValue) ? 0 : i2, l2 = t2.noImportant, t2 = t2.multiLineOnly;
        return !!(!l2 && "important" !== e2.style.getPropertyPriority(n2) || t2 && !ec(e2)) || (l2 = {}, "number" == typeof a2 && (l2.minValue = a2), "number" == typeof o2 && (l2.maxValue = o2), t2 = e2.style.getPropertyValue(n2), ["inherit", "unset", "revert", "revert-layer"].includes(t2) ? (this.data(h({ value: t2 }, l2)), true) : (t2 = function(e3, t3) {
          var n3 = t3.cssProperty, r3 = t3.absoluteValues, t3 = t3.normalValue, e3 = window2.getComputedStyle(e3), n3 = e3.getPropertyValue(n3);
          if ("normal" === n3) return t3;
          t3 = parseFloat(n3);
          if (r3) return t3;
          r3 = parseFloat(e3.getPropertyValue("font-size")), e3 = Math.round(t3 / r3 * 100) / 100;
          if (isNaN(e3)) return n3;
          return e3;
        }(e2, { absoluteValues: r2, cssProperty: n2, normalValue: i2 }), this.data(h({ value: t2 }, l2)), "number" == typeof t2 ? ("number" != typeof a2 || a2 <= t2) && ("number" != typeof o2 || t2 <= o2) : void 0));
      }, "inserted-into-focus-order-matches": function(e2) {
        return Hs(e2);
      }, "internal-link-present-evaluate": Qm, "invalid-children-evaluate": function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = 2 < arguments.length ? arguments[2] : void 0, r2 = [], a2 = [];
        if (n2.children) {
          for (var o2 = Jh(n2.children); o2.length; ) {
            var i2 = o2.shift(), l2 = i2.vChild, i2 = i2.nested;
            if (t2.divGroups && !i2 && "div" === (u2 = l2).props.nodeName && null === c(u2)) {
              if (!l2.children) return;
              var u2 = Jh(l2.children, true);
              o2.push.apply(o2, w(u2));
            } else {
              u2 = function(e3, t3, n3) {
                var r3 = n3.validRoles, r3 = void 0 === r3 ? [] : r3, n3 = n3.validNodeNames, n3 = void 0 === n3 ? [] : n3, a3 = e3.props, o3 = a3.nodeName, i3 = a3.nodeType, a3 = a3.nodeValue, t3 = t3 ? "div > " : "";
                if (3 === i3 && "" !== a3.trim()) return t3 + "#text";
                if (1 !== i3 || !k(e3)) return false;
                a3 = c(e3);
                return a3 ? !r3.includes(a3) && t3 + "[role=".concat(a3, "]") : !n3.includes(o3) && t3 + o3;
              }(l2, i2, t2);
              u2 && (a2.includes(u2) || a2.push(u2), 1 === (null == l2 || null == (i2 = l2.actualNode) ? void 0 : i2.nodeType)) && r2.push(l2.actualNode);
            }
          }
          return 0 === a2.length ? false : (this.data({ values: a2.join(", ") }), this.relatedNodes(r2), true);
        }
      }, "invalidrole-evaluate": Kg, "is-element-focusable-evaluate": Yg, "is-initiator-matches": w0, "is-on-screen-evaluate": b1, "is-visible-matches": ll, "is-visible-on-screen-matches": function(e2, t2) {
        return ll(t2);
      }, "label-content-name-mismatch-evaluate": sg, "label-content-name-mismatch-matches": function(e2, t2) {
        var n2 = d(e2);
        return !!(n2 && lm("widget").includes(n2) && sm().includes(n2) && (C(ou(t2)) || C(au(e2))) && C(Ku(t2)));
      }, "label-matches": function(e2, t2) {
        return "input" !== t2.props.nodeName || false === t2.hasAttr("type") || (t2 = t2.attr("type").toLowerCase(), false === ["hidden", "image", "button", "submit", "reset"].includes(t2));
      }, "landmark-has-body-context-matches": function(e2, t2) {
        return e2.hasAttribute("role") || !Mi(t2, "article, aside, main, nav, section");
      }, "landmark-is-top-level-evaluate": vg, "landmark-is-unique-after": og, "landmark-is-unique-evaluate": ag, "landmark-unique-matches": function(e2, t2) {
        return n2 = t2, a2 = lm("landmark"), !!(o2 = d(n2)) && ("section" !== (r2 = n2.props.nodeName) && "form" !== r2 ? 0 <= a2.indexOf(o2) || "region" === o2 : !!u(n2)) && k(t2);
        var n2, r2, a2, o2;
      }, "layout-table-matches": function(e2) {
        return !Kf(e2) && !F(e2);
      }, "link-in-text-block-evaluate": qg, "link-in-text-block-matches": function(e2) {
        var t2 = C(e2.innerText), n2 = e2.getAttribute("role");
        return !(n2 && "link" !== n2 || !t2 || !ll(e2)) && Js(e2);
      }, "link-in-text-block-style-evaluate": function(e2) {
        if (Ig(e2)) return false;
        for (var t2 = s(e2); t2 && 1 === t2.nodeType && !Ig(t2); ) t2 = s(t2);
        return t2 ? (this.relatedNodes([t2]), !!rh(e2, t2) || !!function(e3) {
          for (var t3 = 0, n2 = ["before", "after"]; t3 < n2.length; t3++) {
            var r2 = n2[t3];
            if ("none" !== window2.getComputedStyle(e3, ":".concat(r2)).getPropertyValue("content")) return 1;
          }
          return;
        }(e2) && void this.data({ messageKey: "pseudoContent" })) : void 0;
      }, "listitem-evaluate": function(e2, t2, n2) {
        var r2;
        if (n2 = n2.parent) return r2 = n2.props.nodeName, n2 = c(n2), !!["presentation", "none", "list"].includes(n2) || (n2 && pu(n2) ? (this.data({ messageKey: "roleNotValid" }), false) : ["ul", "ol", "menu"].includes(r2));
      }, "matches-definition-evaluate": Tg, "meta-refresh-evaluate": function(e2, t2, n2) {
        var r2 = (a2 = t2 || {}).minDelay, a2 = a2.maxDelay;
        return !(n2 = D((n2.attr("content") || "").trim().split(Zm), 1)[0]).match(Jm) || (n2 = parseFloat(n2), this.data({ redirectDelay: n2 }), "number" == typeof r2 && n2 <= t2.minDelay) || "number" == typeof a2 && n2 > t2.maxDelay;
      }, "meta-viewport-scale-evaluate": Hh, "multiple-label-evaluate": lg, "nested-interactive-matches": function(e2, t2) {
        return !!(t2 = d(t2)) && !!A.ariaRoles[t2].childrenPresentational;
      }, "no-autoplay-audio-evaluate": Gh, "no-autoplay-audio-matches": function(e2) {
        return !!e2.currentSrc && !e2.hasAttribute("paused") && !e2.hasAttribute("muted");
      }, "no-empty-role-matches": function(e2, t2) {
        return !!t2.hasAttr("role") && !!t2.attr("role").trim();
      }, "no-explicit-name-required-matches": y0, "no-focusable-content-evaluate": function(e2, t2, n2) {
        if (n2.children) try {
          var r2, a2 = function t3(e3) {
            if (!e3.children) {
              if (1 === e3.props.nodeType) throw new Error("Cannot determine children");
              return [];
            }
            var n3 = [];
            e3.children.forEach(function(e4) {
              "widget" === Ks(e4) && F(e4) ? n3.push(e4) : n3.push.apply(n3, w(t3(e4)));
            });
            return n3;
          }(n2);
          return a2.length ? (0 < (r2 = a2.filter(bg)).length ? (this.data({ messageKey: "notHidden" }), this.relatedNodes(r2)) : this.relatedNodes(a2), false) : true;
        } catch (e3) {
        }
      }, "no-implicit-explicit-label-evaluate": Wg, "no-naming-method-matches": function(e2, t2) {
        var n2 = ju(t2).namingMethods;
        return !(n2 && 0 !== n2.length || "combobox" === c(t2) && yf(t2, 'input:not([type="hidden"])').length || gm(t2, { popupRoles: ["listbox"] }));
      }, "no-negative-tabindex-matches": function(e2, t2) {
        return t2 = parseInt(t2.attr("tabindex"), 10), isNaN(t2) || 0 <= t2;
      }, "no-role-matches": function(e2, t2) {
        return !t2.attr("role");
      }, "non-empty-if-present-evaluate": _m, "not-html-matches": function(e2, t2) {
        return "html" !== t2.props.nodeName;
      }, "object-is-loaded-matches": function(t2, n2) {
        return [y0, function(e2) {
          var t3;
          return null == e2 || null == (t3 = e2.ownerDocument) || !t3.createRange || ((t3 = e2.ownerDocument.createRange()).setStart(e2, 0), t3.setEnd(e2, e2.childNodes.length), 0 === t3.getClientRects().length);
        }].every(function(e2) {
          return e2(t2, n2);
        });
      }, "only-dlitems-evaluate": function(e2, t2, n2) {
        var a2 = ["definition", "term", "list"];
        return (n2 = n2.children.reduce(function(e3, t3) {
          var n3 = t3.actualNode;
          return "DIV" === n3.nodeName.toUpperCase() && null === d(n3) ? e3.concat(t3.children) : e3.concat(t3);
        }, []).reduce(function(e3, t3) {
          var n3, t3 = t3.actualNode, r2 = t3.nodeName.toUpperCase();
          return 1 === t3.nodeType && k(t3) ? (n3 = c(t3), ("DT" !== r2 && "DD" !== r2 || n3) && !a2.includes(n3) && e3.badNodes.push(t3)) : 3 === t3.nodeType && "" !== t3.nodeValue.trim() && (e3.hasNonEmptyTextNode = true), e3;
        }, { badNodes: [], hasNonEmptyTextNode: false })).badNodes.length && this.relatedNodes(n2.badNodes), !!n2.badNodes.length || n2.hasNonEmptyTextNode;
      }, "only-listitems-evaluate": Zh, "p-as-heading-evaluate": Xm, "p-as-heading-matches": function(e2) {
        var t2 = Array.from(e2.parentNode.childNodes), n2 = e2.textContent.trim();
        return !(0 === n2.length || 2 <= (n2.match(/[.!?:;](?![.!?:;])/g) || []).length) && 0 !== t2.slice(t2.indexOf(e2) + 1).filter(function(e3) {
          return "P" === e3.nodeName.toUpperCase() && "" !== e3.textContent.trim();
        }).length;
      }, "page-no-duplicate-after": Ng, "page-no-duplicate-evaluate": kg, "presentation-role-conflict-matches": function(e2, t2) {
        return null !== Lu(t2, { chromiumRoles: true });
      }, "presentational-role-evaluate": function(e2, t2, n2) {
        var r2 = c(n2);
        if (["presentation", "none"].includes(r2) && ["iframe", "frame"].includes(n2.props.nodeName) && n2.hasAttr("title")) this.data({ messageKey: "iframe", nodeName: n2.props.nodeName });
        else {
          var a2, o2 = d(n2);
          if (["presentation", "none"].includes(o2)) return this.data({ role: o2 }), true;
          ["presentation", "none"].includes(r2) && (r2 = mu().some(function(e3) {
            return n2.hasAttr(e3);
          }), a2 = F(n2), this.data({ messageKey: r2 && !a2 ? "globalAria" : !r2 && a2 ? "focusable" : "both", role: o2 }));
        }
        return false;
      }, "region-after": Wm, "region-evaluate": function(e2, t2, n2) {
        return this.data({ isIframe: ["iframe", "frame"].includes(n2.props.nodeName) }), !v.get("regionlessNodes", function() {
          return function t3(e3, n3) {
            var r2 = e3.actualNode;
            {
              if ("button" === d(e3) || Gm(e3, n3) || ["iframe", "frame"].includes(e3.props.nodeName) || Vd(e3.actualNode) && Ul(e3.actualNode, "href") || !k(r2)) {
                for (var a2 = e3; a2; ) a2._hasRegionDescendant = true, a2 = a2.parent;
                return ["iframe", "frame"].includes(e3.props.nodeName) ? [e3] : [];
              }
              return r2 !== document.body && Vs(r2, true) && !Um(e3) ? [e3] : e3.children.filter(function(e4) {
                e4 = e4.actualNode;
                return 1 === e4.nodeType;
              }).map(function(e4) {
                return t3(e4, n3);
              }).reduce(function(e4, t4) {
                return e4.concat(t4);
              }, []);
            }
          }(axe._tree[0], t2).map(function(e3) {
            for (; e3.parent && !e3.parent._hasRegionDescendant && e3.parent.actualNode !== document.body; ) e3 = e3.parent;
            return e3;
          }).filter(function(e3, t3, n3) {
            return n3.indexOf(e3) === t3;
          });
        }).includes(n2);
      }, "same-caption-summary-evaluate": Cm, "scope-value-evaluate": Am, "scrollable-region-focusable-matches": function(e2, t2) {
        return void 0 !== Mp(e2, 13) && false === gm(t2) && yf(t2, "*").some(function(e3) {
          return zs(e3, true, true);
        });
      }, "skip-link-evaluate": $m, "skip-link-matches": function(e2) {
        return Vd(e2) && ol(e2);
      }, "structured-dlitems-evaluate": Xh, "summary-interactive-matches": function(e2, t2) {
        var n2, r2, a2 = t2.parent;
        return !("details" !== a2.props.nodeName || (r2 = null == (r2 = (n2 = t2).actualNode) ? void 0 : r2.parentElement) && r2 !== n2.parent.actualNode) && a2.children.find(function(e3) {
          return "summary" === e3.props.nodeName;
        }) === t2;
      }, "svg-namespace-matches": h0, "svg-non-empty-title-evaluate": Rm, "tabindex-evaluate": gg, "table-or-grid-role-matches": function(e2, t2) {
        return t2 = d(t2), ["treegrid", "grid", "table"].includes(t2);
      }, "target-offset-evaluate": function(e2, t2, n2) {
        var r2 = (null == t2 ? void 0 : t2.minOffset) || 24;
        if (hl(10 * r2, n2.boundingClientRect)) return this.data({ messageKey: "large", minOffset: r2 }), true;
        var a2, o2, i2 = [], l2 = r2, u2 = x(Ml(n2, r2));
        try {
          for (u2.s(); !(a2 = u2.n()).done; ) {
            var s2 = a2.value;
            if ("widget" === Ks(s2) && F(s2)) {
              var c2 = null;
              try {
                c2 = gl(n2, s2, r2 / 2);
              } catch (e3) {
                if (e3.message.startsWith("splitRects")) return void this.data({ messageKey: "tooManyRects", closestOffset: 0, minOffset: r2 });
                throw e3;
              }
              null === c2 || r2 <= (c2 = 2 * (o2 = c2, Math.round(10 * o2) / 10)) + 0.05 || (l2 = Math.min(l2, c2), i2.push(s2));
            }
          }
        } catch (e3) {
          u2.e(e3);
        } finally {
          u2.f();
        }
        return 0 === i2.length ? (this.data({ closestOffset: l2, minOffset: r2 }), true) : (this.relatedNodes(i2.map(function(e3) {
          return e3.actualNode;
        })), i2.some(Jl) ? (this.data({ closestOffset: l2, minOffset: r2 }), !Jl(n2) && void 0) : void this.data({ messageKey: "nonTabbableNeighbor", closestOffset: l2, minOffset: r2 }));
      }, "target-size-evaluate": function(e2, t2, n2) {
        var r2, a2, o2, i2, l2, u2, t2 = (null == t2 ? void 0 : t2.minSize) || 24, s2 = n2.boundingClientRect;
        return hl(10 * t2, s2) ? (this.data({ messageKey: "large", minSize: t2 }), true) : (l2 = hl.bind(null, t2), i2 = Ml(n2), a2 = n2, r2 = i2.filter(function(e3) {
          return !qh(e3, a2) && Vh(a2, e3);
        }), o2 = (i2 = function(e3, t3) {
          var n3, r3 = [], a3 = [], o3 = x(t3);
          try {
            for (o3.s(); !(n3 = o3.n()).done; ) {
              var i3 = n3.value;
              !Vh(e3, i3) && vl(e3, i3) && "none" !== i3.getComputedStylePropertyValue("pointer-events") && (qh(e3, i3) ? r3 : a3).push(i3);
            }
          } catch (e4) {
            o3.e(e4);
          } finally {
            o3.f();
          }
          return { fullyObscuringElms: r3, partialObscuringElms: a3 };
        }(n2, i2)).fullyObscuringElms, i2 = i2.partialObscuringElms, !r2.length || !o2.length && l2(s2) ? o2.length ? (this.relatedNodes($h(o2)), this.data({ messageKey: "obscured" }), true) : (o2 = !Jl(n2) && void 0, l2(s2) ? (i2 = i2.filter(function(e3) {
          return "widget" === Ks(e3) && F(e3);
        })).length ? (n2 = function(e3, t3) {
          var n3, e3 = e3.boundingClientRect, t3 = t3.map(function(e4) {
            return e4.boundingClientRect;
          });
          try {
            n3 = yl(e3, t3);
          } catch (e4) {
            return null;
          }
          return function(e4, r3) {
            return e4.reduce(function(e5, t4) {
              var n4 = hl(r3, e5);
              return n4 !== hl(r3, t4) ? n4 ? e5 : t4 : (n4 = e5.width * e5.height, t4.width * t4.height < n4 ? e5 : t4);
            });
          }(n3);
        }(n2, i2)) ? l2(n2) ? (this.data(h({ minSize: t2 }, zh(n2 || s2))), this.relatedNodes($h(i2)), true) : r2.length ? (this.data({ minSize: t2, messageKey: "contentOverflow" }), void this.relatedNodes($h(r2))) : (l2 = i2.every(Jl), u2 = "partiallyObscured".concat(l2 ? "" : "NonTabbable"), this.data(h({ messageKey: u2, minSize: t2 }, zh(n2))), this.relatedNodes($h(i2)), l2 ? o2 : void 0) : void this.data({ minSize: t2, messageKey: "tooManyRects" }) : (this.data(h({ minSize: t2 }, zh(s2))), true) : (this.data(h({ minSize: t2 }, zh(s2))), o2)) : (this.data({ minSize: t2, messageKey: "contentOverflow" }), void this.relatedNodes($h(r2))));
      }, "td-has-header-evaluate": Fm, "td-headers-attr-evaluate": function(e2) {
        for (var t2 = [], r2 = [], a2 = [], n2 = 0; n2 < e2.rows.length; n2++) for (var o2 = e2.rows[n2], i2 = 0; i2 < o2.cells.length; i2++) t2.push(o2.cells[i2]);
        var l2 = t2.filter(function(e3) {
          return e3.getAttribute("id");
        }).map(function(e3) {
          return e3.getAttribute("id");
        });
        return t2.forEach(function(e3) {
          var t3, n3 = false;
          if (e3.hasAttribute("headers") && k(e3)) return (t3 = e3.getAttribute("headers").trim()) ? void (0 !== (t3 = ap(t3)).length && (e3.getAttribute("id") && (n3 = -1 !== t3.indexOf(e3.getAttribute("id").trim())), t3 = t3.some(function(e4) {
            return !l2.includes(e4);
          }), n3 || t3) && a2.push(e3)) : r2.push(e3);
        }), 0 < a2.length ? (this.relatedNodes(a2), false) : !r2.length || void this.relatedNodes(r2);
      }, "th-has-data-cells-evaluate": Jf, "title-only-evaluate": ig, "unique-frame-title-after": Vm, "unique-frame-title-evaluate": zm, "unsupportedrole-evaluate": Gg, "valid-lang-evaluate": tg, "valid-scrollable-semantics-evaluate": Ug, "widget-not-inline-matches": function(t2, n2) {
        return g0.every(function(e2) {
          return e2(t2, n2);
        });
      }, "window-is-top-matches": m0, "xml-lang-mismatch-evaluate": eg, "xml-lang-mismatch-matches": f0 }, E0 = function(e2) {
        this.id = e2.id, this.data = null, this.relatedNodes = [], this.result = null;
      };
      function F0(e2) {
        if ("string" != typeof e2) return e2;
        if (x0[e2]) return x0[e2];
        if (/^\s*function[\s\w]*\(/.test(e2)) return new Function("return " + e2 + ";")();
        throw new ReferenceError("Function ID does not exist in the metadata-function-map: ".concat(e2));
      }
      function A0(e2) {
        e2 = 0 < arguments.length && void 0 !== e2 ? e2 : {};
        return e2 = !Array.isArray(e2) && "object" === te(e2) ? e2 : { value: e2 };
      }
      function C0(e2) {
        e2 && (this.id = e2.id, this.configure(e2));
      }
      C0.prototype.enabled = true, C0.prototype.run = function(t2, e2, n2, r2, a2) {
        var o2 = ((e2 = e2 || {}).hasOwnProperty("enabled") ? e2 : this).enabled, i2 = this.getOptions(e2.options);
        if (o2) {
          var l2, o2 = new E0(this), e2 = wo(o2, e2, r2, a2);
          try {
            l2 = this.evaluate.call(e2, t2.actualNode, i2, t2, n2);
          } catch (e3) {
            return t2 && t2.actualNode && (e3.errorNode = wi.toSpec(t2)), void a2(e3);
          }
          e2.isAsync || (o2.result = l2, r2(o2));
        } else r2(null);
      }, C0.prototype.runSync = function(t2, e2, n2) {
        var r2 = (e2 = e2 || {}).enabled;
        if (!(void 0 === r2 ? this.enabled : r2)) return null;
        var a2, r2 = this.getOptions(e2.options), o2 = new E0(this), e2 = wo(o2, e2);
        e2.async = function() {
          throw new Error("Cannot run async check while in a synchronous run");
        };
        try {
          a2 = this.evaluate.call(e2, t2.actualNode, r2, t2, n2);
        } catch (e3) {
          throw t2 && t2.actualNode && (e3.errorNode = wi.toSpec(t2)), e3;
        }
        return o2.result = a2, o2;
      }, C0.prototype.configure = function(t2) {
        var n2 = this;
        t2.evaluate && !x0[t2.evaluate] || (this._internalCheck = true), t2.hasOwnProperty("enabled") && (this.enabled = t2.enabled), t2.hasOwnProperty("options") && (this._internalCheck ? this.options = A0(t2.options) : this.options = t2.options), ["evaluate", "after"].filter(function(e2) {
          return t2.hasOwnProperty(e2);
        }).forEach(function(e2) {
          return n2[e2] = F0(t2[e2]);
        });
      }, C0.prototype.getOptions = function(e2) {
        return this._internalCheck ? ki(this.options, A0(e2 || {})) : e2 || this.options;
      };
      var k0 = C0, N0 = function(e2) {
        this.id = e2.id, this.result = f.NA, this.pageLevel = e2.pageLevel, this.impact = null, this.nodes = [];
      };
      function T0(e2, t2) {
        this._audit = t2, this.id = e2.id, this.selector = e2.selector || "*", e2.impact && (E(f.impact.includes(e2.impact), "Impact ".concat(e2.impact, " is not a valid impact")), this.impact = e2.impact), this.excludeHidden = "boolean" != typeof e2.excludeHidden || e2.excludeHidden, this.enabled = "boolean" != typeof e2.enabled || e2.enabled, this.pageLevel = "boolean" == typeof e2.pageLevel && e2.pageLevel, this.reviewOnFail = "boolean" == typeof e2.reviewOnFail && e2.reviewOnFail, this.any = e2.any || [], this.all = e2.all || [], this.none = e2.none || [], this.tags = e2.tags || [], this.preload = !!e2.preload, this.actIds = e2.actIds, e2.matches && (this.matches = F0(e2.matches));
      }
      function R0(e2) {
        var n2, r2;
        if (e2.length) return n2 = false, r2 = {}, e2.forEach(function(e3) {
          var t2 = e3.results.filter(function(e4) {
            return e4;
          });
          (r2[e3.type] = t2).length && (n2 = true);
        }), n2 ? r2 : null;
      }
      T0.prototype.matches = function() {
        return true;
      }, T0.prototype.gather = function(e2) {
        var t2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, n2 = "mark_gather_start_" + this.id, r2 = "mark_gather_end_" + this.id, a2 = "mark_isVisibleToScreenReaders_start_" + this.id, o2 = "mark_isVisibleToScreenReaders_end_" + this.id, e2 = (t2.performanceTimer && _.mark(n2), Ff(this.selector, e2));
        return this.excludeHidden && (t2.performanceTimer && _.mark(a2), e2 = e2.filter(k), t2.performanceTimer) && (_.mark(o2), _.measure("rule_" + this.id + "#gather_axe.utils.isVisibleToScreenReaders", a2, o2)), t2.performanceTimer && (_.mark(r2), _.measure("rule_" + this.id + "#gather", n2, r2)), e2;
      }, T0.prototype.runChecks = function(t2, a2, o2, i2, n2, e2) {
        var l2 = this, u2 = Bo();
        this[t2].forEach(function(e3) {
          var n3 = l2._audit.checks[e3.id || e3], r2 = Fp(n3, l2.id, o2);
          u2.defer(function(e4, t3) {
            n3.run(a2, r2, i2, e4, t3);
          });
        }), u2.then(function(e3) {
          e3 = e3.filter(function(e4) {
            return e4;
          }), n2({ type: t2, results: e3 });
        }).catch(e2);
      }, T0.prototype.runChecksSync = function(e2, n2, r2, a2) {
        var o2 = this, i2 = [];
        return this[e2].forEach(function(e3) {
          var e3 = o2._audit.checks[e3.id || e3], t2 = Fp(e3, o2.id, r2);
          i2.push(e3.runSync(n2, t2, a2));
        }), { type: e2, results: i2 = i2.filter(function(e3) {
          return e3;
        }) };
      }, T0.prototype.run = function(a2) {
        var e2, o2 = this, i2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t2 = 2 < arguments.length ? arguments[2] : void 0, n2 = 3 < arguments.length ? arguments[3] : void 0, l2 = (i2.performanceTimer && this._trackPerformance(), Bo()), u2 = new N0(this);
        try {
          e2 = this.gatherAndMatchNodes(a2, i2);
        } catch (e3) {
          return void n2(new S({ cause: e3, ruleId: this.id }));
        }
        i2.performanceTimer && this._logGatherPerformance(e2), e2.forEach(function(r2) {
          l2.defer(function(n3, t3) {
            var e3 = Bo();
            ["any", "all", "none"].forEach(function(n4) {
              e3.defer(function(e4, t4) {
                o2.runChecks(n4, r2, i2, a2, e4, t4);
              });
            }), e3.then(function(e4) {
              var t4 = R0(e4);
              t4 && (t4.node = new yo(r2), u2.nodes.push(t4), o2.reviewOnFail) && (["any", "all"].forEach(function(e5) {
                t4[e5].forEach(function(e6) {
                  false === e6.result && (e6.result = void 0);
                });
              }), t4.none.forEach(function(e5) {
                true === e5.result && (e5.result = void 0);
              })), n3();
            }).catch(function(e4) {
              return t3(e4);
            });
          });
        }), l2.defer(function(e3) {
          return setTimeout(e3, 0);
        }), i2.performanceTimer && this._logRulePerformance(), l2.then(function() {
          return t2(u2);
        }).catch(function(e3) {
          return n2(e3);
        });
      }, T0.prototype.runSync = function(a2) {
        var e2, o2 = this, i2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, l2 = (i2.performanceTimer && this._trackPerformance(), new N0(this));
        try {
          e2 = this.gatherAndMatchNodes(a2, i2);
        } catch (e3) {
          throw new S({ cause: e3, ruleId: this.id });
        }
        return i2.performanceTimer && this._logGatherPerformance(e2), e2.forEach(function(t2) {
          var n2 = [], r2 = (["any", "all", "none"].forEach(function(e3) {
            n2.push(o2.runChecksSync(e3, t2, i2, a2));
          }), R0(n2));
          r2 && (r2.node = t2.actualNode ? new yo(t2) : null, l2.nodes.push(r2), o2.reviewOnFail) && (["any", "all"].forEach(function(e3) {
            r2[e3].forEach(function(e4) {
              false === e4.result && (e4.result = void 0);
            });
          }), r2.none.forEach(function(e3) {
            true === e3.result && (e3.result = void 0);
          }));
        }), i2.performanceTimer && this._logRulePerformance(), l2;
      }, T0.prototype._trackPerformance = function() {
        this._markStart = "mark_rule_start_" + this.id, this._markEnd = "mark_rule_end_" + this.id, this._markChecksStart = "mark_runchecks_start_" + this.id, this._markChecksEnd = "mark_runchecks_end_" + this.id;
      }, T0.prototype._logGatherPerformance = function(e2) {
        Na("gather (", e2.length, "):", _.timeElapsed() + "ms"), _.mark(this._markChecksStart);
      }, T0.prototype._logRulePerformance = function() {
        _.mark(this._markChecksEnd), _.mark(this._markEnd), _.measure("runchecks_" + this.id, this._markChecksStart, this._markChecksEnd), _.measure("rule_" + this.id, this._markStart, this._markEnd);
      }, T0.prototype.gatherAndMatchNodes = function(t2, e2) {
        var n2 = this, r2 = "mark_matches_start_" + this.id, a2 = "mark_matches_end_" + this.id, o2 = this.gather(t2, e2);
        return e2.performanceTimer && _.mark(r2), o2 = o2.filter(function(e3) {
          return n2.matches(e3.actualNode, e3, t2);
        }), e2.performanceTimer && (_.mark(a2), _.measure("rule_" + this.id + "#matches", r2, a2)), o2;
      }, T0.prototype.after = function(i2, l2) {
        var t2, e2, n2, u2 = this, r2 = Di(t2 = this).map(function(e3) {
          e3 = t2._audit.checks[e3.id || e3];
          return e3 && "function" == typeof e3.after ? e3 : null;
        }).filter(Boolean), s2 = this.id;
        return r2.forEach(function(e3) {
          t3 = i2.nodes, n3 = e3.id, r3 = [], t3.forEach(function(t4) {
            Di(t4).forEach(function(e4) {
              e4.id === n3 && (e4.node = t4.node, r3.push(e4));
            });
          });
          var n3, r3, t3 = r3, a2 = Fp(e3, s2, l2), o2 = e3.after(t3, a2.options);
          u2.reviewOnFail && o2.forEach(function(e4) {
            var t4 = (u2.any.includes(e4.id) || u2.all.includes(e4.id)) && false === e4.result, n4 = u2.none.includes(e4.id) && true === e4.result;
            (t4 || n4) && (e4.result = void 0);
          }), t3.forEach(function(e4) {
            delete e4.node, -1 === o2.indexOf(e4) && (e4.filtered = true);
          });
        }), i2.nodes = (e2 = ["any", "all", "none"], n2 = (r2 = i2).nodes.filter(function(t3) {
          var n3 = 0;
          return e2.forEach(function(e3) {
            t3[e3] = t3[e3].filter(function(e4) {
              return true !== e4.filtered;
            }), n3 += t3[e3].length;
          }), 0 < n3;
        }), n2 = r2.pageLevel && n2.length ? [n2.reduce(function(t3, n3) {
          if (t3) return e2.forEach(function(e3) {
            t3[e3].push.apply(t3[e3], n3[e3]);
          }), t3;
        })] : n2), i2;
      }, T0.prototype.configure = function(e2) {
        e2.hasOwnProperty("selector") && (this.selector = e2.selector), e2.hasOwnProperty("excludeHidden") && (this.excludeHidden = "boolean" != typeof e2.excludeHidden || e2.excludeHidden), e2.hasOwnProperty("enabled") && (this.enabled = "boolean" != typeof e2.enabled || e2.enabled), e2.hasOwnProperty("pageLevel") && (this.pageLevel = "boolean" == typeof e2.pageLevel && e2.pageLevel), e2.hasOwnProperty("reviewOnFail") && (this.reviewOnFail = "boolean" == typeof e2.reviewOnFail && e2.reviewOnFail), e2.hasOwnProperty("any") && (this.any = e2.any), e2.hasOwnProperty("all") && (this.all = e2.all), e2.hasOwnProperty("none") && (this.none = e2.none), e2.hasOwnProperty("tags") && (this.tags = e2.tags), e2.hasOwnProperty("actIds") && (this.actIds = e2.actIds), e2.hasOwnProperty("matches") && (this.matches = F0(e2.matches)), e2.impact && (E(f.impact.includes(e2.impact), "Impact ".concat(e2.impact, " is not a valid impact")), this.impact = e2.impact);
      };
      var O0 = Pe(Ca()), _0 = /\{\{.+?\}\}/g, S0 = ve(function e2(t2) {
        ge(this, e2), this.lang = "en", this.defaultConfig = t2, this.standards = A, this._init(), this._defaultLocale = null;
      }, [{ key: "_setDefaultLocale", value: function() {
        if (!this._defaultLocale) {
          for (var e2 = { checks: {}, rules: {}, failureSummaries: {}, incompleteFallbackMessage: "", lang: this.lang }, t2 = Object.keys(this.data.checks), n2 = 0; n2 < t2.length; n2++) {
            var r2 = t2[n2], a2 = this.data.checks[r2].messages, o2 = a2.pass, i2 = a2.fail, a2 = a2.incomplete;
            e2.checks[r2] = { pass: o2, fail: i2, incomplete: a2 };
          }
          for (var l2 = Object.keys(this.data.rules), u2 = 0; u2 < l2.length; u2++) {
            var s2 = l2[u2], c2 = this.data.rules[s2], d2 = c2.description, c2 = c2.help;
            e2.rules[s2] = { description: d2, help: c2 };
          }
          for (var p2 = Object.keys(this.data.failureSummaries), f2 = 0; f2 < p2.length; f2++) {
            var m2 = p2[f2], h2 = this.data.failureSummaries[m2].failureMessage;
            e2.failureSummaries[m2] = { failureMessage: h2 };
          }
          e2.incompleteFallbackMessage = this.data.incompleteFallbackMessage, this._defaultLocale = e2;
        }
      } }, { key: "_resetLocale", value: function() {
        var e2 = this._defaultLocale;
        e2 && this.applyLocale(e2);
      } }, { key: "_applyCheckLocale", value: function(e2) {
        for (var t2 = Object.keys(e2), n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          if (!this.data.checks[r2]) throw new Error('Locale provided for unknown check: "'.concat(r2, '"'));
          this.data.checks[r2] = I0(this.data.checks[r2], e2[r2]);
        }
      } }, { key: "_applyRuleLocale", value: function(e2) {
        for (var t2 = Object.keys(e2), n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          if (!this.data.rules[r2]) throw new Error('Locale provided for unknown rule: "'.concat(r2, '"'));
          this.data.rules[r2] = B0(this.data.rules[r2], e2[r2]);
        }
      } }, { key: "_applyFailureSummaries", value: function(e2) {
        for (var t2 = Object.keys(e2), n2 = 0; n2 < t2.length; n2++) {
          var r2 = t2[n2];
          if (!this.data.failureSummaries[r2]) throw new Error('Locale provided for unknown failureMessage: "'.concat(r2, '"'));
          this.data.failureSummaries[r2] = j0(this.data.failureSummaries[r2], e2[r2]);
        }
      } }, { key: "applyLocale", value: function(e2) {
        this._setDefaultLocale(), e2.checks && this._applyCheckLocale(e2.checks), e2.rules && this._applyRuleLocale(e2.rules), e2.failureSummaries && this._applyFailureSummaries(e2.failureSummaries, "failureSummaries"), e2.incompleteFallbackMessage && (this.data.incompleteFallbackMessage = L0(this.data.incompleteFallbackMessage, e2.incompleteFallbackMessage)), e2.lang && (this.lang = e2.lang);
      } }, { key: "setAllowedOrigins", value: function(e2) {
        var t2, n2 = M0(), r2 = (this.allowedOrigins = [], x(e2));
        try {
          for (r2.s(); !(t2 = r2.n()).done; ) {
            var a2 = t2.value;
            if (a2 === f.allOrigins) return void (this.allowedOrigins = ["*"]);
            a2 !== f.sameOrigin ? this.allowedOrigins.push(a2) : n2 && this.allowedOrigins.push(n2);
          }
        } catch (e3) {
          r2.e(e3);
        } finally {
          r2.f();
        }
      } }, { key: "_init", value: function() {
        var e2 = function(e3) {
          var t2;
          e3 ? (t2 = Do(e3)).commons = e3.commons : t2 = {};
          t2.reporter = t2.reporter || null, t2.noHtml = t2.noHtml || false, t2.allowedOrigins || (e3 = M0(), t2.allowedOrigins = e3 ? [e3] : []);
          return t2.rules = t2.rules || [], t2.checks = t2.checks || [], t2.data = h({ checks: {}, rules: {} }, t2.data), t2;
        }(this.defaultConfig);
        this.lang = e2.lang || "en", this.reporter = e2.reporter, this.commands = {}, this.rules = [], this.checks = {}, this.brand = "axe", this.application = "axeAPI", this.tagExclude = ["experimental", "deprecated"], this.noHtml = e2.noHtml, this.allowedOrigins = e2.allowedOrigins, P0(e2.rules, this, "addRule"), P0(e2.checks, this, "addCheck"), this.data = {}, this.data.checks = e2.data && e2.data.checks || {}, this.data.rules = e2.data && e2.data.rules || {}, this.data.failureSummaries = e2.data && e2.data.failureSummaries || {}, this.data.incompleteFallbackMessage = e2.data && e2.data.incompleteFallbackMessage || "", this._constructHelpUrls();
      } }, { key: "registerCommand", value: function(e2) {
        this.commands[e2.id] = e2.callback;
      } }, { key: "addRule", value: function(e2) {
        e2.metadata && (this.data.rules[e2.id] = e2.metadata);
        var t2 = this.getRule(e2.id);
        t2 ? t2.configure(e2) : this.rules.push(new T0(e2, this));
      } }, { key: "addCheck", value: function(e2) {
        var t2 = e2.metadata;
        "object" === te(t2) && (this.data.checks[e2.id] = t2, "object" === te(t2.messages)) && Object.keys(t2.messages).filter(function(e3) {
          return t2.messages.hasOwnProperty(e3) && "string" == typeof t2.messages[e3];
        }).forEach(function(e3) {
          0 === t2.messages[e3].indexOf("function") && (t2.messages[e3] = new Function("return " + t2.messages[e3] + ";")());
        }), this.checks[e2.id] ? this.checks[e2.id].configure(e2) : this.checks[e2.id] = new k0(e2);
      } }, { key: "run", value: function(a2, o2, i2, l2) {
        this.normalizeOptions(o2), yo.setRunOptions(o2), axe._selectCache = [];
        e2 = this.rules, n2 = a2, r2 = o2;
        var n2, r2, e2 = e2.reduce(function(e3, t3) {
          return Df(t3, n2, r2) && (t3.preload ? e3.later : e3.now).push(t3), e3;
        }, { now: [], later: [] }), t2 = e2.now, u2 = e2.later, s2 = Bo(), e2 = (t2.forEach(function(e3) {
          s2.defer(q0(e3, a2, o2));
        }), Bo()), t2 = (u2.length && e2.defer(function(t3) {
          mf(o2).then(function(e3) {
            return t3(e3);
          }).catch(function(e3) {
            console.warn("Couldn't load preload assets: ", e3), t3(void 0);
          });
        }), Bo());
        t2.defer(s2), t2.defer(e2), t2.then(function(e3) {
          var t3, n3 = e3.pop(), r3 = (n3 && n3.length && (n3 = n3[0]) && (a2 = h({}, a2, n3)), e3[0]);
          u2.length ? (t3 = Bo(), u2.forEach(function(e4) {
            e4 = q0(e4, a2, o2);
            t3.defer(e4);
          }), t3.then(function(e4) {
            axe._selectCache = void 0, i2(r3.concat(e4).filter(function(e5) {
              return !!e5;
            }));
          }).catch(l2)) : (axe._selectCache = void 0, i2(r3.filter(function(e4) {
            return !!e4;
          })));
        }).catch(l2);
      } }, { key: "after", value: function(e2, n2) {
        var r2 = this.rules;
        return e2.map(function(e3) {
          var t2 = xi(r2, "id", e3.id);
          if (t2) return t2.after(e3, n2);
          throw new Error("Result for unknown rule. You may be running mismatch axe-core versions");
        });
      } }, { key: "getRule", value: function(t2) {
        return this.rules.find(function(e2) {
          return e2.id === t2;
        });
      } }, { key: "normalizeOptions", value: function(e2) {
        var t2 = [], n2 = [];
        if (this.rules.forEach(function(e3) {
          n2.push(e3.id), e3.tags.forEach(function(e4) {
            t2.includes(e4) || t2.push(e4);
          });
        }), ["object", "string"].includes(te(e2.runOnly))) {
          if ("string" == typeof e2.runOnly && (e2.runOnly = [e2.runOnly]), Array.isArray(e2.runOnly)) {
            var r2 = e2.runOnly.find(function(e3) {
              return t2.includes(e3);
            }), a2 = e2.runOnly.find(function(e3) {
              return n2.includes(e3);
            });
            if (r2 && a2) throw new Error("runOnly cannot be both rules and tags");
            e2.runOnly = a2 ? { type: "rule", values: e2.runOnly } : { type: "tag", values: e2.runOnly };
          }
          r2 = e2.runOnly;
          if (r2.value && !r2.values && (r2.values = r2.value, delete r2.value), !Array.isArray(r2.values) || 0 === r2.values.length) throw new Error("runOnly.values must be a non-empty array");
          if (["rule", "rules"].includes(r2.type)) r2.type = "rule", r2.values.forEach(function(e3) {
            if (!n2.includes(e3)) throw new Error("unknown rule `" + e3 + "` in options.runOnly");
          });
          else {
            if (!["tag", "tags", void 0].includes(r2.type)) throw new Error("Unknown runOnly type '".concat(r2.type, "'"));
            r2.type = "tag";
            a2 = r2.values.filter(function(e3) {
              return !t2.includes(e3) && !/wcag2[1-3]a{1,3}/.test(e3);
            });
            0 !== a2.length && axe.log("Could not find tags `" + a2.join("`, `") + "`");
          }
        }
        return "object" === te(e2.rules) && Object.keys(e2.rules).forEach(function(e3) {
          if (!n2.includes(e3)) throw new Error("unknown rule `" + e3 + "` in options.rules");
        }), e2;
      } }, { key: "setBranding", value: function(e2) {
        var t2 = { brand: this.brand, application: this.application };
        "string" == typeof e2 && (this.application = e2), e2 && e2.hasOwnProperty("brand") && e2.brand && "string" == typeof e2.brand && (this.brand = e2.brand), e2 && e2.hasOwnProperty("application") && e2.application && "string" == typeof e2.application && (this.application = e2.application), this._constructHelpUrls(t2);
      } }, { key: "_constructHelpUrls", value: function() {
        var n2 = this, r2 = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : null, a2 = (axe.version.match(/^[1-9][0-9]*\.[0-9]+/) || ["x.y"])[0];
        this.rules.forEach(function(e2) {
          n2.data.rules[e2.id] || (n2.data.rules[e2.id] = {});
          var t2 = n2.data.rules[e2.id];
          ("string" != typeof t2.helpUrl || r2 && t2.helpUrl === z0(r2, e2.id, a2)) && (t2.helpUrl = z0(n2, e2.id, a2));
        });
      } }, { key: "resetRulesAndChecks", value: function() {
        this._init(), this._resetLocale();
      } }]);
      function M0() {
        return window2.origin && "null" !== window2.origin ? window2.origin : window2.location && window2.location.origin && "null" !== window2.location.origin ? window2.location.origin : void 0;
      }
      function P0(e2, t2, n2) {
        for (var r2 = 0, a2 = e2.length; r2 < a2; r2++) t2[n2](e2[r2]);
      }
      var I0 = function(e2, t2) {
        var n2 = t2.pass, r2 = t2.fail;
        return "string" == typeof n2 && _0.test(n2) && (n2 = O0.default.compile(n2)), "string" == typeof r2 && _0.test(r2) && (r2 = O0.default.compile(r2)), h({}, e2, { messages: { pass: n2 || e2.messages.pass, fail: r2 || e2.messages.fail, incomplete: "object" === te(e2.messages.incomplete) ? h({}, e2.messages.incomplete, t2.incomplete) : t2.incomplete } });
      }, B0 = function(e2, t2) {
        var n2 = t2.help, t2 = t2.description;
        return "string" == typeof n2 && _0.test(n2) && (n2 = O0.default.compile(n2)), "string" == typeof t2 && _0.test(t2) && (t2 = O0.default.compile(t2)), h({}, e2, { help: n2 || e2.help, description: t2 || e2.description });
      }, j0 = function(e2, t2) {
        t2 = t2.failureMessage;
        return h({}, e2, { failureMessage: (t2 = "string" == typeof t2 && _0.test(t2) ? O0.default.compile(t2) : t2) || e2.failureMessage });
      }, L0 = function(e2, t2) {
        return (t2 = "string" == typeof t2 && _0.test(t2) ? O0.default.compile(t2) : t2) || e2;
      };
      function q0(r2, e2, a2) {
        return a2.performanceTimer && _.mark("mark_rule_start_" + r2.id), function(t2, n2) {
          r2.run(e2, a2, function(e3) {
            t2(e3);
          }, function(e3) {
            a2.debug ? n2(e3) : (e3 = Object.assign(new N0(r2), { result: f.CANTTELL, description: "An error occured while running this rule", message: e3.message, stack: e3.stack, error: e3, errorNode: e3.errorNode }), t2(e3));
          });
        };
      }
      function z0(e2, t2, n2) {
        var r2 = e2.brand, a2 = e2.application, e2 = e2.lang;
        return f.helpUrlBase + r2 + "/" + (n2 || axe.version.substring(0, axe.version.lastIndexOf("."))) + "/" + t2 + "?application=" + encodeURIComponent(a2) + (e2 && "en" !== e2 ? "&lang=" + encodeURIComponent(e2) : "");
      }
      function V0(e2) {
        var t2 = window2 && "Node" in window2 && "NodeList" in window2, n2 = !!document;
        if (!t2 || !n2) {
          if (!e2 || !e2.ownerDocument) throw new Error('Required "window" or "document" globals not defined and cannot be deduced from the context. Either set the globals before running or pass in a valid Element.');
          n2 || (v.set("globalDocumentSet", true), document = e2.ownerDocument), t2 || (v.set("globalWindowSet", true), window2 = document.defaultView);
        }
      }
      var $0 = function() {
        v.get("globalDocumentSet") && (v.set("globalDocumentSet", false), document = null), v.get("globalWindowSet") && (v.set("globalWindowSet", false), window2 = null), axe._memoizedFns.forEach(function(e2) {
          return e2.clear();
        }), v.clear(), axe._tree = void 0, axe._selectorData = void 0, axe._selectCache = void 0;
      };
      function H0(n2, r2, a2, o2) {
        try {
          n2 = new Rp(n2), axe._tree = n2.flatTree, axe._selectorData = lo(n2.flatTree);
        } catch (e3) {
          return $0(), o2(e3);
        }
        var e2 = Bo(), i2 = axe._audit;
        r2.performanceTimer && _.auditStart(), n2.frames.length && false !== r2.iframes && e2.defer(function(e3, t2) {
          Ai(n2, r2, "rules", null, e3, t2);
        }), e2.defer(function(e3, t2) {
          i2.run(n2, r2, e3, t2);
        }), e2.then(function(e3) {
          try {
            r2.performanceTimer && _.auditEnd();
            var t2 = Fi(e3.map(function(e4) {
              return { results: e4 };
            }));
            n2.initiator && ((t2 = i2.after(t2, r2)).forEach(bf), t2 = t2.map(ja));
            try {
              a2(t2, $0);
            } catch (e4) {
              $0(), Na(e4);
            }
          } catch (e4) {
            $0(), o2(e4);
          }
        }).catch(function(e3) {
          $0(), o2(e3);
        });
      }
      function U0(e2, t2, n2) {
        function r2(e3) {
          e3 instanceof Error == false && (e3 = new Error(e3)), n2(e3);
        }
        var a2 = n2, o2 = e2 && e2.context || {}, i2 = (o2.hasOwnProperty("include") && !o2.include.length && (o2.include = [document]), e2 && e2.options || {});
        switch (e2.command) {
          case "rules":
            return H0(o2, i2, function(e3, t3) {
              e3 = wi.mapRawResults(e3), a2(e3), t3();
            }, r2);
          case "cleanup-plugin":
            return Bf(a2, r2);
          default:
            if (axe._audit && axe._audit.commands && axe._audit.commands[e2.command]) return axe._audit.commands[e2.command](e2, n2);
        }
      }
      function G0(e2) {
        this._run = e2.run, this._collect = e2.collect, this._registry = {}, e2.commands.forEach(function(e3) {
          axe._audit.registerCommand(e3);
        });
      }
      function W0(e2) {
        axe.plugins[e2.id] = new G0(e2);
      }
      function Y0() {
        var e2 = axe._audit;
        if (!e2) throw new Error("No audit configured");
        e2.resetRulesAndChecks(), Object.keys(cu).forEach(function(e3) {
          cu[e3] = su[e3];
        });
      }
      function K0(e2) {
        var e2 = D(e2, 3), t2 = e2[0], n2 = e2[1], e2 = e2[2], r2 = new TypeError("axe.run arguments are invalid");
        if (!Vp(t2)) {
          if (void 0 !== e2) throw r2;
          e2 = n2, n2 = t2, t2 = document;
        }
        if ("object" !== te(n2)) {
          if (void 0 !== e2) throw r2;
          e2 = n2, n2 = {};
        }
        if ("function" != typeof e2 && void 0 !== e2) throw r2;
        return (n2 = Do(n2)).reporter = null != (r2 = null != (r2 = n2.reporter) ? r2 : null == (r2 = axe._audit) ? void 0 : r2.reporter) ? r2 : "v1", { context: t2, options: n2, callback: e2 };
      }
      window2.top !== window2 && (fi.subscribe("axe.start", U0), fi.subscribe("axe.ping", function(e2, t2, n2) {
        n2({ axe: true });
      })), G0.prototype.run = function() {
        return this._run.apply(this, arguments);
      }, G0.prototype.collect = function() {
        return this._collect.apply(this, arguments);
      }, G0.prototype.cleanup = function(e2) {
        var n2 = axe.utils.queue(), r2 = this;
        Object.keys(this._registry).forEach(function(t2) {
          n2.defer(function(e3) {
            r2._registry[t2].cleanup(e3);
          });
        }), n2.then(e2);
      }, G0.prototype.add = function(e2) {
        this._registry[e2.id] = e2;
      };
      var X0 = function() {
      };
      function Z0(e2) {
        if (axe._tree) throw new Error("Axe is already setup. Call `axe.teardown()` before calling `axe.setup` again.");
        return V0(e2 = e2 && "object" === te(e2.documentElement) && "object" === te(e2.defaultView) ? e2.documentElement : e2), axe._tree = dp(e2), axe._selectorData = lo(axe._tree), axe._tree[0];
      }
      function J0(e2, t2, n2) {
        console.warn('"na" reporter will be deprecated in axe v4.0. Use the "v2" reporter instead.'), "function" == typeof t2 && (n2 = t2, t2 = {});
        var r2 = t2.environmentData, a2 = b(a2 = t2, K);
        n2(h({}, Ap(r2), { toolOptions: a2 }, vp(e2, t2)));
      }
      function Q0(e2, t2, n2) {
        "function" == typeof t2 && (n2 = t2, t2 = {});
        var r2 = t2.environmentData, a2 = b(a2 = t2, X);
        t2.resultTypes = ["violations"], e2 = vp(e2, t2).violations, n2(h({}, Ap(r2), { toolOptions: a2, violations: e2 }));
      }
      function eb(e2, t2, n2) {
        "function" == typeof t2 && (n2 = t2, t2 = {});
        var r2 = t2.environmentData, t2 = b(t2, Z);
        rb(e2, t2, function(e3) {
          var t3 = Ap(r2);
          n2({ raw: e3, env: t3 });
        });
      }
      function tb(e2, t2, n2) {
        function r2(e3) {
          e3.nodes.forEach(function(e4) {
            e4.failureSummary = hp(e4);
          });
        }
        "function" == typeof t2 && (n2 = t2, t2 = {});
        var a2 = t2.environmentData, o2 = b(o2 = t2, J);
        (e2 = vp(e2, t2)).incomplete.forEach(r2), e2.violations.forEach(r2), n2(h({}, Ap(a2), { toolOptions: o2 }, e2));
      }
      function nb(e2, t2, n2) {
        "function" == typeof t2 && (n2 = t2, t2 = {});
        var r2 = t2.environmentData, a2 = b(a2 = t2, Q), e2 = vp(e2, t2);
        n2(h({}, Ap(r2), { toolOptions: a2 }, e2));
      }
      var rb = function(e2, t2, n2) {
        if ("function" == typeof t2 && (n2 = t2, t2 = {}), !e2 || !Array.isArray(e2)) return n2(e2);
        n2(e2.map(function(e3) {
          for (var t3 = h({}, e3), n3 = 0, r2 = ["passes", "violations", "incomplete", "inapplicable"]; n3 < r2.length; n3++) {
            var a2 = r2[n3];
            t3[a2] = wi.mapRawNodeResults(t3[a2]);
          }
          return t3;
        }));
      }, yn = { base: { Audit: S0, CheckResult: E0, Check: k0, Context: Rp, RuleResult: N0, Rule: T0, metadataFunctionMap: x0 }, public: { reporters: jf }, helpers: { failureSummary: hp, incompleteFallbackMessage: gp, processAggregate: vp }, utils: { setDefaultFrameMessenger: di, cacheNodeSelectors: cp, getNodesMatchingExpression: ip, convertSelector: To }, commons: { dom: { nativelyHidden: zi, displayHidden: Vi, visibilityHidden: $i, contentVisibiltyHidden: Hi, ariaHidden: Ui, opacityHidden: Gi, scrollHidden: Wi, overflowHidden: Yi, clipHidden: Ki, areaHidden: Xi, detailsHidden: Zi } } };
      axe._thisWillBeDeletedDoNotUse = yn, axe.constants = f, axe.log = Na, axe.AbstractVirtualNode = p, axe.SerialVirtualNode = If, axe.VirtualNode = rp, axe._cache = v, axe.imports = a, axe.cleanup = Bf, axe.configure = zf, axe.frameMessenger = function(e2) {
        fi.updateMessenger(e2);
      }, axe.getRules = Vf, axe._load = function(e2) {
        axe._audit = new S0(e2);
      }, axe.plugins = {}, axe.registerPlugin = W0, axe.hasReporter = Lf, axe.getReporter = qf, axe.addReporter = function(e2, t2, n2) {
        jf[e2] = t2, n2 && (Sf = t2);
      }, axe.reset = Y0, axe._runRules = H0, axe.runVirtualRule = function(e2, t2) {
        var n2 = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r2 = (n2.reporter = n2.reporter || axe._audit.reporter || "v1", axe._selectorData = {}, t2 instanceof p || (t2 = new If(t2)), _p(e2));
        if (r2) return bf(r2 = (r2 = Object.create(r2, { excludeHidden: { value: false } })).runSync({ initiator: true, include: [t2], exclude: [], frames: [], page: false, focusable: true, size: {}, flatTree: [] }, n2)), ja(r2), (t2 = za([r2])).violations.forEach(function(e3) {
          return e3.nodes.forEach(function(e4) {
            e4.failureSummary = hp(e4);
          });
        }), h({}, Ap(), t2, { toolOptions: n2 });
        throw new Error("unknown rule `" + e2 + "`");
      }, axe.run = function() {
        for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
        V0(t2[0]);
        var r2 = (i2 = K0(t2)).context, l2 = i2.options, a2 = void 0 === (i2 = i2.callback) ? X0 : i2, o2 = (i2 = function(t3) {
          var e3, n3, r3;
          "function" == typeof Promise && t3 === X0 ? e3 = new Promise(function(e4, t4) {
            n3 = t4, r3 = e4;
          }) : (r3 = function(e4) {
            return t3(null, e4);
          }, n3 = function(e4) {
            return t3(e4);
          });
          return { thenable: e3, reject: n3, resolve: r3 };
        }(a2)).thenable, u2 = i2.resolve, s2 = i2.reject;
        try {
          E(axe._audit, "No audit configured"), E(!axe._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run.");
        } catch (e3) {
          var i2 = e3, c2 = a2;
          if ("function" != typeof c2 || c2 === X0) throw i2;
          return void c2(i2.message);
        }
        return axe._running = true, l2.performanceTimer && axe.utils.performanceTimer.start(), axe._runRules(r2, l2, function(e3, t3) {
          function n3(e4) {
            axe._running = false, t3();
            try {
              s2(e4);
            } catch (e5) {
              axe.log(e5);
            }
          }
          l2.performanceTimer && axe.utils.performanceTimer.end();
          try {
            var r3 = e3, a3 = l2, o3 = function(e4) {
              axe._running = false, t3();
              try {
                u2(e4);
              } catch (e5) {
                axe.log(e5);
              }
            }, i3 = n3;
            void 0 !== (r3 = qf(a3.reporter)(r3, a3, o3, i3)) && o3(r3);
          } catch (e4) {
            n3(e4);
          }
        }, function(e3) {
          l2.performanceTimer && axe.utils.performanceTimer.end(), axe._running = false, a2(e3), s2(e3);
        }), o2;
      }, axe.setup = Z0, axe.teardown = $0, axe.runPartial = function() {
        for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++) t2[n2] = arguments[n2];
        var r2 = (a2 = K0(t2)).options, a2 = a2.context, o2 = (E(axe._audit, "Axe is not configured. Audit is missing."), E(!axe._running, "Axe is already running. Use `await axe.run()` to wait for the previous run to finish before starting a new run."), new Rp(a2, axe._tree));
        return axe._tree = o2.flatTree, axe._selectorData = lo(o2.flatTree), axe._running = true, r2.elementRef = false, new Promise(function(e3, t3) {
          axe._audit.run(o2, r2, e3, t3);
        }).then(function(e3) {
          e3 = wi.mapRawResults(e3);
          var t3, n3 = o2.frames.map(function(e4) {
            e4 = e4.node;
            return wi.toSpec(e4);
          });
          return o2.initiator && (t3 = Ap()), axe._running = false, $0(), { results: e3, frames: n3, environmentData: t3 };
        }).catch(function(e3) {
          return axe._running = false, $0(), Promise.reject(e3);
        });
      }, axe.finishRun = function(e2) {
        var t2, n2 = Do(n2 = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}), r2 = (e2.find(function(e3) {
          return e3.environmentData;
        }) || {}).environmentData;
        axe._audit.normalizeOptions(n2), n2.reporter = null != (d2 = null != (d2 = n2.reporter) ? d2 : null == (d2 = axe._audit) ? void 0 : d2.reporter) ? d2 : "v1";
        var a2 = [], o2 = x(d2 = e2);
        try {
          for (o2.s(); !(t2 = o2.n()).done; ) {
            var i2, l2 = t2.value, u2 = a2.shift();
            l2 && (l2.frameSpec = null != u2 ? u2 : null, i2 = function(e3) {
              var t3 = e3.frames, n3 = e3.frameSpec;
              return n3 ? t3.map(function(e4) {
                return wi.mergeSpecs(e4, n3);
              }) : t3;
            }(l2), a2.unshift.apply(a2, w(i2)));
          }
        } catch (e3) {
          o2.e(e3);
        } finally {
          o2.f();
        }
        var s2, c2, d2 = Fi(e2);
        return (d2 = axe._audit.after(d2, n2)).forEach(bf), d2 = d2.map(ja), s2 = d2, c2 = h({ environmentData: r2 }, n2), new Promise(function(e3, t3) {
          qf(c2.reporter)(s2, c2, e3, t3);
        });
      }, axe.commons = En, axe.utils = Ra, axe.addReporter("na", J0), axe.addReporter("no-passes", Q0), axe.addReporter("rawEnv", eb), axe.addReporter("raw", rb), axe.addReporter("v1", tb), axe.addReporter("v2", nb, true), axe._load({ lang: "en", data: { rules: { accesskeys: { description: "Ensure every accesskey attribute value is unique", help: "accesskey attribute value should be unique" }, "area-alt": { description: "Ensure <area> elements of image maps have alternate text", help: "Active <area> elements must have alternate text" }, "aria-allowed-attr": { description: "Ensure an element's role supports its ARIA attributes", help: "Elements must only use supported ARIA attributes" }, "aria-allowed-role": { description: "Ensure role attribute has an appropriate value for the element", help: "ARIA role should be appropriate for the element" }, "aria-braille-equivalent": { description: "Ensure aria-braillelabel and aria-brailleroledescription have a non-braille equivalent", help: "aria-braille attributes must have a non-braille equivalent" }, "aria-command-name": { description: "Ensure every ARIA button, link and menuitem has an accessible name", help: "ARIA commands must have an accessible name" }, "aria-conditional-attr": { description: "Ensure ARIA attributes are used as described in the specification of the element's role", help: "ARIA attributes must be used as specified for the element's role" }, "aria-deprecated-role": { description: "Ensure elements do not use deprecated roles", help: "Deprecated ARIA roles must not be used" }, "aria-dialog-name": { description: "Ensure every ARIA dialog and alertdialog node has an accessible name", help: "ARIA dialog and alertdialog nodes should have an accessible name" }, "aria-hidden-body": { description: 'Ensure aria-hidden="true" is not present on the document body.', help: 'aria-hidden="true" must not be present on the document body' }, "aria-hidden-focus": { description: "Ensure aria-hidden elements are not focusable nor contain focusable elements", help: "ARIA hidden element must not be focusable or contain focusable elements" }, "aria-input-field-name": { description: "Ensure every ARIA input field has an accessible name", help: "ARIA input fields must have an accessible name" }, "aria-meter-name": { description: "Ensure every ARIA meter node has an accessible name", help: "ARIA meter nodes must have an accessible name" }, "aria-progressbar-name": { description: "Ensure every ARIA progressbar node has an accessible name", help: "ARIA progressbar nodes must have an accessible name" }, "aria-prohibited-attr": { description: "Ensure ARIA attributes are not prohibited for an element's role", help: "Elements must only use permitted ARIA attributes" }, "aria-required-attr": { description: "Ensure elements with ARIA roles have all required ARIA attributes", help: "Required ARIA attributes must be provided" }, "aria-required-children": { description: "Ensure elements with an ARIA role that require child roles contain them", help: "Certain ARIA roles must contain particular children" }, "aria-required-parent": { description: "Ensure elements with an ARIA role that require parent roles are contained by them", help: "Certain ARIA roles must be contained by particular parents" }, "aria-roledescription": { description: "Ensure aria-roledescription is only used on elements with an implicit or explicit role", help: "aria-roledescription must be on elements with a semantic role" }, "aria-roles": { description: "Ensure all elements with a role attribute use a valid value", help: "ARIA roles used must conform to valid values" }, "aria-text": { description: 'Ensure role="text" is used on elements with no focusable descendants', help: '"role=text" should have no focusable descendants' }, "aria-toggle-field-name": { description: "Ensure every ARIA toggle field has an accessible name", help: "ARIA toggle fields must have an accessible name" }, "aria-tooltip-name": { description: "Ensure every ARIA tooltip node has an accessible name", help: "ARIA tooltip nodes must have an accessible name" }, "aria-treeitem-name": { description: "Ensure every ARIA treeitem node has an accessible name", help: "ARIA treeitem nodes should have an accessible name" }, "aria-valid-attr-value": { description: "Ensure all ARIA attributes have valid values", help: "ARIA attributes must conform to valid values" }, "aria-valid-attr": { description: "Ensure attributes that begin with aria- are valid ARIA attributes", help: "ARIA attributes must conform to valid names" }, "audio-caption": { description: "Ensure <audio> elements have captions", help: "<audio> elements must have a captions track" }, "autocomplete-valid": { description: "Ensure the autocomplete attribute is correct and suitable for the form field", help: "autocomplete attribute must be used correctly" }, "avoid-inline-spacing": { description: "Ensure that text spacing set through style attributes can be adjusted with custom stylesheets", help: "Inline text spacing must be adjustable with custom stylesheets" }, blink: { description: "Ensure <blink> elements are not used", help: "<blink> elements are deprecated and must not be used" }, "button-name": { description: "Ensure buttons have discernible text", help: "Buttons must have discernible text" }, bypass: { description: "Ensure each page has at least one mechanism for a user to bypass navigation and jump straight to the content", help: "Page must have means to bypass repeated blocks" }, "color-contrast-enhanced": { description: "Ensure the contrast between foreground and background colors meets WCAG 2 AAA enhanced contrast ratio thresholds", help: "Elements must meet enhanced color contrast ratio thresholds" }, "color-contrast": { description: "Ensure the contrast between foreground and background colors meets WCAG 2 AA minimum contrast ratio thresholds", help: "Elements must meet minimum color contrast ratio thresholds" }, "css-orientation-lock": { description: "Ensure content is not locked to any specific display orientation, and the content is operable in all display orientations", help: "CSS Media queries must not lock display orientation" }, "definition-list": { description: "Ensure <dl> elements are structured correctly", help: "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, <template> or <div> elements" }, dlitem: { description: "Ensure <dt> and <dd> elements are contained by a <dl>", help: "<dt> and <dd> elements must be contained by a <dl>" }, "document-title": { description: "Ensure each HTML document contains a non-empty <title> element", help: "Documents must have <title> element to aid in navigation" }, "duplicate-id-active": { description: "Ensure every id attribute value of active elements is unique", help: "IDs of active elements must be unique" }, "duplicate-id-aria": { description: "Ensure every id attribute value used in ARIA and in labels is unique", help: "IDs used in ARIA and labels must be unique" }, "duplicate-id": { description: "Ensure every id attribute value is unique", help: "id attribute value must be unique" }, "empty-heading": { description: "Ensure headings have discernible text", help: "Headings should not be empty" }, "empty-table-header": { description: "Ensure table headers have discernible text", help: "Table header text should not be empty" }, "focus-order-semantics": { description: "Ensure elements in the focus order have a role appropriate for interactive content", help: "Elements in the focus order should have an appropriate role" }, "form-field-multiple-labels": { description: "Ensure form field does not have multiple label elements", help: "Form field must not have multiple label elements" }, "frame-focusable-content": { description: "Ensure <frame> and <iframe> elements with focusable content do not have tabindex=-1", help: "Frames with focusable content must not have tabindex=-1" }, "frame-tested": { description: "Ensure <iframe> and <frame> elements contain the axe-core script", help: "Frames should be tested with axe-core" }, "frame-title-unique": { description: "Ensure <iframe> and <frame> elements contain a unique title attribute", help: "Frames must have a unique title attribute" }, "frame-title": { description: "Ensure <iframe> and <frame> elements have an accessible name", help: "Frames must have an accessible name" }, "heading-order": { description: "Ensure the order of headings is semantically correct", help: "Heading levels should only increase by one" }, "hidden-content": { description: "Informs users about hidden content.", help: "Hidden content on the page should be analyzed" }, "html-has-lang": { description: "Ensure every HTML document has a lang attribute", help: "<html> element must have a lang attribute" }, "html-lang-valid": { description: "Ensure the lang attribute of the <html> element has a valid value", help: "<html> element must have a valid value for the lang attribute" }, "html-xml-lang-mismatch": { description: "Ensure that HTML elements with both valid lang and xml:lang attributes agree on the base language of the page", help: "HTML elements with lang and xml:lang must have the same base language" }, "identical-links-same-purpose": { description: "Ensure that links with the same accessible name serve a similar purpose", help: "Links with the same name must have a similar purpose" }, "image-alt": { description: "Ensure <img> elements have alternate text or a role of none or presentation", help: "Images must have alternate text" }, "image-redundant-alt": { description: "Ensure image alternative is not repeated as text", help: "Alternative text of images should not be repeated as text" }, "input-button-name": { description: "Ensure input buttons have discernible text", help: "Input buttons must have discernible text" }, "input-image-alt": { description: 'Ensure <input type="image"> elements have alternate text', help: "Image buttons must have alternate text" }, "label-content-name-mismatch": { description: "Ensure that elements labelled through their content must have their visible text as part of their accessible name", help: "Elements must have their visible text as part of their accessible name" }, "label-title-only": { description: "Ensure that every form element has a visible label and is not solely labeled using hidden labels, or the title or aria-describedby attributes", help: "Form elements should have a visible label" }, label: { description: "Ensure every form element has a label", help: "Form elements must have labels" }, "landmark-banner-is-top-level": { description: "Ensure the banner landmark is at top level", help: "Banner landmark should not be contained in another landmark" }, "landmark-complementary-is-top-level": { description: "Ensure the complementary landmark or aside is at top level", help: "Aside should not be contained in another landmark" }, "landmark-contentinfo-is-top-level": { description: "Ensure the contentinfo landmark is at top level", help: "Contentinfo landmark should not be contained in another landmark" }, "landmark-main-is-top-level": { description: "Ensure the main landmark is at top level", help: "Main landmark should not be contained in another landmark" }, "landmark-no-duplicate-banner": { description: "Ensure the document has at most one banner landmark", help: "Document should not have more than one banner landmark" }, "landmark-no-duplicate-contentinfo": { description: "Ensure the document has at most one contentinfo landmark", help: "Document should not have more than one contentinfo landmark" }, "landmark-no-duplicate-main": { description: "Ensure the document has at most one main landmark", help: "Document should not have more than one main landmark" }, "landmark-one-main": { description: "Ensure the document has a main landmark", help: "Document should have one main landmark" }, "landmark-unique": { description: "Ensure landmarks are unique", help: "Landmarks should have a unique role or role/label/title (i.e. accessible name) combination" }, "link-in-text-block": { description: "Ensure links are distinguished from surrounding text in a way that does not rely on color", help: "Links must be distinguishable without relying on color" }, "link-name": { description: "Ensure links have discernible text", help: "Links must have discernible text" }, list: { description: "Ensure that lists are structured correctly", help: "<ul> and <ol> must only directly contain <li>, <script> or <template> elements" }, listitem: { description: "Ensure <li> elements are used semantically", help: "<li> elements must be contained in a <ul> or <ol>" }, marquee: { description: "Ensure <marquee> elements are not used", help: "<marquee> elements are deprecated and must not be used" }, "meta-refresh-no-exceptions": { description: 'Ensure <meta http-equiv="refresh"> is not used for delayed refresh', help: "Delayed refresh must not be used" }, "meta-refresh": { description: 'Ensure <meta http-equiv="refresh"> is not used for delayed refresh', help: "Delayed refresh under 20 hours must not be used" }, "meta-viewport-large": { description: 'Ensure <meta name="viewport"> can scale a significant amount', help: "Users should be able to zoom and scale the text up to 500%" }, "meta-viewport": { description: 'Ensure <meta name="viewport"> does not disable text scaling and zooming', help: "Zooming and scaling must not be disabled" }, "nested-interactive": { description: "Ensure interactive controls are not nested as they are not always announced by screen readers or can cause focus problems for assistive technologies", help: "Interactive controls must not be nested" }, "no-autoplay-audio": { description: "Ensure <video> or <audio> elements do not autoplay audio for more than 3 seconds without a control mechanism to stop or mute the audio", help: "<video> or <audio> elements must not play automatically" }, "object-alt": { description: "Ensure <object> elements have alternate text", help: "<object> elements must have alternate text" }, "p-as-heading": { description: "Ensure bold, italic text and font-size is not used to style <p> elements as a heading", help: "Styled <p> elements must not be used as headings" }, "page-has-heading-one": { description: "Ensure that the page, or at least one of its frames contains a level-one heading", help: "Page should contain a level-one heading" }, "presentation-role-conflict": { description: "Elements marked as presentational should not have global ARIA or tabindex to ensure all screen readers ignore them", help: "Ensure elements marked as presentational are consistently ignored" }, region: { description: "Ensure all page content is contained by landmarks", help: "All page content should be contained by landmarks" }, "role-img-alt": { description: 'Ensure [role="img"] elements have alternate text', help: '[role="img"] elements must have an alternative text' }, "scope-attr-valid": { description: "Ensure the scope attribute is used correctly on tables", help: "scope attribute should be used correctly" }, "scrollable-region-focusable": { description: "Ensure elements that have scrollable content are accessible by keyboard", help: "Scrollable region must have keyboard access" }, "select-name": { description: "Ensure select element has an accessible name", help: "Select element must have an accessible name" }, "server-side-image-map": { description: "Ensure that server-side image maps are not used", help: "Server-side image maps must not be used" }, "skip-link": { description: "Ensure all skip links have a focusable target", help: "The skip-link target should exist and be focusable" }, "summary-name": { description: "Ensure summary elements have discernible text", help: "Summary elements must have discernible text" }, "svg-img-alt": { description: "Ensure <svg> elements with an img, graphics-document or graphics-symbol role have an accessible text", help: "<svg> elements with an img role must have an alternative text" }, tabindex: { description: "Ensure tabindex attribute values are not greater than 0", help: "Elements should not have tabindex greater than zero" }, "table-duplicate-name": { description: "Ensure the <caption> element does not contain the same text as the summary attribute", help: "Tables should not have the same summary and caption" }, "table-fake-caption": { description: "Ensure that tables with a caption use the <caption> element.", help: "Data or header cells must not be used to give caption to a data table." }, "target-size": { description: "Ensure touch targets have sufficient size and space", help: "All touch targets must be 24px large, or leave sufficient space" }, "td-has-header": { description: "Ensure that each non-empty data cell in a <table> larger than 3 by 3  has one or more table headers", help: "Non-empty <td> elements in larger <table> must have an associated table header" }, "td-headers-attr": { description: "Ensure that each cell in a table that uses the headers attribute refers only to other cells in that table", help: "Table cells that use the headers attribute must only refer to cells in the same table" }, "th-has-data-cells": { description: "Ensure that <th> elements and elements with role=columnheader/rowheader have data cells they describe", help: "Table headers in a data table must refer to data cells" }, "valid-lang": { description: "Ensure lang attributes have valid values", help: "lang attribute must have a valid value" }, "video-caption": { description: "Ensure <video> elements have captions", help: "<video> elements must have captions" } }, checks: { abstractrole: { impact: "serious", messages: { pass: "Abstract roles are not used", fail: { singular: "Abstract role cannot be directly used: ${data.values}", plural: "Abstract roles cannot be directly used: ${data.values}" } } }, "aria-allowed-attr": { impact: "critical", messages: { pass: "ARIA attributes are used correctly for the defined role", fail: { singular: "ARIA attribute is not allowed: ${data.values}", plural: "ARIA attributes are not allowed: ${data.values}" }, incomplete: "Check that there is no problem if the ARIA attribute is ignored on this element: ${data.values}" } }, "aria-allowed-role": { impact: "minor", messages: { pass: "ARIA role is allowed for given element", fail: { singular: "ARIA role ${data.values} is not allowed for given element", plural: "ARIA roles ${data.values} are not allowed for given element" }, incomplete: { singular: "ARIA role ${data.values} must be removed when the element is made visible, as it is not allowed for the element", plural: "ARIA roles ${data.values} must be removed when the element is made visible, as they are not allowed for the element" } } }, "aria-busy": { impact: "serious", messages: { pass: "Element has an aria-busy attribute", fail: 'Element uses aria-busy="true" while showing a loader' } }, "aria-conditional-attr": { impact: "serious", messages: { pass: "ARIA attribute is allowed", fail: { checkbox: 'Remove aria-checked, or set it to "${data.checkState}" to match the real checkbox state', rowSingular: "This attribute is supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}", rowPlural: "These attributes are supported with treegrid rows, but not ${data.ownerRole}: ${data.invalidAttrs}" } } }, "aria-errormessage": { impact: "critical", messages: { pass: "aria-errormessage exists and references elements visible to screen readers that use a supported aria-errormessage technique", fail: { singular: "aria-errormessage value `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)", plural: "aria-errormessage values `${data.values}` must use a technique to announce the message (e.g., aria-live, aria-describedby, role=alert, etc.)", hidden: "aria-errormessage value `${data.values}` cannot reference a hidden element" }, incomplete: { singular: "Ensure aria-errormessage value `${data.values}` references an existing element", plural: "Ensure aria-errormessage values `${data.values}` reference existing elements", idrefs: "Unable to determine if aria-errormessage element exists on the page: ${data.values}" } } }, "aria-hidden-body": { impact: "critical", messages: { pass: "No aria-hidden attribute is present on document body", fail: "aria-hidden=true should not be present on the document body" } }, "aria-level": { impact: "serious", messages: { pass: "aria-level values are valid", incomplete: "aria-level values greater than 6 are not supported in all screenreader and browser combinations" } }, "aria-prohibited-attr": { impact: "serious", messages: { pass: "ARIA attribute is allowed", fail: { hasRolePlural: '${data.prohibited} attributes cannot be used with role "${data.role}".', hasRoleSingular: '${data.prohibited} attribute cannot be used with role "${data.role}".', noRolePlural: "${data.prohibited} attributes cannot be used on a ${data.nodeName} with no valid role attribute.", noRoleSingular: "${data.prohibited} attribute cannot be used on a ${data.nodeName} with no valid role attribute." }, incomplete: { hasRoleSingular: '${data.prohibited} attribute is not well supported with role "${data.role}".', hasRolePlural: '${data.prohibited} attributes are not well supported with role "${data.role}".', noRoleSingular: "${data.prohibited} attribute is not well supported on a ${data.nodeName} with no valid role attribute.", noRolePlural: "${data.prohibited} attributes are not well supported on a ${data.nodeName} with no valid role attribute." } } }, "aria-required-attr": { impact: "critical", messages: { pass: "All required ARIA attributes are present", fail: { singular: "Required ARIA attribute not present: ${data.values}", plural: "Required ARIA attributes not present: ${data.values}" } } }, "aria-required-children": { impact: "critical", messages: { pass: { default: "Required ARIA children are present", "aria-busy": "Element has an aria-busy attribute, so it is allowed to omit required children" }, fail: { singular: "Required ARIA child role not present: ${data.values}", plural: "Required ARIA children role not present: ${data.values}", unallowed: "Element has children which are not allowed: ${data.values}" }, incomplete: { singular: "Expecting ARIA child role to be added: ${data.values}", plural: "Expecting ARIA children role to be added: ${data.values}" } } }, "aria-required-parent": { impact: "critical", messages: { pass: "Required ARIA parent role present", fail: { singular: "Required ARIA parent role not present: ${data.values}", plural: "Required ARIA parents role not present: ${data.values}" } } }, "aria-roledescription": { impact: "serious", messages: { pass: "aria-roledescription used on a supported semantic role", incomplete: "Check that the aria-roledescription is announced by supported screen readers", fail: "Give the element a role that supports aria-roledescription" } }, "aria-unsupported-attr": { impact: "critical", messages: { pass: "ARIA attribute is supported", fail: "ARIA attribute is not widely supported in screen readers and assistive technologies: ${data.values}" } }, "aria-valid-attr-value": { impact: "critical", messages: { pass: "ARIA attribute values are valid", fail: { singular: "Invalid ARIA attribute value: ${data.values}", plural: "Invalid ARIA attribute values: ${data.values}" }, incomplete: { noId: "ARIA attribute element ID does not exist on the page: ${data.needsReview}", noIdShadow: "ARIA attribute element ID does not exist on the page or is a descendant of a different shadow DOM tree: ${data.needsReview}", ariaCurrent: 'ARIA attribute value is invalid and will be treated as "aria-current=true": ${data.needsReview}', idrefs: "Unable to determine if ARIA attribute element ID exists on the page: ${data.needsReview}", empty: "ARIA attribute value is ignored while empty: ${data.needsReview}", controlsWithinPopup: "Unable to determine if aria-controls referenced ID exists on the page while using aria-haspopup: ${data.needsReview}" } } }, "aria-valid-attr": { impact: "critical", messages: { pass: "ARIA attribute name is valid", fail: { singular: "Invalid ARIA attribute name: ${data.values}", plural: "Invalid ARIA attribute names: ${data.values}" } } }, "braille-label-equivalent": { impact: "serious", messages: { pass: "aria-braillelabel is used on an element with accessible text", fail: "aria-braillelabel is used on an element with no accessible text", incomplete: "Unable to compute accessible text" } }, "braille-roledescription-equivalent": { impact: "serious", messages: { pass: "aria-brailleroledescription is used on an element with aria-roledescription", fail: { noRoleDescription: "aria-brailleroledescription is used on an element with no aria-roledescription", emptyRoleDescription: "aria-brailleroledescription is used on an element with an empty aria-roledescription" } } }, deprecatedrole: { impact: "minor", messages: { pass: "ARIA role is not deprecated", fail: "The role used is deprecated: ${data}" } }, fallbackrole: { impact: "serious", messages: { pass: "Only one role value used", fail: "Use only one role value, since fallback roles are not supported in older browsers", incomplete: "Use only role 'presentation' or 'none' since they are synonymous." } }, "has-global-aria-attribute": { impact: "minor", messages: { pass: { singular: "Element has global ARIA attribute: ${data.values}", plural: "Element has global ARIA attributes: ${data.values}" }, fail: "Element does not have global ARIA attribute" } }, "has-widget-role": { impact: "minor", messages: { pass: "Element has a widget role.", fail: "Element does not have a widget role." } }, invalidrole: { impact: "critical", messages: { pass: "ARIA role is valid", fail: { singular: "Role must be one of the valid ARIA roles: ${data.values}", plural: "Roles must be one of the valid ARIA roles: ${data.values}" } } }, "is-element-focusable": { impact: "minor", messages: { pass: "Element is focusable.", fail: "Element is not focusable." } }, "no-implicit-explicit-label": { impact: "serious", messages: { pass: "There is no mismatch between a <label> and accessible name", incomplete: "Check that the <label> does not need be part of the ARIA ${data} field's name" } }, unsupportedrole: { impact: "critical", messages: { pass: "ARIA role is supported", fail: "The role used is not widely supported in screen readers and assistive technologies: ${data}" } }, "valid-scrollable-semantics": { impact: "minor", messages: { pass: "Element has valid semantics for an element in the focus order.", fail: "Element has invalid semantics for an element in the focus order." } }, "color-contrast-enhanced": { impact: "serious", messages: { pass: "Element has sufficient color contrast of ${data.contrastRatio}", fail: { default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}", fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}", shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}" }, incomplete: { default: "Unable to determine contrast ratio", bgImage: "Element's background color could not be determined due to a background image", bgGradient: "Element's background color could not be determined due to a background gradient", imgNode: "Element's background color could not be determined because element contains an image node", bgOverlap: "Element's background color could not be determined because it is overlapped by another element", fgAlpha: "Element's foreground color could not be determined because of alpha transparency", elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element", elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements", outsideViewport: "Element's background color could not be determined because it's outside the viewport", equalRatio: "Element has a 1:1 contrast ratio with the background", shortTextContent: "Element content is too short to determine if it is actual text content", nonBmp: "Element content contains only non-text characters", pseudoContent: "Element's background color could not be determined due to a pseudo element" } } }, "color-contrast": { impact: "serious", messages: { pass: { default: "Element has sufficient color contrast of ${data.contrastRatio}", hidden: "Element is hidden" }, fail: { default: "Element has insufficient color contrast of ${data.contrastRatio} (foreground color: ${data.fgColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}", fgOnShadowColor: "Element has insufficient color contrast of ${data.contrastRatio} between the foreground and shadow color (foreground color: ${data.fgColor}, text-shadow color: ${data.shadowColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}", shadowOnBgColor: "Element has insufficient color contrast of ${data.contrastRatio} between the shadow color and background color (text-shadow color: ${data.shadowColor}, background color: ${data.bgColor}, font size: ${data.fontSize}, font weight: ${data.fontWeight}). Expected contrast ratio of ${data.expectedContrastRatio}" }, incomplete: { default: "Unable to determine contrast ratio", bgImage: "Element's background color could not be determined due to a background image", bgGradient: "Element's background color could not be determined due to a background gradient", imgNode: "Element's background color could not be determined because element contains an image node", bgOverlap: "Element's background color could not be determined because it is overlapped by another element", complexTextShadows: "Element's contrast could not be determined because it uses complex text shadows", fgAlpha: "Element's foreground color could not be determined because of alpha transparency", elmPartiallyObscured: "Element's background color could not be determined because it's partially obscured by another element", elmPartiallyObscuring: "Element's background color could not be determined because it partially overlaps other elements", outsideViewport: "Element's background color could not be determined because it's outside the viewport", equalRatio: "Element has a 1:1 contrast ratio with the background", shortTextContent: "Element content is too short to determine if it is actual text content", nonBmp: "Element content contains only non-text characters", pseudoContent: "Element's background color could not be determined due to a pseudo element" } } }, "link-in-text-block-style": { impact: "serious", messages: { pass: "Links can be distinguished from surrounding text by visual styling", incomplete: { default: "Check if the link needs styling to distinguish it from nearby text", pseudoContent: "Check if the link's pseudo style is sufficient to distinguish it from the surrounding text" }, fail: "The link has no styling (such as underline) to distinguish it from the surrounding text" } }, "link-in-text-block": { impact: "serious", messages: { pass: "Links can be distinguished from surrounding text in some way other than by color", fail: { fgContrast: "The link has insufficient color contrast of ${data.contrastRatio}:1 with the surrounding text. (Minimum contrast is ${data.requiredContrastRatio}:1, link text: ${data.nodeColor}, surrounding text: ${data.parentColor})", bgContrast: "The link background has insufficient color contrast of ${data.contrastRatio} (Minimum contrast is ${data.requiredContrastRatio}:1, link background color: ${data.nodeBackgroundColor}, surrounding background color: ${data.parentBackgroundColor})" }, incomplete: { default: "Element's foreground contrast ratio could not be determined", bgContrast: "Element's background contrast ratio could not be determined", bgImage: "Element's contrast ratio could not be determined due to a background image", bgGradient: "Element's contrast ratio could not be determined due to a background gradient", imgNode: "Element's contrast ratio could not be determined because element contains an image node", bgOverlap: "Element's contrast ratio could not be determined because of element overlap" } } }, "autocomplete-appropriate": { impact: "serious", messages: { pass: "The autocomplete value is on an appropriate element", fail: "The autocomplete value is inappropriate for this type of input" } }, "autocomplete-valid": { impact: "serious", messages: { pass: "the autocomplete attribute is correctly formatted", fail: "the autocomplete attribute is incorrectly formatted", incomplete: "the autocomplete attribute has a non-standard value. Check whether any standard value could be used instead." } }, accesskeys: { impact: "serious", messages: { pass: "Accesskey attribute value is unique", fail: "Document has multiple elements with the same accesskey" } }, "focusable-content": { impact: "serious", messages: { pass: "Element contains focusable elements", fail: "Element should have focusable content" } }, "focusable-disabled": { impact: "serious", messages: { pass: "No focusable elements contained within element", incomplete: "Check if the focusable elements immediately move the focus indicator", fail: "Focusable content should be disabled or be removed from the DOM" } }, "focusable-element": { impact: "serious", messages: { pass: "Element is focusable", fail: "Element should be focusable" } }, "focusable-modal-open": { impact: "serious", messages: { pass: "No focusable elements while a modal is open", incomplete: "Check that focusable elements are not tabbable in the current state" } }, "focusable-no-name": { impact: "serious", messages: { pass: "Element is not in tab order or has accessible text", fail: "Element is in tab order and does not have accessible text", incomplete: "Unable to determine if element has an accessible name" } }, "focusable-not-tabbable": { impact: "serious", messages: { pass: "No focusable elements contained within element", incomplete: "Check if the focusable elements immediately move the focus indicator", fail: 'Focusable content should have tabindex="-1" or be removed from the DOM' } }, "frame-focusable-content": { impact: "serious", messages: { pass: "Element does not have focusable descendants", fail: "Element has focusable descendants", incomplete: "Could not determine if element has descendants" } }, "landmark-is-top-level": { impact: "moderate", messages: { pass: "The ${data.role} landmark is at the top level.", fail: "The ${data.role} landmark is contained in another landmark." } }, "no-focusable-content": { impact: "serious", messages: { pass: "Element does not have focusable descendants", fail: { default: "Element has focusable descendants", notHidden: 'Using a negative tabindex on an element inside an interactive control does not prevent assistive technologies from focusing the element (even with aria-hidden="true")' }, incomplete: "Could not determine if element has descendants" } }, "page-has-heading-one": { impact: "moderate", messages: { pass: "Page has at least one level-one heading", fail: "Page must have a level-one heading" } }, "page-has-main": { impact: "moderate", messages: { pass: "Document has at least one main landmark", fail: "Document does not have a main landmark" } }, "page-no-duplicate-banner": { impact: "moderate", messages: { pass: "Document does not have more than one banner landmark", fail: "Document has more than one banner landmark" } }, "page-no-duplicate-contentinfo": { impact: "moderate", messages: { pass: "Document does not have more than one contentinfo landmark", fail: "Document has more than one contentinfo landmark" } }, "page-no-duplicate-main": { impact: "moderate", messages: { pass: "Document does not have more than one main landmark", fail: "Document has more than one main landmark" } }, tabindex: { impact: "serious", messages: { pass: "Element does not have a tabindex greater than 0", fail: "Element has a tabindex greater than 0" } }, "alt-space-value": { impact: "critical", messages: { pass: "Element has a valid alt attribute value", fail: "Element has an alt attribute containing only a space character, which is not ignored by all screen readers" } }, "duplicate-img-label": { impact: "minor", messages: { pass: "Element does not duplicate existing text in <img> alt text", fail: "Element contains <img> element with alt text that duplicates existing text" } }, "explicit-label": { impact: "critical", messages: { pass: "Form element has an explicit <label>", fail: "Form element does not have an explicit <label>", incomplete: "Unable to determine if form element has an explicit <label>" } }, "help-same-as-label": { impact: "minor", messages: { pass: "Help text (title or aria-describedby) does not duplicate label text", fail: "Help text (title or aria-describedby) text is the same as the label text" } }, "hidden-explicit-label": { impact: "critical", messages: { pass: "Form element has a visible explicit <label>", fail: "Form element has explicit <label> that is hidden", incomplete: "Unable to determine if form element has explicit <label> that is hidden" } }, "implicit-label": { impact: "critical", messages: { pass: "Form element has an implicit (wrapped) <label>", fail: "Form element does not have an implicit (wrapped) <label>", incomplete: "Unable to determine if form element has an implicit (wrapped} <label>" } }, "label-content-name-mismatch": { impact: "serious", messages: { pass: "Element contains visible text as part of it's accessible name", fail: "Text inside the element is not included in the accessible name" } }, "multiple-label": { impact: "moderate", messages: { pass: "Form field does not have multiple label elements", incomplete: "Multiple label elements is not widely supported in assistive technologies. Ensure the first label contains all necessary information." } }, "title-only": { impact: "serious", messages: { pass: "Form element does not solely use title attribute for its label", fail: "Only title used to generate label for form element" } }, "landmark-is-unique": { impact: "moderate", messages: { pass: "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination", fail: "The landmark must have a unique aria-label, aria-labelledby, or title to make landmarks distinguishable" } }, "has-lang": { impact: "serious", messages: { pass: "The <html> element has a lang attribute", fail: { noXHTML: "The xml:lang attribute is not valid on HTML pages, use the lang attribute.", noLang: "The <html> element does not have a lang attribute" } } }, "valid-lang": { impact: "serious", messages: { pass: "Value of lang attribute is included in the list of valid languages", fail: "Value of lang attribute not included in the list of valid languages" } }, "xml-lang-mismatch": { impact: "moderate", messages: { pass: "Lang and xml:lang attributes have the same base language", fail: "Lang and xml:lang attributes do not have the same base language" } }, dlitem: { impact: "serious", messages: { pass: "Description list item has a <dl> parent element", fail: "Description list item does not have a <dl> parent element" } }, listitem: { impact: "serious", messages: { pass: 'List item has a <ul>, <ol> or role="list" parent element', fail: { default: "List item does not have a <ul>, <ol> parent element", roleNotValid: 'List item parent element has a role that is not role="list"' } } }, "only-dlitems": { impact: "serious", messages: { pass: "dl element only has direct children that are allowed inside; <dt>, <dd>, or <div> elements", fail: "dl element has direct children that are not allowed: ${data.values}" } }, "only-listitems": { impact: "serious", messages: { pass: "List element only has direct children that are allowed inside <li> elements", fail: "List element has direct children that are not allowed: ${data.values}" } }, "structured-dlitems": { impact: "serious", messages: { pass: "When not empty, element has both <dt> and <dd> elements", fail: "When not empty, element does not have at least one <dt> element followed by at least one <dd> element" } }, caption: { impact: "critical", messages: { pass: "The multimedia element has a captions track", incomplete: "Check that captions is available for the element" } }, "frame-tested": { impact: "critical", messages: { pass: "The iframe was tested with axe-core", fail: "The iframe could not be tested with axe-core", incomplete: "The iframe still has to be tested with axe-core" } }, "no-autoplay-audio": { impact: "moderate", messages: { pass: "<video> or <audio> does not output audio for more than allowed duration or has controls mechanism", fail: "<video> or <audio> outputs audio for more than allowed duration and does not have a controls mechanism", incomplete: "Check that the <video> or <audio> does not output audio for more than allowed duration or provides a controls mechanism" } }, "css-orientation-lock": { impact: "serious", messages: { pass: "Display is operable, and orientation lock does not exist", fail: "CSS Orientation lock is applied, and makes display inoperable", incomplete: "CSS Orientation lock cannot be determined" } }, "meta-viewport-large": { impact: "minor", messages: { pass: "<meta> tag does not prevent significant zooming on mobile devices", fail: "<meta> tag limits zooming on mobile devices" } }, "meta-viewport": { impact: "critical", messages: { pass: "<meta> tag does not disable zooming on mobile devices", fail: "${data} on <meta> tag disables zooming on mobile devices" } }, "target-offset": { impact: "serious", messages: { pass: { default: "Target has sufficient space from its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px which is at least ${data.minOffset}px.", large: "Target far exceeds the minimum size of ${data.minOffset}px." }, fail: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px.", incomplete: { default: "Element with negative tabindex has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is this a target?", nonTabbableNeighbor: "Target has insufficient space to its closest neighbors. Safe clickable space has a diameter of ${data.closestOffset}px instead of at least ${data.minOffset}px. Is the neighbor a target?", tooManyRects: "Could not get the target size because there are too many overlapping elements" } } }, "target-size": { impact: "serious", messages: { pass: { default: "Control has sufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)", obscured: "Control is ignored because it is fully obscured and thus not clickable", large: "Target far exceeds the minimum size of ${data.minSize}px." }, fail: { default: "Target has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)", partiallyObscured: "Target has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px)" }, incomplete: { default: "Element with negative tabindex has insufficient size (${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?", contentOverflow: "Element size could not be accurately determined due to overflow content", partiallyObscured: "Element with negative tabindex has insufficient size because it is partially obscured (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is this a target?", partiallyObscuredNonTabbable: "Target has insufficient size because it is partially obscured by a neighbor with negative tabindex (smallest space is ${data.width}px by ${data.height}px, should be at least ${data.minSize}px by ${data.minSize}px). Is the neighbor a target?", tooManyRects: "Could not get the target size because there are too many overlapping elements" } } }, "header-present": { impact: "serious", messages: { pass: "Page has a heading", fail: "Page does not have a heading" } }, "heading-order": { impact: "moderate", messages: { pass: "Heading order valid", fail: "Heading order invalid", incomplete: "Unable to determine previous heading" } }, "identical-links-same-purpose": { impact: "minor", messages: { pass: "There are no other links with the same name, that go to a different URL", incomplete: "Check that links have the same purpose, or are intentionally ambiguous." } }, "internal-link-present": { impact: "serious", messages: { pass: "Valid skip link found", fail: "No valid skip link found" } }, landmark: { impact: "serious", messages: { pass: "Page has a landmark region", fail: "Page does not have a landmark region" } }, "meta-refresh-no-exceptions": { impact: "minor", messages: { pass: "<meta> tag does not immediately refresh the page", fail: "<meta> tag forces timed refresh of page" } }, "meta-refresh": { impact: "critical", messages: { pass: "<meta> tag does not immediately refresh the page", fail: "<meta> tag forces timed refresh of page (less than 20 hours)" } }, "p-as-heading": { impact: "serious", messages: { pass: "<p> elements are not styled as headings", fail: "Heading elements should be used instead of styled <p> elements", incomplete: "Unable to determine if <p> elements are styled as headings" } }, region: { impact: "moderate", messages: { pass: "All page content is contained by landmarks", fail: "Some page content is not contained by landmarks" } }, "skip-link": { impact: "moderate", messages: { pass: "Skip link target exists", incomplete: "Skip link target should become visible on activation", fail: "No skip link target" } }, "unique-frame-title": { impact: "serious", messages: { pass: "Element's title attribute is unique", fail: "Element's title attribute is not unique" } }, "duplicate-id-active": { impact: "serious", messages: { pass: "Document has no active elements that share the same id attribute", fail: "Document has active elements with the same id attribute: ${data}" } }, "duplicate-id-aria": { impact: "critical", messages: { pass: "Document has no elements referenced with ARIA or labels that share the same id attribute", fail: "Document has multiple elements referenced with ARIA with the same id attribute: ${data}" } }, "duplicate-id": { impact: "minor", messages: { pass: "Document has no static elements that share the same id attribute", fail: "Document has multiple static elements with the same id attribute: ${data}" } }, "aria-label": { impact: "serious", messages: { pass: "aria-label attribute exists and is not empty", fail: "aria-label attribute does not exist or is empty" } }, "aria-labelledby": { impact: "serious", messages: { pass: "aria-labelledby attribute exists and references elements that are visible to screen readers", fail: "aria-labelledby attribute does not exist, references elements that do not exist or references elements that are empty", incomplete: "Ensure aria-labelledby references an existing element" } }, "avoid-inline-spacing": { impact: "serious", messages: { pass: "No inline styles with '!important' that affect text spacing has been specified", fail: { singular: "Remove '!important' from inline style ${data.values}, as overriding this is not supported by most browsers", plural: "Remove '!important' from inline styles ${data.values}, as overriding this is not supported by most browsers" } } }, "button-has-visible-text": { impact: "critical", messages: { pass: "Element has inner text that is visible to screen readers", fail: "Element does not have inner text that is visible to screen readers", incomplete: "Unable to determine if element has children" } }, "doc-has-title": { impact: "serious", messages: { pass: "Document has a non-empty <title> element", fail: "Document does not have a non-empty <title> element" } }, exists: { impact: "minor", messages: { pass: "Element does not exist", incomplete: "Element exists" } }, "has-alt": { impact: "critical", messages: { pass: "Element has an alt attribute", fail: "Element does not have an alt attribute" } }, "has-visible-text": { impact: "minor", messages: { pass: "Element has text that is visible to screen readers", fail: "Element does not have text that is visible to screen readers", incomplete: "Unable to determine if element has children" } }, "important-letter-spacing": { impact: "serious", messages: { pass: "Letter-spacing in the style attribute is not set to !important, or meets the minimum", fail: "letter-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)" } }, "important-line-height": { impact: "serious", messages: { pass: "line-height in the style attribute is not set to !important, or meets the minimum", fail: "line-height in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)" } }, "important-word-spacing": { impact: "serious", messages: { pass: "word-spacing in the style attribute is not set to !important, or meets the minimum", fail: "word-spacing in the style attribute must not use !important, or be at ${data.minValue}em (current ${data.value}em)" } }, "is-on-screen": { impact: "serious", messages: { pass: "Element is not visible", fail: "Element is visible" } }, "non-empty-alt": { impact: "critical", messages: { pass: "Element has a non-empty alt attribute", fail: { noAttr: "Element has no alt attribute", emptyAttr: "Element has an empty alt attribute" } } }, "non-empty-if-present": { impact: "critical", messages: { pass: { default: "Element does not have a value attribute", "has-label": "Element has a non-empty value attribute" }, fail: "Element has a value attribute and the value attribute is empty" } }, "non-empty-placeholder": { impact: "serious", messages: { pass: "Element has a placeholder attribute", fail: { noAttr: "Element has no placeholder attribute", emptyAttr: "Element has an empty placeholder attribute" } } }, "non-empty-title": { impact: "serious", messages: { pass: "Element has a title attribute", fail: { noAttr: "Element has no title attribute", emptyAttr: "Element has an empty title attribute" } } }, "non-empty-value": { impact: "critical", messages: { pass: "Element has a non-empty value attribute", fail: { noAttr: "Element has no value attribute", emptyAttr: "Element has an empty value attribute" } } }, "presentational-role": { impact: "minor", messages: { pass: 'Element\'s default semantics were overridden with role="${data.role}"', fail: { default: `Element's default semantics were not overridden with role="none" or role="presentation"`, globalAria: "Element's role is not presentational because it has a global ARIA attribute", focusable: "Element's role is not presentational because it is focusable", both: "Element's role is not presentational because it has a global ARIA attribute and is focusable", iframe: 'Using the "title" attribute on an ${data.nodeName} element with a presentational role behaves inconsistently between screen readers' } } }, "role-none": { impact: "minor", messages: { pass: `Element's default semantics were overridden with role="none"`, fail: `Element's default semantics were not overridden with role="none"` } }, "role-presentation": { impact: "minor", messages: { pass: `Element's default semantics were overridden with role="presentation"`, fail: `Element's default semantics were not overridden with role="presentation"` } }, "svg-non-empty-title": { impact: "serious", messages: { pass: "Element has a child that is a title", fail: { noTitle: "Element has no child that is a title", emptyTitle: "Element child title is empty" }, incomplete: "Unable to determine element has a child that is a title" } }, "caption-faked": { impact: "serious", messages: { pass: "The first row of a table is not used as a caption", fail: "The first child of the table should be a caption instead of a table cell" } }, "html5-scope": { impact: "moderate", messages: { pass: "Scope attribute is only used on table header elements (<th>)", fail: "In HTML 5, scope attributes may only be used on table header elements (<th>)" } }, "same-caption-summary": { impact: "minor", messages: { pass: "Content of summary attribute and <caption> are not duplicated", fail: "Content of summary attribute and <caption> element are identical", incomplete: "Unable to determine if <table> element has a caption" } }, "scope-value": { impact: "critical", messages: { pass: "Scope attribute is used correctly", fail: "The value of the scope attribute may only be 'row' or 'col'" } }, "td-has-header": { impact: "critical", messages: { pass: "All non-empty data cells have table headers", fail: "Some non-empty data cells do not have table headers" } }, "td-headers-attr": { impact: "serious", messages: { pass: "The headers attribute is exclusively used to refer to other cells in the table", incomplete: "The headers attribute is empty", fail: "The headers attribute is not exclusively used to refer to other cells in the table" } }, "th-has-data-cells": { impact: "serious", messages: { pass: "All table header cells refer to data cells", fail: "Not all table header cells refer to data cells", incomplete: "Table data cells are missing or empty" } }, "hidden-content": { impact: "minor", messages: { pass: "All content on the page has been analyzed.", fail: "There were problems analyzing the content on this page.", incomplete: "There is hidden content on the page that was not analyzed. You will need to trigger the display of this content in order to analyze it." } } }, failureSummaries: { any: { failureMessage: function(e2) {
        var t2 = "Fix any of the following:", n2 = e2;
        if (n2) for (var r2 = -1, a2 = n2.length - 1; r2 < a2; ) t2 += "\n  " + n2[r2 += 1].split("\n").join("\n  ");
        return t2;
      } }, none: { failureMessage: function(e2) {
        var t2 = "Fix all of the following:", n2 = e2;
        if (n2) for (var r2 = -1, a2 = n2.length - 1; r2 < a2; ) t2 += "\n  " + n2[r2 += 1].split("\n").join("\n  ");
        return t2;
      } } }, incompleteFallbackMessage: "axe couldn't tell the reason. Time to break out the element inspector!" }, rules: [{ id: "accesskeys", impact: "serious", selector: "[accesskey]", excludeHidden: false, tags: ["cat.keyboard", "best-practice"], all: [], any: [], none: ["accesskeys"] }, { id: "area-alt", impact: "critical", selector: "map area[href]", excludeHidden: false, tags: ["cat.text-alternatives", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"], actIds: ["c487ae"], all: [], any: [{ options: { attribute: "alt" }, id: "non-empty-alt" }, "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-allowed-attr", impact: "critical", matches: "aria-allowed-attr-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["5c01ea"], all: [{ options: { validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"] }, id: "aria-allowed-attr" }], any: [], none: ["aria-unsupported-attr"] }, { id: "aria-allowed-role", impact: "minor", excludeHidden: false, selector: "[role]", matches: "aria-allowed-role-matches", tags: ["cat.aria", "best-practice"], all: [], any: [{ options: { allowImplicit: true, ignoredTags: [] }, id: "aria-allowed-role" }], none: [] }, { id: "aria-braille-equivalent", reviewOnFail: true, impact: "serious", selector: "[aria-brailleroledescription], [aria-braillelabel]", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], all: ["braille-roledescription-equivalent", "braille-label-equivalent"], any: [], none: [] }, { id: "aria-command-name", impact: "serious", selector: '[role="link"], [role="button"], [role="menuitem"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["97a4e1"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-conditional-attr", impact: "serious", matches: "aria-allowed-attr-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["5c01ea"], all: [{ options: { invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"] }, id: "aria-conditional-attr" }], any: [], none: [] }, { id: "aria-deprecated-role", impact: "minor", selector: "[role]", matches: "no-empty-role-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["674b10"], all: [], any: [], none: ["deprecatedrole"] }, { id: "aria-dialog-name", impact: "serious", selector: '[role="dialog"], [role="alertdialog"]', matches: "no-naming-method-matches", tags: ["cat.aria", "best-practice"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-hidden-body", impact: "critical", selector: "body", excludeHidden: false, matches: "is-initiator-matches", tags: ["cat.aria", "wcag2a", "wcag131", "wcag412", "EN-301-549", "EN-9.1.3.1", "EN-9.4.1.2"], all: [], any: ["aria-hidden-body"], none: [] }, { id: "aria-hidden-focus", impact: "serious", selector: '[aria-hidden="true"]', matches: "aria-hidden-focus-matches", excludeHidden: false, tags: ["cat.name-role-value", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"], actIds: ["6cfa84"], all: ["focusable-modal-open", "focusable-disabled", "focusable-not-tabbable"], any: [], none: [] }, { id: "aria-input-field-name", impact: "serious", selector: '[role="combobox"], [role="listbox"], [role="searchbox"], [role="slider"], [role="spinbutton"], [role="textbox"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["e086e5"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: ["no-implicit-explicit-label"] }, { id: "aria-meter-name", impact: "serious", selector: '[role="meter"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-progressbar-name", impact: "serious", selector: '[role="progressbar"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag111", "EN-301-549", "EN-9.1.1.1"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-prohibited-attr", impact: "serious", matches: "aria-allowed-attr-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["5c01ea"], all: [], any: [], none: [{ options: { elementsAllowedAriaLabel: ["applet", "input"] }, id: "aria-prohibited-attr" }] }, { id: "aria-required-attr", impact: "critical", selector: "[role]", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["4e8ab6"], all: [], any: ["aria-required-attr"], none: [] }, { id: "aria-required-children", impact: "critical", selector: "[role]", matches: "aria-required-children-matches", tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], actIds: ["bc4a75", "ff89c9"], all: [], any: [{ options: { reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"] }, id: "aria-required-children" }], none: [] }, { id: "aria-required-parent", impact: "critical", selector: "[role]", matches: "aria-required-parent-matches", tags: ["cat.aria", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], actIds: ["ff89c9"], all: [], any: [{ options: { ownGroupRoles: ["listitem", "treeitem"] }, id: "aria-required-parent" }], none: [] }, { id: "aria-roledescription", impact: "serious", selector: "[aria-roledescription]", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2", "deprecated"], enabled: false, all: [], any: [{ options: { supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"] }, id: "aria-roledescription" }], none: [] }, { id: "aria-roles", impact: "critical", selector: "[role]", matches: "no-empty-role-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["674b10"], all: [], any: [], none: ["invalidrole", "abstractrole", "unsupportedrole"] }, { id: "aria-text", impact: "serious", selector: "[role=text]", tags: ["cat.aria", "best-practice"], all: [], any: ["no-focusable-content"], none: [] }, { id: "aria-toggle-field-name", impact: "serious", selector: '[role="checkbox"], [role="menuitemcheckbox"], [role="menuitemradio"], [role="radio"], [role="switch"], [role="option"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag412", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["e086e5"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: ["no-implicit-explicit-label"] }, { id: "aria-tooltip-name", impact: "serious", selector: '[role="tooltip"]', matches: "no-naming-method-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-treeitem-name", impact: "serious", selector: '[role="treeitem"]', matches: "no-naming-method-matches", tags: ["cat.aria", "best-practice"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "aria-valid-attr-value", impact: "critical", matches: "aria-has-attr-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["6a7281"], all: [{ options: [], id: "aria-valid-attr-value" }, "aria-errormessage", "aria-level"], any: [], none: [] }, { id: "aria-valid-attr", impact: "critical", matches: "aria-has-attr-matches", tags: ["cat.aria", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], actIds: ["5f99a7"], all: [], any: [{ options: [], id: "aria-valid-attr" }], none: [] }, { id: "audio-caption", impact: "critical", selector: "audio", enabled: false, excludeHidden: false, tags: ["cat.time-and-media", "wcag2a", "wcag121", "EN-301-549", "EN-9.1.2.1", "section508", "section508.22.a", "deprecated"], actIds: ["2eb176", "afb423"], all: [], any: [], none: ["caption"] }, { id: "autocomplete-valid", impact: "serious", matches: "autocomplete-matches", tags: ["cat.forms", "wcag21aa", "wcag135", "EN-301-549", "EN-9.1.3.5", "ACT"], actIds: ["73f2c2"], all: [{ options: { stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"], ignoredValues: ["text", "pronouns", "gender", "message", "content"] }, id: "autocomplete-valid" }], any: [], none: [] }, { id: "avoid-inline-spacing", impact: "serious", selector: "[style]", matches: "is-visible-on-screen-matches", tags: ["cat.structure", "wcag21aa", "wcag1412", "EN-301-549", "EN-9.1.4.12", "ACT"], actIds: ["24afc2", "9e45ec", "78fd32"], all: [{ options: { cssProperty: "letter-spacing", minValue: 0.12 }, id: "important-letter-spacing" }, { options: { cssProperty: "word-spacing", minValue: 0.16 }, id: "important-word-spacing" }, { options: { multiLineOnly: true, cssProperty: "line-height", minValue: 1.5, normalValue: 1 }, id: "important-line-height" }], any: [], none: [] }, { id: "blink", impact: "serious", selector: "blink", excludeHidden: false, tags: ["cat.time-and-media", "wcag2a", "wcag222", "section508", "section508.22.j", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"], all: [], any: [], none: ["is-on-screen"] }, { id: "button-name", impact: "critical", selector: "button", matches: "no-explicit-name-required-matches", tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["97a4e1", "m6b1q3"], all: [], any: ["button-has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, "presentational-role"], none: [] }, { id: "bypass", impact: "serious", selector: "html", pageLevel: true, matches: "bypass-matches", reviewOnFail: true, tags: ["cat.keyboard", "wcag2a", "wcag241", "section508", "section508.22.o", "TTv5", "TT9.a", "EN-301-549", "EN-9.2.4.1"], actIds: ["cf77f2", "047fe0", "b40fd1", "3e12e1", "ye5d6e"], all: [], any: ["internal-link-present", { options: { selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]" }, id: "header-present" }, { options: { selector: "main, [role=main]" }, id: "landmark" }], none: [] }, { id: "color-contrast-enhanced", impact: "serious", matches: "color-contrast-matches", excludeHidden: false, enabled: false, tags: ["cat.color", "wcag2aaa", "wcag146", "ACT"], actIds: ["09o5cg"], all: [], any: [{ options: { ignoreUnicode: true, ignoreLength: false, ignorePseudo: false, boldValue: 700, boldTextPt: 14, largeTextPt: 18, contrastRatio: { normal: { expected: 7, minThreshold: 4.5 }, large: { expected: 4.5, minThreshold: 3 } }, pseudoSizeThreshold: 0.25, shadowOutlineEmMax: 0.1, textStrokeEmMin: 0.03 }, id: "color-contrast-enhanced" }], none: [] }, { id: "color-contrast", impact: "serious", matches: "color-contrast-matches", excludeHidden: false, tags: ["cat.color", "wcag2aa", "wcag143", "TTv5", "TT13.c", "EN-301-549", "EN-9.1.4.3", "ACT"], actIds: ["afw4f7", "09o5cg"], all: [], any: [{ options: { ignoreUnicode: true, ignoreLength: false, ignorePseudo: false, boldValue: 700, boldTextPt: 14, largeTextPt: 18, contrastRatio: { normal: { expected: 4.5 }, large: { expected: 3 } }, pseudoSizeThreshold: 0.25, shadowOutlineEmMax: 0.2, textStrokeEmMin: 0.03 }, id: "color-contrast" }], none: [] }, { id: "css-orientation-lock", impact: "serious", selector: "html", tags: ["cat.structure", "wcag134", "wcag21aa", "EN-301-549", "EN-9.1.3.4", "experimental"], actIds: ["b33eff"], all: [{ options: { degreeThreshold: 2 }, id: "css-orientation-lock" }], any: [], none: [], preload: true }, { id: "definition-list", impact: "serious", selector: "dl", matches: "no-role-matches", tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], all: [], any: [], none: ["structured-dlitems", { options: { validRoles: ["definition", "term", "listitem"], validNodeNames: ["dt", "dd"], divGroups: true }, id: "only-dlitems" }] }, { id: "dlitem", impact: "serious", selector: "dd, dt", matches: "no-role-matches", tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], all: [], any: ["dlitem"], none: [] }, { id: "document-title", impact: "serious", selector: "html", matches: "is-initiator-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag242", "TTv5", "TT12.a", "EN-301-549", "EN-9.2.4.2", "ACT"], actIds: ["2779a5"], all: [], any: ["doc-has-title"], none: [] }, { id: "duplicate-id-active", impact: "serious", selector: "[id]", matches: "duplicate-id-active-matches", excludeHidden: false, tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"], enabled: false, actIds: ["3ea0c8"], all: [], any: ["duplicate-id-active"], none: [] }, { id: "duplicate-id-aria", impact: "critical", selector: "[id]", matches: "duplicate-id-aria-matches", excludeHidden: false, tags: ["cat.parsing", "wcag2a", "wcag412", "EN-301-549", "EN-9.4.1.2"], reviewOnFail: true, actIds: ["3ea0c8"], all: [], any: ["duplicate-id-aria"], none: [] }, { id: "duplicate-id", impact: "minor", selector: "[id]", matches: "duplicate-id-misc-matches", excludeHidden: false, tags: ["cat.parsing", "wcag2a-obsolete", "wcag411", "deprecated"], enabled: false, actIds: ["3ea0c8"], all: [], any: ["duplicate-id"], none: [] }, { id: "empty-heading", impact: "minor", selector: 'h1, h2, h3, h4, h5, h6, [role="heading"]', matches: "heading-matches", tags: ["cat.name-role-value", "best-practice"], actIds: ["ffd0e9"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "empty-table-header", impact: "minor", selector: 'th:not([role]), [role="rowheader"], [role="columnheader"]', tags: ["cat.name-role-value", "best-practice"], all: [], any: ["has-visible-text"], none: [] }, { id: "focus-order-semantics", impact: "minor", selector: "div, h1, h2, h3, h4, h5, h6, [role=heading], p, span", matches: "inserted-into-focus-order-matches", tags: ["cat.keyboard", "best-practice", "experimental"], all: [], any: [{ options: [], id: "has-widget-role" }, { options: { roles: ["tooltip"] }, id: "valid-scrollable-semantics" }], none: [] }, { id: "form-field-multiple-labels", impact: "moderate", selector: "input, select, textarea", matches: "label-matches", tags: ["cat.forms", "wcag2a", "wcag332", "TTv5", "TT5.c", "EN-301-549", "EN-9.3.3.2"], all: [], any: [], none: ["multiple-label"] }, { id: "frame-focusable-content", impact: "serious", selector: "html", matches: "frame-focusable-content-matches", tags: ["cat.keyboard", "wcag2a", "wcag211", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"], actIds: ["akn7bn"], all: [], any: ["frame-focusable-content"], none: [] }, { id: "frame-tested", impact: "critical", selector: "html, frame, iframe", tags: ["cat.structure", "best-practice", "review-item"], all: [{ options: { isViolation: false }, id: "frame-tested" }], any: [], none: [] }, { id: "frame-title-unique", impact: "serious", selector: "frame[title], iframe[title]", matches: "frame-title-has-text-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag412", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"], actIds: ["4b1c6c"], all: [], any: [], none: ["unique-frame-title"], reviewOnFail: true }, { id: "frame-title", impact: "serious", selector: "frame, iframe", matches: "no-negative-tabindex-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag412", "section508", "section508.22.i", "TTv5", "TT12.d", "EN-301-549", "EN-9.4.1.2"], actIds: ["cae760"], all: [], any: [{ options: { attribute: "title" }, id: "non-empty-title" }, "aria-label", "aria-labelledby", "presentational-role"], none: [] }, { id: "heading-order", impact: "moderate", selector: "h1, h2, h3, h4, h5, h6, [role=heading]", matches: "heading-matches", tags: ["cat.semantics", "best-practice"], all: [], any: ["heading-order"], none: [] }, { id: "hidden-content", impact: "minor", selector: "*", excludeHidden: false, tags: ["cat.structure", "best-practice", "experimental", "review-item"], all: [], any: ["hidden-content"], none: [] }, { id: "html-has-lang", impact: "serious", selector: "html", matches: "is-initiator-matches", tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"], actIds: ["b5c3f8"], all: [], any: [{ options: { attributes: ["lang", "xml:lang"] }, id: "has-lang" }], none: [] }, { id: "html-lang-valid", impact: "serious", selector: 'html[lang]:not([lang=""]), html[xml\\:lang]:not([xml\\:lang=""])', tags: ["cat.language", "wcag2a", "wcag311", "TTv5", "TT11.a", "EN-301-549", "EN-9.3.1.1", "ACT"], actIds: ["bf051a"], all: [], any: [], none: [{ options: { attributes: ["lang", "xml:lang"] }, id: "valid-lang" }] }, { id: "html-xml-lang-mismatch", impact: "moderate", selector: "html[lang][xml\\:lang]", matches: "xml-lang-mismatch-matches", tags: ["cat.language", "wcag2a", "wcag311", "EN-301-549", "EN-9.3.1.1", "ACT"], actIds: ["5b7ae0"], all: ["xml-lang-mismatch"], any: [], none: [] }, { id: "identical-links-same-purpose", impact: "minor", selector: 'a[href], area[href], [role="link"]', excludeHidden: false, enabled: false, matches: "identical-links-same-purpose-matches", tags: ["cat.semantics", "wcag2aaa", "wcag249"], actIds: ["b20e66"], all: ["identical-links-same-purpose"], any: [], none: [] }, { id: "image-alt", impact: "critical", selector: "img", matches: "no-explicit-name-required-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "TT7.b", "EN-301-549", "EN-9.1.1.1", "ACT"], actIds: ["23a2a8"], all: [], any: ["has-alt", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, "presentational-role"], none: ["alt-space-value"] }, { id: "image-redundant-alt", impact: "minor", selector: "img", tags: ["cat.text-alternatives", "best-practice"], all: [], any: [], none: [{ options: { parentSelector: "button, [role=button], a[href], p, li, td, th" }, id: "duplicate-img-label" }] }, { id: "input-button-name", impact: "critical", selector: 'input[type="button"], input[type="submit"], input[type="reset"]', matches: "no-explicit-name-required-matches", tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["97a4e1"], all: [], any: ["non-empty-if-present", { options: { attribute: "value" }, id: "non-empty-value" }, "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, "presentational-role"], none: [] }, { id: "input-image-alt", impact: "critical", selector: 'input[type="image"]', matches: "no-explicit-name-required-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag111", "wcag412", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "EN-9.4.1.2", "ACT"], actIds: ["59796f"], all: [], any: [{ options: { attribute: "alt" }, id: "non-empty-alt" }, "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "label-content-name-mismatch", impact: "serious", matches: "label-content-name-mismatch-matches", tags: ["cat.semantics", "wcag21a", "wcag253", "EN-301-549", "EN-9.2.5.3", "experimental"], actIds: ["2ee8b8"], all: [], any: [{ options: { pixelThreshold: 0.1, occurrenceThreshold: 3 }, id: "label-content-name-mismatch" }], none: [] }, { id: "label-title-only", impact: "serious", selector: "input, select, textarea", matches: "label-matches", tags: ["cat.forms", "best-practice"], all: [], any: [], none: ["title-only"] }, { id: "label", impact: "critical", selector: "input, textarea", matches: "label-matches", tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["e086e5"], all: [], any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, { options: { attribute: "placeholder" }, id: "non-empty-placeholder" }, "presentational-role"], none: ["hidden-explicit-label"] }, { id: "landmark-banner-is-top-level", impact: "moderate", selector: "header:not([role]), [role=banner]", matches: "landmark-has-body-context-matches", tags: ["cat.semantics", "best-practice"], all: [], any: ["landmark-is-top-level"], none: [] }, { id: "landmark-complementary-is-top-level", impact: "moderate", selector: "aside:not([role]), [role=complementary]", tags: ["cat.semantics", "best-practice"], all: [], any: ["landmark-is-top-level"], none: [] }, { id: "landmark-contentinfo-is-top-level", impact: "moderate", selector: "footer:not([role]), [role=contentinfo]", matches: "landmark-has-body-context-matches", tags: ["cat.semantics", "best-practice"], all: [], any: ["landmark-is-top-level"], none: [] }, { id: "landmark-main-is-top-level", impact: "moderate", selector: "main:not([role]), [role=main]", tags: ["cat.semantics", "best-practice"], all: [], any: ["landmark-is-top-level"], none: [] }, { id: "landmark-no-duplicate-banner", impact: "moderate", selector: "header:not([role]), [role=banner]", tags: ["cat.semantics", "best-practice"], all: [], any: [{ options: { selector: "header:not([role]), [role=banner]", role: "banner" }, id: "page-no-duplicate-banner" }], none: [] }, { id: "landmark-no-duplicate-contentinfo", impact: "moderate", selector: "footer:not([role]), [role=contentinfo]", tags: ["cat.semantics", "best-practice"], all: [], any: [{ options: { selector: "footer:not([role]), [role=contentinfo]", role: "contentinfo" }, id: "page-no-duplicate-contentinfo" }], none: [] }, { id: "landmark-no-duplicate-main", impact: "moderate", selector: "main:not([role]), [role=main]", tags: ["cat.semantics", "best-practice"], all: [], any: [{ options: { selector: "main:not([role]), [role='main']" }, id: "page-no-duplicate-main" }], none: [] }, { id: "landmark-one-main", impact: "moderate", selector: "html", tags: ["cat.semantics", "best-practice"], all: [{ options: { selector: "main:not([role]), [role='main']", passForModal: true }, id: "page-has-main" }], any: [], none: [] }, { id: "landmark-unique", impact: "moderate", selector: "[role=banner], [role=complementary], [role=contentinfo], [role=main], [role=navigation], [role=region], [role=search], [role=form], form, footer, header, aside, main, nav, section", tags: ["cat.semantics", "best-practice"], matches: "landmark-unique-matches", all: [], any: ["landmark-is-unique"], none: [] }, { id: "link-in-text-block", impact: "serious", selector: "a[href], [role=link]", matches: "link-in-text-block-matches", excludeHidden: false, tags: ["cat.color", "wcag2a", "wcag141", "TTv5", "TT13.a", "EN-301-549", "EN-9.1.4.1"], all: [], any: [{ options: { requiredContrastRatio: 3, allowSameColor: true }, id: "link-in-text-block" }, "link-in-text-block-style"], none: [] }, { id: "link-name", impact: "serious", selector: "a[href]", tags: ["cat.name-role-value", "wcag2a", "wcag244", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.2.4.4", "EN-9.4.1.2", "ACT"], actIds: ["c487ae"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: ["focusable-no-name"] }, { id: "list", impact: "serious", selector: "ul, ol", matches: "no-role-matches", tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], all: [], any: [], none: [{ options: { validRoles: ["listitem"], validNodeNames: ["li"] }, id: "only-listitems" }] }, { id: "listitem", impact: "serious", selector: "li", matches: "no-role-matches", tags: ["cat.structure", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1"], all: [], any: ["listitem"], none: [] }, { id: "marquee", impact: "serious", selector: "marquee", excludeHidden: false, tags: ["cat.parsing", "wcag2a", "wcag222", "TTv5", "TT2.b", "EN-301-549", "EN-9.2.2.2"], all: [], any: [], none: ["is-on-screen"] }, { id: "meta-refresh-no-exceptions", impact: "minor", selector: 'meta[http-equiv="refresh"][content]', excludeHidden: false, enabled: false, tags: ["cat.time-and-media", "wcag2aaa", "wcag224", "wcag325"], actIds: ["bisz58"], all: [], any: [{ options: { minDelay: 72e3, maxDelay: false }, id: "meta-refresh-no-exceptions" }], none: [] }, { id: "meta-refresh", impact: "critical", selector: 'meta[http-equiv="refresh"][content]', excludeHidden: false, tags: ["cat.time-and-media", "wcag2a", "wcag221", "TTv5", "TT8.a", "EN-301-549", "EN-9.2.2.1"], actIds: ["bc659a", "bisz58"], all: [], any: [{ options: { minDelay: 0, maxDelay: 72e3 }, id: "meta-refresh" }], none: [] }, { id: "meta-viewport-large", impact: "minor", selector: 'meta[name="viewport"]', matches: "is-initiator-matches", excludeHidden: false, tags: ["cat.sensory-and-visual-cues", "best-practice"], all: [], any: [{ options: { scaleMinimum: 5, lowerBound: 2 }, id: "meta-viewport-large" }], none: [] }, { id: "meta-viewport", impact: "critical", selector: 'meta[name="viewport"]', matches: "is-initiator-matches", excludeHidden: false, tags: ["cat.sensory-and-visual-cues", "wcag2aa", "wcag144", "EN-301-549", "EN-9.1.4.4", "ACT"], actIds: ["b4f0c3"], all: [], any: [{ options: { scaleMinimum: 2 }, id: "meta-viewport" }], none: [] }, { id: "nested-interactive", impact: "serious", matches: "nested-interactive-matches", tags: ["cat.keyboard", "wcag2a", "wcag412", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"], actIds: ["307n5z"], all: [], any: ["no-focusable-content"], none: [] }, { id: "no-autoplay-audio", impact: "moderate", excludeHidden: false, selector: "audio[autoplay], video[autoplay]", matches: "no-autoplay-audio-matches", reviewOnFail: true, tags: ["cat.time-and-media", "wcag2a", "wcag142", "TTv5", "TT2.a", "EN-301-549", "EN-9.1.4.2", "ACT"], actIds: ["80f0bf"], preload: true, all: [{ options: { allowedDuration: 3 }, id: "no-autoplay-audio" }], any: [], none: [] }, { id: "object-alt", impact: "serious", selector: "object[data]", matches: "object-is-loaded-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "EN-301-549", "EN-9.1.1.1"], actIds: ["8fc3b6"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, "presentational-role"], none: [] }, { id: "p-as-heading", impact: "serious", selector: "p", matches: "p-as-heading-matches", tags: ["cat.semantics", "wcag2a", "wcag131", "EN-301-549", "EN-9.1.3.1", "experimental"], all: [{ options: { margins: [{ weight: 150, italic: true }, { weight: 150, size: 1.15 }, { italic: true, size: 1.15 }, { size: 1.4 }], passLength: 1, failLength: 0.5 }, id: "p-as-heading" }], any: [], none: [] }, { id: "page-has-heading-one", impact: "moderate", selector: "html", tags: ["cat.semantics", "best-practice"], all: [{ options: { selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]", passForModal: true }, id: "page-has-heading-one" }], any: [], none: [] }, { id: "presentation-role-conflict", impact: "minor", selector: `img[alt=''], [role="none"], [role="presentation"]`, matches: "has-implicit-chromium-role-matches", tags: ["cat.aria", "best-practice", "ACT"], actIds: ["46ca7f"], all: [], any: [], none: ["is-element-focusable", "has-global-aria-attribute"] }, { id: "region", impact: "moderate", selector: "body *", tags: ["cat.keyboard", "best-practice"], all: [], any: [{ options: { regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg" }, id: "region" }], none: [] }, { id: "role-img-alt", impact: "serious", selector: "[role='img']:not(img, area, input, object)", matches: "html-namespace-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"], actIds: ["23a2a8"], all: [], any: ["aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "scope-attr-valid", impact: "moderate", selector: "td[scope], th[scope]", tags: ["cat.tables", "best-practice"], all: ["html5-scope", { options: { values: ["row", "col", "rowgroup", "colgroup"] }, id: "scope-value" }], any: [], none: [] }, { id: "scrollable-region-focusable", impact: "serious", selector: "*:not(select,textarea)", matches: "scrollable-region-focusable-matches", tags: ["cat.keyboard", "wcag2a", "wcag211", "wcag213", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1", "EN-9.2.1.3"], actIds: ["0ssw9k"], all: [], any: ["focusable-content", "focusable-element"], none: [] }, { id: "select-name", impact: "critical", selector: "select", tags: ["cat.forms", "wcag2a", "wcag412", "section508", "section508.22.n", "TTv5", "TT5.c", "EN-301-549", "EN-9.4.1.2", "ACT"], actIds: ["e086e5"], all: [], any: ["implicit-label", "explicit-label", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }, "presentational-role"], none: ["hidden-explicit-label"] }, { id: "server-side-image-map", impact: "minor", selector: "img[ismap]", tags: ["cat.text-alternatives", "wcag2a", "wcag211", "section508", "section508.22.f", "TTv5", "TT4.a", "EN-301-549", "EN-9.2.1.1"], all: [], any: [], none: ["exists"] }, { id: "skip-link", impact: "moderate", selector: 'a[href^="#"], a[href^="/#"]', matches: "skip-link-matches", tags: ["cat.keyboard", "best-practice"], all: [], any: ["skip-link"], none: [] }, { id: "summary-name", impact: "serious", selector: "summary", matches: "summary-interactive-matches", tags: ["cat.name-role-value", "wcag2a", "wcag412", "section508", "section508.22.a", "TTv5", "TT6.a", "EN-301-549", "EN-9.4.1.2"], all: [], any: ["has-visible-text", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "svg-img-alt", impact: "serious", selector: '[role="img"], [role="graphics-symbol"], svg[role="graphics-document"]', matches: "svg-namespace-matches", tags: ["cat.text-alternatives", "wcag2a", "wcag111", "section508", "section508.22.a", "TTv5", "TT7.a", "EN-301-549", "EN-9.1.1.1", "ACT"], actIds: ["7d6734"], all: [], any: ["svg-non-empty-title", "aria-label", "aria-labelledby", { options: { attribute: "title" }, id: "non-empty-title" }], none: [] }, { id: "tabindex", impact: "serious", selector: "[tabindex]", tags: ["cat.keyboard", "best-practice"], all: [], any: ["tabindex"], none: [] }, { id: "table-duplicate-name", impact: "minor", selector: "table", tags: ["cat.tables", "best-practice"], all: [], any: [], none: ["same-caption-summary"] }, { id: "table-fake-caption", impact: "serious", selector: "table", matches: "data-table-matches", tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "EN-301-549", "EN-9.1.3.1"], all: ["caption-faked"], any: [], none: [] }, { id: "target-size", impact: "serious", selector: "*", enabled: false, matches: "widget-not-inline-matches", tags: ["cat.sensory-and-visual-cues", "wcag22aa", "wcag258"], all: [], any: [{ options: { minSize: 24 }, id: "target-size" }, { options: { minOffset: 24 }, id: "target-offset" }], none: [] }, { id: "td-has-header", impact: "critical", selector: "table", matches: "data-table-large-matches", tags: ["cat.tables", "experimental", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"], all: ["td-has-header"], any: [], none: [] }, { id: "td-headers-attr", impact: "serious", selector: "table", matches: "table-or-grid-role-matches", tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"], actIds: ["a25f45"], all: ["td-headers-attr"], any: [], none: [] }, { id: "th-has-data-cells", impact: "serious", selector: "table", matches: "data-table-matches", tags: ["cat.tables", "wcag2a", "wcag131", "section508", "section508.22.g", "TTv5", "TT14.b", "EN-301-549", "EN-9.1.3.1"], actIds: ["d0f69e"], all: ["th-has-data-cells"], any: [], none: [] }, { id: "valid-lang", impact: "serious", selector: "[lang]:not(html), [xml\\:lang]:not(html)", tags: ["cat.language", "wcag2aa", "wcag312", "TTv5", "TT11.b", "EN-301-549", "EN-9.3.1.2", "ACT"], actIds: ["de46e4"], all: [], any: [], none: [{ options: { attributes: ["lang", "xml:lang"] }, id: "valid-lang" }] }, { id: "video-caption", impact: "critical", selector: "video", tags: ["cat.text-alternatives", "wcag2a", "wcag122", "section508", "section508.22.a", "TTv5", "TT17.a", "EN-301-549", "EN-9.1.2.2"], actIds: ["eac66b"], all: [], any: [], none: ["caption"] }], checks: [{ id: "abstractrole", evaluate: "abstractrole-evaluate" }, { id: "aria-allowed-attr", evaluate: "aria-allowed-attr-evaluate", options: { validTreeRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"] } }, { id: "aria-allowed-role", evaluate: "aria-allowed-role-evaluate", options: { allowImplicit: true, ignoredTags: [] } }, { id: "aria-busy", evaluate: "aria-busy-evaluate", deprecated: true }, { id: "aria-conditional-attr", evaluate: "aria-conditional-attr-evaluate", options: { invalidTableRowAttrs: ["aria-posinset", "aria-setsize", "aria-expanded", "aria-level"] } }, { id: "aria-errormessage", evaluate: "aria-errormessage-evaluate" }, { id: "aria-hidden-body", evaluate: "aria-hidden-body-evaluate" }, { id: "aria-level", evaluate: "aria-level-evaluate" }, { id: "aria-prohibited-attr", evaluate: "aria-prohibited-attr-evaluate", options: { elementsAllowedAriaLabel: ["applet", "input"] } }, { id: "aria-required-attr", evaluate: "aria-required-attr-evaluate" }, { id: "aria-required-children", evaluate: "aria-required-children-evaluate", options: { reviewEmpty: ["doc-bibliography", "doc-endnotes", "grid", "list", "listbox", "menu", "menubar", "table", "tablist", "tree", "treegrid", "rowgroup"] } }, { id: "aria-required-parent", evaluate: "aria-required-parent-evaluate", options: { ownGroupRoles: ["listitem", "treeitem"] } }, { id: "aria-roledescription", evaluate: "aria-roledescription-evaluate", options: { supportedRoles: ["button", "img", "checkbox", "radio", "combobox", "menuitemcheckbox", "menuitemradio"] } }, { id: "aria-unsupported-attr", evaluate: "aria-unsupported-attr-evaluate" }, { id: "aria-valid-attr-value", evaluate: "aria-valid-attr-value-evaluate", options: [] }, { id: "aria-valid-attr", evaluate: "aria-valid-attr-evaluate", options: [] }, { id: "braille-label-equivalent", evaluate: "braille-label-equivalent-evaluate" }, { id: "braille-roledescription-equivalent", evaluate: "braille-roledescription-equivalent-evaluate" }, { id: "deprecatedrole", evaluate: "deprecatedrole-evaluate" }, { id: "fallbackrole", evaluate: "fallbackrole-evaluate" }, { id: "has-global-aria-attribute", evaluate: "has-global-aria-attribute-evaluate" }, { id: "has-widget-role", evaluate: "has-widget-role-evaluate", options: [] }, { id: "invalidrole", evaluate: "invalidrole-evaluate" }, { id: "is-element-focusable", evaluate: "is-element-focusable-evaluate" }, { id: "no-implicit-explicit-label", evaluate: "no-implicit-explicit-label-evaluate" }, { id: "unsupportedrole", evaluate: "unsupportedrole-evaluate" }, { id: "valid-scrollable-semantics", evaluate: "valid-scrollable-semantics-evaluate", options: { roles: ["tooltip"] } }, { id: "color-contrast-enhanced", evaluate: "color-contrast-evaluate", options: { ignoreUnicode: true, ignoreLength: false, ignorePseudo: false, boldValue: 700, boldTextPt: 14, largeTextPt: 18, contrastRatio: { normal: { expected: 7, minThreshold: 4.5 }, large: { expected: 4.5, minThreshold: 3 } }, pseudoSizeThreshold: 0.25, shadowOutlineEmMax: 0.1, textStrokeEmMin: 0.03 } }, { id: "color-contrast", evaluate: "color-contrast-evaluate", options: { ignoreUnicode: true, ignoreLength: false, ignorePseudo: false, boldValue: 700, boldTextPt: 14, largeTextPt: 18, contrastRatio: { normal: { expected: 4.5 }, large: { expected: 3 } }, pseudoSizeThreshold: 0.25, shadowOutlineEmMax: 0.2, textStrokeEmMin: 0.03 } }, { id: "link-in-text-block-style", evaluate: "link-in-text-block-style-evaluate" }, { id: "link-in-text-block", evaluate: "link-in-text-block-evaluate", options: { requiredContrastRatio: 3, allowSameColor: true } }, { id: "autocomplete-appropriate", evaluate: "autocomplete-appropriate-evaluate", deprecated: true }, { id: "autocomplete-valid", evaluate: "autocomplete-valid-evaluate", options: { stateTerms: ["none", "false", "true", "disabled", "enabled", "undefined", "null"], ignoredValues: ["text", "pronouns", "gender", "message", "content"] } }, { id: "accesskeys", evaluate: "accesskeys-evaluate", after: "accesskeys-after" }, { id: "focusable-content", evaluate: "focusable-content-evaluate" }, { id: "focusable-disabled", evaluate: "focusable-disabled-evaluate" }, { id: "focusable-element", evaluate: "focusable-element-evaluate" }, { id: "focusable-modal-open", evaluate: "focusable-modal-open-evaluate" }, { id: "focusable-no-name", evaluate: "focusable-no-name-evaluate" }, { id: "focusable-not-tabbable", evaluate: "focusable-not-tabbable-evaluate" }, { id: "frame-focusable-content", evaluate: "frame-focusable-content-evaluate" }, { id: "landmark-is-top-level", evaluate: "landmark-is-top-level-evaluate" }, { id: "no-focusable-content", evaluate: "no-focusable-content-evaluate" }, { id: "page-has-heading-one", evaluate: "has-descendant-evaluate", after: "has-descendant-after", options: { selector: "h1:not([role], [aria-level]), :is(h1, h2, h3, h4, h5, h6):not([role])[aria-level=1], [role=heading][aria-level=1]", passForModal: true } }, { id: "page-has-main", evaluate: "has-descendant-evaluate", after: "has-descendant-after", options: { selector: "main:not([role]), [role='main']", passForModal: true } }, { id: "page-no-duplicate-banner", evaluate: "page-no-duplicate-evaluate", after: "page-no-duplicate-after", options: { selector: "header:not([role]), [role=banner]", role: "banner" } }, { id: "page-no-duplicate-contentinfo", evaluate: "page-no-duplicate-evaluate", after: "page-no-duplicate-after", options: { selector: "footer:not([role]), [role=contentinfo]", role: "contentinfo" } }, { id: "page-no-duplicate-main", evaluate: "page-no-duplicate-evaluate", after: "page-no-duplicate-after", options: { selector: "main:not([role]), [role='main']" } }, { id: "tabindex", evaluate: "tabindex-evaluate" }, { id: "alt-space-value", evaluate: "alt-space-value-evaluate" }, { id: "duplicate-img-label", evaluate: "duplicate-img-label-evaluate", options: { parentSelector: "button, [role=button], a[href], p, li, td, th" } }, { id: "explicit-label", evaluate: "explicit-evaluate" }, { id: "help-same-as-label", evaluate: "help-same-as-label-evaluate" }, { id: "hidden-explicit-label", evaluate: "hidden-explicit-label-evaluate" }, { id: "implicit-label", evaluate: "implicit-evaluate" }, { id: "label-content-name-mismatch", evaluate: "label-content-name-mismatch-evaluate", options: { pixelThreshold: 0.1, occurrenceThreshold: 3 } }, { id: "multiple-label", evaluate: "multiple-label-evaluate" }, { id: "title-only", evaluate: "title-only-evaluate" }, { id: "landmark-is-unique", evaluate: "landmark-is-unique-evaluate", after: "landmark-is-unique-after" }, { id: "has-lang", evaluate: "has-lang-evaluate", options: { attributes: ["lang", "xml:lang"] } }, { id: "valid-lang", evaluate: "valid-lang-evaluate", options: { attributes: ["lang", "xml:lang"] } }, { id: "xml-lang-mismatch", evaluate: "xml-lang-mismatch-evaluate" }, { id: "dlitem", evaluate: "dlitem-evaluate" }, { id: "listitem", evaluate: "listitem-evaluate" }, { id: "only-dlitems", evaluate: "invalid-children-evaluate", options: { validRoles: ["definition", "term", "listitem"], validNodeNames: ["dt", "dd"], divGroups: true } }, { id: "only-listitems", evaluate: "invalid-children-evaluate", options: { validRoles: ["listitem"], validNodeNames: ["li"] } }, { id: "structured-dlitems", evaluate: "structured-dlitems-evaluate" }, { id: "caption", evaluate: "caption-evaluate" }, { id: "frame-tested", evaluate: "frame-tested-evaluate", after: "frame-tested-after", options: { isViolation: false } }, { id: "no-autoplay-audio", evaluate: "no-autoplay-audio-evaluate", options: { allowedDuration: 3 } }, { id: "css-orientation-lock", evaluate: "css-orientation-lock-evaluate", options: { degreeThreshold: 2 } }, { id: "meta-viewport-large", evaluate: "meta-viewport-scale-evaluate", options: { scaleMinimum: 5, lowerBound: 2 } }, { id: "meta-viewport", evaluate: "meta-viewport-scale-evaluate", options: { scaleMinimum: 2 } }, { id: "target-offset", evaluate: "target-offset-evaluate", options: { minOffset: 24 } }, { id: "target-size", evaluate: "target-size-evaluate", options: { minSize: 24 } }, { id: "header-present", evaluate: "has-descendant-evaluate", after: "has-descendant-after", options: { selector: ":is(h1, h2, h3, h4, h5, h6):not([role]), [role=heading]" } }, { id: "heading-order", evaluate: "heading-order-evaluate", after: "heading-order-after" }, { id: "identical-links-same-purpose", evaluate: "identical-links-same-purpose-evaluate", after: "identical-links-same-purpose-after" }, { id: "internal-link-present", evaluate: "internal-link-present-evaluate" }, { id: "landmark", evaluate: "has-descendant-evaluate", options: { selector: "main, [role=main]" } }, { id: "meta-refresh-no-exceptions", evaluate: "meta-refresh-evaluate", options: { minDelay: 72e3, maxDelay: false } }, { id: "meta-refresh", evaluate: "meta-refresh-evaluate", options: { minDelay: 0, maxDelay: 72e3 } }, { id: "p-as-heading", evaluate: "p-as-heading-evaluate", options: { margins: [{ weight: 150, italic: true }, { weight: 150, size: 1.15 }, { italic: true, size: 1.15 }, { size: 1.4 }], passLength: 1, failLength: 0.5 } }, { id: "region", evaluate: "region-evaluate", after: "region-after", options: { regionMatcher: "dialog, [role=dialog], [role=alertdialog], svg" } }, { id: "skip-link", evaluate: "skip-link-evaluate" }, { id: "unique-frame-title", evaluate: "unique-frame-title-evaluate", after: "unique-frame-title-after" }, { id: "duplicate-id-active", evaluate: "duplicate-id-evaluate", after: "duplicate-id-after" }, { id: "duplicate-id-aria", evaluate: "duplicate-id-evaluate", after: "duplicate-id-after" }, { id: "duplicate-id", evaluate: "duplicate-id-evaluate", after: "duplicate-id-after" }, { id: "aria-label", evaluate: "aria-label-evaluate" }, { id: "aria-labelledby", evaluate: "aria-labelledby-evaluate" }, { id: "avoid-inline-spacing", evaluate: "avoid-inline-spacing-evaluate", options: { cssProperties: ["line-height", "letter-spacing", "word-spacing"] } }, { id: "button-has-visible-text", evaluate: "has-text-content-evaluate" }, { id: "doc-has-title", evaluate: "doc-has-title-evaluate" }, { id: "exists", evaluate: "exists-evaluate" }, { id: "has-alt", evaluate: "has-alt-evaluate" }, { id: "has-visible-text", evaluate: "has-text-content-evaluate" }, { id: "important-letter-spacing", evaluate: "inline-style-property-evaluate", options: { cssProperty: "letter-spacing", minValue: 0.12 } }, { id: "important-line-height", evaluate: "inline-style-property-evaluate", options: { multiLineOnly: true, cssProperty: "line-height", minValue: 1.5, normalValue: 1 } }, { id: "important-word-spacing", evaluate: "inline-style-property-evaluate", options: { cssProperty: "word-spacing", minValue: 0.16 } }, { id: "is-on-screen", evaluate: "is-on-screen-evaluate" }, { id: "non-empty-alt", evaluate: "attr-non-space-content-evaluate", options: { attribute: "alt" } }, { id: "non-empty-if-present", evaluate: "non-empty-if-present-evaluate" }, { id: "non-empty-placeholder", evaluate: "attr-non-space-content-evaluate", options: { attribute: "placeholder" } }, { id: "non-empty-title", evaluate: "attr-non-space-content-evaluate", options: { attribute: "title" } }, { id: "non-empty-value", evaluate: "attr-non-space-content-evaluate", options: { attribute: "value" } }, { id: "presentational-role", evaluate: "presentational-role-evaluate" }, { id: "role-none", evaluate: "matches-definition-evaluate", deprecated: true, options: { matcher: { attributes: { role: "none" } } } }, { id: "role-presentation", evaluate: "matches-definition-evaluate", deprecated: true, options: { matcher: { attributes: { role: "presentation" } } } }, { id: "svg-non-empty-title", evaluate: "svg-non-empty-title-evaluate" }, { id: "caption-faked", evaluate: "caption-faked-evaluate" }, { id: "html5-scope", evaluate: "html5-scope-evaluate" }, { id: "same-caption-summary", evaluate: "same-caption-summary-evaluate" }, { id: "scope-value", evaluate: "scope-value-evaluate", options: { values: ["row", "col", "rowgroup", "colgroup"] } }, { id: "td-has-header", evaluate: "td-has-header-evaluate" }, { id: "td-headers-attr", evaluate: "td-headers-attr-evaluate" }, { id: "th-has-data-cells", evaluate: "th-has-data-cells-evaluate" }, { id: "hidden-content", evaluate: "hidden-content-evaluate" }] });
    }("object" == typeof window ? window : exports);
  }
});

export {
  require_axe_min
};
