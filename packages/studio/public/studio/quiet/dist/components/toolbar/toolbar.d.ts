import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-toolbar>
 *
 * @summary Turns a collection of buttons and button groups into an accessible toolbar.
 * @documentation https://quietui.org/docs/components/toolbar
 * @status stable
 * @since 1.0
 *
 * @slot - A mixture of buttons and/or button groups.
 */
export declare class QuietToolbar extends QuietElement {
    static styles: CSSResultGroup;
    /** The toolbar's orientation. This changes which arrow keys are used to select adjacent buttons. */
    orientation: 'horizontal' | 'vertical';
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Gets an array of buttons slotted into the toolbar. Includes slotted buttons, such as dropdown triggers. */
    private getButtons;
    /** Gets an array of button groups slotted into the toolbar. */
    private getButtonGroups;
    private handleDefaultSlotChange;
    private handleKeyDown;
    private handlePointerDown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-toolbar': QuietToolbar;
    }
}
