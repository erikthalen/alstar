import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../radio-item/radio-item.js';
import type { QuietRadioItem } from '../radio-item/radio-item.js';
/**
 * <quiet-radio>
 *
 * @summary Allows the user to select one option from a group of choices.
 * @documentation https://quietui.org/docs/components/radio
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-radio-item
 *
 * @slot - The radio items to place in the group.
 * @slot label - The radio's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The radios's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 *
 * @event quiet-change - Emitted when the user commits changes to the radio's value.
 * @event quiet-input - Emitted when the radio receives input.
 *
 * @csspart label - The element that contains the radio's label.
 * @csspart description - The element that contains the radio's description.
 * @csspart group - The element that wraps the grouped radios.
 *
 * @cssstate user-valid - Applied when the radio is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the radio is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietRadio extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    protected get focusableAnchor(): QuietRadioItem;
    group: HTMLElement;
    isInvalid: boolean;
    hadUserInteraction: boolean;
    wasSubmitted: boolean;
    /**
     * The radio's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The radio's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The name of the radio. This will be submitted with the form as a name/value pair. */
    name: string;
    /** The radio's current value. Set this to change the selected item. */
    value: string;
    /** The orientation of grouped items. */
    orientation: 'horizontal' | 'vertical';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /** Indicates at least one option in the radio is required. */
    required: boolean;
    /** Disables the radio control. */
    disabled: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** @internal Called when a containing fieldset is disabled. */
    formDisabledCallback(isDisabled: boolean): void;
    /** @internal Called when the form is reset. */
    formResetCallback(): void;
    /** Gets an array of radio items slotted into the radio. */
    private getItems;
    private handleHostInvalid;
    private handleGroupClick;
    private handleGroupKeyDown;
    /**
     * @internal Makes only the selected radio item tabbable. If no radio item is selected, the first non-disabled radio
     * item will be tabbable.
     */
    resetRovingTabIndex(): void;
    /** Gets the selected item. */
    private getSelectedItem;
    /**
     * Sets the selected item and updates the roving tab index. If `null` is provided, the selection will be cleared and
     * the tab index will go to the first radio item.
     */
    private setSelectedItem;
    /** Updates the controller disabled state for all radio items */
    private updateControllerDisabledState;
    /** Sets the form control's validity */
    private updateValidity;
    /** Sets focus to the selected item or the first item if none are selected. */
    focus(options?: FocusOptions): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-radio': QuietRadio;
    }
}
