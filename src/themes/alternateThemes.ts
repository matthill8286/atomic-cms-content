import { alternateTheme } from '@matthill8286/atomic-ui'
import { ExtendedThemeType } from './types'

export const lightAlternateTheme: ExtendedThemeType = {
  ...alternateTheme,
  color: {
    ...alternateTheme.color,
    transparent: 'transparent',
    contrastColor: alternateTheme.color.black,
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'black',
    },
    content: {
      textColor: 'grey5',
      backgroundColor: 'grey1',
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2',
    },
  },
}

export const greyAlternateTheme: ExtendedThemeType = {
  ...alternateTheme,
  color: {
    ...alternateTheme.color,
    grey4: '#3a3836',
    transparent: 'transparent',
    textColor: alternateTheme.color.white,
    backgroundColor: '#3a3836',
    surfaceColor: '#3a3836',
    contrastColor: '#454647',
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white',
    },
    content: {
      textColor: 'white',
      backgroundColor: 'grey4',
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2',
    },
  },
}

export const darkAlternateTheme: ExtendedThemeType = {
  ...alternateTheme,
  color: {
    ...alternateTheme.color,
    transparent: 'transparent',
    textColor: alternateTheme.color.white,
    backgroundColor: alternateTheme.color.black,
    surfaceColor: alternateTheme.color.black,
    contrastColor: '#454647',
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white',
    },
    content: {
      textColor: 'white',
      backgroundColor: 'black',
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2',
    },
  },
}
