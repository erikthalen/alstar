/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  sendMouse
} from "../chunks/chunk.ZYDHHJJF.js";
import "../chunks/chunk.32UODNLB.js";

// src/utilities/testing.ts
async function clickOnElement(el, position = "center", options = {}) {
  const { offsetX = 0, offsetY = 0 } = options;
  const { x, y, width, height } = el.getBoundingClientRect();
  const centerX = Math.floor(x + window.scrollX + width / 2);
  const centerY = Math.floor(y + window.scrollY + height / 2);
  let clickX = centerX;
  let clickY = centerY;
  if (position.includes("top")) {
    clickY = y;
  } else if (position.includes("bottom")) {
    clickY = y + height - 1;
  }
  if (position.includes("right")) {
    clickX = x + width - 1;
  } else if (position.includes("left")) {
    clickX = x;
  }
  await sendMouse({
    type: "click",
    position: [Math.round(clickX + offsetX), Math.round(clickY + offsetY)]
  });
}
async function expectEvent(el, events, action, options) {
  const opts = {
    timeout: 500,
    count: 1,
    ...options
  };
  const eventNames = Array.isArray(events) ? events : [events];
  const eventCounts = /* @__PURE__ */ new Map();
  eventNames.forEach((name) => eventCounts.set(name, 0));
  const handleEvent = (eventName) => (event) => {
    if (event.target === el) {
      eventCounts.set(eventName, (eventCounts.get(eventName) || 0) + 1);
    }
  };
  const handlers = /* @__PURE__ */ new Map();
  eventNames.forEach((name) => {
    const handler = handleEvent(name);
    handlers.set(name, handler);
    el.addEventListener(name, handler);
  });
  return new Promise(async (resolve, reject) => {
    await action();
    setTimeout(() => {
      handlers.forEach((handler, name) => {
        el.removeEventListener(name, handler);
      });
      const errors = [];
      eventCounts.forEach((count, name) => {
        if (count !== opts.count) {
          const expectedTimes = opts.count === 1 ? "once" : `${opts.count} times`;
          const actualTimes = count === 1 ? "once" : `${count} times`;
          errors.push(
            `Expected "${name}" event to be dispatched ${expectedTimes} but it was dispatched ${actualTimes}`
          );
        }
      });
      if (errors.length === 0) {
        resolve();
      } else {
        reject(new Error(errors.join("\n")));
      }
    }, opts.timeout);
  });
}
export {
  clickOnElement,
  expectEvent
};
