import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-sparkline>
 *
 * @summary Shows at-a-glance trends in a small, inline chart that fits within text or tables.
 * @documentation https://quietui.org/docs/components/sparkline
 * @status stable
 * @since 1.0
 *
 * @cssproperty [--fill-color] - The start color of the gradient fill
 * @cssproperty [--gradient-stop-color] - The end color of the gradient fill
 */
export declare class QuietSparkline extends QuietElement {
    static styles: CSSResultGroup;
    points: number[];
    /**
     * An accessible label for the sparkline. This will be read by screen readers for users who can't see the chart, so
     * make sure to describe it appropriately.
     */
    label: string;
    /**
     * A space-separated list of positive values to show in the sparkline, e.g. "10 25 18 30". At least two values are
     * required to generate a chart.
     */
    data: string;
    /** Determines the sparkline's appearance. */
    appearance: 'gradient' | 'line' | 'solid';
    /** Draws the component with colors to visually indicate the specified trend. */
    trend: 'positive' | 'negative' | 'neutral';
    /** The interpolation method used to connect data points on the line. */
    curve: 'linear' | 'natural' | 'step';
    /** Returns an SVG path for a linear, point-to-point graph */
    private getLinearPath;
    /** Returns an SVG path for a curved graph */
    private getNaturalPath;
    /** Returns an SVG path for a stepped graph */
    private getStepPath;
    /** Generates the appropriate SVG path based on the desired curve. */
    private getPath;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-sparkline': QuietSparkline;
    }
}
