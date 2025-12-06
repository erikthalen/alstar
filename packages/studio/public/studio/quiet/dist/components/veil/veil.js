/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  veil_styles_default
} from "../../chunks/chunk.WSTDO2KN.js";
import "../../chunks/chunk.MGJZZ2SA.js";
import "../../chunks/chunk.3L6SRQZP.js";
import {
  QuietElement,
  e,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  lockScrolling,
  unlockScrolling
} from "../../chunks/chunk.YYNYQ6SE.js";
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
  QuietActivateEvent,
  QuietBeforeActivateEvent,
  QuietBeforeDeactivateEvent,
  QuietDeactivateEvent
} from "../../chunks/chunk.DFIS5YVP.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/veil/veil.ts
var QuietVeil = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isFirstUpdate = true;
    this.localize = new Localize(this);
    this.label = "";
    this.active = false;
    this.fullscreen = false;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape" && this.fullscreen) {
        event.preventDefault();
      }
    };
  }
  firstUpdated() {
    requestAnimationFrame(() => this.isFirstUpdate = false);
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      if (this.active) {
        this.activate();
      } else if (!this.active) {
        this.deactivate();
      }
    }
    if (changedProperties.has("fullscreen")) {
      if (!this.active) return;
      if (this.fullscreen) {
        lockScrolling(this);
        this.dialog.showModal();
      } else {
        unlockScrolling(this);
        this.dialog?.close();
      }
    }
  }
  /** Activates the veil. */
  async activate() {
    const beforeActivateEvent = new QuietBeforeActivateEvent();
    this.dispatchEvent(beforeActivateEvent);
    if (beforeActivateEvent.defaultPrevented) {
      this.active = false;
      return;
    }
    this.customStates.set("active", true);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    if (this.fullscreen) {
      lockScrolling(this);
      this.dialog.showModal();
    }
    if (!this.isFirstUpdate) {
      await animateWithClass(this.front, "show");
    }
    this.dispatchEvent(new QuietActivateEvent());
  }
  /** Deactivates the veil. */
  async deactivate() {
    const beforeDeactivateEvent = new QuietBeforeDeactivateEvent();
    this.dispatchEvent(beforeDeactivateEvent);
    if (beforeDeactivateEvent.defaultPrevented) {
      this.active = true;
      return;
    }
    await animateWithClass(this.front, "hide");
    this.customStates.set("active", false);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    unlockScrolling(this);
    this.dialog?.close();
    this.dispatchEvent(new QuietDeactivateEvent());
  }
  handleDialogCancel(event) {
    event.preventDefault();
  }
  render() {
    const label = this.label || this.localize.term("loading");
    return x`
      ${this.fullscreen ? (
      // fullscreen view
      x`
            <dialog id="front" @cancel=${this.handleDialogCancel}>
              <slot name="front">
                <quiet-spinner label=${label}></quiet-spinner>
              </slot>
            </dialog>
          `
    ) : (
      // contained view
      x`
            <div id="front" role="status" aria-live="polite" aria-label=${label}>
              <slot name="front">
                <quiet-spinner></quiet-spinner>
              </slot>
            </div>

            <slot ?inert=${this.active}></slot>
          `
    )}
    `;
  }
};
QuietVeil.styles = [host_styles_default, veil_styles_default];
__decorateClass([
  e("#front")
], QuietVeil.prototype, "front", 2);
__decorateClass([
  e("dialog")
], QuietVeil.prototype, "dialog", 2);
__decorateClass([
  n({ type: String, attribute: "label" })
], QuietVeil.prototype, "label", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietVeil.prototype, "active", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietVeil.prototype, "fullscreen", 2);
QuietVeil = __decorateClass([
  t("quiet-veil")
], QuietVeil);
export {
  QuietVeil
};
