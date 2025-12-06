/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  toggle_icon_styles_default
} from "../../chunks/chunk.ZLZXMGS7.js";
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
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/toggle-icon/toggle-icon.ts
var nativeFileInput = document.createElement("input");
nativeFileInput.name = "quiet-faux-input";
nativeFileInput.type = "checkbox";
nativeFileInput.required = true;
var VALIDATION_MESSAGE = nativeFileInput.validationMessage;
var QuietToggleIcon = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.checked = false;
    this.disabled = false;
    this.size = "md";
    this.effect = "none";
    this.required = false;
  }
  get focusableAnchor() {
    return this.button;
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
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleClick() {
    if (this.disabled) return;
    this.checked = !this.checked;
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new InputEvent("input"));
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
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : VALIDATION_MESSAGE;
    const flags = {
      customError: hasCustomValidity,
      valueMissing: this.required && !this.checked
    };
    this.isInvalid = hasCustomValidity ? true : !this.checked;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  render() {
    return x`
      <button
        part="button"
        class=${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      checked: this.checked,
      disabled: this.disabled
    })}
        data-effect=${this.effect}
        name=${this.name}
        value=${this.value}
        type="button"
        aria-label=${this.label}
        aria-pressed=${this.checked ? "true" : "false"}
        .disabled=${this.disabled}
        .required=${this.required}
        @click=${this.handleClick}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <slot name="unchecked" class="unchecked-icon">
          <quiet-icon name="star" family="outline" library="system"></quiet-icon>
        </slot>
        <slot name="checked" class="checked-icon">
          <quiet-icon name="star" family="filled" library="system"></quiet-icon>
        </slot>
      </button>
    `;
  }
};
QuietToggleIcon.shadowRootOptions = { ...QuietFormControlElement.shadowRootOptions, delegatesFocus: true };
QuietToggleIcon.formAssociated = true;
QuietToggleIcon.styles = [host_styles_default, toggle_icon_styles_default];
__decorateClass([
  e2("button")
], QuietToggleIcon.prototype, "button", 2);
__decorateClass([
  r()
], QuietToggleIcon.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietToggleIcon.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietToggleIcon.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietToggleIcon.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietToggleIcon.prototype, "name", 2);
__decorateClass([
  n()
], QuietToggleIcon.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean })
], QuietToggleIcon.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietToggleIcon.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietToggleIcon.prototype, "size", 2);
__decorateClass([
  n({ reflect: true })
], QuietToggleIcon.prototype, "effect", 2);
__decorateClass([
  n()
], QuietToggleIcon.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietToggleIcon.prototype, "required", 2);
QuietToggleIcon = __decorateClass([
  t("quiet-toggle-icon")
], QuietToggleIcon);
export {
  QuietToggleIcon
};
