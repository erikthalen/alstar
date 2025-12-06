/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/joystick/joystick.styles.ts
var joystick_styles_default = i`
  :host {
    --size: 7rem;
    --thumb-size: 2.5rem;

    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    aspect-ratio: 1;
    width: var(--size);
    height: var(--size);
    border-radius: var(--quiet-border-radius-circle);
    background: var(--quiet-neutral-fill-softer);
    box-shadow: var(--quiet-inset-shadow-soft);
    cursor: grab;
    touch-action: none;
  }

  :host(:active) {
    cursor: grabbing;
  }

  :host(:state(disabled)) {
    cursor: not-allowed;
    opacity: 0.5;
  }

  :host(:focus) {
    outline: none;
  }

  :host(:focus-visible) {
    outline: var(--quiet-focus-ring);
    outline-offset: var(--quiet-focus-offset);
  }

  #thumb {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: var(--quiet-border-radius-circle);
    background-color: var(--quiet-neutral-fill-mid);
    color: var(--quiet-neutral-text-on-mid);
    transition: transform 75ms ease-out;
    will-change: transform;

    ::slotted(quiet-icon) {
      font-size: 1.5rem;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    #thumb {
      transition: none;
    }
  }
`;

export {
  joystick_styles_default
};
