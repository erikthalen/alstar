/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/flip.ts
var QuietBeforeFlipEvent = class extends Event {
  constructor() {
    super("quiet-before-flip", { bubbles: true, cancelable: true, composed: true });
  }
};
var QuietFlipEvent = class extends Event {
  constructor() {
    super("quiet-flip", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietBeforeFlipEvent,
  QuietFlipEvent
};
