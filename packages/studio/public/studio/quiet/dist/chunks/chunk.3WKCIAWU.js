/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  hasValidationBug
} from "./chunk.5E32SBSM.js";
import {
  f,
  i2 as i,
  u
} from "./chunk.A5SY4VDT.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// node_modules/@lit/reactive-element/decorators/custom-element.js
var t = (t3) => (e3, o2) => {
  void 0 !== o2 ? o2.addInitializer(() => {
    customElements.define(t3, e3);
  }) : customElements.define(t3, e3);
};

// node_modules/@lit/reactive-element/decorators/property.js
var o = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
var r = (t3 = o, e3, r3) => {
  const { kind: n2, metadata: i2 } = r3;
  let s = globalThis.litPropertyMetadata.get(i2);
  if (void 0 === s && globalThis.litPropertyMetadata.set(i2, s = /* @__PURE__ */ new Map()), "setter" === n2 && ((t3 = Object.create(t3)).wrapped = true), s.set(r3.name, t3), "accessor" === n2) {
    const { name: o2 } = r3;
    return { set(r4) {
      const n3 = e3.get.call(this);
      e3.set.call(this, r4), this.requestUpdate(o2, n3, t3);
    }, init(e4) {
      return void 0 !== e4 && this.C(o2, void 0, t3, e4), e4;
    } };
  }
  if ("setter" === n2) {
    const { name: o2 } = r3;
    return function(r4) {
      const n3 = this[o2];
      e3.call(this, r4), this.requestUpdate(o2, n3, t3);
    };
  }
  throw Error("Unsupported decorator location: " + n2);
};
function n(t3) {
  return (e3, o2) => "object" == typeof o2 ? r(t3, e3, o2) : ((t4, e4, o3) => {
    const r3 = e4.hasOwnProperty(o3);
    return e4.constructor.createProperty(o3, t4), r3 ? Object.getOwnPropertyDescriptor(e4, o3) : void 0;
  })(t3, e3, o2);
}

// node_modules/@lit/reactive-element/decorators/state.js
function r2(r3) {
  return n({ ...r3, state: true, attribute: false });
}

// node_modules/@lit/reactive-element/decorators/event-options.js
function t2(t3) {
  return (n2, o2) => {
    const c = "function" == typeof n2 ? n2 : n2[o2];
    Object.assign(c, t3);
  };
}

// node_modules/@lit/reactive-element/decorators/base.js
var e = (e3, t3, c) => (c.configurable = true, c.enumerable = true, Reflect.decorate && "object" != typeof t3 && Object.defineProperty(e3, t3, c), c);

// node_modules/@lit/reactive-element/decorators/query.js
function e2(e3, r3) {
  return (n2, s, i2) => {
    const o2 = (t3) => t3.renderRoot?.querySelector(e3) ?? null;
    if (r3) {
      const { get: e4, set: r4 } = "object" == typeof s ? n2 : i2 ?? (() => {
        const t3 = Symbol();
        return { get() {
          return this[t3];
        }, set(e5) {
          this[t3] = e5;
        } };
      })();
      return e(n2, s, { get() {
        let t3 = e4.call(this);
        return void 0 === t3 && (t3 = o2(this), (null !== t3 || this.hasUpdated) && r4.call(this, t3)), t3;
      } });
    }
    return e(n2, s, { get() {
      return o2(this);
    } });
  };
}

