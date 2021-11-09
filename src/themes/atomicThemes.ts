import { atomicTheme } from '@matthill8286/atomic-ui'
import { ExtendedThemeType } from './types'

export const lightAtomicTheme: ExtendedThemeType = {
  ...atomicTheme,
  color: {
    ...atomicTheme.color,
    transparent: 'transparent',
    contrastColor: atomicTheme.color.black,
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

export const greyAtomicTheme: ExtendedThemeType = {
  ...atomicTheme,
  color: {
    ...atomicTheme.color,
    transparent: 'transparent',
    textColor: atomicTheme.color.white,
    backgroundColor: atomicTheme.color.grey5,
    surfaceColor: atomicTheme.color.grey5,
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
      borderColor: atomicTheme.color.grey5,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
}

export const darkAtomicTheme: ExtendedThemeType = {
  ...atomicTheme,
  color: {
    ...atomicTheme.color,
    transparent: 'transparent',
    textColor: atomicTheme.color.white,
    backgroundColor: atomicTheme.color.black,
    surfaceColor: atomicTheme.color.black,
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
      borderColor: atomicTheme.color.black,
    },
    endOfPage: {
      textColor: 'black',
      backgroundColor: 'grey1',
    },
  },
}
