import {Node, Block, Inline, Text, INLINES, BLOCKS, Mark} from '../index';

/**
 * Checks if the node is an instance of Inline.
 */
export function isInline(node: Node): node is Inline {
  // @ts-expect-error
  return Object.values(INLINES).includes(node);
}

/**
 * Checks if the node is an instance of Mark.
 */
export function isMark(node: Node): node is Mark {
  const keysOf = Object.keys(node);
  const valuesOf = Object.values(INLINES);
  // @ts-expect-error
  const intersection = keysOf.filter(element => valuesOf.includes(element));
  return intersection.length >= 0;
}

/**
 * Checks if the node is an instance of Block.
 */
export function isBlock(node: Node): node is Block {
  // @ts-expect-error
  return Object.values(BLOCKS).includes(node.type);
}

/**
 * Checks if the node is an instance of Text.
 */
export function isText(node: Node): node is Text {
  return node.type === 'text';
}

/**
 * Checks if the node is an instance of Text.
 */
export function hasValue(node: {text?: string}) {
  return node.text !== undefined || typeof node.text === 'string';
}
