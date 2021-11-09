export const rawMockBulletedListWithChildren = {
  children: [
    {
      type: 'paragraph',
      children: [
        {
          text:
            'At Danone we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principles',
        },
      ],
    },
    {
      type: 'paragraph',
      children: [
        {
          text: '',
        },
      ],
    },
    {
      type: 'bulleted-list',
      children: [
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'You have no obligation to provide any personal data requested by us. However, if you choose not to, we may not be able to provide you with some services or products;',
                },
              ],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'We only collect and process your data for the purposes set out in this Privacy Statement or for specific purposes that we share with you and/or that you have consented to',
                },
              ],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'We aim to collect, process and use as little personal data as possible',
                },
              ],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'When we do collect your personal data, we aim to keep it as accurate and up to date as possible.',
                },
              ],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'If the personal data we collect is no longer needed for any purposes and we are not required by law to retain it, we will do what we can to delete, destroy or permanently de-identify it.',
                },
              ],
            },
          ],
        },
        {
          type: 'list-item',
          children: [
            {
              type: 'list-item-child',
              children: [
                {
                  text:
                    'Your personal data will not be shared, sold, rented or disclosed other than as described in this Privacy Statement.',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const mockRawWithBoldAndUnderline = {
  raw: {
    children: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'At ',
          },
          {
            bold: true,
            text: 'Danone',
          },
          {
            text: ' we are committed to protecting your right to privacy. ',
          },
          {
            bold: true,
            text: 'We aim to protect any personal',
          },
          {
            text:
              ' data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us.',
          },
          {
            text:
              'We have therefore committed ourselves to the following basic principles',
            underline: true,
          },
        ],
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'bulleted-list',
        children: [
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'You have no obligation to provide any personal data requested by us. However, if you choose not to, we may not be able to provide you with some services or products;',
                  },
                ],
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'We only collect and process your data for the purposes set out in this Privacy Statement or for specific purposes that we share with you and/or that you have consented to;',
                  },
                ],
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'We aim to collect, process and use as little personal data as possible;',
                  },
                ],
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'When we do collect your personal data, we aim to keep it as accurate and up to date as possible.',
                  },
                ],
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'If the personal data we collect is no longer needed for any purposes and we are not required by law to retain it, we will do what we can to delete, destroy or permanently de-identify it.',
                  },
                ],
              },
            ],
          },
          {
            type: 'list-item',
            children: [
              {
                type: 'list-item-child',
                children: [
                  {
                    text:
                      'Your personal data will not be shared, sold, rented or disclosed other than as described in this Privacy Statement.',
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
};

export const rawMockWithHeadingsCodeQuotesAssetIframes = {
  raw: {
    children: [
      {
        type: 'heading-one',
        children: [
          {
            text: 'Heading One',
          },
        ],
      },
      {
        type: 'heading-two',
        children: [
          {
            text: 'Heading Two',
          },
        ],
      },
      {
        type: 'heading-three',
        children: [
          {
            text: 'Heading Three',
          },
        ],
      },
      {
        type: 'heading-four',
        children: [
          {
            text: 'Heading Four',
          },
        ],
      },
      {
        type: 'heading-five',
        children: [
          {
            text: 'Heading Five',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            text: 'Heading six',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            code: true,
            text: 'coding like a banana',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            code: true,
            text: 'this is <Great />',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            code: true,
            text: '',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            code: true,
            text: '',
          },
          {
            id: 'atomic-link',
            href: 'https://atomic.com',
            type: 'link',
            title: 'Filtered',
            children: [
              {
                text: 'atomic.com',
              },
            ],
            className: 'link',
            openInNewTab: true,
          },
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            text: '',
          },
          {
            id: 'atomic-link',
            href: 'https://atomic.com',
            type: 'link',
            title: 'Filtered',
            children: [
              {
                text: '',
              },
            ],
            className: 'link',
            openInNewTab: true,
          },
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            text: '',
          },
          {
            id: 'atomic-link',
            href: 'https://atomic.com',
            type: 'link',
            title: 'Filtered',
            children: [
              {
                text: '',
              },
            ],
            className: 'link',
            openInNewTab: true,
          },
          {
            text: '',
          },
        ],
      },
      {
        url: 'https://www.youtube.com/embed/Ll4uC26QLuw',
        type: 'iframe',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'heading-six',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'block-quote',
        children: [
          {
            text: 'Quoting!!!!',
          },
        ],
      },
      {
        type: 'block-quote',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        type: 'block-quote',
        children: [
          {
            text: '',
          },
        ],
      },
      {
        src: 'https://media.graphcms.com/A7oKwCYcTu6p01rVOkX1',
        type: 'image',
        title: 'Image SN 14 Dec 20.png',
        width: 444,
        handle: 'A7oKwCYcTu6p01rVOkX1',
        height: 297,
        children: [
          {
            text: '',
          },
        ],
        mimeType: 'image/png',
      },
      {
        type: 'paragraph',
        children: [
          {
            text: '',
          },
        ],
      },
    ],
  },
};

// Simple Mocks
export const fullResponse = {
  heading: {
    raw: {
      children: [
        {
          type: 'paragraph',
          children: [
            {
              text:
                'At Danone we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principle',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'bulleted-list',
          children: [
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'You have no obligation to provide any personal data requested by us. However, if you choose not to, we may not be able to provide you with some services or products;',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'We only collect and process your data for the purposes set out in this Privacy Statement or for specific purposes that we share with you and/or that you have consented to;',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'We aim to collect, process and use as little personal data as possible;',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'When we do collect your personal data, we aim to keep it as accurate and up to date as possible.',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'If the personal data we collect is no longer needed for any purposes and we are not required by law to retain it, we will do what we can to delete, destroy or permanently de-identify it.',
                    },
                  ],
                },
              ],
            },
            {
              type: 'list-item',
              children: [
                {
                  type: 'list-item-child',
                  children: [
                    {
                      text:
                        'Your personal data will not be shared, sold, rented or disclosed other than as described in this Privacy Statement.',
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  },
};

export const embeddedMedia = {
  id: 'ckl95fb7ceuli0a58g6uf2fb5',
  __typename: 'EmbeddedSection',
  mediaEmbed: {
    raw: {
      children: [
        {
          type: 'heading-two',
          children: [
            {
              text: 'Vivamus eu lacus orc',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          url: 'https://www.youtube.com/embed/edpsKDhRclM',
          type: 'iframe',
          children: [
            {
              text: '',
            },
          ],
        },
        {
          type: 'paragraph',
          children: [
            {
              text: '',
            },
          ],
        },
      ],
    },
  },
};
