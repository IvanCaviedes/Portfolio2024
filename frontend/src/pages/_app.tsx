/* eslint-disable @typescript-eslint/naming-convention */
import { JSX } from 'react';

import '@/styles/globals.css';
import BlankLayout from '@/components/layouts/blank';
import DefaultSeo from '@/components/ui/default-seo';
import AppSettingsProvider from '@/providers/app-settings-provider';
import { IAppPropsWithLayout } from '@/types';

export default function App({
  Component,
  pageProps,
}: IAppPropsWithLayout): JSX.Element {
  const Layout = Component.Layout ?? BlankLayout;
  return (
    <AppSettingsProvider>
      <DefaultSeo />
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </AppSettingsProvider>
  );
}
