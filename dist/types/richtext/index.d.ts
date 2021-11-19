import React, { ReactNode } from 'react';
import { RichTextBlock, RichTextSpan } from './graphcms-richtext';
export * from './graphcms-richtext';
export declare function defaultInlineUpdated(type: string, node: {
    key: string | number | undefined;
    type: React.ReactNode;
}): ReactNode;
export declare type CommonNode = Text | RichTextBlock | RichTextSpan;
export interface NodeRenderer {
    (node: any, children: ReactNode): ReactNode;
}
export interface RenderNode {
    [k: string]: NodeRenderer;
}
export interface RenderModifier {
    [k: string]: (text: ReactNode) => ReactNode;
}
export interface RenderText {
    (text: string): ReactNode;
}
export interface Options {
    /**
     * Node renderers
     */
    renderNode?: RenderNode;
    /**
     * Modifier renderers
     */
    renderModifier?: RenderModifier;
    /**
     * Text renderer
     */
    renderText?: RenderText;
}
/**
 * Serialize a GraphCms Rich Text `document` to React tree
 */
export declare function documentToReactComponents(richTextDocument: CommonNode, options?: Options): ReactNode;
//# sourceMappingURL=index.d.ts.map