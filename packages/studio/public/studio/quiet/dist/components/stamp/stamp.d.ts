import type { CSSResultGroup, PropertyValues } from 'lit';
import { QuietElement } from '../../utilities/quiet-element.js';
/**
 * <quiet-stamp>
 *
 * @summary Renders templates with simple expressions, logic, and custom data.
 * @documentation https://quietui.org/docs/components/stamp
 * @status experimental
 * @since 1.0
 */
export declare class QuietStamp extends QuietElement {
    static styles: CSSResultGroup;
    /** The ID of the `<template>` element to use as a stamp. */
    template: string;
    /**
     * When true, the stamped content will replace the `<quiet-stamp>` element instead of being appended to it. This can
     * be useful for controlling exactly what appears in the DOM, but it can also be confusing for developers who may not
     * understand how the stamped content was generated.
     */
    replace: boolean;
    updated(changedProperties: PropertyValues<this>): void;
    /** A helper to determine if an expression has HTML content */
    private isHtmlExpression;
    /** Determines if a value is truthy by our own definition. */
    private isTruthy;
    /** Process expressions within a text string */
    private processExpressions;
    /** Processes the associated template and renders it to the DOM. */
    renderTemplate(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'quiet-stamp': QuietStamp;
    }
}
