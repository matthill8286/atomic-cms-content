import React from 'react';
import { CustomSection, TextSection } from "../../components";
import { EmbeddedSection } from "../../components/EmbeddedSection";
import { GenericSection } from "../../components/GenericSection";
import { ProfileTileColumns } from "../../components";
import { ContactSection } from "../../components/ContactSection";
export var RICH_TEXT_SECTION = 'RichTextSection';
export var GENERIC_SECTION = 'GenericSection';
export var EMBEDDED_SECTION = 'EmbeddedSection';
export var PROFILE_SECTION = 'ProfileGrid';
export var CONTACT_SECTION = 'ContactSection';
export var WhoWeAreContent = function WhoWeAreContent(_ref) {
  var slices = _ref.slices;
  return React.createElement(CustomSection, {
    paddingTop: 'xl',
    color: 'white'
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var pageComponents = _ref2.pageComponents;
    var keyProp = "".concat(pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename, "_").concat(index);

    switch (pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename) {
      case RICH_TEXT_SECTION:
        return pageComponents.document && React.createElement(TextSection, {
          sectionColor: "white",
          richText: pageComponents.document.raw,
          key: keyProp,
          branded: pageComponents.branded,
          anchorId: pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.id,
          paddingBottom: "xxl"
        });

      case GENERIC_SECTION:
        return pageComponents.richTextSections && React.createElement(GenericSection, {
          featureImage: pageComponents.image ? pageComponents.image.url : null,
          topTitle: pageComponents.topTitle,
          description: pageComponents.description,
          richTextSections: pageComponents.richTextSections,
          paddingTop: "sm",
          key: keyProp
        });

      case EMBEDDED_SECTION:
        return pageComponents.mediaEmbed && React.createElement(EmbeddedSection, {
          sectionColor: "white",
          title: pageComponents.sectionTitle,
          embeddedSection: pageComponents.mediaEmbed,
          sectionHeight: "100%",
          key: keyProp
        });

      case PROFILE_SECTION:
        return pageComponents.profileSections && React.createElement(ProfileTileColumns, {
          paddingTop: "xl",
          paddingBottom: "xl",
          key: keyProp,
          profileSections: pageComponents.profileSections,
          title: pageComponents.title
        });

      case CONTACT_SECTION:
        return pageComponents.contactInformation && React.createElement(ContactSection, {
          paddingTop: "md",
          paddingBottom: "xl",
          sectionColor: "clear",
          key: keyProp,
          contactHeading: pageComponents.contactHeading,
          contactImage: pageComponents.contactImage,
          richTextContactSection: pageComponents.contactInformation
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=WhoWeAreContent.js.map