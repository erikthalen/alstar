/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  pagination_styles_default
} from "../../chunks/chunk.7RSXMDCI.js";
import {
  i,
  u
} from "../../chunks/chunk.ZCPQX3DA.js";
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  clamp
} from "../../chunks/chunk.ELBGBFBV.js";
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
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietBeforePageChangeEvent,
  QuietPageChangeEvent
} from "../../chunks/chunk.Z4Q4SHKM.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  e
} from "../../chunks/chunk.E6M524BP.js";
import "../../chunks/chunk.UTLMCKJR.js";
import "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/pagination/pagination.ts
var QuietPagination = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.label = "";
    this.totalPages = 1;
    this.page = 1;
    this.siblings = 3;
    this.jump = 5;
    this.format = "standard";
    this.linkFormatter = "";
    this.disabled = false;
    this.appearance = "normal";
    this.withoutNav = false;
  }
  willUpdate(changedProperties) {
    super.willUpdate(changedProperties);
    if (changedProperties.has("page")) {
      this.page = Number(this.page);
    }
  }
  updated(changedProperties) {
    if (changedProperties.has("disabled")) {
      this.customStates.set("disabled", this.disabled);
    }
  }
  /** Changes the current page, emitting a cancellable 'quiet-page-change' event. */
  async changePage(newPage) {
    if (this.disabled || this.linkFormatter) return;
    if (newPage < 1 || newPage > this.totalPages || newPage === this.page) return;
    const beforePageChangeEvent = new QuietBeforePageChangeEvent({ currentPage: this.page, requestedPage: newPage });
    this.dispatchEvent(beforePageChangeEvent);
    if (beforePageChangeEvent.defaultPrevented) {
      return;
    }
    this.page = newPage;
    await this.updateComplete;
    const pageChangeEvent = new QuietPageChangeEvent();
    this.dispatchEvent(pageChangeEvent);
  }
  /** Generates the list of pagination items, including pages and jump buttons. */
  getPaginationItems() {
    const items = [];
    const totalButtons = 2 * this.siblings + 1;
    const clampedTotalButtons = clamp(totalButtons, 5, Infinity);
    if (this.totalPages < 1) return items;
    if (this.totalPages <= clampedTotalButtons) {
      for (let i2 = 1; i2 <= this.totalPages; i2++) {
        items.push({ type: "page", page: i2 });
      }
    } else {
      const middlePageCount = clampedTotalButtons - 4;
      const sideButtons = Math.floor(middlePageCount / 2);
      const showJumpBackward = this.page > sideButtons + 2;
      const showJumpForward = this.page < this.totalPages - sideButtons - 1;
      let rangeStart, rangeEnd;
      if (!showJumpBackward && showJumpForward) {
        rangeStart = 2;
        rangeEnd = clampedTotalButtons - 2;
      } else if (showJumpBackward && !showJumpForward) {
        rangeStart = this.totalPages - (clampedTotalButtons - 3);
        rangeEnd = this.totalPages - 1;
      } else if (showJumpBackward && showJumpForward) {
        rangeStart = Math.max(2, this.page - sideButtons);
        rangeEnd = Math.min(this.totalPages - 1, this.page + sideButtons);
        if (rangeEnd - rangeStart + 1 < middlePageCount) {
          if (rangeStart === 2) {
            rangeEnd = Math.min(this.totalPages - 1, rangeStart + middlePageCount - 1);
          } else if (rangeEnd === this.totalPages - 1) {
            rangeStart = Math.max(2, rangeEnd - middlePageCount + 1);
          }
        }
      } else {
        rangeStart = 2;
        rangeEnd = this.totalPages - 1;
      }
      items.push({ type: "page", page: 1 });
      if (rangeStart === 3) {
        items.push({ type: "page", page: 2 });
      } else if (showJumpBackward) {
        items.push({ type: "jump", position: "start" });
      }
      for (let i2 = rangeStart; i2 <= rangeEnd; i2++) {
        items.push({ type: "page", page: i2 });
      }
      if (rangeEnd === this.totalPages - 2) {
        items.push({ type: "page", page: this.totalPages - 1 });
      } else if (showJumpForward) {
        items.push({ type: "jump", position: "end" });
      }
      items.push({ type: "page", page: this.totalPages });
    }
    return items;
  }
  handleNavClick(event) {
    if (this.disabled) {
      event.preventDefault();
    }
  }
  renderLink(page) {
    page = clamp(page, 1, this.totalPages);
    if (typeof this.linkFormatter === "string") {
      return this.linkFormatter.replace(/\{page\}/g, page + "");
    } else if (typeof this.linkFormatter === "function") {
      return this.linkFormatter(page);
    } else {
      return void 0;
    }
  }
  render() {
    const isLink = this.linkFormatter;
    const tag = isLink ? i`a` : i`button`;
    const label = this.label || this.localize.term("pagination");
    const isPrevDisabled = this.page <= 1 || this.disabled;
    const isNextDisabled = this.page >= this.totalPages || this.disabled;
    const isRtl = this.localize.dir() === "rtl";
    const chevronLeftIcon = u`<quiet-icon library="system" name="chevron-left"></quiet-icon>`;
    const chevronRightIcon = u`<quiet-icon library="system" name="chevron-right"></quiet-icon>`;
    let content;
    const previousButton = u`
      <li part="item">
        <${tag}
          href=${o(this.renderLink(this.page - 1))}
          part="button button-previous"
          class=${e({ disabled: isPrevDisabled || this.disabled })}
          aria-label="${this.localize.term("previous")}"
          ?disabled=${o(isLink ? void 0 : isPrevDisabled || this.disabled)}
          tabindex=${o(this.disabled ? "-1" : void 0)}
          @click=${() => this.changePage(this.page - 1)}
        >
          <slot name="previous-icon"> ${isRtl ? chevronRightIcon : chevronLeftIcon} </slot>
        </${tag}>
      </li>
    `;
    const nextButton = u`
      <li part="item">
        <${tag}
          href=${o(this.renderLink(this.page + 1))}
          part="button button-next"
          class=${e({ disabled: isNextDisabled || this.disabled })}
          aria-label="${this.localize.term("next")}"
          ?disabled=${o(isLink ? void 0 : isNextDisabled || this.disabled)}
          tabindex=${o(this.disabled ? "-1" : void 0)}
          @click=${() => this.changePage(this.page + 1)}
        >
          <slot name="next-icon"> ${isRtl ? chevronLeftIcon : chevronRightIcon} </slot>
        </${tag}>
      </li>
    `;
    if (this.format === "compact") {
      content = u`
        <li part="item">
          <span id="range" part="range">
            ${this.localize.term(
        "numberOfTotal",
        this.localize.number(this.page, { useGrouping: true }),
        this.localize.number(this.totalPages, { useGrouping: true })
      )}
          </span>
        </li>
      `;
    } else {
      content = this.getPaginationItems().map((item) => {
        if (item.type === "jump") {
          const jumpToPage = this.page + (item.position === "start" ? -5 : 5);
          return u`
            <li part="item">
              <${tag}
                href=${o(this.renderLink(jumpToPage))}
                part="button ${item.position === "start" ? "button-jump-backward" : "button-jump-forward"}"
                class=${e({ disabled: this.disabled })}
                aria-label="${this.localize.term(item.position === "start" ? "jumpBackward" : "jumpForward")}"
                ?disabled=${o(isLink ? void 0 : this.disabled)}
                tabindex=${o(this.disabled ? "-1" : void 0)}
                @click=${() => this.changePage(clamp(this.page + (item.position === "start" ? -5 : 5), 1, this.totalPages))}
              >
                <slot name=${item.position === "start" ? "jump-backward-icon" : "jump-forward-icon"}>
                  <quiet-icon library="system" name="dots" family="filled"></quiet-icon>
                </slot>
              </${tag}>
            </li>
          `;
        } else {
          const isCurrent = item.page === this.page;
          const part = `button button-page${isCurrent ? " button-current" : ""}${item.page === 1 ? " button-first" : ""}${item.page === this.totalPages ? " button-last" : ""}`;
          return u`
            <li part="item">
              <${tag}
                href=${o(this.renderLink(item.page))}
                part=${part}
                class=${e({ current: isCurrent, disabled: this.disabled })}
                aria-label=${this.localize.term("pageNumber", item.page)}
                aria-current=${o(isCurrent ? "page" : void 0)}
                ?disabled=${o(isLink ? void 0 : this.disabled)}
                tabindex=${o(this.disabled ? "-1" : void 0)}
                @click=${() => this.changePage(item.page)}
              >
                ${this.localize.number(item.page, { useGrouping: true })}
              </${tag}>
            </li>
          `;
        }
      });
    }
    return u`
      <nav id="nav" part="nav" aria-label="${label}" @click=${this.handleNavClick}>
        <ul id="list" part="list">
          ${this.withoutNav ? "" : previousButton} ${content} ${this.withoutNav ? "" : nextButton}
        </ul>
      </nav>
    `;
  }
};
QuietPagination.styles = [host_styles_default, pagination_styles_default];
__decorateClass([
  n()
], QuietPagination.prototype, "label", 2);
__decorateClass([
  n({ attribute: "total-pages", type: Number })
], QuietPagination.prototype, "totalPages", 2);
__decorateClass([
  n({ type: Number, reflect: true })
], QuietPagination.prototype, "page", 2);
__decorateClass([
  n({ attribute: "siblings", type: Number })
], QuietPagination.prototype, "siblings", 2);
__decorateClass([
  n({ attribute: "jump", type: Number })
], QuietPagination.prototype, "jump", 2);
__decorateClass([
  n({ reflect: true })
], QuietPagination.prototype, "format", 2);
__decorateClass([
  n({ attribute: "link-formatter" })
], QuietPagination.prototype, "linkFormatter", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietPagination.prototype, "disabled", 2);
__decorateClass([
  n({ reflect: true })
], QuietPagination.prototype, "appearance", 2);
__decorateClass([
  n({ type: Boolean, attribute: "without-nav", reflect: true })
], QuietPagination.prototype, "withoutNav", 2);
QuietPagination = __decorateClass([
  t("quiet-pagination")
], QuietPagination);
export {
  QuietPagination
};
