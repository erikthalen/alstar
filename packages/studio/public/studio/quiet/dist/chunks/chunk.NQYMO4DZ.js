/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/qr/qr.styles.ts
var qr_styles_default = i`
  :host {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
  }

  canvas {
    width: 100%;
    height: 100%;

    /* We force a near-instant transition so we can listen for transitionend when the color changes */
    transition: 1ms color;
  }
`;

export {
  qr_styles_default
};
