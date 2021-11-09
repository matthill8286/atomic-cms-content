import React, {FC} from 'react';
import {
  Grid,
  Cell,
  Row,
  ThemeColors,
  CallToActionPanel,
  CallToActionPanelProps,
  Asset,
} from '@matthill8286/atomic-ui';
import {CustomSection} from '../CustomSection';
import {formatToStaticAsset} from '../../helpers';
import {useHistory} from 'react-router-dom';

export type SelectableOrientation = 'left' | 'right';

const orientation: {[key in SelectableOrientation]: SelectableOrientation} = {
  right: 'right',
  left: 'left',
};

export interface PublicCallToActionPanelProps
  extends Omit<CallToActionPanelProps, 'alignment'> {
  sectionColor?: ThemeColors;
  rightOrientation?: boolean;
  routeContext?: string;
  shoeFeatured?: boolean;
  isOpenAsset?: boolean;
  richTextCopy?: string | React.ReactNode;
}

export const CmsCallToActionPanel: FC<PublicCallToActionPanelProps> = ({
  element,
  children,
  image,
  svg,
  withLQIP = false,
  showReadMore,
  showMore,
  showFeatured,
  asset,
  isOpenAsset,
  rightOrientation,
  onAssetClick,
  sectionColor,
  routeContext,
  richTextCopy,
}): JSX.Element => {
  const formatAsset = asset ? formatToStaticAsset([{...asset}]) : null;
  const history = useHistory();
  return (
    <CustomSection color={sectionColor} paddingTop={0} paddingBottom={0}>
      <Grid>
        <Row noMargin>
          <Cell colsXl={12} colsLg={12} colsMd={8} colsSm={8} colsXs={4}>
            <CallToActionPanel
              image={image}
              withLQIP={withLQIP}
              showReadMore={showReadMore}
              showMore={showMore}
              showFeatured={showFeatured}
              isOpenAsset={isOpenAsset}
              element={element}
              richTextCopy={richTextCopy}
              asset={formatAsset?.[0] ?? null}
              onAssetClick={() => {
                if (asset?.to) {
                  history.push({
                    pathname: asset?.to,
                    // @ts-ignore
                    state: {embeddedAsset: asset.embeddedAsset},
                  });
                }

                return null;
              }}
              alignment={
                rightOrientation ? orientation.right : orientation.left
              }
            />
          </Cell>
        </Row>
      </Grid>
    </CustomSection>
  );
};
