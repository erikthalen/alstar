import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-include>
 *
 * @summary Pulls content from another file into your page.
 * @documentation https://quietui.org/docs/components/include
 * @status stable
 * @since 1.0
 *
 * @event quiet-included - Emitted when the include file has been fetched and rendered. The HTTP status code will be
 *  available in `event.detail.status`. This event does not bubble.
 * @event quiet-include-error - Emitted when the fetch results in a network error or receives an HTTP response outside
 *  of the 200 range. If a network error occurs, it will be available in `event.detail.error`. If an HTTP status code
 *  was returned, it will be available in `event.detail.status`. This event does not bubble.
 */
export declare class QuietInclude extends QuietElement {
    static styles: CSSResultGroup;
    /** The URL of the file to include. Must be a CORS-enabled endpoint. */
    src: string;
    /** The mode to use when fetching the request. */
    mode: RequestMode;
    /**
     * By default, scripts in included files will not be executed. Setting this to true will allow them to run. If you use
     * this option, make sure you trust the included HTML, otherwise you may become vulnerable to XSS exploits.
     */
    allowScripts: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    /** Runs a script by cloning and replacing it. */
    private runScript;
    /** Fetches the include file and handles the response. */
    private fetchInclude;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-include': QuietInclude;
    }
}
