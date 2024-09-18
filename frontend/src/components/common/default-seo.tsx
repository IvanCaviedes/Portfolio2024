import { JSX } from 'react';

import { DefaultSeoProps, DefaultSeo as NextDefaultSeo } from 'next-seo';

import { UseSettingsContext } from '@/contexts/settings.context';

const DefaultSeo = ({ ...props }: DefaultSeoProps): JSX.Element => {
  const { seo, site } = UseSettingsContext();
  return (
    <NextDefaultSeo
      canonical={seo?.canonicalUrl}
      defaultTitle={site.defaultTile}
      description={seo?.ogDescription ?? site.subtitle}
      title={seo?.metaTitle ?? site.title}
      {...props}
    />
  );
};

export default DefaultSeo;
