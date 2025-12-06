import type { QuietTransitionAnimation } from '@quietui/scurry';
import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-transition-group>
 *
 * @summary Improves the user's experience by adding subtle animations as items are added, removed, and reordered in the
 *  group.
 * @documentation https://quietui.org/docs/components/transition-group
 * @status stable
 * @since 1.0
 *
 * @slot - One or more elements to transition when adding, removing, and reordering the DOM.
 *
 * @event quiet-content-changed - Emitted when content changes and before the transition animation begins.
 * @event quiet-transition-end - Emitted when transition animations end.
 *
 * @cssstate transitioning - Applied when a transition is active.
 *
 * @cssproperty [--duration=0.25s] - The duration of each individual step (not the total transition time).
 */
export declare class QuietTransitionGroup extends QuietElement {
    static styles: CSSResultGroup;
    private cachedContainerPosition;
    private cachedElementPositions;
    private cachedScrollPosition;
    private currentTransition;
    private isObserving;
    private mutationObserver;
    private resizeObserver;
    /** Determines if the transition group is currently animating. (Property only) */
    isTransitioning: boolean;
    /**
     * A custom animation to use for enter/exit transitions. Works well with animations from `@quietui/scurry`.
     * (Property only)
     */
    transitionAnimation?: QuietTransitionAnimation;
    /**
     * By default, the transition group observes and animates its own children. In some cases, you may want it to control
     * another element's children. This is useful in cases where you can't directly wrap child elements with the
     * `<quiet-transition-group>` element.
     *
     * For example, if you embed a transition group in a component's shadow root but need it to control slotted (light
     * DOM) elements, you can't simply wrap the slot because the mutation observer can't see projected (slotted) elements.
     * In this case, point this property to the target element and the transition group will hide itself and observe the
     * target container's children instead. (Property only)
     */
    transitionContainer: HTMLElement;
    /**
     * Disables transition animations. However, the `quiet-content-changed` and `quiet-transition-end` events will still
     * be dispatched.
     */
    disableTransitions: boolean;
    /**
     * By default, no animation will occur when the user indicates a preference for reduced motion. Use this attribute to
     * override this behavior when necessary.
     */
    ignoreReducedMotion: boolean;
    connectedCallback(): void;
    disconnectedCallback(): void;
    firstUpdated(): void;
    updated(changedProperties: PropertyValues<this>): void;
    /**
     * Gets a custom animation based on the users preference. If a custom animation isn't found, the default is returned.
     */
    private getAnimation;
    private handleMutations;
    private handleResizes;
    private handleVisibilityChange;
    private startObservers;
    private stopObservers;
    /**
     * Returns a promise that resolves when the current transition ends. If no transition is running, it resolves
     * immediately  This is a great way to ensure transitions have stopped before doing something else, such as adding or
     * removing new elements to the transition group.
     */
    transitionComplete(): Promise<void>;
    /**
     * Updates the cached coordinates of all child elements in the transition group. In most cases, you shouldn't have to
     * call this method. However, if you're resizing or animating elements imperatively, you may need to call this
     * immediately before appending or removing elements to ensure a smooth transition.
     */
    updateElementPositions(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-transition-group': QuietTransitionGroup;
    }
}
