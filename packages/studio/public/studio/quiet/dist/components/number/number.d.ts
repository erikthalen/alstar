import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-number>
 *
 * @summary Outputs a formatted number with support for currency, percentages, and units.
 * @documentation https://quietui.org/docs/components/number
 * @status stable
 * @since 1.0
 */
export declare class QuietNumber extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    /** The number to format. */
    number: number;
    /** The formatting style to use. */
    type: 'decimal' | 'currency' | 'percent' | 'unit';
    /**
     * The currency to use when formatting currency. Must be an ISO 4217 currency code, e.g. "EUR" for euro. If not
     * provided, USD will be assumed.
     */
    currency: string;
    /** How to display the currency in currency formatting. */
    currencyDisplay: 'code' | 'symbol' | 'narrowSymbol' | 'name';
    /** In many locales, accounting format means to wrap the number with parentheses instead of appending a minus sign. */
    currencySign: 'standard' | 'accounting';
    /**
     * The unit to use in unit formatting. [Possible values can be found here.](https://tc39.es/ecma402/#table-sanctioned-single-unit-identifiers)
     * There is no default value. If the style is `unit`, this option must be provided.
     */
    unit: string;
    /** The unit formatting style to use in unit formatting. */
    unitDisplay: 'narrow' | 'short' | 'long';
    /**
     * The minimum number of integer digits to use. A value with a smaller number of integer digits than this number will
     * be left-padded with zeros (to the specified length) when formatted. Possible values are from `1` to `21`. The
     * default is `1`.
     */
    minimumIntegerDigits: number;
    /** The minimum number of fraction digits to use. Possible values are from `0` to `20`. */
    minimumFractionDigits: number;
    /** The maximum number of fraction digits to use. Possible values are from `0` to `20`. */
    maximumFractionDigits: number;
    /** The minimum number of significant digits to use. Possible values are from `1` to `21`; the default is `1`. */
    minimumSignificantDigits: number;
    /** The maximum number of significant digits to use. Possible values are from `1` to `21`; the default is `21`. */
    maximumSignificantDigits: number;
    /** Specifies how rounding conflicts will be resolved. */
    roundingPriority: 'auto' | 'morePrecision' | 'lessPrecision';
    /**
     * Indicates the increment at which rounding should take place relative to the calculated rounding magnitude. Possible
     * values are `1`, `2`, `5`, `10`, `20`, `25`, `50`, `100`, `200`, `250`, `500`, `1000`, `2000`, `2500`, and `5000`.
     * Cannot be mixed with significant-digits rounding or any setting of `roundingPriority` other than auto.
     */
    roundingIncrement: '1' | '2' | '5' | '10' | '20' | '25' | '50' | '100' | '200' | '250' | '500' | '1000' | '2000' | '2500' | '5000';
    /** How decimals should be rounded. [See this page for more details.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#roundingmode) */
    roundingMode: 'ceil' | 'floor' | 'expand' | 'trunc' | 'halfCeil' | 'halfFloor' | 'halfExpand' | 'halfTrunc' | 'halfEven';
    /** The strategy for displaying trailing zeros on whole numbers. */
    trailingZeroDisplay: 'auto' | 'stripIfInteger';
    /** The formatting that should be displayed for the number. */
    notation: 'standard' | 'scientific' | 'engineering' | 'compact';
    /** Only used when `notation` is `compact`. */
    compactDisplay: 'short' | 'long';
    /** Whether to use grouping separators, such as thousands separators or thousand/lakh/crore separators. */
    grouping: 'always' | 'never' | 'auto' | 'min2';
    /** When to display the sign for the number. */
    signDisplay: 'auto' | 'always' | 'exceptZero' | 'negative' | 'never';
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-number': QuietNumber;
    }
}
