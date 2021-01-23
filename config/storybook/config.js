import { withInfo } from '@storybook/addon-info'
import { withKnobs } from '@storybook/addon-knobs'
import { configureViewport, INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import { addDecorator, addParameters, configure } from '@storybook/react'
import { create } from '@storybook/theming'
import * as React from 'react'
import StoryRouter from 'storybook-react-router'
import { withThemesProvider } from 'themeprovider-storybook'
import { GlobalStyle } from '../../src/styles/sc-global'
import { mmTheme as mmStyles } from '../../src/styles/sc-vars-mm'
import { seTheme as seStyles } from '../../src/styles/sc-vars-se'

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

const mmTheme = {
  name: 'MediaMarkt',
  ...mmStyles,
}

const seTheme = {
  name: 'Saturn',
  ...seStyles,
}

const themes = [mmTheme, seTheme]

const withGlobal = content => (
  <React.Fragment>
    <GlobalStyle />
    {content()}
  </React.Fragment>
)

function loadStories() {
  const req = require.context('../../src', true, /\.story\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

addDecorator(
  withInfo({
    header: false,
    inline: true,
  })
)

addParameters({
  options: {
    panelPosition: 'right',
    theme: create({ base: 'dark' }),
  },
  viewport: { viewports: { ...INITIAL_VIEWPORTS, ...newViewports } },
})

addDecorator(withKnobs)
addDecorator(StoryRouter())
addDecorator(withThemesProvider(themes))
addDecorator(withGlobal)

configureViewport({
  defaultViewport: 'iphonex',
})

configure(loadStories, module)
