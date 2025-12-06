/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/progress.ts
var QuietProgressEvent = class extends Event {
  constructor(detail) {
    super("quiet-progress", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietProgressEvent
};
