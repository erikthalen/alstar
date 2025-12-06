/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/button-group/button-group.styles.ts
var button_group_styles_default = i`
  :host {
    display: flex;
    position: relative;
    flex-wrap: wrap;
    gap: min(var(--quiet-border-width), 0.125rem);
    isolation: isolate;
  }

  :host([orientation='vertical']) {
    flex-direction: column;
  }

  /* Show the focus indicator above other buttons */
  ::slotted(:focus) {
    z-index: 1 !important;
  }
`;

export {
  button_group_styles_default
};
