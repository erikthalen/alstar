import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-tooltip>
 *
 * @summary Provides additional information when the user hovers or focuses on an element.
 * @documentation https://quietui.org/docs/components/tooltip
 * @status stable
 * @since 1.0
 *
 * @slot - The tooltip's content. Do not include interactive elements such as button, links, etc. as they won't be
 *  accessible to users inside the tooltip.
 *
 * @event quiet-before-open - Emitted when the tooltip is instructed to open but before it is shown.
 * @event quiet-open - Emitted when the tooltip has opened and the animation has completed.
 * @event quiet-before-close - Emitted when the tooltip is dismissed but before it is hidden.
 * @event quiet-close - Emitted when the tooltip has closed. and the animation has completed.
 *
 * @cssproperty [--arrow-size=0.3125rem] - The size of the arrow. To hide the arrow, use the `without-arrow` attribute.
 * @cssproperty [--max-width=20rem] - The maximum width the tooltip can be before wrapping.
 * @cssproperty [--show-duration=100ms] - The duration of the show/hide animation.
 *
 * @csspart tooltip - The element that powers the tooltip.
 * @csspart content - The element that wraps the tooltip's content.
 * @csspart arrow - The tooltip's arrow. To change the arrow's size, use `--arrow-size` instead.
 *
 * @cssstate open - Applied when the tooltip is open.
 */
export declare class QuietTooltip extends QuietElement {
    static styles: CSSResultGroup;
    private anchor;
    private cleanup;
    private hoverInTimeout;
    private hoverOutTimeout;
    private isAnchorFocused;
    private arrow;
    private polygon;
    private tooltip;
    /**
     * The ID of the tooltip's anchor element. This must be an interactive/focusable element such as a button and it must
     * be in the same document as the tooltip.
     */
    for: string;
    /** Shows or hides the tooltip. */
    open: boolean;
    /**
     * The placement of the tooltip in reference to the anchor. The menu will shift to a more optimal location if the
     * preferred placement doesn't have enough room.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance of the tooltip from its anchor. */
    distance: number;
    /** The offset of the tooltip along its trigger. */
    offset: number;
    /** The number of milliseconds to wait before opening the tooltip when hovering in. */
    openDelay: number;
    /** The number of milliseconds to wait before closing the tooltip when hovering out. */
    closeDelay: number;
    /**
     * By default, the tooltip automatically shows when the user focuses or hovers over the anchor. If you want to control
     * the tooltip programmatically, set this to `manual`.
     */
    activation: 'auto' | 'manual';
    /** Renders the tooltip without an arrow. */
    withoutArrow: boolean;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Shows the tooltip. This should only be called from within updated(). */
    private show;
    /** Hides the tooltip. This should only be called from within updated(). */
    private hide;
    /** Called when the user manually dismisses the tooltip by clicking or pressing escape. */
    private userDismiss;
    /** @internal Repositions the tooltip */
    reposition(): void;
    /** When the anchor loses focus, hide the tooltip. */
    private handleAnchorBlur;
    /** When the anchor receives focus, show the tooltip. */
    private handleAnchorFocus;
    /** When the anchor is clicked, dismiss the tooltip. */
    private handleAnchorPointerUp;
    /** When the pointer enters the anchor. */
    private handleAnchorPointerEnter;
    /** When the pointer leaves the anchor. */
    private handleAnchorPointerLeave;
    /** When the pointer moves while the tooltip is visible. */
    private handleDocumentPointerMove;
    /** When a key is pressed when the tooltip is open. */
    private handleDocumentKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-tooltip': QuietTooltip;
    }
}
