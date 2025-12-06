import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../listbox-item/listbox-item.js';
import type { QuietListboxItem } from '../listbox-item/listbox-item.js';
/**
 * <quiet-listbox>
 *
 * @summary Displays a list of options, allowing users to select one or more items from the available choices.
 * @documentation https://quietui.org/docs/components/listbox
 * @status stable
 * @since 1.0
 *
 * @dependency listbox-item
 *
 * @slot - Listbox items to show in the listbox.
 * @slot label - The listbox's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The listbox's description. For plain-text descriptions, you can use the `description` attribute
 *  instead.
 *
 * @event quiet-blur - Emitted when the list box loses focus. This event does not bubble.
 * @event quiet-change - Emitted when the user commits changes to the list box's selection. In single select mode, it
 *  occurs when a change is made and the listbox loses focus. In multiselect mode, it occurs whenever an option is
 *  toggled even while the listbox has focus.
 * @event quiet-focus - Emitted when the list box receives focus. This event does not bubble.
 * @event quiet-input - Emitted when the list box's selection changes from user input.
 *
 * @csspart label - The element that contains the text field's label.
 * @csspart description - The element that contains the text field's description.
 * @csspart listbox - The internal listbox container that holds listbox items.
 *
 * @cssstate disabled - Applied when the text field is disabled.
 * @cssstate blank - Applied when the text field has a blank value.
 * @cssstate focused - Applied when the text field has focus.
 * @cssstate user-valid - Applied when the text field is valid and the user has sufficiently interacted with it.
 * @cssstate user-invalid - Applied when the text field is invalid and the user has sufficiently interacted with it.
 */
export declare class QuietListbox extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private localize;
    private firstSelectedValue;
    private listbox;
    private hadUserInteraction;
    private isInvalid;
    private lastSelectedIndex;
    private previousValue;
    private typeaheadBuffer;
    private typeaheadTimeout;
    private wasChanged;
    private wasSubmitted;
    /** The listbox's label. If you need to provide HTML in the label, use the `label` slot instead. */
    label: string;
    /** The listbox's description. If you need to provide HTML in the description, use the `description` slot instead. */
    description: string;
    /** The name of the listbox. This will be submitted with the form as a name/value pair. */
    name: string;
    /** Enables multiple selection mode. */
    multiple: boolean;
    /** Disables the listbox. */
    disabled: boolean;
    /** Makes the text field a read-only field. */
    readonly: boolean;
    /** The text field's size. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /**
     * The form to associate this control with. If omitted, the closest containing `<form>` will be used. The value of
     * this attribute must be an ID of a form in the same document or shadow root.
     */
    form: string;
    /** Makes the listbox required. Form submission will not be allowed when this is set and the listbox is blank. */
    required: boolean;
    /** The listbox's value. For multiple selection, this will be the value of the first selected item. */
    get value(): string;
    set value(newValue: string);
    /**
     * Gets or sets the currently selected values as an array. This property provides a consistent way to access or modify
     * the selection state regardless of whether the listbox is in single or multiple selection mode.
     *
     * In single selection mode, it returns an array with either zero or one value. In multiple selection mode, it returns
     * an array of all selected values.
     *
     * When setting this property in single mode, the first value in the array (if any) becomes the selected value. In
     * multiple mode, all values in the array become selected.
     */
    get selectedValues(): string[];
    set selectedValues(values: string[]);
    /** Gets or sets an array of selected listbox items. */
    get selectedItems(): QuietListboxItem[];
    set selectedItems(items: QuietListboxItem[]);
    protected get focusableAnchor(): HTMLInputElement;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(changedProperties: PropertyValues<this>): void;
    updated(changedProperties: PropertyValues<this>): void;
    formDisabledCallback(isDisabled: boolean): void;
    formResetCallback(): void;
    private clearTypeaheadTimeout;
    private getItems;
    private getSelectedItems;
    private initializeValueFromSelectedItems;
    private initializeItems;
    private updateItemSelectionFromValue;
    private updateFormValue;
    private updateSelectedItems;
    /**
     * Updates the current value to align with selected items. We track user interaction to allow us to dispatch events
     * when human changes are made and suppress them for programmatic changes.
     */
    private updateValueFromSelectedItems;
    private handleFocus;
    private handleBlur;
    private handleHostInvalid;
    private handleLabelClick;
    private handleListboxPointerDown;
    private handleItemClick;
    private handleItemSelection;
    private handleKeyDown;
    private navigateToItem;
    private updateListboxAttributesOnItems;
    private selectWithKeyboard;
    private handleSlotChange;
    private selectSingleItem;
    private handleTypeahead;
    private findTypeaheadMatch;
    private setActiveItem;
    private scrollItemIntoView;
    private updateValidity;
    /**
     * @internal Manage tab order and focus tracking for keyboard navigation
     */
    resetRovingTabIndex(): void;
    /** Returns an array of all selected values. */
    getSelectedValues(): string[];
    /**
     * Sets the selected items by value(s) without triggering events.
     * Works for both single and multiple selection modes.
     * @param {string|string[]} values - Value(s) to select
     */
    setSelectedValues(values: string | string[]): void;
    /** Convenience method for selecting all items. */
    selectAll(): void;
    /** Convenience method for deselecting all items. */
    deselectAll(): void;
    /** Sets focus to the listbox. */
    focus(): void;
    /** Removes focus from the listbox. */
    blur(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-listbox': QuietListbox;
    }
}
