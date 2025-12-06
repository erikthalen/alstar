/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i
} from "./chunk.A5SY4VDT.js";

// src/components/checkbox-group/checkbox-group.styles.ts
var checkbox_group_styles_default = i`
  :host {
    --gap: 1rem;
  }

  #group {
    display: flex;
    margin-block-start: 0.5rem;
  }

  :host([orientation='horizontal']) #group {
    flex-wrap: wrap;
    gap: var(--gap);
  }

  :host([orientation='vertical']) #group {
    flex-direction: column;
    gap: 0.5rem;
  }
`;

export {
  checkbox_group_styles_default
};
