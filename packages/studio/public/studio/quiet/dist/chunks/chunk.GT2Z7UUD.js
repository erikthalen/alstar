/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  tab_panel_styles_default
} from "./chunk.TRE6XGMI.js";
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

// src/components/tab-panel/tab-panel.ts
var QuietTabPanel = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.visible = false;
  }
  firstUpdated() {
    this.setAttribute("role", "tabpanel");
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.visible = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("visible")) {
      this.customStates.set("visible", this.visible);
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietTabPanel.styles = [host_styles_default, tab_panel_styles_default];
__decorateClass([
  n({ type: Boolean })
], QuietTabPanel.prototype, "visible", 2);
__decorateClass([
  n({ reflect: true })
], QuietTabPanel.prototype, "name", 2);
QuietTabPanel = __decorateClass([
  t("quiet-tab-panel")
], QuietTabPanel);

export {
  QuietTabPanel
};
