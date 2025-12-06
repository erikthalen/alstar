/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  comparison_styles_default
} from "../../chunks/chunk.HSWG5523.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  clamp
} from "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietElement,
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
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietResizeEvent
} from "../../chunks/chunk.UV47YW5E.js";
import "../../chunks/chunk.RT7RKCPI.js";
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

// src/components/comparison/comparison.ts
var QuietComparison = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.dragStartPosition = 0;
    this.dragStartClientX = 0;
    this.dragStartClientY = 0;
    this.isDragging = false;
    this.position = 0.5;
    this.orientation = "horizontal";
    this.disabled = false;
  }
  firstUpdated() {
    this.setupDragging();
  }
  updated(changedProperties) {
    if (changedProperties.has("position")) {
      this.style.setProperty("--position", `${clamp(this.position * 100, 0, 100)}%`);
    }
    if (changedProperties.has("isDragging")) {
      this.customStates.set("dragging", this.isDragging);
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      this.setupDragging();
    }
    if (changedProperties.has("orientation")) {
      this.setupDragging();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.dragHandler?.stop();
  }
  handleFocus() {
    this.customStates.set("focused", true);
  }
  handleBlur() {
    this.customStates.set("focused", false);
  }
  handleKeydown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const isVertical = this.orientation === "vertical";
    let newPosition = this.position;
    if (this.disabled) return;
    switch (event.key) {
      case "ArrowLeft":
        if (!isVertical) {
          newPosition = isRtl ? this.position + 0.05 : this.position - 0.05;
        }
        break;
      case "ArrowRight":
        if (!isVertical) {
          newPosition = isRtl ? this.position - 0.05 : this.position + 0.05;
        }
        break;
      case "ArrowUp":
        if (isVertical) {
          newPosition = this.position - 0.05;
        }
        break;
      case "ArrowDown":
        if (isVertical) {
          newPosition = this.position + 0.05;
        }
        break;
      case "Home":
        newPosition = 0;
        break;
      case "End":
        newPosition = 1;
        break;
      default:
        return;
    }
    newPosition = clamp(newPosition, 0, 1);
    if (newPosition !== this.position) {
      event.preventDefault();
      this.position = newPosition;
      this.dispatchEvent(new QuietResizeEvent());
    }
  }
  setupDragging() {
    this.dragHandler?.stop();
    if (this.disabled) return;
    this.dragHandler = new DraggableElement(this.divider, {
      start: (clientX, clientY) => {
        this.divider.classList.add("dragging");
        this.dragStartPosition = this.position;
        this.dragStartClientX = clientX;
        this.dragStartClientY = clientY;
        this.customStates.set("dragging", true);
      },
      move: (clientX, clientY) => {
        const isRtl = this.localize.dir() === "rtl";
        const rect = this.getBoundingClientRect();
        let deltaFraction = 0;
        if (this.orientation === "vertical") {
          const deltaY = clientY - this.dragStartClientY;
          deltaFraction = deltaY / rect.height;
        } else {
          const deltaX = clientX - this.dragStartClientX;
          deltaFraction = deltaX / rect.width;
          if (isRtl) {
            deltaFraction = -deltaFraction;
          }
        }
        const newPosition = this.dragStartPosition + deltaFraction;
        const clampedPosition = clamp(newPosition, 0, 1);
        if (this.position !== clampedPosition) {
          this.position = clampedPosition;
          this.dispatchEvent(new QuietResizeEvent());
        }
      },
      stop: () => {
        this.divider.classList.remove("dragging");
        this.customStates.set("dragging", false);
      }
    });
  }
  render() {
    const isVertical = this.orientation === "vertical";
    return x`
      <div id="start" part="start"><slot name="start"></slot></div>
      <div id="end" part="end"><slot name="end"></slot></div>
      <div
        id="divider"
        part="divider"
        class=${e({ dragging: this.isDragging, vertical: isVertical })}
        role="slider"
        tabindex=${this.disabled ? "-1" : "0"}
        aria-label=${this.localize.term("visualComparisonSlider")}
        aria-orientation=${isVertical ? "vertical" : "horizontal"}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${Math.round(this.position * 100)}"
        @keydown=${this.handleKeydown}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <div id="handle" part="handle">
          <slot name="handle-icon">
            <quiet-icon library="system" name=${isVertical ? "grip-horizontal" : "grip-vertical"} family="filled">
            </quiet-icon>
          </slot>
        </div>
      </div>
    `;
  }
};
QuietComparison.styles = [host_styles_default, comparison_styles_default];
__decorateClass([
  e2("#divider")
], QuietComparison.prototype, "divider", 2);
__decorateClass([
  r()
], QuietComparison.prototype, "isDragging", 2);
__decorateClass([
  n({ type: Number })
], QuietComparison.prototype, "position", 2);
__decorateClass([
  n({ type: String, reflect: true })
], QuietComparison.prototype, "orientation", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietComparison.prototype, "disabled", 2);
QuietComparison = __decorateClass([
  t("quiet-comparison")
], QuietComparison);
export {
  QuietComparison
};
