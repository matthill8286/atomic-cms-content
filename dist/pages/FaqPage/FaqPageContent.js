var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/pages/FaqPage/FaqPageContent.tsx",
    _this = this;

import React from 'react';
import { AccordionSection, CustomSection } from "../../components";
export var FaqPageContent = function FaqPageContent(_ref) {
  var slices = _ref.slices;
  return React.createElement(CustomSection, {
    color: "transparent",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }, slices === null || slices === void 0 ? void 0 : slices.map(function (_ref2, index) {
    var pageComponents = _ref2.pageComponents;
    var keyProp = "".concat(pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename, "_").concat(index);

    switch (pageComponents === null || pageComponents === void 0 ? void 0 : pageComponents.__typename) {
      case 'Accordion':
        return React.createElement(AccordionSection, {
          key: keyProp,
          entries: pageComponents.richTextEntries,
          isLarge: true,
          withIconsOnRight: true,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 12,
            columnNumber: 15
          }
        });

      default:
        return null;
    }
  }));
};
//# sourceMappingURL=FaqPageContent.js.map