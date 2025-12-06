/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  e as e3,
  o as o3
} from "./chunks/chunk.YELHYMJQ.js";
import {
  l
} from "./chunks/chunk.ZLHIBXCJ.js";
import {
  M,
  f,
  i as i2,
  m,
  p,
  r,
  v
} from "./chunks/chunk.R3FOV5FC.js";
import {
  o as o2
} from "./chunks/chunk.P6QWJITB.js";
import {
  o
} from "./chunks/chunk.7LEBIIO5.js";
import {
  e as e2
} from "./chunks/chunk.E6M524BP.js";
import {
  e,
  i,
  t
} from "./chunks/chunk.UTLMCKJR.js";
import {
  B,
  T,
  x
} from "./chunks/chunk.VLHFHZQJ.js";
import "./chunks/chunk.32UODNLB.js";

// node_modules/lit-html/directives/repeat.js
var u = (e4, s3, t3) => {
  const r3 = /* @__PURE__ */ new Map();
  for (let l2 = s3; l2 <= t3; l2++) r3.set(e4[l2], l2);
  return r3;
};
var c = e(class extends i {
  constructor(e4) {
    if (super(e4), e4.type !== t.CHILD) throw Error("repeat() can only be used in text expressions");
  }
  dt(e4, s3, t3) {
    let r3;
    void 0 === t3 ? t3 = s3 : void 0 !== s3 && (r3 = s3);
    const l2 = [], o6 = [];
    let i4 = 0;
    for (const s4 of e4) l2[i4] = r3 ? r3(s4, i4) : i4, o6[i4] = t3(s4, i4), i4++;
    return { values: o6, keys: l2 };
  }
  render(e4, s3, t3) {
    return this.dt(e4, s3, t3).values;
  }
  update(s3, [t3, r3, c4]) {
    const d = p(s3), { values: p2, keys: a } = this.dt(t3, r3, c4);
    if (!Array.isArray(d)) return this.ut = a, p2;
    const h3 = this.ut ?? (this.ut = []), v2 = [];
    let m3, y, x2 = 0, j = d.length - 1, k = 0, w = p2.length - 1;
    for (; x2 <= j && k <= w; ) if (null === d[x2]) x2++;
    else if (null === d[j]) j--;
    else if (h3[x2] === a[k]) v2[k] = v(d[x2], p2[k]), x2++, k++;
    else if (h3[j] === a[w]) v2[w] = v(d[j], p2[w]), j--, w--;
    else if (h3[x2] === a[w]) v2[w] = v(d[x2], p2[w]), r(s3, v2[w + 1], d[x2]), x2++, w--;
    else if (h3[j] === a[k]) v2[k] = v(d[j], p2[k]), r(s3, d[x2], d[j]), j--, k++;
    else if (void 0 === m3 && (m3 = u(a, k, w), y = u(h3, x2, j)), m3.has(h3[x2])) if (m3.has(h3[j])) {
      const e4 = y.get(a[k]), t4 = void 0 !== e4 ? d[e4] : null;
      if (null === t4) {
        const e5 = r(s3, d[x2]);
        v(e5, p2[k]), v2[k] = e5;
      } else v2[k] = v(t4, p2[k]), r(s3, d[x2], t4), d[e4] = null;
      k++;
    } else M(d[j]), j--;
    else M(d[x2]), x2++;
    for (; k <= w; ) {
      const e4 = r(s3, v2[w + 1]);
      v(e4, p2[k]), v2[k++] = e4;
    }
    for (; x2 <= j; ) {
      const e4 = d[x2++];
      null !== e4 && M(e4);
    }
    return this.ut = a, m(s3, v2), T;
  }
});

// node_modules/lit-html/directives/unsafe-svg.js
var t2 = class extends e3 {
};
t2.directiveName = "unsafeSVG", t2.resultType = 2;
var o4 = e(t2);

