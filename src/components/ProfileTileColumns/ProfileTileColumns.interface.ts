import { RichTextBlock } from '../../types/richtext'

export type RichTextRawDocument = {
  raw: RichTextBlock
}

type ImageUrl = {
  url: string
  altText?: string
}

export interface ProfileSectionProps {
  profileAvatar?: ImageUrl
  profileInformation?: RichTextRawDocument
}

export interface ProfileSectionsProps {
  profileSections?: ProfileSectionProps[]
  title?: string
  label?: string
  sectionColor?: string
  paddingTop?: string
  paddingBottom?: string
}
