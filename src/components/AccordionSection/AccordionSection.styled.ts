import {styled, css, spacing} from '@matthill8286/atomic-ui';

import {StyledAccordionWrapperProps} from './AccordionSection.types';

export const StyledAccordionWrapper = styled.div<StyledAccordionWrapperProps>`
  margin-top: ${spacing.base.xxl};
  font-family: ${({theme}) => theme.font.family.default};
  ${({theme, textColor}) =>
    textColor &&
    css`
      color: ${theme.color[textColor]};
    `}
`;
