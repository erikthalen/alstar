/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  number_styles_default
} from "../../chunks/chunk.4SFWECDT.js";
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
import "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/number/number.ts
var QuietNumber = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.number = 0;
    this.type = "decimal";
    this.currency = "USD";
    this.grouping = "auto";
  }
  render() {
    if (isNaN(this.number)) {
      return "";
    }
    return this.localize.number(this.number, {
      style: this.type,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      currencySign: this.currencySign,
      unit: this.unit,
      unitDisplay: this.unitDisplay,
      minimumIntegerDigits: this.minimumIntegerDigits,
      minimumFractionDigits: this.minimumFractionDigits,
      maximumFractionDigits: this.maximumFractionDigits,
      minimumSignificantDigits: this.minimumSignificantDigits,
      maximumSignificantDigits: this.maximumSignificantDigits,
      roundingPriority: this.roundingPriority,
      roundingIncrement: this.roundingIncrement,
      roundingMode: this.roundingMode,
      trailingZeroDisplay: this.trailingZeroDisplay,
      notation: this.notation,
      compactDisplay: this.compactDisplay,
      // @ts-expect-error - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#usegrouping
      useGrouping: this.grouping === "never" ? false : this.grouping,
      // @ts-expect-error - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#signdisplay
      signDisplay: this.signDisplay
    });
  }
};
QuietNumber.styles = [host_styles_default, number_styles_default];
__decorateClass([
  n({ type: Number })
], QuietNumber.prototype, "number", 2);
__decorateClass([
  n()
], QuietNumber.prototype, "type", 2);
__decorateClass([
  n()
], QuietNumber.prototype, "currency", 2);
__decorateClass([
  n({ attribute: "currency-display" })
], QuietNumber.prototype, "currencyDisplay", 2);
__decorateClass([
  n({ attribute: "currency-sign" })
], QuietNumber.prototype, "currencySign", 2);
__decorateClass([
  n()
], QuietNumber.prototype, "unit", 2);
__decorateClass([
  n({ attribute: "unit-display" })
], QuietNumber.prototype, "unitDisplay", 2);
__decorateClass([
  n({ attribute: "minimum-integer-digits", type: Number })
], QuietNumber.prototype, "minimumIntegerDigits", 2);
__decorateClass([
  n({ attribute: "minimum-fraction-digits", type: Number })
], QuietNumber.prototype, "minimumFractionDigits", 2);
__decorateClass([
  n({ attribute: "maximum-fraction-digits", type: Number })
], QuietNumber.prototype, "maximumFractionDigits", 2);
__decorateClass([
  n({ attribute: "minimum-significant-digits", type: Number })
], QuietNumber.prototype, "minimumSignificantDigits", 2);
__decorateClass([
  n({ attribute: "maximum-significant-digits", type: Number })
], QuietNumber.prototype, "maximumSignificantDigits", 2);
__decorateClass([
  n({ attribute: "rounding-priority" })
], QuietNumber.prototype, "roundingPriority", 2);
__decorateClass([
  n({ attribute: "rounding-increment" })
], QuietNumber.prototype, "roundingIncrement", 2);
__decorateClass([
  n({ attribute: "rounding-mode" })
], QuietNumber.prototype, "roundingMode", 2);
__decorateClass([
  n({ attribute: "trailing-zero-display" })
], QuietNumber.prototype, "trailingZeroDisplay", 2);
__decorateClass([
  n()
], QuietNumber.prototype, "notation", 2);
__decorateClass([
  n({ attribute: "compact-display" })
], QuietNumber.prototype, "compactDisplay", 2);
__decorateClass([
  n()
], QuietNumber.prototype, "grouping", 2);
__decorateClass([
  n({ attribute: "sign-display" })
], QuietNumber.prototype, "signDisplay", 2);
QuietNumber = __decorateClass([
  t("quiet-number")
], QuietNumber);
export {
  QuietNumber
};
