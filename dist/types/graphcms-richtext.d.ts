import * as React from 'react';
export declare enum Elements {
    heading1 = "heading-one",
    heading2 = "heading-two",
    heading3 = "heading-three",
    heading4 = "heading-four",
    heading5 = "heading-five",
    heading6 = "heading-six",
    paragraph = "paragraph",
    preformatted = "preformatted",
    strong = "strong",
    em = "em",
    listItem = "list-item",
    listItemChild = "list-item-child",
    list = "bulleted-list",
    oList = "numbered-list",
    image = "image",
    embed = "iframe",
    hyperlink = "link",
    label = "label",
    span = "span"
}
export declare type NodeChild = {
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
export declare type RichTextSpan = {
    type?: Elements.strong | Elements.hyperlink | Elements.em | Elements.label;
    children?: NodeChild[];
};
export declare type RichTextBlock = {
    type: Elements | string;
    children?: NodeChild[];
};
export declare type HTMLSerializer<T> = (type: Elements, element: any, text: string, children: T[], key: string) => T | null;
export interface RichTextProps {
    Component?: React.ReactNode;
    elements?: {};
    htmlSerializer?: HTMLSerializer<React.ReactNode>;
    linkResolver?: LinkResolver;
    render?: RichTextBlock[];
    renderAsText?: any;
    serializeHyperlink?: HTMLSerializer<React.ReactNode>;
}
export declare type LinkResolver = (doc: any) => string;
//# sourceMappingURL=graphcms-richtext.d.ts.map