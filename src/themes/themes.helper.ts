import {
  lightFilteredTheme,
  lightDanoneTheme,
  greyFilteredTheme,
  greyDanoneTheme,
  darkFilteredTheme,
  darkDanoneTheme,
} from '.';
import {ExtendedThemeType} from './types';

type GetExtendedThemesType = {
  extendedFilteredTheme: ExtendedThemeType;
  extendedDanoneTheme: ExtendedThemeType;
};

export const getExtendedThemes = (
  pageTheme?: string | null
): GetExtendedThemesType => {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedFilteredTheme: darkFilteredTheme,
        extendedDanoneTheme: darkDanoneTheme,
      };
    case 'grey':
      return {
        extendedFilteredTheme: greyFilteredTheme,
        extendedDanoneTheme: greyDanoneTheme,
      };
    default:
      return {
        extendedFilteredTheme: lightFilteredTheme,
        extendedDanoneTheme: lightDanoneTheme,
      };
  }
};
