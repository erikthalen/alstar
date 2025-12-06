/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  switch_styles_default
} from "../../chunks/chunk.2TDMTOBU.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent
} from "../../chunks/chunk.E7L7Q2A4.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  l
} from "../../chunks/chunk.ZLHIBXCJ.js";
import "../../chunks/chunk.R3FOV5FC.js";
import {
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/switch/switch.ts
var QuietSwitch = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.size = "md";
    this.required = false;
  }
  get focusableAnchor() {
    return this.switch;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("checked") || changedProperties.has("value")) {
      this.internals.setFormValue(this.checked ? this.value : null);
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (this.hadUserInteraction || this.wasSubmitted) {
      this.customStates.set("user-invalid", this.isInvalid);
      this.customStates.set("user-valid", !this.isInvalid);
    } else {
      this.customStates.set("user-invalid", false);
      this.customStates.set("user-valid", false);
    }
  }
  /** @internal Called when a containing fieldset is disabled. */
  formDisabledCallback(isDisabled) {
    this.disabled = isDisabled;
  }
  /** @internal Called when the form is reset. */
  formResetCallback() {
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.checked = this.hasAttribute("checked");
  }
  handleClick() {
    this.checked = !this.checked;
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleChange() {
    this.hadUserInteraction = true;
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  handleInput() {
    this.dispatchEvent(new QuietInputEvent());
  }
  handleKeyUp(event) {
    if (event.key === "Enter" && !this.disabled) {
      this.handleClick();
    }
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : this.switch.validationMessage;
    const flags = {
      customError: hasCustomValidity,
      valueMissing: this.switch.validity.valueMissing
    };
    this.isInvalid = hasCustomValidity ? true : !this.switch.validity.valid;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the switch. */
  focus() {
    this.switch.focus();
  }
  /** Removes focus from the switch. */
  blur() {
    this.switch.blur();
  }
  render() {
    const hasDescription = this.description || this.slotsWithContent.has("description");
    return x`
      <label part="label" id="label">
        <div
          id="visual-box"
          part="visual-box"
          class=${e({
      /* Sizes */
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      /* States */
      checked: this.checked,
      disabled: this.disabled,
      required: this.required
    })}
        >
          <input
            id="switch"
            part="switch"
            type="checkbox"
            value=${o(this.value)}
            role="switch"
            aria-checked=${this.checked ? "true" : "false"}
            aria-describedby="description"
            .checked=${l(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            @change=${this.handleChange}
            @click=${this.handleClick}
            @input=${this.handleInput}
            @keyup=${this.handleKeyUp}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <span id="on-label" part="on-label"><slot name="on-label"></slot></span>
          <span id="off-label" part="off-label"><slot name="off-label"></slot></span>
          <span id="thumb" part="thumb"></span>
        </div>
        <slot>${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>
    `;
  }
};
QuietSwitch.formAssociated = true;
QuietSwitch.observeSlots = true;
QuietSwitch.styles = [host_styles_default, switch_styles_default];
__decorateClass([
  e2('input[type="checkbox"]')
], QuietSwitch.prototype, "switch", 2);
__decorateClass([
  r()
], QuietSwitch.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietSwitch.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietSwitch.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietSwitch.prototype, "label", 2);
__decorateClass([
  n()
], QuietSwitch.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietSwitch.prototype, "name", 2);
__decorateClass([
  n()
], QuietSwitch.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean })
], QuietSwitch.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSwitch.prototype, "disabled", 2);
__decorateClass([
  n()
], QuietSwitch.prototype, "size", 2);
__decorateClass([
  n()
], QuietSwitch.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSwitch.prototype, "required", 2);
QuietSwitch = __decorateClass([
  t("quiet-switch")
], QuietSwitch);
export {
  QuietSwitch
};
