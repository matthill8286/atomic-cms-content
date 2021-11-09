import React, {FC, useMemo} from 'react';
import {
  Row,
  Cell,
  TwelveColumn,
  Heading,
  Card,
} from '@matthill8286/atomic-ui';
import {ConfigurableGraphCmsHtmlSerializer, Serializer} from '../Serializer';
import {CustomSection} from '../CustomSection';
import {
  StyledAvatar,
  StyledPaddedSection,
  StyledProfileSection,
  StyledRelative,
} from './ProfileTileColumns.styled';
import {
  ProfileSectionProps,
  ProfileSectionsProps,
} from './ProfileTileColumns.interface';
import {StyledAvatarWrapper} from '../ProfileTileRows/ProfileTileRows.styled';

export const ProfileTileColumn: FC<ProfileSectionProps> = ({
  profileAvatar,
  profileInformation,
}) => {
  return (
    <StyledProfileSection>
      <StyledRelative>
        <Card elevation={1} elevationHover={0} surface="white">
          <StyledAvatarWrapper>
            <StyledAvatar
              alt={profileAvatar?.altText}
              src={profileAvatar?.url}
              rounded
            />
          </StyledAvatarWrapper>
          <StyledPaddedSection>
            {Serializer(
              profileInformation?.raw,
              ConfigurableGraphCmsHtmlSerializer({
                textAlign: 'center',
                contentAlign: 'center',
              })
            )}
          </StyledPaddedSection>
        </Card>
      </StyledRelative>
    </StyledProfileSection>
  );
};

export const ProfileTileColumns: FC<ProfileSectionsProps> = ({
  profileSections,
  title,
  sectionColor,
  paddingTop,
  paddingBottom,
}) => {
  const profileColumns = useMemo(
    () =>
      profileSections?.map(({profileAvatar, profileInformation}, index) => (
        <Cell
          columns={(12 / profileSections.length) as TwelveColumn}
          key={`RichText-${index}`}
        >
          <ProfileTileColumn
            profileAvatar={profileAvatar}
            profileInformation={profileInformation}
          />
        </Cell>
      )),
    []
  );
  return (
    <CustomSection
      color={sectionColor}
      paddingTop={paddingTop}
      paddingBottom={paddingBottom}
    >
      <Row noMargin>
        <Cell columns={12}>
          <Heading scale="level-2" textAlign="center" margin="xl 0">
            {title}
          </Heading>
        </Cell>
      </Row>
      <CustomSection paddingTop="sm">
        <StyledPaddedSection>
          <Row noMargin>{profileColumns}</Row>
        </StyledPaddedSection>
      </CustomSection>
    </CustomSection>
  );
};
