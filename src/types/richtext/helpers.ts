import { INLINES, BLOCKS } from '../index'
import { NodeChild } from './graphcms-richtext'

/**
 * Checks if the node is an instance of Inline.
 */
export function isInline(node: NodeChild) {
  // @ts-expect-error
  return Object.values(INLINES).includes(node)
}

/**
 * Checks if the node is an instance of Mark.
 */
export function isMark(node: NodeChild) {
  const keysOf = Object.keys(node)
  const valuesOf = Object.values(INLINES)
  // @ts-expect-error
  const intersection = keysOf.filter(element => valuesOf.includes(element))
  return intersection.length >= 0
}

/**
 * Checks if the node is an instance of Block.
 */
export function isBlock(node: NodeChild) {
  // @ts-expect-error
  return Object.values(BLOCKS).includes(node.type)
}

/**
 * Checks if the node is an instance of Text.
 */
export function isText(node: NodeChild) {
  return node.type === 'text'
}

/**
 * Checks if the node is an instance of Text.
 */
export function hasValue(node: NodeChild) {
  return node.text !== undefined || typeof node.text === 'string'
}
