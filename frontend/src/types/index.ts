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

interface IImage {
  thumbnail: string;
  original: string;
}

interface ISeo {
  metaTitle: string;
  metaDescription: string;
  ogTitle: string;
  ogDescription: string;
  ogImage: IImage;
  twitterHandle: string;
  twitterCardType: string;
  metaTags: string;
  canonicalUrl: string;
  keywords: string[];
  author: string;
  ogImageAlt: string;
  faviconUrl: string;
  appleIconUrl: string;
  manifestUrl: string;
}

export interface ISite {
  title: string;
  defaultTitle: string;
  subtitle: string;
  logo: IImage;
}

export interface ISettings {
  seo?: ISeo;
  site: ISite;
}

export interface ISettingsProviderProps {
  initialValues?: ISettings;
  [key: string]: unknown;
}

export interface ISeoProps {
  title: string;
  description: string;
  url: string;
}

export type IEnvTypes = 'development' | 'production' | 'test';

export interface IEnvironmentVariables {
  NODE_ENV: IEnvTypes;
  NEXT_PUBLIC_WEBSITE_URL: string;
}
