/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/spinner/spinner.styles.ts
var spinner_styles_default = i`
  :host {
    --indicator-color: var(--quiet-primary-fill-mid);
    --track-color: color-mix(in oklab, var(--quiet-neutral-fill-mid), transparent 75%);
    --speed: 0.75s;

    display: inline-flex;
    width: 1em;
    height: 1em;
  }

  /* Default spinner */
  svg {
    transform-origin: center;
    animation: rotate var(--speed) linear infinite;

    &:dir(rtl) {
      animation-name: rotate-rtl;
    }
  }

  #track {
    stroke: var(--track-color);
  }

  #indicator {
    stroke: var(--indicator-color);
    stroke-dasharray: 30, 50;
    stroke-dashoffset: -5;
    stroke-linecap: round;
  }

  /* Custom spinners */
  ::slotted(img),
  ::slotted(svg) {
    min-width: 1em;
    min-height: 1em;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-rtl {
    0% {
      transform: rotate(360deg);
    }

    100% {
      transform: rotate(0deg);
    }
  }
`;

export {
  spinner_styles_default
};
