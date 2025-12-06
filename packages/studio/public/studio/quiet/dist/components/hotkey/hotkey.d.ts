import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-hotkey>
 *
 * @summary Shows keyboard shortcut combinations based on the user's operating system.
 * @documentation https://quietui.org/docs/components/hotkey
 * @status stable
 * @since 1.0
 *
 * @csspart key - The `<kbd>` elements that wrap keys.
 * @csspart keyword - The `<kbd>` elements that wrap keywords.
 * @csspart delimiter - The `<span>` elements that wrap delimiters.
 */
export declare class QuietHotkey extends QuietElement {
    static styles: CSSResultGroup;
    /** The primary keys to display in the hotkey, separated by a space. */
    keys: string;
    /** The keys to display on Linux devices, separated by a space. */
    linux: string;
    /** The keys to display on Mac devices, separated by a space. */
    mac: string;
    /** The keys to display on Windows devices, separated by a space. */
    windows: string;
    /** Optional label for screen readers. If not provided, the hotkey text will be used. */
    label: string;
    /**
     * The delimiter to show between each key. When set to `auto`, the delimiter will be determined by the platform (no
     * character for Mac and "+" for others).
     */
    delimiter: 'auto' | string;
    /**
     * Determines the platform to show. When set to `auto`, the platform will be automatically detected. The `linux`
     * platform will be used for most Linux, Unix, and BSD operating systems.
     */
    platform: 'auto' | 'linux' | 'mac' | 'windows';
    /** The hotkey's appearance. */
    appearance: 'normal' | 'unstyled';
    updated(changedProperties: PropertyValues<this>): void;
    /** Replaces keywords with their platform-specific symbol or text. */
    private replaceKeywords;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-hotkey': QuietHotkey;
    }
}
