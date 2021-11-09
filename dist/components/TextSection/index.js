var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/TextSection/index.tsx",
    _this = this;

import React from 'react';
import { Grid, Cell, Row, Offset, Heading, Typo, styled, useMultiViewModalAction, Link } from '@matthill8286/atomic-ui';
import { StyledTextSection } from "./TextSection.styled";
import { CustomSection } from "../CustomSection";
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from "../Serializer";
export * from "./TextSection.types";
var StyledTypoWrapper = styled(Typo).withConfig({
  displayName: "TextSection__StyledTypoWrapper",
  componentId: "sc-37910d-0"
})(["\n  margin: 24px 0;\n"]);
export var TextSection = function TextSection(_ref) {
  var richText = _ref.richText,
      title = _ref.title,
      sectionColor = _ref.sectionColor,
      branded = _ref.branded,
      active = _ref.active,
      anchorId = _ref.anchorId,
      textColor = _ref.textColor,
      headingColor = _ref.headingColor,
      headingsBold = _ref.headingsBold,
      paddingTop = _ref.paddingTop,
      paddingBottom = _ref.paddingBottom,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'Home' : _ref$type;
  var setBranding = branded ? 'white' : 'grey5';

  var _useMultiViewModalAct = useMultiViewModalAction(),
      setActive = _useMultiViewModalAct.setActive,
      setView = _useMultiViewModalAct.setView;

  return React.createElement(CustomSection, {
    color: branded ? 'primary' : sectionColor,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 5
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }
  }, React.createElement(Cell, {
    columns: 12,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 9
    }
  }, React.createElement(Heading, {
    weight: "bold",
    scale: "level-2",
    textAlign: "center",
    margin: "xl 0",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 11
    }
  }, title))), React.createElement(Grid, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }
  }, React.createElement(Row, {
    noMargin: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 9
    }
  }, React.createElement(Offset, {
    colsXl: 1,
    colsLg: 1,
    colsMd: 0,
    colsSm: 0,
    colsXs: 0,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 11
    }
  }), React.createElement(Cell, {
    colsXl: 10,
    colsLg: 10,
    colsMd: 8,
    colsSm: 8,
    colsXs: 4,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 11
    }
  }, React.createElement(StyledTextSection, {
    color: textColor,
    active: active,
    id: anchorId !== null && anchorId !== void 0 ? anchorId : undefined,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 13
    }
  }, Serializer(richText, ConfigurableGraphCmsHtmlSerializer({
    inline: true,
    bold: headingsBold,
    color: setBranding,
    fontSize: '17px',
    textAlign: branded ? 'center' : 'left',
    headingColor: branded ? 'white' : headingColor
  })), type === 'Policy' && React.createElement(React.Fragment, null, React.createElement(Heading, {
    scale: "level-3",
    tag: "h3",
    weight: "semibold",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 19
    }
  }, "Changing cookie settings"), React.createElement(StyledTypoWrapper, {
    tag: "p",
    fontSize: {
      desktop: '17px',
      mobile: '15px'
    },
    textAlign: branded ? 'center' : 'left',
    color: setBranding,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83,
      columnNumber: 19
    }
  }, "You can manage your cookie preferences", ' ', React.createElement(Link, {
    href: "#",
    color: "primary",
    inline: true,
    underline: true,
    onClick: function onClick(e) {
      e.preventDefault();
      setView('cookie-2');
      setActive(true);
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 21
    }
  }, "here"))))))));
};
//# sourceMappingURL=index.js.map