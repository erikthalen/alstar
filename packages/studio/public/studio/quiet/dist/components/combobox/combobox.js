/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.PBYVOLWJ.js";
import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  size
} from "../../chunks/chunk.FWK2CT6L.js";
import {
  combobox_styles_default
} from "../../chunks/chunk.3Y5U3TXX.js";
import "../../chunks/chunk.REI7R7F5.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  QuietFormControlElement,
  e as e2,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  form_control_styles_default
} from "../../chunks/chunk.QB6BERFO.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
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
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent
} from "../../chunks/chunk.E7L7Q2A4.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  o as o2
} from "../../chunks/chunk.P6QWJITB.js";
import {
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/combobox/combobox.ts
var QuietCombobox = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.optionIdCounter = 0;
    this.localize = new Localize(this);
    this.open = false;
    this.inputValue = "";
    this.activeItem = null;
    this.selectedItems = [];
    this.filteredItems = [];
    this.inputWidth = "auto";
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.liveAnnouncement = "";
    this.value = "";
    this.disabled = false;
    this.required = false;
    this.multiple = false;
    this.withClear = false;
    this.appearance = "normal";
    this.size = "md";
    this.pill = false;
    this.placement = "bottom-start";
    this.distance = 0;
    this.offset = 0;
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Event handlers
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    this.handleInput = () => {
      this.inputValue = this.textBox.value;
      this.filterItems(this.inputValue);
      if (!this.open && this.inputValue && this.filteredItems.length > 0) {
        this.open = true;
      }
      if (!this.multiple) {
        const matchingItem = this.findMatchingItem(this.inputValue);
        if (matchingItem && !matchingItem.disabled) {
          this.selectedItems.forEach((i) => i.selected = false);
          matchingItem.selected = true;
          this.selectedItems = [matchingItem];
          this.value = matchingItem.value || matchingItem.textContent || "";
          this.updateFormValue();
        } else if (this.selectedItems.length > 0) {
          this.selectedItems[0].selected = false;
          this.selectedItems = [];
          this.value = "";
          this.updateFormValue();
        }
      }
      this.dispatchEvent(new QuietInputEvent());
    };
    this.handleFocus = () => {
      this.customStates.set("focused", true);
      this.dispatchEvent(new QuietFocusEvent());
      if (!this.open && this.filteredItems.length > 0) {
        this.open = true;
      }
    };
    this.handleInputClick = (event) => {
      event.stopPropagation();
      if (this.customStates.has("focused") && this.filteredItems.length > 0 && !this.open) {
        this.open = true;
      }
    };
    this.handleBlur = (event) => {
      this.customStates.set("focused", false);
      const relatedTarget = event.relatedTarget;
      const isInternalFocus = relatedTarget && (this.contains(relatedTarget) || this.dropdown?.contains(relatedTarget));
      if (!isInternalFocus) {
        this.clearInvalidInput();
        this.open = false;
      }
      this.dispatchEvent(new QuietBlurEvent());
    };
    this.handleKeyDown = (event) => {
      if (this.disabled) return;
      if (event.key === "Backspace" && !this.inputValue && this.multiple && this.selectedItems.length > 0) {
        const lastItem = this.selectedItems[this.selectedItems.length - 1];
        this.deselectItem(lastItem);
        return;
      }
      if (!this.open && (event.key === "ArrowDown" || event.key === "ArrowUp")) {
        event.preventDefault();
        this.open = true;
        return;
      }
      if (!this.open) return;
      switch (event.key) {
        case "ArrowDown":
          event.preventDefault();
          this.navigateItems(1);
          break;
        case "ArrowUp":
          event.preventDefault();
          this.navigateItems(-1);
          break;
        case "Enter":
          event.preventDefault();
          if (this.activeItem) {
            this.selectItem(this.activeItem);
          }
          break;
        case "Escape":
          event.preventDefault();
          this.open = false;
          break;
        case "Home":
          event.preventDefault();
          if (this.filteredItems.length > 0) {
            this.setActiveItem(this.filteredItems[0], true);
          }
          break;
        case "End":
          event.preventDefault();
          if (this.filteredItems.length > 0) {
            this.setActiveItem(this.filteredItems[this.filteredItems.length - 1], true);
          }
          break;
      }
    };
    this.handleDocumentClick = (event) => {
      const path = event.composedPath();
      const visualBox = this.shadowRoot?.querySelector("#visual-box");
      const dropdown = this.dropdown;
      if (!path.includes(visualBox) && !path.includes(dropdown)) {
        this.open = false;
      }
    };
    this.handleDocumentKeyDown = (event) => {
      if (event.key === "Escape") {
        this.open = false;
      }
    };
    this.handleVisualBoxClick = (event) => {
      if (this.disabled) return;
      const target = event.target;
      if (target.closest("#clear-button") || target.closest(".tag-remove")) {
        return;
      }
      event.stopPropagation();
      if (this.customStates.has("focused")) {
        this.open = !this.open;
      }
      this.textBox.focus();
    };
    this.handleClear = () => {
      this.value = this.multiple ? [] : "";
      this.selectedItems.forEach((item) => item.selected = false);
      this.selectedItems = [];
      this.inputValue = "";
      this.filterItems("");
      this.updateFormValue();
      this.hadUserInteraction = true;
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true, cancelable: false }));
      this.dispatchEvent(new QuietChangeEvent());
      this.textBox.focus();
    };
    this.handleSlotChange = () => {
      this.updateItems();
    };
    this.handleItemClick = (event) => {
      const item = event.target.closest("quiet-combobox-item");
      if (item && !item.disabled) {
        this.selectItem(item);
      }
    };
    this.handleItemPointerMove = (event) => {
      const hoveredItem = event.target.closest("quiet-combobox-item");
      if (!hoveredItem || this.disabled) return;
      if (hoveredItem !== this.activeItem) {
        if (this.activeItem) {
          this.activeItem.active = false;
          this.activeItem.removeAttribute("data-keyboard-nav");
        }
      }
    };
    this.handleHostInvalid = () => {
      this.wasSubmitted = true;
    };
  }
  get focusableAnchor() {
    return this.textBox;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
    this.cleanup?.();
    this.clearAnnouncementTimers();
  }
  firstUpdated() {
    this.updateItems();
    this.updateFormValue();
    this.updateInputWidth();
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("open")) {
      this.customStates.set("open", this.open);
      if (this.open) {
        this.showDropdown();
      } else {
        this.hideDropdown();
      }
    }
    if (changedProperties.has("value")) {
      this.syncSelectedItems();
      this.updateFormValue();
      this.customStates.set("blank", this.isBlank());
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (this.hadUserInteraction || this.wasSubmitted) {
      this.customStates.set("user-invalid", this.isInvalid);
      this.customStates.set("user-valid", !this.isInvalid);
    } else {
      this.customStates.set("user-invalid", false);
      this.customStates.set("user-valid", false);
    }
    if (changedProperties.has("multiple")) {
      this.value = this.multiple ? [] : "";
      this.selectedItems = [];
      this.inputValue = "";
    }
    if (changedProperties.has("inputValue")) {
      this.updateInputWidth();
    }
  }
  formDisabledCallback(disabled) {
    this.disabled = disabled;
  }
  formResetCallback() {
    const initiallySelectedItems = this.getItems(true).filter((item) => item.hasAttribute("selected"));
    this.getItems(true).forEach((item) => {
      item.selected = initiallySelectedItems.includes(item);
    });
    if (this.multiple) {
      this.value = initiallySelectedItems.map((item) => item.value || item.textContent || "");
      this.selectedItems = initiallySelectedItems;
    } else {
      this.value = initiallySelectedItems.length > 0 ? initiallySelectedItems[0].value || initiallySelectedItems[0].textContent || "" : "";
      this.selectedItems = initiallySelectedItems.length > 0 ? [initiallySelectedItems[0]] : [];
      this.inputValue = initiallySelectedItems.length > 0 ? initiallySelectedItems[0].getLabelText() : "";
    }
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.isInvalid = false;
    this.updateFormValue();
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Item management methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /** Gets all <quiet-combobox-item> elements that aren't disabled (by default). */
  getItems(includeDisabled = false) {
    const items = [...this.querySelectorAll("quiet-combobox-item")];
    return includeDisabled ? items : items.filter((item) => !item.disabled);
  }
  updateItems() {
    const items = this.getItems(true);
    items.forEach((item) => {
      if (!item.id) {
        item.id = `quiet-combobox-option-${this.optionIdCounter++}`;
      }
      item.combobox = this;
    });
    this.filteredItems = this.getItems();
    if (!this.value || Array.isArray(this.value) && this.value.length === 0) {
      const selectedItems = items.filter((item) => item.hasAttribute("selected"));
      if (selectedItems.length > 0) {
        if (this.multiple) {
          this.value = selectedItems.map((item) => item.value || item.textContent || "");
          this.selectedItems = selectedItems;
        } else {
          this.value = selectedItems[0].value || selectedItems[0].textContent || "";
          this.selectedItems = [selectedItems[0]];
        }
        selectedItems.forEach((item) => item.selected = true);
      }
    } else {
      this.syncSelectedItems();
    }
  }
  syncSelectedItems() {
    const items = this.getItems(true);
    const values = Array.isArray(this.value) ? this.value : [this.value].filter(Boolean);
    const existingSelectedMap = new Map(this.selectedItems.map((item) => [item.value || item.textContent || "", item]));
    const newSelectedItems = [];
    values.forEach((value) => {
      if (existingSelectedMap.has(value)) {
        const item = existingSelectedMap.get(value);
        if (items.includes(item)) {
          newSelectedItems.push(item);
        }
      } else {
        const item = items.find((i) => (i.value || i.textContent || "") === value);
        if (item) {
          newSelectedItems.push(item);
        }
      }
    });
    items.forEach((item) => {
      const itemValue = item.value || item.textContent || "";
      const isSelected = values.includes(itemValue);
      item.selected = isSelected;
    });
    this.selectedItems = newSelectedItems;
    if (!this.multiple && this.selectedItems.length > 0) {
      this.inputValue = this.selectedItems[0].getLabelText();
    }
  }
  findMatchingItem(query) {
    const items = this.getItems(true);
    return items.find((item) => item.getLabelText().toLowerCase() === query.trim().toLowerCase());
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Filtering methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  filterItems(query, preserveActiveItem = false) {
    const items = this.getItems();
    const currentActiveItem = preserveActiveItem ? this.activeItem : null;
    if (!query) {
      this.filteredItems = items;
      items.forEach((item) => item.hidden = false);
      if (this.filteredItems.length > 0 && this.customStates.has("focused")) {
        this.open = true;
        this.announceFilterResults(this.filteredItems.length);
      }
    } else {
      const lowerQuery = query.toLowerCase();
      this.filteredItems = [];
      items.forEach((item) => {
        const text = item.getLabelText().toLowerCase();
        const matches = text.includes(lowerQuery);
        item.hidden = !matches;
        if (matches) {
          this.filteredItems.push(item);
        }
      });
      this.announceFilterResults(this.filteredItems.length);
    }
    if (this.filteredItems.length === 0 && this.open) {
      this.open = false;
    } else if (this.filteredItems.length > 0 && this.open) {
      if (preserveActiveItem && currentActiveItem && this.filteredItems.includes(currentActiveItem)) {
        this.setActiveItem(currentActiveItem);
      } else {
        this.setActiveItem(this.filteredItems[0]);
      }
    }
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Navigation methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  setActiveItem(item, isKeyboard = false) {
    if (this.activeItem) {
      this.activeItem.active = false;
      this.activeItem.removeAttribute("data-keyboard-nav");
    }
    this.activeItem = item;
    if (item) {
      item.active = true;
      if (isKeyboard) {
        item.setAttribute("data-keyboard-nav", "");
      }
      item.scrollIntoView({ block: "nearest" });
      this.announceOption(item);
    }
  }
  navigateItems(direction) {
    if (this.filteredItems.length === 0) return;
    if (!this.activeItem) {
      if (direction > 0) {
        this.setActiveItem(this.filteredItems[0], true);
      } else {
        this.setActiveItem(this.filteredItems[this.filteredItems.length - 1], true);
      }
      return;
    }
    let index = this.filteredItems.indexOf(this.activeItem);
    index += direction;
    if (index < 0) {
      index = this.filteredItems.length - 1;
    } else if (index >= this.filteredItems.length) {
      index = 0;
    }
    this.setActiveItem(this.filteredItems[index], true);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Selection methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  clearInvalidInput() {
    if (!this.inputValue.trim()) return;
    const matchingItem = this.findMatchingItem(this.inputValue);
    if (!matchingItem || matchingItem.disabled) {
      if (!this.multiple) {
        this.inputValue = this.selectedItems.length > 0 ? this.selectedItems[0].getLabelText() : "";
      } else {
        this.inputValue = "";
      }
      this.filterItems("");
      return;
    }
  }
  selectItem(item) {
    if (item.disabled) return;
    if (this.multiple) {
      if (item.selected) {
        this.deselectItem(item);
      } else {
        item.selected = true;
        this.selectedItems.push(item);
        const values = this.selectedItems.map((i) => i.value || i.textContent || "");
        this.value = values;
        this.inputValue = "";
        this.setActiveItem(item);
        this.filterItems("", true);
        this.announceChange(this.localize.term("itemAdded", item.textContent || ""));
      }
      this.textBox.focus();
    } else {
      this.selectedItems.forEach((i) => i.selected = false);
      item.selected = true;
      this.selectedItems = [item];
      this.value = item.value || item.textContent || "";
      this.inputValue = item.getLabelText();
      this.open = false;
      this.announceChange(this.localize.term("itemSelected", item.textContent || ""));
    }
    this.hadUserInteraction = true;
    this.updateFormValue();
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  deselectItem(item) {
    item.selected = false;
    const index = this.selectedItems.indexOf(item);
    if (index > -1) {
      this.selectedItems.splice(index, 1);
    }
    if (this.multiple) {
      const values = this.selectedItems.map((i) => i.value || i.textContent || "");
      this.value = values;
      this.announceChange(this.localize.term("itemRemoved", item.textContent || ""));
    } else {
      this.value = "";
      this.inputValue = "";
    }
    this.updateFormValue();
    this.dispatchEvent(new QuietChangeEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  removeTag(item, event) {
    event.stopPropagation();
    this.deselectItem(item);
    this.textBox.focus();
    this.filterItems(this.inputValue);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Announcement methods (accessibility)
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  clearAnnouncementTimers() {
    if (this.liveRegionTimeoutId) {
      clearTimeout(this.liveRegionTimeoutId);
      this.liveRegionTimeoutId = void 0;
    }
    if (this.navigationDebounceId) {
      clearTimeout(this.navigationDebounceId);
      this.navigationDebounceId = void 0;
    }
  }
  announceChange(message) {
    requestAnimationFrame(() => {
      this.liveAnnouncement = "";
      requestAnimationFrame(() => {
        this.liveAnnouncement = message;
      });
    });
  }
  announceOption(item) {
    this.clearAnnouncementTimers();
    const position = this.filteredItems.indexOf(item) + 1;
    const total = this.filteredItems.length;
    let announcement = `${item.textContent}`;
    if (total > 0) {
      announcement += `, ${this.localize.term("numberOfTotal", position, total)}`;
    }
    if (item.selected) {
      announcement += `, ${this.localize.term("selected")}`;
    }
    if (item.disabled) {
      announcement += `, ${this.localize.term("disabled")}`;
    }
    this.navigationDebounceId = setTimeout(() => {
      this.liveAnnouncement = "";
      requestAnimationFrame(() => {
        this.liveAnnouncement = announcement;
      });
    }, 75);
  }
  announceFilterResults(count) {
    if (this.liveRegionTimeoutId) {
      clearTimeout(this.liveRegionTimeoutId);
    }
    const announcement = count === 0 ? this.localize.term("noResultsFound") : this.localize.term("resultsAvailable", count);
    requestAnimationFrame(() => {
      this.liveAnnouncement = "";
      requestAnimationFrame(() => {
        this.liveAnnouncement = announcement;
      });
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Dropdown methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  async showDropdown() {
    if (!this.dropdown) return;
    const beforeOpenEvent = new QuietBeforeOpenEvent();
    this.dispatchEvent(beforeOpenEvent);
    if (beforeOpenEvent.defaultPrevented) {
      this.open = false;
      return;
    }
    this.dispatchEvent(new QuietOpenEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    this.dropdown.hidden = false;
    this.dropdown.showPopover();
    document.addEventListener("click", this.handleDocumentClick);
    document.addEventListener("keydown", this.handleDocumentKeyDown);
    this.cleanup = autoUpdate(this.textBox, this.dropdown, () => this.positionDropdown());
    await animateWithClass(this.dropdown, "show");
    if (this.filteredItems.length > 0) {
      this.setActiveItem(this.filteredItems[0], false);
    }
  }
  async hideDropdown() {
    if (!this.dropdown || this.dropdown.hidden) return;
    const beforeCloseEvent = new QuietBeforeCloseEvent({ source: this });
    this.dispatchEvent(beforeCloseEvent);
    if (beforeCloseEvent.defaultPrevented) {
      this.open = true;
      return;
    }
    document.removeEventListener("click", this.handleDocumentClick);
    document.removeEventListener("keydown", this.handleDocumentKeyDown);
    await animateWithClass(this.dropdown, "hide");
    this.dropdown.hidden = true;
    this.dropdown.hidePopover();
    this.cleanup?.();
    if (this.activeItem) {
      this.activeItem.removeAttribute("data-keyboard-nav");
    }
    this.dispatchEvent(new QuietCloseEvent());
    this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
  }
  async positionDropdown() {
    const visualBox = this.shadowRoot?.querySelector("#visual-box");
    if (!visualBox) return;
    computePosition(visualBox, this.dropdown, {
      placement: this.placement,
      middleware: [
        offset({ mainAxis: this.distance, crossAxis: this.offset }),
        flip(),
        shift(),
        size({
          apply: ({ availableWidth, availableHeight, elements }) => {
            const referenceWidth = elements.reference.getBoundingClientRect().width;
            Object.assign(this.dropdown.style, {
              minWidth: `${referenceWidth}px`,
              maxWidth: `${Math.min(400, availableWidth)}px`,
              // Reasonable max width
              maxHeight: `${Math.min(300, availableHeight)}px`
            });
          },
          padding: 8
        })
      ]
    }).then(({ x: x2, y, placement }) => {
      this.setAttribute("data-placement", placement);
      Object.assign(this.dropdown.style, {
        left: `${x2}px`,
        top: `${y}px`
      });
    });
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // Form methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  isBlank() {
    if (this.multiple) {
      return !this.value || Array.isArray(this.value) && this.value.length === 0;
    }
    return !this.value;
  }
  updateFormValue() {
    if (this.multiple && Array.isArray(this.value)) {
      const formData = new FormData();
      this.value.forEach((val) => {
        formData.append(this.name || "", String(val));
      });
      this.internals.setFormValue(formData);
    } else {
      this.internals.setFormValue(String(this.value || ""));
    }
  }
  async updateValidity() {
    await this.updateComplete;
    let flags = {
      valueMissing: this.required && this.isBlank()
    };
    const customError = this.getCustomValidity();
    if (customError) {
      flags.customError = true;
    }
    this.isInvalid = Object.values(flags).some(Boolean);
    const message = customError || (flags.valueMissing ? this.localize.term("pleaseSelectAnOption") : "");
    this.internals.setValidity(flags, message, this.focusableAnchor);
  }
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  // UI helper methods
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  updateInputWidth() {
    if (!this.multiple) {
      this.inputWidth = "auto";
      return;
    }
    const text = this.inputValue || this.placeholder || "";
    const minChars = 8;
    const maxChars = 50;
    const chars = Math.max(minChars, Math.min(text.length + 2, maxChars));
    this.inputWidth = `${chars}ch`;
  }
  /**
   * A custom function for rendering tag content. By default, this function returns the item's full `textContent`. You
   * can override it to customize the content that gets rendered in tags in `multiple` mode.
   */
  getTagContent(item) {
    return x`${item.textContent}`;
  }
  /** Sets focus to the combobox. */
  focus() {
    this.textBox?.focus();
  }
  /** Removes focus from the combobox. */
  blur() {
    this.textBox?.blur();
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    const hasStart = this.slotsWithContent.has("start");
    const hasEnd = this.slotsWithContent.has("end");
    const inputStyles = {
      width: this.multiple ? this.inputWidth : void 0
    };
    const comboboxDescription = [];
    if (hasDescription) {
      comboboxDescription.push("description");
    }
    comboboxDescription.push("combobox-instructions");
    const ariaDescribedBy = comboboxDescription.join(" ");
    return x`
      <label id="label" part="label" for="text-box" class=${e({ vh: !hasLabel })}>
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <!-- Screen reader instructions -->
      <div id="combobox-instructions" class="vh">
        ${this.localize.term("useArrowKeysToNavigateEnterToSelect")}
        ${this.multiple ? this.localize.term("multipleSelectionsAllowed") : ""}
      </div>

      <div
        id="visual-box"
        part="visual-box"
        class=${e({
      normal: this.appearance === "normal",
      filled: this.appearance === "filled",
      unstyled: this.appearance === "unstyled",
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      pill: this.pill,
      disabled: this.disabled,
      multiple: this.multiple,
      "has-clear": this.withClear && !this.isBlank() && !this.disabled,
      "has-start": hasStart,
      "has-end": hasEnd
    })}
        @click=${this.handleVisualBoxClick}
      >
        <slot name="start"></slot>

        <div id="input-area" part="input-area">
          ${this.multiple ? this.selectedItems.map(
      (item) => x`
                  <span part="tag" class="tag" @pointerdown=${(event) => event.preventDefault()}>
                    ${this.getTagContent(item)}
                    <button
                      part="tag-remove"
                      class="tag-remove"
                      type="button"
                      tabindex="-1"
                      aria-label="${this.localize.term("removeItem", item.textContent || "")}"
                      @click=${(event) => this.removeTag(item, event)}
                    >
                      <quiet-icon library="system" name="x"></quiet-icon>
                    </button>
                  </span>
                `
    ) : ""}

          <input
            id="text-box"
            part="text-box"
            type="text"
            role="combobox"
            aria-expanded=${this.open ? "true" : "false"}
            aria-autocomplete="list"
            aria-haspopup="listbox"
            aria-controls="dropdown"
            aria-describedby=${ariaDescribedBy}
            aria-invalid=${this.isInvalid ? "true" : "false"}
            ?disabled=${this.disabled}
            ?required=${this.required}
            placeholder=${o(this.placeholder)}
            .value=${this.inputValue}
            autocomplete="off"
            style=${o2(inputStyles)}
            @input=${this.handleInput}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
            @keydown=${this.handleKeyDown}
            @click=${this.handleInputClick}
          />
        </div>

        ${this.withClear && !this.isBlank() && !this.disabled ? x`
              <button
                id="clear-button"
                part="clear-button"
                class="text-box-button"
                type="button"
                tabindex="-1"
                aria-label="${this.localize.term("clearEntry")}"
                @click=${this.handleClear}
              >
                <quiet-icon library="system" name="circle-x"></quiet-icon>
              </button>
            ` : ""}

        <slot name="end"></slot>

        <quiet-icon
          id="chevron"
          part="chevron"
          exportparts="svg:chevron__svg"
          library="system"
          name="selector"
        ></quiet-icon>
      </div>

      <div
        id="dropdown"
        part="dropdown"
        role="listbox"
        aria-label="${this.label}"
        aria-multiselectable="${this.multiple ? "true" : "false"}"
        popover="manual"
        hidden
        @click=${this.handleItemClick}
        @pointerdown=${(event) => event.preventDefault()}
        @pointermove=${this.handleItemPointerMove}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>

      <div
        id="live-region"
        class="vh"
        role="status"
        aria-live="polite"
        aria-atomic="true"
        aria-relevant="additions text"
      >
        ${this.liveAnnouncement}
      </div>
    `;
  }
};
QuietCombobox.formAssociated = true;
QuietCombobox.observeSlots = true;
QuietCombobox.styles = [host_styles_default, form_control_styles_default, combobox_styles_default];
__decorateClass([
  e2("#dropdown")
], QuietCombobox.prototype, "dropdown", 2);
__decorateClass([
  e2("#text-box")
], QuietCombobox.prototype, "textBox", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "open", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "inputValue", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "activeItem", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "selectedItems", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "filteredItems", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "inputWidth", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "wasSubmitted", 2);
__decorateClass([
  r()
], QuietCombobox.prototype, "liveAnnouncement", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "label", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietCombobox.prototype, "name", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "value", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "placeholder", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCombobox.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCombobox.prototype, "required", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCombobox.prototype, "multiple", 2);
__decorateClass([
  n({ attribute: "with-clear", type: Boolean, reflect: true })
], QuietCombobox.prototype, "withClear", 2);
__decorateClass([
  n({ reflect: true })
], QuietCombobox.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietCombobox.prototype, "size", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCombobox.prototype, "pill", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "placement", 2);
__decorateClass([
  n({ type: Number })
], QuietCombobox.prototype, "distance", 2);
__decorateClass([
  n({ type: Number })
], QuietCombobox.prototype, "offset", 2);
__decorateClass([
  n()
], QuietCombobox.prototype, "form", 2);
QuietCombobox = __decorateClass([
  t("quiet-combobox")
], QuietCombobox);
QuietCombobox.disableWarning?.("change-in-update");
export {
  QuietCombobox
};
