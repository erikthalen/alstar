/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/events/joystick.ts
var QuietJoystickBeforeStartEvent = class extends Event {
  constructor(detail, options = { cancelable: true }) {
    super("quiet-joystick-before-start", { bubbles: true, cancelable: options.cancelable, composed: true });
    this.detail = detail;
  }
};
var QuietJoystickStartEvent = class extends Event {
  constructor(detail) {
    super("quiet-joystick-start", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietJoystickMoveEvent = class extends Event {
  constructor(detail) {
    super("quiet-joystick-move", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};
var QuietJoystickBeforeStopEvent = class extends Event {
  constructor(detail, options = { cancelable: true }) {
    super("quiet-joystick-before-stop", { bubbles: true, cancelable: options.cancelable, composed: true });
    this.detail = detail;
  }
};
var QuietJoystickStopEvent = class extends Event {
  constructor(detail) {
    super("quiet-joystick-stop", { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
};

export {
  QuietJoystickBeforeStartEvent,
  QuietJoystickStartEvent,
  QuietJoystickMoveEvent,
  QuietJoystickBeforeStopEvent,
  QuietJoystickStopEvent
};
