/* esm.sh - @quietui/quiet-browser@1.6.1/dist/chunks/chunk.YC32QOAM */
var i="";function c(t){i=t}function o(t=""){if(!i){let r=document.querySelector("[data-quiet]");if(r?.hasAttribute("data-quiet")){let n=new URL(r.getAttribute("data-quiet")??"",window.location.href).pathname;c(n)}else{let s=[...document.getElementsByTagName("script")].find(e=>{let a=e.src.split("?")[0];return a.endsWith("quiet.js")||a.endsWith("quiet.loader.js")});if(s){let e=String(s.getAttribute("src"));c(e.split("/").slice(0,-1).join("/"))}}}return i.replace(/\/$/,"")+(t?`/${t.replace(/^\//,"")}`:"")}export{o as getLibraryPath,c as setLibraryPath};
/*! Bundled license information:

@quietui/quiet-browser/dist/chunks/chunk.YC32QOAM.js:
  (*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org *)
*/
//# sourceMappingURL=chunk.YC32QOAM.mjs.map