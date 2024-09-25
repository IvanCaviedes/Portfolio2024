/* eslint-disable @typescript-eslint/naming-convention */
import { JSX } from 'react';

import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

import { useSettingsApi } from '@/api/settings';
import BlankLayout from '@/components/layouts/blank';
import Maintenance from '@/components/maintenance';
import DefaultSeo from '@/components/ui/default-seo';
import SettingProvider from '@/providers/settingsProvider';
import { IAppPropsWithLayout } from '@/types';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 300000,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      gcTime: 600000,
      retry: 1,
    },
    mutations: {
      retry: 1,
    },
  },
});

import '@/styles/globals.css';

export const useUpdateSettings = (): { isLoading: boolean } => {
  const { isLoading } = useSettingsApi();
  return { isLoading };
};

export default function App({
  Component,
  pageProps,
}: IAppPropsWithLayout): JSX.Element {
  const Layout = Component.Layout ?? BlankLayout;

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={pageProps.dehydratedState}>
        <SettingProvider>
          <DefaultSeo />
          <Maintenance>
            <Layout {...pageProps}>
              <Component {...pageProps} />
            </Layout>
          </Maintenance>
        </SettingProvider>
      </HydrationBoundary>
    </QueryClientProvider>
  );
}
