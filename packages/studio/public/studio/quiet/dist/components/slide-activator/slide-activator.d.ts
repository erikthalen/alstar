import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-slide-activator>
 *
 * @summary Gives users a draggable thumb that must be moved to the end of its track to trigger an action.
 * @documentation https://quietui.org/docs/components/slide-activator
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot label - The slide activator's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot activated-label - The label to show when activated. For plain-text labels, you can use the `activated-label`
 *  attribute instead.
 * @slot thumb - The thumb element that users drag. Defaults to a double chevron icon if not provided.
 *
 * @event quiet-before-activate - Emitted when the control will activate. Calling `event.preventDefault()` will prevent
 *  the activation from occurring.
 * @event quiet-activate - Emitted immediately after the control is activated.
 * @event quiet-before-deactivate - Emitted when the control will deactivate. Calling `event.preventDefault()` will
 *  prevent the deactivation from occurring.
 * @event quiet-deactivate - Emitted immediately after the control is deactivated.
 * @event quiet-progress - Emitted as the slider progresses. Use `event.details.percent` to see how far along it is.
 *
 * @csspart thumb - The slide activator's thumb.
 * @csspart label - The slide activator's label.
 *
 * @cssproperty [--border-radius=var(--quiet-border-radius-lg)] - The control's border radius. We use a CSS custom
 *  property so we can properly calculate the inset border radius for the thumb.
 * @cssproperty [--thumb-width=4em] - The thumb's width.
 * @cssproperty [--thumb-inset=0.125em] - The thumb's inset from the host element.
 * @cssproperty [--shimmer-color] - The color to use as a base for the shimmer animation.
 * @cssproperty [--thumb-position=(read-only)] - A read-only property that moves from 0 to 1 as the user slides the
 *  thumb to activate the control. Useful as a hook to transition background styles based on the thumb's position.
 *
 * @cssstate activated - Applied briefly when the slide activator has been activated.
 * @cssstate dragging - Applied when the slide activator is dragging.
 * @cssstate pressing - Applied when the user is pressing a key to activate the slide activator.
 * @cssstate disabled - Applied when the slide activator is disabled.
 */
export declare class QuietSlideActivator extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private draggableThumb;
    private dragStartX;
    private hostBoundingClientRect;
    private lastDispatchedPercentage;
    private localize;
    private isKeyPressStale;
    private keyPressInterval;
    private keyPressTimeout;
    thumb: HTMLElement;
    isDragging: boolean;
    isPressing: boolean;
    thumbPosition: number;
    /**
     * The label to show in the slide activator's track. If you need to provide HTML in the label, use the `label` slot
     * instead.
     */
    label: string;
    /**
     * The label to show when the control is activated. If omitted, the regular label will be shown. If you need to
     * provide HTML in the label, use the `label` slot instead.
     */
    activatedLabel: string;
    /** Reflects when the control is activated. Remove this attribute to deactivate it. */
    activated: boolean;
    /** Disables the control. */
    disabled: boolean;
    /** Draws attention to the track by adding a subtle animation. */
    attention: 'shimmer';
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Attempts to activate the component. */
    private activate;
    /** Restores the control to its original deactivated state. */
    private deactivate;
    private cleanupTimers;
    /** Updates the thumb position from a pointer's x coordinate */
    private handleDrag;
    private handleKeyDown;
    private handleKeyUp;
    /** Updates the thumb position and dispatches the `quiet-progress` event. */
    private setThumbPosition;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-slide-activator': QuietSlideActivator;
    }
}
