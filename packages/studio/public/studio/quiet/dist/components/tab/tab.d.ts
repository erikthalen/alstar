import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-tab>
 *
 * @summary Describes and selects a tab panel within a tab list.
 * @documentation https://quietui.org/docs/components/tab
 * @status stable
 * @since 1.0
 *
 * @slot - The tab's content. This is usually a short label, but sometimes includes an icon.
 *
 * @cssstate active - Applied when the tab is selected.
 * @cssstate disabled - Applied when the tab is selected.
 */
export declare class QuietTab extends QuietElement {
    static styles: CSSResultGroup;
    /** @internal The controller will set this property to true when the tab is active. */
    active: boolean;
    /**
     * The name of the tab panel this tab will link to. The tab panel must be an HTML element inside the
     * `<quiet-tab-list>` element with a `name` attribute.
     */
    panel?: string;
    /** Disables the tab, preventing it from being activated. */
    disabled: boolean;
    firstUpdated(): void;
    disconnectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-tab': QuietTab;
    }
}
