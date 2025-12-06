/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/carousel-item/carousel-item.styles.ts
var carousel_item_styles_default = i`
  :host {
    contain: layout style paint;
    flex: 0 0 100%;
    height: 100%;
    transform: translate3d(0, 0, 0);
    border-radius: var(--quiet-border-radius-md);
    scroll-snap-align: center;
    scroll-snap-stop: always;
  }

  #content {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  /* Ensure images cover the entire slide */
  ::slotted(img) {
    max-height: 100%;
    object-fit: cover;
  }

  /* Ensure elements with controls are contained and visible */
  ::slotted(iframe),
  ::slotted(video) {
    max-height: 100%;
    object-fit: contain;
  }
`;

export {
  carousel_item_styles_default
};
