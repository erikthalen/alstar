/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/resize.ts
var QuietResizeEvent = class extends Event {
  constructor(detail) {
    super("quiet-resize", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietResizeEvent
};
