import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../dropdown-item/dropdown-item.js';
/**
 * <quiet-dropdown>
 *
 * @summary Provides a menu of options that appear when the corresponding trigger is activated.
 * @documentation https://quietui.org/docs/components/dropdown
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-dropdown-item
 *
 * @slot - One or more `<dropdown-item>` elements to show in the dropdown. You can also use `<quiet-divider>` here.
 * @slot trigger - The dropdown's trigger. Must be a `<quiet-button>` or `<button>` element.
 *
 * @event quiet-before-open - Emitted when the dropdown is instructed to open but before it is shown.
 * @event quiet-open - Emitted when the dropdown menu has opened and the animation has completed.
 * @event quiet-before-close - Emitted when the dropdown is dismissed but before it is hidden.
 * @event quiet-close - Emitted when the dropdown menu has closed and the animation has completed.
 * @event quiet-select - Emitted when a dropdown item has been selected. You can inspect `event.detail.item` to see the
 *  `<quiet-dropdown-item>` that was selected. Calling `event.preventDefault()` will keep the dropdown open.
 *
 * @cssproperty [--show-duration=50ms] - The duration of the show/hide animation.
 *
 * @csspart menu - The dropdown menu's container.
 *
 * @cssstate open - Applied when the dropdown is open.
 */
export declare class QuietDropdown extends QuietElement {
    static styles: CSSResultGroup;
    private cleanup;
    private submenuCleanups;
    private contextMenuElement;
    private contextMenuLongPress;
    private contextMenuVirtualElement;
    private localize;
    private userTypedQuery;
    private userTypedTimeout;
    private openSubmenuStack;
    defaultSlot: HTMLSlotElement;
    private menu;
    /** Opens or closes the dropdown. */
    open: boolean;
    /** The ID of an element to apply the dropdown as a context menu. */
    contextMenu: string;
    /**
     * The placement of the dropdown menu in reference to the trigger. The menu will shift to a more optimal location if
     * the preferred placement doesn't have enough room.
     */
    placement: 'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'right' | 'right-start' | 'right-end' | 'left' | 'left-start' | 'left-end';
    /** The distance of the dropdown menu from its trigger. */
    distance: number;
    /** The offset of the dropdown menu along its trigger. */
    offset: number;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues): void;
    /** Gets all <quiet-dropdown-item> elements slotted in the menu that aren't disabled. */
    private getItems;
    /** Gets all dropdown items in a specific submenu. */
    private getSubmenuItems;
    /** Handles the submenu navigation stack */
    private addToSubmenuStack;
    /** Removes the last item from the submenu stack */
    private removeFromSubmenuStack;
    /** Gets the current active submenu item */
    private getCurrentSubmenuItem;
    /** Closes all submenus in the dropdown. */
    private closeAllSubmenus;
    /** Closes sibling submenus at the same level as the specified item. */
    private closeSiblingSubmenus;
    /** Get the slotted trigger button, a <quiet-button> or <button> element */
    private getTrigger;
    /** Shows the dropdown menu. This should only be called from within updated(). */
    private showMenu;
    /** Hides the dropdown menu. This should only be called from within updated(). */
    private hideMenu;
    /** Repositions the dropdown menu */
    private reposition;
    /** If focus is set outside of the component, close the menu. */
    private handleDocumentFocusIn;
    /** Handles key down events when the menu is open */
    private handleDocumentKeyDown;
    /** Handles pointer down events when the dropdown is open. */
    private handleDocumentPointerDown;
    /** Handles clicks on the menu. */
    private handleMenuClick;
    /** Prepares dropdown items when they get added or removed */
    private handleMenuSlotChange;
    /** Toggles the dropdown menu */
    private handleTriggerClick;
    /** Given an x and y coordinate, a virtual element for Floating UI is returned.  */
    private getContextMenuVirtualElement;
    /** Shows the dropdown when the contextmenu event is dispatched. */
    private handleContextMenu;
    /** Handles submenu opening events */
    private handleSubmenuOpening;
    /** Sets up submenu positioning with autoUpdate */
    private setupSubmenuPosition;
    private static handleSubmenuSlotChange;
    private processSubmenuItems;
    /** Cleans up submenu positioning */
    private cleanupSubmenuPosition;
    /** Positions a submenu relative to its parent item */
    private positionSubmenu;
    /** Updates the safe triangle coordinates for a submenu */
    private updateSafeTriangleCoordinates;
    /** Handle global mouse movement for safe triangle logic */
    private handleGlobalMouseMove;
    /** Makes a selection, emits the quiet-select event, and closes the dropdown. */
    private makeSelection;
    /** Syncs aria attributes on the slotted trigger element and the menu based on the dropdown's current state */
    private syncAriaAttributes;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-dropdown': QuietDropdown;
    }
}
