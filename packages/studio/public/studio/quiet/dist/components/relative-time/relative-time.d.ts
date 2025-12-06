import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-relative-time>
 *
 * @summary Outputs a relative time in a human-readable format.
 * @documentation https://quietui.org/docs/components/relative-time
 * @status stable
 * @since 1.0
 */
export declare class QuietRelativeTime extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /**
     * The date from which to calculate the relative time from. If an attribute is passed, the date should be an [ISO 8601
     * string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString). If set
     * as a property, a `Date` object can be used instead. If unset, the current date will be assumed.
     */
    date: Date | string;
    /** The style of date to render. */
    format: 'long' | 'short' | 'narrow';
    /** When `auto`, the date may produce strings such as "yesterday" instead of "1 day ago". */
    numeric: 'auto' | 'always';
    /** When set, the time will update itself. */
    live: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-relative-time': QuietRelativeTime;
    }
}
