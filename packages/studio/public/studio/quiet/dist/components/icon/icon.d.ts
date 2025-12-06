import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-icon>
 *
 * @summary Provides a visual representation of an object, action, or idea.
 * @documentation https://quietui.org/docs/components/icon
 * @status stable
 * @since 1.0
 *
 * @event quiet-loaded - The icon has reloaded and rendered. This event does not bubble.
 * @event quiet-load-error - The icon failed to load. This event does not bubble.
 *
 * @csspart svg - The internal SVG element.
 */
export declare class QuietIcon extends QuietElement {
    static styles: CSSResultGroup;
    svg?: SVGSVGElement;
    /** The name of the icon library to use. */
    library: string;
    /** The icon family to use for this icon, e.g. `filled` or `outline`. */
    family: string;
    /** The name of the icon to render. */
    name: string;
    /** A label to use for assistive devices. If omitted, the icon will be considered presentational. */
    label: string;
    /** Flips the icon horizontally. */
    flipX: boolean;
    /** Flips the icon vertically. */
    flipY: boolean;
    /** Rotates the icon the specified number of degrees. */
    rotate: number;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): Promise<void>;
    /** Loads or reloads and draws the icon. */
    load(): Promise<void>;
    private fetchIcon;
    render(): SVGSVGElement | undefined;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-icon': QuietIcon;
    }
}
