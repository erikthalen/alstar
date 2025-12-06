/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/include.ts
var QuietIncludedEvent = class extends Event {
  constructor(detail) {
    super("quiet-included", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietIncludeErrorEvent = class extends Event {
  constructor(detail) {
    super("quiet-include-error", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietIncludedEvent,
  QuietIncludeErrorEvent
};
