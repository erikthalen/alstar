/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  random_content_styles_default
} from "../../chunks/chunk.X22ID2MG.js";
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

// src/components/random-content/random-content.ts
var QuietRandomContent = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.currentIndices = /* @__PURE__ */ new Set();
    this.sequencePosition = 0;
    this.items = 1;
    this.mode = "unique";
  }
  firstUpdated() {
    this.applySelection();
  }
  updated(changedProperties) {
    if (changedProperties.has("items") || changedProperties.has("mode")) {
      if (changedProperties.has("mode") && this.mode === "sequence") {
        this.sequencePosition = 0;
      }
      this.applySelection();
    }
  }
  /** Applies selection based on the mode and items properties. */
  applySelection(isManualRandomize = false) {
    const children = this.shadowRoot?.querySelector("slot")?.assignedElements({ flatten: true }) || [];
    if (!children.length) return;
    const itemsToShow = Math.min(this.items, children.length);
    let selected;
    switch (this.mode) {
      case "sequence":
        selected = this.getSequenceIndices(children.length, itemsToShow, isManualRandomize);
        break;
      case "unique":
        selected = this.getUniqueRandomIndices(
          children.length,
          itemsToShow,
          isManualRandomize ? this.currentIndices : void 0
        );
        break;
      case "random":
        selected = this.getRandomIndices(children.length, itemsToShow);
        break;
      default:
        selected = this.getUniqueRandomIndices(children.length, itemsToShow);
    }
    this.currentIndices = selected;
    children.forEach((el, i) => {
      if (selected.has(i)) {
        el.setAttribute("data-visible", "");
      } else {
        el.removeAttribute("data-visible");
      }
    });
  }
  /** Gets truly random indices with possible duplicates from previous selection. */
  getRandomIndices(childCount, itemsToShow) {
    if (itemsToShow >= childCount) {
      return new Set(Array.from({ length: childCount }, (_, i) => i));
    }
    const indices = /* @__PURE__ */ new Set();
    const availableIndices = Array.from({ length: childCount }, (_, i) => i);
    for (let i = 0; i < itemsToShow; i++) {
      const j = Math.floor(Math.random() * (availableIndices.length - i)) + i;
      [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
    }
    availableIndices.slice(0, itemsToShow).forEach((i) => indices.add(i));
    return indices;
  }
  /** Gets sequence indices, advancing position on manual randomize. */
  getSequenceIndices(childCount, itemsToShow, advance) {
    if (advance) {
      this.sequencePosition = (this.sequencePosition + itemsToShow) % childCount;
    }
    const indices = /* @__PURE__ */ new Set();
    for (let i = 0; i < itemsToShow; i++) {
      indices.add((this.sequencePosition + i) % childCount);
    }
    return indices;
  }
  /** Gets unique random indices, avoiding excluded indices if possible. */
  getUniqueRandomIndices(childCount, itemsToShow, excludeIndices) {
    if (itemsToShow >= childCount) {
      return new Set(Array.from({ length: childCount }, (_, i) => i));
    }
    let availableIndices = Array.from({ length: childCount }, (_, i) => i);
    if (excludeIndices && excludeIndices.size > 0) {
      const filtered = availableIndices.filter((i) => !excludeIndices.has(i));
      if (filtered.length >= itemsToShow) {
        availableIndices = filtered;
      }
    }
    for (let i = 0; i < itemsToShow; i++) {
      const j = Math.floor(Math.random() * (availableIndices.length - i)) + i;
      [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
    }
    return new Set(availableIndices.slice(0, itemsToShow));
  }
  /** Rotates the visible item(s) based on the selected mode. */
  randomize() {
    this.applySelection(true);
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietRandomContent.styles = [host_styles_default, random_content_styles_default];
__decorateClass([
  n({ type: Number })
], QuietRandomContent.prototype, "items", 2);
__decorateClass([
  n({ type: String })
], QuietRandomContent.prototype, "mode", 2);
QuietRandomContent = __decorateClass([
  t("quiet-random-content")
], QuietRandomContent);
export {
  QuietRandomContent
};
