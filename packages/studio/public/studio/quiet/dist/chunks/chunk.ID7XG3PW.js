/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  radio_item_styles_default
} from "./chunk.XKCQMCPW.js";
import {
  QuietElement,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  QuietBlurEvent,
  QuietFocusEvent
} from "./chunk.E7L7Q2A4.js";
import {
  e
} from "./chunk.E6M524BP.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/radio-item/radio-item.ts
var QuietRadioItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.disabledByController = false;
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.appearance = "normal";
    this.size = "md";
    this.handleBlur = () => {
      this.customStates.set("focused", false);
      this.dispatchEvent(new QuietBlurEvent());
    };
    this.handleFocus = () => {
      this.customStates.set("focused", true);
      this.dispatchEvent(new QuietFocusEvent());
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("focus", this.handleFocus);
    this.addEventListener("blur", this.handleBlur);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focus", this.handleFocus);
    this.removeEventListener("blur", this.handleBlur);
  }
  firstUpdated() {
    this.setAttribute("role", "radio");
  }
  updated(changedProperties) {
    if (changedProperties.has("checked")) {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      this.customStates.set("checked", this.checked);
    }
    if (changedProperties.has("disabled") || changedProperties.has("disabledByController")) {
      const isDisabled = this.disabled || this.disabledByController;
      this.setAttribute("aria-disabled", isDisabled ? "true" : "false");
      this.customStates.set("disabled", isDisabled);
      if (this.checked && isDisabled) {
        this.closest("quiet-radio")?.resetRovingTabIndex();
      }
    }
  }
  render() {
    const isDisabled = this.disabled || this.disabledByController;
    return x`
      <div id="label" part="label">
        <div
          id="visual-box"
          part="visual-box"
          aria-hidden="true"
          class=${e({
      /* Appearances */
      normal: this.appearance === "normal",
      filled: this.appearance === "filled",
      /* Sizes */
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      /* States */
      checked: this.checked,
      disabled: isDisabled
    })}
        >
          <quiet-icon
            id="radio-icon"
            part="radio-icon"
            exportparts="radio-icon__svg"
            library="system"
            family="filled"
            name="circle"
          ></quiet-icon>
        </div>
        <slot>${this.label}</slot>
      </div>
    `;
  }
};
QuietRadioItem.styles = [host_styles_default, radio_item_styles_default];
__decorateClass([
  r()
], QuietRadioItem.prototype, "disabledByController", 2);
__decorateClass([
  n()
], QuietRadioItem.prototype, "label", 2);
__decorateClass([
  n()
], QuietRadioItem.prototype, "description", 2);
__decorateClass([
  n()
], QuietRadioItem.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean })
], QuietRadioItem.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRadioItem.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietRadioItem.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietRadioItem.prototype, "size", 2);
QuietRadioItem = __decorateClass([
  t("quiet-radio-item")
], QuietRadioItem);

export {
  QuietRadioItem
};
