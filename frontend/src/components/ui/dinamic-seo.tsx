import { JSX, FC } from 'react';

import { NextSeo } from 'next-seo';

import Environments from '@/config/environments';
import { ISeoProps } from '@/types';

const DinamicSeo: FC<ISeoProps> = ({
  title,
  description,
  url,
}): JSX.Element => {
  const websiteUrl = Environments.NEXT_PUBLIC_WEBSITE_URL;
  const pageUrl = `${websiteUrl}/${url}`;
  return (
    <NextSeo
      description={description}
      openGraph={{
        title,
        description,
        url: pageUrl,
      }}
      title={title}
    />
  );
};
export default DinamicSeo;
