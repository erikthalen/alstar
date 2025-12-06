/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  typewriter_styles_default
} from "../../chunks/chunk.BB5UNF6H.js";
import {
  parseDelimitedTokens
} from "../../chunks/chunk.W6PQ6UIS.js";
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
  QuietAnimationComplete
} from "../../chunks/chunk.CI5CPUU3.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/typewriter/typewriter.ts
var QuietTypewriter = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.animationTimeout = null;
    this.observer = null;
    this.text = "";
    this.delimiter = "\n";
    this.speed = 50;
    this.delay = 250;
    this.startOnView = false;
    this.withCursor = false;
    this.loop = false;
    this.loopDelay = 2e3;
    this.pause = false;
    this.ignoreReducedMotion = false;
    this.charIndex = 0;
    this.currentLineIndex = 0;
    this.currentText = "";
    this.isAnimating = false;
    this.isErasing = false;
    this.lines = [];
  }
  connectedCallback() {
    super.connectedCallback();
    if (this.startOnView) {
      this.setupIntersectionObserver();
    }
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopAnimation();
    this.observer?.disconnect();
  }
  async updated(changedProperties) {
    if (changedProperties.has("text") || changedProperties.has("delimiter")) {
      this.lines = parseDelimitedTokens(this.text, this.delimiter);
      this.setAttribute("aria-label", this.lines.join(". "));
      if (!this.isAnimating) {
        this.resetState();
        if (!this.startOnView) {
          this.startAnimation();
        }
      }
    }
    if (changedProperties.has("pause") && !this.pause && this.isAnimating) {
      this.resumeAnimation();
    }
  }
  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !this.isAnimating) {
          this.startAnimation();
          this.observer?.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    this.observer.observe(this);
  }
  /** Gets the current line of text to type. */
  getCurrentLine() {
    return this.lines[this.currentLineIndex] || "";
  }
  /** Starts the typewriter animation. */
  startAnimation() {
    if (this.isAnimating || this.lines.length === 0) return;
    this.stopAnimation();
    const effectiveDelay = Math.max(0, Number(this.delay) || 0);
    this.animationTimeout = window.setTimeout(() => {
      this.isAnimating = true;
      this.isErasing = false;
      this.currentText = "";
      this.charIndex = 0;
      this.typeNextChar();
    }, effectiveDelay);
  }
  /** Types the next character in the animation. */
  typeNextChar() {
    if (!this.isAnimating || this.isErasing || this.pause) return;
    const currentLine = this.getCurrentLine();
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !this.ignoreReducedMotion) {
      this.currentText = currentLine;
      this.charIndex = currentLine.length;
    } else {
      if (this.charIndex < currentLine.length) {
        this.currentText = currentLine.slice(0, this.charIndex + 1);
        this.charIndex++;
        const currentDuration = this.speed * (0.5 + Math.random());
        this.animationTimeout = window.setTimeout(() => this.typeNextChar(), currentDuration);
        return;
      }
    }
    if (this.charIndex >= currentLine.length) {
      this.isAnimating = false;
      this.dispatchEvent(new QuietAnimationComplete());
      const hasMoreLines = this.currentLineIndex < this.lines.length - 1;
      if (hasMoreLines) {
        this.startEraseAnimation(true);
      } else if (this.loop && !this.pause) {
        this.startEraseAnimation(false);
      }
    }
  }
  /** Starts the erase animation. */
  startEraseAnimation(moveToNextLine = false) {
    if (this.isAnimating || this.pause) return;
    this.isAnimating = true;
    this.isErasing = true;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let displayDuration = this.loopDelay;
    if (prefersReducedMotion && !this.ignoreReducedMotion) {
      const typingDuration = this.currentText.length * this.speed;
      displayDuration = typingDuration + this.loopDelay;
    }
    this.animationTimeout = window.setTimeout(
      () => {
        this.eraseNextChar(moveToNextLine);
      },
      Math.max(0, displayDuration)
    );
  }
  /** Erases the next character in the animation. */
  eraseNextChar(moveToNextLine) {
    if (!this.isAnimating || !this.isErasing || this.pause) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion && !this.ignoreReducedMotion) {
      this.currentText = "";
      this.charIndex = 0;
    } else {
      if (this.currentText.length > 0) {
        this.currentText = this.currentText.slice(0, -1);
        this.charIndex--;
        this.animationTimeout = window.setTimeout(() => this.eraseNextChar(moveToNextLine), 50);
        return;
      }
    }
    if (this.currentText.length === 0) {
      this.isAnimating = false;
      this.isErasing = false;
      if (!this.pause) {
        if (moveToNextLine) {
          this.currentLineIndex++;
        } else {
          this.currentLineIndex = 0;
        }
        this.charIndex = 0;
        this.startAnimation();
      }
    }
  }
  /** Resets the animation state to the beginning. */
  resetState() {
    this.currentText = "";
    this.charIndex = 0;
    this.currentLineIndex = 0;
    this.isErasing = false;
  }
  /** Restarts the animation from the beginning. */
  restart() {
    this.stopAnimation();
    this.resetState();
    this.startAnimation();
  }
  /** Stops the current animation by clearing the timeout. */
  stopAnimation() {
    if (this.animationTimeout !== null) {
      clearTimeout(this.animationTimeout);
      this.animationTimeout = null;
      this.isAnimating = false;
      this.isErasing = false;
    }
  }
  /** Resumes the animation based on the current state. */
  resumeAnimation() {
    if (!this.isAnimating) return;
    if (this.isErasing) {
      const hasMoreLines = this.currentLineIndex < this.lines.length - 1;
      this.eraseNextChar(hasMoreLines);
    } else {
      this.typeNextChar();
    }
  }
  render() {
    const cursor = this.withCursor && this.isAnimating ? x`<span part="cursor" class="cursor"></span>` : "";
    const displayText = this.currentText || x`&nbsp;`;
    return x`<span aria-hidden="true">${displayText}${cursor}</span>`;
  }
};
QuietTypewriter.styles = [host_styles_default, typewriter_styles_default];
__decorateClass([
  n()
], QuietTypewriter.prototype, "text", 2);
__decorateClass([
  n()
], QuietTypewriter.prototype, "delimiter", 2);
__decorateClass([
  n({ type: Number })
], QuietTypewriter.prototype, "speed", 2);
__decorateClass([
  n({ type: Number })
], QuietTypewriter.prototype, "delay", 2);
__decorateClass([
  n({ type: Boolean, attribute: "start-on-view" })
], QuietTypewriter.prototype, "startOnView", 2);
__decorateClass([
  n({ type: Boolean, attribute: "with-cursor", reflect: true })
], QuietTypewriter.prototype, "withCursor", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTypewriter.prototype, "loop", 2);
__decorateClass([
  n({ type: Number, attribute: "loop-delay" })
], QuietTypewriter.prototype, "loopDelay", 2);
__decorateClass([
  n({ type: Boolean, reflect: true })
], QuietTypewriter.prototype, "pause", 2);
__decorateClass([
  n({ attribute: "ignore-reduced-motion", type: Boolean, reflect: true })
], QuietTypewriter.prototype, "ignoreReducedMotion", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "charIndex", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "currentLineIndex", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "currentText", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "isAnimating", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "isErasing", 2);
__decorateClass([
  r()
], QuietTypewriter.prototype, "lines", 2);
QuietTypewriter = __decorateClass([
  t("quiet-typewriter")
], QuietTypewriter);
QuietTypewriter.disableWarning?.("change-in-update");
export {
  QuietTypewriter
};
