/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  combobox_item_styles_default
} from "./chunk.REI7R7F5.js";
import {
  QuietElement,
  e as e2,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  e
} from "./chunk.E6M524BP.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/combobox-item/combobox-item.ts
var QuietComboboxItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.disabled = false;
    this.selected = false;
    this.active = false;
    this.combobox = null;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "option");
    this.setAttribute("tabindex", "-1");
  }
  /** Gets the text content from the combobox item's label. */
  getLabelText() {
    if (this.defaultSlot) {
      const nodes = this.defaultSlot.assignedNodes({ flatten: true });
      return nodes.map((node) => node.textContent || "").join("").trim();
    }
    return this.textContent?.trim() || "";
  }
  updated(changedProperties) {
    if (changedProperties.has("selected")) {
      this.setAttribute("aria-selected", this.selected ? "true" : "false");
      this.customStates.set("selected", this.selected);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("active")) {
      this.customStates.set("active", this.active);
    }
  }
  render() {
    const isMultiple = this.combobox?.multiple ?? false;
    return x`
      <quiet-icon
        part="checkmark"
        class=${e({
      checkmark: true,
      selected: this.selected,
      multiple: isMultiple
    })}
        library="system"
        name="check"
      ></quiet-icon>

      <span part="icon" class="icon">
        <slot name="icon"></slot>
      </span>

      <span part="label" class="label">
        <slot></slot>
      </span>

      <span part="details" class="details">
        <slot name="details"></slot>
      </span>
    `;
  }
};
QuietComboboxItem.observeSlots = true;
QuietComboboxItem.styles = [host_styles_default, combobox_item_styles_default];
__decorateClass([
  e2("slot:not([name])")
], QuietComboboxItem.prototype, "defaultSlot", 2);
__decorateClass([
  n()
], QuietComboboxItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietComboboxItem.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean })
], QuietComboboxItem.prototype, "selected", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietComboboxItem.prototype, "active", 2);
__decorateClass([
  n({ attribute: false })
], QuietComboboxItem.prototype, "combobox", 2);
QuietComboboxItem = __decorateClass([
  t("quiet-combobox-item")
], QuietComboboxItem);

export {
  QuietComboboxItem
};
