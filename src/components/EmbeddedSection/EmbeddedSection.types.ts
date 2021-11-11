import { ThemeColors } from '@matthill8286/atomic-ui'
import { RichTextRawDocument } from '../../types/richtext'

export interface EmbeddedSectionProps {
  embeddedSection: RichTextRawDocument
  sectionColor?: ThemeColors
  title?: string
  sectionHeight?: string
}
