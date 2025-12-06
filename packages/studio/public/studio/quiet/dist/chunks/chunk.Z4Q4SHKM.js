/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/page.ts
var QuietBeforePageChangeEvent = class extends Event {
  constructor(detail) {
    super("quiet-before-page-change", { bubbles: false, cancelable: true, composed: true });
    this.detail = detail;
  }
};
var QuietPageChangeEvent = class extends Event {
  constructor() {
    super("quiet-page-change", { bubbles: false, cancelable: false, composed: true });
  }
};

export {
  QuietBeforePageChangeEvent,
  QuietPageChangeEvent
};
