import {
  Asset,
  ThemeColors,
  AssetCarouselDefaultProps,
} from '@matthill8286/atomic-ui';
import {ModalBlock, ModalLocked} from '@lxp/webmobile-cms-graphql';

export interface StaticAssetCarouselProps
  extends Partial<AssetCarouselDefaultProps> {
  onSlideChange?: ({context}: {context: string}) => void;
  onInView?: ({context}: {context: string}) => void;
  onLockClick?: ({asset}: {asset: Asset}) => void;
  onAssetClick?: ({asset}: {asset: Asset}) => void;
  headline?: string;
  dataTest?: string;
  staticPlaylists?: Array<{staticAssetTiles: Asset[]}>;
  playlistName?: string;
  playlistId?: string;
  showScrollbar?: boolean;
  name?: string;
  description?: string;
  tooltip?: string;
  desktop?: number;
  paddingTop?: string;
  playlistBackground?: ThemeColors;
  overridePlaylistClickEvent?: boolean;
  routeContext?: string;
  modalLocked?: ModalLocked;
  modalBlock?: ModalBlock;
  showDivider?: boolean;
  openModal?: (name, {asset, playlistId}) => void;
}
