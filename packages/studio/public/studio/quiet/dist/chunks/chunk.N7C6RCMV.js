/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// node_modules/@quietui/squeak/dist/index.js
var connectedElements = /* @__PURE__ */ new Set();
var translations = /* @__PURE__ */ new Map();
var isSSR = typeof (document === null || document === void 0 ? void 0 : document.documentElement) === "undefined";
var documentDirection = "ltr";
var documentLanguage = "en";
var defaultTranslation;
if (!isSSR) {
  const documentElementObserver = new MutationObserver(update);
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  documentElementObserver.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["dir", "lang"]
  });
}
function registerDefaultTranslation(translation2) {
  defaultTranslation = translation2;
  update();
}
function registerTranslation(...translation2) {
  translation2.map((t) => {
    const code = t.$code.toLowerCase();
    if (translations.has(code)) {
      translations.set(code, Object.assign(Object.assign({}, translations.get(code)), t));
    } else {
      translations.set(code, t);
    }
  });
  update();
}
function update() {
  if (isSSR)
    return;
  documentDirection = document.documentElement.dir || "ltr";
  documentLanguage = document.documentElement.lang || navigator.language;
  [...connectedElements.keys()].map((el) => {
    if (typeof el.requestUpdate === "function") {
      el.requestUpdate();
    }
  });
}
var Localize = class {
  constructor(host) {
    this.host = host;
    this.host.addController(this);
  }
  hostConnected() {
    connectedElements.add(this.host);
  }
  hostDisconnected() {
    connectedElements.delete(this.host);
  }
  dir() {
    return `${this.host.dir || documentDirection}`.toLowerCase();
  }
  lang() {
    return `${this.host.lang || documentLanguage}`.toLowerCase();
  }
  getTranslationData(lang) {
    var _a, _b;
    const locale = new Intl.Locale(lang.replace(/_/g, "-"));
    const language = locale === null || locale === void 0 ? void 0 : locale.language.toLowerCase();
    const region = (_b = (_a = locale === null || locale === void 0 ? void 0 : locale.region) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== null && _b !== void 0 ? _b : "";
    const primary = translations.get(`${language}-${region}`);
    const secondary = translations.get(language);
    return { locale, language, region, primary, secondary };
  }
  exists(key, options) {
    var _a;
    const { primary, secondary } = this.getTranslationData((_a = options.lang) !== null && _a !== void 0 ? _a : this.lang());
    options = Object.assign({ includeDefault: false }, options);
    if (primary && primary[key] || secondary && secondary[key] || options.includeDefault && defaultTranslation && defaultTranslation[key]) {
      return true;
    }
    return false;
  }
  term(key, ...args) {
    const { primary, secondary } = this.getTranslationData(this.lang());
    let term;
    if (primary && primary[key]) {
      term = primary[key];
    } else if (secondary && secondary[key]) {
      term = secondary[key];
    } else if (defaultTranslation && defaultTranslation[key]) {
      term = defaultTranslation[key];
    } else {
      console.error(`No translation found for: ${String(key)}`);
      return String(key);
    }
    if (typeof term === "function") {
      return term(...args);
    }
    return term;
  }
  date(dateToFormat, options) {
    dateToFormat = new Date(dateToFormat);
    return new Intl.DateTimeFormat(this.lang(), options).format(dateToFormat);
  }
  number(numberToFormat, options) {
    numberToFormat = Number(numberToFormat);
    return isNaN(numberToFormat) ? "" : new Intl.NumberFormat(this.lang(), options).format(numberToFormat);
  }
  relativeTime(value, unit, options) {
    return new Intl.RelativeTimeFormat(this.lang(), options).format(value, unit);
  }
};

// src/utilities/localize.ts
var Localize2 = class extends Localize {
};

// src/translations/en.ts
var translation = {
  $code: "en",
  $name: "English",
  $dir: "ltr",
  breadcrumbs: "Breadcrumbs",
  carousel: "Carousel",
  clearEntry: "Clear entry",
  close: "Close",
  collapse: "Collapse",
  colorValue: "Color value",
  copied: "Copied",
  copyToClipboard: "Copy to clipboard",
  decrease: "Decrease",
  disabled: "disabled",
  dragFileHereOrChooseFromFolder: "Drag file here or choose from folder",
  dragFilesHereOrChooseFromFolder: "Drag files here or choose from folder",
  error: "Error",
  expand: "Expand",
  feed: "Feed",
  firstPage: "First page",
  hidePassword: "Hide password",
  hide: "Hide",
  hue: "Hue",
  increase: "Increase",
  itemAdded: (item) => `${item} added`,
  itemRemoved: (item) => `${item} removed`,
  itemSelected: (item) => `${item} selected`,
  jumpBackward: "Jump backward",
  jumpForward: "Jump forward",
  lastPage: "Last page",
  loading: "Loading",
  multipleSelectionsAllowed: "Multiple selections allowed.",
  next: "Next",
  noResultsFound: "No results found",
  numberOfTotal: (number, total) => `${number} of ${total}`,
  opacity: "Opacity",
  pageNumber: (number) => `Page ${number}`,
  pagination: "Pagination",
  percentLuminosity: (percentage) => `${percentage} luminosity`,
  percentSaturation: (percentage) => `${percentage} saturation`,
  pleaseSelectAnOption: "Please select an option",
  pressSpaceForOneSecondToActivate: "Press space bar for one second to activate",
  previous: "Previous",
  remove: "Remove",
  removeItem: (item) => `Remove ${item}`,
  resize: "Resize",
  resultsAvailable: (count) => {
    if (count === 1) return "1 result available";
    return `${count} results available`;
  },
  scrollableRegion: "Scrollable region",
  selectAColorFromTheScreen: "Select a color from the screen",
  selected: "Selected",
  share: "Share",
  showPassword: "Show password",
  show: "Show",
  showingNumberOfTotalItems: (number, total) => {
    if (number === 1) return `Showing ${number} of ${total} ${total === 1 ? "item" : "items"}`;
    return `Showing ${number} of ${total} items`;
  },
  showingAllNumberItems: (number) => {
    if (number === 1) return `Showing ${number} item`;
    return `Showing all ${number} items`;
  },
  spoiler: "Spoiler",
  toggleNavigation: "Toggle navigation",
  useArrowKeysToNavigateEnterToSelect: "Use arrow keys to navigate options. Press Enter to select.",
  visualComparisonSlider: "Visual comparison slider",
  zoomIn: "Zoom in",
  zoomOut: "Zoom out"
};
registerDefaultTranslation(translation);
var en_default = translation;

export {
  registerDefaultTranslation,
  registerTranslation,
  en_default,
  Localize2 as Localize
};
