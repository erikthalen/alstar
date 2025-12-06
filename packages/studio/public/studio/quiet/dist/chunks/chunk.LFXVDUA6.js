/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/text-mask/text-mask.styles.ts
var text_mask_styles_default = i`
  :host {
    --brightness: 100%;
    --contrast: 100%;
    --grayscale: 0%;
    --hue-rotate: 0deg;

    display: block;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-fill-color: transparent;
    text-shadow: none !important; /* this will break the mask effect */
    filter: brightness(var(--brightness)) contrast(var(--contrast)) grayscale(var(--grayscale))
      hue-rotate(var(--hue-rotate));
  }
`;

export {
  text_mask_styles_default
};
