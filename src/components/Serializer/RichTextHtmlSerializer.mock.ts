import { Elements, NodeChild, RichTextBlock } from '../../types'

export const getHeadline = (level = 'one', tag = '1'): RichTextBlock => {
  return {
    type: `heading-${level}`,
    children: [
      {
        text: `h${tag} Headline`,
      },
    ],
  }
}

export const getParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    children: [
      {
        text:
          'At Alternate we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principles',
      },
    ],
  }
}

export const getStrongParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    children: [
      {
        text: 'At ',
      },
      {
        bold: true,
        text: 'Alternate',
      },
      {
        text: ' we are committed to protecting your right to privacy. ',
      },
      {
        bold: true,
        text: 'We aim to protect any personal',
      },
    ],
  }
}

export const getEmParagraph = () => {
  return {
    type: Elements.paragraph,
    children: [
      {
        type: 'paragraph',
        children: [
          {
            text: 'get the em text',
            italic: true,
          },
        ],
      },
    ],
  }
}

export const getUrlParagraph = (): RichTextBlock => {
  return {
    type: Elements.paragraph,
    children: [
      {
        id: 'srghetkuyhtgrf',
        rel: 'dsrhjtykghjhrgvd',
        href: 'https://atomic.com',
        type: 'link',
        title: 'Atomic',
        children: [],
        className: 'fart',
        openInNewTab: true,
      },
    ],
  }
}

export const getImage = (): NodeChild => {
  return {
    src: 'https://media.graphcms.com/J25IRsKJSdCSPJPBNVmL',
    type: 'image',
    title: 'presentation-software-A.jpg',
    width: 850,
    height: 766,
    handle: 'J25IRsKJSdCSPJPBNVmL',
    mimeType: 'image/jpeg',
  }
}

export const getListItem = (): RichTextBlock => {
  return {
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
    ],
  }
}
