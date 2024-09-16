/* eslint-disable @typescript-eslint/naming-convention */
import { JSX } from 'react';

import '@/styles/globals.css';
import DefaultSeo from '@/components/common/default-seo';
import BlankLayout from '@/components/layouts/blank';
import { IAppPropsWithLayout } from '@/types';

export default function App({
  Component,
  pageProps,
}: IAppPropsWithLayout): JSX.Element {
  const Layout = Component.Layout ?? BlankLayout;
  return (
    <>
      <DefaultSeo />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
