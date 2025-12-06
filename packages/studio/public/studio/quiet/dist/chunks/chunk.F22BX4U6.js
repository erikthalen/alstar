/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/tabs.ts
var QuietTabShownEvent = class extends Event {
  constructor(detail) {
    super("quiet-tab-shown", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietTabHiddenEvent = class extends Event {
  constructor(detail) {
    super("quiet-tab-hidden", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietTabShownEvent,
  QuietTabHiddenEvent
};
