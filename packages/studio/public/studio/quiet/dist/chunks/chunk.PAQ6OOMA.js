/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/time.ts
var QuietFinishedEvent = class extends Event {
  constructor() {
    super("quiet-finished", { bubbles: true, cancelable: false, composed: true });
  }
};
var QuietTickEvent = class extends Event {
  constructor() {
    super("quiet-tick", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietFinishedEvent,
  QuietTickEvent
};
