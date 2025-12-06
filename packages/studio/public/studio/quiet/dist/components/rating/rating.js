/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  rating_styles_default
} from "../../chunks/chunk.6TBZU6KX.js";
import {
  clamp
} from "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  DraggableElement
} from "../../chunks/chunk.R4JSBYAB.js";
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
import {
  o
} from "../../chunks/chunk.YELHYMJQ.js";
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

// src/components/rating/rating.ts
var nativeFileInput = document.createElement("input");
nativeFileInput.name = "quiet-faux-input";
nativeFileInput.type = "text";
nativeFileInput.required = true;
var VALIDATION_MESSAGE = nativeFileInput.validationMessage;
var QuietRating = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.didDragOverOthers = false;
    this.localize = new Localize(this);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = 0;
    this.disabled = false;
    this.readonly = false;
    this.size = "md";
    this.required = false;
    this.max = 5;
    this.step = 1;
    this.symbolFormatter = (_, isSelected) => {
      return isSelected ? `<quiet-icon library="system" name="star" family="filled"></quiet-icon>` : `<quiet-icon library="system" name="star" family="outline"></quiet-icon>`;
    };
  }
  get focusableAnchor() {
    return this.rating;
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
    this.draggableRating = new DraggableElement(this.rating, {
      start: (x2) => {
        this.didDragOverOthers = false;
        this.valueWhenDraggingStarted = this.value;
        this.ratingBoundingClientRect = this.rating.getBoundingClientRect();
        this.setValueFromCoordinates(x2);
      },
      move: (x2) => {
        this.setValueFromCoordinates(x2);
        if (this.value !== this.valueWhenDraggingStarted) {
          this.didDragOverOthers = true;
        }
      },
      stop: () => {
        if (this.value !== this.valueWhenDraggingStarted) {
          this.dispatchEvent(new QuietChangeEvent());
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
          this.hadUserInteraction = true;
        }
        if (this.value === this.valueWhenDraggingStarted && !this.didDragOverOthers) {
          this.value = 0;
        }
        this.didDragOverOthers = false;
        this.valueWhenDraggingStarted = void 0;
      }
    });
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("value")) {
      this.value = clamp(this.value, 0, this.max);
      this.internals.setFormValue(String(this.value));
    }
    if (changedProperties.has("max")) {
      this.value = clamp(this.value, 0, this.max);
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("disabled") || changedProperties.has("readonly")) {
      this.draggableRating.toggle(!(this.disabled || this.readonly));
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
    this.value = parseFloat(this.getAttribute("value") ?? "0");
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
  }
  /** Clamps a number to min/max while ensuring it's a valid step interval. */
  clampAndCeilToStep(value) {
    const stepPrecision = (String(this.step).split(".")[1] || "").replace(/0+$/g, "").length;
    value = Math.ceil(value / this.step) * this.step;
    value = clamp(value, 0, this.max);
    return parseFloat(value.toFixed(stepPrecision));
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  handleKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    let newValue = this.value;
    if (this.disabled || this.readonly) return;
    if (event.key === "ArrowUp" || event.key === (isRtl ? "ArrowLeft" : "ArrowRight")) {
      event.preventDefault();
      newValue = this.clampAndCeilToStep(newValue + this.step);
    }
    if (event.key === "ArrowDown" || event.key === (isRtl ? "ArrowRight" : "ArrowLeft")) {
      event.preventDefault();
      newValue = this.clampAndCeilToStep(newValue - this.step);
    }
    if (event.key === "Home") {
      event.preventDefault();
      newValue = 0;
    }
    if (event.key === "End") {
      event.preventDefault();
      newValue = this.clampAndCeilToStep(this.max);
    }
    if (event.key === "PageUp") {
      event.preventDefault();
      newValue = this.clampAndCeilToStep(
        Math.max(
          newValue + this.max / 10,
          newValue + this.step
          // make sure we at least move up to the next step
        )
      );
    }
    if (event.key === "PageDown") {
      event.preventDefault();
      newValue = this.clampAndCeilToStep(
        Math.min(
          newValue - this.max / 10,
          newValue - this.step
          // make sure we at least move down to the previous step
        )
      );
    }
    if (newValue !== oldValue) {
      if (newValue < 0) newValue = 0;
      if (newValue > this.max) newValue = this.max;
      this.value = newValue;
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      this.hadUserInteraction = true;
    }
    if (event.key === "Enter" && this.internals.form) {
      const submitter = [...this.internals.form.elements].find((el) => {
        return ["button", "input"].includes(el.localName) && el.type === "submit";
      });
      this.internals.form.requestSubmit(submitter);
    }
  }
  handleLabelPointerDown(event) {
    event.preventDefault();
    if (!this.disabled) {
      this.rating.focus();
    }
  }
  setValueFromCoordinates(x2) {
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    const { right, left, width } = this.ratingBoundingClientRect;
    const pointerPosition = x2;
    const ratingCoords = { start: left, end: right, size: width };
    const relativePosition = isRtl ? ratingCoords.end - pointerPosition : pointerPosition - ratingCoords.start;
    const percentage = relativePosition / ratingCoords.size;
    this.value = this.clampAndCeilToStep(this.max * percentage);
    if (this.value !== oldValue) {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
    }
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const isValueMissing = this.required && this.value === 0;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const validationMessage = isValueMissing ? VALIDATION_MESSAGE : this.getCustomValidity();
    const flags = {
      badInput: false,
      customError: hasCustomValidity,
      patternMismatch: false,
      rangeOverflow: false,
      rangeUnderflow: false,
      stepMismatch: false,
      tooLong: false,
      tooShort: false,
      typeMismatch: false,
      valueMissing: isValueMissing
    };
    this.isInvalid = isValueMissing || hasCustomValidity;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the rating. */
  focus() {
    this.rating.focus();
  }
  /** Removes focus from the rating. */
  blur() {
    this.rating.blur();
  }
  /**
   * Decreases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepDown() {
    const newValue = this.clampAndCeilToStep(this.value - this.step);
    this.value = newValue;
  }
  /**
   * Increases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepUp() {
    const newValue = this.clampAndCeilToStep(this.value + this.step);
    this.value = newValue;
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    const symbols = [];
    for (let i = 1; i <= this.max; i += 1) {
      symbols.push([this.symbolFormatter(i, true), this.symbolFormatter(i, false)]);
    }
    return x`
      <label
        id="label"
        part="label"
        class=${e({ vh: !hasLabel })}
        for="rating"
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <div
        id="rating"
        part="rating"
        class=${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      disabled: this.disabled,
      readonly: this.readonly
    })}
        role="slider"
        aria-labelledby="label"
        aria-describedby="description"
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-valuemin="0"
        aria-valuenow=${this.value}
        aria-valuetext="${this.localize.term("numberOfTotal", this.value, this.max)}"
        aria-valuemax=${this.max}
        tabindex=${this.disabled || this.readonly ? "-1" : "0"}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @keydown=${this.handleKeyDown}
      >
        ${symbols.map((symbol, index) => {
      return x`
            <span part="symbol" class="symbol" style="--clip-percentage: ${(this.value - index) * 100}%;">
              ${o(symbol[0])} ${o(symbol[1])}
            </span>
          `;
    })}
      </div>
    `;
  }
};
QuietRating.formAssociated = true;
QuietRating.observeSlots = true;
QuietRating.styles = [host_styles_default, form_control_styles_default, rating_styles_default];
__decorateClass([
  e2("#rating")
], QuietRating.prototype, "rating", 2);
__decorateClass([
  r()
], QuietRating.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietRating.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietRating.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietRating.prototype, "label", 2);
__decorateClass([
  n()
], QuietRating.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietRating.prototype, "name", 2);
__decorateClass([
  n({ type: Number })
], QuietRating.prototype, "value", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRating.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRating.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], QuietRating.prototype, "size", 2);
__decorateClass([
  n()
], QuietRating.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRating.prototype, "required", 2);
__decorateClass([
  n({ type: Number })
], QuietRating.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], QuietRating.prototype, "step", 2);
__decorateClass([
  n({ type: Boolean })
], QuietRating.prototype, "autofocus", 2);
__decorateClass([
  n({ attribute: false })
], QuietRating.prototype, "symbolFormatter", 2);
QuietRating = __decorateClass([
  t("quiet-rating")
], QuietRating);
export {
  QuietRating
};
