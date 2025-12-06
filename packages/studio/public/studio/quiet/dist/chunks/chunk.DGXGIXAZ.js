/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  copy_styles_default
} from "./chunk.YQKW43AF.js";
import {
  computePosition,
  flip
} from "./chunk.FWK2CT6L.js";
import {
  QuietElement,
  e,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  Localize
} from "./chunk.N7C6RCMV.js";
import {
  animateWithClass
} from "./chunk.VBE24RWL.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  QuietCopyErrorEvent,
  QuietCopyEvent
} from "./chunk.RMLEDZSL.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/copy/copy.ts
var QuietCopy = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.data = "";
    this.disabled = false;
    this.feedbackPlacement = "top";
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      const button = this.querySelector("quiet-button, button");
      if (button) {
        button.disabled = this.disabled;
      }
    }
  }
  async handleClick(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.disabled) {
      return;
    }
    try {
      if (typeof this.data === "string") {
        if (this.data.length === 0) {
          throw new Error("No data was provided to copy");
        }
        await navigator.clipboard.writeText(this.data);
      } else if (Array.isArray(this.data)) {
        const clipboardItems = this.data.filter((item) => item instanceof ClipboardItem);
        if (clipboardItems.length === 0) {
          throw new Error("No data was provided to copy");
        }
        await navigator.clipboard.write(clipboardItems);
      }
      this.dispatchEvent(new QuietCopyEvent({ data: this.data }));
      this.showFeedback(this.localize.term("copied"));
    } catch (err) {
      this.dispatchEvent(new QuietCopyErrorEvent({ error: err }));
      this.showFeedback(this.localize.term("error"));
    }
  }
  /** Shows copy feedback with an animation */
  async showFeedback(message) {
    if (this.feedbackPlacement === "hidden") {
      return;
    }
    this.feedback.textContent = message;
    this.feedback.hidden = false;
    this.feedback.showPopover();
    computePosition(this, this.feedback, {
      placement: this.feedbackPlacement,
      middleware: [flip()]
    }).then(({ x: x2, y }) => {
      Object.assign(this.feedback.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
    });
    await animateWithClass(this.feedback, "show");
    this.feedback.hidden = true;
    this.feedback.hidePopover();
  }
  render() {
    return x`
      <slot @click=${this.handleClick}>
        <quiet-button
          part="copy-button"
          exportparts="button:copy-button__button"
          appearance="text"
          icon-label=${this.localize.term("copyToClipboard")}
          ?disabled=${this.disabled}
        >
          <quiet-icon part="copy-icon" exportparts="svg:copy-icon__svg" library="system" name="copy"></quiet-icon>
        </quiet-button>
      </slot>

      <div
        id="feedback"
        part="feedback"
        data-placement=${this.feedbackPlacement}
        popover="manual"
        aria-live="polite"
        hidden
      ></div>
    `;
  }
};
QuietCopy.styles = [host_styles_default, copy_styles_default];
__decorateClass([
  e("#feedback")
], QuietCopy.prototype, "feedback", 2);
__decorateClass([
  n()
], QuietCopy.prototype, "data", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCopy.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "feedback-placement", reflect: true })
], QuietCopy.prototype, "feedbackPlacement", 2);
QuietCopy = __decorateClass([
  t("quiet-copy")
], QuietCopy);

export {
  QuietCopy
};
