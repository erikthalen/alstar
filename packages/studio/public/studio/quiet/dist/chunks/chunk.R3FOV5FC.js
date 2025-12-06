/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  Z
} from "./chunk.VLHFHZQJ.js";

// node_modules/lit-html/directive-helpers.js
var { I: t } = Z;
var i = (o) => null === o || "object" != typeof o && "function" != typeof o;
var e = (o, t2) => void 0 === t2 ? void 0 !== o?._$litType$ : o?._$litType$ === t2;
var f = (o) => void 0 === o.strings;
var s = () => document.createComment("");
var r = (o, i2, n) => {
  const e2 = o._$AA.parentNode, l = void 0 === i2 ? o._$AB : i2._$AA;
  if (void 0 === n) {
    const i3 = e2.insertBefore(s(), l), c = e2.insertBefore(s(), l);
    n = new t(i3, c, o, o.options);
  } else {
    const t2 = n._$AB.nextSibling, i3 = n._$AM, c = i3 !== o;
    if (c) {
      let t3;
      n._$AQ?.(o), n._$AM = o, void 0 !== n._$AP && (t3 = o._$AU) !== i3._$AU && n._$AP(t3);
    }
    if (t2 !== l || c) {
      let o2 = n._$AA;
      for (; o2 !== t2; ) {
        const t3 = o2.nextSibling;
        e2.insertBefore(o2, l), o2 = t3;
      }
    }
  }
  return n;
};
var v = (o, t2, i2 = o) => (o._$AI(t2, i2), o);
var u = {};
var m = (o, t2 = u) => o._$AH = t2;
var p = (o) => o._$AH;
var M = (o) => {
  o._$AP?.(false, true);
  let t2 = o._$AA;
  const i2 = o._$AB.nextSibling;
  for (; t2 !== i2; ) {
    const o2 = t2.nextSibling;
    t2.remove(), t2 = o2;
  }
};

export {
  i,
  e,
  f,
  r,
  v,
  m,
  p,
  M
};
