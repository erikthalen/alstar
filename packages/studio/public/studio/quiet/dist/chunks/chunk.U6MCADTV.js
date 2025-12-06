/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/mutation.ts
var QuietMutationEvent = class extends Event {
  constructor(detail) {
    super("quiet-mutation", { bubbles: false, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietMutationEvent
};
