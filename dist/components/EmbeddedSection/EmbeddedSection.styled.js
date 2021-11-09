import { css, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
export var StyledPaddedEmbed = styled.div.withConfig({
  displayName: "EmbeddedSectionstyled__StyledPaddedEmbed",
  componentId: "ho7uc0-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["\n      padding: ", ";\n      position: absolute;\n      top: 0;\n      left: 0;\n      bottom: 0;\n      right: 0;\n      width: 100%;\n      height: 100%;\n    "], theme.spacing.base.md);
});
export var StyledPaddedEmbedSection = styled(CustomSection).withConfig({
  displayName: "EmbeddedSectionstyled__StyledPaddedEmbedSection",
  componentId: "ho7uc0-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["\n      padding: ", ";\n      position: relative;\n      overflow: hidden;\n      width: 100%;\n      padding-top: 56.25%;\n      margin-bottom: calc(", "* 2);\n    "], theme.spacing.base.md, theme.spacing.base.xl);
});
//# sourceMappingURL=EmbeddedSection.styled.js.map