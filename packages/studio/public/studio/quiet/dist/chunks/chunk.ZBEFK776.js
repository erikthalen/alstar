/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */

// src/utilities/search.ts
function normalize(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").normalize("NFKC").toLocaleLowerCase();
}
function exactSearch(query, content) {
  return normalize(content).includes(normalize(query));
}
function fuzzySearch(query, content, threshold = 0.7) {
  if (!content || !query) return false;
  if (threshold < 0 || threshold > 1) throw new Error("Threshold must be between 0 and 1");
  if (query.length > content.length) return false;
  const normalizedContent = normalize(content);
  const normalizedQuery = normalize(query);
  const lowContent = normalizedContent.toLocaleLowerCase();
  const lowQuery = normalizedQuery.toLocaleLowerCase();
  let score = 0;
  let contentIndex = 0;
  let queryIndex = 0;
  let lastMatchIndex = -1;
  const contentChars = [...lowContent];
  const queryChars = [...lowQuery];
  let lastSkippedChar = "";
  let lastSkippedIndex = -1;
  while (contentIndex < contentChars.length && queryIndex < queryChars.length) {
    const currentQueryChar = queryChars[queryIndex];
    const currentContentChar = contentChars[contentIndex];
    if (currentContentChar === currentQueryChar) {
      if (lastMatchIndex === -1) {
        score += 1;
      } else {
        score += Math.max(0, 1 - (contentIndex - lastMatchIndex - 1) * 0.1);
      }
      lastMatchIndex = contentIndex;
      queryIndex++;
      lastSkippedChar = "";
      lastSkippedIndex = -1;
    } else if (
      // Check for transposition with next character
      queryIndex + 1 < queryChars.length && contentIndex + 1 < contentChars.length && currentContentChar === queryChars[queryIndex + 1] && contentChars[contentIndex + 1] === currentQueryChar
    ) {
      score += 0.9;
      lastMatchIndex = contentIndex + 1;
      queryIndex += 2;
      contentIndex++;
      lastSkippedChar = "";
      lastSkippedIndex = -1;
    } else if (
      // Check for transposition with previously skipped character
      lastSkippedChar === currentQueryChar && contentIndex - lastSkippedIndex <= 2
    ) {
      score += 0.8;
      lastMatchIndex = contentIndex;
      queryIndex++;
      lastSkippedChar = "";
      lastSkippedIndex = -1;
    } else {
      lastSkippedChar = currentContentChar;
      lastSkippedIndex = contentIndex;
    }
    contentIndex++;
  }
  const maxScore = queryChars.length;
  const similarity = queryIndex === queryChars.length ? score / maxScore : 0;
  return similarity >= threshold;
}

export {
  exactSearch,
  fuzzySearch
};
