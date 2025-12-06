/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/form.ts
var QuietBlurEvent = class extends Event {
  constructor() {
    super("quiet-blur", { bubbles: false, cancelable: false, composed: true });
  }
};
var QuietChangeEvent = class extends Event {
  constructor() {
    super("quiet-change", { bubbles: true, cancelable: false, composed: true });
  }
};
var QuietFocusEvent = class extends Event {
  constructor() {
    super("quiet-focus", { bubbles: false, cancelable: false, composed: true });
  }
};
var QuietInputEvent = class extends Event {
  constructor() {
    super("quiet-input", { bubbles: true, cancelable: false, composed: true });
  }
};
var QuietInputCompleteEvent = class extends Event {
  constructor() {
    super("quiet-input-complete", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent,
  QuietInputCompleteEvent
};