// src/utilities/quiet-element.ts
var hasWarnedAboutValidationBug = false;
var QuietElement = class extends i {
  constructor() {
    super();
    this.slotsWithContent = /* @__PURE__ */ new Set();
    /** @internal */
    this.customStates = {
      /** Adds or removes the specified custom state. */
      set: (customState, active) => {
        if (active) {
          this.internals.states.add(customState);
        } else {
          this.internals.states.delete(customState);
        }
      },
      /** Determines whether or not the element currently has the specified state. */
      has: (customState) => {
        return this.internals.states.has(customState);
      }
    };
    this.internals = this.attachInternals();
    const constructor = this.constructor;
    if (constructor.formAssociated && hasValidationBug()) {
      this.internals.setValidity = () => {
      };
      if (!hasWarnedAboutValidationBug) {
        hasWarnedAboutValidationBug = true;
        console.warn(
          `This browser is affected by the following WebKit bug, so constraint validation is disabled for Quiet UI elements: https://bugs.webkit.org/show_bug.cgi?id=261432
Please upgrade your browser for a better form experience and to prevent this warning.`
        );
      }
    }
  }
  connectedCallback() {
    super.connectedCallback();
    const constructor = this.constructor;
    if (constructor.observeSlots) {
      this.updateSlotsWithContent();
      this.shadowRoot.addEventListener("slotchange", () => {
        this.updateSlotsWithContent();
      });
    }
    this.shadowRoot.prepend(
      document.createComment(` Quiet UI \xB7 https://quietui.org/docs/components/${this.localName.replace("quiet-", "")} `)
    );
  }
  /**
   * Updates the slotsWithContent Set with currently populated slots
   */
  updateSlotsWithContent() {
    const newSlots = new Set([...this.querySelectorAll(":scope > [slot]")].map((el) => el.slot));
    if (JSON.stringify([...newSlots].sort()) !== JSON.stringify([...this.slotsWithContent].sort())) {
      this.slotsWithContent = newSlots;
    }
  }
  /**
   * Used in templates to conditionally render a slot when it has content. When it doesn't have content, a hidden slot
   * of the same name is rendered instead to ensure the `slotchange` event continues to fire.
   */
  whenSlotted(name, content, options) {
    const opts = {
      force: false,
      ...options
    };
    return this.slotsWithContent.has(name) || opts.force ? content : x`<slot name="${name}" hidden></slot>`;
  }
};
QuietElement.formAssociated = false;
QuietElement.shadowRootOptions = {
  ...i.shadowRootOptions,
  serializable: true
};
/**
 * Enables slot detection for a component. When enabled, named slots that have content will be automatically detected
 * and their names will be added to a Set in the reactive `this.slots` property.
 */
QuietElement.observeSlots = false;
__decorateClass([
  r2()
], QuietElement.prototype, "slotsWithContent", 2);
__decorateClass([
  n()
], QuietElement.prototype, "dir", 2);
__decorateClass([
  n()
], QuietElement.prototype, "lang", 2);
var QuietFormControlElement = class extends QuietElement {
  /** For form-associated elements, this returns the current validity state of the control. */
  get validity() {
    const constructor = this.constructor;
    return constructor.formAssociated ? this.internals.validity : void 0;
  }
  /** Gets the form control's current validation message or an empty string when the form control is valid. */
  get validationMessage() {
    return this.internals.validationMessage;
  }
  /**
   * Checks if the form control has any restraints and whether it satisfies them. If invalid, `false` will be returned
   * and the `invalid` event will be dispatched. If valid, `true` will be returned.
   */
  checkValidity() {
    return this.internals.checkValidity();
  }
  /**
   * Sets a custom validation message for the form control. If this message is not an empty string, then the form
   * control is considered invalid and the specified message will be displayed to the user when reporting validity.
   * Setting an empty string clears the custom validity state.
   */
  setCustomValidity(message) {
    if (!this.hasUpdated) {
      this.updateComplete.then(() => this.setCustomValidity(message));
      return;
    }
    if (this.focusableAnchor) {
      this.internals.setValidity({ customError: message !== "" }, message, this.focusableAnchor);
    } else {
      console.error(
        `No "focusableAnchor" getter is set on ${this.tagName}. This will prevent validation from working properly.`,
        this
      );
    }
    this.requestUpdate();
  }
  /** Returns the current custom validation message or an empty string if no custom error is set. */
  getCustomValidity() {
    return this.internals.validity.customError ? this.internals.validationMessage : "";
  }
  /**
   * Checks if the form control has any restraints and whether it satisfies them. If invalid, `false` will be returned
   * and the `invalid` event will be dispatched. In addition, the problem will be reported to the user. If valid, `true`
   * will be returned.
   */
  reportValidity() {
    return this.internals.reportValidity();
  }
};
QuietFormControlElement.formAssociated = true;

export {
  t,
  n,
  r2 as r,
  t2,
  e2 as e,
  QuietElement,
  QuietFormControlElement
};
