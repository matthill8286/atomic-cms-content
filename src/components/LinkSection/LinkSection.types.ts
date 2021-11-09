import { ExtendedThemeColorType } from '../../themes'

export type LinkSectionProps = {
  label?: string | null
  link?: {
    url: string | null
    target?: string | null
  } | null
  anchorId?: string | null
  onClick?: () => void
  textColor?: ExtendedThemeColorType
  sectionColor?: ExtendedThemeColorType
  decorationColor?: ExtendedThemeColorType
}
