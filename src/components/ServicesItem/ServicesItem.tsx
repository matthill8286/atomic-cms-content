import React from 'react'
import { ServicesItemProps, ServicesVariant } from './ServicesItem.interface'
import { css, styled, Picture, CopyText, Heading } from '@matthill8286/atomic-ui'

export const ServicesItemImage = styled(Picture)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.2;
  filter: alpha(opacity=20);
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';
  transition: all 0.3s linear;
  z-index: 1;

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .img-cover {
      display: none;
      visibility: hidden;
    }
  }
`

export const ServicesWrapper = styled.div<{ variant: ServicesVariant }>`
  position: relative;
  width: 100%;
  height: 100%;
  transition: all 0.3s linear;
  z-index: 10;
  padding: ${({ theme }) => theme.spacing.base.md};
  background: ${({ variant, theme }) =>
      variant === 'light' ? theme.color.white : theme.color.black}
    no-repeat center center;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
  }

  &:hover {
    transition: all 0.3s linear;

    img {
      opacity: 0;
      filter: alpha(opacity=0);
      -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
      transition: all 0.3s linear;
    }

    .the-overline {
      background: ${({ variant, theme }) =>
        variant === 'light' ? theme.color.black : theme.color.alert};
    }
  }
`

export const ServicesItemContent = styled.div`
  position: relative;
  z-index: 3;
`

export const PostTitle = styled(Heading)<{ variant: ServicesVariant }>`
  transition: all 0.3s linear;

  ${({ theme, variant }) =>
    variant === 'light'
      ? css`
          &:hover {
            color: #ff264a;

            .the-overline {
              background: #fff;
            }
          }
        `
      : css`
          color: white;
          &:hover {
            color: #fff;

            .the-overline {
              background: #ff264a;
            }
          }
        `}
`

export const ServicesItem: React.FC<ServicesItemProps> = ({
  title,
  description,
  backgroundImage,
  number,
  variant,
  withOverline = true,
  limitLines,
  children,
}) => {
  return (
    <ServicesWrapper variant={variant}>
      <ServicesItemContent>
        <div className="inner-divider" />

        <div className="post-all inner-spacer-services">
          <Heading scale="level-5" margin="0" className="services-sub-header-dark">
            {number}
          </Heading>

          <div className="inner-divider-half" />

          {withOverline && <div className="the-overline services-dark the-overline-services" />}

          <div className="inner-divider-half" />

          <PostTitle scale="level-2" tag="div" uppercase variant={variant}>
            {title}
          </PostTitle>

          <div className="inner-divider-services" />

          <div className="section-txt-services section-txt-services-dark">
            <CopyText limitLines={limitLines} color="grey4" textAlign="left">
              {description}
            </CopyText>
            {children}
          </div>
        </div>

        <div className="inner-divider" />
      </ServicesItemContent>

      <ServicesItemImage alt="Services Img" src={backgroundImage} />
    </ServicesWrapper>
  )
}
