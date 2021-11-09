var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/ImageTextSection/index.tsx",
    _this = this;

import * as React from 'react';
import { Grid, Row, Offset, Cell, ImageAndText } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from "../Serializer";
export * from "./ImageTextSection.types";
export var ImageTextSection = function ImageTextSection(_ref) {
  var imageAndTextFields = _ref.imageAndTextFields,
      textColor = _ref.textColor,
      sectionColor = _ref.sectionColor,
      primaryColor = _ref.primaryColor;

  var renderImageAndText = function renderImageAndText(imageAndTextEntry, index) {
    var image = imageAndTextEntry.image,
        text = imageAndTextEntry.text,
        imageAlignment = imageAndTextEntry.imageAlignment,
        anchorId = imageAndTextEntry.anchorId;
    return React.createElement(CustomSection, {
      color: sectionColor,
      key: index,
      id: anchorId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 7
      }
    }, React.createElement(Grid, {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 9
      }
    }, React.createElement(Row, {
      noMargin: true,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 11
      }
    }, React.createElement(Offset, {
      colsXl: 1,
      colsLg: 1,
      colsMd: 1,
      colsSm: 1,
      colsXs: 0,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 13
      }
    }), React.createElement(Cell, {
      colsXl: 10,
      colsLg: 10,
      colsMd: 6,
      colsSm: 6,
      colsXs: 4,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 13
      }
    }, image ? React.createElement(ImageAndText, {
      image: image !== null && image !== void 0 && image.desktop ? image === null || image === void 0 ? void 0 : image.desktop : image,
      imageAlignment: imageAlignment,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 17
      }
    }, text && Serializer(text, ConfigurableGraphCmsHtmlSerializer({
      color: textColor,
      primaryColor: primaryColor
    }))) : text && Serializer(text, ConfigurableGraphCmsHtmlSerializer({
      color: textColor,
      primaryColor: primaryColor
    }))))));
  };

  return React.createElement(React.Fragment, null, imageAndTextFields.map(function (field, index) {
    return renderImageAndText(field, index);
  }));
};
//# sourceMappingURL=index.js.map