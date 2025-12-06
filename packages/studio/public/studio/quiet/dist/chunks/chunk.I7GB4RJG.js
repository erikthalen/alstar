/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/html.ts
function escapeHtml(html) {
  const div = document.createElement("div");
  div.textContent = html;
  return div.innerHTML;
}
function getSlotHtml(slot) {
  const nodes = slot.assignedNodes({ flatten: true });
  let innerHtml = "";
  [...nodes].forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      innerHtml += node.outerHTML;
    }
    if (node.nodeType === Node.TEXT_NODE) {
      innerHtml += node.textContent;
    }
  });
  return innerHtml;
}
function getSlotText(slot) {
  if (!slot) {
    return "";
  }
  const nodes = slot.assignedNodes({ flatten: true });
  const extractText = (nodesArray) => {
    let text = "";
    nodesArray.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        text += node.textContent || "";
      } else if (node.nodeType === Node.ELEMENT_NODE && node.hasChildNodes()) {
        text += extractText(Array.from(node.childNodes));
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        text += node.textContent || "";
      }
    });
    return text;
  };
  return extractText(nodes).trim();
}

export {
  escapeHtml,
  getSlotHtml,
  getSlotText
};
