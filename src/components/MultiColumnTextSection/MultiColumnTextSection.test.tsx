import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { CopyText, mountWithTheme } from '@matthill8286/atomic-ui'
import { MultiColumnTextSection } from './index'
import { Elements, RichTextRawDocument } from '../../types/richtext'

const mockAnchorId = 'richTextAnchorId'

describe('Landing:Components:TextSection', () => {
  afterEach(cleanup)

  it('renders section with link and label', () => {
    const aliceRichText: RichTextRawDocument = {
      raw: {
        children: [
          {
            type: Elements.paragraph,
            children: [
              {
                text:
                  'At Alternate we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principle',
              },
            ],
          },
        ],
      },
    }
    const textSection = mountWithTheme(
      <MultiColumnTextSection
        textColor="grey5"
        richTextColumns={aliceRichText}
        anchorId={mockAnchorId}
      />
    )
    const paragraph = textSection.find(CopyText).last()
    // @ts-ignore
    expect(paragraph.text()).toBe(aliceRichText.raw.children[0].children[0].text)
  })
})
