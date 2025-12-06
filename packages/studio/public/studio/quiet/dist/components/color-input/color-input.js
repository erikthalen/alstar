/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  color_input_styles_default
} from "../../chunks/chunk.KSGMCWHJ.js";
import "../../chunks/chunk.NGYXO7MP.js";
import "../../chunks/chunk.4J4YRVI5.js";
import "../../chunks/chunk.7L3GKTUO.js";
import "../../chunks/chunk.PKLTOSWB.js";
import "../../chunks/chunk.RRVAAFYT.js";
import "../../chunks/chunk.Q5CORD2V.js";
import "../../chunks/chunk.WBA4K6I7.js";
import "../../chunks/chunk.54VRTGJ5.js";
import "../../chunks/chunk.DGXGIXAZ.js";
import "../../chunks/chunk.YQKW43AF.js";
import "../../chunks/chunk.DPBDJAAY.js";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift
} from "../../chunks/chunk.FWK2CT6L.js";
import "../../chunks/chunk.VQNLE2QA.js";
import "../../chunks/chunk.MGJZZ2SA.js";
import "../../chunks/chunk.3L6SRQZP.js";
import "../../chunks/chunk.ZCPQX3DA.js";
import "../../chunks/chunk.LSX63TFG.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import "../../chunks/chunk.R4JSBYAB.js";
import "../../chunks/chunk.HV6WFC7E.js";
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
  animateWithClass
} from "../../chunks/chunk.VBE24RWL.js";
import "../../chunks/chunk.7FX3JPOE.js";
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
import "../../chunks/chunk.RMLEDZSL.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/color-input/color-input.ts
var openColorPickers = /* @__PURE__ */ new Set();
var QuietColorInput = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.isOpen = false;
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.disabled = false;
    this.readonly = false;
    this.withClear = false;
    this.appearance = "normal";
    this.size = "md";
    this.pill = false;
    this.format = "hex";
    this.swatches = "";
    this.withAlpha = false;
    this.withEyeDropper = false;
    this.placement = "bottom-start";
    this.distance = 0;
    this.offset = 0;
    this.required = false;
    /** If focus is set outside of the component, close the menu. */
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (!path.includes(this) && !path.includes(this.colorPicker)) {
        this.isOpen = false;
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        this.focus();
        this.hidePicker();
      }
    };
    /** Handles pointer down events when the color picker is open. */
    this.handleDocumentPointerDown = (event) => {
      const path = event.composedPath();
      if (!path.includes(this.visualBox) && !path.includes(this.colorPicker)) {
        this.hidePicker();
      }
    };
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
  async updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("isOpen")) {
      if (this.disabled) this.isOpen = false;
      this.customStates.set("open", this.isOpen);
      if (this.isOpen) {
        this.showPicker();
      } else {
        this.hidePicker();
      }
    }
    if (changedProperties.has("value")) {
      this.customStates.set("blank", this.value === "");
      this.internals.setFormValue(this.value);
      this.preview.style.setProperty("--current-color", this.value);
    }
    if (changedProperties.has("disabled")) {
      if (this.disabled) this.isOpen = false;
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("format")) {
      if (this.value !== "") {
        await this.colorPicker.updateComplete;
        this.value = this.colorPicker.value;
      }
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
    if (this.value !== "") {
      this.value = this.colorPicker.value;
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
  handleClearClick() {
    this.hadUserInteraction = true;
    this.value = "";
    this.textBox.focus();
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
  }
  handleColorPickerChange() {
    this.hadUserInteraction = true;
  }
  handleColorPickerInput() {
    this.value = this.colorPicker.value;
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
  }
  async handleInput() {
    this.value = this.textBox.value;
    this.colorPicker.value = this.value;
    await this.updateComplete;
    this.dispatchEvent(new QuietInputEvent());
  }
  handleTextBoxButtonPointerDown(event) {
    event.preventDefault();
  }
  handleTextBoxKeyDown(event) {
    if (event.key === "ArrowDown" || event.key === "ArrowUp") {
      event.preventDefault();
      event.stopPropagation();
      this.isOpen = true;
    }
  }
  handleVisualBoxPointerDown(event) {
    const target = event.target;
    const isBox = target?.id === "visual-box";
    const isSlot = target.hasAttribute("slot");
    if (this.disabled) {
      return;
    }
    if (isBox || isSlot) {
      event.preventDefault();
    }
    if (!this.isOpen && !event.composedPath().includes(this.colorPicker)) {
      if (event.pointerType === "touch") {
        event.preventDefault();
      } else {
        this.textBox.focus();
      }
      this.isOpen = true;
    }
  }
  /** Repositions the dropdown menu */
  reposition() {
    const anchor = this.visualBox;
    computePosition(anchor, this.colorPicker, {
      placement: this.placement,
      middleware: [offset({ mainAxis: this.distance, crossAxis: this.offset }), flip(), shift()]
    }).then(({ x: x2, y, placement }) => {
      this.setAttribute("data-placement", placement);
      Object.assign(this.colorPicker.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
    });
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
  /** Removes focus from the color input. */
  blur() {
    this.textBox.blur();
  }
  /** Sets focus to the color input. */
  focus() {
    this.textBox.focus();
    this.isOpen = true;
  }
  /**
   * Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
   * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
   * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
   */
  getValueAs(format = "rgb") {
    return this.colorPicker.getValueAs(format);
  }
  /** Selects all text in the color input. */
  select() {
    this.textBox.select();
  }
  /** Sets the start and end positions of the current text selection in the color input. */
  setSelectionRange(start, end, direction = "none") {
    this.textBox.setSelectionRange(start, end, direction);
  }
  /** Replaces a range of text in the color input with a new string. */
  setRangeText(replacement, start, end, selectMode) {
    this.textBox.setRangeText(
      replacement,
      start ?? this.textBox.selectionStart,
      end ?? this.textBox.selectionEnd,
      selectMode
    );
    this.value = this.textBox.value;
  }
  /** Shows the color picker. */
  async showPicker() {
    if (this.disabled) return;
    openColorPickers.forEach((picker) => picker.isOpen = false);
    this.colorPicker.showPopover();
    this.isOpen = true;
    this.reposition();
    openColorPickers.add(this);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("pointerdown", this.handleDocumentPointerDown);
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    this.colorPicker.hidden = false;
    this.cleanup = autoUpdate(this.visualBox, this.colorPicker, () => this.reposition());
    await animateWithClass(this.colorPicker, "show");
  }
  /** Hides the color picker. */
  async hidePicker() {
    if (this.disabled) return;
    this.isOpen = false;
    openColorPickers.delete(this);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("pointerdown", this.handleDocumentPointerDown);
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    if (!this.colorPicker.hidden) {
      await animateWithClass(this.colorPicker, "hide");
      this.colorPicker.hidden = true;
      this.colorPicker.hidePopover();
    }
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = void 0;
      this.removeAttribute("data-placement");
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
        <div id="preview"></div>
        <input
          id="text-box"
          part="text-box"
          type="text"
          ?autofocus=${this.autofocus}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?required=${this.required}
          placeholder=${o(this.placeholder)}
          .value=${l(this.value)}
          autocapitalize="off"
          autocomplete=${o(this.autocomplete)}
          autocorrect="off"
          enterkeyhint=${o(this.enterkeyhint)}
          inputmode=${o(this.inputmode)}
          aria-describedby="description"
          aria-invalid=${this.isInvalid ? "true" : "false"}
          aria-haspopup="dialog"
          aria-expanded=${this.isOpen ? "true" : "false"}
          aria-controls="color-picker"
          role="combobox"
          @change=${this.handleChange}
          @input=${this.handleInput}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          @keydown=${this.handleTextBoxKeyDown}
        />

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
      </div>

      <quiet-color-picker
        id="color-picker"
        popover="manual"
        value=${this.value}
        size=${this.size}
        format=${this.format}
        swatches=${o(this.swatches)}
        ?with-alpha=${this.withAlpha}
        ?with-eye-dropper=${this.withEyeDropper}
        hidden
        role="dialog"
        @quiet-change=${this.handleColorPickerChange}
        @quiet-input=${this.handleColorPickerInput}
      ></quiet-color-picker>
    `;
  }
};
QuietColorInput.formAssociated = true;
QuietColorInput.observeSlots = true;
QuietColorInput.styles = [host_styles_default, form_control_styles_default, color_input_styles_default];
__decorateClass([
  e2("#color-picker")
], QuietColorInput.prototype, "colorPicker", 2);
__decorateClass([
  e2("input")
], QuietColorInput.prototype, "textBox", 2);
__decorateClass([
  e2("#preview")
], QuietColorInput.prototype, "preview", 2);
__decorateClass([
  e2("#visual-box")
], QuietColorInput.prototype, "visualBox", 2);
__decorateClass([
  r()
], QuietColorInput.prototype, "isOpen", 2);
__decorateClass([
  r()
], QuietColorInput.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietColorInput.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietColorInput.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "label", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietColorInput.prototype, "name", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "value", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietColorInput.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietColorInput.prototype, "readonly", 2);
__decorateClass([
  n({ attribute: "with-clear", type: Boolean, reflect: true })
], QuietColorInput.prototype, "withClear", 2);
__decorateClass([
  n({ reflect: true })
], QuietColorInput.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietColorInput.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietColorInput.prototype, "pill", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "format", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "swatches", 2);
__decorateClass([
  n({ attribute: "with-alpha", type: Boolean, reflect: true })
], QuietColorInput.prototype, "withAlpha", 2);
__decorateClass([
  n({ attribute: "with-eye-dropper", type: Boolean, reflect: true })
], QuietColorInput.prototype, "withEyeDropper", 2);
__decorateClass([
  n({ reflect: true })
], QuietColorInput.prototype, "placement", 2);
__decorateClass([
  n({ type: Number })
], QuietColorInput.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], QuietColorInput.prototype, "offset", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietColorInput.prototype, "required", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "autocomplete", 2);
__decorateClass([
  n({ type: Boolean })
], QuietColorInput.prototype, "autofocus", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "enterkeyhint", 2);
__decorateClass([
  n()
], QuietColorInput.prototype, "inputmode", 2);
QuietColorInput = __decorateClass([
  t("quiet-color-input")
], QuietColorInput);
export {
  QuietColorInput
};
