import {ThemeColors} from '@matthill8286/atomic-ui';
import {RichTextBlock} from '../../types';

export type Column = {
  columnTitle?: string;
  columnDescription?: string;
};

export type MultiColumnTextSectionSectionProps = {
  columns?: Array<Column>;
  richTextColumns: RichTextBlock[];
  sectionColor?: ThemeColors;
  active?: boolean;
  anchorId?: string | null;
  textColor: ThemeColors | string;
  primaryColor?: ThemeColors;
};
