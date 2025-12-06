/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.4URJFL22.js";
import "../../chunks/chunk.XJH2B3AC.js";
import {
  dropdown_styles_default
} from "../../chunks/chunk.SL6MGO6W.js";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size
} from "../../chunks/chunk.FWK2CT6L.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  createId
} from "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietElement,
  e,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  lockScrolling,
  unlockScrolling
} from "../../chunks/chunk.YYNYQ6SE.js";
import {
  LongPress,
  LongPressEvent
} from "../../chunks/chunk.HV6WFC7E.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  activeElements
} from "../../chunks/chunk.JXJPUDWA.js";
import {
  animateWithClass
} from "../../chunks/chunk.VBE24RWL.js";
import {
  QuietBeforeCloseEvent,
  QuietBeforeOpenEvent,
  QuietCloseEvent,
  QuietOpenEvent
} from "../../chunks/chunk.7FX3JPOE.js";
import {
  QuietSelectEvent
} from "../../chunks/chunk.ROURARON.js";
import "../../chunks/chunk.RT7RKCPI.js";
import "../../chunks/chunk.7LEBIIO5.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/dropdown/dropdown.ts
var openDropdowns = /* @__PURE__ */ new Set();
var QuietDropdown = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.submenuCleanups = /* @__PURE__ */ new Map();
    this.localize = new Localize(this);
    this.userTypedQuery = "";
    this.openSubmenuStack = [];
    this.open = false;
    this.contextMenu = "";
    this.placement = "bottom-start";
    this.distance = 0;
    this.offset = 0;
    /** If focus is set outside of the component, close the menu. */
    this.handleDocumentFocusIn = (event) => {
      const path = event.composedPath();
      if (!path.includes(this) && this.contextMenuElement && !path.includes(this.contextMenuElement)) {
        this.open = false;
      }
    };
    /** Handles key down events when the menu is open */
    this.handleDocumentKeyDown = (event) => {
      const isRtl = this.localize.dir() === "rtl";
      if (event.key === "Escape") {
        const trigger = this.getTrigger();
        event.preventDefault();
        event.stopPropagation();
        this.open = false;
        trigger?.focus();
        return;
      }
      const activeElement = [...activeElements()].find((el) => el.localName === "quiet-dropdown-item");
      const isFocusedOnItem = activeElement?.localName === "quiet-dropdown-item";
      const currentSubmenuItem = this.getCurrentSubmenuItem();
      const isInSubmenu = !!currentSubmenuItem;
      let items;
      let activeItem;
      let activeItemIndex;
      if (isInSubmenu) {
        items = this.getSubmenuItems(currentSubmenuItem);
        activeItem = items.find((item) => item.active || item === activeElement);
        activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
      } else {
        items = this.getItems();
        activeItem = items.find((item) => item.active || item === activeElement);
        activeItemIndex = activeItem ? items.indexOf(activeItem) : -1;
      }
      let itemToSelect;
      if (event.key === "ArrowUp") {
        event.preventDefault();
        event.stopPropagation();
        if (activeItemIndex > 0) {
          itemToSelect = items[activeItemIndex - 1];
        } else {
          itemToSelect = items[items.length - 1];
        }
      }
      if (event.key === "ArrowDown") {
        event.preventDefault();
        event.stopPropagation();
        if (activeItemIndex !== -1 && activeItemIndex < items.length - 1) {
          itemToSelect = items[activeItemIndex + 1];
        } else {
          itemToSelect = items[0];
        }
      }
      if (event.key === (isRtl ? "ArrowLeft" : "ArrowRight") && isFocusedOnItem && activeItem) {
        if (activeItem.slotsWithContent && activeItem.slotsWithContent.has("submenu")) {
          event.preventDefault();
          event.stopPropagation();
          activeItem.submenuOpen = true;
          this.addToSubmenuStack(activeItem);
          setTimeout(() => {
            const submenuItems = this.getSubmenuItems(activeItem);
            if (submenuItems.length > 0) {
              submenuItems.forEach((item, index) => item.active = index === 0);
              submenuItems[0].focus();
            }
          }, 0);
          return;
        }
      }
      if (event.key === (isRtl ? "ArrowRight" : "ArrowLeft") && isInSubmenu) {
        event.preventDefault();
        event.stopPropagation();
        const removedItem = this.removeFromSubmenuStack();
        if (removedItem) {
          removedItem.submenuOpen = false;
          setTimeout(() => {
            removedItem.focus();
            removedItem.active = true;
            const parentItems = removedItem.slot === "submenu" ? this.getSubmenuItems(removedItem.parentElement) : this.getItems();
            parentItems.forEach((item) => {
              if (item !== removedItem) {
                item.active = false;
              }
            });
          }, 0);
        }
        return;
      }
      if (event.key === "Home" || event.key === "End") {
        event.preventDefault();
        event.stopPropagation();
        itemToSelect = event.key === "Home" ? items[0] : items[items.length - 1];
      }
      if (event.key === "Tab") {
        this.hideMenu();
      }
      if (event.key.length === 1 && // Ignore special key combinations
      !(event.metaKey || event.ctrlKey || event.altKey) && // Ignore spaces if the query is empty
      !(event.key === " " && this.userTypedQuery === "")) {
        clearTimeout(this.userTypedTimeout);
        this.userTypedTimeout = setTimeout(() => {
          this.userTypedQuery = "";
        }, 1e3);
        this.userTypedQuery += event.key;
        items.some((item) => {
          const label = (item.textContent || "").trim().toLowerCase();
          const selectionQuery = this.userTypedQuery.trim().toLowerCase();
          if (label.startsWith(selectionQuery)) {
            itemToSelect = item;
            return true;
          }
          return false;
        });
      }
      if (itemToSelect) {
        event.preventDefault();
        event.stopPropagation();
        items.forEach((item) => item.active = item === itemToSelect);
        itemToSelect.focus();
        return;
      }
      if ((event.key === "Enter" || event.key === " " && this.userTypedQuery === "") && isFocusedOnItem && activeItem) {
        event.preventDefault();
        event.stopPropagation();
        if (activeItem.slotsWithContent && activeItem.slotsWithContent.has("submenu")) {
          activeItem.submenuOpen = true;
          this.addToSubmenuStack(activeItem);
          setTimeout(() => {
            const submenuItems = this.getSubmenuItems(activeItem);
            if (submenuItems.length > 0) {
              submenuItems.forEach((item, index) => item.active = index === 0);
              submenuItems[0].focus();
            }
          }, 0);
        } else {
          this.makeSelection(activeItem, event);
        }
      }
    };
    /** Handles pointer down events when the dropdown is open. */
    this.handleDocumentPointerDown = (event) => {
      const path = event.composedPath();
      const isInDropdownHierarchy = path.some((el) => {
        if (el instanceof HTMLElement) {
          return el === this || el.closest('quiet-dropdown, [part="submenu"]');
        }
        return false;
      });
      if (!isInDropdownHierarchy) {
        this.open = false;
      }
    };
    /** Shows the dropdown when the contextmenu event is dispatched. */
    this.handleContextMenu = (event) => {
      const originalEvent = event instanceof LongPressEvent ? event.detail.originalEvent : event;
      const clientX = originalEvent instanceof MouseEvent || originalEvent instanceof PointerEvent ? originalEvent.clientX : originalEvent.touches[0].clientX;
      const clientY = originalEvent instanceof MouseEvent || originalEvent instanceof PointerEvent ? originalEvent.clientY : originalEvent.touches[0].clientY;
      event.preventDefault();
      if (this.menu.hidden) {
        this.contextMenuVirtualElement = this.getContextMenuVirtualElement(clientX, clientY);
        this.open = true;
      }
    };
    /** Handle global mouse movement for safe triangle logic */
    this.handleGlobalMouseMove = (event) => {
      const currentSubmenuItem = this.getCurrentSubmenuItem();
      if (!currentSubmenuItem?.submenuOpen || !currentSubmenuItem.submenuElement) return;
      const submenuRect = currentSubmenuItem.submenuElement.getBoundingClientRect();
      const placement = currentSubmenuItem.submenuElement.getAttribute("data-placement") || "";
      const isLeftPlacement = placement.startsWith("left");
      const constrainedY = Math.max(submenuRect.top, Math.min(event.clientY, submenuRect.bottom));
      let submenuEdgeX;
      let constrainedX;
      if (isLeftPlacement) {
        submenuEdgeX = submenuRect.right;
        constrainedX = Math.max(event.clientX, submenuEdgeX);
      } else {
        submenuEdgeX = submenuRect.left;
        constrainedX = Math.min(event.clientX, submenuEdgeX);
      }
      currentSubmenuItem.submenuElement.style.setProperty("--safe-triangle-cursor-x", `${constrainedX}px`);
      currentSubmenuItem.submenuElement.style.setProperty("--safe-triangle-cursor-y", `${constrainedY}px`);
      const isOverItem = currentSubmenuItem.matches(":hover");
      const isOverSubmenu = currentSubmenuItem.submenuElement?.matches(":hover") || !!event.composedPath().find((el) => el instanceof HTMLElement && el.closest('[part="submenu"]') === currentSubmenuItem.submenuElement);
      if (!isOverItem && !isOverSubmenu) {
        setTimeout(() => {
          if (!currentSubmenuItem.matches(":hover") && !currentSubmenuItem.submenuElement?.matches(":hover")) {
            currentSubmenuItem.submenuOpen = false;
          }
        }, 100);
      }
    };
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.userTypedTimeout);
    this.closeAllSubmenus();
    this.submenuCleanups.forEach((cleanup) => cleanup());
    this.submenuCleanups.clear();
    document.removeEventListener("mousemove", this.handleGlobalMouseMove);
  }
  firstUpdated() {
    this.syncAriaAttributes();
  }
  updated(changedProperties) {
    if (changedProperties.has("open")) {
      this.customStates.set("open", this.open);
      if (this.open) {
        this.showMenu();
      } else {
        this.closeAllSubmenus();
        this.hideMenu();
      }
    }
    if (changedProperties.has("contextMenu")) {
      const root = this.getRootNode();
      if (this.contextMenuElement) {
        this.contextMenuLongPress?.stop();
        this.contextMenuElement.removeEventListener("contextmenu", this.handleContextMenu);
        this.contextMenuElement.removeEventListener("quiet-long-press", this.handleContextMenu);
      }
      this.contextMenuElement = this.contextMenu ? root.getElementById(this.contextMenu) : null;
      if (this.contextMenuElement) {
        this.contextMenuLongPress = new LongPress(this.contextMenuElement, {
          eventName: "quiet-long-press",
          ignorePointerEvents: true
        });
        this.contextMenuLongPress.start();
        this.contextMenuElement.addEventListener("contextmenu", this.handleContextMenu);
        this.contextMenuElement.addEventListener("quiet-long-press", this.handleContextMenu);
      } else if (this.contextMenu) {
        console.warn(
          `A dropdown was assigned as a context menu to an element with an ID of "${this.contextMenu}" but the element could not be found.`,
          this
        );
      }
    }
  }
  /** Gets all <quiet-dropdown-item> elements slotted in the menu that aren't disabled. */
  getItems(includeDisabled = false) {
    const items = this.defaultSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "quiet-dropdown-item");
    return includeDisabled ? items : items.filter((item) => !item.disabled);
  }
  /** Gets all dropdown items in a specific submenu. */
  getSubmenuItems(parentItem, includeDisabled = false) {
    const submenuSlot = parentItem.shadowRoot?.querySelector('slot[name="submenu"]') || parentItem.querySelector('slot[name="submenu"]');
    if (!submenuSlot) {
      return [];
    }
    const items = submenuSlot.assignedElements({ flatten: true }).filter((el) => el.localName === "quiet-dropdown-item");
    return includeDisabled ? items : items.filter((item) => !item.disabled);
  }
  /** Handles the submenu navigation stack */
  addToSubmenuStack(item) {
    const index = this.openSubmenuStack.indexOf(item);
    if (index !== -1) {
      this.openSubmenuStack = this.openSubmenuStack.slice(0, index + 1);
    } else {
      this.openSubmenuStack.push(item);
    }
  }
  /** Removes the last item from the submenu stack */
  removeFromSubmenuStack() {
    return this.openSubmenuStack.pop();
  }
  /** Gets the current active submenu item */
  getCurrentSubmenuItem() {
    return this.openSubmenuStack.length > 0 ? this.openSubmenuStack[this.openSubmenuStack.length - 1] : void 0;
  }
  /** Closes all submenus in the dropdown. */
  closeAllSubmenus() {
    const items = this.getItems(true);
    items.forEach((item) => {
      item.submenuOpen = false;
    });
    this.openSubmenuStack = [];
  }
  /** Closes sibling submenus at the same level as the specified item. */
  closeSiblingSubmenus(item) {
    const parentDropdownItem = item.closest('quiet-dropdown-item:not([slot="submenu"])');
    let siblingItems;
    if (parentDropdownItem) {
      siblingItems = this.getSubmenuItems(parentDropdownItem, true);
    } else {
      siblingItems = this.getItems(true);
    }
    siblingItems.forEach((siblingItem) => {
      if (siblingItem !== item && siblingItem.submenuOpen) {
        siblingItem.submenuOpen = false;
      }
    });
    if (!this.openSubmenuStack.includes(item)) {
      this.openSubmenuStack.push(item);
    }
  }
  /** Get the slotted trigger button, a <quiet-button> or <button> element */
  getTrigger() {
    return this.querySelector('[slot="trigger"]');
  }
  /** Shows the dropdown menu. This should only be called from within updated(). */
  async showMenu() {
    const anchor = this.contextMenu ? this.contextMenuVirtualElement : this.getTrigger();
    if (!anchor) return;
    const openEvent = new QuietBeforeOpenEvent();
    this.dispatchEvent(openEvent);
    if (openEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    openDropdowns.forEach((dropdown) => dropdown.open = false);
    this.menu.showPopover();
    this.open = true;
    if (this.contextMenu) lockScrolling(this);
    openDropdowns.add(this);
    this.syncAriaAttributes();
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    document.addEventListener("pointerdown", this.handleDocumentPointerDown);
    document.addEventListener("focusin", this.handleDocumentFocusIn);
    document.addEventListener("mousemove", this.handleGlobalMouseMove);
    this.menu.hidden = false;
    this.cleanup = autoUpdate(anchor, this.menu, () => this.reposition());
    await animateWithClass(this.menu, "show");
    const items = this.getItems();
    if (items.length > 0) {
      items.forEach((item, index) => item.active = index === 0);
      items[0].focus();
    }
    this.dispatchEvent(new QuietOpenEvent());
  }
  /** Hides the dropdown menu. This should only be called from within updated(). */
  async hideMenu() {
    const closeEvent = new QuietBeforeCloseEvent({ source: this });
    this.dispatchEvent(closeEvent);
    if (closeEvent.defaultPrevented) {
      this.open = true;
      return;
    }
    this.open = false;
    unlockScrolling(this);
    openDropdowns.delete(this);
    this.syncAriaAttributes();
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    document.removeEventListener("pointerdown", this.handleDocumentPointerDown);
    document.removeEventListener("focusin", this.handleDocumentFocusIn);
    document.removeEventListener("mousemove", this.handleGlobalMouseMove);
    if (!this.menu.hidden) {
      await animateWithClass(this.menu, "hide");
      this.menu.hidden = true;
      this.menu.hidePopover();
      this.dispatchEvent(new QuietCloseEvent());
    }
    if (this.cleanup) {
      this.cleanup();
      this.cleanup = void 0;
      this.removeAttribute("data-placement");
    }
  }
  /** Repositions the dropdown menu */
  reposition() {
    const anchor = this.contextMenu ? this.contextMenuVirtualElement : this.getTrigger();
    if (!anchor) return;
    computePosition(anchor, this.menu, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.offset }),
        flip(),
        shift(),
        size({
          apply: ({ availableWidth, availableHeight }) => {
            Object.assign(this.menu.style, {
              maxWidth: `${Math.max(0, availableWidth)}px`,
              maxHeight: `${Math.max(0, availableHeight)}px`
            });
          },
          padding: 10
          // so it doesn't touch the edge
        })
      ]
    }).then(({ x: x2, y, placement }) => {
      this.setAttribute("data-placement", placement);
      Object.assign(this.menu.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
    });
  }
  /** Handles clicks on the menu. */
  handleMenuClick(event) {
    const item = event.target.closest("quiet-dropdown-item");
    if (!item || item.disabled) return;
    if (item.slotsWithContent && item.slotsWithContent.has("submenu")) {
      if (!item.submenuOpen) {
        this.closeSiblingSubmenus(item);
        this.addToSubmenuStack(item);
        item.submenuOpen = true;
      }
      event.stopPropagation();
      return;
    }
    this.makeSelection(item, event);
  }
  /** Prepares dropdown items when they get added or removed */
  async handleMenuSlotChange() {
    const items = this.getItems(true);
    await Promise.all(items.map((item) => item.updateComplete));
    const hasCheckbox = items.some((item) => item.type === "checkbox");
    const hasSubmenu = items.some((item) => item.hasSubmenu);
    items.forEach((item, index) => {
      item.active = index === 0;
      item.checkboxAdjacent = hasCheckbox;
      item.submenuAdjacent = hasSubmenu;
    });
  }
  /** Toggles the dropdown menu */
  handleTriggerClick() {
    this.open = !this.open;
  }
  /** Given an x and y coordinate, a virtual element for Floating UI is returned.  */
  getContextMenuVirtualElement(clientX, clientY) {
    return {
      getBoundingClientRect: () => {
        return {
          x: clientX,
          y: clientY,
          top: clientY,
          left: clientX,
          bottom: clientY,
          right: clientX,
          width: 0,
          height: 0
        };
      }
    };
  }
  /** Handles submenu opening events */
  handleSubmenuOpening(event) {
    const openingItem = event.detail.item;
    this.closeSiblingSubmenus(openingItem);
    this.addToSubmenuStack(openingItem);
    this.setupSubmenuPosition(openingItem);
    this.processSubmenuItems(openingItem);
  }
  /** Sets up submenu positioning with autoUpdate */
  setupSubmenuPosition(item) {
    if (!item.submenuElement) return;
    this.cleanupSubmenuPosition(item);
    const cleanup = autoUpdate(item, item.submenuElement, () => {
      this.positionSubmenu(item);
      this.updateSafeTriangleCoordinates(item);
    });
    this.submenuCleanups.set(item, cleanup);
    const submenuSlot = item.submenuElement.querySelector('slot[name="submenu"]');
    if (submenuSlot) {
      submenuSlot.removeEventListener("slotchange", QuietDropdown.handleSubmenuSlotChange);
      submenuSlot.addEventListener("slotchange", QuietDropdown.handleSubmenuSlotChange);
      QuietDropdown.handleSubmenuSlotChange({ target: submenuSlot });
    }
  }
  static handleSubmenuSlotChange(event) {
    const slot = event.target;
    if (!slot) return;
    const items = slot.assignedElements().filter((el) => el.localName === "quiet-dropdown-item");
    if (items.length === 0) return;
    const hasSubmenuItems = items.some((item) => item.slotsWithContent && item.slotsWithContent.has("submenu"));
    const hasCheckboxItems = items.some((item) => item.type === "checkbox");
    items.forEach((item) => {
      item.submenuAdjacent = hasSubmenuItems;
      item.checkboxAdjacent = hasCheckboxItems;
    });
  }
  processSubmenuItems(item) {
    if (!item.submenuElement) return;
    const submenuItems = this.getSubmenuItems(item, true);
    const hasSubmenuItems = submenuItems.some(
      (subItem) => subItem.slotsWithContent && subItem.slotsWithContent.has("submenu")
    );
    submenuItems.forEach((subItem) => {
      subItem.submenuAdjacent = hasSubmenuItems;
    });
  }
  /** Cleans up submenu positioning */
  cleanupSubmenuPosition(item) {
    const cleanup = this.submenuCleanups.get(item);
    if (cleanup) {
      cleanup();
      this.submenuCleanups.delete(item);
    }
  }
  /** Positions a submenu relative to its parent item */
  positionSubmenu(item) {
    if (!item.submenuElement) return;
    const isRtl = this.localize.dir() === "rtl";
    const placement = isRtl ? "left-start" : "right-start";
    computePosition(item, item.submenuElement, {
      placement,
      middleware: [
        offset({
          mainAxis: 0,
          crossAxis: -5
        }),
        flip({
          fallbackStrategy: "bestFit"
        }),
        shift({
          padding: 8
        })
      ]
    }).then(({ x: x2, y, placement: placement2 }) => {
      item.submenuElement.setAttribute("data-placement", placement2);
      Object.assign(item.submenuElement.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
    });
  }
  /** Updates the safe triangle coordinates for a submenu */
  updateSafeTriangleCoordinates(item) {
    if (!item.submenuElement || !item.submenuOpen) return;
    const isKeyboardNavigation = document.activeElement?.matches(":focus-visible");
    if (isKeyboardNavigation) {
      item.submenuElement.style.setProperty("--safe-triangle-visible", "none");
      return;
    }
    item.submenuElement.style.setProperty("--safe-triangle-visible", "block");
    const submenuRect = item.submenuElement.getBoundingClientRect();
    const placement = item.submenuElement.getAttribute("data-placement") || "";
    const isRtl = this.localize.dir() === "rtl";
    const isLeftPlacement = placement.startsWith("left");
    const isRightPlacement = placement.startsWith("right");
    let submenuEdgeX;
    if (isLeftPlacement) {
      submenuEdgeX = submenuRect.right;
    } else if (isRightPlacement) {
      submenuEdgeX = submenuRect.left;
    } else {
      submenuEdgeX = isRtl ? submenuRect.right : submenuRect.left;
    }
    item.submenuElement.style.setProperty("--safe-triangle-submenu-start-x", `${submenuEdgeX}px`);
    item.submenuElement.style.setProperty("--safe-triangle-submenu-start-y", `${submenuRect.top}px`);
    item.submenuElement.style.setProperty("--safe-triangle-submenu-end-x", `${submenuEdgeX}px`);
    item.submenuElement.style.setProperty("--safe-triangle-submenu-end-y", `${submenuRect.bottom}px`);
  }
  /** Makes a selection, emits the quiet-select event, and closes the dropdown. */
  makeSelection(item, originalEvent) {
    const trigger = this.getTrigger();
    if (item.disabled) {
      return;
    }
    if (item.type === "checkbox") {
      item.checked = !item.checked;
    }
    const selectEvent = new QuietSelectEvent({ item });
    this.dispatchEvent(selectEvent);
    if (!selectEvent.defaultPrevented) {
      this.open = false;
      trigger?.focus();
    }
    if (item.hiddenLink) {
      const clickEvent = new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
        view: window,
        detail: originalEvent.detail,
        ctrlKey: originalEvent.ctrlKey,
        shiftKey: originalEvent.shiftKey,
        altKey: originalEvent.altKey,
        metaKey: originalEvent.metaKey
      });
      item.hiddenLink.dispatchEvent(clickEvent);
    }
  }
  /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
  async syncAriaAttributes() {
    const trigger = this.getTrigger();
    let nativeButton;
    if (!trigger) {
      return;
    }
    if (trigger.localName === "quiet-button") {
      await customElements.whenDefined("quiet-button");
      await trigger.updateComplete;
      nativeButton = trigger.shadowRoot.querySelector('[part="button"]');
    } else {
      nativeButton = trigger;
    }
    if (!nativeButton.hasAttribute("id")) {
      nativeButton.setAttribute("id", createId("quiet-dropdown-trigger-"));
    }
    nativeButton.setAttribute("aria-haspopup", "menu");
    nativeButton.setAttribute("aria-expanded", this.open ? "true" : "false");
    this.menu.setAttribute("aria-expanded", "false");
  }
  render() {
    return x`
      <slot name="trigger" @click=${this.handleTriggerClick} @slotchange=${this.syncAriaAttributes}></slot>

      <div
        id="menu"
        part="menu"
        popover="manual"
        role="menu"
        tabindex="-1"
        aria-orientation="vertical"
        hidden
        @click=${this.handleMenuClick}
        @submenu-opening=${this.handleSubmenuOpening}
      >
        <slot @slotchange=${this.handleMenuSlotChange}></slot>
      </div>
    `;
  }
};
QuietDropdown.styles = [host_styles_default, dropdown_styles_default];
__decorateClass([
  e("slot:not([name])")
], QuietDropdown.prototype, "defaultSlot", 2);
__decorateClass([
  e("#menu")
], QuietDropdown.prototype, "menu", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietDropdown.prototype, "open", 2);
__decorateClass([
  n({ attribute: "context-menu" })
], QuietDropdown.prototype, "contextMenu", 2);
__decorateClass([
  n({ reflect: true })
], QuietDropdown.prototype, "placement", 2);
__decorateClass([
  n({ type: Number })
], QuietDropdown.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], QuietDropdown.prototype, "offset", 2);
QuietDropdown = __decorateClass([
  t("quiet-dropdown")
], QuietDropdown);
export {
  QuietDropdown
};
