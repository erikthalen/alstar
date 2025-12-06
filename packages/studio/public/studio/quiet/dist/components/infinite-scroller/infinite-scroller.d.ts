import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../spinner/spinner.js';
/**
 * <quiet-infinite-scroller>
 *
 * @summary Provides an accessible container for continuously loading content feeds.
 * @documentation https://quietui.org/docs/components/infinite-scroller
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-spinner
 *
 * @slot - The default slot for feed items. Each item should have role="article" and be focusable.
 *
 * @event quiet-load-more - Emitted when scrolling reaches the threshold and more items should be loaded.
 *
 * @cssstate loading - Applied when the infinite scroller is loading more content.
 * @cssstate complete - Applied when the infinite scroller has no more content to load.
 */
export declare class QuietInfiniteScroller extends QuietElement {
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    isLoading: boolean;
    isComplete: boolean;
    private contentCheckFrameId;
    private localize;
    private thresholdInPixels;
    private thresholdInPercent;
    /** An accessible label for the feed. */
    label: string;
    /**
     * The scroll threshold at which to trigger loading more items. Accepts percentages (e.g., "20%") or pixels
     * (e.g., "200px").
     */
    threshold: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private parseThreshold;
    private checkScrollThreshold;
    private handleScroll;
    private handleSlotChange;
    private isScrollable;
    private scheduleContentCheck;
    /**
     * Mark the feed as completed, preventing further load events. Changing content in the default slot will reset this
     * and re-enable infinite scrolling.
     */
    complete(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-infinite-scroller': QuietInfiniteScroller;
    }
}
