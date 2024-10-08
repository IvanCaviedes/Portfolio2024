import { JSX, FC, ReactNode } from 'react';

import ErrorMessage from '@/components/ui/error-message';
import Loader from '@/components/ui/loader';
import { useLoadSettings } from '@/hooks/use-load-settings';

const SettingProvider: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const { isLoading, error } = useLoadSettings();

  if (isLoading) {
    return <Loader color="lime-400" type="ThreeDots" />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return <>{children}</>;
};

export default SettingProvider;
