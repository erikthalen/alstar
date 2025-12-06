/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  slider_styles_default
} from "./chunk.WBA4K6I7.js";
import {
  clamp
} from "./chunk.ELBGBFBV.js";
import {
  QuietFormControlElement,
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

// src/components/slider/slider.ts
var QuietSlider = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.draggableThumbMin = null;
    this.draggableThumbMax = null;
    this.localize = new Localize(this);
    this.activeThumb = null;
    this.lastTrackPosition = null;
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = 0;
    this.minValue = 0;
    this.maxValue = 50;
    this.range = false;
    this.disabled = false;
    this.readonly = false;
    this.orientation = "horizontal";
    this.size = "md";
    this.min = 0;
    this.max = 100;
    this.step = 1;
    this.tooltipDistance = 8;
    this.tooltipPlacement = "top";
    this.withMarkers = false;
    this.withTooltip = false;
  }
  // Track last position for direction detection
  get focusableAnchor() {
    return this.isRange ? this.thumbMin || this.slider : this.slider;
  }
  /** Get if this is a range slider */
  get isRange() {
    return this.range;
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
    if (this.isRange) {
      this.draggableThumbMin = new DraggableElement(this.thumbMin, {
        start: () => {
          this.activeThumb = "min";
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.minValue;
          this.customStates.set("dragging", true);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          this.setThumbValueFromCoordinates(x2, y, "min");
        },
        stop: () => {
          if (this.minValue !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new QuietChangeEvent());
            this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            this.hadUserInteraction = true;
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
          this.lastTrackPosition = null;
        }
      });
      this.draggableThumbMax = new DraggableElement(this.thumbMax, {
        start: () => {
          this.activeThumb = "max";
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.maxValue;
          this.customStates.set("dragging", true);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          this.setThumbValueFromCoordinates(x2, y, "max");
        },
        stop: () => {
          if (this.maxValue !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new QuietChangeEvent());
            this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            this.hadUserInteraction = true;
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
        }
      });
      this.draggableTrack = new DraggableElement(this.track, {
        start: (x2, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          if (this.activeThumb) {
            this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
          } else {
            const value = this.getValueFromCoordinates(x2, y);
            const minDistance = Math.abs(value - this.minValue);
            const maxDistance = Math.abs(value - this.maxValue);
            if (minDistance === maxDistance) {
              if (value > this.maxValue) {
                this.activeThumb = "max";
              } else if (value < this.minValue) {
                this.activeThumb = "min";
              } else {
                const isRtl = this.localize.dir() === "rtl";
                const isVertical = this.orientation === "vertical";
                const position = isVertical ? y : x2;
                const previousPosition = this.lastTrackPosition || position;
                this.lastTrackPosition = position;
                const movingForward = position > previousPosition !== isRtl && !isVertical || position < previousPosition && isVertical;
                this.activeThumb = movingForward ? "max" : "min";
              }
            } else {
              this.activeThumb = minDistance <= maxDistance ? "min" : "max";
            }
            this.valueWhenDraggingStarted = this.activeThumb === "min" ? this.minValue : this.maxValue;
          }
          this.customStates.set("dragging", true);
          this.setThumbValueFromCoordinates(x2, y, this.activeThumb);
          this.showRangeTooltips();
        },
        move: (x2, y) => {
          if (this.activeThumb) {
            this.setThumbValueFromCoordinates(x2, y, this.activeThumb);
          }
        },
        stop: () => {
          if (this.activeThumb) {
            const currentValue = this.activeThumb === "min" ? this.minValue : this.maxValue;
            if (currentValue !== this.valueWhenDraggingStarted) {
              this.dispatchEvent(new QuietChangeEvent());
              this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
              this.hadUserInteraction = true;
            }
          }
          this.hideRangeTooltips();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
          this.activeThumb = null;
        }
      });
    } else {
      this.draggableTrack = new DraggableElement(this.slider, {
        start: (x2, y) => {
          this.trackBoundingClientRect = this.track.getBoundingClientRect();
          this.valueWhenDraggingStarted = this.value;
          this.customStates.set("dragging", true);
          this.setValueFromCoordinates(x2, y);
          this.showTooltip();
        },
        move: (x2, y) => {
          this.setValueFromCoordinates(x2, y);
        },
        stop: () => {
          if (this.value !== this.valueWhenDraggingStarted) {
            this.dispatchEvent(new QuietChangeEvent());
            this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
            this.hadUserInteraction = true;
          }
          this.hideTooltip();
          this.customStates.set("dragging", false);
          this.valueWhenDraggingStarted = void 0;
        }
      });
    }
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("value") || changedProperties.has("minValue") || changedProperties.has("maxValue")) {
      this.tooltip?.reposition();
    }
    if (this.isRange) {
      if (changedProperties.has("minValue") || changedProperties.has("maxValue")) {
        this.minValue = clamp(this.minValue, this.min, this.maxValue);
        this.maxValue = clamp(this.maxValue, this.minValue, this.max);
        this.updateFormValue();
      }
    } else {
      if (changedProperties.has("value")) {
        this.value = clamp(this.value, this.min, this.max);
        this.internals.setFormValue(String(this.value));
      }
    }
    if (changedProperties.has("min") || changedProperties.has("max")) {
      if (this.isRange) {
        this.minValue = clamp(this.minValue, this.min, this.max);
        this.maxValue = clamp(this.maxValue, this.min, this.max);
      } else {
        this.value = clamp(this.value, this.min, this.max);
      }
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("disabled") || changedProperties.has("readonly")) {
      const enabled = !(this.disabled || this.readonly);
      if (this.isRange) {
        if (this.draggableThumbMin) this.draggableThumbMin.toggle(enabled);
        if (this.draggableThumbMax) this.draggableThumbMax.toggle(enabled);
      }
      if (this.draggableTrack) {
        this.draggableTrack.toggle(enabled);
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
    if (this.isRange) {
      this.minValue = parseFloat(this.getAttribute("min-value") ?? String(this.min));
      this.maxValue = parseFloat(this.getAttribute("max-value") ?? String(this.max));
    } else {
      this.value = parseFloat(this.getAttribute("value") ?? String(this.min));
    }
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
  }
  /** Clamps a number to min/max while ensuring it's a valid step interval. */
  clampAndRoundToStep(value) {
    const stepPrecision = (String(this.step).split(".")[1] || "").replace(/0+$/g, "").length;
    value = Math.round(value / this.step) * this.step;
    value = clamp(value, this.min, this.max);
    return parseFloat(value.toFixed(stepPrecision));
  }
  /** Given a value, returns its percentage within a range of min/max. */
  getPercentageFromValue(value) {
    return (value - this.min) / (this.max - this.min) * 100;
  }
  /** Converts coordinates to slider value */
  getValueFromCoordinates(x2, y) {
    const isRtl = this.localize.dir() === "rtl";
    const isVertical = this.orientation === "vertical";
    const { top, right, bottom, left, height, width } = this.trackBoundingClientRect;
    const pointerPosition = isVertical ? y : x2;
    const sliderCoords = isVertical ? { start: top, end: bottom, size: height } : { start: left, end: right, size: width };
    const relativePosition = isVertical ? sliderCoords.end - pointerPosition : isRtl ? sliderCoords.end - pointerPosition : pointerPosition - sliderCoords.start;
    const percentage = relativePosition / sliderCoords.size;
    return this.clampAndRoundToStep(this.min + (this.max - this.min) * percentage);
  }
  handleBlur() {
    if (this.isRange) {
      requestAnimationFrame(() => {
        const focusedElement = this.shadowRoot?.activeElement;
        const thumbHasFocus = focusedElement === this.thumbMin || focusedElement === this.thumbMax;
        if (!thumbHasFocus) {
          this.hideRangeTooltips();
        }
      });
    } else {
      this.hideTooltip();
    }
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleFocus(event) {
    const target = event.target;
    if (this.isRange) {
      if (target === this.thumbMin) {
        this.activeThumb = "min";
      } else if (target === this.thumbMax) {
        this.activeThumb = "max";
      }
      this.showRangeTooltips();
    } else {
      this.showTooltip();
    }
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  handleKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const target = event.target;
    if (this.disabled || this.readonly) return;
    if (this.isRange) {
      if (target === this.thumbMin) {
        this.activeThumb = "min";
      } else if (target === this.thumbMax) {
        this.activeThumb = "max";
      }
      if (!this.activeThumb) return;
    }
    const current = this.isRange ? this.activeThumb === "min" ? this.minValue : this.maxValue : this.value;
    let newValue = current;
    switch (event.key) {
      // Increase
      case "ArrowUp":
      case (isRtl ? "ArrowLeft" : "ArrowRight"):
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current + this.step);
        break;
      // Decrease
      case "ArrowDown":
      case (isRtl ? "ArrowRight" : "ArrowLeft"):
        event.preventDefault();
        newValue = this.clampAndRoundToStep(current - this.step);
        break;
      // Minimum value
      case "Home":
        event.preventDefault();
        newValue = this.isRange && this.activeThumb === "min" ? this.min : this.isRange ? this.minValue : this.min;
        break;
      // Maximum value
      case "End":
        event.preventDefault();
        newValue = this.isRange && this.activeThumb === "max" ? this.max : this.isRange ? this.maxValue : this.max;
        break;
      // Move up 10%
      case "PageUp":
        event.preventDefault();
        const stepUp = Math.max(
          current + (this.max - this.min) / 10,
          current + this.step
          // make sure we at least move up to the next step
        );
        newValue = this.clampAndRoundToStep(stepUp);
        break;
      // Move down 10%
      case "PageDown":
        event.preventDefault();
        const stepDown = Math.min(
          current - (this.max - this.min) / 10,
          current - this.step
          // make sure we at least move down to the previous step
        );
        newValue = this.clampAndRoundToStep(stepDown);
        break;
      // Handle form submission on Enter
      case "Enter":
        if (this.internals.form) {
          const submitter = [...this.internals.form.elements].find((el) => {
            return ["button", "input"].includes(el.localName) && el.type === "submit";
          });
          this.internals.form.requestSubmit(submitter);
        }
        return;
    }
    if (newValue === current) return;
    if (this.isRange) {
      if (this.activeThumb === "min") {
        if (newValue > this.maxValue) {
          this.maxValue = newValue;
          this.minValue = newValue;
        } else {
          this.minValue = Math.max(this.min, newValue);
        }
      } else {
        if (newValue < this.minValue) {
          this.minValue = newValue;
          this.maxValue = newValue;
        } else {
          this.maxValue = Math.min(this.max, newValue);
        }
      }
      this.updateFormValue();
    } else {
      this.value = clamp(newValue, this.min, this.max);
    }
    this.dispatchEvent(new QuietInputEvent());
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    this.hadUserInteraction = true;
  }
  handleLabelPointerDown(event) {
    event.preventDefault();
    if (!this.disabled) {
      if (this.isRange) {
        this.thumbMin?.focus();
      } else {
        this.slider.focus();
      }
    }
  }
  setValueFromCoordinates(x2, y) {
    const oldValue = this.value;
    this.value = this.getValueFromCoordinates(x2, y);
    if (this.value !== oldValue) {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
    }
  }
  setThumbValueFromCoordinates(x2, y, thumb) {
    const value = this.getValueFromCoordinates(x2, y);
    const oldValue = thumb === "min" ? this.minValue : this.maxValue;
    if (thumb === "min") {
      if (value > this.maxValue) {
        this.maxValue = value;
        this.minValue = value;
      } else {
        this.minValue = Math.max(this.min, value);
      }
    } else {
      if (value < this.minValue) {
        this.minValue = value;
        this.maxValue = value;
      } else {
        this.maxValue = Math.min(this.max, value);
      }
    }
    if (oldValue !== (thumb === "min" ? this.minValue : this.maxValue)) {
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.updateFormValue();
    }
  }
  showTooltip() {
    if (this.withTooltip && this.tooltip) {
      this.tooltip.open = true;
    }
  }
  hideTooltip() {
    if (this.withTooltip && this.tooltip) {
      this.tooltip.open = false;
    }
  }
  showRangeTooltips() {
    if (!this.withTooltip) return;
    if (this.activeThumb === "min") {
      this.tooltipMin.open = true;
      this.tooltipMax.open = false;
    } else if (this.activeThumb === "max") {
      this.tooltipMax.open = true;
      this.tooltipMin.open = false;
    }
  }
  hideRangeTooltips() {
    if (!this.withTooltip) return;
    this.tooltipMin.open = false;
    this.tooltipMax.open = false;
  }
  /** Updates the form value submission for range sliders */
  updateFormValue() {
    if (this.isRange) {
      const formData = new FormData();
      formData.append(this.name || "", String(this.minValue));
      formData.append(this.name || "", String(this.maxValue));
      this.internals.setFormValue(formData);
    }
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const validationMessage = this.getCustomValidity();
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
      valueMissing: false
    };
    this.isInvalid = hasCustomValidity;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the slider. */
  focus() {
    if (this.isRange) {
      this.thumbMin?.focus();
    } else {
      this.slider.focus();
    }
  }
  /** Removes focus from the slider. */
  blur() {
    if (this.isRange) {
      if (document.activeElement === this.thumbMin) {
        this.thumbMin.blur();
      } else if (document.activeElement === this.thumbMax) {
        this.thumbMax.blur();
      }
    } else {
      this.slider.blur();
    }
  }
  /**
   * Decreases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepDown() {
    if (this.isRange) {
      const newValue = this.clampAndRoundToStep(this.minValue - this.step);
      this.minValue = clamp(newValue, this.min, this.maxValue);
      this.updateFormValue();
    } else {
      const newValue = this.clampAndRoundToStep(this.value - this.step);
      this.value = newValue;
    }
  }
  /**
   * Increases the slider's value by `step`. This is a programmatic change, so `input` and `change` events will not be
   * emitted when this is called.
   */
  stepUp() {
    if (this.isRange) {
      const newValue = this.clampAndRoundToStep(this.maxValue + this.step);
      this.maxValue = clamp(newValue, this.minValue, this.max);
      this.updateFormValue();
    } else {
      const newValue = this.clampAndRoundToStep(this.value + this.step);
      this.value = newValue;
    }
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    const sliderClasses = e({
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      horizontal: this.orientation === "horizontal",
      vertical: this.orientation === "vertical",
      disabled: this.disabled
    });
    const markers = [];
    if (this.withMarkers) {
      for (let i = this.min; i <= this.max; i += this.step) {
        markers.push(this.getPercentageFromValue(i));
      }
    }
    const labelAndDescription = x`
      <label
        id="label"
        part="label"
        for=${this.isRange ? "thumb-min" : "text-box"}
        class=${e({ vh: !hasLabel })}
        @pointerdown=${this.handleLabelPointerDown}
      >
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>
    `;
    const markersTemplate = this.withMarkers ? x`
          <div id="markers" part="markers">
            ${markers.map((marker) => x`<span part="marker" class="marker" style="--position: ${marker}%"></span>`)}
          </div>
        ` : "";
    const referencesTemplate = this.whenSlotted(
      "reference",
      x`
        <div id="references" part="references" aria-hidden="true">
          <slot name="reference"></slot>
        </div>
      `
    );
    const createTooltip = (thumbId, value) => this.withTooltip ? x`
            <quiet-tooltip
              id=${`tooltip${thumbId !== "thumb" ? "-" + thumbId : ""}`}
              part="tooltip"
              exportparts="
              tooltip:tooltip__tooltip,
              content:tooltip__content,
              arrow:tooltip__arrow
            "
              distance=${this.tooltipDistance}
              placement=${this.tooltipPlacement}
              for=${thumbId}
              activation="manual"
              dir=${this.localize.dir()}
            >
              <span aria-hidden="true">
                ${typeof this.valueFormatter === "function" ? this.valueFormatter(value) : this.localize.number(value)}
              </span>
            </quiet-tooltip>
          ` : "";
    if (this.isRange) {
      const minThumbPosition = clamp(this.getPercentageFromValue(this.minValue), 0, 100);
      const maxThumbPosition = clamp(this.getPercentageFromValue(this.maxValue), 0, 100);
      return x`
        ${labelAndDescription}

        <div id="slider" part="slider" class=${sliderClasses}>
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${Math.min(minThumbPosition, maxThumbPosition)}%; --end: ${Math.max(
        minThumbPosition,
        maxThumbPosition
      )}%"
            ></div>

            ${markersTemplate}

            <span
              id="thumb-min"
              part="thumb thumb-min"
              style="--position: ${minThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.minValue}
              aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.minValue) : this.localize.number(this.minValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (minimum value)` : "Minimum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>

            <span
              id="thumb-max"
              part="thumb thumb-max"
              style="--position: ${maxThumbPosition}%"
              role="slider"
              aria-valuemin=${this.min}
              aria-valuenow=${this.maxValue}
              aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.maxValue) : this.localize.number(this.maxValue)}
              aria-valuemax=${this.max}
              aria-label="${this.label ? `${this.label} (maximum value)` : "Maximum value"}"
              aria-orientation=${this.orientation}
              aria-disabled=${this.disabled ? "true" : "false"}
              aria-readonly=${this.readonly ? "true" : "false"}
              tabindex=${this.disabled ? -1 : 0}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
              @keydown=${this.handleKeyDown}
            ></span>
          </div>

          ${referencesTemplate}
        </div>

        ${createTooltip("thumb-min", this.minValue)} ${createTooltip("thumb-max", this.maxValue)}
      `;
    } else {
      const thumbPosition = clamp(this.getPercentageFromValue(this.value), 0, 100);
      const indicatorOffsetPosition = clamp(
        this.getPercentageFromValue(typeof this.indicatorOffset === "number" ? this.indicatorOffset : this.min),
        0,
        100
      );
      return x`
        ${labelAndDescription}

        <div
          id="slider"
          part="slider"
          class=${sliderClasses}
          role="slider"
          aria-disabled=${this.disabled ? "true" : "false"}
          aria-readonly=${this.disabled ? "true" : "false"}
          aria-orientation=${this.orientation}
          aria-valuemin=${this.min}
          aria-valuenow=${this.value}
          aria-valuetext=${typeof this.valueFormatter === "function" ? this.valueFormatter(this.value) : this.localize.number(this.value)}
          aria-valuemax=${this.max}
          aria-labelledby="label"
          aria-describedby="description"
          tabindex=${this.disabled ? -1 : 0}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @keydown=${this.handleKeyDown}
        >
          <div id="track" part="track">
            <div
              id="indicator"
              part="indicator"
              style="--start: ${indicatorOffsetPosition}%; --end: ${thumbPosition}%"
            ></div>

            ${markersTemplate}
            <span id="thumb" part="thumb" style="--position: ${thumbPosition}%"></span>
          </div>

          ${referencesTemplate}
        </div>

        ${createTooltip("thumb", this.value)}
      `;
    }
  }
};
QuietSlider.formAssociated = true;
QuietSlider.observeSlots = true;
QuietSlider.styles = [host_styles_default, form_control_styles_default, slider_styles_default];
__decorateClass([
  e2("#slider")
], QuietSlider.prototype, "slider", 2);
__decorateClass([
  e2("#thumb")
], QuietSlider.prototype, "thumb", 2);
__decorateClass([
  e2("#thumb-min")
], QuietSlider.prototype, "thumbMin", 2);
__decorateClass([
  e2("#thumb-max")
], QuietSlider.prototype, "thumbMax", 2);
__decorateClass([
  e2("#track")
], QuietSlider.prototype, "track", 2);
__decorateClass([
  e2("#tooltip")
], QuietSlider.prototype, "tooltip", 2);
__decorateClass([
  e2("#tooltip-thumb-min")
], QuietSlider.prototype, "tooltipMin", 2);
__decorateClass([
  e2("#tooltip-thumb-max")
], QuietSlider.prototype, "tooltipMax", 2);
__decorateClass([
  r()
], QuietSlider.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietSlider.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietSlider.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietSlider.prototype, "label", 2);
__decorateClass([
  n()
], QuietSlider.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietSlider.prototype, "name", 2);
__decorateClass([
  n({ type: Number })
], QuietSlider.prototype, "value", 2);
__decorateClass([
  n({ type: Number, attribute: "min-value" })
], QuietSlider.prototype, "minValue", 2);
__decorateClass([
  n({ type: Number, attribute: "max-value" })
], QuietSlider.prototype, "maxValue", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSlider.prototype, "range", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSlider.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSlider.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], QuietSlider.prototype, "orientation", 2);
__decorateClass([
  n({ reflect: true })
], QuietSlider.prototype, "size", 2);
__decorateClass([
  n({ attribute: "indicator-offset", type: Number })
], QuietSlider.prototype, "indicatorOffset", 2);
__decorateClass([
  n()
], QuietSlider.prototype, "form", 2);
__decorateClass([
  n({ type: Number })
], QuietSlider.prototype, "min", 2);
__decorateClass([
  n({ type: Number })
], QuietSlider.prototype, "max", 2);
__decorateClass([
  n({ type: Number })
], QuietSlider.prototype, "step", 2);
__decorateClass([
  n({ type: Boolean })
], QuietSlider.prototype, "autofocus", 2);
__decorateClass([
  n({ attribute: "tooltip-distance", type: Number })
], QuietSlider.prototype, "tooltipDistance", 2);
__decorateClass([
  n({ attribute: "tooltip-placement", reflect: true })
], QuietSlider.prototype, "tooltipPlacement", 2);
__decorateClass([
  n({ attribute: "with-markers", type: Boolean })
], QuietSlider.prototype, "withMarkers", 2);
__decorateClass([
  n({ attribute: "with-tooltip", type: Boolean })
], QuietSlider.prototype, "withTooltip", 2);
__decorateClass([
  n({ attribute: false })
], QuietSlider.prototype, "valueFormatter", 2);
QuietSlider = __decorateClass([
  t("quiet-slider")
], QuietSlider);

export {
  QuietSlider
};
