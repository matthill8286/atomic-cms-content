import React from 'react'
import { ExtendedThemeType } from './types'

export type ExtendedThemeProviderProps = {
  children: React.ReactNode
  extendedAtomicTheme: ExtendedThemeType
  extendedAlternateTheme: ExtendedThemeType
}
