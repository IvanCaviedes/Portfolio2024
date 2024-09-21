import { FC, JSX, ReactNode } from 'react';

import { useSettingsApi } from '@/api/settings';
import { SettingsProvider } from '@/contexts/settings.context';

// eslint-disable-next-line react/require-default-props
const AppSettingsProvider: FC<{ children?: ReactNode }> = (
  props
): JSX.Element => {
  const { isLoading } = useSettingsApi();
  if (isLoading) {
    return <>Loading</>;
  }
  return <SettingsProvider {...props} />;
};

export default AppSettingsProvider;
