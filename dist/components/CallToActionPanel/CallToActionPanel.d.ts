import React, { FC } from 'react';
import { ThemeColors, CallToActionPanelProps } from '@matthill8286/atomic-ui';
export declare type SelectableOrientation = 'left' | 'right';
export interface PublicCallToActionPanelProps extends Omit<CallToActionPanelProps, 'alignment'> {
    sectionColor?: ThemeColors;
    rightOrientation?: boolean;
    routeContext?: string;
    shoeFeatured?: boolean;
    isOpenAsset?: boolean;
    richTextCopy?: string | React.ReactNode;
}
export declare const CmsCallToActionPanel: FC<PublicCallToActionPanelProps>;
//# sourceMappingURL=CallToActionPanel.d.ts.map