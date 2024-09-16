import { JSX } from 'react';

import { DefaultSeoProps, DefaultSeo as NextDefaultSeo } from 'next-seo';

const DefaultSeo = ({ ...props }: DefaultSeoProps): JSX.Element => {
  return <NextDefaultSeo {...props} />;
};

export default DefaultSeo;
