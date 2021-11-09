var _jsxFileName = "/Users/matthewhill/Projects/atomic-cms-content/src/components/TextSection/TextSection.test.tsx",
    _this = this;

import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { mountWithTheme } from '@matthill8286/atomic-ui';
import { TextSection } from "./index";
import { Elements } from "../../types/richtext/graphcms-richtext";
var mockAnchorId = 'richTextAnchorId';
xdescribe('Landing:Components:TextSection', function () {
  afterEach(cleanup);
  it('renders section with link and label', function () {
    var aliceRichText = {
      children: [{
        text: 'Alice and bob'
      }],
      type: Elements.paragraph
    };
    var textSection = mountWithTheme(React.createElement(TextSection, {
      richText: [aliceRichText],
      anchorId: mockAnchorId,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 7
      }
    }));
    var paragrpah = textSection.find('p').last();
    expect(paragrpah.text()).toBe(aliceRichText.children[0].text);
  });
});
//# sourceMappingURL=TextSection.test.js.map