import React, { ReactNode } from 'react'
import { nodeToReactComponent } from './nodeListToReactComponents'
import { RichTextBlock, RichTextSpan } from './graphcms-richtext'
import { BLOCKS, MARKS } from '../index'

const defaultNodeRenderers: RenderNode = {
  [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
  [BLOCKS.HEADING_1]: (node, children) => <h1>{children}</h1>,
  [BLOCKS.HEADING_2]: (node, children) => <h2>{children}</h2>,
  [BLOCKS.HEADING_3]: (node, children) => <h3>{children}</h3>,
  [BLOCKS.HEADING_4]: (node, children) => <h4>{children}</h4>,
  [BLOCKS.HEADING_5]: (node, children) => <h5>{children}</h5>,
  [BLOCKS.HEADING_6]: (node, children) => <h6>{children}</h6>,
  [BLOCKS.UL_LIST]: (node, children) => <ul>{children}</ul>,
  [BLOCKS.OL_LIST]: (node, children) => <ol>{children}</ol>,
  [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  [BLOCKS.QUOTE]: (node, children) => <blockquote>{children}</blockquote>,
  [BLOCKS.HR]: () => <hr />,
}

const defaultModifierRenderers: RenderModifier = {
  [MARKS.BOLD]: text => <b>{text}</b>,
  [MARKS.ITALIC]: text => <i>{text}</i>,
  [MARKS.UNDERLINE]: text => <u>{text}</u>,
  [MARKS.CODE]: text => <code>{text}</code>,
}

export function defaultInlineUpdated(
  type: string,
  node: { key: string | number | undefined; type: React.ReactNode }
): ReactNode {
  return <span key={node.key}>{node.type}</span>
}

export type CommonNode = Text | RichTextBlock | RichTextSpan

export interface NodeRenderer {
  (node: any, children: ReactNode): ReactNode
}

export interface RenderNode {
  [k: string]: NodeRenderer
}

export interface RenderModifier {
  [k: string]: (text: ReactNode) => ReactNode
}

export interface RenderText {
  (text: string): ReactNode
}

export interface Options {
  /**
   * Node renderers
   */
  renderNode?: RenderNode
  /**
   * Modifier renderers
   */
  renderModifier?: RenderModifier
  /**
   * Text renderer
   */
  renderText?: RenderText
}

/**
 * Serialize a GraphCms Rich Text `document` to React tree
 */
export function documentToReactComponents(
  richTextDocument: CommonNode,
  options: Options = {}
): ReactNode {
  if (!richTextDocument) {
    return null
  }

  return nodeToReactComponent(richTextDocument, {
    renderNode: {
      ...defaultNodeRenderers,
      ...options.renderNode,
    },
    renderModifier: {
      ...defaultModifierRenderers,
      ...options.renderModifier,
    },
    renderText: options.renderText,
  })
}
