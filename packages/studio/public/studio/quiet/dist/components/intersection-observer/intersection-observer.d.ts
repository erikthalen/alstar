import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-intersection-observer>
 *
 * @summary Watches child elements and dispatches events when they intersect with their root element.
 * @documentation https://quietui.org/docs/components/intersection
 * @status stable
 * @since 1.0
 *
 * @slot - The elements to observe. Only direct children of the host element are observed.
 *
 * @event quiet-intersect - Emitted when an observed element starts or stops intersecting. `event.detail.entry` contains
 *  the respective [`IntersectionObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserverEntry)
 *  object.
 */
export declare class QuietIntersectionObserver extends QuietElement {
    static styles: CSSResultGroup;
    private hasInitialized;
    private intersectionObserver;
    private observedElements;
    /** The ID of the element to use as as the bounding box of the viewport for the observed targets. */
    root: string | null;
    /** Margin around the root. Can have values similar to the CSS margin property. */
    rootMargin: string;
    /** Either a single number or space-delimited numbers which indicate at what percentage of the target's visibility the observer's callback should be executed. */
    threshold: string;
    /**
     * A CSS class name to apply to elements while they're intersecting. The class will be removed when the element is no
     * longer in the viewport. This allows you to apply styles to elements as they enter and exit the viewport using pure
     * CSS.
     */
    intersectClass: string;
    /** When true, stops observing after the first intersection. */
    once: boolean;
    /** Disables the intersection observer. */
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleSlotChange;
    /** Parses the threshold property into an array of numbers. */
    private parseThreshold;
    /** Resolves the root element from the provided ID. */
    private resolveRoot;
    /** Starts or restarts the intersection observer. */
    private startObserver;
    /** Stops the intersection observer. */
    private stopObserver;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-intersection-observer': QuietIntersectionObserver;
    }
}
