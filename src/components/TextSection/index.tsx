import React from 'react';
import {
  Grid,
  Cell,
  Row,
  Offset,
  Heading,
  Typo,
  styled,
  useMultiViewModalAction,
  Link,
} from '@matthill8286/atomic-ui';
import {TextSectionProps} from './TextSection.types';
import {StyledTextSection} from './TextSection.styled';
import {CustomSection} from '../CustomSection';
import {Serializer, ConfigurableGraphCmsHtmlSerializer} from '../Serializer';

export * from './TextSection.types';

const StyledTypoWrapper = styled(Typo)`
  margin: 24px 0;
`;

export const TextSection: React.FC<TextSectionProps> = ({
  richText,
  title,
  sectionColor,
  branded,
  active,
  anchorId,
  textColor,
  headingColor,
  headingsBold,
  paddingTop,
  paddingBottom,
  type = 'Home',
}) => {
  const setBranding = branded ? 'white' : 'grey5';
  const {setActive, setView} = useMultiViewModalAction();
  return (
    <CustomSection
      color={branded ? 'primary' : sectionColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row noMargin>
        <Cell columns={12} colsSm={8} colsXs={4}>
          <Heading
            weight="bold"
            scale="level-2"
            textAlign="center"
            margin="xl 0"
          >
            {title}
          </Heading>
        </Cell>
      </Row>
      <Grid>
        <Row noMargin>
          <Offset colsXl={1} colsLg={1} colsMd={0} colsSm={0} colsXs={0} />
          <Cell colsXl={10} colsLg={10} colsMd={8} colsSm={8} colsXs={4}>
            <StyledTextSection
              color={textColor}
              active={active}
              id={anchorId ?? undefined}
            >
              {Serializer(
                richText,
                ConfigurableGraphCmsHtmlSerializer({
                  inline: true,
                  bold: headingsBold,
                  color: setBranding,
                  fontSize: '17px',
                  textAlign: branded ? 'center' : 'left',
                  headingColor: branded ? 'white' : headingColor,
                })
              )}
              {type === 'Policy' && (
                <>
                  <Heading scale="level-3" tag="h3" weight="semibold">
                    Changing cookie settings
                  </Heading>
                  <StyledTypoWrapper
                    tag="p"
                    fontSize={{
                      desktop: '17px',
                      mobile: '15px',
                    }}
                    textAlign={branded ? 'center' : 'left'}
                    color={setBranding}
                  >
                    You can manage your cookie preferences{' '}
                    <Link
                      href="#"
                      color="primary"
                      inline
                      underline
                      onClick={e => {
                        e.preventDefault();
                        setView('cookie-2');
                        setActive(true);
                      }}
                    >
                      here
                    </Link>
                  </StyledTypoWrapper>
                </>
              )}
            </StyledTextSection>
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
