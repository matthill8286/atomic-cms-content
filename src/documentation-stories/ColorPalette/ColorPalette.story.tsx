import { Meta, Story } from '@storybook/react'
import React from 'react'
import { ColorPalette } from './ColorPalette'

export default {
  title: 'CMS Design System/General/Color Palette',
  component: ColorPalette,
} as Meta

const Template: Story = () => <ColorPalette />

const ColorPaletteDefault = Template.bind({})

ColorPaletteDefault.args = {}

ColorPaletteDefault.defaultProps = {}
