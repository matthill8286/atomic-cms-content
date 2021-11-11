import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { themes } from '@storybook/theming'
import * as React from 'react'
import { MemoryRouter } from 'react-router'
import { withThemesProvider } from 'themeprovider-storybook'
import {
  GlobalStyle,
  saiyanTheme as atomicStyles,
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

const clientSkins = [atomicTheme, alternateTheme]

const withGlobal = content => (
  <React.Fragment>
    <GlobalStyle />
    <MemoryRouter initialEntries={['/']}>{content()}</MemoryRouter>
  </React.Fragment>
)

export const parameters = {
  options: {
    panelPosition: 'bottom',
    theme: themes.light,
  },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } },
}

export const decorators = [
  withKnobs,
  withGlobal,
  withInfo({
    header: false,
    inline: true,
  }),
  withThemesProvider(clientSkins),
]
