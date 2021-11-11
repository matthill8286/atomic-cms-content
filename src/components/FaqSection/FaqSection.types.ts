import { RichTextRawDocument } from '../../types/richtext'
import { AccordionSectionFieldType } from '../AccordionSection'

export type FaqEntryType = {
  entryHeadline: RichTextRawDocument | null
  entryContent: RichTextRawDocument | null
  anchorId: string | null
}

export type FAQSectionProps = {
  entries: AccordionSectionFieldType[]
  headline?: RichTextRawDocument
}
