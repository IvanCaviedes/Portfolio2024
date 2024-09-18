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
}

export interface ISite {
  title: string;
  defaultTile: string;
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
