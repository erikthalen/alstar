import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-button-group>
 *
 * @summary Displays related buttons in a stylized group.
 * @documentation https://quietui.org/docs/components/button-group
 * @status stable
 * @since 1.0
 *
 * @slot - One or more `<quiet-button>` elements to place in the button group.
 */
export declare class QuietButtonGroup extends QuietElement {
    static styles: CSSResultGroup;
    /**
     * An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so it's
     * usually a good idea to include one.
     */
    label: string;
    /** The button group's orientation. */
    orientation: 'horizontal' | 'vertical';
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Gets an array of buttons slotted into the button group. Includes slotted buttons, such as dropdown triggers. */
    private getButtons;
    /** Updates slotted button class names so they get the correct button styles. */
    private updateClassNames;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-button-group': QuietButtonGroup;
    }
}
