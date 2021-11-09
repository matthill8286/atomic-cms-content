import { styled, media, CopyText, InfoText } from '@matthill8286/atomic-ui'

export const StyledErrorPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: column;
  justify-content: flex-start;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.base.xl} 0;
  text-align: center;
  ${media.md} {
    margin: 150px 0;
  }
`

interface StyledErrorSvgProps {
  marginLeft: boolean
}

export const StyledErrorImage = styled.div.attrs(() => ({
  className: 'svg-error',
}))<StyledErrorSvgProps>`
  height: 200px;
  width: auto;
  margin-bottom: ${({ theme }) => theme.spacing.base.md};

  ${({ marginLeft }) =>
    marginLeft
      ? `
    margin-left: 50px;
    ${media.md} {
      margin-left: 64px;
    }
  `
      : ''}
  ${media.md} {
    height: 250px;
    margin-bottom: ${({ theme }) => theme.spacing.base.lg};
  }
  > svg {
    height: 250px;
    width: 100%;
    margin: 0 auto;
  }
`

export const StyledErrorHeadingWrapper = styled.div`
  margin-bottom: ${({ theme }) => theme.spacing.base.xs};
  max-width: 350px;
`

export const StyledErrorCopyText = styled(CopyText)`
  margin-bottom: ${({ theme }) => theme.spacing.base.lg};
  ${media.md} {
    margin-bottom: ${({ theme }) => theme.spacing.base.xl};
  }
`

export const StyledErrorCode = styled(InfoText)`
  margin-top: ${({ theme }) => theme.spacing.base.lg};
  color: ${({ theme }) => theme.color.grey4};
`
