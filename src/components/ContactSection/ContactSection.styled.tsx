import { css, styled } from '@matthill8286/atomic-ui'

export const StyledPaddedSection = styled.div<{
  align?: string
  justify?: string
  alignText?: string
  withPadding?: boolean
}>(
  ({ theme, align = 'flex-start', justify, alignText = 'left', withPadding }) =>
    css`
      padding: ${withPadding && theme.spacing.base.xs};
      align-items: ${align};
      justify-content: ${justify};
      text-align: ${alignText};
      flex-direction: column;
      height: 100%;
      display: flex;
    `
)
