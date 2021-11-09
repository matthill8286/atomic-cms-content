var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/EmbeddedSection/EmbeddedSection.test.tsx",
    _this = this;

import React from 'react';
import { renderWithTheme } from '@matthill8286/atomic-ui';
import { EmbeddedSection } from "../EmbeddedSection";
xdescribe('EmbeddedSection', function () {
  it.skip('shows an embedded section', function () {
    var tree = renderWithTheme(React.createElement(EmbeddedSection, {
      embeddedSection: {
        raw: {
          type: 'heading-one',
          children: []
        }
      },
      sectionColor: "primary",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 7
      }
    }));
    expect(tree).toMatchSnapshot();
  });
});
//# sourceMappingURL=EmbeddedSection.test.js.map