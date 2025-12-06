/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/sparkline/sparkline.styles.ts
var sparkline_styles_default = i`
  :host {
    --fill-color: var(--quiet-primary-fill-soft);
    --line-color: var(--quiet-primary-stroke-mid);
    --line-width: 1.5px;

    display: inline-block;
    aspect-ratio: 4 / 1;
    width: auto;
    height: 1em;
    vertical-align: middle;
  }

  :host([trend='negative']) {
    --fill-color: var(--quiet-destructive-fill-soft);
    --line-color: var(--quiet-destructive-stroke-mid);
  }

  :host([trend='neutral']) {
    --fill-color: var(--quiet-neutral-fill-soft);
    --line-color: var(--quiet-neutral-stroke-mid);
  }

  :host([trend='positive']) {
    --fill-color: var(--quiet-constructive-fill-soft);
    --line-color: var(--quiet-constructive-stroke-mid);
  }

  :host([appearance='line']) {
    --fill-color: transparent !important;
  }

  svg {
    display: block;
    width: 100%;
    height: 100%;

    &:dir(rtl) {
      transform: scaleX(-1);
    }
  }
`;

export {
  sparkline_styles_default
};
