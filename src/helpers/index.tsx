import {Asset} from '@matthill8286/atomic-ui';

export interface ExtendedAsset extends Omit<Asset, 'image'> {
  embeddedAsset: boolean;
  competency: string;
  image: {url: string};
}

export const prepareEntries = pageComponents =>
  pageComponents.entries
    .map(({title, description}) => ({
      title,
      details: description,
    }))
    .map((e, i) =>
      i === 0
        ? {
            ...e,
            isOpenInitially: true,
            noBorderTop: true,
          }
        : e
    );

export const prepareHeroContentProps = (heroBanner, name?: string) => ({
  primary: heroBanner.primaryLabel,
  secondary: heroBanner.secondaryLabel,
  images: heroBanner.image
    ? {
        xl: heroBanner.image.url,
        lg: heroBanner.image.url,
        md: heroBanner.image.url,
        sm: heroBanner.image.url,
      }
    : undefined,
  heroImages: heroBanner.heroImages
    ? {
        xl: heroBanner.heroImages[0].url,
        lg: heroBanner.heroImages[0].url,
        md: heroBanner.heroImages[0].url,
        sm: heroBanner.heroImages[0].url,
      }
    : undefined,
  name,
});

const formatNiceName = (id: number, title: string) =>
  `${id}-${title.toLowerCase().split(' ').join('-')}`;

export const formatToStaticAsset = (assets: ExtendedAsset[]) => {
  const staticAssets = [...(assets || [])];
  return staticAssets?.map(
    ({
      id = 0,
      title,
      provider,
      image,
      locked,
      type,
      __typename,
      duration,
      to,
      embeddedAsset = false,
      competency,
      eventDate,
      featureLabel,
    }) => ({
      id,
      title,
      disabled: locked,
      niceName: formatNiceName(id, title),
      provider: {
        id: 0,
        name: provider,
      },
      type: {
        id: 0,
        name: type || __typename,
      },
      embeddedAsset,
      duration,
      to,
      image: image?.url,
      locked,
      competency,
      featureLabel,
      eventDate,
    })
  );
};
