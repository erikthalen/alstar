import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-card>
 *
 * @summary Provides a flexible and visually appealing way to organize and present content in a consistent and easily
 *  digestible format.
 * @documentation https://quietui.org/docs/components/card
 * @status stable
 * @since 1.0
 *
 * @slot - Content to place in the dialog's body.
 * @slot header - Content to place in the dialog's header.
 * @slot actions - Slot in one or more text buttons to add actions to the card's header (vertical) or footer
 *  (horizontal). Only available when the respective header/footer is enabled.
 * @slot footer - Content to place in the dialog's footer.
 *
 * @cssproperty [--spacing=1.5rem] - The spacing to use throughout the card.
 * @cssproperty [--border-width] - The width of the card's border, including interior borders.
 * @cssproperty [--border-style] - The style of the card's border.
 *
 * @csspart body - The container that wraps the card's body.
 * @csspart header - The container that wraps the card's header. A flex container, by default.
 * @csspart footer - The container that wraps the card's footer. A flex container, by default.
 * @csspart media - The container that wraps the card's media.
 */
export declare class QuietCard extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    /** Determines the card's appearance. */
    appearance: 'normal' | 'filled';
    /** The card's orientation. */
    orientation: 'horizontal' | 'vertical';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-card': QuietCard;
    }
}
