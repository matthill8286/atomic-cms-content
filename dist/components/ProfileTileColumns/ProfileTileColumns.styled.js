import { css, media, Picture, styled } from '@matthill8286/atomic-ui';
import { CustomSection } from '../CustomSection';
export var StyledPaddedSection = styled.div.withConfig({
  displayName: "ProfileTileColumnsstyled__StyledPaddedSection",
  componentId: "gq651v-0"
})(function (_ref) {
  var theme = _ref.theme;
  return css(["padding:", " ", " ", " ", ";> p{margin-bottom:", ";}"], theme.spacing.base.xl, theme.spacing.base.md, theme.spacing.base.xxl, theme.spacing.base.xl, theme.spacing.base.xs);
});
export var StyledAvatar = styled(Picture).withConfig({
  displayName: "ProfileTileColumnsstyled__StyledAvatar",
  componentId: "gq651v-1"
})(["position:absolute;top:-42px;width:90px;height:90px;margin:0 auto;display:flex;justify-content:center;align-content:center;"]);
export var StyledRelative = styled.div.withConfig({
  displayName: "ProfileTileColumnsstyled__StyledRelative",
  componentId: "gq651v-2"
})(["position:relative;"]);
export var StyledProfileSection = styled(CustomSection).withConfig({
  displayName: "ProfileTileColumnsstyled__StyledProfileSection",
  componentId: "gq651v-3"
})(function (_ref2) {
  var theme = _ref2.theme;
  return css(["", "{margin-bottom:", ";}"], media.maxSm, theme.spacing.base.xxl);
});
//# sourceMappingURL=ProfileTileColumns.styled.js.map