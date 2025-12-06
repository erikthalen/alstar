/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  i2 as i
} from "./chunk.A5SY4VDT.js";
import "./chunk.VLHFHZQJ.js";
import {
  __publicField
} from "./chunk.32UODNLB.js";

// node_modules/@open-wc/dedupe-mixin/src/dedupeMixin.js
var appliedClassMixins = /* @__PURE__ */ new WeakMap();
function wasMixinPreviouslyApplied(mixin, superClass) {
  let klass = superClass;
  while (klass) {
    if (appliedClassMixins.get(klass) === mixin) {
      return true;
    }
    klass = Object.getPrototypeOf(klass);
  }
  return false;
}
function dedupeMixin(mixin) {
  return (superClass) => {
    if (wasMixinPreviouslyApplied(mixin, superClass)) {
      return superClass;
    }
    const mixedClass = mixin(superClass);
    appliedClassMixins.set(mixedClass, mixin);
    return mixedClass;
  };
}

// node_modules/@open-wc/scoped-elements/html-element.js
var version = "3.0.0";
var versions = window.scopedElementsVersions || (window.scopedElementsVersions = []);
if (!versions.includes(version)) {
  versions.push(version);
}
var ScopedElementsMixinImplementation = (superclass) => {
  var _a;
  return (
    /** @type {ScopedElementsHost} */
    _a = class extends superclass {
      static get scopedElementsVersion() {
        return version;
      }
      /**
       * Obtains the CustomElementRegistry associated to the ShadowRoot.
       *
       * @returns {CustomElementRegistry=}
       */
      get registry() {
        return (
          /** @type {typeof ScopedElementsHost} */
          this.constructor.__registry
        );
      }
      /**
       * Set the CustomElementRegistry associated to the ShadowRoot
       *
       * @param {CustomElementRegistry} registry
       */
      set registry(registry) {
        this.constructor.__registry = registry;
      }
      /**
       * @param {ShadowRootInit} options
       * @returns {ShadowRoot}
       */
      attachShadow(options) {
        const { scopedElements } = (
          /** @type {typeof ScopedElementsHost} */
          this.constructor
        );
        const shouldCreateRegistry = !this.registry || // @ts-ignore
        this.registry === this.constructor.__registry && !Object.prototype.hasOwnProperty.call(this.constructor, "__registry");
        if (shouldCreateRegistry) {
          this.registry = new CustomElementRegistry();
          for (const [tagName, klass] of Object.entries(scopedElements ?? {})) {
            this.registry.define(tagName, klass);
          }
        }
        return super.attachShadow({
          ...options,
          // The polyfill currently expects the registry to be passed as `customElements`
          customElements: this.registry,
          // But the proposal has moved forward, and renamed it to `registry`
          // For backwards compatibility, we pass it as both
          registry: this.registry
        });
      }
    }, /**
     * Obtains the scoped elements definitions map if specified.
     *
     * @type {ScopedElementsMap=}
     */
    __publicField(_a, "scopedElements"), /** @type {CustomElementRegistry=} */
    __publicField(_a, "__registry"), _a
  );
};
var ScopedElementsMixin = dedupeMixin(ScopedElementsMixinImplementation);

// node_modules/@open-wc/testing-helpers/src/scopedElementsWrapper.js
var ScopedElementsTestWrapper = class extends ScopedElementsMixin(i) {
  static get properties() {
    return {
      scopedElements: { type: Object },
      template: { type: Object }
    };
  }
  constructor(scopedElement, template) {
    super();
    this.scopedElements = scopedElement;
    this.template = template;
  }
  firstUpdated(_changed) {
    super.firstUpdated(_changed);
    Object.keys(this.scopedElements).forEach(
      (key) => (
        // @ts-ignore
        this.registry.define(key, this.scopedElements[key])
      )
    );
  }
  render() {
    return this.template;
  }
};
var getWrapperUniqueName = (counter = 0) => {
  const tag = `scoped-elements-test-wrapper-${counter}`;
  if (customElements.get(tag) !== void 0) {
    return getWrapperUniqueName(counter + 1);
  }
  return tag;
};
function getScopedElementsTemplate(template, scopedElements) {
  const wrapperTagName = getWrapperUniqueName();
  class Scope extends ScopedElementsTestWrapper {
  }
  customElements.define(wrapperTagName, Scope);
  const scope = new Scope(scopedElements, template);
  return scope;
}
export {
  getScopedElementsTemplate
};
