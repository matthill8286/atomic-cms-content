import {Asset, ThemeColors} from '@matthill8286/atomic-ui';
import {ModalBlock, ModalLocked} from '@lxp/webmobile-cms-graphql';

export interface CallToActionPlaylistProps {
  slices: any[];
  setAssetInformation: (information: Partial<Asset>) => void;
  dataTestId?: string;
  sectionColor?: ThemeColors;
  overridePlaylistClickEvent?: boolean;
  routeContext: string;
  modalLocked?: ModalLocked;
  modalBlock?: ModalBlock;
}
