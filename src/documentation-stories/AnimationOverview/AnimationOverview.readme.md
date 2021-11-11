# Animation Overview

All animations are exported as styled-component keyframes from `@matthill8286/atomic-ui/animation`.  
Theme object exposes pre-defined transitions: `theme.transition[transitionName]`.

This can be used like this:

```
import { styled, fadeIn } from '@mms/webmobile-sc-components'

export const AnimatedComponent = styled.div`
    animation: ${fadeIn} ${({ theme }) => theme.transition.long} ease-in forwards;
`
```
