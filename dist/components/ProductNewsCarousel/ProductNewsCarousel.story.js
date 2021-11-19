function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import { action } from '@storybook/addon-actions';
import { boolean, number, select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { CopyText, Heading } from '@/components/Atoms/Typography';
import { Cell, Grid, Row } from '@/components/Helper/Grid';
import { mockPlaylistCollections, newProductMocks } from '@/components/Organisms/ProductTile/elements/mockProduct';
import { ProductSponsoring, ProductStrategy, ProductTileLayout } from '@/components/Organisms/ProductTile';
import { ProductCarousel } from './ScrollProductCarousel';
var mockProducts = {
  asset1: newProductMocks[0],
  asset2: newProductMocks[1],
  asset3: newProductMocks[2]
};
export var assetNames = ['asset1', 'asset2', 'asset3'];

var mockedProductsWithNames = function mockedProductsWithNames() {
  var products = [];

  for (var i = 0; i < assetNames.length; i++) {
    products.push(mockProducts[assetNames[i]]);
  }

  return products;
};

var usableProducts = [].concat(_toConsumableArray(mockedProductsWithNames()), _toConsumableArray(mockedProductsWithNames()));
var showSponsoring = boolean('Show Sponsoring', false);

var knobs = function knobs() {
  return {
    loading: boolean('Loading', false),
    slidesPerPageSettings: {
      desktop: number('Desktop', 3),
      tablet: number('tablet', 2),
      mobileBig: number('Large mobile', 2),
      mobileSmall: number('Small mobile', 2)
    },
    showArrows: boolean('Arrows', true),
    playlistOrientation: select('Playlist Orientation', ['portrait', 'landscape', undefined], 'portrait'),
    NoProductsComponent: React.createElement("p", null, "No Products here"),
    tileMargin: select('Tile Margin', ['xs', 'sm', 'md'], 'sm'),
    playlistView: select('Playlist Type', ['list', 'collection'], 'list'),
    title: boolean('With Title', false) ? customTitle() : undefined,
    tileWidth: number('TileWidth', 360),
    sponsoringDetails: {
      showUppercase: true,
      isSponsored: showSponsoring,
      label: text('Label', 'Sponsored Content'),
      title: text('Title', 'Sponsored Content Title'),
      infoText: text('Info Text', 'Some more information about this sponsored content')
    },
    onProductClick: function onProductClick() {
      return action('asset');
    },
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    renderAddToBookmarkButton: function renderAddToBookmarkButton() {
      return React.createElement("div", null, "Bookmark");
    },
    showNoProducts: boolean('With No Products', false)
  };
};

var fixedWidth = function fixedWidth() {
  return boolean('With Grid', false);
};

var customTitle = function customTitle() {
  return React.createElement(React.Fragment, null, React.createElement(ProductSponsoring, {
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    layout: "carousel"
  }), React.createElement(Heading, {
    bold: true,
    scale: "level-2",
    tag: "h2",
    color: "primary"
  }, "Playlists"));
};

storiesOf('Design System/Organisms/ProductCarousel', module).add('Default', function () {
  if (fixedWidth()) {
    return React.createElement(ProductCarousel, _extends({}, knobs(), {
      showBadges: true,
      title: customTitle(),
      context: "dashboard",
      products: !knobs().showNoProducts ? usableProducts : [],
      sponsoringDetails: undefined,
      fixedArrowPosition: false,
      onProductClick: action('asset'),
      onLockClick: action('lock'),
      onSlideChange: action('slide changed'),
      withGrid: true
    }));
  }

  return React.createElement(ProductCarousel, _extends({}, knobs(), {
    showBadges: true,
    title: customTitle(),
    context: "homepage",
    products: !knobs().showNoProducts ? usableProducts : [],
    sponsoringDetails: undefined,
    fixedArrowPosition: false,
    onProductClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed')
  }));
}).add('Playlist collection', function () {
  return React.createElement(ProductCarousel, _extends({}, knobs(), {
    showBookmark: false,
    fixedArrowPosition: false,
    context: "webmobile-cms-landing-pages",
    playlistView: "collection",
    title: React.createElement(Heading, {
      bold: true,
      scale: "level-2"
    }, "Your Collection"),
    slidesPerPageSettings: {
      desktop: 4,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Your Playlists',
      title: 'Saved Playlists',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    products: _toConsumableArray(mockPlaylistCollections),
    onProductClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed')
  }));
}).add('Playlists with disabled indexes', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(ProductCarousel, {
    NoProductsComponent: React.createElement(React.Fragment, null, "No Products Found"),
    loading: false,
    slidesPerPageSettings: {
      desktop: 3,
      tablet: 2,
      mobileBig: 1,
      mobileSmall: 1
    },
    tileWidth: 380,
    strategyType: ProductStrategy.structured,
    context: "search",
    title: React.createElement(Heading, {
      bold: true,
      scale: "level-2"
    }, "Structured Strategy"),
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    disabledProductIndexes: [1, 2, 3, 4],
    products: usableProducts,
    onProductClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  }))));
}).add('Playlists fixed width asset on desktop', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(ProductCarousel, _extends({}, knobs(), {
    NoProductsComponent: React.createElement(React.Fragment, null, "No Products Found"),
    loading: false,
    context: "dashboard",
    title: React.createElement(Heading, {
      bold: true,
      scale: "level-2"
    }, "Fixed Width"),
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    slidesPerPageSettings: {
      desktop: 4,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    products: [mockProducts.asset1, mockProducts.asset2, mockProducts.asset3],
    onProductClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  })))));
}).add('Playlists view landscape', function () {
  return React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(ProductCarousel, _extends({}, knobs(), {
    NoProductsComponent: React.createElement(React.Fragment, null, "No Products Found"),
    loading: false,
    context: "dashboard",
    title: React.createElement(Heading, {
      bold: true,
      scale: "level-2"
    }, "Your Bookmarks"),
    playlistView: "list",
    playlistLayout: ProductTileLayout.listItem,
    sponsoringDetails: {
      isSponsored: true,
      showUppercase: true,
      label: 'Recommendations',
      title: 'Notification Title',
      infoText: 'Some random content so we can showcase sponsored asset content'
    },
    slidesPerPageSettings: {
      desktop: 2,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    withScrollbar: true,
    products: [mockProducts.asset1, mockProducts.asset2, mockProducts.asset3, mockProducts.asset1, mockProducts.asset2, mockProducts.asset3],
    onProductClick: action('asset'),
    onLockClick: action('lock'),
    onSlideChange: action('slide changed'),
    fixedArrowPosition: false
  })))), React.createElement(Row, null, React.createElement(Cell, {
    columns: 12
  }, React.createElement(CopyText, {
    display: "flex",
    fontSize: "lg"
  }, "Due to the amount of information on this version of asset tile, the best viewing mode is 2 products per slide"))));
});
//# sourceMappingURL=ProductNewsCarousel.story.js.map