import { ReactElement, ReactNode } from 'react';

import { NextPage } from 'next';
import { AppProps } from 'next/app';

import { ITailwindColor, loaderTypeMap } from '@/components/ui/loader/loaders';

export type INextPageWithLayout = NextPage & {
  Layout?: (page: ReactElement) => ReactNode;
  requiresAuth?: boolean;
};

export type IAppPropsWithLayout = AppProps & {
  Component: INextPageWithLayout;
};

export interface IImage {
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

export interface IOverlay {
  isOverlayColor: boolean;
  overlayColor?: string;
  overlayColorRange?: string;
}

export interface IMaintenance {
  isUnderMaintenance: boolean;
  title?: string;
  start?: string;
  until?: string;
  image?: IImage;
  description?: string;
  overlay: IOverlay;
}

export interface ISettings {
  seo?: ISeo;
  site: ISite;
  maintenance: IMaintenance;
}

export interface ISettingsProviderProps {
  initialValues?: ISettings;
  [key: string]: unknown;
}

export interface ISeoProps {
  title: string;
  description?: string;
  url?: string;
}

export type IEnvTypes = 'development' | 'production' | 'test';

export interface IEnvironmentVariables {
  NODE_ENV: IEnvTypes;
  NEXT_PUBLIC_WEBSITE_URL: string;
}

export type ILoaderType = keyof typeof loaderTypeMap;

type IStyle = Record<string, string>;
export interface ILoaderProps {
  type?: ILoaderType;
  height?: string;
  width?: string;
  ariaLabel?: string;
  wrapperStyle?: IStyle;
  wrapperClass?: string;
  visible?: boolean;
  color?: ITailwindColor;
}

export interface IError {
  message: string;
}

export interface IUseLoadSettings {
  isLoading: boolean;
  error: IError | null;
  data: unknown;
}

export interface ICountTimerProps {
  date: Date;
  title?: string;
}

export interface ICountDownDisplayProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export interface ITimeUnitProps {
  value: number;
  label: string;
}
