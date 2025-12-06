/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/radio/radio.styles.ts
var radio_styles_default = i`
  #group {
    display: flex;
    margin-block: 0.5rem;
  }

  :host([orientation='horizontal']) #group {
    flex-wrap: wrap;
    gap: 1.25rem;
  }

  :host([orientation='vertical']) #group {
    flex-direction: column;
    gap: 0.5rem;
  }

  :host(:state(disabled)) #label,
  :host(:state(disabled)) #description {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export {
  radio_styles_default
};
