/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  share_styles_default
} from "../../chunks/chunk.GKJ2E5ZJ.js";
import {
  copy_styles_default
} from "../../chunks/chunk.YQKW43AF.js";
import {
  computePosition,
  flip
} from "../../chunks/chunk.FWK2CT6L.js";
import {
  QuietElement,
  e,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
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
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/share/share.ts
var QuietShare = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
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
      await navigator.share({
        title: this.label,
        text: this.text,
        url: this.url,
        files: this.files
      });
    } catch (err) {
      if (err instanceof Error && // Ignore abort errors, as the user simply canceled the share. Also ignore invalid state errors, which usually
      // means another share operation is still in progress.
      (err.name === "AbortError" || err.name === "InvalidStateError")) {
        return;
      }
      try {
        const textToCopy = this.url || `${this.label}

${this.text}`.trim();
        if (textToCopy.length === 0) {
          throw new Error("No data was provided to share");
        }
        await navigator.clipboard.writeText(textToCopy);
        this.showFeedback(this.localize.term("copied"));
      } catch (err2) {
        this.showFeedback(this.localize.term("error"));
      }
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
          part="share-button"
          exportparts="button:share-button__button"
          appearance="text"
          icon-label=${this.localize.term("share")}
          ?disabled=${this.disabled}
        >
          <quiet-icon part="share-icon" exportparts="svg:share-icon__svg" library="system" name="share-3"></quiet-icon>
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
QuietShare.styles = [host_styles_default, copy_styles_default, share_styles_default];
__decorateClass([
  e("#feedback")
], QuietShare.prototype, "feedback", 2);
__decorateClass([
  n()
], QuietShare.prototype, "label", 2);
__decorateClass([
  n()
], QuietShare.prototype, "text", 2);
__decorateClass([
  n()
], QuietShare.prototype, "url", 2);
__decorateClass([
  n({ type: Array })
], QuietShare.prototype, "files", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietShare.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "feedback-placement", reflect: true })
], QuietShare.prototype, "feedbackPlacement", 2);
QuietShare = __decorateClass([
  t("quiet-share")
], QuietShare);
export {
  QuietShare
};
