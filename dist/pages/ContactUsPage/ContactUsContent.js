import React from 'react';
import { CmsCallToActionPanel, CustomSection, TextSection } from "../../components";
import { ContactSection } from "../../components/ContactSection";
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '#/src/staticPages/components';
export var ContactUsContent = function ContactUsContent(_ref) {
  var slices = _ref.slices;
  return React.createElement(CustomSection, null, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var _pageComponents$richT;

    var pageComponents = _ref2.pageComponents;
    var keyProp = "".concat(pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename, "_").concat(index);

    switch (pageComponents.__typename) {
      case 'CallToActionPanel':
        return React.createElement(CmsCallToActionPanel, {
          key: keyProp,
          element: pageComponents,
          showReadMore: false,
          asset: null,
          image: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.image,
          richTextCopy: Serializer(pageComponents === null || pageComponents === void 0 ? void 0 : (_pageComponents$richT = pageComponents.richTextCopy) === null || _pageComponents$richT === void 0 ? void 0 : _pageComponents$richT.raw, ConfigurableGraphCmsHtmlSerializer({
            textAlign: 'left',
            contentAlign: 'left'
          }))
        });

      case 'RichTextSection':
        return pageComponents.document.raw && React.createElement(TextSection, {
          richText: pageComponents.document.raw,
          title: pageComponents.title,
          headingColor: "black",
          key: keyProp,
          anchorId: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.id,
          headingsBold: true
        });

      case 'ContactSection':
        return pageComponents.contactInformation && React.createElement(ContactSection, {
          paddingTop: undefined,
          paddingBottom: "xl",
          sectionColor: "clear",
          key: keyProp,
          contactHeading: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.contactHeading,
          contactImage: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.contactImage,
          richTextContactSection: pageComponents.contactInformation
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=ContactUsContent.js.map