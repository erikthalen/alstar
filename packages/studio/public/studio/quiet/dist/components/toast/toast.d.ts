import type { QuietTransitionAnimation } from '@quietui/scurry';
import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
import '../toast-item/toast-item.js';
import type { QuietToastItem } from '../toast-item/toast-item.js';
import '../transition-group/transition-group.js';
import type { QuietTransitionGroup } from '../transition-group/transition-group.js';
export interface CreateOptions {
    /**
     * Set to true to process the content as HTML instead of plain text. Make sure you trust the included content,
     * otherwise your app may become vulnerable to XSS exploits!
     */
    allowHtml: boolean;
    /**
     * The length of time to show the notification before removing it. Set this to `0` to show the notification until the
     * user dismisses it.
     */
    duration: number;
    /**
     * When true, the close button will be omitted.
     */
    noCloseButton: boolean;
    /**
     * The type of notification to render.
     */
    variant: 'primary' | 'constructive' | 'destructive' | 'neutral';
}
/**
 * <quiet-toast>
 *
 * @summary A mechanism for showing temporary, non-intrusive notifications that appear above the page's content.
 * @documentation https://quietui.org/docs/components/toast
 * @status stable
 * @since 1.0
 *
 * @dependency quiet-toast-item
 * @dependency quiet-transition-group
 *
 * @cssstate visible - Applied when the toast stack is visible.
 */
export declare class QuietToast extends QuietElement {
    static styles: CSSResultGroup;
    private isStackShowing;
    stack: QuietTransitionGroup;
    transitionGroup: QuietTransitionGroup;
    /**
     * A custom animation to use for enter/exit transitions. This gets passed through to the internal transition group.
     * Works well with animations from `@quietui/scurry`. (Property only)
     */
    transitionAnimation?: QuietTransitionAnimation;
    /** The placement of the toast stack on the screen. */
    placement: 'top-start' | 'top-center' | 'top-end' | 'bottom-start' | 'bottom-center' | 'bottom-end';
    connectedCallback(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /** Watch for clicks inside the stack */
    private handleClick;
    /** Called when the transition group detects content changes. */
    private handleContentChanged;
    /** Listen for Escape anywhere in the document */
    private handleDocumentKeyDown;
    /** Update the positions when scrolling */
    private handleDocumentScroll;
    /** Hides the stack when the last notification has transitioned out */
    private handleTransitionEnd;
    /** Hides the toast stack. Call this after all notifications have been removed. */
    private hideStack;
    /** Shows the toast stack in preparation for a notification. */
    private showStack;
    /**
     * Creates a toast notification and adds it to the stack. Returns a reference to the created toast item.
     */
    create(content: string, options?: Partial<CreateOptions>): Promise<QuietToastItem>;
    /**
     * Creates a toast notification using an existing `<quiet-toast-item>` element. Useful if you want to create your own
     * toast items declaratively. Returns a reference to the cloned toast item.
     */
    createFromTemplate(template: HTMLTemplateElement): Promise<QuietToastItem | undefined>;
    /** Removes all elements from the toast stack and turns when the remove transition finishes. */
    empty(): Promise<void>;
    /** Escapes HTML special characters in the given string. */
    escapeHtml(html: string): Promise<string>;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-toast': QuietToast;
    }
}
