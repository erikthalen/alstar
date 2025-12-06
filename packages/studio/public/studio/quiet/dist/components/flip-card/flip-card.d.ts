import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-flip-card>
 *
 * @summary Displays information on two sides, allowing users to flip between the front and back with the click of a
 *  button.
 * @documentation https://quietui.com/docs/components/flip-card
 * @status stable
 * @since 1.0
 *
 * @slot front - The content to show on the front of the card.
 * @slot back - The content to show on the back of the card.
 *
 * @event quiet-before-flip - Emitted when the flip card is instructed to flip but before it actually flips. Calling
 *  `event.preventDefault()` will prevent the flip card from flipping.
 * @event quiet-flip - Emitted after the flip card has been flipped and the animation has completed.
 *
 * @cssproperty [--flip-duration=0.6s] - The duration of the card flip animation.
 * @cssproperty [--flip-easing=cubic-bezier(0.2, 0.85, 0.3, 1.15)] - The easing to use for the flip animation.
 *
 * @cssstate flipped - Applied when the card is flipped over.
 */
export declare class QuietFlipCard extends QuietElement {
    static styles: CSSResultGroup;
    private isFirstUpdate;
    private preventNextUpdate;
    defaultSlot: HTMLSlotElement;
    backSlot: HTMLSlotElement;
    /** Flips the card. */
    flipped: boolean;
    /** Determines the flip direction. */
    orientation: 'horizontal' | 'vertical';
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-flip-card': QuietFlipCard;
    }
}
