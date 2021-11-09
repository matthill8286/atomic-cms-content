import {spacing, styled} from '@matthill8286/atomic-ui';

export const StyledTextSection = styled.div<{active?: boolean}>`
  ${({active}) => {
    if (active) {
      return `padding-top: ${spacing.base.md}`;
    }
    return ``;
  }}
`;
