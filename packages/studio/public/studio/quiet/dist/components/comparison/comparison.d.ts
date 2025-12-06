import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../icon/icon.js';
/**
 * <quiet-comparison>
 *
 * @summary Displays two elements side-by-side with a draggable divider, allowing users to adjust the visible portions
 *  for direct visual comparison.
 * @documentation https://quietui.org/docs/components/comparison
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-icon
 *
 * @slot start - The content to show on the left/start side or top side, depending on orientation.
 * @slot end - The content to show on the right/end side or bottom side, depending on orientation.
 * @slot handle-icon - A custom icon to use for the divider's handle.
 *
 * @event quiet-resize - Dispatched when the comparison's handle is moved.
 *
 * @csspart start - The container for the start content.
 * @csspart end - The container for the end content.
 * @csspart divider - The draggable divider between start and end.
 * @csspart handle - The visual handle within the divider.
 *
 * @cssstate disabled - Applied when the comparison is disabled.
 * @cssstate dragging - Applied when the divider is being dragged.
 * @cssstate focused - Applied when the divider has focus.
 */
export declare class QuietComparison extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private dragHandler?;
    private dragStartPosition;
    private dragStartClientX;
    private dragStartClientY;
    private divider;
    isDragging: boolean;
    /** The position of the divider as a decimal (0-1). */
    position: number;
    /** The orientation of the comparison slider, either 'horizontal' or 'vertical'. */
    orientation: 'horizontal' | 'vertical';
    /** Disables the comparison component, preventing it from being focused and adjusted. */
    disabled: boolean;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private handleFocus;
    private handleBlur;
    private handleKeydown;
    private setupDragging;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-comparison': QuietComparison;
    }
}
