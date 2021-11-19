import { cleanup } from '@testing-library/react';
import * as React from 'react';
import { mountWithTheme, Typo } from '@matthill8286/atomic-ui';
import { GroupRichTextSection } from './index';
var mockAnchorId = 'groupTextAnchorId';
xdescribe('Landing:Components:GroupRichTextSection', function () {
  afterEach(cleanup);
  it.todo('renders section with group richtext', function () {
    var groupText = [{
      textField: [{
        type: 'paragraph',
        children: [{
          text: 'This is how you test'
        }]
      }, {
        type: 'paragraph',
        children: [{
          text: 'This is how you test'
        }]
      }],
      title: [{
        type: 'heading1',
        children: [{
          text: 'This is how you test'
        }]
      }, {
        type: 'heading2',
        children: [{
          text: 'This is how you test'
        }]
      }]
    }];
    var sectionColor = 'grey1';
    var renderCardSection = mountWithTheme(React.createElement(GroupRichTextSection, {
      fields: groupText,
      sectionColor: sectionColor,
      anchorId: mockAnchorId
    }));
    var heading = renderCardSection.find('h1').last();
    expect(heading.text()).toBe(groupText[0].title[0].text);
    var paragraph = renderCardSection.find(Typo).last();
    expect(paragraph.text()).toBe(groupText[0].textField[1].text);
  });
});
//# sourceMappingURL=GroupRichTextSection.test.js.map