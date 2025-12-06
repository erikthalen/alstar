import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-countdown>
 *
 * @summary Displays a countdown until the specified date.
 * @documentation https://quietui.org/docs/components/countdown
 * @status stable
 * @since 1.0
 *
 * @slot seconds - A custom label to show for seconds.
 * @slot minutes - A custom label to show for minutes.
 * @slot hours - A custom label to show for hours.
 * @slot days - A custom label to show for days.
 * @slot months - A custom label to show for months.
 * @slot years - A custom label to show for years.
 *
 * @event quiet-finished - Dispatched when the countdown finishes.
 * @event quiet-tick - Dispatched every time the visible countdown changes. For example, if the timer displays seconds,
 *  this will be once every second; if `min-unit` is minutes, it will be once every minute; and so on.
 *
 * @csspart unit - The container that holds each unit, including its values and labels.
 * @csspart value - The value of each unit.
 * @csspart label - The label of each unit.
 * @csspart delimiter - The delimiters between units.
 *
 * @cssstate active - Applied when the countdown is actively counting down.
 */
export declare class QuietCountdown extends QuietElement {
    static styles: CSSResultGroup;
    private endAdjustment;
    private intervalId;
    private localize;
    private previousValues;
    private stoppedAt;
    currentTimeUnits: Record<string, number>;
    visibleUnits: string[];
    effectiveEndDate: Date | null;
    private get endDate();
    /**
     * An accessible label for the countdown. This won't be visible, but it will be read to assistive devices so you should
     * always include one.
     */
    label: string;
    /**
     * The date in the future at which the countdown will end. If an attribute is passed, the date should be an
     * [ISO 8601 string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString).
     * If set as a property, a `Date` object can be used instead.
     */
    date: Date | string;
    /** A visual delimiter to show between units. */
    delimiter: string;
    /** The smallest unit to display in the countdown. */
    minUnit: 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';
    /** The largest unit to display in the countdown. */
    maxUnit: 'seconds' | 'minutes' | 'hours' | 'days' | 'months' | 'years';
    /** Whether to group numbers, e.g. with a thousands separator. */
    grouping: 'always' | 'never' | 'auto' | 'min2';
    /**
     * A custom formatting function to apply to the number. When set, `decimal-places` and `grouping` will be ignored.
     * Property only.
     */
    valueFormatter: (value: number) => string;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Starts or resumes the countdown timer after validating dates. */
    start(options?: {
        resume?: boolean;
    }): boolean;
    /** Stops the countdown timer and records the time it was stopped. */
    stop(): void;
    /** Updates the effective end date with any adjustments */
    private updateEffectiveEndDate;
    /** Updates the current time units and checks for changes */
    private updateTimeUnits;
    /** Calculates the update interval based on the minimum unit shown. */
    private getUpdateInterval;
    /**
     * Calculates time difference with proper handling of varying month lengths and leap years. Uses native `Date` methods
     * for lightweight but accurate calculations.
     */
    private calculateTimeUnits;
    /** Gets the visible units based on `min-unit` and `max-unit`. */
    private getVisibleUnits;
    /** Formats the number to display. */
    private formatUnit;
    /** Gets the unit label using Intl.DisplayNames or fallback. */
    private getUnitLabel;
    /** Checks if any visible units have changed and dispatches tick event if needed. */
    private checkForChanges;
    render(): "" | import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-countdown': QuietCountdown;
    }
}
