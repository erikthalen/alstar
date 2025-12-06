/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/active-element.ts
function* activeElements(activeElement = document.activeElement) {
  if (activeElement === null || activeElement === void 0) return;
  yield activeElement;
  if ("shadowRoot" in activeElement && activeElement.shadowRoot && activeElement.shadowRoot.mode !== "closed") {
    yield* activeElements(activeElement.shadowRoot.activeElement);
  }
}

export {
  activeElements
};
