/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/webkit.ts
var webkitValidationBug = class extends HTMLElement {
  constructor() {
    super();
    this.internals = this.attachInternals();
    this.internals.setValidity({ valueMissing: true, customError: false }, "Value missing");
    this.isAffectedBrowser = this.internals.validity.customError === true;
  }
};
webkitValidationBug.formAssociated = true;
var testElement = null;
function hasValidationBug() {
  if (!customElements.get("webkit-validation-bug-261432")) {
    customElements.define("webkit-validation-bug-261432", webkitValidationBug);
  }
  if (!testElement) {
    testElement = document.createElement("webkit-validation-bug-261432");
  }
  return testElement.isAffectedBrowser;
}

export {
  hasValidationBug
};
