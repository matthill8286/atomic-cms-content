import {useContext} from 'react';
import {ThemeContext} from '@matthill8286/atomic-ui';
import {ExtendedThemeType} from './types';

export const useExtendedTheme = (): ExtendedThemeType => {
  const theme = useContext<ExtendedThemeType>(ThemeContext);

  if (!theme.extended) {
    throw new Error(
      'Extended Theme missing! Did you forget to wrap component with <ExtendedThemeProvider />?'
    );
  }

  return theme;
};
