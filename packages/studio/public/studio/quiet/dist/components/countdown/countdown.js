/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  countdown_styles_default
} from "../../chunks/chunk.7MIFPDYV.js";
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
  QuietFinishedEvent,
  QuietTickEvent
} from "../../chunks/chunk.PAQ6OOMA.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/countdown/countdown.ts
var UNITS = ["seconds", "minutes", "hours", "days", "months", "years"];
var QuietCountdown = class extends QuietElement {
  constructor() {
    super(...arguments);
    // For tracking time and intervals
    this.endAdjustment = 0;
    this.intervalId = null;
    this.localize = new Localize(this);
    this.previousValues = {};
    this.stoppedAt = null;
    this.currentTimeUnits = {};
    this.visibleUnits = [];
    this.effectiveEndDate = null;
    this.label = "";
    this.delimiter = "";
    this.minUnit = "seconds";
    this.maxUnit = "days";
    this.grouping = "auto";
  }
  get endDate() {
    return new Date(this.date);
  }
  connectedCallback() {
    super.connectedCallback();
    this.start();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stop();
  }
  firstUpdated() {
    this.setAttribute("role", "timer");
    this.updateTimeUnits();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label);
    }
    if (changedProperties.has("minUnit") || changedProperties.has("maxUnit")) {
      this.visibleUnits = this.getVisibleUnits().reverse();
    }
    if (changedProperties.has("date")) {
      const wasActive = this.intervalId !== null;
      this.stop();
      if (wasActive || this.endDate.getTime() > Date.now()) {
        this.start();
      }
    }
  }
  /** Starts or resumes the countdown timer after validating dates. */
  start(options = {}) {
    const start = /* @__PURE__ */ new Date();
    const end = this.endDate;
    const isValid = !isNaN(end.getTime()) && end.getTime() > start.getTime();
    if (!isValid) {
      return false;
    }
    this.stop();
    if (options.resume && this.stoppedAt !== null) {
      const pauseDuration = Date.now() - this.stoppedAt;
      this.endAdjustment += pauseDuration;
    }
    this.customStates.set("active", true);
    this.stoppedAt = null;
    this.updateEffectiveEndDate();
    this.updateTimeUnits();
    const updateInterval = this.getUpdateInterval();
    this.intervalId = window.setInterval(() => this.updateTimeUnits(), updateInterval);
    return true;
  }
  /** Stops the countdown timer and records the time it was stopped. */
  stop() {
    this.customStates.set("active", false);
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
      this.stoppedAt = Date.now();
    }
  }
  /** Updates the effective end date with any adjustments */
  updateEffectiveEndDate() {
    const end = this.endDate;
    if (isNaN(end.getTime())) {
      this.effectiveEndDate = null;
      return;
    }
    if (this.endAdjustment > 0) {
      this.effectiveEndDate = new Date(end.getTime() + this.endAdjustment);
    } else {
      this.effectiveEndDate = end;
    }
  }
  /** Updates the current time units and checks for changes */
  updateTimeUnits() {
    const now = /* @__PURE__ */ new Date();
    if (!this.effectiveEndDate || isNaN(now.getTime()) || isNaN(this.effectiveEndDate.getTime())) {
      this.currentTimeUnits = {};
      return;
    }
    const units = this.calculateTimeUnits(now, this.effectiveEndDate);
    this.currentTimeUnits = units;
    this.checkForChanges(units, this.visibleUnits);
  }
  /** Calculates the update interval based on the minimum unit shown. */
  getUpdateInterval() {
    switch (this.minUnit) {
      case "months":
      case "years":
        return 24 * 60 * 60 * 1e3;
      // update daily
      case "days":
        return 60 * 60 * 1e3;
      // update every hour
      case "hours":
        return 60 * 1e3;
      // update every minute
      case "minutes":
      case "seconds":
      default:
        return 1e3;
    }
  }
  /**
   * Calculates time difference with proper handling of varying month lengths and leap years. Uses native `Date` methods
   * for lightweight but accurate calculations.
   */
  calculateTimeUnits(now, end) {
    const visibleUnits = this.getVisibleUnits();
    const result = {};
    const minUnitIndex = UNITS.indexOf(this.minUnit);
    const maxUnitIndex = UNITS.indexOf(this.maxUnit);
    for (const unit of visibleUnits) {
      result[unit] = 0;
    }
    if (end <= now) {
      if (this.intervalId !== null) {
        this.dispatchEvent(new QuietFinishedEvent());
        this.stop();
      }
      return result;
    }
    const startDate = new Date(now);
    const endDate = new Date(end);
    let remainingDate = new Date(startDate);
    if (maxUnitIndex >= UNITS.indexOf("years")) {
      let years = endDate.getFullYear() - startDate.getFullYear();
      if (startDate.getMonth() > endDate.getMonth() || startDate.getMonth() === endDate.getMonth() && startDate.getDate() > endDate.getDate()) {
        years--;
      }
      result["years"] = years;
      if (years > 0 && minUnitIndex < UNITS.indexOf("years")) {
        remainingDate.setFullYear(remainingDate.getFullYear() + years);
      }
    }
    if (maxUnitIndex >= UNITS.indexOf("months") && minUnitIndex <= UNITS.indexOf("months")) {
      let months;
      if (maxUnitIndex < UNITS.indexOf("years")) {
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
        if (startDate.getDate() > endDate.getDate()) {
          months--;
        }
      } else {
        months = endDate.getMonth() - remainingDate.getMonth();
        if (remainingDate.getDate() > endDate.getDate()) {
          months--;
        }
        if (months < 0) {
          months += 12;
        }
      }
      result["months"] = months;
      if (months > 0 && minUnitIndex < UNITS.indexOf("months")) {
        const newMonth = remainingDate.getMonth() + months;
        remainingDate.setMonth(newMonth);
        while (remainingDate > endDate || remainingDate.getMonth() !== newMonth % 12) {
          remainingDate.setDate(remainingDate.getDate() - 1);
        }
      }
    }
    if (maxUnitIndex >= UNITS.indexOf("days") && minUnitIndex <= UNITS.indexOf("days")) {
      const millisecondsPerDay = 1e3 * 60 * 60 * 24;
      let days;
      if (maxUnitIndex < UNITS.indexOf("months")) {
        days = Math.floor((endDate.getTime() - startDate.getTime()) / millisecondsPerDay);
      } else {
        days = Math.floor((endDate.getTime() - remainingDate.getTime()) / millisecondsPerDay);
      }
      result["days"] = days;
      if (days > 0 && minUnitIndex < UNITS.indexOf("days")) {
        remainingDate.setTime(remainingDate.getTime() + days * millisecondsPerDay);
      }
    }
    const timeUnits = {
      hours: 24,
      minutes: 60,
      seconds: 60
    };
    let totalSeconds = Math.floor((endDate.getTime() - remainingDate.getTime()) / 1e3);
    if (maxUnitIndex >= UNITS.indexOf("hours") && minUnitIndex <= UNITS.indexOf("hours")) {
      if (maxUnitIndex < UNITS.indexOf("days")) {
        result["hours"] = Math.floor(totalSeconds / 3600);
      } else {
        result["hours"] = Math.floor(totalSeconds / 3600) % timeUnits.hours;
      }
      totalSeconds %= 3600 * timeUnits.hours;
    }
    if (maxUnitIndex >= UNITS.indexOf("minutes") && minUnitIndex <= UNITS.indexOf("minutes")) {
      if (maxUnitIndex < UNITS.indexOf("hours")) {
        result["minutes"] = Math.floor(totalSeconds / 60);
      } else {
        result["minutes"] = Math.floor(totalSeconds / 60) % timeUnits.minutes;
      }
      totalSeconds %= 60 * timeUnits.minutes;
    }
    if (maxUnitIndex >= UNITS.indexOf("seconds") && minUnitIndex <= UNITS.indexOf("seconds")) {
      if (maxUnitIndex < UNITS.indexOf("minutes")) {
        result["seconds"] = totalSeconds;
      } else {
        result["seconds"] = totalSeconds % timeUnits.seconds;
      }
    }
    return result;
  }
  /** Gets the visible units based on `min-unit` and `max-unit`. */
  getVisibleUnits() {
    const minIndex = UNITS.indexOf(this.minUnit);
    const maxIndex = UNITS.indexOf(this.maxUnit);
    if (minIndex === -1 || maxIndex === -1 || minIndex > maxIndex) {
      return ["seconds", "minutes", "hours", "days"];
    }
    return UNITS.slice(minIndex, maxIndex + 1);
  }
  /** Formats the number to display. */
  formatUnit(value) {
    if (typeof this.valueFormatter === "function") {
      return this.valueFormatter(value);
    }
    return new Intl.NumberFormat(this.localize.lang(), {
      minimumIntegerDigits: 2,
      // @ts-expect-error - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping
      useGrouping: this.grouping === "never" ? false : this.grouping
    }).format(value);
  }
  /** Gets the unit label using Intl.DisplayNames or fallback. */
  getUnitLabel(unit) {
    const baseUnit = unit.endsWith("s") ? unit.slice(0, -1) : unit;
    const displayNames = new Intl.DisplayNames(this.localize.lang(), { type: "dateTimeField", style: "narrow" });
    return displayNames.of(baseUnit);
  }
  /** Checks if any visible units have changed and dispatches tick event if needed. */
  checkForChanges(units, visibleUnits) {
    let hasChanged = false;
    for (const unit of visibleUnits) {
      if (this.previousValues[unit] !== units[unit]) {
        hasChanged = true;
        break;
      }
    }
    if (hasChanged) {
      for (const unit of visibleUnits) {
        this.previousValues[unit] = units[unit];
      }
      this.dispatchEvent(new QuietTickEvent());
    }
  }
  render() {
    if (this.visibleUnits.length === 0 || Object.keys(this.currentTimeUnits).length === 0) {
      return "";
    }
    return x`
      <span class="vh">
        ${this.visibleUnits.map((unit) => {
      const value = this.currentTimeUnits[unit];
      const label = this.getUnitLabel(unit);
      return `${value} ${label}`;
    }).join(" ")}
      </span>

      ${this.visibleUnits.map((unit, index) => {
      const value = this.currentTimeUnits[unit];
      const formattedValue = this.formatUnit(value);
      const label = this.getUnitLabel(unit);
      const showDelimiter = index < this.visibleUnits.length - 1 && this.delimiter !== "";
      return x`
          <span part="unit" aria-hidden="true">
            <span part="value">${formattedValue}</span>
            <span part="label"><slot name="${unit}">${label}</slot></span>
          </span>
          ${showDelimiter ? x`<span part="delimiter" aria-hidden="true">${this.delimiter}</span>` : ""}
        `;
    })}
    `;
  }
};
QuietCountdown.styles = [host_styles_default, countdown_styles_default];
__decorateClass([
  r()
], QuietCountdown.prototype, "currentTimeUnits", 2);
__decorateClass([
  r()
], QuietCountdown.prototype, "visibleUnits", 2);
__decorateClass([
  r()
], QuietCountdown.prototype, "effectiveEndDate", 2);
__decorateClass([
  n()
], QuietCountdown.prototype, "label", 2);
__decorateClass([
  n()
], QuietCountdown.prototype, "date", 2);
__decorateClass([
  n()
], QuietCountdown.prototype, "delimiter", 2);
__decorateClass([
  n({ attribute: "min-unit" })
], QuietCountdown.prototype, "minUnit", 2);
__decorateClass([
  n({ attribute: "max-unit" })
], QuietCountdown.prototype, "maxUnit", 2);
__decorateClass([
  n()
], QuietCountdown.prototype, "grouping", 2);
__decorateClass([
  n({ attribute: false })
], QuietCountdown.prototype, "valueFormatter", 2);
QuietCountdown = __decorateClass([
  t("quiet-countdown")
], QuietCountdown);
export {
  QuietCountdown
};
