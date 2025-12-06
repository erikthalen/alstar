/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  popover_styles_default
} from "../../chunks/chunk.YBV7P4TG.js";
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift
} from "../../chunks/chunk.FWK2CT6L.js";
import {
  createId
} from "../../chunks/chunk.ELBGBFBV.js";
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
  animateWithClass
} from "../../chunks/chunk.VBE24RWL.js";
import {
  QuietBeforeCloseEvent,
  QuietBeforeOpenEvent,
  QuietCloseEvent,
  QuietOpenEvent
} from "../../chunks/chunk.7FX3JPOE.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/popover/popover.ts
var openPopovers = /* @__PURE__ */ new Set();
var QuietPopover = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.open = false;
    this.placement = "top";
    this.distance = 8;
    this.offset = 0;
    this.withoutArrow = false;
    this.handleAnchorClick = () => {
      this.open = !this.open;
    };
    /** When a key is pressed when the popover is open. */
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        this.open = false;
        this.anchor?.focus();
      }
    };
    this.handleDocumentClick = (event) => {
      if (this.anchor && event.composedPath().includes(this.anchor)) {
        return;
      }
      if (!event.composedPath().includes(this)) {
        this.open = false;
      }
    };
  }
  firstUpdated() {
    if (!this.id) {
      this.id = createId("quiet-popover-");
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      if (this.open && !this.dialog.classList.contains("visible")) {
        this.show();
      } else {
        this.hide();
      }
    }
    if (changedProperties.has("for")) {
      const root = this.getRootNode();
      if (this.anchor) {
        this.anchor.removeEventListener("click", this.handleAnchorClick);
      }
      this.anchor = this.for ? root.getElementById(this.for) : null;
      if (this.anchor) {
        this.anchor.addEventListener("click", this.handleAnchorClick);
        if (this.anchor.localName === "quiet-button") {
          customElements.whenDefined("quiet-button").then(() => {
            this.anchor.updateComplete.then(() => {
              const nativeButton = this.anchor.shadowRoot.querySelector("button");
              nativeButton?.setAttribute("aria-haspopup", "dialog");
            });
          });
        } else {
          this.anchor.setAttribute("aria-haspopup", "dialog");
        }
      } else if (this.for) {
        console.warn(
          `A popover was assigned to an element with an ID of "${this.for}" but the element could not be found.`,
          this
        );
      }
    }
  }
  handleDialogClick(event) {
    const target = event.target;
    const button = target.closest('[data-popover="close"]');
    if (button) {
      event.stopPropagation();
      this.open = false;
    }
  }
  /** Shows the popover. This should only be called from within updated(). */
  async show() {
    if (!this.anchor) {
      return;
    }
    const openEvent = new QuietBeforeOpenEvent();
    this.dispatchEvent(openEvent);
    if (openEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    openPopovers.forEach((popover) => {
      if (!popover.contains(this)) {
        popover.open = false;
      }
    });
    if (!this.dialog.isConnected) return;
    this.dialog.showPopover();
    this.customStates.set("open", true);
    this.open = true;
    openPopovers.add(this);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("click", this.handleDocumentClick);
    this.dialog.classList.add("visible");
    this.cleanup = autoUpdate(this.anchor, this.dialog, () => this.reposition());
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
  /** Hides the popover. This should only be called from within updated(). */
  async hide() {
    const closeEvent = new QuietBeforeCloseEvent({ source: this });
    this.dispatchEvent(closeEvent);
    if (closeEvent.defaultPrevented) {
      this.open = true;
      return;
    }
    this.customStates.set("open", false);
    this.open = false;
    openPopovers.delete(this);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("click", this.handleDocumentClick);
    if (this.dialog.classList.contains("visible")) {
      await animateWithClass(this.dialog, "hide");
      this.dialog.classList.remove("visible");
      this.dialog.hidePopover();
      this.dispatchEvent(new QuietCloseEvent());
    }
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = void 0;
      this.removeAttribute("data-placement");
    }
  }
  /** Repositions the popover */
  reposition() {
    if (!this.anchor) return;
    computePosition(this.anchor, this.dialog, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.offset }),
        flip(),
        shift(),
        arrow({ element: this.arrow })
      ]
    }).then(({ x: x2, y, middlewareData, placement }) => {
      this.setAttribute("data-placement", placement);
      Object.assign(this.dialog.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
      if (middlewareData.arrow) {
        const arrowX = middlewareData.arrow.x;
        const arrowY = middlewareData.arrow.y;
        const staticSide = { top: "bottom", right: "left", bottom: "top", left: "right" }[placement.split("-")[0]];
        Object.assign(this.arrow.style, {
          left: typeof arrowX === "number" ? `${arrowX}px` : "",
          top: typeof arrowY === "number" ? `${arrowY}px` : "",
          [staticSide]: "calc(var(--arrow-diagonal-size) * -1)"
        });
      }
    });
  }
  render() {
    return x`
      <dialog id="dialog" part="dialog" popover="manual" @click=${this.handleDialogClick}>
        <div id="content" part="content">
          <slot></slot>
        </div>
        <div id="arrow" part="arrow" role="presentation" ?hidden=${this.withoutArrow}></div>
      </dialog>
    `;
  }
};
QuietPopover.styles = [host_styles_default, popover_styles_default];
__decorateClass([
  e("#arrow")
], QuietPopover.prototype, "arrow", 2);
__decorateClass([
  e("#dialog")
], QuietPopover.prototype, "dialog", 2);
__decorateClass([
  n({ reflect: true })
], QuietPopover.prototype, "for", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietPopover.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], QuietPopover.prototype, "placement", 2);
__decorateClass([
  n({ type: Number })
], QuietPopover.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], QuietPopover.prototype, "offset", 2);
__decorateClass([
  n({ attribute: "without-arrow", type: Boolean, reflect: true })
], QuietPopover.prototype, "withoutArrow", 2);
QuietPopover = __decorateClass([
  t("quiet-popover")
], QuietPopover);
export {
  QuietPopover
};
