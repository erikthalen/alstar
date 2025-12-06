/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/styles/host.styles.ts
var host_styles_default = i`
  :host {
    box-sizing: border-box !important;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: border-box !important;
  }

  ::selection {
    background-color: var(--quiet-selection-background-color);
    color: var(--quiet-selection-color);
    text-shadow: none !important;
  }

  [hidden] {
    display: none !important;
  }

  .vh {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    white-space: nowrap;
    clip-path: inset(50%);
  }
`;

export {
  host_styles_default
};
