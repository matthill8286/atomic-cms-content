import { css, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from '../CustomSection';
export var StyledPaddedEmbed = styled.div.withConfig({
  displayName: "EmbeddedSectionstyled__StyledPaddedEmbed",
  componentId: "ho7uc0-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["padding:", ";position:absolute;top:0;left:0;bottom:0;right:0;width:100%;height:100%;"], theme.spacing.base.md);
});
export var StyledPaddedEmbedSection = styled(CustomSection).withConfig({
  displayName: "EmbeddedSectionstyled__StyledPaddedEmbedSection",
  componentId: "ho7uc0-1"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["padding:", ";position:relative;overflow:hidden;width:100%;padding-top:56.25%;margin-bottom:calc(", "* 2);"], theme.spacing.base.md, theme.spacing.base.xl);
});
//# sourceMappingURL=EmbeddedSection.styled.js.map