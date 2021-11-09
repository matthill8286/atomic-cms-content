import { ReactNode } from 'react';
import { Block, Inline, Text } from '../index';
import { RichTextBlock, RichTextSpan } from './graphcms-richtext';
export declare function defaultInlineUpdated(type: string, node: any): ReactNode;
export declare type CommonNode = Text | Block | Inline | RichTextBlock | RichTextSpan;
export interface NodeRenderer {
    (node: Block | Inline, children: ReactNode): ReactNode;
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