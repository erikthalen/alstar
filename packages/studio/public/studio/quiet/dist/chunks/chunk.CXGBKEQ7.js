/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/item.ts
var QuietItemChangeEvent = class extends Event {
  constructor(detail) {
    super("quiet-item-change", {
      bubbles: true,
      composed: true
    });
    this.detail = detail;
  }
};

export {
  QuietItemChangeEvent
};
