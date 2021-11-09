import { spacing, styled } from '@matthill8286/atomic-ui';
export var StyledMultiColumnTextSection = styled.div.withConfig({
  displayName: "MultiColumnTextSectionstyled__StyledMultiColumnTextSection",
  componentId: "sc-1m59pz3-0"
})(["\n  ", "\n  line-height: ", "\n"], function (_ref) {
  var active = _ref.active;

  if (active) {
    return "padding-top: ".concat(spacing.base.md);
  }

  return "padding: ".concat(spacing.base.md);
}, function (_ref2) {
  var theme = _ref2.theme;
  return theme.spacing.base.lg;
});
//# sourceMappingURL=MultiColumnTextSection.styled.js.map