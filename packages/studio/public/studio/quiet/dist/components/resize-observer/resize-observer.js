/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  resize_observer_styles_default
} from "../../chunks/chunk.GLB3LZOU.js";
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
  QuietResizeEvent
} from "../../chunks/chunk.UV47YW5E.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/resize-observer/resize-observer.ts
var QuietResizeObserver = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.hasInitialized = false;
    this.resizeObserver = null;
    this.disabled = false;
    this.box = "content-box";
  }
  connectedCallback() {
    super.connectedCallback();
    this.startObserver();
    requestAnimationFrame(() => {
      this.hasInitialized = true;
    });
  }
  /** Component lifecycle method that runs when the element disconnects from the DOM */
  disconnectedCallback() {
    this.stopObserver();
    super.disconnectedCallback();
  }
  /** Component lifecycle method that runs when properties change */
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled") && this.hasInitialized) {
      if (this.disabled) {
        this.stopObserver();
      } else if (!this.resizeObserver) {
        this.startObserver();
      }
    }
    if (changedProperties.has("box") && this.hasInitialized) {
      this.startObserver();
    }
  }
  handleSlotChange() {
    if (this.hasInitialized) {
      this.startObserver();
    }
  }
  /** Starts or restarts the resize observer. */
  startObserver() {
    this.stopObserver();
    if (this.disabled) return;
    this.resizeObserver = new ResizeObserver((entries) => {
      entries.forEach((entry) => {
        const resizeEvent = new QuietResizeEvent({ entry });
        this.dispatchEvent(resizeEvent);
      });
    });
    [...this.children].forEach((child) => {
      this.resizeObserver?.observe(child, { box: this.box });
    });
  }
  /** Stops the resize observer. */
  stopObserver() {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }
  render() {
    return x`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
};
QuietResizeObserver.styles = [host_styles_default, resize_observer_styles_default];
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietResizeObserver.prototype, "disabled", 2);
__decorateClass([
  n()
], QuietResizeObserver.prototype, "box", 2);
QuietResizeObserver = __decorateClass([
  t("quiet-resize-observer")
], QuietResizeObserver);
export {
  QuietResizeObserver
};
