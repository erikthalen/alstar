/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  dropdown_item_styles_default
} from "./chunk.XJH2B3AC.js";
import {
  QuietElement,
  e,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  animateWithClass
} from "./chunk.VBE24RWL.js";
import {
  o
} from "./chunk.7LEBIIO5.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/dropdown-item/dropdown-item.ts
var QuietDropdownItem = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.active = false;
    this.checkboxAdjacent = false;
    this.submenuAdjacent = false;
    this.type = "normal";
    this.variant = "neutral";
    this.checked = false;
    this.disabled = false;
    this.submenuOpen = false;
    this.hasSubmenu = false;
    /** Handles mouse enter to open the submenu */
    this.handleMouseEnter = () => {
      if (this.hasSubmenu && !this.disabled) {
        this.notifyParentOfOpening();
        this.submenuOpen = true;
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("mouseenter", this.handleMouseEnter);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.closeSubmenu();
    this.removeEventListener("mouseenter", this.handleMouseEnter);
  }
  firstUpdated() {
    this.setAttribute("tabindex", "-1");
    this.hasSubmenu = this.slotsWithContent.has("submenu");
    this.updateHasSubmenuState();
  }
  updated(changedProperties) {
    if (changedProperties.has("active")) {
      this.setAttribute("tabindex", this.active ? "0" : "-1");
      this.customStates.set("active", this.active);
    }
    if (changedProperties.has("checked")) {
      this.setAttribute("aria-checked", this.checked ? "true" : "false");
      this.customStates.set("checked", this.checked);
    }
    if (changedProperties.has("disabled")) {
      this.setAttribute("aria-disabled", this.disabled ? "true" : "false");
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("type")) {
      if (this.type === "checkbox") {
        this.setAttribute("role", "menuitemcheckbox");
      } else {
        this.setAttribute("role", "menuitem");
      }
    }
    if (changedProperties.has("submenuOpen")) {
      this.customStates.set("submenu-open", this.submenuOpen);
      if (this.submenuOpen) {
        this.openSubmenu();
      } else {
        this.closeSubmenu();
      }
    }
    if (changedProperties.has("slotsWithContent")) {
      this.hasSubmenu = this.slotsWithContent.has("submenu");
      this.updateHasSubmenuState();
      if (this.hasSubmenu) {
        this.setAttribute("aria-haspopup", "menu");
        this.setAttribute("aria-expanded", this.submenuOpen ? "true" : "false");
      } else {
        this.removeAttribute("aria-haspopup");
        this.removeAttribute("aria-expanded");
      }
    }
  }
  /** Update the has-submenu custom state */
  updateHasSubmenuState() {
    this.customStates.set("has-submenu", this.hasSubmenu);
  }
  /** Opens the submenu. */
  async openSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.notifyParentOfOpening();
    this.submenuElement.showPopover();
    this.submenuElement.hidden = false;
    this.submenuElement.setAttribute("data-visible", "");
    this.submenuOpen = true;
    this.setAttribute("aria-expanded", "true");
    await animateWithClass(this.submenuElement, "show");
    setTimeout(() => {
      const items = this.getSubmenuItems();
      if (items.length > 0) {
        items.forEach((item, index) => item.active = index === 0);
        items[0].focus();
      }
    }, 0);
  }
  /** Notifies the parent dropdown that this item is opening its submenu */
  notifyParentOfOpening() {
    const event = new CustomEvent("submenu-opening", {
      bubbles: true,
      composed: true,
      detail: { item: this }
    });
    this.dispatchEvent(event);
    const parent = this.parentElement;
    if (parent) {
      const siblings = [...parent.children].filter(
        (el) => el !== this && el.localName === "quiet-dropdown-item" && el.getAttribute("slot") === this.getAttribute("slot") && el.submenuOpen
      );
      siblings.forEach((sibling) => {
        sibling.submenuOpen = false;
      });
    }
  }
  /** Closes the submenu. */
  async closeSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;
    this.submenuOpen = false;
    this.setAttribute("aria-expanded", "false");
    if (!this.submenuElement.hidden) {
      await animateWithClass(this.submenuElement, "hide");
      this.submenuElement.hidden = true;
      this.submenuElement.removeAttribute("data-visible");
      this.submenuElement.hidePopover();
    }
  }
  /** Gets all dropdown items in the submenu. */
  getSubmenuItems() {
    return [...this.children].filter(
      (el) => el.localName === "quiet-dropdown-item" && el.getAttribute("slot") === "submenu" && !el.hasAttribute("disabled")
    );
  }
  render() {
    const isLink = typeof this.href === "string";
    return x`
      ${this.type === "checkbox" ? x`
            <quiet-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></quiet-icon>
          ` : ""}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu ? x`
            <quiet-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></quiet-icon>
          ` : ""}
      ${this.whenSlotted(
      "submenu",
      x`
          <div
            id="submenu"
            part="submenu"
            popover="manual"
            role="menu"
            tabindex="-1"
            aria-orientation="vertical"
            hidden
          >
            <slot name="submenu"></slot>
          </div>
        `,
      { force: this.hasSubmenu }
    )}
      ${isLink ? (
      // Render a hidden link we can use to simulate clicks when the dropdown item is selected
      x`
            <a
              id="hidden-link"
              class="vh"
              href=${o(isLink && !this.disabled ? this.href : void 0)}
              target=${o(isLink ? this.target : void 0)}
              download=${o(isLink ? this.download : void 0)}
              rel=${o(isLink && this.rel ? this.rel : void 0)}
              tabindex="0"
              aria-hidden="true"
              @click=${(event) => event.stopImmediatePropagation()}
            ></a>
          `
    ) : ""}
    `;
  }
};
QuietDropdownItem.styles = [host_styles_default, dropdown_item_styles_default];
// Enable slot observation
QuietDropdownItem.observeSlots = true;
__decorateClass([
  e("#hidden-link")
], QuietDropdownItem.prototype, "hiddenLink", 2);
__decorateClass([
  e("#submenu")
], QuietDropdownItem.prototype, "submenuElement", 2);
__decorateClass([
  n({ type: Boolean })
], QuietDropdownItem.prototype, "active", 2);
__decorateClass([
  n({ attribute: "checkbox-adjacent", type: Boolean, reflect: true })
], QuietDropdownItem.prototype, "checkboxAdjacent", 2);
__decorateClass([
  n({ attribute: "submenu-adjacent", type: Boolean, reflect: true })
], QuietDropdownItem.prototype, "submenuAdjacent", 2);
__decorateClass([
  n()
], QuietDropdownItem.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], QuietDropdownItem.prototype, "type", 2);
__decorateClass([
  n({ reflect: true })
], QuietDropdownItem.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean })
], QuietDropdownItem.prototype, "checked", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietDropdownItem.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietDropdownItem.prototype, "submenuOpen", 2);
__decorateClass([
  n()
], QuietDropdownItem.prototype, "href", 2);
__decorateClass([
  n()
], QuietDropdownItem.prototype, "target", 2);
__decorateClass([
  n()
], QuietDropdownItem.prototype, "rel", 2);
__decorateClass([
  n()
], QuietDropdownItem.prototype, "download", 2);
__decorateClass([
  r()
], QuietDropdownItem.prototype, "hasSubmenu", 2);
QuietDropdownItem = __decorateClass([
  t("quiet-dropdown-item")
], QuietDropdownItem);
QuietDropdownItem.disableWarning?.("change-in-update");

export {
  QuietDropdownItem
};
