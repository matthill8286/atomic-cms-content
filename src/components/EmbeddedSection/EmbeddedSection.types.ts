import {ThemeColors} from '@matthill8286/atomic-ui';
import {Raw, RichTextBlock} from '../../types/richtext/graphcms-richtext';

export interface EmbeddedSectionProps {
  embeddedSection: Raw;
  sectionColor?: ThemeColors;
  title?: string;
  sectionHeight?: string;
}
