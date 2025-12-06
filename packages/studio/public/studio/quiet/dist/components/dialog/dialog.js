/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  dialog_styles_default
} from "../../chunks/chunk.Q732RD6D.js";
import {
  parseDelimitedTokens
} from "../../chunks/chunk.W6PQ6UIS.js";
import {
  QuietElement,
  e as e2,
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
  QuietBeforeCloseEvent,
  QuietBeforeOpenEvent,
  QuietCloseEvent,
  QuietOpenEvent
} from "../../chunks/chunk.7FX3JPOE.js";
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

// src/components/dialog/dialog.ts
var QuietDialog = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.open = false;
    this.placement = "center";
    this.lightDismiss = false;
    this.resetScroll = false;
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.requestClose(this);
      }
    };
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      if (this.open && !this.dialog.open) {
        this.show();
      } else if (this.dialog.open) {
        this.requestClose(this.dialog);
      }
    }
  }
  handleDialogCancel(event) {
    event.preventDefault();
    if (!this.dialog.classList.contains("hide")) {
      this.requestClose(this.dialog);
    }
  }
  handleDialogClick(event) {
    const target = event.target;
    const button = target.closest('[data-dialog="close"]');
    if (button) {
      event.stopPropagation();
      this.requestClose(button);
    }
  }
  handleDialogPointerDown(event) {
    if (event.target === this.dialog) {
      if (this.lightDismiss) {
        this.requestClose(this.dialog);
      } else {
        animateWithClass(this.dialog, "pulse");
      }
    }
  }
  /** Call this to show the dialog. */
  async show() {
    const openEvent = new QuietBeforeOpenEvent();
    this.dispatchEvent(openEvent);
    if (openEvent.defaultPrevented) {
      return;
    }
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    lockScrolling(this.dialog);
    this.dialog.showModal();
    this.customStates.set("open", true);
    requestAnimationFrame(() => {
      const elementToFocus = this.querySelector("[autofocus]");
      if (elementToFocus && typeof elementToFocus.focus === "function") {
        elementToFocus.focus();
      } else {
        this.dialog.focus();
      }
    });
    await animateWithClass(this.dialog, "show");
    this.dispatchEvent(new QuietOpenEvent());
  }
  /** Call this to ask the dialog to close. */
  async requestClose(source) {
    const closeEvent = new QuietBeforeCloseEvent({ source });
    this.dispatchEvent(closeEvent);
    if (closeEvent.defaultPrevented) {
      this.open = true;
      animateWithClass(this.dialog, "shake");
    } else {
      document.removeEventListener("keydown", this.handleDocumentKeyDown);
      unlockScrolling(this.dialog);
      await animateWithClass(this.dialog, "hide");
      if (this.resetScroll) {
        this.scrollBodyTo({ top: 0, left: 0 });
      }
      this.dialog.close();
      this.open = false;
      this.customStates.set("open", false);
      this.dispatchEvent(new QuietCloseEvent());
    }
  }
  /** Scrolls the dialog's body to the specified position. */
  scrollBodyTo(options) {
    this.body.scrollTo(options);
  }
  render() {
    return x`
      <dialog
        id="dialog"
        part="dialog"
        class=${e({
      "has-header": this.slotsWithContent.has("header"),
      "has-footer": this.slotsWithContent.has("footer")
    })}
        data-placement=${this.placement}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
        @cancel=${this.handleDialogCancel}
      >
        ${this.whenSlotted(
      "header",
      x`
            <header id="header" part="header">
              <slot name="header"></slot>
              <slot id="actions" name="actions">
                <quiet-button
                  slot="header"
                  appearance="text"
                  icon-label=${this.localize.term("close")}
                  data-dialog="close"
                >
                  <quiet-icon library="system" name="x"></quiet-icon>
                </quiet-button>
              </slot>
            </header>
          `
    )}

        <div id="body" part="body">
          <slot></slot>
        </div>

        ${this.whenSlotted("footer", x`<footer id="footer" part="footer"><slot name="footer"></slot></footer>`)}
      </dialog>
    `;
  }
};
QuietDialog.observeSlots = true;
QuietDialog.styles = [host_styles_default, dialog_styles_default];
__decorateClass([
  e2("#body")
], QuietDialog.prototype, "body", 2);
__decorateClass([
  e2("#dialog")
], QuietDialog.prototype, "dialog", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietDialog.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], QuietDialog.prototype, "placement", 2);
__decorateClass([
  n({ attribute: "light-dismiss", type: Boolean })
], QuietDialog.prototype, "lightDismiss", 2);
__decorateClass([
  n({ attribute: "reset-scroll", type: Boolean })
], QuietDialog.prototype, "resetScroll", 2);
QuietDialog = __decorateClass([
  t("quiet-dialog")
], QuietDialog);
document.addEventListener("click", (event) => {
  const dialogAttrEl = event.target.closest("[data-dialog]");
  if (dialogAttrEl instanceof Element) {
    const [command, id] = parseDelimitedTokens(dialogAttrEl.getAttribute("data-dialog") || "");
    if (command === "open" && id?.length) {
      const doc = dialogAttrEl.getRootNode();
      const dialog = doc.getElementById(id);
      if (dialog?.localName === "quiet-dialog") {
        dialog.open = true;
      } else {
        console.warn(`A dialog with an ID of "${id}" could not be found in this document.`);
      }
    }
  }
});
document.addEventListener("pointerdown", () => {
});
export {
  QuietDialog
};
