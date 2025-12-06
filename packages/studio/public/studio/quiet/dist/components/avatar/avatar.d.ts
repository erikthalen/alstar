import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-avatar>
 *
 * @summary Provides a visual representation of a user to enhance personalization and recognition.
 * @documentation https://quietui.org/docs/components/avatar
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot icon - A custom icon to use instead of the default. Will not be shown when an image or initials are present.
 *  For best results, use a `<quiet-icon>` or an `<svg>` element.
 *
 * @cssproperty [--size=3rem] - The size of the avatar to draw.
 */
export declare class QuietAvatar extends QuietElement {
    static styles: CSSResultGroup;
    hasImageLoaded: boolean;
    /**
     * An accessible label for the avatar. This won't be visible, but it will be read to assistive devices so you should
     * always include one.
     */
    label?: string;
    /**
     * A string of characters to display in the avatar when an image isn't available or fails to load. Up to five
     * characters are supported.
     */
    characters?: string;
    /** The URL of an image to display in the avatar. Non-square images will be clipped to fit. */
    image?: string;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-avatar': QuietAvatar;
    }
}
