import * as React from 'react';
import { Grid, Row, Offset, Cell, ImageAndText } from '@matthill8286/atomic-ui';
import { CustomSection } from '../CustomSection';
import { Serializer, ConfigurableGraphCmsHtmlSerializer } from '../Serializer';
export * from './ImageTextSection.types';
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
      id: anchorId
    }, React.createElement(Grid, null, React.createElement(Row, {
      noMargin: true
    }, React.createElement(Offset, {
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
    }, image ? React.createElement(ImageAndText, {
      image: image !== null && image !== void 0 && image.desktop ? image === null || image === void 0 ? void 0 : image.desktop : image,
      imageAlignment: imageAlignment
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
//# sourceMappingURL=ImageTextSection.js.map