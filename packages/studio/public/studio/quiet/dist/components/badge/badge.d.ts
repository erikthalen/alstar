import type { CSSResultGroup } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-badge>
 *
 * @summary Displays useful information or notifications such as a new feature or an unread message count.
 * @documentation https://quietui.org/docs/components/badge
 * @status stable
 * @since 1.0
 *
 * @slot - The badge's content.
 *
 * @cssproperty [--attention-duration=1.5s] - The speed at which the attention animation will run.
 * @cssproperty [--attention-easing=ease] - The easing to use for the attention animation.
 */
export declare class QuietBadge extends QuietElement {
    static styles: CSSResultGroup;
    /** The type of badge to draw. */
    variant: 'neutral' | 'primary' | 'constructive' | 'destructive';
    /** Determines the badges's appearance. */
    appearance: 'normal' | 'outline';
    /** Draws attention to the badge using an animation. */
    attention: 'tap' | 'shake' | 'sparkle';
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-badge': QuietBadge;
    }
}
