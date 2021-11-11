import { cleanup } from '@testing-library/react'
import * as React from 'react'
import { mountWithTheme } from '@matthill8286/atomic-ui'
import { TextSection } from './index'
import { Elements } from '../../types/richtext'

const mockAnchorId = 'richTextAnchorId'

describe('Landing:Components:TextSection', () => {
  afterEach(cleanup)

  it('renders section with link and label', () => {
    const aliceRichText = {
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
      <TextSection richText={aliceRichText} anchorId={mockAnchorId} />
    )

    const paragraph = textSection.find('p').last()

    console.log(paragraph.text())

    expect(paragraph.text()).toBe(aliceRichText.raw.children[0].children[0].text)
  })
})
