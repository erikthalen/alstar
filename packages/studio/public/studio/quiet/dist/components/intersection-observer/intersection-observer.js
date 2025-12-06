/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  intersection_observer_styles_default
} from "../../chunks/chunk.LDT4EGOO.js";
import {
  clamp
} from "../../chunks/chunk.ELBGBFBV.js";
import {
  parseDelimitedTokens
} from "../../chunks/chunk.W6PQ6UIS.js";
import {
  QuietElement,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  QuietIntersectEvent
} from "../../chunks/chunk.G4WX7ZMW.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/intersection-observer/intersection-observer.ts
var QuietIntersectionObserver = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.hasInitialized = false;
    this.intersectionObserver = null;
    this.observedElements = /* @__PURE__ */ new Map();
    this.root = null;
    this.rootMargin = "0px";
    this.threshold = "0";
    this.intersectClass = "";
    this.once = false;
    this.disabled = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.startObserver();
    requestAnimationFrame(() => this.hasInitialized = true);
  }
  disconnectedCallback() {
    this.stopObserver();
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled") && this.hasInitialized) {
      if (this.disabled) {
        this.stopObserver();
      } else if (!this.intersectionObserver) {
        this.startObserver();
      }
    }
    if (this.hasInitialized && (changedProperties.has("root") || changedProperties.has("rootMargin") || changedProperties.has("threshold"))) {
      this.startObserver();
    }
  }
  handleSlotChange() {
    if (this.hasInitialized) {
      this.startObserver();
    }
  }
  /** Parses the threshold property into an array of numbers. */
  parseThreshold() {
    const tokens = parseDelimitedTokens(this.threshold);
    return tokens.map((token) => {
      const num = parseFloat(token);
      return isNaN(num) ? 0 : clamp(num, 0, 1);
    });
  }
  /** Resolves the root element from the provided ID. */
  resolveRoot() {
    if (!this.root) return null;
    try {
      const doc = this.getRootNode();
      const target = doc.getElementById(this.root);
      if (!target) {
        console.warn(
          `An intersection observer was assigned to an element with an ID of "${this.root}" but the element could not be found.`,
          this
        );
      }
      return target;
    } catch {
      console.warn(`Invalid selector for root: "${this.root}"`, this);
      return null;
    }
  }
  /** Starts or restarts the intersection observer. */
  startObserver() {
    this.stopObserver();
    if (this.disabled) return;
    const threshold = this.parseThreshold();
    const rootElement = this.resolveRoot();
    this.intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const wasIntersecting = this.observedElements.get(entry.target) ?? false;
          const isIntersecting = entry.isIntersecting;
          this.observedElements.set(entry.target, isIntersecting);
          if (this.intersectClass) {
            if (isIntersecting) {
              entry.target.classList.add(this.intersectClass);
            } else {
              entry.target.classList.remove(this.intersectClass);
            }
          }
          const changeEvent = new QuietIntersectEvent({ entry });
          this.dispatchEvent(changeEvent);
          if (isIntersecting && !wasIntersecting) {
            if (this.once) {
              this.intersectionObserver?.unobserve(entry.target);
              this.observedElements.delete(entry.target);
            }
          }
        });
      },
      {
        root: rootElement,
        rootMargin: this.rootMargin,
        threshold
      }
    );
    [...this.children].forEach((child) => {
      this.intersectionObserver?.observe(child);
      this.observedElements.set(child, false);
    });
  }
  /** Stops the intersection observer. */
  stopObserver() {
    if (this.intersectClass) {
      this.observedElements.forEach((_, element) => {
        element.classList.remove(this.intersectClass);
      });
    }
    this.intersectionObserver?.disconnect();
    this.intersectionObserver = null;
    this.observedElements.clear();
  }
  render() {
    return x`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
};
QuietIntersectionObserver.styles = [host_styles_default, intersection_observer_styles_default];
__decorateClass([
  n()
], QuietIntersectionObserver.prototype, "root", 2);
__decorateClass([
  n({ attribute: "root-margin" })
], QuietIntersectionObserver.prototype, "rootMargin", 2);
__decorateClass([
  n()
], QuietIntersectionObserver.prototype, "threshold", 2);
__decorateClass([
  n({ attribute: "intersect-class" })
], QuietIntersectionObserver.prototype, "intersectClass", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietIntersectionObserver.prototype, "once", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietIntersectionObserver.prototype, "disabled", 2);
QuietIntersectionObserver = __decorateClass([
  t("quiet-intersection-observer")
], QuietIntersectionObserver);
export {
  QuietIntersectionObserver
};
