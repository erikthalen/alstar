/*! Required Notice: Copyright 2025 A Beautiful Site, LLC - https://quietui.org */
import {
  lorem_ipsum_styles_default
} from "../../chunks/chunk.D7Y2XULI.js";
import {
  seededNumberGenerator
} from "../../chunks/chunk.ELBGBFBV.js";
import {
  QuietElement,
  n,
  t
} from "../../chunks/chunk.3WKCIAWU.js";
import "../../chunks/chunk.5E32SBSM.js";
import {
  host_styles_default
} from "../../chunks/chunk.OW7IPG4K.js";
import "../../chunks/chunk.A5SY4VDT.js";
import {
  x
} from "../../chunks/chunk.VLHFHZQJ.js";
import {
  __decorateClass
} from "../../chunks/chunk.32UODNLB.js";

// src/components/lorem-ipsum/lorem-ipsum.ts
var DICTIONARY = "a ac adipiscing aenean aliquam aliquet amet ante at auctor augue bibendum condimentum congue consectetur consequat convallis cubilia curae dictum dignissim dolor dui duis egestas eget elit enim erat est et etiam eu euismod ex facilisis faucibus felis fermentum finibus fringilla fusce hendrerit iaculis id in integer interdum ipsum justo lacinia lacus laoreet leo libero ligula lorem luctus magna malesuada massa mauris maximus mi molestie morbi nec neque nisl non nulla nullam nunc odio orci ornare pellentesque pharetra placerat porta porttitor posuere praesent pretium primis proin pulvinar quam quis quisque rhoncus risus sapien scelerisque sed sem semper sit suscipit suspendisse tempor tempus tortor tristique turpis ullamcorper ultrices ut varius vehicula vel velit venenatis vestibulum vivamus viverra vulputate".split(" ");
function clampRandom(value, min, max) {
  return Math.floor(value * (max - min + 1)) + min;
}
var QuietLoremIpsum = class extends QuietElement {
  constructor() {
    super(...arguments);
    this.type = "sentence";
    this.length = "3-5";
    this.wordsPerSentence = "4-16";
    this.sentencesPerParagraph = "3-6";
  }
  /** Returns an array of words of the specified length. */
  generateWords(length) {
    const words = [];
    for (let i = 0; i < length; i++) {
      const index = clampRandom(this.generateNumber(), 0, DICTIONARY.length - 1);
      words.push(DICTIONARY[index]);
    }
    return words;
  }
  /** Returns a number within the specified range. */
  getNumberWithinRange(range) {
    if (typeof range === "number") return range || 0;
    if (typeof range === "string" && !range.includes("-")) return Number(range) || 0;
    const parsedRange = String(range).split("-");
    const min = Number(parsedRange[0]) || 0;
    const max = Number(parsedRange[1]) || 0;
    return clampRandom(this.generateNumber(), min, max);
  }
  /** Generates a list of random items based on the properties that are currently set */
  generateList() {
    const numItems = this.getNumberWithinRange(this.length);
    let items = "";
    for (let i = 0; i < numItems; i++) {
      const numWords = this.getNumberWithinRange(this.wordsPerSentence);
      const words = this.generateWords(numWords);
      const item = words.join(" ");
      items += `<li>${item.charAt(0).toUpperCase() + item.slice(1)}</li>`;
    }
    return `<${this.type}>${items}</${this.type}>`;
  }
  /** Generates random paragraphs based on the properties that are currently set */
  generateParagraphs() {
    const numParagraphs = this.getNumberWithinRange(this.length);
    let paragraphs = "";
    for (let i = 0; i < numParagraphs; i++) {
      const sentences = this.generateSentences();
      paragraphs += `<p>${sentences}</p>`;
    }
    return paragraphs;
  }
  /** Generates random sentences based on the properties that are currently set */
  generateSentences() {
    const commaFrequency = 10;
    const numSentences = this.getNumberWithinRange(this.length);
    let sentences = "";
    for (let i = 0; i < numSentences; i++) {
      const numWords = this.getNumberWithinRange(this.wordsPerSentence);
      const words = this.generateWords(numWords);
      let sentence = "";
      for (let j = 0; j < words.length; j++) {
        const word = words[j];
        if (j === 0) {
          sentence += word.charAt(0).toUpperCase() + word.slice(1);
          continue;
        }
        if (j < words.length - 3) {
          const addComma = clampRandom(this.generateNumber(), 0, commaFrequency) === 0;
          if (addComma) sentence += ", ";
        }
        sentence += ` ${word}`;
      }
      sentences += `${sentence}. `;
    }
    return sentences.trim();
  }
  /** Generates a random title based on the properties that are currently set */
  generateTitle() {
    const numWords = this.getNumberWithinRange(this.length);
    const words = this.generateWords(numWords);
    const title = [];
    for (const word of words) {
      title.push(word.charAt(0).toUpperCase() + word.slice(1));
    }
    return title.join(" ");
  }
  render() {
    const seed = typeof this.seed === "number" ? this.seed : parseFloat(this.seed);
    this.generateNumber = typeof this.seed === "undefined" ? () => Math.random() : seededNumberGenerator(seed);
    if (this.type === "sentence") {
      this.innerHTML = this.generateSentences();
    }
    if (this.type === "paragraph") {
      this.innerHTML = this.generateParagraphs();
    }
    if (this.type === "title") {
      this.innerHTML = this.generateTitle();
    }
    if (this.type === "ol" || this.type === "ul") {
      this.innerHTML = this.generateList();
    }
    return x`<slot></slot>`;
  }
};
QuietLoremIpsum.styles = [host_styles_default, lorem_ipsum_styles_default];
__decorateClass([
  n()
], QuietLoremIpsum.prototype, "type", 2);
__decorateClass([
  n()
], QuietLoremIpsum.prototype, "length", 2);
__decorateClass([
  n({ type: Number })
], QuietLoremIpsum.prototype, "seed", 2);
__decorateClass([
  n({ attribute: "words-per-sentence" })
], QuietLoremIpsum.prototype, "wordsPerSentence", 2);
__decorateClass([
  n({ attribute: "sentences-per-paragraph" })
], QuietLoremIpsum.prototype, "sentencesPerParagraph", 2);
QuietLoremIpsum = __decorateClass([
  t("quiet-lorem-ipsum")
], QuietLoremIpsum);
export {
  QuietLoremIpsum
};
