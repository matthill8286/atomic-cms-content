import React, { memo } from 'react';
import { CopyText, HeadingFeatured, Button, Card, Spacer } from '@matthill8286/atomic-ui';
export var WorkItem = memo(function (_ref) {
  var intro = _ref.intro,
      title = _ref.title,
      description = _ref.description,
      workText = _ref.workText,
      buttonLabel = _ref.buttonLabel,
      buttonLink = _ref.buttonLink;
  return React.createElement(Card, {
    elevation: 0,
    padding: "sm",
    center: false,
    noBorder: "none"
  }, React.createElement(Card, {
    elevation: 0,
    padding: {
      left: 'md'
    },
    noBorder: "none"
  }, React.createElement(CopyText, {
    weight: "semibold",
    color: "black",
    padding: "0"
  }, intro), React.createElement(Spacer, {
    size: "xs"
  }), React.createElement(HeadingFeatured, {
    color: "black",
    margin: "0"
  }, title), React.createElement(Spacer, {
    size: "xs"
  }), React.createElement(CopyText, {
    weight: "bold",
    fontSize: "lg",
    color: "black"
  }, description), React.createElement(Spacer, {
    size: "xs"
  }), React.createElement(CopyText, {
    weight: "semibold",
    color: "black"
  }, workText), React.createElement(Spacer, {
    size: "xs"
  })), React.createElement(Button, {
    actionType: "ghost",
    isFlat: true,
    color: "black",
    weight: "bold",
    href: buttonLink,
    size: "sm"
  }, buttonLabel));
});
//# sourceMappingURL=WorkItem.js.map