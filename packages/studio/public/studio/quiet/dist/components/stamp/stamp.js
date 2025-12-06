/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  stamp_styles_default
} from "../../chunks/chunk.YAV2OQXK.js";
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

// src/components/stamp/stamp.ts
var QuietStamp = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.template = "";
    this.replace = false;
  }
  updated(changedProperties) {
    if (changedProperties.has("template") || changedProperties.has("replace")) {
      this.renderTemplate();
    }
  }
  /** A helper to determine if an expression has HTML content */
  isHtmlExpression(text) {
    const htmlSuffix = ":html";
    const endsWithHtml = text.endsWith(htmlSuffix);
    return {
      key: endsWithHtml ? text.slice(0, -htmlSuffix.length) : text,
      isHtml: endsWithHtml
    };
  }
  /** Determines if a value is truthy by our own definition. */
  isTruthy(value) {
    const isFalse = [
      "false",
      "null",
      "undefined",
      "",
      // empty string
      "NaN",
      // Not a number
      "0",
      // zero
      "-0",
      // negative zero
      "0n"
      // BigInt zero
    ];
    return isFalse.includes(`${value}`) ? false : true;
  }
  /** Process expressions within a text string */
  processExpressions(text) {
    return text.replace(/(?<!\\)\{([^}]+)\}/g, (_, expression) => {
      return this.dataset[expression] || "";
    });
  }
  /** Processes the associated template and renders it to the DOM. */
  renderTemplate() {
    const root = this.getRootNode();
    const templateEl = root.getElementById(this.template);
    if (!this.template) return;
    if (!templateEl) {
      console.warn(`A template with an ID of "${this.template}" could not be found in this document.`, this);
      return;
    }
    const doc = templateEl.content.cloneNode(true);
    doc.querySelectorAll("*").forEach((el) => {
      for (const attr of el.attributes) {
        if (attr.name.startsWith("?")) {
          const processedValue2 = this.processExpressions(attr.value);
          const attributeName = attr.name.slice(1);
          el.removeAttribute(attr.name);
          if (this.isTruthy(processedValue2)) {
            el.setAttribute(attributeName, "");
          }
          continue;
        }
        if (attr.name === "if") {
          const processedValue2 = this.processExpressions(attr.value);
          if (this.isTruthy(processedValue2)) {
            el.removeAttribute("if");
          } else {
            el.remove();
          }
          continue;
        } else if (attr.name === "unless") {
          const processedValue2 = this.processExpressions(attr.value);
          if (this.isTruthy(processedValue2)) {
            el.remove();
          } else {
            el.removeAttribute("unless");
          }
          continue;
        }
        const processedValue = this.processExpressions(attr.value);
        if (processedValue !== attr.value) {
          el.setAttribute(attr.name, processedValue);
        }
      }
    });
    const walker = document.createTreeWalker(doc, NodeFilter.SHOW_TEXT, null);
    const textNodes = [];
    let node;
    while (node = walker.nextNode()) {
      textNodes.push(node);
    }
    textNodes.reverse().forEach((node2) => {
      const text = node2.textContent || "";
      let result = text;
      let lastIndex = 0;
      const regex = /(?<!\\)\{([^}]+)\}/g;
      let match;
      while ((match = regex.exec(text)) !== null) {
        const [fullMatch, expression] = match;
        const { key, isHtml } = this.isHtmlExpression(expression);
        const value = this.dataset[key] || "";
        if (isHtml) {
          const beforeText = text.slice(lastIndex, match.index);
          const tempDiv = document.createElement("div");
          tempDiv.innerHTML = value;
          if (beforeText) {
            node2.parentNode?.insertBefore(document.createTextNode(beforeText), node2);
          }
          while (tempDiv.firstChild) {
            node2.parentNode?.insertBefore(tempDiv.firstChild, node2);
          }
          lastIndex = match.index + fullMatch.length;
        } else {
          result = result.replace(fullMatch, value);
        }
      }
      if (!lastIndex) {
        result = result.replace(/\\\{/g, "{");
        node2.textContent = result;
      } else if (lastIndex < text.length) {
        const remainingText = text.slice(lastIndex);
        node2.parentNode?.insertBefore(document.createTextNode(remainingText), node2);
      }
      if (lastIndex > 0) {
        node2.remove();
      }
    });
    if (this.replace) {
      this.replaceWith(doc);
      this.remove();
    } else {
      this.append(doc);
    }
  }
  render() {
    return x`<slot></slot>`;
  }
};
QuietStamp.styles = [host_styles_default, stamp_styles_default];
__decorateClass([
  n()
], QuietStamp.prototype, "template", 2);
__decorateClass([
  n({ type: Boolean })
], QuietStamp.prototype, "replace", 2);
QuietStamp = __decorateClass([
  t("quiet-stamp")
], QuietStamp);
export {
  QuietStamp
};
