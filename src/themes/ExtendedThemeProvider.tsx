import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { ThemeProvider, Theme, Saiyan, ALTERNATE } from '@matthill8286/atomic-ui'
import { ExtendedThemeType } from './types'
import { ExtendedThemeProviderProps } from './ExtendedThemeProvider.types'

export const ExtendedThemeProvider: React.FC<ExtendedThemeProviderProps> = ({
  children,
  extendedAtomicTheme,
  extendedAlternateTheme,
}) => {
  const pwaTheme = useContext<Theme>(ThemeContext)

  let contentTheme: ExtendedThemeType | null = null
  if (pwaTheme.name === Saiyan) {
    contentTheme = extendedAtomicTheme
  }
  if (pwaTheme.name === ALTERNATE) {
    contentTheme = extendedAlternateTheme
  }

  const theme: Theme = { ...pwaTheme, ...(contentTheme || {}) }

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
