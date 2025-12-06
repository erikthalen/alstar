/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  empty_state_styles_default
} from "../../chunks/chunk.BQAE3PJQ.js";
import {
  QuietElement,
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

// src/components/empty-state/empty-state.ts
var QuietEmptyState = class extends QuietElement {
  render() {
    return x`
      ${this.whenSlotted(
      "illustration",
      x`
          <div id="illustration" part="illustration">
            <slot name="illustration"></slot>
          </div>
        `
    )}

      <div id="content" part="content">
        <slot></slot>
      </div>
    `;
  }
};
QuietEmptyState.observeSlots = true;
QuietEmptyState.styles = [host_styles_default, empty_state_styles_default];
QuietEmptyState = __decorateClass([
  t("quiet-empty-state")
], QuietEmptyState);
export {
  QuietEmptyState
};
