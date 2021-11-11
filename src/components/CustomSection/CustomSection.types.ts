import { Padding, SectionProps } from '@matthill8286/atomic-ui'
import React from 'react'

export type CustomSectionProps = {
  children: React.ReactNode
  id?: string | null
  overrideOver?: boolean
  padding?: Padding
} & Partial<SectionProps>
