/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  timed_content_styles_default
} from "../../chunks/chunk.WE6BQJTS.js";
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
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/timed-content/timed-content.ts
var QuietTimedContent = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.startDate = "";
    this.endDate = "";
    this.live = false;
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.live) {
      this.setupTimer();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupTimer();
  }
  updated(changedProperties) {
    if (changedProperties.has("live")) {
      if (this.live) {
        this.setupTimer();
      } else {
        this.cleanupTimer();
      }
    }
  }
  // Update every 60 seconds to check for date changes
  setupTimer() {
    this.cleanupTimer();
    this.updateInterval = setInterval(() => this.requestUpdate(), 6e4);
  }
  cleanupTimer() {
    if (this.updateInterval !== void 0) {
      clearInterval(this.updateInterval);
      this.updateInterval = void 0;
    }
  }
  render() {
    const now = /* @__PURE__ */ new Date();
    const start = this.startDate ? new Date(this.startDate) : null;
    const end = this.endDate ? new Date(this.endDate) : null;
    const isStartValid = start && !isNaN(start.getTime());
    const isEndValid = end && !isNaN(end.getTime());
    const hasInvalidDates = start && !isStartValid || end && !isEndValid;
    if (hasInvalidDates) {
      if (start && !isStartValid) console.warn("Invalid start date:", this.startDate);
      if (end && !isEndValid) console.warn("Invalid end date:", this.endDate);
      return x`<slot></slot>`;
    }
    const showBefore = isStartValid && now < start;
    const showAfter = isEndValid && now >= end;
    if (showBefore) return x`<slot name="before"></slot>`;
    if (showAfter) return x`<slot name="after"></slot>`;
    return x`<slot></slot>`;
  }
};
QuietTimedContent.styles = [host_styles_default, timed_content_styles_default];
__decorateClass([
  n({ attribute: "start-date" })
], QuietTimedContent.prototype, "startDate", 2);
__decorateClass([
  n({ attribute: "end-date" })
], QuietTimedContent.prototype, "endDate", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTimedContent.prototype, "live", 2);
QuietTimedContent = __decorateClass([
  t("quiet-timed-content")
], QuietTimedContent);
export {
  QuietTimedContent
};
