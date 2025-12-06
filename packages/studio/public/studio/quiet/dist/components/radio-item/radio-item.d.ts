import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-radio-item>
 *
 * @summary Represents individual choices within a radio.
 * @documentation https://quietui.org/docs/components/radio-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The radio item's label. For plain-text labels, you can use the `label` attribute instead.
 *
 * @event quiet-blur - Emitted when the radio item loses focus. This event does not bubble.
 * @event quiet-focus - Emitted when the radio item receives focus. This event does not bubble.
 *
 * @csspart label - The `<label>` that wraps the entire control.
 * @csspart visual-box - The element that wraps the internal radio.
 * @csspart radio-icon - The radio icon, a `<quiet-icon>` element.
 * @csspart radio-icon__svg - The radio icon's `svg` part.
 *
 * @cssstate checked - Applied when the radio item is checked.
 * @cssstate disabled - Applied when the radio item is disabled.
 * @cssstate focused - Applied when the radio item has focus.
 */
export declare class QuietRadioItem extends QuietElement {
    static styles: CSSResultGroup;
    /** @internal Indicates if the radio item is disabled by the controller. */
    disabledByController: boolean;
    /**
     * The radio item's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The radio item's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The radio item's value. */
    value: string;
    /** The radio item's checked state. */
    checked: boolean;
    /** Disables the radio item. */
    disabled: boolean;
    /** The type of radio item to render. */
    appearance: 'normal' | 'filled';
    /** The radio item's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleBlur;
    private handleFocus;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-radio-item': QuietRadioItem;
    }
}
