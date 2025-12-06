/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  button_group_styles_default
} from "../../chunks/chunk.VEYRLRWW.js";
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

// src/components/button-group/button-group.ts
var QuietButtonGroup = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.orientation = "horizontal";
  }
  firstUpdated() {
    this.setAttribute("role", "group");
  }
  updated(changedProperties) {
    if (changedProperties.has("label")) {
      if (this.label) {
        this.setAttribute("aria-label", this.label);
      } else {
        this.removeAttribute("aria-label");
      }
      this.updateClassNames();
    }
    if (changedProperties.has("orientation")) {
      this.setAttribute("aria-orientation", this.orientation);
      this.updateClassNames();
    }
  }
  /** Gets an array of buttons slotted into the button group. Includes slotted buttons, such as dropdown triggers. */
  getButtons() {
    return [...this.querySelectorAll("quiet-button")];
  }
  /** Updates slotted button class names so they get the correct button styles. */
  updateClassNames() {
    const buttons = this.getButtons();
    buttons.forEach((button, index) => {
      button.toggleAttribute("data-button-group-horizontal", this.orientation === "horizontal");
      button.toggleAttribute("data-button-group-vertical", this.orientation === "vertical");
      button.toggleAttribute("data-button-group-first", index === 0);
      button.toggleAttribute("data-button-group-middle", index > 0 && index < buttons.length - 1);
      button.toggleAttribute("data-button-group-last", index === buttons.length - 1);
    });
  }
  render() {
    return x`<slot @slotchange=${this.updateClassNames}></slot>`;
  }
};
QuietButtonGroup.styles = [host_styles_default, button_group_styles_default];
__decorateClass([
  n()
], QuietButtonGroup.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietButtonGroup.prototype, "orientation", 2);
QuietButtonGroup = __decorateClass([
  t("quiet-button-group")
], QuietButtonGroup);
export {
  QuietButtonGroup
};
