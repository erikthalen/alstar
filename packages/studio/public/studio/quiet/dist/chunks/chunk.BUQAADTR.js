/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  bytes_styles_default
} from "./chunk.UDUVG3YR.js";
import {
  QuietElement,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  Localize
} from "./chunk.N7C6RCMV.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/bytes/bytes.ts
var QuietBytes = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.value = 0;
    this.unit = "byte";
    this.display = "narrow";
  }
  render() {
    if (isNaN(this.value)) {
      return "";
    }
    const byteUnits = ["", "kilo", "mega", "giga", "tera", "peta"];
    const bitUnits = ["", "kilo", "mega", "giga", "tera"];
    const prefix = this.unit === "byte" ? byteUnits : bitUnits;
    const index = Math.max(0, Math.min(Math.floor(Math.log10(this.value) / 3), prefix.length - 1));
    const unit = prefix[index] + this.unit;
    const unitDisplay = this.display;
    const value = parseFloat((this.value / Math.pow(1e3, index)).toPrecision(3));
    return this.localize.number(value, { style: "unit", unit, unitDisplay });
  }
};
QuietBytes.styles = [host_styles_default, bytes_styles_default];
__decorateClass([
  n({ type: Number })
], QuietBytes.prototype, "value", 2);
__decorateClass([
  n()
], QuietBytes.prototype, "unit", 2);
__decorateClass([
  n()
], QuietBytes.prototype, "display", 2);
QuietBytes = __decorateClass([
  t("quiet-bytes")
], QuietBytes);

export {
  QuietBytes
};
