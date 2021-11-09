import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {mountWithTheme} from '@matthill8286/atomic-ui';
import {TextSection} from './index';
import {Elements, RichTextBlock} from '../../types/richtext/graphcms-richtext';

const mockAnchorId = 'richTextAnchorId';

xdescribe('Landing:Components:TextSection', () => {
  afterEach(cleanup);

  it('renders section with link and label', () => {
    const aliceRichText: RichTextBlock = {
      children: [{text: 'Alice and bob'}],
      type: Elements.paragraph,
    };
    const textSection = mountWithTheme(
      <TextSection richText={[aliceRichText]} anchorId={mockAnchorId} />
    );
    const paragrpah = textSection.find('p').last();
    expect(paragrpah.text()).toBe(aliceRichText.children[0].text);
  });
});
