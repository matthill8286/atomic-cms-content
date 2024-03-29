import { Elements } from "../../types";
export var getHeadline = function getHeadline() {
  var level = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'one';
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '1';
  return {
    type: "heading-".concat(level),
    children: [{
      text: "h".concat(tag, " Headline")
    }]
  };
};
export var getParagraph = function getParagraph() {
  return {
    type: Elements.paragraph,
    children: [{
      text: 'At Danone we are committed to protecting your right to privacy. We aim to protect any personal data we hold, to manage your personal data in a responsible way and to be transparent in our practices. Your trust is important to us. We have therefore committed ourselves to the following basic principles'
    }]
  };
};
export var getStrongParagraph = function getStrongParagraph() {
  return {
    type: Elements.paragraph,
    children: [{
      text: 'At '
    }, {
      bold: true,
      text: 'Danone'
    }, {
      text: ' we are committed to protecting your right to privacy. '
    }, {
      bold: true,
      text: 'We aim to protect any personal'
    }]
  };
};
export var getEmParagraph = function getEmParagraph() {
  return {
    type: Elements.paragraph,
    children: [{
      type: 'paragraph',
      children: [{
        text: 'get the em text',
        italic: true
      }]
    }]
  };
};
export var getUrlParagraph = function getUrlParagraph() {
  return {
    type: Elements.paragraph,
    children: [{
      id: 'srghetkuyhtgrf',
      rel: 'dsrhjtykghjhrgvd',
      href: 'https://atomic.com',
      type: 'link',
      title: 'Filtered',
      children: [],
      className: 'fart',
      openInNewTab: true
    }]
  };
};
export var getImage = function getImage() {
  return {
    src: 'https://media.graphcms.com/J25IRsKJSdCSPJPBNVmL',
    type: 'image',
    title: 'presentation-software-A.jpg',
    width: 850,
    height: 766,
    handle: 'J25IRsKJSdCSPJPBNVmL',
    mimeType: 'image/jpeg'
  };
};
export var getListItem = function getListItem() {
  return {
    type: 'bulleted-list',
    children: [{
      type: 'list-item',
      children: [{
        type: 'list-item-child',
        children: [{
          text: 'You have no obligation to provide any personal data requested by us. However, if you choose not to, we may not be able to provide you with some services or products;'
        }]
      }]
    }]
  };
};
//# sourceMappingURL=RichTextHtmlSerializer.mock.js.map