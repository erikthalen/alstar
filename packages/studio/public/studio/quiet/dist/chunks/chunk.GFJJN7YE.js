/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/content.ts
var QuietContentChangedEvent = class extends Event {
  constructor(detail) {
    super("quiet-content-changed", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietContentChangedEvent
};
