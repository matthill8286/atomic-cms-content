function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { alternateTheme } from '@matthill8286/atomic-ui';
export var lightAlternateTheme = _objectSpread(_objectSpread({}, alternateTheme), {}, {
  color: _objectSpread(_objectSpread({}, alternateTheme.color), {}, {
    transparent: 'transparent',
    contrastColor: alternateTheme.color.black
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'black'
    },
    content: {
      textColor: 'grey5',
      backgroundColor: 'grey1'
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2'
    }
  }
});
export var greyAlternateTheme = _objectSpread(_objectSpread({}, alternateTheme), {}, {
  color: _objectSpread(_objectSpread({}, alternateTheme.color), {}, {
    grey4: '#3a3836',
    transparent: 'transparent',
    textColor: alternateTheme.color.white,
    backgroundColor: '#3a3836',
    surfaceColor: '#3a3836',
    contrastColor: '#454647'
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white'
    },
    content: {
      textColor: 'white',
      backgroundColor: 'grey4'
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2'
    }
  }
});
export var darkAlternateTheme = _objectSpread(_objectSpread({}, alternateTheme), {}, {
  color: _objectSpread(_objectSpread({}, alternateTheme.color), {}, {
    transparent: 'transparent',
    textColor: alternateTheme.color.white,
    backgroundColor: alternateTheme.color.black,
    surfaceColor: alternateTheme.color.black,
    contrastColor: '#454647'
  }),
  extended: {
    pageHead: {
      textColorWithImage: 'black',
      textColorWithoutImage: 'white'
    },
    content: {
      textColor: 'white',
      backgroundColor: 'black'
    },
    endOfPage: {
      textColor: 'grey5',
      backgroundColor: 'grey2'
    }
  }
});
//# sourceMappingURL=alternateThemes.js.map