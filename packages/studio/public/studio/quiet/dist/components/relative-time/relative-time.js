/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  relative_time_styles_default
} from "../../chunks/chunk.TS5XYHKC.js";
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
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/relative-time/relative-time.ts
var connectedElements = /* @__PURE__ */ new Set();
var UNITS = [
  { max: 56e3, value: 1e3, unit: "second" },
  // 56 seconds max
  { max: 276e4, value: 6e4, unit: "minute" },
  // 46 minutes max
  { max: 72e6, value: 36e5, unit: "hour" },
  // 20 hours max
  { max: 5184e5, value: 864e5, unit: "day" },
  // 6 days max
  { max: 24192e5, value: 6048e5, unit: "week" },
  // 28 days max
  { max: 28512e6, value: 2592e6, unit: "month" },
  // 11 months max
  { max: Infinity, value: 31536e6, unit: "year" }
];
var liveInterval;
var QuietRelativeTime = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.date = /* @__PURE__ */ new Date();
    this.format = "long";
    this.numeric = "auto";
    this.live = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("live")) {
      if (this.live) {
        connectedElements.add(this);
      } else {
        connectedElements.delete(this);
      }
      if (connectedElements.size === 0) {
        clearInterval(liveInterval);
        liveInterval = void 0;
      } else if (!liveInterval) {
        liveInterval = setInterval(() => connectedElements.forEach((el) => el.requestUpdate()), 1e3);
      }
    }
  }
  render() {
    const currentDate = /* @__PURE__ */ new Date();
    const targetDate = this.date ? new Date(this.date) : /* @__PURE__ */ new Date();
    if (isNaN(targetDate.getMilliseconds())) {
      return "";
    }
    const isoDate = targetDate.toISOString();
    const difference = targetDate.getTime() - currentDate.getTime();
    const { unit, value } = UNITS.find((u) => Math.abs(difference) < u.max);
    const relativeDate = this.localize.relativeTime(Math.round(difference / value), unit, {
      numeric: this.numeric,
      style: this.format
    });
    return x`<time datetime=${isoDate}>${relativeDate}</time>`;
  }
};
QuietRelativeTime.styles = [host_styles_default, relative_time_styles_default];
__decorateClass([
  n()
], QuietRelativeTime.prototype, "date", 2);
__decorateClass([
  n()
], QuietRelativeTime.prototype, "format", 2);
__decorateClass([
  n()
], QuietRelativeTime.prototype, "numeric", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRelativeTime.prototype, "live", 2);
QuietRelativeTime = __decorateClass([
  t("quiet-relative-time")
], QuietRelativeTime);
export {
  QuietRelativeTime
};
