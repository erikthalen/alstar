/* esm.sh - @quietui/quiet-browser@1.6.1/dist/chunks/chunk.WTQYULGQ */
async function d(n){let t={match:e=>e.startsWith("quiet-"),additionalElements:[],root:document,...n},a=Array.isArray(t.additionalElements)?t.additionalElements:[t.additionalElements],i=[...[...t.root.querySelectorAll(":not(:defined)")].map(e=>e.localName).filter((e,o,l)=>l.indexOf(e)===o).filter(e=>t.match(e)),...a];await Promise.all(i.map(e=>customElements.whenDefined(e))),await new Promise(requestAnimationFrame)}export{d as allDefined};
/*! Bundled license information:

@quietui/quiet-browser/dist/chunks/chunk.WTQYULGQ.js:
  (*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org *)
*/
//# sourceMappingURL=chunk.WTQYULGQ.mjs.map