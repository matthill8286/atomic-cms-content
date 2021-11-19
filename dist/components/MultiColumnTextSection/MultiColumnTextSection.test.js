import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { CopyText, mountWithTheme } from '@matthill8286/atomic-ui';
import { MultiColumnTextSection } from './index';
import { Elements } from '../../types/richtext';
var mockAnchorId = 'richTextAnchorId';
describe('Landing:Components:TextSection', function () {
  afterEach(cleanup);
  it('renders section with link and label', function () {
    var aliceRichText = {
      raw: {
        children: [{
          type: Elements.paragraph,
          children: [{
            text: 'At Alternate we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principle'
          }]
        }]
      }
    };
    var textSection = mountWithTheme(React.createElement(MultiColumnTextSection, {
      textColor: "grey5",
      richTextColumns: aliceRichText,
      anchorId: mockAnchorId
    }));
    var paragraph = textSection.find(CopyText).last();
    expect(paragraph.text()).toBe(aliceRichText.raw.children[0].children[0].text);
  });
});
//# sourceMappingURL=MultiColumnTextSection.test.js.map