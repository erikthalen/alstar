/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  toolbar_styles_default
} from "../../chunks/chunk.KLAK6DMJ.js";
import {
  QuietElement,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/toolbar/toolbar.ts
var QuietToolbar = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.orientation = "horizontal";
  }
  firstUpdated() {
    this.setAttribute("role", "toolbar");
  }
  updated(changedProperties) {
    if (changedProperties.has("orientation")) {
      this.setAttribute("aria-orientation", this.orientation);
    }
  }
  /** Gets an array of buttons slotted into the toolbar. Includes slotted buttons, such as dropdown triggers. */
  getButtons(options) {
    if (options?.includeDisabled) {
      return [...this.querySelectorAll("quiet-button")];
    } else {
      return [...this.querySelectorAll("quiet-button:not(:state(disabled))")];
    }
  }
  /** Gets an array of button groups slotted into the toolbar. */
  getButtonGroups() {
    return [...this.querySelectorAll("quiet-button-group")];
  }
  handleDefaultSlotChange() {
    const buttonGroups = this.getButtonGroups();
    const buttons = this.getButtons({ includeDisabled: true });
    buttonGroups.forEach((buttonGroup) => {
      buttonGroup.orientation = this.orientation;
    });
    buttons.filter((button) => !button.hasAttribute("disabled")).forEach((button, index) => {
      button.tabIndex = index === 0 ? 0 : -1;
    });
  }
  handleKeyDown(event) {
    const buttons = this.getButtons();
    const activeIndex = buttons.findIndex((button) => button.tabIndex === 0);
    const isVertical = this.orientation === "vertical";
    let nextIndex = -1;
    if (event.composedPath().some((el) => el?.localName === "quiet-dropdown-item")) {
      return;
    }
    if (isVertical && event.key === "ArrowUp" || !isVertical && event.key === "ArrowLeft") {
      event.preventDefault();
      nextIndex = activeIndex - 1;
      if (nextIndex < 0) nextIndex = buttons.length - 1;
    }
    if (isVertical && event.key === "ArrowDown" || !isVertical && event.key === "ArrowRight") {
      event.preventDefault();
      nextIndex = activeIndex + 1;
      if (nextIndex > buttons.length - 1) nextIndex = 0;
    }
    if (event.key === "Home" || event.key === "End") {
      event.preventDefault();
      nextIndex = event.key === "Home" ? 0 : buttons.length - 1;
    }
    if (nextIndex > -1) {
      buttons.forEach((button, index) => {
        if (button.disabled) return;
        if (index === nextIndex) {
          button.tabIndex = 0;
          button.focus();
        } else {
          button.tabIndex = -1;
        }
      });
    }
  }
  handlePointerDown(event) {
    const buttons = this.getButtons({ includeDisabled: true });
    const targetButton = event.target.closest("quiet-button");
    if (!targetButton) return;
    buttons.forEach((button) => {
      if (button.disabled) return;
      if (button === targetButton) {
        button.tabIndex = 0;
      } else {
        button.tabIndex = -1;
      }
    });
  }
  render() {
    return x`
      <slot
        @keydown=${this.handleKeyDown}
        @pointerdown=${this.handlePointerDown}
        @slotchange=${this.handleDefaultSlotChange}
      ></slot>
    `;
  }
};
QuietToolbar.styles = [host_styles_default, toolbar_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietToolbar.prototype, "orientation", 2);
QuietToolbar = __decorateClass([
  t("quiet-toolbar")
], QuietToolbar);
export {
  QuietToolbar
};
