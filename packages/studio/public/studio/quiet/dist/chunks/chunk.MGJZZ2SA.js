/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  spinner_styles_default
} from "./chunk.3L6SRQZP.js";
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
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/spinner/spinner.ts
var QuietSpinner = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.label = "";
  }
  firstUpdated() {
    const label = this.label || this.localize.term("loading");
    this.setAttribute("role", "progressbar");
    this.setAttribute("aria-label", label);
  }
  render() {
    return x`
      <slot>
        <svg fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <circle id="track" part="track" cx="12" cy="12" r="10" fill="none" stroke-width="3" />
          <circle id="indicator" part="indicator" cx="12" cy="12" r="10" fill="none" stroke-width="3" />
        </svg>
      </slot>
    `;
  }
};
QuietSpinner.styles = [host_styles_default, spinner_styles_default];
__decorateClass([
  n({ type: String, attribute: "label" })
], QuietSpinner.prototype, "label", 2);
QuietSpinner = __decorateClass([
  t("quiet-spinner")
], QuietSpinner);

export {
  QuietSpinner
};
