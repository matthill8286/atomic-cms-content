import { styled, css, spacing } from '@matthill8286/atomic-ui';
export var StyledAccordionWrapper = styled.div.withConfig({
  displayName: "AccordionSectionstyled__StyledAccordionWrapper",
  componentId: "d04zps-0"
})(["\n  margin-top: ", ";\n  font-family: ", ";\n  ", "\n"], spacing.base.xxl, function (_ref) {
  var theme = _ref.theme;
  return theme.font.family.default;
}, function (_ref2) {
  var theme = _ref2.theme,
      textColor = _ref2.textColor;
  return textColor && css(["\n      color: ", ";\n    "], theme.color[textColor]);
});
//# sourceMappingURL=AccordionSection.styled.js.map