// node_modules/lit-html/async-directive.js
var s = (i4, t3) => {
  const e4 = i4._$AN;
  if (void 0 === e4) return false;
  for (const i5 of e4) i5._$AO?.(t3, false), s(i5, t3);
  return true;
};
var o5 = (i4) => {
  let t3, e4;
  do {
    if (void 0 === (t3 = i4._$AM)) break;
    e4 = t3._$AN, e4.delete(i4), i4 = t3;
  } while (0 === e4?.size);
};
var r2 = (i4) => {
  for (let t3; t3 = i4._$AM; i4 = t3) {
    let e4 = t3._$AN;
    if (void 0 === e4) t3._$AN = e4 = /* @__PURE__ */ new Set();
    else if (e4.has(i4)) break;
    e4.add(i4), c2(t3);
  }
};
function h(i4) {
  void 0 !== this._$AN ? (o5(this), this._$AM = i4, r2(this)) : this._$AM = i4;
}
function n(i4, t3 = false, e4 = 0) {
  const r3 = this._$AH, h3 = this._$AN;
  if (void 0 !== h3 && 0 !== h3.size) if (t3) if (Array.isArray(r3)) for (let i5 = e4; i5 < r3.length; i5++) s(r3[i5], false), o5(r3[i5]);
  else null != r3 && (s(r3, false), o5(r3));
  else s(this, i4);
}
var c2 = (i4) => {
  i4.type == t.CHILD && (i4._$AP ?? (i4._$AP = n), i4._$AQ ?? (i4._$AQ = h));
};
var f2 = class extends i {
  constructor() {
    super(...arguments), this._$AN = void 0;
  }
  _$AT(i4, t3, e4) {
    super._$AT(i4, t3, e4), r2(this), this.isConnected = i4._$AU;
  }
  _$AO(i4, t3 = true) {
    i4 !== this.isConnected && (this.isConnected = i4, i4 ? this.reconnected?.() : this.disconnected?.()), t3 && (s(this, i4), o5(this));
  }
  setValue(t3) {
    if (f(this._$Ct)) this._$Ct._$AI(t3, this);
    else {
      const i4 = [...this._$Ct._$AH];
      i4[this._$Ci] = t3, this._$Ct._$AI(i4, this, 0);
    }
  }
  disconnected() {
  }
  reconnected() {
  }
};

// node_modules/lit-html/directives/private-async-helpers.js
var s2 = class {
  constructor(t3) {
    this.G = t3;
  }
  disconnect() {
    this.G = void 0;
  }
  reconnect(t3) {
    this.G = t3;
  }
  deref() {
    return this.G;
  }
};
var i3 = class {
  constructor() {
    this.Y = void 0, this.Z = void 0;
  }
  get() {
    return this.Y;
  }
  pause() {
    this.Y ?? (this.Y = new Promise((t3) => this.Z = t3));
  }
  resume() {
    this.Z?.(), this.Y = this.Z = void 0;
  }
};

// node_modules/lit-html/directives/until.js
var n2 = (t3) => !i2(t3) && "function" == typeof t3.then;
var h2 = 1073741823;
var c3 = class extends f2 {
  constructor() {
    super(...arguments), this._$Cwt = h2, this._$Cbt = [], this._$CK = new s2(this), this._$CX = new i3();
  }
  render(...s3) {
    return s3.find((t3) => !n2(t3)) ?? T;
  }
  update(s3, i4) {
    const e4 = this._$Cbt;
    let r3 = e4.length;
    this._$Cbt = i4;
    const o6 = this._$CK, c4 = this._$CX;
    this.isConnected || this.disconnected();
    for (let t3 = 0; t3 < i4.length && !(t3 > this._$Cwt); t3++) {
      const s4 = i4[t3];
      if (!n2(s4)) return this._$Cwt = t3, s4;
      t3 < r3 && s4 === e4[t3] || (this._$Cwt = h2, r3 = 0, Promise.resolve(s4).then(async (t4) => {
        for (; c4.get(); ) await c4.get();
        const i5 = o6.deref();
        if (void 0 !== i5) {
          const e5 = i5._$Cbt.indexOf(s4);
          e5 > -1 && e5 < i5._$Cwt && (i5._$Cwt = e5, i5.setValue(t4));
        }
      }));
    }
    return T;
  }
  disconnected() {
    this._$CK.disconnect(), this._$CX.pause();
  }
  reconnected() {
    this._$CK.reconnect(this), this._$CX.resume();
  }
};
var m2 = e(c3);

