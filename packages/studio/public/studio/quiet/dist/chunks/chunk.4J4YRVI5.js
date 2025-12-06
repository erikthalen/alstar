/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  text_field_styles_default
} from "./chunk.7L3GKTUO.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  form_control_styles_default
} from "./chunk.QB6BERFO.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  Localize
} from "./chunk.N7C6RCMV.js";
import {
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent
} from "./chunk.E7L7Q2A4.js";
import {
  l
} from "./chunk.ZLHIBXCJ.js";
import {
  o
} from "./chunk.7LEBIIO5.js";
import {
  e
} from "./chunk.E6M524BP.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/text-field/text-field.ts
var QuietTextField = class extends QuietFormControlElement {
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
    this.withClear = false;
    this.appearance = "normal";
    this.size = "md";
    this.pill = false;
    this.type = "text";
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
    const observer = new MutationObserver(() => this.syncDatalist());
    observer.observe(this, { subtree: true, childList: true, attributes: true });
    this.syncDatalist();
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
  handleClearClick() {
    this.hadUserInteraction = true;
    this.value = "";
    this.textBox.focus();
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
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
  handleKeyDown(event) {
    if (event.key === "Enter" && this.internals.form) {
      const submitter = [...this.internals.form.elements].find((el) => {
        return ["button", "input"].includes(el.localName) && el.type === "submit";
      });
      this.internals.form.requestSubmit(submitter);
    }
  }
  handlePasswordToggleClick() {
    this.isPasswordVisible = !this.isPasswordVisible;
    this.textBox.focus();
  }
  handleTextBoxButtonPointerDown(event) {
    event.preventDefault();
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
  /** Looks for a slotted datalist, clones, and links it to the text field. */
  syncDatalist() {
    const datalist = this.defaultSlot.assignedElements({ flatten: true }).find((el) => el.localName === "datalist");
    this.textBox.removeAttribute("list");
    this.shadowRoot.querySelector("cloned-list")?.remove();
    if (datalist) {
      const clonedList = datalist.cloneNode(true);
      clonedList.id = "cloned-list";
      this.shadowRoot.append(clonedList);
      this.textBox.setAttribute("list", "cloned-list");
    }
  }
  /** Sets focus to the text field. */
  focus() {
    this.textBox.focus();
  }
  /** Removes focus from the text field. */
  blur() {
    this.textBox.blur();
  }
  /** Selects all text in the text field. */
  select() {
    this.textBox.select();
  }
  /** Sets the start and end positions of the current text selection in the text field. */
  setSelectionRange(start, end, direction = "none") {
    this.textBox.setSelectionRange(start, end, direction);
  }
  /** Replaces a range of text in the text field with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.textBox.setRangeText(
      replacement,
      start ?? this.textBox.selectionStart,
      end ?? this.textBox.selectionEnd,
      selectMode
    );
    this.value = this.textBox.value;
  }
  /** For types that support a picker, such as color and date selectors, this will cause the picker to show. */
  showPicker() {
    this.textBox.showPicker();
  }
  /**
   * When a supported `type` is used, this method will decrease the text field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   */
  stepDown() {
    this.textBox.stepDown();
  }
  /**
   * When a supported `type` is used, this method will increase the text field's value by `step`. This is a programmatic
   * change, so `input` and `change` events will not be emitted when this is called.
   */
  stepUp() {
    this.textBox.stepUp();
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

        <input
          id="text-box"
          part="text-box"
          type=${this.type === "password" && this.isPasswordVisible ? "text" : this.type}
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o(this.placeholder)}
          pattern=${o(this.pattern)}
          minlength=${o(this.minLength)}
          maxlength=${o(this.maxLength)}
          min=${o(this.min)}
          max=${o(this.max)}
          step=${o(this.step)}
          .value=${l(this.value)}
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
          @keydown=${this.handleKeyDown}
        />

        ${this.type === "password" && this.value?.length > 0 && !this.disabled && !this.readonly ? x`
              <button
                id="password-toggle-button"
                part="toggle-password-button"
                class="text-box-button"
                type="button"
                aria-label=${this.localize.term(this.isPasswordVisible ? "hidePassword" : "showPassword")}
                tabindex="-1"
                @pointerdown=${this.handleTextBoxButtonPointerDown}
                @click=${this.handlePasswordToggleClick}
              >
                <quiet-icon library="system" name=${this.isPasswordVisible ? "eye-off" : "eye"}></quiet-icon>
              </button>
            ` : ""}
        ${this.withClear && this.value?.length > 0 && !this.disabled && !this.readonly ? x`
              <button
                id="clear-button"
                part="clear-button"
                class="text-box-button"
                type="button"
                aria-label=${this.localize.term("clearEntry")}
                tabindex="-1"
                @pointerdown=${this.handleTextBoxButtonPointerDown}
                @click=${this.handleClearClick}
              >
                <quiet-icon library="system" name="circle-x"></quiet-icon>
              </button>
            ` : ""}

        <slot name="end"></slot>

        <slot hidden></slot>
      </div>
    `;
  }
};
QuietTextField.formAssociated = true;
QuietTextField.observeSlots = true;
QuietTextField.styles = [host_styles_default, form_control_styles_default, text_field_styles_default];
__decorateClass([
  e2("slot:not([name])")
], QuietTextField.prototype, "defaultSlot", 2);
__decorateClass([
  e2("input")
], QuietTextField.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietTextField.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietTextField.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietTextField.prototype, "wasSubmitted", 2);
__decorateClass([
  r()
], QuietTextField.prototype, "isPasswordVisible", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "label", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextField.prototype, "name", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "value", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextField.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextField.prototype, "readonly", 2);
__decorateClass([
  n({ attribute: "with-clear", type: Boolean, reflect: true })
], QuietTextField.prototype, "withClear", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextField.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietTextField.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextField.prototype, "pill", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "type", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextField.prototype, "required", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "pattern", 2);
__decorateClass([
  n({ attribute: "minlength", type: Number })
], QuietTextField.prototype, "minLength", 2);
__decorateClass([
  n({ attribute: "maxlength", type: Number })
], QuietTextField.prototype, "maxLength", 2);
__decorateClass([
  n({ type: Number })
], QuietTextField.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], QuietTextField.prototype, "max", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "step", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "autocapitalize", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "autocomplete", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "autocorrect", 2);
__decorateClass([
  n({ type: Boolean })
], QuietTextField.prototype, "autofocus", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "enterkeyhint", 2);
__decorateClass([
  n()
], QuietTextField.prototype, "inputmode", 2);
__decorateClass([
  n({
    type: Boolean,
    converter: {
      fromAttribute: (value) => !value || value === "false" ? false : true,
      toAttribute: (value) => value ? "true" : "false"
    }
  })
], QuietTextField.prototype, "spellcheck", 2);
QuietTextField = __decorateClass([
  t("quiet-text-field")
], QuietTextField);

export {
  QuietTextField
};
