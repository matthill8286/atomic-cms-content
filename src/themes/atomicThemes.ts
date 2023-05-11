import { saiyanTheme } from '@matthill8286/atomic-ui'
import { ExtendedThemeType } from './types'

export const lightsaiyanTheme: ExtendedThemeType = {
  ...saiyanTheme,
  color: {
    ...saiyanTheme.color,
    transparent: 'transparent',
    contrastColor: saiyanTheme.color.black,
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'black',
    },
    content: {
      textColor: 'black',
      backgroundColor: 'white',
      borderColor: 'grey2',
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
}

export const greysaiyanTheme: ExtendedThemeType = {
  ...saiyanTheme,
  color: {
    ...saiyanTheme.color,
    transparent: 'transparent',
    textColor: saiyanTheme.color.white,
    backgroundColor: saiyanTheme.color.grey5,
    surfaceColor: saiyanTheme.color.grey5,
    contrastColor: '#454647',
  },
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white',
    },
    content: {
      textColor: 'white',
      backgroundColor: 'grey5',
      borderColor: saiyanTheme.color.grey5,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
}

export const darksaiyanTheme: ExtendedThemeType = {
  ...saiyanTheme,
  color: {
    ...saiyanTheme.color,
    transparent: 'transparent',
    textColor: saiyanTheme.color.white,
    backgroundColor: saiyanTheme.color.black,
    surfaceColor: saiyanTheme.color.black,
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
      borderColor: saiyanTheme.color.black,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
}
