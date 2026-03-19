(function () {
  const q = document.createElement("link").relList;
  if (q && q.supports && q.supports("modulepreload")) return;
  for (const Q of document.querySelectorAll('link[rel="modulepreload"]')) r(Q);
  new MutationObserver((Q) => {
    for (const k of Q)
      if (k.type === "childList")
        for (const yl of k.addedNodes)
          yl.tagName === "LINK" && yl.rel === "modulepreload" && r(yl);
  }).observe(document, { childList: !0, subtree: !0 });
  function X(Q) {
    const k = {};
    return (
      Q.integrity && (k.integrity = Q.integrity),
      Q.referrerPolicy && (k.referrerPolicy = Q.referrerPolicy),
      Q.crossOrigin === "use-credentials"
        ? (k.credentials = "include")
        : Q.crossOrigin === "anonymous"
          ? (k.credentials = "omit")
          : (k.credentials = "same-origin"),
      k
    );
  }
  function r(Q) {
    if (Q.ep) return;
    Q.ep = !0;
    const k = X(Q);
    fetch(Q.href, k);
  }
})();
var ef = { exports: {} },
  bu = {};
var hm;
function wh() {
  if (hm) return bu;
  hm = 1;
  var N = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.fragment");
  function X(r, Q, k) {
    var yl = null;
    if (
      (k !== void 0 && (yl = "" + k),
      Q.key !== void 0 && (yl = "" + Q.key),
      "key" in Q)
    ) {
      k = {};
      for (var Hl in Q) Hl !== "key" && (k[Hl] = Q[Hl]);
    } else k = Q;
    return (
      (Q = k.ref),
      { $$typeof: N, type: r, key: yl, ref: Q !== void 0 ? Q : null, props: k }
    );
  }
  return ((bu.Fragment = q), (bu.jsx = X), (bu.jsxs = X), bu);
}
var vm;
function Wh() {
  return (vm || ((vm = 1), (ef.exports = wh())), ef.exports);
}
var v = Wh(),
  uf = { exports: {} },
  C = {};
var ym;
function $h() {
  if (ym) return C;
  ym = 1;
  var N = Symbol.for("react.transitional.element"),
    q = Symbol.for("react.portal"),
    X = Symbol.for("react.fragment"),
    r = Symbol.for("react.strict_mode"),
    Q = Symbol.for("react.profiler"),
    k = Symbol.for("react.consumer"),
    yl = Symbol.for("react.context"),
    Hl = Symbol.for("react.forward_ref"),
    j = Symbol.for("react.suspense"),
    E = Symbol.for("react.memo"),
    P = Symbol.for("react.lazy"),
    H = Symbol.for("react.activity"),
    ol = Symbol.iterator;
  function Wl(d) {
    return d === null || typeof d != "object"
      ? null
      : ((d = (ol && d[ol]) || d["@@iterator"]),
        typeof d == "function" ? d : null);
  }
  var Yl = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    Rl = Object.assign,
    Ot = {};
  function $l(d, T, p) {
    ((this.props = d),
      (this.context = T),
      (this.refs = Ot),
      (this.updater = p || Yl));
  }
  (($l.prototype.isReactComponent = {}),
    ($l.prototype.setState = function (d, T) {
      if (typeof d != "object" && typeof d != "function" && d != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables.",
        );
      this.updater.enqueueSetState(this, d, T, "setState");
    }),
    ($l.prototype.forceUpdate = function (d) {
      this.updater.enqueueForceUpdate(this, d, "forceUpdate");
    }));
  function Wt() {}
  Wt.prototype = $l.prototype;
  function jl(d, T, p) {
    ((this.props = d),
      (this.context = T),
      (this.refs = Ot),
      (this.updater = p || Yl));
  }
  var it = (jl.prototype = new Wt());
  ((it.constructor = jl), Rl(it, $l.prototype), (it.isPureReactComponent = !0));
  var zt = Array.isArray;
  function Bl() {}
  var w = { H: null, A: null, T: null, S: null },
    Gl = Object.prototype.hasOwnProperty;
  function Tt(d, T, p) {
    var O = p.ref;
    return {
      $$typeof: N,
      type: d,
      key: T,
      ref: O !== void 0 ? O : null,
      props: p,
    };
  }
  function Xa(d, T) {
    return Tt(d.type, T, d.props);
  }
  function Et(d) {
    return typeof d == "object" && d !== null && d.$$typeof === N;
  }
  function Xl(d) {
    var T = { "=": "=0", ":": "=2" };
    return (
      "$" +
      d.replace(/[=:]/g, function (p) {
        return T[p];
      })
    );
  }
  var xa = /\/+/g;
  function Mt(d, T) {
    return typeof d == "object" && d !== null && d.key != null
      ? Xl("" + d.key)
      : T.toString(36);
  }
  function gt(d) {
    switch (d.status) {
      case "fulfilled":
        return d.value;
      case "rejected":
        throw d.reason;
      default:
        switch (
          (typeof d.status == "string"
            ? d.then(Bl, Bl)
            : ((d.status = "pending"),
              d.then(
                function (T) {
                  d.status === "pending" &&
                    ((d.status = "fulfilled"), (d.value = T));
                },
                function (T) {
                  d.status === "pending" &&
                    ((d.status = "rejected"), (d.reason = T));
                },
              )),
          d.status)
        ) {
          case "fulfilled":
            return d.value;
          case "rejected":
            throw d.reason;
        }
    }
    throw d;
  }
  function S(d, T, p, O, Y) {
    var Z = typeof d;
    (Z === "undefined" || Z === "boolean") && (d = null);
    var ll = !1;
    if (d === null) ll = !0;
    else
      switch (Z) {
        case "bigint":
        case "string":
        case "number":
          ll = !0;
          break;
        case "object":
          switch (d.$$typeof) {
            case N:
            case q:
              ll = !0;
              break;
            case P:
              return ((ll = d._init), S(ll(d._payload), T, p, O, Y));
          }
      }
    if (ll)
      return (
        (Y = Y(d)),
        (ll = O === "" ? "." + Mt(d, 0) : O),
        zt(Y)
          ? ((p = ""),
            ll != null && (p = ll.replace(xa, "$&/") + "/"),
            S(Y, T, p, "", function (pe) {
              return pe;
            }))
          : Y != null &&
            (Et(Y) &&
              (Y = Xa(
                Y,
                p +
                  (Y.key == null || (d && d.key === Y.key)
                    ? ""
                    : ("" + Y.key).replace(xa, "$&/") + "/") +
                  ll,
              )),
            T.push(Y)),
        1
      );
    ll = 0;
    var Cl = O === "" ? "." : O + ":";
    if (zt(d))
      for (var rl = 0; rl < d.length; rl++)
        ((O = d[rl]), (Z = Cl + Mt(O, rl)), (ll += S(O, T, p, Z, Y)));
    else if (((rl = Wl(d)), typeof rl == "function"))
      for (d = rl.call(d), rl = 0; !(O = d.next()).done; )
        ((O = O.value), (Z = Cl + Mt(O, rl++)), (ll += S(O, T, p, Z, Y)));
    else if (Z === "object") {
      if (typeof d.then == "function") return S(gt(d), T, p, O, Y);
      throw (
        (T = String(d)),
        Error(
          "Objects are not valid as a React child (found: " +
            (T === "[object Object]"
              ? "object with keys {" + Object.keys(d).join(", ") + "}"
              : T) +
            "). If you meant to render a collection of children, use an array instead.",
        )
      );
    }
    return ll;
  }
  function A(d, T, p) {
    if (d == null) return d;
    var O = [],
      Y = 0;
    return (
      S(d, O, "", "", function (Z) {
        return T.call(p, Z, Y++);
      }),
      O
    );
  }
  function R(d) {
    if (d._status === -1) {
      var T = d._result;
      ((T = T()),
        T.then(
          function (p) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 1), (d._result = p));
          },
          function (p) {
            (d._status === 0 || d._status === -1) &&
              ((d._status = 2), (d._result = p));
          },
        ),
        d._status === -1 && ((d._status = 0), (d._result = T)));
    }
    if (d._status === 1) return d._result.default;
    throw d._result;
  }
  var el =
      typeof reportError == "function"
        ? reportError
        : function (d) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var T = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof d == "object" &&
                  d !== null &&
                  typeof d.message == "string"
                    ? String(d.message)
                    : String(d),
                error: d,
              });
              if (!window.dispatchEvent(T)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", d);
              return;
            }
            console.error(d);
          },
    cl = {
      map: A,
      forEach: function (d, T, p) {
        A(
          d,
          function () {
            T.apply(this, arguments);
          },
          p,
        );
      },
      count: function (d) {
        var T = 0;
        return (
          A(d, function () {
            T++;
          }),
          T
        );
      },
      toArray: function (d) {
        return (
          A(d, function (T) {
            return T;
          }) || []
        );
      },
      only: function (d) {
        if (!Et(d))
          throw Error(
            "React.Children.only expected to receive a single React element child.",
          );
        return d;
      },
    };
  return (
    (C.Activity = H),
    (C.Children = cl),
    (C.Component = $l),
    (C.Fragment = X),
    (C.Profiler = Q),
    (C.PureComponent = jl),
    (C.StrictMode = r),
    (C.Suspense = j),
    (C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w),
    (C.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (d) {
        return w.H.useMemoCache(d);
      },
    }),
    (C.cache = function (d) {
      return function () {
        return d.apply(null, arguments);
      };
    }),
    (C.cacheSignal = function () {
      return null;
    }),
    (C.cloneElement = function (d, T, p) {
      if (d == null)
        throw Error(
          "The argument must be a React element, but you passed " + d + ".",
        );
      var O = Rl({}, d.props),
        Y = d.key;
      if (T != null)
        for (Z in (T.key !== void 0 && (Y = "" + T.key), T))
          !Gl.call(T, Z) ||
            Z === "key" ||
            Z === "__self" ||
            Z === "__source" ||
            (Z === "ref" && T.ref === void 0) ||
            (O[Z] = T[Z]);
      var Z = arguments.length - 2;
      if (Z === 1) O.children = p;
      else if (1 < Z) {
        for (var ll = Array(Z), Cl = 0; Cl < Z; Cl++)
          ll[Cl] = arguments[Cl + 2];
        O.children = ll;
      }
      return Tt(d.type, Y, O);
    }),
    (C.createContext = function (d) {
      return (
        (d = {
          $$typeof: yl,
          _currentValue: d,
          _currentValue2: d,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (d.Provider = d),
        (d.Consumer = { $$typeof: k, _context: d }),
        d
      );
    }),
    (C.createElement = function (d, T, p) {
      var O,
        Y = {},
        Z = null;
      if (T != null)
        for (O in (T.key !== void 0 && (Z = "" + T.key), T))
          Gl.call(T, O) &&
            O !== "key" &&
            O !== "__self" &&
            O !== "__source" &&
            (Y[O] = T[O]);
      var ll = arguments.length - 2;
      if (ll === 1) Y.children = p;
      else if (1 < ll) {
        for (var Cl = Array(ll), rl = 0; rl < ll; rl++)
          Cl[rl] = arguments[rl + 2];
        Y.children = Cl;
      }
      if (d && d.defaultProps)
        for (O in ((ll = d.defaultProps), ll))
          Y[O] === void 0 && (Y[O] = ll[O]);
      return Tt(d, Z, Y);
    }),
    (C.createRef = function () {
      return { current: null };
    }),
    (C.forwardRef = function (d) {
      return { $$typeof: Hl, render: d };
    }),
    (C.isValidElement = Et),
    (C.lazy = function (d) {
      return { $$typeof: P, _payload: { _status: -1, _result: d }, _init: R };
    }),
    (C.memo = function (d, T) {
      return { $$typeof: E, type: d, compare: T === void 0 ? null : T };
    }),
    (C.startTransition = function (d) {
      var T = w.T,
        p = {};
      w.T = p;
      try {
        var O = d(),
          Y = w.S;
        (Y !== null && Y(p, O),
          typeof O == "object" &&
            O !== null &&
            typeof O.then == "function" &&
            O.then(Bl, el));
      } catch (Z) {
        el(Z);
      } finally {
        (T !== null && p.types !== null && (T.types = p.types), (w.T = T));
      }
    }),
    (C.unstable_useCacheRefresh = function () {
      return w.H.useCacheRefresh();
    }),
    (C.use = function (d) {
      return w.H.use(d);
    }),
    (C.useActionState = function (d, T, p) {
      return w.H.useActionState(d, T, p);
    }),
    (C.useCallback = function (d, T) {
      return w.H.useCallback(d, T);
    }),
    (C.useContext = function (d) {
      return w.H.useContext(d);
    }),
    (C.useDebugValue = function () {}),
    (C.useDeferredValue = function (d, T) {
      return w.H.useDeferredValue(d, T);
    }),
    (C.useEffect = function (d, T) {
      return w.H.useEffect(d, T);
    }),
    (C.useEffectEvent = function (d) {
      return w.H.useEffectEvent(d);
    }),
    (C.useId = function () {
      return w.H.useId();
    }),
    (C.useImperativeHandle = function (d, T, p) {
      return w.H.useImperativeHandle(d, T, p);
    }),
    (C.useInsertionEffect = function (d, T) {
      return w.H.useInsertionEffect(d, T);
    }),
    (C.useLayoutEffect = function (d, T) {
      return w.H.useLayoutEffect(d, T);
    }),
    (C.useMemo = function (d, T) {
      return w.H.useMemo(d, T);
    }),
    (C.useOptimistic = function (d, T) {
      return w.H.useOptimistic(d, T);
    }),
    (C.useReducer = function (d, T, p) {
      return w.H.useReducer(d, T, p);
    }),
    (C.useRef = function (d) {
      return w.H.useRef(d);
    }),
    (C.useState = function (d) {
      return w.H.useState(d);
    }),
    (C.useSyncExternalStore = function (d, T, p) {
      return w.H.useSyncExternalStore(d, T, p);
    }),
    (C.useTransition = function () {
      return w.H.useTransition();
    }),
    (C.version = "19.2.4"),
    C
  );
}
var rm;
function df() {
  return (rm || ((rm = 1), (uf.exports = $h())), uf.exports);
}
var Em = df(),
  nf = { exports: {} },
  Su = {},
  cf = { exports: {} },
  ff = {};
var gm;
function Fh() {
  return (
    gm ||
      ((gm = 1),
      (function (N) {
        function q(S, A) {
          var R = S.length;
          S.push(A);
          l: for (; 0 < R; ) {
            var el = (R - 1) >>> 1,
              cl = S[el];
            if (0 < Q(cl, A)) ((S[el] = A), (S[R] = cl), (R = el));
            else break l;
          }
        }
        function X(S) {
          return S.length === 0 ? null : S[0];
        }
        function r(S) {
          if (S.length === 0) return null;
          var A = S[0],
            R = S.pop();
          if (R !== A) {
            S[0] = R;
            l: for (var el = 0, cl = S.length, d = cl >>> 1; el < d; ) {
              var T = 2 * (el + 1) - 1,
                p = S[T],
                O = T + 1,
                Y = S[O];
              if (0 > Q(p, R))
                O < cl && 0 > Q(Y, p)
                  ? ((S[el] = Y), (S[O] = R), (el = O))
                  : ((S[el] = p), (S[T] = R), (el = T));
              else if (O < cl && 0 > Q(Y, R))
                ((S[el] = Y), (S[O] = R), (el = O));
              else break l;
            }
          }
          return A;
        }
        function Q(S, A) {
          var R = S.sortIndex - A.sortIndex;
          return R !== 0 ? R : S.id - A.id;
        }
        if (
          ((N.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var k = performance;
          N.unstable_now = function () {
            return k.now();
          };
        } else {
          var yl = Date,
            Hl = yl.now();
          N.unstable_now = function () {
            return yl.now() - Hl;
          };
        }
        var j = [],
          E = [],
          P = 1,
          H = null,
          ol = 3,
          Wl = !1,
          Yl = !1,
          Rl = !1,
          Ot = !1,
          $l = typeof setTimeout == "function" ? setTimeout : null,
          Wt = typeof clearTimeout == "function" ? clearTimeout : null,
          jl = typeof setImmediate < "u" ? setImmediate : null;
        function it(S) {
          for (var A = X(E); A !== null; ) {
            if (A.callback === null) r(E);
            else if (A.startTime <= S)
              (r(E), (A.sortIndex = A.expirationTime), q(j, A));
            else break;
            A = X(E);
          }
        }
        function zt(S) {
          if (((Rl = !1), it(S), !Yl))
            if (X(j) !== null) ((Yl = !0), Bl || ((Bl = !0), Xl()));
            else {
              var A = X(E);
              A !== null && gt(zt, A.startTime - S);
            }
        }
        var Bl = !1,
          w = -1,
          Gl = 5,
          Tt = -1;
        function Xa() {
          return Ot ? !0 : !(N.unstable_now() - Tt < Gl);
        }
        function Et() {
          if (((Ot = !1), Bl)) {
            var S = N.unstable_now();
            Tt = S;
            var A = !0;
            try {
              l: {
                ((Yl = !1), Rl && ((Rl = !1), Wt(w), (w = -1)), (Wl = !0));
                var R = ol;
                try {
                  t: {
                    for (
                      it(S), H = X(j);
                      H !== null && !(H.expirationTime > S && Xa());
                    ) {
                      var el = H.callback;
                      if (typeof el == "function") {
                        ((H.callback = null), (ol = H.priorityLevel));
                        var cl = el(H.expirationTime <= S);
                        if (((S = N.unstable_now()), typeof cl == "function")) {
                          ((H.callback = cl), it(S), (A = !0));
                          break t;
                        }
                        (H === X(j) && r(j), it(S));
                      } else r(j);
                      H = X(j);
                    }
                    if (H !== null) A = !0;
                    else {
                      var d = X(E);
                      (d !== null && gt(zt, d.startTime - S), (A = !1));
                    }
                  }
                  break l;
                } finally {
                  ((H = null), (ol = R), (Wl = !1));
                }
                A = void 0;
              }
            } finally {
              A ? Xl() : (Bl = !1);
            }
          }
        }
        var Xl;
        if (typeof jl == "function")
          Xl = function () {
            jl(Et);
          };
        else if (typeof MessageChannel < "u") {
          var xa = new MessageChannel(),
            Mt = xa.port2;
          ((xa.port1.onmessage = Et),
            (Xl = function () {
              Mt.postMessage(null);
            }));
        } else
          Xl = function () {
            $l(Et, 0);
          };
        function gt(S, A) {
          w = $l(function () {
            S(N.unstable_now());
          }, A);
        }
        ((N.unstable_IdlePriority = 5),
          (N.unstable_ImmediatePriority = 1),
          (N.unstable_LowPriority = 4),
          (N.unstable_NormalPriority = 3),
          (N.unstable_Profiling = null),
          (N.unstable_UserBlockingPriority = 2),
          (N.unstable_cancelCallback = function (S) {
            S.callback = null;
          }),
          (N.unstable_forceFrameRate = function (S) {
            0 > S || 125 < S
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported",
                )
              : (Gl = 0 < S ? Math.floor(1e3 / S) : 5);
          }),
          (N.unstable_getCurrentPriorityLevel = function () {
            return ol;
          }),
          (N.unstable_next = function (S) {
            switch (ol) {
              case 1:
              case 2:
              case 3:
                var A = 3;
                break;
              default:
                A = ol;
            }
            var R = ol;
            ol = A;
            try {
              return S();
            } finally {
              ol = R;
            }
          }),
          (N.unstable_requestPaint = function () {
            Ot = !0;
          }),
          (N.unstable_runWithPriority = function (S, A) {
            switch (S) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                S = 3;
            }
            var R = ol;
            ol = S;
            try {
              return A();
            } finally {
              ol = R;
            }
          }),
          (N.unstable_scheduleCallback = function (S, A, R) {
            var el = N.unstable_now();
            switch (
              (typeof R == "object" && R !== null
                ? ((R = R.delay),
                  (R = typeof R == "number" && 0 < R ? el + R : el))
                : (R = el),
              S)
            ) {
              case 1:
                var cl = -1;
                break;
              case 2:
                cl = 250;
                break;
              case 5:
                cl = 1073741823;
                break;
              case 4:
                cl = 1e4;
                break;
              default:
                cl = 5e3;
            }
            return (
              (cl = R + cl),
              (S = {
                id: P++,
                callback: A,
                priorityLevel: S,
                startTime: R,
                expirationTime: cl,
                sortIndex: -1,
              }),
              R > el
                ? ((S.sortIndex = R),
                  q(E, S),
                  X(j) === null &&
                    S === X(E) &&
                    (Rl ? (Wt(w), (w = -1)) : (Rl = !0), gt(zt, R - el)))
                : ((S.sortIndex = cl),
                  q(j, S),
                  Yl || Wl || ((Yl = !0), Bl || ((Bl = !0), Xl()))),
              S
            );
          }),
          (N.unstable_shouldYield = Xa),
          (N.unstable_wrapCallback = function (S) {
            var A = ol;
            return function () {
              var R = ol;
              ol = A;
              try {
                return S.apply(this, arguments);
              } finally {
                ol = R;
              }
            };
          }));
      })(ff)),
    ff
  );
}
var bm;
function kh() {
  return (bm || ((bm = 1), (cf.exports = Fh())), cf.exports);
}
var sf = { exports: {} },
  Ul = {};
