/**
 * Map of all GraphCms block types. Blocks contain inline or block nodes.
 */
export enum BLOCKS {
  DOCUMENT = 'document',
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading-one',
  HEADING_2 = 'heading-two',
  HEADING_3 = 'heading-three',
  HEADING_4 = 'heading-four',
  HEADING_5 = 'heading-five',
  HEADING_6 = 'heading-six',
  OL_LIST = 'numbered-list',
  UL_LIST = 'bulleted-list',
  LIST_ITEM = 'list-item',
  LIST_ITEM_CHILD = 'list-item-child',
  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ASSET = 'image',
  EMBEDDED_MEDIA = 'iframe',
  TABLE = 'table',
  TABLE_HEAD = 'table_head',
  TABLE_BODY = 'table_body',
  TABLE_ROW = 'table_row',
  TABLE_CELL = 'table_cell',
}

export default BLOCKS;
