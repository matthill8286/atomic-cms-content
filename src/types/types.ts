import BLOCKS from './blocks';
import INLINES from './inlines';
import {TopLevelBlockEnum} from './schemaConstraints';
/**
 * @additionalProperties true
 */
export declare type NodeData = Record<string, any>;
export interface Node {
  readonly type: string;
}
export interface Block extends Node {
  type: BLOCKS;
  children: Array<Block | Inline | Text>;
}
export interface Inline extends Node {
  type: INLINES;
  children: Array<Inline | Text>;
}
export interface TopLevelBlock extends Block {
  type: TopLevelBlockEnum;
}
export interface Document extends Node {
  type: BLOCKS.DOCUMENT;
  children: TopLevelBlock[];
}
export interface Text extends Node {
  text?: string;
}
export interface Mark {
  type: string;
}
