/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  tooltip_styles_default
} from "./chunk.Q5CORD2V.js";
import {
  arrow,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift
} from "./chunk.FWK2CT6L.js";
import {
  createId
} from "./chunk.ELBGBFBV.js";
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
  animateWithClass
} from "./chunk.VBE24RWL.js";
import {
  QuietBeforeCloseEvent,
  QuietBeforeOpenEvent,
  QuietCloseEvent,
  QuietOpenEvent
} from "./chunk.7FX3JPOE.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/tooltip/tooltip.ts
var openTooltips = /* @__PURE__ */ new Set();
var QuietTooltip = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isAnchorFocused = false;
    this.open = false;
    this.placement = "top";
    this.distance = 8;
    this.offset = 0;
    this.openDelay = 50;
    this.closeDelay = 100;
    this.activation = "auto";
    this.withoutArrow = false;
    /** When the anchor loses focus, hide the tooltip. */
    this.handleAnchorBlur = () => {
      this.isAnchorFocused = false;
      this.open = false;
    };
    /** When the anchor receives focus, show the tooltip. */
    this.handleAnchorFocus = () => {
      this.isAnchorFocused = true;
      this.open = true;
    };
    /** When the anchor is clicked, dismiss the tooltip. */
    this.handleAnchorPointerUp = () => {
      this.userDismiss();
    };
    /** When the pointer enters the anchor. */
    this.handleAnchorPointerEnter = (event) => {
      if (event.pointerType === "touch") return;
      if (!this.hoverInTimeout) {
        this.hoverInTimeout = setTimeout(() => {
          this.hoverInTimeout = void 0;
          this.open = true;
        }, this.openDelay);
      }
    };
    /** When the pointer leaves the anchor. */
    this.handleAnchorPointerLeave = () => {
      clearTimeout(this.hoverInTimeout);
      this.hoverInTimeout = void 0;
    };
    /** When the pointer moves while the tooltip is visible. */
    this.handleDocumentPointerMove = (event) => {
      if (!this.anchor || this.isAnchorFocused) return;
      const isHoveringAnchor = event.composedPath().includes(this.anchor);
      const isHoveringTooltip = event.composedPath().includes(this.tooltip);
      if (isHoveringAnchor || isHoveringTooltip) {
        clearTimeout(this.hoverOutTimeout);
        this.hoverOutTimeout = void 0;
        return;
      }
      if (!this.hoverOutTimeout) {
        this.hoverOutTimeout = setTimeout(() => {
          this.hoverOutTimeout = void 0;
          this.open = false;
        }, this.closeDelay);
      }
    };
    /** When a key is pressed when the tooltip is open. */
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        this.userDismiss();
      }
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.hoverInTimeout);
    clearInterval(this.hoverOutTimeout);
  }
  firstUpdated() {
    if (!this.id) {
      this.id = createId("quiet-tooltip-");
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      if (this.open && !this.tooltip.classList.contains("visible")) {
        this.show();
      } else {
        this.hide();
      }
    }
    if (changedProperties.has("for") || changedProperties.has("activation")) {
      const root = this.getRootNode();
      if (this.anchor) {
        this.anchor.removeAttribute("aria-describedby");
        this.anchor.removeEventListener("pointerenter", this.handleAnchorPointerEnter);
        this.anchor.removeEventListener("pointerleave", this.handleAnchorPointerLeave);
        this.anchor.removeEventListener("pointerup", this.handleAnchorPointerUp);
        this.anchor.removeEventListener("focus", this.handleAnchorFocus);
        this.anchor.removeEventListener("blur", this.handleAnchorBlur);
      }
      this.anchor = this.for ? root.getElementById(this.for) : null;
      if (this.anchor) {
        if (this.activation === "auto") {
          this.anchor.addEventListener("pointerenter", this.handleAnchorPointerEnter);
          this.anchor.addEventListener("pointerleave", this.handleAnchorPointerLeave);
          this.anchor.addEventListener("pointerup", this.handleAnchorPointerUp);
          this.anchor.addEventListener("focus", this.handleAnchorFocus);
          this.anchor.addEventListener("blur", this.handleAnchorBlur);
        }
        if (this.anchor.localName === "quiet-button") {
          this.removeAttribute("role");
          this.setAttribute("aria-hidden", "true");
          this.anchor.removeAttribute("aria-describedby");
        } else {
          this.setAttribute("role", "tooltip");
          this.removeAttribute("aria-hidden");
          this.anchor?.setAttribute("aria-describedby", this.id);
        }
      } else if (this.for) {
        console.warn(
          `A tooltip was assigned to an element with an ID of "${this.for}" but the element could not be found.`,
          this
        );
      }
    }
  }
  /** Shows the tooltip. This should only be called from within updated(). */
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
    if (this.anchor?.localName === "quiet-button") {
      const button = this.anchor.shadowRoot.querySelector('[part~="button"]');
      button?.setAttribute("aria-description", String(this.textContent));
    }
    openTooltips.forEach((tooltip) => {
      if (tooltip.activation !== "manual") {
        tooltip.open = false;
      }
    });
    if (!this.tooltip.isConnected) return;
    this.tooltip.showPopover();
    this.customStates.set("open", true);
    this.open = true;
    openTooltips.add(this);
    if (this.activation === "auto") {
      document.addEventListener("keydown", this.handleDocumentKeyDown);
      document.addEventListener("pointermove", this.handleDocumentPointerMove);
    }
    this.tooltip.classList.add("visible");
    this.cleanup = autoUpdate(this.anchor, this.tooltip, () => this.reposition());
    await animateWithClass(this.tooltip, "show");
    this.dispatchEvent(new QuietOpenEvent());
  }
  /** Hides the tooltip. This should only be called from within updated(). */
  async hide() {
    const closeEvent = new QuietBeforeCloseEvent({ source: this });
    this.dispatchEvent(closeEvent);
    if (closeEvent.defaultPrevented) {
      this.open = true;
      return;
    }
    if (this.anchor?.localName === "quiet-button") {
      const button = this.anchor.shadowRoot.querySelector('[part~="button"]');
      button?.removeAttribute("aria-description");
    }
    this.customStates.set("open", false);
    this.open = false;
    openTooltips.delete(this);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("pointermove", this.handleDocumentPointerMove);
    if (this.tooltip.classList.contains("visible")) {
      await animateWithClass(this.tooltip, "hide");
      this.tooltip.classList.remove("visible");
      this.tooltip.hidePopover();
      this.dispatchEvent(new QuietCloseEvent());
    }
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = void 0;
      this.removeAttribute("data-placement");
    }
  }
  /** Called when the user manually dismisses the tooltip by clicking or pressing escape. */
  userDismiss() {
    if (this.open) {
      this.isAnchorFocused = false;
      this.open = false;
    }
  }
  /** @internal Repositions the tooltip */
  reposition() {
    if (!this.anchor) return;
    computePosition(this.anchor, this.tooltip, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.offset }),
        flip(),
        shift(),
        arrow({ element: this.arrow })
      ]
    }).then(({ x: x2, y, middlewareData, placement }) => {
      this.setAttribute("data-placement", placement);
      Object.assign(this.tooltip.style, {
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
    requestAnimationFrame(() => {
      if (!this.anchor) return;
      const anchorCoords = this.anchor.getBoundingClientRect();
      const tooltipCoords = this.tooltip.getBoundingClientRect();
      const isVertical = this.placement.includes("top") || this.placement.includes("bottom");
      if (isVertical) {
        const topEl = anchorCoords.top < tooltipCoords.top ? anchorCoords : tooltipCoords;
        const bottomEl = anchorCoords.top < tooltipCoords.top ? tooltipCoords : anchorCoords;
        this.polygon.style.setProperty("--polygon-x1", `${topEl.left}px`);
        this.polygon.style.setProperty("--polygon-y1", `${topEl.bottom}px`);
        this.polygon.style.setProperty("--polygon-x2", `${topEl.right}px`);
        this.polygon.style.setProperty("--polygon-y2", `${topEl.bottom}px`);
        this.polygon.style.setProperty("--polygon-x3", `${bottomEl.right}px`);
        this.polygon.style.setProperty("--polygon-y3", `${bottomEl.top}px`);
        this.polygon.style.setProperty("--polygon-x4", `${bottomEl.left}px`);
        this.polygon.style.setProperty("--polygon-y4", `${bottomEl.top}px`);
      } else {
        const leftEl = anchorCoords.left < tooltipCoords.left ? anchorCoords : tooltipCoords;
        const rightEl = anchorCoords.left < tooltipCoords.left ? tooltipCoords : anchorCoords;
        this.polygon.style.setProperty("--polygon-x1", `${leftEl.right}px`);
        this.polygon.style.setProperty("--polygon-y1", `${leftEl.top}px`);
        this.polygon.style.setProperty("--polygon-x2", `${rightEl.left}px`);
        this.polygon.style.setProperty("--polygon-y2", `${rightEl.top}px`);
        this.polygon.style.setProperty("--polygon-x3", `${rightEl.left}px`);
        this.polygon.style.setProperty("--polygon-y3", `${rightEl.bottom}px`);
        this.polygon.style.setProperty("--polygon-x4", `${leftEl.right}px`);
        this.polygon.style.setProperty("--polygon-y4", `${leftEl.bottom}px`);
      }
    });
  }
  render() {
    return x`
      <div id="tooltip" part="tooltip" popover="manual">
        <div id="content" part="content">
          <slot></slot>
        </div>
        <div id="arrow" part="arrow" role="presentation" ?hidden=${this.withoutArrow}></div>
        <div id="polygon" role="presentation"></div>
      </div>
    `;
  }
};
QuietTooltip.styles = [host_styles_default, tooltip_styles_default];
__decorateClass([
  e("#arrow")
], QuietTooltip.prototype, "arrow", 2);
__decorateClass([
  e("#polygon")
], QuietTooltip.prototype, "polygon", 2);
__decorateClass([
  e("#tooltip")
], QuietTooltip.prototype, "tooltip", 2);
__decorateClass([
  n({ reflect: true })
], QuietTooltip.prototype, "for", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTooltip.prototype, "open", 2);
__decorateClass([
  n({ reflect: true })
], QuietTooltip.prototype, "placement", 2);
__decorateClass([
  n({ type: Number })
], QuietTooltip.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], QuietTooltip.prototype, "offset", 2);
__decorateClass([
  n({ attribute: "open-delay", type: Number })
], QuietTooltip.prototype, "openDelay", 2);
__decorateClass([
  n({ attribute: "close-delay", type: Number })
], QuietTooltip.prototype, "closeDelay", 2);
__decorateClass([
  n()
], QuietTooltip.prototype, "activation", 2);
__decorateClass([
  n({ attribute: "without-arrow", type: Boolean, reflect: true })
], QuietTooltip.prototype, "withoutArrow", 2);
QuietTooltip = __decorateClass([
  t("quiet-tooltip")
], QuietTooltip);

export {
  QuietTooltip
};
