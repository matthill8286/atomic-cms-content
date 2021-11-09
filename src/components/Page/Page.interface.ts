import * as React from 'react'
import { NamedExoticComponent } from 'react'
import { AppMetaProps } from '../AppMeta'

export type PageConfigType = {
  landingPageContent: any
  metaProps?: AppMetaProps
}

export type PageComponents = {
  pageHead: JSX.Element | React.ReactElement | undefined
  pageContent: JSX.Element | React.ReactElement | undefined
}

export type PageContent<T> = NamedExoticComponent<T> | JSX.Element | React.ReactElement | undefined

export interface PageTemplateProps {
  metaProps?: AppMetaProps
  key?: string
  PageContent: PageContent<any>
  withPageHead: boolean
  generator?: string
  landingPageContent: any
  overridePlaylistClickEvent: boolean
  errorPage?: any
}
