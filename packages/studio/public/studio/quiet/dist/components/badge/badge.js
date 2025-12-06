/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  badge_styles_default
} from "../../chunks/chunk.2EAXZYHY.js";
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

// src/components/badge/badge.ts
var QuietBadge = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.variant = "neutral";
    this.appearance = "normal";
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietBadge.styles = [host_styles_default, badge_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietBadge.prototype, "variant", 2);
__decorateClass([
  n({ reflect: true })
], QuietBadge.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietBadge.prototype, "attention", 2);
QuietBadge = __decorateClass([
  t("quiet-badge")
], QuietBadge);
export {
  QuietBadge
};
