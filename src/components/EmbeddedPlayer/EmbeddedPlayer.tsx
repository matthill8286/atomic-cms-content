import React from 'react'
import { EmbeddedPlayerProps } from './EmbeddedPlayer.interface'

export const EmbeddedPlayer: React.FC<EmbeddedPlayerProps> = ({
  title = '',
  width = '100%',
  height = '100%',
  embedUrl,
  frameBorder = '0',
  features = ['picture-in-picture', 'showinfo=0'],
  allowfullscreen,
  ...props
}) => {
  return (
    <iframe
      title={title}
      width={width}
      height={height}
      src={embedUrl}
      frameBorder={frameBorder}
      allow={features.join()}
      allowFullScreen={allowfullscreen}
      {...props}
    />
  )
}
