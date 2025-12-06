import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-text-area>
 *
 * @summary Allows users to edit multi-line, plain text content.
 * @documentation https://quietui.org/docs/components/text-area
 * @status stable
 * @since 1.0
 *
 * @slot label - The text area's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The text area's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 *
 * @event quiet-blur - Emitted when the text area loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the text area's value.
 * @event quiet-focus - Emitted when the text area receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the text area receives input.
 *
 * @csspart label - The element that contains the text area's label.
 * @csspart description - The element that contains the text area's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart text-box - The internal text box, a `<textarea>` element.
 *
 * @cssstate disabled - Applied when the text area is disabled.
 * @cssstate blank - Applied when the text area has a blank value.
 * @cssstate focused - Applied when the text area has focus.
 * @cssstate user-valid - Applied when the text area is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the text area is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietTextArea extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private resizeObserver;
    private textAreaAutoSizer;
    protected get focusableAnchor(): HTMLInputElement;
    private textBox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The text area's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The text area's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the text area. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The text area's value. */
    value: string;
    /** A placeholder to show in the text area when it's blank. */
    placeholder: string;
    /** Disables the text area. */
    disabled: boolean;
    /** Makes the text area a read-only area. */
    readonly: boolean;
    /** Determines how the text area can be resized. */
    resize: 'vertical' | 'auto' | 'none';
    /** The default number of rows visible in the text area. */
    rows: number;
    /** The type of text area to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The text area's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the text area required. Form submission will not be allowed when this is set and the text area is blank.
     */
    required: boolean;
    /** The minimum string length that will be considered valid. */
    minLength: number;
    /** The maximum string length that will be considered valid. */
    maxLength: number;
    /** Turns autocapitalize on or off in supported browsers. */
    autocapitalize: 'off' | 'none' | 'on' | 'sentences' | 'words' | 'characters';
    /**
     * Tells the browser how to autocomplete the text area. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Turns autocorrect on or off in supported browsers. */
    autocorrect: 'off' | 'on';
    /** Tells the browser to focus the text area when the page loads or a dialog is shown. */
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
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleHostInvalid;
    private handleInput;
    /** Updates the height of the text area based on its content and settings. */
    private updateHeight;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the text area. */
    focus(): void;
    /** Removes focus from the text area. */
    blur(): void;
    /** Selects all text in the text area. */
    select(): void;
    /** Sets the start and end positions of the current text selection in the text area. */
    setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text in the text area with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-text-area': QuietTextArea;
    }
}
