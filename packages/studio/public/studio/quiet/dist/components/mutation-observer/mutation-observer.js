/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  mutation_observer_styles_default
} from "../../chunks/chunk.V24ECTOX.js";
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
  QuietMutationEvent
} from "../../chunks/chunk.U6MCADTV.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/mutation-observer/mutation-observer.ts
var QuietMutationObserver = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.mutationObserver = null;
    this.disabled = false;
    this.attr = false;
    this.attrOldValue = false;
    this.attrFilter = "";
    this.childList = false;
    this.subtree = false;
    this.characterData = false;
    this.characterDataOldValue = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.startObserver();
  }
  disconnectedCallback() {
    this.stopObserver();
    super.disconnectedCallback();
  }
  updated(changedProperties) {
    super.updated(changedProperties);
    if (changedProperties.has("disabled")) {
      if (this.disabled) {
        this.stopObserver();
      } else if (!this.mutationObserver) {
        this.startObserver();
      }
    }
    if (changedProperties.has("attr") || changedProperties.has("attrOldValue") || changedProperties.has("attrFilter") || changedProperties.has("childList") || changedProperties.has("subtree") || changedProperties.has("characterData") || changedProperties.has("characterDataOldValue")) {
      this.startObserver();
    }
  }
  /** Starts or restarts the mutation observer. */
  startObserver() {
    this.stopObserver();
    if (this.disabled) return;
    this.mutationObserver = new MutationObserver((records) => {
      records.forEach((record) => {
        const mutationEvent = new QuietMutationEvent({ record });
        this.dispatchEvent(mutationEvent);
      });
    });
    this.mutationObserver.observe(this, {
      attributes: this.attr,
      attributeOldValue: this.attrOldValue,
      attributeFilter: this.attrFilter.length > 0 ? this.attrFilter.split(" ").map((attr) => attr.trim()) : void 0,
      childList: this.childList,
      subtree: this.subtree,
      characterData: this.characterData,
      characterDataOldValue: this.characterDataOldValue
    });
  }
  /** Stops the mutation observer. */
  stopObserver() {
    this.mutationObserver?.disconnect();
    this.mutationObserver = null;
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietMutationObserver.styles = [host_styles_default, mutation_observer_styles_default];
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietMutationObserver.prototype, "disabled", 2);
__decorateClass([
  n({ attribute: "attr", type: Boolean })
], QuietMutationObserver.prototype, "attr", 2);
__decorateClass([
  n({ attribute: "attr-old-value", type: Boolean })
], QuietMutationObserver.prototype, "attrOldValue", 2);
__decorateClass([
  n({ attribute: "attr-filter" })
], QuietMutationObserver.prototype, "attrFilter", 2);
__decorateClass([
  n({ attribute: "child-list", type: Boolean })
], QuietMutationObserver.prototype, "childList", 2);
__decorateClass([
  n({ type: Boolean })
], QuietMutationObserver.prototype, "subtree", 2);
__decorateClass([
  n({ attribute: "character-data", type: Boolean })
], QuietMutationObserver.prototype, "characterData", 2);
__decorateClass([
  n({ attribute: "character-data-old-value", type: Boolean })
], QuietMutationObserver.prototype, "characterDataOldValue", 2);
QuietMutationObserver = __decorateClass([
  t("quiet-mutation-observer")
], QuietMutationObserver);
export {
  QuietMutationObserver
};
