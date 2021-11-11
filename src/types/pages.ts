import * as React from 'react'
import { NamedExoticComponent } from 'react'
import { AppMetaProps } from '../components'

export type PageConfigType = {
  landingPageContent: any
  metaProps: any
  PageContent: any
  withPageHead: boolean
  slices?: PageContent<any>
}

export type PageComponents = {
  pageHead: JSX.Element | React.ReactElement | undefined
  pageContent: JSX.Element | React.ReactElement | undefined
}

export type PageContent<T> = NamedExoticComponent<T> | JSX.Element | React.ReactElement | undefined

export interface PageTemplateProps {
  metaProps?: AppMetaProps
  key?: string
  overridePlaylistClickEvent?: boolean
  PageContent: PageContent<HTMLDivElement>
  withPageHead: boolean
  generator?: string
  landingPageContent: any
  dataTestId?: string
  errorPage?: any
}
