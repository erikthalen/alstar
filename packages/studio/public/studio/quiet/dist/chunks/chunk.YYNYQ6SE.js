/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/scroll.ts
var SUPPORTS_SCROLLSNAPCHANGE = "onscrollsnapchange" in document.body;
var SUPPORTS_SCROLLSNAPCHANGING = "onscrollsnapchanging" in document.body;
var locks = /* @__PURE__ */ new Set();
var stylesheet = new CSSStyleSheet();
stylesheet.replaceSync(`
  .quiet-scroll-lock {
    scrollbar-gutter: stable !important;
    overflow: hidden !important;
  }
`);
function lockScrolling(el) {
  locks.add(el);
  document.documentElement.classList.add("quiet-scroll-lock");
  if (!document.adoptedStyleSheets.includes(stylesheet)) {
    document.adoptedStyleSheets = [...document.adoptedStyleSheets, stylesheet];
  }
}
function unlockScrolling(el) {
  locks.delete(el);
  if (locks.size === 0) {
    document.documentElement.classList.remove("quiet-scroll-lock");
    const index = document.adoptedStyleSheets.indexOf(stylesheet);
    if (index > -1) {
      document.adoptedStyleSheets = [...document.adoptedStyleSheets].filter((_sheet, i) => i !== index);
    }
  }
}
function scrollEndPolyfill(element) {
  if ("onscrollend" in element) return;
  let timer;
  element.addEventListener("scroll", () => {
    clearTimeout(timer);
    timer = setTimeout(() => element.dispatchEvent(new Event("scrollend")), 100);
  });
}

export {
  SUPPORTS_SCROLLSNAPCHANGE,
  SUPPORTS_SCROLLSNAPCHANGING,
  lockScrolling,
  unlockScrolling,
  scrollEndPolyfill
};
