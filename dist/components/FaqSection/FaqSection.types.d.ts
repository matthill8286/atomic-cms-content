import { RichTextBlock } from '../../types';
export declare type FaqEntryType = {
    question: RichTextBlock[];
    answer: RichTextBlock[];
    anchorId: string | null;
}[];
export declare type FAQSectionProps = {
    entries: FaqEntryType[];
    headline?: RichTextBlock[];
};
//# sourceMappingURL=FaqSection.types.d.ts.map