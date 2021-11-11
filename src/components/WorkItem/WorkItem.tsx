import React, { memo } from 'react'
import { CopyText, HeadingFeatured, Button, Card, Spacer } from '@matthill8286/atomic-ui'
import { WorkItemProps } from './WorkItem.interface'

export const WorkItem: React.MemoExoticComponent<({
  intro,
  title,
  description,
  workText,
  buttonLabel,
  buttonLink,
}: WorkItemProps) => JSX.Element> = memo(
  ({ intro, title, description, workText, buttonLabel, buttonLink }: WorkItemProps) => (
    <Card elevation={0} padding="sm" center={false} noBorder="none">
      <Card elevation={0} padding={{ left: 'md' }} noBorder="none">
        <CopyText weight="semibold" color="black" padding="0">
          {intro}
        </CopyText>
        <Spacer size="xs" />
        <HeadingFeatured color="black" margin="0">
          {title}
        </HeadingFeatured>
        <Spacer size="xs" />
        <CopyText weight="bold" fontSize="lg" color="black">
          {description}
        </CopyText>
        <Spacer size="xs" />
        <CopyText weight="semibold" color="black">
          {workText}
        </CopyText>
        <Spacer size="xs" />
      </Card>
      <Button actionType="ghost" isFlat color="black" weight="bold" href={buttonLink} size="sm">
        {buttonLabel}
      </Button>
    </Card>
  )
)
