import * as ce from "react";
import it, { useRef as Ci, useEffect as Vn, useState as Yn } from "react";
var Ut = { exports: {} }, kt = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ei;
function Un() {
  if (ei) return kt;
  ei = 1;
  var s = Symbol.for("react.transitional.element"), e = Symbol.for("react.fragment");
  function t(r, i, n) {
    var o = null;
    if (n !== void 0 && (o = "" + n), i.key !== void 0 && (o = "" + i.key), "key" in i) {
      n = {};
      for (var a in i)
        a !== "key" && (n[a] = i[a]);
    } else n = i;
    return i = n.ref, {
      $$typeof: s,
      type: r,
      key: o,
      ref: i !== void 0 ? i : null,
      props: n
    };
  }
  return kt.Fragment = e, kt.jsx = t, kt.jsxs = t, kt;
}
var Tt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ti;
function Bn() {
  return ti || (ti = 1, process.env.NODE_ENV !== "production" && (function() {
    function s(v) {
      if (v == null) return null;
      if (typeof v == "function")
        return v.$$typeof === A ? null : v.displayName || v.name || null;
      if (typeof v == "string") return v;
      switch (v) {
        case f:
          return "Fragment";
        case y:
          return "Profiler";
        case m:
          return "StrictMode";
        case g:
          return "Suspense";
        case S:
          return "SuspenseList";
        case w:
          return "Activity";
      }
      if (typeof v == "object")
        switch (typeof v.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), v.$$typeof) {
          case p:
            return "Portal";
          case T:
            return (v.displayName || "Context") + ".Provider";
          case x:
            return (v._context.displayName || "Context") + ".Consumer";
          case k:
            var E = v.render;
            return v = v.displayName, v || (v = E.displayName || E.name || "", v = v !== "" ? "ForwardRef(" + v + ")" : "ForwardRef"), v;
          case P:
            return E = v.displayName || null, E !== null ? E : s(v.type) || "Memo";
          case b:
            E = v._payload, v = v._init;
            try {
              return s(v(E));
            } catch {
            }
        }
      return null;
    }
    function e(v) {
      return "" + v;
    }
    function t(v) {
      try {
        e(v);
        var E = !1;
      } catch {
        E = !0;
      }
      if (E) {
        E = console;
        var z = E.error, D = typeof Symbol == "function" && Symbol.toStringTag && v[Symbol.toStringTag] || v.constructor.name || "Object";
        return z.call(
          E,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          D
        ), e(v);
      }
    }
    function r(v) {
      if (v === f) return "<>";
      if (typeof v == "object" && v !== null && v.$$typeof === b)
        return "<...>";
      try {
        var E = s(v);
        return E ? "<" + E + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var v = j.A;
      return v === null ? null : v.getOwner();
    }
    function n() {
      return Error("react-stack-top-frame");
    }
    function o(v) {
      if (I.call(v, "key")) {
        var E = Object.getOwnPropertyDescriptor(v, "key").get;
        if (E && E.isReactWarning) return !1;
      }
      return v.key !== void 0;
    }
    function a(v, E) {
      function z() {
        U || (U = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          E
        ));
      }
      z.isReactWarning = !0, Object.defineProperty(v, "key", {
        get: z,
        configurable: !0
      });
    }
    function l() {
      var v = s(this.type);
      return F[v] || (F[v] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), v = this.props.ref, v !== void 0 ? v : null;
    }
    function u(v, E, z, D, L, $, ot, Z) {
      return z = $.ref, v = {
        $$typeof: _,
        type: v,
        key: E,
        props: $,
        _owner: L
      }, (z !== void 0 ? z : null) !== null ? Object.defineProperty(v, "ref", {
        enumerable: !1,
        get: l
      }) : Object.defineProperty(v, "ref", { enumerable: !1, value: null }), v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(v, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(v, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: ot
      }), Object.defineProperty(v, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: Z
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    }
    function c(v, E, z, D, L, $, ot, Z) {
      var ie = E.children;
      if (ie !== void 0)
        if (D)
          if (V(ie)) {
            for (D = 0; D < ie.length; D++)
              d(ie[D]);
            Object.freeze && Object.freeze(ie);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else d(ie);
      if (I.call(E, "key")) {
        ie = s(v);
        var Pe = Object.keys(E).filter(function(wt) {
          return wt !== "key";
        });
        D = 0 < Pe.length ? "{key: someKey, " + Pe.join(": ..., ") + ": ...}" : "{key: someKey}", Ce[ie + D] || (Pe = 0 < Pe.length ? "{" + Pe.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          D,
          ie,
          Pe,
          ie
        ), Ce[ie + D] = !0);
      }
      if (ie = null, z !== void 0 && (t(z), ie = "" + z), o(E) && (t(E.key), ie = "" + E.key), "key" in E) {
        z = {};
        for (var Fe in E)
          Fe !== "key" && (z[Fe] = E[Fe]);
      } else z = E;
      return ie && a(
        z,
        typeof v == "function" ? v.displayName || v.name || "Unknown" : v
      ), u(
        v,
        ie,
        $,
        L,
        i(),
        z,
        ot,
        Z
      );
    }
    function d(v) {
      typeof v == "object" && v !== null && v.$$typeof === _ && v._store && (v._store.validated = 1);
    }
    var h = it, _ = Symbol.for("react.transitional.element"), p = Symbol.for("react.portal"), f = Symbol.for("react.fragment"), m = Symbol.for("react.strict_mode"), y = Symbol.for("react.profiler"), x = Symbol.for("react.consumer"), T = Symbol.for("react.context"), k = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), S = Symbol.for("react.suspense_list"), P = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), w = Symbol.for("react.activity"), A = Symbol.for("react.client.reference"), j = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, I = Object.prototype.hasOwnProperty, V = Array.isArray, q = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(v) {
        return v();
      }
    };
    var U, F = {}, Y = h.react_stack_bottom_frame.bind(
      h,
      n
    )(), R = q(r(n)), Ce = {};
    Tt.Fragment = f, Tt.jsx = function(v, E, z, D, L) {
      var $ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        v,
        E,
        z,
        !1,
        D,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? q(r(v)) : R
      );
    }, Tt.jsxs = function(v, E, z, D, L) {
      var $ = 1e4 > j.recentlyCreatedOwnerStacks++;
      return c(
        v,
        E,
        z,
        !0,
        D,
        L,
        $ ? Error("react-stack-top-frame") : Y,
        $ ? q(r(v)) : R
      );
    };
  })()), Tt;
}
var ri;
function Gn() {
  return ri || (ri = 1, process.env.NODE_ENV === "production" ? Ut.exports = Un() : Ut.exports = Bn()), Ut.exports;
}
var W = Gn();
function ii(s, e) {
  if (typeof s == "function")
    return s(e);
  s != null && (s.current = e);
}
function Wn(...s) {
  return (e) => {
    let t = !1;
    const r = s.map((i) => {
      const n = ii(i, e);
      return !t && typeof n == "function" && (t = !0), n;
    });
    if (t)
      return () => {
        for (let i = 0; i < r.length; i++) {
          const n = r[i];
          typeof n == "function" ? n() : ii(s[i], null);
        }
      };
  };
}
// @__NO_SIDE_EFFECTS__
function qn(s) {
  const e = /* @__PURE__ */ Xn(s), t = ce.forwardRef((r, i) => {
    const { children: n, ...o } = r, a = ce.Children.toArray(n), l = a.find(Hn);
    if (l) {
      const u = l.props.children, c = a.map((d) => d === l ? ce.Children.count(u) > 1 ? ce.Children.only(null) : ce.isValidElement(u) ? u.props.children : null : d);
      return /* @__PURE__ */ W.jsx(e, { ...o, ref: i, children: ce.isValidElement(u) ? ce.cloneElement(u, void 0, c) : null });
    }
    return /* @__PURE__ */ W.jsx(e, { ...o, ref: i, children: n });
  });
  return t.displayName = `${s}.Slot`, t;
}
var Dr = /* @__PURE__ */ qn("Slot");
// @__NO_SIDE_EFFECTS__
function Xn(s) {
  const e = ce.forwardRef((t, r) => {
    const { children: i, ...n } = t;
    if (ce.isValidElement(i)) {
      const o = Zn(i), a = Jn(n, i.props);
      return i.type !== ce.Fragment && (a.ref = r ? Wn(r, o) : o), ce.cloneElement(i, a);
    }
    return ce.Children.count(i) > 1 ? ce.Children.only(null) : null;
  });
  return e.displayName = `${s}.SlotClone`, e;
}
var $n = Symbol("radix.slottable");
function Hn(s) {
  return ce.isValidElement(s) && typeof s.type == "function" && "__radixId" in s.type && s.type.__radixId === $n;
}
function Jn(s, e) {
  const t = { ...e };
  for (const r in e) {
    const i = s[r], n = e[r];
    /^on[A-Z]/.test(r) ? i && n ? t[r] = (...a) => {
      const l = n(...a);
      return i(...a), l;
    } : i && (t[r] = i) : r === "style" ? t[r] = { ...i, ...n } : r === "className" && (t[r] = [i, n].filter(Boolean).join(" "));
  }
  return { ...s, ...t };
}
function Zn(s) {
  let e = Object.getOwnPropertyDescriptor(s.props, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning;
  return t ? s.ref : (e = Object.getOwnPropertyDescriptor(s, "ref")?.get, t = e && "isReactWarning" in e && e.isReactWarning, t ? s.props.ref : s.props.ref || s.ref);
}
function Oi(s) {
  var e, t, r = "";
  if (typeof s == "string" || typeof s == "number") r += s;
  else if (typeof s == "object") if (Array.isArray(s)) {
    var i = s.length;
    for (e = 0; e < i; e++) s[e] && (t = Oi(s[e])) && (r && (r += " "), r += t);
  } else for (t in s) s[t] && (r && (r += " "), r += t);
  return r;
}
function Ri() {
  for (var s, e, t = 0, r = "", i = arguments.length; t < i; t++) (s = arguments[t]) && (e = Oi(s)) && (r && (r += " "), r += e);
  return r;
}
const ni = (s) => typeof s == "boolean" ? `${s}` : s === 0 ? "0" : s, si = Ri, jt = (s, e) => (t) => {
  var r;
  if (e?.variants == null) return si(s, t?.class, t?.className);
  const { variants: i, defaultVariants: n } = e, o = Object.keys(i).map((u) => {
    const c = t?.[u], d = n?.[u];
    if (c === null) return null;
    const h = ni(c) || ni(d);
    return i[u][h];
  }), a = t && Object.entries(t).reduce((u, c) => {
    let [d, h] = c;
    return h === void 0 || (u[d] = h), u;
  }, {}), l = e == null || (r = e.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((u, c) => {
    let { class: d, className: h, ..._ } = c;
    return Object.entries(_).every((p) => {
      let [f, m] = p;
      return Array.isArray(m) ? m.includes({
        ...n,
        ...a
      }[f]) : {
        ...n,
        ...a
      }[f] === m;
    }) ? [
      ...u,
      d,
      h
    ] : u;
  }, []);
  return si(s, o, l, t?.class, t?.className);
}, Nr = "-", Qn = (s) => {
  const e = es(s), {
    conflictingClassGroups: t,
    conflictingClassGroupModifiers: r
  } = s;
  return {
    getClassGroupId: (o) => {
      const a = o.split(Nr);
      return a[0] === "" && a.length !== 1 && a.shift(), Ei(a, e) || Kn(o);
    },
    getConflictingClassGroupIds: (o, a) => {
      const l = t[o] || [];
      return a && r[o] ? [...l, ...r[o]] : l;
    }
  };
}, Ei = (s, e) => {
  if (s.length === 0)
    return e.classGroupId;
  const t = s[0], r = e.nextPart.get(t), i = r ? Ei(s.slice(1), r) : void 0;
  if (i)
    return i;
  if (e.validators.length === 0)
    return;
  const n = s.join(Nr);
  return e.validators.find(({
    validator: o
  }) => o(n))?.classGroupId;
}, oi = /^\[(.+)\]$/, Kn = (s) => {
  if (oi.test(s)) {
    const e = oi.exec(s)[1], t = e?.substring(0, e.indexOf(":"));
    if (t)
      return "arbitrary.." + t;
  }
}, es = (s) => {
  const {
    theme: e,
    classGroups: t
  } = s, r = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  for (const i in t)
    pr(t[i], r, i, e);
  return r;
}, pr = (s, e, t, r) => {
  s.forEach((i) => {
    if (typeof i == "string") {
      const n = i === "" ? e : ai(e, i);
      n.classGroupId = t;
      return;
    }
    if (typeof i == "function") {
      if (ts(i)) {
        pr(i(r), e, t, r);
        return;
      }
      e.validators.push({
        validator: i,
        classGroupId: t
      });
      return;
    }
    Object.entries(i).forEach(([n, o]) => {
      pr(o, ai(e, n), t, r);
    });
  });
}, ai = (s, e) => {
  let t = s;
  return e.split(Nr).forEach((r) => {
    t.nextPart.has(r) || t.nextPart.set(r, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), t = t.nextPart.get(r);
  }), t;
}, ts = (s) => s.isThemeGetter, rs = (s) => {
  if (s < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let e = 0, t = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
  const i = (n, o) => {
    t.set(n, o), e++, e > s && (e = 0, r = t, t = /* @__PURE__ */ new Map());
  };
  return {
    get(n) {
      let o = t.get(n);
      if (o !== void 0)
        return o;
      if ((o = r.get(n)) !== void 0)
        return i(n, o), o;
    },
    set(n, o) {
      t.has(n) ? t.set(n, o) : i(n, o);
    }
  };
}, mr = "!", gr = ":", is = gr.length, ns = (s) => {
  const {
    prefix: e,
    experimentalParseClassName: t
  } = s;
  let r = (i) => {
    const n = [];
    let o = 0, a = 0, l = 0, u;
    for (let p = 0; p < i.length; p++) {
      let f = i[p];
      if (o === 0 && a === 0) {
        if (f === gr) {
          n.push(i.slice(l, p)), l = p + is;
          continue;
        }
        if (f === "/") {
          u = p;
          continue;
        }
      }
      f === "[" ? o++ : f === "]" ? o-- : f === "(" ? a++ : f === ")" && a--;
    }
    const c = n.length === 0 ? i : i.substring(l), d = ss(c), h = d !== c, _ = u && u > l ? u - l : void 0;
    return {
      modifiers: n,
      hasImportantModifier: h,
      baseClassName: d,
      maybePostfixModifierPosition: _
    };
  };
  if (e) {
    const i = e + gr, n = r;
    r = (o) => o.startsWith(i) ? n(o.substring(i.length)) : {
      isExternal: !0,
      modifiers: [],
      hasImportantModifier: !1,
      baseClassName: o,
      maybePostfixModifierPosition: void 0
    };
  }
  if (t) {
    const i = r;
    r = (n) => t({
      className: n,
      parseClassName: i
    });
  }
  return r;
}, ss = (s) => s.endsWith(mr) ? s.substring(0, s.length - 1) : s.startsWith(mr) ? s.substring(1) : s, os = (s) => {
  const e = Object.fromEntries(s.orderSensitiveModifiers.map((r) => [r, !0]));
  return (r) => {
    if (r.length <= 1)
      return r;
    const i = [];
    let n = [];
    return r.forEach((o) => {
      o[0] === "[" || e[o] ? (i.push(...n.sort(), o), n = []) : n.push(o);
    }), i.push(...n.sort()), i;
  };
}, as = (s) => ({
  cache: rs(s.cacheSize),
  parseClassName: ns(s),
  sortModifiers: os(s),
  ...Qn(s)
}), ls = /\s+/, us = (s, e) => {
  const {
    parseClassName: t,
    getClassGroupId: r,
    getConflictingClassGroupIds: i,
    sortModifiers: n
  } = e, o = [], a = s.trim().split(ls);
  let l = "";
  for (let u = a.length - 1; u >= 0; u -= 1) {
    const c = a[u], {
      isExternal: d,
      modifiers: h,
      hasImportantModifier: _,
      baseClassName: p,
      maybePostfixModifierPosition: f
    } = t(c);
    if (d) {
      l = c + (l.length > 0 ? " " + l : l);
      continue;
    }
    let m = !!f, y = r(m ? p.substring(0, f) : p);
    if (!y) {
      if (!m) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      if (y = r(p), !y) {
        l = c + (l.length > 0 ? " " + l : l);
        continue;
      }
      m = !1;
    }
    const x = n(h).join(":"), T = _ ? x + mr : x, k = T + y;
    if (o.includes(k))
      continue;
    o.push(k);
    const g = i(y, m);
    for (let S = 0; S < g.length; ++S) {
      const P = g[S];
      o.push(T + P);
    }
    l = c + (l.length > 0 ? " " + l : l);
  }
  return l;
};
function cs() {
  let s = 0, e, t, r = "";
  for (; s < arguments.length; )
    (e = arguments[s++]) && (t = Mi(e)) && (r && (r += " "), r += t);
  return r;
}
const Mi = (s) => {
  if (typeof s == "string")
    return s;
  let e, t = "";
  for (let r = 0; r < s.length; r++)
    s[r] && (e = Mi(s[r])) && (t && (t += " "), t += e);
  return t;
};
function fs(s, ...e) {
  let t, r, i, n = o;
  function o(l) {
    const u = e.reduce((c, d) => d(c), s());
    return t = as(u), r = t.cache.get, i = t.cache.set, n = a, a(l);
  }
  function a(l) {
    const u = r(l);
    if (u)
      return u;
    const c = us(l, t);
    return i(l, c), c;
  }
  return function() {
    return n(cs.apply(null, arguments));
  };
}
const ne = (s) => {
  const e = (t) => t[s] || [];
  return e.isThemeGetter = !0, e;
}, Ai = /^\[(?:(\w[\w-]*):)?(.+)\]$/i, zi = /^\((?:(\w[\w-]*):)?(.+)\)$/i, ds = /^\d+\/\d+$/, hs = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, _s = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, ps = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/, ms = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gs = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/, at = (s) => ds.test(s), M = (s) => !!s && !Number.isNaN(Number(s)), Le = (s) => !!s && Number.isInteger(Number(s)), sr = (s) => s.endsWith("%") && M(s.slice(0, -1)), Ae = (s) => hs.test(s), bs = () => !0, ys = (s) => (
  // `colorFunctionRegex` check is necessary because color functions can have percentages in them which which would be incorrectly classified as lengths.
  // For example, `hsl(0 0% 0%)` would be classified as a length without this check.
  // I could also use lookbehind assertion in `lengthUnitRegex` but that isn't supported widely enough.
  _s.test(s) && !ps.test(s)
), Di = () => !1, xs = (s) => ms.test(s), vs = (s) => gs.test(s), ws = (s) => !C(s) && !O(s), ks = (s) => xt(s, Fi, Di), C = (s) => Ai.test(s), Xe = (s) => xt(s, Li, ys), or = (s) => xt(s, Os, M), li = (s) => xt(s, Ni, Di), Ts = (s) => xt(s, Ii, vs), Bt = (s) => xt(s, ji, xs), O = (s) => zi.test(s), St = (s) => vt(s, Li), Ss = (s) => vt(s, Rs), ui = (s) => vt(s, Ni), Ps = (s) => vt(s, Fi), Cs = (s) => vt(s, Ii), Gt = (s) => vt(s, ji, !0), xt = (s, e, t) => {
  const r = Ai.exec(s);
  return r ? r[1] ? e(r[1]) : t(r[2]) : !1;
}, vt = (s, e, t = !1) => {
  const r = zi.exec(s);
  return r ? r[1] ? e(r[1]) : t : !1;
}, Ni = (s) => s === "position" || s === "percentage", Ii = (s) => s === "image" || s === "url", Fi = (s) => s === "length" || s === "size" || s === "bg-size", Li = (s) => s === "length", Os = (s) => s === "number", Rs = (s) => s === "family-name", ji = (s) => s === "shadow", Es = () => {
  const s = ne("color"), e = ne("font"), t = ne("text"), r = ne("font-weight"), i = ne("tracking"), n = ne("leading"), o = ne("breakpoint"), a = ne("container"), l = ne("spacing"), u = ne("radius"), c = ne("shadow"), d = ne("inset-shadow"), h = ne("text-shadow"), _ = ne("drop-shadow"), p = ne("blur"), f = ne("perspective"), m = ne("aspect"), y = ne("ease"), x = ne("animate"), T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], k = () => [
    "center",
    "top",
    "bottom",
    "left",
    "right",
    "top-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-top",
    "top-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-top",
    "bottom-right",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "right-bottom",
    "bottom-left",
    // Deprecated since Tailwind CSS v4.1.0, see https://github.com/tailwindlabs/tailwindcss/pull/17378
    "left-bottom"
  ], g = () => [...k(), O, C], S = () => ["auto", "hidden", "clip", "visible", "scroll"], P = () => ["auto", "contain", "none"], b = () => [O, C, l], w = () => [at, "full", "auto", ...b()], A = () => [Le, "none", "subgrid", O, C], j = () => ["auto", {
    span: ["full", Le, O, C]
  }, Le, O, C], I = () => [Le, "auto", O, C], V = () => ["auto", "min", "max", "fr", O, C], q = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"], U = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"], F = () => ["auto", ...b()], Y = () => [at, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...b()], R = () => [s, O, C], Ce = () => [...k(), ui, li, {
    position: [O, C]
  }], v = () => ["no-repeat", {
    repeat: ["", "x", "y", "space", "round"]
  }], E = () => ["auto", "cover", "contain", Ps, ks, {
    size: [O, C]
  }], z = () => [sr, St, Xe], D = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    "full",
    u,
    O,
    C
  ], L = () => ["", M, St, Xe], $ = () => ["solid", "dashed", "dotted", "double"], ot = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"], Z = () => [M, sr, ui, li], ie = () => [
    // Deprecated since Tailwind CSS v4.0.0
    "",
    "none",
    p,
    O,
    C
  ], Pe = () => ["none", M, O, C], Fe = () => ["none", M, O, C], wt = () => [M, O, C], Yt = () => [at, "full", ...b()];
  return {
    cacheSize: 500,
    theme: {
      animate: ["spin", "ping", "pulse", "bounce"],
      aspect: ["video"],
      blur: [Ae],
      breakpoint: [Ae],
      color: [bs],
      container: [Ae],
      "drop-shadow": [Ae],
      ease: ["in", "out", "in-out"],
      font: [ws],
      "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      "inset-shadow": [Ae],
      leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
      radius: [Ae],
      shadow: [Ae],
      spacing: ["px", M],
      text: [Ae],
      "text-shadow": [Ae],
      tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
    },
    classGroups: {
      // --------------
      // --- Layout ---
      // --------------
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", at, C, O, m]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       * @deprecated since Tailwind CSS v4.0.0
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [M, C, O, a]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Screen Reader Only
       * @see https://tailwindcss.com/docs/display#screen-reader-only
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: g()
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: S()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": S()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": S()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: P()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": P()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": P()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: w()
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": w()
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": w()
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: w()
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: w()
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: w()
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: w()
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: w()
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: w()
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: [Le, "auto", O, C]
      }],
      // ------------------------
      // --- Flexbox and Grid ---
      // ------------------------
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: [at, "full", "auto", a, ...b()]
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["nowrap", "wrap", "wrap-reverse"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: [M, at, "auto", "initial", "none", C]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: ["", M, O, C]
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: ["", M, O, C]
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: [Le, "first", "last", "none", O, C]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": A()
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: j()
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": I()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": I()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": A()
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: j()
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": I()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": I()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": V()
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": V()
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: b()
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": b()
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": b()
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: [...q(), "normal"]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": [...U(), "normal"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", ...U()]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...q()]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: [...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", ...U(), {
          baseline: ["", "last"]
        }]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": q()
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": [...U(), "baseline"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", ...U()]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: b()
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: b()
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: b()
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: b()
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: b()
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: b()
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: b()
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: b()
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: b()
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: F()
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: F()
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: F()
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: F()
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: F()
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: F()
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: F()
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: F()
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: F()
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x": [{
        "space-x": b()
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y": [{
        "space-y": b()
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/margin#adding-space-between-children
       */
      "space-y-reverse": ["space-y-reverse"],
      // --------------
      // --- Sizing ---
      // --------------
      /**
       * Size
       * @see https://tailwindcss.com/docs/width#setting-both-width-and-height
       */
      size: [{
        size: Y()
      }],
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: [a, "screen", ...Y()]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [
          a,
          "screen",
          /** Deprecated. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "none",
          ...Y()
        ]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [
          a,
          "screen",
          "none",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          "prose",
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          {
            screen: [o]
          },
          ...Y()
        ]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: ["screen", "lh", ...Y()]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": ["screen", "lh", "none", ...Y()]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": ["screen", "lh", ...Y()]
      }],
      // ------------------
      // --- Typography ---
      // ------------------
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", t, St, Xe]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: [r, O, or]
      }],
      /**
       * Font Stretch
       * @see https://tailwindcss.com/docs/font-stretch
       */
      "font-stretch": [{
        "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", sr, C]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Ss, C, e]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: [i, O, C]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": [M, "none", O, or]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: [
          /** Deprecated since Tailwind CSS v4.0.0. @see https://github.com/tailwindlabs/tailwindcss.com/issues/2027#issuecomment-2620152757 */
          n,
          ...b()
        ]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", O, C]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["disc", "decimal", "none", O, C]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://v3.tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: R()
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: R()
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...$(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: [M, "from-font", "auto", O, Xe]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: R()
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": [M, "auto", O, C]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: b()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", O, C]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Overflow Wrap
       * @see https://tailwindcss.com/docs/overflow-wrap
       */
      wrap: [{
        wrap: ["break-word", "anywhere", "normal"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", O, C]
      }],
      // -------------------
      // --- Backgrounds ---
      // -------------------
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: Ce()
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: v()
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: E()
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          linear: [{
            to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
          }, Le, O, C],
          radial: ["", O, C],
          conic: [Le, O, C]
        }, Cs, Ts]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: R()
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: z()
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: z()
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: z()
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: R()
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: R()
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: R()
      }],
      // ---------------
      // --- Borders ---
      // ---------------
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: D()
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": D()
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": D()
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": D()
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": D()
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": D()
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": D()
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": D()
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": D()
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": D()
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": D()
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": D()
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": D()
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": D()
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": D()
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: L()
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": L()
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": L()
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": L()
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": L()
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": L()
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": L()
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": L()
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": L()
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x": [{
        "divide-x": L()
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y": [{
        "divide-y": L()
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/border-width#between-children
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...$(), "hidden", "none"]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/border-style#setting-the-divider-style
       */
      "divide-style": [{
        divide: [...$(), "hidden", "none"]
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: R()
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": R()
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": R()
      }],
      /**
       * Border Color S
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-s": [{
        "border-s": R()
      }],
      /**
       * Border Color E
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-e": [{
        "border-e": R()
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": R()
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": R()
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": R()
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": R()
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: R()
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: [...$(), "none", "hidden"]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [M, O, C]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: ["", M, St, Xe]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: R()
      }],
      // ---------------
      // --- Effects ---
      // ---------------
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          c,
          Gt,
          Bt
        ]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-shadow-color
       */
      "shadow-color": [{
        shadow: R()
      }],
      /**
       * Inset Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-shadow
       */
      "inset-shadow": [{
        "inset-shadow": ["none", d, Gt, Bt]
      }],
      /**
       * Inset Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-shadow-color
       */
      "inset-shadow-color": [{
        "inset-shadow": R()
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-a-ring
       */
      "ring-w": [{
        ring: L()
      }],
      /**
       * Ring Width Inset
       * @see https://v3.tailwindcss.com/docs/ring-width#inset-rings
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-ring-color
       */
      "ring-color": [{
        ring: R()
      }],
      /**
       * Ring Offset Width
       * @see https://v3.tailwindcss.com/docs/ring-offset-width
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-w": [{
        "ring-offset": [M, Xe]
      }],
      /**
       * Ring Offset Color
       * @see https://v3.tailwindcss.com/docs/ring-offset-color
       * @deprecated since Tailwind CSS v4.0.0
       * @see https://github.com/tailwindlabs/tailwindcss/blob/v4.0.0/packages/tailwindcss/src/utilities.ts#L4158
       */
      "ring-offset-color": [{
        "ring-offset": R()
      }],
      /**
       * Inset Ring Width
       * @see https://tailwindcss.com/docs/box-shadow#adding-an-inset-ring
       */
      "inset-ring-w": [{
        "inset-ring": L()
      }],
      /**
       * Inset Ring Color
       * @see https://tailwindcss.com/docs/box-shadow#setting-the-inset-ring-color
       */
      "inset-ring-color": [{
        "inset-ring": R()
      }],
      /**
       * Text Shadow
       * @see https://tailwindcss.com/docs/text-shadow
       */
      "text-shadow": [{
        "text-shadow": ["none", h, Gt, Bt]
      }],
      /**
       * Text Shadow Color
       * @see https://tailwindcss.com/docs/text-shadow#setting-the-shadow-color
       */
      "text-shadow-color": [{
        "text-shadow": R()
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [M, O, C]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": [...ot(), "plus-darker", "plus-lighter"]
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ot()
      }],
      /**
       * Mask Clip
       * @see https://tailwindcss.com/docs/mask-clip
       */
      "mask-clip": [{
        "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
      }, "mask-no-clip"],
      /**
       * Mask Composite
       * @see https://tailwindcss.com/docs/mask-composite
       */
      "mask-composite": [{
        mask: ["add", "subtract", "intersect", "exclude"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image-linear-pos": [{
        "mask-linear": [M]
      }],
      "mask-image-linear-from-pos": [{
        "mask-linear-from": Z()
      }],
      "mask-image-linear-to-pos": [{
        "mask-linear-to": Z()
      }],
      "mask-image-linear-from-color": [{
        "mask-linear-from": R()
      }],
      "mask-image-linear-to-color": [{
        "mask-linear-to": R()
      }],
      "mask-image-t-from-pos": [{
        "mask-t-from": Z()
      }],
      "mask-image-t-to-pos": [{
        "mask-t-to": Z()
      }],
      "mask-image-t-from-color": [{
        "mask-t-from": R()
      }],
      "mask-image-t-to-color": [{
        "mask-t-to": R()
      }],
      "mask-image-r-from-pos": [{
        "mask-r-from": Z()
      }],
      "mask-image-r-to-pos": [{
        "mask-r-to": Z()
      }],
      "mask-image-r-from-color": [{
        "mask-r-from": R()
      }],
      "mask-image-r-to-color": [{
        "mask-r-to": R()
      }],
      "mask-image-b-from-pos": [{
        "mask-b-from": Z()
      }],
      "mask-image-b-to-pos": [{
        "mask-b-to": Z()
      }],
      "mask-image-b-from-color": [{
        "mask-b-from": R()
      }],
      "mask-image-b-to-color": [{
        "mask-b-to": R()
      }],
      "mask-image-l-from-pos": [{
        "mask-l-from": Z()
      }],
      "mask-image-l-to-pos": [{
        "mask-l-to": Z()
      }],
      "mask-image-l-from-color": [{
        "mask-l-from": R()
      }],
      "mask-image-l-to-color": [{
        "mask-l-to": R()
      }],
      "mask-image-x-from-pos": [{
        "mask-x-from": Z()
      }],
      "mask-image-x-to-pos": [{
        "mask-x-to": Z()
      }],
      "mask-image-x-from-color": [{
        "mask-x-from": R()
      }],
      "mask-image-x-to-color": [{
        "mask-x-to": R()
      }],
      "mask-image-y-from-pos": [{
        "mask-y-from": Z()
      }],
      "mask-image-y-to-pos": [{
        "mask-y-to": Z()
      }],
      "mask-image-y-from-color": [{
        "mask-y-from": R()
      }],
      "mask-image-y-to-color": [{
        "mask-y-to": R()
      }],
      "mask-image-radial": [{
        "mask-radial": [O, C]
      }],
      "mask-image-radial-from-pos": [{
        "mask-radial-from": Z()
      }],
      "mask-image-radial-to-pos": [{
        "mask-radial-to": Z()
      }],
      "mask-image-radial-from-color": [{
        "mask-radial-from": R()
      }],
      "mask-image-radial-to-color": [{
        "mask-radial-to": R()
      }],
      "mask-image-radial-shape": [{
        "mask-radial": ["circle", "ellipse"]
      }],
      "mask-image-radial-size": [{
        "mask-radial": [{
          closest: ["side", "corner"],
          farthest: ["side", "corner"]
        }]
      }],
      "mask-image-radial-pos": [{
        "mask-radial-at": k()
      }],
      "mask-image-conic-pos": [{
        "mask-conic": [M]
      }],
      "mask-image-conic-from-pos": [{
        "mask-conic-from": Z()
      }],
      "mask-image-conic-to-pos": [{
        "mask-conic-to": Z()
      }],
      "mask-image-conic-from-color": [{
        "mask-conic-from": R()
      }],
      "mask-image-conic-to-color": [{
        "mask-conic-to": R()
      }],
      /**
       * Mask Mode
       * @see https://tailwindcss.com/docs/mask-mode
       */
      "mask-mode": [{
        mask: ["alpha", "luminance", "match"]
      }],
      /**
       * Mask Origin
       * @see https://tailwindcss.com/docs/mask-origin
       */
      "mask-origin": [{
        "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
      }],
      /**
       * Mask Position
       * @see https://tailwindcss.com/docs/mask-position
       */
      "mask-position": [{
        mask: Ce()
      }],
      /**
       * Mask Repeat
       * @see https://tailwindcss.com/docs/mask-repeat
       */
      "mask-repeat": [{
        mask: v()
      }],
      /**
       * Mask Size
       * @see https://tailwindcss.com/docs/mask-size
       */
      "mask-size": [{
        mask: E()
      }],
      /**
       * Mask Type
       * @see https://tailwindcss.com/docs/mask-type
       */
      "mask-type": [{
        "mask-type": ["alpha", "luminance"]
      }],
      /**
       * Mask Image
       * @see https://tailwindcss.com/docs/mask-image
       */
      "mask-image": [{
        mask: ["none", O, C]
      }],
      // ---------------
      // --- Filters ---
      // ---------------
      /**
       * Filter
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          C
        ]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: ie()
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [M, O, C]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [M, O, C]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": [
          // Deprecated since Tailwind CSS v4.0.0
          "",
          "none",
          _,
          Gt,
          Bt
        ]
      }],
      /**
       * Drop Shadow Color
       * @see https://tailwindcss.com/docs/filter-drop-shadow#setting-the-shadow-color
       */
      "drop-shadow-color": [{
        "drop-shadow": R()
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: ["", M, O, C]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [M, O, C]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: ["", M, O, C]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [M, O, C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: ["", M, O, C]
      }],
      /**
       * Backdrop Filter
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": [
          // Deprecated since Tailwind CSS v3.0.0
          "",
          "none",
          O,
          C
        ]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": ie()
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [M, O, C]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [M, O, C]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": ["", M, O, C]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [M, O, C]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": ["", M, O, C]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [M, O, C]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [M, O, C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": ["", M, O, C]
      }],
      // --------------
      // --- Tables ---
      // --------------
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": b()
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": b()
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": b()
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // ---------------------------------
      // --- Transitions and Animation ---
      // ---------------------------------
      /**
       * Transition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", O, C]
      }],
      /**
       * Transition Behavior
       * @see https://tailwindcss.com/docs/transition-behavior
       */
      "transition-behavior": [{
        transition: ["normal", "discrete"]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: [M, "initial", O, C]
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "initial", y, O, C]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: [M, O, C]
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", x, O, C]
      }],
      // ------------------
      // --- Transforms ---
      // ------------------
      /**
       * Backface Visibility
       * @see https://tailwindcss.com/docs/backface-visibility
       */
      backface: [{
        backface: ["hidden", "visible"]
      }],
      /**
       * Perspective
       * @see https://tailwindcss.com/docs/perspective
       */
      perspective: [{
        perspective: [f, O, C]
      }],
      /**
       * Perspective Origin
       * @see https://tailwindcss.com/docs/perspective-origin
       */
      "perspective-origin": [{
        "perspective-origin": g()
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: Pe()
      }],
      /**
       * Rotate X
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-x": [{
        "rotate-x": Pe()
      }],
      /**
       * Rotate Y
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-y": [{
        "rotate-y": Pe()
      }],
      /**
       * Rotate Z
       * @see https://tailwindcss.com/docs/rotate
       */
      "rotate-z": [{
        "rotate-z": Pe()
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: Fe()
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": Fe()
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": Fe()
      }],
      /**
       * Scale Z
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-z": [{
        "scale-z": Fe()
      }],
      /**
       * Scale 3D
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-3d": ["scale-3d"],
      /**
       * Skew
       * @see https://tailwindcss.com/docs/skew
       */
      skew: [{
        skew: wt()
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": wt()
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": wt()
      }],
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: [O, C, "", "none", "gpu", "cpu"]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: g()
      }],
      /**
       * Transform Style
       * @see https://tailwindcss.com/docs/transform-style
       */
      "transform-style": [{
        transform: ["3d", "flat"]
      }],
      /**
       * Translate
       * @see https://tailwindcss.com/docs/translate
       */
      translate: [{
        translate: Yt()
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": Yt()
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": Yt()
      }],
      /**
       * Translate Z
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-z": [{
        "translate-z": Yt()
      }],
      /**
       * Translate None
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-none": ["translate-none"],
      // ---------------------
      // --- Interactivity ---
      // ---------------------
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: R()
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: R()
      }],
      /**
       * Color Scheme
       * @see https://tailwindcss.com/docs/color-scheme
       */
      "color-scheme": [{
        scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", O, C]
      }],
      /**
       * Field Sizing
       * @see https://tailwindcss.com/docs/field-sizing
       */
      "field-sizing": [{
        "field-sizing": ["fixed", "content"]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["auto", "none"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "", "y", "x"]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": b()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": b()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": b()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": b()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": b()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": b()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": b()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": b()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": b()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": b()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": b()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": b()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": b()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": b()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": b()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": b()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": b()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": b()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", O, C]
      }],
      // -----------
      // --- SVG ---
      // -----------
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: ["none", ...R()]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [M, St, Xe, or]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: ["none", ...R()]
      }],
      // ---------------------
      // --- Accessibility ---
      // ---------------------
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      translate: ["translate-x", "translate-y", "translate-none"],
      "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    },
    orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
  };
}, Ms = /* @__PURE__ */ fs(Es);
function Qe(...s) {
  return Ms(Ri(s));
}
function ze(s) {
  if (s === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return s;
}
function Vi(s, e) {
  s.prototype = Object.create(e.prototype), s.prototype.constructor = s, s.__proto__ = e;
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var ye = {
  autoSleep: 120,
  force3D: "auto",
  nullTargetWarn: 1,
  units: {
    lineHeight: ""
  }
}, _t = {
  duration: 0.5,
  overwrite: !1,
  delay: 0
}, Ir, oe, X, ke = 1e8, G = 1 / ke, br = Math.PI * 2, As = br / 4, zs = 0, Yi = Math.sqrt, Ds = Math.cos, Ns = Math.sin, se = function(e) {
  return typeof e == "string";
}, Q = function(e) {
  return typeof e == "function";
}, Ne = function(e) {
  return typeof e == "number";
}, Fr = function(e) {
  return typeof e > "u";
}, Me = function(e) {
  return typeof e == "object";
}, fe = function(e) {
  return e !== !1;
}, Lr = function() {
  return typeof window < "u";
}, Wt = function(e) {
  return Q(e) || se(e);
}, Ui = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {
}, le = Array.isArray, yr = /(?:-?\.?\d|\.)+/gi, Bi = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, ut = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ar = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, Gi = /[+-]=-?[.\d]+/, Wi = /[^,'"\[\]\s]+/gi, Is = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, H, Oe, xr, jr, xe = {}, Ht = {}, qi, Xi = function(e) {
  return (Ht = pt(e, xe)) && pe;
}, Vr = function(e, t) {
  return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()");
}, At = function(e, t) {
  return !t && console.warn(e);
}, $i = function(e, t) {
  return e && (xe[e] = t) && Ht && (Ht[e] = t) || xe;
}, zt = function() {
  return 0;
}, Fs = {
  suppressEvents: !0,
  isStart: !0,
  kill: !1
}, qt = {
  suppressEvents: !0,
  kill: !1
}, Ls = {
  suppressEvents: !0
}, Yr = {}, Ue = [], vr = {}, Hi, me = {}, lr = {}, ci = 30, Xt = [], Ur = "", Br = function(e) {
  var t = e[0], r, i;
  if (Me(t) || Q(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
    for (i = Xt.length; i-- && !Xt[i].targetTest(t); )
      ;
    r = Xt[i];
  }
  for (i = e.length; i--; )
    e[i] && (e[i]._gsap || (e[i]._gsap = new xn(e[i], r))) || e.splice(i, 1);
  return e;
}, Ke = function(e) {
  return e._gsap || Br(Te(e))[0]._gsap;
}, Ji = function(e, t, r) {
  return (r = e[t]) && Q(r) ? e[t]() : Fr(r) && e.getAttribute && e.getAttribute(t) || r;
}, de = function(e, t) {
  return (e = e.split(",")).forEach(t) || e;
}, ee = function(e) {
  return Math.round(e * 1e5) / 1e5 || 0;
}, re = function(e) {
  return Math.round(e * 1e7) / 1e7 || 0;
}, ft = function(e, t) {
  var r = t.charAt(0), i = parseFloat(t.substr(2));
  return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i;
}, js = function(e, t) {
  for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r; )
    ;
  return i < r;
}, Jt = function() {
  var e = Ue.length, t = Ue.slice(0), r, i;
  for (vr = {}, Ue.length = 0, r = 0; r < e; r++)
    i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0);
}, Gr = function(e) {
  return !!(e._initted || e._startAt || e.add);
}, Zi = function(e, t, r, i) {
  Ue.length && !oe && Jt(), e.render(t, r, !!(oe && t < 0 && Gr(e))), Ue.length && !oe && Jt();
}, Qi = function(e) {
  var t = parseFloat(e);
  return (t || t === 0) && (e + "").match(Wi).length < 2 ? t : se(e) ? e.trim() : e;
}, Ki = function(e) {
  return e;
}, ve = function(e, t) {
  for (var r in t)
    r in e || (e[r] = t[r]);
  return e;
}, Vs = function(e) {
  return function(t, r) {
    for (var i in r)
      i in t || i === "duration" && e || i === "ease" || (t[i] = r[i]);
  };
}, pt = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, fi = function s(e, t) {
  for (var r in t)
    r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = Me(t[r]) ? s(e[r] || (e[r] = {}), t[r]) : t[r]);
  return e;
}, Zt = function(e, t) {
  var r = {}, i;
  for (i in e)
    i in t || (r[i] = e[i]);
  return r;
}, Rt = function(e) {
  var t = e.parent || H, r = e.keyframes ? Vs(le(e.keyframes)) : ve;
  if (fe(e.inherit))
    for (; t; )
      r(e, t.vars.defaults), t = t.parent || t._dp;
  return e;
}, Ys = function(e, t) {
  for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r]; )
    ;
  return r < 0;
}, en = function(e, t, r, i, n) {
  var o = e[i], a;
  if (n)
    for (a = t[n]; o && o[n] > a; )
      o = o._prev;
  return o ? (t._next = o._next, o._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = o, t.parent = t._dp = e, t;
}, rr = function(e, t, r, i) {
  r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
  var n = t._prev, o = t._next;
  n ? n._next = o : e[r] === t && (e[r] = o), o ? o._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null;
}, Ge = function(e, t) {
  e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove && e.parent.remove(e), e._act = 0;
}, et = function(e, t) {
  if (e && (!t || t._end > e._dur || t._start < 0))
    for (var r = e; r; )
      r._dirty = 1, r = r.parent;
  return e;
}, Us = function(e) {
  for (var t = e.parent; t && t.parent; )
    t._dirty = 1, t.totalDuration(), t = t.parent;
  return e;
}, wr = function(e, t, r, i) {
  return e._startAt && (oe ? e._startAt.revert(qt) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i));
}, Bs = function s(e) {
  return !e || e._ts && s(e.parent);
}, di = function(e) {
  return e._repeat ? mt(e._tTime, e = e.duration() + e._rDelay) * e : 0;
}, mt = function(e, t) {
  var r = Math.floor(e = re(e / t));
  return e && r === e ? r - 1 : r;
}, Qt = function(e, t) {
  return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur);
}, ir = function(e) {
  return e._end = re(e._start + (e._tDur / Math.abs(e._ts || e._rts || G) || 0));
}, nr = function(e, t) {
  var r = e._dp;
  return r && r.smoothChildTiming && e._ts && (e._start = re(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), ir(e), r._dirty || et(r, e)), e;
}, tn = function(e, t) {
  var r;
  if ((t._time || !t._dur && t._initted || t._start < e._time && (t._dur || !t.add)) && (r = Qt(e.rawTime(), t), (!t._dur || Vt(0, t.totalDuration(), r) - t._tTime > G) && t.render(r, !0)), et(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
    if (e._dur < e.duration())
      for (r = e; r._dp; )
        r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
    e._zTime = -G;
  }
}, Re = function(e, t, r, i) {
  return t.parent && Ge(t), t._start = re((Ne(r) ? r : r || e !== H ? we(e, r, t) : e._time) + t._delay), t._end = re(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), en(e, t, "_first", "_last", e._sort ? "_start" : 0), kr(t) || (e._recent = t), i || tn(e, t), e._ts < 0 && nr(e, e._tTime), e;
}, rn = function(e, t) {
  return (xe.ScrollTrigger || Vr("scrollTrigger", t)) && xe.ScrollTrigger.create(t, e);
}, nn = function(e, t, r, i, n) {
  if (qr(e, t, n), !e._initted)
    return 1;
  if (!r && e._pt && !oe && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && Hi !== ge.frame)
    return Ue.push(e), e._lazy = [n, i], 1;
}, Gs = function s(e) {
  var t = e.parent;
  return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
}, kr = function(e) {
  var t = e.data;
  return t === "isFromStart" || t === "isStart";
}, Ws = function(e, t, r, i) {
  var n = e.ratio, o = t < 0 || !t && (!e._start && Gs(e) && !(!e._initted && kr(e)) || (e._ts < 0 || e._dp._ts < 0) && !kr(e)) ? 0 : 1, a = e._rDelay, l = 0, u, c, d;
  if (a && e._repeat && (l = Vt(0, e._tDur, t), c = mt(l, a), e._yoyo && c & 1 && (o = 1 - o), c !== mt(e._tTime, a) && (n = 1 - o, e.vars.repeatRefresh && e._initted && e.invalidate())), o !== n || oe || i || e._zTime === G || !t && e._zTime) {
    if (!e._initted && nn(e, t, i, r, l))
      return;
    for (d = e._zTime, e._zTime = t || (r ? G : 0), r || (r = t && !d), e.ratio = o, e._from && (o = 1 - o), e._time = 0, e._tTime = l, u = e._pt; u; )
      u.r(o, u.d), u = u._next;
    t < 0 && wr(e, t, r, !0), e._onUpdate && !r && be(e, "onUpdate"), l && e._repeat && !r && e.parent && be(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === o && (o && Ge(e, 1), !r && !oe && (be(e, o ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()));
  } else e._zTime || (e._zTime = t);
}, qs = function(e, t, r) {
  var i;
  if (r > t)
    for (i = e._first; i && i._start <= r; ) {
      if (i.data === "isPause" && i._start > t)
        return i;
      i = i._next;
    }
  else
    for (i = e._last; i && i._start >= r; ) {
      if (i.data === "isPause" && i._start < t)
        return i;
      i = i._prev;
    }
}, gt = function(e, t, r, i) {
  var n = e._repeat, o = re(t) || 0, a = e._tTime / e._tDur;
  return a && !i && (e._time *= o / e._dur), e._dur = o, e._tDur = n ? n < 0 ? 1e10 : re(o * (n + 1) + e._rDelay * n) : o, a > 0 && !i && nr(e, e._tTime = e._tDur * a), e.parent && ir(e), r || et(e.parent, e), e;
}, hi = function(e) {
  return e instanceof ue ? et(e) : gt(e, e._dur);
}, Xs = {
  _start: 0,
  endTime: zt,
  totalDuration: zt
}, we = function s(e, t, r) {
  var i = e.labels, n = e._recent || Xs, o = e.duration() >= ke ? n.endTime(!1) : e._dur, a, l, u;
  return se(t) && (isNaN(t) || t in i) ? (l = t.charAt(0), u = t.substr(-1) === "%", a = t.indexOf("="), l === "<" || l === ">" ? (a >= 0 && (t = t.replace(/=/, "")), (l === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (u ? (a < 0 ? n : r).totalDuration() / 100 : 1)) : a < 0 ? (t in i || (i[t] = o), i[t]) : (l = parseFloat(t.charAt(a - 1) + t.substr(a + 1)), u && r && (l = l / 100 * (le(r) ? r[0] : r).totalDuration()), a > 1 ? s(e, t.substr(0, a - 1), r) + l : o + l)) : t == null ? o : +t;
}, Et = function(e, t, r) {
  var i = Ne(t[1]), n = (i ? 2 : 1) + (e < 2 ? 0 : 1), o = t[n], a, l;
  if (i && (o.duration = t[1]), o.parent = r, e) {
    for (a = o, l = r; l && !("immediateRender" in a); )
      a = l.vars.defaults || {}, l = fe(l.vars.inherit) && l.parent;
    o.immediateRender = fe(a.immediateRender), e < 2 ? o.runBackwards = 1 : o.startAt = t[n - 1];
  }
  return new te(t[0], o, t[n + 1]);
}, qe = function(e, t) {
  return e || e === 0 ? t(e) : t;
}, Vt = function(e, t, r) {
  return r < e ? e : r > t ? t : r;
}, ae = function(e, t) {
  return !se(e) || !(t = Is.exec(e)) ? "" : t[1];
}, $s = function(e, t, r) {
  return qe(r, function(i) {
    return Vt(e, t, i);
  });
}, Tr = [].slice, sn = function(e, t) {
  return e && Me(e) && "length" in e && (!t && !e.length || e.length - 1 in e && Me(e[0])) && !e.nodeType && e !== Oe;
}, Hs = function(e, t, r) {
  return r === void 0 && (r = []), e.forEach(function(i) {
    var n;
    return se(i) && !t || sn(i, 1) ? (n = r).push.apply(n, Te(i)) : r.push(i);
  }) || r;
}, Te = function(e, t, r) {
  return X && !t && X.selector ? X.selector(e) : se(e) && !r && (xr || !bt()) ? Tr.call((t || jr).querySelectorAll(e), 0) : le(e) ? Hs(e, r) : sn(e) ? Tr.call(e, 0) : e ? [e] : [];
}, Sr = function(e) {
  return e = Te(e)[0] || At("Invalid scope") || {}, function(t) {
    var r = e.current || e.nativeElement || e;
    return Te(t, r.querySelectorAll ? r : r === e ? At("Invalid scope") || jr.createElement("div") : e);
  };
}, on = function(e) {
  return e.sort(function() {
    return 0.5 - Math.random();
  });
}, an = function(e) {
  if (Q(e))
    return e;
  var t = Me(e) ? e : {
    each: e
  }, r = tt(t.ease), i = t.from || 0, n = parseFloat(t.base) || 0, o = {}, a = i > 0 && i < 1, l = isNaN(i) || a, u = t.axis, c = i, d = i;
  return se(i) ? c = d = {
    center: 0.5,
    edges: 0.5,
    end: 1
  }[i] || 0 : !a && l && (c = i[0], d = i[1]), function(h, _, p) {
    var f = (p || t).length, m = o[f], y, x, T, k, g, S, P, b, w;
    if (!m) {
      if (w = t.grid === "auto" ? 0 : (t.grid || [1, ke])[1], !w) {
        for (P = -ke; P < (P = p[w++].getBoundingClientRect().left) && w < f; )
          ;
        w < f && w--;
      }
      for (m = o[f] = [], y = l ? Math.min(w, f) * c - 0.5 : i % w, x = w === ke ? 0 : l ? f * d / w - 0.5 : i / w | 0, P = 0, b = ke, S = 0; S < f; S++)
        T = S % w - y, k = x - (S / w | 0), m[S] = g = u ? Math.abs(u === "y" ? k : T) : Yi(T * T + k * k), g > P && (P = g), g < b && (b = g);
      i === "random" && on(m), m.max = P - b, m.min = b, m.v = f = (parseFloat(t.amount) || parseFloat(t.each) * (w > f ? f - 1 : u ? u === "y" ? f / w : w : Math.max(w, f / w)) || 0) * (i === "edges" ? -1 : 1), m.b = f < 0 ? n - f : n, m.u = ae(t.amount || t.each) || 0, r = r && f < 0 ? gn(r) : r;
    }
    return f = (m[h] - m.min) / m.max || 0, re(m.b + (r ? r(f) : f) * m.v) + m.u;
  };
}, Pr = function(e) {
  var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
  return function(r) {
    var i = re(Math.round(parseFloat(r) / e) * e * t);
    return (i - i % 1) / t + (Ne(r) ? 0 : ae(r));
  };
}, ln = function(e, t) {
  var r = le(e), i, n;
  return !r && Me(e) && (i = r = e.radius || ke, e.values ? (e = Te(e.values), (n = !Ne(e[0])) && (i *= i)) : e = Pr(e.increment)), qe(t, r ? Q(e) ? function(o) {
    return n = e(o), Math.abs(n - o) <= i ? n : o;
  } : function(o) {
    for (var a = parseFloat(n ? o.x : o), l = parseFloat(n ? o.y : 0), u = ke, c = 0, d = e.length, h, _; d--; )
      n ? (h = e[d].x - a, _ = e[d].y - l, h = h * h + _ * _) : h = Math.abs(e[d] - a), h < u && (u = h, c = d);
    return c = !i || u <= i ? e[c] : o, n || c === o || Ne(o) ? c : c + ae(o);
  } : Pr(e));
}, un = function(e, t, r, i) {
  return qe(le(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
    return le(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * 0.99)) / r) * r * i) / i;
  });
}, Js = function() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return function(i) {
    return t.reduce(function(n, o) {
      return o(n);
    }, i);
  };
}, Zs = function(e, t) {
  return function(r) {
    return e(parseFloat(r)) + (t || ae(r));
  };
}, Qs = function(e, t, r) {
  return fn(e, t, 0, 1, r);
}, cn = function(e, t, r) {
  return qe(r, function(i) {
    return e[~~t(i)];
  });
}, Ks = function s(e, t, r) {
  var i = t - e;
  return le(e) ? cn(e, s(0, e.length), t) : qe(r, function(n) {
    return (i + (n - e) % i) % i + e;
  });
}, eo = function s(e, t, r) {
  var i = t - e, n = i * 2;
  return le(e) ? cn(e, s(0, e.length - 1), t) : qe(r, function(o) {
    return o = (n + (o - e) % n) % n || 0, e + (o > i ? n - o : o);
  });
}, Dt = function(e) {
  for (var t = 0, r = "", i, n, o, a; ~(i = e.indexOf("random(", t)); )
    o = e.indexOf(")", i), a = e.charAt(i + 7) === "[", n = e.substr(i + 7, o - i - 7).match(a ? Wi : yr), r += e.substr(t, i - t) + un(a ? n : +n[0], a ? 0 : +n[1], +n[2] || 1e-5), t = o + 1;
  return r + e.substr(t, e.length - t);
}, fn = function(e, t, r, i, n) {
  var o = t - e, a = i - r;
  return qe(n, function(l) {
    return r + ((l - e) / o * a || 0);
  });
}, to = function s(e, t, r, i) {
  var n = isNaN(e + t) ? 0 : function(_) {
    return (1 - _) * e + _ * t;
  };
  if (!n) {
    var o = se(e), a = {}, l, u, c, d, h;
    if (r === !0 && (i = 1) && (r = null), o)
      e = {
        p: e
      }, t = {
        p: t
      };
    else if (le(e) && !le(t)) {
      for (c = [], d = e.length, h = d - 2, u = 1; u < d; u++)
        c.push(s(e[u - 1], e[u]));
      d--, n = function(p) {
        p *= d;
        var f = Math.min(h, ~~p);
        return c[f](p - f);
      }, r = t;
    } else i || (e = pt(le(e) ? [] : {}, e));
    if (!c) {
      for (l in t)
        Wr.call(a, e, l, "get", t[l]);
      n = function(p) {
        return Hr(p, a) || (o ? e.p : e);
      };
    }
  }
  return qe(r, n);
}, _i = function(e, t, r) {
  var i = e.labels, n = ke, o, a, l;
  for (o in i)
    a = i[o] - t, a < 0 == !!r && a && n > (a = Math.abs(a)) && (l = o, n = a);
  return l;
}, be = function(e, t, r) {
  var i = e.vars, n = i[t], o = X, a = e._ctx, l, u, c;
  if (n)
    return l = i[t + "Params"], u = i.callbackScope || e, r && Ue.length && Jt(), a && (X = a), c = l ? n.apply(u, l) : n.call(u), X = o, c;
}, Ct = function(e) {
  return Ge(e), e.scrollTrigger && e.scrollTrigger.kill(!!oe), e.progress() < 1 && be(e, "onInterrupt"), e;
}, ct, dn = [], hn = function(e) {
  if (e)
    if (e = !e.name && e.default || e, Lr() || e.headless) {
      var t = e.name, r = Q(e), i = t && !r && e.init ? function() {
        this._props = [];
      } : e, n = {
        init: zt,
        render: Hr,
        add: Wr,
        kill: bo,
        modifier: go,
        rawVars: 0
      }, o = {
        targetTest: 0,
        get: 0,
        getSetter: $r,
        aliases: {},
        register: 0
      };
      if (bt(), e !== i) {
        if (me[t])
          return;
        ve(i, ve(Zt(e, n), o)), pt(i.prototype, pt(n, Zt(e, o))), me[i.prop = t] = i, e.targetTest && (Xt.push(i), Yr[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin";
      }
      $i(t, i), e.register && e.register(pe, i, he);
    } else
      dn.push(e);
}, B = 255, Ot = {
  aqua: [0, B, B],
  lime: [0, B, 0],
  silver: [192, 192, 192],
  black: [0, 0, 0],
  maroon: [128, 0, 0],
  teal: [0, 128, 128],
  blue: [0, 0, B],
  navy: [0, 0, 128],
  white: [B, B, B],
  olive: [128, 128, 0],
  yellow: [B, B, 0],
  orange: [B, 165, 0],
  gray: [128, 128, 128],
  purple: [128, 0, 128],
  green: [0, 128, 0],
  red: [B, 0, 0],
  pink: [B, 192, 203],
  cyan: [0, B, B],
  transparent: [B, B, B, 0]
}, ur = function(e, t, r) {
  return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < 0.5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * B + 0.5 | 0;
}, _n = function(e, t, r) {
  var i = e ? Ne(e) ? [e >> 16, e >> 8 & B, e & B] : 0 : Ot.black, n, o, a, l, u, c, d, h, _, p;
  if (!i) {
    if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), Ot[e])
      i = Ot[e];
    else if (e.charAt(0) === "#") {
      if (e.length < 6 && (n = e.charAt(1), o = e.charAt(2), a = e.charAt(3), e = "#" + n + n + o + o + a + a + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9)
        return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & B, i & B, parseInt(e.substr(7), 16) / 255];
      e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & B, e & B];
    } else if (e.substr(0, 3) === "hsl") {
      if (i = p = e.match(yr), !t)
        l = +i[0] % 360 / 360, u = +i[1] / 100, c = +i[2] / 100, o = c <= 0.5 ? c * (u + 1) : c + u - c * u, n = c * 2 - o, i.length > 3 && (i[3] *= 1), i[0] = ur(l + 1 / 3, n, o), i[1] = ur(l, n, o), i[2] = ur(l - 1 / 3, n, o);
      else if (~e.indexOf("="))
        return i = e.match(Bi), r && i.length < 4 && (i[3] = 1), i;
    } else
      i = e.match(yr) || Ot.transparent;
    i = i.map(Number);
  }
  return t && !p && (n = i[0] / B, o = i[1] / B, a = i[2] / B, d = Math.max(n, o, a), h = Math.min(n, o, a), c = (d + h) / 2, d === h ? l = u = 0 : (_ = d - h, u = c > 0.5 ? _ / (2 - d - h) : _ / (d + h), l = d === n ? (o - a) / _ + (o < a ? 6 : 0) : d === o ? (a - n) / _ + 2 : (n - o) / _ + 4, l *= 60), i[0] = ~~(l + 0.5), i[1] = ~~(u * 100 + 0.5), i[2] = ~~(c * 100 + 0.5)), r && i.length < 4 && (i[3] = 1), i;
}, pn = function(e) {
  var t = [], r = [], i = -1;
  return e.split(Be).forEach(function(n) {
    var o = n.match(ut) || [];
    t.push.apply(t, o), r.push(i += o.length + 1);
  }), t.c = r, t;
}, pi = function(e, t, r) {
  var i = "", n = (e + i).match(Be), o = t ? "hsla(" : "rgba(", a = 0, l, u, c, d;
  if (!n)
    return e;
  if (n = n.map(function(h) {
    return (h = _n(h, t, 1)) && o + (t ? h[0] + "," + h[1] + "%," + h[2] + "%," + h[3] : h.join(",")) + ")";
  }), r && (c = pn(e), l = r.c, l.join(i) !== c.c.join(i)))
    for (u = e.replace(Be, "1").split(ut), d = u.length - 1; a < d; a++)
      i += u[a] + (~l.indexOf(a) ? n.shift() || o + "0,0,0,0)" : (c.length ? c : n.length ? n : r).shift());
  if (!u)
    for (u = e.split(Be), d = u.length - 1; a < d; a++)
      i += u[a] + n[a];
  return i + u[d];
}, Be = (function() {
  var s = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", e;
  for (e in Ot)
    s += "|" + e + "\\b";
  return new RegExp(s + ")", "gi");
})(), ro = /hsl[a]?\(/, mn = function(e) {
  var t = e.join(" "), r;
  if (Be.lastIndex = 0, Be.test(t))
    return r = ro.test(t), e[1] = pi(e[1], r), e[0] = pi(e[0], r, pn(e[1])), !0;
}, Nt, ge = (function() {
  var s = Date.now, e = 500, t = 33, r = s(), i = r, n = 1e3 / 240, o = n, a = [], l, u, c, d, h, _, p = function f(m) {
    var y = s() - i, x = m === !0, T, k, g, S;
    if ((y > e || y < 0) && (r += y - t), i += y, g = i - r, T = g - o, (T > 0 || x) && (S = ++d.frame, h = g - d.time * 1e3, d.time = g = g / 1e3, o += T + (T >= n ? 4 : n - T), k = 1), x || (l = u(f)), k)
      for (_ = 0; _ < a.length; _++)
        a[_](g, h, S, m);
  };
  return d = {
    time: 0,
    frame: 0,
    tick: function() {
      p(!0);
    },
    deltaRatio: function(m) {
      return h / (1e3 / (m || 60));
    },
    wake: function() {
      qi && (!xr && Lr() && (Oe = xr = window, jr = Oe.document || {}, xe.gsap = pe, (Oe.gsapVersions || (Oe.gsapVersions = [])).push(pe.version), Xi(Ht || Oe.GreenSockGlobals || !Oe.gsap && Oe || {}), dn.forEach(hn)), c = typeof requestAnimationFrame < "u" && requestAnimationFrame, l && d.sleep(), u = c || function(m) {
        return setTimeout(m, o - d.time * 1e3 + 1 | 0);
      }, Nt = 1, p(2));
    },
    sleep: function() {
      (c ? cancelAnimationFrame : clearTimeout)(l), Nt = 0, u = zt;
    },
    lagSmoothing: function(m, y) {
      e = m || 1 / 0, t = Math.min(y || 33, e);
    },
    fps: function(m) {
      n = 1e3 / (m || 240), o = d.time * 1e3 + n;
    },
    add: function(m, y, x) {
      var T = y ? function(k, g, S, P) {
        m(k, g, S, P), d.remove(T);
      } : m;
      return d.remove(m), a[x ? "unshift" : "push"](T), bt(), T;
    },
    remove: function(m, y) {
      ~(y = a.indexOf(m)) && a.splice(y, 1) && _ >= y && _--;
    },
    _listeners: a
  }, d;
})(), bt = function() {
  return !Nt && ge.wake();
}, N = {}, io = /^[\d.\-M][\d.\-,\s]/, no = /["']/g, so = function(e) {
  for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, o = r.length, a, l, u; n < o; n++)
    l = r[n], a = n !== o - 1 ? l.lastIndexOf(",") : l.length, u = l.substr(0, a), t[i] = isNaN(u) ? u.replace(no, "").trim() : +u, i = l.substr(a + 1).trim();
  return t;
}, oo = function(e) {
  var t = e.indexOf("(") + 1, r = e.indexOf(")"), i = e.indexOf("(", t);
  return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r);
}, ao = function(e) {
  var t = (e + "").split("("), r = N[t[0]];
  return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [so(t[1])] : oo(e).split(",").map(Qi)) : N._CE && io.test(e) ? N._CE("", e) : r;
}, gn = function(e) {
  return function(t) {
    return 1 - e(1 - t);
  };
}, bn = function s(e, t) {
  for (var r = e._first, i; r; )
    r instanceof ue ? s(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? s(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next;
}, tt = function(e, t) {
  return e && (Q(e) ? e : N[e] || ao(e)) || t;
}, st = function(e, t, r, i) {
  r === void 0 && (r = function(l) {
    return 1 - t(1 - l);
  }), i === void 0 && (i = function(l) {
    return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
  });
  var n = {
    easeIn: t,
    easeOut: r,
    easeInOut: i
  }, o;
  return de(e, function(a) {
    N[a] = xe[a] = n, N[o = a.toLowerCase()] = r;
    for (var l in n)
      N[o + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = N[a + "." + l] = n[l];
  }), n;
}, yn = function(e) {
  return function(t) {
    return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
  };
}, cr = function s(e, t, r) {
  var i = t >= 1 ? t : 1, n = (r || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1), o = n / br * (Math.asin(1 / i) || 0), a = function(c) {
    return c === 1 ? 1 : i * Math.pow(2, -10 * c) * Ns((c - o) * n) + 1;
  }, l = e === "out" ? a : e === "in" ? function(u) {
    return 1 - a(1 - u);
  } : yn(a);
  return n = br / n, l.config = function(u, c) {
    return s(e, u, c);
  }, l;
}, fr = function s(e, t) {
  t === void 0 && (t = 1.70158);
  var r = function(o) {
    return o ? --o * o * ((t + 1) * o + t) + 1 : 0;
  }, i = e === "out" ? r : e === "in" ? function(n) {
    return 1 - r(1 - n);
  } : yn(r);
  return i.config = function(n) {
    return s(e, n);
  }, i;
};
de("Linear,Quad,Cubic,Quart,Quint,Strong", function(s, e) {
  var t = e < 5 ? e + 1 : e;
  st(s + ",Power" + (t - 1), e ? function(r) {
    return Math.pow(r, t);
  } : function(r) {
    return r;
  }, function(r) {
    return 1 - Math.pow(1 - r, t);
  }, function(r) {
    return r < 0.5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2;
  });
});
N.Linear.easeNone = N.none = N.Linear.easeIn;
st("Elastic", cr("in"), cr("out"), cr());
(function(s, e) {
  var t = 1 / e, r = 2 * t, i = 2.5 * t, n = function(a) {
    return a < t ? s * a * a : a < r ? s * Math.pow(a - 1.5 / e, 2) + 0.75 : a < i ? s * (a -= 2.25 / e) * a + 0.9375 : s * Math.pow(a - 2.625 / e, 2) + 0.984375;
  };
  st("Bounce", function(o) {
    return 1 - n(1 - o);
  }, n);
})(7.5625, 2.75);
st("Expo", function(s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
st("Circ", function(s) {
  return -(Yi(1 - s * s) - 1);
});
st("Sine", function(s) {
  return s === 1 ? 1 : -Ds(s * As) + 1;
});
st("Back", fr("in"), fr("out"), fr());
N.SteppedEase = N.steps = xe.SteppedEase = {
  config: function(e, t) {
    e === void 0 && (e = 1);
    var r = 1 / e, i = e + (t ? 0 : 1), n = t ? 1 : 0, o = 1 - G;
    return function(a) {
      return ((i * Vt(0, o, a) | 0) + n) * r;
    };
  }
};
_t.ease = N["quad.out"];
de("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(s) {
  return Ur += s + "," + s + "Params,";
});
var xn = function(e, t) {
  this.id = zs++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : Ji, this.set = t ? t.getSetter : $r;
}, It = /* @__PURE__ */ (function() {
  function s(t) {
    this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, gt(this, +t.duration, 1, 1), this.data = t.data, X && (this._ctx = X, X.data.push(this)), Nt || ge.wake();
  }
  var e = s.prototype;
  return e.delay = function(r) {
    return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay;
  }, e.duration = function(r) {
    return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur;
  }, e.totalDuration = function(r) {
    return arguments.length ? (this._dirty = 0, gt(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, e.totalTime = function(r, i) {
    if (bt(), !arguments.length)
      return this._tTime;
    var n = this._dp;
    if (n && n.smoothChildTiming && this._ts) {
      for (nr(this, r), !n._dp || n.parent || tn(n, this); n && n.parent; )
        n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
      !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && Re(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === G || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), Zi(this, r, i)), this;
  }, e.time = function(r, i) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + di(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time;
  }, e.totalProgress = function(r, i) {
    return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.rawTime() >= 0 && this._initted ? 1 : 0;
  }, e.progress = function(r, i) {
    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + di(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.rawTime() > 0 ? 1 : 0;
  }, e.iteration = function(r, i) {
    var n = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? mt(this._tTime, n) + 1 : 1;
  }, e.timeScale = function(r, i) {
    if (!arguments.length)
      return this._rts === -G ? 0 : this._rts;
    if (this._rts === r)
      return this;
    var n = this.parent && this._ts ? Qt(this.parent._time, this) : this._tTime;
    return this._rts = +r || 0, this._ts = this._ps || r === -G ? 0 : this._rts, this.totalTime(Vt(-Math.abs(this._delay), this.totalDuration(), n), i !== !1), ir(this), Us(this);
  }, e.paused = function(r) {
    return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (bt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== G && (this._tTime -= G)))), this) : this._ps;
  }, e.startTime = function(r) {
    if (arguments.length) {
      this._start = r;
      var i = this.parent || this._dp;
      return i && (i._sort || !this.parent) && Re(i, this, r - this._delay), this;
    }
    return this._start;
  }, e.endTime = function(r) {
    return this._start + (fe(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, e.rawTime = function(r) {
    var i = this.parent || this._dp;
    return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Qt(i.rawTime(r), this) : this._tTime : this._tTime;
  }, e.revert = function(r) {
    r === void 0 && (r = Ls);
    var i = oe;
    return oe = r, Gr(this) && (this.timeline && this.timeline.revert(r), this.totalTime(-0.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), oe = i, this;
  }, e.globalTime = function(r) {
    for (var i = this, n = arguments.length ? r : i.rawTime(); i; )
      n = i._start + n / (Math.abs(i._ts) || 1), i = i._dp;
    return !this.parent && this._sat ? this._sat.globalTime(r) : n;
  }, e.repeat = function(r) {
    return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, hi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat;
  }, e.repeatDelay = function(r) {
    if (arguments.length) {
      var i = this._time;
      return this._rDelay = r, hi(this), i ? this.time(i) : this;
    }
    return this._rDelay;
  }, e.yoyo = function(r) {
    return arguments.length ? (this._yoyo = r, this) : this._yoyo;
  }, e.seek = function(r, i) {
    return this.totalTime(we(this, r), fe(i));
  }, e.restart = function(r, i) {
    return this.play().totalTime(r ? -this._delay : 0, fe(i)), this._dur || (this._zTime = -G), this;
  }, e.play = function(r, i) {
    return r != null && this.seek(r, i), this.reversed(!1).paused(!1);
  }, e.reverse = function(r, i) {
    return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1);
  }, e.pause = function(r, i) {
    return r != null && this.seek(r, i), this.paused(!0);
  }, e.resume = function() {
    return this.paused(!1);
  }, e.reversed = function(r) {
    return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -G : 0)), this) : this._rts < 0;
  }, e.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -G, this;
  }, e.isActive = function() {
    var r = this.parent || this._dp, i = this._start, n;
    return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - G);
  }, e.eventCallback = function(r, i, n) {
    var o = this.vars;
    return arguments.length > 1 ? (i ? (o[r] = i, n && (o[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete o[r], this) : o[r];
  }, e.then = function(r) {
    var i = this;
    return new Promise(function(n) {
      var o = Q(r) ? r : Ki, a = function() {
        var u = i.then;
        i.then = null, Q(o) && (o = o(i)) && (o.then || o === i) && (i.then = u), n(o), i.then = u;
      };
      i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? a() : i._prom = a;
    });
  }, e.kill = function() {
    Ct(this);
  }, s;
})();
ve(It.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -G,
  _prom: 0,
  _ps: !1,
  _rts: 1
});
var ue = /* @__PURE__ */ (function(s) {
  Vi(e, s);
  function e(r, i) {
    var n;
    return r === void 0 && (r = {}), n = s.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = fe(r.sortChildren), H && Re(r.parent || H, ze(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && rn(ze(n), r.scrollTrigger), n;
  }
  var t = e.prototype;
  return t.to = function(i, n, o) {
    return Et(0, arguments, this), this;
  }, t.from = function(i, n, o) {
    return Et(1, arguments, this), this;
  }, t.fromTo = function(i, n, o, a) {
    return Et(2, arguments, this), this;
  }, t.set = function(i, n, o) {
    return n.duration = 0, n.parent = this, Rt(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new te(i, n, we(this, o), 1), this;
  }, t.call = function(i, n, o) {
    return Re(this, te.delayedCall(0, i, n), o);
  }, t.staggerTo = function(i, n, o, a, l, u, c) {
    return o.duration = n, o.stagger = o.stagger || a, o.onComplete = u, o.onCompleteParams = c, o.parent = this, new te(i, o, we(this, l)), this;
  }, t.staggerFrom = function(i, n, o, a, l, u, c) {
    return o.runBackwards = 1, Rt(o).immediateRender = fe(o.immediateRender), this.staggerTo(i, n, o, a, l, u, c);
  }, t.staggerFromTo = function(i, n, o, a, l, u, c, d) {
    return a.startAt = o, Rt(a).immediateRender = fe(a.immediateRender), this.staggerTo(i, n, a, l, u, c, d);
  }, t.render = function(i, n, o) {
    var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, c = i <= 0 ? 0 : re(i), d = this._zTime < 0 != i < 0 && (this._initted || !u), h, _, p, f, m, y, x, T, k, g, S, P;
    if (this !== H && c > l && i >= 0 && (c = l), c !== this._tTime || o || d) {
      if (a !== this._time && u && (c += this._time - a, i += this._time - a), h = c, k = this._start, T = this._ts, y = !T, d && (u || (a = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
        if (S = this._yoyo, m = u + this._rDelay, this._repeat < -1 && i < 0)
          return this.totalTime(m * 100 + i, n, o);
        if (h = re(c % m), c === l ? (f = this._repeat, h = u) : (g = re(c / m), f = ~~g, f && f === g && (h = u, f--), h > u && (h = u)), g = mt(this._tTime, m), !a && this._tTime && g !== f && this._tTime - g * m - this._dur <= 0 && (g = f), S && f & 1 && (h = u - h, P = 1), f !== g && !this._lock) {
          var b = S && g & 1, w = b === (S && f & 1);
          if (f < g && (b = !b), a = b ? 0 : c % u ? u : c, this._lock = 1, this.render(a || (P ? 0 : re(f * m)), n, !u)._lock = 0, this._tTime = c, !n && this.parent && be(this, "onRepeat"), this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1), a && a !== this._time || y !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
            return this;
          if (u = this._dur, l = this._tDur, w && (this._lock = 2, a = b ? u : -1e-4, this.render(a, !0), this.vars.repeatRefresh && !P && this.invalidate()), this._lock = 0, !this._ts && !y)
            return this;
          bn(this, P);
        }
      }
      if (this._hasPause && !this._forcing && this._lock < 2 && (x = qs(this, re(a), re(h)), x && (c -= h - (h = x._start))), this._tTime = c, this._time = h, this._act = !T, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, a = 0), !a && c && !n && !g && (be(this, "onStart"), this._tTime !== c))
        return this;
      if (h >= a && i >= 0)
        for (_ = this._first; _; ) {
          if (p = _._next, (_._act || h >= _._start) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(i, n, o);
            if (_.render(_._ts > 0 ? (h - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (h - _._start) * _._ts, n, o), h !== this._time || !this._ts && !y) {
              x = 0, p && (c += this._zTime = -G);
              break;
            }
          }
          _ = p;
        }
      else {
        _ = this._last;
        for (var A = i < 0 ? i : h; _; ) {
          if (p = _._prev, (_._act || A <= _._end) && _._ts && x !== _) {
            if (_.parent !== this)
              return this.render(i, n, o);
            if (_.render(_._ts > 0 ? (A - _._start) * _._ts : (_._dirty ? _.totalDuration() : _._tDur) + (A - _._start) * _._ts, n, o || oe && Gr(_)), h !== this._time || !this._ts && !y) {
              x = 0, p && (c += this._zTime = A ? -G : G);
              break;
            }
          }
          _ = p;
        }
      }
      if (x && !n && (this.pause(), x.render(h >= a ? 0 : -G)._zTime = h >= a ? 1 : -1, this._ts))
        return this._start = k, ir(this), this.render(i, n, o);
      this._onUpdate && !n && be(this, "onUpdate", !0), (c === l && this._tTime >= this.totalDuration() || !c && a) && (k === this._start || Math.abs(T) !== Math.abs(this._ts)) && (this._lock || ((i || !u) && (c === l && this._ts > 0 || !c && this._ts < 0) && Ge(this, 1), !n && !(i < 0 && !a) && (c || a || !l) && (be(this, c === l && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(c < l && this.timeScale() > 0) && this._prom())));
    }
    return this;
  }, t.add = function(i, n) {
    var o = this;
    if (Ne(n) || (n = we(this, n, i)), !(i instanceof It)) {
      if (le(i))
        return i.forEach(function(a) {
          return o.add(a, n);
        }), this;
      if (se(i))
        return this.addLabel(i, n);
      if (Q(i))
        i = te.delayedCall(0, i);
      else
        return this;
    }
    return this !== i ? Re(this, i, n) : this;
  }, t.getChildren = function(i, n, o, a) {
    i === void 0 && (i = !0), n === void 0 && (n = !0), o === void 0 && (o = !0), a === void 0 && (a = -ke);
    for (var l = [], u = this._first; u; )
      u._start >= a && (u instanceof te ? n && l.push(u) : (o && l.push(u), i && l.push.apply(l, u.getChildren(!0, n, o)))), u = u._next;
    return l;
  }, t.getById = function(i) {
    for (var n = this.getChildren(1, 1, 1), o = n.length; o--; )
      if (n[o].vars.id === i)
        return n[o];
  }, t.remove = function(i) {
    return se(i) ? this.removeLabel(i) : Q(i) ? this.killTweensOf(i) : (i.parent === this && rr(this, i), i === this._recent && (this._recent = this._last), et(this));
  }, t.totalTime = function(i, n) {
    return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = re(ge.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), s.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime;
  }, t.addLabel = function(i, n) {
    return this.labels[i] = we(this, n), this;
  }, t.removeLabel = function(i) {
    return delete this.labels[i], this;
  }, t.addPause = function(i, n, o) {
    var a = te.delayedCall(0, n || zt, o);
    return a.data = "isPause", this._hasPause = 1, Re(this, a, we(this, i));
  }, t.removePause = function(i) {
    var n = this._first;
    for (i = we(this, i); n; )
      n._start === i && n.data === "isPause" && Ge(n), n = n._next;
  }, t.killTweensOf = function(i, n, o) {
    for (var a = this.getTweensOf(i, o), l = a.length; l--; )
      je !== a[l] && a[l].kill(i, n);
    return this;
  }, t.getTweensOf = function(i, n) {
    for (var o = [], a = Te(i), l = this._first, u = Ne(n), c; l; )
      l instanceof te ? js(l._targets, a) && (u ? (!je || l._initted && l._ts) && l.globalTime(0) <= n && l.globalTime(l.totalDuration()) > n : !n || l.isActive()) && o.push(l) : (c = l.getTweensOf(a, n)).length && o.push.apply(o, c), l = l._next;
    return o;
  }, t.tweenTo = function(i, n) {
    n = n || {};
    var o = this, a = we(o, i), l = n, u = l.startAt, c = l.onStart, d = l.onStartParams, h = l.immediateRender, _, p = te.to(o, ve({
      ease: n.ease || "none",
      lazy: !1,
      immediateRender: !1,
      time: a,
      overwrite: "auto",
      duration: n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale()) || G,
      onStart: function() {
        if (o.pause(), !_) {
          var m = n.duration || Math.abs((a - (u && "time" in u ? u.time : o._time)) / o.timeScale());
          p._dur !== m && gt(p, m, 0, 1).render(p._time, !0, !0), _ = 1;
        }
        c && c.apply(p, d || []);
      }
    }, n));
    return h ? p.render(0) : p;
  }, t.tweenFromTo = function(i, n, o) {
    return this.tweenTo(n, ve({
      startAt: {
        time: we(this, i)
      }
    }, o));
  }, t.recent = function() {
    return this._recent;
  }, t.nextLabel = function(i) {
    return i === void 0 && (i = this._time), _i(this, we(this, i));
  }, t.previousLabel = function(i) {
    return i === void 0 && (i = this._time), _i(this, we(this, i), 1);
  }, t.currentLabel = function(i) {
    return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + G);
  }, t.shiftChildren = function(i, n, o) {
    o === void 0 && (o = 0);
    for (var a = this._first, l = this.labels, u; a; )
      a._start >= o && (a._start += i, a._end += i), a = a._next;
    if (n)
      for (u in l)
        l[u] >= o && (l[u] += i);
    return et(this);
  }, t.invalidate = function(i) {
    var n = this._first;
    for (this._lock = 0; n; )
      n.invalidate(i), n = n._next;
    return s.prototype.invalidate.call(this, i);
  }, t.clear = function(i) {
    i === void 0 && (i = !0);
    for (var n = this._first, o; n; )
      o = n._next, this.remove(n), n = o;
    return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), et(this);
  }, t.totalDuration = function(i) {
    var n = 0, o = this, a = o._last, l = ke, u, c, d;
    if (arguments.length)
      return o.timeScale((o._repeat < 0 ? o.duration() : o.totalDuration()) / (o.reversed() ? -i : i));
    if (o._dirty) {
      for (d = o.parent; a; )
        u = a._prev, a._dirty && a.totalDuration(), c = a._start, c > l && o._sort && a._ts && !o._lock ? (o._lock = 1, Re(o, a, c - a._delay, 1)._lock = 0) : l = c, c < 0 && a._ts && (n -= c, (!d && !o._dp || d && d.smoothChildTiming) && (o._start += c / o._ts, o._time -= c, o._tTime -= c), o.shiftChildren(-c, !1, -1 / 0), l = 0), a._end > n && a._ts && (n = a._end), a = u;
      gt(o, o === H && o._time > n ? o._time : n, 1, 1), o._dirty = 0;
    }
    return o._tDur;
  }, e.updateRoot = function(i) {
    if (H._ts && (Zi(H, Qt(i, H)), Hi = ge.frame), ge.frame >= ci) {
      ci += ye.autoSleep || 120;
      var n = H._first;
      if ((!n || !n._ts) && ye.autoSleep && ge._listeners.length < 2) {
        for (; n && !n._ts; )
          n = n._next;
        n || ge.sleep();
      }
    }
  }, e;
})(It);
ve(ue.prototype, {
  _lock: 0,
  _hasPause: 0,
  _forcing: 0
});
var lo = function(e, t, r, i, n, o, a) {
  var l = new he(this._pt, e, t, 0, 1, Pn, null, n), u = 0, c = 0, d, h, _, p, f, m, y, x;
  for (l.b = r, l.e = i, r += "", i += "", (y = ~i.indexOf("random(")) && (i = Dt(i)), o && (x = [r, i], o(x, e, t), r = x[0], i = x[1]), h = r.match(ar) || []; d = ar.exec(i); )
    p = d[0], f = i.substring(u, d.index), _ ? _ = (_ + 1) % 5 : f.substr(-5) === "rgba(" && (_ = 1), p !== h[c++] && (m = parseFloat(h[c - 1]) || 0, l._pt = {
      _next: l._pt,
      p: f || c === 1 ? f : ",",
      //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
      s: m,
      c: p.charAt(1) === "=" ? ft(m, p) - m : parseFloat(p) - m,
      m: _ && _ < 4 ? Math.round : 0
    }, u = ar.lastIndex);
  return l.c = u < i.length ? i.substring(u, i.length) : "", l.fp = a, (Gi.test(i) || y) && (l.e = 0), this._pt = l, l;
}, Wr = function(e, t, r, i, n, o, a, l, u, c) {
  Q(i) && (i = i(n || 0, e, o));
  var d = e[t], h = r !== "get" ? r : Q(d) ? u ? e[t.indexOf("set") || !Q(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](u) : e[t]() : d, _ = Q(d) ? u ? _o : Tn : Xr, p;
  if (se(i) && (~i.indexOf("random(") && (i = Dt(i)), i.charAt(1) === "=" && (p = ft(h, i) + (ae(h) || 0), (p || p === 0) && (i = p))), !c || h !== i || Cr)
    return !isNaN(h * i) && i !== "" ? (p = new he(this._pt, e, t, +h || 0, i - (h || 0), typeof d == "boolean" ? mo : Sn, 0, _), u && (p.fp = u), a && p.modifier(a, this, e), this._pt = p) : (!d && !(t in e) && Vr(t, i), lo.call(this, e, t, h, i, _, l || ye.stringFilter, u));
}, uo = function(e, t, r, i, n) {
  if (Q(e) && (e = Mt(e, n, t, r, i)), !Me(e) || e.style && e.nodeType || le(e) || Ui(e))
    return se(e) ? Mt(e, n, t, r, i) : e;
  var o = {}, a;
  for (a in e)
    o[a] = Mt(e[a], n, t, r, i);
  return o;
}, vn = function(e, t, r, i, n, o) {
  var a, l, u, c;
  if (me[e] && (a = new me[e]()).init(n, a.rawVars ? t[e] : uo(t[e], i, n, o, r), r, i, o) !== !1 && (r._pt = l = new he(r._pt, n, e, 0, 1, a.render, a, 0, a.priority), r !== ct))
    for (u = r._ptLookup[r._targets.indexOf(n)], c = a._props.length; c--; )
      u[a._props[c]] = l;
  return a;
}, je, Cr, qr = function s(e, t, r) {
  var i = e.vars, n = i.ease, o = i.startAt, a = i.immediateRender, l = i.lazy, u = i.onUpdate, c = i.runBackwards, d = i.yoyoEase, h = i.keyframes, _ = i.autoRevert, p = e._dur, f = e._startAt, m = e._targets, y = e.parent, x = y && y.data === "nested" ? y.vars.targets : m, T = e._overwrite === "auto" && !Ir, k = e.timeline, g, S, P, b, w, A, j, I, V, q, U, F, Y;
  if (k && (!h || !n) && (n = "none"), e._ease = tt(n, _t.ease), e._yEase = d ? gn(tt(d === !0 ? n : d, _t.ease)) : 0, d && e._yoyo && !e._repeat && (d = e._yEase, e._yEase = e._ease, e._ease = d), e._from = !k && !!i.runBackwards, !k || h && !i.stagger) {
    if (I = m[0] ? Ke(m[0]).harness : 0, F = I && i[I.prop], g = Zt(i, Yr), f && (f._zTime < 0 && f.progress(1), t < 0 && c && a && !_ ? f.render(-1, !0) : f.revert(c && p ? qt : Fs), f._lazy = 0), o) {
      if (Ge(e._startAt = te.set(m, ve({
        data: "isStart",
        overwrite: !1,
        parent: y,
        immediateRender: !0,
        lazy: !f && fe(l),
        startAt: null,
        delay: 0,
        onUpdate: u && function() {
          return be(e, "onUpdate");
        },
        stagger: 0
      }, o))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe || !a && !_) && e._startAt.revert(qt), a && p && t <= 0 && r <= 0) {
        t && (e._zTime = t);
        return;
      }
    } else if (c && p && !f) {
      if (t && (a = !1), P = ve({
        overwrite: !1,
        data: "isFromStart",
        //we tag the tween with as "isFromStart" so that if [inside a plugin] we need to only do something at the very END of a tween, we have a way of identifying this tween as merely the one that's setting the beginning values for a "from()" tween. For example, clearProps in CSSPlugin should only get applied at the very END of a tween and without this tag, from(...{height:100, clearProps:"height", delay:1}) would wipe the height at the beginning of the tween and after 1 second, it'd kick back in.
        lazy: a && !f && fe(l),
        immediateRender: a,
        //zero-duration tweens render immediately by default, but if we're not specifically instructed to render this tween immediately, we should skip this and merely _init() to record the starting values (rendering them immediately would push them to completion which is wasteful in that case - we'd have to render(-1) immediately after)
        stagger: 0,
        parent: y
        //ensures that nested tweens that had a stagger are handled properly, like gsap.from(".class", {y: gsap.utils.wrap([-100,100]), stagger: 0.5})
      }, g), F && (P[I.prop] = F), Ge(e._startAt = te.set(m, P)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (oe ? e._startAt.revert(qt) : e._startAt.render(-1, !0)), e._zTime = t, !a)
        s(e._startAt, G, G);
      else if (!t)
        return;
    }
    for (e._pt = e._ptCache = 0, l = p && fe(l) || l && !p, S = 0; S < m.length; S++) {
      if (w = m[S], j = w._gsap || Br(m)[S]._gsap, e._ptLookup[S] = q = {}, vr[j.id] && Ue.length && Jt(), U = x === m ? S : x.indexOf(w), I && (V = new I()).init(w, F || g, e, U, x) !== !1 && (e._pt = b = new he(e._pt, w, V.name, 0, 1, V.render, V, 0, V.priority), V._props.forEach(function(R) {
        q[R] = b;
      }), V.priority && (A = 1)), !I || F)
        for (P in g)
          me[P] && (V = vn(P, g, e, U, w, x)) ? V.priority && (A = 1) : q[P] = b = Wr.call(e, w, P, "get", g[P], U, x, 0, i.stringFilter);
      e._op && e._op[S] && e.kill(w, e._op[S]), T && e._pt && (je = e, H.killTweensOf(w, q, e.globalTime(t)), Y = !e.parent, je = 0), e._pt && l && (vr[j.id] = 1);
    }
    A && Cn(e), e._onInit && e._onInit(e);
  }
  e._onUpdate = u, e._initted = (!e._op || e._pt) && !Y, h && t <= 0 && k.render(ke, !0, !0);
}, co = function(e, t, r, i, n, o, a, l) {
  var u = (e._pt && e._ptCache || (e._ptCache = {}))[t], c, d, h, _;
  if (!u)
    for (u = e._ptCache[t] = [], h = e._ptLookup, _ = e._targets.length; _--; ) {
      if (c = h[_][t], c && c.d && c.d._pt)
        for (c = c.d._pt; c && c.p !== t && c.fp !== t; )
          c = c._next;
      if (!c)
        return Cr = 1, e.vars[t] = "+=0", qr(e, a), Cr = 0, l ? At(t + " not eligible for reset") : 1;
      u.push(c);
    }
  for (_ = u.length; _--; )
    d = u[_], c = d._pt || d, c.s = (i || i === 0) && !n ? i : c.s + (i || 0) + o * c.c, c.c = r - c.s, d.e && (d.e = ee(r) + ae(d.e)), d.b && (d.b = c.s + ae(d.b));
}, fo = function(e, t) {
  var r = e[0] ? Ke(e[0]).harness : 0, i = r && r.aliases, n, o, a, l;
  if (!i)
    return t;
  n = pt({}, t);
  for (o in i)
    if (o in n)
      for (l = i[o].split(","), a = l.length; a--; )
        n[l[a]] = n[o];
  return n;
}, ho = function(e, t, r, i) {
  var n = t.ease || i || "power1.inOut", o, a;
  if (le(t))
    a = r[e] || (r[e] = []), t.forEach(function(l, u) {
      return a.push({
        t: u / (t.length - 1) * 100,
        v: l,
        e: n
      });
    });
  else
    for (o in t)
      a = r[o] || (r[o] = []), o === "ease" || a.push({
        t: parseFloat(e),
        v: t[o],
        e: n
      });
}, Mt = function(e, t, r, i, n) {
  return Q(e) ? e.call(t, r, i, n) : se(e) && ~e.indexOf("random(") ? Dt(e) : e;
}, wn = Ur + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", kn = {};
de(wn + ",id,stagger,delay,duration,paused,scrollTrigger", function(s) {
  return kn[s] = 1;
});
var te = /* @__PURE__ */ (function(s) {
  Vi(e, s);
  function e(r, i, n, o) {
    var a;
    typeof i == "number" && (n.duration = i, i = n, n = null), a = s.call(this, o ? i : Rt(i)) || this;
    var l = a.vars, u = l.duration, c = l.delay, d = l.immediateRender, h = l.stagger, _ = l.overwrite, p = l.keyframes, f = l.defaults, m = l.scrollTrigger, y = l.yoyoEase, x = i.parent || H, T = (le(r) || Ui(r) ? Ne(r[0]) : "length" in i) ? [r] : Te(r), k, g, S, P, b, w, A, j;
    if (a._targets = T.length ? Br(T) : At("GSAP target " + r + " not found. https://gsap.com", !ye.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = _, p || h || Wt(u) || Wt(c)) {
      if (i = a.vars, k = a.timeline = new ue({
        data: "nested",
        defaults: f || {},
        targets: x && x.data === "nested" ? x.vars.targets : T
      }), k.kill(), k.parent = k._dp = ze(a), k._start = 0, h || Wt(u) || Wt(c)) {
        if (P = T.length, A = h && an(h), Me(h))
          for (b in h)
            ~wn.indexOf(b) && (j || (j = {}), j[b] = h[b]);
        for (g = 0; g < P; g++)
          S = Zt(i, kn), S.stagger = 0, y && (S.yoyoEase = y), j && pt(S, j), w = T[g], S.duration = +Mt(u, ze(a), g, w, T), S.delay = (+Mt(c, ze(a), g, w, T) || 0) - a._delay, !h && P === 1 && S.delay && (a._delay = c = S.delay, a._start += c, S.delay = 0), k.to(w, S, A ? A(g, w, T) : 0), k._ease = N.none;
        k.duration() ? u = c = 0 : a.timeline = 0;
      } else if (p) {
        Rt(ve(k.vars.defaults, {
          ease: "none"
        })), k._ease = tt(p.ease || i.ease || "none");
        var I = 0, V, q, U;
        if (le(p))
          p.forEach(function(F) {
            return k.to(T, F, ">");
          }), k.duration();
        else {
          S = {};
          for (b in p)
            b === "ease" || b === "easeEach" || ho(b, p[b], S, p.easeEach);
          for (b in S)
            for (V = S[b].sort(function(F, Y) {
              return F.t - Y.t;
            }), I = 0, g = 0; g < V.length; g++)
              q = V[g], U = {
                ease: q.e,
                duration: (q.t - (g ? V[g - 1].t : 0)) / 100 * u
              }, U[b] = q.v, k.to(T, U, I), I += U.duration;
          k.duration() < u && k.to({}, {
            duration: u - k.duration()
          });
        }
      }
      u || a.duration(u = k.duration());
    } else
      a.timeline = 0;
    return _ === !0 && !Ir && (je = ze(a), H.killTweensOf(T), je = 0), Re(x, ze(a), n), i.reversed && a.reverse(), i.paused && a.paused(!0), (d || !u && !p && a._start === re(x._time) && fe(d) && Bs(ze(a)) && x.data !== "nested") && (a._tTime = -G, a.render(Math.max(0, -c) || 0)), m && rn(ze(a), m), a;
  }
  var t = e.prototype;
  return t.render = function(i, n, o) {
    var a = this._time, l = this._tDur, u = this._dur, c = i < 0, d = i > l - G && !c ? l : i < G ? 0 : i, h, _, p, f, m, y, x, T, k;
    if (!u)
      Ws(this, i, n, o);
    else if (d !== this._tTime || !i || o || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== c || this._lazy) {
      if (h = d, T = this.timeline, this._repeat) {
        if (f = u + this._rDelay, this._repeat < -1 && c)
          return this.totalTime(f * 100 + i, n, o);
        if (h = re(d % f), d === l ? (p = this._repeat, h = u) : (m = re(d / f), p = ~~m, p && p === m ? (h = u, p--) : h > u && (h = u)), y = this._yoyo && p & 1, y && (k = this._yEase, h = u - h), m = mt(this._tTime, f), h === a && !o && this._initted && p === m)
          return this._tTime = d, this;
        p !== m && (T && this._yEase && bn(T, y), this.vars.repeatRefresh && !y && !this._lock && h !== f && this._initted && (this._lock = o = 1, this.render(re(f * p), !0).invalidate()._lock = 0));
      }
      if (!this._initted) {
        if (nn(this, c ? i : h, o, n, d))
          return this._tTime = 0, this;
        if (a !== this._time && !(o && this.vars.repeatRefresh && p !== m))
          return this;
        if (u !== this._dur)
          return this.render(i, n, o);
      }
      if (this._tTime = d, this._time = h, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = x = (k || this._ease)(h / u), this._from && (this.ratio = x = 1 - x), !a && d && !n && !m && (be(this, "onStart"), this._tTime !== d))
        return this;
      for (_ = this._pt; _; )
        _.r(x, _.d), _ = _._next;
      T && T.render(i < 0 ? i : T._dur * T._ease(h / this._dur), n, o) || this._startAt && (this._zTime = i), this._onUpdate && !n && (c && wr(this, i, n, o), be(this, "onUpdate")), this._repeat && p !== m && this.vars.onRepeat && !n && this.parent && be(this, "onRepeat"), (d === this._tDur || !d) && this._tTime === d && (c && !this._onUpdate && wr(this, i, !0, !0), (i || !u) && (d === this._tDur && this._ts > 0 || !d && this._ts < 0) && Ge(this, 1), !n && !(c && !a) && (d || a || y) && (be(this, d === l ? "onComplete" : "onReverseComplete", !0), this._prom && !(d < l && this.timeScale() > 0) && this._prom()));
    }
    return this;
  }, t.targets = function() {
    return this._targets;
  }, t.invalidate = function(i) {
    return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), s.prototype.invalidate.call(this, i);
  }, t.resetTo = function(i, n, o, a, l) {
    Nt || ge.wake(), this._ts || this.play();
    var u = Math.min(this._dur, (this._dp._time - this._start) * this._ts), c;
    return this._initted || qr(this, u), c = this._ease(u / this._dur), co(this, i, n, o, a, c, u, l) ? this.resetTo(i, n, o, a, 1) : (nr(this, 0), this.parent || en(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
  }, t.kill = function(i, n) {
    if (n === void 0 && (n = "all"), !i && (!n || n === "all"))
      return this._lazy = this._pt = 0, this.parent ? Ct(this) : this.scrollTrigger && this.scrollTrigger.kill(!!oe), this;
    if (this.timeline) {
      var o = this.timeline.totalDuration();
      return this.timeline.killTweensOf(i, n, je && je.vars.overwrite !== !0)._first || Ct(this), this.parent && o !== this.timeline.totalDuration() && gt(this, this._dur * this.timeline._tDur / o, 0, 1), this;
    }
    var a = this._targets, l = i ? Te(i) : a, u = this._ptLookup, c = this._pt, d, h, _, p, f, m, y;
    if ((!n || n === "all") && Ys(a, l))
      return n === "all" && (this._pt = 0), Ct(this);
    for (d = this._op = this._op || [], n !== "all" && (se(n) && (f = {}, de(n, function(x) {
      return f[x] = 1;
    }), n = f), n = fo(a, n)), y = a.length; y--; )
      if (~l.indexOf(a[y])) {
        h = u[y], n === "all" ? (d[y] = n, p = h, _ = {}) : (_ = d[y] = d[y] || {}, p = n);
        for (f in p)
          m = h && h[f], m && ((!("kill" in m.d) || m.d.kill(f) === !0) && rr(this, m, "_pt"), delete h[f]), _ !== "all" && (_[f] = 1);
      }
    return this._initted && !this._pt && c && Ct(this), this;
  }, e.to = function(i, n) {
    return new e(i, n, arguments[2]);
  }, e.from = function(i, n) {
    return Et(1, arguments);
  }, e.delayedCall = function(i, n, o, a) {
    return new e(n, 0, {
      immediateRender: !1,
      lazy: !1,
      overwrite: !1,
      delay: i,
      onComplete: n,
      onReverseComplete: n,
      onCompleteParams: o,
      onReverseCompleteParams: o,
      callbackScope: a
    });
  }, e.fromTo = function(i, n, o) {
    return Et(2, arguments);
  }, e.set = function(i, n) {
    return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n);
  }, e.killTweensOf = function(i, n, o) {
    return H.killTweensOf(i, n, o);
  }, e;
})(It);
ve(te.prototype, {
  _targets: [],
  _lazy: 0,
  _startAt: 0,
  _op: 0,
  _onInit: 0
});
de("staggerTo,staggerFrom,staggerFromTo", function(s) {
  te[s] = function() {
    var e = new ue(), t = Tr.call(arguments, 0);
    return t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t);
  };
});
var Xr = function(e, t, r) {
  return e[t] = r;
}, Tn = function(e, t, r) {
  return e[t](r);
}, _o = function(e, t, r, i) {
  return e[t](i.fp, r);
}, po = function(e, t, r) {
  return e.setAttribute(t, r);
}, $r = function(e, t) {
  return Q(e[t]) ? Tn : Fr(e[t]) && e.setAttribute ? po : Xr;
}, Sn = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
}, mo = function(e, t) {
  return t.set(t.t, t.p, !!(t.s + t.c * e), t);
}, Pn = function(e, t) {
  var r = t._pt, i = "";
  if (!e && t.b)
    i = t.b;
  else if (e === 1 && t.e)
    i = t.e;
  else {
    for (; r; )
      i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
    i += t.c;
  }
  t.set(t.t, t.p, i, t);
}, Hr = function(e, t) {
  for (var r = t._pt; r; )
    r.r(e, r.d), r = r._next;
}, go = function(e, t, r, i) {
  for (var n = this._pt, o; n; )
    o = n._next, n.p === i && n.modifier(e, t, r), n = o;
}, bo = function(e) {
  for (var t = this._pt, r, i; t; )
    i = t._next, t.p === e && !t.op || t.op === e ? rr(this, t, "_pt") : t.dep || (r = 1), t = i;
  return !r;
}, yo = function(e, t, r, i) {
  i.mSet(e, t, i.m.call(i.tween, r, i.mt), i);
}, Cn = function(e) {
  for (var t = e._pt, r, i, n, o; t; ) {
    for (r = t._next, i = n; i && i.pr > t.pr; )
      i = i._next;
    (t._prev = i ? i._prev : o) ? t._prev._next = t : n = t, (t._next = i) ? i._prev = t : o = t, t = r;
  }
  e._pt = n;
}, he = /* @__PURE__ */ (function() {
  function s(t, r, i, n, o, a, l, u, c) {
    this.t = r, this.s = n, this.c = o, this.p = i, this.r = a || Sn, this.d = l || this, this.set = u || Xr, this.pr = c || 0, this._next = t, t && (t._prev = this);
  }
  var e = s.prototype;
  return e.modifier = function(r, i, n) {
    this.mSet = this.mSet || this.set, this.set = yo, this.m = r, this.mt = n, this.tween = i;
  }, s;
})();
de(Ur + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(s) {
  return Yr[s] = 1;
});
xe.TweenMax = xe.TweenLite = te;
xe.TimelineLite = xe.TimelineMax = ue;
H = new ue({
  sortChildren: !1,
  defaults: _t,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0
});
ye.stringFilter = mn;
var rt = [], $t = {}, xo = [], mi = 0, vo = 0, dr = function(e) {
  return ($t[e] || xo).map(function(t) {
    return t();
  });
}, Or = function() {
  var e = Date.now(), t = [];
  e - mi > 2 && (dr("matchMediaInit"), rt.forEach(function(r) {
    var i = r.queries, n = r.conditions, o, a, l, u;
    for (a in i)
      o = Oe.matchMedia(i[a]).matches, o && (l = 1), o !== n[a] && (n[a] = o, u = 1);
    u && (r.revert(), l && t.push(r));
  }), dr("matchMediaRevert"), t.forEach(function(r) {
    return r.onMatch(r, function(i) {
      return r.add(null, i);
    });
  }), mi = e, dr("matchMedia"));
}, On = /* @__PURE__ */ (function() {
  function s(t, r) {
    this.selector = r && Sr(r), this.data = [], this._r = [], this.isReverted = !1, this.id = vo++, t && this.add(t);
  }
  var e = s.prototype;
  return e.add = function(r, i, n) {
    Q(r) && (n = i, i = r, r = Q);
    var o = this, a = function() {
      var u = X, c = o.selector, d;
      return u && u !== o && u.data.push(o), n && (o.selector = Sr(n)), X = o, d = i.apply(o, arguments), Q(d) && o._r.push(d), X = u, o.selector = c, o.isReverted = !1, d;
    };
    return o.last = a, r === Q ? a(o, function(l) {
      return o.add(null, l);
    }) : r ? o[r] = a : a;
  }, e.ignore = function(r) {
    var i = X;
    X = null, r(this), X = i;
  }, e.getTweens = function() {
    var r = [];
    return this.data.forEach(function(i) {
      return i instanceof s ? r.push.apply(r, i.getTweens()) : i instanceof te && !(i.parent && i.parent.data === "nested") && r.push(i);
    }), r;
  }, e.clear = function() {
    this._r.length = this.data.length = 0;
  }, e.kill = function(r, i) {
    var n = this;
    if (r ? (function() {
      for (var a = n.getTweens(), l = n.data.length, u; l--; )
        u = n.data[l], u.data === "isFlip" && (u.revert(), u.getChildren(!0, !0, !1).forEach(function(c) {
          return a.splice(a.indexOf(c), 1);
        }));
      for (a.map(function(c) {
        return {
          g: c._dur || c._delay || c._sat && !c._sat.vars.immediateRender ? c.globalTime(0) : -1 / 0,
          t: c
        };
      }).sort(function(c, d) {
        return d.g - c.g || -1 / 0;
      }).forEach(function(c) {
        return c.t.revert(r);
      }), l = n.data.length; l--; )
        u = n.data[l], u instanceof ue ? u.data !== "nested" && (u.scrollTrigger && u.scrollTrigger.revert(), u.kill()) : !(u instanceof te) && u.revert && u.revert(r);
      n._r.forEach(function(c) {
        return c(r, n);
      }), n.isReverted = !0;
    })() : this.data.forEach(function(a) {
      return a.kill && a.kill();
    }), this.clear(), i)
      for (var o = rt.length; o--; )
        rt[o].id === this.id && rt.splice(o, 1);
  }, e.revert = function(r) {
    this.kill(r || {});
  }, s;
})(), wo = /* @__PURE__ */ (function() {
  function s(t) {
    this.contexts = [], this.scope = t, X && X.data.push(this);
  }
  var e = s.prototype;
  return e.add = function(r, i, n) {
    Me(r) || (r = {
      matches: r
    });
    var o = new On(0, n || this.scope), a = o.conditions = {}, l, u, c;
    X && !o.selector && (o.selector = X.selector), this.contexts.push(o), i = o.add("onMatch", i), o.queries = r;
    for (u in r)
      u === "all" ? c = 1 : (l = Oe.matchMedia(r[u]), l && (rt.indexOf(o) < 0 && rt.push(o), (a[u] = l.matches) && (c = 1), l.addListener ? l.addListener(Or) : l.addEventListener("change", Or)));
    return c && i(o, function(d) {
      return o.add(null, d);
    }), this;
  }, e.revert = function(r) {
    this.kill(r || {});
  }, e.kill = function(r) {
    this.contexts.forEach(function(i) {
      return i.kill(r, !0);
    });
  }, s;
})(), Kt = {
  registerPlugin: function() {
    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
      t[r] = arguments[r];
    t.forEach(function(i) {
      return hn(i);
    });
  },
  timeline: function(e) {
    return new ue(e);
  },
  getTweensOf: function(e, t) {
    return H.getTweensOf(e, t);
  },
  getProperty: function(e, t, r, i) {
    se(e) && (e = Te(e)[0]);
    var n = Ke(e || {}).get, o = r ? Ki : Qi;
    return r === "native" && (r = ""), e && (t ? o((me[t] && me[t].get || n)(e, t, r, i)) : function(a, l, u) {
      return o((me[a] && me[a].get || n)(e, a, l, u));
    });
  },
  quickSetter: function(e, t, r) {
    if (e = Te(e), e.length > 1) {
      var i = e.map(function(c) {
        return pe.quickSetter(c, t, r);
      }), n = i.length;
      return function(c) {
        for (var d = n; d--; )
          i[d](c);
      };
    }
    e = e[0] || {};
    var o = me[t], a = Ke(e), l = a.harness && (a.harness.aliases || {})[t] || t, u = o ? function(c) {
      var d = new o();
      ct._pt = 0, d.init(e, r ? c + r : c, ct, 0, [e]), d.render(1, d), ct._pt && Hr(1, ct);
    } : a.set(e, l);
    return o ? u : function(c) {
      return u(e, l, r ? c + r : c, a, 1);
    };
  },
  quickTo: function(e, t, r) {
    var i, n = pe.to(e, ve((i = {}, i[t] = "+=0.1", i.paused = !0, i.stagger = 0, i), r || {})), o = function(l, u, c) {
      return n.resetTo(t, l, u, c);
    };
    return o.tween = n, o;
  },
  isTweening: function(e) {
    return H.getTweensOf(e, !0).length > 0;
  },
  defaults: function(e) {
    return e && e.ease && (e.ease = tt(e.ease, _t.ease)), fi(_t, e || {});
  },
  config: function(e) {
    return fi(ye, e || {});
  },
  registerEffect: function(e) {
    var t = e.name, r = e.effect, i = e.plugins, n = e.defaults, o = e.extendTimeline;
    (i || "").split(",").forEach(function(a) {
      return a && !me[a] && !xe[a] && At(t + " effect requires " + a + " plugin.");
    }), lr[t] = function(a, l, u) {
      return r(Te(a), ve(l || {}, n), u);
    }, o && (ue.prototype[t] = function(a, l, u) {
      return this.add(lr[t](a, Me(l) ? l : (u = l) && {}, this), u);
    });
  },
  registerEase: function(e, t) {
    N[e] = tt(t);
  },
  parseEase: function(e, t) {
    return arguments.length ? tt(e, t) : N;
  },
  getById: function(e) {
    return H.getById(e);
  },
  exportRoot: function(e, t) {
    e === void 0 && (e = {});
    var r = new ue(e), i, n;
    for (r.smoothChildTiming = fe(e.smoothChildTiming), H.remove(r), r._dp = 0, r._time = r._tTime = H._time, i = H._first; i; )
      n = i._next, (t || !(!i._dur && i instanceof te && i.vars.onComplete === i._targets[0])) && Re(r, i, i._start - i._delay), i = n;
    return Re(H, r, 0), r;
  },
  context: function(e, t) {
    return e ? new On(e, t) : X;
  },
  matchMedia: function(e) {
    return new wo(e);
  },
  matchMediaRefresh: function() {
    return rt.forEach(function(e) {
      var t = e.conditions, r, i;
      for (i in t)
        t[i] && (t[i] = !1, r = 1);
      r && e.revert();
    }) || Or();
  },
  addEventListener: function(e, t) {
    var r = $t[e] || ($t[e] = []);
    ~r.indexOf(t) || r.push(t);
  },
  removeEventListener: function(e, t) {
    var r = $t[e], i = r && r.indexOf(t);
    i >= 0 && r.splice(i, 1);
  },
  utils: {
    wrap: Ks,
    wrapYoyo: eo,
    distribute: an,
    random: un,
    snap: ln,
    normalize: Qs,
    getUnit: ae,
    clamp: $s,
    splitColor: _n,
    toArray: Te,
    selector: Sr,
    mapRange: fn,
    pipe: Js,
    unitize: Zs,
    interpolate: to,
    shuffle: on
  },
  install: Xi,
  effects: lr,
  ticker: ge,
  updateRoot: ue.updateRoot,
  plugins: me,
  globalTimeline: H,
  core: {
    PropTween: he,
    globals: $i,
    Tween: te,
    Timeline: ue,
    Animation: It,
    getCache: Ke,
    _removeLinkedListItem: rr,
    reverting: function() {
      return oe;
    },
    context: function(e) {
      return e && X && (X.data.push(e), e._ctx = X), X;
    },
    suppressOverwrites: function(e) {
      return Ir = e;
    }
  }
};
de("to,from,fromTo,delayedCall,set,killTweensOf", function(s) {
  return Kt[s] = te[s];
});
ge.add(ue.updateRoot);
ct = Kt.to({}, {
  duration: 0
});
var ko = function(e, t) {
  for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t; )
    r = r._next;
  return r;
}, To = function(e, t) {
  var r = e._targets, i, n, o;
  for (i in t)
    for (n = r.length; n--; )
      o = e._ptLookup[n][i], o && (o = o.d) && (o._pt && (o = ko(o, i)), o && o.modifier && o.modifier(t[i], e, r[n], i));
}, hr = function(e, t) {
  return {
    name: e,
    headless: 1,
    rawVars: 1,
    //don't pre-process function-based values or "random()" strings.
    init: function(i, n, o) {
      o._onInit = function(a) {
        var l, u;
        if (se(n) && (l = {}, de(n, function(c) {
          return l[c] = 1;
        }), n = l), t) {
          l = {};
          for (u in n)
            l[u] = t(n[u]);
          n = l;
        }
        To(a, n);
      };
    }
  };
}, pe = Kt.registerPlugin({
  name: "attr",
  init: function(e, t, r, i, n) {
    var o, a, l;
    this.tween = r;
    for (o in t)
      l = e.getAttribute(o) || "", a = this.add(e, "setAttribute", (l || 0) + "", t[o], i, n, 0, 0, o), a.op = o, a.b = l, this._props.push(o);
  },
  render: function(e, t) {
    for (var r = t._pt; r; )
      oe ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next;
  }
}, {
  name: "endArray",
  headless: 1,
  init: function(e, t) {
    for (var r = t.length; r--; )
      this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1);
  }
}, hr("roundProps", Pr), hr("modifiers"), hr("snap", ln)) || Kt;
te.version = ue.version = pe.version = "3.13.0";
qi = 1;
Lr() && bt();
N.Power0;
N.Power1;
N.Power2;
N.Power3;
N.Power4;
N.Linear;
N.Quad;
N.Cubic;
N.Quart;
N.Quint;
N.Strong;
N.Elastic;
N.Back;
N.SteppedEase;
N.Bounce;
N.Sine;
N.Expo;
N.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/
var gi, Ve, dt, Jr, Ze, bi, Zr, So = function() {
  return typeof window < "u";
}, Ie = {}, Je = 180 / Math.PI, ht = Math.PI / 180, lt = Math.atan2, yi = 1e8, Qr = /([A-Z])/g, Po = /(left|right|width|margin|padding|x)/i, Co = /[\s,\(]\S/, Ee = {
  autoAlpha: "opacity,visibility",
  scale: "scaleX,scaleY",
  alpha: "opacity"
}, Rr = function(e, t) {
  return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Oo = function(e, t) {
  return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
}, Ro = function(e, t) {
  return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t);
}, Eo = function(e, t) {
  var r = t.s + t.c * e;
  t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
}, Rn = function(e, t) {
  return t.set(t.t, t.p, e ? t.e : t.b, t);
}, En = function(e, t) {
  return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
}, Mo = function(e, t, r) {
  return e.style[t] = r;
}, Ao = function(e, t, r) {
  return e.style.setProperty(t, r);
}, zo = function(e, t, r) {
  return e._gsap[t] = r;
}, Do = function(e, t, r) {
  return e._gsap.scaleX = e._gsap.scaleY = r;
}, No = function(e, t, r, i, n) {
  var o = e._gsap;
  o.scaleX = o.scaleY = r, o.renderTransform(n, o);
}, Io = function(e, t, r, i, n) {
  var o = e._gsap;
  o[t] = r, o.renderTransform(n, o);
}, J = "transform", _e = J + "Origin", Fo = function s(e, t) {
  var r = this, i = this.target, n = i.style, o = i._gsap;
  if (e in Ie && n) {
    if (this.tfm = this.tfm || {}, e !== "transform")
      e = Ee[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(a) {
        return r.tfm[a] = De(i, a);
      }) : this.tfm[e] = o.x ? o[e] : De(i, e), e === _e && (this.tfm.zOrigin = o.zOrigin);
    else
      return Ee.transform.split(",").forEach(function(a) {
        return s.call(r, a, t);
      });
    if (this.props.indexOf(J) >= 0)
      return;
    o.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(_e, t, "")), e = J;
  }
  (n || t) && this.props.push(e, t, n[e]);
}, Mn = function(e) {
  e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"));
}, Lo = function() {
  var e = this.props, t = this.target, r = t.style, i = t._gsap, n, o;
  for (n = 0; n < e.length; n += 3)
    e[n + 1] ? e[n + 1] === 2 ? t[e[n]](e[n + 2]) : t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].substr(0, 2) === "--" ? e[n] : e[n].replace(Qr, "-$1").toLowerCase());
  if (this.tfm) {
    for (o in this.tfm)
      i[o] = this.tfm[o];
    i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Zr(), (!n || !n.isStart) && !r[J] && (Mn(r), i.zOrigin && r[_e] && (r[_e] += " " + i.zOrigin + "px", i.zOrigin = 0, i.renderTransform()), i.uncache = 1);
  }
}, An = function(e, t) {
  var r = {
    target: e,
    props: [],
    revert: Lo,
    save: Fo
  };
  return e._gsap || pe.core.getCache(e), t && e.style && e.nodeType && t.split(",").forEach(function(i) {
    return r.save(i);
  }), r;
}, zn, Er = function(e, t) {
  var r = Ve.createElementNS ? Ve.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Ve.createElement(e);
  return r && r.style ? r : Ve.createElement(e);
}, Se = function s(e, t, r) {
  var i = getComputedStyle(e);
  return i[t] || i.getPropertyValue(t.replace(Qr, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && s(e, yt(t) || t, 1) || "";
}, xi = "O,Moz,ms,Ms,Webkit".split(","), yt = function(e, t, r) {
  var i = t || Ze, n = i.style, o = 5;
  if (e in n && !r)
    return e;
  for (e = e.charAt(0).toUpperCase() + e.substr(1); o-- && !(xi[o] + e in n); )
    ;
  return o < 0 ? null : (o === 3 ? "ms" : o >= 0 ? xi[o] : "") + e;
}, Mr = function() {
  So() && window.document && (gi = window, Ve = gi.document, dt = Ve.documentElement, Ze = Er("div") || {
    style: {}
  }, Er("div"), J = yt(J), _e = J + "Origin", Ze.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", zn = !!yt("perspective"), Zr = pe.core.reverting, Jr = 1);
}, vi = function(e) {
  var t = e.ownerSVGElement, r = Er("svg", t && t.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = e.cloneNode(!0), n;
  i.style.display = "block", r.appendChild(i), dt.appendChild(r);
  try {
    n = i.getBBox();
  } catch {
  }
  return r.removeChild(i), dt.removeChild(r), n;
}, wi = function(e, t) {
  for (var r = t.length; r--; )
    if (e.hasAttribute(t[r]))
      return e.getAttribute(t[r]);
}, Dn = function(e) {
  var t, r;
  try {
    t = e.getBBox();
  } catch {
    t = vi(e), r = 1;
  }
  return t && (t.width || t.height) || r || (t = vi(e)), t && !t.width && !t.x && !t.y ? {
    x: +wi(e, ["x", "cx", "x1"]) || 0,
    y: +wi(e, ["y", "cy", "y1"]) || 0,
    width: 0,
    height: 0
  } : t;
}, Nn = function(e) {
  return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Dn(e));
}, nt = function(e, t) {
  if (t) {
    var r = e.style, i;
    t in Ie && t !== _e && (t = J), r.removeProperty ? (i = t.substr(0, 2), (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(i === "--" ? t : t.replace(Qr, "-$1").toLowerCase())) : r.removeAttribute(t);
  }
}, Ye = function(e, t, r, i, n, o) {
  var a = new he(e._pt, t, r, 0, 1, o ? En : Rn);
  return e._pt = a, a.b = i, a.e = n, e._props.push(r), a;
}, ki = {
  deg: 1,
  rad: 1,
  turn: 1
}, jo = {
  grid: 1,
  flex: 1
}, We = function s(e, t, r, i) {
  var n = parseFloat(r) || 0, o = (r + "").trim().substr((n + "").length) || "px", a = Ze.style, l = Po.test(t), u = e.tagName.toLowerCase() === "svg", c = (u ? "client" : "offset") + (l ? "Width" : "Height"), d = 100, h = i === "px", _ = i === "%", p, f, m, y;
  if (i === o || !n || ki[i] || ki[o])
    return n;
  if (o !== "px" && !h && (n = s(e, t, r, "px")), y = e.getCTM && Nn(e), (_ || o === "%") && (Ie[t] || ~t.indexOf("adius")))
    return p = y ? e.getBBox()[l ? "width" : "height"] : e[c], ee(_ ? n / p * d : n / 100 * p);
  if (a[l ? "width" : "height"] = d + (h ? o : i), f = i !== "rem" && ~t.indexOf("adius") || i === "em" && e.appendChild && !u ? e : e.parentNode, y && (f = (e.ownerSVGElement || {}).parentNode), (!f || f === Ve || !f.appendChild) && (f = Ve.body), m = f._gsap, m && _ && m.width && l && m.time === ge.time && !m.uncache)
    return ee(n / m.width * d);
  if (_ && (t === "height" || t === "width")) {
    var x = e.style[t];
    e.style[t] = d + i, p = e[c], x ? e.style[t] = x : nt(e, t);
  } else
    (_ || o === "%") && !jo[Se(f, "display")] && (a.position = Se(e, "position")), f === e && (a.position = "static"), f.appendChild(Ze), p = Ze[c], f.removeChild(Ze), a.position = "absolute";
  return l && _ && (m = Ke(f), m.time = ge.time, m.width = f[c]), ee(h ? p * n / d : p && n ? d / p * n : 0);
}, De = function(e, t, r, i) {
  var n;
  return Jr || Mr(), t in Ee && t !== "transform" && (t = Ee[t], ~t.indexOf(",") && (t = t.split(",")[0])), Ie[t] && t !== "transform" ? (n = Lt(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : tr(Se(e, _e)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = er[t] && er[t](e, t, r) || Se(e, t) || Ji(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? We(e, t, n, r) + r : n;
}, Vo = function(e, t, r, i) {
  if (!r || r === "none") {
    var n = yt(t, e, 1), o = n && Se(e, n, 1);
    o && o !== r ? (t = n, r = o) : t === "borderColor" && (r = Se(e, "borderTopColor"));
  }
  var a = new he(this._pt, e.style, t, 0, 1, Pn), l = 0, u = 0, c, d, h, _, p, f, m, y, x, T, k, g;
  if (a.b = r, a.e = i, r += "", i += "", i.substring(0, 6) === "var(--" && (i = Se(e, i.substring(4, i.indexOf(")")))), i === "auto" && (f = e.style[t], e.style[t] = i, i = Se(e, t) || i, f ? e.style[t] = f : nt(e, t)), c = [r, i], mn(c), r = c[0], i = c[1], h = r.match(ut) || [], g = i.match(ut) || [], g.length) {
    for (; d = ut.exec(i); )
      m = d[0], x = i.substring(l, d.index), p ? p = (p + 1) % 5 : (x.substr(-5) === "rgba(" || x.substr(-5) === "hsla(") && (p = 1), m !== (f = h[u++] || "") && (_ = parseFloat(f) || 0, k = f.substr((_ + "").length), m.charAt(1) === "=" && (m = ft(_, m) + k), y = parseFloat(m), T = m.substr((y + "").length), l = ut.lastIndex - T.length, T || (T = T || ye.units[t] || k, l === i.length && (i += T, a.e += T)), k !== T && (_ = We(e, t, f, T) || 0), a._pt = {
        _next: a._pt,
        p: x || u === 1 ? x : ",",
        //note: SVG spec allows omission of comma/space when a negative sign is wedged between two numbers, like 2.5-5.3 instead of 2.5,-5.3 but when tweening, the negative value may switch to positive, so we insert the comma just in case.
        s: _,
        c: y - _,
        m: p && p < 4 || t === "zIndex" ? Math.round : 0
      });
    a.c = l < i.length ? i.substring(l, i.length) : "";
  } else
    a.r = t === "display" && i === "none" ? En : Rn;
  return Gi.test(i) && (a.e = 0), this._pt = a, a;
}, Ti = {
  top: "0%",
  bottom: "100%",
  left: "0%",
  right: "100%",
  center: "50%"
}, Yo = function(e) {
  var t = e.split(" "), r = t[0], i = t[1] || "50%";
  return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = Ti[r] || r, t[1] = Ti[i] || i, t.join(" ");
}, Uo = function(e, t) {
  if (t.tween && t.tween._time === t.tween._dur) {
    var r = t.t, i = r.style, n = t.u, o = r._gsap, a, l, u;
    if (n === "all" || n === !0)
      i.cssText = "", l = 1;
    else
      for (n = n.split(","), u = n.length; --u > -1; )
        a = n[u], Ie[a] && (l = 1, a = a === "transformOrigin" ? _e : J), nt(r, a);
    l && (nt(r, J), o && (o.svg && r.removeAttribute("transform"), i.scale = i.rotate = i.translate = "none", Lt(r, 1), o.uncache = 1, Mn(i)));
  }
}, er = {
  clearProps: function(e, t, r, i, n) {
    if (n.data !== "isFromStart") {
      var o = e._pt = new he(e._pt, t, r, 0, 0, Uo);
      return o.u = i, o.pr = -10, o.tween = n, e._props.push(r), 1;
    }
  }
  /* className feature (about 0.4kb gzipped).
  , className(plugin, target, property, endValue, tween) {
  	let _renderClassName = (ratio, data) => {
  			data.css.render(ratio, data.css);
  			if (!ratio || ratio === 1) {
  				let inline = data.rmv,
  					target = data.t,
  					p;
  				target.setAttribute("class", ratio ? data.e : data.b);
  				for (p in inline) {
  					_removeProperty(target, p);
  				}
  			}
  		},
  		_getAllStyles = (target) => {
  			let styles = {},
  				computed = getComputedStyle(target),
  				p;
  			for (p in computed) {
  				if (isNaN(p) && p !== "cssText" && p !== "length") {
  					styles[p] = computed[p];
  				}
  			}
  			_setDefaults(styles, _parseTransform(target, 1));
  			return styles;
  		},
  		startClassList = target.getAttribute("class"),
  		style = target.style,
  		cssText = style.cssText,
  		cache = target._gsap,
  		classPT = cache.classPT,
  		inlineToRemoveAtEnd = {},
  		data = {t:target, plugin:plugin, rmv:inlineToRemoveAtEnd, b:startClassList, e:(endValue.charAt(1) !== "=") ? endValue : startClassList.replace(new RegExp("(?:\\s|^)" + endValue.substr(2) + "(?![\\w-])"), "") + ((endValue.charAt(0) === "+") ? " " + endValue.substr(2) : "")},
  		changingVars = {},
  		startVars = _getAllStyles(target),
  		transformRelated = /(transform|perspective)/i,
  		endVars, p;
  	if (classPT) {
  		classPT.r(1, classPT.d);
  		_removeLinkedListItem(classPT.d.plugin, classPT, "_pt");
  	}
  	target.setAttribute("class", data.e);
  	endVars = _getAllStyles(target, true);
  	target.setAttribute("class", startClassList);
  	for (p in endVars) {
  		if (endVars[p] !== startVars[p] && !transformRelated.test(p)) {
  			changingVars[p] = endVars[p];
  			if (!style[p] && style[p] !== "0") {
  				inlineToRemoveAtEnd[p] = 1;
  			}
  		}
  	}
  	cache.classPT = plugin._pt = new PropTween(plugin._pt, target, "className", 0, 0, _renderClassName, data, 0, -11);
  	if (style.cssText !== cssText) { //only apply if things change. Otherwise, in cases like a background-image that's pulled dynamically, it could cause a refresh. See https://gsap.com/forums/topic/20368-possible-gsap-bug-switching-classnames-in-chrome/.
  		style.cssText = cssText; //we recorded cssText before we swapped classes and ran _getAllStyles() because in cases when a className tween is overwritten, we remove all the related tweening properties from that class change (otherwise class-specific stuff can't override properties we've directly set on the target's style object due to specificity).
  	}
  	_parseTransform(target, true); //to clear the caching of transforms
  	data.css = new gsap.plugins.css();
  	data.css.init(target, changingVars, tween);
  	plugin._props.push(...data.css._props);
  	return 1;
  }
  */
}, Ft = [1, 0, 0, 1, 0, 0], In = {}, Fn = function(e) {
  return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
}, Si = function(e) {
  var t = Se(e, J);
  return Fn(t) ? Ft : t.substr(7).match(Bi).map(ee);
}, Kr = function(e, t) {
  var r = e._gsap || Ke(e), i = e.style, n = Si(e), o, a, l, u;
  return r.svg && e.getAttribute("transform") ? (l = e.transform.baseVal.consolidate().matrix, n = [l.a, l.b, l.c, l.d, l.e, l.f], n.join(",") === "1,0,0,1,0,0" ? Ft : n) : (n === Ft && !e.offsetParent && e !== dt && !r.svg && (l = i.display, i.display = "block", o = e.parentNode, (!o || !e.offsetParent && !e.getBoundingClientRect().width) && (u = 1, a = e.nextElementSibling, dt.appendChild(e)), n = Si(e), l ? i.display = l : nt(e, "display"), u && (a ? o.insertBefore(e, a) : o ? o.appendChild(e) : dt.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n);
}, Ar = function(e, t, r, i, n, o) {
  var a = e._gsap, l = n || Kr(e, !0), u = a.xOrigin || 0, c = a.yOrigin || 0, d = a.xOffset || 0, h = a.yOffset || 0, _ = l[0], p = l[1], f = l[2], m = l[3], y = l[4], x = l[5], T = t.split(" "), k = parseFloat(T[0]) || 0, g = parseFloat(T[1]) || 0, S, P, b, w;
  r ? l !== Ft && (P = _ * m - p * f) && (b = k * (m / P) + g * (-f / P) + (f * x - m * y) / P, w = k * (-p / P) + g * (_ / P) - (_ * x - p * y) / P, k = b, g = w) : (S = Dn(e), k = S.x + (~T[0].indexOf("%") ? k / 100 * S.width : k), g = S.y + (~(T[1] || T[0]).indexOf("%") ? g / 100 * S.height : g)), i || i !== !1 && a.smooth ? (y = k - u, x = g - c, a.xOffset = d + (y * _ + x * f) - y, a.yOffset = h + (y * p + x * m) - x) : a.xOffset = a.yOffset = 0, a.xOrigin = k, a.yOrigin = g, a.smooth = !!i, a.origin = t, a.originIsAbsolute = !!r, e.style[_e] = "0px 0px", o && (Ye(o, a, "xOrigin", u, k), Ye(o, a, "yOrigin", c, g), Ye(o, a, "xOffset", d, a.xOffset), Ye(o, a, "yOffset", h, a.yOffset)), e.setAttribute("data-svg-origin", k + " " + g);
}, Lt = function(e, t) {
  var r = e._gsap || new xn(e);
  if ("x" in r && !t && !r.uncache)
    return r;
  var i = e.style, n = r.scaleX < 0, o = "px", a = "deg", l = getComputedStyle(e), u = Se(e, _e) || "0", c, d, h, _, p, f, m, y, x, T, k, g, S, P, b, w, A, j, I, V, q, U, F, Y, R, Ce, v, E, z, D, L, $;
  return c = d = h = f = m = y = x = T = k = 0, _ = p = 1, r.svg = !!(e.getCTM && Nn(e)), l.translate && ((l.translate !== "none" || l.scale !== "none" || l.rotate !== "none") && (i[J] = (l.translate !== "none" ? "translate3d(" + (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") + (l.scale !== "none" ? "scale(" + l.scale.split(" ").join(",") + ") " : "") + (l[J] !== "none" ? l[J] : "")), i.scale = i.rotate = i.translate = "none"), P = Kr(e, r.svg), r.svg && (r.uncache ? (R = e.getBBox(), u = r.xOrigin - R.x + "px " + (r.yOrigin - R.y) + "px", Y = "") : Y = !t && e.getAttribute("data-svg-origin"), Ar(e, Y || u, !!Y || r.originIsAbsolute, r.smooth !== !1, P)), g = r.xOrigin || 0, S = r.yOrigin || 0, P !== Ft && (j = P[0], I = P[1], V = P[2], q = P[3], c = U = P[4], d = F = P[5], P.length === 6 ? (_ = Math.sqrt(j * j + I * I), p = Math.sqrt(q * q + V * V), f = j || I ? lt(I, j) * Je : 0, x = V || q ? lt(V, q) * Je + f : 0, x && (p *= Math.abs(Math.cos(x * ht))), r.svg && (c -= g - (g * j + S * V), d -= S - (g * I + S * q))) : ($ = P[6], D = P[7], v = P[8], E = P[9], z = P[10], L = P[11], c = P[12], d = P[13], h = P[14], b = lt($, z), m = b * Je, b && (w = Math.cos(-b), A = Math.sin(-b), Y = U * w + v * A, R = F * w + E * A, Ce = $ * w + z * A, v = U * -A + v * w, E = F * -A + E * w, z = $ * -A + z * w, L = D * -A + L * w, U = Y, F = R, $ = Ce), b = lt(-V, z), y = b * Je, b && (w = Math.cos(-b), A = Math.sin(-b), Y = j * w - v * A, R = I * w - E * A, Ce = V * w - z * A, L = q * A + L * w, j = Y, I = R, V = Ce), b = lt(I, j), f = b * Je, b && (w = Math.cos(b), A = Math.sin(b), Y = j * w + I * A, R = U * w + F * A, I = I * w - j * A, F = F * w - U * A, j = Y, U = R), m && Math.abs(m) + Math.abs(f) > 359.9 && (m = f = 0, y = 180 - y), _ = ee(Math.sqrt(j * j + I * I + V * V)), p = ee(Math.sqrt(F * F + $ * $)), b = lt(U, F), x = Math.abs(b) > 2e-4 ? b * Je : 0, k = L ? 1 / (L < 0 ? -L : L) : 0), r.svg && (Y = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !Fn(Se(e, J)), Y && e.setAttribute("transform", Y))), Math.abs(x) > 90 && Math.abs(x) < 270 && (n ? (_ *= -1, x += f <= 0 ? 180 : -180, f += f <= 0 ? 180 : -180) : (p *= -1, x += x <= 0 ? 180 : -180)), t = t || r.uncache, r.x = c - ((r.xPercent = c && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-c) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + o, r.y = d - ((r.yPercent = d && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-d) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + o, r.z = h + o, r.scaleX = ee(_), r.scaleY = ee(p), r.rotation = ee(f) + a, r.rotationX = ee(m) + a, r.rotationY = ee(y) + a, r.skewX = x + a, r.skewY = T + a, r.transformPerspective = k + o, (r.zOrigin = parseFloat(u.split(" ")[2]) || !t && r.zOrigin || 0) && (i[_e] = tr(u)), r.xOffset = r.yOffset = 0, r.force3D = ye.force3D, r.renderTransform = r.svg ? Go : zn ? Ln : Bo, r.uncache = 0, r;
}, tr = function(e) {
  return (e = e.split(" "))[0] + " " + e[1];
}, _r = function(e, t, r) {
  var i = ae(t);
  return ee(parseFloat(t) + parseFloat(We(e, "x", r + "px", i))) + i;
}, Bo = function(e, t) {
  t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, Ln(e, t);
}, $e = "0deg", Pt = "0px", He = ") ", Ln = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.z, u = r.rotation, c = r.rotationY, d = r.rotationX, h = r.skewX, _ = r.skewY, p = r.scaleX, f = r.scaleY, m = r.transformPerspective, y = r.force3D, x = r.target, T = r.zOrigin, k = "", g = y === "auto" && e && e !== 1 || y === !0;
  if (T && (d !== $e || c !== $e)) {
    var S = parseFloat(c) * ht, P = Math.sin(S), b = Math.cos(S), w;
    S = parseFloat(d) * ht, w = Math.cos(S), o = _r(x, o, P * w * -T), a = _r(x, a, -Math.sin(S) * -T), l = _r(x, l, b * w * -T + T);
  }
  m !== Pt && (k += "perspective(" + m + He), (i || n) && (k += "translate(" + i + "%, " + n + "%) "), (g || o !== Pt || a !== Pt || l !== Pt) && (k += l !== Pt || g ? "translate3d(" + o + ", " + a + ", " + l + ") " : "translate(" + o + ", " + a + He), u !== $e && (k += "rotate(" + u + He), c !== $e && (k += "rotateY(" + c + He), d !== $e && (k += "rotateX(" + d + He), (h !== $e || _ !== $e) && (k += "skew(" + h + ", " + _ + He), (p !== 1 || f !== 1) && (k += "scale(" + p + ", " + f + He), x.style[J] = k || "translate(0, 0)";
}, Go = function(e, t) {
  var r = t || this, i = r.xPercent, n = r.yPercent, o = r.x, a = r.y, l = r.rotation, u = r.skewX, c = r.skewY, d = r.scaleX, h = r.scaleY, _ = r.target, p = r.xOrigin, f = r.yOrigin, m = r.xOffset, y = r.yOffset, x = r.forceCSS, T = parseFloat(o), k = parseFloat(a), g, S, P, b, w;
  l = parseFloat(l), u = parseFloat(u), c = parseFloat(c), c && (c = parseFloat(c), u += c, l += c), l || u ? (l *= ht, u *= ht, g = Math.cos(l) * d, S = Math.sin(l) * d, P = Math.sin(l - u) * -h, b = Math.cos(l - u) * h, u && (c *= ht, w = Math.tan(u - c), w = Math.sqrt(1 + w * w), P *= w, b *= w, c && (w = Math.tan(c), w = Math.sqrt(1 + w * w), g *= w, S *= w)), g = ee(g), S = ee(S), P = ee(P), b = ee(b)) : (g = d, b = h, S = P = 0), (T && !~(o + "").indexOf("px") || k && !~(a + "").indexOf("px")) && (T = We(_, "x", o, "px"), k = We(_, "y", a, "px")), (p || f || m || y) && (T = ee(T + p - (p * g + f * P) + m), k = ee(k + f - (p * S + f * b) + y)), (i || n) && (w = _.getBBox(), T = ee(T + i / 100 * w.width), k = ee(k + n / 100 * w.height)), w = "matrix(" + g + "," + S + "," + P + "," + b + "," + T + "," + k + ")", _.setAttribute("transform", w), x && (_.style[J] = w);
}, Wo = function(e, t, r, i, n) {
  var o = 360, a = se(n), l = parseFloat(n) * (a && ~n.indexOf("rad") ? Je : 1), u = l - i, c = i + u + "deg", d, h;
  return a && (d = n.split("_")[1], d === "short" && (u %= o, u !== u % (o / 2) && (u += u < 0 ? o : -o)), d === "cw" && u < 0 ? u = (u + o * yi) % o - ~~(u / o) * o : d === "ccw" && u > 0 && (u = (u - o * yi) % o - ~~(u / o) * o)), e._pt = h = new he(e._pt, t, r, i, u, Oo), h.e = c, h.u = "deg", e._props.push(r), h;
}, Pi = function(e, t) {
  for (var r in t)
    e[r] = t[r];
  return e;
}, qo = function(e, t, r) {
  var i = Pi({}, r._gsap), n = "perspective,force3D,transformOrigin,svgOrigin", o = r.style, a, l, u, c, d, h, _, p;
  i.svg ? (u = r.getAttribute("transform"), r.setAttribute("transform", ""), o[J] = t, a = Lt(r, 1), nt(r, J), r.setAttribute("transform", u)) : (u = getComputedStyle(r)[J], o[J] = t, a = Lt(r, 1), o[J] = u);
  for (l in Ie)
    u = i[l], c = a[l], u !== c && n.indexOf(l) < 0 && (_ = ae(u), p = ae(c), d = _ !== p ? We(r, l, u, p) : parseFloat(u), h = parseFloat(c), e._pt = new he(e._pt, a, l, d, h - d, Rr), e._pt.u = p || 0, e._props.push(l));
  Pi(a, i);
};
de("padding,margin,Width,Radius", function(s, e) {
  var t = "Top", r = "Right", i = "Bottom", n = "Left", o = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(a) {
    return e < 2 ? s + a : "border" + a + s;
  });
  er[e > 1 ? "border" + s : s] = function(a, l, u, c, d) {
    var h, _;
    if (arguments.length < 4)
      return h = o.map(function(p) {
        return De(a, p, u);
      }), _ = h.join(" "), _.split(h[0]).length === 5 ? h[0] : _;
    h = (c + "").split(" "), _ = {}, o.forEach(function(p, f) {
      return _[p] = h[f] = h[f] || h[(f - 1) / 2 | 0];
    }), a.init(l, _, d);
  };
});
var jn = {
  name: "css",
  register: Mr,
  targetTest: function(e) {
    return e.style && e.nodeType;
  },
  init: function(e, t, r, i, n) {
    var o = this._props, a = e.style, l = r.vars.startAt, u, c, d, h, _, p, f, m, y, x, T, k, g, S, P, b;
    Jr || Mr(), this.styles = this.styles || An(e), b = this.styles.props, this.tween = r;
    for (f in t)
      if (f !== "autoRound" && (c = t[f], !(me[f] && vn(f, t, r, i, e, n)))) {
        if (_ = typeof c, p = er[f], _ === "function" && (c = c.call(r, i, e, n), _ = typeof c), _ === "string" && ~c.indexOf("random(") && (c = Dt(c)), p)
          p(this, e, f, c, r) && (P = 1);
        else if (f.substr(0, 2) === "--")
          u = (getComputedStyle(e).getPropertyValue(f) + "").trim(), c += "", Be.lastIndex = 0, Be.test(u) || (m = ae(u), y = ae(c)), y ? m !== y && (u = We(e, f, u, y) + y) : m && (c += m), this.add(a, "setProperty", u, c, i, n, 0, 0, f), o.push(f), b.push(f, 0, a[f]);
        else if (_ !== "undefined") {
          if (l && f in l ? (u = typeof l[f] == "function" ? l[f].call(r, i, e, n) : l[f], se(u) && ~u.indexOf("random(") && (u = Dt(u)), ae(u + "") || u === "auto" || (u += ye.units[f] || ae(De(e, f)) || ""), (u + "").charAt(1) === "=" && (u = De(e, f))) : u = De(e, f), h = parseFloat(u), x = _ === "string" && c.charAt(1) === "=" && c.substr(0, 2), x && (c = c.substr(2)), d = parseFloat(c), f in Ee && (f === "autoAlpha" && (h === 1 && De(e, "visibility") === "hidden" && d && (h = 0), b.push("visibility", 0, a.visibility), Ye(this, a, "visibility", h ? "inherit" : "hidden", d ? "inherit" : "hidden", !d)), f !== "scale" && f !== "transform" && (f = Ee[f], ~f.indexOf(",") && (f = f.split(",")[0]))), T = f in Ie, T) {
            if (this.styles.save(f), _ === "string" && c.substring(0, 6) === "var(--" && (c = Se(e, c.substring(4, c.indexOf(")"))), d = parseFloat(c)), k || (g = e._gsap, g.renderTransform && !t.parseTransform || Lt(e, t.parseTransform), S = t.smoothOrigin !== !1 && g.smooth, k = this._pt = new he(this._pt, a, J, 0, 1, g.renderTransform, g, 0, -1), k.dep = 1), f === "scale")
              this._pt = new he(this._pt, g, "scaleY", g.scaleY, (x ? ft(g.scaleY, x + d) : d) - g.scaleY || 0, Rr), this._pt.u = 0, o.push("scaleY", f), f += "X";
            else if (f === "transformOrigin") {
              b.push(_e, 0, a[_e]), c = Yo(c), g.svg ? Ar(e, c, 0, S, 0, this) : (y = parseFloat(c.split(" ")[2]) || 0, y !== g.zOrigin && Ye(this, g, "zOrigin", g.zOrigin, y), Ye(this, a, f, tr(u), tr(c)));
              continue;
            } else if (f === "svgOrigin") {
              Ar(e, c, 1, S, 0, this);
              continue;
            } else if (f in In) {
              Wo(this, g, f, h, x ? ft(h, x + c) : c);
              continue;
            } else if (f === "smoothOrigin") {
              Ye(this, g, "smooth", g.smooth, c);
              continue;
            } else if (f === "force3D") {
              g[f] = c;
              continue;
            } else if (f === "transform") {
              qo(this, c, e);
              continue;
            }
          } else f in a || (f = yt(f) || f);
          if (T || (d || d === 0) && (h || h === 0) && !Co.test(c) && f in a)
            m = (u + "").substr((h + "").length), d || (d = 0), y = ae(c) || (f in ye.units ? ye.units[f] : m), m !== y && (h = We(e, f, u, y)), this._pt = new he(this._pt, T ? g : a, f, h, (x ? ft(h, x + d) : d) - h, !T && (y === "px" || f === "zIndex") && t.autoRound !== !1 ? Eo : Rr), this._pt.u = y || 0, m !== y && y !== "%" && (this._pt.b = u, this._pt.r = Ro);
          else if (f in a)
            Vo.call(this, e, f, u, x ? x + c : c);
          else if (f in e)
            this.add(e, f, u || e[f], x ? x + c : c, i, n);
          else if (f !== "parseTransform") {
            Vr(f, c);
            continue;
          }
          T || (f in a ? b.push(f, 0, a[f]) : typeof e[f] == "function" ? b.push(f, 2, e[f]()) : b.push(f, 1, u || e[f])), o.push(f);
        }
      }
    P && Cn(this);
  },
  render: function(e, t) {
    if (t.tween._time || !Zr())
      for (var r = t._pt; r; )
        r.r(e, r.d), r = r._next;
    else
      t.styles.revert();
  },
  get: De,
  aliases: Ee,
  getSetter: function(e, t, r) {
    var i = Ee[t];
    return i && i.indexOf(",") < 0 && (t = i), t in Ie && t !== _e && (e._gsap.x || De(e, "x")) ? r && bi === r ? t === "scale" ? Do : zo : (bi = r || {}) && (t === "scale" ? No : Io) : e.style && !Fr(e.style[t]) ? Mo : ~t.indexOf("-") ? Ao : $r(e, t);
  },
  core: {
    _removeProperty: nt,
    _getMatrix: Kr
  }
};
pe.utils.checkPrefix = yt;
pe.core.getStyleSaver = An;
(function(s, e, t, r) {
  var i = de(s + "," + e + "," + t, function(n) {
    Ie[n] = 1;
  });
  de(e, function(n) {
    ye.units[n] = "deg", In[n] = 1;
  }), Ee[i[13]] = s + "," + e, de(r, function(n) {
    var o = n.split(":");
    Ee[o[1]] = i[o[0]];
  });
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
de("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(s) {
  ye.units[s] = "px";
});
pe.registerPlugin(jn);
var K = pe.registerPlugin(jn) || pe;
K.core.Tween;
const Xo = {
  fadeIn: (s) => K.fromTo(s, { opacity: 0 }, { opacity: 1, duration: 0.8 }),
  scaleIn: (s) => K.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.6, ease: "back.out(1.7)" }
  ),
  slideUp: (s) => K.fromTo(s, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }),
  bounceIn: (s) => K.fromTo(
    s,
    { scale: 0 },
    { scale: 1, duration: 0.8, ease: "bounce.out" }
  ),
  none: () => {
  }
}, zr = {
  jiggle: (s) => {
    K.killTweensOf(s), K.to(s, {
      keyframes: [
        { scale: 1.1, rotation: 2, duration: 0.15, ease: "power1.out" },
        { scale: 0.95, rotation: -2, duration: 0.15, ease: "power1.inOut" },
        { scale: 1.05, rotation: 1, duration: 0.15, ease: "power1.out" },
        { scale: 1, rotation: 0, duration: 0.2, ease: "back.out(2)" }
      ]
    });
  },
  scale: (s) => {
    K.to(s, { scale: 1.05, duration: 0.2, ease: "power1.out" });
  },
  bounce: (s) => {
    K.to(s, {
      y: -5,
      duration: 0.3,
      ease: "bounce.out",
      yoyo: !0,
      repeat: 1
    });
  },
  shadowPulse: (s) => {
    K.fromTo(
      s,
      { boxShadow: "0px 0px 0px rgba(0,0,0,0)" },
      {
        boxShadow: "0px 10px 25px rgba(0,0,0,0.2)",
        duration: 0.4,
        ease: "power2.inOut"
      }
    );
  },
  float3D: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), i = s.querySelector("div:last-child");
    K.to(s, {
      // y: -10,
      scale: 1.03,
      rotateX: 5,
      rotateY: 2,
      transformPerspective: 700,
      duration: 0.1,
      ease: "power3.out"
    }), K.to(e, { y: -10, scale: 1.05, duration: 0.5, ease: "power3.out" }), K.to(t, { y: -8, duration: 0.4, ease: "power3.out" }), K.to(r, { y: -6, duration: 0.4, ease: "power3.out" }), K.to(i, { y: -5, opacity: 1, duration: 0.4, ease: "power3.out" });
  },
  reset: (s) => {
    const e = s.querySelector("img"), t = s.querySelector("h3"), r = s.querySelector("p"), i = s.querySelector("div:last-child");
    K.to(s, {
      y: 0,
      rotateX: 0,
      rotateY: 0,
      scale: 1,
      duration: 0.1,
      ease: "power3.inOut"
    }), K.to([e, t, r, i], {
      y: 0,
      scale: 1,
      opacity: 1,
      duration: 0.4,
      ease: "power3.inOut"
    });
  },
  wobbleFollow: (s) => {
    const e = s.getBoundingClientRect(), t = (i) => {
      const n = i.clientX - e.left, o = i.clientY - e.top, a = e.width / 2, l = e.height / 2, u = (o - l) / l * 5, c = (n - a) / a * 5;
      K.to(s, {
        rotationX: u,
        rotationY: c,
        transformPerspective: 800,
        transformOrigin: "center",
        ease: "power2.out",
        duration: 0.01
      });
    }, r = () => {
      K.to(s, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.3,
        ease: "elastic.out(1, 0.3)"
      });
    };
    return s.addEventListener("mousemove", t), s.addEventListener("mouseleave", r), () => {
      s.removeEventListener("mousemove", t), s.removeEventListener("mouseleave", r);
    };
  },
  none: () => {
  }
}, $o = jt(
  "inline-flex items-center cursor-pointer justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        dark: "bg-slate-900 text-white",
        primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
        secondary: "bg-indigo-500 hover:bg-indigo-700 text-white",
        destructive: "bg-red-700 text-white hover:bg-red-900",
        ok: "bg-green-500 hover:bg-green-700",
        ghost: "bg-gray-50 hover:bg-gray-100 text-gray-700",
        link: "bg-transparent hover:bg-transparent text-indigo-600",
        outline: "bg-transparent hover:bg-gray-100 text-gray-700 border border-gray-300"
      },
      size: {
        default: "px-9 py-3",
        sm: "px-4 py-2",
        lg: "px-14 py-4",
        xl: "px-16 py-4",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto"
      }
    },
    defaultVariants: {
      variant: "primary",
      size: "default"
    }
  }
), Ho = it.forwardRef(
  ({
    className: s,
    variant: e,
    size: t,
    asChild: r = !1,
    animation: i = "fadeIn",
    hoverAnimation: n = "jiggle",
    ...o
  }, a) => {
    const l = r ? Dr : "button", u = Ci(null);
    Vn(() => {
      const p = u.current;
      !p || i === "none" || Xo[i]?.(p);
    }, [i]);
    const c = () => {
      const p = u.current;
      p && zr[n]?.(p);
    }, d = () => {
      gsap.to(u.current, {
        scale: 1,
        rotation: 0,
        y: 0,
        duration: 0.3
      });
    }, h = () => {
      gsap.to(u.current, { scale: 0.92, duration: 0.1 });
    }, _ = () => {
      gsap.to(u.current, {
        scale: 1.05,
        duration: 0.15,
        ease: "back.out(2)"
      });
    };
    return /* @__PURE__ */ W.jsx(
      l,
      {
        ref: (p) => {
          u.current = p, typeof a == "function" ? a(p) : a && (a.current = p);
        },
        className: Qe($o({ variant: e, size: t, className: s })),
        onMouseEnter: c,
        onMouseLeave: d,
        onMouseDown: h,
        onMouseUp: _,
        ...o
      }
    );
  }
);
Ho.displayName = "Button";
const Jo = jt(
  "rounded-lg transition-all duration-300 cursor-pointer overflow-hidden",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-800 shadow-lg hover:shadow-xl",
        dark: "bg-slate-800 text-white shadow-md hover:shadow-lg",
        outline: "border border-gray-300 bg-transparent text-gray-800 dark:border-gray-700"
      },
      // hoverEffect: {
      //   none: "",
      //   scale: "hover:scale-[1.02]",
      //   shadow: "hover:shadow-xl",
      //   lift: "hover:-translate-y-1 hover:shadow-xl",
      //   rotate: "hover:rotate-1",
      // },
      size: {
        sm: "p-3 text-sm",
        md: "p-6 text-base",
        lg: "p-8 text-lg"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), Zo = it.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: i,
    variant: n,
    image: o,
    ratio: a = "16:9",
    size: l,
    footer: u,
    animate: c = !0,
    hoverAnimation: d = "none",
    ...h
  }, _) => {
    const p = s ? Dr : "div", f = Ci(null), m = () => {
      const g = f.current;
      g && zr[d]?.(g);
    }, y = () => {
      const g = f.current;
      g && zr.reset(g);
    }, x = () => {
      const g = f.current;
      g && K.to(g, { scale: 0.95, duration: 0.1, ease: "power1.inOut" });
    }, T = () => {
      const g = f.current;
      g && K.to(g, { scale: 1.05, duration: 0.1, ease: "back.out(2)" });
    }, k = a === "16:9" ? "aspect-video" : a === "4:3" ? "aspect-[4/3]" : "aspect-square";
    return /* @__PURE__ */ W.jsxs(
      p,
      {
        ref: (g) => {
          f.current = g, typeof _ == "function" ? _(g) : _ && (_.current = g);
        },
        onMouseEnter: m,
        onMouseLeave: y,
        onMouseDown: x,
        onMouseUp: T,
        className: Qe(Jo({ variant: n, size: l }), i),
        role: "article",
        tabIndex: 0,
        ...h,
        children: [
          o && /* @__PURE__ */ W.jsx("div", { className: `${k} mb-4`, children: /* @__PURE__ */ W.jsx(
            "img",
            {
              src: o,
              alt: e || "Card image",
              className: "w-full h-full object-cover rounded-md"
            }
          ) }),
          e && /* @__PURE__ */ W.jsx("h3", { className: "font-semibold text-lg mb-2 text-[inherit]", children: e }),
          t && /* @__PURE__ */ W.jsx("p", { className: "text-gray-500 mb-4 text-[inherit]", children: t }),
          r,
          u && /* @__PURE__ */ W.jsx("div", { className: "mt-4", children: u })
        ]
      }
    );
  }
);
Zo.displayName = "Card";
const Qo = jt(
  "fixed inset-0 flex items-center justify-center z-50 transition-all duration-300",
  {
    variants: {
      variant: {
        light: "bg-white text-gray-900 shadow-2xl border border-gray-200 hover:shadow-xl",
        dark: "bg-slate-900 text-white shadow-lg border border-slate-700 hover:shadow-xl",
        outline: "bg-transparent border border-gray-400 text-gray-800 dark:border-gray-600 dark:text-gray-100 backdrop-blur-md"
      },
      size: {
        sm: "w-[90%] max-w-sm p-4",
        md: "w-[90%] max-w-md p-6",
        lg: "w-[90%] max-w-lg p-8"
      }
    },
    defaultVariants: {
      variant: "light",
      size: "md"
    }
  }
), Ko = it.forwardRef(
  ({
    asChild: s = !1,
    title: e,
    description: t,
    children: r,
    className: i,
    isOpen: n = !1,
    onClose: o,
    onDone: a,
    doneText: l = "Done",
    closeText: u = "Close",
    variant: c,
    size: d,
    ...h
  }, _) => {
    if (!n) return null;
    const p = s ? Dr : "div";
    return /* @__PURE__ */ W.jsxs("div", { className: "fixed inset-0 flex items-center justify-center z-50", children: [
      /* @__PURE__ */ W.jsx(
        "div",
        {
          className: "fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300",
          onClick: o
        }
      ),
      /* @__PURE__ */ W.jsx(
        p,
        {
          ref: _,
          className: Qe(
            Qo({ variant: c, size: d }),
            "relative rounded-xl transform scale-100 transition-all duration-300 animate-fadeIn",
            i
          ),
          ...h,
          children: /* @__PURE__ */ W.jsxs("div", { children: [
            e && /* @__PURE__ */ W.jsx("h3", { className: "text-xl font-semibold mb-2 text-[inherit]", children: e }),
            t && /* @__PURE__ */ W.jsx("p", { className: "text-gray-600 dark:text-gray-300 mb-4 text-[inherit]", children: t }),
            /* @__PURE__ */ W.jsx("div", { className: "mb-4", children: r }),
            /* @__PURE__ */ W.jsxs("div", { className: "flex justify-end gap-3 mt-6", children: [
              /* @__PURE__ */ W.jsx(
                "button",
                {
                  onClick: o,
                  className: Qe(
                    "px-4 py-2 rounded-md font-medium transition",
                    c === "dark" ? "border border-slate-600 hover:bg-slate-700" : "border border-gray-300 hover:bg-gray-100"
                  ),
                  children: u
                }
              ),
              /* @__PURE__ */ W.jsx(
                "button",
                {
                  onClick: a,
                  className: Qe(
                    "px-4 py-2 rounded-md text-white font-medium transition",
                    c === "dark" ? "bg-indigo-500 hover:bg-indigo-600" : "bg-indigo-600 hover:bg-indigo-700"
                  ),
                  children: l
                }
              )
            ] })
          ] })
        }
      )
    ] });
  }
);
Ko.displayName = "Modal";
const ea = jt(
  "w-full rounded-md focus:outline-none shadow-sm transition-all duration-150 bg-white placeholder:text-gray-400",
  // w-full bg-transparent border-b border-gray-500 pb-2 pt-6 focus:outline-none transition-all
  {
    variants: {
      size: {
        sm: "px-3 py-1.5 text-sm",
        md: "px-4 py-2 text-base",
        lg: "px-5 py-3 text-lg"
      },
      tone: {
        default: "border-gray-300 focus:ring-2 focus:ring-blue-400 focus:border-blue-400",
        error: "border-red-400 focus:ring-2 focus:ring-red-400 focus:border-red-400",
        success: "border-green-400 focus:ring-2 focus:ring-green-400 focus:border-green-400"
      }
    },
    defaultVariants: {
      size: "md",
      tone: "default"
    }
  }
), ta = it.forwardRef(
  ({
    label: s,
    hint: e,
    error: t,
    className: r,
    size: i = "md",
    tone: n,
    id: o,
    ...a
  }, l) => {
    const u = o || it.useId?.() || `input-${Math.random().toString(36).slice(2, 9)}`;
    return /* @__PURE__ */ W.jsxs("div", { className: "flex flex-col gap-1 w-full", children: [
      s && /* @__PURE__ */ W.jsx(
        "label",
        {
          htmlFor: u,
          className: "text-sm font-medium text-gray-700",
          children: s
        }
      ),
      /* @__PURE__ */ W.jsx(
        "input",
        {
          id: u,
          ref: l,
          className: Qe(ea({ size: i, tone: n }), r),
          ...a
        }
      ),
      t ? /* @__PURE__ */ W.jsx("p", { className: "text-sm text-red-500", children: t }) : e ? /* @__PURE__ */ W.jsx("p", { className: "text-sm text-gray-500", children: e }) : null
    ] });
  }
);
ta.displayName = "Input";
const ra = jt(
  "absolute z-50 rounded-md bg-black px-3 py-2 text-sm text-white whitespace-nowrap",
  {
    variants: {
      position: {
        top: "bottom-full left-1/2 mb-2 -translate-x-1/2",
        bottom: "top-full left-1/2 mt-2 -translate-x-1/2",
        left: "right-full top-1/2 mr-2 -translate-y-1/2",
        right: "left-full top-1/2 ml-2 -translate-y-1/2"
      },
      varient: {
        primary: "bg-green-700 text-white ",
        dark: "bg-black text-white",
        success: "bg-blue-700 text-white",
        destructive: "bg-red-700 text-white"
      },
      size: {
        default: "px-9 py-3 text-base",
        sm: "px-4 py-2 text-sm",
        lg: "px-14 py-4 text-lg font-bold",
        xl: "px-16 py-4 text-xl",
        icon: "w-12 h-12",
        full: "w-full h-12",
        auto: "w-auto h-auto"
      }
    },
    defaultVariants: {
      position: "top",
      varient: "primary",
      size: "default"
    }
  }
), ia = it.forwardRef(
  ({ text: s, children: e, position: t, varient: r, size: i, className: n, ...o }, a) => {
    const [l, u] = Yn(!1);
    return /* @__PURE__ */ W.jsxs(
      "div",
      {
        ref: a,
        className: "relative inline-block",
        onMouseEnter: () => u(!0),
        onMouseLeave: () => u(!1),
        ...o,
        children: [
          e,
          l && /* @__PURE__ */ W.jsx("div", { className: Qe(ra({ varient: r, size: i, position: t, className: n })), children: s })
        ]
      }
    );
  }
);
ia.displayName = "Tooltip";
export {
  Ho as Button,
  Zo as Card,
  ta as Input,
  Ko as Modal,
  ia as Tooltipcompo,
  $o as buttonVariants,
  Jo as cardVariants,
  ea as inputVariants,
  Qo as modalVariants,
  ra as tooltipVariants
};
