/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.ID7XG3PW.js";
import "../../chunks/chunk.XKCQMCPW.js";
import {
  radio_styles_default
} from "../../chunks/chunk.OOAPSLXE.js";
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
  QuietChangeEvent,
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

// src/components/radio/radio.ts
var nativeRadio = document.createElement("input");
nativeRadio.name = "quiet-faux-radio";
nativeRadio.type = "radio";
nativeRadio.required = true;
var VALIDATION_MESSAGE = nativeRadio.validationMessage;
var QuietRadio = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    this.value = "";
    this.orientation = "horizontal";
    this.required = false;
    this.disabled = false;
  }
  get focusableAnchor() {
    return this.getItems()[0];
  }
  connectedCallback() {
    super.connectedCallback();
    this.addEventListener("invalid", this.handleHostInvalid);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("invalid", this.handleHostInvalid);
  }
  firstUpdated() {
    if (this.value) {
      const selectedItem = this.getSelectedItem({ includeDisabled: true });
      if (selectedItem) {
        this.setSelectedItem(selectedItem);
      }
    }
  }
  updated(changedProperties) {
    this.updateValidity();
    if (changedProperties.has("value")) {
      this.internals.setFormValue(this.value);
    }
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
      this.updateControllerDisabledState();
    }
    if (this.hadUserInteraction || this.wasSubmitted) {
      this.customStates.set("user-invalid", this.isInvalid);
      this.customStates.set("user-valid", !this.isInvalid);
    } else {
      this.customStates.set("user-invalid", false);
      this.customStates.set("user-valid", false);
    }
  }
  /** @internal Called when a containing fieldset is disabled. */
  formDisabledCallback(isDisabled) {
    this.getItems({ includeDisabled: true }).forEach((item) => item.disabledByController = isDisabled);
  }
  /** @internal Called when the form is reset. */
  formResetCallback() {
    this.isInvalid = false;
    this.hadUserInteraction = false;
    this.wasSubmitted = false;
    const itemToSelect = this.getItems().find((item) => item.getAttribute("value") === this.getAttribute("value"));
    if (itemToSelect) {
      this.setSelectedItem(itemToSelect);
    } else {
      this.setSelectedItem(null);
    }
  }
  /** Gets an array of radio items slotted into the radio. */
  getItems(options) {
    if (options?.includeDisabled) {
      return [...this.querySelectorAll("quiet-radio-item")];
    } else {
      return [...this.querySelectorAll("quiet-radio-item:not(:state(disabled))")];
    }
  }
  handleHostInvalid() {
    this.wasSubmitted = true;
  }
  async handleGroupClick(event) {
    const selectedItem = this.getSelectedItem();
    const radioItem = event.target.closest("quiet-radio-item");
    if (radioItem && !radioItem.disabled && !radioItem.disabledByController) {
      this.setSelectedItem(radioItem);
      this.hadUserInteraction = true;
      if (radioItem !== selectedItem) {
        await this.updateComplete;
        this.dispatchEvent(new QuietInputEvent());
        this.dispatchEvent(new InputEvent("input"));
        this.dispatchEvent(new QuietChangeEvent());
        this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
      }
    }
  }
  async handleGroupKeyDown(event) {
    const target = event.target.closest("quiet-radio-item");
    const radioItems = this.getItems();
    const currentIndex = radioItems.findIndex((item) => item.tabIndex === 0) || 0;
    let itemToSelect;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") {
      const nextIndex = currentIndex <= 0 ? radioItems.length - 1 : currentIndex - 1;
      itemToSelect = radioItems[nextIndex];
    }
    if (event.key === "ArrowRight" || event.key === "ArrowDown") {
      const nextIndex = currentIndex >= radioItems.length - 1 ? 0 : currentIndex + 1;
      itemToSelect = radioItems[nextIndex];
    }
    if (event.key === "Home") {
      itemToSelect = radioItems[0];
    }
    if (event.key === "End") {
      itemToSelect = radioItems[radioItems.length - 1];
    }
    if (event.key === " " && target) {
      itemToSelect = target;
    }
    if (itemToSelect) {
      event.preventDefault();
      this.setSelectedItem(itemToSelect);
      itemToSelect.focus();
      this.hadUserInteraction = true;
      await this.updateComplete;
      this.dispatchEvent(new QuietInputEvent());
      this.dispatchEvent(new InputEvent("input"));
      this.dispatchEvent(new QuietChangeEvent());
      this.dispatchEvent(new Event("change", { bubbles: true, composed: true }));
    }
  }
  /**
   * @internal Makes only the selected radio item tabbable. If no radio item is selected, the first non-disabled radio
   * item will be tabbable.
   */
  resetRovingTabIndex() {
    const radioItems = this.getItems({ includeDisabled: true });
    const selectedItem = this.getSelectedItem({ includeDisabled: true });
    const selectedItemIndex = radioItems.findIndex((item) => item === selectedItem);
    const targetIndex = selectedItemIndex > -1 ? selectedItemIndex : 0;
    radioItems.forEach((item, index) => {
      if (this.disabled) {
        item.tabIndex = -1;
      } else {
        item.tabIndex = index === targetIndex ? 0 : -1;
      }
    });
  }
  /** Gets the selected item. */
  getSelectedItem(options) {
    return this.getItems(options).find((item) => item.value === this.value) || null;
  }
  /**
   * Sets the selected item and updates the roving tab index. If `null` is provided, the selection will be cleared and
   * the tab index will go to the first radio item.
   */
  setSelectedItem(selectedItem) {
    const radioItems = this.getItems({ includeDisabled: true });
    if (selectedItem) {
      radioItems.forEach((item) => {
        item.checked = item === selectedItem;
        item.tabIndex = item === selectedItem ? 0 : -1;
      });
      this.value = selectedItem.value;
    } else {
      if (!selectedItem) {
        radioItems.forEach((item) => {
          item.checked = false;
          item.tabIndex = -1;
        });
        radioItems[0].tabIndex = 0;
        this.value = "";
      }
    }
  }
  /** Updates the controller disabled state for all radio items */
  updateControllerDisabledState() {
    const items = this.getItems({ includeDisabled: true });
    items.forEach((item) => item.disabledByController = this.disabled);
    requestAnimationFrame(() => this.resetRovingTabIndex());
  }
  /** Sets the form control's validity */
  async updateValidity() {
    await this.updateComplete;
    const hasCustomValidity = this.getCustomValidity().length > 0;
    const hasMissingValue = this.required && !this.value;
    const validationMessage = hasCustomValidity ? this.getCustomValidity() : VALIDATION_MESSAGE;
    const flags = {
      customError: hasCustomValidity,
      valueMissing: hasMissingValue
    };
    this.isInvalid = hasCustomValidity ? true : hasMissingValue;
    this.internals.setValidity(flags, validationMessage, this.focusableAnchor);
  }
  /** Sets focus to the selected item or the first item if none are selected. */
  focus(options) {
    const items = this.getItems();
    const itemToFocus = items.find((item) => item.checked) || items[0];
    if (itemToFocus) {
      itemToFocus.focus(options);
    }
  }
  render() {
    const hasLabel = this.label || this.slotsWithContent.has("label");
    const hasDescription = this.description || this.slotsWithContent.has("description");
    return x`
      <label id="label" part="label" for="text-box" class=${e({ vh: !hasLabel })} @click=${this.focus}>
        <slot name="label">${this.label}</slot>
      </label>

      <div id="description" part="description" class=${e({ vh: !hasDescription })}>
        <slot name="description">${this.description}</slot>
      </div>

      <div
        id="group"
        part="group"
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="description"
        @click=${this.handleGroupClick}
        @keydown=${this.handleGroupKeyDown}
      >
        <slot @slotchange=${this.resetRovingTabIndex}></slot>
      </div>
    `;
  }
};
QuietRadio.formAssociated = true;
QuietRadio.observeSlots = true;
QuietRadio.styles = [host_styles_default, form_control_styles_default, radio_styles_default];
__decorateClass([
  e2("#group")
], QuietRadio.prototype, "group", 2);
__decorateClass([
  r()
], QuietRadio.prototype, "isInvalid", 2);
__decorateClass([
  r()
], QuietRadio.prototype, "hadUserInteraction", 2);
__decorateClass([
  r()
], QuietRadio.prototype, "wasSubmitted", 2);
__decorateClass([
  n()
], QuietRadio.prototype, "label", 2);
__decorateClass([
  n()
], QuietRadio.prototype, "description", 2);
__decorateClass([
  n({ reflect: true })
], QuietRadio.prototype, "name", 2);
__decorateClass([
  n()
], QuietRadio.prototype, "value", 2);
__decorateClass([
  n({ reflect: true })
], QuietRadio.prototype, "orientation", 2);
__decorateClass([
  n()
], QuietRadio.prototype, "form", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRadio.prototype, "required", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietRadio.prototype, "disabled", 2);
QuietRadio = __decorateClass([
  t("quiet-radio")
], QuietRadio);
export {
  QuietRadio
};
