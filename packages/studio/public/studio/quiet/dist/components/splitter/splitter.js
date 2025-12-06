/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  splitter_styles_default
} from "../../chunks/chunk.7T2RSFDY.js";
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

// src/components/splitter/splitter.ts
var QuietSplitter = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.previousPosition = 0.5;
    this.dragStartPosition = 0;
    this.dragStartClientX = 0;
    this.dragStartClientY = 0;
    this.isCollapsed = false;
    this.isDragging = false;
    this.position = 0.5;
    this.orientation = "horizontal";
    this.disabled = false;
    this.snap = "";
    this.snapThreshold = 10;
  }
  firstUpdated() {
    this.setupDragging();
    this.updateGridTemplate();
    this.updateAriaValue();
  }
  updated(changedProperties) {
    if (changedProperties.has("orientation") || changedProperties.has("snap")) {
      this.updateGridTemplate();
      this.setupDragging();
    }
    if (changedProperties.has("position")) {
      this.updateGridTemplate();
      this.updateAriaValue();
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("isDragging")) {
      this.customStates.set("dragging", this.isDragging);
    }
  }
  disconnectedCallback() {
    this.dragHandler?.stop();
    super.disconnectedCallback();
  }
  handleFocus() {
    this.customStates.set("focused", true);
  }
  handleBlur() {
    this.customStates.set("focused", false);
  }
  getSnapPoints() {
    if (!this.snap) return [];
    return this.snap.split(" ").map((point) => parseFloat(point.replace("%", ""))).filter((point) => !isNaN(point) && point >= 0 && point <= 100);
  }
  snapToNearest(position) {
    const snapPoints = this.getSnapPoints();
    if (snapPoints.length === 0) return position;
    const rect = this.getBoundingClientRect();
    const totalSize = this.orientation === "horizontal" ? rect.width : rect.height;
    const positionInPixels = position * 100 / 100 * totalSize;
    for (const snapPoint of snapPoints) {
      const snapPointInPixels = snapPoint / 100 * totalSize;
      if (Math.abs(positionInPixels - snapPointInPixels) <= this.snapThreshold) {
        return snapPoint / 100;
      }
    }
    return position;
  }
  getDividerConstraint(value, totalSize, isMin) {
    if (!value) return isMin ? 0 : 1;
    if (value.endsWith("%")) {
      return parseFloat(value.replace("%", "")) / 100;
    } else if (value.endsWith("px")) {
      const pixels = parseFloat(value.replace("px", ""));
      return pixels / totalSize;
    }
    return isMin ? 0 : 1;
  }
  clampPosition(position) {
    const rect = this.getBoundingClientRect();
    const totalSize = this.orientation === "horizontal" ? rect.width : rect.height;
    const minPosition = this.getDividerConstraint(
      getComputedStyle(this).getPropertyValue("--divider-min-position"),
      totalSize,
      true
    );
    const maxPosition = this.getDividerConstraint(
      getComputedStyle(this).getPropertyValue("--divider-max-position"),
      totalSize,
      false
    );
    return Math.max(minPosition, Math.min(maxPosition, position));
  }
  setupDragging() {
    this.dragHandler?.stop();
    if (this.disabled) return;
    this.dragHandler = new DraggableElement(this.divider, {
      start: (clientX, clientY) => {
        this.isDragging = true;
        this.dragStartPosition = this.position;
        this.dragStartClientX = clientX;
        this.dragStartClientY = clientY;
        this.customStates.set("dragging", true);
      },
      move: (clientX, clientY) => {
        const isRtl = this.localize.dir() === "rtl";
        const rect = this.getBoundingClientRect();
        let deltaPercentage;
        if (this.orientation === "horizontal") {
          const deltaX = clientX - this.dragStartClientX;
          deltaPercentage = deltaX / rect.width * (isRtl ? -1 : 1);
        } else {
          const deltaY = clientY - this.dragStartClientY;
          deltaPercentage = deltaY / rect.height;
        }
        const newPositionRaw = this.dragStartPosition + deltaPercentage;
        const newPosition = this.snapToNearest(this.clampPosition(newPositionRaw));
        if (this.position !== newPosition) {
          this.position = newPosition;
          this.updateGridTemplate();
          this.updateAriaValue();
          this.dispatchEvent(new QuietResizeEvent());
        }
      },
      stop: () => {
        this.isDragging = false;
        this.customStates.set("dragging", false);
      }
    });
  }
  updateGridTemplate() {
    const positionPercent = this.position * 100;
    if (this.orientation === "horizontal") {
      this.style.gridTemplateColumns = `minmax(0, ${positionPercent}%) var(--divider-width, 0.125rem) minmax(0, ${100 - positionPercent}%)`;
      this.style.gridTemplateRows = "1fr";
    } else {
      this.style.gridTemplateRows = `minmax(0, ${positionPercent}%) var(--divider-width, 0.125rem) minmax(0, ${100 - positionPercent}%)`;
      this.style.gridTemplateColumns = "1fr";
    }
  }
  updateAriaValue() {
    this.divider.setAttribute("aria-valuenow", (this.position * 100).toString());
  }
  handleKeydown(event) {
    if (this.disabled) return;
    const isRtl = this.localize.dir() === "rtl";
    const step = 0.05;
    let newPosition = this.position;
    switch (event.key) {
      case "ArrowLeft":
      case "ArrowUp":
        newPosition = isRtl ? this.position + step : this.position - step;
        break;
      case "ArrowRight":
      case "ArrowDown":
        newPosition = isRtl ? this.position - step : this.position + step;
        break;
      case "Home":
        newPosition = isRtl ? 1 : 0;
        break;
      case "End":
        newPosition = isRtl ? 0 : 1;
        break;
      case "Enter":
        if (!this.isCollapsed) {
          this.previousPosition = this.position;
          newPosition = 0;
          this.isCollapsed = true;
        } else {
          newPosition = this.previousPosition;
          this.isCollapsed = false;
        }
        break;
      default:
        return;
    }
    newPosition = this.clampPosition(newPosition);
    if (newPosition !== this.position) {
      event.preventDefault();
      this.position = newPosition;
      this.updateGridTemplate();
      this.updateAriaValue();
      this.dispatchEvent(new QuietResizeEvent());
    }
  }
  render() {
    return x`
      <div id="start" part="start">
        <slot name="start"></slot>
      </div>

      <div
        id="divider"
        part="divider"
        class=${e({ dragging: this.isDragging })}
        role="separator"
        tabindex=${this.disabled ? "-1" : "0"}
        aria-label=${this.localize.term("resize")}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="50"
        @keydown=${this.handleKeydown}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
      >
        <slot name="handle">
          <div id="handle" part="handle"></div>
        </slot>
      </div>

      <div id="end" part="end">
        <slot name="end"></slot>
      </div>
    `;
  }
};
QuietSplitter.styles = [host_styles_default, splitter_styles_default];
__decorateClass([
  e2("#divider")
], QuietSplitter.prototype, "divider", 2);
__decorateClass([
  r()
], QuietSplitter.prototype, "isCollapsed", 2);
__decorateClass([
  r()
], QuietSplitter.prototype, "isDragging", 2);
__decorateClass([
  n({ type: Number })
], QuietSplitter.prototype, "position", 2);
__decorateClass([
  n({ reflect: true })
], QuietSplitter.prototype, "orientation", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSplitter.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietSplitter.prototype, "snap", 2);
__decorateClass([
  n({ attribute: "snap-threshold", type: Number })
], QuietSplitter.prototype, "snapThreshold", 2);
QuietSplitter = __decorateClass([
  t("quiet-splitter")
], QuietSplitter);
export {
  QuietSplitter
};
