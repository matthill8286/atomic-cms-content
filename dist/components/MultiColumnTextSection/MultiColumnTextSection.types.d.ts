import { ThemeColors } from '@matthill8286/atomic-ui';
import { RichTextBlock } from '../../types';
export declare type Column = {
    columnTitle?: string;
    columnDescription?: string;
};
export declare type MultiColumnTextSectionSectionProps = {
    columns?: Array<Column>;
    richTextColumns: RichTextBlock[];
    sectionColor?: ThemeColors;
    active?: boolean;
    anchorId?: string | null;
    textColor: ThemeColors | string;
    primaryColor?: ThemeColors;
};
//# sourceMappingURL=MultiColumnTextSection.types.d.ts.map