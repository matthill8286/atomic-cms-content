import React, {FC} from 'react';
import {useHistory} from 'react-router-dom';
import {
  Row,
  Cell,
  styled,
  AssetMeta,
  Heading,
  Grid,
} from '@matthill8286/atomic-ui';
import {ConfigurableGraphCmsHtmlSerializer, Serializer} from '../Serializer';
import {CustomSection} from '../CustomSection';
import {ProfileTileRows} from '../ProfileTileRows';
import {FocusedSectionInterface} from './FocusedSection.interface';

export const DescriptionWrapper = styled.div`
  margin: ${({theme}) =>
    `${theme.spacing.base.md} 0 ${theme.spacing.base.lg} 0`};
`;

export const FocusedSection: FC<FocusedSectionInterface> = ({
  title,
  description,
  profileSections,
  profileTitle,
  profileBrandedLabel,
  learningAssetMeta,
  sectionColor,
  paddingTop,
  paddingBottom,
}) => {
  const {
    eventDateLabel,
    typeLabel,
    lengthLabel,
    providerLabel,
    staticEventDateValue,
    staticTypeValue,
    staticProviderValue,
    staticLengthValue,
    staticCompetencyValue,
    launchButtonLabel,
    customExternalUrl,
  } = learningAssetMeta;

  const {location} = useHistory();

  const handleLaunching = () => {
    if (!customExternalUrl) {
      return null;
    }

    window.open(customExternalUrl, '_blank');
  };

  return (
    <CustomSection
      color={sectionColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Grid>
        <Row>
          <Cell columns={12}>
            <Heading scale="level-2" bold textAlign="left" margin="xxl 0 0">
              {title}
            </Heading>
          </Cell>
        </Row>
        <Row noMargin>
          <Cell columns={8} colsSm={8}>
            <DescriptionWrapper>
              {Serializer(
                description?.raw,
                ConfigurableGraphCmsHtmlSerializer({})
              )}
            </DescriptionWrapper>
            <ProfileTileRows
              profileSections={profileSections}
              sectionColor="clear"
              title={profileTitle}
              label={profileBrandedLabel}
            />
          </Cell>
          <Cell columns={4} colsSm={8}>
            <AssetMeta
              list={[
                {label: providerLabel, value: staticProviderValue},
                {label: eventDateLabel, value: staticEventDateValue},
                {label: typeLabel, value: staticTypeValue},
                {label: lengthLabel, value: staticLengthValue},
              ]}
              buttonTextLaunch={launchButtonLabel}
              hideLaunched={location?.state?.embeddedAsset ?? false}
              isLandingPage
              launchHandler={handleLaunching}
              competencyCopy={staticCompetencyValue}
              isCreatePlaylistInteraction={false}
              isBookmarkInteraction={false}
              isShareInteraction={false}
              tags={[]}
            />
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
