/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/library.ts
var libraryPath = "";
function setLibraryPath(path) {
  libraryPath = path;
}
function getLibraryPath(subpath = "") {
  if (!libraryPath) {
    const quietEl = document.querySelector("[data-quiet]");
    if (quietEl?.hasAttribute("data-quiet")) {
      const rootRelativeUrl = new URL(quietEl.getAttribute("data-quiet") ?? "", window.location.href).pathname;
      setLibraryPath(rootRelativeUrl);
    } else {
      const scripts = [...document.getElementsByTagName("script")];
      const quietScript = scripts.find((script) => {
        const src = script.src.split("?")[0];
        return src.endsWith("quiet.js") || src.endsWith("quiet.loader.js");
      });
      if (quietScript) {
        const path = String(quietScript.getAttribute("src"));
        setLibraryPath(path.split("/").slice(0, -1).join("/"));
      }
    }
  }
  return libraryPath.replace(/\/$/, "") + (subpath ? `/${subpath.replace(/^\//, "")}` : ``);
}

export {
  setLibraryPath,
  getLibraryPath
};