// src/burrow.ts
var attachedBurrows = /* @__PURE__ */ new Set();
var pendingUpdates = /* @__PURE__ */ new Set();
var burrowsByState = /* @__PURE__ */ new Map();
var statesByBurrow = /* @__PURE__ */ new Map();
var currentlyRenderingBurrow = null;
var updateScheduled = false;
var Burrow = class {
  constructor(template, options) {
    this.connectedCallback = () => {
    };
    this.disconnectedCallback = () => {
    };
    this.wrapper = null;
    this.host = null;
    this.template = template;
    if (options?.attached) {
      this.connectedCallback = options.attached;
    }
    if (options?.detached) {
      this.disconnectedCallback = options.detached;
    }
  }
  clearStateTracking(removeFromMap = false) {
    const usedStates = statesByBurrow.get(this);
    if (usedStates) {
      usedStates.forEach((stateObj) => {
        const burrows = burrowsByState.get(stateObj);
        if (burrows) {
          burrows.delete(this);
          if (burrows.size === 0) {
            burrowsByState.delete(stateObj);
          }
        }
      });
      if (removeFromMap) {
        statesByBurrow.delete(this);
      }
    }
  }
  /**
   * Attaches the burrow to a DOM element.
   */
  attach(el) {
    if (this.host) {
      this.detach();
    }
    const element = typeof el === "string" ? document.getElementById(el) : el;
    if (!element) {
      if (typeof el === "string") {
        console.warn(`Unable to attach burrow: an element with id "${el}" could not be found in this document.`);
      }
      return;
    }
    this.host = element;
    this.wrapper = document.createElement("div");
    this.wrapper.classList.add("quiet-burrow");
    this.wrapper.style.display = "contents";
    this.host.innerHTML = "";
    this.host.appendChild(this.wrapper);
    attachedBurrows.add(this);
    this.update();
    this.connectedCallback();
  }
  /**
   * Detaches the burrow from its host element and restores the original content.
   */
  detach() {
    if (!this.host || !this.wrapper) {
      return;
    }
    this.wrapper.remove();
    attachedBurrows.delete(this);
    this.clearStateTracking(true);
    this.disconnectedCallback();
    this.host = null;
    this.wrapper = null;
  }
  /**
   * Re-renders the template with the current state.
   */
  async update() {
    if (this.wrapper) {
      this.clearStateTracking();
      statesByBurrow.set(this, /* @__PURE__ */ new Set());
      currentlyRenderingBurrow = this;
      B(this.template(), this.wrapper);
      currentlyRenderingBurrow = null;
      if (updateScheduled) {
        await new Promise(queueMicrotask);
      }
    }
  }
};
function burrow(templateOrHost, optionsOrTemplate, maybeOptions) {
  let template;
  let host;
  let options = {};
  if (typeof templateOrHost === "function") {
    template = templateOrHost;
    options = optionsOrTemplate || {};
  } else {
    host = templateOrHost;
    template = optionsOrTemplate;
    options = maybeOptions || {};
  }
  const instance = new Burrow(template, options);
  if (host) {
    const element = typeof host === "string" ? document.getElementById(host) : host;
    if (element) {
      instance.attach(element);
    } else if (typeof host === "string") {
      console.warn(`Unable to attach burrow: an element with id "${host}" could not be found in this document.`);
    }
  }
  return instance;
}
function state(defaults) {
  const handler = {
    get(target, prop) {
      if (currentlyRenderingBurrow) {
        let burrows = burrowsByState.get(target);
        if (!burrows) {
          burrows = /* @__PURE__ */ new Set();
          burrowsByState.set(target, burrows);
        }
        burrows.add(currentlyRenderingBurrow);
        let states = statesByBurrow.get(currentlyRenderingBurrow);
        if (!states) {
          states = /* @__PURE__ */ new Set();
          statesByBurrow.set(currentlyRenderingBurrow, states);
        }
        states.add(target);
      }
      return target[prop];
    },
    set(target, prop, value) {
      if (target[prop] === value) {
        return true;
      }
      target[prop] = value;
      const burrows = burrowsByState.get(target);
      if (burrows) {
        burrows.forEach((burrow2) => {
          if (attachedBurrows.has(burrow2)) {
            pendingUpdates.add(burrow2);
          } else {
            burrows.delete(burrow2);
          }
        });
        if (pendingUpdates.size > 0) {
          scheduleUpdates();
        }
      }
      return true;
    }
  };
  return new Proxy({ ...defaults }, handler);
}
function scheduleUpdates() {
  if (updateScheduled) return;
  updateScheduled = true;
  queueMicrotask(() => {
    const burrowsToUpdate = new Set(pendingUpdates);
    pendingUpdates.clear();
    updateScheduled = false;
    burrowsToUpdate.forEach((burrow2) => {
      if (attachedBurrows.has(burrow2)) {
        burrow2.update();
      }
    });
  });
}
export {
  Burrow,
  burrow,
  e2 as classMap,
  x as html,
  o as ifDefined,
  l as live,
  c as repeat,
  state,
  o2 as styleMap,
  o3 as unsafeHTML,
  o4 as unsafeSVG,
  m2 as until
};
