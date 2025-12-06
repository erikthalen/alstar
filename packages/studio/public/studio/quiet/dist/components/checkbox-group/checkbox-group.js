/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  checkbox_group_styles_default
} from "../../chunks/chunk.HMNBVYNY.js";
import {
  QuietElement,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  form_control_styles_default
} from "../../chunks/chunk.QB6BERFO.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/checkbox-group/checkbox-group.ts
var QuietCheckboxGroup = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
    this.required = false;
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    return x`
      <label id="label" part="label" for="text-box" class=${e({ vh: !hasLabel })}>
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <div id="group" part="group" role="group" aria-labelledby="label" aria-describedby="description">
        <slot></slot>
      </div>
    `;
  }
};
QuietCheckboxGroup.observeSlots = true;
QuietCheckboxGroup.styles = [host_styles_default, form_control_styles_default, checkbox_group_styles_default];
__decorateClass([
  n()
], QuietCheckboxGroup.prototype, "label", 2);
__decorateClass([
  n()
], QuietCheckboxGroup.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietCheckboxGroup.prototype, "orientation", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCheckboxGroup.prototype, "required", 2);
QuietCheckboxGroup = __decorateClass([
  t("quiet-checkbox-group")
], QuietCheckboxGroup);
export {
  QuietCheckboxGroup
};
