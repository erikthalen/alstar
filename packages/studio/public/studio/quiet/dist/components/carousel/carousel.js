/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  carousel_styles_default
} from "../../chunks/chunk.YGFY3GHX.js";
import "../../chunks/chunk.XMKTRKPD.js";
import "../../chunks/chunk.TB3UTZVO.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  IS_IOS
} from "../../chunks/chunk.SMGLWPQI.js";
import {
  QuietElement,
  e as e2,
  n,
  r,
  t,
  t2
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  SUPPORTS_SCROLLSNAPCHANGE,
  SUPPORTS_SCROLLSNAPCHANGING,
  scrollEndPolyfill
} from "../../chunks/chunk.YYNYQ6SE.js";
import "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietItemChangeEvent
} from "../../chunks/chunk.CXGBKEQ7.js";
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

// src/components/carousel/carousel.ts
var QuietCarousel = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.hasInitialized = false;
    this.isUserInitiated = false;
    this.localize = new Localize(this);
    this.pendingEventDispatch = false;
    this.resizeObserver = null;
    this.isScrolling = false;
    this.itemCount = 0;
    this.label = "";
    this.activeIndex = 0;
    this.activeName = "";
    this.loop = false;
    this.withoutNav = false;
    this.withoutPagination = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.setupResizeObserver();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
      this.resizeObserver = null;
    }
  }
  firstUpdated() {
    this.setAttribute("role", "region");
    this.setAttribute("aria-roledescription", "carousel");
    scrollEndPolyfill(this.items);
  }
  updated(changedProperties) {
    if (changedProperties.has("activeIndex") && !this.isUserInitiated) {
      this.setActiveItem(this.activeIndex, "instant");
    }
    if (changedProperties.has("activeName") && this.activeName) {
      const items = this.getItems();
      const foundIndex = items.findIndex((item) => item.getAttribute("name") === this.activeName);
      if (foundIndex !== -1 && foundIndex !== this.activeIndex) {
        this.activeIndex = foundIndex;
        this.setActiveItem(foundIndex, "smooth");
      }
    }
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label || this.localize.term("carousel"));
    }
    if (changedProperties.has("isScrolling")) {
      this.customStates.set("scrolling", this.isScrolling);
    }
  }
  /** Get the items from the default slot */
  getItems() {
    const slot = this.shadowRoot.querySelector("slot");
    return slot ? slot.assignedElements().filter((el) => el.tagName.toLowerCase() === "quiet-carousel-item") : [];
  }
  handleSlotChange() {
    this.itemCount = this.getItems().length;
    const items = this.getItems();
    items.forEach((item, i) => {
      if (!item.hasAttribute("aria-label") && !item.hasAttribute("aria-labelledby")) {
        item.setAttribute("aria-label", this.localize.term("numberOfTotal", i + 1, items.length));
      }
    });
    this.setActiveItem(this.activeIndex, "instant");
    this.setupResizeObserver();
    requestAnimationFrame(() => {
      if (!this.hasInitialized) {
        this.hasInitialized = true;
      }
    });
  }
  /**
   * Navigate to the selected dot's index
   */
  handleDotClick(dot, index) {
    this.isUserInitiated = true;
    this.setActiveItem(index);
    dot.focus();
  }
  /**
   * Handle keyboard navigation for the pagination dots
   */
  handleDotKeyDown(event, index) {
    const isRtl = this.localize.dir() === "rtl";
    const prevKey = isRtl ? "ArrowRight" : "ArrowLeft";
    const nextKey = isRtl ? "ArrowLeft" : "ArrowRight";
    const dots = this.shadowRoot.querySelectorAll(".pagination-dot");
    if (!dots.length) return;
    let nextIndex = index;
    switch (event.key) {
      case prevKey:
        nextIndex = index - 1;
        if (nextIndex < 0) {
          nextIndex = this.loop ? this.itemCount - 1 : 0;
        }
        event.preventDefault();
        break;
      case nextKey:
        nextIndex = index + 1;
        if (nextIndex >= this.itemCount) {
          nextIndex = this.loop ? 0 : this.itemCount - 1;
        }
        event.preventDefault();
        break;
      case "Home":
        nextIndex = 0;
        event.preventDefault();
        break;
      case "End":
        nextIndex = this.itemCount - 1;
        event.preventDefault();
        break;
      default:
        return;
    }
    if (nextIndex !== index) {
      this.isUserInitiated = true;
      this.setActiveItem(nextIndex);
      dots[nextIndex].focus();
    }
  }
  handleScrollSnapChanging(event) {
    if (!this.items || !this.hasInitialized) return;
    const snapEvent = event;
    const snappingElement = snapEvent.snapTargetInline;
    if (snappingElement) {
      const items = this.getItems();
      const newIndex = items.indexOf(snappingElement);
      if (newIndex !== -1 && newIndex !== this.activeIndex) {
        this.activeIndex = newIndex;
        this.activeName = items[newIndex]?.getAttribute("name") || "";
      }
    }
  }
  handleScrollSnapChange(event) {
    if (!this.items || !this.hasInitialized) return;
    const snapEvent = event;
    const snappedElement = snapEvent.snapTargetInline;
    if (snappedElement) {
      const items = this.getItems();
      const newIndex = items.indexOf(snappedElement);
      if (newIndex !== -1 && newIndex !== this.activeIndex) {
        this.activeIndex = newIndex;
        this.activeName = items[newIndex]?.getAttribute("name") || "";
      }
      if (this.isUserInitiated) {
        this.pendingEventDispatch = true;
      }
    }
  }
  handleScroll() {
    this.isScrolling = true;
    if ((!SUPPORTS_SCROLLSNAPCHANGE || !SUPPORTS_SCROLLSNAPCHANGING) && !IS_IOS && !this.activeItemInterval) {
      this.activeItemInterval = setInterval(() => {
        this.updateActiveIndexFromScroll();
      }, 100);
    }
  }
  handleScrollEnd() {
    this.isScrolling = false;
    this.activeItemInterval = null;
    if (this.activeItemInterval) clearInterval(this.activeItemInterval);
    if (!SUPPORTS_SCROLLSNAPCHANGE || !SUPPORTS_SCROLLSNAPCHANGING) {
      const indexChanged = this.updateActiveIndexFromScroll();
      if (indexChanged && this.isUserInitiated) {
        this.pendingEventDispatch = true;
      }
    }
    if (this.pendingEventDispatch && this.isUserInitiated) {
      this.dispatchEvent(new QuietItemChangeEvent({ index: this.activeIndex }));
      this.pendingEventDispatch = false;
    }
    this.isUserInitiated = false;
  }
  handleWheel() {
    this.isUserInitiated = true;
    const focusedDot = this.shadowRoot?.querySelector(".pagination-dot:focus");
    focusedDot?.blur();
  }
  /** Sets the active item and scrolls to it */
  setActiveItem(index, behavior = "smooth") {
    if (!this.items) return;
    const boundedIndex = Math.max(0, Math.min(index, this.itemCount - 1));
    const items = this.getItems();
    if (items.length <= boundedIndex) return;
    const targetItem = items[boundedIndex];
    const containerWidth = this.items.clientWidth;
    const itemWidth = targetItem.offsetWidth;
    const itemLeft = targetItem.offsetLeft - this.items.offsetLeft;
    const scrollPosition = itemLeft - (containerWidth - itemWidth) / 2;
    this.items.scrollTo({
      left: scrollPosition,
      behavior
    });
  }
  setupResizeObserver() {
    const items = this.getItems();
    this.resizeObserver?.disconnect();
    this.resizeObserver = new ResizeObserver(() => {
      this.setActiveItem(this.activeIndex, "instant");
    });
    items.forEach((item) => {
      this.resizeObserver.observe(item);
    });
  }
  /** Update the activeIndex based on which item is most centered in the viewport */
  updateActiveIndexFromScroll() {
    const items = this.getItems();
    if (items.length === 0) return false;
    const viewportCenter = this.items.scrollLeft + this.items.clientWidth / 2;
    let closestIndex = 0;
    let minDistance = Infinity;
    items.forEach((item, index) => {
      const itemLeft = item.offsetLeft - this.items.offsetLeft;
      const itemCenter = itemLeft + item.offsetWidth / 2;
      const distance = Math.abs(viewportCenter - itemCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = index;
      }
    });
    if (closestIndex !== this.activeIndex) {
      this.activeIndex = closestIndex;
      this.activeName = items[closestIndex]?.getAttribute("name") || "";
      return true;
    }
    return false;
  }
  /** Navigate to the specified item. */
  scrollToIndex(index, scrollBehavior = "smooth") {
    this.isUserInitiated = true;
    this.setActiveItem(index, scrollBehavior);
  }
  /** Navigate to the next item */
  scrollToNext(scrollBehavior = "smooth") {
    this.isUserInitiated = true;
    let newIndex = this.activeIndex + 1;
    if (this.loop && newIndex >= this.itemCount) {
      newIndex = 0;
    }
    this.setActiveItem(newIndex, scrollBehavior);
  }
  /** Navigate to the previous item */
  scrollToPrevious(scrollBehavior = "smooth") {
    this.isUserInitiated = true;
    let newIndex = this.activeIndex - 1;
    if (this.loop && newIndex < 0) {
      newIndex = this.itemCount - 1;
    }
    this.setActiveItem(newIndex, scrollBehavior);
  }
  render() {
    const hasControls = !this.withoutNav || !this.withoutPagination;
    const isRtl = this.localize.dir() === "rtl";
    return x`
      <div
        id="items"
        part="items"
        aria-live="polite"
        tabindex="-1"
        @scroll=${this.handleScroll}
        @scrollend=${this.handleScrollEnd}
        @scrollsnapchanging=${this.handleScrollSnapChanging}
        @scrollsnapchange=${this.handleScrollSnapChange}
        @wheel=${this.handleWheel}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>

      ${hasControls ? x`
            <div id="controls" part="controls">
              ${!this.withoutNav ? x`
                    <button
                      id="previous-button"
                      part="previous-button"
                      aria-label=${this.localize.term("previous")}
                      ?disabled=${!this.loop && this.activeIndex === 0}
                      tabindex=${this.withoutPagination ? 0 : -1}
                      @click=${() => this.scrollToPrevious()}
                    >
                      <quiet-icon library="system" name=${isRtl ? "chevron-right" : "chevron-left"}></quiet-icon>
                    </button>

                    <button
                      id="next-button"
                      part="next-button"
                      aria-label=${this.localize.term("next")}
                      ?disabled=${!this.loop && this.activeIndex === this.itemCount - 1}
                      tabindex=${this.withoutPagination ? 0 : -1}
                      @click=${() => this.scrollToNext()}
                    >
                      <quiet-icon library="system" name=${isRtl ? "chevron-left" : "chevron-right"}></quiet-icon>
                    </button>
                  ` : ""}
              ${!this.withoutPagination ? x`
                    <div id="pagination" part="pagination" role="tablist" aria-label="Choose slide to display">
                      ${Array.from({ length: this.itemCount }, (_, i) => {
      const isActive = i === this.activeIndex;
      return x`
                          <button
                            part="pagination-dot ${isActive ? "pagination-dot-active" : ""}"
                            class=${e({ "pagination-dot": true, active: isActive })}
                            role="tab"
                            aria-label="Go to slide ${i + 1}"
                            aria-selected=${isActive ? "true" : "false"}
                            tabindex=${isActive ? 0 : -1}
                            @click=${(event) => this.handleDotClick(event.target, i)}
                            @keydown=${(event) => this.handleDotKeyDown(event, i)}
                          ></button>
                        `;
    })}
                    </div>
                  ` : ""}
            </div>
          ` : ""}
    `;
  }
};
QuietCarousel.styles = carousel_styles_default;
__decorateClass([
  e2("#items")
], QuietCarousel.prototype, "items", 2);
__decorateClass([
  r()
], QuietCarousel.prototype, "isScrolling", 2);
__decorateClass([
  r()
], QuietCarousel.prototype, "itemCount", 2);
__decorateClass([
  n({ type: String })
], QuietCarousel.prototype, "label", 2);
__decorateClass([
  n({ attribute: "active-index", type: Number, reflect: true })
], QuietCarousel.prototype, "activeIndex", 2);
__decorateClass([
  n({ attribute: "active-name", reflect: true })
], QuietCarousel.prototype, "activeName", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietCarousel.prototype, "loop", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-nav", reflect: true })
], QuietCarousel.prototype, "withoutNav", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-pagination", reflect: true })
], QuietCarousel.prototype, "withoutPagination", 2);
__decorateClass([
  t2({ passive: true })
], QuietCarousel.prototype, "handleScrollSnapChanging", 1);
__decorateClass([
  t2({ passive: true })
], QuietCarousel.prototype, "handleScrollSnapChange", 1);
__decorateClass([
  t2({ passive: true })
], QuietCarousel.prototype, "handleScroll", 1);
__decorateClass([
  t2({ passive: true })
], QuietCarousel.prototype, "handleWheel", 1);
QuietCarousel = __decorateClass([
  t("quiet-carousel")
], QuietCarousel);
QuietCarousel.disableWarning?.("change-in-update");
export {
  QuietCarousel
};
