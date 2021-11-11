import { spacing, styled } from '@matthill8286/atomic-ui'

export const StyledMultiColumnTextSection = styled.div<{ active?: boolean }>`
  ${({ active }) => {
    if (active) {
      return `padding-top: ${spacing.base.md}`
    }
    return `padding: ${spacing.base.md}`
  }}
  line-height: ${({ theme }) => theme.spacing.base.lg}
`
