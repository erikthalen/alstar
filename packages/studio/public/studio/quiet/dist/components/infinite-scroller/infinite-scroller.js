/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  infinite_scroller_styles_default
} from "../../chunks/chunk.3RCVBCOD.js";
import "../../chunks/chunk.MGJZZ2SA.js";
import "../../chunks/chunk.3L6SRQZP.js";
import {
  QuietElement,
  e,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietLoadMoreEvent
} from "../../chunks/chunk.RT7RKCPI.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/infinite-scroller/infinite-scroller.ts
var QuietInfiniteScroller = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.isLoading = false;
    this.isComplete = false;
    this.contentCheckFrameId = null;
    this.localize = new Localize(this);
    this.thresholdInPixels = 0;
    this.thresholdInPercent = 0;
    this.label = "";
    this.threshold = "20%";
    this.handleScroll = () => {
      if (this.isComplete || this.isLoading) return;
      if (this.checkScrollThreshold()) {
        this.isLoading = true;
        this.dispatchEvent(new QuietLoadMoreEvent());
      }
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute("role", "feed");
    this.parseThreshold();
    this.addEventListener("scroll", this.handleScroll);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener("scroll", this.handleScroll);
    if (this.contentCheckFrameId) {
      cancelAnimationFrame(this.contentCheckFrameId);
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label || this.localize.term("feed"));
    }
    if (changedProperties.has("threshold")) {
      this.parseThreshold();
    }
    if (changedProperties.has("isLoading")) {
      this.customStates.set("loading", this.isLoading);
    }
    if (changedProperties.has("isComplete")) {
      this.customStates.set("complete", this.isComplete);
    }
  }
  parseThreshold() {
    const val = this.threshold;
    if (val.endsWith("%")) {
      this.thresholdInPixels = 0;
      this.thresholdInPercent = parseFloat(val) / 100;
    } else {
      this.thresholdInPixels = parseFloat(val);
      this.thresholdInPercent = 0;
    }
  }
  checkScrollThreshold() {
    const scrollPosition = this.scrollTop + this.clientHeight;
    const threshold = this.thresholdInPercent !== 0 ? this.clientHeight * this.thresholdInPercent : this.thresholdInPixels;
    const triggerPoint = this.scrollHeight - threshold;
    return scrollPosition >= triggerPoint;
  }
  handleSlotChange() {
    const assignedElements = this.defaultSlot.assignedElements({ flatten: true });
    assignedElements.forEach((el) => {
      if (el instanceof HTMLElement) {
        if (!el.hasAttribute("role")) {
          el.setAttribute("role", "article");
        }
        if (!el.hasAttribute("tabindex")) {
          el.setAttribute("tabindex", "0");
        }
      }
    });
    this.isLoading = false;
    this.scheduleContentCheck();
  }
  isScrollable() {
    return this.scrollHeight > this.clientHeight;
  }
  scheduleContentCheck() {
    if (this.contentCheckFrameId) {
      cancelAnimationFrame(this.contentCheckFrameId);
    }
    this.contentCheckFrameId = requestAnimationFrame(() => {
      if (this.isComplete || this.isLoading) return;
      if (!this.isScrollable() || this.checkScrollThreshold()) {
        this.isLoading = true;
        this.dispatchEvent(new QuietLoadMoreEvent());
      }
    });
  }
  /**
   * Mark the feed as completed, preventing further load events. Changing content in the default slot will reset this
   * and re-enable infinite scrolling.
   */
  complete() {
    this.isComplete = true;
    this.isLoading = false;
  }
  render() {
    return x`
      <slot @slotchange=${this.handleSlotChange}></slot>
      ${!this.isComplete ? x`<quiet-spinner></quiet-spinner>` : ""}
    `;
  }
};
QuietInfiniteScroller.styles = [host_styles_default, infinite_scroller_styles_default];
__decorateClass([
  e("slot:not([name])")
], QuietInfiniteScroller.prototype, "defaultSlot", 2);
__decorateClass([
  r()
], QuietInfiniteScroller.prototype, "isLoading", 2);
__decorateClass([
  r()
], QuietInfiniteScroller.prototype, "isComplete", 2);
__decorateClass([
  n()
], QuietInfiniteScroller.prototype, "label", 2);
__decorateClass([
  n()
], QuietInfiniteScroller.prototype, "threshold", 2);
QuietInfiniteScroller = __decorateClass([
  t("quiet-infinite-scroller")
], QuietInfiniteScroller);
export {
  QuietInfiniteScroller
};
