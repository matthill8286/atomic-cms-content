import React from 'react';
import { CmsCallToActionPanel, CustomSection, MultiColumnTextSection } from "../../components";
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '#/src/staticPages/components';
export var LegalContent = function LegalContent(_ref) {
  var slices = _ref.slices;
  return React.createElement(CustomSection, null, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var _pageComponents$richT;

    var pageComponents = _ref2.pageComponents;
    var keyProp = "".concat(pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename, "_").concat(index);

    switch (pageComponents.__typename) {
      case 'CallToActionPanel':
        return React.createElement(CmsCallToActionPanel, {
          key: keyProp,
          sectionColor: "white",
          element: pageComponents,
          showReadMore: false,
          asset: null,
          rightOrientation: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.rightOrientation,
          image: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.image,
          richTextCopy: Serializer(pageComponents === null || pageComponents === void 0 ? void 0 : (_pageComponents$richT = pageComponents.richTextCopy) === null || _pageComponents$richT === void 0 ? void 0 : _pageComponents$richT.raw, ConfigurableGraphCmsHtmlSerializer({
            textAlign: 'left',
            contentAlign: 'left'
          }))
        });

      case 'RichTextSection':
        return React.createElement(MultiColumnTextSection, {
          textColor: 'grey5',
          richTextColumns: pageComponents.document.raw,
          key: keyProp,
          active: true
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=LegalContent.js.map