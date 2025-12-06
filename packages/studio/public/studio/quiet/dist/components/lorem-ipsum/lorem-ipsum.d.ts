import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-lorem-ipsum>
 *
 * @summary Outputs placeholder text in various formats for testing designs with random content.
 * @documentation https://quietui.org/docs/components/lorem-ipsum
 * @status stable
 * @since 1.0
 */
export declare class QuietLoremIpsum extends QuietElement {
    static styles: CSSResultGroup;
    private generateNumber;
    /** The type of HTML content to generate. */
    type: 'sentence' | 'title' | 'paragraph' | 'ol' | 'ul';
    /**
     * The length of the content to generate, e.g. the number of words, sentences, paragraphs, or list items. This should
     * be a number or a range in the format of `{min}-{max}`, e.g. `2-4`.
     */
    length: number | string;
    /**
     * By default, the generator will produce random content every time it runs. Use this option to seed the generator
     * with a non-zero number and force it to output the same content every time.
     */
    seed: number;
    /**
     * The number of words that should occur in a sentence or list item. This should be a number or a range in the format
     * of `{min}-{max}`, e.g. `4-16`.
     */
    wordsPerSentence: number | string;
    /**
     * The number of sentences that should occur in a paragraph. This should be a number or a range in the format of
     * `{min}-{max}`, e.g. `3-6`.
     */
    sentencesPerParagraph: number | string;
    /** Returns an array of words of the specified length. */
    private generateWords;
    /** Returns a number within the specified range. */
    private getNumberWithinRange;
    /** Generates a list of random items based on the properties that are currently set */
    private generateList;
    /** Generates random paragraphs based on the properties that are currently set */
    private generateParagraphs;
    /** Generates random sentences based on the properties that are currently set */
    private generateSentences;
    /** Generates a random title based on the properties that are currently set */
    private generateTitle;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-lorem-ipsum': QuietLoremIpsum;
    }
}
