var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/themes/ExtendedThemeProvider.tsx",
    _this = this;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { ThemeProvider, FILTERED, DANONE } from '@matthill8286/atomic-ui';
export var ExtendedThemeProvider = function ExtendedThemeProvider(_ref) {
  var children = _ref.children,
      extendedFilteredTheme = _ref.extendedFilteredTheme,
      extendedDanoneTheme = _ref.extendedDanoneTheme;
  var pwaTheme = useContext(ThemeContext);
  var contentTheme = null;

  if (pwaTheme.name === FILTERED) {
    contentTheme = extendedFilteredTheme;
  }

  if (pwaTheme.name === DANONE) {
    contentTheme = extendedDanoneTheme;
  }

  var theme = _objectSpread(_objectSpread({}, pwaTheme), contentTheme || {});

  return React.createElement(ThemeProvider, {
    theme: theme,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 10
    }
  }, children);
};
//# sourceMappingURL=ExtendedThemeProvider.js.map