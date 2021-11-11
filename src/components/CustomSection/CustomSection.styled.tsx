import { styled, Section } from '@matthill8286/atomic-ui'
import { CustomSectionProps } from './CustomSection.types'

export const StyledCustomSection = styled(Section)<CustomSectionProps>`
  background-color: ${({ color, theme }) => color && theme.color[color]};
  padding-top: ${({ theme, paddingTop }) => theme.spacing.base[paddingTop]};
  padding-bottom: ${({ theme, paddingBottom }) => theme.spacing.base[paddingBottom]};
  overflow: ${({ overrideOver }) => overrideOver && 'unset !important'};

  ul,
  ol,
  p {
    a {
      border-bottom: 1px solid;
      border-color: ${({ theme }) => theme.color.primary};
      color: ${({ theme }) => theme.color.primary};
    }
  }
`
