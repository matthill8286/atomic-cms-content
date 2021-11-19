import React from 'react';
import { Grid, Cell, Row, CallToActionPanel } from '@matthill8286/atomic-ui';
import { CustomSection } from '../CustomSection';
var orientation = {
  right: 'right',
  left: 'left'
};
export var CmsCallToActionPanel = function CmsCallToActionPanel(_ref) {
  var element = _ref.element,
      children = _ref.children,
      image = _ref.image,
      _ref$withLQIP = _ref.withLQIP,
      withLQIP = _ref$withLQIP === void 0 ? false : _ref$withLQIP,
      showReadMore = _ref.showReadMore,
      showMore = _ref.showMore,
      showFeatured = _ref.showFeatured,
      rightOrientation = _ref.rightOrientation,
      sectionColor = _ref.sectionColor,
      richTextCopy = _ref.richTextCopy;
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
    element: element,
    richTextCopy: richTextCopy,
    alignment: rightOrientation ? orientation.right : orientation.left
  }), children))));
};
//# sourceMappingURL=CallToActionPanel.js.map