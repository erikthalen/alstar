/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.E664LIJK.js";
import "../../chunks/chunk.Y7YAVZIV.js";
import {
  toast_styles_default
} from "../../chunks/chunk.Y5USKXGD.js";
import "../../chunks/chunk.432TCTLR.js";
import "../../chunks/chunk.KVDSXI7U.js";
import "../../chunks/chunk.E3TZY3YH.js";
import "../../chunks/chunk.TDJABKBP.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietElement,
  e,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  escapeHtml
} from "../../chunks/chunk.I7GB4RJG.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import "../../chunks/chunk.N7C6RCMV.js";
import "../../chunks/chunk.VBE24RWL.js";
import {
  QuietBeforeCloseEvent,
  QuietCloseEvent
} from "../../chunks/chunk.7FX3JPOE.js";
import "../../chunks/chunk.CVGUOSSL.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  o
} from "../../chunks/chunk.YELHYMJQ.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  B,
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import "../../chunks/chunk.GFJJN7YE.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/toast/toast.ts
var QuietToast = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isStackShowing = false;
    this.placement = "bottom-end";
    /** Listen for Escape anywhere in the document */
    this.handleDocumentKeyDown = async (event) => {
      await new Promise(requestAnimationFrame);
      if (event.key === "Escape" && this.children.length > 0 && !event.defaultPrevented) {
        event.preventDefault();
        await this.stack.transitionComplete();
        const notification = this.children[this.children.length - 1];
        notification?.remove();
      }
    };
    /** Update the positions when scrolling */
    this.handleDocumentScroll = () => {
      this.stack.updateElementPositions();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.popover = "manual";
  }
  updated(changedProperties) {
    if (changedProperties.has("placement")) {
      this.stack.updateElementPositions();
    }
  }
  /** Watch for clicks inside the stack */
  handleClick(event) {
    const target = event.target;
    const notification = target.closest(".notification");
    if (notification && target.closest('[data-toast="close"]')) {
      this.transitionGroup.transitionComplete().then(() => {
        notification?.remove();
      });
    }
  }
  /** Called when the transition group detects content changes. */
  handleContentChanged(event) {
    const mutations = event.detail.mutations;
    mutations.forEach((mutation) => {
      mutation.removedNodes.forEach(async (node) => {
        if (node instanceof Element && node.localName === "quiet-toast-item") {
          node.dispatchEvent(new QuietBeforeCloseEvent({ source: null }, { cancelable: false }));
          await this.stack.transitionComplete();
          node.dispatchEvent(new QuietCloseEvent());
        }
      });
    });
  }
  /** Hides the stack when the last notification has transitioned out */
  async handleTransitionEnd() {
    await new Promise(requestAnimationFrame);
    if (this.children.length === 0) {
      this.hideStack();
    }
  }
  /** Hides the toast stack. Call this after all notifications have been removed. */
  hideStack() {
    this.hidePopover();
    this.isStackShowing = false;
    this.customStates.set("visible", false);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("scroll", this.handleDocumentScroll);
  }
  /** Shows the toast stack in preparation for a notification. */
  showStack() {
    if (this.isStackShowing) return;
    this.isStackShowing = true;
    this.customStates.set("visible", true);
    this.showPopover();
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("scroll", this.handleDocumentScroll, { passive: true });
  }
  /**
   * Creates a toast notification and adds it to the stack. Returns a reference to the created toast item.
   */
  async create(content, options) {
    const opts = {
      allowHtml: false,
      noCloseButton: false,
      variant: "neutral",
      duration: 5e3,
      ...options
    };
    const toastItemHtml = x`
      <quiet-toast-item variant=${opts.variant} duration=${opts.duration} ?without-close=${opts.noCloseButton}>
        ${opts.allowHtml ? o(content) : content}
      </quiet-toast-item>
    `;
    this.showStack();
    await this.transitionGroup.transitionComplete();
    const tempDiv = document.createElement("div");
    B(toastItemHtml, tempDiv);
    const toastItem = tempDiv.firstElementChild;
    this.prepend(toastItem);
    toastItem.startTimer();
    return toastItem;
  }
  /**
   * Creates a toast notification using an existing `<quiet-toast-item>` element. Useful if you want to create your own
   * toast items declaratively. Returns a reference to the cloned toast item.
   */
  async createFromTemplate(template) {
    if (template.localName !== "template") {
      console.warn("Only <template> elements can be passed to to createFromTemplate().", this);
      return;
    }
    const clone = template.content.cloneNode(true);
    const toastItem = clone.querySelector("quiet-toast-item");
    if (toastItem?.localName !== "quiet-toast-item") {
      console.warn("No <quiet-toast-item> element was found in the template passed to createFromTemplate().", this);
      return;
    }
    this.showStack();
    await this.transitionGroup.transitionComplete();
    this.prepend(toastItem);
    toastItem.startTimer();
    return toastItem;
  }
  /** Removes all elements from the toast stack and turns when the remove transition finishes. */
  async empty() {
    await this.stack.transitionComplete();
    this.innerHTML = "";
    await this.stack.transitionComplete();
  }
  /** Escapes HTML special characters in the given string. */
  async escapeHtml(html) {
    return escapeHtml(html);
  }
  render() {
    return x`
      <slot></slot>

      <quiet-transition-group
        id="stack"
        role="log"
        aria-relevant="additions"
        .transitionAnimation=${this.transitionAnimation}
        .transitionContainer=${this}
        @click=${this.handleClick}
        @quiet-transition-end=${this.handleTransitionEnd}
        @quiet-content-changed=${this.handleContentChanged}
      ></quiet-transition-group>
    `;
  }
};
QuietToast.styles = [host_styles_default, toast_styles_default];
__decorateClass([
  e("#stack")
], QuietToast.prototype, "stack", 2);
__decorateClass([
  e("quiet-transition-group")
], QuietToast.prototype, "transitionGroup", 2);
__decorateClass([
  r()
], QuietToast.prototype, "transitionAnimation", 2);
__decorateClass([
  n({ reflect: true })
], QuietToast.prototype, "placement", 2);
QuietToast = __decorateClass([
  t("quiet-toast")
], QuietToast);
export {
  QuietToast
};
