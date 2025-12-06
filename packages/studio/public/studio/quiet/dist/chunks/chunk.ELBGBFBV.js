/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// node_modules/nanoid/url-alphabet/index.js
var urlAlphabet = "useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";

// node_modules/nanoid/index.browser.js
var nanoid = (size = 21) => {
  let id = "";
  let bytes = crypto.getRandomValues(new Uint8Array(size |= 0));
  while (size--) {
    id += urlAlphabet[bytes[size] & 63];
  }
  return id;
};

// src/utilities/math.ts
function clamp(value, min, max) {
  if (value < min) return min;
  if (value > max) return max;
  return value;
}
function createId(prefix = "") {
  return prefix + nanoid();
}
function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
function seededNumberGenerator(seed) {
  return function() {
    seed = Math.sin(seed) * 1e4;
    seed -= Math.floor(seed);
    return seed;
  };
}

export {
  clamp,
  createId,
  randomInteger,
  seededNumberGenerator
};
