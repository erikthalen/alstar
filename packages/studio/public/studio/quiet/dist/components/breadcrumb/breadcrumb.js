/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  breadcrumb_styles_default
} from "../../chunks/chunk.HZOJQWCK.js";
import {
  QuietElement,
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
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/breadcrumb/breadcrumb.ts
var QuietBreadcrumb = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
  }
  firstUpdated() {
    this.setAttribute("role", "list");
    this.setAttribute("aria-label", this.localize.term("breadcrumbs"));
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietBreadcrumb.styles = [host_styles_default, breadcrumb_styles_default];
QuietBreadcrumb = __decorateClass([
  t("quiet-breadcrumb")
], QuietBreadcrumb);
export {
  QuietBreadcrumb
};
