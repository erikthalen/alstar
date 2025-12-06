/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  number_ticker_styles_default
} from "../../chunks/chunk.CE5ABPL5.js";
import {
  QuietElement,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  QuietAnimationComplete
} from "../../chunks/chunk.CI5CPUU3.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/number-ticker/number-ticker.ts
var QuietNumberTicker = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.animationFrame = null;
    this.animationTimeout = null;
    this.localize = new Localize(this);
    this.observer = null;
    this.startTime = null;
    this.currentValue = 0;
    this.isAnimating = false;
    this.startValue = 0;
    this.endValue = 0;
    this.duration = 2e3;
    this.delay = 0;
    this.decimalPlaces = 0;
    this.grouping = "auto";
    this.startOnView = false;
    this.ignoreReducedMotion = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.currentValue = this.startValue;
    if (this.startOnView) {
      this.setupIntersectionObserver();
    } else {
      this.startAnimation();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAnimation();
    this.observer?.disconnect();
  }
  updated(changedProperties) {
    if (changedProperties.has("startValue") || changedProperties.has("endValue") || changedProperties.has("decimalPlaces") || changedProperties.has("duration")) {
      this.stopAnimation();
      this.currentValue = this.startValue;
      if (!this.startOnView) {
        this.startAnimation();
      }
    }
    if (changedProperties.has("endValue")) {
      this.setAttribute("aria-label", `${this.endValue}`);
    }
  }
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isAnimating) {
          this.startAnimation();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this);
  }
  startAnimation() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const effectiveDelay = Math.max(0, Number(this.delay) || 0);
    this.stopAnimation();
    this.currentValue = this.startValue;
    if (prefersReducedMotion && !this.ignoreReducedMotion) {
      this.isAnimating = true;
      setTimeout(() => this.startReducedMotionAnimation(), effectiveDelay);
    } else {
      setTimeout(() => {
        this.isAnimating = true;
        this.startTime = performance.now();
        this.tick();
      }, effectiveDelay);
    }
  }
  startReducedMotionAnimation() {
    const steps = 5;
    const stepDuration = Math.max(0, Number(this.duration) || 2e3) / steps;
    const valueStep = (this.endValue - this.startValue) / steps;
    let currentStep = 0;
    const updateStep = () => {
      if (currentStep <= steps) {
        this.currentValue = this.startValue + valueStep * currentStep;
        currentStep++;
        this.animationTimeout = window.setTimeout(updateStep, stepDuration);
      } else {
        this.currentValue = this.endValue;
        this.isAnimating = false;
        this.dispatchEvent(new QuietAnimationComplete());
      }
    };
    updateStep();
  }
  easeOutExpo(t2) {
    return t2 === 1 ? 1 : 1 - Math.pow(2, -10 * t2);
  }
  tick() {
    if (!this.isAnimating || this.startTime === null) return;
    const now = performance.now();
    const elapsed = now - this.startTime;
    const progress = Math.min(elapsed / Math.max(0, Number(this.duration) || 2e3), 1);
    const easedProgress = this.easeOutExpo(progress);
    const range = this.endValue - this.startValue;
    const current = this.startValue + range * easedProgress;
    this.currentValue = current;
    if (progress < 1) {
      this.animationFrame = requestAnimationFrame(() => this.tick());
    } else {
      this.currentValue = this.endValue;
      this.isAnimating = false;
      this.dispatchEvent(new QuietAnimationComplete());
    }
  }
  stopAnimation() {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
    if (this.animationTimeout !== null) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
    }
    this.isAnimating = false;
    this.startTime = null;
  }
  render() {
    return x`
      <span aria-hidden="true">
        ${typeof this.valueFormatter === "function" ? this.valueFormatter(this.currentValue) : this.localize.number(this.currentValue, {
      maximumFractionDigits: this.decimalPlaces,
      // @ts-expect-error - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping
      useGrouping: this.grouping === "never" ? false : this.grouping
    })}
      </span>
    `;
  }
};
QuietNumberTicker.styles = [host_styles_default, number_ticker_styles_default];
__decorateClass([
  r()
], QuietNumberTicker.prototype, "currentValue", 2);
__decorateClass([
  r()
], QuietNumberTicker.prototype, "isAnimating", 2);
__decorateClass([
  n({ type: Number, attribute: "start-value" })
], QuietNumberTicker.prototype, "startValue", 2);
__decorateClass([
  n({ type: Number, attribute: "end-value" })
], QuietNumberTicker.prototype, "endValue", 2);
__decorateClass([
  n({ type: Number })
], QuietNumberTicker.prototype, "duration", 2);
__decorateClass([
  n({ type: Number })
], QuietNumberTicker.prototype, "delay", 2);
__decorateClass([
  n({ type: Number, attribute: "decimal-places" })
], QuietNumberTicker.prototype, "decimalPlaces", 2);
__decorateClass([
  n()
], QuietNumberTicker.prototype, "grouping", 2);
__decorateClass([
  n({ type: Boolean, attribute: "start-on-view" })
], QuietNumberTicker.prototype, "startOnView", 2);
__decorateClass([
  n({ attribute: "ignore-reduced-motion", type: Boolean, reflect: true })
], QuietNumberTicker.prototype, "ignoreReducedMotion", 2);
__decorateClass([
  n({ attribute: false })
], QuietNumberTicker.prototype, "valueFormatter", 2);
QuietNumberTicker = __decorateClass([
  t("quiet-number-ticker")
], QuietNumberTicker);
export {
  QuietNumberTicker
};
