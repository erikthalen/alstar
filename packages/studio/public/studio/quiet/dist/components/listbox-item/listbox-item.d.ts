import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-listbox-item>
 *
 * @summary Represents individual choices within a listbox.
 * @documentation https://quietui.org/docs/components/listbox-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The listbox item's label. For plain-text labels, you can use the `label` attribute instead.
 *
 * @cssstate selected - Applied when the listbox item is selected.
 * @cssstate disabled - Applied when the listbox item is disabled.
 * @cssstate controller-disabled - Applied when the listbox controller is disabled.
 * @cssstate controller-focused - Applied when the listbox controller focused.
 * @cssstate controller-readonly - Applied when the listbox controller is readonly.
 */
export declare class QuietListboxItem extends QuietElement {
    static styles: CSSResultGroup;
    /**
     * The listbox item's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The listbox item's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The listbox item's value. */
    value: string;
    /** The listbox item's selected state. */
    selected: boolean;
    /** Disables the listbox item. */
    disabled: boolean;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-listbox-item': QuietListboxItem;
    }
}
