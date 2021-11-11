# Color Palette

These colors can be extracted from the theme via those keys: `theme.color[colorName]`

For example within a styled component:

```
import { styled } from '@excelwithbusiness/webmobile-sc-components'

export const StyledElement = styled.div`
  background: ${({ theme }) => theme.color.primary};
`
```
