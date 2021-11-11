import { Card, css, media, Picture, styled } from '@matthill8286/atomic-ui'
import { CustomSection } from '../CustomSection'

export const StyledPaddedSection = styled.div(
  ({ theme }) =>
    css`
      padding-left: ${theme.spacing.base.xl};

      > p {
        margin-bottom: ${theme.spacing.base.xs};
      }
    `
)

export const StyledProfileDetailsColumn = styled.div`
  justify-content: flex-start;
  align-content: flex-start;
  display: flex;
  flex-grow: 1;
`

export const StyledCard = styled(Card)`
  display: flex;
  flex-direction: row;
`

export const StyledAvatarWrapper = styled.div`
  justify-content: center;
  align-content: flex-start;
  display: flex;
  flex-basis: 100px;
`

export const StyledAvatar = styled(Picture)`
  height: 90px;
  width: 90px;
  margin: 0 auto;
`

export const StyledRelative = styled.div`
  position: relative;
`

export const StyledProfileSection = styled(CustomSection)(
  ({ theme }) =>
    css`
      ${media.maxSm} {
        margin-bottom: ${theme.spacing.base.xxl};
      }
    `
)
