import { Product, ThemeColors } from '@matthill8286/atomic-ui'

export interface CallToActionPlaylistProps {
  slices: any[]
  setProductInformation: (information: Partial<Product>) => void
  dataTestId?: string
  sectionColor?: ThemeColors
  overridePlaylistClickEvent?: boolean
  routeContext: string
  modalLocked?: any
  modalBlock?: any
}
