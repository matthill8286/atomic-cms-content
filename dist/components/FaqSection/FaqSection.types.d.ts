import { RichTextRawDocument } from '../../types/richtext';
import { AccordionSectionFieldType } from '../AccordionSection';
export declare type FaqEntryType = {
    entryHeadline: RichTextRawDocument | null;
    entryContent: RichTextRawDocument | null;
    anchorId: string | null;
};
export declare type FAQSectionProps = {
    entries: AccordionSectionFieldType[];
    headline?: RichTextRawDocument;
};
//# sourceMappingURL=FaqSection.types.d.ts.map