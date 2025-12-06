/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  slide_activator_styles_default
} from "../../chunks/chunk.UBRKAO2A.js";
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
  QuietProgressEvent
} from "../../chunks/chunk.ZAWAT4PJ.js";
import "../../chunks/chunk.RT7RKCPI.js";
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
  QuietActivateEvent,
  QuietBeforeActivateEvent,
  QuietBeforeDeactivateEvent,
  QuietDeactivateEvent
} from "../../chunks/chunk.DFIS5YVP.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/slide-activator/slide-activator.ts
var QuietSlideActivator = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.isKeyPressStale = false;
    this.isDragging = false;
    this.isPressing = false;
    this.thumbPosition = 0;
    this.label = "";
    this.activatedLabel = "";
    this.activated = false;
    this.disabled = false;
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.cleanupTimers();
  }
  firstUpdated() {
    this.draggableThumb = new DraggableElement(this.thumb, {
      start: (x2) => {
        this.isDragging = true;
        this.dragStartX = x2;
        this.hostBoundingClientRect = this.getBoundingClientRect();
        this.handleDrag(x2);
      },
      move: (x2) => {
        this.handleDrag(x2);
      },
      stop: (x2) => {
        this.handleDrag(x2);
        this.isDragging = false;
        if (!this.activated) {
          this.setThumbPosition(0);
        }
      }
    });
  }
  updated(changedProperties) {
    if (changedProperties.has("activated")) {
      if (this.activated) {
        this.activate();
      } else if (changedProperties.get("activated") === true) {
        this.deactivate();
      }
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      if (this.disabled) {
        this.cleanupTimers();
        this.draggableThumb.stop();
      } else {
        this.draggableThumb.start();
      }
    }
    if (changedProperties.has("isDragging")) {
      this.customStates.set("dragging", this.isDragging);
    }
    if (changedProperties.has("isPressing")) {
      this.customStates.set("pressing", this.isPressing);
    }
    if (changedProperties.has("thumbPosition")) {
      this.style.setProperty("--thumb-position", `${this.thumbPosition}`);
      if (this.thumbPosition >= 1) {
        this.activated = true;
      }
    }
  }
  /** Attempts to activate the component. */
  activate() {
    const beforeActivateEvent = new QuietBeforeActivateEvent();
    this.dispatchEvent(beforeActivateEvent);
    if (beforeActivateEvent.defaultPrevented) {
      this.activated = false;
      return;
    }
    clearInterval(this.keyPressInterval);
    if (this.isPressing) this.isKeyPressStale = true;
    this.setThumbPosition(1);
    this.activated = true;
    this.customStates.set("activated", true);
    requestAnimationFrame(() => {
      this.dispatchEvent(new QuietActivateEvent());
    });
  }
  /** Restores the control to its original deactivated state. */
  deactivate() {
    const beforeDeactivateEvent = new QuietBeforeDeactivateEvent();
    this.dispatchEvent(beforeDeactivateEvent);
    if (beforeDeactivateEvent.defaultPrevented) {
      this.activated = true;
      return;
    }
    this.setThumbPosition(0);
    this.activated = false;
    this.customStates.set("activated", false);
    this.isKeyPressStale = false;
    this.isPressing = false;
    requestAnimationFrame(() => {
      this.dispatchEvent(new QuietDeactivateEvent());
    });
  }
  // Centralized cleanup method
  cleanupTimers() {
    if (this.keyPressInterval) {
      clearInterval(this.keyPressInterval);
      this.keyPressInterval = void 0;
    }
    if (this.keyPressTimeout) {
      clearTimeout(this.keyPressTimeout);
      this.keyPressTimeout = void 0;
    }
  }
  /** Updates the thumb position from a pointer's x coordinate */
  handleDrag(x2) {
    if (this.disabled || this.activated) return;
    const isRtl = this.localize.dir() === "rtl";
    const hostWidth = this.hostBoundingClientRect.width - this.thumb.clientWidth;
    const deltaX = isRtl ? this.dragStartX - x2 : x2 - this.dragStartX;
    const percentage = clamp(deltaX / hostWidth, 0, 1);
    this.setThumbPosition(percentage);
  }
  handleKeyDown(event) {
    const isRtl = this.localize.dir() === "rtl";
    const arrowKey = isRtl ? "ArrowLeft" : "ArrowRight";
    if (event.key === " " || event.key === arrowKey) {
      event.preventDefault();
      if (this.activated || this.disabled) return;
      if (this.isKeyPressStale) return;
      if (!this.isPressing) {
        this.isPressing = true;
        this.cleanupTimers();
        this.setThumbPosition(0);
        this.keyPressInterval = setInterval(() => {
          this.setThumbPosition(this.thumbPosition + 0.1);
        }, 100);
      }
    }
  }
  handleKeyUp(event) {
    const isRtl = this.localize.dir() === "rtl";
    const arrowKey = isRtl ? "ArrowLeft" : "ArrowRight";
    if (this.activated || this.disabled) return;
    if (event.key === " " || event.key === arrowKey) {
      event.preventDefault();
      this.isKeyPressStale = false;
      this.isPressing = false;
      this.setThumbPosition(0);
      this.cleanupTimers();
    }
  }
  /** Updates the thumb position and dispatches the `quiet-progress` event. */
  setThumbPosition(value) {
    if (this.disabled) return;
    if (value !== this.thumbPosition) {
      this.thumbPosition = value;
      const percentage = value / 100;
      if (percentage !== this.lastDispatchedPercentage) {
        this.dispatchEvent(new QuietProgressEvent({ percent: percentage }));
      }
    }
  }
  render() {
    const isRtl = this.localize.dir() === "rtl";
    return x`
      <div
        id="label"
        part="label"
        class=${e({
      rtl: isRtl,
      shimmer: this.attention === "shimmer"
    })}
      >
        ${this.activated && (this.activatedLabel || this.slotsWithContent.has("activated-label")) ? x`<slot name="activated-label">${this.activatedLabel}</slot>` : x`<slot name="label">${this.label}</slot>`}
      </div>

      <div
        id="thumb"
        part="thumb"
        tabindex=${this.disabled ? "-1" : "0"}
        role="button"
        aria-pressed=${this.activated}
        aria-labelledby="label"
        aria-description=${o(
      this.activated ? void 0 : this.localize.term("pressSpaceForOneSecondToActivate")
    )}
        aria-disabled=${this.disabled ? "true" : "false"}
        class=${e({
      activated: this.activated,
      dragging: this.isDragging,
      "is-press-stale": this.isKeyPressStale,
      pressing: this.isPressing,
      rtl: isRtl
    })}
        @keydown=${this.handleKeyDown}
        @keyup=${this.handleKeyUp}
      >
        <slot name="thumb">
          <quiet-icon library="default" name="chevrons-right"></quiet-icon>
          <quiet-icon library="default" name="check"></quiet-icon>
        </slot>
      </div>
    `;
  }
};
QuietSlideActivator.observeSlots = true;
QuietSlideActivator.styles = [host_styles_default, slide_activator_styles_default];
__decorateClass([
  e2("#thumb")
], QuietSlideActivator.prototype, "thumb", 2);
__decorateClass([
  r()
], QuietSlideActivator.prototype, "isDragging", 2);
__decorateClass([
  r()
], QuietSlideActivator.prototype, "isPressing", 2);
__decorateClass([
  r()
], QuietSlideActivator.prototype, "thumbPosition", 2);
__decorateClass([
  n()
], QuietSlideActivator.prototype, "label", 2);
__decorateClass([
  n({ attribute: "activated-label" })
], QuietSlideActivator.prototype, "activatedLabel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSlideActivator.prototype, "activated", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSlideActivator.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietSlideActivator.prototype, "attention", 2);
QuietSlideActivator = __decorateClass([
  t("quiet-slide-activator")
], QuietSlideActivator);
export {
  QuietSlideActivator
};
