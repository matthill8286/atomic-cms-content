import {danoneTheme} from '@matthill8286/atomic-ui';
import {ExtendedThemeType} from './types';

export const lightDanoneTheme: ExtendedThemeType = {
  ...danoneTheme,
  color: {
    ...danoneTheme.color,
    transparent: 'transparent',
    contrastColor: danoneTheme.color.black,
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
};

export const greyDanoneTheme: ExtendedThemeType = {
  ...danoneTheme,
  color: {
    ...danoneTheme.color,
    grey4: '#3a3836',
    transparent: 'transparent',
    textColor: danoneTheme.color.white,
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
};

export const darkDanoneTheme: ExtendedThemeType = {
  ...danoneTheme,
  color: {
    ...danoneTheme.color,
    transparent: 'transparent',
    textColor: danoneTheme.color.white,
    backgroundColor: danoneTheme.color.black,
    surfaceColor: danoneTheme.color.black,
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
};
