import { css, styled } from '@matthill8286/atomic-ui'

export const StyledPaddedSection = styled.div(
  ({ theme }) =>
    css`
      padding: ${theme.spacing.base.md};
    `
)
