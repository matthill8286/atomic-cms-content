import * as React from 'react';
import { CopyText, Heading, Link, Picture, mountWithTheme } from '@matthill8286/atomic-ui';
import { getHeadline, getParagraph, getStrongParagraph, getEmParagraph, getUrlParagraph, getImage } from "./RichTextHtmlSerializer.mock";
import { ConfigurableGraphCmsHtmlSerializer } from "./ConfigurableGraphCmsHtmlSerializer";
import { Serializer } from "./HtmlSerializer";

var renderWrapper = function renderWrapper() {
  var richTextList = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return mountWithTheme(React.createElement(React.Fragment, null, Serializer(richTextList, ConfigurableGraphCmsHtmlSerializer)));
};

xdescribe('RichText with Serializer', function () {
  it('renders h1 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('one', '1')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h1');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-1');
  });
  it('renders h2 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('two', '2')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h2');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-2');
  });
  it('renders h3 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('three', '3')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h3');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-3');
  });
  it('renders h4 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('four', '4')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h4');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4');
  });
  it('renders h5 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('five', '5')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h5');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4');
  });
  it('renders h6 element correctly', function () {
    var wrapper = renderWrapper([getHeadline('six', '6')]);
    expect(wrapper.find(Heading)).toHaveLength(1);
    expect(wrapper.find(Heading).prop('tag')).toEqual('h6');
    expect(wrapper.find(Heading).prop('scale')).toEqual('level-4');
  });
  it('renders p element correctly', function () {
    var wrapper = renderWrapper([getParagraph()]);
    expect(wrapper.find(CopyText)).toHaveLength(1);
  });
  it.todo('renders strong element correctly', function () {
    var wrapper = renderWrapper([getStrongParagraph()]);
    expect(wrapper.find(CopyText)).toHaveLength(2);
    expect(wrapper.find(CopyText).at(0).prop('withMargins')).toBeTruthy();
    expect(wrapper.find(CopyText).at(1).prop('withMargins')).toBeFalsy();
    expect(wrapper.find(CopyText).at(1).prop('tag')).toEqual('strong');
  });
  it.todo('renders em element correctly', function () {
    var wrapper = renderWrapper([getEmParagraph()]);
    expect(wrapper.find(CopyText)).toHaveLength(2);
    expect(wrapper.find(CopyText).at(0).prop('withMargins')).toBeTruthy();
    expect(wrapper.find(CopyText).at(1).prop('withMargins')).toBeFalsy();
    expect(wrapper.find(CopyText).at(1).prop('tag')).toEqual('em');
  });
  it.todo('renders urls correctly', function () {
    var wrapper = renderWrapper([getUrlParagraph()]);
    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).prop('underline')).toBeTruthy();
    expect(wrapper.find(Link).prop('href')).toEqual('https://mediamarkt.de');
  });
  it.todo('renders images correctly', function () {
    var wrapper = renderWrapper([getImage()]);
    expect(wrapper.find(Picture)).toHaveLength(1);
    expect(wrapper.find(Picture).find('img').prop('src')).toBeTruthy();
    expect(wrapper.find(Picture).find('img').prop('alt')).toEqual('altText');
    expect(wrapper.find(Picture).find('img').prop('width')).toEqual(1920);
    expect(wrapper.find(Picture).find('img').prop('height')).toEqual(1080);
  });
});
//# sourceMappingURL=RichTextHtmlSerializer.test.js.map