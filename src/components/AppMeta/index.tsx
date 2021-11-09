import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import {
  GraphCmsInstanceContext,
  InstanceContextTypes,
} from '@/context/instance';
import { AppMetaProps, AdditionalMeta } from './AppMeta.interface';

const MAX_LENGTH_OG_DESCRIPTION = 127;

export const AppMeta: React.FC<AppMetaProps> = ({
  title = '',
  description = '',
  generator = 'webmobile-landing-pages',
  keywords,
  canonical = '',
  imageUrl = '',
  prev,
  next,
  type = 'webpage',
  preconnectLinkList = [],
  prefetchLinkList = [],
  additionalMetas = [],
  includeProductInTitle = true,
  productName = '',
  children,
}) => {
  const { instance } = useContext<InstanceContextTypes>(
    GraphCmsInstanceContext
  );

  const additionalMeta: AdditionalMeta[] = additionalMetas.map(
    (meta, index) => ({
      key: index.toString(),
      ...meta,
    })
  );

  const isRobotsInAdditionalMeta = additionalMeta.find(
    item => item.name === 'robots'
  );

  !isRobotsInAdditionalMeta &&
    additionalMeta.push({ name: 'robots', content: 'follow' });

  const titleTemplate = includeProductInTitle ? `%s | ${productName}` : '%s';

  const meta: AdditionalMeta[] = [
    { name: 'description', content: description || '' },
    { name: 'keywords', content: [...(keywords || [])] },
    { name: 'generator', content: generator },
    { property: 'og:title', content: title || '' },
    {
      property: 'og:description',
      content: (description || '').slice(0, MAX_LENGTH_OG_DESCRIPTION).trim(),
    },
    { property: 'og:type', content: type },
    { property: 'og:image', content: imageUrl },
    { property: 'og:site_name', content: productName },
    { property: 'og:url', content: canonical },
    ...additionalMeta,
  ];

  const links = [
    ...(canonical ? [{ rel: 'canonical', href: canonical }] : []),
    ...(prev ? [{ rel: 'prev', href: prev }] : []),
    ...(next ? [{ rel: 'next', href: next }] : []),
    ...preconnectLinkList.map(link => ({ rel: 'preconnect', href: link })),
    ...prefetchLinkList.map(link => ({
      rel: 'preconnect dns-prefetch',
      href: link,
    })),
    ...(instance?.favicon
      ? [
          {
            rel: 'icon',
            href: instance?.favicon.url,
            type: 'image/png',
            sizes: '16x16',
          },
        ]
      : []),
  ];

  return (
    <Helmet
      titleTemplate={titleTemplate}
      defaultTitle={title}
      htmlAttributes={{ lang: 'en-GB' }}
      link={
        instance?.favicon
          ? [
              {
                rel: 'icon',
                type: 'image/png',
                href: instance?.favicon.url,
                sizes: '16x16',
              },
            ]
          : []
      }
    >
      {meta.map((entry, index) => {
        return <meta key={index} {...entry} />;
      })}
      {links.map((entry, index) => {
        return <link key={index} {...entry} />;
      })}
      <title>{title}</title>
      {children}
    </Helmet>
  );
};

export * from './AppMeta.interface';
