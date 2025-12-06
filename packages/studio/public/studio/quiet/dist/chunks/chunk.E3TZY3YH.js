/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  progress_styles_default
} from "./chunk.TDJABKBP.js";
import {
  clamp
} from "./chunk.ELBGBFBV.js";
import {
  QuietElement,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/progress/progress.ts
var QuietProgress = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.appearance = "bar";
    this.min = 0;
    this.max = 100;
    this.value = 0;
    this.indeterminate = false;
  }
  /** The progress bar's current value as a percentage. This is a readonly property. */
  get percentage() {
    return (this.value - this.min) / (this.max - this.min) * 100;
  }
  firstUpdated() {
    this.setAttribute("role", "progressbar");
  }
  updated(changedProperties) {
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label);
    }
    if (changedProperties.has("min") || changedProperties.has("max") || changedProperties.has("value") || changedProperties.has("indeterminate")) {
      this.style.setProperty("--percentage", `${clamp(this.percentage, 0, 100)}`);
      this.setAttribute("aria-valuemin", String(this.min));
      this.setAttribute("aria-valuemax", String(this.max));
      if (this.indeterminate) {
        this.removeAttribute("aria-valuenow");
      } else {
        this.setAttribute("aria-valuenow", String(this.value));
      }
    }
  }
  render() {
    if (this.appearance === "ring" || this.appearance === "pie") {
      return x`
        <svg>
          <circle id="track" part="track"></circle>
          <circle id="indicator" part="indicator"></circle>
        </svg>

        <div id="content" part="content">
          <slot></slot>
        </div>
      `;
    }
    return x`
      <div id="track" part="track">
        <div id="indicator" part="indicator">
          <div id="content" part="content">
            <slot></slot>
          </div>
        </div>
      </div>
    `;
  }
};
QuietProgress.styles = [host_styles_default, progress_styles_default];
__decorateClass([
  n()
], QuietProgress.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietProgress.prototype, "appearance", 2);
__decorateClass([
  n({ type: Number })
], QuietProgress.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], QuietProgress.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], QuietProgress.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietProgress.prototype, "indeterminate", 2);
QuietProgress = __decorateClass([
  t("quiet-progress")
], QuietProgress);

export {
  QuietProgress
};
