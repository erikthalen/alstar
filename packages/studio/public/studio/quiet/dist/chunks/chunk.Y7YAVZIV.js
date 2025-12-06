/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/transition-group/transition-group.styles.ts
var transition_group_styles_default = i`
  :host {
    --duration: 0.25s;

    display: flex;
    flex-direction: column;
    align-content: start;
    width: 100%;
  }

  /* Don't allow clicks while the transition is running to prevent animation blips */
  :host(:state(transitioning)) {
    pointer-events: none;
  }
`;

export {
  transition_group_styles_default
};
