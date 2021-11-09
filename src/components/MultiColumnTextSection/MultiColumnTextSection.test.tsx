import {cleanup} from '@testing-library/react';
import * as React from 'react';
import {CopyText, mountWithTheme} from '@matthill8286/atomic-ui';
import {MultiColumnTextSection} from './index';
import {Elements} from '../../types';

const mockAnchorId = 'richTextAnchorId';

xdescribe('Landing:Components:TextSection', () => {
  afterEach(cleanup);

  it.skip('renders section with link and label', () => {
    const aliceRichText = {
      children: [
        {
          children: [{text: 'Alice and bob'}],
          type: Elements.paragraph,
        },
      ],
    };
    const textSection = mountWithTheme(
      <MultiColumnTextSection
        richTextColumns={undefined}
        anchorId={mockAnchorId}
      />
    );
    const paragrpah = textSection.find(CopyText).last();
    expect(paragrpah.text()).toBe(aliceRichText.children[0].text);
  });
});
