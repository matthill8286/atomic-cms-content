import React, { ReactNode } from 'react'
import { appendKeyToValidElement } from './appendKeyToValidElement'
import { CommonNode, Options } from './index'
import { hasValue } from './helpers'

export function nodeListToReactComponents(nodes: CommonNode[], options: Options): ReactNode {
  return nodes.map(
    (node: CommonNode, index: number): ReactNode => {
      return appendKeyToValidElement(nodeToReactComponent(node, options), index)
    }
  )
}

export function nodeToReactComponent(node: any, options: Options): ReactNode {
  const { renderNode, renderText } = options
  if (hasValue(node)) {
    return renderText ? renderText(node?.text) : node.text
  } else {
    const children: ReactNode = nodeListToReactComponents(node.children, options)

    if (!node.type || !renderNode?.[node.type]) {
      return <>{children}</>
    }

    return renderNode[node.type](node, children)
  }
}
