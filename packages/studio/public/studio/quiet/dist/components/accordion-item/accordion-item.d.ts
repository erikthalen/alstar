import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-accordion-item>
 *
 * @summary An individual section within an accordion, consisting of a header and content that shows when expanded.
 * @documentation https://quietui.org/docs/components/accordion-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The content to show when expanded.
 * @slot icon - The expand/collapse icon.
 * @slot label - The accordion item's label. For plain-text labels, you can use the `label` attribute instead.
 *
 * @csspart header - The accordion item's header that contains the label and icon.
 * @csspart label - The label container.
 * @csspart icon - The icon container.
 * @csspart body - The accordion item's body that contains the content.
 * @csspart content - The content wrapper inside the body.
 *
 * @cssstate disabled - Applies when the accordion item is disabled.
 * @cssstate expanded - Applies when the accordion item is expanded.
 */
export declare class QuietAccordionItem extends QuietElement {
    static styles: CSSResultGroup;
    body: HTMLElement;
    content: HTMLElement;
    header: HTMLElement;
    expanded: boolean;
    /** The accordion item's label. If you need to provide HTML in the label, use the `label` slot instead. */
    label: string;
    /** The accordion item's appearance. This will be set automatically by the accordion controller. */
    appearance: 'normal' | 'contained' | 'separated' | 'unstyled';
    /** The position of the expand/collapse icon. This will be set automatically by the accordion controller. */
    iconPlacement: 'start' | 'end';
    /** Disables the accordion item. */
    disabled: boolean;
    /** Sets focus to the accordion item. */
    focus(): void;
    /** Removes focus from the accordion item. */
    blur(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Animate the expansion of the body - called by the accordion controller */
    animateExpand(): Promise<void>;
    /** Animate the collapse of the body - called by the accordion controller */
    animateCollapse(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-accordion-item': QuietAccordionItem;
    }
}
