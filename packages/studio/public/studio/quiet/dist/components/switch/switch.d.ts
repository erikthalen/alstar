import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-switch>
 *
 * @summary Allows the user to toggle between two mutually exclusive states, such as on and off.
 * @documentation https://quietui.org/docs/components/switch
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The switch's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The switch's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 * @slot off-label - The label to show when the switch is off.
 * @slot on-label - The label to show when the switch is on.
 *
 * @event quiet-blur - Emitted when the switch loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the switch's value.
 * @event quiet-focus - Emitted when the switch receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the switch receives input.
 *
 * @csspart label - The `<label>` that wraps the entire control.
 * @csspart description - The element that contains the switch's description.
 * @csspart visual-box - The element that wraps the internal switch.
 * @csspart switch - The internal switch, an `<input type="checkbox" role="switch">` element.
 * @csspart thumb - The switch's thumb.
 * @csspart on-label - The container wrapping the `on-label`.
 * @csspart off-label - The container wrapping the `off-label`.
 *
 * @cssstate disabled - Applied when the switch is disabled.
 * @cssstate focused - Applied when the switch has focus.
 * @cssstate user-valid - Applied when the switch is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the switch is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietSwitch extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): HTMLInputElement;
    private switch;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The switch's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /** The switch's description. If you need to provide HTML in the description, use the `description` slot instead. */
    description: string;
    /** The name of the switch. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The switch's value. */
    value: string;
    /** The switch's checked state. */
    checked: boolean;
    /** Disables the switch. */
    disabled: boolean;
    /** The switch's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the switch required. Form submission will not be allowed until the switch is checked.
     */
    required: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleClick;
    private handleBlur;
    private handleChange;
    private handleInput;
    private handleKeyUp;
    private handleFocus;
    private handleHostInvalid;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the switch. */
    focus(): void;
    /** Removes focus from the switch. */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-switch': QuietSwitch;
    }
}
