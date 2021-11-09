import React from 'react';
import { appendKeyToValidElement } from "./appendKeyToValidElement";
import { hasValue } from "./helpers";
export function nodeListToReactComponents(nodes, options) {
  return nodes.map(function (node, index) {
    return appendKeyToValidElement(nodeToReactComponent(node, options), index);
  });
}
export function nodeToReactComponent(node, options) {
  var renderNode = options.renderNode,
      renderModifier = options.renderModifier,
      renderText = options.renderText;

  if (hasValue(node)) {
    return renderText ? renderText(node === null || node === void 0 ? void 0 : node.text) : node.text;
  } else {
    var children = nodeListToReactComponents(node.children, options);

    if (!node.type || !renderNode[node.type]) {
      return React.createElement(React.Fragment, null, children);
    }

    return renderNode[node.type](node, children);
  }
}
//# sourceMappingURL=nodeListToReactComponents.js.map