import {css, styled} from '@matthill8286/atomic-ui';
import {CustomSection} from '../CustomSection';

export const StyledPaddedEmbed = styled.div(
  ({theme}) =>
    css`
      padding: ${theme.spacing.base.md};
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 100%;
    `
);

export const StyledPaddedEmbedSection = styled(CustomSection)(
  ({theme}) =>
    css`
      padding: ${theme.spacing.base.md};
      position: relative;
      overflow: hidden;
      width: 100%;
      padding-top: 56.25%;
      margin-bottom: calc(${theme.spacing.base.xl}* 2);
    `
);
