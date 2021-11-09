import React from 'react';
import {ExtendedThemeType} from './types';

export type ExtendedThemeProviderProps = {
  children: React.ReactNode;
  extendedFilteredTheme: ExtendedThemeType;
  extendedDanoneTheme: ExtendedThemeType;
};
