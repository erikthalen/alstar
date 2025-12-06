/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  TinyColor
} from "./chunk.54VRTGJ5.js";
import {
  color_picker_styles_default
} from "./chunk.DPBDJAAY.js";
import {
  clamp
} from "./chunk.ELBGBFBV.js";
import {
  QuietElement,
  e as e2,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  DraggableElement
} from "./chunk.R4JSBYAB.js";
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
  e
} from "./chunk.E6M524BP.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/color-picker/color-picker.ts
var hasEyeDropper = "EyeDropper" in window;
var QuietColorPicker = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isDragging = false;
    this.localize = new Localize(this);
    this.wasValueSetInternally = false;
    this.h = 0;
    this.s = 0;
    this.v = 1;
    this.a = 1;
    this.colorSliderThumbX = 0;
    this.colorSliderThumbY = 0;
    this.hasFocus = false;
    this.isChangingV = false;
    this.isChangingS = false;
    this.inputIsFocused = false;
    this.displayValue = "";
    this.hadUserInteraction = false;
    this.value = "";
    this.format = "hex";
    this.disabled = false;
    this.size = "md";
    this.swatches = "";
    this.withAlpha = false;
    this.withEyeDropper = false;
    this.withInput = false;
    this.handleFocusIn = (event) => {
      if (!this.hasFocus && event.target === event.currentTarget) {
        this.hasFocus = true;
        this.dispatchEvent(new QuietFocusEvent());
      }
    };
    this.handleFocusOut = (event) => {
      if (this.matches(":focus-visible") || event.target !== event.currentTarget) {
        return;
      }
      this.hasFocus = false;
      this.dispatchEvent(new QuietBlurEvent());
    };
  }
  get focusableAnchor() {
    return this.colorSliderThumb;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("focusin", this.handleFocusIn);
    this.addEventListener("focusout", this.handleFocusOut);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("focusin", this.handleFocusIn);
    this.removeEventListener("focusout", this.handleFocusOut);
  }
  firstUpdated() {
    this.setColorFromString(this.value);
    this.draggableThumb = new DraggableElement(this.colorSlider, {
      start: (x2, y) => {
        this.colorSliderBoundingClientRect = this.colorSlider.getBoundingClientRect();
        this.isDragging = true;
        this.valueWhenDraggingStarted = this.value;
        this.setColorFromCoordinates(x2, y);
      },
      move: (x2, y) => {
        this.setColorFromCoordinates(x2, y);
      },
      stop: () => {
        if (this.value !== this.valueWhenDraggingStarted) {
          this.hadUserInteraction = true;
          this.dispatchEvent(new QuietChangeEvent());
          this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
        }
        this.isDragging = false;
        this.valueWhenDraggingStarted = void 0;
      }
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("value")) {
      if (!this.isDragging && !this.wasValueSetInternally) {
        this.setColorFromString(this.value);
      }
      if (!this.inputIsFocused) {
        this.displayValue = this.value;
      }
    }
    if (changedProperties.has("dir")) {
      this.updateColorSliderThumbPosition();
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      this.draggableThumb.toggle(!this.disabled);
    }
    if (changedProperties.has("hasFocus")) {
      this.customStates.set("focused", this.hasFocus);
    }
    if (changedProperties.has("withAlpha") && !this.withAlpha) {
      this.a = 1;
    }
    if (changedProperties.has("h") || changedProperties.has("s") || changedProperties.has("v") || changedProperties.has("a") || changedProperties.has("format") || changedProperties.has("value")) {
      const color = new TinyColor({ h: this.h, s: this.s, v: this.v, a: this.a });
      this.updateColorSliderThumbPosition();
      this.wasValueSetInternally = true;
      switch (this.format) {
        case "rgb":
          this.value = color.toRgbString();
          break;
        case "hsl":
          this.value = color.toHslString();
          break;
        default:
          this.value = this.withAlpha ? color.toHex8String() : color.toHexString();
          break;
      }
      this.updateComplete.then(() => this.wasValueSetInternally = false);
    }
  }
  formatHue(value) {
    return this.localize.number(value.toFixed(0), { style: "unit", unit: "degree", unitDisplay: "narrow" });
  }
  formatAlpha(value) {
    return this.localize.number(value, { style: "percent" });
  }
  async handleColorInputBlur(event) {
    const input = event.target;
    this.inputIsFocused = false;
    const color = new TinyColor(input.value);
    if (color.isValid) {
      this.setColorFromString(input.value);
      await this.updateComplete;
      this.displayValue = this.value;
    } else {
      this.displayValue = this.value;
    }
  }
  async handleColorInputFocus(event) {
    if (event.type === "quiet-focus") {
      this.inputIsFocused = true;
      return;
    }
  }
  async handleColorInputInput(event) {
    event.stopImmediatePropagation();
    const oldValue = this.value;
    const input = event.target;
    this.displayValue = input.value;
    const color = new TinyColor(input.value);
    if (color.isValid) {
      this.setColorFromString(input.value);
    }
    await this.updateComplete;
    if (this.value !== oldValue) {
      this.hadUserInteraction = true;
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  handleColorSliderBlur() {
    this.isChangingS = false;
    this.isChangingV = false;
  }
  async handleColorSliderThumbKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    if (["ArrowUp", "ArrowDown", "PageUp", "PageDown"].includes(event.key)) {
      let increment = 0;
      if (event.key === "ArrowUp") increment = 0.01;
      if (event.key === "ArrowDown") increment = -0.01;
      if (event.key === "PageUp") increment = 0.1;
      if (event.key === "PageDown") increment = -0.1;
      event.preventDefault();
      this.v = clamp(this.v + increment, 0, 1);
      this.isChangingV = true;
      this.isChangingS = false;
    }
    if (["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) {
      let increment = 0;
      if (event.key === "ArrowLeft") increment = -0.01;
      if (event.key === "ArrowRight") increment = 0.01;
      if (event.key === "Home") increment = -0.1;
      if (event.key === "End") increment = 0.1;
      if (isRtl) increment *= -1;
      event.preventDefault();
      this.s = clamp(this.s + increment, 0, 1);
      this.isChangingS = true;
      this.isChangingV = false;
    }
    await this.updateComplete;
    if (this.value !== oldValue) {
      this.hadUserInteraction = true;
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  handleEyeDropperClick() {
    const eyeDropper = new EyeDropper();
    eyeDropper.open().then(async (result) => {
      const oldValue = this.value;
      this.setColorFromString(result.sRGBHex);
      await this.updateComplete;
      if (this.value !== oldValue) {
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new InputEvent("input"));
        this.dispatchEvent(new QuietChangeEvent());
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      }
    }).catch(() => {
    });
  }
  async handleHueSliderInput(event) {
    event.stopImmediatePropagation();
    this.h = event.target.value;
    await this.updateComplete;
    if (event.type === "quiet-input") {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
    } else if (event.type === "quiet-change") {
      this.hadUserInteraction = true;
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  async handleAlphaSliderInput(event) {
    event.stopImmediatePropagation();
    this.a = event.target.value;
    await this.updateComplete;
    if (event.type === "quiet-input") {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
    } else if (event.type === "quiet-change") {
      this.hadUserInteraction = true;
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  /** Sets the color when a swatch is clicked. */
  async handleSwatchClick(color) {
    const oldValue = this.value;
    if (this.disabled) return;
    this.setColorFromString(color);
    this.hadUserInteraction = true;
    this.colorSliderThumb.focus();
    await this.updateComplete;
    if (this.value !== oldValue) {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  /**
   * Parses an arbitrary color string and sets the corresponding HSVA values.
   */
  setColorFromString(color) {
    const newColor = new TinyColor(color);
    const hsv = newColor.toHsv();
    this.h = hsv.h;
    this.s = hsv.s;
    this.v = hsv.v;
    this.a = hsv.a;
  }
  /** Sets the S and V value based on the pointer's x and y coordinates. */
  async setColorFromCoordinates(x2, y) {
    const isRtl = this.localize.dir() === "rtl";
    const oldValue = this.value;
    const { top, left, height, width } = this.colorSliderBoundingClientRect;
    const relativeXPercent = isRtl ? clamp(1 - (x2 - left) / width, 0, 1) : clamp((x2 - left) / width, 0, 1);
    const relativeYPercent = clamp((y - top) / height, 0, 1);
    this.s = relativeXPercent;
    this.v = 1 - relativeYPercent;
    await this.updateComplete;
    if (this.value !== oldValue) {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
    }
  }
  /** Prevent custom events that bubble from propagating outside of the component */
  stopPropagation(event) {
    event.stopImmediatePropagation();
  }
  /** Updates the color slider's thumb position based on S and V. */
  updateColorSliderThumbPosition() {
    const isRtl = this.localize.dir() === "rtl";
    this.colorSliderThumbX = isRtl ? (1 - this.s) * 100 : this.s * 100;
    this.colorSliderThumbY = (1 - this.v) * 100;
  }
  /** Sets focus to the color picker. */
  focus() {
    this.colorSliderThumb.focus();
  }
  /** Removes focus from the color picker. */
  blur() {
    const activeEl = this.shadowRoot.activeElement;
    activeEl?.blur();
  }
  /**
   * Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
   * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
   * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
   */
  getValueAs(format = "rgb") {
    const color = new TinyColor({ h: this.h, s: this.s, v: this.v, a: this.a });
    switch (format) {
      case "hex":
        return color.toHexString();
      case "hex8":
        return color.toHex8String();
      case "hsl":
        return color.toHsl();
      default:
        return color.toRgb();
    }
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    const currentColor = new TinyColor({ h: this.h, s: this.s, v: this.v, a: this.a });
    const colorWithoutAlpha = new TinyColor({ h: this.h, s: this.s, v: this.v, a: 1 });
    const hueColor = new TinyColor({ h: this.h, s: 1, v: 1, a: 1 });
    const alphaColor = `color-mix(in oklab, var(--quiet-silent), ${currentColor.toHexString()} ${this.a * 100}%);`;
    const swatches = this.swatches.split(";").map((val) => val.trim()).filter((val) => val !== "");
    const luminosityText = this.localize.term("percentLuminosity", this.localize.number(this.v, { style: "percent" }));
    const saturationText = this.localize.term("percentSaturation", this.localize.number(this.s, { style: "percent" }));
    let valueText = "";
    if (this.isChangingV) {
      valueText = luminosityText;
    } else if (this.isChangingS) {
      valueText = saturationText;
    } else {
      valueText = `${luminosityText}, ${saturationText}`;
    }
    return x`
      <div
        id="picker"
        part="picker"
        class=${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      disabled: this.disabled
    })}
        style="
          --current-color: ${currentColor.toHex8String()};
          --current-color-without-alpha: ${colorWithoutAlpha.toHexString()};
          --hue-thumb-color: ${hueColor.toHexString()};
          --alpha-thumb-color: ${alphaColor};
        "
      >
        <div id="color-slider" part="color-slider" style="background-color: ${hueColor.toHexString()};">
          <span
            id="color-slider-thumb"
            part="color-slider-thumb"
            style="
              top: ${this.colorSliderThumbY}%;
              left: ${this.colorSliderThumbX}%;
              background-color: ${colorWithoutAlpha.toHexString()};
            "
            tabindex="${this.disabled ? "-1" : "0"}"
            role="slider"
            aria-roledescription="2d slider"
            aria-label=${this.label}
            aria-valuenow="0"
            aria-valuetext="${valueText}"
            @blur=${this.handleColorSliderBlur}
            @keydown=${this.handleColorSliderThumbKeyDown}
          ></span>
        </div>

        <div id="controls" part="controls">
          <quiet-copy id="copy-button" data=${this.value} ?disabled=${this.disabled}>
            <quiet-button
              id="preview-button"
              part="preview-button"
              appearance="text"
              ?disabled=${this.disabled}
              icon-label=${this.localize.term("copyToClipboard")}
            ></quiet-button>
          </quiet-copy>

          ${this.withEyeDropper && hasEyeDropper ? x`
                <quiet-button
                  id="eye-dropper"
                  part="eye-dropper-button"
                  appearance="text"
                  ?disabled=${this.disabled}
                  icon-label=${this.localize.term("selectAColorFromTheScreen")}
                  @click=${this.handleEyeDropperClick}
                >
                  <quiet-icon library="system" name="color-picker"></quiet-icon>
                </quiet-button>
              ` : ""}

          <div id="sliders" part="sliders">
            <quiet-slider
              id="hue"
              part="hue-slider"
              exportparts="
                label:hue-slider__label,
                description:hue-slider__description,
                slider:hue-slider__slider,
                track:hue-slider__track,
                indicator:hue-slider__indicator,
                thumb:hue-slider__thumb,
              "
              dir=${isRtl ? "rtl" : " ltr"}
              label="${this.localize.term("hue")}"
              min="0"
              max="359"
              value=${this.h}
              .valueFormatter=${this.formatHue}
              ?disabled=${this.disabled}
              @quiet-focus=${this.stopPropagation}
              @quiet-blur=${this.stopPropagation}
              @quiet-change=${this.handleHueSliderInput}
              @quiet-input=${this.handleHueSliderInput}
            ></quiet-slider>

            ${this.withAlpha ? x`
                  <quiet-slider
                    id="alpha"
                    part="alpha-slider"
                    exportparts="
                      label:alpha-slider__label,
                      description:alpha-slider__description,
                      slider:alpha-slider__slider,
                      track:alpha-slider__track,
                      indicator:alpha-slider__indicator,
                      thumb:alpha-slider__thumb,
                    "
                    dir=${isRtl ? "rtl" : " ltr"}
                    label=${this.localize.term("opacity")}
                    min="0"
                    max="1"
                    step="0.01"
                    value=${this.a}
                    .valueFormatter=${this.formatAlpha}
                    ?disabled=${this.disabled}
                    @quiet-focus=${this.stopPropagation}
                    @quiet-blur=${this.stopPropagation}
                    @quiet-change=${this.handleAlphaSliderInput}
                    @quiet-input=${this.handleAlphaSliderInput}
                  ></quiet-slider>
                ` : ""}
          </div>
        </div>

        ${this.withInput ? x`
              <quiet-text-field
                id="color-input"
                part="color-input"
                exportparts="
                  visual-box:color-input__visual-box,
                  text-box:color-input__text-box
                "
                label=${this.localize.term("colorValue")}
                value=${this.displayValue}
                ?disabled=${this.disabled}
                size=${this.size}
                @quiet-input=${this.handleColorInputInput}
                @quiet-blur=${this.handleColorInputBlur}
                @quiet-focus=${this.handleColorInputFocus}
              ></quiet-text-field>
            ` : ""}
        ${swatches.length > 0 ? x`
              <div id="swatches" part="swatches">
                ${swatches.map((swatch) => {
      return x`
                    <button
                      part="swatch"
                      aria-label="${swatch}"
                      style="--swatch-color: ${swatch}"
                      tabindex=${this.disabled ? "-1" : "0"}
                      @click=${() => this.handleSwatchClick(swatch)}
                    ></button>
                  `;
    })}
              </div>
            ` : ""}
      </div>
    `;
  }
};
QuietColorPicker.observeSlots = true;
QuietColorPicker.styles = [host_styles_default, form_control_styles_default, color_picker_styles_default];
__decorateClass([
  e2("#color-slider")
], QuietColorPicker.prototype, "colorSlider", 2);
__decorateClass([
  e2("#color-slider-thumb")
], QuietColorPicker.prototype, "colorSliderThumb", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "h", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "s", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "v", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "a", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "colorSliderThumbX", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "colorSliderThumbY", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "hasFocus", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "isChangingV", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "isChangingS", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "inputIsFocused", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "displayValue", 2);
__decorateClass([
  r()
], QuietColorPicker.prototype, "hadUserInteraction", 2);
__decorateClass([
  n()
], QuietColorPicker.prototype, "label", 2);
__decorateClass([
  n()
], QuietColorPicker.prototype, "value", 2);
__decorateClass([
  n()
], QuietColorPicker.prototype, "format", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietColorPicker.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietColorPicker.prototype, "size", 2);
__decorateClass([
  n()
], QuietColorPicker.prototype, "swatches", 2);
__decorateClass([
  n({ attribute: "with-alpha", type: Boolean, reflect: true })
], QuietColorPicker.prototype, "withAlpha", 2);
__decorateClass([
  n({ attribute: "with-eye-dropper", type: Boolean, reflect: true })
], QuietColorPicker.prototype, "withEyeDropper", 2);
__decorateClass([
  n({ attribute: "with-input", type: Boolean, reflect: true })
], QuietColorPicker.prototype, "withInput", 2);
QuietColorPicker = __decorateClass([
  t("quiet-color-picker")
], QuietColorPicker);
QuietColorPicker.disableWarning?.("change-in-update");

export {
  QuietColorPicker
};
