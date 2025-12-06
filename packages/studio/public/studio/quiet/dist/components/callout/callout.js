/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  callout_styles_default
} from "../../chunks/chunk.3ZOC2H3T.js";
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

// src/components/callout/callout.ts
var QuietCallout = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.variant = "neutral";
  }
  firstUpdated() {
    this.setAttribute("role", "note");
  }
  render() {
    return x`
      ${this.whenSlotted(
      "icon",
      x`
          <div id="icon" part="icon">
            <slot name="icon"></slot>
          </div>
        `
    )}

      <div id="body" part="body">
        <slot></slot>
      </div>
    `;
  }
};
QuietCallout.observeSlots = true;
QuietCallout.styles = [host_styles_default, callout_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietCallout.prototype, "variant", 2);
QuietCallout = __decorateClass([
  t("quiet-callout")
], QuietCallout);
export {
  QuietCallout
};
