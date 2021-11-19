import { ThemeColors } from '@matthill8286/atomic-ui';
import { RichTextRawDocument } from '../../types/richtext';
export declare type Column = {
    columnTitle?: string;
    columnDescription?: string;
};
export declare type MultiColumnTextSectionSectionProps = {
    columns?: Column[];
    richTextColumns: RichTextRawDocument;
    sectionColor?: ThemeColors;
    active?: boolean;
    anchorId?: string | null;
    textColor: ThemeColors | string;
    primaryColor?: ThemeColors;
};
//# sourceMappingURL=MultiColumnTextSection.types.d.ts.map