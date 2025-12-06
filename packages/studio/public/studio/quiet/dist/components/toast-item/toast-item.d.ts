import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
import '../progress/progress.js';
/**
 * <quiet-toast-item>
 *
 * @summary Notifications displayed by the toast component.
 * @documentation https://quietui.org/docs/components/toast-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 * @dependency quiet-progress
 *
 * @slot - Content to show in the toast item.
 * @slot icon - Content to show as a visual. Usually an icon, image, avatar, etc.
 *
 * @event quiet-before-close - Emitted when the toast item is dismissed.
 * @event quiet-close - Emitted after the toast has been dismissed and the hide animation has completed.
 *
 * @csspart icon
 * @csspart content
 * @csspart close-button - The close button, a `<button>` element.
 * @csspart progress - The progress ring, a `<quiet-progress>` element.
 * @csspart progress__track - The progress ring's exported `track` part.
 * @csspart progress__indicator - The progress ring's exported `indicator` part.
 * @csspart progress__content - The progress ring's exported `content` part.
 * @csspart close-icon - The close icon, a `<quiet-icon>` element.
 * @csspart close-icon__svg - The close icons exported `svg` part.
 *
 * @cssproperty [--accent-line-width=0.33em] - The width of the notification's accent line.
 * @cssproperty --progress - A readonly value that goes from 100% to 0%, representing the progress remaining until the
 *  notification closes. Useful for creating custom content with visual indicators of the notification's progress.
 */
export declare class QuietToastItem extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private animationFrame;
    private isPaused;
    private localize;
    private startTime;
    /**
     * @internal The amount of time left before the notification is removed. Moves from 100 (full time left) to zero (no
     *  time left).
     */
    timeLeft: number;
    /** The type of notification to render. */
    variant: 'primary' | 'constructive' | 'destructive' | 'neutral';
    /**
     * The length of time to show the notification before removing it. Set this to `0` to show the notification until the
     * user dismisses it.
     */
    duration: number;
    /** When set, the close button will be omitted. */
    withoutClose: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * @internal Starts the auto-dismiss timer. If no duration is specified, this method has no effect.
     */
    startTimer(): void;
    /**
     * @internal Stops the auto-dismiss timer.
     */
    stopTimer(): void;
    private tick;
    /** Close it! */
    private handleCloseClick;
    /** Pause the timer on hover in */
    private handlePointerEnter;
    /** Resume the timer on hover out */
    private handlePointerLeave;
    /** Waits for the toast stack's transition group to finish transitioning and then resolves. */
    private waitForStackTransition;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-toast-item': QuietToastItem;
    }
}