var Sm;
function Ih() {
  if (Sm) return Ul;
  Sm = 1;
  var N = df();
  function q(j) {
    var E = "https://react.dev/errors/" + j;
    if (1 < arguments.length) {
      E += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var P = 2; P < arguments.length; P++)
        E += "&args[]=" + encodeURIComponent(arguments[P]);
    }
    return (
      "Minified React error #" +
      j +
      "; visit " +
      E +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function X() {}
  var r = {
      d: {
        f: X,
        r: function () {
          throw Error(q(522));
        },
        D: X,
        C: X,
        L: X,
        m: X,
        X,
        S: X,
        M: X,
      },
      p: 0,
      findDOMNode: null,
    },
    Q = Symbol.for("react.portal");
  function k(j, E, P) {
    var H =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: Q,
      key: H == null ? null : "" + H,
      children: j,
      containerInfo: E,
      implementation: P,
    };
  }
  var yl = N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function Hl(j, E) {
    if (j === "font") return "";
    if (typeof E == "string") return E === "use-credentials" ? E : "";
  }
  return (
    (Ul.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r),
    (Ul.createPortal = function (j, E) {
      var P =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!E || (E.nodeType !== 1 && E.nodeType !== 9 && E.nodeType !== 11))
        throw Error(q(299));
      return k(j, E, null, P);
    }),
    (Ul.flushSync = function (j) {
      var E = yl.T,
        P = r.p;
      try {
        if (((yl.T = null), (r.p = 2), j)) return j();
      } finally {
        ((yl.T = E), (r.p = P), r.d.f());
      }
    }),
    (Ul.preconnect = function (j, E) {
      typeof j == "string" &&
        (E
          ? ((E = E.crossOrigin),
            (E =
              typeof E == "string"
                ? E === "use-credentials"
                  ? E
                  : ""
                : void 0))
          : (E = null),
        r.d.C(j, E));
    }),
    (Ul.prefetchDNS = function (j) {
      typeof j == "string" && r.d.D(j);
    }),
    (Ul.preinit = function (j, E) {
      if (typeof j == "string" && E && typeof E.as == "string") {
        var P = E.as,
          H = Hl(P, E.crossOrigin),
          ol = typeof E.integrity == "string" ? E.integrity : void 0,
          Wl = typeof E.fetchPriority == "string" ? E.fetchPriority : void 0;
        P === "style"
          ? r.d.S(j, typeof E.precedence == "string" ? E.precedence : void 0, {
              crossOrigin: H,
              integrity: ol,
              fetchPriority: Wl,
            })
          : P === "script" &&
            r.d.X(j, {
              crossOrigin: H,
              integrity: ol,
              fetchPriority: Wl,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
      }
    }),
    (Ul.preinitModule = function (j, E) {
      if (typeof j == "string")
        if (typeof E == "object" && E !== null) {
          if (E.as == null || E.as === "script") {
            var P = Hl(E.as, E.crossOrigin);
            r.d.M(j, {
              crossOrigin: P,
              integrity: typeof E.integrity == "string" ? E.integrity : void 0,
              nonce: typeof E.nonce == "string" ? E.nonce : void 0,
            });
          }
        } else E == null && r.d.M(j);
    }),
    (Ul.preload = function (j, E) {
      if (
        typeof j == "string" &&
        typeof E == "object" &&
        E !== null &&
        typeof E.as == "string"
      ) {
        var P = E.as,
          H = Hl(P, E.crossOrigin);
        r.d.L(j, P, {
          crossOrigin: H,
          integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          nonce: typeof E.nonce == "string" ? E.nonce : void 0,
          type: typeof E.type == "string" ? E.type : void 0,
          fetchPriority:
            typeof E.fetchPriority == "string" ? E.fetchPriority : void 0,
          referrerPolicy:
            typeof E.referrerPolicy == "string" ? E.referrerPolicy : void 0,
          imageSrcSet:
            typeof E.imageSrcSet == "string" ? E.imageSrcSet : void 0,
          imageSizes: typeof E.imageSizes == "string" ? E.imageSizes : void 0,
          media: typeof E.media == "string" ? E.media : void 0,
        });
      }
    }),
    (Ul.preloadModule = function (j, E) {
      if (typeof j == "string")
        if (E) {
          var P = Hl(E.as, E.crossOrigin);
          r.d.m(j, {
            as: typeof E.as == "string" && E.as !== "script" ? E.as : void 0,
            crossOrigin: P,
            integrity: typeof E.integrity == "string" ? E.integrity : void 0,
          });
        } else r.d.m(j);
    }),
    (Ul.requestFormReset = function (j) {
      r.d.r(j);
    }),
    (Ul.unstable_batchedUpdates = function (j, E) {
      return j(E);
    }),
    (Ul.useFormState = function (j, E, P) {
      return yl.H.useFormState(j, E, P);
    }),
    (Ul.useFormStatus = function () {
      return yl.H.useHostTransitionStatus();
    }),
    (Ul.version = "19.2.4"),
    Ul
  );
}
var xm;
function Ph() {
  if (xm) return sf.exports;
  xm = 1;
  function N() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (q) {
        console.error(q);
      }
  }
  return (N(), (sf.exports = Ih()), sf.exports);
}
var zm;
function lv() {
  if (zm) return Su;
  zm = 1;
  var N = kh(),
    q = df(),
    X = Ph();
  function r(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return (
      "Minified React error #" +
      l +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function Q(l) {
    return !(!l || (l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11));
  }
  function k(l) {
    var t = l,
      a = l;
    if (l.alternate) for (; t.return; ) t = t.return;
    else {
      l = t;
      do ((t = l), (t.flags & 4098) !== 0 && (a = t.return), (l = t.return));
      while (l);
    }
    return t.tag === 3 ? a : null;
  }
  function yl(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function Hl(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (
        (t === null && ((l = l.alternate), l !== null && (t = l.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function j(l) {
    if (k(l) !== l) throw Error(r(188));
  }
  function E(l) {
    var t = l.alternate;
    if (!t) {
      if (((t = k(l)), t === null)) throw Error(r(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (((e = u.return), e !== null)) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return (j(u), l);
          if (n === e) return (j(u), t);
          n = n.sibling;
        }
        throw Error(r(188));
      }
      if (a.return !== e.return) ((a = u), (e = n));
      else {
        for (var i = !1, c = u.child; c; ) {
          if (c === a) {
            ((i = !0), (a = u), (e = n));
            break;
          }
          if (c === e) {
            ((i = !0), (e = u), (a = n));
            break;
          }
          c = c.sibling;
        }
        if (!i) {
          for (c = n.child; c; ) {
            if (c === a) {
              ((i = !0), (a = n), (e = u));
              break;
            }
            if (c === e) {
              ((i = !0), (e = n), (a = u));
              break;
            }
            c = c.sibling;
          }
          if (!i) throw Error(r(189));
        }
      }
      if (a.alternate !== e) throw Error(r(190));
    }
    if (a.tag !== 3) throw Error(r(188));
    return a.stateNode.current === a ? l : t;
  }
  function P(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (((t = P(l)), t !== null)) return t;
      l = l.sibling;
    }
    return null;
  }
  var H = Object.assign,
    ol = Symbol.for("react.element"),
    Wl = Symbol.for("react.transitional.element"),
    Yl = Symbol.for("react.portal"),
    Rl = Symbol.for("react.fragment"),
    Ot = Symbol.for("react.strict_mode"),
    $l = Symbol.for("react.profiler"),
    Wt = Symbol.for("react.consumer"),
    jl = Symbol.for("react.context"),
    it = Symbol.for("react.forward_ref"),
    zt = Symbol.for("react.suspense"),
    Bl = Symbol.for("react.suspense_list"),
    w = Symbol.for("react.memo"),
    Gl = Symbol.for("react.lazy"),
    Tt = Symbol.for("react.activity"),
    Xa = Symbol.for("react.memo_cache_sentinel"),
    Et = Symbol.iterator;
  function Xl(l) {
    return l === null || typeof l != "object"
      ? null
      : ((l = (Et && l[Et]) || l["@@iterator"]),
        typeof l == "function" ? l : null);
  }
  var xa = Symbol.for("react.client.reference");
  function Mt(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === xa ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Rl:
        return "Fragment";
      case $l:
        return "Profiler";
      case Ot:
        return "StrictMode";
      case zt:
        return "Suspense";
      case Bl:
        return "SuspenseList";
      case Tt:
        return "Activity";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Yl:
          return "Portal";
        case jl:
          return l.displayName || "Context";
        case Wt:
          return (l._context.displayName || "Context") + ".Consumer";
        case it:
          var t = l.render;
          return (
            (l = l.displayName),
            l ||
              ((l = t.displayName || t.name || ""),
              (l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef")),
            l
          );
        case w:
          return (
            (t = l.displayName || null),
            t !== null ? t : Mt(l.type) || "Memo"
          );
        case Gl:
          ((t = l._payload), (l = l._init));
          try {
            return Mt(l(t));
          } catch {}
      }
    return null;
  }
  var gt = Array.isArray,
    S = q.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    A = X.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    R = { pending: !1, data: null, method: null, action: null },
    el = [],
    cl = -1;
  function d(l) {
    return { current: l };
  }
  function T(l) {
    0 > cl || ((l.current = el[cl]), (el[cl] = null), cl--);
  }
  function p(l, t) {
    (cl++, (el[cl] = l.current), (l.current = t));
  }
  var O = d(null),
    Y = d(null),
    Z = d(null),
    ll = d(null);
  function Cl(l, t) {
    switch ((p(Z, t), p(Y, l), p(O, null), t.nodeType)) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? qo(l) : 0;
        break;
      default:
        if (((l = t.tagName), (t = t.namespaceURI)))
          ((t = qo(t)), (l = Yo(t, l)));
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
    (T(O), p(O, l));
  }
  function rl() {
    (T(O), T(Y), T(Z));
  }
  function pe(l) {
    l.memoizedState !== null && p(ll, l);
    var t = O.current,
      a = Yo(t, l.type);
    t !== a && (p(Y, l), p(O, a));
  }
  function xu(l) {
    (Y.current === l && (T(O), T(Y)),
      ll.current === l && (T(ll), (vu._currentValue = R)));
  }
  var Gn, of;
  function za(l) {
    if (Gn === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        ((Gn = (t && t[1]) || ""),
          (of =
            -1 <
            a.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < a.stack.indexOf("@")
                ? "@unknown:0:0"
                : ""));
      }
    return (
      `
` +
      Gn +
      l +
      of
    );
  }
  var Xn = !1;
  function Qn(l, t) {
    if (!l || Xn) return "";
    Xn = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var z = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(z.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(z, []);
                } catch (g) {
                  var y = g;
                }
                Reflect.construct(l, [], z);
              } else {
                try {
                  z.call();
                } catch (g) {
                  y = g;
                }
                l.call(z.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (g) {
                y = g;
              }
              (z = l()) &&
                typeof z.catch == "function" &&
                z.catch(function () {});
            }
          } catch (g) {
            if (g && y && typeof g.stack == "string") return [g.stack, y.stack];
          }
          return [null, null];
        },
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name",
      );
      u &&
        u.configurable &&
        Object.defineProperty(e.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var n = e.DetermineComponentFrameRoot(),
        i = n[0],
        c = n[1];
      if (i && c) {
        var f = i.split(`
`),
          h = c.split(`
`);
        for (
          u = e = 0;
          e < f.length && !f[e].includes("DetermineComponentFrameRoot");
        )
          e++;
        for (; u < h.length && !h[u].includes("DetermineComponentFrameRoot"); )
          u++;
        if (e === f.length || u === h.length)
          for (
            e = f.length - 1, u = h.length - 1;
            1 <= e && 0 <= u && f[e] !== h[u];
          )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== h[u]) {
            if (e !== 1 || u !== 1)
              do
                if ((e--, u--, 0 > u || f[e] !== h[u])) {
                  var b =
                    `
` + f[e].replace(" at new ", " at ");
                  return (
                    l.displayName &&
                      b.includes("<anonymous>") &&
                      (b = b.replace("<anonymous>", l.displayName)),
                    b
                  );
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      ((Xn = !1), (Error.prepareStackTrace = a));
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function Am(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null
          ? za("Suspense Fallback")
          : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Qn(l.type, !1);
      case 11:
        return Qn(l.type.render, !1);
      case 1:
        return Qn(l.type, !0);
      case 31:
        return za("Activity");
      default:
        return "";
    }
  }
  function mf(l) {
    try {
      var t = "",
        a = null;
      do ((t += Am(l, a)), (a = l), (l = l.return));
      while (l);
      return t;
    } catch (e) {
      return (
        `
Error generating stack: ` +
        e.message +
        `
` +
        e.stack
      );
    }
  }
  var Zn = Object.prototype.hasOwnProperty,
    Vn = N.unstable_scheduleCallback,
    Ln = N.unstable_cancelCallback,
    pm = N.unstable_shouldYield,
    Nm = N.unstable_requestPaint,
    Fl = N.unstable_now,
    _m = N.unstable_getCurrentPriorityLevel,
    hf = N.unstable_ImmediatePriority,
    vf = N.unstable_UserBlockingPriority,
    zu = N.unstable_NormalPriority,
    Om = N.unstable_LowPriority,
    yf = N.unstable_IdlePriority,
    Mm = N.log,
    Dm = N.unstable_setDisableYieldValue,
    Ne = null,
    kl = null;
  function $t(l) {
    if (
      (typeof Mm == "function" && Dm(l),
      kl && typeof kl.setStrictMode == "function")
    )
      try {
        kl.setStrictMode(Ne, l);
      } catch {}
  }
  var Il = Math.clz32 ? Math.clz32 : Hm,
    jm = Math.log,
    Um = Math.LN2;
  function Hm(l) {
    return ((l >>>= 0), l === 0 ? 32 : (31 - ((jm(l) / Um) | 0)) | 0);
  }
  var Tu = 256,
    Eu = 262144,
    Au = 4194304;
  function Ta(l) {
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
  function pu(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0,
      n = l.suspendedLanes,
      i = l.pingedLanes;
    l = l.warmLanes;
    var c = e & 134217727;
    return (
      c !== 0
        ? ((e = c & ~n),
          e !== 0
            ? (u = Ta(e))
            : ((i &= c),
              i !== 0
                ? (u = Ta(i))
                : a || ((a = c & ~l), a !== 0 && (u = Ta(a)))))
        : ((c = e & ~n),
          c !== 0
            ? (u = Ta(c))
            : i !== 0
              ? (u = Ta(i))
              : a || ((a = e & ~l), a !== 0 && (u = Ta(a)))),
      u === 0
        ? 0
        : t !== 0 &&
            t !== u &&
            (t & n) === 0 &&
            ((n = u & -u),
            (a = t & -t),
            n >= a || (n === 32 && (a & 4194048) !== 0))
          ? t
          : u
    );
  }
  function _e(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Rm(l, t) {
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
  function rf() {
    var l = Au;
    return ((Au <<= 1), (Au & 62914560) === 0 && (Au = 4194304), l);
  }
  function Kn(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function Oe(l, t) {
    ((l.pendingLanes |= t),
      t !== 268435456 &&
        ((l.suspendedLanes = 0), (l.pingedLanes = 0), (l.warmLanes = 0)));
  }
  function Cm(l, t, a, e, u, n) {
    var i = l.pendingLanes;
    ((l.pendingLanes = a),
      (l.suspendedLanes = 0),
      (l.pingedLanes = 0),
      (l.warmLanes = 0),
      (l.expiredLanes &= a),
      (l.entangledLanes &= a),
      (l.errorRecoveryDisabledLanes &= a),
      (l.shellSuspendCounter = 0));
    var c = l.entanglements,
      f = l.expirationTimes,
      h = l.hiddenUpdates;
    for (a = i & ~a; 0 < a; ) {
      var b = 31 - Il(a),
        z = 1 << b;
      ((c[b] = 0), (f[b] = -1));
      var y = h[b];
      if (y !== null)
        for (h[b] = null, b = 0; b < y.length; b++) {
          var g = y[b];
          g !== null && (g.lane &= -536870913);
        }
      a &= ~z;
    }
    (e !== 0 && gf(l, e, 0),
      n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(i & ~t)));
  }
  function gf(l, t, a) {
    ((l.pendingLanes |= t), (l.suspendedLanes &= ~t));
    var e = 31 - Il(t);
    ((l.entangledLanes |= t),
      (l.entanglements[e] = l.entanglements[e] | 1073741824 | (a & 261930)));
  }
  function bf(l, t) {
    var a = (l.entangledLanes |= t);
    for (l = l.entanglements; a; ) {
      var e = 31 - Il(a),
        u = 1 << e;
      ((u & t) | (l[e] & t) && (l[e] |= t), (a &= ~u));
    }
  }
  function Sf(l, t) {
    var a = t & -t;
    return (
      (a = (a & 42) !== 0 ? 1 : Jn(a)),
      (a & (l.suspendedLanes | t)) !== 0 ? 0 : a
    );
  }
  function Jn(l) {
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
  function wn(l) {
    return (
      (l &= -l),
      2 < l ? (8 < l ? ((l & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function xf() {
    var l = A.p;
    return l !== 0 ? l : ((l = window.event), l === void 0 ? 32 : im(l.type));
  }
  function zf(l, t) {
    var a = A.p;
    try {
      return ((A.p = l), t());
    } finally {
      A.p = a;
    }
  }
  var Ft = Math.random().toString(36).slice(2),
    Nl = "__reactFiber$" + Ft,
    Ql = "__reactProps$" + Ft,
    Qa = "__reactContainer$" + Ft,
    Wn = "__reactEvents$" + Ft,
    qm = "__reactListeners$" + Ft,
    Ym = "__reactHandles$" + Ft,
    Tf = "__reactResources$" + Ft,
    Me = "__reactMarker$" + Ft;
  function $n(l) {
    (delete l[Nl], delete l[Ql], delete l[Wn], delete l[qm], delete l[Ym]);
  }
  function Za(l) {
    var t = l[Nl];
    if (t) return t;
    for (var a = l.parentNode; a; ) {
      if ((t = a[Qa] || a[Nl])) {
        if (
          ((a = t.alternate),
          t.child !== null || (a !== null && a.child !== null))
        )
          for (l = Lo(l); l !== null; ) {
            if ((a = l[Nl])) return a;
            l = Lo(l);
          }
        return t;
      }
      ((l = a), (a = l.parentNode));
    }
    return null;
  }
  function Va(l) {
    if ((l = l[Nl] || l[Qa])) {
      var t = l.tag;
      if (
        t === 5 ||
        t === 6 ||
        t === 13 ||
        t === 31 ||
        t === 26 ||
        t === 27 ||
        t === 3
      )
        return l;
    }
    return null;
  }
  function De(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(r(33));
  }
  function La(l) {
    var t = l[Tf];
    return (
      t ||
        (t = l[Tf] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Al(l) {
    l[Me] = !0;
  }
  var Ef = new Set(),
    Af = {};
  function Ea(l, t) {
    (Ka(l, t), Ka(l + "Capture", t));
  }
  function Ka(l, t) {
    for (Af[l] = t, l = 0; l < t.length; l++) Ef.add(t[l]);
  }
  var Bm = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$",
    ),
    pf = {},
    Nf = {};
  function Gm(l) {
    return Zn.call(Nf, l)
      ? !0
      : Zn.call(pf, l)
        ? !1
        : Bm.test(l)
          ? (Nf[l] = !0)
          : ((pf[l] = !0), !1);
  }
  function Nu(l, t, a) {
    if (Gm(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, "" + a);
      }
  }
  function _u(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, "" + a);
    }
  }
  function Dt(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, "" + e);
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
  function _f(l) {
    var t = l.type;
    return (
      (l = l.nodeName) &&
      l.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Xm(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(l.constructor.prototype, t);
    if (
      !l.hasOwnProperty(t) &&
      typeof e < "u" &&
      typeof e.get == "function" &&
      typeof e.set == "function"
    ) {
      var u = e.get,
        n = e.set;
      return (
        Object.defineProperty(l, t, {
          configurable: !0,
          get: function () {
            return u.call(this);
          },
          set: function (i) {
            ((a = "" + i), n.call(this, i));
          },
        }),
        Object.defineProperty(l, t, { enumerable: e.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (i) {
            a = "" + i;
          },
          stopTracking: function () {
            ((l._valueTracker = null), delete l[t]);
          },
        }
      );
    }
  }
  function Fn(l) {
    if (!l._valueTracker) {
      var t = _f(l) ? "checked" : "value";
      l._valueTracker = Xm(l, t, "" + l[t]);
    }
  }
  function Of(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(),
      e = "";
    return (
      l && (e = _f(l) ? (l.checked ? "true" : "false") : l.value),
      (l = e),
      l !== a ? (t.setValue(l), !0) : !1
    );
  }
  function Ou(l) {
    if (
      ((l = l || (typeof document < "u" ? document : void 0)), typeof l > "u")
    )
      return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  var Qm = /[\n"\\]/g;
  function ft(l) {
    return l.replace(Qm, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function kn(l, t, a, e, u, n, i, c) {
    ((l.name = ""),
      i != null &&
      typeof i != "function" &&
      typeof i != "symbol" &&
      typeof i != "boolean"
        ? (l.type = i)
        : l.removeAttribute("type"),
      t != null
        ? i === "number"
          ? ((t === 0 && l.value === "") || l.value != t) &&
            (l.value = "" + ct(t))
          : l.value !== "" + ct(t) && (l.value = "" + ct(t))
        : (i !== "submit" && i !== "reset") || l.removeAttribute("value"),
      t != null
        ? In(l, i, ct(t))
        : a != null
          ? In(l, i, ct(a))
          : e != null && l.removeAttribute("value"),
      u == null && n != null && (l.defaultChecked = !!n),
      u != null &&
        (l.checked = u && typeof u != "function" && typeof u != "symbol"),
      c != null &&
      typeof c != "function" &&
      typeof c != "symbol" &&
      typeof c != "boolean"
        ? (l.name = "" + ct(c))
        : l.removeAttribute("name"));
  }
  function Mf(l, t, a, e, u, n, i, c) {
    if (
      (n != null &&
        typeof n != "function" &&
        typeof n != "symbol" &&
        typeof n != "boolean" &&
        (l.type = n),
      t != null || a != null)
    ) {
      if (!((n !== "submit" && n !== "reset") || t != null)) {
        Fn(l);
        return;
      }
      ((a = a != null ? "" + ct(a) : ""),
        (t = t != null ? "" + ct(t) : a),
        c || t === l.value || (l.value = t),
        (l.defaultValue = t));
    }
    ((e = e ?? u),
      (e = typeof e != "function" && typeof e != "symbol" && !!e),
      (l.checked = c ? l.checked : !!e),
      (l.defaultChecked = !!e),
      i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (l.name = i),
      Fn(l));
  }
  function In(l, t, a) {
    (t === "number" && Ou(l.ownerDocument) === l) ||
      l.defaultValue === "" + a ||
      (l.defaultValue = "" + a);
  }
  function Ja(l, t, a, e) {
    if (((l = l.options), t)) {
      t = {};
      for (var u = 0; u < a.length; u++) t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        ((u = t.hasOwnProperty("$" + l[a].value)),
          l[a].selected !== u && (l[a].selected = u),
          u && e && (l[a].defaultSelected = !0));
    } else {
      for (a = "" + ct(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          ((l[u].selected = !0), e && (l[u].defaultSelected = !0));
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Df(l, t, a) {
    if (
      t != null &&
      ((t = "" + ct(t)), t !== l.value && (l.value = t), a == null)
    ) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + ct(a) : "";
  }
  function jf(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(r(92));
        if (gt(e)) {
          if (1 < e.length) throw Error(r(93));
          e = e[0];
        }
        a = e;
      }
      (a == null && (a = ""), (t = a));
    }
    ((a = ct(t)),
      (l.defaultValue = a),
      (e = l.textContent),
      e === a && e !== "" && e !== null && (l.value = e),
      Fn(l));
  }
  function wa(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Zm = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " ",
    ),
  );
  function Uf(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === ""
      ? e
        ? l.setProperty(t, "")
        : t === "float"
          ? (l.cssFloat = "")
          : (l[t] = "")
      : e
        ? l.setProperty(t, a)
        : typeof a != "number" || a === 0 || Zm.has(t)
          ? t === "float"
            ? (l.cssFloat = a)
            : (l[t] = ("" + a).trim())
          : (l[t] = a + "px");
  }
  function Hf(l, t, a) {
    if (t != null && typeof t != "object") throw Error(r(62));
    if (((l = l.style), a != null)) {
      for (var e in a)
        !a.hasOwnProperty(e) ||
          (t != null && t.hasOwnProperty(e)) ||
          (e.indexOf("--") === 0
            ? l.setProperty(e, "")
            : e === "float"
              ? (l.cssFloat = "")
              : (l[e] = ""));
      for (var u in t)
        ((e = t[u]), t.hasOwnProperty(u) && a[u] !== e && Uf(l, u, e));
    } else for (var n in t) t.hasOwnProperty(n) && Uf(l, n, t[n]);
  }
  function Pn(l) {
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
  var Vm = new Map([
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
      ["xHeight", "x-height"],
    ]),
    Lm =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Mu(l) {
    return Lm.test("" + l)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : l;
  }
  function jt() {}
  var li = null;
  function ti(l) {
    return (
      (l = l.target || l.srcElement || window),
      l.correspondingUseElement && (l = l.correspondingUseElement),
      l.nodeType === 3 ? l.parentNode : l
    );
  }
  var Wa = null,
    $a = null;
  function Rf(l) {
    var t = Va(l);
    if (t && (l = t.stateNode)) {
      var a = l[Ql] || null;
      l: switch (((l = t.stateNode), t.type)) {
        case "input":
          if (
            (kn(
              l,
              a.value,
              a.defaultValue,
              a.defaultValue,
              a.checked,
              a.defaultChecked,
              a.type,
              a.name,
            ),
            (t = a.name),
            a.type === "radio" && t != null)
          ) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (
              a = a.querySelectorAll(
                'input[name="' + ft("" + t) + '"][type="radio"]',
              ),
                t = 0;
              t < a.length;
              t++
            ) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[Ql] || null;
                if (!u) throw Error(r(90));
                kn(
                  e,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name,
                );
              }
            }
            for (t = 0; t < a.length; t++)
              ((e = a[t]), e.form === l.form && Of(e));
          }
          break l;
        case "textarea":
          Df(l, a.value, a.defaultValue);
          break l;
        case "select":
          ((t = a.value), t != null && Ja(l, !!a.multiple, t, !1));
      }
    }
  }
  var ai = !1;
  function Cf(l, t, a) {
    if (ai) return l(t, a);
    ai = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (
        ((ai = !1),
        (Wa !== null || $a !== null) &&
          (gn(), Wa && ((t = Wa), (l = $a), ($a = Wa = null), Rf(t), l)))
      )
        for (t = 0; t < l.length; t++) Rf(l[t]);
    }
  }
  function je(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[Ql] || null;
    if (e === null) return null;
    a = e[t];
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
        ((e = !e.disabled) ||
          ((l = l.type),
          (e = !(
            l === "button" ||
            l === "input" ||
            l === "select" ||
            l === "textarea"
          ))),
          (l = !e));
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function") throw Error(r(231, t, typeof a));
    return a;
  }
  var Ut = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    ei = !1;
  if (Ut)
    try {
      var Ue = {};
      (Object.defineProperty(Ue, "passive", {
        get: function () {
          ei = !0;
        },
      }),
        window.addEventListener("test", Ue, Ue),
        window.removeEventListener("test", Ue, Ue));
    } catch {
      ei = !1;
    }
  var kt = null,
    ui = null,
    Du = null;
  function qf() {
    if (Du) return Du;
    var l,
      t = ui,
      a = t.length,
      e,
      u = "value" in kt ? kt.value : kt.textContent,
      n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++);
    var i = a - l;
    for (e = 1; e <= i && t[a - e] === u[n - e]; e++);
    return (Du = u.slice(l, 1 < e ? 1 - e : void 0));
  }
  function ju(l) {
    var t = l.keyCode;
    return (
      "charCode" in l
        ? ((l = l.charCode), l === 0 && t === 13 && (l = 13))
        : (l = t),
      l === 10 && (l = 13),
      32 <= l || l === 13 ? l : 0
    );
  }
  function Uu() {
    return !0;
  }
  function Yf() {
    return !1;
  }
  function Zl(l) {
    function t(a, e, u, n, i) {
      ((this._reactName = a),
        (this._targetInst = u),
        (this.type = e),
        (this.nativeEvent = n),
        (this.target = i),
        (this.currentTarget = null));
      for (var c in l)
        l.hasOwnProperty(c) && ((a = l[c]), (this[c] = a ? a(n) : n[c]));
      return (
        (this.isDefaultPrevented = (
          n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1
        )
          ? Uu
          : Yf),
        (this.isPropagationStopped = Yf),
        this
      );
    }
    return (
      H(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a &&
            (a.preventDefault
              ? a.preventDefault()
              : typeof a.returnValue != "unknown" && (a.returnValue = !1),
            (this.isDefaultPrevented = Uu));
        },
        stopPropagation: function () {
          var a = this.nativeEvent;
          a &&
            (a.stopPropagation
              ? a.stopPropagation()
              : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0),
            (this.isPropagationStopped = Uu));
        },
        persist: function () {},
        isPersistent: Uu,
      }),
      t
    );
  }
  var Aa = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (l) {
        return l.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    Hu = Zl(Aa),
    He = H({}, Aa, { view: 0, detail: 0 }),
    Km = Zl(He),
    ni,
    ii,
    Re,
    Ru = H({}, He, {
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
      getModifierState: fi,
      button: 0,
      buttons: 0,
      relatedTarget: function (l) {
        return l.relatedTarget === void 0
          ? l.fromElement === l.srcElement
            ? l.toElement
            : l.fromElement
          : l.relatedTarget;
      },
      movementX: function (l) {
        return "movementX" in l
          ? l.movementX
          : (l !== Re &&
              (Re && l.type === "mousemove"
                ? ((ni = l.screenX - Re.screenX), (ii = l.screenY - Re.screenY))
                : (ii = ni = 0),
              (Re = l)),
            ni);
      },
      movementY: function (l) {
        return "movementY" in l ? l.movementY : ii;
      },
    }),
    Bf = Zl(Ru),
    Jm = H({}, Ru, { dataTransfer: 0 }),
    wm = Zl(Jm),
    Wm = H({}, He, { relatedTarget: 0 }),
    ci = Zl(Wm),
    $m = H({}, Aa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    Fm = Zl($m),
    km = H({}, Aa, {
      clipboardData: function (l) {
        return "clipboardData" in l ? l.clipboardData : window.clipboardData;
      },
    }),
    Im = Zl(km),
    Pm = H({}, Aa, { data: 0 }),
    Gf = Zl(Pm),
    l0 = {
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
      MozPrintableKey: "Unidentified",
    },
    t0 = {
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
      224: "Meta",
    },
    a0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function e0(l) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(l)
      : (l = a0[l])
        ? !!t[l]
        : !1;
  }
  function fi() {
    return e0;
  }
  var u0 = H({}, He, {
      key: function (l) {
        if (l.key) {
          var t = l0[l.key] || l.key;
          if (t !== "Unidentified") return t;
        }
        return l.type === "keypress"
          ? ((l = ju(l)), l === 13 ? "Enter" : String.fromCharCode(l))
          : l.type === "keydown" || l.type === "keyup"
            ? t0[l.keyCode] || "Unidentified"
            : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: fi,
      charCode: function (l) {
        return l.type === "keypress" ? ju(l) : 0;
      },
      keyCode: function (l) {
        return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
      },
      which: function (l) {
        return l.type === "keypress"
          ? ju(l)
          : l.type === "keydown" || l.type === "keyup"
            ? l.keyCode
            : 0;
      },
    }),
    n0 = Zl(u0),
    i0 = H({}, Ru, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    Xf = Zl(i0),
    c0 = H({}, He, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: fi,
    }),
    f0 = Zl(c0),
    s0 = H({}, Aa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    d0 = Zl(s0),
    o0 = H({}, Ru, {
      deltaX: function (l) {
        return "deltaX" in l
          ? l.deltaX
          : "wheelDeltaX" in l
            ? -l.wheelDeltaX
            : 0;
      },
      deltaY: function (l) {
        return "deltaY" in l
          ? l.deltaY
          : "wheelDeltaY" in l
            ? -l.wheelDeltaY
            : "wheelDelta" in l
              ? -l.wheelDelta
              : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    m0 = Zl(o0),
    h0 = H({}, Aa, { newState: 0, oldState: 0 }),
    v0 = Zl(h0),
    y0 = [9, 13, 27, 32],
    si = Ut && "CompositionEvent" in window,
    Ce = null;
  Ut && "documentMode" in document && (Ce = document.documentMode);
  var r0 = Ut && "TextEvent" in window && !Ce,
    Qf = Ut && (!si || (Ce && 8 < Ce && 11 >= Ce)),
    Zf = " ",
    Vf = !1;
  function Lf(l, t) {
    switch (l) {
      case "keyup":
        return y0.indexOf(t.keyCode) !== -1;
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
  function Kf(l) {
    return (
      (l = l.detail),
      typeof l == "object" && "data" in l ? l.data : null
    );
  }
  var Fa = !1;
  function g0(l, t) {
    switch (l) {
      case "compositionend":
        return Kf(t);
      case "keypress":
        return t.which !== 32 ? null : ((Vf = !0), Zf);
      case "textInput":
        return ((l = t.data), l === Zf && Vf ? null : l);
      default:
        return null;
    }
  }
  function b0(l, t) {
    if (Fa)
      return l === "compositionend" || (!si && Lf(l, t))
        ? ((l = qf()), (Du = ui = kt = null), (Fa = !1), l)
        : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Qf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var S0 = {
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
    week: !0,
  };
  function Jf(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!S0[l.type] : t === "textarea";
  }
  function wf(l, t, a, e) {
    (Wa ? ($a ? $a.push(e) : ($a = [e])) : (Wa = e),
      (t = An(t, "onChange")),
      0 < t.length &&
        ((a = new Hu("onChange", "change", null, a, e)),
        l.push({ event: a, listeners: t })));
  }
  var qe = null,
    Ye = null;
  function x0(l) {
    Do(l, 0);
  }
  function Cu(l) {
    var t = De(l);
    if (Of(t)) return l;
  }
  function Wf(l, t) {
    if (l === "change") return t;
  }
  var $f = !1;
  if (Ut) {
    var di;
    if (Ut) {
      var oi = "oninput" in document;
      if (!oi) {
        var Ff = document.createElement("div");
        (Ff.setAttribute("oninput", "return;"),
          (oi = typeof Ff.oninput == "function"));
      }
      di = oi;
    } else di = !1;
    $f = di && (!document.documentMode || 9 < document.documentMode);
  }
  function kf() {
    qe && (qe.detachEvent("onpropertychange", If), (Ye = qe = null));
  }
  function If(l) {
    if (l.propertyName === "value" && Cu(Ye)) {
      var t = [];
      (wf(t, Ye, l, ti(l)), Cf(x0, t));
    }
  }
  function z0(l, t, a) {
    l === "focusin"
      ? (kf(), (qe = t), (Ye = a), qe.attachEvent("onpropertychange", If))
      : l === "focusout" && kf();
  }
  function T0(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return Cu(Ye);
  }
  function E0(l, t) {
    if (l === "click") return Cu(t);
  }
  function A0(l, t) {
    if (l === "input" || l === "change") return Cu(t);
  }
  function p0(l, t) {
    return (l === t && (l !== 0 || 1 / l === 1 / t)) || (l !== l && t !== t);
  }
  var Pl = typeof Object.is == "function" ? Object.is : p0;
  function Be(l, t) {
    if (Pl(l, t)) return !0;
    if (
      typeof l != "object" ||
      l === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var a = Object.keys(l),
      e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Zn.call(t, u) || !Pl(l[u], t[u])) return !1;
    }
    return !0;
  }
  function Pf(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function ls(l, t) {
    var a = Pf(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (((e = l + a.textContent.length), l <= t && e >= t))
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Pf(a);
    }
  }
  function ts(l, t) {
    return l && t
      ? l === t
        ? !0
        : l && l.nodeType === 3
          ? !1
          : t && t.nodeType === 3
            ? ts(l, t.parentNode)
            : "contains" in l
              ? l.contains(t)
              : l.compareDocumentPosition
                ? !!(l.compareDocumentPosition(t) & 16)
                : !1
      : !1;
  }
  function as(l) {
    l =
      l != null &&
      l.ownerDocument != null &&
      l.ownerDocument.defaultView != null
        ? l.ownerDocument.defaultView
        : window;
    for (var t = Ou(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = Ou(l.document);
    }
    return t;
  }
  function mi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (l.type === "text" ||
          l.type === "search" ||
          l.type === "tel" ||
          l.type === "url" ||
          l.type === "password")) ||
        t === "textarea" ||
        l.contentEditable === "true")
    );
  }
  var N0 = Ut && "documentMode" in document && 11 >= document.documentMode,
    ka = null,
    hi = null,
    Ge = null,
    vi = !1;
  function es(l, t, a) {
    var e =
      a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    vi ||
      ka == null ||
      ka !== Ou(e) ||
      ((e = ka),
      "selectionStart" in e && mi(e)
        ? (e = { start: e.selectionStart, end: e.selectionEnd })
        : ((e = (
            (e.ownerDocument && e.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (e = {
            anchorNode: e.anchorNode,
            anchorOffset: e.anchorOffset,
            focusNode: e.focusNode,
            focusOffset: e.focusOffset,
          })),
      (Ge && Be(Ge, e)) ||
        ((Ge = e),
        (e = An(hi, "onSelect")),
        0 < e.length &&
          ((t = new Hu("onSelect", "select", null, t, a)),
          l.push({ event: t, listeners: e }),
          (t.target = ka))));
  }
  function pa(l, t) {
    var a = {};
    return (
      (a[l.toLowerCase()] = t.toLowerCase()),
      (a["Webkit" + l] = "webkit" + t),
      (a["Moz" + l] = "moz" + t),
      a
    );
  }
  var Ia = {
      animationend: pa("Animation", "AnimationEnd"),
      animationiteration: pa("Animation", "AnimationIteration"),
      animationstart: pa("Animation", "AnimationStart"),
      transitionrun: pa("Transition", "TransitionRun"),
      transitionstart: pa("Transition", "TransitionStart"),
      transitioncancel: pa("Transition", "TransitionCancel"),
      transitionend: pa("Transition", "TransitionEnd"),
    },
    yi = {},
    us = {};
  Ut &&
    ((us = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete Ia.animationend.animation,
      delete Ia.animationiteration.animation,
      delete Ia.animationstart.animation),
    "TransitionEvent" in window || delete Ia.transitionend.transition);
  function Na(l) {
    if (yi[l]) return yi[l];
    if (!Ia[l]) return l;
    var t = Ia[l],
      a;
    for (a in t) if (t.hasOwnProperty(a) && a in us) return (yi[l] = t[a]);
    return l;
  }
  var ns = Na("animationend"),
    is = Na("animationiteration"),
    cs = Na("animationstart"),
    _0 = Na("transitionrun"),
    O0 = Na("transitionstart"),
    M0 = Na("transitioncancel"),
    fs = Na("transitionend"),
    ss = new Map(),
    ri =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " ",
      );
  ri.push("scrollEnd");
  function bt(l, t) {
    (ss.set(l, t), Ea(t, [l]));
  }
  var qu =
      typeof reportError == "function"
        ? reportError
        : function (l) {
            if (
              typeof window == "object" &&
              typeof window.ErrorEvent == "function"
            ) {
              var t = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message:
                  typeof l == "object" &&
                  l !== null &&
                  typeof l.message == "string"
                    ? String(l.message)
                    : String(l),
                error: l,
              });
              if (!window.dispatchEvent(t)) return;
            } else if (
              typeof process == "object" &&
              typeof process.emit == "function"
            ) {
              process.emit("uncaughtException", l);
              return;
            }
            console.error(l);
          },
    st = [],
    Pa = 0,
    gi = 0;
  function Yu() {
    for (var l = Pa, t = (gi = Pa = 0); t < l; ) {
      var a = st[t];
      st[t++] = null;
      var e = st[t];
      st[t++] = null;
      var u = st[t];
      st[t++] = null;
      var n = st[t];
      if (((st[t++] = null), e !== null && u !== null)) {
        var i = e.pending;
        (i === null ? (u.next = u) : ((u.next = i.next), (i.next = u)),
          (e.pending = u));
      }
      n !== 0 && ds(a, u, n);
    }
  }
  function Bu(l, t, a, e) {
    ((st[Pa++] = l),
      (st[Pa++] = t),
      (st[Pa++] = a),
      (st[Pa++] = e),
      (gi |= e),
      (l.lanes |= e),
      (l = l.alternate),
      l !== null && (l.lanes |= e));
  }
  function bi(l, t, a, e) {
    return (Bu(l, t, a, e), Gu(l));
  }
  function _a(l, t) {
    return (Bu(l, null, null, t), Gu(l));
  }
  function ds(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      ((n.childLanes |= a),
        (e = n.alternate),
        e !== null && (e.childLanes |= a),
        n.tag === 22 &&
          ((l = n.stateNode), l === null || l._visibility & 1 || (u = !0)),
        (l = n),
        (n = n.return));
    return l.tag === 3
      ? ((n = l.stateNode),
        u &&
          t !== null &&
          ((u = 31 - Il(a)),
          (l = n.hiddenUpdates),
          (e = l[u]),
          e === null ? (l[u] = [t]) : e.push(t),
          (t.lane = a | 536870912)),
        n)
      : null;
  }
  function Gu(l) {
    if (50 < cu) throw ((cu = 0), (_c = null), Error(r(185)));
    for (var t = l.return; t !== null; ) ((l = t), (t = l.return));
    return l.tag === 3 ? l.stateNode : null;
  }
  var le = {};
  function D0(l, t, a, e) {
    ((this.tag = l),
      (this.key = a),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = e),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null));
  }
  function lt(l, t, a, e) {
    return new D0(l, t, a, e);
  }
  function Si(l) {
    return ((l = l.prototype), !(!l || !l.isReactComponent));
  }
  function Ht(l, t) {
    var a = l.alternate;
    return (
      a === null
        ? ((a = lt(l.tag, t, l.key, l.mode)),
          (a.elementType = l.elementType),
          (a.type = l.type),
          (a.stateNode = l.stateNode),
          (a.alternate = l),
          (l.alternate = a))
        : ((a.pendingProps = t),
          (a.type = l.type),
          (a.flags = 0),
          (a.subtreeFlags = 0),
          (a.deletions = null)),
      (a.flags = l.flags & 65011712),
      (a.childLanes = l.childLanes),
      (a.lanes = l.lanes),
      (a.child = l.child),
      (a.memoizedProps = l.memoizedProps),
      (a.memoizedState = l.memoizedState),
      (a.updateQueue = l.updateQueue),
      (t = l.dependencies),
      (a.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (a.sibling = l.sibling),
      (a.index = l.index),
      (a.ref = l.ref),
      (a.refCleanup = l.refCleanup),
      a
    );
  }
  function os(l, t) {
    l.flags &= 65011714;
    var a = l.alternate;
    return (
      a === null
        ? ((l.childLanes = 0),
          (l.lanes = t),
          (l.child = null),
          (l.subtreeFlags = 0),
          (l.memoizedProps = null),
          (l.memoizedState = null),
          (l.updateQueue = null),
          (l.dependencies = null),
          (l.stateNode = null))
        : ((l.childLanes = a.childLanes),
          (l.lanes = a.lanes),
          (l.child = a.child),
          (l.subtreeFlags = 0),
          (l.deletions = null),
          (l.memoizedProps = a.memoizedProps),
          (l.memoizedState = a.memoizedState),
          (l.updateQueue = a.updateQueue),
          (l.type = a.type),
          (t = a.dependencies),
          (l.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      l
    );
  }
  function Xu(l, t, a, e, u, n) {
    var i = 0;
    if (((e = l), typeof l == "function")) Si(l) && (i = 1);
    else if (typeof l == "string")
      i = Ch(l, a, O.current)
        ? 26
        : l === "html" || l === "head" || l === "body"
          ? 27
          : 5;
    else
      l: switch (l) {
        case Tt:
          return (
            (l = lt(31, a, t, u)),
            (l.elementType = Tt),
            (l.lanes = n),
            l
          );
        case Rl:
          return Oa(a.children, u, n, t);
        case Ot:
          ((i = 8), (u |= 24));
          break;
        case $l:
          return (
            (l = lt(12, a, t, u | 2)),
            (l.elementType = $l),
            (l.lanes = n),
            l
          );
        case zt:
          return (
            (l = lt(13, a, t, u)),
            (l.elementType = zt),
            (l.lanes = n),
            l
          );
        case Bl:
          return (
            (l = lt(19, a, t, u)),
            (l.elementType = Bl),
            (l.lanes = n),
            l
          );
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case jl:
                i = 10;
                break l;
              case Wt:
                i = 9;
                break l;
              case it:
                i = 11;
                break l;
              case w:
                i = 14;
                break l;
              case Gl:
                ((i = 16), (e = null));
                break l;
            }
          ((i = 29),
            (a = Error(r(130, l === null ? "null" : typeof l, ""))),
            (e = null));
      }
    return (
      (t = lt(i, a, t, u)),
      (t.elementType = l),
      (t.type = e),
      (t.lanes = n),
      t
    );
  }
  function Oa(l, t, a, e) {
    return ((l = lt(7, l, e, t)), (l.lanes = a), l);
  }
  function xi(l, t, a) {
    return ((l = lt(6, l, null, t)), (l.lanes = a), l);
  }
  function ms(l) {
    var t = lt(18, null, null, 0);
    return ((t.stateNode = l), t);
  }
  function zi(l, t, a) {
    return (
      (t = lt(4, l.children !== null ? l.children : [], l.key, t)),
      (t.lanes = a),
      (t.stateNode = {
        containerInfo: l.containerInfo,
        pendingChildren: null,
        implementation: l.implementation,
      }),
      t
    );
  }
  var hs = new WeakMap();
  function dt(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = hs.get(l);
      return a !== void 0
        ? a
        : ((t = { value: l, source: t, stack: mf(t) }), hs.set(l, t), t);
    }
    return { value: l, source: t, stack: mf(t) };
  }
  var te = [],
    ae = 0,
    Qu = null,
    Xe = 0,
    ot = [],
    mt = 0,
    It = null,
    At = 1,
    pt = "";
  function Rt(l, t) {
    ((te[ae++] = Xe), (te[ae++] = Qu), (Qu = l), (Xe = t));
  }
  function vs(l, t, a) {
    ((ot[mt++] = At), (ot[mt++] = pt), (ot[mt++] = It), (It = l));
    var e = At;
    l = pt;
    var u = 32 - Il(e) - 1;
    ((e &= ~(1 << u)), (a += 1));
    var n = 32 - Il(t) + u;
    if (30 < n) {
      var i = u - (u % 5);
      ((n = (e & ((1 << i) - 1)).toString(32)),
        (e >>= i),
        (u -= i),
        (At = (1 << (32 - Il(t) + u)) | (a << u) | e),
        (pt = n + l));
    } else ((At = (1 << n) | (a << u) | e), (pt = l));
  }
  function Ti(l) {
    l.return !== null && (Rt(l, 1), vs(l, 1, 0));
  }
  function Ei(l) {
    for (; l === Qu; )
      ((Qu = te[--ae]), (te[ae] = null), (Xe = te[--ae]), (te[ae] = null));
    for (; l === It; )
      ((It = ot[--mt]),
        (ot[mt] = null),
        (pt = ot[--mt]),
        (ot[mt] = null),
        (At = ot[--mt]),
        (ot[mt] = null));
  }
  function ys(l, t) {
    ((ot[mt++] = At),
      (ot[mt++] = pt),
      (ot[mt++] = It),
      (At = t.id),
      (pt = t.overflow),
      (It = l));
  }
  var _l = null,
    sl = null,
    W = !1,
    Pt = null,
    ht = !1,
    Ai = Error(r(519));
  function la(l) {
    var t = Error(
      r(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1]
          ? "text"
          : "HTML",
        "",
      ),
    );
    throw (Qe(dt(t, l)), Ai);
  }
  function rs(l) {
    var t = l.stateNode,
      a = l.type,
      e = l.memoizedProps;
    switch (((t[Nl] = l), (t[Ql] = e), a)) {
      case "dialog":
        (L("cancel", t), L("close", t));
        break;
      case "iframe":
      case "object":
      case "embed":
        L("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < su.length; a++) L(su[a], t);
        break;
      case "source":
        L("error", t);
        break;
      case "img":
      case "image":
      case "link":
        (L("error", t), L("load", t));
        break;
      case "details":
        L("toggle", t);
        break;
      case "input":
        (L("invalid", t),
          Mf(
            t,
            e.value,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name,
            !0,
          ));
        break;
      case "select":
        L("invalid", t);
        break;
      case "textarea":
        (L("invalid", t), jf(t, e.value, e.defaultValue, e.children));
    }
    ((a = e.children),
      (typeof a != "string" && typeof a != "number" && typeof a != "bigint") ||
      t.textContent === "" + a ||
      e.suppressHydrationWarning === !0 ||
      Ro(t.textContent, a)
        ? (e.popover != null && (L("beforetoggle", t), L("toggle", t)),
          e.onScroll != null && L("scroll", t),
          e.onScrollEnd != null && L("scrollend", t),
          e.onClick != null && (t.onclick = jt),
          (t = !0))
        : (t = !1),
      t || la(l, !0));
  }
  function gs(l) {
    for (_l = l.return; _l; )
      switch (_l.tag) {
        case 5:
        case 31:
        case 13:
          ht = !1;
          return;
        case 27:
        case 3:
          ht = !0;
          return;
        default:
          _l = _l.return;
      }
  }
  function ee(l) {
    if (l !== _l) return !1;
    if (!W) return (gs(l), (W = !0), !1);
    var t = l.tag,
      a;
    if (
      ((a = t !== 3 && t !== 27) &&
        ((a = t === 5) &&
          ((a = l.type),
          (a =
            !(a !== "form" && a !== "button") || Zc(l.type, l.memoizedProps))),
        (a = !a)),
      a && sl && la(l),
      gs(l),
      t === 13)
    ) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      sl = Vo(l);
    } else if (t === 31) {
      if (((l = l.memoizedState), (l = l !== null ? l.dehydrated : null), !l))
        throw Error(r(317));
      sl = Vo(l);
    } else
      t === 27
        ? ((t = sl), va(l.type) ? ((l = wc), (wc = null), (sl = l)) : (sl = t))
        : (sl = _l ? yt(l.stateNode.nextSibling) : null);
    return !0;
  }
  function Ma() {
    ((sl = _l = null), (W = !1));
  }
  function pi() {
    var l = Pt;
    return (
      l !== null &&
        (Jl === null ? (Jl = l) : Jl.push.apply(Jl, l), (Pt = null)),
      l
    );
  }
  function Qe(l) {
    Pt === null ? (Pt = [l]) : Pt.push(l);
  }
  var Ni = d(null),
    Da = null,
    Ct = null;
  function ta(l, t, a) {
    (p(Ni, t._currentValue), (t._currentValue = a));
  }
  function qt(l) {
    ((l._currentValue = Ni.current), T(Ni));
  }
  function _i(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if (
        ((l.childLanes & t) !== t
          ? ((l.childLanes |= t), e !== null && (e.childLanes |= t))
          : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t),
        l === a)
      )
        break;
      l = l.return;
    }
  }
  function Oi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var i = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var c = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (c.context === t[f]) {
              ((n.lanes |= a),
                (c = n.alternate),
                c !== null && (c.lanes |= a),
                _i(n.return, a, l),
                e || (i = null));
              break l;
            }
          n = c.next;
        }
      } else if (u.tag === 18) {
        if (((i = u.return), i === null)) throw Error(r(341));
        ((i.lanes |= a),
          (n = i.alternate),
          n !== null && (n.lanes |= a),
          _i(i, a, l),
          (i = null));
      } else i = u.child;
      if (i !== null) i.return = u;
      else
        for (i = u; i !== null; ) {
          if (i === l) {
            i = null;
            break;
          }
          if (((u = i.sibling), u !== null)) {
            ((u.return = i.return), (i = u));
            break;
          }
          i = i.return;
        }
      u = i;
    }
  }
  function ue(l, t, a, e) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var i = u.alternate;
        if (i === null) throw Error(r(387));
        if (((i = i.memoizedProps), i !== null)) {
          var c = u.type;
          Pl(u.pendingProps.value, i.value) ||
            (l !== null ? l.push(c) : (l = [c]));
        }
      } else if (u === ll.current) {
        if (((i = u.alternate), i === null)) throw Error(r(387));
        i.memoizedState.memoizedState !== u.memoizedState.memoizedState &&
          (l !== null ? l.push(vu) : (l = [vu]));
      }
      u = u.return;
    }
    (l !== null && Oi(t, l, a, e), (t.flags |= 262144));
  }
  function Zu(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!Pl(l.context._currentValue, l.memoizedValue)) return !0;
      l = l.next;
    }
    return !1;
  }
  function ja(l) {
    ((Da = l),
      (Ct = null),
      (l = l.dependencies),
      l !== null && (l.firstContext = null));
  }
  function Ol(l) {
    return bs(Da, l);
  }
  function Vu(l, t) {
    return (Da === null && ja(l), bs(l, t));
  }
  function bs(l, t) {
    var a = t._currentValue;
    if (((t = { context: t, memoizedValue: a, next: null }), Ct === null)) {
      if (l === null) throw Error(r(308));
      ((Ct = t),
        (l.dependencies = { lanes: 0, firstContext: t }),
        (l.flags |= 524288));
    } else Ct = Ct.next = t;
    return a;
  }
  var j0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var l = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (a, e) {
                  l.push(e);
                },
              });
            this.abort = function () {
              ((t.aborted = !0),
                l.forEach(function (a) {
                  return a();
                }));
            };
          },
    U0 = N.unstable_scheduleCallback,
    H0 = N.unstable_NormalPriority,
    Sl = {
      $$typeof: jl,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Mi() {
    return { controller: new j0(), data: new Map(), refCount: 0 };
  }
  function Ze(l) {
    (l.refCount--,
      l.refCount === 0 &&
        U0(H0, function () {
          l.controller.abort();
        }));
  }
  var Ve = null,
    Di = 0,
    ne = 0,
    ie = null;
  function R0(l, t) {
    if (Ve === null) {
      var a = (Ve = []);
      ((Di = 0),
        (ne = Hc()),
        (ie = {
          status: "pending",
          value: void 0,
          then: function (e) {
            a.push(e);
          },
        }));
    }
    return (Di++, t.then(Ss, Ss), t);
  }
  function Ss() {
    if (--Di === 0 && Ve !== null) {
      ie !== null && (ie.status = "fulfilled");
      var l = Ve;
      ((Ve = null), (ne = 0), (ie = null));
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function C0(l, t) {
    var a = [],
      e = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          a.push(u);
        },
      };
    return (
      l.then(
        function () {
          ((e.status = "fulfilled"), (e.value = t));
          for (var u = 0; u < a.length; u++) (0, a[u])(t);
        },
        function (u) {
          for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
            (0, a[u])(void 0);
        },
      ),
      e
    );
  }
  var xs = S.S;
  S.S = function (l, t) {
    ((eo = Fl()),
      typeof t == "object" &&
        t !== null &&
        typeof t.then == "function" &&
        R0(l, t),
      xs !== null && xs(l, t));
  };
  var Ua = d(null);
  function ji() {
    var l = Ua.current;
    return l !== null ? l : fl.pooledCache;
  }
  function Lu(l, t) {
    t === null ? p(Ua, Ua.current) : p(Ua, t.pool);
  }
  function zs() {
    var l = ji();
    return l === null ? null : { parent: Sl._currentValue, pool: l };
  }
  var ce = Error(r(460)),
    Ui = Error(r(474)),
    Ku = Error(r(542)),
    Ju = { then: function () {} };
  function Ts(l) {
    return ((l = l.status), l === "fulfilled" || l === "rejected");
  }
  function Es(l, t, a) {
    switch (
      ((a = l[a]),
      a === void 0 ? l.push(t) : a !== t && (t.then(jt, jt), (t = a)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((l = t.reason), ps(l), l);
      default:
        if (typeof t.status == "string") t.then(jt, jt);
        else {
          if (((l = fl), l !== null && 100 < l.shellSuspendCounter))
            throw Error(r(482));
          ((l = t),
            (l.status = "pending"),
            l.then(
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "fulfilled"), (u.value = e));
                }
              },
              function (e) {
                if (t.status === "pending") {
                  var u = t;
                  ((u.status = "rejected"), (u.reason = e));
                }
              },
            ));
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((l = t.reason), ps(l), l);
        }
        throw ((Ra = t), ce);
    }
  }
  function Ha(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function"
        ? ((Ra = a), ce)
        : a;
    }
  }
  var Ra = null;
  function As() {
    if (Ra === null) throw Error(r(459));
    var l = Ra;
    return ((Ra = null), l);
  }
  function ps(l) {
    if (l === ce || l === Ku) throw Error(r(483));
  }
  var fe = null,
    Le = 0;
  function wu(l) {
    var t = Le;
    return ((Le += 1), fe === null && (fe = []), Es(fe, l, t));
  }
  function Ke(l, t) {
    ((t = t.props.ref), (l.ref = t !== void 0 ? t : null));
  }
  function Wu(l, t) {
    throw t.$$typeof === ol
      ? Error(r(525))
      : ((l = Object.prototype.toString.call(t)),
        Error(
          r(
            31,
            l === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : l,
          ),
        ));
  }
  function Ns(l) {
    function t(o, s) {
      if (l) {
        var m = o.deletions;
        m === null ? ((o.deletions = [s]), (o.flags |= 16)) : m.push(s);
      }
    }
    function a(o, s) {
      if (!l) return null;
      for (; s !== null; ) (t(o, s), (s = s.sibling));
      return null;
    }
    function e(o) {
      for (var s = new Map(); o !== null; )
        (o.key !== null ? s.set(o.key, o) : s.set(o.index, o), (o = o.sibling));
      return s;
    }
    function u(o, s) {
      return ((o = Ht(o, s)), (o.index = 0), (o.sibling = null), o);
    }
    function n(o, s, m) {
      return (
        (o.index = m),
        l
          ? ((m = o.alternate),
            m !== null
              ? ((m = m.index), m < s ? ((o.flags |= 67108866), s) : m)
              : ((o.flags |= 67108866), s))
          : ((o.flags |= 1048576), s)
      );
    }
    function i(o) {
      return (l && o.alternate === null && (o.flags |= 67108866), o);
    }
    function c(o, s, m, x) {
      return s === null || s.tag !== 6
        ? ((s = xi(m, o.mode, x)), (s.return = o), s)
        : ((s = u(s, m)), (s.return = o), s);
    }
    function f(o, s, m, x) {
      var D = m.type;
      return D === Rl
        ? b(o, s, m.props.children, x, m.key)
        : s !== null &&
            (s.elementType === D ||
              (typeof D == "object" &&
                D !== null &&
                D.$$typeof === Gl &&
                Ha(D) === s.type))
          ? ((s = u(s, m.props)), Ke(s, m), (s.return = o), s)
          : ((s = Xu(m.type, m.key, m.props, null, o.mode, x)),
            Ke(s, m),
            (s.return = o),
            s);
    }
    function h(o, s, m, x) {
      return s === null ||
        s.tag !== 4 ||
        s.stateNode.containerInfo !== m.containerInfo ||
        s.stateNode.implementation !== m.implementation
        ? ((s = zi(m, o.mode, x)), (s.return = o), s)
        : ((s = u(s, m.children || [])), (s.return = o), s);
    }
    function b(o, s, m, x, D) {
      return s === null || s.tag !== 7
        ? ((s = Oa(m, o.mode, x, D)), (s.return = o), s)
        : ((s = u(s, m)), (s.return = o), s);
    }
    function z(o, s, m) {
      if (
        (typeof s == "string" && s !== "") ||
        typeof s == "number" ||
        typeof s == "bigint"
      )
        return ((s = xi("" + s, o.mode, m)), (s.return = o), s);
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Wl:
            return (
              (m = Xu(s.type, s.key, s.props, null, o.mode, m)),
              Ke(m, s),
              (m.return = o),
              m
            );
          case Yl:
            return ((s = zi(s, o.mode, m)), (s.return = o), s);
          case Gl:
            return ((s = Ha(s)), z(o, s, m));
        }
        if (gt(s) || Xl(s))
          return ((s = Oa(s, o.mode, m, null)), (s.return = o), s);
        if (typeof s.then == "function") return z(o, wu(s), m);
        if (s.$$typeof === jl) return z(o, Vu(o, s), m);
        Wu(o, s);
      }
      return null;
    }
    function y(o, s, m, x) {
      var D = s !== null ? s.key : null;
      if (
        (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
      )
        return D !== null ? null : c(o, s, "" + m, x);
      if (typeof m == "object" && m !== null) {
        switch (m.$$typeof) {
          case Wl:
            return m.key === D ? f(o, s, m, x) : null;
          case Yl:
            return m.key === D ? h(o, s, m, x) : null;
          case Gl:
            return ((m = Ha(m)), y(o, s, m, x));
        }
        if (gt(m) || Xl(m)) return D !== null ? null : b(o, s, m, x, null);
        if (typeof m.then == "function") return y(o, s, wu(m), x);
        if (m.$$typeof === jl) return y(o, s, Vu(o, m), x);
        Wu(o, m);
      }
      return null;
    }
    function g(o, s, m, x, D) {
      if (
        (typeof x == "string" && x !== "") ||
        typeof x == "number" ||
        typeof x == "bigint"
      )
        return ((o = o.get(m) || null), c(s, o, "" + x, D));
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Wl:
            return (
              (o = o.get(x.key === null ? m : x.key) || null),
              f(s, o, x, D)
            );
          case Yl:
            return (
              (o = o.get(x.key === null ? m : x.key) || null),
              h(s, o, x, D)
            );
          case Gl:
            return ((x = Ha(x)), g(o, s, m, x, D));
        }
        if (gt(x) || Xl(x))
          return ((o = o.get(m) || null), b(s, o, x, D, null));
        if (typeof x.then == "function") return g(o, s, m, wu(x), D);
        if (x.$$typeof === jl) return g(o, s, m, Vu(s, x), D);
        Wu(s, x);
      }
      return null;
    }
    function _(o, s, m, x) {
      for (
        var D = null, $ = null, M = s, G = (s = 0), J = null;
        M !== null && G < m.length;
        G++
      ) {
        M.index > G ? ((J = M), (M = null)) : (J = M.sibling);
        var F = y(o, M, m[G], x);
        if (F === null) {
          M === null && (M = J);
          break;
        }
        (l && M && F.alternate === null && t(o, M),
          (s = n(F, s, G)),
          $ === null ? (D = F) : ($.sibling = F),
          ($ = F),
          (M = J));
      }
      if (G === m.length) return (a(o, M), W && Rt(o, G), D);
      if (M === null) {
        for (; G < m.length; G++)
          ((M = z(o, m[G], x)),
            M !== null &&
              ((s = n(M, s, G)),
              $ === null ? (D = M) : ($.sibling = M),
              ($ = M)));
        return (W && Rt(o, G), D);
      }
      for (M = e(M); G < m.length; G++)
        ((J = g(M, o, G, m[G], x)),
          J !== null &&
            (l && J.alternate !== null && M.delete(J.key === null ? G : J.key),
            (s = n(J, s, G)),
            $ === null ? (D = J) : ($.sibling = J),
            ($ = J)));
      return (
        l &&
          M.forEach(function (Sa) {
            return t(o, Sa);
          }),
        W && Rt(o, G),
        D
      );
    }
    function U(o, s, m, x) {
      if (m == null) throw Error(r(151));
      for (
        var D = null, $ = null, M = s, G = (s = 0), J = null, F = m.next();
        M !== null && !F.done;
        G++, F = m.next()
      ) {
        M.index > G ? ((J = M), (M = null)) : (J = M.sibling);
        var Sa = y(o, M, F.value, x);
        if (Sa === null) {
          M === null && (M = J);
          break;
        }
        (l && M && Sa.alternate === null && t(o, M),
          (s = n(Sa, s, G)),
          $ === null ? (D = Sa) : ($.sibling = Sa),
          ($ = Sa),
          (M = J));
      }
      if (F.done) return (a(o, M), W && Rt(o, G), D);
      if (M === null) {
        for (; !F.done; G++, F = m.next())
          ((F = z(o, F.value, x)),
            F !== null &&
              ((s = n(F, s, G)),
              $ === null ? (D = F) : ($.sibling = F),
              ($ = F)));
        return (W && Rt(o, G), D);
      }
      for (M = e(M); !F.done; G++, F = m.next())
        ((F = g(M, o, G, F.value, x)),
          F !== null &&
            (l && F.alternate !== null && M.delete(F.key === null ? G : F.key),
            (s = n(F, s, G)),
            $ === null ? (D = F) : ($.sibling = F),
            ($ = F)));
      return (
        l &&
          M.forEach(function (Jh) {
            return t(o, Jh);
          }),
        W && Rt(o, G),
        D
      );
    }
    function il(o, s, m, x) {
      if (
        (typeof m == "object" &&
          m !== null &&
          m.type === Rl &&
          m.key === null &&
          (m = m.props.children),
        typeof m == "object" && m !== null)
      ) {
        switch (m.$$typeof) {
          case Wl:
            l: {
              for (var D = m.key; s !== null; ) {
                if (s.key === D) {
                  if (((D = m.type), D === Rl)) {
                    if (s.tag === 7) {
                      (a(o, s.sibling),
                        (x = u(s, m.props.children)),
                        (x.return = o),
                        (o = x));
                      break l;
                    }
                  } else if (
                    s.elementType === D ||
                    (typeof D == "object" &&
                      D !== null &&
                      D.$$typeof === Gl &&
                      Ha(D) === s.type)
                  ) {
                    (a(o, s.sibling),
                      (x = u(s, m.props)),
                      Ke(x, m),
                      (x.return = o),
                      (o = x));
                    break l;
                  }
                  a(o, s);
                  break;
                } else t(o, s);
                s = s.sibling;
              }
              m.type === Rl
                ? ((x = Oa(m.props.children, o.mode, x, m.key)),
                  (x.return = o),
                  (o = x))
                : ((x = Xu(m.type, m.key, m.props, null, o.mode, x)),
                  Ke(x, m),
                  (x.return = o),
                  (o = x));
            }
            return i(o);
          case Yl:
            l: {
              for (D = m.key; s !== null; ) {
                if (s.key === D)
                  if (
                    s.tag === 4 &&
                    s.stateNode.containerInfo === m.containerInfo &&
                    s.stateNode.implementation === m.implementation
                  ) {
                    (a(o, s.sibling),
                      (x = u(s, m.children || [])),
                      (x.return = o),
                      (o = x));
                    break l;
                  } else {
                    a(o, s);
                    break;
                  }
                else t(o, s);
                s = s.sibling;
              }
              ((x = zi(m, o.mode, x)), (x.return = o), (o = x));
            }
            return i(o);
          case Gl:
            return ((m = Ha(m)), il(o, s, m, x));
        }
        if (gt(m)) return _(o, s, m, x);
        if (Xl(m)) {
          if (((D = Xl(m)), typeof D != "function")) throw Error(r(150));
          return ((m = D.call(m)), U(o, s, m, x));
        }
        if (typeof m.then == "function") return il(o, s, wu(m), x);
        if (m.$$typeof === jl) return il(o, s, Vu(o, m), x);
        Wu(o, m);
      }
      return (typeof m == "string" && m !== "") ||
        typeof m == "number" ||
        typeof m == "bigint"
        ? ((m = "" + m),
          s !== null && s.tag === 6
            ? (a(o, s.sibling), (x = u(s, m)), (x.return = o), (o = x))
            : (a(o, s), (x = xi(m, o.mode, x)), (x.return = o), (o = x)),
          i(o))
        : a(o, s);
    }
    return function (o, s, m, x) {
      try {
        Le = 0;
        var D = il(o, s, m, x);
        return ((fe = null), D);
      } catch (M) {
        if (M === ce || M === Ku) throw M;
        var $ = lt(29, M, null, o.mode);
        return (($.lanes = x), ($.return = o), $);
      }
    };
  }
  var Ca = Ns(!0),
    _s = Ns(!1),
    aa = !1;
  function Hi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function Ri(l, t) {
    ((l = l.updateQueue),
      t.updateQueue === l &&
        (t.updateQueue = {
          baseState: l.baseState,
          firstBaseUpdate: l.firstBaseUpdate,
          lastBaseUpdate: l.lastBaseUpdate,
          shared: l.shared,
          callbacks: null,
        }));
  }
  function ea(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function ua(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (((e = e.shared), (I & 2) !== 0)) {
      var u = e.pending;
      return (
        u === null ? (t.next = t) : ((t.next = u.next), (u.next = t)),
        (e.pending = t),
        (t = Gu(l)),
        ds(l, null, a),
        t
      );
    }
    return (Bu(l, e, t, a), Gu(l));
  }
  function Je(l, t, a) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (a & 4194048) !== 0))
    ) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  function Ci(l, t) {
    var a = l.updateQueue,
      e = l.alternate;
    if (e !== null && ((e = e.updateQueue), a === e)) {
      var u = null,
        n = null;
      if (((a = a.firstBaseUpdate), a !== null)) {
        do {
          var i = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null,
          };
          (n === null ? (u = n = i) : (n = n.next = i), (a = a.next));
        } while (a !== null);
        n === null ? (u = n = t) : (n = n.next = t);
      } else u = n = t;
      ((a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks,
      }),
        (l.updateQueue = a));
      return;
    }
    ((l = a.lastBaseUpdate),
      l === null ? (a.firstBaseUpdate = t) : (l.next = t),
      (a.lastBaseUpdate = t));
  }
  var qi = !1;
  function we() {
    if (qi) {
      var l = ie;
      if (l !== null) throw l;
    }
  }
  function We(l, t, a, e) {
    qi = !1;
    var u = l.updateQueue;
    aa = !1;
    var n = u.firstBaseUpdate,
      i = u.lastBaseUpdate,
      c = u.shared.pending;
    if (c !== null) {
      u.shared.pending = null;
      var f = c,
        h = f.next;
      ((f.next = null), i === null ? (n = h) : (i.next = h), (i = f));
      var b = l.alternate;
      b !== null &&
        ((b = b.updateQueue),
        (c = b.lastBaseUpdate),
        c !== i &&
          (c === null ? (b.firstBaseUpdate = h) : (c.next = h),
          (b.lastBaseUpdate = f)));
    }
    if (n !== null) {
      var z = u.baseState;
      ((i = 0), (b = h = f = null), (c = n));
      do {
        var y = c.lane & -536870913,
          g = y !== c.lane;
        if (g ? (K & y) === y : (e & y) === y) {
          (y !== 0 && y === ne && (qi = !0),
            b !== null &&
              (b = b.next =
                {
                  lane: 0,
                  tag: c.tag,
                  payload: c.payload,
                  callback: null,
                  next: null,
                }));
          l: {
            var _ = l,
              U = c;
            y = t;
            var il = a;
            switch (U.tag) {
              case 1:
                if (((_ = U.payload), typeof _ == "function")) {
                  z = _.call(il, z, y);
                  break l;
                }
                z = _;
                break l;
              case 3:
                _.flags = (_.flags & -65537) | 128;
              case 0:
                if (
                  ((_ = U.payload),
                  (y = typeof _ == "function" ? _.call(il, z, y) : _),
                  y == null)
                )
                  break l;
                z = H({}, z, y);
                break l;
              case 2:
                aa = !0;
            }
          }
          ((y = c.callback),
            y !== null &&
              ((l.flags |= 64),
              g && (l.flags |= 8192),
              (g = u.callbacks),
              g === null ? (u.callbacks = [y]) : g.push(y)));
        } else
          ((g = {
            lane: y,
            tag: c.tag,
            payload: c.payload,
            callback: c.callback,
            next: null,
          }),
            b === null ? ((h = b = g), (f = z)) : (b = b.next = g),
            (i |= y));
        if (((c = c.next), c === null)) {
          if (((c = u.shared.pending), c === null)) break;
          ((g = c),
            (c = g.next),
            (g.next = null),
            (u.lastBaseUpdate = g),
            (u.shared.pending = null));
        }
      } while (!0);
      (b === null && (f = z),
        (u.baseState = f),
        (u.firstBaseUpdate = h),
        (u.lastBaseUpdate = b),
        n === null && (u.shared.lanes = 0),
        (sa |= i),
        (l.lanes = i),
        (l.memoizedState = z));
    }
  }
  function Os(l, t) {
    if (typeof l != "function") throw Error(r(191, l));
    l.call(t);
  }
  function Ms(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++) Os(a[l], t);
  }
  var se = d(null),
    $u = d(0);
  function Ds(l, t) {
    ((l = Kt), p($u, l), p(se, t), (Kt = l | t.baseLanes));
  }
  function Yi() {
    (p($u, Kt), p(se, se.current));
  }
  function Bi() {
    ((Kt = $u.current), T(se), T($u));
  }
  var tt = d(null),
    vt = null;
  function na(l) {
    var t = l.alternate;
    (p(gl, gl.current & 1),
      p(tt, l),
      vt === null &&
        (t === null || se.current !== null || t.memoizedState !== null) &&
        (vt = l));
  }
  function Gi(l) {
    (p(gl, gl.current), p(tt, l), vt === null && (vt = l));
  }
  function js(l) {
    l.tag === 22
      ? (p(gl, gl.current), p(tt, l), vt === null && (vt = l))
      : ia();
  }
  function ia() {
    (p(gl, gl.current), p(tt, tt.current));
  }
  function at(l) {
    (T(tt), vt === l && (vt = null), T(gl));
  }
  var gl = d(0);
  function Fu(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && ((a = a.dehydrated), a === null || Kc(a) || Jc(a)))
          return t;
      } else if (
        t.tag === 19 &&
        (t.memoizedProps.revealOrder === "forwards" ||
          t.memoizedProps.revealOrder === "backwards" ||
          t.memoizedProps.revealOrder === "unstable_legacy-backwards" ||
          t.memoizedProps.revealOrder === "together")
      ) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        ((t.child.return = t), (t = t.child));
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      ((t.sibling.return = t.return), (t = t.sibling));
    }
    return null;
  }
  var Yt = 0,
    B = null,
    ul = null,
    xl = null,
    ku = !1,
    de = !1,
    qa = !1,
    Iu = 0,
    $e = 0,
    oe = null,
    q0 = 0;
  function hl() {
    throw Error(r(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!Pl(l[a], t[a])) return !1;
    return !0;
  }
  function Qi(l, t, a, e, u, n) {
    return (
      (Yt = n),
      (B = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (S.H = l === null || l.memoizedState === null ? vd : ac),
      (qa = !1),
      (n = a(e, u)),
      (qa = !1),
      de && (n = Hs(t, a, e, u)),
      Us(l),
      n
    );
  }
  function Us(l) {
    S.H = Ie;
    var t = ul !== null && ul.next !== null;
    if (((Yt = 0), (xl = ul = B = null), (ku = !1), ($e = 0), (oe = null), t))
      throw Error(r(300));
    l === null ||
      zl ||
      ((l = l.dependencies), l !== null && Zu(l) && (zl = !0));
  }
  function Hs(l, t, a, e) {
    B = l;
    var u = 0;
    do {
      if ((de && (oe = null), ($e = 0), (de = !1), 25 <= u))
        throw Error(r(301));
      if (((u += 1), (xl = ul = null), l.updateQueue != null)) {
        var n = l.updateQueue;
        ((n.lastEffect = null),
          (n.events = null),
          (n.stores = null),
          n.memoCache != null && (n.memoCache.index = 0));
      }
      ((S.H = yd), (n = t(a, e)));
    } while (de);
    return n;
  }
  function Y0() {
    var l = S.H,
      t = l.useState()[0];
    return (
      (t = typeof t.then == "function" ? Fe(t) : t),
      (l = l.useState()[0]),
      (ul !== null ? ul.memoizedState : null) !== l && (B.flags |= 1024),
      t
    );
  }
  function Zi() {
    var l = Iu !== 0;
    return ((Iu = 0), l);
  }
  function Vi(l, t, a) {
    ((t.updateQueue = l.updateQueue), (t.flags &= -2053), (l.lanes &= ~a));
  }
  function Li(l) {
    if (ku) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        (t !== null && (t.pending = null), (l = l.next));
      }
      ku = !1;
    }
    ((Yt = 0), (xl = ul = B = null), (de = !1), ($e = Iu = 0), (oe = null));
  }
  function ql() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return (xl === null ? (B.memoizedState = xl = l) : (xl = xl.next = l), xl);
  }
  function bl() {
    if (ul === null) {
      var l = B.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ul.next;
    var t = xl === null ? B.memoizedState : xl.next;
    if (t !== null) ((xl = t), (ul = l));
    else {
      if (l === null)
        throw B.alternate === null ? Error(r(467)) : Error(r(310));
      ((ul = l),
        (l = {
          memoizedState: ul.memoizedState,
          baseState: ul.baseState,
          baseQueue: ul.baseQueue,
          queue: ul.queue,
          next: null,
        }),
        xl === null ? (B.memoizedState = xl = l) : (xl = xl.next = l));
    }
    return xl;
  }
  function Pu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Fe(l) {
    var t = $e;
    return (
      ($e += 1),
      oe === null && (oe = []),
      (l = Es(oe, l, t)),
      (t = B),
      (xl === null ? t.memoizedState : xl.next) === null &&
        ((t = t.alternate),
        (S.H = t === null || t.memoizedState === null ? vd : ac)),
      l
    );
  }
  function ln(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Fe(l);
      if (l.$$typeof === jl) return Ol(l);
    }
    throw Error(r(438, String(l)));
  }
  function Ki(l) {
    var t = null,
      a = B.updateQueue;
    if ((a !== null && (t = a.memoCache), t == null)) {
      var e = B.alternate;
      e !== null &&
        ((e = e.updateQueue),
        e !== null &&
          ((e = e.memoCache),
          e != null &&
            (t = {
              data: e.data.map(function (u) {
                return u.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      a === null && ((a = Pu()), (B.updateQueue = a)),
      (a.memoCache = t),
      (a = t.data[t.index]),
      a === void 0)
    )
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++) a[e] = Xa;
    return (t.index++, a);
  }
  function Bt(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function tn(l) {
    var t = bl();
    return Ji(t, ul, l);
  }
  function Ji(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(r(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue,
      n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var i = u.next;
        ((u.next = n.next), (n.next = i));
      }
      ((t.baseQueue = u = n), (e.pending = null));
    }
    if (((n = l.baseState), u === null)) l.memoizedState = n;
    else {
      t = u.next;
      var c = (i = null),
        f = null,
        h = t,
        b = !1;
      do {
        var z = h.lane & -536870913;
        if (z !== h.lane ? (K & z) === z : (Yt & z) === z) {
          var y = h.revertLane;
          if (y === 0)
            (f !== null &&
              (f = f.next =
                {
                  lane: 0,
                  revertLane: 0,
                  gesture: null,
                  action: h.action,
                  hasEagerState: h.hasEagerState,
                  eagerState: h.eagerState,
                  next: null,
                }),
              z === ne && (b = !0));
          else if ((Yt & y) === y) {
            ((h = h.next), y === ne && (b = !0));
            continue;
          } else
            ((z = {
              lane: 0,
              revertLane: h.revertLane,
              gesture: null,
              action: h.action,
              hasEagerState: h.hasEagerState,
              eagerState: h.eagerState,
              next: null,
            }),
              f === null ? ((c = f = z), (i = n)) : (f = f.next = z),
              (B.lanes |= y),
              (sa |= y));
          ((z = h.action),
            qa && a(n, z),
            (n = h.hasEagerState ? h.eagerState : a(n, z)));
        } else
          ((y = {
            lane: z,
            revertLane: h.revertLane,
            gesture: h.gesture,
            action: h.action,
            hasEagerState: h.hasEagerState,
            eagerState: h.eagerState,
            next: null,
          }),
            f === null ? ((c = f = y), (i = n)) : (f = f.next = y),
            (B.lanes |= z),
            (sa |= z));
        h = h.next;
      } while (h !== null && h !== t);
      if (
        (f === null ? (i = n) : (f.next = c),
        !Pl(n, l.memoizedState) && ((zl = !0), b && ((a = ie), a !== null)))
      )
        throw a;
      ((l.memoizedState = n),
        (l.baseState = i),
        (l.baseQueue = f),
        (e.lastRenderedState = n));
    }
    return (u === null && (e.lanes = 0), [l.memoizedState, e.dispatch]);
  }
  function wi(l) {
    var t = bl(),
      a = t.queue;
    if (a === null) throw Error(r(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch,
      u = a.pending,
      n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var i = (u = u.next);
      do ((n = l(n, i.action)), (i = i.next));
      while (i !== u);
      (Pl(n, t.memoizedState) || (zl = !0),
        (t.memoizedState = n),
        t.baseQueue === null && (t.baseState = n),
        (a.lastRenderedState = n));
    }
    return [n, e];
  }
  function Rs(l, t, a) {
    var e = B,
      u = bl(),
      n = W;
    if (n) {
      if (a === void 0) throw Error(r(407));
      a = a();
    } else a = t();
    var i = !Pl((ul || u).memoizedState, a);
    if (
      (i && ((u.memoizedState = a), (zl = !0)),
      (u = u.queue),
      Fi(Ys.bind(null, e, u, l), [l]),
      u.getSnapshot !== t || i || (xl !== null && xl.memoizedState.tag & 1))
    ) {
      if (
        ((e.flags |= 2048),
        me(9, { destroy: void 0 }, qs.bind(null, e, u, a, t), null),
        fl === null)
      )
        throw Error(r(349));
      n || (Yt & 127) !== 0 || Cs(e, t, a);
    }
    return a;
  }
  function Cs(l, t, a) {
    ((l.flags |= 16384),
      (l = { getSnapshot: t, value: a }),
      (t = B.updateQueue),
      t === null
        ? ((t = Pu()), (B.updateQueue = t), (t.stores = [l]))
        : ((a = t.stores), a === null ? (t.stores = [l]) : a.push(l)));
  }
  function qs(l, t, a, e) {
    ((t.value = a), (t.getSnapshot = e), Bs(t) && Gs(l));
  }
  function Ys(l, t, a) {
    return a(function () {
      Bs(t) && Gs(l);
    });
  }
  function Bs(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !Pl(l, a);
    } catch {
      return !0;
    }
  }
  function Gs(l) {
    var t = _a(l, 2);
    t !== null && wl(t, l, 2);
  }
  function Wi(l) {
    var t = ql();
    if (typeof l == "function") {
      var a = l;
      if (((l = a()), qa)) {
        $t(!0);
        try {
          a();
        } finally {
          $t(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = l),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: l,
      }),
      t
    );
  }
  function Xs(l, t, a, e) {
    return ((l.baseState = a), Ji(l, ul, typeof e == "function" ? e : Bt));
  }
  function B0(l, t, a, e, u) {
    if (un(l)) throw Error(r(485));
    if (((l = t.action), l !== null)) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (i) {
          n.listeners.push(i);
        },
      };
      (S.T !== null ? a(!0) : (n.isTransition = !1),
        e(n),
        (a = t.pending),
        a === null
          ? ((n.next = t.pending = n), Qs(t, n))
          : ((n.next = a.next), (t.pending = a.next = n)));
    }
  }
  function Qs(l, t) {
    var a = t.action,
      e = t.payload,
      u = l.state;
    if (t.isTransition) {
      var n = S.T,
        i = {};
      S.T = i;
      try {
        var c = a(u, e),
          f = S.S;
        (f !== null && f(i, c), Zs(l, t, c));
      } catch (h) {
        $i(l, t, h);
      } finally {
        (n !== null && i.types !== null && (n.types = i.types), (S.T = n));
      }
    } else
      try {
        ((n = a(u, e)), Zs(l, t, n));
      } catch (h) {
        $i(l, t, h);
      }
  }
  function Zs(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function"
      ? a.then(
          function (e) {
            Vs(l, t, e);
          },
          function (e) {
            return $i(l, t, e);
          },
        )
      : Vs(l, t, a);
  }
  function Vs(l, t, a) {
    ((t.status = "fulfilled"),
      (t.value = a),
      Ls(t),
      (l.state = a),
      (t = l.pending),
      t !== null &&
        ((a = t.next),
        a === t ? (l.pending = null) : ((a = a.next), (t.next = a), Qs(l, a))));
  }
  function $i(l, t, a) {
    var e = l.pending;
    if (((l.pending = null), e !== null)) {
      e = e.next;
      do ((t.status = "rejected"), (t.reason = a), Ls(t), (t = t.next));
      while (t !== e);
    }
    l.action = null;
  }
  function Ls(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function Ks(l, t) {
    return t;
  }
  function Js(l, t) {
    if (W) {
      var a = fl.formState;
      if (a !== null) {
        l: {
          var e = B;
          if (W) {
            if (sl) {
              t: {
                for (var u = sl, n = ht; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (((u = yt(u.nextSibling)), u === null)) {
                    u = null;
                    break t;
                  }
                }
                ((n = u.data), (u = n === "F!" || n === "F" ? u : null));
              }
              if (u) {
                ((sl = yt(u.nextSibling)), (e = u.data === "F!"));
                break l;
              }
            }
            la(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return (
      (a = ql()),
      (a.memoizedState = a.baseState = t),
      (e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ks,
        lastRenderedState: t,
      }),
      (a.queue = e),
      (a = od.bind(null, B, e)),
      (e.dispatch = a),
      (e = Wi(!1)),
      (n = tc.bind(null, B, !1, e.queue)),
      (e = ql()),
      (u = { state: t, dispatch: null, action: l, pending: null }),
      (e.queue = u),
      (a = B0.bind(null, B, u, n, a)),
      (u.dispatch = a),
      (e.memoizedState = l),
      [t, a, !1]
    );
  }
  function ws(l) {
    var t = bl();
    return Ws(t, ul, l);
  }
  function Ws(l, t, a) {
    if (
      ((t = Ji(l, t, Ks)[0]),
      (l = tn(Bt)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var e = Fe(t);
      } catch (i) {
        throw i === ce ? Ku : i;
      }
    else e = t;
    t = bl();
    var u = t.queue,
      n = u.dispatch;
    return (
      a !== t.memoizedState &&
        ((B.flags |= 2048),
        me(9, { destroy: void 0 }, G0.bind(null, u, a), null)),
      [e, n, l]
    );
  }
  function G0(l, t) {
    l.action = t;
  }
  function $s(l) {
    var t = bl(),
      a = ul;
    if (a !== null) return Ws(t, a, l);
    (bl(), (t = t.memoizedState), (a = bl()));
    var e = a.queue.dispatch;
    return ((a.memoizedState = l), [t, e, !1]);
  }
  function me(l, t, a, e) {
    return (
      (l = { tag: l, create: a, deps: e, inst: t, next: null }),
      (t = B.updateQueue),
      t === null && ((t = Pu()), (B.updateQueue = t)),
      (a = t.lastEffect),
      a === null
        ? (t.lastEffect = l.next = l)
        : ((e = a.next), (a.next = l), (l.next = e), (t.lastEffect = l)),
      l
    );
  }
  function Fs() {
    return bl().memoizedState;
  }
  function an(l, t, a, e) {
    var u = ql();
    ((B.flags |= l),
      (u.memoizedState = me(
        1 | t,
        { destroy: void 0 },
        a,
        e === void 0 ? null : e,
      )));
  }
  function en(l, t, a, e) {
    var u = bl();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ul !== null && e !== null && Xi(e, ul.memoizedState.deps)
      ? (u.memoizedState = me(t, n, a, e))
      : ((B.flags |= l), (u.memoizedState = me(1 | t, n, a, e)));
  }
  function ks(l, t) {
    an(8390656, 8, l, t);
  }
  function Fi(l, t) {
    en(2048, 8, l, t);
  }
  function X0(l) {
    B.flags |= 4;
    var t = B.updateQueue;
    if (t === null) ((t = Pu()), (B.updateQueue = t), (t.events = [l]));
    else {
      var a = t.events;
      a === null ? (t.events = [l]) : a.push(l);
    }
  }
  function Is(l) {
    var t = bl().memoizedState;
    return (
      X0({ ref: t, nextImpl: l }),
      function () {
        if ((I & 2) !== 0) throw Error(r(440));
        return t.impl.apply(void 0, arguments);
      }
    );
  }
  function Ps(l, t) {
    return en(4, 2, l, t);
  }
  function ld(l, t) {
    return en(4, 4, l, t);
  }
  function td(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function () {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return (
        (l = l()),
        (t.current = l),
        function () {
          t.current = null;
        }
      );
  }
  function ad(l, t, a) {
    ((a = a != null ? a.concat([l]) : null), en(4, 4, td.bind(null, t, l), a));
  }
  function ki() {}
  function ed(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Xi(t, e[1]) ? e[0] : ((a.memoizedState = [l, t]), l);
  }
  function ud(l, t) {
    var a = bl();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Xi(t, e[1])) return e[0];
    if (((e = l()), qa)) {
      $t(!0);
      try {
        l();
      } finally {
        $t(!1);
      }
    }
    return ((a.memoizedState = [e, t]), e);
  }
  function Ii(l, t, a) {
    return a === void 0 || ((Yt & 1073741824) !== 0 && (K & 261930) === 0)
      ? (l.memoizedState = t)
      : ((l.memoizedState = a), (l = no()), (B.lanes |= l), (sa |= l), a);
  }
  function nd(l, t, a, e) {
    return Pl(a, t)
      ? a
      : se.current !== null
        ? ((l = Ii(l, a, e)), Pl(l, t) || (zl = !0), l)
        : (Yt & 42) === 0 || ((Yt & 1073741824) !== 0 && (K & 261930) === 0)
          ? ((zl = !0), (l.memoizedState = a))
          : ((l = no()), (B.lanes |= l), (sa |= l), t);
  }
  function id(l, t, a, e, u) {
    var n = A.p;
    A.p = n !== 0 && 8 > n ? n : 8;
    var i = S.T,
      c = {};
    ((S.T = c), tc(l, !1, t, a));
    try {
      var f = u(),
        h = S.S;
      if (
        (h !== null && h(c, f),
        f !== null && typeof f == "object" && typeof f.then == "function")
      ) {
        var b = C0(f, e);
        ke(l, t, b, nt(l));
      } else ke(l, t, e, nt(l));
    } catch (z) {
      ke(l, t, { then: function () {}, status: "rejected", reason: z }, nt());
    } finally {
      ((A.p = n),
        i !== null && c.types !== null && (i.types = c.types),
        (S.T = i));
    }
  }
  function Q0() {}
  function Pi(l, t, a, e) {
    if (l.tag !== 5) throw Error(r(476));
    var u = cd(l).queue;
    id(
      l,
      u,
      t,
      R,
      a === null
        ? Q0
        : function () {
            return (fd(l), a(e));
          },
    );
  }
  function cd(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: R,
      baseState: R,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Bt,
        lastRenderedState: R,
      },
      next: null,
    };
    var a = {};
    return (
      (t.next = {
        memoizedState: a,
        baseState: a,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Bt,
          lastRenderedState: a,
        },
        next: null,
      }),
      (l.memoizedState = t),
      (l = l.alternate),
      l !== null && (l.memoizedState = t),
      t
    );
  }
  function fd(l) {
    var t = cd(l);
    (t.next === null && (t = l.alternate.memoizedState),
      ke(l, t.next.queue, {}, nt()));
  }
  function lc() {
    return Ol(vu);
  }
  function sd() {
    return bl().memoizedState;
  }
  function dd() {
    return bl().memoizedState;
  }
  function Z0(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = nt();
          l = ea(a);
          var e = ua(t, l, a);
          (e !== null && (wl(e, t, a), Je(e, t, a)),
            (t = { cache: Mi() }),
            (l.payload = t));
          return;
      }
      t = t.return;
    }
  }
  function V0(l, t, a) {
    var e = nt();
    ((a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      un(l)
        ? md(t, a)
        : ((a = bi(l, t, a, e)), a !== null && (wl(a, l, e), hd(a, t, e))));
  }
  function od(l, t, a) {
    var e = nt();
    ke(l, t, a, e);
  }
  function ke(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (un(l)) md(t, u);
    else {
      var n = l.alternate;
      if (
        l.lanes === 0 &&
        (n === null || n.lanes === 0) &&
        ((n = t.lastRenderedReducer), n !== null)
      )
        try {
          var i = t.lastRenderedState,
            c = n(i, a);
          if (((u.hasEagerState = !0), (u.eagerState = c), Pl(c, i)))
            return (Bu(l, t, u, 0), fl === null && Yu(), !1);
        } catch {}
      if (((a = bi(l, t, u, e)), a !== null))
        return (wl(a, l, e), hd(a, t, e), !0);
    }
    return !1;
  }
  function tc(l, t, a, e) {
    if (
      ((e = {
        lane: 2,
        revertLane: Hc(),
        gesture: null,
        action: e,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      un(l))
    ) {
      if (t) throw Error(r(479));
    } else ((t = bi(l, a, e, 2)), t !== null && wl(t, l, 2));
  }
  function un(l) {
    var t = l.alternate;
    return l === B || (t !== null && t === B);
  }
  function md(l, t) {
    de = ku = !0;
    var a = l.pending;
    (a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (l.pending = t));
  }
  function hd(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      ((e &= l.pendingLanes), (a |= e), (t.lanes = a), bf(l, a));
    }
  }
  var Ie = {
    readContext: Ol,
    use: ln,
    useCallback: hl,
    useContext: hl,
    useEffect: hl,
    useImperativeHandle: hl,
    useLayoutEffect: hl,
    useInsertionEffect: hl,
    useMemo: hl,
    useReducer: hl,
    useRef: hl,
    useState: hl,
    useDebugValue: hl,
    useDeferredValue: hl,
    useTransition: hl,
    useSyncExternalStore: hl,
    useId: hl,
    useHostTransitionStatus: hl,
    useFormState: hl,
    useActionState: hl,
    useOptimistic: hl,
    useMemoCache: hl,
    useCacheRefresh: hl,
  };
  Ie.useEffectEvent = hl;
  var vd = {
      readContext: Ol,
      use: ln,
      useCallback: function (l, t) {
        return ((ql().memoizedState = [l, t === void 0 ? null : t]), l);
      },
      useContext: Ol,
      useEffect: ks,
      useImperativeHandle: function (l, t, a) {
        ((a = a != null ? a.concat([l]) : null),
          an(4194308, 4, td.bind(null, t, l), a));
      },
      useLayoutEffect: function (l, t) {
        return an(4194308, 4, l, t);
      },
      useInsertionEffect: function (l, t) {
        an(4, 2, l, t);
      },
      useMemo: function (l, t) {
        var a = ql();
        t = t === void 0 ? null : t;
        var e = l();
        if (qa) {
          $t(!0);
          try {
            l();
          } finally {
            $t(!1);
          }
        }
        return ((a.memoizedState = [e, t]), e);
      },
      useReducer: function (l, t, a) {
        var e = ql();
        if (a !== void 0) {
          var u = a(t);
          if (qa) {
            $t(!0);
            try {
              a(t);
            } finally {
              $t(!1);
            }
          }
        } else u = t;
        return (
          (e.memoizedState = e.baseState = u),
          (l = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: l,
            lastRenderedState: u,
          }),
          (e.queue = l),
          (l = l.dispatch = V0.bind(null, B, l)),
          [e.memoizedState, l]
        );
      },
      useRef: function (l) {
        var t = ql();
        return ((l = { current: l }), (t.memoizedState = l));
      },
      useState: function (l) {
        l = Wi(l);
        var t = l.queue,
          a = od.bind(null, B, t);
        return ((t.dispatch = a), [l.memoizedState, a]);
      },
      useDebugValue: ki,
      useDeferredValue: function (l, t) {
        var a = ql();
        return Ii(a, l, t);
      },
      useTransition: function () {
        var l = Wi(!1);
        return (
          (l = id.bind(null, B, l.queue, !0, !1)),
          (ql().memoizedState = l),
          [!1, l]
        );
      },
      useSyncExternalStore: function (l, t, a) {
        var e = B,
          u = ql();
        if (W) {
          if (a === void 0) throw Error(r(407));
          a = a();
        } else {
          if (((a = t()), fl === null)) throw Error(r(349));
          (K & 127) !== 0 || Cs(e, t, a);
        }
        u.memoizedState = a;
        var n = { value: a, getSnapshot: t };
        return (
          (u.queue = n),
          ks(Ys.bind(null, e, n, l), [l]),
          (e.flags |= 2048),
          me(9, { destroy: void 0 }, qs.bind(null, e, n, a, t), null),
          a
        );
      },
      useId: function () {
        var l = ql(),
          t = fl.identifierPrefix;
        if (W) {
          var a = pt,
            e = At;
          ((a = (e & ~(1 << (32 - Il(e) - 1))).toString(32) + a),
            (t = "_" + t + "R_" + a),
            (a = Iu++),
            0 < a && (t += "H" + a.toString(32)),
            (t += "_"));
        } else ((a = q0++), (t = "_" + t + "r_" + a.toString(32) + "_"));
        return (l.memoizedState = t);
      },
      useHostTransitionStatus: lc,
      useFormState: Js,
      useActionState: Js,
      useOptimistic: function (l) {
        var t = ql();
        t.memoizedState = t.baseState = l;
        var a = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = a),
          (t = tc.bind(null, B, !0, a)),
          (a.dispatch = t),
          [l, t]
        );
      },
      useMemoCache: Ki,
      useCacheRefresh: function () {
        return (ql().memoizedState = Z0.bind(null, B));
      },
      useEffectEvent: function (l) {
        var t = ql(),
          a = { impl: l };
        return (
          (t.memoizedState = a),
          function () {
            if ((I & 2) !== 0) throw Error(r(440));
            return a.impl.apply(void 0, arguments);
          }
        );
      },
    },
    ac = {
      readContext: Ol,
      use: ln,
      useCallback: ed,
      useContext: Ol,
      useEffect: Fi,
      useImperativeHandle: ad,
      useInsertionEffect: Ps,
      useLayoutEffect: ld,
      useMemo: ud,
      useReducer: tn,
      useRef: Fs,
      useState: function () {
        return tn(Bt);
      },
      useDebugValue: ki,
      useDeferredValue: function (l, t) {
        var a = bl();
        return nd(a, ul.memoizedState, l, t);
      },
      useTransition: function () {
        var l = tn(Bt)[0],
          t = bl().memoizedState;
        return [typeof l == "boolean" ? l : Fe(l), t];
      },
      useSyncExternalStore: Rs,
      useId: sd,
      useHostTransitionStatus: lc,
      useFormState: ws,
      useActionState: ws,
      useOptimistic: function (l, t) {
        var a = bl();
        return Xs(a, ul, l, t);
      },
      useMemoCache: Ki,
      useCacheRefresh: dd,
    };
  ac.useEffectEvent = Is;
  var yd = {
    readContext: Ol,
    use: ln,
    useCallback: ed,
    useContext: Ol,
    useEffect: Fi,
    useImperativeHandle: ad,
    useInsertionEffect: Ps,
    useLayoutEffect: ld,
    useMemo: ud,
    useReducer: wi,
    useRef: Fs,
    useState: function () {
      return wi(Bt);
    },
    useDebugValue: ki,
    useDeferredValue: function (l, t) {
      var a = bl();
      return ul === null ? Ii(a, l, t) : nd(a, ul.memoizedState, l, t);
    },
    useTransition: function () {
      var l = wi(Bt)[0],
        t = bl().memoizedState;
      return [typeof l == "boolean" ? l : Fe(l), t];
    },
    useSyncExternalStore: Rs,
    useId: sd,
    useHostTransitionStatus: lc,
    useFormState: $s,
    useActionState: $s,
    useOptimistic: function (l, t) {
      var a = bl();
      return ul !== null
        ? Xs(a, ul, l, t)
        : ((a.baseState = l), [l, a.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: dd,
  };
  yd.useEffectEvent = Is;
  function ec(l, t, a, e) {
    ((t = l.memoizedState),
      (a = a(e, t)),
      (a = a == null ? t : H({}, t, a)),
      (l.memoizedState = a),
      l.lanes === 0 && (l.updateQueue.baseState = a));
  }
  var uc = {
    enqueueSetState: function (l, t, a) {
      l = l._reactInternals;
      var e = nt(),
        u = ea(e);
      ((u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (wl(t, l, e), Je(t, l, e)));
    },
    enqueueReplaceState: function (l, t, a) {
      l = l._reactInternals;
      var e = nt(),
        u = ea(e);
      ((u.tag = 1),
        (u.payload = t),
        a != null && (u.callback = a),
        (t = ua(l, u, e)),
        t !== null && (wl(t, l, e), Je(t, l, e)));
    },
    enqueueForceUpdate: function (l, t) {
      l = l._reactInternals;
      var a = nt(),
        e = ea(a);
      ((e.tag = 2),
        t != null && (e.callback = t),
        (t = ua(l, e, a)),
        t !== null && (wl(t, l, a), Je(t, l, a)));
    },
  };
  function rd(l, t, a, e, u, n, i) {
    return (
      (l = l.stateNode),
      typeof l.shouldComponentUpdate == "function"
        ? l.shouldComponentUpdate(e, n, i)
        : t.prototype && t.prototype.isPureReactComponent
          ? !Be(a, e) || !Be(u, n)
          : !0
    );
  }
  function gd(l, t, a, e) {
    ((l = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(a, e),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(a, e),
      t.state !== l && uc.enqueueReplaceState(t, t.state, null));
  }
  function Ya(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t) e !== "ref" && (a[e] = t[e]);
    }
    if ((l = l.defaultProps)) {
      a === t && (a = H({}, a));
      for (var u in l) a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function bd(l) {
    qu(l);
  }
  function Sd(l) {
    console.error(l);
  }
  function xd(l) {
    qu(l);
  }
  function nn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function () {
        throw e;
      });
    }
  }
  function zd(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (u) {
      setTimeout(function () {
        throw u;
      });
    }
  }
  function nc(l, t, a) {
    return (
      (a = ea(a)),
      (a.tag = 3),
      (a.payload = { element: null }),
      (a.callback = function () {
        nn(l, t);
      }),
      a
    );
  }
  function Td(l) {
    return ((l = ea(l)), (l.tag = 3), l);
  }
  function Ed(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      ((l.payload = function () {
        return u(n);
      }),
        (l.callback = function () {
          zd(t, a, e);
        }));
    }
    var i = a.stateNode;
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (l.callback = function () {
        (zd(t, a, e),
          typeof u != "function" &&
            (da === null ? (da = new Set([this])) : da.add(this)));
        var c = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: c !== null ? c : "",
        });
      });
  }
  function L0(l, t, a, e, u) {
    if (
      ((a.flags |= 32768),
      e !== null && typeof e == "object" && typeof e.then == "function")
    ) {
      if (
        ((t = a.alternate),
        t !== null && ue(t, a, u, !0),
        (a = tt.current),
        a !== null)
      ) {
        switch (a.tag) {
          case 31:
          case 13:
            return (
              vt === null ? bn() : a.alternate === null && vl === 0 && (vl = 3),
              (a.flags &= -257),
              (a.flags |= 65536),
              (a.lanes = u),
              e === Ju
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null ? (a.updateQueue = new Set([e])) : t.add(e),
                  Dc(l, e, u)),
              !1
            );
          case 22:
            return (
              (a.flags |= 65536),
              e === Ju
                ? (a.flags |= 16384)
                : ((t = a.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([e]),
                      }),
                      (a.updateQueue = t))
                    : ((a = t.retryQueue),
                      a === null ? (t.retryQueue = new Set([e])) : a.add(e)),
                  Dc(l, e, u)),
              !1
            );
        }
        throw Error(r(435, a.tag));
      }
      return (Dc(l, e, u), bn(), !1);
    }
    if (W)
      return (
        (t = tt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = u),
            e !== Ai && ((l = Error(r(422), { cause: e })), Qe(dt(l, a))))
          : (e !== Ai && ((t = Error(r(423), { cause: e })), Qe(dt(t, a))),
            (l = l.current.alternate),
            (l.flags |= 65536),
            (u &= -u),
            (l.lanes |= u),
            (e = dt(e, a)),
            (u = nc(l.stateNode, e, u)),
            Ci(l, u),
            vl !== 4 && (vl = 2)),
        !1
      );
    var n = Error(r(520), { cause: e });
    if (
      ((n = dt(n, a)),
      iu === null ? (iu = [n]) : iu.push(n),
      vl !== 4 && (vl = 2),
      t === null)
    )
      return !0;
    ((e = dt(e, a)), (a = t));
    do {
      switch (a.tag) {
        case 3:
          return (
            (a.flags |= 65536),
            (l = u & -u),
            (a.lanes |= l),
            (l = nc(a.stateNode, e, l)),
            Ci(a, l),
            !1
          );
        case 1:
          if (
            ((t = a.type),
            (n = a.stateNode),
            (a.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (n !== null &&
                  typeof n.componentDidCatch == "function" &&
                  (da === null || !da.has(n)))))
          )
            return (
              (a.flags |= 65536),
              (u &= -u),
              (a.lanes |= u),
              (u = Td(u)),
              Ed(u, l, a, e),
              Ci(a, u),
              !1
            );
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ic = Error(r(461)),
    zl = !1;
  function Ml(l, t, a, e) {
    t.child = l === null ? _s(t, null, a, e) : Ca(t, l.child, a, e);
  }
  function Ad(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var i = {};
      for (var c in e) c !== "ref" && (i[c] = e[c]);
    } else i = e;
    return (
      ja(t),
      (e = Qi(l, t, a, i, n, u)),
      (c = Zi()),
      l !== null && !zl
        ? (Vi(l, t, u), Gt(l, t, u))
        : (W && c && Ti(t), (t.flags |= 1), Ml(l, t, e, u), t.child)
    );
  }
  function pd(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" &&
        !Si(n) &&
        n.defaultProps === void 0 &&
        a.compare === null
        ? ((t.tag = 15), (t.type = n), Nd(l, t, n, e, u))
        : ((l = Xu(a.type, null, e, t, t.mode, u)),
          (l.ref = t.ref),
          (l.return = t),
          (t.child = l));
    }
    if (((n = l.child), !vc(l, u))) {
      var i = n.memoizedProps;
      if (
        ((a = a.compare), (a = a !== null ? a : Be), a(i, e) && l.ref === t.ref)
      )
        return Gt(l, t, u);
    }
    return (
      (t.flags |= 1),
      (l = Ht(n, e)),
      (l.ref = t.ref),
      (l.return = t),
      (t.child = l)
    );
  }
  function Nd(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Be(n, e) && l.ref === t.ref)
        if (((zl = !1), (t.pendingProps = e = n), vc(l, u)))
          (l.flags & 131072) !== 0 && (zl = !0);
        else return ((t.lanes = l.lanes), Gt(l, t, u));
    }
    return cc(l, t, a, e, u);
  }
  function _d(l, t, a, e) {
    var u = e.children,
      n = l !== null ? l.memoizedState : null;
    if (
      (l === null &&
        t.stateNode === null &&
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      e.mode === "hidden")
    ) {
      if ((t.flags & 128) !== 0) {
        if (((n = n !== null ? n.baseLanes | a : a), l !== null)) {
          for (e = t.child = l.child, u = 0; e !== null; )
            ((u = u | e.lanes | e.childLanes), (e = e.sibling));
          e = u & ~n;
        } else ((e = 0), (t.child = null));
        return Od(l, t, n, a, e);
      }
      if ((a & 536870912) !== 0)
        ((t.memoizedState = { baseLanes: 0, cachePool: null }),
          l !== null && Lu(t, n !== null ? n.cachePool : null),
          n !== null ? Ds(t, n) : Yi(),
          js(t));
      else
        return (
          (e = t.lanes = 536870912),
          Od(l, t, n !== null ? n.baseLanes | a : a, a, e)
        );
    } else
      n !== null
        ? (Lu(t, n.cachePool), Ds(t, n), ia(), (t.memoizedState = null))
        : (l !== null && Lu(t, null), Yi(), ia());
    return (Ml(l, t, u, a), t.child);
  }
  function Pe(l, t) {
    return (
      (l !== null && l.tag === 22) ||
        t.stateNode !== null ||
        (t.stateNode = {
          _visibility: 1,
          _pendingMarkers: null,
          _retryCache: null,
          _transitions: null,
        }),
      t.sibling
    );
  }
  function Od(l, t, a, e, u) {
    var n = ji();
    return (
      (n = n === null ? null : { parent: Sl._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: a, cachePool: n }),
      l !== null && Lu(t, null),
      Yi(),
      js(t),
      l !== null && ue(l, t, e, !0),
      (t.childLanes = u),
      null
    );
  }
  function cn(l, t) {
    return (
      (t = sn({ mode: t.mode, children: t.children }, l.mode)),
      (t.ref = l.ref),
      (l.child = t),
      (t.return = l),
      t
    );
  }
  function Md(l, t, a) {
    return (
      Ca(t, l.child, null, a),
      (l = cn(t, t.pendingProps)),
      (l.flags |= 2),
      at(t),
      (t.memoizedState = null),
      l
    );
  }
  function K0(l, t, a) {
    var e = t.pendingProps,
      u = (t.flags & 128) !== 0;
    if (((t.flags &= -129), l === null)) {
      if (W) {
        if (e.mode === "hidden")
          return ((l = cn(t, e)), (t.lanes = 536870912), Pe(null, l));
        if (
          (Gi(t),
          (l = sl)
            ? ((l = Zo(l, ht)),
              (l = l !== null && l.data === "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: At, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ms(l)),
                (a.return = t),
                (t.child = a),
                (_l = t),
                (sl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return ((t.lanes = 536870912), null);
      }
      return cn(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var i = n.dehydrated;
      if ((Gi(t), u))
        if (t.flags & 256) ((t.flags &= -257), (t = Md(l, t, a)));
        else if (t.memoizedState !== null)
          ((t.child = l.child), (t.flags |= 128), (t = null));
        else throw Error(r(558));
      else if (
        (zl || ue(l, t, a, !1), (u = (a & l.childLanes) !== 0), zl || u)
      ) {
        if (
          ((e = fl),
          e !== null && ((i = Sf(e, a)), i !== 0 && i !== n.retryLane))
        )
          throw ((n.retryLane = i), _a(l, i), wl(e, l, i), ic);
        (bn(), (t = Md(l, t, a)));
      } else
        ((l = n.treeContext),
          (sl = yt(i.nextSibling)),
          (_l = t),
          (W = !0),
          (Pt = null),
          (ht = !1),
          l !== null && ys(t, l),
          (t = cn(t, e)),
          (t.flags |= 4096));
      return t;
    }
    return (
      (l = Ht(l.child, { mode: e.mode, children: e.children })),
      (l.ref = t.ref),
      (t.child = l),
      (l.return = t),
      l
    );
  }
  function fn(l, t) {
    var a = t.ref;
    if (a === null) l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object") throw Error(r(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function cc(l, t, a, e, u) {
    return (
      ja(t),
      (a = Qi(l, t, a, e, void 0, u)),
      (e = Zi()),
      l !== null && !zl
        ? (Vi(l, t, u), Gt(l, t, u))
        : (W && e && Ti(t), (t.flags |= 1), Ml(l, t, a, u), t.child)
    );
  }
  function Dd(l, t, a, e, u, n) {
    return (
      ja(t),
      (t.updateQueue = null),
      (a = Hs(t, e, a, u)),
      Us(l),
      (e = Zi()),
      l !== null && !zl
        ? (Vi(l, t, n), Gt(l, t, n))
        : (W && e && Ti(t), (t.flags |= 1), Ml(l, t, a, n), t.child)
    );
  }
  function jd(l, t, a, e, u) {
    if ((ja(t), t.stateNode === null)) {
      var n = le,
        i = a.contextType;
      (typeof i == "object" && i !== null && (n = Ol(i)),
        (n = new a(e, n)),
        (t.memoizedState =
          n.state !== null && n.state !== void 0 ? n.state : null),
        (n.updater = uc),
        (t.stateNode = n),
        (n._reactInternals = t),
        (n = t.stateNode),
        (n.props = e),
        (n.state = t.memoizedState),
        (n.refs = {}),
        Hi(t),
        (i = a.contextType),
        (n.context = typeof i == "object" && i !== null ? Ol(i) : le),
        (n.state = t.memoizedState),
        (i = a.getDerivedStateFromProps),
        typeof i == "function" && (ec(t, a, i, e), (n.state = t.memoizedState)),
        typeof a.getDerivedStateFromProps == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function" ||
          (typeof n.UNSAFE_componentWillMount != "function" &&
            typeof n.componentWillMount != "function") ||
          ((i = n.state),
          typeof n.componentWillMount == "function" && n.componentWillMount(),
          typeof n.UNSAFE_componentWillMount == "function" &&
            n.UNSAFE_componentWillMount(),
          i !== n.state && uc.enqueueReplaceState(n, n.state, null),
          We(t, e, n, u),
          we(),
          (n.state = t.memoizedState)),
        typeof n.componentDidMount == "function" && (t.flags |= 4194308),
        (e = !0));
    } else if (l === null) {
      n = t.stateNode;
      var c = t.memoizedProps,
        f = Ya(a, c);
      n.props = f;
      var h = n.context,
        b = a.contextType;
      ((i = le), typeof b == "object" && b !== null && (i = Ol(b)));
      var z = a.getDerivedStateFromProps;
      ((b =
        typeof z == "function" ||
        typeof n.getSnapshotBeforeUpdate == "function"),
        (c = t.pendingProps !== c),
        b ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((c || h !== i) && gd(t, n, e, i)),
        (aa = !1));
      var y = t.memoizedState;
      ((n.state = y),
        We(t, e, n, u),
        we(),
        (h = t.memoizedState),
        c || y !== h || aa
          ? (typeof z == "function" && (ec(t, a, z, e), (h = t.memoizedState)),
            (f = aa || rd(t, a, f, e, y, h, i))
              ? (b ||
                  (typeof n.UNSAFE_componentWillMount != "function" &&
                    typeof n.componentWillMount != "function") ||
                  (typeof n.componentWillMount == "function" &&
                    n.componentWillMount(),
                  typeof n.UNSAFE_componentWillMount == "function" &&
                    n.UNSAFE_componentWillMount()),
                typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof n.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = e),
                (t.memoizedState = h)),
            (n.props = e),
            (n.state = h),
            (n.context = i),
            (e = f))
          : (typeof n.componentDidMount == "function" && (t.flags |= 4194308),
            (e = !1)));
    } else {
      ((n = t.stateNode),
        Ri(l, t),
        (i = t.memoizedProps),
        (b = Ya(a, i)),
        (n.props = b),
        (z = t.pendingProps),
        (y = n.context),
        (h = a.contextType),
        (f = le),
        typeof h == "object" && h !== null && (f = Ol(h)),
        (c = a.getDerivedStateFromProps),
        (h =
          typeof c == "function" ||
          typeof n.getSnapshotBeforeUpdate == "function") ||
          (typeof n.UNSAFE_componentWillReceiveProps != "function" &&
            typeof n.componentWillReceiveProps != "function") ||
          ((i !== z || y !== f) && gd(t, n, e, f)),
        (aa = !1),
        (y = t.memoizedState),
        (n.state = y),
        We(t, e, n, u),
        we());
      var g = t.memoizedState;
      i !== z ||
      y !== g ||
      aa ||
      (l !== null && l.dependencies !== null && Zu(l.dependencies))
        ? (typeof c == "function" && (ec(t, a, c, e), (g = t.memoizedState)),
          (b =
            aa ||
            rd(t, a, b, e, y, g, f) ||
            (l !== null && l.dependencies !== null && Zu(l.dependencies)))
            ? (h ||
                (typeof n.UNSAFE_componentWillUpdate != "function" &&
                  typeof n.componentWillUpdate != "function") ||
                (typeof n.componentWillUpdate == "function" &&
                  n.componentWillUpdate(e, g, f),
                typeof n.UNSAFE_componentWillUpdate == "function" &&
                  n.UNSAFE_componentWillUpdate(e, g, f)),
              typeof n.componentDidUpdate == "function" && (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof n.componentDidUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 4),
              typeof n.getSnapshotBeforeUpdate != "function" ||
                (i === l.memoizedProps && y === l.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = e),
              (t.memoizedState = g)),
          (n.props = e),
          (n.state = g),
          (n.context = f),
          (e = b))
        : (typeof n.componentDidUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 4),
          typeof n.getSnapshotBeforeUpdate != "function" ||
            (i === l.memoizedProps && y === l.memoizedState) ||
            (t.flags |= 1024),
          (e = !1));
    }
    return (
      (n = e),
      fn(l, t),
      (e = (t.flags & 128) !== 0),
      n || e
        ? ((n = t.stateNode),
          (a =
            e && typeof a.getDerivedStateFromError != "function"
              ? null
              : n.render()),
          (t.flags |= 1),
          l !== null && e
            ? ((t.child = Ca(t, l.child, null, u)),
              (t.child = Ca(t, null, a, u)))
            : Ml(l, t, a, u),
          (t.memoizedState = n.state),
          (l = t.child))
        : (l = Gt(l, t, u)),
      l
    );
  }
  function Ud(l, t, a, e) {
    return (Ma(), (t.flags |= 256), Ml(l, t, a, e), t.child);
  }
  var fc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function sc(l) {
    return { baseLanes: l, cachePool: zs() };
  }
  function dc(l, t, a) {
    return ((l = l !== null ? l.childLanes & ~a : 0), t && (l |= ut), l);
  }
  function Hd(l, t, a) {
    var e = t.pendingProps,
      u = !1,
      n = (t.flags & 128) !== 0,
      i;
    if (
      ((i = n) ||
        (i =
          l !== null && l.memoizedState === null ? !1 : (gl.current & 2) !== 0),
      i && ((u = !0), (t.flags &= -129)),
      (i = (t.flags & 32) !== 0),
      (t.flags &= -33),
      l === null)
    ) {
      if (W) {
        if (
          (u ? na(t) : ia(),
          (l = sl)
            ? ((l = Zo(l, ht)),
              (l = l !== null && l.data !== "&" ? l : null),
              l !== null &&
                ((t.memoizedState = {
                  dehydrated: l,
                  treeContext: It !== null ? { id: At, overflow: pt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (a = ms(l)),
                (a.return = t),
                (t.child = a),
                (_l = t),
                (sl = null)))
            : (l = null),
          l === null)
        )
          throw la(t);
        return (Jc(l) ? (t.lanes = 32) : (t.lanes = 536870912), null);
      }
      var c = e.children;
      return (
        (e = e.fallback),
        u
          ? (ia(),
            (u = t.mode),
            (c = sn({ mode: "hidden", children: c }, u)),
            (e = Oa(e, u, a, null)),
            (c.return = t),
            (e.return = t),
            (c.sibling = e),
            (t.child = c),
            (e = t.child),
            (e.memoizedState = sc(a)),
            (e.childLanes = dc(l, i, a)),
            (t.memoizedState = fc),
            Pe(null, e))
          : (na(t), oc(t, c))
      );
    }
    var f = l.memoizedState;
    if (f !== null && ((c = f.dehydrated), c !== null)) {
      if (n)
        t.flags & 256
          ? (na(t), (t.flags &= -257), (t = mc(l, t, a)))
          : t.memoizedState !== null
            ? (ia(), (t.child = l.child), (t.flags |= 128), (t = null))
            : (ia(),
              (c = e.fallback),
              (u = t.mode),
              (e = sn({ mode: "visible", children: e.children }, u)),
              (c = Oa(c, u, a, null)),
              (c.flags |= 2),
              (e.return = t),
              (c.return = t),
              (e.sibling = c),
              (t.child = e),
              Ca(t, l.child, null, a),
              (e = t.child),
              (e.memoizedState = sc(a)),
              (e.childLanes = dc(l, i, a)),
              (t.memoizedState = fc),
              (t = Pe(null, e)));
      else if ((na(t), Jc(c))) {
        if (((i = c.nextSibling && c.nextSibling.dataset), i)) var h = i.dgst;
        ((i = h),
          (e = Error(r(419))),
          (e.stack = ""),
          (e.digest = i),
          Qe({ value: e, source: null, stack: null }),
          (t = mc(l, t, a)));
      } else if (
        (zl || ue(l, t, a, !1), (i = (a & l.childLanes) !== 0), zl || i)
      ) {
        if (
          ((i = fl),
          i !== null && ((e = Sf(i, a)), e !== 0 && e !== f.retryLane))
        )
          throw ((f.retryLane = e), _a(l, e), wl(i, l, e), ic);
        (Kc(c) || bn(), (t = mc(l, t, a)));
      } else
        Kc(c)
          ? ((t.flags |= 192), (t.child = l.child), (t = null))
          : ((l = f.treeContext),
            (sl = yt(c.nextSibling)),
            (_l = t),
            (W = !0),
            (Pt = null),
            (ht = !1),
            l !== null && ys(t, l),
            (t = oc(t, e.children)),
            (t.flags |= 4096));
      return t;
    }
    return u
      ? (ia(),
        (c = e.fallback),
        (u = t.mode),
        (f = l.child),
        (h = f.sibling),
        (e = Ht(f, { mode: "hidden", children: e.children })),
        (e.subtreeFlags = f.subtreeFlags & 65011712),
        h !== null ? (c = Ht(h, c)) : ((c = Oa(c, u, a, null)), (c.flags |= 2)),
        (c.return = t),
        (e.return = t),
        (e.sibling = c),
        (t.child = e),
        Pe(null, e),
        (e = t.child),
        (c = l.child.memoizedState),
        c === null
          ? (c = sc(a))
          : ((u = c.cachePool),
            u !== null
              ? ((f = Sl._currentValue),
                (u = u.parent !== f ? { parent: f, pool: f } : u))
              : (u = zs()),
            (c = { baseLanes: c.baseLanes | a, cachePool: u })),
        (e.memoizedState = c),
        (e.childLanes = dc(l, i, a)),
        (t.memoizedState = fc),
        Pe(l.child, e))
      : (na(t),
        (a = l.child),
        (l = a.sibling),
        (a = Ht(a, { mode: "visible", children: e.children })),
        (a.return = t),
        (a.sibling = null),
        l !== null &&
          ((i = t.deletions),
          i === null ? ((t.deletions = [l]), (t.flags |= 16)) : i.push(l)),
        (t.child = a),
        (t.memoizedState = null),
        a);
  }
  function oc(l, t) {
    return (
      (t = sn({ mode: "visible", children: t }, l.mode)),
      (t.return = l),
      (l.child = t)
    );
  }
  function sn(l, t) {
    return ((l = lt(22, l, null, t)), (l.lanes = 0), l);
  }
  function mc(l, t, a) {
    return (
      Ca(t, l.child, null, a),
      (l = oc(t, t.pendingProps.children)),
      (l.flags |= 2),
      (t.memoizedState = null),
      l
    );
  }
  function Rd(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    (e !== null && (e.lanes |= t), _i(l.return, t, a));
  }
  function hc(l, t, a, e, u, n) {
    var i = l.memoizedState;
    i === null
      ? (l.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: e,
          tail: a,
          tailMode: u,
          treeForkCount: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = e),
        (i.tail = a),
        (i.tailMode = u),
        (i.treeForkCount = n));
  }
  function Cd(l, t, a) {
    var e = t.pendingProps,
      u = e.revealOrder,
      n = e.tail;
    e = e.children;
    var i = gl.current,
      c = (i & 2) !== 0;
    if (
      (c ? ((i = (i & 1) | 2), (t.flags |= 128)) : (i &= 1),
      p(gl, i),
      Ml(l, t, e, a),
      (e = W ? Xe : 0),
      !c && l !== null && (l.flags & 128) !== 0)
    )
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13) l.memoizedState !== null && Rd(l, a, t);
        else if (l.tag === 19) Rd(l, a, t);
        else if (l.child !== null) {
          ((l.child.return = l), (l = l.child));
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t) break l;
          l = l.return;
        }
        ((l.sibling.return = l.return), (l = l.sibling));
      }
    switch (u) {
      case "forwards":
        for (a = t.child, u = null; a !== null; )
          ((l = a.alternate),
            l !== null && Fu(l) === null && (u = a),
            (a = a.sibling));
        ((a = u),
          a === null
            ? ((u = t.child), (t.child = null))
            : ((u = a.sibling), (a.sibling = null)),
          hc(t, !1, u, a, n, e));
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (((l = u.alternate), l !== null && Fu(l) === null)) {
            t.child = u;
            break;
          }
          ((l = u.sibling), (u.sibling = a), (a = u), (u = l));
        }
        hc(t, !0, a, null, n, e);
        break;
      case "together":
        hc(t, !1, null, null, void 0, e);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Gt(l, t, a) {
    if (
      (l !== null && (t.dependencies = l.dependencies),
      (sa |= t.lanes),
      (a & t.childLanes) === 0)
    )
      if (l !== null) {
        if ((ue(l, t, a, !1), (a & t.childLanes) === 0)) return null;
      } else return null;
    if (l !== null && t.child !== l.child) throw Error(r(153));
    if (t.child !== null) {
      for (
        l = t.child, a = Ht(l, l.pendingProps), t.child = a, a.return = t;
        l.sibling !== null;
      )
        ((l = l.sibling),
          (a = a.sibling = Ht(l, l.pendingProps)),
          (a.return = t));
      a.sibling = null;
    }
    return t.child;
  }
  function vc(l, t) {
    return (l.lanes & t) !== 0
      ? !0
      : ((l = l.dependencies), !!(l !== null && Zu(l)));
  }
  function J0(l, t, a) {
    switch (t.tag) {
      case 3:
        (Cl(t, t.stateNode.containerInfo),
          ta(t, Sl, l.memoizedState.cache),
          Ma());
        break;
      case 27:
      case 5:
        pe(t);
        break;
      case 4:
        Cl(t, t.stateNode.containerInfo);
        break;
      case 10:
        ta(t, t.type, t.memoizedProps.value);
        break;
      case 31:
        if (t.memoizedState !== null) return ((t.flags |= 128), Gi(t), null);
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null)
          return e.dehydrated !== null
            ? (na(t), (t.flags |= 128), null)
            : (a & t.child.childLanes) !== 0
              ? Hd(l, t, a)
              : (na(t), (l = Gt(l, t, a)), l !== null ? l.sibling : null);
        na(t);
        break;
      case 19:
        var u = (l.flags & 128) !== 0;
        if (
          ((e = (a & t.childLanes) !== 0),
          e || (ue(l, t, a, !1), (e = (a & t.childLanes) !== 0)),
          u)
        ) {
          if (e) return Cd(l, t, a);
          t.flags |= 128;
        }
        if (
          ((u = t.memoizedState),
          u !== null &&
            ((u.rendering = null), (u.tail = null), (u.lastEffect = null)),
          p(gl, gl.current),
          e)
        )
          break;
        return null;
      case 22:
        return ((t.lanes = 0), _d(l, t, a, t.pendingProps));
      case 24:
        ta(t, Sl, l.memoizedState.cache);
    }
    return Gt(l, t, a);
  }
  function qd(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps) zl = !0;
      else {
        if (!vc(l, a) && (t.flags & 128) === 0) return ((zl = !1), J0(l, t, a));
        zl = (l.flags & 131072) !== 0;
      }
    else ((zl = !1), W && (t.flags & 1048576) !== 0 && vs(t, Xe, t.index));
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (((l = Ha(t.elementType)), (t.type = l), typeof l == "function"))
            Si(l)
              ? ((e = Ya(l, e)), (t.tag = 1), (t = jd(null, t, l, e, a)))
              : ((t.tag = 0), (t = cc(null, t, l, e, a)));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === it) {
                ((t.tag = 11), (t = Ad(null, t, l, e, a)));
                break l;
              } else if (u === w) {
                ((t.tag = 14), (t = pd(null, t, l, e, a)));
                break l;
              }
            }
            throw ((t = Mt(l) || l), Error(r(306, t, "")));
          }
        }
        return t;
      case 0:
        return cc(l, t, t.type, t.pendingProps, a);
      case 1:
        return ((e = t.type), (u = Ya(e, t.pendingProps)), jd(l, t, e, u, a));
      case 3:
        l: {
          if ((Cl(t, t.stateNode.containerInfo), l === null))
            throw Error(r(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          ((u = n.element), Ri(l, t), We(t, e, null, a));
          var i = t.memoizedState;
          if (
            ((e = i.cache),
            ta(t, Sl, e),
            e !== n.cache && Oi(t, [Sl], a, !0),
            we(),
            (e = i.element),
            n.isDehydrated)
          )
            if (
              ((n = { element: e, isDehydrated: !1, cache: i.cache }),
              (t.updateQueue.baseState = n),
              (t.memoizedState = n),
              t.flags & 256)
            ) {
              t = Ud(l, t, e, a);
              break l;
            } else if (e !== u) {
              ((u = dt(Error(r(424)), t)), Qe(u), (t = Ud(l, t, e, a)));
              break l;
            } else
              for (
                l = t.stateNode.containerInfo,
                  l.nodeType === 9
                    ? (l = l.body)
                    : (l = l.nodeName === "HTML" ? l.ownerDocument.body : l),
                  sl = yt(l.firstChild),
                  _l = t,
                  W = !0,
                  Pt = null,
                  ht = !0,
                  a = _s(t, null, e, a),
                  t.child = a;
                a;
              )
                ((a.flags = (a.flags & -3) | 4096), (a = a.sibling));
          else {
            if ((Ma(), e === u)) {
              t = Gt(l, t, a);
              break l;
            }
            Ml(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          fn(l, t),
          l === null
            ? (a = Wo(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = a)
              : W ||
                ((a = t.type),
                (l = t.pendingProps),
                (e = pn(Z.current).createElement(a)),
                (e[Nl] = t),
                (e[Ql] = l),
                Dl(e, a, l),
                Al(e),
                (t.stateNode = e))
            : (t.memoizedState = Wo(
                t.type,
                l.memoizedProps,
                t.pendingProps,
                l.memoizedState,
              )),
          null
        );
      case 27:
        return (
          pe(t),
          l === null &&
            W &&
            ((e = t.stateNode = Ko(t.type, t.pendingProps, Z.current)),
            (_l = t),
            (ht = !0),
            (u = sl),
            va(t.type) ? ((wc = u), (sl = yt(e.firstChild))) : (sl = u)),
          Ml(l, t, t.pendingProps.children, a),
          fn(l, t),
          l === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          l === null &&
            W &&
            ((u = e = sl) &&
              ((e = Th(e, t.type, t.pendingProps, ht)),
              e !== null
                ? ((t.stateNode = e),
                  (_l = t),
                  (sl = yt(e.firstChild)),
                  (ht = !1),
                  (u = !0))
                : (u = !1)),
            u || la(t)),
          pe(t),
          (u = t.type),
          (n = t.pendingProps),
          (i = l !== null ? l.memoizedProps : null),
          (e = n.children),
          Zc(u, n) ? (e = null) : i !== null && Zc(u, i) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((u = Qi(l, t, Y0, null, null, a)), (vu._currentValue = u)),
          fn(l, t),
          Ml(l, t, e, a),
          t.child
        );
      case 6:
        return (
          l === null &&
            W &&
            ((l = a = sl) &&
              ((a = Eh(a, t.pendingProps, ht)),
              a !== null
                ? ((t.stateNode = a), (_l = t), (sl = null), (l = !0))
                : (l = !1)),
            l || la(t)),
          null
        );
      case 13:
        return Hd(l, t, a);
      case 4:
        return (
          Cl(t, t.stateNode.containerInfo),
          (e = t.pendingProps),
          l === null ? (t.child = Ca(t, null, e, a)) : Ml(l, t, e, a),
          t.child
        );
      case 11:
        return Ad(l, t, t.type, t.pendingProps, a);
      case 7:
        return (Ml(l, t, t.pendingProps, a), t.child);
      case 8:
        return (Ml(l, t, t.pendingProps.children, a), t.child);
      case 12:
        return (Ml(l, t, t.pendingProps.children, a), t.child);
      case 10:
        return (
          (e = t.pendingProps),
          ta(t, t.type, e.value),
          Ml(l, t, e.children, a),
          t.child
        );
      case 9:
        return (
          (u = t.type._context),
          (e = t.pendingProps.children),
          ja(t),
          (u = Ol(u)),
          (e = e(u)),
          (t.flags |= 1),
          Ml(l, t, e, a),
          t.child
        );
      case 14:
        return pd(l, t, t.type, t.pendingProps, a);
      case 15:
        return Nd(l, t, t.type, t.pendingProps, a);
      case 19:
        return Cd(l, t, a);
      case 31:
        return K0(l, t, a);
      case 22:
        return _d(l, t, a, t.pendingProps);
      case 24:
        return (
          ja(t),
          (e = Ol(Sl)),
          l === null
            ? ((u = ji()),
              u === null &&
                ((u = fl),
                (n = Mi()),
                (u.pooledCache = n),
                n.refCount++,
                n !== null && (u.pooledCacheLanes |= a),
                (u = n)),
              (t.memoizedState = { parent: e, cache: u }),
              Hi(t),
              ta(t, Sl, u))
            : ((l.lanes & a) !== 0 && (Ri(l, t), We(t, null, null, a), we()),
              (u = l.memoizedState),
              (n = t.memoizedState),
              u.parent !== e
                ? ((u = { parent: e, cache: e }),
                  (t.memoizedState = u),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = u),
                  ta(t, Sl, e))
                : ((e = n.cache),
                  ta(t, Sl, e),
                  e !== u.cache && Oi(t, [Sl], a, !0))),
          Ml(l, t, t.pendingProps.children, a),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(r(156, t.tag));
  }
  function Xt(l) {
    l.flags |= 4;
  }
  function yc(l, t, a, e, u) {
    if (((t = (l.mode & 32) !== 0) && (t = !1), t)) {
      if (((l.flags |= 16777216), (u & 335544128) === u))
        if (l.stateNode.complete) l.flags |= 8192;
        else if (so()) l.flags |= 8192;
        else throw ((Ra = Ju), Ui);
    } else l.flags &= -16777217;
  }
  function Yd(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (((l.flags |= 16777216), !Po(t)))
      if (so()) l.flags |= 8192;
      else throw ((Ra = Ju), Ui);
  }
  function dn(l, t) {
    (t !== null && (l.flags |= 4),
      l.flags & 16384 &&
        ((t = l.tag !== 22 ? rf() : 536870912), (l.lanes |= t), (re |= t)));
  }
  function lu(l, t) {
    if (!W)
      switch (l.tailMode) {
        case "hidden":
          t = l.tail;
          for (var a = null; t !== null; )
            (t.alternate !== null && (a = t), (t = t.sibling));
          a === null ? (l.tail = null) : (a.sibling = null);
          break;
        case "collapsed":
          a = l.tail;
          for (var e = null; a !== null; )
            (a.alternate !== null && (e = a), (a = a.sibling));
          e === null
            ? t || l.tail === null
              ? (l.tail = null)
              : (l.tail.sibling = null)
            : (e.sibling = null);
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child,
      a = 0,
      e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags & 65011712),
          (e |= u.flags & 65011712),
          (u.return = l),
          (u = u.sibling));
    else
      for (u = l.child; u !== null; )
        ((a |= u.lanes | u.childLanes),
          (e |= u.subtreeFlags),
          (e |= u.flags),
          (u.return = l),
          (u = u.sibling));
    return ((l.subtreeFlags |= e), (l.childLanes = a), t);
  }
  function w0(l, t, a) {
    var e = t.pendingProps;
    switch ((Ei(t), t.tag)) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return (dl(t), null);
      case 1:
        return (dl(t), null);
      case 3:
        return (
          (a = t.stateNode),
          (e = null),
          l !== null && (e = l.memoizedState.cache),
          t.memoizedState.cache !== e && (t.flags |= 2048),
          qt(Sl),
          rl(),
          a.pendingContext &&
            ((a.context = a.pendingContext), (a.pendingContext = null)),
          (l === null || l.child === null) &&
            (ee(t)
              ? Xt(t)
              : l === null ||
                (l.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), pi())),
          dl(t),
          null
        );
      case 26:
        var u = t.type,
          n = t.memoizedState;
        return (
          l === null
            ? (Xt(t),
              n !== null ? (dl(t), Yd(t, n)) : (dl(t), yc(t, u, null, e, a)))
            : n
              ? n !== l.memoizedState
                ? (Xt(t), dl(t), Yd(t, n))
                : (dl(t), (t.flags &= -16777217))
              : ((l = l.memoizedProps),
                l !== e && Xt(t),
                dl(t),
                yc(t, u, l, e, a)),
          null
        );
      case 27:
        if (
          (xu(t),
          (a = Z.current),
          (u = t.type),
          l !== null && t.stateNode != null)
        )
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return (dl(t), null);
          }
          ((l = O.current),
            ee(t) ? rs(t) : ((l = Ko(u, e, a)), (t.stateNode = l), Xt(t)));
        }
        return (dl(t), null);
      case 5:
        if ((xu(t), (u = t.type), l !== null && t.stateNode != null))
          l.memoizedProps !== e && Xt(t);
        else {
          if (!e) {
            if (t.stateNode === null) throw Error(r(166));
            return (dl(t), null);
          }
          if (((n = O.current), ee(t))) rs(t);
          else {
            var i = pn(Z.current);
            switch (n) {
              case 1:
                n = i.createElementNS("http://www.w3.org/2000/svg", u);
                break;
              case 2:
                n = i.createElementNS("http://www.w3.org/1998/Math/MathML", u);
                break;
              default:
                switch (u) {
                  case "svg":
                    n = i.createElementNS("http://www.w3.org/2000/svg", u);
                    break;
                  case "math":
                    n = i.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u,
                    );
                    break;
                  case "script":
                    ((n = i.createElement("div")),
                      (n.innerHTML = "<script><\/script>"),
                      (n = n.removeChild(n.firstChild)));
                    break;
                  case "select":
                    ((n =
                      typeof e.is == "string"
                        ? i.createElement("select", { is: e.is })
                        : i.createElement("select")),
                      e.multiple
                        ? (n.multiple = !0)
                        : e.size && (n.size = e.size));
                    break;
                  default:
                    n =
                      typeof e.is == "string"
                        ? i.createElement(u, { is: e.is })
                        : i.createElement(u);
                }
            }
            ((n[Nl] = t), (n[Ql] = e));
            l: for (i = t.child; i !== null; ) {
              if (i.tag === 5 || i.tag === 6) n.appendChild(i.stateNode);
              else if (i.tag !== 4 && i.tag !== 27 && i.child !== null) {
                ((i.child.return = i), (i = i.child));
                continue;
              }
              if (i === t) break l;
              for (; i.sibling === null; ) {
                if (i.return === null || i.return === t) break l;
                i = i.return;
              }
              ((i.sibling.return = i.return), (i = i.sibling));
            }
            t.stateNode = n;
            l: switch ((Dl(n, u, e), u)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Xt(t);
          }
        }
        return (
          dl(t),
          yc(t, t.type, l === null ? null : l.memoizedProps, t.pendingProps, a),
          null
        );
      case 6:
        if (l && t.stateNode != null) l.memoizedProps !== e && Xt(t);
        else {
          if (typeof e != "string" && t.stateNode === null) throw Error(r(166));
          if (((l = Z.current), ee(t))) {
            if (
              ((l = t.stateNode),
              (a = t.memoizedProps),
              (e = null),
              (u = _l),
              u !== null)
            )
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            ((l[Nl] = t),
              (l = !!(
                l.nodeValue === a ||
                (e !== null && e.suppressHydrationWarning === !0) ||
                Ro(l.nodeValue, a)
              )),
              l || la(t, !0));
          } else
            ((l = pn(l).createTextNode(e)), (l[Nl] = t), (t.stateNode = l));
        }
        return (dl(t), null);
      case 31:
        if (((a = t.memoizedState), l === null || l.memoizedState !== null)) {
          if (((e = ee(t)), a !== null)) {
            if (l === null) {
              if (!e) throw Error(r(318));
              if (
                ((l = t.memoizedState),
                (l = l !== null ? l.dehydrated : null),
                !l)
              )
                throw Error(r(557));
              l[Nl] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (dl(t), (l = !1));
          } else
            ((a = pi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = a),
              (l = !0));
          if (!l) return t.flags & 256 ? (at(t), t) : (at(t), null);
          if ((t.flags & 128) !== 0) throw Error(r(558));
        }
        return (dl(t), null);
      case 13:
        if (
          ((e = t.memoizedState),
          l === null ||
            (l.memoizedState !== null && l.memoizedState.dehydrated !== null))
        ) {
          if (((u = ee(t)), e !== null && e.dehydrated !== null)) {
            if (l === null) {
              if (!u) throw Error(r(318));
              if (
                ((u = t.memoizedState),
                (u = u !== null ? u.dehydrated : null),
                !u)
              )
                throw Error(r(317));
              u[Nl] = t;
            } else
              (Ma(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4));
            (dl(t), (u = !1));
          } else
            ((u = pi()),
              l !== null &&
                l.memoizedState !== null &&
                (l.memoizedState.hydrationErrors = u),
              (u = !0));
          if (!u) return t.flags & 256 ? (at(t), t) : (at(t), null);
        }
        return (
          at(t),
          (t.flags & 128) !== 0
            ? ((t.lanes = a), t)
            : ((a = e !== null),
              (l = l !== null && l.memoizedState !== null),
              a &&
                ((e = t.child),
                (u = null),
                e.alternate !== null &&
                  e.alternate.memoizedState !== null &&
                  e.alternate.memoizedState.cachePool !== null &&
                  (u = e.alternate.memoizedState.cachePool.pool),
                (n = null),
                e.memoizedState !== null &&
                  e.memoizedState.cachePool !== null &&
                  (n = e.memoizedState.cachePool.pool),
                n !== u && (e.flags |= 2048)),
              a !== l && a && (t.child.flags |= 8192),
              dn(t, t.updateQueue),
              dl(t),
              null)
        );
      case 4:
        return (rl(), l === null && Yc(t.stateNode.containerInfo), dl(t), null);
      case 10:
        return (qt(t.type), dl(t), null);
      case 19:
        if ((T(gl), (e = t.memoizedState), e === null)) return (dl(t), null);
        if (((u = (t.flags & 128) !== 0), (n = e.rendering), n === null))
          if (u) lu(e, !1);
          else {
            if (vl !== 0 || (l !== null && (l.flags & 128) !== 0))
              for (l = t.child; l !== null; ) {
                if (((n = Fu(l)), n !== null)) {
                  for (
                    t.flags |= 128,
                      lu(e, !1),
                      l = n.updateQueue,
                      t.updateQueue = l,
                      dn(t, l),
                      t.subtreeFlags = 0,
                      l = a,
                      a = t.child;
                    a !== null;
                  )
                    (os(a, l), (a = a.sibling));
                  return (
                    p(gl, (gl.current & 1) | 2),
                    W && Rt(t, e.treeForkCount),
                    t.child
                  );
                }
                l = l.sibling;
              }
            e.tail !== null &&
              Fl() > yn &&
              ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          }
        else {
          if (!u)
            if (((l = Fu(n)), l !== null)) {
              if (
                ((t.flags |= 128),
                (u = !0),
                (l = l.updateQueue),
                (t.updateQueue = l),
                dn(t, l),
                lu(e, !0),
                e.tail === null &&
                  e.tailMode === "hidden" &&
                  !n.alternate &&
                  !W)
              )
                return (dl(t), null);
            } else
              2 * Fl() - e.renderingStartTime > yn &&
                a !== 536870912 &&
                ((t.flags |= 128), (u = !0), lu(e, !1), (t.lanes = 4194304));
          e.isBackwards
            ? ((n.sibling = t.child), (t.child = n))
            : ((l = e.last),
              l !== null ? (l.sibling = n) : (t.child = n),
              (e.last = n));
        }
        return e.tail !== null
          ? ((l = e.tail),
            (e.rendering = l),
            (e.tail = l.sibling),
            (e.renderingStartTime = Fl()),
            (l.sibling = null),
            (a = gl.current),
            p(gl, u ? (a & 1) | 2 : a & 1),
            W && Rt(t, e.treeForkCount),
            l)
          : (dl(t), null);
      case 22:
      case 23:
        return (
          at(t),
          Bi(),
          (e = t.memoizedState !== null),
          l !== null
            ? (l.memoizedState !== null) !== e && (t.flags |= 8192)
            : e && (t.flags |= 8192),
          e
            ? (a & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : dl(t),
          (a = t.updateQueue),
          a !== null && dn(t, a.retryQueue),
          (a = null),
          l !== null &&
            l.memoizedState !== null &&
            l.memoizedState.cachePool !== null &&
            (a = l.memoizedState.cachePool.pool),
          (e = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (e = t.memoizedState.cachePool.pool),
          e !== a && (t.flags |= 2048),
          l !== null && T(Ua),
          null
        );
      case 24:
        return (
          (a = null),
          l !== null && (a = l.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          qt(Sl),
          dl(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(r(156, t.tag));
  }
  function W0(l, t) {
    switch ((Ei(t), t.tag)) {
      case 1:
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 3:
        return (
          qt(Sl),
          rl(),
          (l = t.flags),
          (l & 65536) !== 0 && (l & 128) === 0
            ? ((t.flags = (l & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return (xu(t), null);
      case 31:
        if (t.memoizedState !== null) {
          if ((at(t), t.alternate === null)) throw Error(r(340));
          Ma();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 13:
        if (
          (at(t), (l = t.memoizedState), l !== null && l.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(r(340));
          Ma();
        }
        return (
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 19:
        return (T(gl), null);
      case 4:
        return (rl(), null);
      case 10:
        return (qt(t.type), null);
      case 22:
      case 23:
        return (
          at(t),
          Bi(),
          l !== null && T(Ua),
          (l = t.flags),
          l & 65536 ? ((t.flags = (l & -65537) | 128), t) : null
        );
      case 24:
        return (qt(Sl), null);
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Bd(l, t) {
    switch ((Ei(t), t.tag)) {
      case 3:
        (qt(Sl), rl());
        break;
      case 26:
      case 27:
      case 5:
        xu(t);
        break;
      case 4:
        rl();
        break;
      case 31:
        t.memoizedState !== null && at(t);
        break;
      case 13:
        at(t);
        break;
      case 19:
        T(gl);
        break;
      case 10:
        qt(t.type);
        break;
      case 22:
      case 23:
        (at(t), Bi(), l !== null && T(Ua));
        break;
      case 24:
        qt(Sl);
    }
  }
  function tu(l, t) {
    try {
      var a = t.updateQueue,
        e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create,
              i = a.inst;
            ((e = n()), (i.destroy = e));
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (c) {
      al(t, t.return, c);
    }
  }
  function ca(l, t, a) {
    try {
      var e = t.updateQueue,
        u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var i = e.inst,
              c = i.destroy;
            if (c !== void 0) {
              ((i.destroy = void 0), (u = t));
              var f = a,
                h = c;
              try {
                h();
              } catch (b) {
                al(u, f, b);
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (b) {
      al(t, t.return, b);
    }
  }
  function Gd(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Ms(t, a);
      } catch (e) {
        al(l, l.return, e);
      }
    }
  }
  function Xd(l, t, a) {
    ((a.props = Ya(l.type, l.memoizedProps)), (a.state = l.memoizedState));
    try {
      a.componentWillUnmount();
    } catch (e) {
      al(l, t, e);
    }
  }
  function au(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? (l.refCleanup = a(e)) : (a.current = e);
      }
    } catch (u) {
      al(l, t, u);
    }
  }
  function Nt(l, t) {
    var a = l.ref,
      e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          al(l, t, u);
        } finally {
          ((l.refCleanup = null),
            (l = l.alternate),
            l != null && (l.refCleanup = null));
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          al(l, t, u);
        }
      else a.current = null;
  }
  function Qd(l) {
    var t = l.type,
      a = l.memoizedProps,
      e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? (e.src = a.src) : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function rc(l, t, a) {
    try {
      var e = l.stateNode;
      (rh(e, l.type, a, t), (e[Ql] = t));
    } catch (u) {
      al(l, l.return, u);
    }
  }
  function Zd(l) {
    return (
      l.tag === 5 ||
      l.tag === 3 ||
      l.tag === 26 ||
      (l.tag === 27 && va(l.type)) ||
      l.tag === 4
    );
  }
  function gc(l) {
    l: for (;;) {
      for (; l.sibling === null; ) {
        if (l.return === null || Zd(l.return)) return null;
        l = l.return;
      }
      for (
        l.sibling.return = l.return, l = l.sibling;
        l.tag !== 5 && l.tag !== 6 && l.tag !== 18;
      ) {
        if (
          (l.tag === 27 && va(l.type)) ||
          l.flags & 2 ||
          l.child === null ||
          l.tag === 4
        )
          continue l;
        ((l.child.return = l), (l = l.child));
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bc(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode),
        t
          ? (a.nodeType === 9
              ? a.body
              : a.nodeName === "HTML"
                ? a.ownerDocument.body
                : a
            ).insertBefore(l, t)
          : ((t =
              a.nodeType === 9
                ? a.body
                : a.nodeName === "HTML"
                  ? a.ownerDocument.body
                  : a),
            t.appendChild(l),
            (a = a._reactRootContainer),
            a != null || t.onclick !== null || (t.onclick = jt)));
    else if (
      e !== 4 &&
      (e === 27 && va(l.type) && ((a = l.stateNode), (t = null)),
      (l = l.child),
      l !== null)
    )
      for (bc(l, t, a), l = l.sibling; l !== null; )
        (bc(l, t, a), (l = l.sibling));
  }
  function on(l, t, a) {
    var e = l.tag;
    if (e === 5 || e === 6)
      ((l = l.stateNode), t ? a.insertBefore(l, t) : a.appendChild(l));
    else if (
      e !== 4 &&
      (e === 27 && va(l.type) && (a = l.stateNode), (l = l.child), l !== null)
    )
      for (on(l, t, a), l = l.sibling; l !== null; )
        (on(l, t, a), (l = l.sibling));
  }
  function Vd(l) {
    var t = l.stateNode,
      a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      (Dl(t, e, a), (t[Nl] = l), (t[Ql] = a));
    } catch (n) {
      al(l, l.return, n);
    }
  }
  var Qt = !1,
    Tl = !1,
    Sc = !1,
    Ld = typeof WeakSet == "function" ? WeakSet : Set,
    pl = null;
  function $0(l, t) {
    if (((l = l.containerInfo), (Xc = Un), (l = as(l)), mi(l))) {
      if ("selectionStart" in l)
        var a = { start: l.selectionStart, end: l.selectionEnd };
      else
        l: {
          a = ((a = l.ownerDocument) && a.defaultView) || window;
          var e = a.getSelection && a.getSelection();
          if (e && e.rangeCount !== 0) {
            a = e.anchorNode;
            var u = e.anchorOffset,
              n = e.focusNode;
            e = e.focusOffset;
            try {
              (a.nodeType, n.nodeType);
            } catch {
              a = null;
              break l;
            }
            var i = 0,
              c = -1,
              f = -1,
              h = 0,
              b = 0,
              z = l,
              y = null;
            t: for (;;) {
              for (
                var g;
                z !== a || (u !== 0 && z.nodeType !== 3) || (c = i + u),
                  z !== n || (e !== 0 && z.nodeType !== 3) || (f = i + e),
                  z.nodeType === 3 && (i += z.nodeValue.length),
                  (g = z.firstChild) !== null;
              )
                ((y = z), (z = g));
              for (;;) {
                if (z === l) break t;
                if (
                  (y === a && ++h === u && (c = i),
                  y === n && ++b === e && (f = i),
                  (g = z.nextSibling) !== null)
                )
                  break;
                ((z = y), (y = z.parentNode));
              }
              z = g;
            }
            a = c === -1 || f === -1 ? null : { start: c, end: f };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (
      Qc = { focusedElem: l, selectionRange: a }, Un = !1, pl = t;
      pl !== null;
    )
      if (
        ((t = pl), (l = t.child), (t.subtreeFlags & 1028) !== 0 && l !== null)
      )
        ((l.return = t), (pl = l));
      else
        for (; pl !== null; ) {
          switch (((t = pl), (n = t.alternate), (l = t.flags), t.tag)) {
            case 0:
              if (
                (l & 4) !== 0 &&
                ((l = t.updateQueue),
                (l = l !== null ? l.events : null),
                l !== null)
              )
                for (a = 0; a < l.length; a++)
                  ((u = l[a]), (u.ref.impl = u.nextImpl));
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((l & 1024) !== 0 && n !== null) {
                ((l = void 0),
                  (a = t),
                  (u = n.memoizedProps),
                  (n = n.memoizedState),
                  (e = a.stateNode));
                try {
                  var _ = Ya(a.type, u);
                  ((l = e.getSnapshotBeforeUpdate(_, n)),
                    (e.__reactInternalSnapshotBeforeUpdate = l));
                } catch (U) {
                  al(a, a.return, U);
                }
              }
              break;
            case 3:
              if ((l & 1024) !== 0) {
                if (
                  ((l = t.stateNode.containerInfo), (a = l.nodeType), a === 9)
                )
                  Lc(l);
                else if (a === 1)
                  switch (l.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lc(l);
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
              if ((l & 1024) !== 0) throw Error(r(163));
          }
          if (((l = t.sibling), l !== null)) {
            ((l.return = t.return), (pl = l));
            break;
          }
          pl = t.return;
        }
  }
  function Kd(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        (Vt(l, a), e & 4 && tu(5, a));
        break;
      case 1:
        if ((Vt(l, a), e & 4))
          if (((l = a.stateNode), t === null))
            try {
              l.componentDidMount();
            } catch (i) {
              al(a, a.return, i);
            }
          else {
            var u = Ya(a.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              l.componentDidUpdate(u, t, l.__reactInternalSnapshotBeforeUpdate);
            } catch (i) {
              al(a, a.return, i);
            }
          }
        (e & 64 && Gd(a), e & 512 && au(a, a.return));
        break;
      case 3:
        if ((Vt(l, a), e & 64 && ((l = a.updateQueue), l !== null))) {
          if (((t = null), a.child !== null))
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Ms(l, t);
          } catch (i) {
            al(a, a.return, i);
          }
        }
        break;
      case 27:
        t === null && e & 4 && Vd(a);
      case 26:
      case 5:
        (Vt(l, a), t === null && e & 4 && Qd(a), e & 512 && au(a, a.return));
        break;
      case 12:
        Vt(l, a);
        break;
      case 31:
        (Vt(l, a), e & 4 && Wd(l, a));
        break;
      case 13:
        (Vt(l, a),
          e & 4 && $d(l, a),
          e & 64 &&
            ((l = a.memoizedState),
            l !== null &&
              ((l = l.dehydrated),
              l !== null && ((a = uh.bind(null, a)), Ah(l, a)))));
        break;
      case 22:
        if (((e = a.memoizedState !== null || Qt), !e)) {
          ((t = (t !== null && t.memoizedState !== null) || Tl), (u = Qt));
          var n = Tl;
          ((Qt = e),
            (Tl = t) && !n ? Lt(l, a, (a.subtreeFlags & 8772) !== 0) : Vt(l, a),
            (Qt = u),
            (Tl = n));
        }
        break;
      case 30:
        break;
      default:
        Vt(l, a);
    }
  }
  function Jd(l) {
    var t = l.alternate;
    (t !== null && ((l.alternate = null), Jd(t)),
      (l.child = null),
      (l.deletions = null),
      (l.sibling = null),
      l.tag === 5 && ((t = l.stateNode), t !== null && $n(t)),
      (l.stateNode = null),
      (l.return = null),
      (l.dependencies = null),
      (l.memoizedProps = null),
      (l.memoizedState = null),
      (l.pendingProps = null),
      (l.stateNode = null),
      (l.updateQueue = null));
  }
  var ml = null,
    Vl = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; ) (wd(l, t, a), (a = a.sibling));
  }
  function wd(l, t, a) {
    if (kl && typeof kl.onCommitFiberUnmount == "function")
      try {
        kl.onCommitFiberUnmount(Ne, a);
      } catch {}
    switch (a.tag) {
      case 26:
        (Tl || Nt(a, t),
          Zt(l, t, a),
          a.memoizedState
            ? a.memoizedState.count--
            : a.stateNode && ((a = a.stateNode), a.parentNode.removeChild(a)));
        break;
      case 27:
        Tl || Nt(a, t);
        var e = ml,
          u = Vl;
        (va(a.type) && ((ml = a.stateNode), (Vl = !1)),
          Zt(l, t, a),
          ou(a.stateNode),
          (ml = e),
          (Vl = u));
        break;
      case 5:
        Tl || Nt(a, t);
      case 6:
        if (
          ((e = ml),
          (u = Vl),
          (ml = null),
          Zt(l, t, a),
          (ml = e),
          (Vl = u),
          ml !== null)
        )
          if (Vl)
            try {
              (ml.nodeType === 9
                ? ml.body
                : ml.nodeName === "HTML"
                  ? ml.ownerDocument.body
                  : ml
              ).removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
          else
            try {
              ml.removeChild(a.stateNode);
            } catch (n) {
              al(a, t, n);
            }
        break;
      case 18:
        ml !== null &&
          (Vl
            ? ((l = ml),
              Xo(
                l.nodeType === 9
                  ? l.body
                  : l.nodeName === "HTML"
                    ? l.ownerDocument.body
                    : l,
                a.stateNode,
              ),
              Ae(l))
            : Xo(ml, a.stateNode));
        break;
      case 4:
        ((e = ml),
          (u = Vl),
          (ml = a.stateNode.containerInfo),
          (Vl = !0),
          Zt(l, t, a),
          (ml = e),
          (Vl = u));
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        (ca(2, a, t), Tl || ca(4, a, t), Zt(l, t, a));
        break;
      case 1:
        (Tl ||
          (Nt(a, t),
          (e = a.stateNode),
          typeof e.componentWillUnmount == "function" && Xd(a, t, e)),
          Zt(l, t, a));
        break;
      case 21:
        Zt(l, t, a);
        break;
      case 22:
        ((Tl = (e = Tl) || a.memoizedState !== null), Zt(l, t, a), (Tl = e));
        break;
      default:
        Zt(l, t, a);
    }
  }
  function Wd(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate), l !== null && ((l = l.memoizedState), l !== null))
    ) {
      l = l.dehydrated;
      try {
        Ae(l);
      } catch (a) {
        al(t, t.return, a);
      }
    }
  }
  function $d(l, t) {
    if (
      t.memoizedState === null &&
      ((l = t.alternate),
      l !== null &&
        ((l = l.memoizedState), l !== null && ((l = l.dehydrated), l !== null)))
    )
      try {
        Ae(l);
      } catch (a) {
        al(t, t.return, a);
      }
  }
  function F0(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return (t === null && (t = l.stateNode = new Ld()), t);
      case 22:
        return (
          (l = l.stateNode),
          (t = l._retryCache),
          t === null && (t = l._retryCache = new Ld()),
          t
        );
      default:
        throw Error(r(435, l.tag));
    }
  }
  function mn(l, t) {
    var a = F0(l);
    t.forEach(function (e) {
      if (!a.has(e)) {
        a.add(e);
        var u = nh.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function Ll(l, t) {
    var a = t.deletions;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e],
          n = l,
          i = t,
          c = i;
        l: for (; c !== null; ) {
          switch (c.tag) {
            case 27:
              if (va(c.type)) {
                ((ml = c.stateNode), (Vl = !1));
                break l;
              }
              break;
            case 5:
              ((ml = c.stateNode), (Vl = !1));
              break l;
            case 3:
            case 4:
              ((ml = c.stateNode.containerInfo), (Vl = !0));
              break l;
          }
          c = c.return;
        }
        if (ml === null) throw Error(r(160));
        (wd(n, i, u),
          (ml = null),
          (Vl = !1),
          (n = u.alternate),
          n !== null && (n.return = null),
          (u.return = null));
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; ) (Fd(t, l), (t = t.sibling));
  }
  var St = null;
  function Fd(l, t) {
    var a = l.alternate,
      e = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        (Ll(t, l),
          Kl(l),
          e & 4 && (ca(3, l, l.return), tu(3, l), ca(5, l, l.return)));
        break;
      case 1:
        (Ll(t, l),
          Kl(l),
          e & 512 && (Tl || a === null || Nt(a, a.return)),
          e & 64 &&
            Qt &&
            ((l = l.updateQueue),
            l !== null &&
              ((e = l.callbacks),
              e !== null &&
                ((a = l.shared.hiddenCallbacks),
                (l.shared.hiddenCallbacks = a === null ? e : a.concat(e))))));
        break;
      case 26:
        var u = St;
        if (
          (Ll(t, l),
          Kl(l),
          e & 512 && (Tl || a === null || Nt(a, a.return)),
          e & 4)
        ) {
          var n = a !== null ? a.memoizedState : null;
          if (((e = l.memoizedState), a === null))
            if (e === null)
              if (l.stateNode === null) {
                l: {
                  ((e = l.type),
                    (a = l.memoizedProps),
                    (u = u.ownerDocument || u));
                  t: switch (e) {
                    case "title":
                      ((n = u.getElementsByTagName("title")[0]),
                        (!n ||
                          n[Me] ||
                          n[Nl] ||
                          n.namespaceURI === "http://www.w3.org/2000/svg" ||
                          n.hasAttribute("itemprop")) &&
                          ((n = u.createElement(e)),
                          u.head.insertBefore(
                            n,
                            u.querySelector("head > title"),
                          )),
                        Dl(n, e, a),
                        (n[Nl] = l),
                        Al(n),
                        (e = n));
                      break l;
                    case "link":
                      var i = ko("link", "href", u).get(e + (a.href || ""));
                      if (i) {
                        for (var c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("href") ===
                              (a.href == null || a.href === ""
                                ? null
                                : a.href) &&
                              n.getAttribute("rel") ===
                                (a.rel == null ? null : a.rel) &&
                              n.getAttribute("title") ===
                                (a.title == null ? null : a.title) &&
                              n.getAttribute("crossorigin") ===
                                (a.crossOrigin == null ? null : a.crossOrigin))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Dl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    case "meta":
                      if (
                        (i = ko("meta", "content", u).get(
                          e + (a.content || ""),
                        ))
                      ) {
                        for (c = 0; c < i.length; c++)
                          if (
                            ((n = i[c]),
                            n.getAttribute("content") ===
                              (a.content == null ? null : "" + a.content) &&
                              n.getAttribute("name") ===
                                (a.name == null ? null : a.name) &&
                              n.getAttribute("property") ===
                                (a.property == null ? null : a.property) &&
                              n.getAttribute("http-equiv") ===
                                (a.httpEquiv == null ? null : a.httpEquiv) &&
                              n.getAttribute("charset") ===
                                (a.charSet == null ? null : a.charSet))
                          ) {
                            i.splice(c, 1);
                            break t;
                          }
                      }
                      ((n = u.createElement(e)),
                        Dl(n, e, a),
                        u.head.appendChild(n));
                      break;
                    default:
                      throw Error(r(468, e));
                  }
                  ((n[Nl] = l), Al(n), (e = n));
                }
                l.stateNode = e;
              } else Io(u, l.type, l.stateNode);
            else l.stateNode = Fo(u, e, l.memoizedProps);
          else
            n !== e
              ? (n === null
                  ? a.stateNode !== null &&
                    ((a = a.stateNode), a.parentNode.removeChild(a))
                  : n.count--,
                e === null
                  ? Io(u, l.type, l.stateNode)
                  : Fo(u, e, l.memoizedProps))
              : e === null &&
                l.stateNode !== null &&
                rc(l, l.memoizedProps, a.memoizedProps);
        }
        break;
      case 27:
        (Ll(t, l),
          Kl(l),
          e & 512 && (Tl || a === null || Nt(a, a.return)),
          a !== null && e & 4 && rc(l, l.memoizedProps, a.memoizedProps));
        break;
      case 5:
        if (
          (Ll(t, l),
          Kl(l),
          e & 512 && (Tl || a === null || Nt(a, a.return)),
          l.flags & 32)
        ) {
          u = l.stateNode;
          try {
            wa(u, "");
          } catch (_) {
            al(l, l.return, _);
          }
        }
        (e & 4 &&
          l.stateNode != null &&
          ((u = l.memoizedProps), rc(l, u, a !== null ? a.memoizedProps : u)),
          e & 1024 && (Sc = !0));
        break;
      case 6:
        if ((Ll(t, l), Kl(l), e & 4)) {
          if (l.stateNode === null) throw Error(r(162));
          ((e = l.memoizedProps), (a = l.stateNode));
          try {
            a.nodeValue = e;
          } catch (_) {
            al(l, l.return, _);
          }
        }
        break;
      case 3:
        if (
          ((On = null),
          (u = St),
          (St = Nn(t.containerInfo)),
          Ll(t, l),
          (St = u),
          Kl(l),
          e & 4 && a !== null && a.memoizedState.isDehydrated)
        )
          try {
            Ae(t.containerInfo);
          } catch (_) {
            al(l, l.return, _);
          }
        Sc && ((Sc = !1), kd(l));
        break;
      case 4:
        ((e = St),
          (St = Nn(l.stateNode.containerInfo)),
          Ll(t, l),
          Kl(l),
          (St = e));
        break;
      case 12:
        (Ll(t, l), Kl(l));
        break;
      case 31:
        (Ll(t, l),
          Kl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), mn(l, e))));
        break;
      case 13:
        (Ll(t, l),
          Kl(l),
          l.child.flags & 8192 &&
            (l.memoizedState !== null) !=
              (a !== null && a.memoizedState !== null) &&
            (vn = Fl()),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), mn(l, e))));
        break;
      case 22:
        u = l.memoizedState !== null;
        var f = a !== null && a.memoizedState !== null,
          h = Qt,
          b = Tl;
        if (
          ((Qt = h || u),
          (Tl = b || f),
          Ll(t, l),
          (Tl = b),
          (Qt = h),
          Kl(l),
          e & 8192)
        )
          l: for (
            t = l.stateNode,
              t._visibility = u ? t._visibility & -2 : t._visibility | 1,
              u && (a === null || f || Qt || Tl || Ba(l)),
              a = null,
              t = l;
            ;
          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (a === null) {
                f = a = t;
                try {
                  if (((n = f.stateNode), u))
                    ((i = n.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"));
                  else {
                    c = f.stateNode;
                    var z = f.memoizedProps.style,
                      y =
                        z != null && z.hasOwnProperty("display")
                          ? z.display
                          : null;
                    c.style.display =
                      y == null || typeof y == "boolean" ? "" : ("" + y).trim();
                  }
                } catch (_) {
                  al(f, f.return, _);
                }
              }
            } else if (t.tag === 6) {
              if (a === null) {
                f = t;
                try {
                  f.stateNode.nodeValue = u ? "" : f.memoizedProps;
                } catch (_) {
                  al(f, f.return, _);
                }
              }
            } else if (t.tag === 18) {
              if (a === null) {
                f = t;
                try {
                  var g = f.stateNode;
                  u ? Qo(g, !0) : Qo(f.stateNode, !1);
                } catch (_) {
                  al(f, f.return, _);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === l) &&
              t.child !== null
            ) {
              ((t.child.return = t), (t = t.child));
              continue;
            }
            if (t === l) break l;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === l) break l;
              (a === t && (a = null), (t = t.return));
            }
            (a === t && (a = null),
              (t.sibling.return = t.return),
              (t = t.sibling));
          }
        e & 4 &&
          ((e = l.updateQueue),
          e !== null &&
            ((a = e.retryQueue),
            a !== null && ((e.retryQueue = null), mn(l, a))));
        break;
      case 19:
        (Ll(t, l),
          Kl(l),
          e & 4 &&
            ((e = l.updateQueue),
            e !== null && ((l.updateQueue = null), mn(l, e))));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        (Ll(t, l), Kl(l));
    }
  }
  function Kl(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (Zd(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        if (a == null) throw Error(r(160));
        switch (a.tag) {
          case 27:
            var u = a.stateNode,
              n = gc(l);
            on(l, n, u);
            break;
          case 5:
            var i = a.stateNode;
            a.flags & 32 && (wa(i, ""), (a.flags &= -33));
            var c = gc(l);
            on(l, c, i);
            break;
          case 3:
          case 4:
            var f = a.stateNode.containerInfo,
              h = gc(l);
            bc(l, h, f);
            break;
          default:
            throw Error(r(161));
        }
      } catch (b) {
        al(l, l.return, b);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function kd(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        (kd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (l = l.sibling));
      }
  }
  function Vt(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) (Kd(l, t.alternate, t), (t = t.sibling));
  }
  function Ba(l) {
    for (l = l.child; l !== null; ) {
      var t = l;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          (ca(4, t, t.return), Ba(t));
          break;
        case 1:
          Nt(t, t.return);
          var a = t.stateNode;
          (typeof a.componentWillUnmount == "function" && Xd(t, t.return, a),
            Ba(t));
          break;
        case 27:
          ou(t.stateNode);
        case 26:
        case 5:
          (Nt(t, t.return), Ba(t));
          break;
        case 22:
          t.memoizedState === null && Ba(t);
          break;
        case 30:
          Ba(t);
          break;
        default:
          Ba(t);
      }
      l = l.sibling;
    }
  }
  function Lt(l, t, a) {
    for (a = a && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var e = t.alternate,
        u = l,
        n = t,
        i = n.flags;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          (Lt(u, n, a), tu(4, n));
          break;
        case 1:
          if (
            (Lt(u, n, a),
            (e = n),
            (u = e.stateNode),
            typeof u.componentDidMount == "function")
          )
            try {
              u.componentDidMount();
            } catch (h) {
              al(e, e.return, h);
            }
          if (((e = n), (u = e.updateQueue), u !== null)) {
            var c = e.stateNode;
            try {
              var f = u.shared.hiddenCallbacks;
              if (f !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < f.length; u++)
                  Os(f[u], c);
            } catch (h) {
              al(e, e.return, h);
            }
          }
          (a && i & 64 && Gd(n), au(n, n.return));
          break;
        case 27:
          Vd(n);
        case 26:
        case 5:
          (Lt(u, n, a), a && e === null && i & 4 && Qd(n), au(n, n.return));
          break;
        case 12:
          Lt(u, n, a);
          break;
        case 31:
          (Lt(u, n, a), a && i & 4 && Wd(u, n));
          break;
        case 13:
          (Lt(u, n, a), a && i & 4 && $d(u, n));
          break;
        case 22:
          (n.memoizedState === null && Lt(u, n, a), au(n, n.return));
          break;
        case 30:
          break;
        default:
          Lt(u, n, a);
      }
      t = t.sibling;
    }
  }
  function xc(l, t) {
    var a = null;
    (l !== null &&
      l.memoizedState !== null &&
      l.memoizedState.cachePool !== null &&
      (a = l.memoizedState.cachePool.pool),
      (l = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (l = t.memoizedState.cachePool.pool),
      l !== a && (l != null && l.refCount++, a != null && Ze(a)));
  }
  function zc(l, t) {
    ((l = null),
      t.alternate !== null && (l = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== l && (t.refCount++, l != null && Ze(l)));
  }
  function xt(l, t, a, e) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) (Id(l, t, a, e), (t = t.sibling));
  }
  function Id(l, t, a, e) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        (xt(l, t, a, e), u & 2048 && tu(9, t));
        break;
      case 1:
        xt(l, t, a, e);
        break;
      case 3:
        (xt(l, t, a, e),
          u & 2048 &&
            ((l = null),
            t.alternate !== null && (l = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== l && (t.refCount++, l != null && Ze(l))));
        break;
      case 12:
        if (u & 2048) {
          (xt(l, t, a, e), (l = t.stateNode));
          try {
            var n = t.memoizedProps,
              i = n.id,
              c = n.onPostCommit;
            typeof c == "function" &&
              c(
                i,
                t.alternate === null ? "mount" : "update",
                l.passiveEffectDuration,
                -0,
              );
          } catch (f) {
            al(t, t.return, f);
          }
        } else xt(l, t, a, e);
        break;
      case 31:
        xt(l, t, a, e);
        break;
      case 13:
        xt(l, t, a, e);
        break;
      case 23:
        break;
      case 22:
        ((n = t.stateNode),
          (i = t.alternate),
          t.memoizedState !== null
            ? n._visibility & 2
              ? xt(l, t, a, e)
              : eu(l, t)
            : n._visibility & 2
              ? xt(l, t, a, e)
              : ((n._visibility |= 2),
                he(l, t, a, e, (t.subtreeFlags & 10256) !== 0 || !1)),
          u & 2048 && xc(i, t));
        break;
      case 24:
        (xt(l, t, a, e), u & 2048 && zc(t.alternate, t));
        break;
      default:
        xt(l, t, a, e);
    }
  }
  function he(l, t, a, e, u) {
    for (
      u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child;
      t !== null;
    ) {
      var n = l,
        i = t,
        c = a,
        f = e,
        h = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          (he(n, i, c, f, u), tu(8, i));
          break;
        case 23:
          break;
        case 22:
          var b = i.stateNode;
          (i.memoizedState !== null
            ? b._visibility & 2
              ? he(n, i, c, f, u)
              : eu(n, i)
            : ((b._visibility |= 2), he(n, i, c, f, u)),
            u && h & 2048 && xc(i.alternate, i));
          break;
        case 24:
          (he(n, i, c, f, u), u && h & 2048 && zc(i.alternate, i));
          break;
        default:
          he(n, i, c, f, u);
      }
      t = t.sibling;
    }
  }
  function eu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l,
          e = t,
          u = e.flags;
        switch (e.tag) {
          case 22:
            (eu(a, e), u & 2048 && xc(e.alternate, e));
            break;
          case 24:
            (eu(a, e), u & 2048 && zc(e.alternate, e));
            break;
          default:
            eu(a, e);
        }
        t = t.sibling;
      }
  }
  var uu = 8192;
  function ve(l, t, a) {
    if (l.subtreeFlags & uu)
      for (l = l.child; l !== null; ) (Pd(l, t, a), (l = l.sibling));
  }
  function Pd(l, t, a) {
    switch (l.tag) {
      case 26:
        (ve(l, t, a),
          l.flags & uu &&
            l.memoizedState !== null &&
            qh(a, St, l.memoizedState, l.memoizedProps));
        break;
      case 5:
        ve(l, t, a);
        break;
      case 3:
      case 4:
        var e = St;
        ((St = Nn(l.stateNode.containerInfo)), ve(l, t, a), (St = e));
        break;
      case 22:
        l.memoizedState === null &&
          ((e = l.alternate),
          e !== null && e.memoizedState !== null
            ? ((e = uu), (uu = 16777216), ve(l, t, a), (uu = e))
            : ve(l, t, a));
        break;
      default:
        ve(l, t, a);
    }
  }
  function lo(l) {
    var t = l.alternate;
    if (t !== null && ((l = t.child), l !== null)) {
      t.child = null;
      do ((t = l.sibling), (l.sibling = null), (l = t));
      while (l !== null);
    }
  }
  function nu(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((pl = e), ao(e, l));
        }
      lo(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; ) (to(l), (l = l.sibling));
  }
  function to(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        (nu(l), l.flags & 2048 && ca(9, l, l.return));
        break;
      case 3:
        nu(l);
        break;
      case 12:
        nu(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null &&
        t._visibility & 2 &&
        (l.return === null || l.return.tag !== 13)
          ? ((t._visibility &= -3), hn(l))
          : nu(l);
        break;
      default:
        nu(l);
    }
  }
  function hn(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          ((pl = e), ao(e, l));
        }
      lo(l);
    }
    for (l = l.child; l !== null; ) {
      switch (((t = l), t.tag)) {
        case 0:
        case 11:
        case 15:
          (ca(8, t, t.return), hn(t));
          break;
        case 22:
          ((a = t.stateNode),
            a._visibility & 2 && ((a._visibility &= -3), hn(t)));
          break;
        default:
          hn(t);
      }
      l = l.sibling;
    }
  }
  function ao(l, t) {
    for (; pl !== null; ) {
      var a = pl;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          ca(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Ze(a.memoizedState.cache);
      }
      if (((e = a.child), e !== null)) ((e.return = a), (pl = e));
      else
        l: for (a = l; pl !== null; ) {
          e = pl;
          var u = e.sibling,
            n = e.return;
          if ((Jd(e), e === a)) {
            pl = null;
            break l;
          }
          if (u !== null) {
            ((u.return = n), (pl = u));
            break l;
          }
          pl = n;
        }
    }
  }
  var k0 = {
      getCacheForType: function (l) {
        var t = Ol(Sl),
          a = t.data.get(l);
        return (a === void 0 && ((a = l()), t.data.set(l, a)), a);
      },
      cacheSignal: function () {
        return Ol(Sl).controller.signal;
      },
    },
    I0 = typeof WeakMap == "function" ? WeakMap : Map,
    I = 0,
    fl = null,
    V = null,
    K = 0,
    tl = 0,
    et = null,
    fa = !1,
    ye = !1,
    Tc = !1,
    Kt = 0,
    vl = 0,
    sa = 0,
    Ga = 0,
    Ec = 0,
    ut = 0,
    re = 0,
    iu = null,
    Jl = null,
    Ac = !1,
    vn = 0,
    eo = 0,
    yn = 1 / 0,
    rn = null,
    da = null,
    El = 0,
    oa = null,
    ge = null,
    Jt = 0,
    pc = 0,
    Nc = null,
    uo = null,
    cu = 0,
    _c = null;
  function nt() {
    return (I & 2) !== 0 && K !== 0 ? K & -K : S.T !== null ? Hc() : xf();
  }
  function no() {
    if (ut === 0)
      if ((K & 536870912) === 0 || W) {
        var l = Eu;
        ((Eu <<= 1), (Eu & 3932160) === 0 && (Eu = 262144), (ut = l));
      } else ut = 536870912;
    return ((l = tt.current), l !== null && (l.flags |= 32), ut);
  }
  function wl(l, t, a) {
    (((l === fl && (tl === 2 || tl === 9)) || l.cancelPendingCommit !== null) &&
      (be(l, 0), ma(l, K, ut, !1)),
      Oe(l, a),
      ((I & 2) === 0 || l !== fl) &&
        (l === fl && ((I & 2) === 0 && (Ga |= a), vl === 4 && ma(l, K, ut, !1)),
        _t(l)));
  }
  function io(l, t, a) {
    if ((I & 6) !== 0) throw Error(r(327));
    var e = (!a && (t & 127) === 0 && (t & l.expiredLanes) === 0) || _e(l, t),
      u = e ? th(l, t) : Mc(l, t, !0),
      n = e;
    do {
      if (u === 0) {
        ye && !e && ma(l, t, 0, !1);
        break;
      } else {
        if (((a = l.current.alternate), n && !P0(a))) {
          ((u = Mc(l, t, !1)), (n = !1));
          continue;
        }
        if (u === 2) {
          if (((n = t), l.errorRecoveryDisabledLanes & n)) var i = 0;
          else
            ((i = l.pendingLanes & -536870913),
              (i = i !== 0 ? i : i & 536870912 ? 536870912 : 0));
          if (i !== 0) {
            t = i;
            l: {
              var c = l;
              u = iu;
              var f = c.current.memoizedState.isDehydrated;
              if ((f && (be(c, i).flags |= 256), (i = Mc(c, i, !1)), i !== 2)) {
                if (Tc && !f) {
                  ((c.errorRecoveryDisabledLanes |= n), (Ga |= n), (u = 4));
                  break l;
                }
                ((n = Jl),
                  (Jl = u),
                  n !== null &&
                    (Jl === null ? (Jl = n) : Jl.push.apply(Jl, n)));
              }
              u = i;
            }
            if (((n = !1), u !== 2)) continue;
          }
        }
        if (u === 1) {
          (be(l, 0), ma(l, t, 0, !0));
          break;
        }
        l: {
          switch (((e = l), (n = u), n)) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              ma(e, t, ut, !fa);
              break l;
            case 2:
              Jl = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329));
          }
          if ((t & 62914560) === t && ((u = vn + 300 - Fl()), 10 < u)) {
            if ((ma(e, t, ut, !fa), pu(e, 0, !0) !== 0)) break l;
            ((Jt = t),
              (e.timeoutHandle = Bo(
                co.bind(
                  null,
                  e,
                  a,
                  Jl,
                  rn,
                  Ac,
                  t,
                  ut,
                  Ga,
                  re,
                  fa,
                  n,
                  "Throttled",
                  -0,
                  0,
                ),
                u,
              )));
            break l;
          }
          co(e, a, Jl, rn, Ac, t, ut, Ga, re, fa, n, null, -0, 0);
        }
      }
      break;
    } while (!0);
    _t(l);
  }
  function co(l, t, a, e, u, n, i, c, f, h, b, z, y, g) {
    if (
      ((l.timeoutHandle = -1),
      (z = t.subtreeFlags),
      z & 8192 || (z & 16785408) === 16785408)
    ) {
      ((z = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: jt,
      }),
        Pd(t, n, z));
      var _ =
        (n & 62914560) === n ? vn - Fl() : (n & 4194048) === n ? eo - Fl() : 0;
      if (((_ = Yh(z, _)), _ !== null)) {
        ((Jt = n),
          (l.cancelPendingCommit = _(
            ro.bind(null, l, t, n, a, e, u, i, c, f, b, z, null, y, g),
          )),
          ma(l, n, i, !h));
        return;
      }
    }
    ro(l, t, n, a, e, u, i, c, f);
  }
  function P0(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if (
        (a === 0 || a === 11 || a === 15) &&
        t.flags & 16384 &&
        ((a = t.updateQueue), a !== null && ((a = a.stores), a !== null))
      )
        for (var e = 0; e < a.length; e++) {
          var u = a[e],
            n = u.getSnapshot;
          u = u.value;
          try {
            if (!Pl(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (((a = t.child), t.subtreeFlags & 16384 && a !== null))
        ((a.return = t), (t = a));
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        ((t.sibling.return = t.return), (t = t.sibling));
      }
    }
    return !0;
  }
  function ma(l, t, a, e) {
    ((t &= ~Ec),
      (t &= ~Ga),
      (l.suspendedLanes |= t),
      (l.pingedLanes &= ~t),
      e && (l.warmLanes |= t),
      (e = l.expirationTimes));
    for (var u = t; 0 < u; ) {
      var n = 31 - Il(u),
        i = 1 << n;
      ((e[n] = -1), (u &= ~i));
    }
    a !== 0 && gf(l, a, t);
  }
  function gn() {
    return (I & 6) === 0 ? (fu(0), !1) : !0;
  }
  function Oc() {
    if (V !== null) {
      if (tl === 0) var l = V.return;
      else ((l = V), (Ct = Da = null), Li(l), (fe = null), (Le = 0), (l = V));
      for (; l !== null; ) (Bd(l.alternate, l), (l = l.return));
      V = null;
    }
  }
  function be(l, t) {
    var a = l.timeoutHandle;
    (a !== -1 && ((l.timeoutHandle = -1), Sh(a)),
      (a = l.cancelPendingCommit),
      a !== null && ((l.cancelPendingCommit = null), a()),
      (Jt = 0),
      Oc(),
      (fl = l),
      (V = a = Ht(l.current, null)),
      (K = t),
      (tl = 0),
      (et = null),
      (fa = !1),
      (ye = _e(l, t)),
      (Tc = !1),
      (re = ut = Ec = Ga = sa = vl = 0),
      (Jl = iu = null),
      (Ac = !1),
      (t & 8) !== 0 && (t |= t & 32));
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var u = 31 - Il(e),
          n = 1 << u;
        ((t |= l[u]), (e &= ~n));
      }
    return ((Kt = t), Yu(), a);
  }
  function fo(l, t) {
    ((B = null),
      (S.H = Ie),
      t === ce || t === Ku
        ? ((t = As()), (tl = 3))
        : t === Ui
          ? ((t = As()), (tl = 4))
          : (tl =
              t === ic
                ? 8
                : t !== null &&
                    typeof t == "object" &&
                    typeof t.then == "function"
                  ? 6
                  : 1),
      (et = t),
      V === null && ((vl = 1), nn(l, dt(t, l.current))));
  }
  function so() {
    var l = tt.current;
    return l === null
      ? !0
      : (K & 4194048) === K
        ? vt === null
        : (K & 62914560) === K || (K & 536870912) !== 0
          ? l === vt
          : !1;
  }
  function oo() {
    var l = S.H;
    return ((S.H = Ie), l === null ? Ie : l);
  }
  function mo() {
    var l = S.A;
    return ((S.A = k0), l);
  }
  function bn() {
    ((vl = 4),
      fa || ((K & 4194048) !== K && tt.current !== null) || (ye = !0),
      ((sa & 134217727) === 0 && (Ga & 134217727) === 0) ||
        fl === null ||
        ma(fl, K, ut, !1));
  }
  function Mc(l, t, a) {
    var e = I;
    I |= 2;
    var u = oo(),
      n = mo();
    ((fl !== l || K !== t) && ((rn = null), be(l, t)), (t = !1));
    var i = vl;
    l: do
      try {
        if (tl !== 0 && V !== null) {
          var c = V,
            f = et;
          switch (tl) {
            case 8:
              (Oc(), (i = 6));
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              tt.current === null && (t = !0);
              var h = tl;
              if (((tl = 0), (et = null), Se(l, c, f, h), a && ye)) {
                i = 0;
                break l;
              }
              break;
            default:
              ((h = tl), (tl = 0), (et = null), Se(l, c, f, h));
          }
        }
        (lh(), (i = vl));
        break;
      } catch (b) {
        fo(l, b);
      }
    while (!0);
    return (
      t && l.shellSuspendCounter++,
      (Ct = Da = null),
      (I = e),
      (S.H = u),
      (S.A = n),
      V === null && ((fl = null), (K = 0), Yu()),
      i
    );
  }
  function lh() {
    for (; V !== null; ) ho(V);
  }
  function th(l, t) {
    var a = I;
    I |= 2;
    var e = oo(),
      u = mo();
    fl !== l || K !== t
      ? ((rn = null), (yn = Fl() + 500), be(l, t))
      : (ye = _e(l, t));
    l: do
      try {
        if (tl !== 0 && V !== null) {
          t = V;
          var n = et;
          t: switch (tl) {
            case 1:
              ((tl = 0), (et = null), Se(l, t, n, 1));
              break;
            case 2:
            case 9:
              if (Ts(n)) {
                ((tl = 0), (et = null), vo(t));
                break;
              }
              ((t = function () {
                ((tl !== 2 && tl !== 9) || fl !== l || (tl = 7), _t(l));
              }),
                n.then(t, t));
              break l;
            case 3:
              tl = 7;
              break l;
            case 4:
              tl = 5;
              break l;
            case 7:
              Ts(n)
                ? ((tl = 0), (et = null), vo(t))
                : ((tl = 0), (et = null), Se(l, t, n, 7));
              break;
            case 5:
              var i = null;
              switch (V.tag) {
                case 26:
                  i = V.memoizedState;
                case 5:
                case 27:
                  var c = V;
                  if (i ? Po(i) : c.stateNode.complete) {
                    ((tl = 0), (et = null));
                    var f = c.sibling;
                    if (f !== null) V = f;
                    else {
                      var h = c.return;
                      h !== null ? ((V = h), Sn(h)) : (V = null);
                    }
                    break t;
                  }
              }
              ((tl = 0), (et = null), Se(l, t, n, 5));
              break;
            case 6:
              ((tl = 0), (et = null), Se(l, t, n, 6));
              break;
            case 8:
              (Oc(), (vl = 6));
              break l;
            default:
              throw Error(r(462));
          }
        }
        ah();
        break;
      } catch (b) {
        fo(l, b);
      }
    while (!0);
    return (
      (Ct = Da = null),
      (S.H = e),
      (S.A = u),
      (I = a),
      V !== null ? 0 : ((fl = null), (K = 0), Yu(), vl)
    );
  }
  function ah() {
    for (; V !== null && !pm(); ) ho(V);
  }
  function ho(l) {
    var t = qd(l.alternate, l, Kt);
    ((l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (V = t));
  }
  function vo(l) {
    var t = l,
      a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Dd(a, t, t.pendingProps, t.type, void 0, K);
        break;
      case 11:
        t = Dd(a, t, t.pendingProps, t.type.render, t.ref, K);
        break;
      case 5:
        Li(t);
      default:
        (Bd(a, t), (t = V = os(t, Kt)), (t = qd(a, t, Kt)));
    }
    ((l.memoizedProps = l.pendingProps), t === null ? Sn(l) : (V = t));
  }
  function Se(l, t, a, e) {
    ((Ct = Da = null), Li(t), (fe = null), (Le = 0));
    var u = t.return;
    try {
      if (L0(l, u, t, a, K)) {
        ((vl = 1), nn(l, dt(a, l.current)), (V = null));
        return;
      }
    } catch (n) {
      if (u !== null) throw ((V = u), n);
      ((vl = 1), nn(l, dt(a, l.current)), (V = null));
      return;
    }
    t.flags & 32768
      ? (W || e === 1
          ? (l = !0)
          : ye || (K & 536870912) !== 0
            ? (l = !1)
            : ((fa = l = !0),
              (e === 2 || e === 9 || e === 3 || e === 6) &&
                ((e = tt.current),
                e !== null && e.tag === 13 && (e.flags |= 16384))),
        yo(t, l))
      : Sn(t);
  }
  function Sn(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        yo(t, fa);
        return;
      }
      l = t.return;
      var a = w0(t.alternate, t, Kt);
      if (a !== null) {
        V = a;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        V = t;
        return;
      }
      V = t = l;
    } while (t !== null);
    vl === 0 && (vl = 5);
  }
  function yo(l, t) {
    do {
      var a = W0(l.alternate, l);
      if (a !== null) {
        ((a.flags &= 32767), (V = a));
        return;
      }
      if (
        ((a = l.return),
        a !== null &&
          ((a.flags |= 32768), (a.subtreeFlags = 0), (a.deletions = null)),
        !t && ((l = l.sibling), l !== null))
      ) {
        V = l;
        return;
      }
      V = l = a;
    } while (l !== null);
    ((vl = 6), (V = null));
  }
  function ro(l, t, a, e, u, n, i, c, f) {
    l.cancelPendingCommit = null;
    do xn();
    while (El !== 0);
    if ((I & 6) !== 0) throw Error(r(327));
    if (t !== null) {
      if (t === l.current) throw Error(r(177));
      if (
        ((n = t.lanes | t.childLanes),
        (n |= gi),
        Cm(l, a, n, i, c, f),
        l === fl && ((V = fl = null), (K = 0)),
        (ge = t),
        (oa = l),
        (Jt = a),
        (pc = n),
        (Nc = u),
        (uo = e),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((l.callbackNode = null),
            (l.callbackPriority = 0),
            ih(zu, function () {
              return (zo(), null);
            }))
          : ((l.callbackNode = null), (l.callbackPriority = 0)),
        (e = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || e)
      ) {
        ((e = S.T), (S.T = null), (u = A.p), (A.p = 2), (i = I), (I |= 4));
        try {
          $0(l, t, a);
        } finally {
          ((I = i), (A.p = u), (S.T = e));
        }
      }
      ((El = 1), go(), bo(), So());
    }
  }
  function go() {
    if (El === 1) {
      El = 0;
      var l = oa,
        t = ge,
        a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = A.p;
        A.p = 2;
        var u = I;
        I |= 4;
        try {
          Fd(t, l);
          var n = Qc,
            i = as(l.containerInfo),
            c = n.focusedElem,
            f = n.selectionRange;
          if (
            i !== c &&
            c &&
            c.ownerDocument &&
            ts(c.ownerDocument.documentElement, c)
          ) {
            if (f !== null && mi(c)) {
              var h = f.start,
                b = f.end;
              if ((b === void 0 && (b = h), "selectionStart" in c))
                ((c.selectionStart = h),
                  (c.selectionEnd = Math.min(b, c.value.length)));
              else {
                var z = c.ownerDocument || document,
                  y = (z && z.defaultView) || window;
                if (y.getSelection) {
                  var g = y.getSelection(),
                    _ = c.textContent.length,
                    U = Math.min(f.start, _),
                    il = f.end === void 0 ? U : Math.min(f.end, _);
                  !g.extend && U > il && ((i = il), (il = U), (U = i));
                  var o = ls(c, U),
                    s = ls(c, il);
                  if (
                    o &&
                    s &&
                    (g.rangeCount !== 1 ||
                      g.anchorNode !== o.node ||
                      g.anchorOffset !== o.offset ||
                      g.focusNode !== s.node ||
                      g.focusOffset !== s.offset)
                  ) {
                    var m = z.createRange();
                    (m.setStart(o.node, o.offset),
                      g.removeAllRanges(),
                      U > il
                        ? (g.addRange(m), g.extend(s.node, s.offset))
                        : (m.setEnd(s.node, s.offset), g.addRange(m)));
                  }
                }
              }
            }
            for (z = [], g = c; (g = g.parentNode); )
              g.nodeType === 1 &&
                z.push({ element: g, left: g.scrollLeft, top: g.scrollTop });
            for (
              typeof c.focus == "function" && c.focus(), c = 0;
              c < z.length;
              c++
            ) {
              var x = z[c];
              ((x.element.scrollLeft = x.left), (x.element.scrollTop = x.top));
            }
          }
          ((Un = !!Xc), (Qc = Xc = null));
        } finally {
          ((I = u), (A.p = e), (S.T = a));
        }
      }
      ((l.current = t), (El = 2));
    }
  }
  function bo() {
    if (El === 2) {
      El = 0;
      var l = oa,
        t = ge,
        a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        ((a = S.T), (S.T = null));
        var e = A.p;
        A.p = 2;
        var u = I;
        I |= 4;
        try {
          Kd(l, t.alternate, t);
        } finally {
          ((I = u), (A.p = e), (S.T = a));
        }
      }
      El = 3;
    }
  }
  function So() {
    if (El === 4 || El === 3) {
      ((El = 0), Nm());
      var l = oa,
        t = ge,
        a = Jt,
        e = uo;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (El = 5)
        : ((El = 0), (ge = oa = null), xo(l, l.pendingLanes));
      var u = l.pendingLanes;
      if (
        (u === 0 && (da = null),
        wn(a),
        (t = t.stateNode),
        kl && typeof kl.onCommitFiberRoot == "function")
      )
        try {
          kl.onCommitFiberRoot(Ne, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (e !== null) {
        ((t = S.T), (u = A.p), (A.p = 2), (S.T = null));
        try {
          for (var n = l.onRecoverableError, i = 0; i < e.length; i++) {
            var c = e[i];
            n(c.value, { componentStack: c.stack });
          }
        } finally {
          ((S.T = t), (A.p = u));
        }
      }
      ((Jt & 3) !== 0 && xn(),
        _t(l),
        (u = l.pendingLanes),
        (a & 261930) !== 0 && (u & 42) !== 0
          ? l === _c
            ? cu++
            : ((cu = 0), (_c = l))
          : (cu = 0),
        fu(0));
    }
  }
  function xo(l, t) {
    (l.pooledCacheLanes &= t) === 0 &&
      ((t = l.pooledCache), t != null && ((l.pooledCache = null), Ze(t)));
  }
  function xn() {
    return (go(), bo(), So(), zo());
  }
  function zo() {
    if (El !== 5) return !1;
    var l = oa,
      t = pc;
    pc = 0;
    var a = wn(Jt),
      e = S.T,
      u = A.p;
    try {
      ((A.p = 32 > a ? 32 : a), (S.T = null), (a = Nc), (Nc = null));
      var n = oa,
        i = Jt;
      if (((El = 0), (ge = oa = null), (Jt = 0), (I & 6) !== 0))
        throw Error(r(331));
      var c = I;
      if (
        ((I |= 4),
        to(n.current),
        Id(n, n.current, i, a),
        (I = c),
        fu(0, !1),
        kl && typeof kl.onPostCommitFiberRoot == "function")
      )
        try {
          kl.onPostCommitFiberRoot(Ne, n);
        } catch {}
      return !0;
    } finally {
      ((A.p = u), (S.T = e), xo(l, t));
    }
  }
  function To(l, t, a) {
    ((t = dt(a, t)),
      (t = nc(l.stateNode, t, 2)),
      (l = ua(l, t, 2)),
      l !== null && (Oe(l, 2), _t(l)));
  }
  function al(l, t, a) {
    if (l.tag === 3) To(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          To(t, l, a);
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof e.componentDidCatch == "function" &&
              (da === null || !da.has(e)))
          ) {
            ((l = dt(a, l)),
              (a = Td(2)),
              (e = ua(t, a, 2)),
              e !== null && (Ed(a, e, t, l), Oe(e, 2), _t(e)));
            break;
          }
        }
        t = t.return;
      }
  }
  function Dc(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new I0();
      var u = new Set();
      e.set(t, u);
    } else ((u = e.get(t)), u === void 0 && ((u = new Set()), e.set(t, u)));
    u.has(a) ||
      ((Tc = !0), u.add(a), (l = eh.bind(null, l, t, a)), t.then(l, l));
  }
  function eh(l, t, a) {
    var e = l.pingCache;
    (e !== null && e.delete(t),
      (l.pingedLanes |= l.suspendedLanes & a),
      (l.warmLanes &= ~a),
      fl === l &&
        (K & a) === a &&
        (vl === 4 || (vl === 3 && (K & 62914560) === K && 300 > Fl() - vn)
          ? (I & 2) === 0 && be(l, 0)
          : (Ec |= a),
        re === K && (re = 0)),
      _t(l));
  }
  function Eo(l, t) {
    (t === 0 && (t = rf()), (l = _a(l, t)), l !== null && (Oe(l, t), _t(l)));
  }
  function uh(l) {
    var t = l.memoizedState,
      a = 0;
    (t !== null && (a = t.retryLane), Eo(l, a));
  }
  function nh(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode,
          u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(r(314));
    }
    (e !== null && e.delete(t), Eo(l, a));
  }
  function ih(l, t) {
    return Vn(l, t);
  }
  var zn = null,
    xe = null,
    jc = !1,
    Tn = !1,
    Uc = !1,
    ha = 0;
  function _t(l) {
    (l !== xe &&
      l.next === null &&
      (xe === null ? (zn = xe = l) : (xe = xe.next = l)),
      (Tn = !0),
      jc || ((jc = !0), fh()));
  }
  function fu(l, t) {
    if (!Uc && Tn) {
      Uc = !0;
      do
        for (var a = !1, e = zn; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var i = e.suspendedLanes,
                c = e.pingedLanes;
              ((n = (1 << (31 - Il(42 | l) + 1)) - 1),
                (n &= u & ~(i & ~c)),
                (n = n & 201326741 ? (n & 201326741) | 1 : n ? n | 2 : 0));
            }
            n !== 0 && ((a = !0), _o(e, n));
          } else
            ((n = K),
              (n = pu(
                e,
                e === fl ? n : 0,
                e.cancelPendingCommit !== null || e.timeoutHandle !== -1,
              )),
              (n & 3) === 0 || _e(e, n) || ((a = !0), _o(e, n)));
          e = e.next;
        }
      while (a);
      Uc = !1;
    }
  }
  function ch() {
    Ao();
  }
  function Ao() {
    Tn = jc = !1;
    var l = 0;
    ha !== 0 && bh() && (l = ha);
    for (var t = Fl(), a = null, e = zn; e !== null; ) {
      var u = e.next,
        n = po(e, t);
      (n === 0
        ? ((e.next = null),
          a === null ? (zn = u) : (a.next = u),
          u === null && (xe = a))
        : ((a = e), (l !== 0 || (n & 3) !== 0) && (Tn = !0)),
        (e = u));
    }
    ((El !== 0 && El !== 5) || fu(l), ha !== 0 && (ha = 0));
  }
  function po(l, t) {
    for (
      var a = l.suspendedLanes,
        e = l.pingedLanes,
        u = l.expirationTimes,
        n = l.pendingLanes & -62914561;
      0 < n;
    ) {
      var i = 31 - Il(n),
        c = 1 << i,
        f = u[i];
      (f === -1
        ? ((c & a) === 0 || (c & e) !== 0) && (u[i] = Rm(c, t))
        : f <= t && (l.expiredLanes |= c),
        (n &= ~c));
    }
    if (
      ((t = fl),
      (a = K),
      (a = pu(
        l,
        l === t ? a : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      (e = l.callbackNode),
      a === 0 ||
        (l === t && (tl === 2 || tl === 9)) ||
        l.cancelPendingCommit !== null)
    )
      return (
        e !== null && e !== null && Ln(e),
        (l.callbackNode = null),
        (l.callbackPriority = 0)
      );
    if ((a & 3) === 0 || _e(l, a)) {
      if (((t = a & -a), t === l.callbackPriority)) return t;
      switch ((e !== null && Ln(e), wn(a))) {
        case 2:
        case 8:
          a = vf;
          break;
        case 32:
          a = zu;
          break;
        case 268435456:
          a = yf;
          break;
        default:
          a = zu;
      }
      return (
        (e = No.bind(null, l)),
        (a = Vn(a, e)),
        (l.callbackPriority = t),
        (l.callbackNode = a),
        t
      );
    }
    return (
      e !== null && e !== null && Ln(e),
      (l.callbackPriority = 2),
      (l.callbackNode = null),
      2
    );
  }
  function No(l, t) {
    if (El !== 0 && El !== 5)
      return ((l.callbackNode = null), (l.callbackPriority = 0), null);
    var a = l.callbackNode;
    if (xn() && l.callbackNode !== a) return null;
    var e = K;
    return (
      (e = pu(
        l,
        l === fl ? e : 0,
        l.cancelPendingCommit !== null || l.timeoutHandle !== -1,
      )),
      e === 0
        ? null
        : (io(l, e, t),
          po(l, Fl()),
          l.callbackNode != null && l.callbackNode === a
            ? No.bind(null, l)
            : null)
    );
  }
  function _o(l, t) {
    if (xn()) return null;
    io(l, t, !0);
  }
  function fh() {
    xh(function () {
      (I & 6) !== 0 ? Vn(hf, ch) : Ao();
    });
  }
  function Hc() {
    if (ha === 0) {
      var l = ne;
      (l === 0 && ((l = Tu), (Tu <<= 1), (Tu & 261888) === 0 && (Tu = 256)),
        (ha = l));
    }
    return ha;
  }
  function Oo(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean"
      ? null
      : typeof l == "function"
        ? l
        : Mu("" + l);
  }
  function Mo(l, t) {
    var a = t.ownerDocument.createElement("input");
    return (
      (a.name = t.name),
      (a.value = t.value),
      l.id && a.setAttribute("form", l.id),
      t.parentNode.insertBefore(a, t),
      (l = new FormData(l)),
      a.parentNode.removeChild(a),
      l
    );
  }
  function sh(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = Oo((u[Ql] || null).action),
        i = e.submitter;
      i &&
        ((t = (t = i[Ql] || null)
          ? Oo(t.formAction)
          : i.getAttribute("formAction")),
        t !== null && ((n = t), (i = null)));
      var c = new Hu("action", "action", null, e, u);
      l.push({
        event: c,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (e.defaultPrevented) {
                if (ha !== 0) {
                  var f = i ? Mo(u, i) : new FormData(u);
                  Pi(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    null,
                    f,
                  );
                }
              } else
                typeof n == "function" &&
                  (c.preventDefault(),
                  (f = i ? Mo(u, i) : new FormData(u)),
                  Pi(
                    a,
                    { pending: !0, data: f, method: u.method, action: n },
                    n,
                    f,
                  ));
            },
            currentTarget: u,
          },
        ],
      });
    }
  }
  for (var Rc = 0; Rc < ri.length; Rc++) {
    var Cc = ri[Rc],
      dh = Cc.toLowerCase(),
      oh = Cc[0].toUpperCase() + Cc.slice(1);
    bt(dh, "on" + oh);
  }
  (bt(ns, "onAnimationEnd"),
    bt(is, "onAnimationIteration"),
    bt(cs, "onAnimationStart"),
    bt("dblclick", "onDoubleClick"),
    bt("focusin", "onFocus"),
    bt("focusout", "onBlur"),
    bt(_0, "onTransitionRun"),
    bt(O0, "onTransitionStart"),
    bt(M0, "onTransitionCancel"),
    bt(fs, "onTransitionEnd"),
    Ka("onMouseEnter", ["mouseout", "mouseover"]),
    Ka("onMouseLeave", ["mouseout", "mouseover"]),
    Ka("onPointerEnter", ["pointerout", "pointerover"]),
    Ka("onPointerLeave", ["pointerout", "pointerover"]),
    Ea(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " ",
      ),
    ),
    Ea(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " ",
      ),
    ),
    Ea("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ea(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ea(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" "),
    ),
    Ea(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" "),
    ));
  var su =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " ",
      ),
    mh = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(su),
    );
  function Do(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a],
        u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var i = e.length - 1; 0 <= i; i--) {
            var c = e[i],
              f = c.instance,
              h = c.currentTarget;
            if (((c = c.listener), f !== n && u.isPropagationStopped()))
              break l;
            ((n = c), (u.currentTarget = h));
            try {
              n(u);
            } catch (b) {
              qu(b);
            }
            ((u.currentTarget = null), (n = f));
          }
        else
          for (i = 0; i < e.length; i++) {
            if (
              ((c = e[i]),
              (f = c.instance),
              (h = c.currentTarget),
              (c = c.listener),
              f !== n && u.isPropagationStopped())
            )
              break l;
            ((n = c), (u.currentTarget = h));
            try {
              n(u);
            } catch (b) {
              qu(b);
            }
            ((u.currentTarget = null), (n = f));
          }
      }
    }
  }
  function L(l, t) {
    var a = t[Wn];
    a === void 0 && (a = t[Wn] = new Set());
    var e = l + "__bubble";
    a.has(e) || (jo(t, l, 2, !1), a.add(e));
  }
  function qc(l, t, a) {
    var e = 0;
    (t && (e |= 4), jo(a, l, e, t));
  }
  var En = "_reactListening" + Math.random().toString(36).slice(2);
  function Yc(l) {
    if (!l[En]) {
      ((l[En] = !0),
        Ef.forEach(function (a) {
          a !== "selectionchange" && (mh.has(a) || qc(a, !1, l), qc(a, !0, l));
        }));
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[En] || ((t[En] = !0), qc("selectionchange", !1, t));
    }
  }
  function jo(l, t, a, e) {
    switch (im(t)) {
      case 2:
        var u = Xh;
        break;
      case 8:
        u = Qh;
        break;
      default:
        u = Ic;
    }
    ((a = u.bind(null, t, a, l)),
      (u = void 0),
      !ei ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (u = !0),
      e
        ? u !== void 0
          ? l.addEventListener(t, a, { capture: !0, passive: u })
          : l.addEventListener(t, a, !0)
        : u !== void 0
          ? l.addEventListener(t, a, { passive: u })
          : l.addEventListener(t, a, !1));
  }
  function Bc(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (;;) {
        if (e === null) return;
        var i = e.tag;
        if (i === 3 || i === 4) {
          var c = e.stateNode.containerInfo;
          if (c === u) break;
          if (i === 4)
            for (i = e.return; i !== null; ) {
              var f = i.tag;
              if ((f === 3 || f === 4) && i.stateNode.containerInfo === u)
                return;
              i = i.return;
            }
          for (; c !== null; ) {
            if (((i = Za(c)), i === null)) return;
            if (((f = i.tag), f === 5 || f === 6 || f === 26 || f === 27)) {
              e = n = i;
              continue l;
            }
            c = c.parentNode;
          }
        }
        e = e.return;
      }
    Cf(function () {
      var h = n,
        b = ti(a),
        z = [];
      l: {
        var y = ss.get(l);
        if (y !== void 0) {
          var g = Hu,
            _ = l;
          switch (l) {
            case "keypress":
              if (ju(a) === 0) break l;
            case "keydown":
            case "keyup":
              g = n0;
              break;
            case "focusin":
              ((_ = "focus"), (g = ci));
              break;
            case "focusout":
              ((_ = "blur"), (g = ci));
              break;
            case "beforeblur":
            case "afterblur":
              g = ci;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              g = Bf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              g = wm;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              g = f0;
              break;
            case ns:
            case is:
            case cs:
              g = Fm;
              break;
            case fs:
              g = d0;
              break;
            case "scroll":
            case "scrollend":
              g = Km;
              break;
            case "wheel":
              g = m0;
              break;
            case "copy":
            case "cut":
            case "paste":
              g = Im;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              g = Xf;
              break;
            case "toggle":
            case "beforetoggle":
              g = v0;
          }
          var U = (t & 4) !== 0,
            il = !U && (l === "scroll" || l === "scrollend"),
            o = U ? (y !== null ? y + "Capture" : null) : y;
          U = [];
          for (var s = h, m; s !== null; ) {
            var x = s;
            if (
              ((m = x.stateNode),
              (x = x.tag),
              (x !== 5 && x !== 26 && x !== 27) ||
                m === null ||
                o === null ||
                ((x = je(s, o)), x != null && U.push(du(s, x, m))),
              il)
            )
              break;
            s = s.return;
          }
          0 < U.length &&
            ((y = new g(y, _, null, a, b)), z.push({ event: y, listeners: U }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (
            ((y = l === "mouseover" || l === "pointerover"),
            (g = l === "mouseout" || l === "pointerout"),
            y &&
              a !== li &&
              (_ = a.relatedTarget || a.fromElement) &&
              (Za(_) || _[Qa]))
          )
            break l;
          if (
            (g || y) &&
            ((y =
              b.window === b
                ? b
                : (y = b.ownerDocument)
                  ? y.defaultView || y.parentWindow
                  : window),
            g
              ? ((_ = a.relatedTarget || a.toElement),
                (g = h),
                (_ = _ ? Za(_) : null),
                _ !== null &&
                  ((il = k(_)),
                  (U = _.tag),
                  _ !== il || (U !== 5 && U !== 27 && U !== 6)) &&
                  (_ = null))
              : ((g = null), (_ = h)),
            g !== _)
          ) {
            if (
              ((U = Bf),
              (x = "onMouseLeave"),
              (o = "onMouseEnter"),
              (s = "mouse"),
              (l === "pointerout" || l === "pointerover") &&
                ((U = Xf),
                (x = "onPointerLeave"),
                (o = "onPointerEnter"),
                (s = "pointer")),
              (il = g == null ? y : De(g)),
              (m = _ == null ? y : De(_)),
              (y = new U(x, s + "leave", g, a, b)),
              (y.target = il),
              (y.relatedTarget = m),
              (x = null),
              Za(b) === h &&
                ((U = new U(o, s + "enter", _, a, b)),
                (U.target = m),
                (U.relatedTarget = il),
                (x = U)),
              (il = x),
              g && _)
            )
              t: {
                for (U = hh, o = g, s = _, m = 0, x = o; x; x = U(x)) m++;
                x = 0;
                for (var D = s; D; D = U(D)) x++;
                for (; 0 < m - x; ) ((o = U(o)), m--);
                for (; 0 < x - m; ) ((s = U(s)), x--);
                for (; m--; ) {
                  if (o === s || (s !== null && o === s.alternate)) {
                    U = o;
                    break t;
                  }
                  ((o = U(o)), (s = U(s)));
                }
                U = null;
              }
            else U = null;
            (g !== null && Uo(z, y, g, U, !1),
              _ !== null && il !== null && Uo(z, il, _, U, !0));
          }
        }
        l: {
          if (
            ((y = h ? De(h) : window),
            (g = y.nodeName && y.nodeName.toLowerCase()),
            g === "select" || (g === "input" && y.type === "file"))
          )
            var $ = Wf;
          else if (Jf(y))
            if ($f) $ = A0;
            else {
              $ = T0;
              var M = z0;
            }
          else
            ((g = y.nodeName),
              !g ||
              g.toLowerCase() !== "input" ||
              (y.type !== "checkbox" && y.type !== "radio")
                ? h && Pn(h.elementType) && ($ = Wf)
                : ($ = E0));
          if ($ && ($ = $(l, h))) {
            wf(z, $, a, b);
            break l;
          }
          (M && M(l, y, h),
            l === "focusout" &&
              h &&
              y.type === "number" &&
              h.memoizedProps.value != null &&
              In(y, "number", y.value));
        }
        switch (((M = h ? De(h) : window), l)) {
          case "focusin":
            (Jf(M) || M.contentEditable === "true") &&
              ((ka = M), (hi = h), (Ge = null));
            break;
          case "focusout":
            Ge = hi = ka = null;
            break;
          case "mousedown":
            vi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ((vi = !1), es(z, a, b));
            break;
          case "selectionchange":
            if (N0) break;
          case "keydown":
          case "keyup":
            es(z, a, b);
        }
        var G;
        if (si)
          l: {
            switch (l) {
              case "compositionstart":
                var J = "onCompositionStart";
                break l;
              case "compositionend":
                J = "onCompositionEnd";
                break l;
              case "compositionupdate":
                J = "onCompositionUpdate";
                break l;
            }
            J = void 0;
          }
        else
          Fa
            ? Lf(l, a) && (J = "onCompositionEnd")
            : l === "keydown" &&
              a.keyCode === 229 &&
              (J = "onCompositionStart");
        (J &&
          (Qf &&
            a.locale !== "ko" &&
            (Fa || J !== "onCompositionStart"
              ? J === "onCompositionEnd" && Fa && (G = qf())
              : ((kt = b),
                (ui = "value" in kt ? kt.value : kt.textContent),
                (Fa = !0))),
          (M = An(h, J)),
          0 < M.length &&
            ((J = new Gf(J, l, null, a, b)),
            z.push({ event: J, listeners: M }),
            G ? (J.data = G) : ((G = Kf(a)), G !== null && (J.data = G)))),
          (G = r0 ? g0(l, a) : b0(l, a)) &&
            ((J = An(h, "onBeforeInput")),
            0 < J.length &&
              ((M = new Gf("onBeforeInput", "beforeinput", null, a, b)),
              z.push({ event: M, listeners: J }),
              (M.data = G))),
          sh(z, l, h, a, b));
      }
      Do(z, t);
    });
  }
  function du(l, t, a) {
    return { instance: l, listener: t, currentTarget: a };
  }
  function An(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l,
        n = u.stateNode;
      if (
        ((u = u.tag),
        (u !== 5 && u !== 26 && u !== 27) ||
          n === null ||
          ((u = je(l, a)),
          u != null && e.unshift(du(l, u, n)),
          (u = je(l, t)),
          u != null && e.push(du(l, u, n))),
        l.tag === 3)
      )
        return e;
      l = l.return;
    }
    return [];
  }
  function hh(l) {
    if (l === null) return null;
    do l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function Uo(l, t, a, e, u) {
    for (var n = t._reactName, i = []; a !== null && a !== e; ) {
      var c = a,
        f = c.alternate,
        h = c.stateNode;
      if (((c = c.tag), f !== null && f === e)) break;
      ((c !== 5 && c !== 26 && c !== 27) ||
        h === null ||
        ((f = h),
        u
          ? ((h = je(a, n)), h != null && i.unshift(du(a, h, f)))
          : u || ((h = je(a, n)), h != null && i.push(du(a, h, f)))),
        (a = a.return));
    }
    i.length !== 0 && l.push({ event: t, listeners: i });
  }
  var vh = /\r\n?/g,
    yh = /\u0000|\uFFFD/g;
  function Ho(l) {
    return (typeof l == "string" ? l : "" + l)
      .replace(
        vh,
        `
`,
      )
      .replace(yh, "");
  }
  function Ro(l, t) {
    return ((t = Ho(t)), Ho(l) === t);
  }
  function nl(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        typeof e == "string"
          ? t === "body" || (t === "textarea" && e === "") || wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") &&
            t !== "body" &&
            wa(l, "" + e);
        break;
      case "className":
        _u(l, "class", e);
        break;
      case "tabIndex":
        _u(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        _u(l, a, e);
        break;
      case "style":
        Hf(l, e, n);
        break;
      case "data":
        if (t !== "object") {
          _u(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "symbol" ||
          typeof e == "boolean"
        ) {
          l.removeAttribute(a);
          break;
        }
        ((e = Mu("" + e)), l.setAttribute(a, e));
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')",
          );
          break;
        } else
          typeof n == "function" &&
            (a === "formAction"
              ? (t !== "input" && nl(l, t, "name", u.name, u, null),
                nl(l, t, "formEncType", u.formEncType, u, null),
                nl(l, t, "formMethod", u.formMethod, u, null),
                nl(l, t, "formTarget", u.formTarget, u, null))
              : (nl(l, t, "encType", u.encType, u, null),
                nl(l, t, "method", u.method, u, null),
                nl(l, t, "target", u.target, u, null)));
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        ((e = Mu("" + e)), l.setAttribute(a, e));
        break;
      case "onClick":
        e != null && (l.onclick = jt);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (
          e == null ||
          typeof e == "function" ||
          typeof e == "boolean" ||
          typeof e == "symbol"
        ) {
          l.removeAttribute("xlink:href");
          break;
        }
        ((a = Mu("" + e)),
          l.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", a));
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        e != null && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "" + e)
          : l.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol"
          ? l.setAttribute(a, "")
          : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0
          ? l.setAttribute(a, "")
          : e !== !1 &&
              e != null &&
              typeof e != "function" &&
              typeof e != "symbol"
            ? l.setAttribute(a, e)
            : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null &&
        typeof e != "function" &&
        typeof e != "symbol" &&
        !isNaN(e) &&
        1 <= e
          ? l.setAttribute(a, e)
          : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e)
          ? l.removeAttribute(a)
          : l.setAttribute(a, e);
        break;
      case "popover":
        (L("beforetoggle", l), L("toggle", l), Nu(l, "popover", e));
        break;
      case "xlinkActuate":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:actuate", e);
        break;
      case "xlinkArcrole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:arcrole", e);
        break;
      case "xlinkRole":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:role", e);
        break;
      case "xlinkShow":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:show", e);
        break;
      case "xlinkTitle":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:title", e);
        break;
      case "xlinkType":
        Dt(l, "http://www.w3.org/1999/xlink", "xlink:type", e);
        break;
      case "xmlBase":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:base", e);
        break;
      case "xmlLang":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:lang", e);
        break;
      case "xmlSpace":
        Dt(l, "http://www.w3.org/XML/1998/namespace", "xml:space", e);
        break;
      case "is":
        Nu(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < a.length) ||
          (a[0] !== "o" && a[0] !== "O") ||
          (a[1] !== "n" && a[1] !== "N")) &&
          ((a = Vm.get(a) || a), Nu(l, a, e));
    }
  }
  function Gc(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Hf(l, e, n);
        break;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e)) throw Error(r(61));
          if (((a = e.__html), a != null)) {
            if (u.children != null) throw Error(r(60));
            l.innerHTML = a;
          }
        }
        break;
      case "children":
        typeof e == "string"
          ? wa(l, e)
          : (typeof e == "number" || typeof e == "bigint") && wa(l, "" + e);
        break;
      case "onScroll":
        e != null && L("scroll", l);
        break;
      case "onScrollEnd":
        e != null && L("scrollend", l);
        break;
      case "onClick":
        e != null && (l.onclick = jt);
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
        if (!Af.hasOwnProperty(a))
          l: {
            if (
              a[0] === "o" &&
              a[1] === "n" &&
              ((u = a.endsWith("Capture")),
              (t = a.slice(2, u ? a.length - 7 : void 0)),
              (n = l[Ql] || null),
              (n = n != null ? n[a] : null),
              typeof n == "function" && l.removeEventListener(t, n, u),
              typeof e == "function")
            ) {
              (typeof n != "function" &&
                n !== null &&
                (a in l
                  ? (l[a] = null)
                  : l.hasAttribute(a) && l.removeAttribute(a)),
                l.addEventListener(t, e, u));
              break l;
            }
            a in l
              ? (l[a] = e)
              : e === !0
                ? l.setAttribute(a, "")
                : Nu(l, a, e);
          }
    }
  }
  function Dl(l, t, a) {
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
        (L("error", l), L("load", l));
        var e = !1,
          u = !1,
          n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var i = a[n];
            if (i != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, t));
                default:
                  nl(l, t, n, i, a, null);
              }
          }
        (u && nl(l, t, "srcSet", a.srcSet, a, null),
          e && nl(l, t, "src", a.src, a, null));
        return;
      case "input":
        L("invalid", l);
        var c = (n = i = u = null),
          f = null,
          h = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var b = a[e];
            if (b != null)
              switch (e) {
                case "name":
                  u = b;
                  break;
                case "type":
                  i = b;
                  break;
                case "checked":
                  f = b;
                  break;
                case "defaultChecked":
                  h = b;
                  break;
                case "value":
                  n = b;
                  break;
                case "defaultValue":
                  c = b;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (b != null) throw Error(r(137, t));
                  break;
                default:
                  nl(l, t, e, b, a, null);
              }
          }
        Mf(l, n, c, f, h, i, u, !1);
        return;
      case "select":
        (L("invalid", l), (e = i = n = null));
        for (u in a)
          if (a.hasOwnProperty(u) && ((c = a[u]), c != null))
            switch (u) {
              case "value":
                n = c;
                break;
              case "defaultValue":
                i = c;
                break;
              case "multiple":
                e = c;
              default:
                nl(l, t, u, c, a, null);
            }
        ((t = n),
          (a = i),
          (l.multiple = !!e),
          t != null ? Ja(l, !!e, t, !1) : a != null && Ja(l, !!e, a, !0));
        return;
      case "textarea":
        (L("invalid", l), (n = u = e = null));
        for (i in a)
          if (a.hasOwnProperty(i) && ((c = a[i]), c != null))
            switch (i) {
              case "value":
                e = c;
                break;
              case "defaultValue":
                u = c;
                break;
              case "children":
                n = c;
                break;
              case "dangerouslySetInnerHTML":
                if (c != null) throw Error(r(91));
                break;
              default:
                nl(l, t, i, c, a, null);
            }
        jf(l, e, u, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) &&
            ((e = a[f]), e != null) &&
            (f === "selected"
              ? (l.selected =
                  e && typeof e != "function" && typeof e != "symbol")
              : nl(l, t, f, e, a, null));
        return;
      case "dialog":
        (L("beforetoggle", l), L("toggle", l), L("cancel", l), L("close", l));
        break;
      case "iframe":
      case "object":
        L("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < su.length; e++) L(su[e], l);
        break;
      case "image":
        (L("error", l), L("load", l));
        break;
      case "details":
        L("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        (L("error", l), L("load", l));
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
        for (h in a)
          if (a.hasOwnProperty(h) && ((e = a[h]), e != null))
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, t));
              default:
                nl(l, t, h, e, a, null);
            }
        return;
      default:
        if (Pn(t)) {
          for (b in a)
            a.hasOwnProperty(b) &&
              ((e = a[b]), e !== void 0 && Gc(l, t, b, e, a, void 0));
          return;
        }
    }
    for (c in a)
      a.hasOwnProperty(c) && ((e = a[c]), e != null && nl(l, t, c, e, a, null));
  }
  function rh(l, t, a, e) {
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
        var u = null,
          n = null,
          i = null,
          c = null,
          f = null,
          h = null,
          b = null;
        for (g in a) {
          var z = a[g];
          if (a.hasOwnProperty(g) && z != null)
            switch (g) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = z;
              default:
                e.hasOwnProperty(g) || nl(l, t, g, null, e, z);
            }
        }
        for (var y in e) {
          var g = e[y];
          if (((z = a[y]), e.hasOwnProperty(y) && (g != null || z != null)))
            switch (y) {
              case "type":
                n = g;
                break;
              case "name":
                u = g;
                break;
              case "checked":
                h = g;
                break;
              case "defaultChecked":
                b = g;
                break;
              case "value":
                i = g;
                break;
              case "defaultValue":
                c = g;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (g != null) throw Error(r(137, t));
                break;
              default:
                g !== z && nl(l, t, y, g, e, z);
            }
        }
        kn(l, i, c, f, h, b, n, u);
        return;
      case "select":
        g = i = c = y = null;
        for (n in a)
          if (((f = a[n]), a.hasOwnProperty(n) && f != null))
            switch (n) {
              case "value":
                break;
              case "multiple":
                g = f;
              default:
                e.hasOwnProperty(n) || nl(l, t, n, null, e, f);
            }
        for (u in e)
          if (
            ((n = e[u]),
            (f = a[u]),
            e.hasOwnProperty(u) && (n != null || f != null))
          )
            switch (u) {
              case "value":
                y = n;
                break;
              case "defaultValue":
                c = n;
                break;
              case "multiple":
                i = n;
              default:
                n !== f && nl(l, t, u, n, e, f);
            }
        ((t = c),
          (a = i),
          (e = g),
          y != null
            ? Ja(l, !!a, y, !1)
            : !!e != !!a &&
              (t != null ? Ja(l, !!a, t, !0) : Ja(l, !!a, a ? [] : "", !1)));
        return;
      case "textarea":
        g = y = null;
        for (c in a)
          if (
            ((u = a[c]),
            a.hasOwnProperty(c) && u != null && !e.hasOwnProperty(c))
          )
            switch (c) {
              case "value":
                break;
              case "children":
                break;
              default:
                nl(l, t, c, null, e, u);
            }
        for (i in e)
          if (
            ((u = e[i]),
            (n = a[i]),
            e.hasOwnProperty(i) && (u != null || n != null))
          )
            switch (i) {
              case "value":
                y = u;
                break;
              case "defaultValue":
                g = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(r(91));
                break;
              default:
                u !== n && nl(l, t, i, u, e, n);
            }
        Df(l, y, g);
        return;
      case "option":
        for (var _ in a)
          ((y = a[_]),
            a.hasOwnProperty(_) &&
              y != null &&
              !e.hasOwnProperty(_) &&
              (_ === "selected" ? (l.selected = !1) : nl(l, t, _, null, e, y)));
        for (f in e)
          ((y = e[f]),
            (g = a[f]),
            e.hasOwnProperty(f) &&
              y !== g &&
              (y != null || g != null) &&
              (f === "selected"
                ? (l.selected =
                    y && typeof y != "function" && typeof y != "symbol")
                : nl(l, t, f, y, e, g)));
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
        for (var U in a)
          ((y = a[U]),
            a.hasOwnProperty(U) &&
              y != null &&
              !e.hasOwnProperty(U) &&
              nl(l, t, U, null, e, y));
        for (h in e)
          if (
            ((y = e[h]),
            (g = a[h]),
            e.hasOwnProperty(h) && y !== g && (y != null || g != null))
          )
            switch (h) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (y != null) throw Error(r(137, t));
                break;
              default:
                nl(l, t, h, y, e, g);
            }
        return;
      default:
        if (Pn(t)) {
          for (var il in a)
            ((y = a[il]),
              a.hasOwnProperty(il) &&
                y !== void 0 &&
                !e.hasOwnProperty(il) &&
                Gc(l, t, il, void 0, e, y));
          for (b in e)
            ((y = e[b]),
              (g = a[b]),
              !e.hasOwnProperty(b) ||
                y === g ||
                (y === void 0 && g === void 0) ||
                Gc(l, t, b, y, e, g));
          return;
        }
    }
    for (var o in a)
      ((y = a[o]),
        a.hasOwnProperty(o) &&
          y != null &&
          !e.hasOwnProperty(o) &&
          nl(l, t, o, null, e, y));
    for (z in e)
      ((y = e[z]),
        (g = a[z]),
        !e.hasOwnProperty(z) ||
          y === g ||
          (y == null && g == null) ||
          nl(l, t, z, y, e, g));
  }
  function Co(l) {
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
  function gh() {
    if (typeof performance.getEntriesByType == "function") {
      for (
        var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0;
        e < a.length;
        e++
      ) {
        var u = a[e],
          n = u.transferSize,
          i = u.initiatorType,
          c = u.duration;
        if (n && c && Co(i)) {
          for (i = 0, c = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e],
              h = f.startTime;
            if (h > c) break;
            var b = f.transferSize,
              z = f.initiatorType;
            b &&
              Co(z) &&
              ((f = f.responseEnd), (i += b * (f < c ? 1 : (c - h) / (f - h))));
          }
          if ((--e, (t += (8 * (n + i)) / (u.duration / 1e3)), l++, 10 < l))
            break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection &&
      ((l = navigator.connection.downlink), typeof l == "number")
      ? l
      : 5;
  }
  var Xc = null,
    Qc = null;
  function pn(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function qo(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Yo(l, t) {
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
  function Zc(l, t) {
    return (
      l === "textarea" ||
      l === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Vc = null;
  function bh() {
    var l = window.event;
    return l && l.type === "popstate"
      ? l === Vc
        ? !1
        : ((Vc = l), !0)
      : ((Vc = null), !1);
  }
  var Bo = typeof setTimeout == "function" ? setTimeout : void 0,
    Sh = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Go = typeof Promise == "function" ? Promise : void 0,
    xh =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Go < "u"
          ? function (l) {
              return Go.resolve(null).then(l).catch(zh);
            }
          : Bo;
  function zh(l) {
    setTimeout(function () {
      throw l;
    });
  }
  function va(l) {
    return l === "head";
  }
  function Xo(l, t) {
    var a = t,
      e = 0;
    do {
      var u = a.nextSibling;
      if ((l.removeChild(a), u && u.nodeType === 8))
        if (((a = u.data), a === "/$" || a === "/&")) {
          if (e === 0) {
            (l.removeChild(u), Ae(t));
            return;
          }
          e--;
        } else if (
          a === "$" ||
          a === "$?" ||
          a === "$~" ||
          a === "$!" ||
          a === "&"
        )
          e++;
        else if (a === "html") ou(l.ownerDocument.documentElement);
        else if (a === "head") {
          ((a = l.ownerDocument.head), ou(a));
          for (var n = a.firstChild; n; ) {
            var i = n.nextSibling,
              c = n.nodeName;
            (n[Me] ||
              c === "SCRIPT" ||
              c === "STYLE" ||
              (c === "LINK" && n.rel.toLowerCase() === "stylesheet") ||
              a.removeChild(n),
              (n = i));
          }
        } else a === "body" && ou(l.ownerDocument.body);
      a = u;
    } while (a);
    Ae(t);
  }
  function Qo(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (
        (a.nodeType === 1
          ? t
            ? ((a._stashedDisplay = a.style.display),
              (a.style.display = "none"))
            : ((a.style.display = a._stashedDisplay || ""),
              a.getAttribute("style") === "" && a.removeAttribute("style"))
          : a.nodeType === 3 &&
            (t
              ? ((a._stashedText = a.nodeValue), (a.nodeValue = ""))
              : (a.nodeValue = a._stashedText || "")),
        e && e.nodeType === 8)
      )
        if (((a = e.data), a === "/$")) {
          if (l === 0) break;
          l--;
        } else (a !== "$" && a !== "$?" && a !== "$~" && a !== "$!") || l++;
      a = e;
    } while (a);
  }
  function Lc(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (((t = t.nextSibling), a.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          (Lc(a), $n(a));
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Th(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden")) break;
      } else if (e) {
        if (!l[Me])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (
                ((n = l.getAttribute("rel")),
                n === "stylesheet" && l.hasAttribute("data-precedence"))
              )
                break;
              if (
                n !== u.rel ||
                l.getAttribute("href") !==
                  (u.href == null || u.href === "" ? null : u.href) ||
                l.getAttribute("crossorigin") !==
                  (u.crossOrigin == null ? null : u.crossOrigin) ||
                l.getAttribute("title") !== (u.title == null ? null : u.title)
              )
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (
                ((n = l.getAttribute("src")),
                (n !== (u.src == null ? null : u.src) ||
                  l.getAttribute("type") !== (u.type == null ? null : u.type) ||
                  l.getAttribute("crossorigin") !==
                    (u.crossOrigin == null ? null : u.crossOrigin)) &&
                  n &&
                  l.hasAttribute("async") &&
                  !l.hasAttribute("itemprop"))
              )
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n) return l;
      } else return l;
      if (((l = yt(l.nextSibling)), l === null)) break;
    }
    return null;
  }
  function Eh(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !a) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Zo(l, t) {
    for (; l.nodeType !== 8; )
      if (
        ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") &&
          !t) ||
        ((l = yt(l.nextSibling)), l === null)
      )
        return null;
    return l;
  }
  function Kc(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function Jc(l) {
    return (
      l.data === "$!" ||
      (l.data === "$?" && l.ownerDocument.readyState !== "loading")
    );
  }
  function Ah(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading") t();
    else {
      var e = function () {
        (t(), a.removeEventListener("DOMContentLoaded", e));
      };
      (a.addEventListener("DOMContentLoaded", e), (l._reactRetry = e));
    }
  }
  function yt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = l.data),
          t === "$" ||
            t === "$!" ||
            t === "$?" ||
            t === "$~" ||
            t === "&" ||
            t === "F!" ||
            t === "F")
        )
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var wc = null;
  function Vo(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0) return yt(l.nextSibling);
          t--;
        } else
          (a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&") ||
            t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Lo(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else (a !== "/$" && a !== "/&") || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Ko(l, t, a) {
    switch (((t = pn(a)), l)) {
      case "html":
        if (((l = t.documentElement), !l)) throw Error(r(452));
        return l;
      case "head":
        if (((l = t.head), !l)) throw Error(r(453));
        return l;
      case "body":
        if (((l = t.body), !l)) throw Error(r(454));
        return l;
      default:
        throw Error(r(451));
    }
  }
  function ou(l) {
    for (var t = l.attributes; t.length; ) l.removeAttributeNode(t[0]);
    $n(l);
  }
  var rt = new Map(),
    Jo = new Set();
  function Nn(l) {
    return typeof l.getRootNode == "function"
      ? l.getRootNode()
      : l.nodeType === 9
        ? l
        : l.ownerDocument;
  }
  var wt = A.d;
  A.d = { f: ph, r: Nh, D: _h, C: Oh, L: Mh, m: Dh, X: Uh, S: jh, M: Hh };
  function ph() {
    var l = wt.f(),
      t = gn();
    return l || t;
  }
  function Nh(l) {
    var t = Va(l);
    t !== null && t.tag === 5 && t.type === "form" ? fd(t) : wt.r(l);
  }
  var ze = typeof document > "u" ? null : document;
  function wo(l, t, a) {
    var e = ze;
    if (e && typeof t == "string" && t) {
      var u = ft(t);
      ((u = 'link[rel="' + l + '"][href="' + u + '"]'),
        typeof a == "string" && (u += '[crossorigin="' + a + '"]'),
        Jo.has(u) ||
          (Jo.add(u),
          (l = { rel: l, crossOrigin: a, href: t }),
          e.querySelector(u) === null &&
            ((t = e.createElement("link")),
            Dl(t, "link", l),
            Al(t),
            e.head.appendChild(t))));
    }
  }
  function _h(l) {
    (wt.D(l), wo("dns-prefetch", l, null));
  }
  function Oh(l, t) {
    (wt.C(l, t), wo("preconnect", l, t));
  }
  function Mh(l, t, a) {
    wt.L(l, t, a);
    var e = ze;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + ft(t) + '"]';
      t === "image" && a && a.imageSrcSet
        ? ((u += '[imagesrcset="' + ft(a.imageSrcSet) + '"]'),
          typeof a.imageSizes == "string" &&
            (u += '[imagesizes="' + ft(a.imageSizes) + '"]'))
        : (u += '[href="' + ft(l) + '"]');
      var n = u;
      switch (t) {
        case "style":
          n = Te(l);
          break;
        case "script":
          n = Ee(l);
      }
      rt.has(n) ||
        ((l = H(
          {
            rel: "preload",
            href: t === "image" && a && a.imageSrcSet ? void 0 : l,
            as: t,
          },
          a,
        )),
        rt.set(n, l),
        e.querySelector(u) !== null ||
          (t === "style" && e.querySelector(mu(n))) ||
          (t === "script" && e.querySelector(hu(n))) ||
          ((t = e.createElement("link")),
          Dl(t, "link", l),
          Al(t),
          e.head.appendChild(t)));
    }
  }
  function Dh(l, t) {
    wt.m(l, t);
    var a = ze;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script",
        u =
          'link[rel="modulepreload"][as="' + ft(e) + '"][href="' + ft(l) + '"]',
        n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = Ee(l);
      }
      if (
        !rt.has(n) &&
        ((l = H({ rel: "modulepreload", href: l }, t)),
        rt.set(n, l),
        a.querySelector(u) === null)
      ) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(hu(n))) return;
        }
        ((e = a.createElement("link")),
          Dl(e, "link", l),
          Al(e),
          a.head.appendChild(e));
      }
    }
  }
  function jh(l, t, a) {
    wt.S(l, t, a);
    var e = ze;
    if (e && l) {
      var u = La(e).hoistableStyles,
        n = Te(l);
      t = t || "default";
      var i = u.get(n);
      if (!i) {
        var c = { loading: 0, preload: null };
        if ((i = e.querySelector(mu(n)))) c.loading = 5;
        else {
          ((l = H({ rel: "stylesheet", href: l, "data-precedence": t }, a)),
            (a = rt.get(n)) && Wc(l, a));
          var f = (i = e.createElement("link"));
          (Al(f),
            Dl(f, "link", l),
            (f._p = new Promise(function (h, b) {
              ((f.onload = h), (f.onerror = b));
            })),
            f.addEventListener("load", function () {
              c.loading |= 1;
            }),
            f.addEventListener("error", function () {
              c.loading |= 2;
            }),
            (c.loading |= 4),
            _n(i, t, e));
        }
        ((i = { type: "stylesheet", instance: i, count: 1, state: c }),
          u.set(n, i));
      }
    }
  }
  function Uh(l, t) {
    wt.X(l, t);
    var a = ze;
    if (a && l) {
      var e = La(a).hoistableScripts,
        u = Ee(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = H({ src: l, async: !0 }, t)),
          (t = rt.get(u)) && $c(l, t),
          (n = a.createElement("script")),
          Al(n),
          Dl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Hh(l, t) {
    wt.M(l, t);
    var a = ze;
    if (a && l) {
      var e = La(a).hoistableScripts,
        u = Ee(l),
        n = e.get(u);
      n ||
        ((n = a.querySelector(hu(u))),
        n ||
          ((l = H({ src: l, async: !0, type: "module" }, t)),
          (t = rt.get(u)) && $c(l, t),
          (n = a.createElement("script")),
          Al(n),
          Dl(n, "link", l),
          a.head.appendChild(n)),
        (n = { type: "script", instance: n, count: 1, state: null }),
        e.set(u, n));
    }
  }
  function Wo(l, t, a, e) {
    var u = (u = Z.current) ? Nn(u) : null;
    if (!u) throw Error(r(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string"
          ? ((t = Te(a.href)),
            (a = La(u).hoistableStyles),
            (e = a.get(t)),
            e ||
              ((e = { type: "style", instance: null, count: 0, state: null }),
              a.set(t, e)),
            e)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          a.rel === "stylesheet" &&
          typeof a.href == "string" &&
          typeof a.precedence == "string"
        ) {
          l = Te(a.href);
          var n = La(u).hoistableStyles,
            i = n.get(l);
          if (
            (i ||
              ((u = u.ownerDocument || u),
              (i = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              n.set(l, i),
              (n = u.querySelector(mu(l))) &&
                !n._p &&
                ((i.instance = n), (i.state.loading = 5)),
              rt.has(l) ||
                ((a = {
                  rel: "preload",
                  as: "style",
                  href: a.href,
                  crossOrigin: a.crossOrigin,
                  integrity: a.integrity,
                  media: a.media,
                  hrefLang: a.hrefLang,
                  referrerPolicy: a.referrerPolicy,
                }),
                rt.set(l, a),
                n || Rh(u, l, a, i.state))),
            t && e === null)
          )
            throw Error(r(528, ""));
          return i;
        }
        if (t && e !== null) throw Error(r(529, ""));
        return null;
      case "script":
        return (
          (t = a.async),
          (a = a.src),
          typeof a == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = Ee(a)),
              (a = La(u).hoistableScripts),
              (e = a.get(t)),
              e ||
                ((e = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                a.set(t, e)),
              e)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(r(444, l));
    }
  }
  function Te(l) {
    return 'href="' + ft(l) + '"';
  }
  function mu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function $o(l) {
    return H({}, l, { "data-precedence": l.precedence, precedence: null });
  }
  function Rh(l, t, a, e) {
    l.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (e.loading = 1)
      : ((t = l.createElement("link")),
        (e.preload = t),
        t.addEventListener("load", function () {
          return (e.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (e.loading |= 2);
        }),
        Dl(t, "link", a),
        Al(t),
        l.head.appendChild(t));
  }
  function Ee(l) {
    return '[src="' + ft(l) + '"]';
  }
  function hu(l) {
    return "script[async]" + l;
  }
  function Fo(l, t, a) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var e = l.querySelector('style[data-href~="' + ft(a.href) + '"]');
          if (e) return ((t.instance = e), Al(e), e);
          var u = H({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null,
          });
          return (
            (e = (l.ownerDocument || l).createElement("style")),
            Al(e),
            Dl(e, "style", u),
            _n(e, a.precedence, l),
            (t.instance = e)
          );
        case "stylesheet":
          u = Te(a.href);
          var n = l.querySelector(mu(u));
          if (n) return ((t.state.loading |= 4), (t.instance = n), Al(n), n);
          ((e = $o(a)),
            (u = rt.get(u)) && Wc(e, u),
            (n = (l.ownerDocument || l).createElement("link")),
            Al(n));
          var i = n;
          return (
            (i._p = new Promise(function (c, f) {
              ((i.onload = c), (i.onerror = f));
            })),
            Dl(n, "link", e),
            (t.state.loading |= 4),
            _n(n, a.precedence, l),
            (t.instance = n)
          );
        case "script":
          return (
            (n = Ee(a.src)),
            (u = l.querySelector(hu(n)))
              ? ((t.instance = u), Al(u), u)
              : ((e = a),
                (u = rt.get(n)) && ((e = H({}, a)), $c(e, u)),
                (l = l.ownerDocument || l),
                (u = l.createElement("script")),
                Al(u),
                Dl(u, "link", e),
                l.head.appendChild(u),
                (t.instance = u))
          );
        case "void":
          return null;
        default:
          throw Error(r(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((e = t.instance), (t.state.loading |= 4), _n(e, a.precedence, l));
    return t.instance;
  }
  function _n(l, t, a) {
    for (
      var e = a.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]',
        ),
        u = e.length ? e[e.length - 1] : null,
        n = u,
        i = 0;
      i < e.length;
      i++
    ) {
      var c = e[i];
      if (c.dataset.precedence === t) n = c;
      else if (n !== u) break;
    }
    n
      ? n.parentNode.insertBefore(l, n.nextSibling)
      : ((t = a.nodeType === 9 ? a.head : a), t.insertBefore(l, t.firstChild));
  }
  function Wc(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.title == null && (l.title = t.title));
  }
  function $c(l, t) {
    (l.crossOrigin == null && (l.crossOrigin = t.crossOrigin),
      l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy),
      l.integrity == null && (l.integrity = t.integrity));
  }
  var On = null;
  function ko(l, t, a) {
    if (On === null) {
      var e = new Map(),
        u = (On = new Map());
      u.set(a, e);
    } else ((u = On), (e = u.get(a)), e || ((e = new Map()), u.set(a, e)));
    if (e.has(l)) return e;
    for (
      e.set(l, null), a = a.getElementsByTagName(l), u = 0;
      u < a.length;
      u++
    ) {
      var n = a[u];
      if (
        !(
          n[Me] ||
          n[Nl] ||
          (l === "link" && n.getAttribute("rel") === "stylesheet")
        ) &&
        n.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var i = n.getAttribute(t) || "";
        i = l + i;
        var c = e.get(i);
        c ? c.push(n) : e.set(i, [n]);
      }
    }
    return e;
  }
  function Io(l, t, a) {
    ((l = l.ownerDocument || l),
      l.head.insertBefore(
        a,
        t === "title" ? l.querySelector("head > title") : null,
      ));
  }
  function Ch(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        return t.rel === "stylesheet"
          ? ((l = t.disabled), typeof t.precedence == "string" && l == null)
          : !0;
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function Po(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function qh(l, t, a, e) {
    if (
      a.type === "stylesheet" &&
      (typeof e.media != "string" || matchMedia(e.media).matches !== !1) &&
      (a.state.loading & 4) === 0
    ) {
      if (a.instance === null) {
        var u = Te(e.href),
          n = t.querySelector(mu(u));
        if (n) {
          ((t = n._p),
            t !== null &&
              typeof t == "object" &&
              typeof t.then == "function" &&
              (l.count++, (l = Mn.bind(l)), t.then(l, l)),
            (a.state.loading |= 4),
            (a.instance = n),
            Al(n));
          return;
        }
        ((n = t.ownerDocument || t),
          (e = $o(e)),
          (u = rt.get(u)) && Wc(e, u),
          (n = n.createElement("link")),
          Al(n));
        var i = n;
        ((i._p = new Promise(function (c, f) {
          ((i.onload = c), (i.onerror = f));
        })),
          Dl(n, "link", e),
          (a.instance = n));
      }
      (l.stylesheets === null && (l.stylesheets = new Map()),
        l.stylesheets.set(a, t),
        (t = a.state.preload) &&
          (a.state.loading & 3) === 0 &&
          (l.count++,
          (a = Mn.bind(l)),
          t.addEventListener("load", a),
          t.addEventListener("error", a)));
    }
  }
  var Fc = 0;
  function Yh(l, t) {
    return (
      l.stylesheets && l.count === 0 && jn(l, l.stylesheets),
      0 < l.count || 0 < l.imgCount
        ? function (a) {
            var e = setTimeout(function () {
              if ((l.stylesheets && jn(l, l.stylesheets), l.unsuspend)) {
                var n = l.unsuspend;
                ((l.unsuspend = null), n());
              }
            }, 6e4 + t);
            0 < l.imgBytes && Fc === 0 && (Fc = 62500 * gh());
            var u = setTimeout(
              function () {
                if (
                  ((l.waitingForImages = !1),
                  l.count === 0 &&
                    (l.stylesheets && jn(l, l.stylesheets), l.unsuspend))
                ) {
                  var n = l.unsuspend;
                  ((l.unsuspend = null), n());
                }
              },
              (l.imgBytes > Fc ? 50 : 800) + t,
            );
            return (
              (l.unsuspend = a),
              function () {
                ((l.unsuspend = null), clearTimeout(e), clearTimeout(u));
              }
            );
          }
        : null
    );
  }
  function Mn() {
    if (
      (this.count--,
      this.count === 0 && (this.imgCount === 0 || !this.waitingForImages))
    ) {
      if (this.stylesheets) jn(this, this.stylesheets);
      else if (this.unsuspend) {
        var l = this.unsuspend;
        ((this.unsuspend = null), l());
      }
    }
  }
  var Dn = null;
  function jn(l, t) {
    ((l.stylesheets = null),
      l.unsuspend !== null &&
        (l.count++,
        (Dn = new Map()),
        t.forEach(Bh, l),
        (Dn = null),
        Mn.call(l)));
  }
  function Bh(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Dn.get(l);
      if (a) var e = a.get(null);
      else {
        ((a = new Map()), Dn.set(l, a));
        for (
          var u = l.querySelectorAll(
              "link[data-precedence],style[data-precedence]",
            ),
            n = 0;
          n < u.length;
          n++
        ) {
          var i = u[n];
          (i.nodeName === "LINK" || i.getAttribute("media") !== "not all") &&
            (a.set(i.dataset.precedence, i), (e = i));
        }
        e && a.set(null, e);
      }
      ((u = t.instance),
        (i = u.getAttribute("data-precedence")),
        (n = a.get(i) || e),
        n === e && a.set(null, u),
        a.set(i, u),
        this.count++,
        (e = Mn.bind(this)),
        u.addEventListener("load", e),
        u.addEventListener("error", e),
        n
          ? n.parentNode.insertBefore(u, n.nextSibling)
          : ((l = l.nodeType === 9 ? l.head : l),
            l.insertBefore(u, l.firstChild)),
        (t.state.loading |= 4));
    }
  }
  var vu = {
    $$typeof: jl,
    Provider: null,
    Consumer: null,
    _currentValue: R,
    _currentValue2: R,
    _threadCount: 0,
  };
  function Gh(l, t, a, e, u, n, i, c, f) {
    ((this.tag = 1),
      (this.containerInfo = l),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Kn(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Kn(0)),
      (this.hiddenUpdates = Kn(null)),
      (this.identifierPrefix = e),
      (this.onUncaughtError = u),
      (this.onCaughtError = n),
      (this.onRecoverableError = i),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = f),
      (this.incompleteTransitions = new Map()));
  }
  function lm(l, t, a, e, u, n, i, c, f, h, b, z) {
    return (
      (l = new Gh(l, t, a, i, f, h, b, z, c)),
      (t = 1),
      n === !0 && (t |= 24),
      (n = lt(3, null, null, t)),
      (l.current = n),
      (n.stateNode = l),
      (t = Mi()),
      t.refCount++,
      (l.pooledCache = t),
      t.refCount++,
      (n.memoizedState = { element: e, isDehydrated: a, cache: t }),
      Hi(n),
      l
    );
  }
  function tm(l) {
    return l ? ((l = le), l) : le;
  }
  function am(l, t, a, e, u, n) {
    ((u = tm(u)),
      e.context === null ? (e.context = u) : (e.pendingContext = u),
      (e = ea(t)),
      (e.payload = { element: a }),
      (n = n === void 0 ? null : n),
      n !== null && (e.callback = n),
      (a = ua(l, e, t)),
      a !== null && (wl(a, l, t), Je(a, l, t)));
  }
  function em(l, t) {
    if (((l = l.memoizedState), l !== null && l.dehydrated !== null)) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function kc(l, t) {
    (em(l, t), (l = l.alternate) && em(l, t));
  }
  function um(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = _a(l, 67108864);
      (t !== null && wl(t, l, 67108864), kc(l, 67108864));
    }
  }
  function nm(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = nt();
      t = Jn(t);
      var a = _a(l, t);
      (a !== null && wl(a, l, t), kc(l, t));
    }
  }
  var Un = !0;
  function Xh(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = A.p;
    try {
      ((A.p = 2), Ic(l, t, a, e));
    } finally {
      ((A.p = n), (S.T = u));
    }
  }
  function Qh(l, t, a, e) {
    var u = S.T;
    S.T = null;
    var n = A.p;
    try {
      ((A.p = 8), Ic(l, t, a, e));
    } finally {
      ((A.p = n), (S.T = u));
    }
  }
  function Ic(l, t, a, e) {
    if (Un) {
      var u = Pc(e);
      if (u === null) (Bc(l, t, e, Hn, a), cm(l, e));
      else if (Vh(u, l, t, a, e)) e.stopPropagation();
      else if ((cm(l, e), t & 4 && -1 < Zh.indexOf(l))) {
        for (; u !== null; ) {
          var n = Va(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (((n = n.stateNode), n.current.memoizedState.isDehydrated)) {
                  var i = Ta(n.pendingLanes);
                  if (i !== 0) {
                    var c = n;
                    for (c.pendingLanes |= 2, c.entangledLanes |= 2; i; ) {
                      var f = 1 << (31 - Il(i));
                      ((c.entanglements[1] |= f), (i &= ~f));
                    }
                    (_t(n), (I & 6) === 0 && ((yn = Fl() + 500), fu(0)));
                  }
                }
                break;
              case 31:
              case 13:
                ((c = _a(n, 2)), c !== null && wl(c, n, 2), gn(), kc(n, 2));
            }
          if (((n = Pc(e)), n === null && Bc(l, t, e, Hn, a), n === u)) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else Bc(l, t, e, null, a);
    }
  }
  function Pc(l) {
    return ((l = ti(l)), lf(l));
  }
  var Hn = null;
  function lf(l) {
    if (((Hn = null), (l = Za(l)), l !== null)) {
      var t = k(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (((l = yl(t)), l !== null)) return l;
          l = null;
        } else if (a === 31) {
          if (((l = Hl(t)), l !== null)) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return ((Hn = l), null);
  }
  function im(l) {
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
        switch (_m()) {
          case hf:
            return 2;
          case vf:
            return 8;
          case zu:
          case Om:
            return 32;
          case yf:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var tf = !1,
    ya = null,
    ra = null,
    ga = null,
    yu = new Map(),
    ru = new Map(),
    ba = [],
    Zh =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " ",
      );
  function cm(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        ya = null;
        break;
      case "dragenter":
      case "dragleave":
        ra = null;
        break;
      case "mouseover":
      case "mouseout":
        ga = null;
        break;
      case "pointerover":
      case "pointerout":
        yu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ru.delete(t.pointerId);
    }
  }
  function gu(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n
      ? ((l = {
          blockedOn: t,
          domEventName: a,
          eventSystemFlags: e,
          nativeEvent: n,
          targetContainers: [u],
        }),
        t !== null && ((t = Va(t)), t !== null && um(t)),
        l)
      : ((l.eventSystemFlags |= e),
        (t = l.targetContainers),
        u !== null && t.indexOf(u) === -1 && t.push(u),
        l);
  }
  function Vh(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return ((ya = gu(ya, l, t, a, e, u)), !0);
      case "dragenter":
        return ((ra = gu(ra, l, t, a, e, u)), !0);
      case "mouseover":
        return ((ga = gu(ga, l, t, a, e, u)), !0);
      case "pointerover":
        var n = u.pointerId;
        return (yu.set(n, gu(yu.get(n) || null, l, t, a, e, u)), !0);
      case "gotpointercapture":
        return (
          (n = u.pointerId),
          ru.set(n, gu(ru.get(n) || null, l, t, a, e, u)),
          !0
        );
    }
    return !1;
  }
  function fm(l) {
    var t = Za(l.target);
    if (t !== null) {
      var a = k(t);
      if (a !== null) {
        if (((t = a.tag), t === 13)) {
          if (((t = yl(a)), t !== null)) {
            ((l.blockedOn = t),
              zf(l.priority, function () {
                nm(a);
              }));
            return;
          }
        } else if (t === 31) {
          if (((t = Hl(a)), t !== null)) {
            ((l.blockedOn = t),
              zf(l.priority, function () {
                nm(a);
              }));
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function Rn(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = Pc(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(a.type, a);
        ((li = e), a.target.dispatchEvent(e), (li = null));
      } else return ((t = Va(a)), t !== null && um(t), (l.blockedOn = a), !1);
      t.shift();
    }
    return !0;
  }
  function sm(l, t, a) {
    Rn(l) && a.delete(t);
  }
  function Lh() {
    ((tf = !1),
      ya !== null && Rn(ya) && (ya = null),
      ra !== null && Rn(ra) && (ra = null),
      ga !== null && Rn(ga) && (ga = null),
      yu.forEach(sm),
      ru.forEach(sm));
  }
  function Cn(l, t) {
    l.blockedOn === t &&
      ((l.blockedOn = null),
      tf ||
        ((tf = !0),
        N.unstable_scheduleCallback(N.unstable_NormalPriority, Lh)));
  }
  var qn = null;
  function dm(l) {
    qn !== l &&
      ((qn = l),
      N.unstable_scheduleCallback(N.unstable_NormalPriority, function () {
        qn === l && (qn = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t],
            e = l[t + 1],
            u = l[t + 2];
          if (typeof e != "function") {
            if (lf(e || a) === null) continue;
            break;
          }
          var n = Va(a);
          n !== null &&
            (l.splice(t, 3),
            (t -= 3),
            Pi(n, { pending: !0, data: u, method: a.method, action: e }, e, u));
        }
      }));
  }
  function Ae(l) {
    function t(f) {
      return Cn(f, l);
    }
    (ya !== null && Cn(ya, l),
      ra !== null && Cn(ra, l),
      ga !== null && Cn(ga, l),
      yu.forEach(t),
      ru.forEach(t));
    for (var a = 0; a < ba.length; a++) {
      var e = ba[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < ba.length && ((a = ba[0]), a.blockedOn === null); )
      (fm(a), a.blockedOn === null && ba.shift());
    if (((a = (l.ownerDocument || l).$$reactFormReplay), a != null))
      for (e = 0; e < a.length; e += 3) {
        var u = a[e],
          n = a[e + 1],
          i = u[Ql] || null;
        if (typeof n == "function") i || dm(a);
        else if (i) {
          var c = null;
          if (n && n.hasAttribute("formAction")) {
            if (((u = n), (i = n[Ql] || null))) c = i.formAction;
            else if (lf(u) !== null) continue;
          } else c = i.action;
          (typeof c == "function" ? (a[e + 1] = c) : (a.splice(e, 3), (e -= 3)),
            dm(a));
        }
      }
  }
  function om() {
    function l(n) {
      n.canIntercept &&
        n.info === "react-transition" &&
        n.intercept({
          handler: function () {
            return new Promise(function (i) {
              return (u = i);
            });
          },
          focusReset: "manual",
          scroll: "manual",
        });
    }
    function t() {
      (u !== null && (u(), (u = null)), e || setTimeout(a, 20));
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n &&
          n.url != null &&
          navigation.navigate(n.url, {
            state: n.getState(),
            info: "react-transition",
            history: "replace",
          });
      }
    }
    if (typeof navigation == "object") {
      var e = !1,
        u = null;
      return (
        navigation.addEventListener("navigate", l),
        navigation.addEventListener("navigatesuccess", t),
        navigation.addEventListener("navigateerror", t),
        setTimeout(a, 100),
        function () {
          ((e = !0),
            navigation.removeEventListener("navigate", l),
            navigation.removeEventListener("navigatesuccess", t),
            navigation.removeEventListener("navigateerror", t),
            u !== null && (u(), (u = null)));
        }
      );
    }
  }
  function af(l) {
    this._internalRoot = l;
  }
  ((Yn.prototype.render = af.prototype.render =
    function (l) {
      var t = this._internalRoot;
      if (t === null) throw Error(r(409));
      var a = t.current,
        e = nt();
      am(a, e, l, t, null, null);
    }),
    (Yn.prototype.unmount = af.prototype.unmount =
      function () {
        var l = this._internalRoot;
        if (l !== null) {
          this._internalRoot = null;
          var t = l.containerInfo;
          (am(l.current, 2, null, l, null, null), gn(), (t[Qa] = null));
        }
      }));
  function Yn(l) {
    this._internalRoot = l;
  }
  Yn.prototype.unstable_scheduleHydration = function (l) {
    if (l) {
      var t = xf();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < ba.length && t !== 0 && t < ba[a].priority; a++);
      (ba.splice(a, 0, l), a === 0 && fm(l));
    }
  };
  var mm = q.version;
  if (mm !== "19.2.4") throw Error(r(527, mm, "19.2.4"));
  A.findDOMNode = function (l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function"
        ? Error(r(188))
        : ((l = Object.keys(l).join(",")), Error(r(268, l)));
    return (
      (l = E(t)),
      (l = l !== null ? P(l) : null),
      (l = l === null ? null : l.stateNode),
      l
    );
  };
  var Kh = {
    bundleType: 0,
    version: "19.2.4",
    rendererPackageName: "react-dom",
    currentDispatcherRef: S,
    reconcilerVersion: "19.2.4",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bn = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bn.isDisabled && Bn.supportsFiber)
      try {
        ((Ne = Bn.inject(Kh)), (kl = Bn));
      } catch {}
  }
  return (
    (Su.createRoot = function (l, t) {
      if (!Q(l)) throw Error(r(299));
      var a = !1,
        e = "",
        u = bd,
        n = Sd,
        i = xd;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (a = !0),
          t.identifierPrefix !== void 0 && (e = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (u = t.onUncaughtError),
          t.onCaughtError !== void 0 && (n = t.onCaughtError),
          t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = lm(l, 1, !1, null, null, a, e, null, u, n, i, om)),
        (l[Qa] = t.current),
        Yc(l),
        new af(t)
      );
    }),
    (Su.hydrateRoot = function (l, t, a) {
      if (!Q(l)) throw Error(r(299));
      var e = !1,
        u = "",
        n = bd,
        i = Sd,
        c = xd,
        f = null;
      return (
        a != null &&
          (a.unstable_strictMode === !0 && (e = !0),
          a.identifierPrefix !== void 0 && (u = a.identifierPrefix),
          a.onUncaughtError !== void 0 && (n = a.onUncaughtError),
          a.onCaughtError !== void 0 && (i = a.onCaughtError),
          a.onRecoverableError !== void 0 && (c = a.onRecoverableError),
          a.formState !== void 0 && (f = a.formState)),
        (t = lm(l, 1, !0, t, a ?? null, e, u, f, n, i, c, om)),
        (t.context = tm(null)),
        (a = t.current),
        (e = nt()),
        (e = Jn(e)),
        (u = ea(e)),
        (u.callback = null),
        ua(a, u, e),
        (a = e),
        (t.current.lanes = a),
        Oe(t, a),
        _t(t),
        (l[Qa] = t.current),
        Yc(l),
        new Yn(t)
      );
    }),
    (Su.version = "19.2.4"),
    Su
  );
}
var Tm;
function tv() {
  if (Tm) return nf.exports;
  Tm = 1;
  function N() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(N);
      } catch (q) {
        console.error(q);
      }
  }
  return (N(), (nf.exports = lv()), nf.exports);
}
var av = tv();
function ev() {
  const [N, q] = Em.useState(!1);
  return v.jsxs("nav", {
    className:
      "fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100",
    children: [
      v.jsxs("div", {
        className:
          "max-w-7xl mx-auto px-6 h-20 flex items-center justify-between",
        children: [
          v.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              v.jsx("div", {
                className:
                  "w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center",
                children: v.jsx("div", {
                  className: "w-4 h-4 border-2 border-white rounded-sm",
                }),
              }),
              v.jsxs("span", {
                className: "text-xl font-bold text-brand-navy",
                children: [
                  "Centennial ",
                  v.jsx("span", {
                    className: "text-brand-blue",
                    children: "Talent Solutions",
                  }),
                ],
              }),
            ],
          }),
          v.jsxs("div", {
            className: "hidden md:flex items-center gap-8",
            children: [
              v.jsx("a", {
                href: "#",
                className:
                  "text-sm font-medium text-text-muted hover:text-brand-blue transition-colors",
                children: "Home",
              }),
              v.jsx("a", {
                href: "#",
                className:
                  "text-sm font-medium text-text-muted hover:text-brand-blue transition-colors",
                children: "Find jobs",
              }),
              v.jsx("a", {
                href: "#",
                className:
                  "text-sm font-medium text-text-muted hover:text-brand-blue transition-colors",
                children: "Login",
              }),
              v.jsx("button", {
                className:
                  "bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-blue transition-all shadow-md",
                children: "Join Now",
              }),
            ],
          }),
          v.jsx("button", {
            className: "md:hidden p-2 text-brand-navy",
            onClick: () => q(!N),
            children: v.jsx("svg", {
              className: "w-6 h-6",
              fill: "none",
              stroke: "currentColor",
              viewBox: "0 0 24 24",
              children: v.jsx("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: N ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16",
              }),
            }),
          }),
        ],
      }),
      v.jsx("div", {
        className: `md:hidden bg-white border-b border-gray-100 px-6 overflow-hidden transition-all duration-300 ease-in-out ${N ? "max-h-64 py-4" : "max-h-0"}`,
        children: v.jsxs("div", {
          className: "flex flex-col gap-4",
          children: [
            v.jsx("a", {
              href: "#",
              className: "text-sm font-medium text-text-muted",
              children: "Home",
            }),
            v.jsx("a", {
              href: "#",
              className: "text-sm font-medium text-text-muted",
              children: "Find jobs",
            }),
            v.jsx("a", {
              href: "#",
              className: "text-sm font-medium text-text-muted",
              children: "Login",
            }),
            v.jsx("button", {
              className:
                "bg-brand-navy text-white px-6 py-2.5 rounded-full text-sm font-semibold w-full",
              children: "Join Now",
            }),
          ],
        }),
      }),
    ],
  });
}
function uv() {
  return v.jsx("section", {
    className: "pt-32 lg:pt-48 pb-20 overflow-hidden",
    children: v.jsxs("div", {
      className:
        "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center",
      children: [
        v.jsxs("div", {
          className: "relative z-10",
          children: [
            v.jsxs("h1", {
              className:
                "text-5xl lg:text-7xl font-extrabold text-brand-navy leading-tight mb-6",
              children: [
                "Connect ",
                v.jsx("br", {}),
                "with ",
                v.jsx("span", {
                  className: "text-brand-blue",
                  children: "Elite",
                }),
                " ",
                v.jsx("br", {}),
                "Talent ",
                v.jsx("br", {}),
                "Instantly.",
              ],
            }),
            v.jsx("p", {
              className:
                "text-lg text-text-muted mb-10 max-w-lg leading-relaxed",
              children:
                "Recruitment agencies directly connect with Elite Solutions. From SMBs to Fortune, we find the highest quality talent for the jobs of the future.",
            }),
            v.jsxs("div", {
              className: "flex flex-col sm:flex-row gap-4",
              children: [
                v.jsx("button", {
                  className: "btn-primary",
                  children: "Explore Careers",
                }),
                v.jsx("button", {
                  className: "btn-secondary",
                  children: "Post a Talent",
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className: "relative",
          children: [
            v.jsx("div", {
              className:
                "absolute -top-20 -right-20 w-96 h-96 bg-brand-light/10 rounded-full blur-3xl",
            }),
            v.jsx("div", {
              className:
                "absolute -bottom-20 -left-20 w-96 h-96 bg-brand-blue/10 rounded-full blur-3xl",
            }),
            v.jsx("div", {
              className:
                "relative z-10 rounded-3xl overflow-hidden shadow-2xl transform lg:rotate-2 hover:rotate-0 transition-transform duration-500",
              children: v.jsx("img", {
                src: "https://centennial-talent-solutions.netlify.app/assets/hero-bg-bJJJ3eRP.png",
                alt: "Elite Talent Network",
                className: "w-full h-auto object-cover",
              }),
            }),
          ],
        }),
      ],
    }),
  });
}
function nv() {
  const N = [
    { label: "30 Yrs", sub: "Market Presence", bg: "bg-brand-light" },
    { label: "180+", sub: "Expert Mentors", bg: "bg-brand-blue" },
    { label: "2700+", sub: "Happy Placements", bg: "bg-brand-navy" },
  ];
  return v.jsx("section", {
    className: "py-12 px-6",
    children: v.jsx("div", {
      className: "max-w-7xl mx-auto grid md:grid-cols-3 gap-6",
      children: N.map((q, X) =>
        v.jsxs(
          "div",
          {
            className: `${q.bg} ${X === 0 ? "text-brand-navy" : "text-white"} p-10 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg transform hover:-translate-y-2 transition-transform duration-300`,
            children: [
              v.jsx("span", {
                className: "text-4xl lg:text-5xl font-extrabold mb-2",
                children: q.label,
              }),
              v.jsx("span", {
                className:
                  "text-sm font-medium opacity-80 uppercase tracking-widest",
                children: q.sub,
              }),
            ],
          },
          X,
        ),
      ),
    }),
  });
}
function iv() {
  const N = [
    { title: "IT Staffing", desc: "Expert talent for your teams.", icon: "👥" },
    {
      title: "Tech Strategy",
      desc: "Digital roadmap for success.",
      icon: "🎯",
    },
    { title: "App Dev", desc: "Modern web & mobile apps.", icon: "📱" },
    { title: "Cloud Services", desc: "Scalable cloud solutions.", icon: "☁️" },
    { title: "Product Dev", desc: "End-to-end product design.", icon: "🚀" },
    { title: "Consultancy", desc: "Expert business IT advice.", icon: "💡" },
  ];
  return v.jsx("section", {
    className: "bg-bg-light py-20 lg:py-32 overflow-hidden",
    children: v.jsxs("div", {
      className:
        "max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center",
      children: [
        v.jsxs("div", {
          className: "relative group",
          children: [
            v.jsx("div", {
              className:
                "absolute inset-0 bg-brand-blue/20 rounded-3xl blur-2xl group-hover:bg-brand-blue/30 transition-colors",
            }),
            v.jsx("img", {
              src: "https://centennial-talent-solutions.netlify.app/assets/engineering-services-rGUvYK6u.png",
              alt: "Digital Solutions",
              className: "relative z-10 rounded-3xl shadow-2xl",
            }),
          ],
        }),
        v.jsxs("div", {
          children: [
            v.jsx("span", {
              className:
                "text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block",
              children: "End-to-End Solutions",
            }),
            v.jsxs("h2", {
              className:
                "text-4xl lg:text-5xl font-extrabold text-brand-navy mb-8 leading-tight",
              children: [
                "Comprehensive solutions for ",
                v.jsx("span", {
                  className: "text-brand-blue",
                  children: "Digital Success",
                }),
              ],
            }),
            v.jsx("div", {
              className: "grid sm:grid-cols-2 gap-6",
              children: N.map((q, X) =>
                v.jsxs(
                  "div",
                  {
                    className: "flex gap-4 group",
                    children: [
                      v.jsx("div", {
                        className:
                          "w-12 h-12 shrink-0 bg-white rounded-xl shadow-sm flex items-center justify-center text-xl group-hover:bg-brand-blue group-hover:text-white transition-all duration-300",
                        children: q.icon,
                      }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("h3", {
                            className:
                              "font-bold text-brand-navy group-hover:text-brand-blue transition-colors",
                            children: q.title,
                          }),
                          v.jsx("p", {
                            className: "text-sm text-text-muted",
                            children: q.desc,
                          }),
                        ],
                      }),
                    ],
                  },
                  X,
                ),
              ),
            }),
          ],
        }),
      ],
    }),
  });
}
function cv() {
  const N = [
    {
      title: "Global Outreach",
      desc: "Connect with talent and opportunities across the globe with our extensive network.",
      icon: "🌐",
    },
    {
      title: "Pre-Vetted Network",
      desc: "Every candidate and company is thoroughly vetted to ensure quality and reliability.",
      icon: "✅",
    },
    {
      title: "Rapid Delivery",
      desc: "Fast-track your hiring or job search with our streamlined, efficient platform.",
      icon: "⚡",
    },
  ];
  return v.jsx("section", {
    className: "py-20 bg-white",
    children: v.jsx("div", {
      className: "max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8",
      children: N.map((q, X) =>
        v.jsxs(
          "div",
          {
            className:
              "p-8 rounded-3xl border border-gray-100 hover:border-brand-blue hover:shadow-2xl transition-all duration-300 group",
            children: [
              v.jsx("div", {
                className:
                  "w-14 h-14 bg-brand-blue/5 rounded-2xl flex items-center justify-center text-2xl mb-6 group-hover:scale-110 transition-transform",
                children: q.icon,
              }),
              v.jsx("h3", {
                className: "text-xl font-bold text-brand-navy mb-4",
                children: q.title,
              }),
              v.jsx("p", {
                className: "text-text-muted leading-relaxed",
                children: q.desc,
              }),
            ],
          },
          X,
        ),
      ),
    }),
  });
}
function fv() {
  return v.jsx("section", {
    className: "py-20",
    children: v.jsx("div", {
      className: "max-w-7xl mx-auto px-6",
      children: v.jsxs("div", {
        className:
          "bg-brand-navy rounded-[3rem] overflow-hidden grid lg:grid-cols-2 shadow-2xl",
        children: [
          v.jsxs("div", {
            className: "p-12 lg:p-20 flex flex-col justify-center",
            children: [
              v.jsx("span", {
                className:
                  "text-brand-light font-bold tracking-widest uppercase text-sm mb-4",
                children: "Pipeline Management",
              }),
              v.jsxs("h2", {
                className:
                  "text-4xl lg:text-5xl font-extrabold text-white mb-6 leading-tight",
                children: [
                  "Stay in control of your ",
                  v.jsx("span", {
                    className: "text-brand-light",
                    children: "hiring pipeline",
                  }),
                ],
              }),
              v.jsx("p", {
                className: "text-blue-100/70 text-lg mb-10 max-w-md",
                children:
                  "Managing recruitment has never been easier. Filter, track, and engage talent with our intuitive dashboard built for speed.",
              }),
              v.jsx("div", {
                children: v.jsx("button", {
                  className:
                    "bg-white text-brand-navy px-8 py-4 rounded-full font-bold hover:bg-brand-light transition-colors",
                  children: "Start Hiring Now",
                }),
              }),
            ],
          }),
          v.jsxs("div", {
            className: "relative min-h-[400px]",
            children: [
              v.jsx("img", {
                src: "https://centennial-talent-solutions.netlify.app/assets/recruiter-view-soOGNiRR.png",
                alt: "Hiring Pipeline Dashboard",
                className: "absolute inset-0 w-full h-full object-cover",
              }),
              v.jsx("div", {
                className:
                  "absolute inset-0 bg-gradient-to-r from-brand-navy to-transparent lg:hidden",
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function sv() {
  const N = [
    {
      name: "Alex Reed",
      role: "CTO, TechFlow",
      text: "The quality of talent we found through Centennial is unmatched. They truly understand our tech stack.",
      stars: 5,
      img: "https://i.pravatar.cc/150?u=alex",
    },
    {
      name: "Sarah Jenkins",
      role: "HR Director, GlobalInc",
      text: "Streamlined our entire hiring process. We saved weeks of time and found the perfect fits for our roles.",
      stars: 5,
      img: "https://i.pravatar.cc/150?u=sarah",
    },
    {
      name: "Thomas Merico",
      role: "Founder, StartupX",
      text: "The pre-vetted network is a game changer. Reliable, fast, and high-quality candidates every single time.",
      stars: 5,
      img: "https://i.pravatar.cc/150?u=thomas",
    },
  ];
  return v.jsx("section", {
    className: "py-20 lg:py-32 bg-bg-light",
    children: v.jsxs("div", {
      className: "max-w-7xl mx-auto px-6",
      children: [
        v.jsxs("div", {
          className: "text-center mb-16",
          children: [
            v.jsx("span", {
              className:
                "text-brand-blue font-bold tracking-widest uppercase text-sm mb-4 block",
              children: "Testimonials",
            }),
            v.jsx("h2", {
              className: "text-4xl lg:text-5xl font-extrabold text-brand-navy",
              children: "Loved by teams worldwide",
            }),
          ],
        }),
        v.jsx("div", {
          className: "grid md:grid-cols-3 gap-8",
          children: N.map((q, X) =>
            v.jsxs(
              "div",
              {
                className:
                  "bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100",
                children: [
                  v.jsx("div", {
                    className: "flex text-yellow-400 mb-6 font-bold",
                    children: "★".repeat(q.stars),
                  }),
                  v.jsxs("p", {
                    className: "text-text-muted italic mb-8 leading-relaxed",
                    children: ['"', q.text, '"'],
                  }),
                  v.jsxs("div", {
                    className: "flex items-center gap-4",
                    children: [
                      v.jsx("img", {
                        src: q.img,
                        alt: q.name,
                        className:
                          "w-12 h-12 rounded-full object-cover border-2 border-brand-blue/20",
                      }),
                      v.jsxs("div", {
                        children: [
                          v.jsx("h4", {
                            className: "font-bold text-brand-navy",
                            children: q.name,
                          }),
                          v.jsx("p", {
                            className: "text-xs text-text-muted",
                            children: q.role,
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              },
              X,
            ),
          ),
        }),
      ],
    }),
  });
}
function dv() {
  return v.jsx("section", {
    className: "py-20 px-6",
    children: v.jsxs("div", {
      className:
        "max-w-7xl mx-auto bg-gradient-to-br from-brand-navy to-brand-blue rounded-[3rem] p-12 lg:p-24 text-center text-white relative overflow-hidden shadow-2xl",
      children: [
        v.jsxs("div", {
          className: "relative z-10 max-w-2xl mx-auto",
          children: [
            v.jsx("p", {
              className: "text-blue-200 font-medium mb-6",
              children:
                "Over 2000+ developers and 300+ companies shaping the future with us.",
            }),
            v.jsx("h2", {
              className:
                "text-4xl lg:text-6xl font-extrabold mb-10 leading-tight",
              children: "Ready to take the next step in your career?",
            }),
            v.jsxs("div", {
              className:
                "flex flex-col sm:flex-row gap-6 justify-center items-center",
              children: [
                v.jsx("button", {
                  className:
                    "bg-white text-brand-navy px-10 py-5 rounded-full font-bold text-lg hover:bg-brand-light transition-all shadow-xl hover:scale-105 active:scale-95",
                  children: "Get Started For Free",
                }),
                v.jsx("a", {
                  href: "#",
                  className:
                    "font-bold border-b-2 border-white pb-1 hover:text-brand-light hover:border-brand-light transition-all",
                  children: "Contact our team →",
                }),
              ],
            }),
          ],
        }),
        v.jsx("div", {
          className:
            "absolute -top-24 -left-24 w-64 h-64 bg-white/5 rounded-full",
        }),
        v.jsx("div", {
          className:
            "absolute -bottom-24 -right-24 w-80 h-80 bg-brand-light/10 rounded-full",
        }),
      ],
    }),
  });
}
function ov() {
  return v.jsx("footer", {
    className: "bg-white pt-20 pb-10 border-t border-gray-100",
    children: v.jsxs("div", {
      className: "max-w-7xl mx-auto px-6",
      children: [
        v.jsxs("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-12 mb-20",
          children: [
            v.jsxs("div", {
              className: "col-span-2",
              children: [
                v.jsxs("div", {
                  className: "flex items-center gap-2 mb-6",
                  children: [
                    v.jsx("div", {
                      className:
                        "w-8 h-8 bg-brand-blue rounded-lg flex items-center justify-center",
                      children: v.jsx("div", {
                        className: "w-4 h-4 border-2 border-white rounded-sm",
                      }),
                    }),
                    v.jsxs("span", {
                      className: "text-xl font-bold text-brand-navy",
                      children: [
                        "Centennial ",
                        v.jsx("span", {
                          className: "text-brand-blue",
                          children: "Talent",
                        }),
                      ],
                    }),
                  ],
                }),
                v.jsx("p", {
                  className: "text-text-muted max-w-xs mb-8",
                  children:
                    "Empowering individuals and organizations to reach their full potential through strategic talent solutions and innovative technology.",
                }),
                v.jsxs("div", {
                  className: "flex gap-4",
                  children: [
                    v.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all",
                      children: "𝕏",
                    }),
                    v.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all",
                      children: "in",
                    }),
                    v.jsx("a", {
                      href: "#",
                      className:
                        "w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center text-text-muted hover:bg-brand-blue hover:text-white transition-all",
                      children: "fb",
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("h4", {
                  className:
                    "font-bold text-brand-navy mb-6 uppercase tracking-wider text-xs",
                  children: "Platform",
                }),
                v.jsxs("ul", {
                  className: "space-y-4 text-sm text-text-muted",
                  children: [
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Find Jobs",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Post a Talent",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Career Advice",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Salary Tools",
                      }),
                    }),
                  ],
                }),
              ],
            }),
            v.jsxs("div", {
              children: [
                v.jsx("h4", {
                  className:
                    "font-bold text-brand-navy mb-6 uppercase tracking-wider text-xs",
                  children: "Resources",
                }),
                v.jsxs("ul", {
                  className: "space-y-4 text-sm text-text-muted",
                  children: [
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "About Us",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Contact",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Privacy Policy",
                      }),
                    }),
                    v.jsx("li", {
                      children: v.jsx("a", {
                        href: "#",
                        className: "hover:text-brand-blue transition-colors",
                        children: "Terms of Service",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        v.jsxs("div", {
          className:
            "border-t border-gray-100 pt-10 flex flex-col md:row-reverse md:flex-row justify-between items-center gap-6",
          children: [
            v.jsxs("p", {
              className: "text-sm text-text-muted",
              children: [
                "© ",
                new Date().getFullYear(),
                " Centennial Talent Solutions. All rights reserved.",
              ],
            }),
            v.jsxs("div", {
              className: "flex gap-8 text-sm text-text-muted",
              children: [
                v.jsx("a", {
                  href: "#",
                  className: "hover:text-brand-blue transition-colors",
                  children: "English",
                }),
                v.jsx("a", {
                  href: "#",
                  className: "hover:text-brand-blue transition-colors",
                  children: "Support",
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
function mv() {
  return v.jsxs("div", {
    className: "min-h-screen bg-white",
    children: [
      v.jsx(ev, {}),
      v.jsx(uv, {}),
      v.jsx(nv, {}),
      v.jsx(iv, {}),
      v.jsx(cv, {}),
      v.jsx(fv, {}),
      v.jsx(sv, {}),
      v.jsx(dv, {}),
      v.jsx(ov, {}),
    ],
  });
}
av.createRoot(document.getElementById("root")).render(
  v.jsx(Em.StrictMode, { children: v.jsx(mv, {}) }),
);
