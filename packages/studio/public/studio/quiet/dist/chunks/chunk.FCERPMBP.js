/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  scroller_styles_default
} from "./chunk.OGVUQZ5G.js";
import {
  QuietElement,
  e,
  n,
  r,
  t,
  t2
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  Localize
} from "./chunk.N7C6RCMV.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/scroller/scroller.ts
var QuietScroller = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.resizeObserver = new ResizeObserver(() => this.updateScroll());
    this.previousStartOpacity = null;
    this.previousEndOpacity = null;
    this.canScroll = false;
    this.orientation = "horizontal";
    this.withoutScrollbar = false;
    this.withoutShadow = false;
  }
  connectedCallback() {
    super.connectedCallback();
    this.resizeObserver.observe(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.resizeObserver.disconnect();
  }
  handleKeyDown(event) {
    if (event.key === "Home") {
      event.preventDefault();
      this.content.scrollTo({
        left: this.orientation === "horizontal" ? 0 : void 0,
        top: this.orientation === "vertical" ? 0 : void 0
      });
    }
    if (event.key === "End") {
      event.preventDefault();
      this.content.scrollTo({
        left: this.orientation === "horizontal" ? this.content.scrollWidth : void 0,
        top: this.orientation === "vertical" ? this.content.scrollHeight : void 0
      });
    }
  }
  handleSlotChange() {
    this.updateScroll();
  }
  updateScroll() {
    let startShadowOpacity;
    let endShadowOpacity;
    if (this.orientation === "horizontal") {
      const clientWidth = Math.ceil(this.content.clientWidth);
      const scrollLeft = Math.abs(Math.ceil(this.content.scrollLeft));
      const scrollWidth = Math.ceil(this.content.scrollWidth);
      const maxScroll = scrollWidth - clientWidth;
      this.canScroll = maxScroll > 0;
      startShadowOpacity = Math.min(1, scrollLeft / (maxScroll * 0.05));
      endShadowOpacity = Math.min(1, (maxScroll - scrollLeft) / (maxScroll * 0.05));
    } else {
      const clientHeight = Math.ceil(this.content.clientHeight);
      const scrollTop = Math.abs(Math.ceil(this.content.scrollTop));
      const scrollHeight = Math.ceil(this.content.scrollHeight);
      const maxScroll = scrollHeight - clientHeight;
      this.canScroll = maxScroll > 0;
      startShadowOpacity = Math.min(1, scrollTop / (maxScroll * 0.05));
      endShadowOpacity = Math.min(1, (maxScroll - scrollTop) / (maxScroll * 0.05));
    }
    const newStartOpacity = String(startShadowOpacity || 0);
    const newEndOpacity = String(endShadowOpacity || 0);
    if (this.previousStartOpacity !== newStartOpacity) {
      this.style.setProperty("--start-shadow-opacity", newStartOpacity);
      this.previousStartOpacity = newStartOpacity;
    }
    if (this.previousEndOpacity !== newEndOpacity) {
      this.style.setProperty("--end-shadow-opacity", newEndOpacity);
      this.previousEndOpacity = newEndOpacity;
    }
  }
  render() {
    return x`
      ${this.withoutShadow ? "" : x`
            <div id="start-shadow" part="start-shadow" aria-hidden="true"></div>
            <div id="end-shadow" part="end-shadow" aria-hidden="true"></div>
          `}

      <div
        id="content"
        part="content"
        role="region"
        aria-label=${this.localize.term("scrollableRegion")}
        aria-orientation=${this.orientation}
        tabindex=${this.canScroll ? "0" : "-1"}
        @keydown=${this.handleKeyDown}
        @scroll=${this.updateScroll}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
QuietScroller.styles = [host_styles_default, scroller_styles_default];
__decorateClass([
  e("#content")
], QuietScroller.prototype, "content", 2);
__decorateClass([
  r()
], QuietScroller.prototype, "canScroll", 2);
__decorateClass([
  n({ reflect: true })
], QuietScroller.prototype, "orientation", 2);
__decorateClass([
  n({ attribute: "without-scrollbar", type: Boolean, reflect: true })
], QuietScroller.prototype, "withoutScrollbar", 2);
__decorateClass([
  n({ attribute: "without-shadow", type: Boolean, reflect: true })
], QuietScroller.prototype, "withoutShadow", 2);
__decorateClass([
  t2({ passive: true })
], QuietScroller.prototype, "updateScroll", 1);
QuietScroller = __decorateClass([
  t("quiet-scroller")
], QuietScroller);

export {
  QuietScroller
};
