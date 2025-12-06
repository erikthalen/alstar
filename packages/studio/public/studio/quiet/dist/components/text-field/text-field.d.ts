import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-text-field>
 *
 * @summary Allows users to input and edit text.
 * @documentation https://quietui.org/docs/components/text-field
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot label - The text field's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The text field's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 * @slot start - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 *
 * @event quiet-blur - Emitted when the text field loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the text field's value.
 * @event quiet-focus - Emitted when the text field receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the text field receives input.
 *
 * @csspart label - The element that contains the text field's label.
 * @csspart description - The element that contains the text field's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart text-box - The internal text box, an `<input>` element.
 * @csspart clear-button - The clear button, a `<button>` element.
 * @csspart password-toggle-button - The password toggle button, a `<button>` element.
 *
 * @cssstate disabled - Applied when the text field is disabled.
 * @cssstate blank - Applied when the text field has a blank value.
 * @cssstate focused - Applied when the text field has focus.
 * @cssstate user-valid - Applied when the text field is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the text field is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietTextField extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private localize;
    protected get focusableAnchor(): HTMLInputElement;
    private defaultSlot;
    private textBox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    isPasswordVisible: boolean;
    /**
     * The text field's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The text field's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the text field. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The text field's value. */
    value: string;
    /** A placeholder to show in the text field when it's blank. */
    placeholder: string;
    /** Disables the text field. */
    disabled: boolean;
    /** Makes the text field a read-only field. */
    readonly: boolean;
    /** Adds a clear button to the text field when it's not blank. */
    withClear: boolean;
    /** The type of text field to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The text field's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Draws the text field in a pill shape. */
    pill: boolean;
    /** The type of data the text field will accept. */
    type: 'color' | 'date' | 'datetime-local' | 'email' | 'month' | 'number' | 'password' | 'search' | 'tel' | 'text' | 'time' | 'url' | 'week';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the text field required. Form submission will not be allowed when this is set and the text field is blank.
     */
    required: boolean;
    /** A regular expression the value should match to be considered valid. */
    pattern: string;
    /** The minimum string length that will be considered valid. */
    minLength: number;
    /** The maximum string length that will be considered valid. */
    maxLength: number;
    /** The minimum value for date/time types. */
    min: number;
    /** The maximum value for date/time types. */
    max: number;
    /** The granularity the value must adhere to when incrementing and decrementing. */
    step: number | 'any';
    /** Turns autocapitalize on or off in supported browsers. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /**
     * Tells the browser how to autocomplete the text field. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Turns autocorrect on or off in supported browsers. */
    autocorrect: 'off' | 'on';
    /** Tells the browser to focus the text field when the page loads or a dialog is shown. */
    autofocus: boolean;
    /** Sets the enter key label on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /**
     * Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
     * virtual keyboard to be displayed on supported devices.
     */
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    /** Turns spell checking on or off in supported browsers. */
    spellcheck: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleChange;
    private handleClearClick;
    private handleFocus;
    private handleHostInvalid;
    private handleInput;
    private handleKeyDown;
    private handlePasswordToggleClick;
    private handleTextBoxButtonPointerDown;
    private handleVisualBoxPointerDown;
    /** Sets the form control's validity */
    private updateValidity;
    /** Looks for a slotted datalist, clones, and links it to the text field. */
    private syncDatalist;
    /** Sets focus to the text field. */
    focus(): void;
    /** Removes focus from the text field. */
    blur(): void;
    /** Selects all text in the text field. */
    select(): void;
    /** Sets the start and end positions of the current text selection in the text field. */
    setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text in the text field with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    /** For types that support a picker, such as color and date selectors, this will cause the picker to show. */
    showPicker(): void;
    /**
     * When a supported `type` is used, this method will decrease the text field's value by `step`. This is a programmatic
     * change, so `input` and `change` events will not be emitted when this is called.
     */
    stepDown(): void;
    /**
     * When a supported `type` is used, this method will increase the text field's value by `step`. This is a programmatic
     * change, so `input` and `change` events will not be emitted when this is called.
     */
    stepUp(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-text-field': QuietTextField;
    }
}
