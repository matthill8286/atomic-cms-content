import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { create } from '@storybook/theming'
import * as React from 'react'
import StoryRouter from 'storybook-react-router'
import { withThemesProvider } from 'themeprovider-storybook'

import {
  GlobalStyle,
  atomicTheme as atomicStyles,
  alternateTheme as alternateStyles,
} from '@matthill8286/atomic-ui'

const newViewports = {
  forPreview: {
    name: 'For Preview',
    styles: {
      width: '375px',
      height: '100%',
    },
  },
  xsView: {
    name: 'XS View',
    styles: {
      width: '511px',
      height: '100%',
    },
  },
  smView: {
    name: 'SM View',
    styles: {
      width: '751px',
      height: '100%',
    },
  },
  mdView: {
    name: 'MD View',
    styles: {
      width: '1007px',
      height: '100%',
    },
  },
  lgView: {
    name: 'LG View',
    styles: {
      width: '1231px',
      height: '100%',
    },
  },
  xlView: {
    name: 'XL View',
    styles: {
      width: '1471px',
      height: '100%',
    },
  },
}

const atomicTheme = {
  name: 'Atomic',
  ...atomicStyles,
}

const alternateTheme = {
  name: 'Alternate',
  ...alternateStyles,
}

const themes = [atomicTheme, alternateTheme]

const withGlobal = content => (
  <React.Fragment>
    <GlobalStyle />
    {content()}
  </React.Fragment>
)

export const parameters = {
  docs: {
    panelPosition: 'right',
    theme: create({ base: 'light' }),
  },
  options: {
    storySort: {
      method: 'alphabetical',
    },
  },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } },
}

export const decorators = [StoryRouter(), withThemesProvider(themes), withGlobal]
