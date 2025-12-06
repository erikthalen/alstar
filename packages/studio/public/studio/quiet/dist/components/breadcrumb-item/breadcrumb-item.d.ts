import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-breadcrumb-item>
 *
 * @summary Represents a single link or step in the hierarchical structure of an app or website.
 * @documentation https://quietui.org/docs/components/breadcrumb-item
 * @status stable
 * @since 1.0
 *
 * @slot - The default slot.
 * @slot start - An icon or similar element to place before the breadcrumb item. Works great with `<quiet-icon>`.
 * @slot end - An icon or similar element to place after the breadcrumb item. Works great with `<quiet-icon>`.
 * @slot separator - A custom separator to show instead of the default. Works great with `<quiet-icon>`.
 *
 * @csspart label - The breadcrumb's label, an `<a>` element if `href` is set or a `<span>` element otherwise.
 * @csspart separator - The container that wraps the breadcrumb's separator, a `span` element.
 */
export declare class QuietBreadcrumbItem extends QuietElement {
    static shadowRootOptions: {
        delegatesFocus: boolean;
        mode: ShadowRootMode;
        serializable?: boolean;
        slotAssignment?: SlotAssignmentMode;
        customElements?: CustomElementRegistry;
        registry?: CustomElementRegistry;
    };
    static styles: CSSResultGroup;
    /** Indicates that this item is the current page or view. */
    current: boolean;
    /**
     * The URL the breadcrumb item should point to. If omitted, the breadcrumb item will be drawn as a `<span>` instead of
     * a link, enabling alternate content such as dropdowns.
     */
    href: string;
    /** Opens the link in the specified target. */
    target: '_blank' | '_parent' | '_self' | '_top' | undefined;
    /**
     * Sets the link's `rel` attribute. Note that the default value is `noreferrer noopener`, meaning you might need to
     * set it to an empty string if you're also using `target`.
     */
    rel: string;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-breadcrumb-item': QuietBreadcrumbItem;
    }
}
