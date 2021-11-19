import { FC } from 'react';
import { ThemeColors, CallToActionPanelProps } from '@matthill8286/atomic-ui';
import { RichTextRawDocument } from '../../types/richtext';
export declare type SelectableOrientation = 'left' | 'right';
export interface PublicCallToActionPanelProps extends Omit<CallToActionPanelProps, 'alignment'> {
    sectionColor?: ThemeColors;
    rightOrientation?: boolean;
    routeContext?: string;
    shoeFeatured?: boolean;
    isOpenProduct?: boolean;
    richTextCopy?: RichTextRawDocument | null;
}
export declare const CmsCallToActionPanel: FC<PublicCallToActionPanelProps>;
//# sourceMappingURL=CallToActionPanel.d.ts.map