import {ExtendedThemeColorType} from '../../themes';

export type TextSectionProps = {
  richText: any[];
  active?: boolean;
  anchorId?: string | null;
  sectionColor?: ExtendedThemeColorType;
  textColor?: ExtendedThemeColorType;
  primaryColor?: ExtendedThemeColorType;
  headingsBold?: boolean;
  headingColor?: ExtendedThemeColorType;
  branded?: boolean;
  title?: string;
  paddingTop?: string;
  paddingBottom?: string;
  type?: string;
};

export type FootnotesSectionType = {
  type: string | null;
  footnotesText: any | null;
  anchorId: string | null;
};
