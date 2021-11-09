import { Node, Block, Inline, Text, Mark } from '../index';
/**
 * Checks if the node is an instance of Inline.
 */
export declare function isInline(node: Node): node is Inline;
/**
 * Checks if the node is an instance of Mark.
 */
export declare function isMark(node: Node): node is Mark;
/**
 * Checks if the node is an instance of Block.
 */
export declare function isBlock(node: Node): node is Block;
/**
 * Checks if the node is an instance of Text.
 */
export declare function isText(node: Node): node is Text;
/**
 * Checks if the node is an instance of Text.
 */
export declare function hasValue(node: {
    text?: string;
}): boolean;
//# sourceMappingURL=helpers.d.ts.map