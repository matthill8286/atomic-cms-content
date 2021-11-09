function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { danoneTheme } from '@matthill8286/atomic-ui';
export var lightDanoneTheme = _objectSpread(_objectSpread({}, danoneTheme), {}, {
  color: _objectSpread(_objectSpread({}, danoneTheme.color), {}, {
    transparent: 'transparent',
    contrastColor: danoneTheme.color.black
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
export var greyDanoneTheme = _objectSpread(_objectSpread({}, danoneTheme), {}, {
  color: _objectSpread(_objectSpread({}, danoneTheme.color), {}, {
    grey4: '#3a3836',
    transparent: 'transparent',
    textColor: danoneTheme.color.white,
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
export var darkDanoneTheme = _objectSpread(_objectSpread({}, danoneTheme), {}, {
  color: _objectSpread(_objectSpread({}, danoneTheme.color), {}, {
    transparent: 'transparent',
    textColor: danoneTheme.color.white,
    backgroundColor: danoneTheme.color.black,
    surfaceColor: danoneTheme.color.black,
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