/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  navicon_styles_default
} from "../../chunks/chunk.5AVSHFC7.js";
import {
  u
} from "../../chunks/chunk.ZCPQX3DA.js";
import {
  QuietElement,
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
  QuietBlurEvent,
  QuietFocusEvent
} from "../../chunks/chunk.E7L7Q2A4.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/navicon/navicon.ts
var QuietNavicon = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.expanded = false;
    this.symbol = "hamburger";
    this.disabled = false;
    this.label = "Toggle navigation";
    this.handleBlur = () => {
      this.customStates.set("focused", false);
      this.dispatchEvent(new QuietBlurEvent());
    };
    this.handleFocus = () => {
      this.customStates.set("focused", true);
      this.dispatchEvent(new QuietFocusEvent());
    };
    this.handleClick = (event) => {
      if (this.disabled) {
        event.preventDefault();
        event.stopImmediatePropagation();
        return;
      }
      this.expanded = !this.expanded;
    };
    this.handleKeyDown = (event) => {
      if (this.disabled) {
        event.preventDefault();
        return;
      }
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        this.expanded = !this.expanded;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "button");
    this.setAttribute("tabindex", this.disabled ? "-1" : "0");
    this.addEventListener("blur", this.handleBlur);
    this.addEventListener("focus", this.handleFocus);
    this.addEventListener("click", this.handleClick);
    this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("blur", this.handleBlur);
    this.removeEventListener("focus", this.handleFocus);
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
  }
  updated(changedProperties) {
    if (changedProperties.has("expanded")) {
      this.customStates.set("expanded", this.expanded);
      this.setAttribute("aria-expanded", this.expanded ? "true" : "false");
    }
    if (changedProperties.has("for")) {
      this.setAttribute("aria-controls", this.for);
    }
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label || this.localize.term("toggleNavigation"));
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      this.setAttribute("tabindex", this.disabled ? "-1" : "0");
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
    }
  }
  render() {
    return u`
      <span
        class=${e({
      lines: this.symbol === "hamburger" || this.symbol === "equals",
      dots: this.symbol === "vertical-dots" || this.symbol === "horizontal-dots",
      "vertical-dots": this.symbol === "vertical-dots",
      "horizontal-dots": this.symbol === "horizontal-dots",
      hamburger: this.symbol === "hamburger",
      equals: this.symbol === "equals"
    })}
      >
        <span part="line line-top" class="line top"></span>
        ${["hamburger", "vertical-dots", "horizontal-dots"].includes(this.symbol) ? u`<span part="line line-middle" class="line middle"></span>` : ""}
        <span part="line line-bottom" class="line bottom"></span>
      </span>
    `;
  }
};
QuietNavicon.styles = [host_styles_default, navicon_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietNavicon.prototype, "for", 2);
__decorateClass([
  n({ reflect: true, type: Boolean })
], QuietNavicon.prototype, "expanded", 2);
__decorateClass([
  n({ reflect: true })
], QuietNavicon.prototype, "symbol", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietNavicon.prototype, "disabled", 2);
__decorateClass([
  n()
], QuietNavicon.prototype, "label", 2);
QuietNavicon = __decorateClass([
  t("quiet-navicon")
], QuietNavicon);
export {
  QuietNavicon
};
