/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/copy.ts
var QuietCopyEvent = class extends Event {
  constructor(detail) {
    super("quiet-copy", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietCopyErrorEvent = class extends Event {
  constructor(detail) {
    super("quiet-copy-error", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietCopyEvent,
  QuietCopyErrorEvent
};
