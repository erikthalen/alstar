/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  zoomable_frame_styles_default
} from "../../chunks/chunk.Q3CJUX5I.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  parseDelimitedTokens
} from "../../chunks/chunk.W6PQ6UIS.js";
import {
  QuietElement,
  e,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/zoomable-frame/zoomable-frame.ts
var QuietZoomableFrame = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.availableZoomLevels = [];
    this.allowfullscreen = false;
    this.loading = "eager";
    this.zoom = 1;
    this.zoomLevels = "25% 50% 75% 100% 125% 150% 175% 200%";
    this.withoutControls = false;
    this.withoutInteraction = false;
  }
  /** Returns the internal iframe's `window` object. (Readonly property) */
  get contentWindow() {
    return this.iframe?.contentWindow || null;
  }
  /** Returns the internal iframe's `document` object. (Readonly property) */
  get contentDocument() {
    return this.iframe?.contentDocument || null;
  }
  parseZoomLevels(zoomLevelsString) {
    const tokens = parseDelimitedTokens(zoomLevelsString);
    const levels = [];
    for (const token of tokens) {
      let value;
      if (token.endsWith("%")) {
        const percentage = parseFloat(token.slice(0, -1));
        if (!isNaN(percentage)) {
          value = Math.max(0, percentage / 100);
        } else {
          continue;
        }
      } else {
        value = parseFloat(token);
        if (!isNaN(value)) {
          value = Math.max(0, value);
        } else {
          continue;
        }
      }
      levels.push(value);
    }
    return [...new Set(levels)].sort((a, b) => a - b);
  }
  getCurrentZoomIndex() {
    if (this.availableZoomLevels.length === 0) return -1;
    let closestIndex = 0;
    let closestDiff = Math.abs(this.availableZoomLevels[0] - this.zoom);
    for (let i = 1; i < this.availableZoomLevels.length; i++) {
      const diff = Math.abs(this.availableZoomLevels[i] - this.zoom);
      if (diff < closestDiff) {
        closestDiff = diff;
        closestIndex = i;
      }
    }
    return closestIndex;
  }
  isZoomInDisabled() {
    if (this.availableZoomLevels.length === 0) return false;
    const currentIndex = this.getCurrentZoomIndex();
    return currentIndex >= this.availableZoomLevels.length - 1;
  }
  isZoomOutDisabled() {
    if (this.availableZoomLevels.length === 0) return false;
    const currentIndex = this.getCurrentZoomIndex();
    return currentIndex <= 0;
  }
  updated(changedProperties) {
    if (changedProperties.has("src") || changedProperties.has("srcdoc")) {
      this.customStates.set("loading", true);
      this.customStates.set("error", false);
    }
    if (changedProperties.has("zoom")) {
      this.style.setProperty("--zoom", `${this.zoom}`);
    }
    if (changedProperties.has("zoomLevels")) {
      this.availableZoomLevels = this.parseZoomLevels(this.zoomLevels);
      if (this.availableZoomLevels.length > 0) {
        const currentIndex = this.getCurrentZoomIndex();
        if (Math.abs(this.availableZoomLevels[currentIndex] - this.zoom) > 1e-3) {
          this.zoom = this.availableZoomLevels[currentIndex];
        }
      }
    }
  }
  /** Zooms in to the next available zoom level. */
  zoomIn() {
    if (this.availableZoomLevels.length === 0) {
      this.zoom = Math.min(this.zoom + 0.05, 2);
      return;
    }
    const currentIndex = this.getCurrentZoomIndex();
    if (currentIndex < this.availableZoomLevels.length - 1) {
      this.zoom = this.availableZoomLevels[currentIndex + 1];
    }
  }
  /** Zooms out to the previous available zoom level. */
  zoomOut() {
    if (this.availableZoomLevels.length === 0) {
      this.zoom = Math.max(this.zoom - 0.05, 0);
      return;
    }
    const currentIndex = this.getCurrentZoomIndex();
    if (currentIndex > 0) {
      this.zoom = this.availableZoomLevels[currentIndex - 1];
    }
  }
  handleLoad() {
    this.customStates.set("loading", false);
    this.dispatchEvent(new Event("load", { bubbles: false, cancelable: false, composed: true }));
  }
  handleError() {
    this.customStates.set("loading", false);
    this.customStates.set("error", true);
    this.dispatchEvent(new Event("error", { bubbles: false, cancelable: false, composed: true }));
  }
  render() {
    return x`
      <div id="frame-container">
        <iframe
          id="iframe"
          part="iframe"
          ?inert=${this.withoutInteraction}
          ?allowfullscreen=${this.allowfullscreen}
          loading=${this.loading}
          referrerpolicy=${this.referrerpolicy}
          sandbox=${o(this.sandbox ?? void 0)}
          src=${o(this.src ?? void 0)}
          srcdoc=${o(this.srcdoc ?? void 0)}
          @load=${this.handleLoad}
          @error=${this.handleError}
        ></iframe>
      </div>

      ${!this.withoutControls ? x`
            <div id="controls" part="controls">
              <button
                part="zoom-out-button"
                aria-label=${this.localize.term("zoomOut")}
                @click=${this.zoomOut}
                ?disabled=${this.isZoomOutDisabled()}
              >
                <slot name="zoom-out-icon">
                  <quiet-icon name="minus" label="Zoom out"></quiet-icon>
                </slot>
              </button>
              <span>${this.localize.number(this.zoom, { style: "percent", maximumFractionDigits: 1 })}</span>
              <button
                part="zoom-in-button"
                aria-label=${this.localize.term("zoomIn")}
                @click=${this.zoomIn}
                ?disabled=${this.isZoomInDisabled()}
              >
                <slot name="zoom-in-icon">
                  <quiet-icon name="plus" label="Zoom in"></quiet-icon>
                </slot>
              </button>
            </div>
          ` : ""}
    `;
  }
};
QuietZoomableFrame.styles = [zoomable_frame_styles_default];
__decorateClass([
  e("#iframe")
], QuietZoomableFrame.prototype, "iframe", 2);
__decorateClass([
  n()
], QuietZoomableFrame.prototype, "src", 2);
__decorateClass([
  n()
], QuietZoomableFrame.prototype, "srcdoc", 2);
__decorateClass([
  n({ type: Boolean })
], QuietZoomableFrame.prototype, "allowfullscreen", 2);
__decorateClass([
  n()
], QuietZoomableFrame.prototype, "loading", 2);
__decorateClass([
  n()
], QuietZoomableFrame.prototype, "referrerpolicy", 2);
__decorateClass([
  n()
], QuietZoomableFrame.prototype, "sandbox", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], QuietZoomableFrame.prototype, "zoom", 2);
__decorateClass([
  n({ attribute: "zoom-levels" })
], QuietZoomableFrame.prototype, "zoomLevels", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-controls", reflect: true })
], QuietZoomableFrame.prototype, "withoutControls", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-interaction", reflect: true })
], QuietZoomableFrame.prototype, "withoutInteraction", 2);
QuietZoomableFrame = __decorateClass([
  t("quiet-zoomable-frame")
], QuietZoomableFrame);
export {
  QuietZoomableFrame
};
