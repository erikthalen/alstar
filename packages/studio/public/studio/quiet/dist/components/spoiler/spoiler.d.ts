import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-spoiler>
 *
 * @summary Conceals sensitive content and gives the user the option of showing it or not, preventing unintentional
 *  disclosure.
 * @documentation https://quietui.org/docs/components/spoiler
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot - The spoiler's content.
 * @slot label - A custom label for the reveal text. For plain-text labels, you can use the `label` attribute instead.
 *
 * @csspart content - The container that holds the spoiler's content.
 * @csspart cover - The element that covers the spoiler, a `<button>` element.
 * @csspart label - The container that wraps the label, a `<span>` element.
 * @csspart hide-button - The button that hides the spoiler, a `<button>` element containing an icon.
 * @csspart hide-icon - The hide icon, a `<quiet-icon>` element.
 * @csspart hide-icon__svg - The hide icon's `svg` part.
 *
 * @cssproperty [--blur=8px] - The amount of blur when using the blur effect.
 */
export declare class QuietSpoiler extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private hideButton?;
    private cover;
    /** Shows or hides the spoiler's content. */
    visible: boolean;
    /** Renders the spoiler inline. */
    inline: boolean;
    /** Removes the hide button and persists the content when shown. */
    persist: boolean;
    /** Determines how the spoiler is hidden. */
    effect: 'blur' | 'solid' | 'noise';
    /**
     * The spoiler's label. If you need to provide HTML in the label, use the `label` slot instead.
     */
    label: string;
    /** When more than one spoilers share the same name, only will be shown at a time. */
    name: string;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    private handleButtonClick;
    private handleKeyDown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-spoiler': QuietSpoiler;
    }
}
