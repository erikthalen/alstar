/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  expander_styles_default
} from "../../chunks/chunk.45DUJIXW.js";
import {
  QuietElement,
  e,
  n,
  t,
  t2
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
  parseCssDuration
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

// src/components/expander/expander.ts
var QuietExpander = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.expanded = false;
    this.disabled = false;
    this.withoutShadow = false;
  }
  /** Update max-height when the expanded property changes */
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("expanded")) {
      this.customStates.set("expanded", this.expanded);
    }
  }
  handleClick() {
    this.toggleExpanded(true);
  }
  handleContentScroll() {
    if (!this.expanded) {
      this.content.scrollTop = 0;
    }
  }
  /** Toggle the expanded state */
  async toggleExpanded(wasUserInteraction = false) {
    const willExpand = !this.expanded;
    if (wasUserInteraction) {
      const beforeEvent = willExpand ? new QuietBeforeOpenEvent() : new QuietBeforeCloseEvent({ source: this });
      this.dispatchEvent(beforeEvent);
      if (beforeEvent.defaultPrevented) {
        return;
      }
    }
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const computedStyle = getComputedStyle(this);
    const duration = prefersReducedMotion ? 0 : parseCssDuration(computedStyle.getPropertyValue("--duration"));
    const easing = computedStyle.getPropertyValue("--easing");
    const currentHeight = this.content.clientHeight;
    this.expanded = willExpand;
    if (willExpand) {
      const targetHeight = this.content.scrollHeight;
      await this.content.animate(
        [
          { height: `${currentHeight}px`, overflow: "hidden" },
          { height: `${targetHeight}px`, overflow: "hidden" }
        ],
        {
          duration,
          easing
        }
      ).finished;
    } else {
      this.content.style.maxHeight = "var(--preview-height)";
      this.content.style.overflow = "hidden";
      const targetHeight = this.content.clientHeight;
      this.content.style.removeProperty("max-height");
      this.content.style.removeProperty("overflow");
      await this.content.animate(
        [
          { height: `${currentHeight}px`, maxHeight: "none", overflow: "hidden" },
          { height: `${targetHeight}px`, maxHeight: "none", overflow: "hidden" }
        ],
        {
          duration,
          easing
        }
      ).finished;
    }
    if (wasUserInteraction) {
      this.dispatchEvent(willExpand ? new QuietOpenEvent() : new QuietCloseEvent());
    }
  }
  render() {
    return x`
      <div id="content" part="content" role="region" aria-labelledby="trigger" @scroll=${this.handleContentScroll}>
        <slot></slot>
        ${this.withoutShadow ? "" : x`<div id="shadow" part="shadow" aria-hidden="true"></div>`}
      </div>

      <button
        id="trigger"
        part="trigger"
        aria-expanded="${this.expanded}"
        aria-controls="content"
        ?disabled=${this.disabled}
        @click="${this.handleClick}"
      >
        ${this.expanded ? x`<slot name="collapse-label">${this.localize.term("collapse")}</slot>` : x`<slot name="expand-label">${this.localize.term("expand")}</slot>`}
      </button>
    `;
  }
};
QuietExpander.styles = [host_styles_default, expander_styles_default];
__decorateClass([
  e("#content")
], QuietExpander.prototype, "content", 2);
__decorateClass([
  e("#trigger")
], QuietExpander.prototype, "trigger", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietExpander.prototype, "expanded", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietExpander.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "without-shadow", type: Boolean })
], QuietExpander.prototype, "withoutShadow", 2);
__decorateClass([
  t2({ passive: true })
], QuietExpander.prototype, "handleContentScroll", 1);
QuietExpander = __decorateClass([
  t("quiet-expander")
], QuietExpander);
export {
  QuietExpander
};
