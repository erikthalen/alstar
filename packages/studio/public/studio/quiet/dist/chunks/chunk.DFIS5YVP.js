/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/activate.ts
var QuietBeforeActivateEvent = class extends Event {
  constructor() {
    super("quiet-before-activate", { bubbles: false, cancelable: true, composed: true });
  }
};
var QuietActivateEvent = class extends Event {
  constructor() {
    super("quiet-activate", { bubbles: false, cancelable: false, composed: true });
  }
};
var QuietBeforeDeactivateEvent = class extends Event {
  constructor() {
    super("quiet-before-deactivate", { bubbles: false, cancelable: true, composed: true });
  }
};
var QuietDeactivateEvent = class extends Event {
  constructor() {
    super("quiet-deactivate", { bubbles: false, cancelable: false, composed: true });
  }
};

export {
  QuietBeforeActivateEvent,
  QuietActivateEvent,
  QuietBeforeDeactivateEvent,
  QuietDeactivateEvent
};
