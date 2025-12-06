/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  include_styles_default
} from "../../chunks/chunk.M7IUG4PA.js";
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
  QuietIncludeErrorEvent,
  QuietIncludedEvent
} from "../../chunks/chunk.ULMTXVHR.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/include/include.ts
var requests = /* @__PURE__ */ new Map();
var QuietInclude = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.mode = "cors";
    this.allowScripts = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("src")) {
      if (this.src) {
        this.fetchInclude();
      } else {
        this.innerHTML = "";
      }
    }
  }
  /** Runs a script by cloning and replacing it. */
  runScript(script) {
    const clonedScript = document.createElement("script");
    [...script.attributes].forEach((attr) => clonedScript.setAttribute(attr.name, attr.value));
    clonedScript.textContent = script.textContent;
    script.parentNode.replaceChild(clonedScript, script);
  }
  /** Fetches the include file and handles the response. */
  async fetchInclude() {
    const url = this.src;
    const cacheKey = JSON.stringify({ url, allowScripts: this.allowScripts, mode: this.mode });
    this.setAttribute("aria-busy", "true");
    if (!requests.has(cacheKey)) {
      requests.set(cacheKey, fetch(this.src, { mode: this.mode }));
    }
    try {
      const response = await requests.get(cacheKey);
      if (response.ok) {
        this.innerHTML = await response.clone().text();
        if (this.allowScripts) {
          this.querySelectorAll("script").forEach((script) => this.runScript(script));
        }
        this.dispatchEvent(new QuietIncludedEvent({ status: response.status }));
      } else {
        this.innerHTML = "";
        this.dispatchEvent(
          new QuietIncludeErrorEvent({
            status: response.status,
            error: new Error("The server responded with an HTTP code outside of the 200 range.")
          })
        );
      }
    } catch (error) {
      this.innerHTML = "";
      this.dispatchEvent(new QuietIncludeErrorEvent({ error }));
    }
    this.removeAttribute("aria-busy");
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietInclude.styles = [host_styles_default, include_styles_default];
__decorateClass([
  n()
], QuietInclude.prototype, "src", 2);
__decorateClass([
  n()
], QuietInclude.prototype, "mode", 2);
__decorateClass([
  n({ attribute: "allow-scripts", type: Boolean })
], QuietInclude.prototype, "allowScripts", 2);
QuietInclude = __decorateClass([
  t("quiet-include")
], QuietInclude);
export {
  QuietInclude
};
