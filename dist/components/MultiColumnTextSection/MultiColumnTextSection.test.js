var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/MultiColumnTextSection/MultiColumnTextSection.test.tsx",
    _this = this;

import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { CopyText, mountWithTheme } from '@matthill8286/atomic-ui';
import { MultiColumnTextSection } from "./index";
import { Elements } from "../../types";
var mockAnchorId = 'richTextAnchorId';
xdescribe('Landing:Components:TextSection', function () {
  afterEach(cleanup);
  it.skip('renders section with link and label', function () {
    var aliceRichText = {
      children: [{
        children: [{
          text: 'Alice and bob'
        }],
        type: Elements.paragraph
      }]
    };
    var textSection = mountWithTheme(React.createElement(MultiColumnTextSection, {
      richTextColumns: undefined,
      anchorId: mockAnchorId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 7
      }
    }));
    var paragrpah = textSection.find(CopyText).last();
    expect(paragrpah.text()).toBe(aliceRichText.children[0].text);
  });
});
//# sourceMappingURL=MultiColumnTextSection.test.js.map