import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {mountWithTheme, Typo} from '@matthill8286/atomic-ui';
import {GroupRichTextSection} from './index';
import {GroupRichTextFieldType} from './GroupRichTextSection.types';

const mockAnchorId = 'groupTextAnchorId';

xdescribe('Landing:Components:GroupRichTextSection', () => {
  afterEach(cleanup);

  it.todo('renders section with group richtext', () => {
    const groupText: GroupRichTextFieldType[] = [
      {
        textField: [
          {
            type: 'paragraph',
            children: [{text: 'This is how you test'}],
          },
          {
            type: 'paragraph',
            children: [{text: 'This is how you test'}],
          },
        ],
        title: [
          {
            type: 'heading1',
            children: [{text: 'This is how you test'}],
          },
          {
            type: 'heading2',
            children: [{text: 'This is how you test'}],
          },
        ],
      },
    ];
    const sectionColor = 'grey1';

    const renderCardSection = mountWithTheme(
      <GroupRichTextSection
        fields={groupText}
        sectionColor={sectionColor}
        anchorId={mockAnchorId}
      />
    );

    const heading = renderCardSection.find('h1').last();
    expect(heading.text()).toBe(groupText[0].title[0].text);

    const paragraph = renderCardSection.find(Typo).last();
    expect(paragraph.text()).toBe(groupText[0].textField[1].text);
  });
});
