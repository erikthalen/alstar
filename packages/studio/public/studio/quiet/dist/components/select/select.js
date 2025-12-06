/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  select_styles_default
} from "../../chunks/chunk.2MWO2TAO.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  getSlotHtml
} from "../../chunks/chunk.I7GB4RJG.js";
import {
  form_control_styles_default
} from "../../chunks/chunk.QB6BERFO.js";
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

// src/components/select/select.ts
var QuietSelect = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.appearance = "normal";
    this.size = "md";
    this.pill = false;
    this.required = false;
  }
  get focusableAnchor() {
    return this.textBox;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
  }
  firstUpdated() {
    const observer = new MutationObserver(() => this.syncOptions());
    observer.observe(this, { subtree: true, childList: true, attributes: true });
    this.syncOptions();
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("value")) {
      this.customStates.set("blank", this.value === "");
      this.internals.setFormValue(this.value);
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
    this.value = this.getAttribute("value") ?? "";
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleVisualBoxPointerDown(event) {
    const target = event.target;
    const isBox = target?.id === "visual-box";
    const isSlot = target.hasAttribute("slot");
    if (isBox || isSlot) {
      event.preventDefault();
      this.textBox.focus();
      this.showPicker();
    }
  }
  handleChange() {
    this.hadUserInteraction = true;
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  async handleInput() {
    this.value = this.textBox.value;
    await this.updateComplete;
    this.dispatchEvent(new QuietInputEvent());
  }
  syncOptions() {
    this.textBox.innerHTML = getSlotHtml(this.defaultSlot);
    if (this.value) {
      this.textBox.value = this.value;
    } else {
      const firstOption = this.textBox.querySelector("option");
      if (firstOption) {
        this.value = firstOption.value;
      }
    }
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : this.textBox.validationMessage;
    const flags = {
      badInput: this.textBox.validity.badInput,
      customError: hasCustomValidity,
      patternMismatch: this.textBox.validity.patternMismatch,
      rangeOverflow: this.textBox.validity.rangeOverflow,
      rangeUnderflow: this.textBox.validity.rangeUnderflow,
      stepMismatch: this.textBox.validity.stepMismatch,
      tooLong: this.textBox.validity.tooLong,
      tooShort: this.textBox.validity.tooShort,
      typeMismatch: this.textBox.validity.typeMismatch,
      valueMissing: this.textBox.validity.valueMissing
    };
    this.isInvalid = hasCustomValidity ? true : !this.textBox.validity.valid;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the select. */
  focus() {
    this.textBox.focus();
  }
  /** Removes focus from the select. */
  blur() {
    this.textBox.blur();
  }
  /** Shows the picker in supportive browsers. */
  showPicker() {
    if ("showPicker" in this.textBox) {
      this.textBox.showPicker();
    }
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

      <div
        id="visual-box"
        part="visual-box"
        class=${e({
      // Appearances
      normal: this.appearance === "normal",
      filled: this.appearance === "filled",
      unstyled: this.appearance === "unstyled",
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // Modifiers
      pill: this.pill,
      // States
      disabled: this.disabled
    })}
        @pointerdown=${this.handleVisualBoxPointerDown}
      >
        <slot name="start"></slot>

        <select
          id="text-box"
          part="text-box"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          .value=${l(this.value)}
          autocomplete=${o(this.autocomplete)}
          enterkeyhint=${o(this.enterkeyhint)}
          aria-describedby="description"
          aria-invalid=${this.isInvalid ? "true" : "false"}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        ></select>

        <slot hidden></slot>

        <slot name="end"></slot>

        <quiet-icon
          id="chevron"
          part="chevron"
          exportparts="svg:chevron__svg"
          library="system"
          name="selector"
        ></quiet-icon>
      </div>
    `;
  }
};
QuietSelect.formAssociated = true;
QuietSelect.observeSlots = true;
QuietSelect.styles = [host_styles_default, form_control_styles_default, select_styles_default];
__decorateClass([
  e2("slot:not([name])")
], QuietSelect.prototype, "defaultSlot", 2);
__decorateClass([
  e2("#text-box")
], QuietSelect.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietSelect.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietSelect.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietSelect.prototype, "wasSubmitted", 2);
__decorateClass([
  r()
], QuietSelect.prototype, "options", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "label", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietSelect.prototype, "name", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSelect.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSelect.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], QuietSelect.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietSelect.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSelect.prototype, "pill", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSelect.prototype, "required", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "autocomplete", 2);
__decorateClass([
  n()
], QuietSelect.prototype, "enterkeyhint", 2);
QuietSelect = __decorateClass([
  t("quiet-select")
], QuietSelect);
QuietSelect.disableWarning?.("change-in-update");
export {
  QuietSelect
};
