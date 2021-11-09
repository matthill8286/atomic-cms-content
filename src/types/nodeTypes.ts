import {Block, Inline, Text, TopLevelBlock} from './types';
import BLOCKS from './blocks';
import INLINES from './inlines';
declare type EmptyNodeData = {};
export interface Heading1 extends Block {
  type: BLOCKS.HEADING_1;
  children: Array<Inline | Text>;
}
export interface Heading2 extends Block {
  type: BLOCKS.HEADING_2;
  children: Array<Inline | Text>;
}
export interface Heading3 extends Block {
  type: BLOCKS.HEADING_3;
  children: Array<Inline | Text>;
}
export interface Heading4 extends Block {
  type: BLOCKS.HEADING_4;
  children: Array<Inline | Text>;
}
export interface Heading5 extends Block {
  type: BLOCKS.HEADING_5;
  children: Array<Inline | Text>;
}
export interface Heading6 extends Block {
  type: BLOCKS.HEADING_6;
  children: Array<Inline | Text>;
}
export interface Paragraph extends Block {
  type: BLOCKS.PARAGRAPH;
  children: Array<Inline | Text>;
}
export interface Quote extends Block {
  type: BLOCKS.QUOTE;
  children: Paragraph[];
}
export interface Hr extends Block {
  type: BLOCKS.HR;
  /**
   *
   * @maxItems 0
   */
  children: Array<Inline | Text>;
}
export interface OrderedList extends Block {
  type: BLOCKS.OL_LIST;
  children: ListItem[];
}
export interface UnorderedList extends Block {
  type: BLOCKS.UL_LIST;
  children: ListItem[];
}
export interface ListItem extends Block {
  type: BLOCKS.LIST_ITEM;
  children: TopLevelBlock[];
}
export interface Link<T extends string = string> {
  type: 'link';
  linkType?: T;
  id: string;
}

export interface AssetLinkBlock extends Block {
  type: BLOCKS.EMBEDDED_ASSET;
  target: Link<'Asset'>;
  /**
   *
   * @maxItems 0
   */
  children: Array<Inline | Text>;
}
export interface MediaLinkBlock extends Block {
  type: BLOCKS.EMBEDDED_MEDIA;
  target: Link<'Media'>;
  /**
   *
   * @maxItems 0
   */
  children: Array<Inline | Text>;
}
export interface Hyperlink extends Inline {
  type: INLINES.HYPERLINK;
  data: {
    uri: string;
  };
  children: Text[];
}

export {};
