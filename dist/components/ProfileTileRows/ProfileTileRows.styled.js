import { Card, css, media, Picture, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from '../CustomSection';
export var StyledPaddedSection = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledPaddedSection",
  componentId: "wi32zr-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["padding-left:", ";> p{margin-bottom:", ";}"], theme.spacing.base.xl, theme.spacing.base.xs);
});
export var StyledProfileDetailsColumn = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledProfileDetailsColumn",
  componentId: "wi32zr-1"
})(["justify-content:flex-start;align-content:flex-start;display:flex;flex-grow:1;"]);
export var StyledCard = styled(Card).withConfig({
  displayName: "ProfileTileRowsstyled__StyledCard",
  componentId: "wi32zr-2"
})(["display:flex;flex-direction:row;"]);
export var StyledAvatarWrapper = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledAvatarWrapper",
  componentId: "wi32zr-3"
})(["justify-content:center;align-content:flex-start;display:flex;flex-basis:100px;"]);
export var StyledAvatar = styled(Picture).withConfig({
  displayName: "ProfileTileRowsstyled__StyledAvatar",
  componentId: "wi32zr-4"
})(["height:90px;width:90px;margin:0 auto;"]);
export var StyledRelative = styled.div.withConfig({
  displayName: "ProfileTileRowsstyled__StyledRelative",
  componentId: "wi32zr-5"
})(["position:relative;"]);
export var StyledProfileSection = styled(CustomSection).withConfig({
  displayName: "ProfileTileRowsstyled__StyledProfileSection",
  componentId: "wi32zr-6"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["", "{margin-bottom:", ";}"], media.maxSm, theme.spacing.base.xxl);
});
//# sourceMappingURL=ProfileTileRows.styled.js.map