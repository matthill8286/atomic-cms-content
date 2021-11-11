import * as React from 'react'
import { ThemeColors } from '@matthill8286/atomic-ui'
import { ExtendedThemeColorType } from '../../themes'
import { RichTextRawDocument } from '../../types/richtext'

export enum AccordionSchemaType {
  None = 'none',
  Faq = 'FAQPage',
}

export type AccordionSectionFieldType = {
  entryHeadline: RichTextRawDocument | null
  entryContent: RichTextRawDocument | null
  anchorId?: string | null
}

export interface AccordionEntryObject {
  details: React.ReactNode
  title: React.ReactNode
}

export type AccordionSectionProps = {
  entries?: AccordionSectionFieldType[]
  sectionColor?: ExtendedThemeColorType
  textColor?: ThemeColors
  customAccordionEntries?: AccordionEntryObject[]
  schemaType?: AccordionSchemaType
  withIconsOnRight?: boolean
  isLarge?: boolean
}

export type AccordionSectionHeadline = RichTextRawDocument

export type StyledAccordionWrapperProps = {
  textColor?: ThemeColors
}
