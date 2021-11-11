import { css, media, Picture, styled } from '@matthill8286/atomic-ui'
import { CustomSection } from '../CustomSection'

export const StyledPaddedSection = styled.div(
  ({ theme }) =>
    css`
      padding: ${theme.spacing.base.xl} ${theme.spacing.base.md} ${theme.spacing.base.xxl}
        ${theme.spacing.base.xl};

      > p {
        margin-bottom: ${theme.spacing.base.xs};
      }
    `
)

export const StyledAvatar = styled(Picture)`
  position: absolute;
  top: -42px;
  width: 90px;
  height: 90px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-content: center;
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
