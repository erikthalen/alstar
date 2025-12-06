import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-bytes>
 *
 * @summary Formats an arbitrary number of bytes or bits into a human-readable size.
 * @documentation https://quietui.org/docs/components/bytes
 * @status stable
 * @since 1.0
 */
export declare class QuietBytes extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /** The number of bytes to format. */
    value: number;
    /** The unit to display. */
    unit: 'byte' | 'bit';
    /** How to display the bytes, e.g. "100 bytes", "100 b", or "100b". */
    display: 'long' | 'short' | 'narrow';
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-bytes': QuietBytes;
    }
}
