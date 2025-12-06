/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  tab_styles_default
} from "./chunk.Q2OSRC57.js";
import {
  QuietElement,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/tab/tab.ts
var QuietTab = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "tab");
    this.setAttribute("aria-selected", "false");
    this.setAttribute("aria-disabled", "false");
    this.setAttribute("tabindex", "-1");
    this.setAttribute("slot", "tab");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.active = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this.setAttribute("aria-selected", this.active ? "true" : "false");
      this.setAttribute("tabindex", this.active ? "0" : "-1");
      this.customStates.set("active", this.active);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
      if (this.active && this.disabled) {
        this.active = false;
        this.closest("quiet-tab-list")?.resetRovingTabIndex();
      }
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietTab.styles = [host_styles_default, tab_styles_default];
__decorateClass([
  n({ type: Boolean })
], QuietTab.prototype, "active", 2);
__decorateClass([
  n({ reflect: true })
], QuietTab.prototype, "panel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTab.prototype, "disabled", 2);
QuietTab = __decorateClass([
  t("quiet-tab")
], QuietTab);

export {
  QuietTab
};
