(function(){"use strict";try{if(typeof document<"u"){var e=document.createElement("style");e.appendChild(document.createTextNode(".cdui-example{width:240px;padding:12px 14px;background:#1e1e1e;color:#e6e6e6;border:1px solid #333;border-radius:8px;font:13px/1.5 system-ui,-apple-system,sans-serif;box-shadow:0 6px 20px #0006}.cdui-example__title{font-weight:600;margin-bottom:8px;color:#2dd4bf}.cdui-example__row{margin:2px 0;color:#b8b8b8}.cdui-example__row b{color:#e6e6e6}.cdui-example__btn{margin-top:10px;width:100%;padding:6px 10px;background:#0d9488;color:#fff;border:0;border-radius:6px;cursor:pointer;font-weight:600}.cdui-example__btn:hover{background:#0f766e}.cdui-node-body{padding:6px 8px;font:12px/1.4 system-ui,-apple-system,sans-serif;color:#cde9e4}.cdui-node-body__title{font-weight:600;color:#2dd4bf;margin-bottom:4px}.cdui-node-body__row{display:flex;justify-content:space-between;gap:12px}.cdui-node-body__row b{color:#fff}")),document.head.appendChild(e)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
function $m(_) {
  return _ && _.__esModule && Object.prototype.hasOwnProperty.call(_, "default") ? _.default : _;
}
var fi = { exports: {} }, ze = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hd;
function Fm() {
  if (hd) return ze;
  hd = 1;
  var _ = Symbol.for("react.transitional.element"), X = Symbol.for("react.fragment");
  function G(h, ll, cl) {
    var _l = null;
    if (cl !== void 0 && (_l = "" + cl), ll.key !== void 0 && (_l = "" + ll.key), "key" in ll) {
      cl = {};
      for (var Ml in ll)
        Ml !== "key" && (cl[Ml] = ll[Ml]);
    } else cl = ll;
    return ll = cl.ref, {
      $$typeof: _,
      type: h,
      key: _l,
      ref: ll !== void 0 ? ll : null,
      props: cl
    };
  }
  return ze.Fragment = X, ze.jsx = G, ze.jsxs = G, ze;
}
var od;
function km() {
  return od || (od = 1, fi.exports = Fm()), fi.exports;
}
var Al = km(), ci = { exports: {} }, C = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sd;
function Im() {
  if (Sd) return C;
  Sd = 1;
  var _ = Symbol.for("react.transitional.element"), X = Symbol.for("react.portal"), G = Symbol.for("react.fragment"), h = Symbol.for("react.strict_mode"), ll = Symbol.for("react.profiler"), cl = Symbol.for("react.consumer"), _l = Symbol.for("react.context"), Ml = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), A = Symbol.for("react.memo"), F = Symbol.for("react.lazy"), R = Symbol.for("react.activity"), yl = Symbol.iterator;
  function Wl(y) {
    return y === null || typeof y != "object" ? null : (y = yl && y[yl] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var jl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, Cl = Object.assign, Ut = {};
  function $l(y, E, O) {
    this.props = y, this.context = E, this.refs = Ut, this.updater = O || jl;
  }
  $l.prototype.isReactComponent = {}, $l.prototype.setState = function(y, E) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, E, "setState");
  }, $l.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Wt() {
  }
  Wt.prototype = $l.prototype;
  function Rl(y, E, O) {
    this.props = y, this.context = E, this.refs = Ut, this.updater = O || jl;
  }
  var ft = Rl.prototype = new Wt();
  ft.constructor = Rl, Cl(ft, $l.prototype), ft.isPureReactComponent = !0;
  var Et = Array.isArray;
  function Gl() {
  }
  var K = { H: null, A: null, T: null, S: null }, Xl = Object.prototype.hasOwnProperty;
  function At(y, E, O) {
    var D = O.ref;
    return {
      $$typeof: _,
      type: y,
      key: E,
      ref: D !== void 0 ? D : null,
      props: O
    };
  }
  function Zu(y, E) {
    return At(y.type, E, y.props);
  }
  function _t(y) {
    return typeof y == "object" && y !== null && y.$$typeof === _;
  }
  function Ql(y) {
    var E = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(O) {
      return E[O];
    });
  }
  var Eu = /\/+/g;
  function pt(y, E) {
    return typeof y == "object" && y !== null && y.key != null ? Ql("" + y.key) : E.toString(36);
  }
  function gt(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(Gl, Gl) : (y.status = "pending", y.then(
          function(E) {
            y.status === "pending" && (y.status = "fulfilled", y.value = E);
          },
          function(E) {
            y.status === "pending" && (y.status = "rejected", y.reason = E);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function b(y, E, O, D, Y) {
    var Q = typeof y;
    (Q === "undefined" || Q === "boolean") && (y = null);
    var k = !1;
    if (y === null) k = !0;
    else
      switch (Q) {
        case "bigint":
        case "string":
        case "number":
          k = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case _:
            case X:
              k = !0;
              break;
            case F:
              return k = y._init, b(
                k(y._payload),
                E,
                O,
                D,
                Y
              );
          }
      }
    if (k)
      return Y = Y(y), k = D === "" ? "." + pt(y, 0) : D, Et(Y) ? (O = "", k != null && (O = k.replace(Eu, "$&/") + "/"), b(Y, E, O, "", function(Ma) {
        return Ma;
      })) : Y != null && (_t(Y) && (Y = Zu(
        Y,
        O + (Y.key == null || y && y.key === Y.key ? "" : ("" + Y.key).replace(
          Eu,
          "$&/"
        ) + "/") + k
      )), E.push(Y)), 1;
    k = 0;
    var Yl = D === "" ? "." : D + ":";
    if (Et(y))
      for (var hl = 0; hl < y.length; hl++)
        D = y[hl], Q = Yl + pt(D, hl), k += b(
          D,
          E,
          O,
          Q,
          Y
        );
    else if (hl = Wl(y), typeof hl == "function")
      for (y = hl.call(y), hl = 0; !(D = y.next()).done; )
        D = D.value, Q = Yl + pt(D, hl++), k += b(
          D,
          E,
          O,
          Q,
          Y
        );
    else if (Q === "object") {
      if (typeof y.then == "function")
        return b(
          gt(y),
          E,
          O,
          D,
          Y
        );
      throw E = String(y), Error(
        "Objects are not valid as a React child (found: " + (E === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : E) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return k;
  }
  function r(y, E, O) {
    if (y == null) return y;
    var D = [], Y = 0;
    return b(y, D, "", "", function(Q) {
      return E.call(O, Q, Y++);
    }), D;
  }
  function q(y) {
    if (y._status === -1) {
      var E = y._result;
      E = E(), E.then(
        function(O) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = O);
        },
        function(O) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = O);
        }
      ), y._status === -1 && (y._status = 0, y._result = E);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var tl = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var E = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(E)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  }, nl = {
    map: r,
    forEach: function(y, E, O) {
      r(
        y,
        function() {
          E.apply(this, arguments);
        },
        O
      );
    },
    count: function(y) {
      var E = 0;
      return r(y, function() {
        E++;
      }), E;
    },
    toArray: function(y) {
      return r(y, function(E) {
        return E;
      }) || [];
    },
    only: function(y) {
      if (!_t(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return C.Activity = R, C.Children = nl, C.Component = $l, C.Fragment = G, C.Profiler = ll, C.PureComponent = Rl, C.StrictMode = h, C.Suspense = N, C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = K, C.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return K.H.useMemoCache(y);
    }
  }, C.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, C.cacheSignal = function() {
    return null;
  }, C.cloneElement = function(y, E, O) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var D = Cl({}, y.props), Y = y.key;
    if (E != null)
      for (Q in E.key !== void 0 && (Y = "" + E.key), E)
        !Xl.call(E, Q) || Q === "key" || Q === "__self" || Q === "__source" || Q === "ref" && E.ref === void 0 || (D[Q] = E[Q]);
    var Q = arguments.length - 2;
    if (Q === 1) D.children = O;
    else if (1 < Q) {
      for (var k = Array(Q), Yl = 0; Yl < Q; Yl++)
        k[Yl] = arguments[Yl + 2];
      D.children = k;
    }
    return At(y.type, Y, D);
  }, C.createContext = function(y) {
    return y = {
      $$typeof: _l,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: cl,
      _context: y
    }, y;
  }, C.createElement = function(y, E, O) {
    var D, Y = {}, Q = null;
    if (E != null)
      for (D in E.key !== void 0 && (Q = "" + E.key), E)
        Xl.call(E, D) && D !== "key" && D !== "__self" && D !== "__source" && (Y[D] = E[D]);
    var k = arguments.length - 2;
    if (k === 1) Y.children = O;
    else if (1 < k) {
      for (var Yl = Array(k), hl = 0; hl < k; hl++)
        Yl[hl] = arguments[hl + 2];
      Y.children = Yl;
    }
    if (y && y.defaultProps)
      for (D in k = y.defaultProps, k)
        Y[D] === void 0 && (Y[D] = k[D]);
    return At(y, Q, Y);
  }, C.createRef = function() {
    return { current: null };
  }, C.forwardRef = function(y) {
    return { $$typeof: Ml, render: y };
  }, C.isValidElement = _t, C.lazy = function(y) {
    return {
      $$typeof: F,
      _payload: { _status: -1, _result: y },
      _init: q
    };
  }, C.memo = function(y, E) {
    return {
      $$typeof: A,
      type: y,
      compare: E === void 0 ? null : E
    };
  }, C.startTransition = function(y) {
    var E = K.T, O = {};
    K.T = O;
    try {
      var D = y(), Y = K.S;
      Y !== null && Y(O, D), typeof D == "object" && D !== null && typeof D.then == "function" && D.then(Gl, tl);
    } catch (Q) {
      tl(Q);
    } finally {
      E !== null && O.types !== null && (E.types = O.types), K.T = E;
    }
  }, C.unstable_useCacheRefresh = function() {
    return K.H.useCacheRefresh();
  }, C.use = function(y) {
    return K.H.use(y);
  }, C.useActionState = function(y, E, O) {
    return K.H.useActionState(y, E, O);
  }, C.useCallback = function(y, E) {
    return K.H.useCallback(y, E);
  }, C.useContext = function(y) {
    return K.H.useContext(y);
  }, C.useDebugValue = function() {
  }, C.useDeferredValue = function(y, E) {
    return K.H.useDeferredValue(y, E);
  }, C.useEffect = function(y, E) {
    return K.H.useEffect(y, E);
  }, C.useEffectEvent = function(y) {
    return K.H.useEffectEvent(y);
  }, C.useId = function() {
    return K.H.useId();
  }, C.useImperativeHandle = function(y, E, O) {
    return K.H.useImperativeHandle(y, E, O);
  }, C.useInsertionEffect = function(y, E) {
    return K.H.useInsertionEffect(y, E);
  }, C.useLayoutEffect = function(y, E) {
    return K.H.useLayoutEffect(y, E);
  }, C.useMemo = function(y, E) {
    return K.H.useMemo(y, E);
  }, C.useOptimistic = function(y, E) {
    return K.H.useOptimistic(y, E);
  }, C.useReducer = function(y, E, O) {
    return K.H.useReducer(y, E, O);
  }, C.useRef = function(y) {
    return K.H.useRef(y);
  }, C.useState = function(y) {
    return K.H.useState(y);
  }, C.useSyncExternalStore = function(y, E, O) {
    return K.H.useSyncExternalStore(
      y,
      E,
      O
    );
  }, C.useTransition = function() {
    return K.H.useTransition();
  }, C.version = "19.2.7", C;
}
var gd;
function si() {
  return gd || (gd = 1, ci.exports = Im()), ci.exports;
}
var Pm = si();
const Tu = /* @__PURE__ */ $m(Pm);
var ii = { exports: {} }, Te = {}, vi = { exports: {} }, yi = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bd;
function l1() {
  return bd || (bd = 1, (function(_) {
    function X(b, r) {
      var q = b.length;
      b.push(r);
      l: for (; 0 < q; ) {
        var tl = q - 1 >>> 1, nl = b[tl];
        if (0 < ll(nl, r))
          b[tl] = r, b[q] = nl, q = tl;
        else break l;
      }
    }
    function G(b) {
      return b.length === 0 ? null : b[0];
    }
    function h(b) {
      if (b.length === 0) return null;
      var r = b[0], q = b.pop();
      if (q !== r) {
        b[0] = q;
        l: for (var tl = 0, nl = b.length, y = nl >>> 1; tl < y; ) {
          var E = 2 * (tl + 1) - 1, O = b[E], D = E + 1, Y = b[D];
          if (0 > ll(O, q))
            D < nl && 0 > ll(Y, O) ? (b[tl] = Y, b[D] = q, tl = D) : (b[tl] = O, b[E] = q, tl = E);
          else if (D < nl && 0 > ll(Y, q))
            b[tl] = Y, b[D] = q, tl = D;
          else break l;
        }
      }
      return r;
    }
    function ll(b, r) {
      var q = b.sortIndex - r.sortIndex;
      return q !== 0 ? q : b.id - r.id;
    }
    if (_.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var cl = performance;
      _.unstable_now = function() {
        return cl.now();
      };
    } else {
      var _l = Date, Ml = _l.now();
      _.unstable_now = function() {
        return _l.now() - Ml;
      };
    }
    var N = [], A = [], F = 1, R = null, yl = 3, Wl = !1, jl = !1, Cl = !1, Ut = !1, $l = typeof setTimeout == "function" ? setTimeout : null, Wt = typeof clearTimeout == "function" ? clearTimeout : null, Rl = typeof setImmediate < "u" ? setImmediate : null;
    function ft(b) {
      for (var r = G(A); r !== null; ) {
        if (r.callback === null) h(A);
        else if (r.startTime <= b)
          h(A), r.sortIndex = r.expirationTime, X(N, r);
        else break;
        r = G(A);
      }
    }
    function Et(b) {
      if (Cl = !1, ft(b), !jl)
        if (G(N) !== null)
          jl = !0, Gl || (Gl = !0, Ql());
        else {
          var r = G(A);
          r !== null && gt(Et, r.startTime - b);
        }
    }
    var Gl = !1, K = -1, Xl = 5, At = -1;
    function Zu() {
      return Ut ? !0 : !(_.unstable_now() - At < Xl);
    }
    function _t() {
      if (Ut = !1, Gl) {
        var b = _.unstable_now();
        At = b;
        var r = !0;
        try {
          l: {
            jl = !1, Cl && (Cl = !1, Wt(K), K = -1), Wl = !0;
            var q = yl;
            try {
              t: {
                for (ft(b), R = G(N); R !== null && !(R.expirationTime > b && Zu()); ) {
                  var tl = R.callback;
                  if (typeof tl == "function") {
                    R.callback = null, yl = R.priorityLevel;
                    var nl = tl(
                      R.expirationTime <= b
                    );
                    if (b = _.unstable_now(), typeof nl == "function") {
                      R.callback = nl, ft(b), r = !0;
                      break t;
                    }
                    R === G(N) && h(N), ft(b);
                  } else h(N);
                  R = G(N);
                }
                if (R !== null) r = !0;
                else {
                  var y = G(A);
                  y !== null && gt(
                    Et,
                    y.startTime - b
                  ), r = !1;
                }
              }
              break l;
            } finally {
              R = null, yl = q, Wl = !1;
            }
            r = void 0;
          }
        } finally {
          r ? Ql() : Gl = !1;
        }
      }
    }
    var Ql;
    if (typeof Rl == "function")
      Ql = function() {
        Rl(_t);
      };
    else if (typeof MessageChannel < "u") {
      var Eu = new MessageChannel(), pt = Eu.port2;
      Eu.port1.onmessage = _t, Ql = function() {
        pt.postMessage(null);
      };
    } else
      Ql = function() {
        $l(_t, 0);
      };
    function gt(b, r) {
      K = $l(function() {
        b(_.unstable_now());
      }, r);
    }
    _.unstable_IdlePriority = 5, _.unstable_ImmediatePriority = 1, _.unstable_LowPriority = 4, _.unstable_NormalPriority = 3, _.unstable_Profiling = null, _.unstable_UserBlockingPriority = 2, _.unstable_cancelCallback = function(b) {
      b.callback = null;
    }, _.unstable_forceFrameRate = function(b) {
      0 > b || 125 < b ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Xl = 0 < b ? Math.floor(1e3 / b) : 5;
    }, _.unstable_getCurrentPriorityLevel = function() {
      return yl;
    }, _.unstable_next = function(b) {
      switch (yl) {
        case 1:
        case 2:
        case 3:
          var r = 3;
          break;
        default:
          r = yl;
      }
      var q = yl;
      yl = r;
      try {
        return b();
      } finally {
        yl = q;
      }
    }, _.unstable_requestPaint = function() {
      Ut = !0;
    }, _.unstable_runWithPriority = function(b, r) {
      switch (b) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          b = 3;
      }
      var q = yl;
      yl = b;
      try {
        return r();
      } finally {
        yl = q;
      }
    }, _.unstable_scheduleCallback = function(b, r, q) {
      var tl = _.unstable_now();
      switch (typeof q == "object" && q !== null ? (q = q.delay, q = typeof q == "number" && 0 < q ? tl + q : tl) : q = tl, b) {
        case 1:
          var nl = -1;
          break;
        case 2:
          nl = 250;
          break;
        case 5:
          nl = 1073741823;
          break;
        case 4:
          nl = 1e4;
          break;
        default:
          nl = 5e3;
      }
      return nl = q + nl, b = {
        id: F++,
        callback: r,
        priorityLevel: b,
        startTime: q,
        expirationTime: nl,
        sortIndex: -1
      }, q > tl ? (b.sortIndex = q, X(A, b), G(N) === null && b === G(A) && (Cl ? (Wt(K), K = -1) : Cl = !0, gt(Et, q - tl))) : (b.sortIndex = nl, X(N, b), jl || Wl || (jl = !0, Gl || (Gl = !0, Ql()))), b;
    }, _.unstable_shouldYield = Zu, _.unstable_wrapCallback = function(b) {
      var r = yl;
      return function() {
        var q = yl;
        yl = r;
        try {
          return b.apply(this, arguments);
        } finally {
          yl = q;
        }
      };
    };
  })(yi)), yi;
}
var zd;
function t1() {
  return zd || (zd = 1, vi.exports = l1()), vi.exports;
}
var di = { exports: {} }, ql = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Td;
function u1() {
  if (Td) return ql;
  Td = 1;
  var _ = si();
  function X(N) {
    var A = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      A += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var F = 2; F < arguments.length; F++)
        A += "&args[]=" + encodeURIComponent(arguments[F]);
    }
    return "Minified React error #" + N + "; visit " + A + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function G() {
  }
  var h = {
    d: {
      f: G,
      r: function() {
        throw Error(X(522));
      },
      D: G,
      C: G,
      L: G,
      m: G,
      X: G,
      S: G,
      M: G
    },
    p: 0,
    findDOMNode: null
  }, ll = Symbol.for("react.portal");
  function cl(N, A, F) {
    var R = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ll,
      key: R == null ? null : "" + R,
      children: N,
      containerInfo: A,
      implementation: F
    };
  }
  var _l = _.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Ml(N, A) {
    if (N === "font") return "";
    if (typeof A == "string")
      return A === "use-credentials" ? A : "";
  }
  return ql.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = h, ql.createPortal = function(N, A) {
    var F = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!A || A.nodeType !== 1 && A.nodeType !== 9 && A.nodeType !== 11)
      throw Error(X(299));
    return cl(N, A, null, F);
  }, ql.flushSync = function(N) {
    var A = _l.T, F = h.p;
    try {
      if (_l.T = null, h.p = 2, N) return N();
    } finally {
      _l.T = A, h.p = F, h.d.f();
    }
  }, ql.preconnect = function(N, A) {
    typeof N == "string" && (A ? (A = A.crossOrigin, A = typeof A == "string" ? A === "use-credentials" ? A : "" : void 0) : A = null, h.d.C(N, A));
  }, ql.prefetchDNS = function(N) {
    typeof N == "string" && h.d.D(N);
  }, ql.preinit = function(N, A) {
    if (typeof N == "string" && A && typeof A.as == "string") {
      var F = A.as, R = Ml(F, A.crossOrigin), yl = typeof A.integrity == "string" ? A.integrity : void 0, Wl = typeof A.fetchPriority == "string" ? A.fetchPriority : void 0;
      F === "style" ? h.d.S(
        N,
        typeof A.precedence == "string" ? A.precedence : void 0,
        {
          crossOrigin: R,
          integrity: yl,
          fetchPriority: Wl
        }
      ) : F === "script" && h.d.X(N, {
        crossOrigin: R,
        integrity: yl,
        fetchPriority: Wl,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0
      });
    }
  }, ql.preinitModule = function(N, A) {
    if (typeof N == "string")
      if (typeof A == "object" && A !== null) {
        if (A.as == null || A.as === "script") {
          var F = Ml(
            A.as,
            A.crossOrigin
          );
          h.d.M(N, {
            crossOrigin: F,
            integrity: typeof A.integrity == "string" ? A.integrity : void 0,
            nonce: typeof A.nonce == "string" ? A.nonce : void 0
          });
        }
      } else A == null && h.d.M(N);
  }, ql.preload = function(N, A) {
    if (typeof N == "string" && typeof A == "object" && A !== null && typeof A.as == "string") {
      var F = A.as, R = Ml(F, A.crossOrigin);
      h.d.L(N, F, {
        crossOrigin: R,
        integrity: typeof A.integrity == "string" ? A.integrity : void 0,
        nonce: typeof A.nonce == "string" ? A.nonce : void 0,
        type: typeof A.type == "string" ? A.type : void 0,
        fetchPriority: typeof A.fetchPriority == "string" ? A.fetchPriority : void 0,
        referrerPolicy: typeof A.referrerPolicy == "string" ? A.referrerPolicy : void 0,
        imageSrcSet: typeof A.imageSrcSet == "string" ? A.imageSrcSet : void 0,
        imageSizes: typeof A.imageSizes == "string" ? A.imageSizes : void 0,
        media: typeof A.media == "string" ? A.media : void 0
      });
    }
  }, ql.preloadModule = function(N, A) {
    if (typeof N == "string")
      if (A) {
        var F = Ml(A.as, A.crossOrigin);
        h.d.m(N, {
          as: typeof A.as == "string" && A.as !== "script" ? A.as : void 0,
          crossOrigin: F,
          integrity: typeof A.integrity == "string" ? A.integrity : void 0
        });
      } else h.d.m(N);
  }, ql.requestFormReset = function(N) {
    h.d.r(N);
  }, ql.unstable_batchedUpdates = function(N, A) {
    return N(A);
  }, ql.useFormState = function(N, A, F) {
    return _l.H.useFormState(N, A, F);
  }, ql.useFormStatus = function() {
    return _l.H.useHostTransitionStatus();
  }, ql.version = "19.2.7", ql;
}
var Ed;
function a1() {
  if (Ed) return di.exports;
  Ed = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (X) {
        console.error(X);
      }
  }
  return _(), di.exports = u1(), di.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ad;
function e1() {
  if (Ad) return Te;
  Ad = 1;
  var _ = t1(), X = si(), G = a1();
  function h(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var u = 2; u < arguments.length; u++)
        t += "&args[]=" + encodeURIComponent(arguments[u]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ll(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function cl(l) {
    var t = l, u = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do
        t = l, (t.flags & 4098) !== 0 && (u = t.return), l = t.return;
      while (l);
    }
    return t.tag === 3 ? u : null;
  }
  function _l(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Ml(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function N(l) {
    if (cl(l) !== l)
      throw Error(h(188));
  }
  function A(l) {
    var t = l.alternate;
    if (!t) {
      if (t = cl(l), t === null) throw Error(h(188));
      return t !== l ? null : l;
    }
    for (var u = l, a = t; ; ) {
      var e = u.return;
      if (e === null) break;
      var n = e.alternate;
      if (n === null) {
        if (a = e.return, a !== null) {
          u = a;
          continue;
        }
        break;
      }
      if (e.child === n.child) {
        for (n = e.child; n; ) {
          if (n === u) return N(e), l;
          if (n === a) return N(e), t;
          n = n.sibling;
        }
        throw Error(h(188));
      }
      if (u.return !== a.return) u = e, a = n;
      else {
        for (var f = !1, c = e.child; c; ) {
          if (c === u) {
            f = !0, u = e, a = n;
            break;
          }
          if (c === a) {
            f = !0, a = e, u = n;
            break;
          }
          c = c.sibling;
        }
        if (!f) {
          for (c = n.child; c; ) {
            if (c === u) {
              f = !0, u = n, a = e;
              break;
            }
            if (c === a) {
              f = !0, a = n, u = e;
              break;
            }
            c = c.sibling;
          }
          if (!f) throw Error(h(189));
        }
      }
      if (u.alternate !== a) throw Error(h(190));
    }
    if (u.tag !== 3) throw Error(h(188));
    return u.stateNode.current === u ? l : t;
  }
  function F(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = F(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  var R = Object.assign, yl = Symbol.for("react.element"), Wl = Symbol.for("react.transitional.element"), jl = Symbol.for("react.portal"), Cl = Symbol.for("react.fragment"), Ut = Symbol.for("react.strict_mode"), $l = Symbol.for("react.profiler"), Wt = Symbol.for("react.consumer"), Rl = Symbol.for("react.context"), ft = Symbol.for("react.forward_ref"), Et = Symbol.for("react.suspense"), Gl = Symbol.for("react.suspense_list"), K = Symbol.for("react.memo"), Xl = Symbol.for("react.lazy"), At = Symbol.for("react.activity"), Zu = Symbol.for("react.memo_cache_sentinel"), _t = Symbol.iterator;
  function Ql(l) {
    return l === null || typeof l != "object" ? null : (l = _t && l[_t] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var Eu = Symbol.for("react.client.reference");
  function pt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === Eu ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Cl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Ut:
        return "StrictMode";
      case Et:
        return "Suspense";
      case Gl:
        return "SuspenseList";
      case At:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case jl:
          return "Portal";
        case Rl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case ft:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case K:
          return t = l.displayName || null, t !== null ? t : pt(l.type) || "Memo";
        case Xl:
          t = l._payload, l = l._init;
          try {
            return pt(l(t));
          } catch {
          }
      }
    return null;
  }
  var gt = Array.isArray, b = X.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, r = G.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, q = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, tl = [], nl = -1;
  function y(l) {
    return { current: l };
  }
  function E(l) {
    0 > nl || (l.current = tl[nl], tl[nl] = null, nl--);
  }
  function O(l, t) {
    nl++, tl[nl] = l.current, l.current = t;
  }
  var D = y(null), Y = y(null), Q = y(null), k = y(null);
  function Yl(l, t) {
    switch (O(Q, t), O(Y, l), O(D, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? jy(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = jy(t), l = Gy(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    E(D), O(D, l);
  }
  function hl() {
    E(D), E(Y), E(Q);
  }
  function Ma(l) {
    l.memoizedState !== null && O(k, l);
    var t = D.current, u = Gy(t, l.type);
    t !== u && (O(Y, l), O(D, u));
  }
  function Ee(l) {
    Y.current === l && (E(D), E(Y)), k.current === l && (E(k), oe._currentValue = q);
  }
  var Zn, mi;
  function Au(l) {
    if (Zn === void 0)
      try {
        throw Error();
      } catch (u) {
        var t = u.stack.trim().match(/\n( *(at )?)/);
        Zn = t && t[1] || "", mi = -1 < u.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < u.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zn + l + mi;
  }
  var xn = !1;
  function Vn(l, t) {
    if (!l || xn) return "";
    xn = !0;
    var u = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var T = function() {
                throw Error();
              };
              if (Object.defineProperty(T.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(T, []);
                } catch (S) {
                  var o = S;
                }
                Reflect.construct(l, [], T);
              } else {
                try {
                  T.call();
                } catch (S) {
                  o = S;
                }
                l.call(T.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (S) {
                o = S;
              }
              (T = l()) && typeof T.catch == "function" && T.catch(function() {
              });
            }
          } catch (S) {
            if (S && o && typeof S.stack == "string")
              return [S.stack, o.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var e = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      e && e.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), f = n[0], c = n[1];
      if (f && c) {
        var i = f.split(`
`), m = c.split(`
`);
        for (e = a = 0; a < i.length && !i[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; e < m.length && !m[e].includes(
          "DetermineComponentFrameRoot"
        ); )
          e++;
        if (a === i.length || e === m.length)
          for (a = i.length - 1, e = m.length - 1; 1 <= a && 0 <= e && i[a] !== m[e]; )
            e--;
        for (; 1 <= a && 0 <= e; a--, e--)
          if (i[a] !== m[e]) {
            if (a !== 1 || e !== 1)
              do
                if (a--, e--, 0 > e || i[a] !== m[e]) {
                  var g = `
` + i[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= e);
            break;
          }
      }
    } finally {
      xn = !1, Error.prepareStackTrace = u;
    }
    return (u = l ? l.displayName || l.name : "") ? Au(u) : "";
  }
  function Md(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Au(l.type);
      case 16:
        return Au("Lazy");
      case 13:
        return l.child !== t && t !== null ? Au("Suspense Fallback") : Au("Suspense");
      case 19:
        return Au("SuspenseList");
      case 0:
      case 15:
        return Vn(l.type, !1);
      case 11:
        return Vn(l.type.render, !1);
      case 1:
        return Vn(l.type, !0);
      case 31:
        return Au("Activity");
      default:
        return "";
    }
  }
  function hi(l) {
    try {
      var t = "", u = null;
      do
        t += Md(l, u), u = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Ln = Object.prototype.hasOwnProperty, Kn = _.unstable_scheduleCallback, Jn = _.unstable_cancelCallback, Dd = _.unstable_shouldYield, Ud = _.unstable_requestPaint, Fl = _.unstable_now, pd = _.unstable_getCurrentPriorityLevel, oi = _.unstable_ImmediatePriority, Si = _.unstable_UserBlockingPriority, Ae = _.unstable_NormalPriority, Nd = _.unstable_LowPriority, gi = _.unstable_IdlePriority, Hd = _.log, Rd = _.unstable_setDisableYieldValue, Da = null, kl = null;
  function $t(l) {
    if (typeof Hd == "function" && Rd(l), kl && typeof kl.setStrictMode == "function")
      try {
        kl.setStrictMode(Da, l);
      } catch {
      }
  }
  var Il = Math.clz32 ? Math.clz32 : Yd, qd = Math.log, Cd = Math.LN2;
  function Yd(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (qd(l) / Cd | 0) | 0;
  }
  var _e = 256, re = 262144, Oe = 4194304;
  function _u(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & 261888;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function Me(l, t, u) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var e = 0, n = l.suspendedLanes, f = l.pingedLanes;
    l = l.warmLanes;
    var c = a & 134217727;
    return c !== 0 ? (a = c & ~n, a !== 0 ? e = _u(a) : (f &= c, f !== 0 ? e = _u(f) : u || (u = c & ~l, u !== 0 && (e = _u(u))))) : (c = a & ~n, c !== 0 ? e = _u(c) : f !== 0 ? e = _u(f) : u || (u = a & ~l, u !== 0 && (e = _u(u)))), e === 0 ? 0 : t !== 0 && t !== e && (t & n) === 0 && (n = e & -e, u = t & -t, n >= u || n === 32 && (u & 4194048) !== 0) ? t : e;
  }
  function Ua(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Bd(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function bi() {
    var l = Oe;
    return Oe <<= 1, (Oe & 62914560) === 0 && (Oe = 4194304), l;
  }
  function wn(l) {
    for (var t = [], u = 0; 31 > u; u++) t.push(l);
    return t;
  }
  function pa(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function jd(l, t, u, a, e, n) {
    var f = l.pendingLanes;
    l.pendingLanes = u, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= u, l.entangledLanes &= u, l.errorRecoveryDisabledLanes &= u, l.shellSuspendCounter = 0;
    var c = l.entanglements, i = l.expirationTimes, m = l.hiddenUpdates;
    for (u = f & ~u; 0 < u; ) {
      var g = 31 - Il(u), T = 1 << g;
      c[g] = 0, i[g] = -1;
      var o = m[g];
      if (o !== null)
        for (m[g] = null, g = 0; g < o.length; g++) {
          var S = o[g];
          S !== null && (S.lane &= -536870913);
        }
      u &= ~T;
    }
    a !== 0 && zi(l, a, 0), n !== 0 && e === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(f & ~t));
  }
  function zi(l, t, u) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - Il(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | u & 261930;
  }
  function Ti(l, t) {
    var u = l.entangledLanes |= t;
    for (l = l.entanglements; u; ) {
      var a = 31 - Il(u), e = 1 << a;
      e & t | l[a] & t && (l[a] |= t), u &= ~e;
    }
  }
  function Ei(l, t) {
    var u = t & -t;
    return u = (u & 42) !== 0 ? 1 : Wn(u), (u & (l.suspendedLanes | t)) !== 0 ? 0 : u;
  }
  function Wn(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $n(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ai() {
    var l = r.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : cd(l.type));
  }
  function _i(l, t) {
    var u = r.p;
    try {
      return r.p = l, t();
    } finally {
      r.p = u;
    }
  }
  var Ft = Math.random().toString(36).slice(2), Dl = "__reactFiber$" + Ft, Zl = "__reactProps$" + Ft, xu = "__reactContainer$" + Ft, Fn = "__reactEvents$" + Ft, Gd = "__reactListeners$" + Ft, Xd = "__reactHandles$" + Ft, ri = "__reactResources$" + Ft, Na = "__reactMarker$" + Ft;
  function kn(l) {
    delete l[Dl], delete l[Zl], delete l[Fn], delete l[Gd], delete l[Xd];
  }
  function Vu(l) {
    var t = l[Dl];
    if (t) return t;
    for (var u = l.parentNode; u; ) {
      if (t = u[xu] || u[Dl]) {
        if (u = t.alternate, t.child !== null || u !== null && u.child !== null)
          for (l = Ky(l); l !== null; ) {
            if (u = l[Dl]) return u;
            l = Ky(l);
          }
        return t;
      }
      l = u, u = l.parentNode;
    }
    return null;
  }
  function Lu(l) {
    if (l = l[Dl] || l[xu]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function Ha(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(h(33));
  }
  function Ku(l) {
    var t = l[ri];
    return t || (t = l[ri] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function rl(l) {
    l[Na] = !0;
  }
  var Oi = /* @__PURE__ */ new Set(), Mi = {};
  function ru(l, t) {
    Ju(l, t), Ju(l + "Capture", t);
  }
  function Ju(l, t) {
    for (Mi[l] = t, l = 0; l < t.length; l++)
      Oi.add(t[l]);
  }
  var Qd = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Di = {}, Ui = {};
  function Zd(l) {
    return Ln.call(Ui, l) ? !0 : Ln.call(Di, l) ? !1 : Qd.test(l) ? Ui[l] = !0 : (Di[l] = !0, !1);
  }
  function De(l, t, u) {
    if (Zd(t))
      if (u === null) l.removeAttribute(t);
      else {
        switch (typeof u) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + u);
      }
  }
  function Ue(l, t, u) {
    if (u === null) l.removeAttribute(t);
    else {
      switch (typeof u) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + u);
    }
  }
  function Nt(l, t, u, a) {
    if (a === null) l.removeAttribute(u);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(u);
          return;
      }
      l.setAttributeNS(t, u, "" + a);
    }
  }
  function ct(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function pi(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xd(l, t, u) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var e = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return e.call(this);
        },
        set: function(f) {
          u = "" + f, n.call(this, f);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return u;
        },
        setValue: function(f) {
          u = "" + f;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function In(l) {
    if (!l._valueTracker) {
      var t = pi(l) ? "checked" : "value";
      l._valueTracker = xd(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function Ni(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var u = t.getValue(), a = "";
    return l && (a = pi(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== u ? (t.setValue(l), !0) : !1;
  }
  function pe(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Vd = /[\n"\\]/g;
  function it(l) {
    return l.replace(
      Vd,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Pn(l, t, u, a, e, n, f, c) {
    l.name = "", f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? l.type = f : l.removeAttribute("type"), t != null ? f === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + ct(t)) : l.value !== "" + ct(t) && (l.value = "" + ct(t)) : f !== "submit" && f !== "reset" || l.removeAttribute("value"), t != null ? lf(l, f, ct(t)) : u != null ? lf(l, f, ct(u)) : a != null && l.removeAttribute("value"), e == null && n != null && (l.defaultChecked = !!n), e != null && (l.checked = e && typeof e != "function" && typeof e != "symbol"), c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.name = "" + ct(c) : l.removeAttribute("name");
  }
  function Hi(l, t, u, a, e, n, f, c) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || u != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        In(l);
        return;
      }
      u = u != null ? "" + ct(u) : "", t = t != null ? "" + ct(t) : u, c || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? e, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = c ? l.checked : !!a, l.defaultChecked = !!a, f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (l.name = f), In(l);
  }
  function lf(l, t, u) {
    t === "number" && pe(l.ownerDocument) === l || l.defaultValue === "" + u || (l.defaultValue = "" + u);
  }
  function wu(l, t, u, a) {
    if (l = l.options, t) {
      t = {};
      for (var e = 0; e < u.length; e++)
        t["$" + u[e]] = !0;
      for (u = 0; u < l.length; u++)
        e = t.hasOwnProperty("$" + l[u].value), l[u].selected !== e && (l[u].selected = e), e && a && (l[u].defaultSelected = !0);
    } else {
      for (u = "" + ct(u), t = null, e = 0; e < l.length; e++) {
        if (l[e].value === u) {
          l[e].selected = !0, a && (l[e].defaultSelected = !0);
          return;
        }
        t !== null || l[e].disabled || (t = l[e]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Ri(l, t, u) {
    if (t != null && (t = "" + ct(t), t !== l.value && (l.value = t), u == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = u != null ? "" + ct(u) : "";
  }
  function qi(l, t, u, a) {
    if (t == null) {
      if (a != null) {
        if (u != null) throw Error(h(92));
        if (gt(a)) {
          if (1 < a.length) throw Error(h(93));
          a = a[0];
        }
        u = a;
      }
      u == null && (u = ""), t = u;
    }
    u = ct(t), l.defaultValue = u, a = l.textContent, a === u && a !== "" && a !== null && (l.value = a), In(l);
  }
  function Wu(l, t) {
    if (t) {
      var u = l.firstChild;
      if (u && u === l.lastChild && u.nodeType === 3) {
        u.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ld = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Ci(l, t, u) {
    var a = t.indexOf("--") === 0;
    u == null || typeof u == "boolean" || u === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, u) : typeof u != "number" || u === 0 || Ld.has(t) ? t === "float" ? l.cssFloat = u : l[t] = ("" + u).trim() : l[t] = u + "px";
  }
  function Yi(l, t, u) {
    if (t != null && typeof t != "object")
      throw Error(h(62));
    if (l = l.style, u != null) {
      for (var a in u)
        !u.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "");
      for (var e in t)
        a = t[e], t.hasOwnProperty(e) && u[e] !== a && Ci(l, e, a);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Ci(l, n, t[n]);
  }
  function tf(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Kd = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Jd = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ne(l) {
    return Jd.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ht() {
  }
  var uf = null;
  function af(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var $u = null, Fu = null;
  function Bi(l) {
    var t = Lu(l);
    if (t && (l = t.stateNode)) {
      var u = l[Zl] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Pn(
            l,
            u.value,
            u.defaultValue,
            u.defaultValue,
            u.checked,
            u.defaultChecked,
            u.type,
            u.name
          ), t = u.name, u.type === "radio" && t != null) {
            for (u = l; u.parentNode; ) u = u.parentNode;
            for (u = u.querySelectorAll(
              'input[name="' + it(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < u.length; t++) {
              var a = u[t];
              if (a !== l && a.form === l.form) {
                var e = a[Zl] || null;
                if (!e) throw Error(h(90));
                Pn(
                  a,
                  e.value,
                  e.defaultValue,
                  e.defaultValue,
                  e.checked,
                  e.defaultChecked,
                  e.type,
                  e.name
                );
              }
            }
            for (t = 0; t < u.length; t++)
              a = u[t], a.form === l.form && Ni(a);
          }
          break l;
        case "textarea":
          Ri(l, u.value, u.defaultValue);
          break l;
        case "select":
          t = u.value, t != null && wu(l, !!u.multiple, t, !1);
      }
    }
  }
  var ef = !1;
  function ji(l, t, u) {
    if (ef) return l(t, u);
    ef = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ef = !1, ($u !== null || Fu !== null) && (bn(), $u && (t = $u, l = Fu, Fu = $u = null, Bi(t), l)))
        for (t = 0; t < l.length; t++) Bi(l[t]);
    }
  }
  function Ra(l, t) {
    var u = l.stateNode;
    if (u === null) return null;
    var a = u[Zl] || null;
    if (a === null) return null;
    u = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (u && typeof u != "function")
      throw Error(
        h(231, t, typeof u)
      );
    return u;
  }
  var Rt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), nf = !1;
  if (Rt)
    try {
      var qa = {};
      Object.defineProperty(qa, "passive", {
        get: function() {
          nf = !0;
        }
      }), window.addEventListener("test", qa, qa), window.removeEventListener("test", qa, qa);
    } catch {
      nf = !1;
    }
  var kt = null, ff = null, He = null;
  function Gi() {
    if (He) return He;
    var l, t = ff, u = t.length, a, e = "value" in kt ? kt.value : kt.textContent, n = e.length;
    for (l = 0; l < u && t[l] === e[l]; l++) ;
    var f = u - l;
    for (a = 1; a <= f && t[u - a] === e[n - a]; a++) ;
    return He = e.slice(l, 1 < a ? 1 - a : void 0);
  }
  function Re(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function qe() {
    return !0;
  }
  function Xi() {
    return !1;
  }
  function xl(l) {
    function t(u, a, e, n, f) {
      this._reactName = u, this._targetInst = e, this.type = a, this.nativeEvent = n, this.target = f, this.currentTarget = null;
      for (var c in l)
        l.hasOwnProperty(c) && (u = l[c], this[c] = u ? u(n) : n[c]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? qe : Xi, this.isPropagationStopped = Xi, this;
    }
    return R(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var u = this.nativeEvent;
        u && (u.preventDefault ? u.preventDefault() : typeof u.returnValue != "unknown" && (u.returnValue = !1), this.isDefaultPrevented = qe);
      },
      stopPropagation: function() {
        var u = this.nativeEvent;
        u && (u.stopPropagation ? u.stopPropagation() : typeof u.cancelBubble != "unknown" && (u.cancelBubble = !0), this.isPropagationStopped = qe);
      },
      persist: function() {
      },
      isPersistent: qe
    }), t;
  }
  var Ou = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ce = xl(Ou), Ca = R({}, Ou, { view: 0, detail: 0 }), wd = xl(Ca), cf, vf, Ya, Ye = R({}, Ca, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: df,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Ya && (Ya && l.type === "mousemove" ? (cf = l.screenX - Ya.screenX, vf = l.screenY - Ya.screenY) : vf = cf = 0, Ya = l), cf);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : vf;
    }
  }), Qi = xl(Ye), Wd = R({}, Ye, { dataTransfer: 0 }), $d = xl(Wd), Fd = R({}, Ca, { relatedTarget: 0 }), yf = xl(Fd), kd = R({}, Ou, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Id = xl(kd), Pd = R({}, Ou, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), ls = xl(Pd), ts = R({}, Ou, { data: 0 }), Zi = xl(ts), us = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, as = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, es = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ns(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = es[l]) ? !!t[l] : !1;
  }
  function df() {
    return ns;
  }
  var fs = R({}, Ca, {
    key: function(l) {
      if (l.key) {
        var t = us[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = Re(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? as[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: df,
    charCode: function(l) {
      return l.type === "keypress" ? Re(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? Re(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), cs = xl(fs), is = R({}, Ye, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), xi = xl(is), vs = R({}, Ca, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: df
  }), ys = xl(vs), ds = R({}, Ou, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ss = xl(ds), ms = R({}, Ye, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), hs = xl(ms), os = R({}, Ou, {
    newState: 0,
    oldState: 0
  }), Ss = xl(os), gs = [9, 13, 27, 32], sf = Rt && "CompositionEvent" in window, Ba = null;
  Rt && "documentMode" in document && (Ba = document.documentMode);
  var bs = Rt && "TextEvent" in window && !Ba, Vi = Rt && (!sf || Ba && 8 < Ba && 11 >= Ba), Li = " ", Ki = !1;
  function Ji(l, t) {
    switch (l) {
      case "keyup":
        return gs.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function wi(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var ku = !1;
  function zs(l, t) {
    switch (l) {
      case "compositionend":
        return wi(t);
      case "keypress":
        return t.which !== 32 ? null : (Ki = !0, Li);
      case "textInput":
        return l = t.data, l === Li && Ki ? null : l;
      default:
        return null;
    }
  }
  function Ts(l, t) {
    if (ku)
      return l === "compositionend" || !sf && Ji(l, t) ? (l = Gi(), He = ff = kt = null, ku = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Vi && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var Es = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Wi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!Es[l.type] : t === "textarea";
  }
  function $i(l, t, u, a) {
    $u ? Fu ? Fu.push(a) : Fu = [a] : $u = a, t = On(t, "onChange"), 0 < t.length && (u = new Ce(
      "onChange",
      "change",
      null,
      u,
      a
    ), l.push({ event: u, listeners: t }));
  }
  var ja = null, Ga = null;
  function As(l) {
    Hy(l, 0);
  }
  function Be(l) {
    var t = Ha(l);
    if (Ni(t)) return l;
  }
  function Fi(l, t) {
    if (l === "change") return t;
  }
  var ki = !1;
  if (Rt) {
    var mf;
    if (Rt) {
      var hf = "oninput" in document;
      if (!hf) {
        var Ii = document.createElement("div");
        Ii.setAttribute("oninput", "return;"), hf = typeof Ii.oninput == "function";
      }
      mf = hf;
    } else mf = !1;
    ki = mf && (!document.documentMode || 9 < document.documentMode);
  }
  function Pi() {
    ja && (ja.detachEvent("onpropertychange", l0), Ga = ja = null);
  }
  function l0(l) {
    if (l.propertyName === "value" && Be(Ga)) {
      var t = [];
      $i(
        t,
        Ga,
        l,
        af(l)
      ), ji(As, t);
    }
  }
  function _s(l, t, u) {
    l === "focusin" ? (Pi(), ja = t, Ga = u, ja.attachEvent("onpropertychange", l0)) : l === "focusout" && Pi();
  }
  function rs(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Be(Ga);
  }
  function Os(l, t) {
    if (l === "click") return Be(t);
  }
  function Ms(l, t) {
    if (l === "input" || l === "change")
      return Be(t);
  }
  function Ds(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var Pl = typeof Object.is == "function" ? Object.is : Ds;
  function Xa(l, t) {
    if (Pl(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var u = Object.keys(l), a = Object.keys(t);
    if (u.length !== a.length) return !1;
    for (a = 0; a < u.length; a++) {
      var e = u[a];
      if (!Ln.call(t, e) || !Pl(l[e], t[e]))
        return !1;
    }
    return !0;
  }
  function t0(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function u0(l, t) {
    var u = t0(l);
    l = 0;
    for (var a; u; ) {
      if (u.nodeType === 3) {
        if (a = l + u.textContent.length, l <= t && a >= t)
          return { node: u, offset: t - l };
        l = a;
      }
      l: {
        for (; u; ) {
          if (u.nextSibling) {
            u = u.nextSibling;
            break l;
          }
          u = u.parentNode;
        }
        u = void 0;
      }
      u = t0(u);
    }
  }
  function a0(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? a0(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function e0(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = pe(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var u = typeof t.contentWindow.location.href == "string";
      } catch {
        u = !1;
      }
      if (u) l = t.contentWindow;
      else break;
      t = pe(l.document);
    }
    return t;
  }
  function of(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var Us = Rt && "documentMode" in document && 11 >= document.documentMode, Iu = null, Sf = null, Qa = null, gf = !1;
  function n0(l, t, u) {
    var a = u.window === u ? u.document : u.nodeType === 9 ? u : u.ownerDocument;
    gf || Iu == null || Iu !== pe(a) || (a = Iu, "selectionStart" in a && of(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Qa && Xa(Qa, a) || (Qa = a, a = On(Sf, "onSelect"), 0 < a.length && (t = new Ce(
      "onSelect",
      "select",
      null,
      t,
      u
    ), l.push({ event: t, listeners: a }), t.target = Iu)));
  }
  function Mu(l, t) {
    var u = {};
    return u[l.toLowerCase()] = t.toLowerCase(), u["Webkit" + l] = "webkit" + t, u["Moz" + l] = "moz" + t, u;
  }
  var Pu = {
    animationend: Mu("Animation", "AnimationEnd"),
    animationiteration: Mu("Animation", "AnimationIteration"),
    animationstart: Mu("Animation", "AnimationStart"),
    transitionrun: Mu("Transition", "TransitionRun"),
    transitionstart: Mu("Transition", "TransitionStart"),
    transitioncancel: Mu("Transition", "TransitionCancel"),
    transitionend: Mu("Transition", "TransitionEnd")
  }, bf = {}, f0 = {};
  Rt && (f0 = document.createElement("div").style, "AnimationEvent" in window || (delete Pu.animationend.animation, delete Pu.animationiteration.animation, delete Pu.animationstart.animation), "TransitionEvent" in window || delete Pu.transitionend.transition);
  function Du(l) {
    if (bf[l]) return bf[l];
    if (!Pu[l]) return l;
    var t = Pu[l], u;
    for (u in t)
      if (t.hasOwnProperty(u) && u in f0)
        return bf[l] = t[u];
    return l;
  }
  var c0 = Du("animationend"), i0 = Du("animationiteration"), v0 = Du("animationstart"), ps = Du("transitionrun"), Ns = Du("transitionstart"), Hs = Du("transitioncancel"), y0 = Du("transitionend"), d0 = /* @__PURE__ */ new Map(), zf = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  zf.push("scrollEnd");
  function bt(l, t) {
    d0.set(l, t), ru(t, [l]);
  }
  var je = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, vt = [], la = 0, Tf = 0;
  function Ge() {
    for (var l = la, t = Tf = la = 0; t < l; ) {
      var u = vt[t];
      vt[t++] = null;
      var a = vt[t];
      vt[t++] = null;
      var e = vt[t];
      vt[t++] = null;
      var n = vt[t];
      if (vt[t++] = null, a !== null && e !== null) {
        var f = a.pending;
        f === null ? e.next = e : (e.next = f.next, f.next = e), a.pending = e;
      }
      n !== 0 && s0(u, e, n);
    }
  }
  function Xe(l, t, u, a) {
    vt[la++] = l, vt[la++] = t, vt[la++] = u, vt[la++] = a, Tf |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Ef(l, t, u, a) {
    return Xe(l, t, u, a), Qe(l);
  }
  function Uu(l, t) {
    return Xe(l, null, null, t), Qe(l);
  }
  function s0(l, t, u) {
    l.lanes |= u;
    var a = l.alternate;
    a !== null && (a.lanes |= u);
    for (var e = !1, n = l.return; n !== null; )
      n.childLanes |= u, a = n.alternate, a !== null && (a.childLanes |= u), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (e = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, e && t !== null && (e = 31 - Il(u), l = n.hiddenUpdates, a = l[e], a === null ? l[e] = [t] : a.push(t), t.lane = u | 536870912), n) : null;
  }
  function Qe(l) {
    if (50 < ie)
      throw ie = 0, Nc = null, Error(h(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var ta = {};
  function Rs(l, t, u, a) {
    this.tag = l, this.key = u, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function lt(l, t, u, a) {
    return new Rs(l, t, u, a);
  }
  function Af(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function qt(l, t) {
    var u = l.alternate;
    return u === null ? (u = lt(
      l.tag,
      t,
      l.key,
      l.mode
    ), u.elementType = l.elementType, u.type = l.type, u.stateNode = l.stateNode, u.alternate = l, l.alternate = u) : (u.pendingProps = t, u.type = l.type, u.flags = 0, u.subtreeFlags = 0, u.deletions = null), u.flags = l.flags & 65011712, u.childLanes = l.childLanes, u.lanes = l.lanes, u.child = l.child, u.memoizedProps = l.memoizedProps, u.memoizedState = l.memoizedState, u.updateQueue = l.updateQueue, t = l.dependencies, u.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, u.sibling = l.sibling, u.index = l.index, u.ref = l.ref, u.refCleanup = l.refCleanup, u;
  }
  function m0(l, t) {
    l.flags &= 65011714;
    var u = l.alternate;
    return u === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = u.childLanes, l.lanes = u.lanes, l.child = u.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = u.memoizedProps, l.memoizedState = u.memoizedState, l.updateQueue = u.updateQueue, l.type = u.type, t = u.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Ze(l, t, u, a, e, n) {
    var f = 0;
    if (a = l, typeof l == "function") Af(l) && (f = 1);
    else if (typeof l == "string")
      f = jm(
        l,
        u,
        D.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (l) {
        case At:
          return l = lt(31, u, t, e), l.elementType = At, l.lanes = n, l;
        case Cl:
          return pu(u.children, e, n, t);
        case Ut:
          f = 8, e |= 24;
          break;
        case $l:
          return l = lt(12, u, t, e | 2), l.elementType = $l, l.lanes = n, l;
        case Et:
          return l = lt(13, u, t, e), l.elementType = Et, l.lanes = n, l;
        case Gl:
          return l = lt(19, u, t, e), l.elementType = Gl, l.lanes = n, l;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case Rl:
                f = 10;
                break l;
              case Wt:
                f = 9;
                break l;
              case ft:
                f = 11;
                break l;
              case K:
                f = 14;
                break l;
              case Xl:
                f = 16, a = null;
                break l;
            }
          f = 29, u = Error(
            h(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = lt(f, u, t, e), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function pu(l, t, u, a) {
    return l = lt(7, l, a, t), l.lanes = u, l;
  }
  function _f(l, t, u) {
    return l = lt(6, l, null, t), l.lanes = u, l;
  }
  function h0(l) {
    var t = lt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function rf(l, t, u) {
    return t = lt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = u, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var o0 = /* @__PURE__ */ new WeakMap();
  function yt(l, t) {
    if (typeof l == "object" && l !== null) {
      var u = o0.get(l);
      return u !== void 0 ? u : (t = {
        value: l,
        source: t,
        stack: hi(t)
      }, o0.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: hi(t)
    };
  }
  var ua = [], aa = 0, xe = null, Za = 0, dt = [], st = 0, It = null, rt = 1, Ot = "";
  function Ct(l, t) {
    ua[aa++] = Za, ua[aa++] = xe, xe = l, Za = t;
  }
  function S0(l, t, u) {
    dt[st++] = rt, dt[st++] = Ot, dt[st++] = It, It = l;
    var a = rt;
    l = Ot;
    var e = 32 - Il(a) - 1;
    a &= ~(1 << e), u += 1;
    var n = 32 - Il(t) + e;
    if (30 < n) {
      var f = e - e % 5;
      n = (a & (1 << f) - 1).toString(32), a >>= f, e -= f, rt = 1 << 32 - Il(t) + e | u << e | a, Ot = n + l;
    } else
      rt = 1 << n | u << e | a, Ot = l;
  }
  function Of(l) {
    l.return !== null && (Ct(l, 1), S0(l, 1, 0));
  }
  function Mf(l) {
    for (; l === xe; )
      xe = ua[--aa], ua[aa] = null, Za = ua[--aa], ua[aa] = null;
    for (; l === It; )
      It = dt[--st], dt[st] = null, Ot = dt[--st], dt[st] = null, rt = dt[--st], dt[st] = null;
  }
  function g0(l, t) {
    dt[st++] = rt, dt[st++] = Ot, dt[st++] = It, rt = t.id, Ot = t.overflow, It = l;
  }
  var Ul = null, il = null, J = !1, Pt = null, mt = !1, Df = Error(h(519));
  function lu(l) {
    var t = Error(
      h(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw xa(yt(t, l)), Df;
  }
  function b0(l) {
    var t = l.stateNode, u = l.type, a = l.memoizedProps;
    switch (t[Dl] = l, t[Zl] = a, u) {
      case "dialog":
        x("cancel", t), x("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        x("load", t);
        break;
      case "video":
      case "audio":
        for (u = 0; u < ye.length; u++)
          x(ye[u], t);
        break;
      case "source":
        x("error", t);
        break;
      case "img":
      case "image":
      case "link":
        x("error", t), x("load", t);
        break;
      case "details":
        x("toggle", t);
        break;
      case "input":
        x("invalid", t), Hi(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        x("invalid", t);
        break;
      case "textarea":
        x("invalid", t), qi(t, a.value, a.defaultValue, a.children);
    }
    u = a.children, typeof u != "string" && typeof u != "number" && typeof u != "bigint" || t.textContent === "" + u || a.suppressHydrationWarning === !0 || Yy(t.textContent, u) ? (a.popover != null && (x("beforetoggle", t), x("toggle", t)), a.onScroll != null && x("scroll", t), a.onScrollEnd != null && x("scrollend", t), a.onClick != null && (t.onclick = Ht), t = !0) : t = !1, t || lu(l, !0);
  }
  function z0(l) {
    for (Ul = l.return; Ul; )
      switch (Ul.tag) {
        case 5:
        case 31:
        case 13:
          mt = !1;
          return;
        case 27:
        case 3:
          mt = !0;
          return;
        default:
          Ul = Ul.return;
      }
  }
  function ea(l) {
    if (l !== Ul) return !1;
    if (!J) return z0(l), J = !0, !1;
    var t = l.tag, u;
    if ((u = t !== 3 && t !== 27) && ((u = t === 5) && (u = l.type, u = !(u !== "form" && u !== "button") || Kc(l.type, l.memoizedProps)), u = !u), u && il && lu(l), z0(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      il = Ly(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(317));
      il = Ly(l);
    } else
      t === 27 ? (t = il, hu(l.type) ? (l = Fc, Fc = null, il = l) : il = t) : il = Ul ? ot(l.stateNode.nextSibling) : null;
    return !0;
  }
  function Nu() {
    il = Ul = null, J = !1;
  }
  function Uf() {
    var l = Pt;
    return l !== null && (Jl === null ? Jl = l : Jl.push.apply(
      Jl,
      l
    ), Pt = null), l;
  }
  function xa(l) {
    Pt === null ? Pt = [l] : Pt.push(l);
  }
  var pf = y(null), Hu = null, Yt = null;
  function tu(l, t, u) {
    O(pf, t._currentValue), t._currentValue = u;
  }
  function Bt(l) {
    l._currentValue = pf.current, E(pf);
  }
  function Nf(l, t, u) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === u) break;
      l = l.return;
    }
  }
  function Hf(l, t, u, a) {
    var e = l.child;
    for (e !== null && (e.return = l); e !== null; ) {
      var n = e.dependencies;
      if (n !== null) {
        var f = e.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = e;
          for (var i = 0; i < t.length; i++)
            if (c.context === t[i]) {
              n.lanes |= u, c = n.alternate, c !== null && (c.lanes |= u), Nf(
                n.return,
                u,
                l
              ), a || (f = null);
              break l;
            }
          n = c.next;
        }
      } else if (e.tag === 18) {
        if (f = e.return, f === null) throw Error(h(341));
        f.lanes |= u, n = f.alternate, n !== null && (n.lanes |= u), Nf(f, u, l), f = null;
      } else f = e.child;
      if (f !== null) f.return = e;
      else
        for (f = e; f !== null; ) {
          if (f === l) {
            f = null;
            break;
          }
          if (e = f.sibling, e !== null) {
            e.return = f.return, f = e;
            break;
          }
          f = f.return;
        }
      e = f;
    }
  }
  function na(l, t, u, a) {
    l = null;
    for (var e = t, n = !1; e !== null; ) {
      if (!n) {
        if ((e.flags & 524288) !== 0) n = !0;
        else if ((e.flags & 262144) !== 0) break;
      }
      if (e.tag === 10) {
        var f = e.alternate;
        if (f === null) throw Error(h(387));
        if (f = f.memoizedProps, f !== null) {
          var c = e.type;
          Pl(e.pendingProps.value, f.value) || (l !== null ? l.push(c) : l = [c]);
        }
      } else if (e === k.current) {
        if (f = e.alternate, f === null) throw Error(h(387));
        f.memoizedState.memoizedState !== e.memoizedState.memoizedState && (l !== null ? l.push(oe) : l = [oe]);
      }
      e = e.return;
    }
    l !== null && Hf(
      t,
      l,
      u,
      a
    ), t.flags |= 262144;
  }
  function Ve(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function Ru(l) {
    Hu = l, Yt = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function pl(l) {
    return T0(Hu, l);
  }
  function Le(l, t) {
    return Hu === null && Ru(l), T0(l, t);
  }
  function T0(l, t) {
    var u = t._currentValue;
    if (t = { context: t, memoizedValue: u, next: null }, Yt === null) {
      if (l === null) throw Error(h(308));
      Yt = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else Yt = Yt.next = t;
    return u;
  }
  var qs = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(u, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(u) {
        return u();
      });
    };
  }, Cs = _.unstable_scheduleCallback, Ys = _.unstable_NormalPriority, gl = {
    $$typeof: Rl,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Rf() {
    return {
      controller: new qs(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Va(l) {
    l.refCount--, l.refCount === 0 && Cs(Ys, function() {
      l.controller.abort();
    });
  }
  var La = null, qf = 0, fa = 0, ca = null;
  function Bs(l, t) {
    if (La === null) {
      var u = La = [];
      qf = 0, fa = Bc(), ca = {
        status: "pending",
        value: void 0,
        then: function(a) {
          u.push(a);
        }
      };
    }
    return qf++, t.then(E0, E0), t;
  }
  function E0() {
    if (--qf === 0 && La !== null) {
      ca !== null && (ca.status = "fulfilled");
      var l = La;
      La = null, fa = 0, ca = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function js(l, t) {
    var u = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(e) {
        u.push(e);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var e = 0; e < u.length; e++) (0, u[e])(t);
      },
      function(e) {
        for (a.status = "rejected", a.reason = e, e = 0; e < u.length; e++)
          (0, u[e])(void 0);
      }
    ), a;
  }
  var A0 = b.S;
  b.S = function(l, t) {
    ny = Fl(), typeof t == "object" && t !== null && typeof t.then == "function" && Bs(l, t), A0 !== null && A0(l, t);
  };
  var qu = y(null);
  function Cf() {
    var l = qu.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Ke(l, t) {
    t === null ? O(qu, qu.current) : O(qu, t.pool);
  }
  function _0() {
    var l = Cf();
    return l === null ? null : { parent: gl._currentValue, pool: l };
  }
  var ia = Error(h(460)), Yf = Error(h(474)), Je = Error(h(542)), we = { then: function() {
  } };
  function r0(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function O0(l, t, u) {
    switch (u = l[u], u === void 0 ? l.push(t) : u !== t && (t.then(Ht, Ht), t = u), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, D0(l), l;
      default:
        if (typeof t.status == "string") t.then(Ht, Ht);
        else {
          if (l = fl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(h(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "fulfilled", e.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var e = t;
                e.status = "rejected", e.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, D0(l), l;
        }
        throw Yu = t, ia;
    }
  }
  function Cu(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (u) {
      throw u !== null && typeof u == "object" && typeof u.then == "function" ? (Yu = u, ia) : u;
    }
  }
  var Yu = null;
  function M0() {
    if (Yu === null) throw Error(h(459));
    var l = Yu;
    return Yu = null, l;
  }
  function D0(l) {
    if (l === ia || l === Je)
      throw Error(h(483));
  }
  var va = null, Ka = 0;
  function We(l) {
    var t = Ka;
    return Ka += 1, va === null && (va = []), O0(va, l, t);
  }
  function Ja(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function $e(l, t) {
    throw t.$$typeof === yl ? Error(h(525)) : (l = Object.prototype.toString.call(t), Error(
      h(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function U0(l) {
    function t(d, v) {
      if (l) {
        var s = d.deletions;
        s === null ? (d.deletions = [v], d.flags |= 16) : s.push(v);
      }
    }
    function u(d, v) {
      if (!l) return null;
      for (; v !== null; )
        t(d, v), v = v.sibling;
      return null;
    }
    function a(d) {
      for (var v = /* @__PURE__ */ new Map(); d !== null; )
        d.key !== null ? v.set(d.key, d) : v.set(d.index, d), d = d.sibling;
      return v;
    }
    function e(d, v) {
      return d = qt(d, v), d.index = 0, d.sibling = null, d;
    }
    function n(d, v, s) {
      return d.index = s, l ? (s = d.alternate, s !== null ? (s = s.index, s < v ? (d.flags |= 67108866, v) : s) : (d.flags |= 67108866, v)) : (d.flags |= 1048576, v);
    }
    function f(d) {
      return l && d.alternate === null && (d.flags |= 67108866), d;
    }
    function c(d, v, s, z) {
      return v === null || v.tag !== 6 ? (v = _f(s, d.mode, z), v.return = d, v) : (v = e(v, s), v.return = d, v);
    }
    function i(d, v, s, z) {
      var p = s.type;
      return p === Cl ? g(
        d,
        v,
        s.props.children,
        z,
        s.key
      ) : v !== null && (v.elementType === p || typeof p == "object" && p !== null && p.$$typeof === Xl && Cu(p) === v.type) ? (v = e(v, s.props), Ja(v, s), v.return = d, v) : (v = Ze(
        s.type,
        s.key,
        s.props,
        null,
        d.mode,
        z
      ), Ja(v, s), v.return = d, v);
    }
    function m(d, v, s, z) {
      return v === null || v.tag !== 4 || v.stateNode.containerInfo !== s.containerInfo || v.stateNode.implementation !== s.implementation ? (v = rf(s, d.mode, z), v.return = d, v) : (v = e(v, s.children || []), v.return = d, v);
    }
    function g(d, v, s, z, p) {
      return v === null || v.tag !== 7 ? (v = pu(
        s,
        d.mode,
        z,
        p
      ), v.return = d, v) : (v = e(v, s), v.return = d, v);
    }
    function T(d, v, s) {
      if (typeof v == "string" && v !== "" || typeof v == "number" || typeof v == "bigint")
        return v = _f(
          "" + v,
          d.mode,
          s
        ), v.return = d, v;
      if (typeof v == "object" && v !== null) {
        switch (v.$$typeof) {
          case Wl:
            return s = Ze(
              v.type,
              v.key,
              v.props,
              null,
              d.mode,
              s
            ), Ja(s, v), s.return = d, s;
          case jl:
            return v = rf(
              v,
              d.mode,
              s
            ), v.return = d, v;
          case Xl:
            return v = Cu(v), T(d, v, s);
        }
        if (gt(v) || Ql(v))
          return v = pu(
            v,
            d.mode,
            s,
            null
          ), v.return = d, v;
        if (typeof v.then == "function")
          return T(d, We(v), s);
        if (v.$$typeof === Rl)
          return T(
            d,
            Le(d, v),
            s
          );
        $e(d, v);
      }
      return null;
    }
    function o(d, v, s, z) {
      var p = v !== null ? v.key : null;
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return p !== null ? null : c(d, v, "" + s, z);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return s.key === p ? i(d, v, s, z) : null;
          case jl:
            return s.key === p ? m(d, v, s, z) : null;
          case Xl:
            return s = Cu(s), o(d, v, s, z);
        }
        if (gt(s) || Ql(s))
          return p !== null ? null : g(d, v, s, z, null);
        if (typeof s.then == "function")
          return o(
            d,
            v,
            We(s),
            z
          );
        if (s.$$typeof === Rl)
          return o(
            d,
            v,
            Le(d, s),
            z
          );
        $e(d, s);
      }
      return null;
    }
    function S(d, v, s, z, p) {
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return d = d.get(s) || null, c(v, d, "" + z, p);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case Wl:
            return d = d.get(
              z.key === null ? s : z.key
            ) || null, i(v, d, z, p);
          case jl:
            return d = d.get(
              z.key === null ? s : z.key
            ) || null, m(v, d, z, p);
          case Xl:
            return z = Cu(z), S(
              d,
              v,
              s,
              z,
              p
            );
        }
        if (gt(z) || Ql(z))
          return d = d.get(s) || null, g(v, d, z, p, null);
        if (typeof z.then == "function")
          return S(
            d,
            v,
            s,
            We(z),
            p
          );
        if (z.$$typeof === Rl)
          return S(
            d,
            v,
            s,
            Le(v, z),
            p
          );
        $e(v, z);
      }
      return null;
    }
    function M(d, v, s, z) {
      for (var p = null, w = null, U = v, j = v = 0, L = null; U !== null && j < s.length; j++) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var W = o(
          d,
          U,
          s[j],
          z
        );
        if (W === null) {
          U === null && (U = L);
          break;
        }
        l && U && W.alternate === null && t(d, U), v = n(W, v, j), w === null ? p = W : w.sibling = W, w = W, U = L;
      }
      if (j === s.length)
        return u(d, U), J && Ct(d, j), p;
      if (U === null) {
        for (; j < s.length; j++)
          U = T(d, s[j], z), U !== null && (v = n(
            U,
            v,
            j
          ), w === null ? p = U : w.sibling = U, w = U);
        return J && Ct(d, j), p;
      }
      for (U = a(U); j < s.length; j++)
        L = S(
          U,
          d,
          j,
          s[j],
          z
        ), L !== null && (l && L.alternate !== null && U.delete(
          L.key === null ? j : L.key
        ), v = n(
          L,
          v,
          j
        ), w === null ? p = L : w.sibling = L, w = L);
      return l && U.forEach(function(zu) {
        return t(d, zu);
      }), J && Ct(d, j), p;
    }
    function H(d, v, s, z) {
      if (s == null) throw Error(h(151));
      for (var p = null, w = null, U = v, j = v = 0, L = null, W = s.next(); U !== null && !W.done; j++, W = s.next()) {
        U.index > j ? (L = U, U = null) : L = U.sibling;
        var zu = o(d, U, W.value, z);
        if (zu === null) {
          U === null && (U = L);
          break;
        }
        l && U && zu.alternate === null && t(d, U), v = n(zu, v, j), w === null ? p = zu : w.sibling = zu, w = zu, U = L;
      }
      if (W.done)
        return u(d, U), J && Ct(d, j), p;
      if (U === null) {
        for (; !W.done; j++, W = s.next())
          W = T(d, W.value, z), W !== null && (v = n(W, v, j), w === null ? p = W : w.sibling = W, w = W);
        return J && Ct(d, j), p;
      }
      for (U = a(U); !W.done; j++, W = s.next())
        W = S(U, d, j, W.value, z), W !== null && (l && W.alternate !== null && U.delete(W.key === null ? j : W.key), v = n(W, v, j), w === null ? p = W : w.sibling = W, w = W);
      return l && U.forEach(function(Wm) {
        return t(d, Wm);
      }), J && Ct(d, j), p;
    }
    function el(d, v, s, z) {
      if (typeof s == "object" && s !== null && s.type === Cl && s.key === null && (s = s.props.children), typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            l: {
              for (var p = s.key; v !== null; ) {
                if (v.key === p) {
                  if (p = s.type, p === Cl) {
                    if (v.tag === 7) {
                      u(
                        d,
                        v.sibling
                      ), z = e(
                        v,
                        s.props.children
                      ), z.return = d, d = z;
                      break l;
                    }
                  } else if (v.elementType === p || typeof p == "object" && p !== null && p.$$typeof === Xl && Cu(p) === v.type) {
                    u(
                      d,
                      v.sibling
                    ), z = e(v, s.props), Ja(z, s), z.return = d, d = z;
                    break l;
                  }
                  u(d, v);
                  break;
                } else t(d, v);
                v = v.sibling;
              }
              s.type === Cl ? (z = pu(
                s.props.children,
                d.mode,
                z,
                s.key
              ), z.return = d, d = z) : (z = Ze(
                s.type,
                s.key,
                s.props,
                null,
                d.mode,
                z
              ), Ja(z, s), z.return = d, d = z);
            }
            return f(d);
          case jl:
            l: {
              for (p = s.key; v !== null; ) {
                if (v.key === p)
                  if (v.tag === 4 && v.stateNode.containerInfo === s.containerInfo && v.stateNode.implementation === s.implementation) {
                    u(
                      d,
                      v.sibling
                    ), z = e(v, s.children || []), z.return = d, d = z;
                    break l;
                  } else {
                    u(d, v);
                    break;
                  }
                else t(d, v);
                v = v.sibling;
              }
              z = rf(s, d.mode, z), z.return = d, d = z;
            }
            return f(d);
          case Xl:
            return s = Cu(s), el(
              d,
              v,
              s,
              z
            );
        }
        if (gt(s))
          return M(
            d,
            v,
            s,
            z
          );
        if (Ql(s)) {
          if (p = Ql(s), typeof p != "function") throw Error(h(150));
          return s = p.call(s), H(
            d,
            v,
            s,
            z
          );
        }
        if (typeof s.then == "function")
          return el(
            d,
            v,
            We(s),
            z
          );
        if (s.$$typeof === Rl)
          return el(
            d,
            v,
            Le(d, s),
            z
          );
        $e(d, s);
      }
      return typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint" ? (s = "" + s, v !== null && v.tag === 6 ? (u(d, v.sibling), z = e(v, s), z.return = d, d = z) : (u(d, v), z = _f(s, d.mode, z), z.return = d, d = z), f(d)) : u(d, v);
    }
    return function(d, v, s, z) {
      try {
        Ka = 0;
        var p = el(
          d,
          v,
          s,
          z
        );
        return va = null, p;
      } catch (U) {
        if (U === ia || U === Je) throw U;
        var w = lt(29, U, null, d.mode);
        return w.lanes = z, w.return = d, w;
      } finally {
      }
    };
  }
  var Bu = U0(!0), p0 = U0(!1), uu = !1;
  function Bf(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function jf(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function au(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function eu(l, t, u) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, ($ & 2) !== 0) {
      var e = a.pending;
      return e === null ? t.next = t : (t.next = e.next, e.next = t), a.pending = t, t = Qe(l), s0(l, null, u), t;
    }
    return Xe(l, a, t, u), Qe(l);
  }
  function wa(l, t, u) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (u & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  function Gf(l, t) {
    var u = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, u === a)) {
      var e = null, n = null;
      if (u = u.firstBaseUpdate, u !== null) {
        do {
          var f = {
            lane: u.lane,
            tag: u.tag,
            payload: u.payload,
            callback: null,
            next: null
          };
          n === null ? e = n = f : n = n.next = f, u = u.next;
        } while (u !== null);
        n === null ? e = n = t : n = n.next = t;
      } else e = n = t;
      u = {
        baseState: a.baseState,
        firstBaseUpdate: e,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = u;
      return;
    }
    l = u.lastBaseUpdate, l === null ? u.firstBaseUpdate = t : l.next = t, u.lastBaseUpdate = t;
  }
  var Xf = !1;
  function Wa() {
    if (Xf) {
      var l = ca;
      if (l !== null) throw l;
    }
  }
  function $a(l, t, u, a) {
    Xf = !1;
    var e = l.updateQueue;
    uu = !1;
    var n = e.firstBaseUpdate, f = e.lastBaseUpdate, c = e.shared.pending;
    if (c !== null) {
      e.shared.pending = null;
      var i = c, m = i.next;
      i.next = null, f === null ? n = m : f.next = m, f = i;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, c = g.lastBaseUpdate, c !== f && (c === null ? g.firstBaseUpdate = m : c.next = m, g.lastBaseUpdate = i));
    }
    if (n !== null) {
      var T = e.baseState;
      f = 0, g = m = i = null, c = n;
      do {
        var o = c.lane & -536870913, S = o !== c.lane;
        if (S ? (V & o) === o : (a & o) === o) {
          o !== 0 && o === fa && (Xf = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: c.tag,
            payload: c.payload,
            callback: null,
            next: null
          });
          l: {
            var M = l, H = c;
            o = t;
            var el = u;
            switch (H.tag) {
              case 1:
                if (M = H.payload, typeof M == "function") {
                  T = M.call(el, T, o);
                  break l;
                }
                T = M;
                break l;
              case 3:
                M.flags = M.flags & -65537 | 128;
              case 0:
                if (M = H.payload, o = typeof M == "function" ? M.call(el, T, o) : M, o == null) break l;
                T = R({}, T, o);
                break l;
              case 2:
                uu = !0;
            }
          }
          o = c.callback, o !== null && (l.flags |= 64, S && (l.flags |= 8192), S = e.callbacks, S === null ? e.callbacks = [o] : S.push(o));
        } else
          S = {
            lane: o,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null
          }, g === null ? (m = g = S, i = T) : g = g.next = S, f |= o;
        if (c = c.next, c === null) {
          if (c = e.shared.pending, c === null)
            break;
          S = c, c = S.next, S.next = null, e.lastBaseUpdate = S, e.shared.pending = null;
        }
      } while (!0);
      g === null && (i = T), e.baseState = i, e.firstBaseUpdate = m, e.lastBaseUpdate = g, n === null && (e.shared.lanes = 0), vu |= f, l.lanes = f, l.memoizedState = T;
    }
  }
  function N0(l, t) {
    if (typeof l != "function")
      throw Error(h(191, l));
    l.call(t);
  }
  function H0(l, t) {
    var u = l.callbacks;
    if (u !== null)
      for (l.callbacks = null, l = 0; l < u.length; l++)
        N0(u[l], t);
  }
  var ya = y(null), Fe = y(0);
  function R0(l, t) {
    l = Kt, O(Fe, l), O(ya, t), Kt = l | t.baseLanes;
  }
  function Qf() {
    O(Fe, Kt), O(ya, ya.current);
  }
  function Zf() {
    Kt = Fe.current, E(ya), E(Fe);
  }
  var tt = y(null), ht = null;
  function nu(l) {
    var t = l.alternate;
    O(ol, ol.current & 1), O(tt, l), ht === null && (t === null || ya.current !== null || t.memoizedState !== null) && (ht = l);
  }
  function xf(l) {
    O(ol, ol.current), O(tt, l), ht === null && (ht = l);
  }
  function q0(l) {
    l.tag === 22 ? (O(ol, ol.current), O(tt, l), ht === null && (ht = l)) : fu();
  }
  function fu() {
    O(ol, ol.current), O(tt, tt.current);
  }
  function ut(l) {
    E(tt), ht === l && (ht = null), E(ol);
  }
  var ol = y(0);
  function ke(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var u = t.memoizedState;
        if (u !== null && (u = u.dehydrated, u === null || Wc(u) || $c(u)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var jt = 0, B = null, ul = null, bl = null, Ie = !1, da = !1, ju = !1, Pe = 0, Fa = 0, sa = null, Gs = 0;
  function sl() {
    throw Error(h(321));
  }
  function Vf(l, t) {
    if (t === null) return !1;
    for (var u = 0; u < t.length && u < l.length; u++)
      if (!Pl(l[u], t[u])) return !1;
    return !0;
  }
  function Lf(l, t, u, a, e, n) {
    return jt = n, B = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, b.H = l === null || l.memoizedState === null ? Sv : nc, ju = !1, n = u(a, e), ju = !1, da && (n = Y0(
      t,
      u,
      a,
      e
    )), C0(l), n;
  }
  function C0(l) {
    b.H = Pa;
    var t = ul !== null && ul.next !== null;
    if (jt = 0, bl = ul = B = null, Ie = !1, Fa = 0, sa = null, t) throw Error(h(300));
    l === null || zl || (l = l.dependencies, l !== null && Ve(l) && (zl = !0));
  }
  function Y0(l, t, u, a) {
    B = l;
    var e = 0;
    do {
      if (da && (sa = null), Fa = 0, da = !1, 25 <= e) throw Error(h(301));
      if (e += 1, bl = ul = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      b.H = gv, n = t(u, a);
    } while (da);
    return n;
  }
  function Xs() {
    var l = b.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? ka(t) : t, l = l.useState()[0], (ul !== null ? ul.memoizedState : null) !== l && (B.flags |= 1024), t;
  }
  function Kf() {
    var l = Pe !== 0;
    return Pe = 0, l;
  }
  function Jf(l, t, u) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~u;
  }
  function wf(l) {
    if (Ie) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ie = !1;
    }
    jt = 0, bl = ul = B = null, da = !1, Fa = Pe = 0, sa = null;
  }
  function Bl() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return bl === null ? B.memoizedState = bl = l : bl = bl.next = l, bl;
  }
  function Sl() {
    if (ul === null) {
      var l = B.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = bl === null ? B.memoizedState : bl.next;
    if (t !== null)
      bl = t, ul = l;
    else {
      if (l === null)
        throw B.alternate === null ? Error(h(467)) : Error(h(310));
      ul = l, l = {
        memoizedState: ul.memoizedState,
        baseState: ul.baseState,
        baseQueue: ul.baseQueue,
        queue: ul.queue,
        next: null
      }, bl === null ? B.memoizedState = bl = l : bl = bl.next = l;
    }
    return bl;
  }
  function ln() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function ka(l) {
    var t = Fa;
    return Fa += 1, sa === null && (sa = []), l = O0(sa, l, t), t = B, (bl === null ? t.memoizedState : bl.next) === null && (t = t.alternate, b.H = t === null || t.memoizedState === null ? Sv : nc), l;
  }
  function tn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return ka(l);
      if (l.$$typeof === Rl) return pl(l);
    }
    throw Error(h(438, String(l)));
  }
  function Wf(l) {
    var t = null, u = B.updateQueue;
    if (u !== null && (t = u.memoCache), t == null) {
      var a = B.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(e) {
          return e.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), u === null && (u = ln(), B.updateQueue = u), u.memoCache = t, u = t.data[t.index], u === void 0)
      for (u = t.data[t.index] = Array(l), a = 0; a < l; a++)
        u[a] = Zu;
    return t.index++, u;
  }
  function Gt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function un(l) {
    var t = Sl();
    return $f(t, ul, l);
  }
  function $f(l, t, u) {
    var a = l.queue;
    if (a === null) throw Error(h(311));
    a.lastRenderedReducer = u;
    var e = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (e !== null) {
        var f = e.next;
        e.next = n.next, n.next = f;
      }
      t.baseQueue = e = n, a.pending = null;
    }
    if (n = l.baseState, e === null) l.memoizedState = n;
    else {
      t = e.next;
      var c = f = null, i = null, m = t, g = !1;
      do {
        var T = m.lane & -536870913;
        if (T !== m.lane ? (V & T) === T : (jt & T) === T) {
          var o = m.revertLane;
          if (o === 0)
            i !== null && (i = i.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }), T === fa && (g = !0);
          else if ((jt & o) === o) {
            m = m.next, o === fa && (g = !0);
            continue;
          } else
            T = {
              lane: 0,
              revertLane: m.revertLane,
              gesture: null,
              action: m.action,
              hasEagerState: m.hasEagerState,
              eagerState: m.eagerState,
              next: null
            }, i === null ? (c = i = T, f = n) : i = i.next = T, B.lanes |= o, vu |= o;
          T = m.action, ju && u(n, T), n = m.hasEagerState ? m.eagerState : u(n, T);
        } else
          o = {
            lane: T,
            revertLane: m.revertLane,
            gesture: m.gesture,
            action: m.action,
            hasEagerState: m.hasEagerState,
            eagerState: m.eagerState,
            next: null
          }, i === null ? (c = i = o, f = n) : i = i.next = o, B.lanes |= T, vu |= T;
        m = m.next;
      } while (m !== null && m !== t);
      if (i === null ? f = n : i.next = c, !Pl(n, l.memoizedState) && (zl = !0, g && (u = ca, u !== null)))
        throw u;
      l.memoizedState = n, l.baseState = f, l.baseQueue = i, a.lastRenderedState = n;
    }
    return e === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function Ff(l) {
    var t = Sl(), u = t.queue;
    if (u === null) throw Error(h(311));
    u.lastRenderedReducer = l;
    var a = u.dispatch, e = u.pending, n = t.memoizedState;
    if (e !== null) {
      u.pending = null;
      var f = e = e.next;
      do
        n = l(n, f.action), f = f.next;
      while (f !== e);
      Pl(n, t.memoizedState) || (zl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), u.lastRenderedState = n;
    }
    return [n, a];
  }
  function B0(l, t, u) {
    var a = B, e = Sl(), n = J;
    if (n) {
      if (u === void 0) throw Error(h(407));
      u = u();
    } else u = t();
    var f = !Pl(
      (ul || e).memoizedState,
      u
    );
    if (f && (e.memoizedState = u, zl = !0), e = e.queue, Pf(X0.bind(null, a, e, l), [
      l
    ]), e.getSnapshot !== t || f || bl !== null && bl.memoizedState.tag & 1) {
      if (a.flags |= 2048, ma(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          a,
          e,
          u,
          t
        ),
        null
      ), fl === null) throw Error(h(349));
      n || (jt & 127) !== 0 || j0(a, t, u);
    }
    return u;
  }
  function j0(l, t, u) {
    l.flags |= 16384, l = { getSnapshot: t, value: u }, t = B.updateQueue, t === null ? (t = ln(), B.updateQueue = t, t.stores = [l]) : (u = t.stores, u === null ? t.stores = [l] : u.push(l));
  }
  function G0(l, t, u, a) {
    t.value = u, t.getSnapshot = a, Q0(t) && Z0(l);
  }
  function X0(l, t, u) {
    return u(function() {
      Q0(t) && Z0(l);
    });
  }
  function Q0(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var u = t();
      return !Pl(l, u);
    } catch {
      return !0;
    }
  }
  function Z0(l) {
    var t = Uu(l, 2);
    t !== null && wl(t, l, 2);
  }
  function kf(l) {
    var t = Bl();
    if (typeof l == "function") {
      var u = l;
      if (l = u(), ju) {
        $t(!0);
        try {
          u();
        } finally {
          $t(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Gt,
      lastRenderedState: l
    }, t;
  }
  function x0(l, t, u, a) {
    return l.baseState = u, $f(
      l,
      ul,
      typeof a == "function" ? a : Gt
    );
  }
  function Qs(l, t, u, a, e) {
    if (nn(l)) throw Error(h(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: e,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(f) {
          n.listeners.push(f);
        }
      };
      b.T !== null ? u(!0) : n.isTransition = !1, a(n), u = t.pending, u === null ? (n.next = t.pending = n, V0(t, n)) : (n.next = u.next, t.pending = u.next = n);
    }
  }
  function V0(l, t) {
    var u = t.action, a = t.payload, e = l.state;
    if (t.isTransition) {
      var n = b.T, f = {};
      b.T = f;
      try {
        var c = u(e, a), i = b.S;
        i !== null && i(f, c), L0(l, t, c);
      } catch (m) {
        If(l, t, m);
      } finally {
        n !== null && f.types !== null && (n.types = f.types), b.T = n;
      }
    } else
      try {
        n = u(e, a), L0(l, t, n);
      } catch (m) {
        If(l, t, m);
      }
  }
  function L0(l, t, u) {
    u !== null && typeof u == "object" && typeof u.then == "function" ? u.then(
      function(a) {
        K0(l, t, a);
      },
      function(a) {
        return If(l, t, a);
      }
    ) : K0(l, t, u);
  }
  function K0(l, t, u) {
    t.status = "fulfilled", t.value = u, J0(t), l.state = u, t = l.pending, t !== null && (u = t.next, u === t ? l.pending = null : (u = u.next, t.next = u, V0(l, u)));
  }
  function If(l, t, u) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = u, J0(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function J0(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function w0(l, t) {
    return t;
  }
  function W0(l, t) {
    if (J) {
      var u = fl.formState;
      if (u !== null) {
        l: {
          var a = B;
          if (J) {
            if (il) {
              t: {
                for (var e = il, n = mt; e.nodeType !== 8; ) {
                  if (!n) {
                    e = null;
                    break t;
                  }
                  if (e = ot(
                    e.nextSibling
                  ), e === null) {
                    e = null;
                    break t;
                  }
                }
                n = e.data, e = n === "F!" || n === "F" ? e : null;
              }
              if (e) {
                il = ot(
                  e.nextSibling
                ), a = e.data === "F!";
                break l;
              }
            }
            lu(a);
          }
          a = !1;
        }
        a && (t = u[0]);
      }
    }
    return u = Bl(), u.memoizedState = u.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: w0,
      lastRenderedState: t
    }, u.queue = a, u = mv.bind(
      null,
      B,
      a
    ), a.dispatch = u, a = kf(!1), n = ec.bind(
      null,
      B,
      !1,
      a.queue
    ), a = Bl(), e = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = e, u = Qs.bind(
      null,
      B,
      e,
      n,
      u
    ), e.dispatch = u, a.memoizedState = l, [t, u, !1];
  }
  function $0(l) {
    var t = Sl();
    return F0(t, ul, l);
  }
  function F0(l, t, u) {
    if (t = $f(
      l,
      t,
      w0
    )[0], l = un(Gt)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = ka(t);
      } catch (f) {
        throw f === ia ? Je : f;
      }
    else a = t;
    t = Sl();
    var e = t.queue, n = e.dispatch;
    return u !== t.memoizedState && (B.flags |= 2048, ma(
      9,
      { destroy: void 0 },
      Zs.bind(null, e, u),
      null
    )), [a, n, l];
  }
  function Zs(l, t) {
    l.action = t;
  }
  function k0(l) {
    var t = Sl(), u = ul;
    if (u !== null)
      return F0(t, u, l);
    Sl(), t = t.memoizedState, u = Sl();
    var a = u.queue.dispatch;
    return u.memoizedState = l, [t, a, !1];
  }
  function ma(l, t, u, a) {
    return l = { tag: l, create: u, deps: a, inst: t, next: null }, t = B.updateQueue, t === null && (t = ln(), B.updateQueue = t), u = t.lastEffect, u === null ? t.lastEffect = l.next = l : (a = u.next, u.next = l, l.next = a, t.lastEffect = l), l;
  }
  function I0() {
    return Sl().memoizedState;
  }
  function an(l, t, u, a) {
    var e = Bl();
    B.flags |= l, e.memoizedState = ma(
      1 | t,
      { destroy: void 0 },
      u,
      a === void 0 ? null : a
    );
  }
  function en(l, t, u, a) {
    var e = Sl();
    a = a === void 0 ? null : a;
    var n = e.memoizedState.inst;
    ul !== null && a !== null && Vf(a, ul.memoizedState.deps) ? e.memoizedState = ma(t, n, u, a) : (B.flags |= l, e.memoizedState = ma(
      1 | t,
      n,
      u,
      a
    ));
  }
  function P0(l, t) {
    an(8390656, 8, l, t);
  }
  function Pf(l, t) {
    en(2048, 8, l, t);
  }
  function xs(l) {
    B.flags |= 4;
    var t = B.updateQueue;
    if (t === null)
      t = ln(), B.updateQueue = t, t.events = [l];
    else {
      var u = t.events;
      u === null ? t.events = [l] : u.push(l);
    }
  }
  function lv(l) {
    var t = Sl().memoizedState;
    return xs({ ref: t, nextImpl: l }), function() {
      if (($ & 2) !== 0) throw Error(h(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function tv(l, t) {
    return en(4, 2, l, t);
  }
  function uv(l, t) {
    return en(4, 4, l, t);
  }
  function av(l, t) {
    if (typeof t == "function") {
      l = l();
      var u = t(l);
      return function() {
        typeof u == "function" ? u() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function ev(l, t, u) {
    u = u != null ? u.concat([l]) : null, en(4, 4, av.bind(null, t, l), u);
  }
  function lc() {
  }
  function nv(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    return t !== null && Vf(t, a[1]) ? a[0] : (u.memoizedState = [l, t], l);
  }
  function fv(l, t) {
    var u = Sl();
    t = t === void 0 ? null : t;
    var a = u.memoizedState;
    if (t !== null && Vf(t, a[1]))
      return a[0];
    if (a = l(), ju) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return u.memoizedState = [a, t], a;
  }
  function tc(l, t, u) {
    return u === void 0 || (jt & 1073741824) !== 0 && (V & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = u, l = cy(), B.lanes |= l, vu |= l, u);
  }
  function cv(l, t, u, a) {
    return Pl(u, t) ? u : ya.current !== null ? (l = tc(l, u, a), Pl(l, t) || (zl = !0), l) : (jt & 42) === 0 || (jt & 1073741824) !== 0 && (V & 261930) === 0 ? (zl = !0, l.memoizedState = u) : (l = cy(), B.lanes |= l, vu |= l, t);
  }
  function iv(l, t, u, a, e) {
    var n = r.p;
    r.p = n !== 0 && 8 > n ? n : 8;
    var f = b.T, c = {};
    b.T = c, ec(l, !1, t, u);
    try {
      var i = e(), m = b.S;
      if (m !== null && m(c, i), i !== null && typeof i == "object" && typeof i.then == "function") {
        var g = js(
          i,
          a
        );
        Ia(
          l,
          t,
          g,
          nt(l)
        );
      } else
        Ia(
          l,
          t,
          a,
          nt(l)
        );
    } catch (T) {
      Ia(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: T },
        nt()
      );
    } finally {
      r.p = n, f !== null && c.types !== null && (f.types = c.types), b.T = f;
    }
  }
  function Vs() {
  }
  function uc(l, t, u, a) {
    if (l.tag !== 5) throw Error(h(476));
    var e = vv(l).queue;
    iv(
      l,
      e,
      t,
      q,
      u === null ? Vs : function() {
        return yv(l), u(a);
      }
    );
  }
  function vv(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: q,
      baseState: q,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: q
      },
      next: null
    };
    var u = {};
    return t.next = {
      memoizedState: u,
      baseState: u,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Gt,
        lastRenderedState: u
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function yv(l) {
    var t = vv(l);
    t.next === null && (t = l.alternate.memoizedState), Ia(
      l,
      t.next.queue,
      {},
      nt()
    );
  }
  function ac() {
    return pl(oe);
  }
  function dv() {
    return Sl().memoizedState;
  }
  function sv() {
    return Sl().memoizedState;
  }
  function Ls(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var u = nt();
          l = au(u);
          var a = eu(t, l, u);
          a !== null && (wl(a, t, u), wa(a, t, u)), t = { cache: Rf() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ks(l, t, u) {
    var a = nt();
    u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l) ? hv(t, u) : (u = Ef(l, t, u, a), u !== null && (wl(u, l, a), ov(u, t, a)));
  }
  function mv(l, t, u) {
    var a = nt();
    Ia(l, t, u, a);
  }
  function Ia(l, t, u, a) {
    var e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: u,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (nn(l)) hv(t, e);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var f = t.lastRenderedState, c = n(f, u);
          if (e.hasEagerState = !0, e.eagerState = c, Pl(c, f))
            return Xe(l, t, e, 0), fl === null && Ge(), !1;
        } catch {
        } finally {
        }
      if (u = Ef(l, t, e, a), u !== null)
        return wl(u, l, a), ov(u, t, a), !0;
    }
    return !1;
  }
  function ec(l, t, u, a) {
    if (a = {
      lane: 2,
      revertLane: Bc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, nn(l)) {
      if (t) throw Error(h(479));
    } else
      t = Ef(
        l,
        u,
        a,
        2
      ), t !== null && wl(t, l, 2);
  }
  function nn(l) {
    var t = l.alternate;
    return l === B || t !== null && t === B;
  }
  function hv(l, t) {
    da = Ie = !0;
    var u = l.pending;
    u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t;
  }
  function ov(l, t, u) {
    if ((u & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, u |= a, t.lanes = u, Ti(l, u);
    }
  }
  var Pa = {
    readContext: pl,
    use: tn,
    useCallback: sl,
    useContext: sl,
    useEffect: sl,
    useImperativeHandle: sl,
    useLayoutEffect: sl,
    useInsertionEffect: sl,
    useMemo: sl,
    useReducer: sl,
    useRef: sl,
    useState: sl,
    useDebugValue: sl,
    useDeferredValue: sl,
    useTransition: sl,
    useSyncExternalStore: sl,
    useId: sl,
    useHostTransitionStatus: sl,
    useFormState: sl,
    useActionState: sl,
    useOptimistic: sl,
    useMemoCache: sl,
    useCacheRefresh: sl
  };
  Pa.useEffectEvent = sl;
  var Sv = {
    readContext: pl,
    use: tn,
    useCallback: function(l, t) {
      return Bl().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: pl,
    useEffect: P0,
    useImperativeHandle: function(l, t, u) {
      u = u != null ? u.concat([l]) : null, an(
        4194308,
        4,
        av.bind(null, t, l),
        u
      );
    },
    useLayoutEffect: function(l, t) {
      return an(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      an(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var u = Bl();
      t = t === void 0 ? null : t;
      var a = l();
      if (ju) {
        $t(!0);
        try {
          l();
        } finally {
          $t(!1);
        }
      }
      return u.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, u) {
      var a = Bl();
      if (u !== void 0) {
        var e = u(t);
        if (ju) {
          $t(!0);
          try {
            u(t);
          } finally {
            $t(!1);
          }
        }
      } else e = t;
      return a.memoizedState = a.baseState = e, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: e
      }, a.queue = l, l = l.dispatch = Ks.bind(
        null,
        B,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = Bl();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = kf(l);
      var t = l.queue, u = mv.bind(null, B, t);
      return t.dispatch = u, [l.memoizedState, u];
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Bl();
      return tc(u, l, t);
    },
    useTransition: function() {
      var l = kf(!1);
      return l = iv.bind(
        null,
        B,
        l.queue,
        !0,
        !1
      ), Bl().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, u) {
      var a = B, e = Bl();
      if (J) {
        if (u === void 0)
          throw Error(h(407));
        u = u();
      } else {
        if (u = t(), fl === null)
          throw Error(h(349));
        (V & 127) !== 0 || j0(a, t, u);
      }
      e.memoizedState = u;
      var n = { value: u, getSnapshot: t };
      return e.queue = n, P0(X0.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, ma(
        9,
        { destroy: void 0 },
        G0.bind(
          null,
          a,
          n,
          u,
          t
        ),
        null
      ), u;
    },
    useId: function() {
      var l = Bl(), t = fl.identifierPrefix;
      if (J) {
        var u = Ot, a = rt;
        u = (a & ~(1 << 32 - Il(a) - 1)).toString(32) + u, t = "_" + t + "R_" + u, u = Pe++, 0 < u && (t += "H" + u.toString(32)), t += "_";
      } else
        u = Gs++, t = "_" + t + "r_" + u.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: ac,
    useFormState: W0,
    useActionState: W0,
    useOptimistic: function(l) {
      var t = Bl();
      t.memoizedState = t.baseState = l;
      var u = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = u, t = ec.bind(
        null,
        B,
        !0,
        u
      ), u.dispatch = t, [l, t];
    },
    useMemoCache: Wf,
    useCacheRefresh: function() {
      return Bl().memoizedState = Ls.bind(
        null,
        B
      );
    },
    useEffectEvent: function(l) {
      var t = Bl(), u = { impl: l };
      return t.memoizedState = u, function() {
        if (($ & 2) !== 0)
          throw Error(h(440));
        return u.impl.apply(void 0, arguments);
      };
    }
  }, nc = {
    readContext: pl,
    use: tn,
    useCallback: nv,
    useContext: pl,
    useEffect: Pf,
    useImperativeHandle: ev,
    useInsertionEffect: tv,
    useLayoutEffect: uv,
    useMemo: fv,
    useReducer: un,
    useRef: I0,
    useState: function() {
      return un(Gt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return cv(
        u,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = un(Gt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: dv,
    useHostTransitionStatus: ac,
    useFormState: $0,
    useActionState: $0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return x0(u, ul, l, t);
    },
    useMemoCache: Wf,
    useCacheRefresh: sv
  };
  nc.useEffectEvent = lv;
  var gv = {
    readContext: pl,
    use: tn,
    useCallback: nv,
    useContext: pl,
    useEffect: Pf,
    useImperativeHandle: ev,
    useInsertionEffect: tv,
    useLayoutEffect: uv,
    useMemo: fv,
    useReducer: Ff,
    useRef: I0,
    useState: function() {
      return Ff(Gt);
    },
    useDebugValue: lc,
    useDeferredValue: function(l, t) {
      var u = Sl();
      return ul === null ? tc(u, l, t) : cv(
        u,
        ul.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ff(Gt)[0], t = Sl().memoizedState;
      return [
        typeof l == "boolean" ? l : ka(l),
        t
      ];
    },
    useSyncExternalStore: B0,
    useId: dv,
    useHostTransitionStatus: ac,
    useFormState: k0,
    useActionState: k0,
    useOptimistic: function(l, t) {
      var u = Sl();
      return ul !== null ? x0(u, ul, l, t) : (u.baseState = l, [l, u.queue.dispatch]);
    },
    useMemoCache: Wf,
    useCacheRefresh: sv
  };
  gv.useEffectEvent = lv;
  function fc(l, t, u, a) {
    t = l.memoizedState, u = u(a, t), u = u == null ? t : R({}, t, u), l.memoizedState = u, l.lanes === 0 && (l.updateQueue.baseState = u);
  }
  var cc = {
    enqueueSetState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = au(a);
      e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (wl(t, l, a), wa(t, l, a));
    },
    enqueueReplaceState: function(l, t, u) {
      l = l._reactInternals;
      var a = nt(), e = au(a);
      e.tag = 1, e.payload = t, u != null && (e.callback = u), t = eu(l, e, a), t !== null && (wl(t, l, a), wa(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var u = nt(), a = au(u);
      a.tag = 2, t != null && (a.callback = t), t = eu(l, a, u), t !== null && (wl(t, l, u), wa(t, l, u));
    }
  };
  function bv(l, t, u, a, e, n, f) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, f) : t.prototype && t.prototype.isPureReactComponent ? !Xa(u, a) || !Xa(e, n) : !0;
  }
  function zv(l, t, u, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(u, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(u, a), t.state !== l && cc.enqueueReplaceState(t, t.state, null);
  }
  function Gu(l, t) {
    var u = t;
    if ("ref" in t) {
      u = {};
      for (var a in t)
        a !== "ref" && (u[a] = t[a]);
    }
    if (l = l.defaultProps) {
      u === t && (u = R({}, u));
      for (var e in l)
        u[e] === void 0 && (u[e] = l[e]);
    }
    return u;
  }
  function Tv(l) {
    je(l);
  }
  function Ev(l) {
    console.error(l);
  }
  function Av(l) {
    je(l);
  }
  function fn(l, t) {
    try {
      var u = l.onUncaughtError;
      u(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function _v(l, t, u) {
    try {
      var a = l.onCaughtError;
      a(u.value, {
        componentStack: u.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function ic(l, t, u) {
    return u = au(u), u.tag = 3, u.payload = { element: null }, u.callback = function() {
      fn(l, t);
    }, u;
  }
  function rv(l) {
    return l = au(l), l.tag = 3, l;
  }
  function Ov(l, t, u, a) {
    var e = u.type.getDerivedStateFromError;
    if (typeof e == "function") {
      var n = a.value;
      l.payload = function() {
        return e(n);
      }, l.callback = function() {
        _v(t, u, a);
      };
    }
    var f = u.stateNode;
    f !== null && typeof f.componentDidCatch == "function" && (l.callback = function() {
      _v(t, u, a), typeof e != "function" && (yu === null ? yu = /* @__PURE__ */ new Set([this]) : yu.add(this));
      var c = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: c !== null ? c : ""
      });
    });
  }
  function Js(l, t, u, a, e) {
    if (u.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = u.alternate, t !== null && na(
        t,
        u,
        e,
        !0
      ), u = tt.current, u !== null) {
        switch (u.tag) {
          case 31:
          case 13:
            return ht === null ? zn() : u.alternate === null && ml === 0 && (ml = 3), u.flags &= -257, u.flags |= 65536, u.lanes = e, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? u.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), qc(l, a, e)), !1;
          case 22:
            return u.flags |= 65536, a === we ? u.flags |= 16384 : (t = u.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, u.updateQueue = t) : (u = t.retryQueue, u === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : u.add(a)), qc(l, a, e)), !1;
        }
        throw Error(h(435, u.tag));
      }
      return qc(l, a, e), zn(), !1;
    }
    if (J)
      return t = tt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = e, a !== Df && (l = Error(h(422), { cause: a }), xa(yt(l, u)))) : (a !== Df && (t = Error(h(423), {
        cause: a
      }), xa(
        yt(t, u)
      )), l = l.current.alternate, l.flags |= 65536, e &= -e, l.lanes |= e, a = yt(a, u), e = ic(
        l.stateNode,
        a,
        e
      ), Gf(l, e), ml !== 4 && (ml = 2)), !1;
    var n = Error(h(520), { cause: a });
    if (n = yt(n, u), ce === null ? ce = [n] : ce.push(n), ml !== 4 && (ml = 2), t === null) return !0;
    a = yt(a, u), u = t;
    do {
      switch (u.tag) {
        case 3:
          return u.flags |= 65536, l = e & -e, u.lanes |= l, l = ic(u.stateNode, a, l), Gf(u, l), !1;
        case 1:
          if (t = u.type, n = u.stateNode, (u.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (yu === null || !yu.has(n))))
            return u.flags |= 65536, e &= -e, u.lanes |= e, e = rv(e), Ov(
              e,
              l,
              u,
              a
            ), Gf(u, e), !1;
      }
      u = u.return;
    } while (u !== null);
    return !1;
  }
  var vc = Error(h(461)), zl = !1;
  function Nl(l, t, u, a) {
    t.child = l === null ? p0(t, null, u, a) : Bu(
      t,
      l.child,
      u,
      a
    );
  }
  function Mv(l, t, u, a, e) {
    u = u.render;
    var n = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var c in a)
        c !== "ref" && (f[c] = a[c]);
    } else f = a;
    return Ru(t), a = Lf(
      l,
      t,
      u,
      f,
      n,
      e
    ), c = Kf(), l !== null && !zl ? (Jf(l, t, e), Xt(l, t, e)) : (J && c && Of(t), t.flags |= 1, Nl(l, t, a, e), t.child);
  }
  function Dv(l, t, u, a, e) {
    if (l === null) {
      var n = u.type;
      return typeof n == "function" && !Af(n) && n.defaultProps === void 0 && u.compare === null ? (t.tag = 15, t.type = n, Uv(
        l,
        t,
        n,
        a,
        e
      )) : (l = Ze(
        u.type,
        null,
        a,
        t,
        t.mode,
        e
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !gc(l, e)) {
      var f = n.memoizedProps;
      if (u = u.compare, u = u !== null ? u : Xa, u(f, a) && l.ref === t.ref)
        return Xt(l, t, e);
    }
    return t.flags |= 1, l = qt(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function Uv(l, t, u, a, e) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Xa(n, a) && l.ref === t.ref)
        if (zl = !1, t.pendingProps = a = n, gc(l, e))
          (l.flags & 131072) !== 0 && (zl = !0);
        else
          return t.lanes = l.lanes, Xt(l, t, e);
    }
    return yc(
      l,
      t,
      u,
      a,
      e
    );
  }
  function pv(l, t, u, a) {
    var e = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | u : u, l !== null) {
          for (a = t.child = l.child, e = 0; a !== null; )
            e = e | a.lanes | a.childLanes, a = a.sibling;
          a = e & ~n;
        } else a = 0, t.child = null;
        return Nv(
          l,
          t,
          n,
          u,
          a
        );
      }
      if ((u & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Ke(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? R0(t, n) : Qf(), q0(t);
      else
        return a = t.lanes = 536870912, Nv(
          l,
          t,
          n !== null ? n.baseLanes | u : u,
          u,
          a
        );
    } else
      n !== null ? (Ke(t, n.cachePool), R0(t, n), fu(), t.memoizedState = null) : (l !== null && Ke(t, null), Qf(), fu());
    return Nl(l, t, e, u), t.child;
  }
  function le(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Nv(l, t, u, a, e) {
    var n = Cf();
    return n = n === null ? null : { parent: gl._currentValue, pool: n }, t.memoizedState = {
      baseLanes: u,
      cachePool: n
    }, l !== null && Ke(t, null), Qf(), q0(t), l !== null && na(l, t, a, !0), t.childLanes = e, null;
  }
  function cn(l, t) {
    return t = yn(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Hv(l, t, u) {
    return Bu(t, l.child, null, u), l = cn(t, t.pendingProps), l.flags |= 2, ut(t), t.memoizedState = null, l;
  }
  function ws(l, t, u) {
    var a = t.pendingProps, e = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (J) {
        if (a.mode === "hidden")
          return l = cn(t, a), t.lanes = 536870912, le(null, l);
        if (xf(t), (l = il) ? (l = Vy(
          l,
          mt
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: rt, overflow: Ot } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Ul = t, il = null)) : l = null, l === null) throw lu(t);
        return t.lanes = 536870912, null;
      }
      return cn(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var f = n.dehydrated;
      if (xf(t), e)
        if (t.flags & 256)
          t.flags &= -257, t = Hv(
            l,
            t,
            u
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(h(558));
      else if (zl || na(l, t, u, !1), e = (u & l.childLanes) !== 0, zl || e) {
        if (a = fl, a !== null && (f = Ei(a, u), f !== 0 && f !== n.retryLane))
          throw n.retryLane = f, Uu(l, f), wl(a, l, f), vc;
        zn(), t = Hv(
          l,
          t,
          u
        );
      } else
        l = n.treeContext, il = ot(f.nextSibling), Ul = t, J = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = cn(t, a), t.flags |= 4096;
      return t;
    }
    return l = qt(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function vn(l, t) {
    var u = t.ref;
    if (u === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof u != "function" && typeof u != "object")
        throw Error(h(284));
      (l === null || l.ref !== u) && (t.flags |= 4194816);
    }
  }
  function yc(l, t, u, a, e) {
    return Ru(t), u = Lf(
      l,
      t,
      u,
      a,
      void 0,
      e
    ), a = Kf(), l !== null && !zl ? (Jf(l, t, e), Xt(l, t, e)) : (J && a && Of(t), t.flags |= 1, Nl(l, t, u, e), t.child);
  }
  function Rv(l, t, u, a, e, n) {
    return Ru(t), t.updateQueue = null, u = Y0(
      t,
      a,
      u,
      e
    ), C0(l), a = Kf(), l !== null && !zl ? (Jf(l, t, n), Xt(l, t, n)) : (J && a && Of(t), t.flags |= 1, Nl(l, t, u, n), t.child);
  }
  function qv(l, t, u, a, e) {
    if (Ru(t), t.stateNode === null) {
      var n = ta, f = u.contextType;
      typeof f == "object" && f !== null && (n = pl(f)), n = new u(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = cc, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, Bf(t), f = u.contextType, n.context = typeof f == "object" && f !== null ? pl(f) : ta, n.state = t.memoizedState, f = u.getDerivedStateFromProps, typeof f == "function" && (fc(
        t,
        u,
        f,
        a
      ), n.state = t.memoizedState), typeof u.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (f = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), f !== n.state && cc.enqueueReplaceState(n, n.state, null), $a(t, a, n, e), Wa(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps, i = Gu(u, c);
      n.props = i;
      var m = n.context, g = u.contextType;
      f = ta, typeof g == "object" && g !== null && (f = pl(g));
      var T = u.getDerivedStateFromProps;
      g = typeof T == "function" || typeof n.getSnapshotBeforeUpdate == "function", c = t.pendingProps !== c, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c || m !== f) && zv(
        t,
        n,
        a,
        f
      ), uu = !1;
      var o = t.memoizedState;
      n.state = o, $a(t, a, n, e), Wa(), m = t.memoizedState, c || o !== m || uu ? (typeof T == "function" && (fc(
        t,
        u,
        T,
        a
      ), m = t.memoizedState), (i = uu || bv(
        t,
        u,
        i,
        a,
        o,
        m,
        f
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = m), n.props = a, n.state = m, n.context = f, a = i) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, jf(l, t), f = t.memoizedProps, g = Gu(u, f), n.props = g, T = t.pendingProps, o = n.context, m = u.contextType, i = ta, typeof m == "object" && m !== null && (i = pl(m)), c = u.getDerivedStateFromProps, (m = typeof c == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (f !== T || o !== i) && zv(
        t,
        n,
        a,
        i
      ), uu = !1, o = t.memoizedState, n.state = o, $a(t, a, n, e), Wa();
      var S = t.memoizedState;
      f !== T || o !== S || uu || l !== null && l.dependencies !== null && Ve(l.dependencies) ? (typeof c == "function" && (fc(
        t,
        u,
        c,
        a
      ), S = t.memoizedState), (g = uu || bv(
        t,
        u,
        g,
        a,
        o,
        S,
        i
      ) || l !== null && l.dependencies !== null && Ve(l.dependencies)) ? (m || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, S, i), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        S,
        i
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = S), n.props = a, n.state = S, n.context = i, a = g) : (typeof n.componentDidUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || f === l.memoizedProps && o === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, vn(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, u = a && typeof u.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = Bu(
      t,
      l.child,
      null,
      e
    ), t.child = Bu(
      t,
      null,
      u,
      e
    )) : Nl(l, t, u, e), t.memoizedState = n.state, l = t.child) : l = Xt(
      l,
      t,
      e
    ), l;
  }
  function Cv(l, t, u, a) {
    return Nu(), t.flags |= 256, Nl(l, t, u, a), t.child;
  }
  var dc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function sc(l) {
    return { baseLanes: l, cachePool: _0() };
  }
  function mc(l, t, u) {
    return l = l !== null ? l.childLanes & ~u : 0, t && (l |= et), l;
  }
  function Yv(l, t, u) {
    var a = t.pendingProps, e = !1, n = (t.flags & 128) !== 0, f;
    if ((f = n) || (f = l !== null && l.memoizedState === null ? !1 : (ol.current & 2) !== 0), f && (e = !0, t.flags &= -129), f = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (J) {
        if (e ? nu(t) : fu(), (l = il) ? (l = Vy(
          l,
          mt
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: It !== null ? { id: rt, overflow: Ot } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, u = h0(l), u.return = t, t.child = u, Ul = t, il = null)) : l = null, l === null) throw lu(t);
        return $c(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var c = a.children;
      return a = a.fallback, e ? (fu(), e = t.mode, c = yn(
        { mode: "hidden", children: c },
        e
      ), a = pu(
        a,
        e,
        u,
        null
      ), c.return = t, a.return = t, c.sibling = a, t.child = c, a = t.child, a.memoizedState = sc(u), a.childLanes = mc(
        l,
        f,
        u
      ), t.memoizedState = dc, le(null, a)) : (nu(t), hc(t, c));
    }
    var i = l.memoizedState;
    if (i !== null && (c = i.dehydrated, c !== null)) {
      if (n)
        t.flags & 256 ? (nu(t), t.flags &= -257, t = oc(
          l,
          t,
          u
        )) : t.memoizedState !== null ? (fu(), t.child = l.child, t.flags |= 128, t = null) : (fu(), c = a.fallback, e = t.mode, a = yn(
          { mode: "visible", children: a.children },
          e
        ), c = pu(
          c,
          e,
          u,
          null
        ), c.flags |= 2, a.return = t, c.return = t, a.sibling = c, t.child = a, Bu(
          t,
          l.child,
          null,
          u
        ), a = t.child, a.memoizedState = sc(u), a.childLanes = mc(
          l,
          f,
          u
        ), t.memoizedState = dc, t = le(null, a));
      else if (nu(t), $c(c)) {
        if (f = c.nextSibling && c.nextSibling.dataset, f) var m = f.dgst;
        f = m, a = Error(h(419)), a.stack = "", a.digest = f, xa({ value: a, source: null, stack: null }), t = oc(
          l,
          t,
          u
        );
      } else if (zl || na(l, t, u, !1), f = (u & l.childLanes) !== 0, zl || f) {
        if (f = fl, f !== null && (a = Ei(f, u), a !== 0 && a !== i.retryLane))
          throw i.retryLane = a, Uu(l, a), wl(f, l, a), vc;
        Wc(c) || zn(), t = oc(
          l,
          t,
          u
        );
      } else
        Wc(c) ? (t.flags |= 192, t.child = l.child, t = null) : (l = i.treeContext, il = ot(
          c.nextSibling
        ), Ul = t, J = !0, Pt = null, mt = !1, l !== null && g0(t, l), t = hc(
          t,
          a.children
        ), t.flags |= 4096);
      return t;
    }
    return e ? (fu(), c = a.fallback, e = t.mode, i = l.child, m = i.sibling, a = qt(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 65011712, m !== null ? c = qt(
      m,
      c
    ) : (c = pu(
      c,
      e,
      u,
      null
    ), c.flags |= 2), c.return = t, a.return = t, a.sibling = c, t.child = a, le(null, a), a = t.child, c = l.child.memoizedState, c === null ? c = sc(u) : (e = c.cachePool, e !== null ? (i = gl._currentValue, e = e.parent !== i ? { parent: i, pool: i } : e) : e = _0(), c = {
      baseLanes: c.baseLanes | u,
      cachePool: e
    }), a.memoizedState = c, a.childLanes = mc(
      l,
      f,
      u
    ), t.memoizedState = dc, le(l.child, a)) : (nu(t), u = l.child, l = u.sibling, u = qt(u, {
      mode: "visible",
      children: a.children
    }), u.return = t, u.sibling = null, l !== null && (f = t.deletions, f === null ? (t.deletions = [l], t.flags |= 16) : f.push(l)), t.child = u, t.memoizedState = null, u);
  }
  function hc(l, t) {
    return t = yn(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function yn(l, t) {
    return l = lt(22, l, null, t), l.lanes = 0, l;
  }
  function oc(l, t, u) {
    return Bu(t, l.child, null, u), l = hc(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function Bv(l, t, u) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), Nf(l.return, t, u);
  }
  function Sc(l, t, u, a, e, n) {
    var f = l.memoizedState;
    f === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: u,
      tailMode: e,
      treeForkCount: n
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = a, f.tail = u, f.tailMode = e, f.treeForkCount = n);
  }
  function jv(l, t, u) {
    var a = t.pendingProps, e = a.revealOrder, n = a.tail;
    a = a.children;
    var f = ol.current, c = (f & 2) !== 0;
    if (c ? (f = f & 1 | 2, t.flags |= 128) : f &= 1, O(ol, f), Nl(l, t, a, u), a = J ? Za : 0, !c && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && Bv(l, u, t);
        else if (l.tag === 19)
          Bv(l, u, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (e) {
      case "forwards":
        for (u = t.child, e = null; u !== null; )
          l = u.alternate, l !== null && ke(l) === null && (e = u), u = u.sibling;
        u = e, u === null ? (e = t.child, t.child = null) : (e = u.sibling, u.sibling = null), Sc(
          t,
          !1,
          e,
          u,
          n,
          a
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (u = null, e = t.child, t.child = null; e !== null; ) {
          if (l = e.alternate, l !== null && ke(l) === null) {
            t.child = e;
            break;
          }
          l = e.sibling, e.sibling = u, u = e, e = l;
        }
        Sc(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "together":
        Sc(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Xt(l, t, u) {
    if (l !== null && (t.dependencies = l.dependencies), vu |= t.lanes, (u & t.childLanes) === 0)
      if (l !== null) {
        if (na(
          l,
          t,
          u,
          !1
        ), (u & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(h(153));
    if (t.child !== null) {
      for (l = t.child, u = qt(l, l.pendingProps), t.child = u, u.return = t; l.sibling !== null; )
        l = l.sibling, u = u.sibling = qt(l, l.pendingProps), u.return = t;
      u.sibling = null;
    }
    return t.child;
  }
  function gc(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Ve(l)));
  }
  function Ws(l, t, u) {
    switch (t.tag) {
      case 3:
        Yl(t, t.stateNode.containerInfo), tu(t, gl, l.memoizedState.cache), Nu();
        break;
      case 27:
      case 5:
        Ma(t);
        break;
      case 4:
        Yl(t, t.stateNode.containerInfo);
        break;
      case 10:
        tu(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, xf(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null ? (nu(t), t.flags |= 128, null) : (u & t.child.childLanes) !== 0 ? Yv(l, t, u) : (nu(t), l = Xt(
            l,
            t,
            u
          ), l !== null ? l.sibling : null);
        nu(t);
        break;
      case 19:
        var e = (l.flags & 128) !== 0;
        if (a = (u & t.childLanes) !== 0, a || (na(
          l,
          t,
          u,
          !1
        ), a = (u & t.childLanes) !== 0), e) {
          if (a)
            return jv(
              l,
              t,
              u
            );
          t.flags |= 128;
        }
        if (e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null, e.lastEffect = null), O(ol, ol.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, pv(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        tu(t, gl, l.memoizedState.cache);
    }
    return Xt(l, t, u);
  }
  function Gv(l, t, u) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        zl = !0;
      else {
        if (!gc(l, u) && (t.flags & 128) === 0)
          return zl = !1, Ws(
            l,
            t,
            u
          );
        zl = (l.flags & 131072) !== 0;
      }
    else
      zl = !1, J && (t.flags & 1048576) !== 0 && S0(t, Za, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = Cu(t.elementType), t.type = l, typeof l == "function")
            Af(l) ? (a = Gu(l, a), t.tag = 1, t = qv(
              null,
              t,
              l,
              a,
              u
            )) : (t.tag = 0, t = yc(
              null,
              t,
              l,
              a,
              u
            ));
          else {
            if (l != null) {
              var e = l.$$typeof;
              if (e === ft) {
                t.tag = 11, t = Mv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              } else if (e === K) {
                t.tag = 14, t = Dv(
                  null,
                  t,
                  l,
                  a,
                  u
                );
                break l;
              }
            }
            throw t = pt(l) || l, Error(h(306, t, ""));
          }
        }
        return t;
      case 0:
        return yc(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 1:
        return a = t.type, e = Gu(
          a,
          t.pendingProps
        ), qv(
          l,
          t,
          a,
          e,
          u
        );
      case 3:
        l: {
          if (Yl(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(h(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          e = n.element, jf(l, t), $a(t, a, null, u);
          var f = t.memoizedState;
          if (a = f.cache, tu(t, gl, a), a !== n.cache && Hf(
            t,
            [gl],
            u,
            !0
          ), Wa(), a = f.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: f.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Cv(
                l,
                t,
                a,
                u
              );
              break l;
            } else if (a !== e) {
              e = yt(
                Error(h(424)),
                t
              ), xa(e), t = Cv(
                l,
                t,
                a,
                u
              );
              break l;
            } else {
              switch (l = t.stateNode.containerInfo, l.nodeType) {
                case 9:
                  l = l.body;
                  break;
                default:
                  l = l.nodeName === "HTML" ? l.ownerDocument.body : l;
              }
              for (il = ot(l.firstChild), Ul = t, J = !0, Pt = null, mt = !0, u = p0(
                t,
                null,
                a,
                u
              ), t.child = u; u; )
                u.flags = u.flags & -3 | 4096, u = u.sibling;
            }
          else {
            if (Nu(), a === e) {
              t = Xt(
                l,
                t,
                u
              );
              break l;
            }
            Nl(l, t, a, u);
          }
          t = t.child;
        }
        return t;
      case 26:
        return vn(l, t), l === null ? (u = $y(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = u : J || (u = t.type, l = t.pendingProps, a = Mn(
          Q.current
        ).createElement(u), a[Dl] = t, a[Zl] = l, Hl(a, u, l), rl(a), t.stateNode = a) : t.memoizedState = $y(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Ma(t), l === null && J && (a = t.stateNode = Jy(
          t.type,
          t.pendingProps,
          Q.current
        ), Ul = t, mt = !0, e = il, hu(t.type) ? (Fc = e, il = ot(a.firstChild)) : il = e), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), vn(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && J && ((e = a = il) && (a = rm(
          a,
          t.type,
          t.pendingProps,
          mt
        ), a !== null ? (t.stateNode = a, Ul = t, il = ot(a.firstChild), mt = !1, e = !0) : e = !1), e || lu(t)), Ma(t), e = t.type, n = t.pendingProps, f = l !== null ? l.memoizedProps : null, a = n.children, Kc(e, n) ? a = null : f !== null && Kc(e, f) && (t.flags |= 32), t.memoizedState !== null && (e = Lf(
          l,
          t,
          Xs,
          null,
          null,
          u
        ), oe._currentValue = e), vn(l, t), Nl(l, t, a, u), t.child;
      case 6:
        return l === null && J && ((l = u = il) && (u = Om(
          u,
          t.pendingProps,
          mt
        ), u !== null ? (t.stateNode = u, Ul = t, il = null, l = !0) : l = !1), l || lu(t)), null;
      case 13:
        return Yv(l, t, u);
      case 4:
        return Yl(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = Bu(
          t,
          null,
          a,
          u
        ) : Nl(l, t, a, u), t.child;
      case 11:
        return Mv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 7:
        return Nl(
          l,
          t,
          t.pendingProps,
          u
        ), t.child;
      case 8:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 12:
        return Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 10:
        return a = t.pendingProps, tu(t, t.type, a.value), Nl(l, t, a.children, u), t.child;
      case 9:
        return e = t.type._context, a = t.pendingProps.children, Ru(t), e = pl(e), a = a(e), t.flags |= 1, Nl(l, t, a, u), t.child;
      case 14:
        return Dv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 15:
        return Uv(
          l,
          t,
          t.type,
          t.pendingProps,
          u
        );
      case 19:
        return jv(l, t, u);
      case 31:
        return ws(l, t, u);
      case 22:
        return pv(
          l,
          t,
          u,
          t.pendingProps
        );
      case 24:
        return Ru(t), a = pl(gl), l === null ? (e = Cf(), e === null && (e = fl, n = Rf(), e.pooledCache = n, n.refCount++, n !== null && (e.pooledCacheLanes |= u), e = n), t.memoizedState = { parent: a, cache: e }, Bf(t), tu(t, gl, e)) : ((l.lanes & u) !== 0 && (jf(l, t), $a(t, null, null, u), Wa()), e = l.memoizedState, n = t.memoizedState, e.parent !== a ? (e = { parent: a, cache: a }, t.memoizedState = e, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = e), tu(t, gl, a)) : (a = n.cache, tu(t, gl, a), a !== e.cache && Hf(
          t,
          [gl],
          u,
          !0
        ))), Nl(
          l,
          t,
          t.pendingProps.children,
          u
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(h(156, t.tag));
  }
  function Qt(l) {
    l.flags |= 4;
  }
  function bc(l, t, u, a, e) {
    if ((t = (l.mode & 32) !== 0) && (t = !1), t) {
      if (l.flags |= 16777216, (e & 335544128) === e)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (dy()) l.flags |= 8192;
        else
          throw Yu = we, Yf;
    } else l.flags &= -16777217;
  }
  function Xv(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !ld(t))
      if (dy()) l.flags |= 8192;
      else
        throw Yu = we, Yf;
  }
  function dn(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? bi() : 536870912, l.lanes |= t, ga |= t);
  }
  function te(l, t) {
    if (!J)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var u = null; t !== null; )
            t.alternate !== null && (u = t), t = t.sibling;
          u === null ? l.tail = null : u.sibling = null;
          break;
        case "collapsed":
          u = l.tail;
          for (var a = null; u !== null; )
            u.alternate !== null && (a = u), u = u.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
      }
  }
  function vl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, u = 0, a = 0;
    if (t)
      for (var e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags & 65011712, a |= e.flags & 65011712, e.return = l, e = e.sibling;
    else
      for (e = l.child; e !== null; )
        u |= e.lanes | e.childLanes, a |= e.subtreeFlags, a |= e.flags, e.return = l, e = e.sibling;
    return l.subtreeFlags |= a, l.childLanes = u, t;
  }
  function $s(l, t, u) {
    var a = t.pendingProps;
    switch (Mf(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return vl(t), null;
      case 1:
        return vl(t), null;
      case 3:
        return u = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Bt(gl), hl(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (l === null || l.child === null) && (ea(t) ? Qt(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Uf())), vl(t), null;
      case 26:
        var e = t.type, n = t.memoizedState;
        return l === null ? (Qt(t), n !== null ? (vl(t), Xv(t, n)) : (vl(t), bc(
          t,
          e,
          null,
          a,
          u
        ))) : n ? n !== l.memoizedState ? (Qt(t), vl(t), Xv(t, n)) : (vl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Qt(t), vl(t), bc(
          t,
          e,
          l,
          a,
          u
        )), null;
      case 27:
        if (Ee(t), u = Q.current, e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return vl(t), null;
          }
          l = D.current, ea(t) ? b0(t) : (l = Jy(e, a, u), t.stateNode = l, Qt(t));
        }
        return vl(t), null;
      case 5:
        if (Ee(t), e = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(h(166));
            return vl(t), null;
          }
          if (n = D.current, ea(t))
            b0(t);
          else {
            var f = Mn(
              Q.current
            );
            switch (n) {
              case 1:
                n = f.createElementNS(
                  "http://www.w3.org/2000/svg",
                  e
                );
                break;
              case 2:
                n = f.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  e
                );
                break;
              default:
                switch (e) {
                  case "svg":
                    n = f.createElementNS(
                      "http://www.w3.org/2000/svg",
                      e
                    );
                    break;
                  case "math":
                    n = f.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      e
                    );
                    break;
                  case "script":
                    n = f.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? f.createElement("select", {
                      is: a.is
                    }) : f.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? f.createElement(e, { is: a.is }) : f.createElement(e);
                }
            }
            n[Dl] = t, n[Zl] = a;
            l: for (f = t.child; f !== null; ) {
              if (f.tag === 5 || f.tag === 6)
                n.appendChild(f.stateNode);
              else if (f.tag !== 4 && f.tag !== 27 && f.child !== null) {
                f.child.return = f, f = f.child;
                continue;
              }
              if (f === t) break l;
              for (; f.sibling === null; ) {
                if (f.return === null || f.return === t)
                  break l;
                f = f.return;
              }
              f.sibling.return = f.return, f = f.sibling;
            }
            t.stateNode = n;
            l: switch (Hl(n, e, a), e) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Qt(t);
          }
        }
        return vl(t), bc(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          u
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Qt(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(h(166));
          if (l = Q.current, ea(t)) {
            if (l = t.stateNode, u = t.memoizedProps, a = null, e = Ul, e !== null)
              switch (e.tag) {
                case 27:
                case 5:
                  a = e.memoizedProps;
              }
            l[Dl] = t, l = !!(l.nodeValue === u || a !== null && a.suppressHydrationWarning === !0 || Yy(l.nodeValue, u)), l || lu(t, !0);
          } else
            l = Mn(l).createTextNode(
              a
            ), l[Dl] = t, t.stateNode = l;
        }
        return vl(t), null;
      case 31:
        if (u = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = ea(t), u !== null) {
            if (l === null) {
              if (!a) throw Error(h(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(h(557));
              l[Dl] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), l = !1;
          } else
            u = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), l = !0;
          if (!l)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(h(558));
        }
        return vl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (e = ea(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!e) throw Error(h(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(h(317));
              e[Dl] = t;
            } else
              Nu(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            vl(t), e = !1;
          } else
            e = Uf(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), e = !0;
          if (!e)
            return t.flags & 256 ? (ut(t), t) : (ut(t), null);
        }
        return ut(t), (t.flags & 128) !== 0 ? (t.lanes = u, t) : (u = a !== null, l = l !== null && l.memoizedState !== null, u && (a = t.child, e = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (e = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== e && (a.flags |= 2048)), u !== l && u && (t.child.flags |= 8192), dn(t, t.updateQueue), vl(t), null);
      case 4:
        return hl(), l === null && Qc(t.stateNode.containerInfo), vl(t), null;
      case 10:
        return Bt(t.type), vl(t), null;
      case 19:
        if (E(ol), a = t.memoizedState, a === null) return vl(t), null;
        if (e = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (e) te(a, !1);
          else {
            if (ml !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = ke(l), n !== null) {
                  for (t.flags |= 128, te(a, !1), l = n.updateQueue, t.updateQueue = l, dn(t, l), t.subtreeFlags = 0, l = u, u = t.child; u !== null; )
                    m0(u, l), u = u.sibling;
                  return O(
                    ol,
                    ol.current & 1 | 2
                  ), J && Ct(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && Fl() > Sn && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          }
        else {
          if (!e)
            if (l = ke(n), l !== null) {
              if (t.flags |= 128, e = !0, l = l.updateQueue, t.updateQueue = l, dn(t, l), te(a, !0), a.tail === null && a.tailMode === "hidden" && !n.alternate && !J)
                return vl(t), null;
            } else
              2 * Fl() - a.renderingStartTime > Sn && u !== 536870912 && (t.flags |= 128, e = !0, te(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        return a.tail !== null ? (l = a.tail, a.rendering = l, a.tail = l.sibling, a.renderingStartTime = Fl(), l.sibling = null, u = ol.current, O(
          ol,
          e ? u & 1 | 2 : u & 1
        ), J && Ct(t, a.treeForkCount), l) : (vl(t), null);
      case 22:
      case 23:
        return ut(t), Zf(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (u & 536870912) !== 0 && (t.flags & 128) === 0 && (vl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : vl(t), u = t.updateQueue, u !== null && dn(t, u.retryQueue), u = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== u && (t.flags |= 2048), l !== null && E(qu), null;
      case 24:
        return u = null, l !== null && (u = l.memoizedState.cache), t.memoizedState.cache !== u && (t.flags |= 2048), Bt(gl), vl(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(h(156, t.tag));
  }
  function Fs(l, t) {
    switch (Mf(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return Bt(gl), hl(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ee(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (ut(t), t.alternate === null)
            throw Error(h(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (ut(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(h(340));
          Nu();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return E(ol), null;
      case 4:
        return hl(), null;
      case 10:
        return Bt(t.type), null;
      case 22:
      case 23:
        return ut(t), Zf(), l !== null && E(qu), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return Bt(gl), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Qv(l, t) {
    switch (Mf(t), t.tag) {
      case 3:
        Bt(gl), hl();
        break;
      case 26:
      case 27:
      case 5:
        Ee(t);
        break;
      case 4:
        hl();
        break;
      case 31:
        t.memoizedState !== null && ut(t);
        break;
      case 13:
        ut(t);
        break;
      case 19:
        E(ol);
        break;
      case 10:
        Bt(t.type);
        break;
      case 22:
      case 23:
        ut(t), Zf(), l !== null && E(qu);
        break;
      case 24:
        Bt(gl);
    }
  }
  function ue(l, t) {
    try {
      var u = t.updateQueue, a = u !== null ? u.lastEffect : null;
      if (a !== null) {
        var e = a.next;
        u = e;
        do {
          if ((u.tag & l) === l) {
            a = void 0;
            var n = u.create, f = u.inst;
            a = n(), f.destroy = a;
          }
          u = u.next;
        } while (u !== e);
      }
    } catch (c) {
      P(t, t.return, c);
    }
  }
  function cu(l, t, u) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var n = e.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var f = a.inst, c = f.destroy;
            if (c !== void 0) {
              f.destroy = void 0, e = t;
              var i = u, m = c;
              try {
                m();
              } catch (g) {
                P(
                  e,
                  i,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      P(t, t.return, g);
    }
  }
  function Zv(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var u = l.stateNode;
      try {
        H0(t, u);
      } catch (a) {
        P(l, l.return, a);
      }
    }
  }
  function xv(l, t, u) {
    u.props = Gu(
      l.type,
      l.memoizedProps
    ), u.state = l.memoizedState;
    try {
      u.componentWillUnmount();
    } catch (a) {
      P(l, t, a);
    }
  }
  function ae(l, t) {
    try {
      var u = l.ref;
      if (u !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof u == "function" ? l.refCleanup = u(a) : u.current = a;
      }
    } catch (e) {
      P(l, t, e);
    }
  }
  function Mt(l, t) {
    var u = l.ref, a = l.refCleanup;
    if (u !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (e) {
          P(l, t, e);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof u == "function")
        try {
          u(null);
        } catch (e) {
          P(l, t, e);
        }
      else u.current = null;
  }
  function Vv(l) {
    var t = l.type, u = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          u.autoFocus && a.focus();
          break l;
        case "img":
          u.src ? a.src = u.src : u.srcSet && (a.srcset = u.srcSet);
      }
    } catch (e) {
      P(l, l.return, e);
    }
  }
  function zc(l, t, u) {
    try {
      var a = l.stateNode;
      bm(a, l.type, u, t), a[Zl] = t;
    } catch (e) {
      P(l, l.return, e);
    }
  }
  function Lv(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && hu(l.type) || l.tag === 4;
  }
  function Tc(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || Lv(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && hu(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Ec(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? (u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u).insertBefore(l, t) : (t = u.nodeType === 9 ? u.body : u.nodeName === "HTML" ? u.ownerDocument.body : u, t.appendChild(l), u = u._reactRootContainer, u != null || t.onclick !== null || (t.onclick = Ht));
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode, t = null), l = l.child, l !== null))
      for (Ec(l, t, u), l = l.sibling; l !== null; )
        Ec(l, t, u), l = l.sibling;
  }
  function sn(l, t, u) {
    var a = l.tag;
    if (a === 5 || a === 6)
      l = l.stateNode, t ? u.insertBefore(l, t) : u.appendChild(l);
    else if (a !== 4 && (a === 27 && hu(l.type) && (u = l.stateNode), l = l.child, l !== null))
      for (sn(l, t, u), l = l.sibling; l !== null; )
        sn(l, t, u), l = l.sibling;
  }
  function Kv(l) {
    var t = l.stateNode, u = l.memoizedProps;
    try {
      for (var a = l.type, e = t.attributes; e.length; )
        t.removeAttributeNode(e[0]);
      Hl(t, a, u), t[Dl] = l, t[Zl] = u;
    } catch (n) {
      P(l, l.return, n);
    }
  }
  var Zt = !1, Tl = !1, Ac = !1, Jv = typeof WeakSet == "function" ? WeakSet : Set, Ol = null;
  function ks(l, t) {
    if (l = l.containerInfo, Vc = qn, l = e0(l), of(l)) {
      if ("selectionStart" in l)
        var u = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          u = (u = l.ownerDocument) && u.defaultView || window;
          var a = u.getSelection && u.getSelection();
          if (a && a.rangeCount !== 0) {
            u = a.anchorNode;
            var e = a.anchorOffset, n = a.focusNode;
            a = a.focusOffset;
            try {
              u.nodeType, n.nodeType;
            } catch {
              u = null;
              break l;
            }
            var f = 0, c = -1, i = -1, m = 0, g = 0, T = l, o = null;
            t: for (; ; ) {
              for (var S; T !== u || e !== 0 && T.nodeType !== 3 || (c = f + e), T !== n || a !== 0 && T.nodeType !== 3 || (i = f + a), T.nodeType === 3 && (f += T.nodeValue.length), (S = T.firstChild) !== null; )
                o = T, T = S;
              for (; ; ) {
                if (T === l) break t;
                if (o === u && ++m === e && (c = f), o === n && ++g === a && (i = f), (S = T.nextSibling) !== null) break;
                T = o, o = T.parentNode;
              }
              T = S;
            }
            u = c === -1 || i === -1 ? null : { start: c, end: i };
          } else u = null;
        }
      u = u || { start: 0, end: 0 };
    } else u = null;
    for (Lc = { focusedElem: l, selectionRange: u }, qn = !1, Ol = t; Ol !== null; )
      if (t = Ol, l = t.child, (t.subtreeFlags & 1028) !== 0 && l !== null)
        l.return = t, Ol = l;
      else
        for (; Ol !== null; ) {
          switch (t = Ol, n = t.alternate, l = t.flags, t.tag) {
            case 0:
              if ((l & 4) !== 0 && (l = t.updateQueue, l = l !== null ? l.events : null, l !== null))
                for (u = 0; u < l.length; u++)
                  e = l[u], e.ref.impl = e.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                l = void 0, u = t, e = n.memoizedProps, n = n.memoizedState, a = u.stateNode;
                try {
                  var M = Gu(
                    u.type,
                    e
                  );
                  l = a.getSnapshotBeforeUpdate(
                    M,
                    n
                  ), a.__reactInternalSnapshotBeforeUpdate = l;
                } catch (H) {
                  P(
                    u,
                    u.return,
                    H
                  );
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (l = t.stateNode.containerInfo, u = l.nodeType, u === 9)
                  wc(l);
                else if (u === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      wc(l);
                      break;
                    default:
                      l.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((l & 1024) !== 0) throw Error(h(163));
          }
          if (l = t.sibling, l !== null) {
            l.return = t.return, Ol = l;
            break;
          }
          Ol = t.return;
        }
  }
  function wv(l, t, u) {
    var a = u.flags;
    switch (u.tag) {
      case 0:
      case 11:
      case 15:
        Vt(l, u), a & 4 && ue(5, u);
        break;
      case 1:
        if (Vt(l, u), a & 4)
          if (l = u.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (f) {
              P(u, u.return, f);
            }
          else {
            var e = Gu(
              u.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                e,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (f) {
              P(
                u,
                u.return,
                f
              );
            }
          }
        a & 64 && Zv(u), a & 512 && ae(u, u.return);
        break;
      case 3:
        if (Vt(l, u), a & 64 && (l = u.updateQueue, l !== null)) {
          if (t = null, u.child !== null)
            switch (u.child.tag) {
              case 27:
              case 5:
                t = u.child.stateNode;
                break;
              case 1:
                t = u.child.stateNode;
            }
          try {
            H0(l, t);
          } catch (f) {
            P(u, u.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Kv(u);
      case 26:
      case 5:
        Vt(l, u), t === null && a & 4 && Vv(u), a & 512 && ae(u, u.return);
        break;
      case 12:
        Vt(l, u);
        break;
      case 31:
        Vt(l, u), a & 4 && Fv(l, u);
        break;
      case 13:
        Vt(l, u), a & 4 && kv(l, u), a & 64 && (l = u.memoizedState, l !== null && (l = l.dehydrated, l !== null && (u = fm.bind(
          null,
          u
        ), Mm(l, u))));
        break;
      case 22:
        if (a = u.memoizedState !== null || Zt, !a) {
          t = t !== null && t.memoizedState !== null || Tl, e = Zt;
          var n = Tl;
          Zt = a, (Tl = t) && !n ? Lt(
            l,
            u,
            (u.subtreeFlags & 8772) !== 0
          ) : Vt(l, u), Zt = e, Tl = n;
        }
        break;
      case 30:
        break;
      default:
        Vt(l, u);
    }
  }
  function Wv(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, Wv(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && kn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var dl = null, Vl = !1;
  function xt(l, t, u) {
    for (u = u.child; u !== null; )
      $v(l, t, u), u = u.sibling;
  }
  function $v(l, t, u) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Da, u);
      } catch {
      }
    switch (u.tag) {
      case 26:
        Tl || Mt(u, t), xt(
          l,
          t,
          u
        ), u.memoizedState ? u.memoizedState.count-- : u.stateNode && (u = u.stateNode, u.parentNode.removeChild(u));
        break;
      case 27:
        Tl || Mt(u, t);
        var a = dl, e = Vl;
        hu(u.type) && (dl = u.stateNode, Vl = !1), xt(
          l,
          t,
          u
        ), se(u.stateNode), dl = a, Vl = e;
        break;
      case 5:
        Tl || Mt(u, t);
      case 6:
        if (a = dl, e = Vl, dl = null, xt(
          l,
          t,
          u
        ), dl = a, Vl = e, dl !== null)
          if (Vl)
            try {
              (dl.nodeType === 9 ? dl.body : dl.nodeName === "HTML" ? dl.ownerDocument.body : dl).removeChild(u.stateNode);
            } catch (n) {
              P(
                u,
                t,
                n
              );
            }
          else
            try {
              dl.removeChild(u.stateNode);
            } catch (n) {
              P(
                u,
                t,
                n
              );
            }
        break;
      case 18:
        dl !== null && (Vl ? (l = dl, Zy(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          u.stateNode
        ), Oa(l)) : Zy(dl, u.stateNode));
        break;
      case 4:
        a = dl, e = Vl, dl = u.stateNode.containerInfo, Vl = !0, xt(
          l,
          t,
          u
        ), dl = a, Vl = e;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        cu(2, u, t), Tl || cu(4, u, t), xt(
          l,
          t,
          u
        );
        break;
      case 1:
        Tl || (Mt(u, t), a = u.stateNode, typeof a.componentWillUnmount == "function" && xv(
          u,
          t,
          a
        )), xt(
          l,
          t,
          u
        );
        break;
      case 21:
        xt(
          l,
          t,
          u
        );
        break;
      case 22:
        Tl = (a = Tl) || u.memoizedState !== null, xt(
          l,
          t,
          u
        ), Tl = a;
        break;
      default:
        xt(
          l,
          t,
          u
        );
    }
  }
  function Fv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        Oa(l);
      } catch (u) {
        P(t, t.return, u);
      }
    }
  }
  function kv(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        Oa(l);
      } catch (u) {
        P(t, t.return, u);
      }
  }
  function Is(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new Jv()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new Jv()), t;
      default:
        throw Error(h(435, l.tag));
    }
  }
  function mn(l, t) {
    var u = Is(l);
    t.forEach(function(a) {
      if (!u.has(a)) {
        u.add(a);
        var e = cm.bind(null, l, a);
        a.then(e, e);
      }
    });
  }
  function Ll(l, t) {
    var u = t.deletions;
    if (u !== null)
      for (var a = 0; a < u.length; a++) {
        var e = u[a], n = l, f = t, c = f;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (hu(c.type)) {
                dl = c.stateNode, Vl = !1;
                break l;
              }
              break;
            case 5:
              dl = c.stateNode, Vl = !1;
              break l;
            case 3:
            case 4:
              dl = c.stateNode.containerInfo, Vl = !0;
              break l;
          }
          c = c.return;
        }
        if (dl === null) throw Error(h(160));
        $v(n, f, e), dl = null, Vl = !1, n = e.alternate, n !== null && (n.return = null), e.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Iv(t, l), t = t.sibling;
  }
  var zt = null;
  function Iv(l, t) {
    var u = l.alternate, a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ll(t, l), Kl(l), a & 4 && (cu(3, l, l.return), ue(3, l), cu(5, l, l.return));
        break;
      case 1:
        Ll(t, l), Kl(l), a & 512 && (Tl || u === null || Mt(u, u.return)), a & 64 && Zt && (l = l.updateQueue, l !== null && (a = l.callbacks, a !== null && (u = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = u === null ? a : u.concat(a))));
        break;
      case 26:
        var e = zt;
        if (Ll(t, l), Kl(l), a & 512 && (Tl || u === null || Mt(u, u.return)), a & 4) {
          var n = u !== null ? u.memoizedState : null;
          if (a = l.memoizedState, u === null)
            if (a === null)
              if (l.stateNode === null) {
                l: {
                  a = l.type, u = l.memoizedProps, e = e.ownerDocument || e;
                  t: switch (a) {
                    case "title":
                      n = e.getElementsByTagName("title")[0], (!n || n[Na] || n[Dl] || n.namespaceURI === "http://www.w3.org/2000/svg" || n.hasAttribute("itemprop")) && (n = e.createElement(a), e.head.insertBefore(
                        n,
                        e.querySelector("head > title")
                      )), Hl(n, a, u), n[Dl] = l, rl(n), a = n;
                      break l;
                    case "link":
                      var f = Iy(
                        "link",
                        "href",
                        e
                      ).get(a + (u.href || ""));
                      if (f) {
                        for (var c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("href") === (u.href == null || u.href === "" ? null : u.href) && n.getAttribute("rel") === (u.rel == null ? null : u.rel) && n.getAttribute("title") === (u.title == null ? null : u.title) && n.getAttribute("crossorigin") === (u.crossOrigin == null ? null : u.crossOrigin)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    case "meta":
                      if (f = Iy(
                        "meta",
                        "content",
                        e
                      ).get(a + (u.content || ""))) {
                        for (c = 0; c < f.length; c++)
                          if (n = f[c], n.getAttribute("content") === (u.content == null ? null : "" + u.content) && n.getAttribute("name") === (u.name == null ? null : u.name) && n.getAttribute("property") === (u.property == null ? null : u.property) && n.getAttribute("http-equiv") === (u.httpEquiv == null ? null : u.httpEquiv) && n.getAttribute("charset") === (u.charSet == null ? null : u.charSet)) {
                            f.splice(c, 1);
                            break t;
                          }
                      }
                      n = e.createElement(a), Hl(n, a, u), e.head.appendChild(n);
                      break;
                    default:
                      throw Error(h(468, a));
                  }
                  n[Dl] = l, rl(n), a = n;
                }
                l.stateNode = a;
              } else
                Py(
                  e,
                  l.type,
                  l.stateNode
                );
            else
              l.stateNode = ky(
                e,
                a,
                l.memoizedProps
              );
          else
            n !== a ? (n === null ? u.stateNode !== null && (u = u.stateNode, u.parentNode.removeChild(u)) : n.count--, a === null ? Py(
              e,
              l.type,
              l.stateNode
            ) : ky(
              e,
              a,
              l.memoizedProps
            )) : a === null && l.stateNode !== null && zc(
              l,
              l.memoizedProps,
              u.memoizedProps
            );
        }
        break;
      case 27:
        Ll(t, l), Kl(l), a & 512 && (Tl || u === null || Mt(u, u.return)), u !== null && a & 4 && zc(
          l,
          l.memoizedProps,
          u.memoizedProps
        );
        break;
      case 5:
        if (Ll(t, l), Kl(l), a & 512 && (Tl || u === null || Mt(u, u.return)), l.flags & 32) {
          e = l.stateNode;
          try {
            Wu(e, "");
          } catch (M) {
            P(l, l.return, M);
          }
        }
        a & 4 && l.stateNode != null && (e = l.memoizedProps, zc(
          l,
          e,
          u !== null ? u.memoizedProps : e
        )), a & 1024 && (Ac = !0);
        break;
      case 6:
        if (Ll(t, l), Kl(l), a & 4) {
          if (l.stateNode === null)
            throw Error(h(162));
          a = l.memoizedProps, u = l.stateNode;
          try {
            u.nodeValue = a;
          } catch (M) {
            P(l, l.return, M);
          }
        }
        break;
      case 3:
        if (pn = null, e = zt, zt = Dn(t.containerInfo), Ll(t, l), zt = e, Kl(l), a & 4 && u !== null && u.memoizedState.isDehydrated)
          try {
            Oa(t.containerInfo);
          } catch (M) {
            P(l, l.return, M);
          }
        Ac && (Ac = !1, Pv(l));
        break;
      case 4:
        a = zt, zt = Dn(
          l.stateNode.containerInfo
        ), Ll(t, l), Kl(l), zt = a;
        break;
      case 12:
        Ll(t, l), Kl(l);
        break;
      case 31:
        Ll(t, l), Kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, mn(l, a)));
        break;
      case 13:
        Ll(t, l), Kl(l), l.child.flags & 8192 && l.memoizedState !== null != (u !== null && u.memoizedState !== null) && (on = Fl()), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, mn(l, a)));
        break;
      case 22:
        e = l.memoizedState !== null;
        var i = u !== null && u.memoizedState !== null, m = Zt, g = Tl;
        if (Zt = m || e, Tl = g || i, Ll(t, l), Tl = g, Zt = m, Kl(l), a & 8192)
          l: for (t = l.stateNode, t._visibility = e ? t._visibility & -2 : t._visibility | 1, e && (u === null || i || Zt || Tl || Xu(l)), u = null, t = l; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (u === null) {
                i = u = t;
                try {
                  if (n = i.stateNode, e)
                    f = n.style, typeof f.setProperty == "function" ? f.setProperty("display", "none", "important") : f.display = "none";
                  else {
                    c = i.stateNode;
                    var T = i.memoizedProps.style, o = T != null && T.hasOwnProperty("display") ? T.display : null;
                    c.style.display = o == null || typeof o == "boolean" ? "" : ("" + o).trim();
                  }
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if (t.tag === 6) {
              if (u === null) {
                i = t;
                try {
                  i.stateNode.nodeValue = e ? "" : i.memoizedProps;
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if (t.tag === 18) {
              if (u === null) {
                i = t;
                try {
                  var S = i.stateNode;
                  e ? xy(S, !0) : xy(i.stateNode, !1);
                } catch (M) {
                  P(i, i.return, M);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === l) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              u === t && (u = null), t = t.return;
            }
            u === t && (u = null), t.sibling.return = t.return, t = t.sibling;
          }
        a & 4 && (a = l.updateQueue, a !== null && (u = a.retryQueue, u !== null && (a.retryQueue = null, mn(l, u))));
        break;
      case 19:
        Ll(t, l), Kl(l), a & 4 && (a = l.updateQueue, a !== null && (l.updateQueue = null, mn(l, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ll(t, l), Kl(l);
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var u, a = l.return; a !== null; ) {
          if (Lv(a)) {
            u = a;
            break;
          }
          a = a.return;
        }
        if (u == null) throw Error(h(160));
        switch (u.tag) {
          case 27:
            var e = u.stateNode, n = Tc(l);
            sn(l, n, e);
            break;
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (Wu(f, ""), u.flags &= -33);
            var c = Tc(l);
            sn(l, c, f);
            break;
          case 3:
          case 4:
            var i = u.stateNode.containerInfo, m = Tc(l);
            Ec(
              l,
              m,
              i
            );
            break;
          default:
            throw Error(h(161));
        }
      } catch (g) {
        P(l, l.return, g);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function Pv(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        Pv(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), l = l.sibling;
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        wv(l, t.alternate, t), t = t.sibling;
  }
  function Xu(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          cu(4, t, t.return), Xu(t);
          break;
        case 1:
          Mt(t, t.return);
          var u = t.stateNode;
          typeof u.componentWillUnmount == "function" && xv(
            t,
            t.return,
            u
          ), Xu(t);
          break;
        case 27:
          se(t.stateNode);
        case 26:
        case 5:
          Mt(t, t.return), Xu(t);
          break;
        case 22:
          t.memoizedState === null && Xu(t);
          break;
        case 30:
          Xu(t);
          break;
        default:
          Xu(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, u) {
    for (u = u && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate, e = l, n = t, f = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Lt(
            e,
            n,
            u
          ), ue(4, n);
          break;
        case 1:
          if (Lt(
            e,
            n,
            u
          ), a = n, e = a.stateNode, typeof e.componentDidMount == "function")
            try {
              e.componentDidMount();
            } catch (m) {
              P(a, a.return, m);
            }
          if (a = n, e = a.updateQueue, e !== null) {
            var c = a.stateNode;
            try {
              var i = e.shared.hiddenCallbacks;
              if (i !== null)
                for (e.shared.hiddenCallbacks = null, e = 0; e < i.length; e++)
                  N0(i[e], c);
            } catch (m) {
              P(a, a.return, m);
            }
          }
          u && f & 64 && Zv(n), ae(n, n.return);
          break;
        case 27:
          Kv(n);
        case 26:
        case 5:
          Lt(
            e,
            n,
            u
          ), u && a === null && f & 4 && Vv(n), ae(n, n.return);
          break;
        case 12:
          Lt(
            e,
            n,
            u
          );
          break;
        case 31:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && Fv(e, n);
          break;
        case 13:
          Lt(
            e,
            n,
            u
          ), u && f & 4 && kv(e, n);
          break;
        case 22:
          n.memoizedState === null && Lt(
            e,
            n,
            u
          ), ae(n, n.return);
          break;
        case 30:
          break;
        default:
          Lt(
            e,
            n,
            u
          );
      }
      t = t.sibling;
    }
  }
  function _c(l, t) {
    var u = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== u && (l != null && l.refCount++, u != null && Va(u));
  }
  function rc(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l));
  }
  function Tt(l, t, u, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        ly(
          l,
          t,
          u,
          a
        ), t = t.sibling;
  }
  function ly(l, t, u, a) {
    var e = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && ue(9, t);
        break;
      case 1:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 3:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && (l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Va(l)));
        break;
      case 12:
        if (e & 2048) {
          Tt(
            l,
            t,
            u,
            a
          ), l = t.stateNode;
          try {
            var n = t.memoizedProps, f = n.id, c = n.onPostCommit;
            typeof c == "function" && c(
              f,
              t.alternate === null ? "mount" : "update",
              l.passiveEffectDuration,
              -0
            );
          } catch (i) {
            P(t, t.return, i);
          }
        } else
          Tt(
            l,
            t,
            u,
            a
          );
        break;
      case 31:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 13:
        Tt(
          l,
          t,
          u,
          a
        );
        break;
      case 23:
        break;
      case 22:
        n = t.stateNode, f = t.alternate, t.memoizedState !== null ? n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : ee(l, t) : n._visibility & 2 ? Tt(
          l,
          t,
          u,
          a
        ) : (n._visibility |= 2, ha(
          l,
          t,
          u,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), e & 2048 && _c(f, t);
        break;
      case 24:
        Tt(
          l,
          t,
          u,
          a
        ), e & 2048 && rc(t.alternate, t);
        break;
      default:
        Tt(
          l,
          t,
          u,
          a
        );
    }
  }
  function ha(l, t, u, a, e) {
    for (e = e && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, f = t, c = u, i = a, m = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ha(
            n,
            f,
            c,
            i,
            e
          ), ue(8, f);
          break;
        case 23:
          break;
        case 22:
          var g = f.stateNode;
          f.memoizedState !== null ? g._visibility & 2 ? ha(
            n,
            f,
            c,
            i,
            e
          ) : ee(
            n,
            f
          ) : (g._visibility |= 2, ha(
            n,
            f,
            c,
            i,
            e
          )), e && m & 2048 && _c(
            f.alternate,
            f
          );
          break;
        case 24:
          ha(
            n,
            f,
            c,
            i,
            e
          ), e && m & 2048 && rc(f.alternate, f);
          break;
        default:
          ha(
            n,
            f,
            c,
            i,
            e
          );
      }
      t = t.sibling;
    }
  }
  function ee(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var u = l, a = t, e = a.flags;
        switch (a.tag) {
          case 22:
            ee(u, a), e & 2048 && _c(
              a.alternate,
              a
            );
            break;
          case 24:
            ee(u, a), e & 2048 && rc(a.alternate, a);
            break;
          default:
            ee(u, a);
        }
        t = t.sibling;
      }
  }
  var ne = 8192;
  function oa(l, t, u) {
    if (l.subtreeFlags & ne)
      for (l = l.child; l !== null; )
        ty(
          l,
          t,
          u
        ), l = l.sibling;
  }
  function ty(l, t, u) {
    switch (l.tag) {
      case 26:
        oa(
          l,
          t,
          u
        ), l.flags & ne && l.memoizedState !== null && Gm(
          u,
          zt,
          l.memoizedState,
          l.memoizedProps
        );
        break;
      case 5:
        oa(
          l,
          t,
          u
        );
        break;
      case 3:
      case 4:
        var a = zt;
        zt = Dn(l.stateNode.containerInfo), oa(
          l,
          t,
          u
        ), zt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ne, ne = 16777216, oa(
          l,
          t,
          u
        ), ne = a) : oa(
          l,
          t,
          u
        ));
        break;
      default:
        oa(
          l,
          t,
          u
        );
    }
  }
  function uy(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function fe(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, ey(
            a,
            l
          );
        }
      uy(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        ay(l), l = l.sibling;
  }
  function ay(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        fe(l), l.flags & 2048 && cu(9, l, l.return);
        break;
      case 3:
        fe(l);
        break;
      case 12:
        fe(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, hn(l)) : fe(l);
        break;
      default:
        fe(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var u = 0; u < t.length; u++) {
          var a = t[u];
          Ol = a, ey(
            a,
            l
          );
        }
      uy(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, t, t.return), hn(t);
          break;
        case 22:
          u = t.stateNode, u._visibility & 2 && (u._visibility &= -3, hn(t));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ey(l, t) {
    for (; Ol !== null; ) {
      var u = Ol;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          cu(8, u, t);
          break;
        case 23:
        case 22:
          if (u.memoizedState !== null && u.memoizedState.cachePool !== null) {
            var a = u.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Va(u.memoizedState.cache);
      }
      if (a = u.child, a !== null) a.return = u, Ol = a;
      else
        l: for (u = l; Ol !== null; ) {
          a = Ol;
          var e = a.sibling, n = a.return;
          if (Wv(a), a === u) {
            Ol = null;
            break l;
          }
          if (e !== null) {
            e.return = n, Ol = e;
            break l;
          }
          Ol = n;
        }
    }
  }
  var Ps = {
    getCacheForType: function(l) {
      var t = pl(gl), u = t.data.get(l);
      return u === void 0 && (u = l(), t.data.set(l, u)), u;
    },
    cacheSignal: function() {
      return pl(gl).controller.signal;
    }
  }, lm = typeof WeakMap == "function" ? WeakMap : Map, $ = 0, fl = null, Z = null, V = 0, I = 0, at = null, iu = !1, Sa = !1, Oc = !1, Kt = 0, ml = 0, vu = 0, Qu = 0, Mc = 0, et = 0, ga = 0, ce = null, Jl = null, Dc = !1, on = 0, ny = 0, Sn = 1 / 0, gn = null, yu = null, El = 0, du = null, ba = null, Jt = 0, Uc = 0, pc = null, fy = null, ie = 0, Nc = null;
  function nt() {
    return ($ & 2) !== 0 && V !== 0 ? V & -V : b.T !== null ? Bc() : Ai();
  }
  function cy() {
    if (et === 0)
      if ((V & 536870912) === 0 || J) {
        var l = re;
        re <<= 1, (re & 3932160) === 0 && (re = 262144), et = l;
      } else et = 536870912;
    return l = tt.current, l !== null && (l.flags |= 32), et;
  }
  function wl(l, t, u) {
    (l === fl && (I === 2 || I === 9) || l.cancelPendingCommit !== null) && (za(l, 0), su(
      l,
      V,
      et,
      !1
    )), pa(l, u), (($ & 2) === 0 || l !== fl) && (l === fl && (($ & 2) === 0 && (Qu |= u), ml === 4 && su(
      l,
      V,
      et,
      !1
    )), Dt(l));
  }
  function iy(l, t, u) {
    if (($ & 6) !== 0) throw Error(h(327));
    var a = !u && (t & 127) === 0 && (t & l.expiredLanes) === 0 || Ua(l, t), e = a ? am(l, t) : Rc(l, t, !0), n = a;
    do {
      if (e === 0) {
        Sa && !a && su(l, t, 0, !1);
        break;
      } else {
        if (u = l.current.alternate, n && !tm(u)) {
          e = Rc(l, t, !1), n = !1;
          continue;
        }
        if (e === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var f = 0;
          else
            f = l.pendingLanes & -536870913, f = f !== 0 ? f : f & 536870912 ? 536870912 : 0;
          if (f !== 0) {
            t = f;
            l: {
              var c = l;
              e = ce;
              var i = c.current.memoizedState.isDehydrated;
              if (i && (za(c, f).flags |= 256), f = Rc(
                c,
                f,
                !1
              ), f !== 2) {
                if (Oc && !i) {
                  c.errorRecoveryDisabledLanes |= n, Qu |= n, e = 4;
                  break l;
                }
                n = Jl, Jl = e, n !== null && (Jl === null ? Jl = n : Jl.push.apply(
                  Jl,
                  n
                ));
              }
              e = f;
            }
            if (n = !1, e !== 2) continue;
          }
        }
        if (e === 1) {
          za(l, 0), su(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = e, n) {
            case 0:
            case 1:
              throw Error(h(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              su(
                a,
                t,
                et,
                !iu
              );
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(h(329));
          }
          if ((t & 62914560) === t && (e = on + 300 - Fl(), 10 < e)) {
            if (su(
              a,
              t,
              et,
              !iu
            ), Me(a, 0, !0) !== 0) break l;
            Jt = t, a.timeoutHandle = Xy(
              vy.bind(
                null,
                a,
                u,
                Jl,
                gn,
                Dc,
                t,
                et,
                Qu,
                ga,
                iu,
                n,
                "Throttled",
                -0,
                0
              ),
              e
            );
            break l;
          }
          vy(
            a,
            u,
            Jl,
            gn,
            Dc,
            t,
            et,
            Qu,
            ga,
            iu,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dt(l);
  }
  function vy(l, t, u, a, e, n, f, c, i, m, g, T, o, S) {
    if (l.timeoutHandle = -1, T = t.subtreeFlags, T & 8192 || (T & 16785408) === 16785408) {
      T = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: Ht
      }, ty(
        t,
        n,
        T
      );
      var M = (n & 62914560) === n ? on - Fl() : (n & 4194048) === n ? ny - Fl() : 0;
      if (M = Xm(
        T,
        M
      ), M !== null) {
        Jt = n, l.cancelPendingCommit = M(
          gy.bind(
            null,
            l,
            t,
            n,
            u,
            a,
            e,
            f,
            c,
            i,
            g,
            T,
            null,
            o,
            S
          )
        ), su(l, n, f, !m);
        return;
      }
    }
    gy(
      l,
      t,
      n,
      u,
      a,
      e,
      f,
      c,
      i
    );
  }
  function tm(l) {
    for (var t = l; ; ) {
      var u = t.tag;
      if ((u === 0 || u === 11 || u === 15) && t.flags & 16384 && (u = t.updateQueue, u !== null && (u = u.stores, u !== null)))
        for (var a = 0; a < u.length; a++) {
          var e = u[a], n = e.getSnapshot;
          e = e.value;
          try {
            if (!Pl(n(), e)) return !1;
          } catch {
            return !1;
          }
        }
      if (u = t.child, t.subtreeFlags & 16384 && u !== null)
        u.return = t, t = u;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function su(l, t, u, a) {
    t &= ~Mc, t &= ~Qu, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var e = t; 0 < e; ) {
      var n = 31 - Il(e), f = 1 << n;
      a[n] = -1, e &= ~f;
    }
    u !== 0 && zi(l, u, t);
  }
  function bn() {
    return ($ & 6) === 0 ? (ve(0), !1) : !0;
  }
  function Hc() {
    if (Z !== null) {
      if (I === 0)
        var l = Z.return;
      else
        l = Z, Yt = Hu = null, wf(l), va = null, Ka = 0, l = Z;
      for (; l !== null; )
        Qv(l.alternate, l), l = l.return;
      Z = null;
    }
  }
  function za(l, t) {
    var u = l.timeoutHandle;
    u !== -1 && (l.timeoutHandle = -1, Em(u)), u = l.cancelPendingCommit, u !== null && (l.cancelPendingCommit = null, u()), Jt = 0, Hc(), fl = l, Z = u = qt(l.current, null), V = t, I = 0, at = null, iu = !1, Sa = Ua(l, t), Oc = !1, ga = et = Mc = Qu = vu = ml = 0, Jl = ce = null, Dc = !1, (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - Il(a), n = 1 << e;
        t |= l[e], a &= ~n;
      }
    return Kt = t, Ge(), u;
  }
  function yy(l, t) {
    B = null, b.H = Pa, t === ia || t === Je ? (t = M0(), I = 3) : t === Yf ? (t = M0(), I = 4) : I = t === vc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, at = t, Z === null && (ml = 1, fn(
      l,
      yt(t, l.current)
    ));
  }
  function dy() {
    var l = tt.current;
    return l === null ? !0 : (V & 4194048) === V ? ht === null : (V & 62914560) === V || (V & 536870912) !== 0 ? l === ht : !1;
  }
  function sy() {
    var l = b.H;
    return b.H = Pa, l === null ? Pa : l;
  }
  function my() {
    var l = b.A;
    return b.A = Ps, l;
  }
  function zn() {
    ml = 4, iu || (V & 4194048) !== V && tt.current !== null || (Sa = !0), (vu & 134217727) === 0 && (Qu & 134217727) === 0 || fl === null || su(
      fl,
      V,
      et,
      !1
    );
  }
  function Rc(l, t, u) {
    var a = $;
    $ |= 2;
    var e = sy(), n = my();
    (fl !== l || V !== t) && (gn = null, za(l, t)), t = !1;
    var f = ml;
    l: do
      try {
        if (I !== 0 && Z !== null) {
          var c = Z, i = at;
          switch (I) {
            case 8:
              Hc(), f = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var m = I;
              if (I = 0, at = null, Ta(l, c, i, m), u && Sa) {
                f = 0;
                break l;
              }
              break;
            default:
              m = I, I = 0, at = null, Ta(l, c, i, m);
          }
        }
        um(), f = ml;
        break;
      } catch (g) {
        yy(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, Yt = Hu = null, $ = a, b.H = e, b.A = n, Z === null && (fl = null, V = 0, Ge()), f;
  }
  function um() {
    for (; Z !== null; ) hy(Z);
  }
  function am(l, t) {
    var u = $;
    $ |= 2;
    var a = sy(), e = my();
    fl !== l || V !== t ? (gn = null, Sn = Fl() + 500, za(l, t)) : Sa = Ua(
      l,
      t
    );
    l: do
      try {
        if (I !== 0 && Z !== null) {
          t = Z;
          var n = at;
          t: switch (I) {
            case 1:
              I = 0, at = null, Ta(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (r0(n)) {
                I = 0, at = null, oy(t);
                break;
              }
              t = function() {
                I !== 2 && I !== 9 || fl !== l || (I = 7), Dt(l);
              }, n.then(t, t);
              break l;
            case 3:
              I = 7;
              break l;
            case 4:
              I = 5;
              break l;
            case 7:
              r0(n) ? (I = 0, at = null, oy(t)) : (I = 0, at = null, Ta(l, t, n, 7));
              break;
            case 5:
              var f = null;
              switch (Z.tag) {
                case 26:
                  f = Z.memoizedState;
                case 5:
                case 27:
                  var c = Z;
                  if (f ? ld(f) : c.stateNode.complete) {
                    I = 0, at = null;
                    var i = c.sibling;
                    if (i !== null) Z = i;
                    else {
                      var m = c.return;
                      m !== null ? (Z = m, Tn(m)) : Z = null;
                    }
                    break t;
                  }
              }
              I = 0, at = null, Ta(l, t, n, 5);
              break;
            case 6:
              I = 0, at = null, Ta(l, t, n, 6);
              break;
            case 8:
              Hc(), ml = 6;
              break l;
            default:
              throw Error(h(462));
          }
        }
        em();
        break;
      } catch (g) {
        yy(l, g);
      }
    while (!0);
    return Yt = Hu = null, b.H = a, b.A = e, $ = u, Z !== null ? 0 : (fl = null, V = 0, Ge(), ml);
  }
  function em() {
    for (; Z !== null && !Dd(); )
      hy(Z);
  }
  function hy(l) {
    var t = Gv(l.alternate, l, Kt);
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : Z = t;
  }
  function oy(l) {
    var t = l, u = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Rv(
          u,
          t,
          t.pendingProps,
          t.type,
          void 0,
          V
        );
        break;
      case 11:
        t = Rv(
          u,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          V
        );
        break;
      case 5:
        wf(t);
      default:
        Qv(u, t), t = Z = m0(t, Kt), t = Gv(u, t, Kt);
    }
    l.memoizedProps = l.pendingProps, t === null ? Tn(l) : Z = t;
  }
  function Ta(l, t, u, a) {
    Yt = Hu = null, wf(t), va = null, Ka = 0;
    var e = t.return;
    try {
      if (Js(
        l,
        e,
        t,
        u,
        V
      )) {
        ml = 1, fn(
          l,
          yt(u, l.current)
        ), Z = null;
        return;
      }
    } catch (n) {
      if (e !== null) throw Z = e, n;
      ml = 1, fn(
        l,
        yt(u, l.current)
      ), Z = null;
      return;
    }
    t.flags & 32768 ? (J || a === 1 ? l = !0 : Sa || (V & 536870912) !== 0 ? l = !1 : (iu = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = tt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), Sy(t, l)) : Tn(t);
  }
  function Tn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        Sy(
          t,
          iu
        );
        return;
      }
      l = t.return;
      var u = $s(
        t.alternate,
        t,
        Kt
      );
      if (u !== null) {
        Z = u;
        return;
      }
      if (t = t.sibling, t !== null) {
        Z = t;
        return;
      }
      Z = t = l;
    } while (t !== null);
    ml === 0 && (ml = 5);
  }
  function Sy(l, t) {
    do {
      var u = Fs(l.alternate, l);
      if (u !== null) {
        u.flags &= 32767, Z = u;
        return;
      }
      if (u = l.return, u !== null && (u.flags |= 32768, u.subtreeFlags = 0, u.deletions = null), !t && (l = l.sibling, l !== null)) {
        Z = l;
        return;
      }
      Z = l = u;
    } while (l !== null);
    ml = 6, Z = null;
  }
  function gy(l, t, u, a, e, n, f, c, i) {
    l.cancelPendingCommit = null;
    do
      En();
    while (El !== 0);
    if (($ & 6) !== 0) throw Error(h(327));
    if (t !== null) {
      if (t === l.current) throw Error(h(177));
      if (n = t.lanes | t.childLanes, n |= Tf, jd(
        l,
        u,
        n,
        f,
        c,
        i
      ), l === fl && (Z = fl = null, V = 0), ba = t, du = l, Jt = u, Uc = n, pc = e, fy = a, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, im(Ae, function() {
        return Ay(), null;
      })) : (l.callbackNode = null, l.callbackPriority = 0), a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
        a = b.T, b.T = null, e = r.p, r.p = 2, f = $, $ |= 4;
        try {
          ks(l, t, u);
        } finally {
          $ = f, r.p = e, b.T = a;
        }
      }
      El = 1, by(), zy(), Ty();
    }
  }
  function by() {
    if (El === 1) {
      El = 0;
      var l = du, t = ba, u = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || u) {
        u = b.T, b.T = null;
        var a = r.p;
        r.p = 2;
        var e = $;
        $ |= 4;
        try {
          Iv(t, l);
          var n = Lc, f = e0(l.containerInfo), c = n.focusedElem, i = n.selectionRange;
          if (f !== c && c && c.ownerDocument && a0(
            c.ownerDocument.documentElement,
            c
          )) {
            if (i !== null && of(c)) {
              var m = i.start, g = i.end;
              if (g === void 0 && (g = m), "selectionStart" in c)
                c.selectionStart = m, c.selectionEnd = Math.min(
                  g,
                  c.value.length
                );
              else {
                var T = c.ownerDocument || document, o = T && T.defaultView || window;
                if (o.getSelection) {
                  var S = o.getSelection(), M = c.textContent.length, H = Math.min(i.start, M), el = i.end === void 0 ? H : Math.min(i.end, M);
                  !S.extend && H > el && (f = el, el = H, H = f);
                  var d = u0(
                    c,
                    H
                  ), v = u0(
                    c,
                    el
                  );
                  if (d && v && (S.rangeCount !== 1 || S.anchorNode !== d.node || S.anchorOffset !== d.offset || S.focusNode !== v.node || S.focusOffset !== v.offset)) {
                    var s = T.createRange();
                    s.setStart(d.node, d.offset), S.removeAllRanges(), H > el ? (S.addRange(s), S.extend(v.node, v.offset)) : (s.setEnd(v.node, v.offset), S.addRange(s));
                  }
                }
              }
            }
            for (T = [], S = c; S = S.parentNode; )
              S.nodeType === 1 && T.push({
                element: S,
                left: S.scrollLeft,
                top: S.scrollTop
              });
            for (typeof c.focus == "function" && c.focus(), c = 0; c < T.length; c++) {
              var z = T[c];
              z.element.scrollLeft = z.left, z.element.scrollTop = z.top;
            }
          }
          qn = !!Vc, Lc = Vc = null;
        } finally {
          $ = e, r.p = a, b.T = u;
        }
      }
      l.current = t, El = 2;
    }
  }
  function zy() {
    if (El === 2) {
      El = 0;
      var l = du, t = ba, u = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || u) {
        u = b.T, b.T = null;
        var a = r.p;
        r.p = 2;
        var e = $;
        $ |= 4;
        try {
          wv(l, t.alternate, t);
        } finally {
          $ = e, r.p = a, b.T = u;
        }
      }
      El = 3;
    }
  }
  function Ty() {
    if (El === 4 || El === 3) {
      El = 0, Ud();
      var l = du, t = ba, u = Jt, a = fy;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? El = 5 : (El = 0, ba = du = null, Ey(l, l.pendingLanes));
      var e = l.pendingLanes;
      if (e === 0 && (yu = null), $n(u), t = t.stateNode, kl && typeof kl.onCommitFiberRoot == "function")
        try {
          kl.onCommitFiberRoot(
            Da,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        t = b.T, e = r.p, r.p = 2, b.T = null;
        try {
          for (var n = l.onRecoverableError, f = 0; f < a.length; f++) {
            var c = a[f];
            n(c.value, {
              componentStack: c.stack
            });
          }
        } finally {
          b.T = t, r.p = e;
        }
      }
      (Jt & 3) !== 0 && En(), Dt(l), e = l.pendingLanes, (u & 261930) !== 0 && (e & 42) !== 0 ? l === Nc ? ie++ : (ie = 0, Nc = l) : ie = 0, ve(0);
    }
  }
  function Ey(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Va(t)));
  }
  function En() {
    return by(), zy(), Ty(), Ay();
  }
  function Ay() {
    if (El !== 5) return !1;
    var l = du, t = Uc;
    Uc = 0;
    var u = $n(Jt), a = b.T, e = r.p;
    try {
      r.p = 32 > u ? 32 : u, b.T = null, u = pc, pc = null;
      var n = du, f = Jt;
      if (El = 0, ba = du = null, Jt = 0, ($ & 6) !== 0) throw Error(h(331));
      var c = $;
      if ($ |= 4, ay(n.current), ly(
        n,
        n.current,
        f,
        u
      ), $ = c, ve(0, !1), kl && typeof kl.onPostCommitFiberRoot == "function")
        try {
          kl.onPostCommitFiberRoot(Da, n);
        } catch {
        }
      return !0;
    } finally {
      r.p = e, b.T = a, Ey(l, t);
    }
  }
  function _y(l, t, u) {
    t = yt(u, t), t = ic(l.stateNode, t, 2), l = eu(l, t, 2), l !== null && (pa(l, 2), Dt(l));
  }
  function P(l, t, u) {
    if (l.tag === 3)
      _y(l, l, u);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          _y(
            t,
            l,
            u
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (yu === null || !yu.has(a))) {
            l = yt(u, l), u = rv(2), a = eu(t, u, 2), a !== null && (Ov(
              u,
              a,
              t,
              l
            ), pa(a, 2), Dt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function qc(l, t, u) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new lm();
      var e = /* @__PURE__ */ new Set();
      a.set(t, e);
    } else
      e = a.get(t), e === void 0 && (e = /* @__PURE__ */ new Set(), a.set(t, e));
    e.has(u) || (Oc = !0, e.add(u), l = nm.bind(null, l, t, u), t.then(l, l));
  }
  function nm(l, t, u) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & u, l.warmLanes &= ~u, fl === l && (V & u) === u && (ml === 4 || ml === 3 && (V & 62914560) === V && 300 > Fl() - on ? ($ & 2) === 0 && za(l, 0) : Mc |= u, ga === V && (ga = 0)), Dt(l);
  }
  function ry(l, t) {
    t === 0 && (t = bi()), l = Uu(l, t), l !== null && (pa(l, t), Dt(l));
  }
  function fm(l) {
    var t = l.memoizedState, u = 0;
    t !== null && (u = t.retryLane), ry(l, u);
  }
  function cm(l, t) {
    var u = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, e = l.memoizedState;
        e !== null && (u = e.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(h(314));
    }
    a !== null && a.delete(t), ry(l, u);
  }
  function im(l, t) {
    return Kn(l, t);
  }
  var An = null, Ea = null, Cc = !1, _n = !1, Yc = !1, mu = 0;
  function Dt(l) {
    l !== Ea && l.next === null && (Ea === null ? An = Ea = l : Ea = Ea.next = l), _n = !0, Cc || (Cc = !0, ym());
  }
  function ve(l, t) {
    if (!Yc && _n) {
      Yc = !0;
      do
        for (var u = !1, a = An; a !== null; ) {
          if (l !== 0) {
            var e = a.pendingLanes;
            if (e === 0) var n = 0;
            else {
              var f = a.suspendedLanes, c = a.pingedLanes;
              n = (1 << 31 - Il(42 | l) + 1) - 1, n &= e & ~(f & ~c), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (u = !0, Uy(a, n));
          } else
            n = V, n = Me(
              a,
              a === fl ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || Ua(a, n) || (u = !0, Uy(a, n));
          a = a.next;
        }
      while (u);
      Yc = !1;
    }
  }
  function vm() {
    Oy();
  }
  function Oy() {
    _n = Cc = !1;
    var l = 0;
    mu !== 0 && Tm() && (l = mu);
    for (var t = Fl(), u = null, a = An; a !== null; ) {
      var e = a.next, n = My(a, t);
      n === 0 ? (a.next = null, u === null ? An = e : u.next = e, e === null && (Ea = u)) : (u = a, (l !== 0 || (n & 3) !== 0) && (_n = !0)), a = e;
    }
    El !== 0 && El !== 5 || ve(l), mu !== 0 && (mu = 0);
  }
  function My(l, t) {
    for (var u = l.suspendedLanes, a = l.pingedLanes, e = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var f = 31 - Il(n), c = 1 << f, i = e[f];
      i === -1 ? ((c & u) === 0 || (c & a) !== 0) && (e[f] = Bd(c, t)) : i <= t && (l.expiredLanes |= c), n &= ~c;
    }
    if (t = fl, u = V, u = Me(
      l,
      l === t ? u : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, u === 0 || l === t && (I === 2 || I === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jn(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((u & 3) === 0 || Ua(l, u)) {
      if (t = u & -u, t === l.callbackPriority) return t;
      switch (a !== null && Jn(a), $n(u)) {
        case 2:
        case 8:
          u = Si;
          break;
        case 32:
          u = Ae;
          break;
        case 268435456:
          u = gi;
          break;
        default:
          u = Ae;
      }
      return a = Dy.bind(null, l), u = Kn(u, a), l.callbackPriority = t, l.callbackNode = u, t;
    }
    return a !== null && a !== null && Jn(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function Dy(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var u = l.callbackNode;
    if (En() && l.callbackNode !== u)
      return null;
    var a = V;
    return a = Me(
      l,
      l === fl ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (iy(l, a, t), My(l, Fl()), l.callbackNode != null && l.callbackNode === u ? Dy.bind(null, l) : null);
  }
  function Uy(l, t) {
    if (En()) return null;
    iy(l, t, !0);
  }
  function ym() {
    Am(function() {
      ($ & 6) !== 0 ? Kn(
        oi,
        vm
      ) : Oy();
    });
  }
  function Bc() {
    if (mu === 0) {
      var l = fa;
      l === 0 && (l = _e, _e <<= 1, (_e & 261888) === 0 && (_e = 256)), mu = l;
    }
    return mu;
  }
  function py(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Ne("" + l);
  }
  function Ny(l, t) {
    var u = t.ownerDocument.createElement("input");
    return u.name = t.name, u.value = t.value, l.id && u.setAttribute("form", l.id), t.parentNode.insertBefore(u, t), l = new FormData(l), u.parentNode.removeChild(u), l;
  }
  function dm(l, t, u, a, e) {
    if (t === "submit" && u && u.stateNode === e) {
      var n = py(
        (e[Zl] || null).action
      ), f = a.submitter;
      f && (t = (t = f[Zl] || null) ? py(t.formAction) : f.getAttribute("formAction"), t !== null && (n = t, f = null));
      var c = new Ce(
        "action",
        "action",
        null,
        a,
        e
      );
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (mu !== 0) {
                  var i = f ? Ny(e, f) : new FormData(e);
                  uc(
                    u,
                    {
                      pending: !0,
                      data: i,
                      method: e.method,
                      action: n
                    },
                    null,
                    i
                  );
                }
              } else
                typeof n == "function" && (c.preventDefault(), i = f ? Ny(e, f) : new FormData(e), uc(
                  u,
                  {
                    pending: !0,
                    data: i,
                    method: e.method,
                    action: n
                  },
                  n,
                  i
                ));
            },
            currentTarget: e
          }
        ]
      });
    }
  }
  for (var jc = 0; jc < zf.length; jc++) {
    var Gc = zf[jc], sm = Gc.toLowerCase(), mm = Gc[0].toUpperCase() + Gc.slice(1);
    bt(
      sm,
      "on" + mm
    );
  }
  bt(c0, "onAnimationEnd"), bt(i0, "onAnimationIteration"), bt(v0, "onAnimationStart"), bt("dblclick", "onDoubleClick"), bt("focusin", "onFocus"), bt("focusout", "onBlur"), bt(ps, "onTransitionRun"), bt(Ns, "onTransitionStart"), bt(Hs, "onTransitionCancel"), bt(y0, "onTransitionEnd"), Ju("onMouseEnter", ["mouseout", "mouseover"]), Ju("onMouseLeave", ["mouseout", "mouseover"]), Ju("onPointerEnter", ["pointerout", "pointerover"]), Ju("onPointerLeave", ["pointerout", "pointerover"]), ru(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), ru(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), ru("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), ru(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), ru(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var ye = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), hm = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ye)
  );
  function Hy(l, t) {
    t = (t & 4) !== 0;
    for (var u = 0; u < l.length; u++) {
      var a = l[u], e = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var c = a[f], i = c.instance, m = c.currentTarget;
            if (c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              je(g);
            }
            e.currentTarget = null, n = i;
          }
        else
          for (f = 0; f < a.length; f++) {
            if (c = a[f], i = c.instance, m = c.currentTarget, c = c.listener, i !== n && e.isPropagationStopped())
              break l;
            n = c, e.currentTarget = m;
            try {
              n(e);
            } catch (g) {
              je(g);
            }
            e.currentTarget = null, n = i;
          }
      }
    }
  }
  function x(l, t) {
    var u = t[Fn];
    u === void 0 && (u = t[Fn] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    u.has(a) || (Ry(t, l, 2, !1), u.add(a));
  }
  function Xc(l, t, u) {
    var a = 0;
    t && (a |= 4), Ry(
      u,
      l,
      a,
      t
    );
  }
  var rn = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(l) {
    if (!l[rn]) {
      l[rn] = !0, Oi.forEach(function(u) {
        u !== "selectionchange" && (hm.has(u) || Xc(u, !1, l), Xc(u, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[rn] || (t[rn] = !0, Xc("selectionchange", !1, t));
    }
  }
  function Ry(l, t, u, a) {
    switch (cd(t)) {
      case 2:
        var e = xm;
        break;
      case 8:
        e = Vm;
        break;
      default:
        e = ti;
    }
    u = e.bind(
      null,
      t,
      u,
      l
    ), e = void 0, !nf || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (e = !0), a ? e !== void 0 ? l.addEventListener(t, u, {
      capture: !0,
      passive: e
    }) : l.addEventListener(t, u, !0) : e !== void 0 ? l.addEventListener(t, u, {
      passive: e
    }) : l.addEventListener(t, u, !1);
  }
  function Zc(l, t, u, a, e) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var c = a.stateNode.containerInfo;
          if (c === e) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var i = f.tag;
              if ((i === 3 || i === 4) && f.stateNode.containerInfo === e)
                return;
              f = f.return;
            }
          for (; c !== null; ) {
            if (f = Vu(c), f === null) return;
            if (i = f.tag, i === 5 || i === 6 || i === 26 || i === 27) {
              a = n = f;
              continue l;
            }
            c = c.parentNode;
          }
        }
        a = a.return;
      }
    ji(function() {
      var m = n, g = af(u), T = [];
      l: {
        var o = d0.get(l);
        if (o !== void 0) {
          var S = Ce, M = l;
          switch (l) {
            case "keypress":
              if (Re(u) === 0) break l;
            case "keydown":
            case "keyup":
              S = cs;
              break;
            case "focusin":
              M = "focus", S = yf;
              break;
            case "focusout":
              M = "blur", S = yf;
              break;
            case "beforeblur":
            case "afterblur":
              S = yf;
              break;
            case "click":
              if (u.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              S = Qi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              S = $d;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              S = ys;
              break;
            case c0:
            case i0:
            case v0:
              S = Id;
              break;
            case y0:
              S = ss;
              break;
            case "scroll":
            case "scrollend":
              S = wd;
              break;
            case "wheel":
              S = hs;
              break;
            case "copy":
            case "cut":
            case "paste":
              S = ls;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              S = xi;
              break;
            case "toggle":
            case "beforetoggle":
              S = Ss;
          }
          var H = (t & 4) !== 0, el = !H && (l === "scroll" || l === "scrollend"), d = H ? o !== null ? o + "Capture" : null : o;
          H = [];
          for (var v = m, s; v !== null; ) {
            var z = v;
            if (s = z.stateNode, z = z.tag, z !== 5 && z !== 26 && z !== 27 || s === null || d === null || (z = Ra(v, d), z != null && H.push(
              de(v, z, s)
            )), el) break;
            v = v.return;
          }
          0 < H.length && (o = new S(
            o,
            M,
            null,
            u,
            g
          ), T.push({ event: o, listeners: H }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (o = l === "mouseover" || l === "pointerover", S = l === "mouseout" || l === "pointerout", o && u !== uf && (M = u.relatedTarget || u.fromElement) && (Vu(M) || M[xu]))
            break l;
          if ((S || o) && (o = g.window === g ? g : (o = g.ownerDocument) ? o.defaultView || o.parentWindow : window, S ? (M = u.relatedTarget || u.toElement, S = m, M = M ? Vu(M) : null, M !== null && (el = cl(M), H = M.tag, M !== el || H !== 5 && H !== 27 && H !== 6) && (M = null)) : (S = null, M = m), S !== M)) {
            if (H = Qi, z = "onMouseLeave", d = "onMouseEnter", v = "mouse", (l === "pointerout" || l === "pointerover") && (H = xi, z = "onPointerLeave", d = "onPointerEnter", v = "pointer"), el = S == null ? o : Ha(S), s = M == null ? o : Ha(M), o = new H(
              z,
              v + "leave",
              S,
              u,
              g
            ), o.target = el, o.relatedTarget = s, z = null, Vu(g) === m && (H = new H(
              d,
              v + "enter",
              M,
              u,
              g
            ), H.target = s, H.relatedTarget = el, z = H), el = z, S && M)
              t: {
                for (H = om, d = S, v = M, s = 0, z = d; z; z = H(z))
                  s++;
                z = 0;
                for (var p = v; p; p = H(p))
                  z++;
                for (; 0 < s - z; )
                  d = H(d), s--;
                for (; 0 < z - s; )
                  v = H(v), z--;
                for (; s--; ) {
                  if (d === v || v !== null && d === v.alternate) {
                    H = d;
                    break t;
                  }
                  d = H(d), v = H(v);
                }
                H = null;
              }
            else H = null;
            S !== null && qy(
              T,
              o,
              S,
              H,
              !1
            ), M !== null && el !== null && qy(
              T,
              el,
              M,
              H,
              !0
            );
          }
        }
        l: {
          if (o = m ? Ha(m) : window, S = o.nodeName && o.nodeName.toLowerCase(), S === "select" || S === "input" && o.type === "file")
            var w = Fi;
          else if (Wi(o))
            if (ki)
              w = Ms;
            else {
              w = rs;
              var U = _s;
            }
          else
            S = o.nodeName, !S || S.toLowerCase() !== "input" || o.type !== "checkbox" && o.type !== "radio" ? m && tf(m.elementType) && (w = Fi) : w = Os;
          if (w && (w = w(l, m))) {
            $i(
              T,
              w,
              u,
              g
            );
            break l;
          }
          U && U(l, o, m), l === "focusout" && m && o.type === "number" && m.memoizedProps.value != null && lf(o, "number", o.value);
        }
        switch (U = m ? Ha(m) : window, l) {
          case "focusin":
            (Wi(U) || U.contentEditable === "true") && (Iu = U, Sf = m, Qa = null);
            break;
          case "focusout":
            Qa = Sf = Iu = null;
            break;
          case "mousedown":
            gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            gf = !1, n0(T, u, g);
            break;
          case "selectionchange":
            if (Us) break;
          case "keydown":
          case "keyup":
            n0(T, u, g);
        }
        var j;
        if (sf)
          l: {
            switch (l) {
              case "compositionstart":
                var L = "onCompositionStart";
                break l;
              case "compositionend":
                L = "onCompositionEnd";
                break l;
              case "compositionupdate":
                L = "onCompositionUpdate";
                break l;
            }
            L = void 0;
          }
        else
          ku ? Ji(l, u) && (L = "onCompositionEnd") : l === "keydown" && u.keyCode === 229 && (L = "onCompositionStart");
        L && (Vi && u.locale !== "ko" && (ku || L !== "onCompositionStart" ? L === "onCompositionEnd" && ku && (j = Gi()) : (kt = g, ff = "value" in kt ? kt.value : kt.textContent, ku = !0)), U = On(m, L), 0 < U.length && (L = new Zi(
          L,
          l,
          null,
          u,
          g
        ), T.push({ event: L, listeners: U }), j ? L.data = j : (j = wi(u), j !== null && (L.data = j)))), (j = bs ? zs(l, u) : Ts(l, u)) && (L = On(m, "onBeforeInput"), 0 < L.length && (U = new Zi(
          "onBeforeInput",
          "beforeinput",
          null,
          u,
          g
        ), T.push({
          event: U,
          listeners: L
        }), U.data = j)), dm(
          T,
          l,
          m,
          u,
          g
        );
      }
      Hy(T, t);
    });
  }
  function de(l, t, u) {
    return {
      instance: l,
      listener: t,
      currentTarget: u
    };
  }
  function On(l, t) {
    for (var u = t + "Capture", a = []; l !== null; ) {
      var e = l, n = e.stateNode;
      if (e = e.tag, e !== 5 && e !== 26 && e !== 27 || n === null || (e = Ra(l, u), e != null && a.unshift(
        de(l, e, n)
      ), e = Ra(l, t), e != null && a.push(
        de(l, e, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function om(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function qy(l, t, u, a, e) {
    for (var n = t._reactName, f = []; u !== null && u !== a; ) {
      var c = u, i = c.alternate, m = c.stateNode;
      if (c = c.tag, i !== null && i === a) break;
      c !== 5 && c !== 26 && c !== 27 || m === null || (i = m, e ? (m = Ra(u, n), m != null && f.unshift(
        de(u, m, i)
      )) : e || (m = Ra(u, n), m != null && f.push(
        de(u, m, i)
      ))), u = u.return;
    }
    f.length !== 0 && l.push({ event: t, listeners: f });
  }
  var Sm = /\r\n?/g, gm = /\u0000|\uFFFD/g;
  function Cy(l) {
    return (typeof l == "string" ? l : "" + l).replace(Sm, `
`).replace(gm, "");
  }
  function Yy(l, t) {
    return t = Cy(t), Cy(l) === t;
  }
  function al(l, t, u, a, e, n) {
    switch (u) {
      case "children":
        typeof a == "string" ? t === "body" || t === "textarea" && a === "" || Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && t !== "body" && Wu(l, "" + a);
        break;
      case "className":
        Ue(l, "class", a);
        break;
      case "tabIndex":
        Ue(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Ue(l, u, a);
        break;
      case "style":
        Yi(l, a, n);
        break;
      case "data":
        if (t !== "object") {
          Ue(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || u !== "href")) {
          l.removeAttribute(u);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            u,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (u === "formAction" ? (t !== "input" && al(l, t, "name", e.name, e, null), al(
            l,
            t,
            "formEncType",
            e.formEncType,
            e,
            null
          ), al(
            l,
            t,
            "formMethod",
            e.formMethod,
            e,
            null
          ), al(
            l,
            t,
            "formTarget",
            e.formTarget,
            e,
            null
          )) : (al(l, t, "encType", e.encType, e, null), al(l, t, "method", e.method, e, null), al(l, t, "target", e.target, e, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(u);
          break;
        }
        a = Ne("" + a), l.setAttribute(u, a);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        u = Ne("" + a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          u
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "" + a) : l.removeAttribute(u);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, "") : l.removeAttribute(u);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(u, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(u, a) : l.removeAttribute(u);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(u) : l.setAttribute(u, a);
        break;
      case "popover":
        x("beforetoggle", l), x("toggle", l), De(l, "popover", a);
        break;
      case "xlinkActuate":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Nt(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Nt(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        De(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < u.length) || u[0] !== "o" && u[0] !== "O" || u[1] !== "n" && u[1] !== "N") && (u = Kd.get(u) || u, De(l, u, a));
    }
  }
  function xc(l, t, u, a, e, n) {
    switch (u) {
      case "style":
        Yi(l, a, n);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(h(61));
          if (u = a.__html, u != null) {
            if (e.children != null) throw Error(h(60));
            l.innerHTML = u;
          }
        }
        break;
      case "children":
        typeof a == "string" ? Wu(l, a) : (typeof a == "number" || typeof a == "bigint") && Wu(l, "" + a);
        break;
      case "onScroll":
        a != null && x("scroll", l);
        break;
      case "onScrollEnd":
        a != null && x("scrollend", l);
        break;
      case "onClick":
        a != null && (l.onclick = Ht);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Mi.hasOwnProperty(u))
          l: {
            if (u[0] === "o" && u[1] === "n" && (e = u.endsWith("Capture"), t = u.slice(2, e ? u.length - 7 : void 0), n = l[Zl] || null, n = n != null ? n[u] : null, typeof n == "function" && l.removeEventListener(t, n, e), typeof a == "function")) {
              typeof n != "function" && n !== null && (u in l ? l[u] = null : l.hasAttribute(u) && l.removeAttribute(u)), l.addEventListener(t, a, e);
              break l;
            }
            u in l ? l[u] = a : a === !0 ? l.setAttribute(u, "") : De(l, u, a);
          }
    }
  }
  function Hl(l, t, u) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        x("error", l), x("load", l);
        var a = !1, e = !1, n;
        for (n in u)
          if (u.hasOwnProperty(n)) {
            var f = u[n];
            if (f != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  e = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(h(137, t));
                default:
                  al(l, t, n, f, u, null);
              }
          }
        e && al(l, t, "srcSet", u.srcSet, u, null), a && al(l, t, "src", u.src, u, null);
        return;
      case "input":
        x("invalid", l);
        var c = n = f = e = null, i = null, m = null;
        for (a in u)
          if (u.hasOwnProperty(a)) {
            var g = u[a];
            if (g != null)
              switch (a) {
                case "name":
                  e = g;
                  break;
                case "type":
                  f = g;
                  break;
                case "checked":
                  i = g;
                  break;
                case "defaultChecked":
                  m = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  c = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(h(137, t));
                  break;
                default:
                  al(l, t, a, g, u, null);
              }
          }
        Hi(
          l,
          n,
          c,
          i,
          m,
          f,
          e,
          !1
        );
        return;
      case "select":
        x("invalid", l), a = f = n = null;
        for (e in u)
          if (u.hasOwnProperty(e) && (c = u[e], c != null))
            switch (e) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                f = c;
                break;
              case "multiple":
                a = c;
              default:
                al(l, t, e, c, u, null);
            }
        t = n, u = f, l.multiple = !!a, t != null ? wu(l, !!a, t, !1) : u != null && wu(l, !!a, u, !0);
        return;
      case "textarea":
        x("invalid", l), n = e = a = null;
        for (f in u)
          if (u.hasOwnProperty(f) && (c = u[f], c != null))
            switch (f) {
              case "value":
                a = c;
                break;
              case "defaultValue":
                e = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(h(91));
                break;
              default:
                al(l, t, f, c, u, null);
            }
        qi(l, a, e, n);
        return;
      case "option":
        for (i in u)
          if (u.hasOwnProperty(i) && (a = u[i], a != null))
            switch (i) {
              case "selected":
                l.selected = a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                al(l, t, i, a, u, null);
            }
        return;
      case "dialog":
        x("beforetoggle", l), x("toggle", l), x("cancel", l), x("close", l);
        break;
      case "iframe":
      case "object":
        x("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < ye.length; a++)
          x(ye[a], l);
        break;
      case "image":
        x("error", l), x("load", l);
        break;
      case "details":
        x("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        x("error", l), x("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (m in u)
          if (u.hasOwnProperty(m) && (a = u[m], a != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(h(137, t));
              default:
                al(l, t, m, a, u, null);
            }
        return;
      default:
        if (tf(t)) {
          for (g in u)
            u.hasOwnProperty(g) && (a = u[g], a !== void 0 && xc(
              l,
              t,
              g,
              a,
              u,
              void 0
            ));
          return;
        }
    }
    for (c in u)
      u.hasOwnProperty(c) && (a = u[c], a != null && al(l, t, c, a, u, null));
  }
  function bm(l, t, u, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var e = null, n = null, f = null, c = null, i = null, m = null, g = null;
        for (S in u) {
          var T = u[S];
          if (u.hasOwnProperty(S) && T != null)
            switch (S) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                i = T;
              default:
                a.hasOwnProperty(S) || al(l, t, S, null, a, T);
            }
        }
        for (var o in a) {
          var S = a[o];
          if (T = u[o], a.hasOwnProperty(o) && (S != null || T != null))
            switch (o) {
              case "type":
                n = S;
                break;
              case "name":
                e = S;
                break;
              case "checked":
                m = S;
                break;
              case "defaultChecked":
                g = S;
                break;
              case "value":
                f = S;
                break;
              case "defaultValue":
                c = S;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(h(137, t));
                break;
              default:
                S !== T && al(
                  l,
                  t,
                  o,
                  S,
                  a,
                  T
                );
            }
        }
        Pn(
          l,
          f,
          c,
          i,
          m,
          g,
          n,
          e
        );
        return;
      case "select":
        S = f = c = o = null;
        for (n in u)
          if (i = u[n], u.hasOwnProperty(n) && i != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                S = i;
              default:
                a.hasOwnProperty(n) || al(
                  l,
                  t,
                  n,
                  null,
                  a,
                  i
                );
            }
        for (e in a)
          if (n = a[e], i = u[e], a.hasOwnProperty(e) && (n != null || i != null))
            switch (e) {
              case "value":
                o = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                f = n;
              default:
                n !== i && al(
                  l,
                  t,
                  e,
                  n,
                  a,
                  i
                );
            }
        t = c, u = f, a = S, o != null ? wu(l, !!u, o, !1) : !!a != !!u && (t != null ? wu(l, !!u, t, !0) : wu(l, !!u, u ? [] : "", !1));
        return;
      case "textarea":
        S = o = null;
        for (c in u)
          if (e = u[c], u.hasOwnProperty(c) && e != null && !a.hasOwnProperty(c))
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                al(l, t, c, null, a, e);
            }
        for (f in a)
          if (e = a[f], n = u[f], a.hasOwnProperty(f) && (e != null || n != null))
            switch (f) {
              case "value":
                o = e;
                break;
              case "defaultValue":
                S = e;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (e != null) throw Error(h(91));
                break;
              default:
                e !== n && al(l, t, f, e, a, n);
            }
        Ri(l, o, S);
        return;
      case "option":
        for (var M in u)
          if (o = u[M], u.hasOwnProperty(M) && o != null && !a.hasOwnProperty(M))
            switch (M) {
              case "selected":
                l.selected = !1;
                break;
              default:
                al(
                  l,
                  t,
                  M,
                  null,
                  a,
                  o
                );
            }
        for (i in a)
          if (o = a[i], S = u[i], a.hasOwnProperty(i) && o !== S && (o != null || S != null))
            switch (i) {
              case "selected":
                l.selected = o && typeof o != "function" && typeof o != "symbol";
                break;
              default:
                al(
                  l,
                  t,
                  i,
                  o,
                  a,
                  S
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var H in u)
          o = u[H], u.hasOwnProperty(H) && o != null && !a.hasOwnProperty(H) && al(l, t, H, null, a, o);
        for (m in a)
          if (o = a[m], S = u[m], a.hasOwnProperty(m) && o !== S && (o != null || S != null))
            switch (m) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (o != null)
                  throw Error(h(137, t));
                break;
              default:
                al(
                  l,
                  t,
                  m,
                  o,
                  a,
                  S
                );
            }
        return;
      default:
        if (tf(t)) {
          for (var el in u)
            o = u[el], u.hasOwnProperty(el) && o !== void 0 && !a.hasOwnProperty(el) && xc(
              l,
              t,
              el,
              void 0,
              a,
              o
            );
          for (g in a)
            o = a[g], S = u[g], !a.hasOwnProperty(g) || o === S || o === void 0 && S === void 0 || xc(
              l,
              t,
              g,
              o,
              a,
              S
            );
          return;
        }
    }
    for (var d in u)
      o = u[d], u.hasOwnProperty(d) && o != null && !a.hasOwnProperty(d) && al(l, t, d, null, a, o);
    for (T in a)
      o = a[T], S = u[T], !a.hasOwnProperty(T) || o === S || o == null && S == null || al(l, t, T, o, a, S);
  }
  function By(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function zm() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, u = performance.getEntriesByType("resource"), a = 0; a < u.length; a++) {
        var e = u[a], n = e.transferSize, f = e.initiatorType, c = e.duration;
        if (n && c && By(f)) {
          for (f = 0, c = e.responseEnd, a += 1; a < u.length; a++) {
            var i = u[a], m = i.startTime;
            if (m > c) break;
            var g = i.transferSize, T = i.initiatorType;
            g && By(T) && (i = i.responseEnd, f += g * (i < c ? 1 : (c - m) / (i - m)));
          }
          if (--a, t += 8 * (n + f) / (e.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Vc = null, Lc = null;
  function Mn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function jy(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Gy(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function Kc(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Jc = null;
  function Tm() {
    var l = window.event;
    return l && l.type === "popstate" ? l === Jc ? !1 : (Jc = l, !0) : (Jc = null, !1);
  }
  var Xy = typeof setTimeout == "function" ? setTimeout : void 0, Em = typeof clearTimeout == "function" ? clearTimeout : void 0, Qy = typeof Promise == "function" ? Promise : void 0, Am = typeof queueMicrotask == "function" ? queueMicrotask : typeof Qy < "u" ? function(l) {
    return Qy.resolve(null).then(l).catch(_m);
  } : Xy;
  function _m(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function hu(l) {
    return l === "head";
  }
  function Zy(l, t) {
    var u = t, a = 0;
    do {
      var e = u.nextSibling;
      if (l.removeChild(u), e && e.nodeType === 8)
        if (u = e.data, u === "/$" || u === "/&") {
          if (a === 0) {
            l.removeChild(e), Oa(t);
            return;
          }
          a--;
        } else if (u === "$" || u === "$?" || u === "$~" || u === "$!" || u === "&")
          a++;
        else if (u === "html")
          se(l.ownerDocument.documentElement);
        else if (u === "head") {
          u = l.ownerDocument.head, se(u);
          for (var n = u.firstChild; n; ) {
            var f = n.nextSibling, c = n.nodeName;
            n[Na] || c === "SCRIPT" || c === "STYLE" || c === "LINK" && n.rel.toLowerCase() === "stylesheet" || u.removeChild(n), n = f;
          }
        } else
          u === "body" && se(l.ownerDocument.body);
      u = e;
    } while (u);
    Oa(t);
  }
  function xy(l, t) {
    var u = l;
    l = 0;
    do {
      var a = u.nextSibling;
      if (u.nodeType === 1 ? t ? (u._stashedDisplay = u.style.display, u.style.display = "none") : (u.style.display = u._stashedDisplay || "", u.getAttribute("style") === "" && u.removeAttribute("style")) : u.nodeType === 3 && (t ? (u._stashedText = u.nodeValue, u.nodeValue = "") : u.nodeValue = u._stashedText || ""), a && a.nodeType === 8)
        if (u = a.data, u === "/$") {
          if (l === 0) break;
          l--;
        } else
          u !== "$" && u !== "$?" && u !== "$~" && u !== "$!" || l++;
      u = a;
    } while (u);
  }
  function wc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var u = t;
      switch (t = t.nextSibling, u.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          wc(u), kn(u);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (u.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(u);
    }
  }
  function rm(l, t, u, a) {
    for (; l.nodeType === 1; ) {
      var e = u;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[Na])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== e.rel || l.getAttribute("href") !== (e.href == null || e.href === "" ? null : e.href) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin) || l.getAttribute("title") !== (e.title == null ? null : e.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (e.src == null ? null : e.src) || l.getAttribute("type") !== (e.type == null ? null : e.type) || l.getAttribute("crossorigin") !== (e.crossOrigin == null ? null : e.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = e.name == null ? null : "" + e.name;
        if (e.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = ot(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Om(l, t, u) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !u || (l = ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function Vy(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = ot(l.nextSibling), l === null)) return null;
    return l;
  }
  function Wc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function $c(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Mm(l, t) {
    var u = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || u.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), u.removeEventListener("DOMContentLoaded", a);
      };
      u.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function ot(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var Fc = null;
  function Ly(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "/$" || u === "/&") {
          if (t === 0)
            return ot(l.nextSibling);
          t--;
        } else
          u !== "$" && u !== "$!" && u !== "$?" && u !== "$~" && u !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ky(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var u = l.data;
        if (u === "$" || u === "$!" || u === "$?" || u === "$~" || u === "&") {
          if (t === 0) return l;
          t--;
        } else u !== "/$" && u !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Jy(l, t, u) {
    switch (t = Mn(u), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(h(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(h(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(h(454));
        return l;
      default:
        throw Error(h(451));
    }
  }
  function se(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    kn(l);
  }
  var St = /* @__PURE__ */ new Map(), wy = /* @__PURE__ */ new Set();
  function Dn(l) {
    return typeof l.getRootNode == "function" ? l.getRootNode() : l.nodeType === 9 ? l : l.ownerDocument;
  }
  var wt = r.d;
  r.d = {
    f: Dm,
    r: Um,
    D: pm,
    C: Nm,
    L: Hm,
    m: Rm,
    X: Cm,
    S: qm,
    M: Ym
  };
  function Dm() {
    var l = wt.f(), t = bn();
    return l || t;
  }
  function Um(l) {
    var t = Lu(l);
    t !== null && t.tag === 5 && t.type === "form" ? yv(t) : wt.r(l);
  }
  var Aa = typeof document > "u" ? null : document;
  function Wy(l, t, u) {
    var a = Aa;
    if (a && typeof t == "string" && t) {
      var e = it(t);
      e = 'link[rel="' + l + '"][href="' + e + '"]', typeof u == "string" && (e += '[crossorigin="' + u + '"]'), wy.has(e) || (wy.add(e), l = { rel: l, crossOrigin: u, href: t }, a.querySelector(e) === null && (t = a.createElement("link"), Hl(t, "link", l), rl(t), a.head.appendChild(t)));
    }
  }
  function pm(l) {
    wt.D(l), Wy("dns-prefetch", l, null);
  }
  function Nm(l, t) {
    wt.C(l, t), Wy("preconnect", l, t);
  }
  function Hm(l, t, u) {
    wt.L(l, t, u);
    var a = Aa;
    if (a && l && t) {
      var e = 'link[rel="preload"][as="' + it(t) + '"]';
      t === "image" && u && u.imageSrcSet ? (e += '[imagesrcset="' + it(
        u.imageSrcSet
      ) + '"]', typeof u.imageSizes == "string" && (e += '[imagesizes="' + it(
        u.imageSizes
      ) + '"]')) : e += '[href="' + it(l) + '"]';
      var n = e;
      switch (t) {
        case "style":
          n = _a(l);
          break;
        case "script":
          n = ra(l);
      }
      St.has(n) || (l = R(
        {
          rel: "preload",
          href: t === "image" && u && u.imageSrcSet ? void 0 : l,
          as: t
        },
        u
      ), St.set(n, l), a.querySelector(e) !== null || t === "style" && a.querySelector(me(n)) || t === "script" && a.querySelector(he(n)) || (t = a.createElement("link"), Hl(t, "link", l), rl(t), a.head.appendChild(t)));
    }
  }
  function Rm(l, t) {
    wt.m(l, t);
    var u = Aa;
    if (u && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", e = 'link[rel="modulepreload"][as="' + it(a) + '"][href="' + it(l) + '"]', n = e;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = ra(l);
      }
      if (!St.has(n) && (l = R({ rel: "modulepreload", href: l }, t), St.set(n, l), u.querySelector(e) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (u.querySelector(he(n)))
              return;
        }
        a = u.createElement("link"), Hl(a, "link", l), rl(a), u.head.appendChild(a);
      }
    }
  }
  function qm(l, t, u) {
    wt.S(l, t, u);
    var a = Aa;
    if (a && l) {
      var e = Ku(a).hoistableStyles, n = _a(l);
      t = t || "default";
      var f = e.get(n);
      if (!f) {
        var c = { loading: 0, preload: null };
        if (f = a.querySelector(
          me(n)
        ))
          c.loading = 5;
        else {
          l = R(
            { rel: "stylesheet", href: l, "data-precedence": t },
            u
          ), (u = St.get(n)) && kc(l, u);
          var i = f = a.createElement("link");
          rl(i), Hl(i, "link", l), i._p = new Promise(function(m, g) {
            i.onload = m, i.onerror = g;
          }), i.addEventListener("load", function() {
            c.loading |= 1;
          }), i.addEventListener("error", function() {
            c.loading |= 2;
          }), c.loading |= 4, Un(f, t, a);
        }
        f = {
          type: "stylesheet",
          instance: f,
          count: 1,
          state: c
        }, e.set(n, f);
      }
    }
  }
  function Cm(l, t) {
    wt.X(l, t);
    var u = Aa;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = ra(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = R({ src: l, async: !0 }, t), (t = St.get(e)) && Ic(l, t), n = u.createElement("script"), rl(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function Ym(l, t) {
    wt.M(l, t);
    var u = Aa;
    if (u && l) {
      var a = Ku(u).hoistableScripts, e = ra(l), n = a.get(e);
      n || (n = u.querySelector(he(e)), n || (l = R({ src: l, async: !0, type: "module" }, t), (t = St.get(e)) && Ic(l, t), n = u.createElement("script"), rl(n), Hl(n, "link", l), u.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(e, n));
    }
  }
  function $y(l, t, u, a) {
    var e = (e = Q.current) ? Dn(e) : null;
    if (!e) throw Error(h(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof u.precedence == "string" && typeof u.href == "string" ? (t = _a(u.href), u = Ku(
          e
        ).hoistableStyles, a = u.get(t), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (u.rel === "stylesheet" && typeof u.href == "string" && typeof u.precedence == "string") {
          l = _a(u.href);
          var n = Ku(
            e
          ).hoistableStyles, f = n.get(l);
          if (f || (e = e.ownerDocument || e, f = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, f), (n = e.querySelector(
            me(l)
          )) && !n._p && (f.instance = n, f.state.loading = 5), St.has(l) || (u = {
            rel: "preload",
            as: "style",
            href: u.href,
            crossOrigin: u.crossOrigin,
            integrity: u.integrity,
            media: u.media,
            hrefLang: u.hrefLang,
            referrerPolicy: u.referrerPolicy
          }, St.set(l, u), n || Bm(
            e,
            l,
            u,
            f.state
          ))), t && a === null)
            throw Error(h(528, ""));
          return f;
        }
        if (t && a !== null)
          throw Error(h(529, ""));
        return null;
      case "script":
        return t = u.async, u = u.src, typeof u == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ra(u), u = Ku(
          e
        ).hoistableScripts, a = u.get(t), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, u.set(t, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(h(444, l));
    }
  }
  function _a(l) {
    return 'href="' + it(l) + '"';
  }
  function me(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function Fy(l) {
    return R({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Bm(l, t, u, a) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]") ? a.loading = 1 : (t = l.createElement("link"), a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    }), Hl(t, "link", u), rl(t), l.head.appendChild(t));
  }
  function ra(l) {
    return '[src="' + it(l) + '"]';
  }
  function he(l) {
    return "script[async]" + l;
  }
  function ky(l, t, u) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + it(u.href) + '"]'
          );
          if (a)
            return t.instance = a, rl(a), a;
          var e = R({}, u, {
            "data-href": u.href,
            "data-precedence": u.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), rl(a), Hl(a, "style", e), Un(a, u.precedence, l), t.instance = a;
        case "stylesheet":
          e = _a(u.href);
          var n = l.querySelector(
            me(e)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, rl(n), n;
          a = Fy(u), (e = St.get(e)) && kc(a, e), n = (l.ownerDocument || l).createElement("link"), rl(n);
          var f = n;
          return f._p = new Promise(function(c, i) {
            f.onload = c, f.onerror = i;
          }), Hl(n, "link", a), t.state.loading |= 4, Un(n, u.precedence, l), t.instance = n;
        case "script":
          return n = ra(u.src), (e = l.querySelector(
            he(n)
          )) ? (t.instance = e, rl(e), e) : (a = u, (e = St.get(n)) && (a = R({}, u), Ic(a, e)), l = l.ownerDocument || l, e = l.createElement("script"), rl(e), Hl(e, "link", a), l.head.appendChild(e), t.instance = e);
        case "void":
          return null;
        default:
          throw Error(h(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Un(a, u.precedence, l));
    return t.instance;
  }
  function Un(l, t, u) {
    for (var a = u.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), e = a.length ? a[a.length - 1] : null, n = e, f = 0; f < a.length; f++) {
      var c = a[f];
      if (c.dataset.precedence === t) n = c;
      else if (n !== e) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = u.nodeType === 9 ? u.head : u, t.insertBefore(l, t.firstChild));
  }
  function kc(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function Ic(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var pn = null;
  function Iy(l, t, u) {
    if (pn === null) {
      var a = /* @__PURE__ */ new Map(), e = pn = /* @__PURE__ */ new Map();
      e.set(u, a);
    } else
      e = pn, a = e.get(u), a || (a = /* @__PURE__ */ new Map(), e.set(u, a));
    if (a.has(l)) return a;
    for (a.set(l, null), u = u.getElementsByTagName(l), e = 0; e < u.length; e++) {
      var n = u[e];
      if (!(n[Na] || n[Dl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var f = n.getAttribute(t) || "";
        f = l + f;
        var c = a.get(f);
        c ? c.push(n) : a.set(f, [n]);
      }
    }
    return a;
  }
  function Py(l, t, u) {
    l = l.ownerDocument || l, l.head.insertBefore(
      u,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function jm(l, t, u) {
    if (u === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return l = t.disabled, typeof t.precedence == "string" && l == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function ld(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Gm(l, t, u, a) {
    if (u.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (u.state.loading & 4) === 0) {
      if (u.instance === null) {
        var e = _a(a.href), n = t.querySelector(
          me(e)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = Nn.bind(l), t.then(l, l)), u.state.loading |= 4, u.instance = n, rl(n);
          return;
        }
        n = t.ownerDocument || t, a = Fy(a), (e = St.get(e)) && kc(a, e), n = n.createElement("link"), rl(n);
        var f = n;
        f._p = new Promise(function(c, i) {
          f.onload = c, f.onerror = i;
        }), Hl(n, "link", a), u.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(u, t), (t = u.state.preload) && (u.state.loading & 3) === 0 && (l.count++, u = Nn.bind(l), t.addEventListener("load", u), t.addEventListener("error", u));
    }
  }
  var Pc = 0;
  function Xm(l, t) {
    return l.stylesheets && l.count === 0 && Rn(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(u) {
      var a = setTimeout(function() {
        if (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Pc === 0 && (Pc = 62500 * zm());
      var e = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Rn(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Pc ? 50 : 800) + t
      );
      return l.unsuspend = u, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(e);
      };
    } : null;
  }
  function Nn() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) Rn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        this.unsuspend = null, l();
      }
    }
  }
  var Hn = null;
  function Rn(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Hn = /* @__PURE__ */ new Map(), t.forEach(Qm, l), Hn = null, Nn.call(l));
  }
  function Qm(l, t) {
    if (!(t.state.loading & 4)) {
      var u = Hn.get(l);
      if (u) var a = u.get(null);
      else {
        u = /* @__PURE__ */ new Map(), Hn.set(l, u);
        for (var e = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < e.length; n++) {
          var f = e[n];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") && (u.set(f.dataset.precedence, f), a = f);
        }
        a && u.set(null, a);
      }
      e = t.instance, f = e.getAttribute("data-precedence"), n = u.get(f) || a, n === a && u.set(null, e), u.set(f, e), this.count++, a = Nn.bind(this), e.addEventListener("load", a), e.addEventListener("error", a), n ? n.parentNode.insertBefore(e, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(e, l.firstChild)), t.state.loading |= 4;
    }
  }
  var oe = {
    $$typeof: Rl,
    Provider: null,
    Consumer: null,
    _currentValue: q,
    _currentValue2: q,
    _threadCount: 0
  };
  function Zm(l, t, u, a, e, n, f, c, i) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wn(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wn(0), this.hiddenUpdates = wn(null), this.identifierPrefix = a, this.onUncaughtError = e, this.onCaughtError = n, this.onRecoverableError = f, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = i, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function td(l, t, u, a, e, n, f, c, i, m, g, T) {
    return l = new Zm(
      l,
      t,
      u,
      f,
      i,
      m,
      g,
      T,
      c
    ), t = 1, n === !0 && (t |= 24), n = lt(3, null, null, t), l.current = n, n.stateNode = l, t = Rf(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: u,
      cache: t
    }, Bf(n), l;
  }
  function ud(l) {
    return l ? (l = ta, l) : ta;
  }
  function ad(l, t, u, a, e, n) {
    e = ud(e), a.context === null ? a.context = e : a.pendingContext = e, a = au(t), a.payload = { element: u }, n = n === void 0 ? null : n, n !== null && (a.callback = n), u = eu(l, a, t), u !== null && (wl(u, l, t), wa(u, l, t));
  }
  function ed(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var u = l.retryLane;
      l.retryLane = u !== 0 && u < t ? u : t;
    }
  }
  function li(l, t) {
    ed(l, t), (l = l.alternate) && ed(l, t);
  }
  function nd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Uu(l, 67108864);
      t !== null && wl(t, l, 67108864), li(l, 67108864);
    }
  }
  function fd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Wn(t);
      var u = Uu(l, t);
      u !== null && wl(u, l, t), li(l, t);
    }
  }
  var qn = !0;
  function xm(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = r.p;
    try {
      r.p = 2, ti(l, t, u, a);
    } finally {
      r.p = n, b.T = e;
    }
  }
  function Vm(l, t, u, a) {
    var e = b.T;
    b.T = null;
    var n = r.p;
    try {
      r.p = 8, ti(l, t, u, a);
    } finally {
      r.p = n, b.T = e;
    }
  }
  function ti(l, t, u, a) {
    if (qn) {
      var e = ui(a);
      if (e === null)
        Zc(
          l,
          t,
          a,
          Cn,
          u
        ), id(l, a);
      else if (Km(
        e,
        l,
        t,
        u,
        a
      ))
        a.stopPropagation();
      else if (id(l, a), t & 4 && -1 < Lm.indexOf(l)) {
        for (; e !== null; ) {
          var n = Lu(e);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var f = _u(n.pendingLanes);
                  if (f !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; f; ) {
                      var i = 1 << 31 - Il(f);
                      c.entanglements[1] |= i, f &= ~i;
                    }
                    Dt(n), ($ & 6) === 0 && (Sn = Fl() + 500, ve(0));
                  }
                }
                break;
              case 31:
              case 13:
                c = Uu(n, 2), c !== null && wl(c, n, 2), bn(), li(n, 2);
            }
          if (n = ui(a), n === null && Zc(
            l,
            t,
            a,
            Cn,
            u
          ), n === e) break;
          e = n;
        }
        e !== null && a.stopPropagation();
      } else
        Zc(
          l,
          t,
          a,
          null,
          u
        );
    }
  }
  function ui(l) {
    return l = af(l), ai(l);
  }
  var Cn = null;
  function ai(l) {
    if (Cn = null, l = Vu(l), l !== null) {
      var t = cl(l);
      if (t === null) l = null;
      else {
        var u = t.tag;
        if (u === 13) {
          if (l = _l(t), l !== null) return l;
          l = null;
        } else if (u === 31) {
          if (l = Ml(t), l !== null) return l;
          l = null;
        } else if (u === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Cn = l, null;
  }
  function cd(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (pd()) {
          case oi:
            return 2;
          case Si:
            return 8;
          case Ae:
          case Nd:
            return 32;
          case gi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ei = !1, ou = null, Su = null, gu = null, Se = /* @__PURE__ */ new Map(), ge = /* @__PURE__ */ new Map(), bu = [], Lm = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function id(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ou = null;
        break;
      case "dragenter":
      case "dragleave":
        Su = null;
        break;
      case "mouseover":
      case "mouseout":
        gu = null;
        break;
      case "pointerover":
      case "pointerout":
        Se.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ge.delete(t.pointerId);
    }
  }
  function be(l, t, u, a, e, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: u,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [e]
    }, t !== null && (t = Lu(t), t !== null && nd(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, e !== null && t.indexOf(e) === -1 && t.push(e), l);
  }
  function Km(l, t, u, a, e) {
    switch (t) {
      case "focusin":
        return ou = be(
          ou,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "dragenter":
        return Su = be(
          Su,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "mouseover":
        return gu = be(
          gu,
          l,
          t,
          u,
          a,
          e
        ), !0;
      case "pointerover":
        var n = e.pointerId;
        return Se.set(
          n,
          be(
            Se.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
      case "gotpointercapture":
        return n = e.pointerId, ge.set(
          n,
          be(
            ge.get(n) || null,
            l,
            t,
            u,
            a,
            e
          )
        ), !0;
    }
    return !1;
  }
  function vd(l) {
    var t = Vu(l.target);
    if (t !== null) {
      var u = cl(t);
      if (u !== null) {
        if (t = u.tag, t === 13) {
          if (t = _l(u), t !== null) {
            l.blockedOn = t, _i(l.priority, function() {
              fd(u);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Ml(u), t !== null) {
            l.blockedOn = t, _i(l.priority, function() {
              fd(u);
            });
            return;
          }
        } else if (t === 3 && u.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = u.tag === 3 ? u.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Yn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var u = ui(l.nativeEvent);
      if (u === null) {
        u = l.nativeEvent;
        var a = new u.constructor(
          u.type,
          u
        );
        uf = a, u.target.dispatchEvent(a), uf = null;
      } else
        return t = Lu(u), t !== null && nd(t), l.blockedOn = u, !1;
      t.shift();
    }
    return !0;
  }
  function yd(l, t, u) {
    Yn(l) && u.delete(t);
  }
  function Jm() {
    ei = !1, ou !== null && Yn(ou) && (ou = null), Su !== null && Yn(Su) && (Su = null), gu !== null && Yn(gu) && (gu = null), Se.forEach(yd), ge.forEach(yd);
  }
  function Bn(l, t) {
    l.blockedOn === t && (l.blockedOn = null, ei || (ei = !0, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      Jm
    )));
  }
  var jn = null;
  function dd(l) {
    jn !== l && (jn = l, _.unstable_scheduleCallback(
      _.unstable_NormalPriority,
      function() {
        jn === l && (jn = null);
        for (var t = 0; t < l.length; t += 3) {
          var u = l[t], a = l[t + 1], e = l[t + 2];
          if (typeof a != "function") {
            if (ai(a || u) === null)
              continue;
            break;
          }
          var n = Lu(u);
          n !== null && (l.splice(t, 3), t -= 3, uc(
            n,
            {
              pending: !0,
              data: e,
              method: u.method,
              action: a
            },
            a,
            e
          ));
        }
      }
    ));
  }
  function Oa(l) {
    function t(i) {
      return Bn(i, l);
    }
    ou !== null && Bn(ou, l), Su !== null && Bn(Su, l), gu !== null && Bn(gu, l), Se.forEach(t), ge.forEach(t);
    for (var u = 0; u < bu.length; u++) {
      var a = bu[u];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < bu.length && (u = bu[0], u.blockedOn === null); )
      vd(u), u.blockedOn === null && bu.shift();
    if (u = (l.ownerDocument || l).$$reactFormReplay, u != null)
      for (a = 0; a < u.length; a += 3) {
        var e = u[a], n = u[a + 1], f = e[Zl] || null;
        if (typeof n == "function")
          f || dd(u);
        else if (f) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (e = n, f = n[Zl] || null)
              c = f.formAction;
            else if (ai(e) !== null) continue;
          } else c = f.action;
          typeof c == "function" ? u[a + 1] = c : (u.splice(a, 3), a -= 3), dd(u);
        }
      }
  }
  function sd() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(f) {
            return e = f;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      e !== null && (e(), e = null), a || setTimeout(u, 20);
    }
    function u() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, e = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(u, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), e !== null && (e(), e = null);
      };
    }
  }
  function ni(l) {
    this._internalRoot = l;
  }
  Gn.prototype.render = ni.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(h(409));
    var u = t.current, a = nt();
    ad(u, a, l, t, null, null);
  }, Gn.prototype.unmount = ni.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      ad(l.current, 2, null, l, null, null), bn(), t[xu] = null;
    }
  };
  function Gn(l) {
    this._internalRoot = l;
  }
  Gn.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Ai();
      l = { blockedOn: null, target: l, priority: t };
      for (var u = 0; u < bu.length && t !== 0 && t < bu[u].priority; u++) ;
      bu.splice(u, 0, l), u === 0 && vd(l);
    }
  };
  var md = X.version;
  if (md !== "19.2.7")
    throw Error(
      h(
        527,
        md,
        "19.2.7"
      )
    );
  r.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(h(188)) : (l = Object.keys(l).join(","), Error(h(268, l)));
    return l = A(t), l = l !== null ? F(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var wm = {
    bundleType: 0,
    version: "19.2.7",
    rendererPackageName: "react-dom",
    currentDispatcherRef: b,
    reconcilerVersion: "19.2.7"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Xn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Xn.isDisabled && Xn.supportsFiber)
      try {
        Da = Xn.inject(
          wm
        ), kl = Xn;
      } catch {
      }
  }
  return Te.createRoot = function(l, t) {
    if (!ll(l)) throw Error(h(299));
    var u = !1, a = "", e = Tv, n = Ev, f = Av;
    return t != null && (t.unstable_strictMode === !0 && (u = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (e = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (f = t.onRecoverableError)), t = td(
      l,
      1,
      !1,
      null,
      null,
      u,
      a,
      null,
      e,
      n,
      f,
      sd
    ), l[xu] = t.current, Qc(l), new ni(t);
  }, Te.hydrateRoot = function(l, t, u) {
    if (!ll(l)) throw Error(h(299));
    var a = !1, e = "", n = Tv, f = Ev, c = Av, i = null;
    return u != null && (u.unstable_strictMode === !0 && (a = !0), u.identifierPrefix !== void 0 && (e = u.identifierPrefix), u.onUncaughtError !== void 0 && (n = u.onUncaughtError), u.onCaughtError !== void 0 && (f = u.onCaughtError), u.onRecoverableError !== void 0 && (c = u.onRecoverableError), u.formState !== void 0 && (i = u.formState)), t = td(
      l,
      1,
      !0,
      t,
      u ?? null,
      a,
      e,
      i,
      n,
      f,
      c,
      sd
    ), t.context = ud(null), u = t.current, a = nt(), a = Wn(a), e = au(a), e.callback = null, eu(u, e, a), u = a, t.current.lanes = u, pa(t, u), Dt(t), l[xu] = t.current, Qc(l), new Gn(t);
  }, Te.version = "19.2.7", Te;
}
var _d;
function n1() {
  if (_d) return ii.exports;
  _d = 1;
  function _() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(_);
      } catch (X) {
        console.error(X);
      }
  }
  return _(), ii.exports = e1(), ii.exports;
}
var rd = n1();
const Od = Tu.createContext(null);
function Qn() {
  const _ = Tu.useContext(Od);
  if (!_)
    throw new Error(
      "CodefyUI hooks must be used inside a component mounted by defineTool()."
    );
  return _;
}
function f1(_, X, G) {
  const h = _.ui.addFloatingWidget({ id: X.id });
  X.title && h.setAttribute("aria-label", X.title), rd.createRoot(h).render(
    /* @__PURE__ */ Al.jsx(Tu.StrictMode, { children: /* @__PURE__ */ Al.jsx(Od.Provider, { value: _, children: /* @__PURE__ */ Al.jsx(G, { api: _ }) }) })
  );
}
function c1(_) {
  const X = /* @__PURE__ */ new WeakMap(), G = (h, ll) => {
    let cl = X.get(h);
    cl || (cl = rd.createRoot(h), X.set(h, cl)), cl.render(/* @__PURE__ */ Al.jsx(_, { node: ll.node }));
  };
  return {
    mount: G,
    update: G,
    unmount: (h) => {
      const ll = X.get(h);
      ll && (ll.unmount(), X.delete(h));
    }
  };
}
function i1() {
  const _ = Qn(), [X, G] = Tu.useState(() => _.graph.getGraph());
  return Tu.useEffect(
    () => _.graph.onGraphChanged(() => G(_.graph.getGraph())),
    [_]
  ), X;
}
function v1() {
  const _ = Qn();
  return Tu.useMemo(() => _.graph.getNodeDefinitions(), [_]);
}
function y1() {
  const _ = Qn();
  return Tu.useCallback((X) => _.graph.applyOperations(X), [_]);
}
function d1() {
  const _ = Qn();
  return Tu.useCallback((X, G) => _.ui.toast(X, G), [_]);
}
function s1({ api: _ }) {
  const X = i1(), G = v1(), h = d1(), ll = y1(), cl = () => {
    ll([
      { op: "add_node", node_type: "Linear", position: { x: 240, y: 200 } }
    ]).results.every((Ml) => Ml.ok) ? h("Added a Linear node", "success") : h('Could not add node — is the "Linear" type installed?', "warning");
  };
  return /* @__PURE__ */ Al.jsxs("div", { className: "cdui-example", "data-testid": "official-template-panel", children: [
    /* @__PURE__ */ Al.jsx("div", { className: "cdui-example__title", children: "Official Template (React)" }),
    /* @__PURE__ */ Al.jsxs("div", { className: "cdui-example__row", children: [
      "plugin: ",
      /* @__PURE__ */ Al.jsx("b", { children: _.pluginId }),
      " · API v",
      _.apiVersion
    ] }),
    /* @__PURE__ */ Al.jsxs("div", { className: "cdui-example__row", children: [
      "nodes on canvas: ",
      /* @__PURE__ */ Al.jsx("b", { "data-testid": "node-count", children: X.nodes.length })
    ] }),
    /* @__PURE__ */ Al.jsxs("div", { className: "cdui-example__row", children: [
      "node types available: ",
      /* @__PURE__ */ Al.jsx("b", { children: G.length })
    ] }),
    /* @__PURE__ */ Al.jsx("button", { className: "cdui-example__btn", onClick: cl, children: "Add a Linear node" })
  ] });
}
function m1({ node: _ }) {
  const X = Object.entries(_.params);
  return /* @__PURE__ */ Al.jsxs("div", { className: "cdui-node-body", "data-testid": "ma-node-body", children: [
    /* @__PURE__ */ Al.jsx("div", { className: "cdui-node-body__title", children: "React node body" }),
    X.length === 0 ? /* @__PURE__ */ Al.jsx("div", { className: "cdui-node-body__row", children: "(no params)" }) : X.map(([G, h]) => /* @__PURE__ */ Al.jsxs("div", { className: "cdui-node-body__row", children: [
      /* @__PURE__ */ Al.jsx("span", { children: G }),
      /* @__PURE__ */ Al.jsx("b", { children: String(h) })
    ] }, G))
  ] });
}
function h1(_) {
  f1(_, { id: "official-template-panel", title: "Official Template" }, s1), _.nodes.registerRenderer(
    "official-template:MovingAverage",
    c1(m1)
  );
}
export {
  h1 as default
};
