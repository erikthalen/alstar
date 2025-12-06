import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../carousel-item/carousel-item.js';
import '../icon/icon.js';
/**
 * <quiet-carousel>
 *
 * @summary Displays content in a scrollable horizontal slider with navigation controls.
 * @documentation https://quietui.com/docs/components/carousel
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-carousel-item
 * @dependency quiet-quiet-icon
 *
 * @slot - The default slot for carousel items.
 *
 * @csspart items - The scrollable container that holds the carousel items.
 * @csspart controls - The container that surrounds nav buttons and pagination.
 * @csspart previous-button - The previous button.
 * @csspart next-button - The next button.
 * @csspart pagination - The container for the pagination dots.
 * @csspart pagination-dot - Each individual pagination dot.
 * @csspart pagination-dot-active - The active pagination dot.
 *
 * @event quiet-item-change - Emitted when the active item changes and the slide has been fully scrolled into view.
 *
 * @cssproperty [--aspect-ratio=16/9] - The aspect ratio of the carousel. By default, carousels render 100% wide, so
 *  this helps retain proportions across various devices. Gets applied to the `items` part.
 * @cssproperty [--item-gap=2rem] - The gap between items in the carousel.
 * @cssproperty [--dot-size=0.875em] - The size of each pagination dot.
 * @cssproperty [--dot-gap=0.5em] - The size of the gap between pagination dots.
 * @cssproperty [--dot-color=var(--quiet-neutral-fill-soft)] - The color of inactive pagination dots.
 * @cssproperty [--dot-active-color=var(--quiet-neutral-fill-loud)] - The color of active pagination dots.
 *
 * @cssstate scrolling - Applied when the carousel is scrolling.
 */
export declare class QuietCarousel extends QuietElement {
    static styles: CSSResultGroup;
    private activeItemInterval;
    private hasInitialized;
    private isUserInitiated;
    private localize;
    private pendingEventDispatch;
    private resizeObserver;
    items: HTMLElement;
    isScrolling: boolean;
    itemCount: number;
    /** A custom label for the carousel. This won't be visible, but it will be read to assistive devices. */
    label: string;
    /** The current active item's index. */
    activeIndex: number;
    /** The current active item's name. */
    activeName: string;
    /** Enables looping navigation. When true, prev/next buttons wrap around to the opposite end. */
    loop: boolean;
    /** Hides navigation buttons. */
    withoutNav: boolean;
    /** Hides pagination dots. */
    withoutPagination: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Get the items from the default slot */
    private getItems;
    private handleSlotChange;
    /**
     * Navigate to the selected dot's index
     */
    private handleDotClick;
    /**
     * Handle keyboard navigation for the pagination dots
     */
    private handleDotKeyDown;
    private handleScrollSnapChanging;
    private handleScrollSnapChange;
    private handleScroll;
    private handleScrollEnd;
    private handleWheel;
    /** Sets the active item and scrolls to it */
    private setActiveItem;
    private setupResizeObserver;
    /** Update the activeIndex based on which item is most centered in the viewport */
    private updateActiveIndexFromScroll;
    /** Navigate to the specified item. */
    scrollToIndex(index: number, scrollBehavior?: ScrollBehavior): void;
    /** Navigate to the next item */
    scrollToNext(scrollBehavior?: ScrollBehavior): void;
    /** Navigate to the previous item */
    scrollToPrevious(scrollBehavior?: ScrollBehavior): void;
    render(): import("lit-html").TemplateResult<1>;
}
