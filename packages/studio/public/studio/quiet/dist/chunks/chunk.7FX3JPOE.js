/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/open-close.ts
var QuietBeforeOpenEvent = class extends Event {
  constructor(options = { cancelable: true }) {
    super("quiet-before-open", { bubbles: true, cancelable: options.cancelable, composed: true });
  }
};
var QuietOpenEvent = class extends Event {
  constructor() {
    super("quiet-open", { bubbles: true, cancelable: false, composed: true });
  }
};
var QuietBeforeCloseEvent = class extends Event {
  constructor(detail, options = { cancelable: true }) {
    super("quiet-before-close", { bubbles: true, cancelable: options.cancelable, composed: true });
    this.detail = detail;
  }
};
var QuietCloseEvent = class extends Event {
  constructor() {
    super("quiet-close", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietBeforeOpenEvent,
  QuietOpenEvent,
  QuietBeforeCloseEvent,
  QuietCloseEvent
};
