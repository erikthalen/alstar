/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/animation.ts
var QuietAnimationComplete = class extends Event {
  constructor() {
    super("quiet-animation-complete", { bubbles: true, cancelable: false, composed: true });
  }
};

export {
  QuietAnimationComplete
};
