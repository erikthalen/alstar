/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  browser_frame_styles_default
} from "../../chunks/chunk.ZZZCUTET.js";
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
  o
} from "../../chunks/chunk.7LEBIIO5.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/browser-frame/browser-frame.ts
var QuietBrowserFrame = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.label = "";
    this.href = "";
    this.flush = false;
    this.platform = "auto";
  }
  /** Extracts a clean domain from a URL string */
  getDomain(url) {
    try {
      const urlObj = new URL(url);
      return urlObj.hostname;
    } catch {
      return url;
    }
  }
  /** Detects the user's platform. Defaults to Mac for non-Windows devices. */
  getPlatform() {
    if (this.platform !== "auto") {
      return this.platform;
    }
    const userAgent = navigator.userAgent.toLowerCase();
    const isWindows = /windows/i.test(userAgent);
    return isWindows ? "windows" : "mac";
  }
  renderMacControls() {
    return x`
      <div id="controls" part="controls" class="mac-controls" aria-hidden="true">
        <span class="control close"></span>
        <span class="control minimize"></span>
        <span class="control maximize"></span>
      </div>
    `;
  }
  renderWindowsControls() {
    return x`
      <div id="controls" part="controls" class="windows-controls" aria-hidden="true">
        <span class="control minimize">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <rect x="2" y="5.5" width="8" height="1" rx="0.5"></rect>
          </svg>
        </span>
        <span class="control maximize">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <rect x="2.5" y="2.5" width="7" height="7" fill="none" stroke="currentColor" stroke-width="1" rx="1"></rect>
          </svg>
        </span>
        <span class="control close">
          <svg viewBox="0 0 12 12" fill="currentColor">
            <path
              d="M3,3 L9,9 M9,3 L3,9"
              stroke="currentColor"
              stroke-width="1.25"
              stroke-linecap="round"
              fill="none"
            ></path>
          </svg>
        </span>
      </div>
    `;
  }
  render() {
    const hasLink = this.href;
    const label = this.label || (this.href ? this.getDomain(this.href) : "");
    const platform = this.getPlatform();
    return x`
      <header id="header" part="header" class=${platform}>
        ${platform === "windows" ? this.renderWindowsControls() : this.renderMacControls()}
        ${hasLink ? x`
              <a
                id="address-bar"
                part="address-bar"
                href="${this.href}"
                target="${o(this.target)}"
                rel="${o(this.rel)}"
                download="${o(this.download)}"
              >
                <div id="url-container">
                  <slot name="icon"></slot>
                  <span id="url-text"><span>${label}</span></span>
                </div>
              </a>
            ` : x`
              <span id="address-bar" part="address-bar">
                <div id="url-container">
                  <slot name="icon"></slot>
                  <span id="url-text"><span>${label}</span></span>
                </div>
              </span>
            `}
      </header>

      <div id="body" part="body" class="${this.flush ? "flush" : ""}">
        <slot></slot>
      </div>
    `;
  }
};
QuietBrowserFrame.styles = [host_styles_default, browser_frame_styles_default];
__decorateClass([
  n()
], QuietBrowserFrame.prototype, "label", 2);
__decorateClass([
  n()
], QuietBrowserFrame.prototype, "href", 2);
__decorateClass([
  n()
], QuietBrowserFrame.prototype, "target", 2);
__decorateClass([
  n()
], QuietBrowserFrame.prototype, "rel", 2);
__decorateClass([
  n()
], QuietBrowserFrame.prototype, "download", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietBrowserFrame.prototype, "flush", 2);
__decorateClass([
  n({ reflect: true })
], QuietBrowserFrame.prototype, "platform", 2);
QuietBrowserFrame = __decorateClass([
  t("quiet-browser-frame")
], QuietBrowserFrame);
export {
  QuietBrowserFrame
};
