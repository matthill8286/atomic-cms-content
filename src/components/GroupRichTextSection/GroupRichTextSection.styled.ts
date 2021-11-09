import {styled, spacing, breakpoints} from '@matthill8286/atomic-ui';

export const StyledCardRichText = styled.div`
  display: flex;
  flex-direction: row;
  p {
    margin: 0;
  }

  @media (max-width: ${breakpoints.lg}px) {
    flex-direction: column;
    section {
      margin-top: ${spacing.base.md};
    }
  }
`;

export const StyledCardHeadline = styled.div`
  margin-bottom: ${spacing.base.md};
`;

export const StyledGroupRichText = styled.div`
  padding-top: ${spacing.base.xl};
`;
