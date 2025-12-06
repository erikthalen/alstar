/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  icon_styles_default
} from "./chunk.TUTBBYZM.js";
import {
  QuietElement,
  n,
  r,
  t
} from "./chunk.3WKCIAWU.js";
import {
  host_styles_default
} from "./chunk.OW7IPG4K.js";
import {
  QuietLoadErrorEvent,
  QuietLoadedEvent
} from "./chunk.RT7RKCPI.js";
import {
  connectIcon,
  disconnectIcon,
  getLibrary
} from "./chunk.AR2Y4PNI.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/icon/icon.ts
var requests = /* @__PURE__ */ new Map();
var QuietIcon = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.library = "default";
    this.family = "outline";
    this.flipX = false;
    this.flipY = false;
    this.rotate = 0;
  }
  connectedCallback() {
    super.connectedCallback();
    connectIcon(this);
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    disconnectIcon(this);
  }
  firstUpdated() {
    this.setAttribute("role", "img");
    this.setAttribute("aria-hidden", "true");
  }
  async updated(changedProperties) {
    if (changedProperties.has("label")) {
      if (this.label) {
        this.setAttribute("aria-label", this.label);
        this.removeAttribute("aria-hidden");
      } else {
        this.setAttribute("aria-hidden", "true");
        this.removeAttribute("aria-label");
      }
    }
    if (changedProperties.has("library") || changedProperties.has("family") || changedProperties.has("name")) {
      await this.load();
    }
    if (changedProperties.has("rotate")) {
      if (this.rotate === 0) {
        this.style.removeProperty("rotate");
      } else {
        this.style.rotate = `${this.rotate}deg`;
      }
    }
  }
  /** Loads or reloads and draws the icon. */
  async load() {
    try {
      this.svg = await this.fetchIcon();
      await this.updateComplete;
      this.dispatchEvent(new QuietLoadedEvent());
    } catch (err) {
      this.svg = void 0;
      await this.updateComplete;
      this.dispatchEvent(
        new QuietLoadErrorEvent({
          error: new Error(`Failed to load "${this.name}" from the "${this.library}" library.`)
        })
      );
    }
  }
  async fetchIcon() {
    const library = getLibrary(this.library);
    const url = library?.resolve(this.name, this.family);
    let svg;
    if (!library || !url) {
      return void 0;
    }
    if (!requests.has(url)) {
      requests.set(
        url,
        fetch(url, { mode: "cors" }).then((res) => res.text())
      );
    }
    try {
      const responseText = await requests.get(url);
      const parser = new DOMParser();
      const doc = parser.parseFromString(responseText, "text/html");
      svg = doc.querySelector("svg");
      svg?.part.add("svg");
    } catch {
      return void 0;
    }
    if (!svg) {
      return void 0;
    }
    if (library.mutate) {
      library.mutate(svg);
    }
    return svg;
  }
  render() {
    return this.svg;
  }
};
QuietIcon.styles = [host_styles_default, icon_styles_default];
__decorateClass([
  r()
], QuietIcon.prototype, "svg", 2);
__decorateClass([
  n()
], QuietIcon.prototype, "library", 2);
__decorateClass([
  n()
], QuietIcon.prototype, "family", 2);
__decorateClass([
  n()
], QuietIcon.prototype, "name", 2);
__decorateClass([
  n()
], QuietIcon.prototype, "label", 2);
__decorateClass([
  n({ attribute: "flip-x", type: Boolean, reflect: true })
], QuietIcon.prototype, "flipX", 2);
__decorateClass([
  n({ attribute: "flip-y", type: Boolean, reflect: true })
], QuietIcon.prototype, "flipY", 2);
__decorateClass([
  n({ type: Number })
], QuietIcon.prototype, "rotate", 2);
QuietIcon = __decorateClass([
  t("quiet-icon")
], QuietIcon);

export {
  QuietIcon
};
