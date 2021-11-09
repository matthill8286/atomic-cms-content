import * as React from 'react';

export enum Elements {
  heading1 = 'heading-one',
  heading2 = 'heading-two',
  heading3 = 'heading-three',
  heading4 = 'heading-four',
  heading5 = 'heading-five',
  heading6 = 'heading-six',
  paragraph = 'paragraph',
  preformatted = 'preformatted',
  strong = 'strong',
  em = 'em',
  listItem = 'list-item',
  listItemChild = 'list-item-child',
  list = 'bulleted-list',
  oList = 'numbered-list',
  image = 'image',
  embed = 'iframe',
  hyperlink = 'link',
  label = 'label',
  span = 'span',
}

type Link = {
  // eslint-disable-next-line camelcase
  link_type?: 'link';
  url?: string;
  target?: string;
  id?: string;
  uid?: string;
  isBroken?: boolean;
  lang?: string;
  slug?: string;
  tags?: string[];
  type?: string;
  height?: string;
  kind?: string;
  name?: string;
  size?: string;
  width?: string;
};

export type NodeChild = {
  text?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  id?: string;
  rel?: string;
  href?: string;
  src?: string;
  type?: string;
  title?: string;
  width?: number;
  height?: number;
  handle?: string;
  mimeType?: string;
  className?: string;
  openInNewTab?: boolean;
  children?: RichTextBlock[] | RichTextSpan[];
};

export type RichTextSpan = {
  type?: Elements.strong | Elements.hyperlink | Elements.em | Elements.label;
  children?: NodeChild[];
};

export type RichTextBlock = {
  type: Elements | string;
  children?: NodeChild[];
};

export type HTMLSerializer<T> = (
  type: Elements,
  element: any,
  text: string,
  children: T[],
  key: string
) => T | null;

export interface RichTextProps {
  Component?: React.ReactNode;
  elements?: {};
  htmlSerializer?: HTMLSerializer<React.ReactNode>;
  linkResolver?: LinkResolver;
  render?: RichTextBlock[];
  renderAsText?: any;
  serializeHyperlink?: HTMLSerializer<React.ReactNode>;
}

export type LinkResolver = (doc: any) => string;

interface LinkProps {
  url(link: any, linkResolver?: LinkResolver): string;
}
