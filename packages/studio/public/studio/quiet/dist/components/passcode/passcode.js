/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  passcode_styles_default
} from "../../chunks/chunk.E77OMUIY.js";
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
  QuietInputCompleteEvent,
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

// src/components/passcode/passcode.ts
var QuietPasscode = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    /** A reference to the `<form>` associated with the form control, or `null` if no form is associated. */
    this.localize = new Localize(this);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.format = "####";
    this.disabled = false;
    this.appearance = "normal";
    this.size = "md";
    this.masked = false;
    this.type = "numeric";
    this.caseSensitive = false;
    this.required = false;
    this.autocomplete = "one-time-code";
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
      this.value = this.value.split("").filter((char) => {
        switch (this.type) {
          case "alpha":
            return /[A-Z]/i.test(char);
          case "alphanumeric":
            return /[A-Z0-9]/i.test(char);
          case "any":
            return true;
          default:
            return /[0-9]/.test(char);
        }
      }).join("");
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
  /** Returns the total number of characters, excluding delimiters, in the current format. */
  getTotalCharacters() {
    return this.format.split("").filter((char) => char === "#").length;
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
    this.moveCursorToEnd();
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  async handleInput() {
    this.value = this.textBox.value;
    this.moveCursorToEnd();
    await this.updateComplete;
    this.dispatchEvent(new QuietInputEvent());
    if (this.value.length === this.getTotalCharacters()) {
      this.dispatchEvent(new QuietInputCompleteEvent());
    }
  }
  async handleKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    if (event.key === "Enter" && this.internals.form) {
      const submitter = [...this.internals.form.elements].find((el) => {
        return ["button", "input"].includes(el.localName) && el.type === "submit";
      });
      this.internals.form.requestSubmit(submitter);
    }
    if (event.key === "Escape") {
      if (this.value === "") return;
      event.stopPropagation();
      this.value = "";
      if (oldValue !== this.value) {
        await this.updateComplete;
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new InputEvent("input"));
        this.dispatchEvent(new QuietChangeEvent());
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      }
    }
    if (event.key !== "Tab") {
      requestAnimationFrame(() => this.moveCursorToEnd());
    }
    if (!isRtl && event.key === "ArrowLeft" || isRtl && event.key === "ArrowRight") {
      this.value = this.value.slice(0, this.value.length - 1);
      if (oldValue !== this.value) {
        await this.updateComplete;
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new InputEvent("input"));
        this.dispatchEvent(new QuietChangeEvent());
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      }
    }
  }
  handlePointerDown(event) {
    this.focus();
    this.moveCursorToEnd();
    event.preventDefault();
  }
  handleSelect() {
    this.moveCursorToEnd();
  }
  moveCursorToEnd() {
    this.textBox.setSelectionRange(this.value.length, this.value.length);
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
  /** Sets focus to the passcode. */
  focus() {
    this.textBox.focus();
  }
  /** Removes focus from the passcode. */
  blur() {
    this.textBox.blur();
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    const totalCharacters = this.getTotalCharacters();
    const isFull = this.value.length === totalCharacters;
    const boxes = this.format.split("").map((format) => format === "#" ? "character" : "delimiter");
    let charPosition = 0;
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
      // States
      "case-sensitive": this.caseSensitive,
      disabled: this.disabled,
      masked: this.masked
    })}
      >
        ${boxes.map((box, index) => {
      if (box === "character") charPosition++;
      const isCharacter = box === "character";
      const isCurrent = isCharacter && (charPosition === this.value.length + 1 || isFull && charPosition === totalCharacters);
      const isBlank = this.value.charAt(charPosition - 1) === "";
      const isLast = charPosition === totalCharacters;
      if (isCharacter) {
        return x`
              <div
                part="character-box"
                class=${e({
          blank: isBlank,
          character: true,
          current: isCurrent,
          last: isLast
        })}
                aria-hidden="true"
              >
                ${this.masked ? "" : this.value.charAt(charPosition - 1) || ""}
              </div>
            `;
      }
      return x`<div part="delimiter" class="delimiter">${this.format.charAt(index)}</div>`;
    })}

        <input
          id="text-box"
          type="text"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?required=${this.required}
          pattern=${o(this.pattern)}
          minlength=${o(totalCharacters)}
          maxlength=${o(totalCharacters)}
          .value=${l(this.value)}
          autocapitalize="off"
          autocomplete=${o(this.autocomplete)}
          autocorrect="off"
          spellcheck="false"
          enterkeyhint=${o(this.enterkeyhint)}
          inputmode=${this.type === "numeric" ? "numeric" : "text"}
          aria-describedby="description"
          aria-invalid=${this.isInvalid ? "true" : "false"}
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleKeyDown}
          @pointerdown=${this.handlePointerDown}
          @select=${this.handleSelect}
        />
      </div>
    `;
  }
};
QuietPasscode.formAssociated = true;
QuietPasscode.observeSlots = true;
QuietPasscode.styles = [host_styles_default, form_control_styles_default, passcode_styles_default];
__decorateClass([
  e2("input")
], QuietPasscode.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietPasscode.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietPasscode.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietPasscode.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "label", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietPasscode.prototype, "name", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "value", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "format", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietPasscode.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietPasscode.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietPasscode.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean })
], QuietPasscode.prototype, "masked", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "type", 2);
__decorateClass([
  n({ attribute: "case-sensitive", type: Boolean, reflect: true })
], QuietPasscode.prototype, "caseSensitive", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietPasscode.prototype, "required", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "pattern", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Boolean })
], QuietPasscode.prototype, "autofocus", 2);
__decorateClass([
  n()
], QuietPasscode.prototype, "enterkeyhint", 2);
QuietPasscode = __decorateClass([
  t("quiet-passcode")
], QuietPasscode);
export {
  QuietPasscode
};
