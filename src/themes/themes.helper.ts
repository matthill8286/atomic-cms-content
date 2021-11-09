import {
  lightAtomicTheme,
  lightAlternateTheme,
  greyAtomicTheme,
  greyAlternateTheme,
  darkAtomicTheme,
  darkAlternateTheme,
} from '.'
import { ExtendedThemeType } from './types'

type GetExtendedThemesType = {
  extendedAtomicTheme: ExtendedThemeType
  extendedAlternateTheme: ExtendedThemeType
}

export const getExtendedThemes = (pageTheme?: string | null): GetExtendedThemesType => {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedAtomicTheme: darkAtomicTheme,
        extendedAlternateTheme: darkAlternateTheme,
      }
    case 'grey':
      return {
        extendedAtomicTheme: greyAtomicTheme,
        extendedAlternateTheme: greyAlternateTheme,
      }
    default:
      return {
        extendedAtomicTheme: lightAtomicTheme,
        extendedAlternateTheme: lightAlternateTheme,
      }
  }
}
