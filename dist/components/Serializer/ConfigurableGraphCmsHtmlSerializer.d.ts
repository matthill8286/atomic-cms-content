import * as React from 'react';
import { MarginMap, ThemeColors, ThemeFontSizes } from '@matthill8286/atomic-ui';
import { CommonNode } from '../../types/richtext';
interface SerializerCustomProps {
    bold?: boolean;
    headingColor?: ThemeColors;
    color?: ThemeColors | string;
    linkColor?: ThemeColors | string;
    linkPadding?: string;
    linkBold?: boolean;
    textAlign?: 'left' | 'right' | 'center';
    contentAlign?: 'left' | 'right' | 'center';
    primaryColor?: ThemeColors | string;
    fontSize?: ThemeFontSizes;
    margins?: MarginMap;
    underline?: boolean;
    withIconOnLink?: boolean;
    inline?: boolean;
    linkScale?: 'small' | 'large';
    forceNewTab?: boolean;
    allowfullscreen?: boolean;
}
/**
 * @description Partially applied function that applies rich text modifiers
 * @param customProps {Object}
 * @param node {Object}
 * @param childText {String}
 * @memberOf ConfigurableGraphCmsHtmlSerializer
 */
export declare const ConfigurableGraphCmsHtmlSerializer: (customProps?: SerializerCustomProps) => (render: CommonNode) => React.ReactNode;
export {};
//# sourceMappingURL=ConfigurableGraphCmsHtmlSerializer.d.ts.map