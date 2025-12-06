/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/select.ts
var QuietSelectEvent = class extends Event {
  constructor(detail) {
    super("quiet-select", { bubbles: true, cancelable: true, composed: true });
    this.detail = detail;
  }
};

export {
  QuietSelectEvent
};
