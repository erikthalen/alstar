/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  date_styles_default
} from "../../chunks/chunk.ZT7YJQIW.js";
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

// src/components/date/date.ts
var QuietDate = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.date = /* @__PURE__ */ new Date();
    this.hourFormat = "auto";
  }
  render() {
    const date = new Date(this.date);
    if (isNaN(date.getMilliseconds())) {
      return "";
    }
    const isoDate = date.toISOString();
    const displayDate = this.localize.date(date, {
      dateStyle: this.dateStyle,
      timeStyle: this.timeStyle,
      hour12: this.hourFormat === "auto" ? void 0 : this.hourFormat === "12",
      hourCycle: this.hourCycle,
      timeZone: this.timeZone,
      weekday: this.weekday,
      era: this.era,
      year: this.year,
      month: this.month,
      day: this.day,
      dayPeriod: this.dayPeriod,
      hour: this.hour,
      minute: this.minute,
      second: this.second,
      // @ts-expect-error - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat#fractionalseconddigits
      fractionalSecondDigits: this.fractionalSecondDigits,
      timeZoneName: this.timeZoneName
    });
    return x`<time datetime=${isoDate}>${displayDate}</time>`;
  }
};
QuietDate.styles = [host_styles_default, date_styles_default];
__decorateClass([
  n()
], QuietDate.prototype, "date", 2);
__decorateClass([
  n({ attribute: "date-style" })
], QuietDate.prototype, "dateStyle", 2);
__decorateClass([
  n({ attribute: "time-style" })
], QuietDate.prototype, "timeStyle", 2);
__decorateClass([
  n({ attribute: "hour-format" })
], QuietDate.prototype, "hourFormat", 2);
__decorateClass([
  n()
], QuietDate.prototype, "hourCycle", 2);
__decorateClass([
  n({ attribute: "time-zone" })
], QuietDate.prototype, "timeZone", 2);
__decorateClass([
  n()
], QuietDate.prototype, "weekday", 2);
__decorateClass([
  n()
], QuietDate.prototype, "era", 2);
__decorateClass([
  n()
], QuietDate.prototype, "year", 2);
__decorateClass([
  n()
], QuietDate.prototype, "month", 2);
__decorateClass([
  n()
], QuietDate.prototype, "day", 2);
__decorateClass([
  n({ attribute: "day-period" })
], QuietDate.prototype, "dayPeriod", 2);
__decorateClass([
  n()
], QuietDate.prototype, "hour", 2);
__decorateClass([
  n()
], QuietDate.prototype, "minute", 2);
__decorateClass([
  n()
], QuietDate.prototype, "second", 2);
__decorateClass([
  n({ attribute: "fractional-second-digits", type: Number })
], QuietDate.prototype, "fractionalSecondDigits", 2);
__decorateClass([
  n({ attribute: "time-zone-name" })
], QuietDate.prototype, "timeZoneName", 2);
__decorateClass([
  n({ attribute: "format-matcher" })
], QuietDate.prototype, "formatMatcher", 2);
QuietDate = __decorateClass([
  t("quiet-date")
], QuietDate);
export {
  QuietDate
};
