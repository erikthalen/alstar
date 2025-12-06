import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-expander>
 *
 * @summary An expandable content container with smooth animation on show/hide.
 * @documentation https://quietui.org/docs/components/expander
 * @status stable
 * @since 1.0
 *
 * @slot - The default slot for content to be expanded/collapsed.
 * @slot expand-label - The label for the button that expands the content.
 * @slot collapse-label - The label for the button that collapses the content.
 *
 * @event quiet-before-open - Emitted before the expander opens. Cancelable event that prevents opening when canceled.
 * @event quiet-open - Emitted after the expander has opened.
 * @event quiet-before-close - Emitted before the expander closes. Cancelable event that prevents closing when canceled.
 * @event quiet-close - Emitted after the expander has closed.
 *
 * @csspart content - The container holding the expandable content.
 * @csspart shadow - The shadow that shows above collapsed content.
 * @csspart trigger - The button that toggles between expanded and collapsed states.
 *
 * @cssproperty [--preview-height=3lh] - The visible height of the expander's content when collapsed.
 * @cssproperty [--duration=200ms] - The duration of the expand/collapse animation.
 * @cssproperty [--easing=ease] - The easing to use for the expand/collapse animation.
 *
 * @cssstate disabled - Applied when the expander is disabled.
 * @cssstate expanded - Applied when the content is expanded.
 */
export declare class QuietExpander extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    content: HTMLElement;
    trigger: HTMLButtonElement;
    /** Whether the content is expanded */
    expanded: boolean;
    /** Disables the expand/collapse functionality */
    disabled: boolean;
    /** When true, the shadow above collapsed content will not be rendered. */
    withoutShadow: boolean;
    /** Update max-height when the expanded property changes */
    updated(changedProperties: PropertyValues<this>): void;
    private handleClick;
    private handleContentScroll;
    /** Toggle the expanded state */
    private toggleExpanded;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-expander': QuietExpander;
    }
}
