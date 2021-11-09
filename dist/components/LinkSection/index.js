import * as React from 'react';
import { Grid, Cell, Row, Link, Icon, IconRightArrow, Offset } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
export * from "./LinkSection.types";
export var LinkSection = function LinkSection(_ref) {
  var link = _ref.link,
      label = _ref.label,
      anchorId = _ref.anchorId,
      sectionColor = _ref.sectionColor,
      _ref$decorationColor = _ref.decorationColor,
      decorationColor = _ref$decorationColor === void 0 ? 'primary' : _ref$decorationColor,
      _ref$textColor = _ref.textColor,
      textColor = _ref$textColor === void 0 ? 'black' : _ref$textColor,
      onClick = _ref.onClick;
  return React.createElement(CustomSection, {
    id: anchorId,
    color: sectionColor
  }, React.createElement(Grid, null, React.createElement(Row, null, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 1,
    colsSm: 1,
    colsXs: 0
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 6,
    colsSm: 6,
    colsXs: 4
  }, React.createElement(Link, {
    iconLeft: React.createElement(Icon, {
      color: "primary"
    }, React.createElement(IconRightArrow, null)),
    onClick: onClick,
    color: textColor,
    scale: "large",
    target: (link === null || link === void 0 ? void 0 : link.target) || '_self',
    href: (link === null || link === void 0 ? void 0 : link.url) || '',
    underline: true,
    decorationColor: decorationColor
  }, label)))));
};
//# sourceMappingURL=index.js.map