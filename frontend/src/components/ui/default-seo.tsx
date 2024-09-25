import { JSX, useState } from 'react';

import { DefaultSeoProps, DefaultSeo as NextDefaultSeo } from 'next-seo';

import { useSettingsStore } from '@/store/settings';

const DefaultSeo = ({ ...props }: DefaultSeoProps): JSX.Element => {
  const { site, seo } = useSettingsStore((e) => e.settings);
  const [title] = useState(seo?.metaTitle ?? site.title);
  const [description] = useState(seo?.ogDescription ?? site.subtitle);

  return (
    <NextDefaultSeo
      additionalLinkTags={[
        {
          rel: 'icon',
          href: seo?.faviconUrl ?? '',
          type: 'image/x-icon',
        },
        {
          rel: 'apple-touch-icon',
          href: seo?.appleIconUrl ?? '',
          sizes: '180x180',
        },
        {
          rel: 'manifest',
          href: seo?.manifestUrl ?? '',
        },
      ]}
      additionalMetaTags={[
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1 maximum-scale=1',
        },
        {
          name: 'format-detection',
          content: 'telephone=no',
        },
        {
          name: 'theme-color',
          content: '#ffffff',
        },
        {
          name: 'apple-mobile-web-app-title',
          content: title,
        },
        {
          name: 'apple-mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'mobile-web-app-capable',
          content: 'yes',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
        {
          name: 'keywords',
          content: seo?.keywords.join(',') ?? '',
        },
        {
          name: 'author',
          content: seo?.author ?? '',
        },
        {
          property: 'dc:creator',
          content: seo?.author ?? '',
        },
        {
          property: 'og:image:alt',
          content: seo?.ogImageAlt ?? title,
        },
      ]}
      canonical={seo?.canonicalUrl}
      defaultTitle={site.defaultTitle}
      description={description}
      openGraph={{
        title: seo?.ogTitle ?? title,
        description: seo?.ogDescription ?? description,
        type: 'website',
        locale: 'en_US',
        siteName: site.title,
        images: [
          {
            url: seo?.ogImage.original ?? '',
            width: 800,
            height: 600,
            alt: seo?.ogImageAlt ?? title,
          },
        ],
      }}
      title={title}
      titleTemplate={`%s | ${site.title}`}
      twitter={{
        handle: seo?.twitterHandle ?? '',
        site: site.title,
        cardType: seo?.twitterCardType ?? '',
      }}
      {...props}
    />
  );
};

export default DefaultSeo;
