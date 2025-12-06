import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import type { QuietCombobox } from '../combobox/combobox.js';
/**
 * <quiet-combobox-item>
 *
 * @summary An item that can be selected from a combobox control.
 * @documentation https://quietui.org/docs/components/combobox-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The item's label.
 * @slot icon - An optional icon to display at the start of the item.
 * @slot details - Optional details to display at the end of the item.
 *
 * @csspart icon - The container that wraps the icon slot.
 * @csspart label - The container that wraps the item's label.
 * @csspart details - The container that wraps the details slot.
 * @csspart checkmark - The checkmark icon shown when selected in multiple mode.
 *
 * @cssstate selected - Applied when the item is selected.
 * @cssstate disabled - Applied when the item is disabled.
 * @cssstate active - Applied when the item is active (keyboard navigation).
 */
export declare class QuietComboboxItem extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    defaultSlot: HTMLSlotElement;
    /** The value to submit when this item is selected. If not provided, the text content is used. */
    value: string;
    /** Disables the item. */
    disabled: boolean;
    /** @internal Whether the item is currently selected. */
    selected: boolean;
    /** @internal Whether the item is currently active (keyboard navigation). */
    active: boolean;
    /** @internal Reference to the parent combobox */
    combobox: QuietCombobox | null;
    connectedCallback(): void;
    /** Gets the text content from the combobox item's label. */
    getLabelText(): string;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-combobox-item': QuietComboboxItem;
    }
}
