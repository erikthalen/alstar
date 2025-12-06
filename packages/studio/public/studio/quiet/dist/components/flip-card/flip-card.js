/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  flip_card_styles_default
} from "../../chunks/chunk.AUZXGAXT.js";
import {
  parseDelimitedTokens
} from "../../chunks/chunk.W6PQ6UIS.js";
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
  QuietBeforeFlipEvent,
  QuietFlipEvent
} from "../../chunks/chunk.ARXBZA7U.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/flip-card/flip-card.ts
var QuietFlipCard = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isFirstUpdate = true;
    this.preventNextUpdate = false;
    this.flipped = false;
    this.orientation = "horizontal";
  }
  async updated(changedProperties) {
    if (this.isFirstUpdate) {
      requestAnimationFrame(() => {
        this.setAttribute("data-can-transition", "");
      });
    }
    if (this.preventNextUpdate) {
      this.preventNextUpdate = false;
      return;
    }
    if (changedProperties.has("flipped")) {
      this.customStates.set("flipped", this.flipped);
    }
    if (!this.isFirstUpdate && changedProperties.has("flipped")) {
      const flipEvent = new QuietBeforeFlipEvent();
      this.dispatchEvent(flipEvent);
      if (flipEvent.defaultPrevented) {
        this.preventNextUpdate = true;
        this.flipped = !this.flipped;
        return;
      }
      const currentSlot = this.flipped ? this.backSlot : this.defaultSlot;
      const elementsWithAutofocus = this.querySelectorAll("[autofocus]");
      const assignedElements = currentSlot.assignedElements({ flatten: true });
      const elementToFocus = [...elementsWithAutofocus].find(
        (el) => assignedElements.some((assigned) => assigned === el || assigned.contains(el))
      );
      if (elementToFocus) {
        elementToFocus.focus();
      }
      this.addEventListener("transitionend", () => this.dispatchEvent(new QuietFlipEvent()), { once: true });
    }
    this.isFirstUpdate = false;
  }
  render() {
    return x`
      <div id="front" part="front" ?inert=${this.flipped}>
        <slot name="front"></slot>
      </div>
      <div id="back" part="back" ?inert=${!this.flipped}>
        <slot name="back"></slot>
      </div>
    `;
  }
};
QuietFlipCard.styles = [host_styles_default, flip_card_styles_default];
__decorateClass([
  e('slot[name="front"]')
], QuietFlipCard.prototype, "defaultSlot", 2);
__decorateClass([
  e('slot[name="back"]')
], QuietFlipCard.prototype, "backSlot", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietFlipCard.prototype, "flipped", 2);
__decorateClass([
  n({ reflect: true })
], QuietFlipCard.prototype, "orientation", 2);
QuietFlipCard = __decorateClass([
  t("quiet-flip-card")
], QuietFlipCard);
document.addEventListener("click", (event) => {
  const flipAttrEl = event.target.closest("[data-flip-card]");
  if (flipAttrEl instanceof Element) {
    const [command, id] = parseDelimitedTokens(flipAttrEl.getAttribute("data-flip-card") || "");
    let flipCard;
    if (id) {
      const doc = flipAttrEl.getRootNode();
      flipCard = doc.getElementById(id);
    } else {
      flipCard = flipAttrEl.closest("quiet-flip-card");
    }
    if (flipCard?.localName === "quiet-flip-card") {
      switch (command) {
        case "front":
          flipCard.flipped = false;
          break;
        case "back":
          flipCard.flipped = true;
          break;
        case "toggle":
          flipCard.flipped = !flipCard.flipped;
          break;
      }
    } else {
      console.warn(`A flip card with an ID of "${id}" could not be found in this document.`, void 0);
    }
  }
});
export {
  QuietFlipCard
};
