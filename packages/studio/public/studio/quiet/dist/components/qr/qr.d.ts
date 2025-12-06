import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-qr>
 *
 * @summary Generates a QR Code with embedded data.
 * @documentation https://quietui.org/docs/components/qr
 * @status stable
 * @since 1.0
 */
export declare class QuietQr extends QuietElement {
    static styles: CSSResultGroup;
    private canvas;
    /** A string of data to encode. URLs, email addresses, and other types of text are fine. */
    data: string;
    /**
     * A descriptive label for assistive devices. This will not be shown, but it will be announced by screen readers. If
     * no label is provided, the raw data will be used instead.
     */
    label: string;
    /**
     * Determines the level of error correction. The values correspond to those in the
     * [QR Code specification](https://www.qrcode.com/en/about/standards.html).
     */
    errorCorrection: 'L' | 'M' | 'Q' | 'H';
    /** The corner radius of the blocks that make up the QR code. For best results, keep this within 0–0.5. */
    corners: number;
    /** The size of the resulting code in pixels. In most cases, 128–512 is ideal. */
    size: number;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Draws the QR code in the canvas. */
    private draw;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-qr': QuietQr;
    }
}
