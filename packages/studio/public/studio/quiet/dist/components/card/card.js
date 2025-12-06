/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  card_styles_default
} from "../../chunks/chunk.MRMELUFV.js";
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
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/card/card.ts
var QuietCard = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.appearance = "normal";
    this.orientation = "vertical";
  }
  render() {
    return x`
      ${this.whenSlotted("media", x`<div id="media" part="media"><slot name="media"></slot></div>`)}
      ${this.whenSlotted(
      "header",
      x`
          <header id="header" part="header">
            <slot name="header"></slot>
            ${this.orientation === "vertical" ? x`<div id="actions" part="actions"><slot name="actions"></slot></div>` : ""}
          </header>
        `
    )}

      <div id="body" part="body">
        <slot></slot>
      </div>

      ${this.whenSlotted(
      "footer",
      x`
          <footer id="footer" part="footer">
            <slot name="footer"></slot>
          </footer>
        `
    )}
      ${this.orientation === "horizontal" ? this.whenSlotted("actions", x`<div id="actions" part="actions"><slot name="actions"></slot></div>`) : ""}
    `;
  }
};
QuietCard.observeSlots = true;
QuietCard.styles = [host_styles_default, card_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietCard.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietCard.prototype, "orientation", 2);
QuietCard = __decorateClass([
  t("quiet-card")
], QuietCard);
export {
  QuietCard
};
