export interface AdditionalMeta {
  name?: string
  content?: string | string[]
  property?: string
}

export interface AppMetaProps {
  title?: string
  metaKey?: string | number
  description?: string | null
  generator?: string
  keywords?: string[] | undefined
  canonical?: string
  imageUrl?: string
  prev?: string
  next?: string
  type?: string
  fontList?: string[]
  preconnectLinkList?: string[]
  prefetchLinkList?: string[]
  additionalMetas?: AdditionalMeta[]
  includeProductInTitle?: boolean
  productName?: string
}
