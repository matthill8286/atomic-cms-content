import { Asset, ThemeColors } from '@matthill8286/atomic-ui'

export interface CallToActionPlaylistProps {
  slices: any[]
  setAssetInformation: (information: Partial<Asset>) => void
  dataTestId?: string
  sectionColor?: ThemeColors
  overridePlaylistClickEvent?: boolean
  routeContext: string
  modalLocked?: any
  modalBlock?: any
}
