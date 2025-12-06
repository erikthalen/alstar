import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-splitter>
 *
 * @summary A draggable splitter that separates two panels, allowing users to resize them.
 * @documentation https://quietui.org/docs/components/splitter
 * @status stable
 * @since 1.0
 *
 * @slot start - The content for the primary (start) panel.
 * @slot end - The content for the secondary (end) panel.
 * @slot handle - The draggable handle that separates the panels.
 *
 * @event quiet-resize - Dispatched when the splitter's handle is moved.
 *
 * @csspart start - The content to show in the first (start) panel.
 * @csspart end - The content to show in the second (end) panel.
 * @csspart divider - The draggable divider that separates the panels.
 * @csspart handle - The visual handle within the divider (only present when not using the `handle` slot).
 *
 * @cssstate disabled - Applied when the splitter is disabled.
 * @cssstate dragging - Applied when the splitter is being dragged.
 * @cssstate focused - Applied when the splitter has focus.
 *
 * @cssproperty [--divider-min-position=0%] - Minimum position of the divider (as a percentage or pixel value).
 * @cssproperty [--divider-max-position=100%] - Maximum position of the divider (as a percentage or pixel value).
 * @cssproperty [--divider-draggable-area=1rem] - The size of the divider's draggable area (can be larger than the
 *  visible area).
 * @cssproperty [--divider-width=0.125rem] - The width of the visual divider.
 */
export declare class QuietSplitter extends QuietElement {
    static styles: CSSResultGroup;
    private localize;
    private dragHandler?;
    private previousPosition;
    private dragStartPosition;
    private dragStartClientX;
    private dragStartClientY;
    private divider;
    isCollapsed: boolean;
    isDragging: boolean;
    /** The current position of the divider as a decimal (0-1). */
    position: number;
    /** The orientation of the splitter. */
    orientation: 'horizontal' | 'vertical';
    /** Disables the splitter, preventing it from being focused and resized. */
    disabled: boolean;
    /** A space-separated list of percentage snap points, e.g. "25% 50% 75%". */
    snap: string;
    /** The maximum distance (in pixels) within which the divider will snap to a specified snap point. */
    snapThreshold: number;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    disconnectedCallback(): void;
    private handleFocus;
    private handleBlur;
    private getSnapPoints;
    private snapToNearest;
    private getDividerConstraint;
    private clampPosition;
    private setupDragging;
    private updateGridTemplate;
    private updateAriaValue;
    private handleKeydown;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-splitter': QuietSplitter;
    }
}
