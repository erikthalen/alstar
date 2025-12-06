/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/tab/tab.styles.ts
var tab_styles_default = i`
  :host {
    display: inline-flex;
    position: relative;
    align-items: center;
    align-self: stretch;
    padding-inline: 1.5em;
    padding-block: 1em;
    gap: 0.5em;
    font-weight: var(--quiet-font-weight-semibold);
    font-size: 0.9375em;
    cursor: pointer;
    user-select: none;
  }

  :host(:focus-visible) {
    outline: var(--quiet-focus-ring);
    outline-offset: calc(var(--quiet-focus-width) * -1) !important;
  }

  :host([aria-selected='true']) {
    color: var(--quiet-primary-text-colorful);
  }

  :host(:state(disabled)) {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export {
  tab_styles_default
};
