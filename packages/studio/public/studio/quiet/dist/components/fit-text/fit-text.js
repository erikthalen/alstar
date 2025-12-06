/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  fit_text_styles_default
} from "../../chunks/chunk.WQFXYJPP.js";
import {
  QuietElement,
  e,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  getSlotText
} from "../../chunks/chunk.I7GB4RJG.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/fit-text/fit-text.ts
var QuietFitText = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.target === this) {
          this.containerWidth = this.clientWidth;
        }
      }
    });
    this.containerWidth = 0;
    this.text = "";
    this.minFontSize = 1;
    this.maxFontSize = 128;
    this.precision = 0.1;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  firstUpdated() {
    document.fonts.ready.then(() => this.resize());
  }
  update(changedProperties) {
    super.update(changedProperties);
    if (changedProperties.has("containerWidth") || changedProperties.has("text") || changedProperties.has("minFontSize") || changedProperties.has("maxFontSize") || changedProperties.has("precision")) {
      requestAnimationFrame(() => this.resize());
    }
  }
  handleSlotChange() {
    this.text = getSlotText(this.defaultSlot);
  }
  /**
   * Resizes the text to fit inside the container. You probably won't need to call this unless you're loading a font
   * dynamically and need to resize the text after it loads.
   */
  resize() {
    if (this.containerWidth <= 0) return;
    let minSize = this.minFontSize;
    let maxSize = this.maxFontSize;
    let currentSize = maxSize;
    while (maxSize - minSize > this.precision) {
      this.measure.style.fontSize = `${currentSize}px`;
      const textWidth = this.measure.clientWidth;
      if (textWidth === this.containerWidth) {
        break;
      } else if (textWidth > this.containerWidth) {
        maxSize = currentSize;
      } else {
        minSize = currentSize;
      }
      currentSize = (minSize + maxSize) / 2;
    }
    this.style.fontSize = `${currentSize}px`;
  }
  render() {
    return x`
      ${this.text}
      <span id="measure" inert aria-hidden="true">${this.text}</span>
      <slot hidden inert aria-hidden="true" @slotchange=${this.handleSlotChange}></slot>
    `;
  }
};
QuietFitText.styles = [host_styles_default, fit_text_styles_default];
__decorateClass([
  e("#measure")
], QuietFitText.prototype, "measure", 2);
__decorateClass([
  e("slot")
], QuietFitText.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], QuietFitText.prototype, "containerWidth", 2);
__decorateClass([
  r()
], QuietFitText.prototype, "text", 2);
__decorateClass([
  n({ attribute: "min-font-size", type: Number })
], QuietFitText.prototype, "minFontSize", 2);
__decorateClass([
  n({ attribute: "max-font-size", type: Number })
], QuietFitText.prototype, "maxFontSize", 2);
__decorateClass([
  n({ type: Number })
], QuietFitText.prototype, "precision", 2);
QuietFitText = __decorateClass([
  t("quiet-fit-text")
], QuietFitText);
export {
  QuietFitText
};
