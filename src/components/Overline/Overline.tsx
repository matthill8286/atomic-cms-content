import * as React from 'react'

type Types = 'services' | 'home' | 'news' | 'testimonials' | 'featured' | 'contact'

export interface IDivider {
  type?: Types
}

export const Overline = ({ type }: IDivider) => (
  <div className={`the-overline the-overline-${type || ``}`} />
)
