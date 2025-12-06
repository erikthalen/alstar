import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../accordion-item/accordion-item.js';
import type { QuietAccordionItem } from '../accordion-item/accordion-item.js';
/**
 * <quiet-accordion>
 *
 * @summary A container for content that expands and collapses when selected.
 * @documentation https://quietui.org/docs/components/accordion
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-accordion-item
 *
 * @slot - One or more `<quiet-accordion-item>` elements to place in the accordion.
 *
 * @event quiet-before-expand - Emitted when an accordion item is instructed to expand but before it is shown. Calling
 *  `event.preventDefault()` will prevent the item from expanding. `event.detail.item` will contain the expanding item.
 * @event quiet-expand - Emitted after an accordion item has been expanded. `event.detail.item` will contain the
 *  expanded item.
 * @event quiet-before-collapse - Emitted when an accordion item is instructed to collapse but before it is hidden.
 *  Calling `event.preventDefault()` will prevent the item from collapsing. `event.detail.item` will contain the
 *  collapsing item.
 * @event quiet-collapse - Emitted after an accordion item has been collapsed. `event.detail.item` will contain the
 *  collapsed item.
 *
 * @cssproperty [--duration=200ms] - The expand and collapse duration.
 * @cssproperty [--easing=ease] - The expand and collapse easing.
 * @cssproperty [--border-color=var(--quiet-neutral-stroke-softer)] - The accordion's border color.
 * @cssproperty [--border-width=var(--quiet-border-width)] - The accordion's border width.
 * @cssproperty [--border-style=var(--quiet-border-style)] - The accordion's border style.
 * @cssproperty [--border-radius=var(--quiet-border-radius-md)] - The border radius to apply to rounded edges.
 */
export declare class QuietAccordion extends QuietElement {
    static styles: CSSResultGroup;
    private defaultSlot;
    /** When set, selecting an accordion item will automatically collapse the others. */
    autoCollapse: boolean;
    /** Determines the accordion's appearance. */
    appearance: 'normal' | 'contained' | 'separated' | 'unstyled';
    /** Determines which side of the accordion item the expand/collapse icon shows. */
    iconPlacement: 'start' | 'end';
    connectedCallback(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Get accordion items from the default slot */
    private getItems;
    /** Get enabled (non-disabled) accordion items */
    private getEnabledItems;
    /** Focus the next enabled accordion item */
    private focusNextItem;
    /** Focus the previous enabled accordion item */
    private focusPreviousItem;
    /** Focus the first enabled accordion item */
    private focusFirstItem;
    /** Focus the last enabled accordion item */
    private focusLastItem;
    private handleClick;
    /** @internal Handles accordion item toggle requests */
    handleItemToggle(item: QuietAccordionItem): Promise<boolean>;
    private handleKeyDown;
    private handleSlotChange;
    /** Sync appearance and iconPlacement to accordion items */
    private syncItemProperties;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-accordion': QuietAccordion;
    }
}
