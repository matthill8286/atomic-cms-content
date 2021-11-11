import React, { FC, useMemo } from 'react'
import {
  Row,
  Cell,
  TwelveColumn,
  styled,
  CopyText,
  Heading,
  MediaStyleSwitch,
  media,
} from '@matthill8286/atomic-ui'
import { ConfigurableGraphCmsHtmlSerializer, Serializer } from '../Serializer'
import { CustomSection } from '../CustomSection'
import {
  StyledAvatar,
  StyledAvatarWrapper,
  StyledPaddedSection,
  StyledProfileSection,
  StyledCard,
  StyledProfileDetailsColumn,
} from './ProfileTileRows.styled'
import {
  ProfileSectionProps,
  ProfileSectionsProps,
} from '../ProfileTileColumns/ProfileTileColumns.interface'
import { ProfileTileColumn, ProfileTileColumns } from '../ProfileTileColumns'

const StyledWrapper = styled.div<{ marginTop: string }>`
  margin-top: ${({ theme, marginTop }) => theme.spacing.base[marginTop] ?? 0};
`

export const SpeakerHeader = ({ title, name, marginTop }) => (
  <StyledWrapper marginTop={marginTop}>
    <CopyText
      limitLines={1}
      fontSize="sm"
      as="div"
      toUpperCase
      weight="bold"
      display="inline-flex"
      margin="0 sm xs 0">
      {title}
    </CopyText>
    <Heading
      color="primary"
      scale="level-2"
      tag="h2"
      lineHeight="sm"
      fontFamily="default"
      weight="bold">
      {name}
    </Heading>
  </StyledWrapper>
)

export const ProfileTileRow: FC<ProfileSectionProps> = ({ profileAvatar, profileInformation }) => {
  return (
    <StyledProfileSection>
      <StyledCard elevation={0} elevationHover={0} noBorder={'none'} display="flex" surface="clear">
        <StyledAvatarWrapper>
          <StyledAvatar alt={profileAvatar?.altText} src={profileAvatar?.url} rounded />
        </StyledAvatarWrapper>
        <StyledProfileDetailsColumn>
          <StyledPaddedSection>
            {Serializer(
              profileInformation?.raw,
              // @ts-ignore
              ConfigurableGraphCmsHtmlSerializer({
                textAlign: 'left',
                inline: true,
                withIconOnLink: true,
                linkPadding: 'sm 0',
                linkColor: 'primary',
                linkScale: 'small',
                margins: 'xs 0',
              })
            )}
          </StyledPaddedSection>
        </StyledProfileDetailsColumn>
      </StyledCard>
    </StyledProfileSection>
  )
}

export const BrandedHeadingWrapper = styled.div`
  margin: ${({ theme }) => `${theme.spacing.base.md} 0 ${theme.spacing.base.lg} 0`};

  ${media.maxSm} {
    margin-bottom: ${({ theme }) => theme.spacing.base.xxxl};
  }
`

export const ProfileTileRows: FC<ProfileSectionsProps> = ({
  profileSections,
  label,
  title,
  sectionColor,
  paddingTop,
  paddingBottom,
}) => {
  const profiles = useMemo(
    () =>
      profileSections?.map(({ profileAvatar, profileInformation }, index) => (
        <Cell columns={12 as TwelveColumn} key={`RichText-${index}`}>
          <ProfileTileRow profileAvatar={profileAvatar} profileInformation={profileInformation} />
        </Cell>
      )),
    [profileSections]
  )
  const mobileProfiles = useMemo(
    () =>
      profileSections?.map(({ profileAvatar, profileInformation }, index) => (
        <Cell columns={12 as TwelveColumn} key={`RichText-${index}`}>
          <ProfileTileColumn
            profileAvatar={profileAvatar}
            profileInformation={profileInformation}
          />
        </Cell>
      )),
    [profileSections]
  )

  const mobileViewWithDefault = (
    <>
      <MediaStyleSwitch query={media.maxSm} activeDisplay="block" inactiveDisplay="none">
        {mobileProfiles}
      </MediaStyleSwitch>
      <MediaStyleSwitch query="desktop" activeDisplay="block" inactiveDisplay="none">
        {profiles}
      </MediaStyleSwitch>
    </>
  )

  return (
    <CustomSection color={sectionColor} paddingTop={paddingTop} paddingBottom={paddingBottom}>
      <BrandedHeadingWrapper>
        <SpeakerHeader title={title} name={label} marginTop={null} />
      </BrandedHeadingWrapper>
      {mobileViewWithDefault}
    </CustomSection>
  )
}
