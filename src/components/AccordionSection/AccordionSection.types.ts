import * as React from 'react';
import {ThemeColors} from '@matthill8286/atomic-ui';
import {ExtendedThemeColorType} from '../../themes';
import {Raw} from '../../types/richtext/graphcms-richtext';

export enum AccordionSchemaType {
  None = 'none',
  Faq = 'FAQPage',
}

export type AccordionSectionFieldType = {
  entryHeadline: Raw | null;
  entryContent: Raw | null;
  anchorId?: string | null;
};

export interface AccordionEntryObject {
  details: React.ReactNode;
  title: React.ReactNode;
}

export type AccordionSectionProps = {
  entries?: AccordionSectionFieldType[];
  sectionColor?: ExtendedThemeColorType;
  textColor?: ThemeColors;
  customAccordionEntries?: AccordionEntryObject[];
  schemaType?: AccordionSchemaType;
  withIconsOnRight?: boolean;
  isLarge?: boolean;
};

export type AccordionSectionHeadline = {
  type: string;
  children: [{text: string}];
};

export type StyledAccordionWrapperProps = {
  textColor?: ExtendedThemeColorType;
};
