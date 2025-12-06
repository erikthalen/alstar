/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  joystick_styles_default
} from "../../chunks/chunk.4MYVUKZG.js";
import {
  QuietElement,
  e,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  QuietJoystickBeforeStartEvent,
  QuietJoystickBeforeStopEvent,
  QuietJoystickMoveEvent,
  QuietJoystickStartEvent,
  QuietJoystickStopEvent
} from "../../chunks/chunk.FTFFNQGF.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/joystick/joystick.ts
var QuietJoystick = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.disabled = false;
    this.mode = "normal";
    this._deadZone = 0;
    this.isDragging = false;
    this.centerX = 0;
    this.centerY = 0;
    this.lastPosData = null;
    this.maxDistance = 0;
  }
  get deadZone() {
    return this._deadZone;
  }
  set deadZone(value) {
    this._deadZone = Math.max(0, Math.min(1, value));
  }
  connectedCallback() {
    super.connectedCallback();
    this.handleMove = this.handleMove.bind(this);
    this.handleEnd = this.handleEnd.bind(this);
    this.addEventListener("mousedown", this.handleStart);
    this.addEventListener("touchstart", this.handleStart);
    this.resizeObserver = new ResizeObserver(() => this.updateDimensions());
    this.resizeObserver.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("mousedown", this.handleStart);
    this.removeEventListener("touchstart", this.handleStart);
    this.resizeObserver.disconnect();
    this.cleanupListeners();
  }
  firstUpdated() {
    this.setAttribute("role", "application");
    this.setAttribute("aria-label", this.label);
    this.setAttribute("aria-roledescription", "joystick");
    this.setAttribute("tabindex", "-1");
    this.style.setProperty("--distance", "0");
    this.updateDimensions();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label);
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
  }
  updateDimensions() {
    const rect = this.getBoundingClientRect();
    this.centerX = rect.width / 2;
    this.centerY = rect.height / 2;
    this.maxDistance = rect.width / 2;
  }
  calculatePosition(x2, y) {
    const dx = x2 - this.centerX;
    const dy = y - this.centerY;
    let translateX = dx;
    let translateY = dy;
    let normalizedDistance;
    let angle;
    const rawDistance = Math.sqrt(dx * dx + dy * dy);
    angle = Math.atan2(dx, -dy) * (180 / Math.PI);
    if (angle < 0) angle += 360;
    normalizedDistance = Math.min(1, rawDistance / this.maxDistance);
    if (normalizedDistance < this.deadZone) {
      return { angle: 0, distance: 0, translateX: 0, translateY: 0, x: 0, y: 0 };
    }
    if (rawDistance > this.maxDistance) {
      const directionX = dx / rawDistance;
      const directionY = dy / rawDistance;
      translateX = directionX * this.maxDistance;
      translateY = directionY * this.maxDistance;
    }
    return {
      angle,
      distance: normalizedDistance,
      translateX,
      translateY,
      x: translateX / this.maxDistance,
      // -1 to 1
      y: translateY / this.maxDistance
      // -1 to 1
    };
  }
  dispatchJoystickEvent(eventClass, position) {
    this.dispatchEvent(
      new eventClass({
        angle: position.angle,
        distance: position.distance,
        x: position.x,
        y: position.y
      })
    );
  }
  handleStart(event) {
    if (this.disabled) return;
    event.preventDefault();
    this.updateDimensions();
    const position = this.getPositionFromEvent(event);
    const posData = this.calculatePosition(position.x, position.y);
    const beforeStartEvent = new QuietJoystickBeforeStartEvent(posData);
    this.dispatchEvent(beforeStartEvent);
    if (beforeStartEvent.defaultPrevented) {
      return;
    }
    this.isDragging = true;
    this.updateThumbPosition(posData);
    this.customStates.set("dragging", true);
    this.style.setProperty("--distance", posData.distance.toString());
    this.dispatchJoystickEvent(QuietJoystickStartEvent, posData);
    this.setupListeners();
  }
  handleMove(event) {
    if (!this.isDragging || this.disabled) return;
    event.preventDefault();
    const position = this.getPositionFromEvent(event);
    const posData = this.calculatePosition(position.x, position.y);
    this.style.setProperty("--distance", posData.distance.toString());
    this.updateThumbPosition(posData);
    this.lastPosData = posData;
    this.dispatchJoystickEvent(QuietJoystickMoveEvent, posData);
  }
  handleEnd() {
    if (!this.isDragging || this.disabled) return;
    const posData = this.mode === "normal" ? this.resetThumbPosition() : this.lastPosData || this.resetThumbPosition();
    const beforeStopEvent = new QuietJoystickBeforeStopEvent(posData);
    this.dispatchEvent(beforeStopEvent);
    if (beforeStopEvent.defaultPrevented) {
      return;
    }
    this.isDragging = false;
    this.customStates.set("dragging", false);
    this.style.setProperty("--distance", posData.distance.toString());
    this.dispatchJoystickEvent(QuietJoystickStopEvent, posData);
    this.cleanupListeners();
  }
  getPositionFromEvent(event) {
    const rect = this.getBoundingClientRect();
    const touch = "touches" in event ? event.touches[0] : event;
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
  }
  updateThumbPosition(posData) {
    this.thumbEl.style.transform = `translate(${posData.translateX}px, ${posData.translateY}px)`;
  }
  resetThumbPosition() {
    const posData = {
      angle: 0,
      distance: 0,
      translateX: 0,
      translateY: 0,
      x: 0,
      y: 0
    };
    this.updateThumbPosition(posData);
    this.customStates.set("active", false);
    this.style.setProperty("--distance", "0");
    return posData;
  }
  setupListeners() {
    document.addEventListener("mousemove", this.handleMove);
    document.addEventListener("mouseup", this.handleEnd);
    document.addEventListener("touchmove", this.handleMove);
    document.addEventListener("touchend", this.handleEnd);
    document.addEventListener("touchcancel", this.handleEnd);
  }
  cleanupListeners() {
    document.removeEventListener("mousemove", this.handleMove);
    document.removeEventListener("mouseup", this.handleEnd);
    document.removeEventListener("touchmove", this.handleMove);
    document.removeEventListener("touchend", this.handleEnd);
    document.removeEventListener("touchcancel", this.handleEnd);
  }
  /**
   * Programmatically resets the joystick's position. Useful for resetting it in sticky mode, e.g. when a game restarts.
   */
  reset() {
    this.resetThumbPosition();
  }
  render() {
    return x`<div id="thumb" part="thumb"><slot name="thumb"></slot></div>`;
  }
};
QuietJoystick.styles = [host_styles_default, joystick_styles_default];
__decorateClass([
  e("#thumb")
], QuietJoystick.prototype, "thumbEl", 2);
__decorateClass([
  n()
], QuietJoystick.prototype, "label", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietJoystick.prototype, "disabled", 2);
__decorateClass([
  n({ type: String, reflect: true })
], QuietJoystick.prototype, "mode", 2);
__decorateClass([
  n({ type: Number, attribute: "dead-zone" })
], QuietJoystick.prototype, "deadZone", 1);
QuietJoystick = __decorateClass([
  t("quiet-joystick")
], QuietJoystick);
export {
  QuietJoystick
};
