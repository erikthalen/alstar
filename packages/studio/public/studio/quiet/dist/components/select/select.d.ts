import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-select>
 *
 * @summary Allows users to choose an option from a predefined list of options.
 * @documentation https://quietui.org/docs/components/select
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot label - The select's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The select's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 * @slot start - An icon or similar element to place before the label. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the label. Works great with `<quiet-icon>`.
 *
 * @event quiet-blur - Emitted when the select loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the select's value.
 * @event quiet-focus - Emitted when the select receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the select receives input.
 *
 * @csspart label - The element that contains the select's label.
 * @csspart description - The element that contains the select's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart text-box - The internal text box, a `<select>` element.
 * @csspart chevron - The chevron icon, a `<quiet-icon>` element.
 * @csspart chevron__svg - The chevron icon's `<svg>` part.
 *
 * @cssstate disabled - Applied when the select is disabled.
 * @cssstate blank - Applied when the select has no selected option.
 * @cssstate focused - Applied when the select has focus.
 * @cssstate user-valid - Applied when the select is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the select is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietSelect extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): HTMLSelectElement;
    private defaultSlot;
    private textBox;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    options: string;
    /**
     * The select's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The select's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the select. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The select's value. */
    value: string;
    /** Disables the select. */
    disabled: boolean;
    /** Makes the select a read-only field. */
    readonly: boolean;
    /** The type of select to render. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The select's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Draws the select in a pill shape. */
    pill: boolean;
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /**
     * Makes the select required. Form submission will not be allowed when this is set and the select is blank.
     */
    required: boolean;
    /**
     * Tells the browser how to autocomplete the select. See [this page](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/autocomplete)
     * for available values.
     */
    autocomplete: string;
    /** Sets the enter key label on virtual keyboards. */
    enterkeyhint: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    private handleBlur;
    private handleVisualBoxPointerDown;
    private handleChange;
    private handleFocus;
    private handleHostInvalid;
    private handleInput;
    private syncOptions;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the select. */
    focus(): void;
    /** Removes focus from the select. */
    blur(): void;
    /** Shows the picker in supportive browsers. */
    showPicker(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-select': QuietSelect;
    }
}
