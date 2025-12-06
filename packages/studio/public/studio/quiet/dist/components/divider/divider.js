/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  divider_styles_default
} from "../../chunks/chunk.R75DNQ7D.js";
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

// src/components/divider/divider.ts
var QuietDivider = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
  }
  firstUpdated() {
    this.setAttribute("role", "separator");
  }
  updated(changedProperties) {
    if (changedProperties.has("orientation")) {
      this.setAttribute("aria-orientation", this.orientation === "vertical" ? "vertical" : "horizontal");
    }
  }
  render() {
    return x`
      <div class="line"></div>
      ${this.whenSlotted(
      "symbol",
      x`
          <div part="symbol" class="symbol" aria-hidden="true">
            <slot name="symbol"></slot>
          </div>
        `
    )}
      <div class="line"></div>
    `;
  }
};
QuietDivider.observeSlots = true;
QuietDivider.styles = [host_styles_default, divider_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietDivider.prototype, "orientation", 2);
QuietDivider = __decorateClass([
  t("quiet-divider")
], QuietDivider);
export {
  QuietDivider
};
