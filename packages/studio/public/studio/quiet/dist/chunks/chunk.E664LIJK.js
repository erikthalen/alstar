/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  transition_group_styles_default
} from "./chunk.Y7YAVZIV.js";
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
  hasDomRectMoved,
  parseCssDuration
} from "./chunk.VBE24RWL.js";
import {
  QuietTransitionEndEvent
} from "./chunk.CVGUOSSL.js";
import {
  x
} from "./chunk.VLHFHZQJ.js";
import {
  QuietContentChangedEvent
} from "./chunk.GFJJN7YE.js";
import {
  __decorateClass
} from "./chunk.32UODNLB.js";

// src/components/transition-group/transition-group.ts
var QuietTransitionGroup = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.cachedElementPositions = /* @__PURE__ */ new WeakMap();
    this.cachedScrollPosition = { x: window.scrollX, y: window.scrollY };
    this.currentTransition = Promise.resolve();
    this.isObserving = false;
    /** Determines if the transition group is currently animating. (Property only) */
    this.isTransitioning = false;
    this.transitionContainer = this;
    this.disableTransitions = false;
    this.ignoreReducedMotion = false;
    this.handleMutations = async (mutations) => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches && !this.ignoreReducedMotion;
      const addedElements = /* @__PURE__ */ new Map();
      const removedElements = /* @__PURE__ */ new Map();
      const movedElements = /* @__PURE__ */ new Map();
      const containerAnimations = [];
      const addAnimations = [];
      const removeAnimations = [];
      const moveAnimations = [];
      const computedStyle = getComputedStyle(this);
      const { enter, exit } = this.getAnimation();
      const duration = parseCssDuration(computedStyle.getPropertyValue("--duration")) || "0.25s";
      if (this.isTransitioning) {
        return;
      }
      this.stopObservers();
      this.dispatchEvent(new QuietContentChangedEvent({ mutations }));
      if (prefersReducedMotion || this.disableTransitions) {
        this.isTransitioning = false;
        this.customStates.set("transitioning", false);
        this.dispatchEvent(new QuietTransitionEndEvent());
        this.updateElementPositions();
        this.startObservers();
        return;
      }
      this.isTransitioning = true;
      this.customStates.set("transitioning", true);
      this.currentTransition = new Promise(async (resolveTransition) => {
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node;
              addedElements.set(el, {
                parent: mutation.target,
                nextSibling: mutation.nextSibling
              });
            }
          });
          mutation.removedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const el = node;
              removedElements.set(el, {
                parent: mutation.target,
                nextSibling: mutation.nextSibling
              });
            }
          });
        });
        addedElements.forEach((info, el) => {
          const removedElementInfo = removedElements.get(el);
          if (removedElementInfo && info.parent === removedElementInfo.parent) {
            movedElements.set(el, info);
            addedElements.delete(el);
            removedElements.delete(el);
          }
        });
        addedElements.forEach((_opts, el) => el.hidden = true);
        removedElements.forEach((opts, el) => {
          if (opts.nextSibling) {
            opts.nextSibling.before(el);
          } else {
            this.transitionContainer.append(el);
          }
          removeAnimations.push(
            new Promise(async (resolve) => {
              const promise = await el.animate(exit.keyframes, { duration, easing: exit.easing }).finished;
              el.remove();
              resolve(promise);
            })
          );
        });
        await Promise.allSettled(removeAnimations);
        addedElements.forEach((_opts, el) => {
          el.hidden = false;
          el.style.opacity = "0";
        });
        const newContainerPosition = this.getBoundingClientRect();
        if (newContainerPosition.width !== this.cachedContainerPosition.width || newContainerPosition.height !== this.cachedContainerPosition.height) {
          containerAnimations.push(
            this.animate(
              [
                { width: `${this.cachedContainerPosition.width}px`, height: `${this.cachedContainerPosition.height}px` },
                { width: `${newContainerPosition.width}px`, height: `${newContainerPosition.height}px` }
              ],
              { duration, easing: "ease" }
            ).finished
          );
        }
        [...this.transitionContainer.children].forEach((el) => {
          const oldPosition = this.cachedElementPositions.get(el);
          const newPosition = el.getBoundingClientRect();
          if (!oldPosition || !hasDomRectMoved(oldPosition, newPosition) || addedElements.has(el) || removedElements.has(el)) {
            return;
          }
          const translateX = oldPosition.left - newPosition.left - (window.scrollX - this.cachedScrollPosition.x);
          const translateY = oldPosition.top - newPosition.top - (window.scrollY - this.cachedScrollPosition.y);
          moveAnimations.push(
            el.animate([{ translate: `${translateX}px ${translateY}px` }, { translate: `0 0` }], {
              duration,
              easing: "cubic-bezier(0.45, 0, 0.55, 1)"
            }).finished
          );
        });
        await Promise.allSettled(moveAnimations);
        addedElements.forEach((_opts, el) => {
          el.style.removeProperty("opacity");
          addAnimations.push(el.animate(enter.keyframes, { easing: enter.easing, duration }).finished);
        });
        await Promise.allSettled([...addAnimations, ...containerAnimations]);
        this.updateElementPositions();
        this.isTransitioning = false;
        this.customStates.set("transitioning", false);
        this.startObservers();
        this.dispatchEvent(new QuietTransitionEndEvent());
        resolveTransition();
      });
    };
    this.handleResizes = () => {
      this.updateElementPositions();
    };
    this.handleVisibilityChange = () => {
      this.updateElementPositions();
    };
  }
  connectedCallback() {
    super.connectedCallback();
    this.startObservers();
  }
  disconnectedCallback() {
    super.disconnectedCallback();
    this.stopObservers();
  }
  firstUpdated() {
    this.updateElementPositions();
  }
  updated(changedProperties) {
    if (changedProperties.has("transitionContainer")) {
      const oldContainer = changedProperties.get("transitionContainer");
      this.hidden = this.transitionContainer !== this;
      if (oldContainer !== void 0) {
        this.stopObservers();
        this.updateElementPositions();
        this.startObservers();
      }
    }
  }
  /**
   * Gets a custom animation based on the users preference. If a custom animation isn't found, the default is returned.
   */
  getAnimation() {
    if (this.transitionAnimation) {
      return this.transitionAnimation;
    }
    return {
      enter: {
        keyframes: [
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1 }
        ],
        easing: "cubic-bezier(0.76, 0, 0.24, 1)"
      },
      exit: {
        keyframes: [
          { opacity: 1, scale: 1 },
          { opacity: 0, scale: 0.98 }
        ],
        easing: "cubic-bezier(0.6, 0, 0.735, 0)"
      }
    };
  }
  startObservers() {
    if (this.isObserving) return;
    this.isObserving = true;
    if (!this.mutationObserver) {
      this.mutationObserver = new MutationObserver(this.handleMutations);
    }
    if (!this.resizeObserver) {
      this.resizeObserver = new ResizeObserver(this.handleResizes);
    }
    this.mutationObserver.observe(this.transitionContainer, {
      childList: true,
      characterData: false
    });
    this.resizeObserver.observe(document.documentElement);
    document.addEventListener("visibilitychange", this.handleVisibilityChange);
  }
  stopObservers() {
    this.isObserving = false;
    this.mutationObserver.disconnect();
    this.resizeObserver.disconnect();
    document.removeEventListener("visibilitychange", this.handleVisibilityChange);
  }
  /**
   * Returns a promise that resolves when the current transition ends. If no transition is running, it resolves
   * immediately  This is a great way to ensure transitions have stopped before doing something else, such as adding or
   * removing new elements to the transition group.
   */
  async transitionComplete() {
    await new Promise(requestAnimationFrame);
    await this.currentTransition;
  }
  /**
   * Updates the cached coordinates of all child elements in the transition group. In most cases, you shouldn't have to
   * call this method. However, if you're resizing or animating elements imperatively, you may need to call this
   * immediately before appending or removing elements to ensure a smooth transition.
   */
  updateElementPositions() {
    this.cachedContainerPosition = this.transitionContainer.getBoundingClientRect();
    this.cachedScrollPosition = { x: window.scrollX, y: window.scrollY };
    [...this.transitionContainer.children].forEach((el) => {
      this.cachedElementPositions.set(el, el.getBoundingClientRect());
    });
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietTransitionGroup.styles = [host_styles_default, transition_group_styles_default];
__decorateClass([
  r()
], QuietTransitionGroup.prototype, "transitionContainer", 2);
__decorateClass([
  n({ attribute: "disable-transitions", type: Boolean, reflect: true })
], QuietTransitionGroup.prototype, "disableTransitions", 2);
__decorateClass([
  n({ attribute: "ignore-reduced-motion", type: Boolean, reflect: true })
], QuietTransitionGroup.prototype, "ignoreReducedMotion", 2);
QuietTransitionGroup = __decorateClass([
  t("quiet-transition-group")
], QuietTransitionGroup);

export {
  QuietTransitionGroup
};
