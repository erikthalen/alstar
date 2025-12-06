/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/intersect.ts
var QuietIntersectEvent = class extends Event {
  constructor(detail) {
    super("quiet-intersect", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietIntersectEvent
};
