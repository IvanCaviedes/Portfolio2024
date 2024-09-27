import { JSX, FC, ReactNode } from 'react';

import ErrorMessage from '@/components/ui/error-message';
import Loader from '@/components/ui/loader';
import { useLoadSettings } from '@/hooks/useLoadSettings';

const SettingProvider: FC<{ children: ReactNode }> = ({
  children,
}): JSX.Element => {
  const { isLoading, error } = useLoadSettings();

  if (isLoading) {
    return <Loader color="red-400" type="ThreeDots" />;
  }

  if (error) {
    return <ErrorMessage message={error.message} />;
  }

  return <>{children}</>;
};

export default SettingProvider;
