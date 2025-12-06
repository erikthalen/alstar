import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-date>
 *
 * @summary Outputs a date or time in the specified format.
 * @documentation https://quietui.org/docs/components/date
 * @status stable
 * @since 1.0
 */
export declare class QuietDate extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /**
     * The date to format. If an attribute is passed, the date should be an [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
     * If set as a property, a `Date` object can be used instead. If unset, the current date will be assumed.
     */
    date: Date | string;
    /**
     * A shortcut property for formatting the date. This can be used with `time-style`, but not with other formatting
     * properties such as `weekday`, `hour`, `month`, etc.
     */
    dateStyle: 'full' | 'long' | 'medium' | 'short';
    /**
     * A shortcut property for formatting the time. This can be used with `date-style`, but not with other formatting
     * properties such as `weekday`, `hour`, `month`, etc.
     */
    timeStyle: 'full' | 'long' | 'medium' | 'short';
    /**
     * Whether to use 12-hour time (as opposed to 24-hour time). If `auto`, the default value is determined by the user's
     * locale.
     */
    hourFormat: 'auto' | '12' | '24';
    /** The hour cycle to use. */
    hourCycle: 'h11' | 'h12' | 'h23' | 'h24';
    /** The time zone to use. The default is the user's default time zone. */
    timeZone: string;
    /** The representation of the weekday. */
    weekday: 'long' | 'short' | 'narrow';
    /** The representation of the era. */
    era: 'long' | 'short' | 'narrow';
    /** The representation of the year. */
    year: 'numeric' | '2-digit';
    /** The representation of the month. */
    month: 'numeric' | '2-digit' | 'long' | 'short' | 'narrow';
    /** The representation of the day. */
    day: 'numeric' | '2-digit';
    /**
     * The formatting style used for day periods like "in the morning", "am", "noon", "n" etc. This option only has an
     * effect if a 12-hour clock is used.
     */
    dayPeriod: 'long' | 'short' | 'narrow';
    /** The representation of the hour. */
    hour: 'numeric' | '2-digit';
    /** The representation of the minute. */
    minute: 'numeric' | '2-digit';
    /** The representation of the second. */
    second: 'numeric' | '2-digit';
    /** The number of digits used to represent fractions of a second (any additional digits are truncated). */
    fractionalSecondDigits: 1 | 2 | 3;
    /** The localized representation of the time zone name. */
    timeZoneName: 'long' | 'short' | 'shortOffset' | 'longOffset' | 'shortGeneric' | 'longGeneric';
    /** The format matching algorithm to use. */
    formatMatcher: 'basic' | 'best-fit';
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-date': QuietDate;
    }
}
