import {RichTextBlock} from '../../types';

export type FaqEntryType = {
  question: RichTextBlock[];
  answer: RichTextBlock[];
  anchorId: string | null;
}[];

export type FAQSectionProps = {
  entries: FaqEntryType[];
  headline?: RichTextBlock[];
};
