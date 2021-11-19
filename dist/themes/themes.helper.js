import { lightAtomicTheme, lightAlternateTheme, greyAtomicTheme, greyAlternateTheme, darkAtomicTheme, darkAlternateTheme } from '.';
export var getExtendedThemes = function getExtendedThemes(pageTheme) {
  switch (pageTheme) {
    case 'dark':
      return {
        extendedAtomicTheme: darkAtomicTheme,
        extendedAlternateTheme: darkAlternateTheme
      };

    case 'grey':
      return {
        extendedAtomicTheme: greyAtomicTheme,
        extendedAlternateTheme: greyAlternateTheme
      };

    default:
      return {
        extendedAtomicTheme: lightAtomicTheme,
        extendedAlternateTheme: lightAlternateTheme
      };
  }
};
//# sourceMappingURL=themes.helper.js.map