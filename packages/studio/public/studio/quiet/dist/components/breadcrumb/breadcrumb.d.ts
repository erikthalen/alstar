import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-breadcrumb>
 *
 * @summary Offers a trail of links that correspond to an app or website's hierarchy, making navigation more predictable
 *  for users.
 * @documentation https://quietui.org/docs/components/breadcrumb
 * @status stable
 * @since 1.0
 *
 * @slot - The default slot containing one or more breadcrumb items.
 *
 * @cssproperty [--item-spacing=0.5em] - The amount of spacing to use between breadcrumb items.
 */
export declare class QuietBreadcrumb extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    firstUpdated(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-breadcrumb': QuietBreadcrumb;
    }
}
