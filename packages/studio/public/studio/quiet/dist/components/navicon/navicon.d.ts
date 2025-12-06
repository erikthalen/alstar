import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-navicon>
 *
 * @summary A navicon, or "hamburger button", is a special button used to control mobile navigation menus.
 * @documentation https://quietui.org/docs/components/navicon
 * @status stable
 * @since 1.0
 *
 * @event quiet-blur - Emitted when the navicon loses focus. This event does not bubble.
 * @event quiet-focus - Emitted when the navicon receives focus. This event does not bubble.
 *
 * @csspart line - The individual lines that make up the navicon symbol.
 * @csspart line-top - The top line.
 * @csspart line-middle - The middle line (hamburger symbol only).
 * @csspart line-bottom - The bottom line.
 *
 * @cssstate expanded - Applied when the navicon is toggled on.
 * @cssstate disabled - Applied when the navicon is disabled.
 * @cssstate focused - Applied when the navicon has focus.
 *
 * @cssproperty [--dot-size=0.125em] - The width of each dot. Available when symbol is `vertical-dots` or `horizontal-dots`.
 * @cssproperty [--line-width=0.0625em] - The width of each line. Available when symbol is `hamburger` or `equals`.
 * @cssproperty [--line-transition-duration=200ms] - The duration of the symbol's animation.
 * @cssproperty [--line-transition-easing=cubic-bezier(0.4, 0, 0.2, 1)] - The easing to use for the symbol's animation.
 * @cssproperty [--dot-size=0.125em] - The size of the dots in the dots symbol.
 */
export declare class QuietNavicon extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /**
     * The ID of the associated menu that gets shown/hidden when the navicon is toggled. The element must be in the same
     * document as the navicon.
     */
    for: string;
    /** Determines if the navicon is toggled on. */
    expanded: boolean;
    /** Determines the navicon's symbol. */
    symbol: 'hamburger' | 'equals' | 'horizontal-dots' | 'vertical-dots';
    /** Disables the navicon. */
    disabled: boolean;
    /** The accessible label for the navicon. */
    label: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleBlur;
    private handleFocus;
    private handleClick;
    private handleKeyDown;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-navicon': QuietNavicon;
    }
}
