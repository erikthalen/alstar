import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-toggle-tag>
 *
 * @summary Similar to checkboxes, except with tags to represent the checked and unchecked states.
 * @documentation https://quietui.org/docs/components/toggle-tag
 * @status stable
 * @since 1.0
 *
 * @slot - The toggle tag's label. For plain-text labels, you can use the `label` attribute instead.
 *
 * @event quiet-blur - Emitted when the toggle tag loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the toggle tag's value.
 * @event quiet-focus - Emitted when the toggle tag receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the toggle tag receives input.
 *
 * @csspart label - The `<label>` that wraps the entire control.
 *
 * @cssstate checked - Applied when the toggle tag is checked.
 * @cssstate disabled - Applied when the toggle tag is disabled.
 * @cssstate focused - Applied when the toggle tag has focus.
 * @cssstate user-valid - Applied when the toggle tag is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the toggle tag is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietToggleTag extends QuietFormControlElement {
    static formAssociated: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): HTMLInputElement;
    private checkbox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The toggle tag's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /** The name of the toggle tag. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The toggle tag's value. */
    value: string;
    /** The toggle tag's checked state. */
    checked: boolean;
    /** Disables the toggle tag. */
    disabled: boolean;
    /** The toggle tag's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the toggle tag required. Form submission will not be allowed until the toggle tag is checked.
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
    /** Sets focus to the toggle tag. */
    focus(): void;
    /** Removes focus from the toggle tag. */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-toggle-tag': QuietToggleTag;
    }
}
