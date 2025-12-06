/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/parse.ts
function parseDelimitedTokens(input, delimiter = " ") {
  return (input + "").split(delimiter).map((token) => token.trim()).filter((token) => token !== "");
}

export {
  parseDelimitedTokens
};
