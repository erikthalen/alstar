/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  accordion_styles_default
} from "../../chunks/chunk.JJAJ2ZOF.js";
import "../../chunks/chunk.S5A2TDM3.js";
import "../../chunks/chunk.WOF2NWXT.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
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
import "../../chunks/chunk.VBE24RWL.js";
import "../../chunks/chunk.RT7RKCPI.js";
import "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  QuietBeforeCollapseEvent,
  QuietBeforeExpandEvent,
  QuietCollapseEvent,
  QuietExpandEvent
} from "../../chunks/chunk.ILZIVKKL.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/accordion/accordion.ts
var QuietAccordion = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.autoCollapse = false;
    this.appearance = "normal";
    this.iconPlacement = "end";
    this.handleClick = (event) => {
      const path = event.composedPath();
      const item = path.find(
        (el) => el instanceof HTMLElement && el.localName === "quiet-accordion-item"
      );
      if (item && !item.disabled) {
        const header = item.header;
        if (header && path.includes(header)) {
          this.handleItemToggle(item);
        }
      }
    };
    this.handleKeyDown = (event) => {
      const path = event.composedPath();
      const target = path[0];
      if (target.getAttribute("part") === "header") {
        const shadowRoot = target.getRootNode();
        const item = shadowRoot.host;
        if (item && !item.disabled) {
          switch (event.key) {
            case "Enter":
            case " ":
              event.preventDefault();
              this.handleItemToggle(item);
              break;
            case "ArrowUp":
              event.preventDefault();
              this.focusPreviousItem(item);
              break;
            case "ArrowDown":
              event.preventDefault();
              this.focusNextItem(item);
              break;
            case "Home":
              event.preventDefault();
              this.focusFirstItem();
              break;
            case "End":
              event.preventDefault();
              this.focusLastItem();
              break;
          }
        }
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("click", this.handleClick);
    this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("click", this.handleClick);
    this.removeEventListener("keydown", this.handleKeyDown);
  }
  updated(changedProperties) {
    if (changedProperties.has("appearance") || changedProperties.has("iconPlacement")) {
      this.syncItemProperties();
    }
  }
  /** Get accordion items from the default slot */
  getItems() {
    return this.defaultSlot.assignedElements().filter((el) => el.tagName.toLowerCase() === "quiet-accordion-item");
  }
  /** Get enabled (non-disabled) accordion items */
  getEnabledItems() {
    return this.getItems().filter((item) => !item.disabled);
  }
  /** Focus the next enabled accordion item */
  focusNextItem(currentItem) {
    const enabledItems = this.getEnabledItems();
    const currentIndex = enabledItems.indexOf(currentItem);
    if (currentIndex < enabledItems.length - 1) {
      enabledItems[currentIndex + 1].focus();
    }
  }
  /** Focus the previous enabled accordion item */
  focusPreviousItem(currentItem) {
    const enabledItems = this.getEnabledItems();
    const currentIndex = enabledItems.indexOf(currentItem);
    if (currentIndex > 0) {
      enabledItems[currentIndex - 1].focus();
    }
  }
  /** Focus the first enabled accordion item */
  focusFirstItem() {
    const enabledItems = this.getEnabledItems();
    if (enabledItems.length > 0) {
      enabledItems[0].focus();
    }
  }
  /** Focus the last enabled accordion item */
  focusLastItem() {
    const enabledItems = this.getEnabledItems();
    if (enabledItems.length > 0) {
      enabledItems[enabledItems.length - 1].focus();
    }
  }
  /** @internal Handles accordion item toggle requests */
  async handleItemToggle(item) {
    const targetExpanded = !item.expanded;
    if (targetExpanded) {
      const beforeExpandEvent = new QuietBeforeExpandEvent(item);
      this.dispatchEvent(beforeExpandEvent);
      if (beforeExpandEvent.defaultPrevented) {
        return false;
      }
      const itemsToCollapse = [];
      if (this.autoCollapse) {
        const items = this.getItems();
        for (const otherItem of items) {
          if (otherItem !== item && otherItem.expanded) {
            const beforeCollapseEvent = new QuietBeforeCollapseEvent(otherItem);
            this.dispatchEvent(beforeCollapseEvent);
            if (!beforeCollapseEvent.defaultPrevented) {
              otherItem.expanded = false;
              itemsToCollapse.push(otherItem);
            }
          }
        }
      }
      item.expanded = true;
      const animations = [item.animateExpand()];
      for (const collapsingItem of itemsToCollapse) {
        animations.push(collapsingItem.animateCollapse());
      }
      await Promise.allSettled(animations);
      this.dispatchEvent(new QuietExpandEvent(item));
      for (const collapsedItem of itemsToCollapse) {
        this.dispatchEvent(new QuietCollapseEvent(collapsedItem));
      }
      return true;
    } else {
      const beforeCollapseEvent = new QuietBeforeCollapseEvent(item);
      this.dispatchEvent(beforeCollapseEvent);
      if (beforeCollapseEvent.defaultPrevented) {
        return false;
      }
      item.expanded = false;
      await item.animateCollapse();
      this.dispatchEvent(new QuietCollapseEvent(item));
      return true;
    }
  }
  handleSlotChange() {
    this.syncItemProperties();
  }
  /** Sync appearance and iconPlacement to accordion items */
  syncItemProperties() {
    const items = this.getItems();
    items.forEach((item, index) => {
      item.appearance = this.appearance;
      item.iconPlacement = this.iconPlacement;
      const isFirst = index === 0;
      const isLast = index === items.length - 1;
      const isMiddle = items.length > 2 && !isFirst && !isLast;
      item.toggleAttribute("data-accordion-item-first", isFirst);
      item.toggleAttribute("data-accordion-item-middle", isMiddle);
      item.toggleAttribute("data-accordion-item-last", isLast);
    });
  }
  render() {
    return x`<slot @slotchange=${this.handleSlotChange}></slot>`;
  }
};
QuietAccordion.styles = [host_styles_default, accordion_styles_default];
__decorateClass([
  e("slot:not([name])")
], QuietAccordion.prototype, "defaultSlot", 2);
__decorateClass([
  n({ attribute: "auto-collapse", type: Boolean })
], QuietAccordion.prototype, "autoCollapse", 2);
__decorateClass([
  n({ reflect: true })
], QuietAccordion.prototype, "appearance", 2);
__decorateClass([
  n({ attribute: "icon-placement", reflect: true })
], QuietAccordion.prototype, "iconPlacement", 2);
QuietAccordion = __decorateClass([
  t("quiet-accordion")
], QuietAccordion);
export {
  QuietAccordion
};
