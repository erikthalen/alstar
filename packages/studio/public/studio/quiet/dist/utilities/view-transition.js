/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "../chunks/chunk.32UODNLB.js";

// src/utilities/view-transition.ts
function doViewTransition(callback) {
  if (document.startViewTransition) {
    document.startViewTransition(callback);
  } else {
    callback();
  }
}
export {
  doViewTransition
};
