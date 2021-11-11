import { Color, Theme } from '@matthill8286/atomic-ui'

export type ExtendedThemeColor = Color & {
  transparent: string
  contrastColor?: string
}

export type ExtendedThemeColorType = keyof ExtendedThemeColor

export type ExtendedThemeType = Partial<Theme> & {
  color: ExtendedThemeColor
  extended: {
    pageHead: {
      textColorWithImage: ExtendedThemeColorType
      textColorWithoutImage: ExtendedThemeColorType
    }
    content: {
      textColor: ExtendedThemeColorType
      backgroundColor: ExtendedThemeColorType
      borderColor?: ExtendedThemeColorType
    }
    endOfPage: {
      textColor: ExtendedThemeColorType
      backgroundColor: ExtendedThemeColorType
    }
  }
}
