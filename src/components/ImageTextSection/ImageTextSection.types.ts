import { ExtendedThemeColorType } from '../../themes'

export type ImageTextSectionType = {
  type: string | null
  fields: ImageAndTextSectionField[] | null
}

export type ImageAndTextSectionField = {
  titleInternal: any | null
  imageAlignment: string | null
  text: any | null
  image: any | null
  anchorId: string | null
}

export interface ImageTextSectionProps {
  imageAndTextFields: ImageAndTextSectionField[]
  sectionColor?: ExtendedThemeColorType
  textColor?: ExtendedThemeColorType
  primaryColor?: ExtendedThemeColorType
}
