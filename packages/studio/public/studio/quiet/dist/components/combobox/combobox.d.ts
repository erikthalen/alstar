import type { CSSResultGroup, PropertyValues, TemplateResult } from 'lit';
import { QuietFormControlElement } from '../../utilities/quiet-element.js';
import '../combobox-item/combobox-item.js';
import type { QuietComboboxItem } from '../combobox-item/combobox-item.js';
import '../icon/icon.js';
/**
 * <quiet-combobox>
 *
 * @summary Allows users to select from a list of options with type-ahead search.
 * @documentation https://quietui.org/docs/components/combobox
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 * @dependency quiet-combobox-item
 *
 * @slot - One or more `<quiet-combobox-item>` elements to show as options.
 * @slot label - The combobox's label. For plain-text labels, use the `label` attribute instead.
 * @slot description - The combobox's description. For plain-text descriptions, use the `description` attribute instead.
 * @slot start - An icon or similar element to place before the input. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the input. Works great with `<quiet-icon>`.
 *
 * @event quiet-blur - Emitted when the combobox loses focus.
 * @event quiet-change - Emitted when the user commits changes to the combobox's value.
 * @event quiet-focus - Emitted when the combobox receives focus.
 * @event quiet-input - Emitted when the combobox receives input.
 * @event quiet-before-open - Emitted when the dropdown is instructed to open but before it is shown.
 * @event quiet-open - Emitted when the dropdown opens.
 * @event quiet-before-close - Emitted when the dropdown is instructed to close but before it is hidden.
 * @event quiet-close - Emitted when the dropdown closes.
 *
 * @csspart label - The element that contains the combobox's label.
 * @csspart description - The element that contains the combobox's description.
 * @csspart visual-box - The element that wraps the internal text box.
 * @csspart input-area - The wrapper surrounding tags and the internal text box.
 * @csspart tag - Individual tag elements.
 * @csspart tag-remove - The remove button for tags.
 * @csspart text-box - The internal text box, an `<input>` element.
 * @csspart chevron - The chevron icon, a `<quiet-icon>` element.
 * @csspart chevron__svg - The chevron icon's `<svg>` part.
 * @csspart clear-button - The clear button.
 * @csspart dropdown - The dropdown container.
 *
 * @cssstate open - Applied when the dropdown is open.
 * @cssstate disabled - Applied when the combobox is disabled.
 * @cssstate focused - Applied when the combobox has focus.
 * @cssstate blank - Applied when the combobox has no value.
 * @cssstate user-valid - Applied when valid after user interaction.
 * @cssstate user-invalid - Applied when invalid after user interaction.
 *
 * @cssproperty [--text-box-min-width=12ch] - The minimum width of the input field when shown next to tags. Only
 *  available in `multiple` mode.
 * @cssproperty [--show-duration=50ms] - The duration of the show/hide animation for the dropdown.
 */
export declare class QuietCombobox extends QuietFormControlElement {
    static formAssociated: boolean;
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    private cleanup;
    private optionIdCounter;
    private liveRegionTimeoutId;
    private localize;
    private navigationDebounceId;
    protected get focusableAnchor(): HTMLInputElement;
    private dropdown;
    private textBox;
    open: boolean;
    inputValue: string;
    private activeItem;
    private selectedItems;
    private filteredItems;
    private inputWidth;
    private isInvalid;
    private hadUserInteraction;
    private wasSubmitted;
    private liveAnnouncement;
    /** The combobox's label. */
    label: string;
    /** The combobox's description. */
    description: string;
    /** The name of the combobox for form submission. */
    name: string;
    /** The combobox's value(s). */
    value: string | string[];
    /** Placeholder text for the input. */
    placeholder: string;
    /** Disables the combobox. */
    disabled: boolean;
    /** Makes the combobox required. */
    required: boolean;
    /** Enables multiple selection. */
    multiple: boolean;
    /** Adds a clear button when not blank. */
    withClear: boolean;
    /** The visual appearance of the combobox. */
    appearance: 'normal' | 'filled' | 'unstyled';
    /** The size of the combobox. */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    /** Draws the combobox in a pill shape. */
    pill: boolean;
    /** The dropdown's placement relative to the input. */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end';
    /** The distance of the dropdown from the input. */
    distance: number;
    /** The offset of the dropdown along the input. */
    offset: number;
    /** The form to associate with. */
    form: string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    formDisabledCallback(disabled: boolean): void;
    formResetCallback(): void;
    /** Gets all <quiet-combobox-item> elements that aren't disabled (by default). */
    private getItems;
    private updateItems;
    private syncSelectedItems;
    private findMatchingItem;
    private filterItems;
    private setActiveItem;
    private navigateItems;
    private clearInvalidInput;
    private selectItem;
    private deselectItem;
    private removeTag;
    private clearAnnouncementTimers;
    private announceChange;
    private announceOption;
    private announceFilterResults;
    private showDropdown;
    private hideDropdown;
    private positionDropdown;
    private isBlank;
    private updateFormValue;
    private updateValidity;
    private updateInputWidth;
    private handleInput;
    private handleFocus;
    private handleInputClick;
    private handleBlur;
    private handleKeyDown;
    private handleDocumentClick;
    private handleDocumentKeyDown;
    private handleVisualBoxClick;
    private handleClear;
    private handleSlotChange;
    private handleItemClick;
    private handleItemPointerMove;
    private handleHostInvalid;
    /**
     * A custom function for rendering tag content. By default, this function returns the item's full `textContent`. You
     * can override it to customize the content that gets rendered in tags in `multiple` mode.
     */
    getTagContent(item: QuietComboboxItem): TemplateResult;
    /** Sets focus to the combobox. */
    focus(): void;
    /** Removes focus from the combobox. */
    blur(): void;
    render(): TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-combobox': QuietCombobox;
    }
}
