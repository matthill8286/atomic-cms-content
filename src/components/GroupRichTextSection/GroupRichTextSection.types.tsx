import { ThemeColors } from '@matthill8286/atomic-ui'

export type GroupRichTextFieldType = {
  textField: any | null
  title: any | null
}

export interface GroupRichTextSectionProps {
  fields: GroupRichTextFieldType[]
  sectionColor: ThemeColors
  anchorId: string | null
}
