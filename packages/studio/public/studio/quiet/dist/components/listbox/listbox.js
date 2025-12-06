/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.DVFTQ27T.js";
import {
  listbox_styles_default
} from "../../chunks/chunk.JJCZONUT.js";
import "../../chunks/chunk.EMBN4RHU.js";
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
  QuietBlurEvent,
  QuietChangeEvent,
  QuietFocusEvent,
  QuietInputEvent
} from "../../chunks/chunk.E7L7Q2A4.js";
import "../../chunks/chunk.RT7RKCPI.js";
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

// src/components/listbox/listbox.ts
var nativeFileInput = document.createElement("input");
nativeFileInput.name = "quiet-faux-input";
nativeFileInput.type = "text";
nativeFileInput.required = true;
var VALIDATION_MESSAGE = nativeFileInput.validationMessage;
var QuietListbox = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.firstSelectedValue = "";
    this.hadUserInteraction = false;
    this.isInvalid = false;
    this.lastSelectedIndex = -1;
    this.previousValue = "";
    this.typeaheadBuffer = "";
    this.typeaheadTimeout = null;
    this.wasChanged = false;
    this.wasSubmitted = false;
    this.multiple = false;
    this.disabled = false;
    this.readonly = false;
    this.size = "md";
    this.required = false;
  }
  get value() {
    return this.firstSelectedValue;
  }
  set value(newValue) {
    const oldValue = this.firstSelectedValue;
    if (newValue !== oldValue) {
      this.firstSelectedValue = newValue;
      this.updateItemSelectionFromValue(newValue);
      this.requestUpdate("value", oldValue);
    }
  }
  get selectedValues() {
    return this.getSelectedValues();
  }
  set selectedValues(values) {
    this.setSelectedValues(values);
  }
  /** Gets or sets an array of selected listbox items. */
  get selectedItems() {
    return this.getItems(true).filter((item) => item.selected);
  }
  set selectedItems(items) {
    if (!Array.isArray(items)) {
      this.deselectAll();
      return;
    }
    const values = items.map((item) => item?.value).filter(Boolean);
    this.selectedValues = values;
  }
  get focusableAnchor() {
    return this.listbox;
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
    this.addEventListener("keydown", this.handleKeyDown);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
    this.removeEventListener("keydown", this.handleKeyDown);
    this.clearTypeaheadTimeout();
  }
  firstUpdated(changedProperties) {
    super.firstUpdated(changedProperties);
    this.initializeValueFromSelectedItems();
    this.initializeItems();
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("value")) {
      this.customStates.set("blank", this.firstSelectedValue === "");
      this.updateFormValue();
      this.updateSelectedItems();
      this.resetRovingTabIndex();
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      this.updateListboxAttributesOnItems();
    }
    const hadUserInteraction = this.hadUserInteraction || this.wasSubmitted;
    this.customStates.set("user-invalid", hadUserInteraction && this.isInvalid);
    this.customStates.set("user-valid", hadUserInteraction && !this.isInvalid);
  }
  formDisabledCallback(isDisabled) {
    this.disabled = isDisabled;
  }
  formResetCallback() {
    this.isInvalid = false;
    this.wasChanged = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.firstSelectedValue = this.getAttribute("value") ?? "";
    const initiallySelectedItems = this.getItems(true).filter((item) => item.hasAttribute("selected"));
    this.getItems(true).forEach((item) => {
      item.selected = initiallySelectedItems.includes(item);
    });
    if (initiallySelectedItems.length > 0) {
      this.firstSelectedValue = initiallySelectedItems[0].value;
    }
    this.updateFormValue();
    this.updateSelectedItems();
  }
  clearTypeaheadTimeout() {
    if (this.typeaheadTimeout) {
      window.clearTimeout(this.typeaheadTimeout);
      this.typeaheadTimeout = null;
    }
  }
  getItems(includeDisabled = false) {
    const selector = includeDisabled ? "quiet-listbox-item" : "quiet-listbox-item:not(:state(disabled))";
    return [...this.querySelectorAll(selector)];
  }
  getSelectedItems() {
    return this.getItems().filter((item) => item.selected);
  }
  initializeValueFromSelectedItems() {
    const initiallySelectedItems = this.getItems(true).filter((item) => item.hasAttribute("selected") || item.selected);
    if (initiallySelectedItems.length > 0) {
      if (!this.multiple && initiallySelectedItems.length > 1) {
        const firstItem = initiallySelectedItems[0];
        initiallySelectedItems.slice(1).forEach((item) => {
          item.selected = false;
        });
        this.firstSelectedValue = firstItem.value;
      } else {
        this.firstSelectedValue = initiallySelectedItems[0].value;
      }
    }
    this.updateFormValue();
  }
  initializeItems() {
    const items = this.getItems();
    if (items.length > 0) {
      const selectedItems = this.getSelectedItems();
      const initialItem = selectedItems.length > 0 ? selectedItems[0] : items[0];
      this.setActiveItem(initialItem);
      this.resetRovingTabIndex();
    }
  }
  updateItemSelectionFromValue(newValue) {
    const items = this.getItems(true);
    items.forEach((item) => {
      item.selected = item.value === newValue;
    });
  }
  updateFormValue() {
    const selectedItems = this.selectedItems;
    if (this.multiple && selectedItems.length > 0) {
      const formData = new FormData();
      selectedItems.forEach((item) => {
        formData.append(this.name || "", item.value);
      });
      this.internals.setFormValue(formData);
    } else {
      this.internals.setFormValue(this.firstSelectedValue);
    }
  }
  updateSelectedItems() {
    if (!this.multiple) {
      this.getItems(true).forEach((item) => {
        item.selected = item.value === this.firstSelectedValue;
      });
    }
  }
  /**
   * Updates the current value to align with selected items. We track user interaction to allow us to dispatch events
   * when human changes are made and suppress them for programmatic changes.
   */
  updateValueFromSelectedItems(isUserInteraction = false) {
    const selectedItems = this.selectedItems;
    this.previousValue = this.firstSelectedValue;
    this.firstSelectedValue = selectedItems.length > 0 ? selectedItems[0].value : "";
    if (isUserInteraction) {
      this.hadUserInteraction = true;
      if (this.multiple) {
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
        this.dispatchEvent(new QuietChangeEvent());
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      } else if (this.previousValue !== this.firstSelectedValue) {
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
        this.wasChanged = true;
      }
    }
    this.updateFormValue();
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
    const selectedItems = this.getSelectedItems();
    if (selectedItems.length === 0) {
      const items = this.getItems();
      if (items.length > 0) {
        const firstItem = items[0];
        this.setActiveItem(firstItem);
        this.updateValueFromSelectedItems();
      }
    }
    this.updateListboxAttributesOnItems();
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
    if (!this.multiple && this.wasChanged && this.previousValue !== this.firstSelectedValue) {
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
    this.wasChanged = false;
    this.updateListboxAttributesOnItems();
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  handleLabelClick() {
    if (!this.disabled) {
      this.focus();
    }
  }
  handleListboxPointerDown(event) {
    event.preventDefault();
  }
  handleItemClick(event) {
    if (this.disabled) return;
    const item = event.target.closest("quiet-listbox-item");
    if (item?.disabled) return;
    if (!item) {
      this.deselectAll();
      this.updateValueFromSelectedItems(true);
      return;
    }
    const clickedIndex = this.getItems().indexOf(item);
    if (clickedIndex === -1) return;
    if (this.lastSelectedIndex === -1) this.lastSelectedIndex = clickedIndex;
    if (!this.readonly) {
      this.handleItemSelection(item, clickedIndex, event);
    }
    this.setActiveItem(item);
    this.listbox.focus();
    event.preventDefault();
  }
  handleItemSelection(item, itemIndex, event) {
    const modifiers = {
      ctrl: event.ctrlKey || event.ctrlKey,
      meta: event.metaKey || event.metaKey,
      shift: event.shiftKey || event.shiftKey
    };
    let selectionChanged = false;
    const isCoarsePointer = event instanceof PointerEvent && (event.pointerType === "touch" || window.matchMedia("(pointer: coarse)").matches);
    if (this.multiple && (modifiers.ctrl || modifiers.meta)) {
      item.selected = !item.selected;
      this.lastSelectedIndex = itemIndex;
      selectionChanged = true;
    } else if (this.multiple && modifiers.shift) {
      const items = this.getItems();
      const start = Math.min(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, itemIndex);
      const end = Math.max(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, itemIndex);
      selectionChanged = items.some((listItem, i) => {
        return i >= start && i <= end && !listItem.selected;
      });
      if (selectionChanged) {
        items.forEach((listItem, i) => {
          if (i >= start && i <= end) listItem.selected = true;
        });
      }
    } else if (this.multiple && isCoarsePointer) {
      item.selected = !item.selected;
      this.lastSelectedIndex = itemIndex;
      selectionChanged = true;
    } else if (this.multiple) {
      const items = this.getItems();
      selectionChanged = items.some((listItem, i) => {
        return i === itemIndex && !listItem.selected || i !== itemIndex && listItem.selected;
      });
      if (selectionChanged) {
        items.forEach((listItem, i) => {
          listItem.selected = i === itemIndex;
        });
      }
      this.lastSelectedIndex = itemIndex;
    } else {
      if (!item.selected) {
        this.selectSingleItem(item);
        selectionChanged = true;
      }
    }
    requestAnimationFrame(() => {
      if (selectionChanged) {
        this.updateValueFromSelectedItems(true);
      }
      this.resetRovingTabIndex();
    });
  }
  handleKeyDown(event) {
    if (event.key.length === 1 && !event.metaKey && !event.ctrlKey) {
      if (!this.readonly) {
        this.handleTypeahead(event);
      }
      return;
    }
    const items = this.getItems();
    if (items.length === 0) return;
    const selectedItems = this.getSelectedItems();
    if (selectedItems.length === 0) {
      if (event.key === "ArrowDown" || event.key === "ArrowRight") {
        event.preventDefault();
        this.navigateToItem(0, items, event);
        return;
      } else if (event.key === "ArrowUp" || event.key === "ArrowLeft") {
        event.preventDefault();
        this.navigateToItem(items.length - 1, items, event);
        return;
      }
    }
    let activeItem = this.querySelector("quiet-listbox-item[active]");
    let activeIndex = activeItem ? items.indexOf(activeItem) : -1;
    if (activeIndex === -1) {
      activeItem = this.getSelectedItems()[0] || items[0];
      activeIndex = items.indexOf(activeItem);
      this.setActiveItem(activeItem);
      event.preventDefault();
      return;
    }
    switch (event.key) {
      case "ArrowDown":
      case "ArrowRight":
        event.preventDefault();
        this.navigateToItem(activeIndex + 1, items, event);
        break;
      case "ArrowUp":
      case "ArrowLeft":
        event.preventDefault();
        this.navigateToItem(activeIndex - 1, items, event);
        break;
      case "Home":
        event.preventDefault();
        if (!this.readonly && this.multiple && event.ctrlKey && event.shiftKey) {
          const activeIndex2 = items.indexOf(activeItem);
          for (let i = 0; i <= activeIndex2; i++) {
            items[i].selected = true;
          }
          this.updateValueFromSelectedItems(true);
          this.navigateToItem(0, items, { ...event, ctrlKey: true, shiftKey: false });
        } else {
          this.navigateToItem(0, items, event);
        }
        break;
      case "End":
        event.preventDefault();
        if (!this.readonly && this.multiple && event.ctrlKey && event.shiftKey) {
          const activeIndex2 = items.indexOf(activeItem);
          for (let i = activeIndex2; i < items.length; i++) {
            items[i].selected = true;
          }
          this.updateValueFromSelectedItems(true);
          this.navigateToItem(items.length - 1, items, { ...event, ctrlKey: true, shiftKey: false });
        } else {
          this.navigateToItem(items.length - 1, items, event);
        }
        break;
      case " ":
      case "Enter":
        event.preventDefault();
        if (!this.readonly) {
          if (this.multiple && event.shiftKey && !event.ctrlKey && !event.metaKey) {
            const items2 = this.getItems();
            const start = Math.min(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, activeIndex);
            const end = Math.max(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, activeIndex);
            items2.forEach((item, i) => {
              if (i >= start && i <= end) item.selected = true;
            });
            this.updateValueFromSelectedItems(true);
          } else {
            this.selectWithKeyboard(activeItem, activeIndex, event);
          }
        }
        break;
      case "a":
        if (!this.readonly && (event.ctrlKey || event.metaKey) && this.multiple) {
          event.preventDefault();
          this.selectAll();
        }
        break;
    }
    this.listbox.focus();
  }
  navigateToItem(index, items, event) {
    index = Math.max(0, Math.min(index, items.length - 1));
    const newActiveItem = items[index];
    this.setActiveItem(newActiveItem);
    if (this.multiple && !this.readonly) {
      if (event.shiftKey && !event.ctrlKey && !event.metaKey) {
        newActiveItem.selected = !newActiveItem.selected;
        this.lastSelectedIndex = index;
        this.updateValueFromSelectedItems(true);
        this.resetRovingTabIndex();
      } else if (!event.shiftKey && !event.ctrlKey && !event.metaKey) {
        this.selectSingleItem(newActiveItem);
        this.updateValueFromSelectedItems(true);
        this.resetRovingTabIndex();
      }
    } else if (!this.readonly) {
      this.selectSingleItem(newActiveItem);
      this.updateValueFromSelectedItems(true);
      this.resetRovingTabIndex();
    }
  }
  updateListboxAttributesOnItems() {
    const isFocused = this.customStates.has("focused");
    this.getItems(true).forEach((item) => {
      item.customStates.set("controller-disabled", this.disabled);
      item.customStates.set("controller-readonly", this.readonly);
      item.customStates.set("controller-focused", isFocused);
    });
  }
  selectWithKeyboard(activeItem, activeIndex, event) {
    if (!activeItem) return;
    const modifiers = {
      ctrl: event.ctrlKey || event.metaKey,
      shift: event.shiftKey
    };
    if (this.multiple && modifiers.ctrl) {
      activeItem.selected = !activeItem.selected;
      this.lastSelectedIndex = activeIndex;
    } else if (this.multiple && modifiers.shift) {
      const items = this.getItems();
      const start = Math.min(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, activeIndex);
      const end = Math.max(this.lastSelectedIndex !== -1 ? this.lastSelectedIndex : 0, activeIndex);
      items.forEach((item, i) => {
        if (i >= start && i <= end) item.selected = true;
      });
    } else {
      this.selectSingleItem(activeItem);
    }
    this.updateValueFromSelectedItems(true);
    this.resetRovingTabIndex();
  }
  handleSlotChange() {
    this.updateListboxAttributesOnItems();
    this.updateSelectedItems();
    this.resetRovingTabIndex();
  }
  selectSingleItem(item) {
    this.getItems().forEach((listItem) => {
      listItem.selected = listItem === item;
    });
    this.lastSelectedIndex = this.getItems().indexOf(item);
  }
  handleTypeahead(event) {
    if (event.ctrlKey || event.metaKey || event.altKey || event.key.length !== 1) return;
    this.clearTypeaheadTimeout();
    this.typeaheadBuffer += event.key.toLowerCase();
    this.typeaheadTimeout = window.setTimeout(() => {
      this.typeaheadBuffer = "";
      this.typeaheadTimeout = null;
    }, 1e3);
    const match = this.findTypeaheadMatch();
    if (match) {
      this.selectSingleItem(match);
      this.setActiveItem(match);
      this.updateValueFromSelectedItems(true);
    }
  }
  findTypeaheadMatch() {
    const items = this.getItems();
    const matchText = (idx) => (items[idx].textContent || "").trim().toLowerCase().startsWith(this.typeaheadBuffer);
    for (let i = 0; i < items.length; i++) {
      if (matchText(i)) return items[i];
    }
    return null;
  }
  setActiveItem(item) {
    this.getItems(true).forEach((i) => {
      const isActive = i === item;
      i.toggleAttribute("active", isActive);
      i.setAttribute("aria-current", isActive ? "true" : "false");
    });
    if (item) {
      requestAnimationFrame(() => this.scrollItemIntoView(item));
    }
  }
  scrollItemIntoView(item) {
    const listbox = this.listbox;
    const r1 = listbox.getBoundingClientRect();
    const r2 = item.getBoundingClientRect();
    const isRTL = this.localize.dir() === "rtl";
    if (r2.bottom > r1.bottom) listbox.scrollTop += r2.bottom - r1.bottom;
    else if (r2.top < r1.top) listbox.scrollTop -= r1.top - r2.top;
    if (isRTL) {
      if (r1.right < r2.right) listbox.scrollLeft -= r2.right - r1.right;
      else if (r1.left > r2.left) listbox.scrollLeft += r1.left - r2.left;
    } else {
      if (r1.left > r2.left) listbox.scrollLeft += r2.left - r1.left;
      else if (r1.right < r2.right) listbox.scrollLeft -= r1.right - r2.right;
    }
  }
  async updateValidity() {
    await this.updateComplete;
    const isValueMissing = this.required && this.firstSelectedValue === "";
    const hasCustomValidity = this.getCustomValidity().length > 0;
    this.isInvalid = isValueMissing || hasCustomValidity;
    this.internals.setValidity(
      {
        badInput: false,
        customError: hasCustomValidity,
        patternMismatch: false,
        rangeOverflow: false,
        rangeUnderflow: false,
        stepMismatch: false,
        tooLong: false,
        tooShort: false,
        typeMismatch: false,
        valueMissing: isValueMissing
      },
      isValueMissing ? VALIDATION_MESSAGE : this.getCustomValidity(),
      this.focusableAnchor
    );
  }
  /**
   * @internal Manage tab order and focus tracking for keyboard navigation
   */
  resetRovingTabIndex() {
    const items = this.getItems();
    const selectedItem = this.getSelectedItems()[0];
    const targetIndex = selectedItem ? items.indexOf(selectedItem) : 0;
    items.forEach((item, index) => {
      item.tabIndex = -1;
      item.setAttribute("aria-current", index === targetIndex ? "true" : "false");
    });
  }
  /** Returns an array of all selected values. */
  getSelectedValues() {
    return this.selectedItems.map((item) => item.value);
  }
  /**
   * Sets the selected items by value(s) without triggering events.
   * Works for both single and multiple selection modes.
   * @param {string|string[]} values - Value(s) to select
   */
  setSelectedValues(values) {
    const items = this.getItems(true);
    const valueArray = Array.isArray(values) ? values : [values];
    if (this.multiple) {
      items.forEach((item) => {
        item.selected = valueArray.includes(item.value);
      });
    } else {
      const firstValue = valueArray[0];
      items.forEach((item) => {
        item.selected = item.value === firstValue;
      });
    }
    this.updateValueFromSelectedItems(false);
  }
  /** Convenience method for selecting all items. */
  selectAll() {
    if (!this.multiple) return;
    this.getItems().forEach((item) => item.selected = true);
    this.updateValueFromSelectedItems();
  }
  /** Convenience method for deselecting all items. */
  deselectAll() {
    this.getItems().forEach((item) => item.selected = false);
    this.updateValueFromSelectedItems();
  }
  /** Sets focus to the listbox. */
  focus() {
    this.listbox.focus();
  }
  /** Removes focus from the listbox. */
  blur() {
    this.listbox.blur();
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    return x`
      <label id="label" part="label" for="listbox" class=${e({ vh: !hasLabel })} @click=${this.handleLabelClick}>
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <div
        id="listbox"
        part="listbox"
        class=${e({
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // States
      disabled: this.disabled,
      readonly: this.readonly,
      multiple: this.multiple
    })}
        role="listbox"
        aria-multiselectable=${this.multiple ? "true" : "false"}
        aria-disabled=${this.disabled ? "true" : "false"}
        aria-readonly=${this.readonly ? "true" : "false"}
        aria-required=${this.required ? "true" : "false"}
        aria-labelledby="label"
        aria-describedby="description"
        tabindex=${this.disabled ? "-1" : "0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @pointerdown=${this.handleListboxPointerDown}
        @click=${this.handleItemClick}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
QuietListbox.formAssociated = true;
QuietListbox.observeSlots = true;
QuietListbox.styles = [host_styles_default, form_control_styles_default, listbox_styles_default];
__decorateClass([
  e2("#listbox")
], QuietListbox.prototype, "listbox", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "lastSelectedIndex", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "previousValue", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "typeaheadBuffer", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "typeaheadTimeout", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "wasChanged", 2);
__decorateClass([
  r()
], QuietListbox.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietListbox.prototype, "label", 2);
__decorateClass([
  n()
], QuietListbox.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietListbox.prototype, "name", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietListbox.prototype, "multiple", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietListbox.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietListbox.prototype, "readonly", 2);
__decorateClass([
  n({ reflect: true })
], QuietListbox.prototype, "size", 2);
__decorateClass([
  n()
], QuietListbox.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietListbox.prototype, "required", 2);
__decorateClass([
  n()
], QuietListbox.prototype, "value", 1);
__decorateClass([
  n({ type: Array })
], QuietListbox.prototype, "selectedValues", 1);
QuietListbox = __decorateClass([
  t("quiet-listbox")
], QuietListbox);
QuietListbox.disableWarning?.("change-in-update");
export {
  QuietListbox
};
