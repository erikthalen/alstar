/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  toast_item_styles_default
} from "./chunk.KVDSXI7U.js";
import {
  QuietElement,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  Localize
} from "./chunk.N7C6RCMV.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/toast-item/toast-item.ts
var QuietToastItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.animationFrame = null;
    this.isPaused = false;
    this.localize = new Localize(this);
    this.startTime = null;
    this.timeLeft = 100;
    this.variant = "neutral";
    this.duration = 5e3;
    this.withoutClose = false;
    this.tick = async () => {
      if (!this.startTime || this.isPaused) {
        return;
      }
      const elapsed = performance.now() - this.startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      this.timeLeft = 100 * (1 - progress);
      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(this.tick);
      } else {
        await this.waitForStackTransition();
        this.remove();
      }
    };
    /** Pause the timer on hover in */
    this.handlePointerEnter = (event) => {
      if (event.pointerType === "mouse" || event.pointerType === "pen") {
        this.isPaused = true;
        this.timeLeft = 100;
        this.stopTimer();
      }
    };
    /** Resume the timer on hover out */
    this.handlePointerLeave = () => {
      this.isPaused = false;
      this.startTimer();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("pointerenter", this.handlePointerEnter);
    this.addEventListener("pointerleave", this.handlePointerLeave);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopTimer();
    this.removeEventListener("pointerenter", this.handlePointerEnter);
    this.removeEventListener("pointerleave", this.handlePointerLeave);
  }
  updated(changedProperties) {
    if (changedProperties.has("timeLeft")) {
      this.style.setProperty("--progress", `${this.timeLeft.toFixed(2)}%`);
    }
  }
  /**
   * @internal Starts the auto-dismiss timer. If no duration is specified, this method has no effect.
   */
  startTimer() {
    if (this.duration > 0 && Number.isFinite(this.duration)) {
      this.startTime = performance.now();
      this.timeLeft = 100;
      this.tick();
    }
  }
  /**
   * @internal Stops the auto-dismiss timer.
   */
  stopTimer() {
    if (this.animationFrame !== null) {
      cancelAnimationFrame(this.animationFrame);
      this.animationFrame = null;
    }
  }
  /** Close it! */
  async handleCloseClick(event) {
    event.stopPropagation();
    this.stopTimer();
    await this.waitForStackTransition();
    this.remove();
  }
  /** Waits for the toast stack's transition group to finish transitioning and then resolves. */
  async waitForStackTransition() {
    const stack = this.closest("quiet-toast")?.stack;
    if (stack) {
      await stack.transitionComplete();
    }
  }
  render() {
    return x`
      ${this.whenSlotted("icon", x`<div id="icon" part="icon"><slot name="icon"></slot></div>`)}

      <div id="content" part="content"><slot></slot></div>

      ${!this.withoutClose ? x`<button
            id="close-button"
            part="close-button"
            type="button"
            aria-label=${this.localize.term("close")}
            @click=${this.handleCloseClick}
          >
            ${this.duration > 0 && Number.isFinite(this.duration) ? x`
                  <quiet-progress
                    part="progress"
                    exportparts="
                    track:progress__track,
                    indicator:progress__indicator,
                    content:progress__content
                  "
                    appearance="ring"
                    value="${this.timeLeft}"
                  >
                    <quiet-icon
                      part="close-icon"
                      exportparts="svg:close-icon__svg"
                      library="system"
                      name="x"
                    ></quiet-icon>
                  </quiet-progress>
                ` : x`
                  <quiet-icon
                    part="close-icon"
                    exportparts="svg:close-icon__svg"
                    library="system"
                    name="x"
                  ></quiet-icon>
                `}
          </button>` : ""}
    `;
  }
};
QuietToastItem.observeSlots = true;
QuietToastItem.styles = [host_styles_default, toast_item_styles_default];
__decorateClass([
  r()
], QuietToastItem.prototype, "timeLeft", 2);
__decorateClass([
  n({ reflect: true })
], QuietToastItem.prototype, "variant", 2);
__decorateClass([
  n({ type: Number })
], QuietToastItem.prototype, "duration", 2);
__decorateClass([
  n({ attribute: "without-close", type: Boolean, reflect: true })
], QuietToastItem.prototype, "withoutClose", 2);
QuietToastItem = __decorateClass([
  t("quiet-toast-item")
], QuietToastItem);

export {
  QuietToastItem
};
