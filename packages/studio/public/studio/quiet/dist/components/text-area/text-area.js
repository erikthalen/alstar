/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  text_area_styles_default
} from "../../chunks/chunk.FBWRWXEB.js";
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

// src/components/text-area/text-area.ts
var QuietTextArea = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.textAreaAutoSizer = document.createElement("textarea");
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.resize = "vertical";
    this.rows = 3;
    this.appearance = "normal";
    this.size = "md";
    this.required = false;
  }
  get focusableAnchor() {
    return this.textBox;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
    this.resizeObserver = new ResizeObserver(() => this.updateHeight());
    this.updateComplete.then(() => {
      this.updateHeight();
      this.resizeObserver.observe(this.textBox);
    });
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
    if (this.textBox) {
      this.resizeObserver.unobserve(this.textBox);
    }
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
    if (changedProperties.has("value") || changedProperties.has("rows")) {
      this.updateHeight();
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
  async handleInput() {
    this.value = this.textBox.value;
    await this.updateComplete;
    this.dispatchEvent(new QuietInputEvent());
  }
  /** Updates the height of the text area based on its content and settings. */
  updateHeight() {
    if (this.resize === "auto") {
      this.textAreaAutoSizer.id = this.textBox.id;
      this.textAreaAutoSizer.inert = true;
      this.textAreaAutoSizer.value = this.value;
      this.textAreaAutoSizer.rows = this.rows;
      this.textAreaAutoSizer.style.position = "absolute";
      this.textAreaAutoSizer.style.top = "0";
      this.textAreaAutoSizer.style.left = "0";
      this.textAreaAutoSizer.style.width = "100%";
      this.textAreaAutoSizer.style.height = "auto";
      this.textAreaAutoSizer.style.minHeight = "auto";
      this.textAreaAutoSizer.style.pointerEvents = "none";
      this.textAreaAutoSizer.style.opacity = "0";
      this.textBox.insertAdjacentElement("afterend", this.textAreaAutoSizer);
      const emptyAutoSizer = this.textAreaAutoSizer.cloneNode();
      emptyAutoSizer.value = "";
      emptyAutoSizer.rows = this.rows;
      this.textBox.insertAdjacentElement("afterend", emptyAutoSizer);
      const minHeight = emptyAutoSizer.scrollHeight;
      emptyAutoSizer.remove();
      const contentHeight = this.textAreaAutoSizer.scrollHeight;
      this.textBox.style.height = `${Math.max(contentHeight, minHeight)}px`;
      this.textAreaAutoSizer.remove();
      this.textAreaAutoSizer.id = "";
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
  /** Sets focus to the text area. */
  focus() {
    this.textBox.focus();
  }
  /** Removes focus from the text area. */
  blur() {
    this.textBox.blur();
  }
  /** Selects all text in the text area. */
  select() {
    this.textBox.select();
  }
  /** Sets the start and end positions of the current text selection in the text area. */
  setSelectionRange(start, end, direction = "none") {
    this.textBox.setSelectionRange(start, end, direction);
  }
  /** Replaces a range of text in the text area with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.textBox.setRangeText(
      replacement,
      start ?? this.textBox.selectionStart,
      end ?? this.textBox.selectionEnd,
      selectMode
    );
    this.value = this.textBox.value;
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
      "resize-vertical": this.resize === "vertical",
      "resize-auto": this.resize === "auto",
      "resize-none": this.resize === "none",
      // States
      disabled: this.disabled
    })}
      >
        <textarea
          id="text-box"
          part="text-box"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o(this.placeholder)}
          minlength=${o(this.minLength)}
          maxlength=${o(this.maxLength)}
          .value=${l(this.value)}
          rows=${this.rows}
          autocapitalize=${o(this.autocapitalize)}
          autocomplete=${o(this.autocomplete)}
          autocorrect=${o(this.autocorrect)}
          spellcheck=${o(this.spellcheck)}
          enterkeyhint=${o(this.enterkeyhint)}
          inputmode=${o(this.inputmode)}
          aria-describedby="description"
          aria-invalid=${this.isInvalid ? "true" : "false"}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
        ></textarea>
      </div>
    `;
  }
};
QuietTextArea.formAssociated = true;
QuietTextArea.observeSlots = true;
QuietTextArea.styles = [host_styles_default, form_control_styles_default, text_area_styles_default];
__decorateClass([
  e2("textarea")
], QuietTextArea.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietTextArea.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietTextArea.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietTextArea.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "label", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextArea.prototype, "name", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "value", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextArea.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextArea.prototype, "readonly", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "resize", 2);
__decorateClass([
  n({ type: Number })
], QuietTextArea.prototype, "rows", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextArea.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextArea.prototype, "size", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextArea.prototype, "required", 2);
__decorateClass([
  n({ attribute: "minlength", type: Number })
], QuietTextArea.prototype, "minLength", 2);
__decorateClass([
  n({ attribute: "maxlength", type: Number })
], QuietTextArea.prototype, "maxLength", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "autocapitalize", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "autocomplete", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "autocorrect", 2);
__decorateClass([
  n({ type: Boolean })
], QuietTextArea.prototype, "autofocus", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "enterkeyhint", 2);
__decorateClass([
  n()
], QuietTextArea.prototype, "inputmode", 2);
__decorateClass([
  n({
    type: Boolean,
    converter: {
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], QuietTextArea.prototype, "spellcheck", 2);
QuietTextArea = __decorateClass([
  t("quiet-text-area")
], QuietTextArea);
export {
  QuietTextArea
};
