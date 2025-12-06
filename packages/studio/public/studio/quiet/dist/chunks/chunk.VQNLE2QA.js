/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i,
  u
} from "./chunk.ZCPQX3DA.js";
import {
  button_styles_default
} from "./chunk.LSX63TFG.js";
import {
  QuietFormControlElement,
  n,
  t
} from "./chunk.3WKCIAWU.js";
import {
  LongPress
} from "./chunk.HV6WFC7E.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  QuietBlurEvent,
  QuietFocusEvent
} from "./chunk.E7L7Q2A4.js";
import {
  o
} from "./chunk.7LEBIIO5.js";
import {
  e
} from "./chunk.E6M524BP.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/button/button.ts
var QuietButton = class extends QuietFormControlElement {
  constructor() {
    super(...arguments);
    this.appearance = "normal";
    this.variant = "neutral";
    this.disabled = false;
    this.loading = false;
    this.size = "md";
    this.pill = false;
    this.type = "button";
    this.value = "";
    this.withCaret = false;
  }
  get focusableAnchor() {
    return this.shadowRoot.querySelector("button");
  }
  firstUpdated() {
    const button = this.shadowRoot.getElementById("button");
    this.longPress = new LongPress(button, { eventName: "quiet-long-press" });
    this.longPress.start();
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
    if (changedProperties.has("loading")) {
      this.customStates.set("loading", this.loading);
    }
  }
  handleBlur() {
    this.customStates.set("focused", false);
    this.dispatchEvent(new QuietBlurEvent());
  }
  handleFocus() {
    this.customStates.set("focused", true);
    this.dispatchEvent(new QuietFocusEvent());
  }
  handleClick(event) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
    if (this.toggle !== void 0) {
      this.toggle = this.toggle === "on" ? "off" : "on";
      this.customStates.set("toggled", this.toggle === "on");
    }
    if (this.type === "reset" && this.internals.form) {
      this.internals.form.reset();
      return;
    }
    if (this.type === "submit" && this.internals.form) {
      const submitter = document.createElement("button");
      submitter.style.position = "absolute";
      submitter.style.width = "1px";
      submitter.style.height = "1px";
      submitter.style.overflow = "hidden";
      submitter.style.whiteSpace = "nowrap";
      submitter.style.clipPath = "inset(50%)";
      submitter.type = "submit";
      if (this.name) submitter.name = this.name;
      if (this.value) submitter.value = this.value;
      ["formaction", "formenctype", "formmethod", "formnovalidate", "formtarget"].forEach((attr) => {
        if (this.hasAttribute(attr)) {
          submitter.setAttribute(attr, this.getAttribute(attr) ?? "");
        }
      });
      this.internals.form.append(submitter);
      requestAnimationFrame(() => {
        submitter.click();
        submitter.remove();
      });
    }
  }
  render() {
    const isLink = typeof this.href === "string";
    const isDisabled = this.disabled || !isLink && this.loading;
    const isLoading = !isLink && this.loading;
    const isSubmit = this.type === "submit";
    const isToggle = this.toggle !== void 0 && !isLink && !isSubmit;
    const tag = isLink ? i`a` : i`button`;
    return u`
      <${tag}
        id="button"
        part="button"
        class=${e({
      // Variants
      neutral: this.variant === "neutral",
      primary: this.variant === "primary",
      destructive: this.variant === "destructive",
      // Appearances
      normal: this.appearance === "normal",
      outline: this.appearance === "outline",
      text: this.appearance === "text",
      image: this.appearance === "image",
      // Sizes
      xs: this.size === "xs",
      sm: this.size === "sm",
      md: this.size === "md",
      lg: this.size === "lg",
      xl: this.size === "xl",
      // Modifiers
      pill: this.pill,
      icon: this.iconLabel?.length > 0,
      // States
      disabled: isDisabled,
      loading: isLoading
    })}
        type=${o(isLink ? void 0 : this.type)}
        ?disabled=${o(isLink ? void 0 : this.disabled)}
        value=${o(isLink ? void 0 : this.value)}
        href=${o(isLink && !this.disabled ? this.href : void 0)}
        target=${o(isLink ? this.target : void 0)}
        download=${o(isLink ? this.download : void 0)}
        rel=${o(isLink && this.rel ? this.rel : void 0)}
        aria-label=${o(this.iconLabel ? this.iconLabel : void 0)}
        aria-pressed=${o(isToggle ? this.toggle === "on" ? "true" : "false" : void 0)}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        ${isLoading ? u`<quiet-spinner id="spinner" part="spinner"></quiet-spinner>` : ""}
        <slot name="start"></slot>
        <slot id="label" part="label"></slot>
        <slot name="end"></slot>
        ${this.withCaret ? u`<quiet-icon id="caret" part="caret" exportparts="svg:caret__svg" slot="end" name="chevron-down" library="system"></quiet-icon>` : ""}
        ${isToggle ? u`<span part="toggle-indicator" id="toggle-indicator"></span>` : ""}
      </${tag}>
    `;
  }
};
QuietButton.formAssociated = true;
QuietButton.shadowRootOptions = { ...QuietFormControlElement.shadowRootOptions, delegatesFocus: true };
QuietButton.styles = [host_styles_default, button_styles_default];
__decorateClass([
  n({ reflect: true })
], QuietButton.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietButton.prototype, "variant", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietButton.prototype, "disabled", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietButton.prototype, "loading", 2);
__decorateClass([
  n({ reflect: true })
], QuietButton.prototype, "toggle", 2);
__decorateClass([
  n({ reflect: true })
], QuietButton.prototype, "size", 2);
__decorateClass([
  n({ attribute: "icon-label" })
], QuietButton.prototype, "iconLabel", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietButton.prototype, "pill", 2);
__decorateClass([
  n()
], QuietButton.prototype, "type", 2);
__decorateClass([
  n({ reflect: true })
], QuietButton.prototype, "name", 2);
__decorateClass([
  n()
], QuietButton.prototype, "value", 2);
__decorateClass([
  n({ attribute: "with-caret", type: Boolean, reflect: true })
], QuietButton.prototype, "withCaret", 2);
__decorateClass([
  n()
], QuietButton.prototype, "href", 2);
__decorateClass([
  n()
], QuietButton.prototype, "target", 2);
__decorateClass([
  n()
], QuietButton.prototype, "rel", 2);
__decorateClass([
  n()
], QuietButton.prototype, "download", 2);
__decorateClass([
  n()
], QuietButton.prototype, "form", 2);
__decorateClass([
  n({ attribute: "formaction" })
], QuietButton.prototype, "formAction", 2);
__decorateClass([
  n({ attribute: "formenctype" })
], QuietButton.prototype, "formEnctype", 2);
__decorateClass([
  n({ attribute: "formmethod" })
], QuietButton.prototype, "formMethod", 2);
__decorateClass([
  n({ attribute: "formnovalidate", type: Boolean })
], QuietButton.prototype, "formNoValidate", 2);
__decorateClass([
  n({ attribute: "formtarget" })
], QuietButton.prototype, "formTarget", 2);
QuietButton = __decorateClass([
  t("quiet-button")
], QuietButton);

export {
  QuietButton
};
