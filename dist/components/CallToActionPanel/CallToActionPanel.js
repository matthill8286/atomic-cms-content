function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import { Grid, Cell, Row, CallToActionPanel } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
import { formatToStaticAsset } from "../../helpers";
import { useHistory } from 'react-router-dom';
var orientation = {
  right: 'right',
  left: 'left'
};
export var CmsCallToActionPanel = function CmsCallToActionPanel(_ref) {
  var _formatAsset$;

  var element = _ref.element,
      children = _ref.children,
      image = _ref.image,
      svg = _ref.svg,
      _ref$withLQIP = _ref.withLQIP,
      withLQIP = _ref$withLQIP === void 0 ? false : _ref$withLQIP,
      showReadMore = _ref.showReadMore,
      showMore = _ref.showMore,
      showFeatured = _ref.showFeatured,
      asset = _ref.asset,
      isOpenAsset = _ref.isOpenAsset,
      rightOrientation = _ref.rightOrientation,
      onAssetClick = _ref.onAssetClick,
      sectionColor = _ref.sectionColor,
      routeContext = _ref.routeContext,
      richTextCopy = _ref.richTextCopy;
  var formatAsset = asset ? formatToStaticAsset([_objectSpread({}, asset)]) : null;
  var history = useHistory();
  return React.createElement(CustomSection, {
    color: sectionColor,
    paddingTop: 0,
    paddingBottom: 0
  }, React.createElement(Grid, null, React.createElement(Row, {
    noMargin: true
  }, React.createElement(Cell, {
    colsXl: 12,
    colsLg: 12,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4
  }, React.createElement(CallToActionPanel, {
    image: image,
    withLQIP: withLQIP,
    showReadMore: showReadMore,
    showMore: showMore,
    showFeatured: showFeatured,
    isOpenAsset: isOpenAsset,
    element: element,
    richTextCopy: richTextCopy,
    asset: (_formatAsset$ = formatAsset === null || formatAsset === void 0 ? void 0 : formatAsset[0]) !== null && _formatAsset$ !== void 0 ? _formatAsset$ : null,
    onAssetClick: function onAssetClick() {
      if (asset !== null && asset !== void 0 && asset.to) {
        history.push({
          pathname: asset === null || asset === void 0 ? void 0 : asset.to,
          state: {
            embeddedAsset: asset.embeddedAsset
          }
        });
      }

      return null;
    },
    alignment: rightOrientation ? orientation.right : orientation.left
  })))));
};
//# sourceMappingURL=CallToActionPanel.js.map