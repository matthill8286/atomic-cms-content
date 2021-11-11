import React, { memo } from 'react'
import { Button, CopyText, Spacer, Typo } from '@matthill8286/atomic-ui'
import { NewsDateStyled, NewsHeadingStyled, NewsImageStyled } from './News.styled'
import './style.css'
import { Overline } from '../Overline'

export interface INewsItem {
  image: string
  title: string
  description: string
  date: string
  newsText: string
  buttonLabel: string
  buttonLink: string
}

export const NewsItem = memo(
  ({ image, title, description, date, newsText, buttonLabel, buttonLink }: INewsItem) => (
    <div className="news-item">
      <figure className="news-content">
        <NewsImageStyled alt="News Img" src={image} />
        <figcaption>
          <div className="inner-divider-news-half" />

          <Overline type="news" />

          <Spacer size="xl" />

          <NewsHeadingStyled weight="bold" scale="level-3">
            {title}
          </NewsHeadingStyled>

          <Spacer size="xl" />

          <CopyText fontSize="xxxxxl" className="post-all-heading">
            {description}
          </CopyText>

          <Spacer size="xl" />

          <NewsDateStyled scale="level-5">{date}</NewsDateStyled>

          <Spacer size="xxl" />

          <CopyText tag="div" textAlign="center" lineHeight="md">
            {newsText}
          </CopyText>

          <Spacer size="xl" />

          <Button
            actionType="ghost"
            size="sm"
            className="the-button"
            data-toggle="modal"
            href={buttonLink}>
            {buttonLabel}
          </Button>
        </figcaption>
      </figure>
    </div>
  )
)
