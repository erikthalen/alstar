/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  toggle_tag_styles_default
} from "../../chunks/chunk.4HSWAHCL.js";
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
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/toggle-tag/toggle-tag.ts
var QuietToggleTag = class extends QuietFormControlElement {
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
    return this.checkbox;
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
    if (changedProperties.has("checked")) {
      this.customStates.set("checked", this.checked);
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
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : this.checkbox.validationMessage;
    const flags = {
      customError: hasCustomValidity,
      valueMissing: this.checkbox.validity.valueMissing
    };
    this.isInvalid = hasCustomValidity ? true : !this.checkbox.validity.valid;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the toggle tag. */
  focus() {
    this.checkbox.focus();
  }
  /** Removes focus from the toggle tag. */
  blur() {
    this.checkbox.blur();
  }
  render() {
    return x`
      <label
        id="label"
        part="label"
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
          id="checkbox"
          type="checkbox"
          value=${o(this.value)}
          .checked=${l(this.checked)}
          .disabled=${this.disabled}
          .required=${this.required}
          @change=${this.handleChange}
          @click=${this.handleClick}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        />
        <slot>${this.label}</slot>
      </label>
    `;
  }
};
QuietToggleTag.formAssociated = true;
QuietToggleTag.styles = [host_styles_default, toggle_tag_styles_default];
__decorateClass([
  e2('input[type="checkbox"]')
], QuietToggleTag.prototype, "checkbox", 2);
__decorateClass([
  r()
], QuietToggleTag.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietToggleTag.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietToggleTag.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietToggleTag.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietToggleTag.prototype, "name", 2);
__decorateClass([
  n()
], QuietToggleTag.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean })
], QuietToggleTag.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietToggleTag.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietToggleTag.prototype, "size", 2);
__decorateClass([
  n()
], QuietToggleTag.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietToggleTag.prototype, "required", 2);
QuietToggleTag = __decorateClass([
  t("quiet-toggle-tag")
], QuietToggleTag);
export {
  QuietToggleTag
};
