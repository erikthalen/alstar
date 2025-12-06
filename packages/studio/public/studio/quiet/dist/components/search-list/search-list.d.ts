import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-search-list>
 *
 * @summary Queries a collection of items based on their content and keywords.
 * @documentation https://quietui.org/docs/components/search-list
 * @status stable
 * @since 1.0
 *
 * @slot - One or more elements to be searched. Each element must be a direct descendent of the host, i.e. do not wrap
 *  items in other containers. If desired, you can apply flex and grid styles to the `items` part to control how items
 *  appear in the list. By default, items will be displayed in a flex column.
 * @slot controller - A `<quiet-text-field>` or `<input>` element that will control the search list.
 * @slot initial - Optional content to display when no search query has been entered.
 * @slot empty - Optional content to display when the search yields no results.
 *
 * @csspart items - The container that wraps the slotted items. Displays as a flex column by default.
 *
 * @cssstate empty - Applied when a query is entered and no matching results are found.
 * @cssstate initial - Applied when the query is empty and the `initial` slot is showing.
 */
export declare class QuietSearchList extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private items;
    private debounceTimeout;
    private localize;
    private resultsTimeout;
    results: HTMLElement;
    query: string;
    isEmpty: boolean;
    isInitial: boolean;
    resultsMessage: string;
    /**
     * In most cases, you should slot the controller into the `controller` slot. However, when the controller must exist
     * outside the search list, you can set this property to the ID of an external `<input>` or `<quiet-text-field>`
     * element instead.
     */
    controller: string;
    /**
     * The search behavior to use when finding a matching item. The `exact` search is case-insensitive but requires an
     * exact match. The `fuzzy` search is more forgiving to typos. When using `custom`, you can set the `isMatch` property
     * to a custom function to determine if the provided query matches the element's content.
     */
    match: 'exact' | 'fuzzy' | 'custom';
    /** The time in milliseconds to use for debouncing the search results while the user types.  */
    debounce: number;
    /**
     * A custom search function you can provide to change the search behavior. The function is applied to each item when
     * the search query changes. The `query` argument is the current search term, `content` is a string containing the
     * element's searchable content, including its `textContent` and `data-keywords"`, and `el` is the element being
     * searched. Property only.
     */
    isMatch: (query: string, content: string, el: Element) => boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Gets the controller or returns `null` if one can't be found. */
    private getController;
    private handleDefaultSlotChange;
    private handleControllerSlotChange;
    /** Updates results when the controller's value changes. */
    private handleControllerInput;
    /** Listens to all `input` events on the document and responds only to controller events. */
    private handleDocumentInput;
    private updateResults;
    /** Sets the search query and updates the results. To clear the search, set this to an empty string. */
    setQuery(query?: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-search-list': QuietSearchList;
    }
}
