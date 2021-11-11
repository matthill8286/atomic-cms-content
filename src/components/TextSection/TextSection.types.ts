import { ExtendedThemeColorType } from '../../themes'

export type TextSectionProps = {
  richText: any
  active?: boolean
  anchorId?: string | null
  sectionColor?: ExtendedThemeColorType
  textColor?: ExtendedThemeColorType
  headingsBold?: boolean
  headingColor?: ExtendedThemeColorType
  branded?: boolean
  title?: string
  paddingTop?: string
  paddingBottom?: string
  withHeading?: boolean
}

export type FootnotesSectionType = {
  type: string | null
  footnotesText: any | null
  anchorId: string | null
}
