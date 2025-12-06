import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-random-content>
 *
 * @summary Randomly displays one or more elements from a list.
 * @documentation https://quietui.org/docs/components/random-content
 * @status stable
 * @since 1.0
 *
 * @slot - A pool of items that will be randomly displayed. Each item _must_ be a direct descendant of the host element.
 */
export declare class QuietRandomContent extends QuietElement {
    static styles: CSSResultGroup;
    private currentIndices;
    private sequencePosition;
    /** The number of items to show. */
    items: number;
    /**
     * The selection mode. The default is 'unique', which ensures different items are shown after calling `randomize()`,
     * when possible. Use `random` for true randomization or `sequence` to show the next set of items based on their DOM
     * position.
     */
    mode: 'unique' | 'random' | 'sequence';
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Applies selection based on the mode and items properties. */
    private applySelection;
    /** Gets truly random indices with possible duplicates from previous selection. */
    private getRandomIndices;
    /** Gets sequence indices, advancing position on manual randomize. */
    private getSequenceIndices;
    /** Gets unique random indices, avoiding excluded indices if possible. */
    private getUniqueRandomIndices;
    /** Rotates the visible item(s) based on the selected mode. */
    randomize(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-random-content': QuietRandomContent;
    }
}
