/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  search_list_styles_default
} from "../../chunks/chunk.YOZQSYR7.js";
import {
  QuietElement,
  e,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  exactSearch,
  fuzzySearch
} from "../../chunks/chunk.ZBEFK776.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/search-list/search-list.ts
var QuietSearchList = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.items = [];
    this.localize = new Localize(this);
    this.query = "";
    this.isEmpty = false;
    this.isInitial = false;
    this.resultsMessage = "";
    this.match = "exact";
    this.debounce = 300;
    /** Updates results when the controller's value changes. */
    this.handleControllerInput = (event) => {
      const target = event.target;
      clearTimeout(this.debounceTimeout);
      this.debounceTimeout = setTimeout(() => {
        this.query = target.value;
        this.updateResults();
      }, this.debounce);
    };
    /** Listens to all `input` events on the document and responds only to controller events. */
    this.handleDocumentInput = (event) => {
      const target = event.target;
      if (target.id === this.controller) {
        this.handleControllerInput(event);
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    document.addEventListener("input", this.handleDocumentInput);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener("input", this.handleDocumentInput);
    window.clearTimeout(this.debounceTimeout);
  }
  updated(changedProperties) {
    if (changedProperties.has("controller")) {
      const controller = this.getController();
      if (controller) {
        this.query = controller.value || "";
        this.updateResults();
      }
    }
    if (changedProperties.has("match")) {
      this.updateResults();
    }
    if (changedProperties.has("isEmpty")) {
      this.customStates.set("empty", this.isEmpty);
    }
    if (changedProperties.has("isInitial")) {
      this.customStates.set("initial", this.isInitial);
    }
  }
  /** Gets the controller or returns `null` if one can't be found. */
  getController() {
    const root = this.getRootNode();
    if (this.controller) {
      return root.getElementById(this.controller);
    } else {
      return this.querySelector('[slot="controller"]');
    }
  }
  handleDefaultSlotChange() {
    this.items = [...this.children].filter((el) => !el.hasAttribute("slot"));
    this.updateResults();
  }
  async handleControllerSlotChange() {
    const controller = this.getController();
    if (controller?.localName === "quiet-text-field") {
      await customElements.whenDefined("quiet-text-field");
    }
    if (controller && controller.value !== this.query) {
      this.query = controller.value;
      this.updateResults();
    }
  }
  updateResults() {
    const hasQuery = this.query.length > 0;
    let numResults = 0;
    let wasWarned = false;
    this.isInitial = !hasQuery && this.slotsWithContent.has("initial");
    if (!this.isInitial) {
      this.items.forEach((item) => {
        const content = item.textContent || "";
        const keywords = item.dataset.keywords || "";
        const searchableContent = `${content} ${keywords}`;
        if (hasQuery) {
          let isMatch = false;
          if (this.match === "exact") {
            isMatch = exactSearch(this.query, searchableContent);
          }
          if (this.match === "fuzzy") {
            isMatch = fuzzySearch(this.query, searchableContent);
          }
          if (this.match === "custom") {
            if (typeof this.isMatch === "function") {
              isMatch = this.isMatch(this.query, searchableContent, item);
            } else {
              if (!wasWarned) {
                console.warn(`A custom search type was specified but no isMatch function was provided.`, this);
                wasWarned = true;
              }
              isMatch = exactSearch(this.query, searchableContent);
            }
          }
          item.hidden = !isMatch;
          if (isMatch) numResults++;
        } else {
          item.hidden = false;
        }
      });
    }
    this.isEmpty = this.isInitial ? true : this.items.some((item) => item.hidden !== true);
    clearTimeout(this.resultsTimeout);
    this.resultsTimeout = setTimeout(() => {
      if (this.isInitial) {
        this.resultsMessage = "";
      } else if (hasQuery) {
        this.resultsMessage = this.localize.term("showingNumberOfTotalItems", numResults, this.items.length);
      } else {
        this.resultsMessage = this.localize.term("showingAllNumberItems", this.items.length);
      }
    }, 1e3);
  }
  /** Sets the search query and updates the results. To clear the search, set this to an empty string. */
  setQuery(query = "") {
    this.query = query;
    this.updateResults();
    const controller = this.getController();
    if (controller && "value" in controller) {
      controller.value = this.query;
    }
  }
  render() {
    const showInitial = this.query === "" && this.slotsWithContent.has("initial");
    return x`
      <slot
        name="controller"
        @input=${this.handleControllerInput}
        @slotchange=${this.handleControllerSlotChange}
      ></slot>

      <div id="results" class="vh" role="region" aria-live="polite">${this.resultsMessage}</div>

      <div id="items" part="items" ?hidden=${showInitial}>
        <slot @slotchange=${this.handleDefaultSlotChange} ?hidden=${!this.isEmpty}></slot>
      </div>

      <slot name="empty" ?hidden=${this.isEmpty || showInitial}></slot>
      <slot name="initial" ?hidden=${!showInitial}></slot>
    `;
  }
};
QuietSearchList.observeSlots = true;
QuietSearchList.styles = [host_styles_default, search_list_styles_default];
__decorateClass([
  e("#results")
], QuietSearchList.prototype, "results", 2);
__decorateClass([
  r()
], QuietSearchList.prototype, "query", 2);
__decorateClass([
  r()
], QuietSearchList.prototype, "isEmpty", 2);
__decorateClass([
  r()
], QuietSearchList.prototype, "isInitial", 2);
__decorateClass([
  r()
], QuietSearchList.prototype, "resultsMessage", 2);
__decorateClass([
  n({ reflect: true })
], QuietSearchList.prototype, "controller", 2);
__decorateClass([
  n()
], QuietSearchList.prototype, "match", 2);
__decorateClass([
  n({ type: Number })
], QuietSearchList.prototype, "debounce", 2);
__decorateClass([
  n({ attribute: false })
], QuietSearchList.prototype, "isMatch", 2);
QuietSearchList = __decorateClass([
  t("quiet-search-list")
], QuietSearchList);
QuietSearchList.disableWarning?.("change-in-update");
export {
  QuietSearchList
};
