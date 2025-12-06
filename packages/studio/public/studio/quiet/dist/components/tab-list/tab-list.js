/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.P6EINNL5.js";
import {
  tab_list_styles_default
} from "../../chunks/chunk.GFDEALBW.js";
import "../../chunks/chunk.GT2Z7UUD.js";
import "../../chunks/chunk.TRE6XGMI.js";
import "../../chunks/chunk.Q2OSRC57.js";
import "../../chunks/chunk.FCERPMBP.js";
import "../../chunks/chunk.OGVUQZ5G.js";
import {
  createId
} from "../../chunks/chunk.ELBGBFBV.js";
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
  Localize
} from "../../chunks/chunk.N7C6RCMV.js";
import {
  QuietTabHiddenEvent,
  QuietTabShownEvent
} from "../../chunks/chunk.F22BX4U6.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/tab-list/tab-list.ts
var QuietTabList = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.localize = new Localize(this);
    this.placement = "top";
  }
  updated(changedProperties) {
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label ?? "");
    }
    if (changedProperties.has("tab")) {
      this.setActiveTab(this.tab);
    }
    if (changedProperties.has("placement")) {
      const orientation = ["top", "bottom"].includes(this.placement) ? "horizontal" : "vertical";
      this.setAttribute("aria-orientation", orientation);
    }
  }
  /** Gets an array of tabs slotted into the tab list. */
  getTabs(options) {
    const tabs = this.tabSlot.assignedElements({ flatten: true });
    if (options?.includeDisabled) {
      return tabs.filter((tab) => tab.localName === "quiet-tab");
    } else {
      return tabs.filter((tab) => tab.localName === "quiet-tab" && !tab.disabled);
    }
  }
  getPanels() {
    const panels = this.panelSlot.assignedElements({ flatten: true });
    return panels.filter((panel) => panel.localName === "quiet-tab-panel");
  }
  handleTabsClick(event) {
    const target = event.target;
    const tab = target.closest("quiet-tab");
    if (tab?.panel && !tab.disabled) {
      this.tab = tab.panel || "";
    }
  }
  handleTabsKeyDown(event) {
    const tabs = this.getTabs();
    const activeTab = tabs.find((tab) => tab.panel === this.tab);
    const activeTabIndex = activeTab ? tabs.indexOf(activeTab) : 0;
    const isRtl = this.localize.dir() === "rtl";
    const isVertical = ["start", "end"].includes(this.placement);
    let targetTab;
    if (isVertical && event.key === "ArrowUp" || !isVertical && event.key === (isRtl ? "ArrowRight" : "ArrowLeft")) {
      const prevIndex = activeTabIndex === 0 ? tabs.length - 1 : activeTabIndex - 1;
      targetTab = tabs[prevIndex];
    }
    if (isVertical && event.key === "ArrowDown" || !isVertical && event.key === (isRtl ? "ArrowLeft" : "ArrowRight")) {
      const nextIndex = activeTabIndex === tabs.length - 1 ? 0 : activeTabIndex + 1;
      targetTab = tabs[nextIndex];
    }
    if (event.key === "Home" || event.key === "End") {
      targetTab = event.key === "Home" ? tabs[0] : tabs.slice(-1)[0];
    }
    if (event.key === " ") {
      event.preventDefault();
    }
    if (targetTab) {
      event.preventDefault();
      event.stopPropagation();
      this.tab = targetTab.panel || "";
      targetTab.focus();
    }
  }
  handleSlotChange() {
    const tabs = this.getTabs();
    const panels = this.getPanels();
    tabs.forEach((tab) => tab.id = tab.id || createId("quiet-tab-"));
    panels.forEach((panel) => panel.id = panel.id || createId("quiet-tab-panel-"));
    tabs.forEach((tab) => {
      const name = tab.panel;
      if (!name) return;
      const panel = panels.find((p) => p.name === name);
      if (!panel) return;
      tab.setAttribute("aria-controls", panel.id);
      panel.setAttribute("aria-describedby", tab.id);
    });
    this.resetRovingTabIndex();
  }
  /** Sets the active tab + panel. */
  setActiveTab(name) {
    const tabs = this.getTabs({ includeDisabled: true });
    const panels = this.getPanels();
    if (!name) return;
    this.tab = name;
    for (const tab of tabs) {
      tab.active = tab.panel === name && !tab.disabled;
    }
    for (const panel of panels) {
      const linkedTab = tabs.find((tab) => tab.panel === panel.name);
      if (panel.name === name && linkedTab && !linkedTab.disabled) {
        panel.visible = true;
        this.dispatchEvent(new QuietTabShownEvent({ tab: linkedTab, panel }));
      } else if (linkedTab && panel.visible) {
        panel.visible = false;
        this.dispatchEvent(new QuietTabHiddenEvent({ tab: linkedTab, panel }));
      }
    }
  }
  /** @internal Makes only the active tab tabbable. If no tab is active, the first non-disabled tab will be tabbable. */
  resetRovingTabIndex() {
    const tabs = this.getTabs();
    const activeTab = tabs.find((tab) => tab.active);
    const targetTab = activeTab || tabs[0];
    if (targetTab) {
      this.setActiveTab(targetTab.panel);
    }
  }
  render() {
    return x`
      <quiet-scroller
        id="tabs"
        part="tabs"
        exportparts="content:tabs-content"
        role="tablist"
        @click=${this.handleTabsClick}
        @keydown=${this.handleTabsKeyDown}
      >
        <slot name="tab" @slotchange=${this.handleSlotChange}></slot>
      </quiet-scroller>

      <div id="panels" part="panels">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `;
  }
};
QuietTabList.styles = [host_styles_default, tab_list_styles_default];
__decorateClass([
  e("#tabs > slot")
], QuietTabList.prototype, "tabSlot", 2);
__decorateClass([
  e("#panels > slot")
], QuietTabList.prototype, "panelSlot", 2);
__decorateClass([
  n()
], QuietTabList.prototype, "label", 2);
__decorateClass([
  n({ reflect: true })
], QuietTabList.prototype, "tab", 2);
__decorateClass([
  n({ reflect: true })
], QuietTabList.prototype, "placement", 2);
QuietTabList = __decorateClass([
  t("quiet-tab-list")
], QuietTabList);
export {
  QuietTabList
};
