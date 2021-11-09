import { Asset, ThemeColors, AssetCarouselDefaultProps } from '@matthill8286/atomic-ui'

export interface StaticAssetCarouselProps extends Partial<AssetCarouselDefaultProps> {
  onSlideChange?: ({ context }: { context: string }) => void
  onInView?: ({ context }: { context: string }) => void
  onLockClick?: ({ asset }: { asset: Asset }) => void
  onAssetClick?: ({ asset }: { asset: Asset }) => void
  headline?: string
  dataTest?: string
  staticPlaylists?: Array<{ staticAssetTiles: Asset[] }>
  playlistName?: string
  playlistId?: string
  showScrollbar?: boolean
  name?: string
  description?: string
  tooltip?: string
  desktop?: number
  paddingTop?: string
  playlistBackground?: ThemeColors
  overridePlaylistClickEvent?: boolean
  routeContext?: string
  modalLocked?: any
  modalBlock?: any
  showDivider?: boolean
  openModal?: (name: any, { asset, playlistId }: any) => void
}
