import React, {ReactNode} from 'react';
import {appendKeyToValidElement} from './appendKeyToValidElement';
import {hasValue} from './helpers';
import {CommonNode, Options} from './index';
import {RichTextBlock} from './graphcms-richtext';

export function nodeListToReactComponents(
  nodes: CommonNode[],
  options: Options
): ReactNode {
  return nodes.map(
    (node: CommonNode, index: number): ReactNode => {
      return appendKeyToValidElement(
        nodeToReactComponent(node, options),
        index
      );
    }
  );
}

export function nodeToReactComponent(
  node: RichTextBlock | CommonNode,
  options: Options
): ReactNode {
  const {renderNode, renderModifier, renderText} = options;
  if (hasValue(node)) {
    // @ts-ignore
    return renderText ? renderText(node?.text) : node.text;
  } else {
    const children: ReactNode = nodeListToReactComponents(
      // @ts-ignore
      node.children,
      options
    );

    // @ts-ignore
    if (!node.type || !renderNode[node.type]) {
      return <>{children}</>;
    }

    // @ts-ignore
    return renderNode[node.type](node, children);
  }
}
