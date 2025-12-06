import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-scroller>
 *
 * @summary Adds an accessible container with visual affordances to help users identify and navigate scrolling content.
 * @documentation https://quietui.org/docs/components/scroller
 * @status stable
 * @since 1.0
 *
 * @slot - The content to show inside the scroller.
 *
 * @csspart content - The container that wraps the slotted content.
 * @csspart start-shadow - The starting shadow.
 * @csspart end-shadow - The ending shadow.
 *
 * @cssproperty [--shadow-color=var(--quiet-neutral-fill-mid)] - The base color of the shadow.
 * @cssproperty [--shadow-size=2rem] - The width of the shadow.
 * @cssproperty [--thumb-color=var(--quiet-neutral-fill-mid)] - The color of the scrollbar's thumb (supportive browsers
 *  only).
 * @cssproperty [--track-color=transparent] - The color of the scrollbar's track (supportive browsers only).
 */
export declare class QuietScroller extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private resizeObserver;
    private previousStartOpacity;
    private previousEndOpacity;
    content: HTMLElement;
    canScroll: boolean;
    /** The scroller's orientation. */
    orientation: 'horizontal' | 'vertical';
    /** Removes the visible scrollbar. */
    withoutScrollbar: boolean;
    /** Removes the shadows. */
    withoutShadow: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    private handleKeyDown;
    private handleSlotChange;
    private updateScroll;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-scroller': QuietScroller;
    }
}
