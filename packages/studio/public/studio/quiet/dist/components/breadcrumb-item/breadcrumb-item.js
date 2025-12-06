/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i,
  u
} from "../../chunks/chunk.ZCPQX3DA.js";
import {
  breadcrumb_item_styles_default
} from "../../chunks/chunk.UB5BNXZ7.js";
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
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/breadcrumb-item/breadcrumb-item.ts
var QuietBreadcrumbItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.current = false;
    this.rel = "noreferrer noopener";
  }
  firstUpdated() {
    this.setAttribute("role", "listitem");
  }
  updated(changedProperties) {
    if (changedProperties.has("current")) {
      if (this.current) {
        this.setAttribute("aria-current", "page");
      } else {
        this.removeAttribute("aria-current");
      }
    }
  }
  render() {
    const isLink = typeof this.href === "string";
    const tag = isLink ? i`a` : i`span`;
    return u`
      <${tag}
        id="label"
        part="label"
        href=${o(this.href)}
        rel=${o(this.rel)}
        target=${o(this.target)}
      >
        <slot name="start"></slot>
        <slot></slot>
        <slot name="end"></slot>
      </${tag}>

      <span id="separator" part="separator">
        <slot name="separator">
          <quiet-icon library="system" name="chevron-right"></quiet-icon>
        </slot>
      </span>
    `;
  }
};
QuietBreadcrumbItem.shadowRootOptions = { ...QuietElement.shadowRootOptions, delegatesFocus: true };
QuietBreadcrumbItem.styles = [host_styles_default, breadcrumb_item_styles_default];
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietBreadcrumbItem.prototype, "current", 2);
__decorateClass([
  n()
], QuietBreadcrumbItem.prototype, "href", 2);
__decorateClass([
  n()
], QuietBreadcrumbItem.prototype, "target", 2);
__decorateClass([
  n()
], QuietBreadcrumbItem.prototype, "rel", 2);
QuietBreadcrumbItem = __decorateClass([
  t("quiet-breadcrumb-item")
], QuietBreadcrumbItem);
export {
  QuietBreadcrumbItem
};
