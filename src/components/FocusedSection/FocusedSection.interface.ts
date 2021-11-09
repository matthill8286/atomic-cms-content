import { ThemeColors } from '@matthill8286/atomic-ui'
import { Raw } from '../../types/richtext/graphcms-richtext'
import { ProfileSectionProps } from '../ProfileTileColumns/ProfileTileColumns.interface'

export interface FocusedSectionInterface {
  title: Raw
  description: Raw
  profileSections: ProfileSectionProps[]
  profileTitle?: string
  profileBrandedLabel?: string
  learningAssetMeta: LearningMetaInterface
  sectionColor?: ThemeColors
  paddingTop?: string
  paddingBottom: string
}

export interface LearningMetaInterface {
  /** Used for the landing event pages only */
  staticLengthValue: string
  /** Used for the landing event pages only */
  launchButtonLabel: string
  /** Used for the landing event pages only */
  staticCompetencyValue: string
  /** Used for the landing event pages only */
  staticTypeValue: string
  /** Used for the landing event pages only */
  staticProviderValue: string
}
