import React from 'react';
import { css, styled, Picture, CopyText, Heading } from '@matthill8286/atomic-ui';
export var ServicesItemImage = styled(Picture).withConfig({
  displayName: "ServicesItem__ServicesItemImage",
  componentId: "x7ck7v-0"
})(["position:absolute;top:0;right:0;bottom:0;opacity:0.2;filter:alpha(opacity=20);-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';transition:all 0.3s linear;z-index:1;@media all and (-ms-high-contrast:none),(-ms-high-contrast:active){.img-cover{display:none;visibility:hidden;}}"]);
export var ServicesWrapper = styled.div.withConfig({
  displayName: "ServicesItem__ServicesWrapper",
  componentId: "x7ck7v-1"
})(["position:relative;width:100%;height:100%;transition:all 0.3s linear;z-index:10;padding:", ";background:", " no-repeat center center;&:before{content:'';position:absolute;top:0;left:0;right:0;bottom:0;z-index:2;}&:hover{transition:all 0.3s linear;img{opacity:0;filter:alpha(opacity=0);-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';transition:all 0.3s linear;}.the-overline{background:", ";}}"], function (_ref) {
  var theme = _ref.theme;
  return theme.spacing.base.md;
}, function (_ref2) {
  var variant = _ref2.variant,
      theme = _ref2.theme;
  return variant === 'light' ? theme.color.white : theme.color.black;
}, function (_ref3) {
  var variant = _ref3.variant,
      theme = _ref3.theme;
  return variant === 'light' ? theme.color.black : theme.color.alert;
});
export var ServicesItemContent = styled.div.withConfig({
  displayName: "ServicesItem__ServicesItemContent",
  componentId: "x7ck7v-2"
})(["position:relative;z-index:3;"]);
export var PostTitle = styled(Heading).withConfig({
  displayName: "ServicesItem__PostTitle",
  componentId: "x7ck7v-3"
})(["transition:all 0.3s linear;", ""], function (_ref4) {
  var theme = _ref4.theme,
      variant = _ref4.variant;
  return variant === 'light' ? css(["&:hover{color:#ff264a;.the-overline{background:#fff;}}"]) : css(["color:white;&:hover{color:#fff;.the-overline{background:#ff264a;}}"]);
});
export var ServicesItem = function ServicesItem(_ref5) {
  var title = _ref5.title,
      description = _ref5.description,
      backgroundImage = _ref5.backgroundImage,
      number = _ref5.number,
      variant = _ref5.variant,
      _ref5$withOverline = _ref5.withOverline,
      withOverline = _ref5$withOverline === void 0 ? true : _ref5$withOverline,
      limitLines = _ref5.limitLines,
      children = _ref5.children;
  return React.createElement(ServicesWrapper, {
    variant: variant
  }, React.createElement(ServicesItemContent, null, React.createElement("div", {
    className: "inner-divider"
  }), React.createElement("div", {
    className: "post-all inner-spacer-services"
  }, React.createElement(Heading, {
    scale: "level-5",
    margin: "0",
    className: "services-sub-header-dark"
  }, number), React.createElement("div", {
    className: "inner-divider-half"
  }), withOverline && React.createElement("div", {
    className: "the-overline services-dark the-overline-services"
  }), React.createElement("div", {
    className: "inner-divider-half"
  }), React.createElement(PostTitle, {
    scale: "level-2",
    tag: "div",
    uppercase: true,
    variant: variant
  }, title), React.createElement("div", {
    className: "inner-divider-services"
  }), React.createElement("div", {
    className: "section-txt-services section-txt-services-dark"
  }, React.createElement(CopyText, {
    limitLines: limitLines,
    color: "grey4",
    textAlign: "left"
  }, description), children)), React.createElement("div", {
    className: "inner-divider"
  })), React.createElement(ServicesItemImage, {
    alt: "Services Img",
    src: backgroundImage
  }));
};
//# sourceMappingURL=ServicesItem.js.map