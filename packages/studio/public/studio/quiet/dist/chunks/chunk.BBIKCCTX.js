/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  getLibraryPath
} from "./chunk.YC32QOAM.js";

// src/utilities/loader.ts
var observer = new MutationObserver((mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discoverElements(node);
      }
    }
  }
});
function register(tagName) {
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }
  const tagWithoutPrefix = tagName.replace(/^quiet-/i, "");
  const path = getLibraryPath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}.js`);
  return new Promise((resolve, reject) => {
    import(path).then(() => resolve()).catch(() => {
      reject(new Error(`Failed to load <${tagName}> from "${path}"`));
    });
  });
}
function startLoader() {
  discoverElements(document.body);
  observer.observe(document.documentElement, { subtree: true, childList: true });
}
function stopLoader() {
  observer.disconnect();
}
async function discoverElements(root) {
  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsQuietElement = rootTagName?.startsWith("quiet-");
  const tagsToPreload = [...document.querySelectorAll("[data-quiet-preload]")].map((el) => el.getAttribute("data-quiet-preload") || "").flatMap((attr) => attr.split(" ")).filter((tag) => tag.length > 0);
  const tagsOnPage = [...root.querySelectorAll(":not(:defined)")].map((el) => el.tagName.toLowerCase()).filter((tag) => tag.startsWith("quiet-"));
  if (rootIsQuietElement && !customElements.get(rootTagName)) {
    tagsOnPage.push(rootTagName);
  }
  const tagsToRegister = [...new Set(tagsOnPage.concat(tagsToPreload))];
  const registered = [];
  const unknown = [];
  if (tagsToRegister.length === 0) {
    return;
  }
  for await (const tagName of tagsToRegister) {
    try {
      await register(tagName);
      registered.push(tagName);
    } catch {
      unknown.push(tagName);
    }
  }
  await new Promise(requestAnimationFrame);
  root.dispatchEvent(
    new CustomEvent("quiet-discovery-complete", {
      bubbles: false,
      cancelable: false,
      composed: true,
      detail: { registered, unknown }
    })
  );
}
function preventTurboFouce(timeout = 2e3) {
  document.addEventListener("turbo:before-render", async (event) => {
    const newBody = event.detail.newBody;
    event.preventDefault();
    try {
      await Promise.race([discoverElements(newBody), new Promise((resolve) => setTimeout(resolve, timeout))]);
    } finally {
      event.detail.resume();
    }
  });
}

export {
  startLoader,
  stopLoader,
  discoverElements,
  preventTurboFouce
};
