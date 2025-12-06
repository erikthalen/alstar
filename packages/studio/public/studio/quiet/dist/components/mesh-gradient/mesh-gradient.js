/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  mesh_gradient_styles_default
} from "../../chunks/chunk.XJPYEKC5.js";
import {
  TinyColor
} from "../../chunks/chunk.54VRTGJ5.js";
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
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/mesh-gradient/mesh-gradient.ts
var QuietMeshGradient = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.currentBaseColor = "";
    this.currentBrightness = 0;
    this.gradientStyle = "";
    this.complexity = 4;
    /**
     * Handles the `transitionend` event to detect when `--gradient-color` or `--brightness` changes. The 1ms transitions
     * on the `color` and `z-index` properties trigger this.
     */
    this.handleColorTransition = (event) => {
      if (event.propertyName === "color" || event.propertyName === "z-index") {
        this.detectAndGenerateGradient();
      }
    };
  }
  firstUpdated() {
    this.detectAndGenerateGradient();
  }
  updated(changedProperties) {
    if (changedProperties.has("complexity") || changedProperties.has("seed")) {
      const baseColor = this.getBaseColor();
      const brightness = this.getBrightness();
      this.currentBaseColor = baseColor || "";
      this.currentBrightness = brightness;
      this.generateGradient(baseColor);
    }
  }
  /**
   * Adjusts the brightness of an HSL color using a hybrid tint/shade approach. Positive values tint the color
   * (lighten + desaturate) and negative values shade it (darken only).
   */
  adjustBrightness(hsl) {
    const brightness = this.getBrightness();
    const amount = brightness / 100;
    return amount === 0 ? hsl : {
      h: hsl.h,
      s: hsl.s,
      l: Math.round(amount > 0 ? hsl.l + (100 - hsl.l) * amount : hsl.l * (1 + amount))
    };
  }
  /** Extracts the HSL values from any CSS color format using TinyColor. */
  colorToHsl(color) {
    const tinyColor = new TinyColor(color);
    if (!tinyColor.isValid) return void 0;
    const hsl = tinyColor.toHsl();
    return {
      h: Math.round(hsl.h),
      s: Math.round(hsl.s * 100),
      // Convert to percentage
      l: Math.round(hsl.l * 100)
      // Convert to percentage
    };
  }
  /** Detects the current base color and brightness, and regenerates the gradient if needed. */
  detectAndGenerateGradient() {
    const baseColor = this.getBaseColor();
    const brightness = this.getBrightness();
    if (baseColor !== this.currentBaseColor || brightness !== this.currentBrightness || !this.gradientStyle) {
      this.currentBaseColor = baseColor || "";
      this.currentBrightness = brightness;
      this.generateGradient(baseColor);
    }
  }
  /** Generates an array of HSL colors based on color theory, preserving the base color's characteristics. */
  generateColors(count, baseHsl) {
    const colors = [];
    const lightnessRangeDown = Math.min(30, baseHsl.l - 10);
    const lightnessRangeUp = Math.min(30, 90 - baseHsl.l);
    let baseSaturation = baseHsl.s;
    if (baseHsl.l > 80) {
      baseSaturation = Math.min(baseSaturation, 60);
    } else if (baseHsl.l < 30) {
      baseSaturation = Math.min(baseSaturation, 70);
    }
    for (let i = 0; i < count; i++) {
      if (i === 0) {
        colors.push(this.hslToString(baseHsl));
      } else if (i < count / 1.4) {
        const hueShift = 30 * (i % 2 === 0 ? 1 : -1) * Math.ceil(i / 2);
        const lightnessShift = i % 2 === 0 ? lightnessRangeUp * (i / count) : -(lightnessRangeDown * (i / count));
        const lightness = Math.max(10, Math.min(90, baseHsl.l + lightnessShift));
        const saturationVariance = (Math.random() - 0.5) * 20;
        const saturation = Math.max(20, Math.min(100, baseSaturation + saturationVariance));
        colors.push(
          this.hslToString({
            h: (baseHsl.h + hueShift + 360) % 360,
            s: Math.round(saturation),
            l: Math.round(lightness)
          })
        );
      } else {
        const hueShift = 150 * (i % 2 === 0 ? 1 : -1);
        const targetLightness = 50 + (baseHsl.l - 50) * 0.5;
        const lightness = Math.max(20, Math.min(80, targetLightness + (Math.random() - 0.5) * 20));
        const saturation = Math.max(20, Math.min(80, baseSaturation * 0.7));
        colors.push(
          this.hslToString({
            h: (baseHsl.h + hueShift + 360) % 360,
            s: Math.round(saturation),
            l: Math.round(lightness)
          })
        );
      }
    }
    return colors;
  }
  /** Generates the CSS gradient styles. */
  generateGradient(baseColor) {
    let baseHsl = baseColor ? this.colorToHsl(baseColor) ?? this.randomHsl() : this.randomHsl();
    baseHsl = this.adjustBrightness(baseHsl);
    const colors = this.generateColors(this.complexity, baseHsl);
    const gradients = colors.map((color, i) => {
      const { x: x2, y } = this.getPosition(i, this.seed);
      return `radial-gradient(at ${x2}% ${y}%, ${color} 0px, transparent 55%)`;
    });
    this.style.setProperty("--optimal-text-color", this.getOptimalTextColor(colors[0]));
    this.gradientStyle = `
      background-color: ${colors[0]};
      background-image: ${gradients.join(", ")};
    `;
  }
  /** Gets the current value of `--gradient-color` from computed styles. */
  getBaseColor() {
    const computedStyle = getComputedStyle(this);
    const baseColor = computedStyle.getPropertyValue("--gradient-color").trim();
    return baseColor || void 0;
  }
  /** Gets the current value of `--brightness` from computed styles. */
  getBrightness() {
    const computedStyle = getComputedStyle(this);
    const brightness = computedStyle.getPropertyValue("--brightness").trim();
    return brightness ? parseFloat(brightness) : 0;
  }
  /** Determines the optimal text color (black or white) based on the background color. */
  getOptimalTextColor(color) {
    const tinyColor = new TinyColor(color);
    return tinyColor.isValid && tinyColor.isLight() ? "black" : "white";
  }
  /** Calculates gradient positions, either randomly or based on a seed. */
  getPosition(index, seed) {
    if (seed !== void 0) {
      const hash = (seed + index) * 2654435761 % 2147483647;
      const normalized = hash / 2147483647;
      return {
        x: Math.round(normalized * 100 % 100),
        y: Math.round(normalized * index * 10 * 100 % 100)
      };
    }
    return {
      x: Math.round(Math.random() * 100),
      y: Math.round(Math.random() * 100)
    };
  }
  /** Formats an HSL object as a CSS HSL string. */
  hslToString({ h, s, l }) {
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
  /** Creates a random HSL color for when no base color is provided. */
  randomHsl() {
    return {
      h: Math.round(Math.random() * 360),
      s: 70 + Math.round(Math.random() * 30),
      // 70-100%
      l: 50 + Math.round(Math.random() * 30)
      // 50-80%
    };
  }
  /** Regenerates the gradient. Useful for creating new random gradients programmatically. */
  regenerate() {
    this.seed = void 0;
    this.detectAndGenerateGradient();
  }
  render() {
    return x`
      <div id="gradient" part="gradient" style=${this.gradientStyle} @transitionend=${this.handleColorTransition}></div>
      <div id="content" part="content">
        <slot></slot>
      </div>
    `;
  }
};
QuietMeshGradient.styles = [host_styles_default, mesh_gradient_styles_default];
__decorateClass([
  r()
], QuietMeshGradient.prototype, "currentBaseColor", 2);
__decorateClass([
  r()
], QuietMeshGradient.prototype, "currentBrightness", 2);
__decorateClass([
  r()
], QuietMeshGradient.prototype, "gradientStyle", 2);
__decorateClass([
  n({ type: Number })
], QuietMeshGradient.prototype, "complexity", 2);
__decorateClass([
  n({ type: Number })
], QuietMeshGradient.prototype, "seed", 2);
QuietMeshGradient = __decorateClass([
  t("quiet-mesh-gradient")
], QuietMeshGradient);
QuietMeshGradient.disableWarning?.("change-in-update");
export {
  QuietMeshGradient
};
