import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-resize-observer>
 *
 * @summary Watches child elements and dispatches an event when they resize.
 * @documentation https://quietui.org/docs/components/resize
 * @status stable
 * @since 1.0
 *
 * @slot - The elements to observe. All direct children of the host element are observed, but not nested elements.
 *
 * @event quiet-resize - Emitted when a slotted element is resized. Like `ResizeObserver`, this event is also dispatched
 *  when each element is first observed. The `event.detail.entry` property contains a
 *  [`ResizeObserverEntry`](https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry) with information about
 *  the element's dimensions.
 */
export declare class QuietResizeObserver extends QuietElement {
    static styles: CSSResultGroup;
    private hasInitialized;
    private resizeObserver;
    /** Disables the resize observer. */
    disabled: boolean;
    /** Sets which box model the observer will observe changes to. */
    box: 'content-box' | 'border-box' | 'device-pixel-content-box';
    connectedCallback(): void;
    /** Component lifecycle method that runs when the element disconnects from the DOM */
    disconnectedCallback(): void;
    /** Component lifecycle method that runs when properties change */
    updated(changedProperties: PropertyValues<this>): void;
    private handleSlotChange;
    /** Starts or restarts the resize observer. */
    private startObserver;
    /** Stops the resize observer. */
    private stopObserver;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-resize-observer': QuietResizeObserver;
    }
}
