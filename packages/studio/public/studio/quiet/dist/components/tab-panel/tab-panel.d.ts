import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-tab-panel>
 *
 * @summary Holds the content that gets displayed when a tab is selected.
 * @documentation https://quietui.org/docs/components/tab-panel
 * @status stable
 * @since 1.0
 *
 * @slot - Content to show inside the tab panel.
 *
 * @cssstate visible - Applied when the tab panel is visible.
 */
export declare class QuietTabPanel extends QuietElement {
    static styles: CSSResultGroup;
    /** @internal The controller will set this when the panel should be visible. */
    visible: boolean;
    /** The name of the tab panel. Used for assigning tabs to panels. */
    name: string;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-tab-panel': QuietTabPanel;
    }
}
