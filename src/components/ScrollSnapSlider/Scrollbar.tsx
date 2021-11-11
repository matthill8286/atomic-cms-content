import React from 'react'
import { StyledScrollbar } from './ScrollSnapSlider.styled'

export const Scrollbar: React.FC<{
  sliderRef?: React.RefObject<HTMLDivElement>
}> = ({ sliderRef }) => {
  const [handlePositionLeft, setHandlePositionLeft] = React.useState('0%')
  const [handleWidth, setHandleWidth] = React.useState('0%')
  const [isSliderScrollable, setIsSliderScrollable] = React.useState(false)

  const onSliderScroll = React.useCallback(async () => {
    const scrollLeft = sliderRef?.current?.scrollLeft || 0
    const scrollWidth = sliderRef?.current?.scrollWidth || 0

    setHandlePositionLeft(`${100 * (scrollLeft / (scrollWidth || 1))}%`)

    const clientWidth = sliderRef?.current?.clientWidth || 0
    const newHandleWidth = `${100 * (clientWidth / (scrollWidth || 1))}%`

    setHandleWidth(current => (newHandleWidth !== current ? newHandleWidth : current))

    setIsSliderScrollable(current => {
      if (scrollWidth > clientWidth + 1) {
        if (!current) return true
      } else if (current) {
        return false
      }
      return current
    })
  }, [sliderRef])

  React.useEffect(() => {
    sliderRef?.current?.removeEventListener('scroll', onSliderScroll)
    sliderRef?.current?.addEventListener('scroll', onSliderScroll)
    onSliderScroll()

    return () => sliderRef?.current?.removeEventListener('scroll', onSliderScroll)
  }, [onSliderScroll, sliderRef])

  if (!isSliderScrollable) return null

  return (
    <StyledScrollbar isSliderScrollable={isSliderScrollable}>
      <span style={{ left: handlePositionLeft, width: handleWidth }} />
    </StyledScrollbar>
  )
}
