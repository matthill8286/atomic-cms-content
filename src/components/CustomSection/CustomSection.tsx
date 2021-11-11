import * as React from 'react'
import { StyledCustomSection } from './CustomSection.styled'
import { CustomSectionProps } from './CustomSection.types'

export const CustomSection: React.FC<CustomSectionProps> = ({
  color = 'transparent',
  id,
  children,
  paddingTop,
  paddingBottom,
  overrideOver,
  ...otherProps
}) => {
  return (
    <StyledCustomSection
      id={id ?? undefined}
      color={color}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
      overrideOver={overrideOver}
      {...otherProps}>
      {children}
    </StyledCustomSection>
  )
}
