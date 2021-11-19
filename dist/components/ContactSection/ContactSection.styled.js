import { css, styled } from '@matthill8286/atomic-ui';
export var StyledPaddedSection = styled.div.withConfig({
  displayName: "ContactSectionstyled__StyledPaddedSection",
  componentId: "sc-1afm4xk-0"
})(function (_ref) {
  var theme = _ref.theme,
      _ref$align = _ref.align,
      align = _ref$align === void 0 ? 'flex-start' : _ref$align,
      justify = _ref.justify,
      _ref$alignText = _ref.alignText,
      alignText = _ref$alignText === void 0 ? 'left' : _ref$alignText,
      withPadding = _ref.withPadding;
  return css(["padding:", ";align-items:", ";justify-content:", ";text-align:", ";flex-direction:column;height:100%;display:flex;"], withPadding && theme.spacing.base.xs, align, justify, alignText);
});
//# sourceMappingURL=ContactSection.styled.js.map