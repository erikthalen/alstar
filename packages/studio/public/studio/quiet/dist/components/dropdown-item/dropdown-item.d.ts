import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-dropdown-item>
 *
 * @summary Can be selected from inside a dropdown menu.
 * @documentation https://quietui.org/docs/components/dropdown-item
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The item's label or description.
 * @slot icon - An optional icon to show at the start of the item.
 * @slot details - Optional details, such as a keyboard shortcut, to display at the end of the item.
 * @slot submenu - Optional submenu items to display in a nested dropdown. For best results, use `<quiet-submenu-item>`
 *  and `<quiet-divider>` elements.
 *
 * @csspart checkmark - The checkmark icon that's shown when checked, a `<quiet-icon>` element.
 * @csspart checkmark__svg - The checkmark icon's `svg` part.
 * @csspart icon - The container that wraps the icon.
 * @csspart label - The container that wraps the label.
 * @csspart details - The container that wraps the menu item's details.
 * @csspart submenu - The container that wraps the submenu items.
 * @csspart submenu-icon - The icon indicating that a submenu is available.
 * @csspart submenu-icon__svg - The submenu icon's `svg` part.
 *
 * @cssstate active - Applied when the dropdown item is active.
 * @cssstate disabled - Applied when the dropdown item is disabled.
 * @cssstate checked - Applied when the dropdown item is checked.
 * @cssstate submenu-open - Applied when the dropdown item's submenu is open.
 * @cssstate has-submenu - Applied when the dropdown item has a submenu.
 */
export declare class QuietDropdownItem extends QuietElement {
    static styles: CSSResultGroup;
    static observeSlots: boolean;
    hiddenLink: HTMLAnchorElement;
    submenuElement: HTMLDivElement;
    /** @internal The controller will set this property to true when the item is active. */
    active: boolean;
    /**
     * @internal The controller will set this property to true when at least one checkbox exists in the dropdown. This
     * allows non-checkbox items to draw additional space to align properly with checkbox items.
     */
    checkboxAdjacent: boolean;
    /**
     * @internal The controller will set this property to true when at least one item with a submenu exists in the
     * dropdown. This allows non-submenu items to draw additional space to align properly with items that have submenus.
     */
    submenuAdjacent: boolean;
    /**
     * An optional value for the menu item. This is useful for determining which item was selected when listening to the
     * dropdown's `quiet-select` event.
     */
    value: string;
    /** Set to `checkbox` to make the item a checkbox. */
    type: 'normal' | 'checkbox';
    /** The type of menu item to render. */
    variant: 'destructive' | 'neutral';
    /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
    checked: boolean;
    /** Disables the dropdown item. */
    disabled: boolean;
    /** Whether the submenu is currently open. */
    submenuOpen: boolean;
    /** Tells the dropdown item to behave like a link. When selected, the browser will navigate to the target URL. */
    href: string;
    /** Opens the link in the specified target. Only works when `href` is provided. */
    target: '_blank' | '_parent' | '_self' | '_top' | undefined;
    /**
     * Sets the link's `rel` attribute. Only works when `href` is provided. When linking to an external domain, you should
     * probably set this to `noreferrer noopener`.
     */
    rel?: string;
    /**
     * Sets the link's `download` attribute, causing the linked file to be downloaded. Only works when `href` is provided.
     */
    download?: string;
    /** @internal Store whether this item has a submenu */
    hasSubmenu: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Update the has-submenu custom state */
    private updateHasSubmenuState;
    /** Opens the submenu. */
    openSubmenu(): Promise<void>;
    /** Notifies the parent dropdown that this item is opening its submenu */
    private notifyParentOfOpening;
    /** Closes the submenu. */
    closeSubmenu(): Promise<void>;
    /** Gets all dropdown items in the submenu. */
    private getSubmenuItems;
    /** Handles mouse enter to open the submenu */
    private handleMouseEnter;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-dropdown-item': QuietDropdownItem;
    }
}
