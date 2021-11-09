var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/LegalPage/LegalContent.tsx",
    _this = this;

import React from 'react';
import { CmsCallToActionPanel, CustomSection, MultiColumnTextSection } from "../../components";
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '#/src/staticPages/components';
export var LegalContent = function LegalContent(_ref) {
  var slices = _ref.slices;
  return React.createElement(CustomSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 5
    }
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
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
          })),
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 20,
            columnNumber: 15
          }
        });

      case 'RichTextSection':
        return React.createElement(MultiColumnTextSection, {
          textColor: 'grey5',
          richTextColumns: pageComponents.document.raw,
          key: keyProp,
          active: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=LegalContent.js.map