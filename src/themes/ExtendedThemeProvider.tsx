import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeProvider, Theme, FILTERED, DANONE } from '@matthill8286/atomic-ui'
import { ExtendedThemeType } from './types'
import { ExtendedThemeProviderProps } from './ExtendedThemeProvider.types'

export const ExtendedThemeProvider: React.FC<ExtendedThemeProviderProps> = ({
  children,
  extendedAtomicTheme,
  extendedAlternateTheme,
}) => {
  const pwaTheme = useContext<Theme>(ThemeContext)

  let contentTheme: ExtendedThemeType | null = null
  if (pwaTheme.name === FILTERED) {
    contentTheme = extendedAtomicTheme
  }
  if (pwaTheme.name === DANONE) {
    contentTheme = extendedAlternateTheme
  }

  const theme: Theme = { ...pwaTheme, ...(contentTheme || {}) }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
