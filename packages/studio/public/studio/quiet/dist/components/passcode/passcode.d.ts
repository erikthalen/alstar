import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-passcode>
 *
 * @summary Allows users to enter fixed-length passcodes, verification tokens, one-time codes, and similar data in a
 *  user-friendly way.
 * @documentation https://quietui.org/docs/components/passcode
 * @status stable
 * @since 1.0
 *
 * @slot label - The passcode's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The passcode's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 *
 * @event quiet-blur - Emitted when the passcode loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the passcode's value.
 * @event quiet-focus - Emitted when the passcode receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the passcode receives input.
 * @event quiet-input-complete - Emitted when the final character in the passcode is entered. This is useful as a hook
 *  to verify the passcode as soon as it's typed in without requiring the user to explicitly submit it.
 *
 * @csspart label - The element that contains the passcode's label.
 * @csspart description - The element that contains the passcode's description.
 * @csspart visual-box - The element that wraps the characters, delimiters, and the hidden input.
 * @csspart character-box - Each individual character box.
 * @csspart delimiter - Each individual delimiter.
 *
 * @cssstate disabled - Applied when the passcode is disabled.
 * @cssstate blank - Applied when the passcode has a blank value.
 * @cssstate focused - Applied when the passcode has focus.
 * @cssstate user-valid - Applied when the passcode is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the passcode is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietPasscode extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    /** A reference to the `<form>` associated with the form control, or `null` if no form is associated. */
    private localize;
    protected get focusableAnchor(): HTMLInputElement;
    private textBox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The passcode's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The passcode's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the passcode. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The passcode's value. */
    value: string;
    /**
     * The format of the passcode. This dictates the number of characters and where delimiters will show. Use `#` to
     * represent an allowed character. Use a space, dash, or any other character to represent a delimiter. Delimiters are
     * shown for visual clarity, but won't be included in the submitted value.
     */
    format: string;
    /** Disables the passcode. */
    disabled: boolean;
    /** The type of passcode to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The passcode's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Masks the characters so they're not displayed on screen.=. */
    masked: boolean;
    /** The type of characters to allow in the input. */
    type: 'numeric' | 'alpha' | 'alphanumeric' | 'any';
    /** Makes the passcode case sensitive. */
    caseSensitive: boolean;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the passcode required. Form submission will not be allowed when this is set and the passcode is blank.
     */
    required: boolean;
    /** A regular expression the value should match to be considered valid. */
    pattern: string;
    /**
     * Tells the browser how to autocomplete the passcode. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Tells the browser to focus the passcode when the page loads or a dialog is shown. */
    autofocus: boolean;
    /** Sets the enter key label on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    /** Returns the total number of characters, excluding delimiters, in the current format. */
    private getTotalCharacters;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleHostInvalid;
    private handleInput;
    private handleKeyDown;
    private handlePointerDown;
    private handleSelect;
    private moveCursorToEnd;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the passcode. */
    focus(): void;
    /** Removes focus from the passcode. */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-passcode': QuietPasscode;
    }
}
