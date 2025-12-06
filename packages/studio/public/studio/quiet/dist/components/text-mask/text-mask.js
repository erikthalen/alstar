/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  text_mask_styles_default
} from "../../chunks/chunk.LFXVDUA6.js";
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

// src/components/text-mask/text-mask.ts
var QuietTextMask = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.image = "";
    this.fixed = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("fixed")) {
      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        this.style.backgroundAttachment = "scroll";
      } else {
        this.style.backgroundAttachment = this.fixed ? "fixed" : "scroll";
      }
    }
    if (changedProperties.has("image")) {
      this.style.backgroundImage = `url(${this.image})`;
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietTextMask.styles = [host_styles_default, text_mask_styles_default];
__decorateClass([
  n()
], QuietTextMask.prototype, "image", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTextMask.prototype, "fixed", 2);
QuietTextMask = __decorateClass([
  t("quiet-text-mask")
], QuietTextMask);
export {
  QuietTextMask
};
