import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-pagination>
 *
 * @summary Splits content into numbered pages so users can navigate datasets in manageable chunks.
 * @documentation https://quietui.org/docs/components/pagination
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot previous-icon - A custom icon to use for the previous button.
 * @slot next-icon - A custom icon to use for the next button.
 * @slot jump-backward-icon - A custom icon to use for the jump backward button.
 * @slot jump-forward-icon - A custom icon to use for jump forward button.
 *
 * @event quiet-before-page-change - Emitted when the page is going to change but before it actually changes. Calling
 *  `event.preventDefault()` will prevent the page from changing. Inspect `event.detail` to get the `currentPage` and
 *  `requestedPage` properties.
 * @event quiet-page-change - Emitted after the page has been changed and the UI has been updated.
 *
 * @csspart nav - The navigation container, a `<nav>` element.
 * @csspart list - The list that contains the pagination items, a `<ul>` element.
 * @csspart item - A pagination item, an `<li>` element.
 * @csspart button - A pagination button, a `<button>` or an `<a>` element.
 * @csspart button-first - The button that navigates to the first page.
 * @csspart button-previous - The button that navigates to the previous page.
 * @csspart button-next - The button that navigates to the next page.
 * @csspart button-last - The button that navigates to the last page.
 * @csspart button-page - A button that navigates to a specific page.
 * @csspart button-current - The button that represents the current page.
 * @csspart button-jump-backward - The jump backward button.
 * @csspart button-jump-forward - The jump forward button.
 * @csspart range - The page range that shows the page when viewed in the compact format, e.g. "1 of 10".
 *
 * @cssstate disabled - Applied when the pagination is disabled.
 */
export declare class QuietPagination extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /** A label to use to describe the control to assistive devices. Defaults to "Pagination" when not set. */
    label: string;
    /** The total number of pages to show. */
    totalPages: number;
    /** The current page. */
    page: number;
    /** The number of pages to show on each side of the current page. Minimum 2. */
    siblings: number;
    /** The number of pages to increase or decrease when jump buttons are clicked. */
    jump: number;
    /** How the pagination will display buttons. */
    format: 'compact' | 'standard';
    /**
     * A string that, when provided, renders `<a>` elements instead of `<${tag}s>` using this as the link's template.
     * Use `$page` to indicate the page number, e.g. `"/path/to/$page"`. Alternatively, you can provide a JavaScript
     * function that accepts a page number and returns a URL.
     */
    linkFormatter: string | ((page: number) => string);
    /** Disables the pagination control. */
    disabled: boolean;
    /** Determine's the pagination's appearance. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** Removes the previous and next buttons. */
    withoutNav: boolean;
    willUpdate(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Changes the current page, emitting a cancellable 'quiet-page-change' event. */
    private changePage;
    /** Generates the list of pagination items, including pages and jump buttons. */
    private getPaginationItems;
    private handleNavClick;
    private renderLink;
    render(): import("lit-html").TemplateResult;
}
