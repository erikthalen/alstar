/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  sparkline_styles_default
} from "../../chunks/chunk.VKGEVMVO.js";
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

// src/components/sparkline/sparkline.ts
var QuietSparkline = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.points = [];
    this.label = "";
    this.data = "";
    this.appearance = "gradient";
    this.curve = "linear";
  }
  /** Returns an SVG path for a linear, point-to-point graph */
  getLinearPath(coordinates) {
    return coordinates.length > 0 ? `M ${coordinates[0]} ${coordinates.slice(1).map((coord) => `L ${coord}`).join(" ")}` : "M 0 0";
  }
  /** Returns an SVG path for a curved graph */
  getNaturalPath(coordinates) {
    if (coordinates.length <= 2) {
      return this.getLinearPath(coordinates);
    }
    const points = coordinates.map((coord) => {
      const [x2, y] = coord.split(" ").map(Number);
      return { x: x2, y };
    });
    let path = `M ${points[0].x} ${points[0].y}`;
    for (let i = 0; i < points.length - 1; i++) {
      const current = points[i];
      const next = points[i + 1];
      const controlX1 = current.x + (next.x - current.x) / 3;
      const controlX2 = current.x + (next.x - current.x) * 2 / 3;
      path += ` C ${controlX1} ${current.y}, ${controlX2} ${next.y}, ${next.x} ${next.y}`;
    }
    return path;
  }
  /** Returns an SVG path for a stepped graph */
  getStepPath(coordinates) {
    if (coordinates.length <= 1) {
      return this.getLinearPath(coordinates);
    }
    let path = `M ${coordinates[0]}`;
    for (let i = 1; i < coordinates.length; i++) {
      const [prevX] = coordinates[i - 1].split(" ").map(Number);
      const [currX, currY] = coordinates[i].split(" ").map(Number);
      const midX = prevX + (currX - prevX) / 2;
      path += ` H ${midX} V ${currY}`;
      path += ` H ${currX}`;
    }
    return path;
  }
  /** Generates the appropriate SVG path based on the desired curve. */
  getPath(coordinates) {
    switch (this.curve) {
      case "natural":
        return this.getNaturalPath(coordinates);
      case "step":
        return this.getStepPath(coordinates);
      case "linear":
      default:
        return this.getLinearPath(coordinates);
    }
  }
  render() {
    const viewportPadding = parseFloat(getComputedStyle(this).getPropertyValue("--line-width")) ?? 2;
    const width = 200;
    const height = 50;
    const points = this.data.split(" ").map((n2) => parseFloat(n2.trim())).filter((n2) => !Number.isNaN(n2));
    const viewBoxWidth = Math.max(1, points.length - 1);
    const maxPoint = Math.max(...points);
    const viewBoxHeight = Math.max(1, maxPoint) + viewportPadding * 2;
    const coordinates = points.length > 0 ? points.map((point, index) => {
      const x2 = index;
      const y = viewBoxHeight - point - viewportPadding;
      return `${x2} ${y}`;
    }) : ["0 0"];
    const mainPath = this.getPath(coordinates);
    const filledPath = points.length > 1 ? `${mainPath} L ${viewBoxWidth} ${viewBoxHeight} L 0 ${viewBoxHeight} Z` : "";
    return x`
      <svg
        height="${height}px"
        width="${width}px"
        viewBox="0 0 ${viewBoxWidth} ${viewBoxHeight}"
        preserveAspectRatio="none"
        aria-label=${this.label}
      >
        <defs>
          <linearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stop-color="var(--fill-color)" stop-opacity="1" />
            <stop
              offset="100%"
              stop-color="var(--fill-color)"
              stop-opacity="${this.appearance === "solid" ? "1" : "0"}"
            />
          </linearGradient>
        </defs>
        <path
          d="${filledPath}"
          stroke="transparent"
          fill="${this.appearance === "solid" ? "var(--fill-color)" : "url(#gradient)"}"
        />
        <path
          d="${mainPath}"
          stroke-width="var(--line-width)"
          stroke="var(--line-color)"
          fill="transparent"
          vector-effect="non-scaling-stroke"
        />
      </svg>
    `;
  }
};
QuietSparkline.styles = [host_styles_default, sparkline_styles_default];
__decorateClass([
  r()
], QuietSparkline.prototype, "points", 2);
__decorateClass([
  n()
], QuietSparkline.prototype, "label", 2);
__decorateClass([
  n()
], QuietSparkline.prototype, "data", 2);
__decorateClass([
  n({ reflect: true })
], QuietSparkline.prototype, "appearance", 2);
__decorateClass([
  n({ reflect: true })
], QuietSparkline.prototype, "trend", 2);
__decorateClass([
  n({ reflect: true })
], QuietSparkline.prototype, "curve", 2);
QuietSparkline = __decorateClass([
  t("quiet-sparkline")
], QuietSparkline);
export {
  QuietSparkline
};
