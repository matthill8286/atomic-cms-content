import { Card, css, media, Picture, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from "../CustomSection";
export var StyledPaddedSection = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledPaddedSection",
  componentId: "ywld4k-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["\n      padding-left: ", ";\n\n      > p {\n        margin-bottom: ", ";\n      }\n    "], theme.spacing.base.xl, theme.spacing.base.xs);
});
export var StyledProfileDetailsColumn = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledProfileDetailsColumn",
  componentId: "ywld4k-1"
})(["\n  justify-content: flex-start;\n  align-content: flex-start;\n  display: flex;\n  flex-grow: 1;\n"]);
export var StyledCard = styled(Card).withConfig({
  displayName: "ProfileTileRowsstyled__StyledCard",
  componentId: "ywld4k-2"
})(["\n  display: flex;\n  flex-direction: row;\n"]);
export var StyledAvatarWrapper = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledAvatarWrapper",
  componentId: "ywld4k-3"
})(["\n  justify-content: center;\n  align-content: flex-start;\n  display: flex;\n  flex-basis: 100px;\n"]);
export var StyledAvatar = styled(Picture).withConfig({
  displayName: "ProfileTileRowsstyled__StyledAvatar",
  componentId: "ywld4k-4"
})(["\n  height: 90px;\n  width: 90px;\n  margin: 0 auto;\n"]);
export var StyledRelative = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledRelative",
  componentId: "ywld4k-5"
})(["\n  position: relative;\n"]);
export var StyledProfileSection = styled(CustomSection).withConfig({
  displayName: "ProfileTileRowsstyled__StyledProfileSection",
  componentId: "ywld4k-6"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["\n      ", " {\n        margin-bottom: ", ";\n      }\n    "], media.maxSm, theme.spacing.base.xxl);
});
//# sourceMappingURL=ProfileTileRows.styled.js.map