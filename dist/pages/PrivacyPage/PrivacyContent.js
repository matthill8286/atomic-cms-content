var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/PrivacyPage/PrivacyContent.tsx",
    _this = this;

import React from 'react';
import { TextSection, CustomSection } from "../../components";
import CookieConsent from "../../components/CookieConsent/CookieConsent";
export var TYPE_RICH_TEXT = 'RichTextSection';
export var PrivacyContent = function PrivacyContent(_ref) {
  var slices = _ref.slices,
      type = _ref.type;
  return React.createElement(CustomSection, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var section = _ref2.pageComponents;
    var keyProp = "".concat(section === null || section === void 0 ? void 0 : section.__typename, "_").concat(index);

    switch (section === null || section === void 0 ? void 0 : section.__typename) {
      case TYPE_RICH_TEXT:
        return section.document.raw && React.createElement(TextSection, {
          richText: section.document.raw,
          title: section.title,
          headingColor: "black",
          key: keyProp,
          anchorId: section === null || section === void 0 ? void 0 : section.id,
          headingsBold: true,
          type: type,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 17
          }
        });

      default:
        return null;
    }
  }), React.createElement(CookieConsent, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }
  }));
};
//# sourceMappingURL=PrivacyContent.js.map