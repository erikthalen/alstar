/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/expand-collapse.ts
var QuietBeforeExpandEvent = class extends Event {
  constructor(item, options = { cancelable: true }) {
    super("quiet-before-expand", { bubbles: true, cancelable: options.cancelable, composed: true });
    this.detail = { item };
  }
};
var QuietExpandEvent = class extends Event {
  constructor(item) {
    super("quiet-expand", { bubbles: true, composed: true });
    this.detail = { item };
  }
};
var QuietBeforeCollapseEvent = class extends Event {
  constructor(item, options = { cancelable: true }) {
    super("quiet-before-collapse", { bubbles: true, cancelable: options.cancelable, composed: true });
    this.detail = { item };
  }
};
var QuietCollapseEvent = class extends Event {
  constructor(item) {
    super("quiet-collapse", { bubbles: true, composed: true });
    this.detail = { item };
  }
};

export {
  QuietBeforeExpandEvent,
  QuietExpandEvent,
  QuietBeforeCollapseEvent,
  QuietCollapseEvent
};
