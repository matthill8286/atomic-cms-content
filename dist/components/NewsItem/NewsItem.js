import React, { memo } from 'react';
import { Button, CopyText, Spacer } from '@matthill8286/atomic-ui';
import { NewsDateStyled, NewsHeadingStyled, NewsImageStyled } from './News.styled';
import './style.css';
import { Overline } from '../Overline';
export var NewsItem = memo(function (_ref) {
  var image = _ref.image,
      title = _ref.title,
      description = _ref.description,
      date = _ref.date,
      newsText = _ref.newsText,
      buttonLabel = _ref.buttonLabel,
      buttonLink = _ref.buttonLink;
  return React.createElement("div", {
    className: "news-item"
  }, React.createElement("figure", {
    className: "news-content"
  }, React.createElement(NewsImageStyled, {
    alt: "News Img",
    src: image
  }), React.createElement("figcaption", null, React.createElement("div", {
    className: "inner-divider-news-half"
  }), React.createElement(Overline, {
    type: "news"
  }), React.createElement(Spacer, {
    size: "xl"
  }), React.createElement(NewsHeadingStyled, {
    weight: "bold",
    scale: "level-3"
  }, title), React.createElement(Spacer, {
    size: "xl"
  }), React.createElement(CopyText, {
    fontSize: "xxxxxl",
    className: "post-all-heading"
  }, description), React.createElement(Spacer, {
    size: "xl"
  }), React.createElement(NewsDateStyled, {
    scale: "level-5"
  }, date), React.createElement(Spacer, {
    size: "xxl"
  }), React.createElement(CopyText, {
    tag: "div",
    textAlign: "center",
    lineHeight: "md"
  }, newsText), React.createElement(Spacer, {
    size: "xl"
  }), React.createElement(Button, {
    actionType: "ghost",
    size: "sm",
    className: "the-button",
    "data-toggle": "modal",
    href: buttonLink
  }, buttonLabel))));
});
//# sourceMappingURL=NewsItem.js.map