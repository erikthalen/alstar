/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  carousel_item_styles_default
} from "./chunk.TB3UTZVO.js";
import {
  QuietElement,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/carousel-item/carousel-item.ts
var QuietCarouselItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.name = "";
  }
  firstUpdated() {
    this.setAttribute("role", "group");
    this.setAttribute("aria-roledescription", "slide");
  }
  render() {
    return x`
      <div id="content" part="content">
        <slot></slot>
      </div>
    `;
  }
};
QuietCarouselItem.styles = carousel_item_styles_default;
__decorateClass([
  n()
], QuietCarouselItem.prototype, "name", 2);
QuietCarouselItem = __decorateClass([
  t("quiet-carousel-item")
], QuietCarouselItem);

export {
  QuietCarouselItem
};
