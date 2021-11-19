import { css, media, styled } from '@matthill8286/atomic-ui';
export var ProductTileLink = styled.div.withConfig({
  displayName: "ProductNewsCarouselstyled__ProductTileLink",
  componentId: "xvosy3-0"
})(["text-decoration:none;"]);
export var TileWrapper = styled.article.withConfig({
  displayName: "ProductNewsCarouselstyled__TileWrapper",
  componentId: "xvosy3-1"
})(["outline:none;padding:", ";padding-top:", ";width:100%;", ""], function (_ref) {
  var theme = _ref.theme;
  return "".concat(theme.spacing.base.sm, " 0 ").concat(theme.spacing.base.sm, ";");
}, function (_ref2) {
  var theme = _ref2.theme,
      withLabels = _ref2.withLabels;
  return withLabels ? theme.spacing.base.sm : theme.spacing.base.xs;
}, function (_ref3) {
  var hideDummy = _ref3.hideDummy;
  return hideDummy && css(["visibility:hidden;"]);
});
export var TileFragment = styled.div.withConfig({
  displayName: "ProductNewsCarouselstyled__TileFragment",
  componentId: "xvosy3-2"
})(["width:100%;"]);
export var CarouselWrapper = styled.div.withConfig({
  displayName: "ProductNewsCarouselstyled__CarouselWrapper",
  componentId: "xvosy3-3"
})(["& li{margin:0 !important;padding:", " !important;", " & li:first-child{padding-left:0 !important;}& li:last-child{min-width:0;padding-right:calc((100vw - 100%) / 2 - 32px) !important;}"], function (_ref4) {
  var theme = _ref4.theme,
      tileMargin = _ref4.tileMargin;
  return "".concat(Number(theme.spacing.base[tileMargin].replace('px', '')) / 2, "px");
}, function (_ref5) {
  var setFixedWidth = _ref5.setFixedWidth,
      tileWidth = _ref5.tileWidth,
      isGridLayout = _ref5.isGridLayout;
  return setFixedWidth && css(["", ",", "{min-width:", ";width:", ";min-height:", ";}}"], media.xl, media.lg, isGridLayout && setFixedWidth && tileWidth ? "".concat(tileWidth, "px !important;") : !isGridLayout ? "50%" : "360px !important", isGridLayout && setFixedWidth && tileWidth ? "".concat(tileWidth, "px !important;") : !isGridLayout ? "inherit" : "360px !important", !isGridLayout && " min-height: ".concat(tileWidth, "px;"));
});
//# sourceMappingURL=ProductNewsCarousel.styled.js.map