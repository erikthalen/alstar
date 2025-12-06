/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  number_field_styles_default
} from "../../chunks/chunk.Z3VWKT33.js";
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
  form_control_styles_default
} from "../../chunks/chunk.QB6BERFO.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
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

// src/components/number-field/number-field.ts
var QuietNumberField = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.isPasswordVisible = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.appearance = "normal";
    this.size = "md";
    this.pill = false;
    this.required = false;
    this.withoutSteppers = false;
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
  handleDecrease() {
    this.stepDown();
    this.handleInput();
    this.dispatchEvent(new InputEvent("change", { bubbles: true, composed: true, cancelable: false }));
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
    this.dispatchEvent(new QuietChangeEvent());
  }
  handleIncrease() {
    this.stepUp();
    this.handleInput();
    this.dispatchEvent(new InputEvent("change", { bubbles: true, composed: true, cancelable: false }));
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
    this.dispatchEvent(new QuietChangeEvent());
  }
  maintainFocusOnPointerDown(event) {
    event.preventDefault();
    this.focus();
  }
  async handleInput() {
    this.value = this.textBox.value;
    await this.updateComplete;
    this.dispatchEvent(new QuietInputEvent());
  }
  handleKeyDown(event) {
    if (event.key === "Enter" && this.internals.form) {
      const submitter = [...this.internals.form.elements].find((el) => {
        return ["button", "input"].includes(el.localName) && el.type === "submit";
      });
      this.internals.form.requestSubmit(submitter);
    }
  }
  handleVisualBoxPointerDown(event) {
    const target = event.target;
    const isBox = target?.id === "visual-box";
    const isSlot = target.hasAttribute("slot");
    if (isBox || isSlot) {
      event.preventDefault();
      this.textBox.focus();
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
  /** Sets focus to the number field. */
  focus() {
    this.textBox.focus();
  }
  /** Removes focus from the number field. */
  blur() {
    this.textBox.blur();
  }
  /** Selects all text in the number field. */
  select() {
    this.textBox.select();
  }
  /** Sets the start and end positions of the current text selection in the number field. */
  setSelectionRange(start, end, direction = "none") {
    this.textBox.setSelectionRange(start, end, direction);
  }
  /** Replaces a range of text in the number field with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.textBox.setRangeText(
      replacement,
      start ?? this.textBox.selectionStart,
      end ?? this.textBox.selectionEnd,
      selectMode
    );
    this.value = this.textBox.value;
  }
  /**
   * When a supported `type` is used, this method will decrease the number field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   */
  stepDown() {
    this.textBox.stepDown();
    this.value = this.textBox.value;
    this.focus();
  }
  /**
   * When a supported `type` is used, this method will increase the number field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   */
  stepUp() {
    this.textBox.stepUp();
    this.value = this.textBox.value;
    this.focus();
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    const valueAsNumber = parseFloat(this.value) || 0;
    const canIncrease = this.max === void 0 || valueAsNumber < this.max;
    const canDecrease = this.min === void 0 || valueAsNumber > this.min;
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
        ${!this.withoutSteppers ? x`
              <button
                id="stepper-down"
                part="stepper stepper-down"
                ?disabled=${!canDecrease || this.disabled}
                tabindex="-1"
                aria-label=${this.localize.term("decrease")}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${this.handleDecrease}
              >
                <quiet-icon library="system" name="minus"></quiet-icon>
              </button>
            ` : ""}

        <slot name="start"></slot>

        <input
          id="text-box"
          part="text-box"
          type="number"
          inputmode="numeric"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o(this.placeholder)}
          pattern=${o(this.pattern)}
          min=${o(this.min)}
          max=${o(this.max)}
          step=${o(this.step)}
          .value=${l(this.value)}
          autocomplete=${o(this.autocomplete)}
          spellcheck="false"
          enterkeyhint=${o(this.enterkeyhint)}
          aria-describedby="description"
          aria-invalid=${this.isInvalid ? "true" : "false"}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeyDown}
        />

        <slot name="end"></slot>

        ${!this.withoutSteppers ? x`
              <button
                id="stepper-up"
                part="stepper stepper-up"
                ?disabled=${!canIncrease || this.disabled}
                tabindex="-1"
                aria-label=${this.localize.term("increase")}
                @pointerdown=${this.maintainFocusOnPointerDown}
                @click=${this.handleIncrease}
              >
                <quiet-icon library="system" name="plus"></quiet-icon>
              </button>
            ` : ""}
      </div>
    `;
  }
};
QuietNumberField.formAssociated = true;
QuietNumberField.observeSlots = true;
QuietNumberField.styles = [host_styles_default, form_control_styles_default, number_field_styles_default];
__decorateClass([
  e2("input")
], QuietNumberField.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietNumberField.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietNumberField.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietNumberField.prototype, "wasSubmitted", 2);
__decorateClass([
  r()
], QuietNumberField.prototype, "isPasswordVisible", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "label", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietNumberField.prototype, "name", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "value", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietNumberField.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietNumberField.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], QuietNumberField.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietNumberField.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietNumberField.prototype, "pill", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietNumberField.prototype, "required", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "pattern", 2);
__decorateClass([
  n({ type: Number })
], QuietNumberField.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], QuietNumberField.prototype, "max", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "step", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Boolean })
], QuietNumberField.prototype, "autofocus", 2);
__decorateClass([
  n()
], QuietNumberField.prototype, "enterkeyhint", 2);
__decorateClass([
  n({ attribute: "without-steppers", type: Boolean })
], QuietNumberField.prototype, "withoutSteppers", 2);
QuietNumberField = __decorateClass([
  t("quiet-number-field")
], QuietNumberField);
export {
  QuietNumberField
};
