import { lightFilteredTheme, lightDanoneTheme, greyFilteredTheme, greyDanoneTheme, darkFilteredTheme, darkDanoneTheme } from "../../dist";
export var getExtendedThemes = function getExtendedThemes(pageTheme) {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedFilteredTheme: darkFilteredTheme,
        extendedDanoneTheme: darkDanoneTheme
      };

    case 'grey':
      return {
        extendedFilteredTheme: greyFilteredTheme,
        extendedDanoneTheme: greyDanoneTheme
      };

    default:
      return {
        extendedFilteredTheme: lightFilteredTheme,
        extendedDanoneTheme: lightDanoneTheme
      };
  }
};
//# sourceMappingURL=themes.helper.js.map