/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  hotkey_styles_default
} from "../../chunks/chunk.O7QVE4VT.js";
import {
  detectPlatform
} from "../../chunks/chunk.SMGLWPQI.js";
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

// src/components/hotkey/hotkey.ts
var keywordMap = {
  command: { mac: "\u2318", other: "" },
  cmdctrl: { mac: "\u2318", other: "Ctrl" },
  control: { mac: "\u2303", other: "Ctrl" },
  option: { mac: "\u2325", other: "Alt" },
  shift: { mac: "\u21E7", other: "Shift" },
  escape: { mac: "Esc", other: "Esc" },
  enter: "\u23CE",
  backspace: "\u232B",
  delete: "\u2326",
  tab: "\u21E5",
  up: "\u2191",
  down: "\u2193",
  left: "\u2190",
  right: "\u2192"
};
var QuietHotkey = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.keys = "";
    this.linux = "";
    this.mac = "";
    this.windows = "";
    this.delimiter = "auto";
    this.platform = "auto";
    this.appearance = "normal";
  }
  updated(changedProperties) {
    if (changedProperties.has("label")) {
      this.setAttribute("aria-label", this.label);
    }
  }
  /** Replaces keywords with their platform-specific symbol or text. */
  replaceKeywords(text, platform) {
    return text.split(" ").map((segment) => {
      if (segment.startsWith("$")) {
        const keyword = segment.slice(1);
        const value = keywordMap[keyword] ?? "";
        const replacement = typeof value === "string" ? value : platform === "mac" ? value.mac : value.other;
        return { text: replacement, isKeyword: true };
      }
      return { text: segment, isKeyword: false };
    });
  }
  render() {
    const platform = this.platform === "auto" ? detectPlatform() : this.platform;
    const platformDelimiter = platform === "mac" ? "" : "+";
    const delimiter = this.delimiter === "auto" ? platformDelimiter : this.delimiter.slice(0, 1);
    const props = {
      mac: this.mac || this.keys,
      windows: this.windows || this.keys,
      linux: this.linux || this.keys,
      other: this.keys
    };
    const segments = this.replaceKeywords(props[platform] || "", platform);
    return x`${segments.map((segment, i) => {
      const keyElement = x`<kbd part=${segment.isKeyword ? "keyword" : "key"}>${segment.text.trim()}</kbd>`;
      return i === 0 ? keyElement : x`<span part="delimiter" aria-hidden="true">${delimiter}</span>${keyElement}`;
    })}`;
  }
};
QuietHotkey.styles = [host_styles_default, hotkey_styles_default];
__decorateClass([
  n()
], QuietHotkey.prototype, "keys", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "linux", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "mac", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "windows", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "label", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "delimiter", 2);
__decorateClass([
  n()
], QuietHotkey.prototype, "platform", 2);
__decorateClass([
  n({ reflect: true })
], QuietHotkey.prototype, "appearance", 2);
QuietHotkey = __decorateClass([
  t("quiet-hotkey")
], QuietHotkey);
export {
  QuietHotkey
};
