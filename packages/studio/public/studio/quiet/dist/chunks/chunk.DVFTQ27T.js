/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  listbox_item_styles_default
} from "./chunk.EMBN4RHU.js";
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

// src/components/listbox-item/listbox-item.ts
var QuietListboxItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.value = "";
    this.selected = false;
    this.disabled = false;
  }
  firstUpdated() {
    this.setAttribute("role", "option");
  }
  updated(changedProperties) {
    if (changedProperties.has("selected")) {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
      this.customStates.set("selected", this.selected);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
      if (this.selected && this.disabled) {
        this.closest("quiet-listbox")?.resetRovingTabIndex();
      }
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietListboxItem.styles = [host_styles_default, listbox_item_styles_default];
__decorateClass([
  n()
], QuietListboxItem.prototype, "label", 2);
__decorateClass([
  n()
], QuietListboxItem.prototype, "description", 2);
__decorateClass([
  n()
], QuietListboxItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean })
], QuietListboxItem.prototype, "selected", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietListboxItem.prototype, "disabled", 2);
QuietListboxItem = __decorateClass([
  t("quiet-listbox-item")
], QuietListboxItem);

export {
  QuietListboxItem
};
