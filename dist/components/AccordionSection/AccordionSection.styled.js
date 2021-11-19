import { styled, css, spacing } from '@matthill8286/atomic-ui';
export var StyledAccordionWrapper = styled.div.withConfig({
  displayName: "AccordionSectionstyled__StyledAccordionWrapper",
  componentId: "sc-2o0z0q-0"
})(["margin-top:", ";font-family:", ";", ""], spacing.base.xxl, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family.default;
}, function (_ref2) {
  var theme = _ref2.theme,
      textColor = _ref2.textColor;
  return textColor && css(["color:", ";"], theme.color[textColor]);
});
//# sourceMappingURL=AccordionSection.styled.js.map