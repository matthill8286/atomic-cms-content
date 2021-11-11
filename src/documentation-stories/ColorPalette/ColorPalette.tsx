import * as React from 'react'
import { styled, FlexBox, useTheme, Typo } from '@matthill8286/atomic-ui'

const Container = styled.div`
  display: grid;
  grid-gap: ${({ theme }) => theme.spacing.base.md};
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const Color = styled.div`
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: ${({ theme }) => `0 ${theme.spacing.base.xs} 0 0`};
`

export const ColorPalette: React.FC = () => {
  const theme = useTheme()
  const colors = Object.entries(theme.color)

  return (
    <Container>
      {colors.map(([key, backgroundColor]) => (
        <FlexBox key={key} flexDirection="row" alignItems="center">
          {/* @ts-ignore */}
          <Color style={{ backgroundColor: backgroundColor }} />
          <Typo>{key}</Typo>
        </FlexBox>
      ))}
    </Container>
  )
}
