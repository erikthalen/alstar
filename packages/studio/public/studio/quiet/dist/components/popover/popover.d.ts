import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-popover>
 *
 * @summary Provides additional information or functionality without interrupting the flow of content.
 * @documentation https://quietui.org/docs/components/popover
 * @status stable
 * @since 1.0
 *
 * @slot - The popover's content. Do not include interactive elements such as button, links, etc. as they won't be
 *  accessible to users inside the popover.
 *
 * @event quiet-before-open - Emitted when the popover is instructed to open but before it is shown.
 * @event quiet-open - Emitted when the popover has opened and the animation has completed.
 * @event quiet-before-close - Emitted when the popover is dismissed but before it is hidden.
 * @event quiet-close - Emitted when the popover has closed. and the animation has completed.
 *
 * @cssproperty [--arrow-size=0.3125rem] - The size of the arrow. To hide the arrow, use the `without-arrow` attribute.
 * @cssproperty [--max-width=25rem] - The maximum width the popover be before wrapping.
 * @cssproperty [--show-duration=100ms] - The duration of the show/hide animation.

 * @csspart dialog - The element that powers the popover, a `<dialog>` element.
 * @csspart content - The element that wraps the popover's content.
 * @csspart arrow - The popover's arrow. To change the arrow's size, use `--arrow-size` instead.
 *
 * @cssstate open - Applied when the popover is open.
 */
export declare class QuietPopover extends QuietElement {
    static styles: CSSResultGroup;
    private cleanup;
    private anchor;
    private arrow;
    private dialog;
    /**
     * The ID of of popover's anchor element. This must be an interactive/focusable element such as a button and it must
     * be in the same document as the popover.
     */
    for: string;
    /**
     * Shows or hides the popover.
     */
    open: boolean;
    /**
     * The placement of the popover in reference to the anchor. The menu will shift to a more optimal location if the
     * preferred placement doesn't have enough room.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance of the popover from its anchor. */
    distance: number;
    /** The offset of the popover along its trigger. */
    offset: number;
    /** Renders the popover without an arrow. */
    withoutArrow: boolean;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleAnchorClick;
    private handleDialogClick;
    /** When a key is pressed when the popover is open. */
    private handleDocumentKeyDown;
    private handleDocumentClick;
    /** Shows the popover. This should only be called from within updated(). */
    private show;
    /** Hides the popover. This should only be called from within updated(). */
    private hide;
    /** Repositions the popover */
    private reposition;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-popover': QuietPopover;
    }
}
