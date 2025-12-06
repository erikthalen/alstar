/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import "./chunks/chunk.GZKI332L.js";
import {
  allDefined
} from "./chunks/chunk.WTQYULGQ.js";
import {
  registerIconLibrary,
  unregisterIconLibrary
} from "./chunks/chunk.AR2Y4PNI.js";
import {
  discoverElements,
  preventTurboFouce,
  startLoader,
  stopLoader
} from "./chunks/chunk.BBIKCCTX.js";
import {
  getLibraryPath,
  setLibraryPath
} from "./chunks/chunk.YC32QOAM.js";
import "./chunks/chunk.32UODNLB.js";

// src/quiet.loader.ts
startLoader();
Promise.race([
  new Promise((resolve) => document.addEventListener("quiet-discovery-complete", resolve)),
  new Promise((resolve) => setTimeout(resolve, 2e3))
]).then(() => {
  document.querySelectorAll(".quiet-cloak").forEach((el) => el.classList.remove("quiet-cloak"));
});
export {
  allDefined,
  discoverElements,
  getLibraryPath,
  preventTurboFouce,
  registerIconLibrary,
  setLibraryPath,
  startLoader,
  stopLoader,
  unregisterIconLibrary
};
