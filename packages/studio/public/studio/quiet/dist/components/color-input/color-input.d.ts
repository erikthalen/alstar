import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../color-picker/color-picker.js';
/**
 * <quiet-color-input>
 *
 * @summary Allows users to enter or select a color and submit it with a form.
 * @documentation https://quietui.org/docs/components/color-input
 * @status stable
 * @since 1.0
 *
 * @dependency - quiet-color-picker
 *
 * @slot label - The color input's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The color input's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 *
 * @event quiet-blur - Emitted when the color input loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the color input's value.
 * @event quiet-focus - Emitted when the color input receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the color input receives input.
 *
 * @csspart label - The element that contains the color input's label.
 * @csspart description - The element that contains the color input's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart text-box - The internal text box, an `<input>` element.
 * @csspart clear-button - The clear button, a `<button>` element.
 *
 * @cssproperty [--show-duration=50ms] - The duration of the show/hide animation.
 * @cssproperty [--preview-size=1.6em] - The size of the color preview.
 *
 * @cssstate disabled - Applied when the color input is disabled.
 * @cssstate blank - Applied when the color input has a blank value.
 * @cssstate focused - Applied when the color input has focus.
 * @cssstate open - Applied when the color picker is open.
 * @cssstate user-valid - Applied when the color input is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the color input is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietColorInput extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private cleanup;
    private localize;
    protected get focusableAnchor(): HTMLInputElement;
    private colorPicker;
    private textBox;
    private preview;
    private visualBox;
    isOpen: boolean;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The color input's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The color input's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the color input. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The color input's value. */
    value: string;
    /** A placeholder to show in the color input when it's blank. */
    placeholder: string;
    /** Disables the color input. */
    disabled: boolean;
    /** Makes the color input a read-only area. */
    readonly: boolean;
    /** Adds a clear button to the color input when it's not blank. */
    withClear: boolean;
    /** The type of color input to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The color input's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Draws the text field in a pill shape. */
    pill: boolean;
    /** The format to use for the color's value. */
    format: 'hex' | 'rgb' | 'hsl';
    /**
     * One or more semicolon-delimited colors (any valid CSS color format or name) to show as preset swatches below the
     * color picker.
     */
    swatches: string;
    /** Enables the alpha slider. */
    withAlpha: boolean;
    /**
     * Enables the eye dropper button. Only available in
     * [supportive browsers](https://caniuse.com/?search=eyedropper%20API).
     */
    withEyeDropper: boolean;
    /**
     * The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
     * the preferred placement doesn't have enough room.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance of the dropdown menu from its trigger. */
    distance: number;
    /** The offset of the dropdown menu along its trigger. */
    offset: number;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the color input required. Form submission will not be allowed when this is set and the color input is blank.
     */
    required: boolean;
    /**
     * Tells the browser how to autocomplete the color input. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Tells the browser to focus the color input when the page loads or a dialog is shown. */
    autofocus: boolean;
    /** Sets the enter key label on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    /**
     * Provides the browser with a hint about the type of data that might be entered by the user, allowing the appropriate
     * virtual keyboard to be displayed on supported devices.
     */
    inputmode: 'none' | 'text' | 'decimal' | 'numeric' | 'tel' | 'search' | 'email' | 'url';
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleChange;
    private handleFocus;
    private handleHostInvalid;
    private handleClearClick;
    private handleColorPickerChange;
    private handleColorPickerInput;
    /** If focus is set outside of the component, close the menu. */
    private handleDocumentFocusIn;
    private handleDocumentKeyDown;
    /** Handles pointer down events when the color picker is open. */
    private handleDocumentPointerDown;
    private handleInput;
    private handleTextBoxButtonPointerDown;
    private handleTextBoxKeyDown;
    private handleVisualBoxPointerDown;
    /** Repositions the dropdown menu */
    private reposition;
    /** Sets the form control's validity */
    private updateValidity;
    /** Removes focus from the color input. */
    blur(): void;
    /** Sets focus to the color input. */
    focus(): void;
    /**
     * Gets the current value as a hex string, a hex8 string, an RGB object, or an HSL object. RBG objects have `r`, `g`,
     * and `b` properties ranging from 0–255 and an `a` property (representing opacity) that ranges from 0-1. HSL objects
     * have an `h` property ranging from `0-359` and `s`, `l`, and `a` properties ranging from 0–1.
     */
    getValueAs(format?: 'hex' | 'hex8' | 'hsl' | 'rgb'): string | import("@ctrl/tinycolor").Numberify<import("@ctrl/tinycolor").HSLA> | import("@ctrl/tinycolor").Numberify<import("@ctrl/tinycolor").RGBA>;
    /** Selects all text in the color input. */
    select(): void;
    /** Sets the start and end positions of the current text selection in the color input. */
    setSelectionRange(start: number, end: number, direction?: 'forward' | 'backward' | 'none'): void;
    /** Replaces a range of text in the color input with a new string. */
    setRangeText(replacement: string, start?: number, end?: number, selectMode?: 'select' | 'start' | 'end' | 'preserve'): void;
    /** Shows the color picker. */
    showPicker(): Promise<void>;
    /** Hides the color picker. */
    hidePicker(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-color-input': QuietColorInput;
    }
}
