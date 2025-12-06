import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-rating>
 *
 * @summary Allows users to provide feedback based on their satisfaction with a product or service.
 * @documentation https://quietui.org/docs/components/rating
 * @status stable
 * @since 1.0
 *
 * @slot label - The rating's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The rating's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 *
 * @event quiet-blur - Emitted when the rating loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the rating's value.
 * @event quiet-focus - Emitted when the rating receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the rating receives input.
 *
 * @csspart label - The element that contains the ratings's label.
 * @csspart description - The element that contains the rating's description.
 * @csspart rating - The element that wraps all of the rating's symbols.
 * @csspart symbol - The container that holds the selected and unselected version of each symbol.
 *
 * @cssstate disabled - Applied when the rating is disabled.
 * @cssstate focused - Applied when the rating has focus.
 * @cssstate user-valid - Applied when the rating is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the rating is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietRating extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private didDragOverOthers;
    private draggableRating;
    private localize;
    private ratingBoundingClientRect;
    private valueWhenDraggingStarted;
    protected get focusableAnchor(): HTMLElement;
    rating: HTMLElement;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The rating's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The rating's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the rating. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The rating's value. */
    value: number;
    /** Disables the rating. */
    disabled: boolean;
    /** Makes the rating a read-only field. */
    readonly: boolean;
    /** The rating's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an iD of a form in the same document or shadow root.
     */
    form: string;
    /** Makes the rating required. Form submission will not be allowed when this is set and the rating is empty. */
    required: boolean;
    /** The maximum value allowed. */
    max: number;
    /** The granularity the value must adhere to when incrementing and decrementing. */
    step: number;
    /** Tells the browser to focus the rating when the page loads or a dialog is shown. */
    autofocus: boolean;
    /**
     * A function that returns the HTML for each symbol. The function will receive the `value` and `isSelected` arguments
     * that you can use to customize the symbol based on specific values or whether the symbol is in the selected state.
     * You should only return trusted HTML from this function, otherwise you may become vulnerable to XSS exploits.
     */
    symbolFormatter: (step: number, isSelected: boolean) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    /** Clamps a number to min/max while ensuring it's a valid step interval. */
    private clampAndCeilToStep;
    private handleBlur;
    private handleFocus;
    private handleHostInvalid;
    private handleKeyDown;
    private handleLabelPointerDown;
    private setValueFromCoordinates;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the rating. */
    focus(): void;
    /** Removes focus from the rating. */
    blur(): void;
    /**
     * Decreases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepDown(): void;
    /**
     * Increases the rating's value by `step`. This is a programmatic change, so `input` and `change` events will not be
     * emitted when this is called.
     */
    stepUp(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-rating': QuietRating;
    }
}
