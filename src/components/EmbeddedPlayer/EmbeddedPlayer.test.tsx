import React from 'react'
import { renderWithTheme } from '@matthill8286/atomic-ui'
import { EmbeddedPlayer } from './EmbeddedPlayer'

describe('EmbeddedPlayer', () => {
  it('shows a youtube video', () => {
    const tree = renderWithTheme(
      <EmbeddedPlayer embedUrl="https://www.youtube.com/embed/TeQ_TTyLGMs" />
    )
    expect(tree).toMatchSnapshot()
  })
})
