import { FC, JSX, ReactNode } from 'react';

import { SettingsProvider } from '@/contexts/settings.context';

// eslint-disable-next-line react/require-default-props
const AppSettings: FC<{ children?: ReactNode }> = (props): JSX.Element => {
  return <SettingsProvider {...props} />;
};

export default AppSettings;
