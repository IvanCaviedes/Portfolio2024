import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

export type INextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode;
  requiresAuth?: boolean;
};

export type IAppPropsWithLayout = AppProps & {
  Component: INextPageWithLayout;
};

// export type ISettings = Record<string, unknown>;

interface IOgImage {
  id: number;
  thumbnail: string;
  original: string;
}

interface ISeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: IOgImage;
  twitterHandle: string;
  twitterCardType: string;
  metaTags: string;
  canonicalUrl: string;
}

export interface ISettings {
  seo: ISeo;
}

export interface ISettingsProviderProps {
  initialValues?: ISettings;
  [key: string]: unknown;
}
