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

export type ISettings = Record<string, unknown>;

export interface ISettingsProviderProps {
  initialValues?: ISettings;
  [key: string]: unknown;
}
