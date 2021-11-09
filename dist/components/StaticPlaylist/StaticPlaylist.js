var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/StaticPlaylist/StaticPlaylist.tsx",
    _this = this;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

import React from 'react';
import { Cell, CopyText, Heading, AssetCarousel, styled, Divider, Grid, Row } from '@matthill8286/atomic-ui';
import { useHistory } from 'react-router';
import { getCookie } from "../../utils/localStorage";
import { MODALS } from "../../constants";
import { CustomSection } from "../CustomSection";
import { formatToStaticAsset } from "../../helpers";
export var StyledWrapper = styled.div.withConfig({
  displayName: "StaticPlaylist__StyledWrapper",
  componentId: "q8vb6w-0"
})(["\n  margin-top: ", ";\n"], function (_ref) {
  var _theme$spacing$base$m;

  var theme = _ref.theme,
      marginTop = _ref.marginTop;
  return (_theme$spacing$base$m = theme.spacing.base[marginTop]) !== null && _theme$spacing$base$m !== void 0 ? _theme$spacing$base$m : 0;
});
export var PlaylistHeader = function PlaylistHeader(_ref2) {
  var title = _ref2.title,
      name = _ref2.name,
      marginTop = _ref2.marginTop;
  return React.createElement(StyledWrapper, {
    marginTop: marginTop,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 3
    }
  }, React.createElement(CopyText, {
    limitLines: 1,
    fontSize: "sm",
    as: "div",
    toUpperCase: true,
    weight: "bold",
    display: "inline-flex",
    margin: "0 sm xs 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 5
    }
  }, title), React.createElement(Heading, {
    color: "primary",
    scale: "level-2",
    tag: "h2",
    lineHeight: "sm",
    fontFamily: "default",
    weight: "semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }
  }, name));
};
export var StaticPlaylist = function StaticPlaylist(_ref3) {
  var _staticPlaylists$, _staticPlaylists$2;

  var _ref3$name = _ref3.name,
      name = _ref3$name === void 0 ? 'Static Playlist' : _ref3$name,
      _ref3$playlistId = _ref3.playlistId,
      playlistId = _ref3$playlistId === void 0 ? 0 : _ref3$playlistId,
      _ref3$showDivider = _ref3.showDivider,
      showDivider = _ref3$showDivider === void 0 ? false : _ref3$showDivider,
      title = _ref3.title,
      desktop = _ref3.desktop,
      showLock = _ref3.showLock,
      _onSlideChange = _ref3.onSlideChange,
      overridePlaylistClickEvent = _ref3.overridePlaylistClickEvent,
      paddingTop = _ref3.paddingTop,
      showScrollbar = _ref3.showScrollbar,
      staticPlaylists = _ref3.staticPlaylists,
      playlistBackground = _ref3.playlistBackground,
      openModal = _ref3.openModal;
  var history = useHistory();
  var staticAssets = staticPlaylists !== null && staticPlaylists !== void 0 && (_staticPlaylists$ = staticPlaylists[0]) !== null && _staticPlaylists$ !== void 0 && _staticPlaylists$.staticAssetTiles ? _toConsumableArray((_staticPlaylists$2 = staticPlaylists[0]) === null || _staticPlaylists$2 === void 0 ? void 0 : _staticPlaylists$2.staticAssetTiles) : [];
  var assetsToStatic = staticAssets ? formatToStaticAsset(staticAssets) : [];

  var showOrHideModal = function showOrHideModal(asset) {
    if (!getCookie('confirm')) {
      openModal === null || openModal === void 0 ? void 0 : openModal(MODALS.CONFIRMATION, {
        asset: asset,
        playlistId: playlistId
      });
    } else {
      history.push({
        pathname: "/home/learning-asset/".concat(asset.niceName, "?pid_hint=").concat(playlistId),
        state: {
          embeddedAsset: asset.embeddedAsset
        }
      });
    }
  };

  var onAssetClick = function onAssetClick(asset) {
    if (asset !== null && asset !== void 0 && asset.to) {
      history.push({
        pathname: "".concat(asset === null || asset === void 0 ? void 0 : asset.to, "?pid_hint=").concat(playlistId),
        state: {
          embeddedAsset: asset.embeddedAsset
        }
      });
      return;
    }

    if (asset !== null && asset !== void 0 && asset.niceName) {
      history.push({
        pathname: "/home/learning-asset/".concat(asset.niceName, "?pid_hint=").concat(playlistId),
        state: {
          embeddedAsset: asset.embeddedAsset
        }
      });
      return;
    }

    return null;
  };

  var withAssetClickOverride = overridePlaylistClickEvent ? onAssetClick : showOrHideModal;
  return React.createElement(CustomSection, {
    color: playlistBackground,
    paddingTop: paddingTop !== null && paddingTop !== void 0 ? paddingTop : 'md',
    paddingBottom: paddingTop !== null && paddingTop !== void 0 ? paddingTop : 'md',
    key: playlistId,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 5
    }
  }, showDivider && React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 11
    }
  }, React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 13
    }
  }, React.createElement(Divider, {
    color: "primary",
    height: 2,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 15
    }
  })))), React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131,
      columnNumber: 7
    }
  }, React.createElement(AssetCarousel, {
    NoAssetsComponent: React.createElement(React.Fragment, null),
    "data-test": "landing-page-playlist",
    title: React.createElement(PlaylistHeader, {
      marginTop: "md",
      title: title,
      name: name,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 135,
        columnNumber: 18
      }
    }),
    loading: false,
    assets: _toConsumableArray(assetsToStatic),
    withGrid: true,
    showSkills: false,
    showLock: showLock,
    tileWidth: 400,
    onSlideChange: function onSlideChange(context) {
      return _onSlideChange === null || _onSlideChange === void 0 ? void 0 : _onSlideChange(context);
    },
    onLockClick: function onLockClick(_ref4) {
      var asset = _ref4.asset;
      return openModal === null || openModal === void 0 ? void 0 : openModal(MODALS.LOGIN, {
        asset: asset,
        playlistId: playlistId
      });
    },
    onAssetClick: function onAssetClick(_ref5) {
      var asset = _ref5.asset;
      return withAssetClickOverride(asset);
    },
    context: name,
    lazyLoad: true,
    showArrows: true,
    withLQIP: true,
    withScrollbar: showScrollbar,
    tileMargin: "md",
    slidesPerPageSettings: {
      desktop: desktop !== null && desktop !== void 0 ? desktop : 4,
      mobileBig: 1,
      mobileSmall: 1,
      tablet: 2
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 9
    }
  })));
};
//# sourceMappingURL=StaticPlaylist.js.map