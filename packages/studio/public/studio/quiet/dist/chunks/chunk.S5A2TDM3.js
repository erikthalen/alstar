/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  accordion_item_styles_default
} from "./chunk.WOF2NWXT.js";
import {
  QuietElement,
  e as e2,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  parseCssDuration
} from "./chunk.VBE24RWL.js";
import {
  e
} from "./chunk.E6M524BP.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/accordion-item/accordion-item.ts
var QuietAccordionItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.expanded = false;
    this.appearance = "normal";
    this.iconPlacement = "end";
    this.disabled = false;
  }
  /** Sets focus to the accordion item. */
  focus() {
    this.header.focus();
  }
  /** Removes focus from the accordion item. */
  blur() {
    this.header.blur();
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("expanded")) {
      this.customStates.set("expanded", this.expanded);
    }
  }
  /** Animate the expansion of the body - called by the accordion controller */
  async animateExpand() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const computedStyle = getComputedStyle(this);
    const duration = prefersReducedMotion ? 0 : parseCssDuration(computedStyle.getPropertyValue("--duration"));
    const easing = computedStyle.getPropertyValue("--easing");
    this.body.style.height = "0px";
    this.body.style.overflow = "hidden";
    const targetHeight = this.content.scrollHeight;
    await this.body.animate([{ height: "0px" }, { height: `${targetHeight}px` }], { duration, easing }).finished;
    this.body.style.removeProperty("height");
    this.body.style.removeProperty("overflow");
  }
  /** Animate the collapse of the body - called by the accordion controller */
  async animateCollapse() {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const computedStyle = getComputedStyle(this);
    const duration = prefersReducedMotion ? 0 : parseCssDuration(computedStyle.getPropertyValue("--duration"));
    const easing = computedStyle.getPropertyValue("--easing");
    if (this.body && (!this.body.style.height || this.body.style.height === "auto")) {
      this.body.style.height = `${this.body.scrollHeight}px`;
      this.body.offsetHeight;
    }
    const currentHeight = this.body.scrollHeight;
    this.body.style.height = `${currentHeight}px`;
    this.body.style.overflow = "hidden";
    await this.body.animate([{ height: `${currentHeight}px` }, { height: "0px" }], { duration, easing }).finished;
    this.body.style.removeProperty("height");
    this.body.style.removeProperty("overflow");
  }
  render() {
    return x`
      <header
        id="header"
        part="header"
        class=${e({
      "icon-start": this.iconPlacement === "start",
      "icon-end": this.iconPlacement === "end"
    })}
        tabindex=${this.disabled ? -1 : 0}
        role="button"
        aria-controls="body"
        aria-expanded=${this.expanded ? "true" : "false"}
        aria-disabled=${this.disabled ? "true" : "false"}
      >
        <div id="label" part="label">
          <slot name="label">${this.label}</slot>
        </div>
        <div id="icon" part="icon">
          <slot name="icon">
            <quiet-icon id="default-icon" library="system" name="chevron-down"></quiet-icon>
          </slot>
        </div>
      </header>

      <div id="body" part="body" aria-hidden=${this.expanded ? "false" : "true"}>
        <div id="content" part="content">
          <slot></slot>
        </div>
      </div>
    `;
  }
};
QuietAccordionItem.styles = [host_styles_default, accordion_item_styles_default];
__decorateClass([
  e2("#body")
], QuietAccordionItem.prototype, "body", 2);
__decorateClass([
  e2("#content")
], QuietAccordionItem.prototype, "content", 2);
__decorateClass([
  e2("#header")
], QuietAccordionItem.prototype, "header", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietAccordionItem.prototype, "expanded", 2);
__decorateClass([
  n()
], QuietAccordionItem.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietAccordionItem.prototype, "appearance", 2);
__decorateClass([
  n({ attribute: "icon-placement", reflect: true })
], QuietAccordionItem.prototype, "iconPlacement", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietAccordionItem.prototype, "disabled", 2);
QuietAccordionItem = __decorateClass([
  t("quiet-accordion-item")
], QuietAccordionItem);

export {
  QuietAccordionItem
};
