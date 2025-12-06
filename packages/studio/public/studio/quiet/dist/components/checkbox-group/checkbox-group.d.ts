import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-checkbox-group>
 *
 * @summary Attaches a label and description to a group of related checkboxes or switches.
 * @documentation https://quietui.org/docs/components/checkbox-group
 * @status stable
 * @since 1.0
 *
 * @slot - The checkboxes to place in the group.
 * @slot label - The checkbox's label. For plain-text labels, you can use the `label` attribute instead.
 * @slot description - The checkbox's description. For plain-text descriptions, you can use the `description`
 *  attribute instead.
 *
 * @csspart label - The element that contains the checkbox group's label.
 * @csspart description - The element that contains the checkbox group's description.
 * @csspart group - The element that wraps the grouped checkboxes.
 *
 * @cssproperty [--gap=1em] - The gap between checkboxes.
 */
export declare class QuietCheckboxGroup extends QuietElement {
    static observeSlots: boolean;
    static styles: CSSResultGroup;
    /**
     * The checkbox's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /**
     * The checkbox's description. If you need to provide HTML in the description, use the `description` slot instead.
     */
    description: string;
    /** The orientation of grouped items. */
    orientation: 'horizontal' | 'vertical';
    /**
     * Indicates at least one option in the checkbox group is required. This just adds a visual indicator. To perform
     * validation, use the checkbox's `required` attribute and/or `setCustomValidity()` method.
     */
    required: boolean;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-checkbox-group': QuietCheckboxGroup;
    }
}
