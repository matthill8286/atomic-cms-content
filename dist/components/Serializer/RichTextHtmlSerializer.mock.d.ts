import { Elements, NodeChild, RichTextBlock } from '../../types/richtext';
export declare const getHeadline: (level?: string, tag?: string) => RichTextBlock;
export declare const getParagraph: () => RichTextBlock;
export declare const getStrongParagraph: () => RichTextBlock;
export declare const getEmParagraph: () => {
    type: Elements;
    children: {
        type: string;
        children: {
            text: string;
            italic: boolean;
        }[];
    }[];
};
export declare const getUrlParagraph: () => RichTextBlock;
export declare const getImage: () => NodeChild;
export declare const getListItem: () => RichTextBlock;
//# sourceMappingURL=RichTextHtmlSerializer.mock.d.ts.map