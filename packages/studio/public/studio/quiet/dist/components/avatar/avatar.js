/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../../chunks/chunk.VZGOKU4C.js";
import "../../chunks/chunk.TUTBBYZM.js";
import {
  avatar_styles_default
} from "../../chunks/chunk.BQRQGRK4.js";
import {
  QuietElement,
  n,
  r,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import "../../chunks/chunk.RT7RKCPI.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import "../../chunks/chunk.AR2Y4PNI.js";
import "../../chunks/chunk.YC32QOAM.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/avatar/avatar.ts
var QuietAvatar = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.hasImageLoaded = false;
  }
  firstUpdated() {
    this.setAttribute("role", "img");
    this.setAttribute("aria-label", this.label ?? "");
  }
  updated(changedProperties) {
    if (changedProperties.has("label") && this.label) {
      this.setAttribute("aria-label", this.label);
    }
  }
  render() {
    return x`
      ${this.characters ? x`<span id="characters" data-length=${this.characters.length}>${this.characters.slice(0, 5)}</span>` : x`
            <slot name="icon">
              <quiet-icon library="system" family="filled" name="user"></quiet-icon>
            </slot>
          `}
      ${this.image ? x`
            <img
              id="image"
              role="presentation"
              src=${this.image}
              alt=""
              @load=${() => this.hasImageLoaded = true}
              @error=${() => this.hasImageLoaded = false}
              ?hidden=${!this.hasImageLoaded}
            />
          ` : ""}
    `;
  }
};
QuietAvatar.styles = [host_styles_default, avatar_styles_default];
__decorateClass([
  r()
], QuietAvatar.prototype, "hasImageLoaded", 2);
__decorateClass([
  n()
], QuietAvatar.prototype, "label", 2);
__decorateClass([
  n()
], QuietAvatar.prototype, "characters", 2);
__decorateClass([
  n()
], QuietAvatar.prototype, "image", 2);
QuietAvatar = __decorateClass([
  t("quiet-avatar")
], QuietAvatar);
export {
  QuietAvatar
};
