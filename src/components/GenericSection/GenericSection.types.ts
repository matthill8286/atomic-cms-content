import {Document} from '../../types/richtext/graphcms-richtext';

export interface GenericSectionProps {
  featureImage?: string;
  richTextSections?: Document[];
  sectionColor?: string;
  topTitle?: string;
  description?: string;
  paddingTop?: string;
  paddingBottom?: string;
}
