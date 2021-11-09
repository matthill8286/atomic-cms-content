import { styled, Section } from '@matthill8286/atomic-ui';
export var StyledCustomSection = styled(Section).withConfig({
  displayName: "CustomSectionstyled__StyledCustomSection",
  componentId: "hloly1-0"
})(["\n  background-color: ", ";\n  padding-top: ", ";\n  padding-bottom: ", ";\n  overflow: ", ";\n\n  ul,\n  ol,\n  p {\n    a {\n      border-bottom: 1px solid;\n      border-color: ", ";\n      color: ", ";\n    }\n  }\n"], function (_ref) {
  var color = _ref.color,
      theme = _ref.theme;
  return color && theme.color[color];
}, function (_ref2) {
  var theme = _ref2.theme,
      paddingTop = _ref2.paddingTop;
  return theme.spacing.base[paddingTop];
}, function (_ref3) {
  var theme = _ref3.theme,
      paddingBottom = _ref3.paddingBottom;
  return theme.spacing.base[paddingBottom];
}, function (_ref4) {
  var overrideOver = _ref4.overrideOver;
  return overrideOver && 'unset !important';
}, function (_ref5) {
  var theme = _ref5.theme;
  return theme.color.primary;
}, function (_ref6) {
  var theme = _ref6.theme;
  return theme.color.primary;
});
//# sourceMappingURL=CustomSection.styled.js.map