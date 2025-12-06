import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-checkbox>
 *
 * @summary Allows users to select one or more options from a list or toggle single options on and off.
 * @documentation https://quietui.org/docs/components/checkbox
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The checkbox's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 *
 * @event quiet-blur - Emitted when the checkbox loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the checkbox's value.
 * @event quiet-focus - Emitted when the checkbox receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the checkbox receives input.
 *
 * @csspart label - The `<label>` that wraps the entire control.
 * @csspart description - The element that contains the checkbox's description.
 * @csspart visual-box - The element that wraps the internal checkbox.
 * @csspart check-icon - The check icon, a `<quiet-icon>` element.
 * @csspart check-icon__svg - The check icon's `svg` part.
 * @csspart indeterminate-icon - The indeterminate icon, a `<quiet-icon>` element.
 * @csspart indeterminate-icon__svg - The indeterminate icon's `<svg>` part.
 *
 * @cssstate checked - Applied when the checkbox is checked.
 * @cssstate disabled - Applied when the checkbox is disabled.
 * @cssstate focused - Applied when the checkbox has focus.
 * @cssstate user-valid - Applied when the checkbox is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the checkbox is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietCheckbox extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): HTMLInputElement;
    private checkbox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /** The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
    description: string;
    /** The name of the checkbox. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The checkbox's value. */
    value: string;
    /** The checkbox's checked state. */
    checked: boolean;
    /** Puts the checkbox in an indeterminate state. */
    indeterminate: boolean;
    /** Disables the checkbox. */
    disabled: boolean;
    /** The type of checkbox to render. */
    appearance: 'normal' | 'filled';
    /** The checkbox's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the checkbox required. Form submission will not be allowed until the checkbox is checked.
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
    private handleFocus;
    private handleHostInvalid;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the checkbox. */
    focus(): void;
    /** Removes focus from the checkbox. */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-checkbox': QuietCheckbox;
    }
}
