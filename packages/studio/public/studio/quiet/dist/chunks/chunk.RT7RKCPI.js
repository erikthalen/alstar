/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/load.ts
var QuietLoadedEvent = class extends Event {
  constructor() {
    super("quiet-loaded", { bubbles: false, cancelable: false, composed: true });
  }
};
var QuietLoadErrorEvent = class extends Event {
  constructor(detail) {
    super("quiet-load-error", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietLoadMoreEvent = class extends Event {
  constructor() {
    super("quiet-load-more", {
      bubbles: true,
      cancelable: false,
      composed: true
    });
  }
};

export {
  QuietLoadedEvent,
  QuietLoadErrorEvent,
  QuietLoadMoreEvent
};
