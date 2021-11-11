import { RichTextRawDocument } from '../../types/richtext/graphcms-richtext'

export type Image = {
  url?: string
  altText?: string
}

export interface ContactSectionProps {
  contactImage: Image
  contactHeading?: string
  richTextContactSection: RichTextRawDocument
  sectionColor?: string
  paddingTop?: string
  paddingBottom?: string
}
