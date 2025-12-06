import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-number-field>
 *
 * @summary Allows users to input and edit numbers.
 * @documentation https://quietui.org/docs/components/number-field
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot label - The number field's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The number field's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 * @slot start - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 *
 * @event quiet-blur - Emitted when the number field loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the number field's value.
 * @event quiet-focus - Emitted when the number field receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the number field receives input.
 *
 * @csspart label - The element that contains the number field's label.
 * @csspart description - The element that contains the number field's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart text-box - The internal text box, an `<input>` element.
 * @csspart stepper - The up and down stepper buttons.
 * @csspart stepper-up - The up stepper button.
 * @csspart stepper-down - The down stepper button.
 *
 * @cssstate disabled - Applied when the number field is disabled.
 * @cssstate blank - Applied when the number field has a blank value.
 * @cssstate focused - Applied when the number field has focus.
 * @cssstate user-valid - Applied when the number field is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the number field is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietNumberField extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private localize;
    protected get focusableAnchor(): HTMLInputElement;
    private textBox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    isPasswordVisible: boolean;
    /**
     * The number field's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The number field's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the number field. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The number field's value. */
    value: string;
    /** A placeholder to show in the number field when it's blank. */
    placeholder: string;
    /** Disables the number field. */
    disabled: boolean;
    /** Makes the number field a read-only field. */
    readonly: boolean;
    /** The type of number field to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The number field's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Draws the number field in a pill shape. */
    pill: boolean;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the number field required. Form submission will not be allowed when this is set and the number field is blank.
     */
    required: boolean;
    /** A regular expression the value should match to be considered valid. */
    pattern: string;
    /** The minimum value for date/time types. */
    min: number;
    /** The maximum value for date/time types. */
    max: number;
    /** The granularity the value must adhere to when incrementing and decrementing. */
    step: number | 'any';
    /**
     * Tells the browser how to autocomplete the number field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Tells the browser to focus the number field when the page loads or a dialog is shown. */
    autofocus: boolean;
    /** Sets the enter key label on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /** When true, the add/subtract steppers won't be displayed. */
    withoutSteppers: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleHostInvalid;
    private handleDecrease;
    private handleIncrease;
    private maintainFocusOnPointerDown;
    private handleInput;
    private handleKeyDown;
    private handleVisualBoxPointerDown;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the number field. */
    focus(): void;
    /** Removes focus from the number field. */
    blur(): void;
    /** Selects all text in the number field. */
    select(): void;
    /** Sets the start and end positions of the current text selection in the number field. */
    setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text in the number field with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    /**
     * When a supported `type` is used, this method will decrease the number field's value by `step`. This is a programmatic
     * change, so `input` and `change` events will not be emitted when this is called.
     */
    stepDown(): void;
    /**
     * When a supported `type` is used, this method will increase the number field's value by `step`. This is a programmatic
     * change, so `input` and `change` events will not be emitted when this is called.
     */
    stepUp(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-number-field': QuietNumberField;
    }
}
