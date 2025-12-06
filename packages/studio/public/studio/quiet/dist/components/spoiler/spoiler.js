/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  spoiler_styles_default
} from "../../chunks/chunk.7M5UOCSV.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  QuietElement,
  e as e2,
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
import "../../chunks/chunk.RT7RKCPI.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/spoiler/spoiler.ts
var QuietSpoiler = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.visible = false;
    this.inline = false;
    this.persist = false;
    this.effect = "blur";
    this.name = "";
  }
  firstUpdated() {
    this.setAttribute("role", "group");
    this.setAttribute("aria-label", this.localize.term("spoiler"));
  }
  updated(changedProperties) {
    if (changedProperties.has("visible") && this.visible && this.name) {
      const doc = this.getRootNode();
      doc.querySelectorAll(`quiet-spoiler[name=${this.name}]`).forEach((spoiler) => {
        if (spoiler !== this) spoiler.visible = false;
      });
    }
  }
  handleButtonClick() {
    const buttonToFocus = this.visible ? this.cover : this.hideButton;
    this.visible = !this.visible;
    this.updateComplete.then(() => buttonToFocus?.focus({ preventScroll: true }));
  }
  handleKeyDown(event) {
    if (event.key === "Escape") {
      event.stopPropagation();
      this.visible = false;
    }
  }
  render() {
    return x`
      <button
        id="cover"
        part="cover"
        class=${e({
      blur: this.effect === "blur",
      solid: this.effect === "solid",
      noise: this.effect === "noise"
    })}
        type="button"
        aria-expanded=${this.visible ? "true" : "false"}
        ?inert=${this.visible}
        @click=${this.handleButtonClick}
      >
        <span id="label" part="label">
          <slot name="label">${this.label || this.localize.term("show")}</slot>
        </span>
      </button>

      ${this.persist ? "" : x`
            <button
              id="hide-button"
              part="hide-button"
              type="button"
              aria-expanded=${this.visible ? "true" : "false"}
              ?inert=${!this.visible}
              @click=${this.handleButtonClick}
              @keydown=${this.handleKeyDown}
            >
              <quiet-icon
                part="hide-icon"
                exportparts="svg:hide-icon__svg"
                library="system"
                name="x"
                label=${this.localize.term("hide")}
              ></quiet-icon>
            </button>
          `}

      <div part="content" id="content" ?inert=${!this.visible}>
        <slot></slot>
      </div>
    `;
  }
};
QuietSpoiler.styles = [host_styles_default, spoiler_styles_default];
__decorateClass([
  e2("#hide-button")
], QuietSpoiler.prototype, "hideButton", 2);
__decorateClass([
  e2("#cover")
], QuietSpoiler.prototype, "cover", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSpoiler.prototype, "visible", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSpoiler.prototype, "inline", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietSpoiler.prototype, "persist", 2);
__decorateClass([
  n({ reflect: true })
], QuietSpoiler.prototype, "effect", 2);
__decorateClass([
  n()
], QuietSpoiler.prototype, "label", 2);
__decorateClass([
  n()
], QuietSpoiler.prototype, "name", 2);
QuietSpoiler = __decorateClass([
  t("quiet-spoiler")
], QuietSpoiler);
export {
  QuietSpoiler
};
