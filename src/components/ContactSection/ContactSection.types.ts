import {Raw} from '../../types/richtext/graphcms-richtext';

export type Image = {
  url?: string;
  altText?: string;
};

export interface ContactSectionProps {
  contactImage: Image;
  contactHeading?: string;
  richTextContactSection: Raw;
  sectionColor?: string;
  paddingTop?: string;
  paddingBottom?: string;
}
