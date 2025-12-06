/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/long-press.ts
var isTouchEnabled = "TouchEvent" in window;
var LongPress = class {
  constructor(el, options) {
    this.wasStarted = false;
    this.handlePress = (event) => {
      const x = event instanceof PointerEvent ? event.clientX : event.touches[0].clientX;
      const y = event instanceof PointerEvent ? event.clientY : event.touches[0].clientY;
      if (isTouchEnabled && event instanceof TouchEvent && event.touches.length > 1) {
        return;
      }
      this.startCoords = { x, y };
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        const longPressEvent = new LongPressEvent(this.options.eventName, this.options.eventOptions, {
          type: event.type === "touchstart" ? "touch" : "pointer",
          originalEvent: event
        });
        this.target.dispatchEvent(longPressEvent);
      }, this.options.duration);
      this.target.addEventListener("touchmove", this.handleMove);
      this.target.addEventListener("touchend", this.handleRelease);
      if (!this.options.ignorePointerEvents) {
        this.target.addEventListener("pointermove", this.handleMove);
        this.target.addEventListener("pointerup", this.handleRelease);
      }
    };
    this.handleMove = (event) => {
      const x = event instanceof PointerEvent ? event.clientX : event.touches[0].clientX;
      const y = event instanceof PointerEvent ? event.clientY : event.touches[0].clientY;
      const deltaX = Math.abs(this.startCoords.x - x);
      const deltaY = Math.abs(this.startCoords.y - y);
      const deltaRoot = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
      if (deltaRoot > this.options.maxDelta || isTouchEnabled && event instanceof TouchEvent && event.touches.length > 1) {
        clearTimeout(this.timeout);
      }
    };
    this.handleRelease = () => {
      clearTimeout(this.timeout);
    };
    this.target = el;
    this.options = {
      eventName: "long-press",
      eventOptions: {
        bubbles: true,
        cancelable: true,
        composed: true
      },
      duration: 700,
      ignorePointerEvents: false,
      maxDelta: 10,
      overrideStyles: true,
      ...options
    };
    this.start();
  }
  /** Starts listening for the long press event. */
  start() {
    if (this.wasStarted) return;
    this.wasStarted = true;
    if (this.options.overrideStyles && this.target instanceof HTMLElement) {
      this.target.style.setProperty("-webkit-touch-callout", "none", "important");
      this.target.style.setProperty("-webkit-user-select", "none", "important");
      this.target.style.setProperty("user-select", "none", "important");
    }
    this.target.addEventListener("touchstart", this.handlePress);
    if (!this.options.ignorePointerEvents) {
      this.target.addEventListener("pointerdown", this.handlePress);
    }
  }
  /** Stops listening for the long press event. */
  stop() {
    clearTimeout(this.timeout);
    this.wasStarted = false;
    if (this.options.overrideStyles && this.target instanceof HTMLElement) {
      this.target.style.removeProperty("-webkit-touch-callout");
      this.target.style.removeProperty("-webkit-user-select");
      this.target.style.removeProperty("user-select");
    }
    this.target.removeEventListener("touchstart", this.handlePress);
    this.target.removeEventListener("touchmove", this.handleMove);
    this.target.removeEventListener("touchend", this.handleRelease);
    if (!this.options.ignorePointerEvents) {
      this.target.removeEventListener("pointerdown", this.handlePress);
      this.target.removeEventListener("pointermove", this.handleMove);
      this.target.removeEventListener("pointerup", this.handleRelease);
    }
  }
};
var LongPressEvent = class extends Event {
  constructor(eventName, eventOptions, detail) {
    super(eventName, eventOptions);
    this.detail = detail;
  }
};

export {
  LongPress,
  LongPressEvent
};
