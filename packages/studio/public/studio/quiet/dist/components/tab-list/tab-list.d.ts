import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../scroller/scroller.js';
import '../tab-panel/tab-panel.js';
import '../tab/tab.js';
/**
 * <quiet-tab-list>
 *
 * @summary Allows users to switch between different sections of content without leaving the page, providing a clean and
 *  organized interface.
 * @documentation https://quietui.org/docs/components/tab-list
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-scroller
 * @dependency quiet-tab
 * @dependency quiet-tab-panel
 *
 * @slot - One or more `<quiet-tab-panel>` elements, each with a `name` attribute unique to the tab list.
 * @slot tab - One or more `<quiet-tab>` elements, each with a `panel` attribute linked to the `name` of a tab panel.
 *  Note that tabs will automatically apply this slot to themselves, so you can safely omit `slot="tab"` in your markup.
 *  Also useful for adding close buttons to tabs.
 *
 * @event quiet-tab-shown - Emitted after a tab is shown. The event will include a `detail` object with `tab` and
 *  `panel`properties that reference the respective tab and panel elements.
 * @event quiet-tab-hidden - Emitted after a tab is hidden. The event will include a `detail` object with `tab` and
 *  `panel` properties that reference the respective tab and panel elements.
 *
 * @csspart tabs - The container that holds all of the tabs, a `<quiet-scroller>` element.
 * @csspart tabs-content - The scroller's `content` part.
 * @csspart panels - The container that holds all of the tab panels.
 */
export declare class QuietTabList extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private tabSlot;
    private panelSlot;
    /**
     * An accessible label for the tab list. This won't be visible, but it will be read to assistive devices so you should
     * always include one.
     */
    label: string;
    /** The name of the tab panel that's currently active. */
    tab: string;
    /** The placement of tab controls. */
    placement: 'top' | 'bottom' | 'start' | 'end';
    updated(changedProperties: PropertyValues<this>): void;
    /** Gets an array of tabs slotted into the tab list. */
    private getTabs;
    private getPanels;
    private handleTabsClick;
    private handleTabsKeyDown;
    private handleSlotChange;
    /** Sets the active tab + panel. */
    private setActiveTab;
    /** @internal Makes only the active tab tabbable. If no tab is active, the first non-disabled tab will be tabbable. */
    resetRovingTabIndex(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-tab-list': QuietTabList;
    }
}
