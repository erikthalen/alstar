/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/transition.ts
var QuietTransitionEndEvent = class extends Event {
  constructor() {
    super("quiet-transition-end", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietTransitionEndEvent
};
